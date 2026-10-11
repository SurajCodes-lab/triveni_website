#!/usr/bin/env bash
set -euo pipefail

APP=/home/ubuntu/triveni
STAGE=/home/ubuntu/triveni-stage-week50-20260923-v2
BACKUP=/home/ubuntu/triveni-backup-week50-20260923
FAILED=/home/ubuntu/triveni-failed-week50-20260923
ARCHIVE=/tmp/triveni-week50-20260923.tar.gz
EXPECTED_SHA="$1"
EXPECTED_BUILD=F4QJyliCYo1kBpt2rLuNX
activated=0
test_pid=''
cleanup() { if [ -n "$test_pid" ]; then kill "$test_pid" 2>/dev/null || true; wait "$test_pid" 2>/dev/null || true; fi; }
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
test ! -e "$STAGE"
test ! -e "$BACKUP"
test ! -e "$FAILED"
echo "$EXPECTED_SHA  $ARCHIVE" | sha256sum -c -
test "$(cat "$APP/.next/BUILD_ID")" = aBC4w7JFBjJ0doOWSbQe9

# Extract new files into an empty stage first, then preserve every other file
# from the current release without overwriting any new file. Never extract
# over hard links, so the current release and rollback copy stay untouched.
mkdir "$STAGE"
tar -xzf "$ARCHIVE" -C "$STAGE"
cp -al --no-clobber "$APP/." "$STAGE/"
test "$(cat "$STAGE/.next/BUILD_ID")" = "$EXPECTED_BUILD"
for f in src/app/layout.js src/utilis/analytics.js src/components/analytics/WebVitalsReporter.jsx package.json package-lock.json; do
  cmp "$APP/$f" "$STAGE/$f"
done
test -f "$STAGE/public/images/car/ertiga.jpg"
test -f "$STAGE/public/images/car/innova_crysta.jpg"

python3 - "$APP" "$STAGE" <<'PY'
import pathlib, sys
before, after = map(pathlib.Path, sys.argv[1:])
for subtree in ['src', 'public']:
    old = {p.relative_to(before/subtree) for p in (before/subtree).rglob('*') if p.is_file()}
    new = {p.relative_to(after/subtree) for p in (after/subtree).rglob('*') if p.is_file()}
    assert not old-new, (subtree, sorted(map(str, old-new)))
old = {p.relative_to(before/'.next/server/app') for p in (before/'.next/server/app').rglob('*.html')}
new = {p.relative_to(after/'.next/server/app') for p in (after/'.next/server/app').rglob('*.html')}
assert not old-new, sorted(map(str, old-new))
print('PRESERVATION_OK: source files, public files, HTML routes and protected tracking files')
PY

cd "$STAGE"
node node_modules/next/dist/bin/next start --hostname 127.0.0.1 -p 3109 >/tmp/triveni-week50-stage.log 2>&1 &
test_pid=$!
ready=0
for attempt in $(seq 1 25); do
  if curl --fail --silent http://127.0.0.1:3109/ -o /tmp/triveni-week50-home.html; then ready=1; break; fi
  sleep 1
done
test "$ready" = 1

check_release() {
  local port="$1"
  curl --fail --silent "http://127.0.0.1:$port/distance/delhi-to-agra" -o /tmp/triveni-week50-distance.html
  curl --fail --silent "http://127.0.0.1:$port/distance/wagah-border-to-golden-temple" -o /tmp/triveni-week50-reverse.html
  curl --fail --silent "http://127.0.0.1:$port/delhi-to-agra" -o /tmp/triveni-week50-corridor.html
  curl --fail --silent "http://127.0.0.1:$port/rishikesh" -o /tmp/triveni-week50-city.html
  for marker in ga4-lib ga-init analytics-bootstrap gtm-loader google-site-verification; do
    grep -q "$marker" /tmp/triveni-week50-distance.html
  done
  grep -q 'Innova Crysta' /tmp/triveni-week50-distance.html
  grep -q '₹5,400' /tmp/triveni-week50-distance.html
  grep -q 'href="#distance-enquiry"' /tmp/triveni-week50-reverse.html
  grep -q 'id="distance-enquiry"' /tmp/triveni-week50-reverse.html
  grep -q 'The one-way sedan fare is' /tmp/triveni-week50-corridor.html
}
check_release 3109
cleanup
test_pid=''

mv "$APP" "$BACKUP"
if ! mv "$STAGE" "$APP"; then mv "$BACKUP" "$APP"; exit 1; fi
activated=1
pm2 restart triveni
ready=0
for attempt in $(seq 1 25); do
  if curl --fail --silent http://127.0.0.1:3000/ -o /tmp/triveni-week50-home.html; then ready=1; break; fi
  sleep 1
done
test "$ready" = 1
check_release 3000
echo "DEPLOYED_BUILD=$(cat "$APP/.next/BUILD_ID")"
echo "BACKUP=$BACKUP"
echo DEPLOY_COMPLETE
