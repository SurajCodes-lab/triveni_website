// Week 49 — which pages does nothing on the site link to?
//
// A page with no inbound internal link is the shape Search Console files under
// "discovered, currently not indexed": the crawler knows the address from the
// sitemap and never finds a reason to fetch it. With 3,800 pages produced, the
// question is not whether the sitemap lists them but whether the site itself
// points at them.
//
// This reads every generated page, collects every internal href, and reports the
// pages that nothing links to, grouped by family.
const fs = require('fs');
const path = require('path');

const REPO = path.resolve(__dirname, '..');
const APP = path.join(REPO, '.next/server/app');
const SITE = 'https://www.trivenicabs.in';

function walk(dir, out = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p, out);
    else if (e.name.endsWith('.html')) out.push(p);
  }
  return out;
}

if (!fs.existsSync(APP)) {
  console.log('no generated output — run a generation first.');
  process.exit(0);
}

const files = walk(APP);
const pageOf = (f) => '/' + path.relative(APP, f).replace(/\\/g, '/').replace(/\.html$/, '').replace(/^\(routes\)\//, '');
const pages = new Set(files.map(pageOf));

const linkedFrom = new Map();
for (const f of files) {
  const from = pageOf(f);
  const html = fs.readFileSync(f, 'utf8');
  const seen = new Set();
  for (const m of html.matchAll(/href="(\/[^"#?]*)"/g)) {
    let href = m[1].replace(/\/$/, '') || '/';
    if (href.startsWith('/_next') || href.startsWith('/api')) continue;
    if (/\.[a-z0-9]{2,5}$/i.test(href)) continue;
    if (href === from) continue;
    if (seen.has(href)) continue;
    seen.add(href);
    if (!linkedFrom.has(href)) linkedFrom.set(href, new Set());
    linkedFrom.get(href).add(from);
  }
}

const orphans = [];
for (const p of pages) {
  const n = linkedFrom.has(p) ? linkedFrom.get(p).size : 0;
  if (n === 0) orphans.push(p);
}
const thin = [];
for (const p of pages) {
  const n = linkedFrom.has(p) ? linkedFrom.get(p).size : 0;
  if (n > 0 && n < 3) thin.push([p, n]);
}

const fam = (p) => (p.split('/').length > 2 ? p.split('/')[1] : '(single-level)');
const byFam = new Map();
for (const p of orphans) {
  const k = fam(p);
  byFam.set(k, (byFam.get(k) || 0) + 1);
}

console.log('pages generated:', pages.size);
console.log('pages nothing links to:', orphans.length);
for (const [k, n] of [...byFam.entries()].sort((a, b) => b[1] - a[1]).slice(0, 20)) {
  console.log(`   ${k.padEnd(34)} ${n}`);
}
console.log('\nexamples:');
for (const p of orphans.slice(0, 20)) console.log('   ', SITE + p);
console.log('\npages with only one or two inbound links:', thin.length);
for (const [p, n] of thin.slice(0, 10)) console.log('   ', n, SITE + p);
