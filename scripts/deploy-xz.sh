#!/usr/bin/env bash
# Resilient deploy variant — uses pre-built xz tarball at /tmp/triveni-deploy-aeo.tar.xz.
# Stops pm2 BEFORE upload to free server CPU + reduce TCP contention that caused
# the "Connection reset by peer" failures with the 245 MB gz tarball.
#
# Site is briefly offline (502 from Nginx) during upload + extract + restart,
# typically 15-30 min depending on uplink.

set -euo pipefail

KEY="C:/Users/bolis/Desktop/triveni_website/LightsailDefaultKey-ap-south-1 (1).pem"
HOST="ubuntu@13.201.84.132"
APP_DIR="/home/ubuntu/triveni"
TIMESTAMP=$(date +%Y%m%d_%H%M%S)
BACKUP_DIR="/home/ubuntu/triveni-backup-aeo-${TIMESTAMP}"
TARBALL_LOCAL="/tmp/triveni-deploy-aeo.tar.xz"
TARBALL_REMOTE="/tmp/triveni-deploy-aeo-${TIMESTAMP}.tar.xz"
SAMPLE_IMG="https://www.trivenicabs.in/images/sightseeing/Agra/Taj_mahal.jpg"
HOMEPAGE="https://www.trivenicabs.in/"

# SSH options as array so paths with spaces survive word-splitting
SSH_OPTS=(-i "$KEY" -o StrictHostKeyChecking=no -o ServerAliveInterval=15 -o ServerAliveCountMax=4 -o TCPKeepAlive=yes)

echo "=== [0/7] Pre-flight ==="
test -f "$TARBALL_LOCAL" || { echo "ERROR: $TARBALL_LOCAL not found. Run xz repack first." >&2; exit 1; }
TARBALL_BYTES=$(stat -c%s "$TARBALL_LOCAL" 2>/dev/null || wc -c < "$TARBALL_LOCAL")
echo "Tarball: $(ls -lh "$TARBALL_LOCAL" | awk '{print $5}')"

echo "=== [1/7] Verify public/ in xz tarball ==="
PUBLIC_COUNT=$(xz -dc "$TARBALL_LOCAL" | tar t 2>/dev/null | grep -c '^public/' || true)
if [ "$PUBLIC_COUNT" -lt 100 ]; then
  echo "ERROR: only $PUBLIC_COUNT public/ entries — aborting" >&2
  exit 1
fi
echo "OK: $PUBLIC_COUNT public/ entries"

echo "=== [2/7] Stop pm2 (site goes briefly offline) ==="
ssh "${SSH_OPTS[@]}" "$HOST" "pm2 stop triveni || true; pm2 status triveni || true; rm -f /tmp/triveni-deploy-lean-*.tar.gz"

echo "=== [3/7] Upload xz tarball ==="
scp "${SSH_OPTS[@]}" "$TARBALL_LOCAL" "$HOST:${TARBALL_REMOTE}"

echo "=== [4/7] Verify upload size ==="
REMOTE_BYTES=$(ssh "${SSH_OPTS[@]}" "$HOST" "stat -c%s ${TARBALL_REMOTE}")
if [ "$REMOTE_BYTES" != "$TARBALL_BYTES" ]; then
  echo "ERROR: size mismatch (local=$TARBALL_BYTES remote=$REMOTE_BYTES)" >&2
  ssh "${SSH_OPTS[@]}" "$HOST" "pm2 start triveni"
  exit 1
fi
echo "OK: $REMOTE_BYTES bytes match"

echo "=== [5/7] Server overlay extract ==="
ssh "${SSH_OPTS[@]}" "$HOST" bash <<EOF
set -euo pipefail
cd /home/ubuntu

echo "  -> hardlink-snapshot backup"
cp -al "${APP_DIR}" "${BACKUP_DIR}"

echo "  -> extract overlay (xz, no delete)"
cd "${APP_DIR}"
xz -dc "${TARBALL_REMOTE}" | tar x

echo "  -> verify public/ still present"
ls public/images > /dev/null
test -f public/favicon.ico
echo "  -> public/images entries: \$(find public/images -type f | wc -l)"

echo "  -> install any new deps"
if [ -f package-lock.json ]; then
  npm ci --omit=dev --silent || npm install --omit=dev --silent
fi

echo "  -> pm2 restart"
pm2 restart triveni || pm2 start triveni
sleep 3
pm2 status triveni

rm -f "${TARBALL_REMOTE}"
EOF

echo "=== [6/7] Verify deploy ==="
sleep 6
HOMEPAGE_STATUS=$(curl -sI -o /dev/null -w "%{http_code}" "$HOMEPAGE")
echo "  Homepage  $HOMEPAGE => $HOMEPAGE_STATUS"

IMG_STATUS=$(curl -sI -o /dev/null -w "%{http_code}" "$SAMPLE_IMG")
echo "  Image     => $IMG_STATUS"

TRUST_STATUS=$(curl -sI -o /dev/null -w "%{http_code}" "https://www.trivenicabs.in/trust")
echo "  /trust    => $TRUST_STATUS  (new this deploy)"

LLMS_STATUS=$(curl -sI -o /dev/null -w "%{http_code}" "https://www.trivenicabs.in/llms.txt")
echo "  /llms.txt => $LLMS_STATUS  (new this deploy)"

if [ "$HOMEPAGE_STATUS" != "200" ] || [ "$IMG_STATUS" != "200" ]; then
  echo ""
  echo "!!! DEPLOY VERIFICATION FAILED !!!"
  echo "Roll back with:"
  echo "  ssh -i \"$KEY\" $HOST"
  echo "  rm -rf $APP_DIR && mv $BACKUP_DIR $APP_DIR && pm2 restart triveni"
  exit 1
fi

echo ""
echo "=== [7/7] DEPLOY COMPLETE ==="
echo "Backup at: $BACKUP_DIR"
echo "Roll back: rm -rf $APP_DIR && mv $BACKUP_DIR $APP_DIR && pm2 restart triveni"
