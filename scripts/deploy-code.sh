#!/usr/bin/env bash
# Code-only resilient deploy. Ships .next + src + config (NO public/ — it is
# already on the server and preserved by the overlay extract). Splits into small
# 25MB chunks, uploads with LIMITED concurrency (3 at a time) + per-chunk retries
# so a flaky residential uplink to Mumbai cannot abort the whole deploy.
# Server stays untouched until every chunk is uploaded + size-verified.

set -uo pipefail

KEY="C:/Users/bolis/Desktop/triveni_website/LightsailDefaultKey-ap-south-1 (1).pem"
HOST="ubuntu@13.201.84.132"
APP_DIR="/home/ubuntu/triveni"
TIMESTAMP=$(date +%Y%m%d_%H%M%S)
BACKUP_DIR="/home/ubuntu/triveni-backup-cro-${TIMESTAMP}"
HOMEPAGE="https://www.trivenicabs.in/"
SAMPLE_IMG="https://www.trivenicabs.in/images/sightseeing/Agra/Taj_mahal.jpg"
CONCURRENCY=3

SSH_OPTS=(-i "$KEY" -o StrictHostKeyChecking=no -o ServerAliveInterval=15 -o ServerAliveCountMax=4 -o ConnectTimeout=30)

TARBALL_LOCAL=$(ls -t /tmp/triveni-code-*.tar.gz 2>/dev/null | head -1)
if [ -z "$TARBALL_LOCAL" ]; then echo "ERROR: no /tmp/triveni-code-*.tar.gz" >&2; exit 1; fi
TARBALL_NAME=$(basename "$TARBALL_LOCAL")
REMOTE="/tmp/${TARBALL_NAME}"
LOCAL_BYTES=$(stat -c%s "$TARBALL_LOCAL")
echo "=== [0/8] $TARBALL_NAME ($LOCAL_BYTES bytes), concurrency=$CONCURRENCY ==="

# --- Content sanity gate (added after 2 Aug 2026 incident: a dev process ---
# --- clobbered .next mid-pack; the archive was gzip-valid but missing     ---
# --- most app chunks -> sitewide client-side exception after overlay.     ---
echo "=== [0b/8] Tarball content sanity ==="
# List ONCE into a temp file. Never pipe `tar tzf` into `grep -q` here: with
# pipefail, grep's early exit SIGPIPEs tar and the pipeline "fails" on success.
TB_LIST=$(mktemp)
tar tzf "$TARBALL_LOCAL" > "$TB_LIST"
if ! grep -q "^\.next/BUILD_ID$" "$TB_LIST"; then
  echo "ERROR: tarball has no .next/BUILD_ID — .next was incomplete when packed. ABORT." >&2; rm -f "$TB_LIST"; exit 1
fi
# Compare .js FILES only (raw entry counts include directories and .map files).
TB_CHUNKS=$(grep -c "^\.next/static/chunks/app/.*\.js$" "$TB_LIST")
LOCAL_CHUNKS=$(find .next/static/chunks/app -type f -name '*.js' 2>/dev/null | wc -l)
rm -f "$TB_LIST"
echo "  app .js chunks: tarball=$TB_CHUNKS local=$LOCAL_CHUNKS"
if [ "$TB_CHUNKS" -lt 50 ]; then
  echo "ERROR: tarball contains only $TB_CHUNKS app chunks (healthy build has hundreds). ABORT." >&2; exit 1
fi
if [ -f .next/BUILD_ID ] && [ "$TB_CHUNKS" -ne "$LOCAL_CHUNKS" ]; then
  echo "ERROR: tarball app-chunk count ($TB_CHUNKS) != local .next ($LOCAL_CHUNKS) — packed during a build/dev run? ABORT." >&2; exit 1
fi

CHUNK_DIR="/tmp/triveni-code-chunks-${TIMESTAMP}"
mkdir -p "$CHUNK_DIR"
echo "=== [1/8] Split into 10 chunks ==="
split -n 10 "$TARBALL_LOCAL" "${CHUNK_DIR}/c_"
CHUNKS=( "$CHUNK_DIR"/c_* )
echo "  ${#CHUNKS[@]} chunks"

echo "=== [2/8] Clean stale on server ==="
ssh "${SSH_OPTS[@]}" "$HOST" "rm -f /tmp/tcode_* ${REMOTE}" || true

upload_one() {
  local chunk="$1" name; name=$(basename "$chunk")
  local lb; lb=$(stat -c%s "$chunk")
  local a
  for a in 1 2 3 4 5 6 7 8 9 10; do
    if scp "${SSH_OPTS[@]}" "$chunk" "$HOST:/tmp/tcode_${name}" >/dev/null 2>&1; then
      local rb; rb=$(ssh "${SSH_OPTS[@]}" "$HOST" "stat -c%s /tmp/tcode_${name} 2>/dev/null || echo 0")
      if [ "$lb" = "$rb" ]; then echo "  [$name] OK (try $a)"; return 0; fi
    fi
    echo "  [$name] try $a failed; retry" >&2; sleep 3
  done
  echo "  [$name] FAILED" >&2; return 1
}

echo "=== [3/8] Upload (concurrency $CONCURRENCY, retries each) ==="
FAIL=0; running=0; PIDS=()
for chunk in "${CHUNKS[@]}"; do
  upload_one "$chunk" & PIDS+=($!)
  running=$((running+1))
  if [ "$running" -ge "$CONCURRENCY" ]; then
    if ! wait -n; then FAIL=1; fi
    running=$((running-1))
  fi
done
for pid in "${PIDS[@]}"; do if ! wait "$pid"; then FAIL=1; fi; done
if [ "$FAIL" -ne 0 ]; then echo "ERROR: a chunk failed all retries — server untouched, safe to re-run" >&2; exit 1; fi
echo "  -> all chunks uploaded + verified"

echo "=== [4/8] Reassemble + verify ==="
ssh "${SSH_OPTS[@]}" "$HOST" "cat /tmp/tcode_c_* > ${REMOTE} && rm -f /tmp/tcode_*"
RB=$(ssh "${SSH_OPTS[@]}" "$HOST" "stat -c%s ${REMOTE}")
echo "  local=$LOCAL_BYTES remote=$RB"
if [ "$LOCAL_BYTES" != "$RB" ]; then echo "ERROR: size mismatch — aborting before overlay" >&2; exit 1; fi

echo "=== [5/8] Overlay + restart ==="
ssh "${SSH_OPTS[@]}" "$HOST" bash <<EOF
set -euo pipefail
cd /home/ubuntu
echo "  -> backup (hardlink snapshot)"
cp -al "${APP_DIR}" "${BACKUP_DIR}"
echo "  -> extract overlay (public/ preserved — not in tarball)"
cd "${APP_DIR}"
tar xzf "${REMOTE}"
echo "  -> verify public/ intact"
ls public/images > /dev/null
test -f public/favicon.ico
if [ -f package-lock.json ]; then npm ci --omit=dev --silent || npm install --omit=dev --silent; fi
pm2 restart triveni
sleep 3
pm2 status triveni
rm -f "${REMOTE}"
EOF
if [ $? -ne 0 ]; then
  echo "!!! SERVER STEP FAILED — roll back: ssh -i \"$KEY\" $HOST 'rm -rf $APP_DIR && mv $BACKUP_DIR $APP_DIR && pm2 restart triveni'" >&2
  exit 1
fi

echo "=== [6/8] Healthcheck ==="
sleep 5
H=$(curl -sI -o /dev/null -w "%{http_code}" "$HOMEPAGE")
I=$(curl -sI -o /dev/null -w "%{http_code}" "$SAMPLE_IMG")
T=$(curl -sI -o /dev/null -w "%{http_code}" "https://www.trivenicabs.in/tempo-traveller")
O=$(curl -sI -o /dev/null -w "%{http_code}" "https://www.trivenicabs.in/one-way-cab")
echo "  Homepage=$H  Image=$I  /tempo-traveller=$T  /one-way-cab=$O"
if [ "$H" != "200" ] || [ "$I" != "200" ]; then
  echo "!!! VERIFICATION FAILED — roll back: ssh -i \"$KEY\" $HOST 'rm -rf $APP_DIR && mv $BACKUP_DIR $APP_DIR && pm2 restart triveni'"
  exit 1
fi
# --- Chunk-integrity healthcheck (2 Aug 2026 incident): HTML 200 does NOT ---
# --- prove the page works — every JS chunk the homepage references must   ---
# --- itself load, or browsers throw a sitewide client-side exception.     ---
echo "  chunk integrity:"
CHUNK_FAILS=0
for c in $(curl -s "$HOMEPAGE" | grep -o "/_next/static/[a-zA-Z0-9/._-]*\.js" | sort -u | head -40); do
  CC=$(curl -s -o /dev/null -w "%{http_code}" "https://www.trivenicabs.in$c")
  if [ "$CC" != "200" ]; then echo "    MISSING CHUNK ($CC): $c"; CHUNK_FAILS=1; fi
done
if [ "$CHUNK_FAILS" -ne 0 ]; then
  echo "!!! CHUNK VERIFICATION FAILED — roll back: ssh -i \"$KEY\" $HOST 'rm -rf $APP_DIR && mv $BACKUP_DIR $APP_DIR && pm2 restart triveni'"
  exit 1
fi
echo "    all homepage chunks 200"

echo "=== [7/8] Cleanup local chunks + prune old server backups (keep 3 newest) ==="
rm -rf "$CHUNK_DIR"
ssh "${SSH_OPTS[@]}" "$HOST" 'ls -dt /home/ubuntu/triveni-backup-* 2>/dev/null | tail -n +4 | xargs -r rm -rf; echo "  -> kept backups:"; ls -dt /home/ubuntu/triveni-backup-* 2>/dev/null' || true

echo "=== [8/8] DEPLOY COMPLETE === Backup: $BACKUP_DIR"
echo "Roll back: ssh -i \"$KEY\" $HOST 'rm -rf $APP_DIR && mv $BACKUP_DIR $APP_DIR && pm2 restart triveni'"
