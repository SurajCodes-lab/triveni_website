#!/usr/bin/env bash
# Run on the production host only after upload and local verification.
set -euo pipefail
EXPECTED_SHA="$1"
EXPECTED_BUILD="$2"
EXPECTED_OLD="${3:-2b3YVGOie2ByFgDQT97Dc}"
RELEASE_TAG="${4:-week52-blogs-20261003}"
[[ "$RELEASE_TAG" =~ ^[a-z0-9-]+$ ]]
APP=/home/ubuntu/triveni
STAGE=/home/ubuntu/triveni-stage-${RELEASE_TAG}
BACKUP=/home/ubuntu/triveni-backup-${RELEASE_TAG}
FAILED=/home/ubuntu/triveni-failed-${RELEASE_TAG}
ARCHIVE=/tmp/triveni-week52-blogs-20261003.tar.gz
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
test "$(cat "$APP/.next/BUILD_ID")" = "$EXPECTED_OLD"
mkdir "$STAGE"
tar -xzf "$ARCHIVE" -C "$STAGE"
# New files are extracted before copying old hardlinks, preserving the backup.
cp -al --no-clobber "$APP/." "$STAGE/"
test "$(cat "$STAGE/.next/BUILD_ID")" = "$EXPECTED_BUILD"
for f in src/utilis/analytics.js src/components/analytics/WebVitalsReporter.jsx package.json package-lock.json next.config.mjs; do
  cmp "$APP/$f" "$STAGE/$f"
done
python3 - "$APP" "$STAGE" <<'PY'
import pathlib,sys,re
before,after=map(pathlib.Path,sys.argv[1:])
strip=lambda s:re.sub(r'  icons: \{[\s\S]*?\n  manifest:', '  manifest:', s)
assert strip((before/'src/app/layout.js').read_text())==strip((after/'src/app/layout.js').read_text()),'Unexpected non-icon layout change'
for subtree in ['src','public']:
 old={p.relative_to(before/subtree) for p in (before/subtree).rglob('*') if p.is_file()}
 new={p.relative_to(after/subtree) for p in (after/subtree).rglob('*') if p.is_file()}
 assert not old-new,(subtree,old-new)
old={p.relative_to(before/'.next/server/app') for p in (before/'.next/server/app').rglob('*.html')}
new={p.relative_to(after/'.next/server/app') for p in (after/'.next/server/app').rglob('*.html')}
assert not old-new,old-new
print('PRESERVATION_OK: all previous source, public and generated HTML paths retained; tracking files unchanged')
PY
cd "$STAGE"
node node_modules/next/dist/bin/next start --hostname 127.0.0.1 -p 3109 >/tmp/triveni-week52-stage.log 2>&1 &
test_pid=$!
ready=0
for attempt in $(seq 1 30); do
 if curl --fail --silent http://127.0.0.1:3109/ -o /dev/null; then ready=1; break; fi
 sleep 1
done
test "$ready" = 1
check_release() {
 python3 - "$1" <<'PY'
import urllib.request,re,json,sys
origin='http://127.0.0.1:'+sys.argv[1]
slugs=json.load(open('scripts/week52-blog-slugs.json'))
def get(p):
 with urllib.request.urlopen(origin+p,timeout=40) as r:
  assert r.status==200,p
  return r.read().decode('utf-8',errors='replace')
sitemap=get('/sitemap.xml');index=get('/blog');chunks=set()
for slug in slugs:
 p='/blog/'+slug;html=get(p)
 assert 'https://www.trivenicabs.in'+p in sitemap,p+' sitemap'
 assert slug in index,p+' archive'
 assert 'rel="canonical" href="https://www.trivenicabs.in'+p+'"' in html,p+' canonical'
 visible=re.sub(r'<script\b[^>]*>[\s\S]*?</script>','',html,flags=re.I)
 assert not re.search(r'<h2[^>]*>Quick Links</h2>',visible),p+' Quick Links remains'
 assert 'border-collapse:collapse' in visible,p+' missing visible table grid'
 assert 'rel="icon" href="/apple-touch-icon.png"' in visible,p+' square PNG icon'
 for marker in ['ga4-lib','ga-init','analytics-bootstrap','gtm-loader','google-site-verification']:
  assert marker in html,(p,marker)
 chunks.update(re.findall(r'<script[^>]+src="([^\"]+)"',html))
for p in ['/','/lucknow','/wedding/lucknow','/sightseeing/lucknow','/chardham-yatra','/one-way-cab','/tempo-traveller']:
 get(p)
for p in ['/sightseeing/lucknow','/sightseeing/lucknow-heritage-city-tour','/sightseeing/lucknow-to-ayodhya-religious-tour','/sightseeing/lucknow-to-prayagraj-religious-tour','/sightseeing/lucknow-nawabi-heritage-tour']:
 html=get(p)
 assert 'id="sightseeing-planning"' in html,p+' missing sightseeing planning guide'
 assert 'ga4-lib' in html,p+' missing tracking marker'
for chunk in chunks:
 if chunk.startswith('/_next/'):get(chunk)
with urllib.request.urlopen(origin+'/images/sightseeing/Lucknow/Lucknow_hero_section.jpg') as r:assert r.status==200
print('HEALTH_OK',len(slugs),'blogs;',len(chunks),'script resources; existing service routes and image')
PY
}
check_release 3109
cleanup
test_pid=''
mv "$APP" "$BACKUP"
if ! mv "$STAGE" "$APP"; then mv "$BACKUP" "$APP"; exit 1; fi
activated=1
cd "$APP"
pm2 restart triveni
ready=0
for attempt in $(seq 1 30); do
 if curl --fail --silent http://127.0.0.1:3000/ -o /dev/null; then ready=1; break; fi
 sleep 1
done
test "$ready" = 1
check_release 3000
echo "DEPLOYED_BUILD=$(cat "$APP/.next/BUILD_ID")"
echo "BACKUP=$BACKUP"
echo DEPLOY_COMPLETE
