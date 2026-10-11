// Does any redirect on the site now point away from a page that exists?
// A redirect is right when its source is gone. It is wrong when the source
// resolves: the reader and the crawler are sent away from the answer.
const fs = require('fs');
const path = require('path');

const REPO = require('path').resolve(__dirname, '..');
const known = require(path.join(REPO, 'src/generated/known-routes.json'));
const routes = new Set(known.routes || known);

const rows = [];
for (const dir of ['src/lib/seo', 'scripts']) {
  const d = path.join(REPO, dir);
  for (const f of fs.readdirSync(d)) {
    if (!/redirect/i.test(f) || !/\.(mjs|js|cjs)$/.test(f)) continue;
    const text = fs.readFileSync(path.join(d, f), 'utf8');
    for (const m of text.matchAll(/source:\s*['"]([^'"]+)['"][^}]*?destination:\s*['"]([^'"]+)['"]/g)) {
      rows.push({ file: f, source: m[1], destination: m[2] });
    }
  }
}
const clashes = rows.filter((r) => routes.has(r.source));
const deadDest = rows.filter((r) => r.destination.startsWith('/') && !routes.has(r.destination) && r.destination !== '/');
console.log('redirect rules read:', rows.length);
console.log('rules whose SOURCE is a page that exists (the page is hidden):', clashes.length);
for (const c of clashes.slice(0, 25)) console.log('   ', c.source, '->', c.destination, `(${c.file})`);
console.log('rules whose DESTINATION does not exist (a redirect into a 404):', deadDest.length);
for (const c of deadDest.slice(0, 25)) console.log('   ', c.source, '->', c.destination, `(${c.file})`);
