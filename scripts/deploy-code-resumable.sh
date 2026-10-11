#!/usr/bin/env bash
# Resumable code deploy.
#
# Same contract as deploy-code.sh — ships .next + src + config, never public/,
# leaves the server untouched until every byte is present and verified — but
# built for a link that drops and a laptop that sleeps:
#
#   * 50 small chunks instead of 10 large ones, so a dropped transfer costs
#     ~6 MB of retransmission rather than ~29 MB.
#   * ONE transfer at a time. Three parallel scp streams on a marginal link
#     simply compete and all three fail.
#   * RESUME. Before sending anything it asks the server which chunks are
#     already there at the right size and skips them. Re-running after a sleep,
#     a dropout or a Ctrl-C picks up where it stopped instead of starting over.
#
# Re-run it as many times as needed; it is idempotent until the overlay step.

set -uo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
KEY="$SCRIPT_DIR/../LightsailDefaultKey-ap-south-1 (1).pem"
[ -f "$KEY" ] || { echo "ERROR: SSH key not found at $KEY" >&2; exit 1; }

HOST="ubuntu@13.201.84.132"
APP_DIR="/home/ubuntu/triveni"
TIMESTAMP=$(date +%Y%m%d_%H%M%S)
BACKUP_DIR="/home/ubuntu/triveni-backup-cro-${TIMESTAMP}"
HOMEPAGE="https://www.trivenicabs.in/"
SAMPLE_IMG="https://www.trivenicabs.in/images/sightseeing/Agra/Taj_mahal.jpg"
NCHUNKS="${DEPLOY_CHUNKS:-50}"
# Seconds a single chunk transfer may take before it is abandoned and retried.
# A 5 MB chunk moves in ~12s on a healthy link, so 90s is generous while still
# catching a stall long before it wastes minutes.
CHUNK_TIMEOUT="${DEPLOY_CHUNK_TIMEOUT:-90}"

SSH_OPTS=(-i "$KEY" -o StrictHostKeyChecking=no -o ServerAliveInterval=15
          -o ServerAliveCountMax=4 -o ConnectTimeout=30)

TARBALL_LOCAL=$(ls -t /tmp/triveni-code-*.tar.gz 2>/dev/null | head -1)
[ -n "$TARBALL_LOCAL" ] || { echo "ERROR: no /tmp/triveni-code-*.tar.gz" >&2; exit 1; }
TARBALL_NAME=$(basename "$TARBALL_LOCAL")
REMOTE="/tmp/${TARBALL_NAME}"
LOCAL_BYTES=$(stat -c%s "$TARBALL_LOCAL")

# Chunk files are namespaced by the tarball they came from. A previous run that
# was interrupted leaves chunks of a DIFFERENT size behind under the old generic
# name; if the new run's names collide with those, the reassembly silently picks
# up both and the archive comes out too large. That is exactly what happened once
# (402,983,553 bytes reassembled against 287,475,850 expected — caught by the
# size gate before anything on the server was touched). A per-tarball prefix makes
# the collision impossible while still letting a re-run of the SAME tarball resume.
TAG=$(echo "$TARBALL_NAME" | sed 's/triveni-code-//; s/\.tar\.gz//')
PREFIX="/tmp/tc${TAG}_"

echo "=== [0/7] $TARBALL_NAME ($LOCAL_BYTES bytes), $NCHUNKS chunks, sequential ==="
echo "    chunk namespace: ${PREFIX}*"

# --- Content sanity gate (same as the original: a gzip-valid archive that was
# --- packed mid-build is the failure mode that once broke the live site).
echo "=== [0b/7] Tarball content sanity ==="
TB_LIST=$(mktemp)
tar tzf "$TARBALL_LOCAL" > "$TB_LIST"
if ! grep -q "^\.next/BUILD_ID$" "$TB_LIST"; then
  echo "ERROR: tarball has no .next/BUILD_ID — .next was incomplete when packed. ABORT." >&2
  rm -f "$TB_LIST"; exit 1
fi
TB_CHUNKS=$(grep -c "^\.next/static/chunks/app/.*\.js$" "$TB_LIST")
LOCAL_CHUNKS=$(find .next/static/chunks/app -type f -name '*.js' 2>/dev/null | wc -l)
rm -f "$TB_LIST"
echo "  app .js chunks: tarball=$TB_CHUNKS local=$LOCAL_CHUNKS"
[ "$TB_CHUNKS" -ge 50 ] || { echo "ERROR: only $TB_CHUNKS app chunks. ABORT." >&2; exit 1; }
if [ -f .next/BUILD_ID ] && [ "$TB_CHUNKS" -ne "$LOCAL_CHUNKS" ]; then
  echo "ERROR: tarball chunk count != local .next — packed during a build? ABORT." >&2; exit 1
fi

# --- Split. Chunks are content-addressed by the tarball name so a re-run
# --- against the same tarball reuses whatever already reached the server.
CHUNK_DIR="/tmp/triveni-chunks-${TARBALL_NAME%.tar.gz}"
if [ -d "$CHUNK_DIR" ] && [ "$(ls -1 "$CHUNK_DIR" 2>/dev/null | wc -l)" -eq "$NCHUNKS" ]; then
  echo "=== [1/7] Reusing existing local chunks ==="
else
  echo "=== [1/7] Splitting into $NCHUNKS chunks ==="
  rm -rf "$CHUNK_DIR"; mkdir -p "$CHUNK_DIR"
  split -n "$NCHUNKS" "$TARBALL_LOCAL" "${CHUNK_DIR}/c_"
fi
CHUNKS=( "$CHUNK_DIR"/c_* )
echo "  ${#CHUNKS[@]} chunks of ~$(( LOCAL_BYTES / NCHUNKS / 1024 / 1024 )) MB"

# --- Ask the server what it already holds, in one round trip.
echo "=== [2/7] Checking what is already on the server ==="
REMOTE_SIZES=$(ssh "${SSH_OPTS[@]}" "$HOST" \
  "ls -l ${PREFIX}c_* 2>/dev/null | awk '{print \$9, \$5}'" 2>/dev/null)
have_size() {
  echo "$REMOTE_SIZES" | awk -v f="${PREFIX}$1" '$1==f {print $2; found=1} END{if(!found) print 0}'
}

DONE=0; SENT=0; FAILED=0
for chunk in "${CHUNKS[@]}"; do
  name=$(basename "$chunk")
  lb=$(stat -c%s "$chunk")
  rb=$(have_size "$name")
  if [ "$lb" = "$rb" ]; then
    DONE=$((DONE+1)); continue
  fi
  ok=0
  for a in 1 2 3 4 5 6 7 8; do
    # Hard wall-clock cap per attempt.
    #
    # ServerAlive* only detects a connection that has DIED. This link does
    # something worse: it stays up while throughput collapses to nothing, so the
    # keepalives keep answering and scp waits for ever. Observed twice on this
    # deploy — a 5 MB chunk that normally takes ~12 seconds sat for 6 and 7
    # minutes. A timeout turns that from a hang into a retry.
    if timeout "$CHUNK_TIMEOUT" scp "${SSH_OPTS[@]}" "$chunk" "$HOST:${PREFIX}${name}" >/dev/null 2>&1; then
      v=$(timeout 45 ssh "${SSH_OPTS[@]}" "$HOST" "stat -c%s ${PREFIX}${name} 2>/dev/null || echo 0" 2>/dev/null)
      if [ "$lb" = "$v" ]; then ok=1; break; fi
    else
      # A timed-out transfer may still have landed the whole file; check before
      # spending another attempt on it.
      v=$(timeout 45 ssh "${SSH_OPTS[@]}" "$HOST" "stat -c%s ${PREFIX}${name} 2>/dev/null || echo 0" 2>/dev/null)
      if [ "$lb" = "$v" ]; then ok=1; echo "  [$name] recovered after timeout"; break; fi
      echo "  [$name] attempt $a timed out or failed; retrying"
    fi
    sleep $((a < 4 ? 3 : 10))
  done
  if [ "$ok" = 1 ]; then
    SENT=$((SENT+1))
    echo "  [$name] sent   ($((DONE+SENT))/${#CHUNKS[@]})"
  else
    FAILED=$((FAILED+1))
    echo "  [$name] FAILED after 8 tries — re-run this script to resume" >&2
  fi
done
echo "=== [3/7] $DONE already present, $SENT uploaded, $FAILED failed ==="
if [ "$FAILED" -ne 0 ]; then
  echo "Server untouched. Re-run this same script when the connection is back; it resumes." >&2
  exit 1
fi

echo "=== [4/7] Reassemble + verify ==="
ssh "${SSH_OPTS[@]}" "$HOST" "cat ${PREFIX}c_* > ${REMOTE}"
RB=$(ssh "${SSH_OPTS[@]}" "$HOST" "stat -c%s ${REMOTE}")
echo "  local=$LOCAL_BYTES remote=$RB"
[ "$LOCAL_BYTES" = "$RB" ] || { echo "ERROR: size mismatch — aborting before overlay" >&2; exit 1; }

echo "=== [5/7] Overlay + restart ==="
ssh "${SSH_OPTS[@]}" "$HOST" bash <<EOF
set -euo pipefail
cd /home/ubuntu
echo "  -> backup (hardlink snapshot)"
cp -al "${APP_DIR}" "${BACKUP_DIR}"
cd "${APP_DIR}"
tar xzf "${REMOTE}"
echo "  -> verify public/ intact"
ls public/images > /dev/null
test -f public/favicon.ico
# The image optimizer keeps re-encoded copies for a year; stale entries here
# are what kept serving the old logo after the file on disk had changed.
rm -rf .next/cache/images
if [ -f package-lock.json ]; then npm ci --omit=dev --silent || npm install --omit=dev --silent; fi
pm2 restart triveni
sleep 3
pm2 status triveni
rm -f "${REMOTE}" ${PREFIX}c_*
EOF
if [ $? -ne 0 ]; then
  echo "!!! SERVER STEP FAILED — roll back: ssh -i \"$KEY\" $HOST 'rm -rf $APP_DIR && mv $BACKUP_DIR $APP_DIR && pm2 restart triveni'" >&2
  exit 1
fi

echo "=== [6/7] Healthcheck ==="
sleep 5
H=$(curl -sI -o /dev/null -w "%{http_code}" "$HOMEPAGE")
I=$(curl -sI -o /dev/null -w "%{http_code}" "$SAMPLE_IMG")
T=$(curl -sI -o /dev/null -w "%{http_code}" "https://www.trivenicabs.in/tempo-traveller")
O=$(curl -sI -o /dev/null -w "%{http_code}" "https://www.trivenicabs.in/one-way-cab")
echo "  Homepage=$H  Image=$I  /tempo-traveller=$T  /one-way-cab=$O"
if [ "$H" != "200" ] || [ "$I" != "200" ]; then
  echo "!!! VERIFICATION FAILED — roll back: ssh -i \"$KEY\" $HOST 'rm -rf $APP_DIR && mv $BACKUP_DIR $APP_DIR && pm2 restart triveni'" >&2
  exit 1
fi
CHUNK_FAILS=0
for c in $(curl -s "$HOMEPAGE" | grep -o "/_next/static/[a-zA-Z0-9/._-]*\.js" | sort -u | head -40); do
  CC=$(curl -s -o /dev/null -w "%{http_code}" "https://www.trivenicabs.in$c")
  [ "$CC" = "200" ] || { echo "    MISSING CHUNK ($CC): $c"; CHUNK_FAILS=1; }
done
[ "$CHUNK_FAILS" -eq 0 ] || {
  echo "!!! CHUNK VERIFICATION FAILED — roll back: ssh -i \"$KEY\" $HOST 'rm -rf $APP_DIR && mv $BACKUP_DIR $APP_DIR && pm2 restart triveni'" >&2
  exit 1; }
echo "    all homepage chunks 200"

echo "=== [7/7] Cleanup ==="
rm -rf "$CHUNK_DIR"
ssh "${SSH_OPTS[@]}" "$HOST" 'ls -dt /home/ubuntu/triveni-backup-* 2>/dev/null | tail -n +4 | xargs -r rm -rf' || true
echo "=== DEPLOY COMPLETE === Backup: $BACKUP_DIR"
echo "Roll back: ssh -i \"$KEY\" $HOST 'rm -rf $APP_DIR && mv $BACKUP_DIR $APP_DIR && pm2 restart triveni'"
