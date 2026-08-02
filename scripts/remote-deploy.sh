#!/usr/bin/env bash
# Server-side overlay deploy.
set -euo pipefail
TARBALL=/tmp/triveni-seo-deep.tar.gz
APP_DIR=/home/ubuntu/triveni
TS=$(date +%Y%m%d_%H%M%S)
BACKUP_DIR=/home/ubuntu/triveni-backup-deepseo-${TS}

echo "=== [1/5] Hardlink-snapshot backup ==="
cp -al "$APP_DIR" "$BACKUP_DIR"
echo "Backup: $BACKUP_DIR"

echo ""
echo "=== [2/5] Extract overlay ==="
cd "$APP_DIR"
PRE=$(find public/images -type f 2>/dev/null | wc -l)
echo "public/images BEFORE: $PRE"

tar xzf "$TARBALL"

POST=$(find public/images -type f 2>/dev/null | wc -l)
echo "public/images AFTER:  $POST"

if [ "$POST" -lt "$PRE" ]; then
  echo "!!! public/images shrank — rolling back !!!"
  rm -rf "$APP_DIR"
  mv "$BACKUP_DIR" "$APP_DIR"
  pm2 restart triveni
  exit 1
fi

echo ""
echo "=== [3/5] Verify .next/BUILD_ID ==="
cat .next/BUILD_ID

echo ""
echo "=== [4/5] PM2 restart ==="
pm2 restart triveni
sleep 4
pm2 status triveni

echo ""
echo "=== [5/5] Local healthcheck ==="
sleep 2
curl -sI -o /dev/null -w "  localhost:3000 => %{http_code}\n" http://localhost:3000/

rm -f "$TARBALL"
echo ""
echo "Done. Backup: $BACKUP_DIR"
