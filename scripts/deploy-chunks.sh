#!/usr/bin/env bash
# Chunked-parallel deploy. Splits the gzipped tarball into 5 ~50MB chunks,
# uploads them simultaneously over 5 SCP connections, reassembles on the
# server, then runs the standard overlay + pm2 restart + healthcheck flow.
#
# Why: single SCP rarely saturates a residential uplink because of TCP
# window-scaling limits at ~200ms latency to AWS Mumbai. Multiple parallel
# connections each get their own window — typically gives 3-5x throughput.

set -euo pipefail

KEY="C:/Users/bolis/Desktop/triveni_website/LightsailDefaultKey-ap-south-1 (1).pem"
HOST="ubuntu@13.201.84.132"
APP_DIR="/home/ubuntu/triveni"
TIMESTAMP=$(date +%Y%m%d_%H%M%S)
BACKUP_DIR="/home/ubuntu/triveni-backup-aeo-${TIMESTAMP}"
SAMPLE_IMG="https://www.trivenicabs.in/images/sightseeing/Agra/Taj_mahal.jpg"
HOMEPAGE="https://www.trivenicabs.in/"

SSH_OPTS=(-i "$KEY" -o StrictHostKeyChecking=no -o ServerAliveInterval=15 -o ServerAliveCountMax=4)

# Find the existing tarball (newest)
TARBALL_LOCAL=$(ls -t /tmp/triveni-deploy-lean-*.tar.gz 2>/dev/null | head -1)
if [ -z "$TARBALL_LOCAL" ]; then
  echo "ERROR: no tarball found in /tmp" >&2
  exit 1
fi
TARBALL_NAME=$(basename "$TARBALL_LOCAL")
REMOTE_REASSEMBLED="/tmp/${TARBALL_NAME}"

echo "=== [0/8] Pre-flight ==="
echo "Tarball: $(ls -lh "$TARBALL_LOCAL" | awk '{print $5}')"

echo "=== [1/8] Split into 5 chunks (~50MB each) ==="
CHUNK_DIR="/tmp/triveni-chunks-${TIMESTAMP}"
mkdir -p "$CHUNK_DIR"
# 250MB / 5 chunks = 50MB chunks; -b allows decimal
split -b 50M "$TARBALL_LOCAL" "${CHUNK_DIR}/chunk_"
ls -lh "$CHUNK_DIR"

echo "=== [2/8] Clean any stale tarballs/chunks on server ==="
ssh "${SSH_OPTS[@]}" "$HOST" "rm -f /tmp/triveni-deploy-lean-*.tar.gz /tmp/triveni-chunk_*"

echo "=== [3/8] Upload 5 chunks in PARALLEL ==="
PIDS=()
for chunk in "$CHUNK_DIR"/chunk_*; do
  chunkname=$(basename "$chunk")
  echo "  -> launching SCP for $chunkname ($(stat -c%s "$chunk" 2>/dev/null || wc -c < "$chunk") bytes)"
  scp "${SSH_OPTS[@]}" "$chunk" "$HOST:/tmp/triveni-${chunkname}" >/dev/null 2>&1 &
  PIDS+=($!)
done

echo "  -> waiting for all ${#PIDS[@]} parallel uploads to complete..."
FAIL=0
for pid in "${PIDS[@]}"; do
  if ! wait "$pid"; then FAIL=1; fi
done
if [ "$FAIL" -ne 0 ]; then
  echo "ERROR: at least one parallel SCP failed" >&2
  exit 1
fi
echo "  -> all chunks uploaded"

echo "=== [4/8] Reassemble on server + verify size ==="
LOCAL_BYTES=$(stat -c%s "$TARBALL_LOCAL" 2>/dev/null || wc -c < "$TARBALL_LOCAL")
ssh "${SSH_OPTS[@]}" "$HOST" "cat /tmp/triveni-chunk_* > ${REMOTE_REASSEMBLED} && rm -f /tmp/triveni-chunk_*"
REMOTE_BYTES=$(ssh "${SSH_OPTS[@]}" "$HOST" "stat -c%s ${REMOTE_REASSEMBLED}")
echo "  Local:  $LOCAL_BYTES bytes"
echo "  Remote: $REMOTE_BYTES bytes"
if [ "$LOCAL_BYTES" != "$REMOTE_BYTES" ]; then
  echo "ERROR: size mismatch after reassembly" >&2
  exit 1
fi

echo "=== [5/8] Server deploy (overlay pattern) ==="
ssh "${SSH_OPTS[@]}" "$HOST" bash <<EOF
set -euo pipefail
cd /home/ubuntu

echo "  -> hardlink-snapshot backup"
cp -al "${APP_DIR}" "${BACKUP_DIR}"

echo "  -> extract overlay (does NOT delete existing files)"
cd "${APP_DIR}"
tar xzf "${REMOTE_REASSEMBLED}"

echo "  -> verify public/ still present"
ls public/images > /dev/null
test -f public/favicon.ico

echo "  -> install any new deps"
if [ -f package-lock.json ]; then
  npm ci --omit=dev --silent || npm install --omit=dev --silent
fi

echo "  -> pm2 restart"
pm2 restart triveni
sleep 3
pm2 status triveni

rm -f "${REMOTE_REASSEMBLED}"
EOF

echo "=== [6/8] Verify deploy ==="
sleep 5
HOMEPAGE_STATUS=$(curl -sI -o /dev/null -w "%{http_code}" "$HOMEPAGE")
echo "  Homepage  $HOMEPAGE => $HOMEPAGE_STATUS"

IMG_STATUS=$(curl -sI -o /dev/null -w "%{http_code}" "$SAMPLE_IMG")
echo "  Image     => $IMG_STATUS"

TRUST_STATUS=$(curl -sI -o /dev/null -w "%{http_code}" "https://www.trivenicabs.in/trust")
echo "  /trust    => $TRUST_STATUS"

LLMS_STATUS=$(curl -sI -o /dev/null -w "%{http_code}" "https://www.trivenicabs.in/llms.txt")
echo "  /llms.txt => $LLMS_STATUS"

if [ "$HOMEPAGE_STATUS" != "200" ] || [ "$IMG_STATUS" != "200" ]; then
  echo ""
  echo "!!! DEPLOY VERIFICATION FAILED !!!"
  echo "Roll back: ssh -i \"$KEY\" $HOST; rm -rf $APP_DIR && mv $BACKUP_DIR $APP_DIR && pm2 restart triveni"
  exit 1
fi

echo "=== [7/8] Cleanup local chunks ==="
rm -rf "$CHUNK_DIR"

echo ""
echo "=== [8/8] DEPLOY COMPLETE ==="
echo "Backup at: $BACKUP_DIR"
echo "Roll back: rm -rf $APP_DIR && mv $BACKUP_DIR $APP_DIR && pm2 restart triveni"
