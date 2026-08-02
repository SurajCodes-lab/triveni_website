#!/usr/bin/env bash
# Resilient chunked deploy. Same idea as deploy-chunks.sh BUT each parallel
# chunk upload has its own retry loop (the original aborted the whole deploy
# if any single SCP dropped — fatal on a flaky residential uplink to Mumbai).
# Reuses pre-split chunks if present; otherwise splits the newest lean tarball.

set -uo pipefail

KEY="C:/Users/bolis/Desktop/triveni_website/LightsailDefaultKey-ap-south-1 (1).pem"
HOST="ubuntu@13.201.84.132"
APP_DIR="/home/ubuntu/triveni"
TIMESTAMP=$(date +%Y%m%d_%H%M%S)
BACKUP_DIR="/home/ubuntu/triveni-backup-cro-${TIMESTAMP}"
SAMPLE_IMG="https://www.trivenicabs.in/images/sightseeing/Agra/Taj_mahal.jpg"
HOMEPAGE="https://www.trivenicabs.in/"

SSH_OPTS=(-i "$KEY" -o StrictHostKeyChecking=no -o ServerAliveInterval=15 -o ServerAliveCountMax=4 -o ConnectTimeout=30)

TARBALL_LOCAL=$(ls -t /tmp/triveni-deploy-lean-*.tar.gz 2>/dev/null | head -1)
if [ -z "$TARBALL_LOCAL" ]; then echo "ERROR: no tarball in /tmp" >&2; exit 1; fi
TARBALL_NAME=$(basename "$TARBALL_LOCAL")
REMOTE_REASSEMBLED="/tmp/${TARBALL_NAME}"
LOCAL_BYTES=$(stat -c%s "$TARBALL_LOCAL")

echo "=== [0/8] Pre-flight ==="
echo "Tarball: $TARBALL_NAME ($LOCAL_BYTES bytes)"

# Reuse existing chunk dir if it matches; else split fresh.
CHUNK_DIR=$(ls -dt /tmp/triveni-chunks-* 2>/dev/null | head -1)
if [ -z "$CHUNK_DIR" ] || [ ! -d "$CHUNK_DIR" ] || [ -z "$(ls "$CHUNK_DIR"/chunk_* 2>/dev/null)" ]; then
  CHUNK_DIR="/tmp/triveni-chunks-${TIMESTAMP}"
  mkdir -p "$CHUNK_DIR"
  echo "=== [1/8] Split into 50MB chunks ==="
  split -b 50M "$TARBALL_LOCAL" "${CHUNK_DIR}/chunk_"
else
  echo "=== [1/8] Reusing existing chunks in $CHUNK_DIR ==="
fi
ls -lh "$CHUNK_DIR"/chunk_*

echo "=== [2/8] Clean stale chunks/tarballs on server ==="
ssh "${SSH_OPTS[@]}" "$HOST" "rm -f /tmp/triveni-chunk_* ${REMOTE_REASSEMBLED}" || true

upload_chunk() {
  local chunk="$1" name; name=$(basename "$chunk")
  local attempt
  for attempt in 1 2 3 4 5 6 7 8; do
    if scp "${SSH_OPTS[@]}" "$chunk" "$HOST:/tmp/triveni-${name}" >/dev/null 2>&1; then
      # verify size
      local lb rb; lb=$(stat -c%s "$chunk"); rb=$(ssh "${SSH_OPTS[@]}" "$HOST" "stat -c%s /tmp/triveni-${name} 2>/dev/null || echo 0")
      if [ "$lb" = "$rb" ]; then echo "  [$name] OK (attempt $attempt)"; return 0; fi
    fi
    echo "  [$name] retry $attempt failed, retrying..." >&2
    sleep 4
  done
  echo "  [$name] FAILED after retries" >&2
  return 1
}
export -f upload_chunk
export HOST
SSH_OPTS_STR="${SSH_OPTS[*]}"

echo "=== [3/8] Upload chunks in PARALLEL (each with retries) ==="
PIDS=(); NAMES=()
for chunk in "$CHUNK_DIR"/chunk_*; do
  upload_chunk "$chunk" &
  PIDS+=($!); NAMES+=("$(basename "$chunk")")
done
FAIL=0
for i in "${!PIDS[@]}"; do
  if ! wait "${PIDS[$i]}"; then echo "ERROR: chunk ${NAMES[$i]} failed all retries" >&2; FAIL=1; fi
done
if [ "$FAIL" -ne 0 ]; then echo "ERROR: at least one chunk failed — server untouched, safe to retry" >&2; exit 1; fi
echo "  -> all chunks uploaded + size-verified"

echo "=== [4/8] Reassemble + verify total size ==="
ssh "${SSH_OPTS[@]}" "$HOST" "cat /tmp/triveni-chunk_* > ${REMOTE_REASSEMBLED} && rm -f /tmp/triveni-chunk_*"
REMOTE_BYTES=$(ssh "${SSH_OPTS[@]}" "$HOST" "stat -c%s ${REMOTE_REASSEMBLED}")
echo "  local=$LOCAL_BYTES remote=$REMOTE_BYTES"
if [ "$LOCAL_BYTES" != "$REMOTE_BYTES" ]; then echo "ERROR: size mismatch — aborting before overlay" >&2; exit 1; fi

echo "=== [5/8] Server deploy (overlay pattern) ==="
ssh "${SSH_OPTS[@]}" "$HOST" bash <<EOF
set -euo pipefail
cd /home/ubuntu
echo "  -> hardlink-snapshot backup"
cp -al "${APP_DIR}" "${BACKUP_DIR}"
echo "  -> extract overlay"
cd "${APP_DIR}"
tar xzf "${REMOTE_REASSEMBLED}"
echo "  -> verify public/ still present"
ls public/images > /dev/null
test -f public/favicon.ico
echo "  -> install deps if lockfile present"
if [ -f package-lock.json ]; then npm ci --omit=dev --silent || npm install --omit=dev --silent; fi
echo "  -> pm2 restart"
pm2 restart triveni
sleep 3
pm2 status triveni
rm -f "${REMOTE_REASSEMBLED}"
EOF
DEPLOY_RC=$?
if [ "$DEPLOY_RC" -ne 0 ]; then
  echo "!!! SERVER DEPLOY STEP FAILED (rc=$DEPLOY_RC) !!!" >&2
  echo "Roll back: ssh -i \"$KEY\" $HOST 'rm -rf $APP_DIR && mv $BACKUP_DIR $APP_DIR && pm2 restart triveni'" >&2
  exit 1
fi

echo "=== [6/8] Verify deploy ==="
sleep 5
HOMEPAGE_STATUS=$(curl -sI -o /dev/null -w "%{http_code}" "$HOMEPAGE")
IMG_STATUS=$(curl -sI -o /dev/null -w "%{http_code}" "$SAMPLE_IMG")
TEMPO_STATUS=$(curl -sI -o /dev/null -w "%{http_code}" "https://www.trivenicabs.in/tempo-traveller")
ONEWAY_STATUS=$(curl -sI -o /dev/null -w "%{http_code}" "https://www.trivenicabs.in/one-way-cab")
echo "  Homepage     => $HOMEPAGE_STATUS"
echo "  Image        => $IMG_STATUS"
echo "  /tempo-traveller => $TEMPO_STATUS"
echo "  /one-way-cab => $ONEWAY_STATUS"
if [ "$HOMEPAGE_STATUS" != "200" ] || [ "$IMG_STATUS" != "200" ]; then
  echo "" ; echo "!!! DEPLOY VERIFICATION FAILED !!!"
  echo "Roll back: ssh -i \"$KEY\" $HOST 'rm -rf $APP_DIR && mv $BACKUP_DIR $APP_DIR && pm2 restart triveni'"
  exit 1
fi

echo "=== [7/8] Cleanup local chunks ==="
rm -rf "$CHUNK_DIR"

echo ""
echo "=== [8/8] DEPLOY COMPLETE ==="
echo "Backup at: $BACKUP_DIR"
echo "Roll back: rm -rf $APP_DIR && mv $BACKUP_DIR $APP_DIR && pm2 restart triveni"
