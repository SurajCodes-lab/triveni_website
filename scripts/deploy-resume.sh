#!/usr/bin/env bash
# Resume a stalled code-only deploy: re-upload ONLY missing/incomplete chunks
# (single connection each, generous retries), then reassemble + overlay + restart
# + healthcheck + prune. The already-verified chunks on the server are reused.

set -uo pipefail
KEY="C:/Users/bolis/Desktop/triveni_website/LightsailDefaultKey-ap-south-1 (1).pem"
HOST="ubuntu@13.201.84.132"
APP_DIR="/home/ubuntu/triveni"
TS=$(date +%Y%m%d_%H%M%S)
BACKUP_DIR="/home/ubuntu/triveni-backup-cro-${TS}"
HOMEPAGE="https://www.trivenicabs.in/"
SAMPLE_IMG="https://www.trivenicabs.in/images/sightseeing/Agra/Taj_mahal.jpg"
SSH_OPTS=(-i "$KEY" -o StrictHostKeyChecking=no -o ServerAliveInterval=15 -o ServerAliveCountMax=8 -o ConnectTimeout=30)

CHUNK_DIR=$(ls -dt /tmp/triveni-code-chunks-* 2>/dev/null | head -1)
TARBALL_LOCAL=$(ls -t /tmp/triveni-code-*.tar.gz 2>/dev/null | head -1)
TARBALL_NAME=$(basename "$TARBALL_LOCAL")
REMOTE="/tmp/${TARBALL_NAME}"
LOCAL_BYTES=$(stat -c%s "$TARBALL_LOCAL")
echo "Chunks: $CHUNK_DIR | tarball: $TARBALL_NAME ($LOCAL_BYTES bytes)"

echo "=== Upload each chunk if missing/size-mismatched on server (single conn, 15 retries) ==="
for chunk in "$CHUNK_DIR"/c_*; do
  name=$(basename "$chunk")
  lb=$(stat -c%s "$chunk")
  ok=0
  for a in $(seq 1 15); do
    rb=$(ssh "${SSH_OPTS[@]}" "$HOST" "stat -c%s /tmp/tcode_${name} 2>/dev/null || echo 0")
    if [ "$lb" = "$rb" ]; then echo "  [$name] already complete"; ok=1; break; fi
    echo "  [$name] uploading (attempt $a, have ${rb}/${lb})..."
    scp "${SSH_OPTS[@]}" "$chunk" "$HOST:/tmp/tcode_${name}" >/dev/null 2>&1 || true
    rb=$(ssh "${SSH_OPTS[@]}" "$HOST" "stat -c%s /tmp/tcode_${name} 2>/dev/null || echo 0")
    if [ "$lb" = "$rb" ]; then echo "  [$name] OK (attempt $a)"; ok=1; break; fi
    sleep 3
  done
  if [ "$ok" -ne 1 ]; then echo "ERROR: [$name] failed all retries — server untouched, safe to re-run" >&2; exit 1; fi
done
echo "  -> all chunks present + verified"

echo "=== Reassemble + verify ==="
ssh "${SSH_OPTS[@]}" "$HOST" "cat /tmp/tcode_c_* > ${REMOTE} && rm -f /tmp/tcode_*"
RB=$(ssh "${SSH_OPTS[@]}" "$HOST" "stat -c%s ${REMOTE}")
echo "  local=$LOCAL_BYTES remote=$RB"
if [ "$LOCAL_BYTES" != "$RB" ]; then echo "ERROR: size mismatch — aborting before overlay" >&2; exit 1; fi

echo "=== Overlay + restart ==="
ssh "${SSH_OPTS[@]}" "$HOST" bash <<EOF
set -euo pipefail
cd /home/ubuntu
cp -al "${APP_DIR}" "${BACKUP_DIR}"
cd "${APP_DIR}"
tar xzf "${REMOTE}"
ls public/images > /dev/null
test -f public/favicon.ico
if [ -f package-lock.json ]; then npm ci --omit=dev --silent || npm install --omit=dev --silent; fi
pm2 restart triveni
sleep 3
pm2 status triveni
rm -f "${REMOTE}"
EOF
if [ $? -ne 0 ]; then echo "!!! SERVER STEP FAILED — roll back: ssh -i \"$KEY\" $HOST 'rm -rf $APP_DIR && mv $BACKUP_DIR $APP_DIR && pm2 restart triveni'" >&2; exit 1; fi

echo "=== Healthcheck ==="
sleep 5
H=$(curl -sI -o /dev/null -w "%{http_code}" "$HOMEPAGE")
I=$(curl -sI -o /dev/null -w "%{http_code}" "$SAMPLE_IMG")
T=$(curl -sI -o /dev/null -w "%{http_code}" "https://www.trivenicabs.in/tours-with-guide")
G=$(curl -sI -o /dev/null -w "%{http_code}" "https://www.trivenicabs.in/tour-guide")
echo "  Homepage=$H Image=$I /tours-with-guide=$T /tour-guide=$G"
if [ "$H" != "200" ] || [ "$I" != "200" ]; then echo "!!! VERIFICATION FAILED — roll back: ssh -i \"$KEY\" $HOST 'rm -rf $APP_DIR && mv $BACKUP_DIR $APP_DIR && pm2 restart triveni'"; exit 1; fi

echo "=== Prune old backups (keep 3 newest) ==="
ssh "${SSH_OPTS[@]}" "$HOST" 'ls -dt /home/ubuntu/triveni-backup-* 2>/dev/null | tail -n +4 | xargs -r rm -rf; ls -dt /home/ubuntu/triveni-backup-* 2>/dev/null'
rm -rf "$CHUNK_DIR"
echo "=== DEPLOY COMPLETE === Backup: $BACKUP_DIR"
