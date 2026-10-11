#!/usr/bin/env bash
set -euo pipefail

APP=/home/ubuntu/triveni
STAGE=/home/ubuntu/triveni-stage-20260919-distance-01
BACKUP=/home/ubuntu/triveni-backup-20260919-distance-01
FAILED=/home/ubuntu/triveni-failed-20260919-distance-01
ARCHIVE=/tmp/triveni-distance-20260919.tar.gz
EXPECTED_SHA="$1"
activated=0
test_pid=''

cleanup() {
  if [ -n "$test_pid" ]; then kill "$test_pid" 2>/dev/null || true; fi
}
rollback() {
  cleanup
  if [ "$activated" = 1 ]; then
    mv "$APP" "$FAILED"
    mv "$BACKUP" "$APP"
    pm2 restart triveni
    echo "ROLLED_BACK; failed release retained at $FAILED" >&2
  fi
}
trap rollback ERR
trap cleanup EXIT

test "$(readlink -f "$APP")" = "$APP"
test -d "$APP/public/images"
test ! -e "$STAGE"
test ! -e "$BACKUP"
test ! -e "$FAILED"
echo "$EXPECTED_SHA  $ARCHIVE" | sha256sum -c -

# Extract into an empty release directory. Share only preserved public assets
# and older immutable chunks, never files that the new extraction overwrites.
mkdir "$STAGE"
tar -xzf "$ARCHIVE" -C "$STAGE"
cp -al --no-clobber "$APP/public/." "$STAGE/public/"
cp -al --no-clobber "$APP/.next/static/." "$STAGE/.next/static/"
for env_file in .env .env.local .env.production .env.production.local; do
  if [ -f "$APP/$env_file" ]; then cp -p "$APP/$env_file" "$STAGE/$env_file"; fi
done
cd "$STAGE"
test -s .next/BUILD_ID
test -f public/images/HERO_SECTION_MAIN_PAGE.jpg
npm ci --omit=dev --no-audit --no-fund

node node_modules/next/dist/bin/next start --hostname 127.0.0.1 -p 3109 > /tmp/triveni-distance-stage.log 2>&1 &
test_pid=$!
ready=0
for attempt in $(seq 1 20); do
  if curl --fail --silent http://127.0.0.1:3109/ -o /tmp/triveni-distance-stage.html; then ready=1; break; fi
  sleep 1
done
test "$ready" = 1
grep -q 'Outstation cabs.' /tmp/triveni-distance-stage.html
grep -q 'HERO_SECTION_MAIN_PAGE' /tmp/triveni-distance-stage.html
curl --fail --silent http://127.0.0.1:3109/distance/agra-to-jaipur -o /tmp/triveni-distance-stage-route.html
grep -q 'distance-summary' /tmp/triveni-distance-stage-route.html
grep -q 'road-and-stops' /tmp/triveni-distance-stage-route.html
kill "$test_pid"
wait "$test_pid" || true
test_pid=''

mv "$APP" "$BACKUP"
if ! mv "$STAGE" "$APP"; then mv "$BACKUP" "$APP"; exit 1; fi
activated=1
pm2 restart triveni
healthy=0
for attempt in $(seq 1 20); do
  if curl --fail --silent http://127.0.0.1:3000/ -o /tmp/triveni-distance-live.html; then
    if grep -q 'Outstation cabs.' /tmp/triveni-distance-live.html; then healthy=1; break; fi
  fi
  sleep 1
done
test "$healthy" = 1
grep -q 'HERO_SECTION_MAIN_PAGE' /tmp/triveni-distance-live.html
curl --fail --silent http://127.0.0.1:3000/distance/agra-to-jaipur -o /tmp/triveni-distance-live-route.html
grep -q 'distance-summary' /tmp/triveni-distance-live-route.html
pm2 describe triveni
echo "DEPLOYED_BUILD=$(cat "$APP/.next/BUILD_ID")"
echo "BACKUP=$BACKUP"
echo "DEPLOY_COMPLETE"
