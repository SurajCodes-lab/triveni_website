#!/usr/bin/env bash
# Triveni Cabs deploy script — overlay pattern (per April 16 incident lesson).
#
# Usage: ./scripts/deploy.sh
#
# Steps:
#   1. Verify .next/ build exists locally
#   2. Pack tarball: .next/, public/, package*.json, next.config.mjs, src/
#   3. Verify public/ inside tarball
#   4. SCP to server
#   5. Server: hardlink-snapshot backup, extract overlay, pm2 restart
#   6. Verify with curl on sample image + homepage

set -euo pipefail

KEY="C:/Users/bolis/Desktop/triveni_website/LightsailDefaultKey-ap-south-1 (1).pem"
HOST="ubuntu@13.201.84.132"
APP_DIR="/home/ubuntu/triveni"
TIMESTAMP=$(date +%Y%m%d_%H%M%S)
BACKUP_DIR="/home/ubuntu/triveni-backup-seo-${TIMESTAMP}"
TARBALL="triveni-deploy-${TIMESTAMP}.tar.gz"
TARBALL_PATH="/tmp/${TARBALL}"
SAMPLE_IMG="https://www.trivenicabs.in/images/sightseeing/Agra/Taj_mahal.jpg"
HOMEPAGE="https://www.trivenicabs.in/"

echo "=== [1/6] Verify local build ==="
if [ ! -f .next/BUILD_ID ]; then
  echo "ERROR: .next/BUILD_ID missing. Run 'npm run build' first." >&2
  exit 1
fi
echo "Build ID: $(cat .next/BUILD_ID)"

echo "=== [2/6] Pack tarball ==="
# Important: include public/ explicitly. Memory: April 16 deploy lost public/.
tar czf "$TARBALL_PATH" \
  .next \
  public \
  src \
  package.json package-lock.json next.config.mjs jsconfig.json \
  postcss.config.mjs tailwind.config.js eslint.config.mjs

echo "=== [3/6] Verify public/ in tarball ==="
PUBLIC_COUNT=$(tar tzf "$TARBALL_PATH" | grep -c '^public/' || true)
if [ "$PUBLIC_COUNT" -lt 100 ]; then
  echo "ERROR: only $PUBLIC_COUNT public/ entries in tarball — aborting" >&2
  exit 1
fi
echo "OK: $PUBLIC_COUNT public/ entries"
ls -lh "$TARBALL_PATH"

echo "=== [4/6] Upload tarball ==="
scp -i "$KEY" -o StrictHostKeyChecking=no "$TARBALL_PATH" "$HOST:/tmp/${TARBALL}"

echo "=== [5/6] Server deploy (overlay pattern) ==="
ssh -i "$KEY" -o StrictHostKeyChecking=no "$HOST" bash <<EOF
set -euo pipefail
cd /home/ubuntu

echo "  -> hardlink-snapshot backup"
cp -al "${APP_DIR}" "${BACKUP_DIR}"

echo "  -> extract overlay (does NOT delete existing files)"
cd "${APP_DIR}"
tar xzf "/tmp/${TARBALL}"

echo "  -> verify public/ still present"
ls public/images > /dev/null
test -f public/favicon.ico

echo "  -> install any new deps (skip if package-lock unchanged)"
if [ -f package-lock.json ]; then
  npm ci --omit=dev --silent || npm install --omit=dev --silent
fi

echo "  -> pm2 restart"
pm2 restart triveni
sleep 3
pm2 status triveni
EOF

echo "=== [6/6] Verify deploy ==="
sleep 5
echo "  -> Homepage check"
HOMEPAGE_STATUS=$(curl -sI -o /dev/null -w "%{http_code}" "$HOMEPAGE")
echo "    $HOMEPAGE => $HOMEPAGE_STATUS"

echo "  -> Sample image check"
IMG_STATUS=$(curl -sI -o /dev/null -w "%{http_code}" "$SAMPLE_IMG")
echo "    $SAMPLE_IMG => $IMG_STATUS"

if [ "$HOMEPAGE_STATUS" != "200" ] || [ "$IMG_STATUS" != "200" ]; then
  echo ""
  echo "!!! DEPLOY VERIFICATION FAILED !!!"
  echo "Roll back with:"
  echo "  ssh -i \"$KEY\" $HOST"
  echo "  rm -rf $APP_DIR && mv $BACKUP_DIR $APP_DIR && pm2 restart triveni"
  exit 1
fi

echo ""
echo "=== DEPLOY COMPLETE ==="
echo "Backup at: $BACKUP_DIR"
echo "To roll back: rm -rf $APP_DIR && mv $BACKUP_DIR $APP_DIR && pm2 restart triveni"
