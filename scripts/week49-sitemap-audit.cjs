// Week 49 — does the sitemap ask a crawler to fetch anything it will be turned away from?
//
// A sitemap is a list of pages the site wants indexed. An address in it that
// answers with a redirect wastes a crawl and shows up in the coverage report as
// "Page with redirect", which is one of the two largest buckets the client's
// export carries. This reads the generated sitemap and the redirect rules and
// reports any overlap, plus anything in the sitemap that is not a page at all.
const fs = require('fs');
const path = require('path');

const REPO = path.resolve(__dirname, '..');
const SITE = 'https://www.trivenicabs.in';

function redirectSources() {
  const out = new Map();
  for (const dir of ['src/lib/seo', 'scripts']) {
    const d = path.join(REPO, dir);
    if (!fs.existsSync(d)) continue;
    for (const f of fs.readdirSync(d)) {
      if (!/redirect/i.test(f) || !/\.(mjs|js|cjs)$/.test(f)) continue;
      const text = fs.readFileSync(path.join(d, f), 'utf8');
      for (const m of text.matchAll(/source:\s*['"]([^'"]+)['"][^}]*?destination:\s*['"]([^'"]+)['"]/g)) {
        out.set(m[1], { to: m[2], file: f });
      }
    }
  }
  return out;
}

function sitemapUrls() {
  // the generated sitemap lives as a route; read every .html/.body the app wrote for it
  const roots = [
    path.join(REPO, '.next/server/app/sitemap.xml.body'),
    path.join(REPO, '.next/server/app/sitemap.xml.html'),
    path.join(REPO, '.next/server/app/sitemap/route.js'),
  ];
  for (const p of roots) {
    if (fs.existsSync(p)) {
      const text = fs.readFileSync(p, 'utf8');
      const urls = [...text.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
      if (urls.length) return urls;
    }
  }
  return [];
}

const urls = sitemapUrls();
if (!urls.length) {
  console.log('sitemap not found in the generated output — run a generation first, or fetch it live.');
  process.exit(0);
}
const red = redirectSources();
const known = require(path.join(REPO, 'src/generated/known-routes.json'));
const routes = new Set(known.routes || known);

const redirected = [];
const notAPage = [];
for (const u of urls) {
  const p = u.replace(SITE, '') || '/';
  if (red.has(p)) redirected.push([p, red.get(p)]);
  else if (p !== '/' && !routes.has(p)) notAPage.push(p);
}
console.log('sitemap addresses:', urls.length);
console.log('addresses that answer with a redirect:', redirected.length);
for (const [p, r] of redirected.slice(0, 30)) console.log('   ', p, '->', r.to, `(${r.file})`);
console.log('addresses that are not in the list of pages the site produces:', notAPage.length);
for (const p of notAPage.slice(0, 20)) console.log('   ', p);
