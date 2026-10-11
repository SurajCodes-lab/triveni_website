// scripts/gen-route-manifest.mjs
//
// Writes src/generated/known-routes.json — every URL path the production build
// actually produced — and src/generated/family-slugs.json, the per-family slug
// lists that client components need to avoid linking to pages that do not
// exist.
//
// WHY (Week 47): an internal-link audit of the built site found 1,939 distinct
// hrefs pointing at pages that were never built — 28,000 link occurrences —
// because several link builders synthesise URLs by convention (`/${city}-travel-guide`,
// `/best-time-to-visit/${city}`, `/one-way-cab/${a}-to-${b}`) without checking that
// the page exists. Googlebot followed them and Search Console reported 2,519
// "Not found" pages. The helpers now filter against this manifest.
//
// Run after every production build (it reads .next), or pass a directory:
//   node scripts/gen-route-manifest.mjs [path/to/.next/server/app]

import { readdirSync, statSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { join, relative, sep } from 'node:path';

const root = process.argv[2] || join(process.cwd(), '.next', 'server', 'app');
if (!existsSync(root)) { console.error('no build output at', root); process.exit(1); }

const pages = new Set();
(function walk(d) {
  for (const f of readdirSync(d)) {
    const p = join(d, f);
    if (statSync(p).isDirectory()) { walk(p); continue; }
    if (!f.endsWith('.html')) continue;
    let rel = '/' + relative(root, p).split(sep).join('/').slice(0, -5);
    if (rel === '/index') rel = '/';
    if (rel.startsWith('/_') || rel === '/404') continue;
    if (/\[|\]/.test(rel)) continue; // literal bracket folders are never real pages
    pages.add(rel);
  }
})(root);

// public/ files are real URLs too
const pub = join(process.cwd(), 'public');
(function walkPub(d) {
  for (const f of readdirSync(d)) {
    const p = join(d, f);
    if (statSync(p).isDirectory()) { walkPub(p); continue; }
    pages.add('/' + relative(pub, p).split(sep).join('/'));
  }
})(pub);
for (const x of ['/sitemap.xml', '/sitemap-images.xml', '/robots.txt', '/llms.txt', '/rss.xml', '/search']) pages.add(x);

const sorted = [...pages].sort();
const outDir = join(process.cwd(), 'src', 'generated');
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'known-routes.json'), JSON.stringify(sorted));

// Small per-family slug lists for client components (a few KB, not the whole manifest).
const fam = (prefix) => sorted.filter((p) => p.startsWith(prefix + '/')).map((p) => p.slice(prefix.length + 1)).filter((s) => !s.includes('/'));
const families = {
  'airport-service': fam('/airport-service'),
  'wedding': fam('/wedding'),
  'corporate-transportation-service': fam('/corporate-transportation-service'),
  'best-time-to-visit': fam('/best-time-to-visit'),
  'local-taxi': fam('/local-taxi'),
  'outstation-cabs': fam('/outstation-cabs'),
  'cab-service': fam('/cab-service'),
  'taxi-fare': fam('/taxi-fare'),
  'tempo-traveller': fam('/tempo-traveller'),
  'one-way-cab': fam('/one-way-cab'),
  'distance': fam('/distance'),
  'toll-cost': fam('/toll-cost'),
  'bus-routes': fam('/bus-routes'),
  'sightseeing': fam('/sightseeing'),
  'railway-station-taxi': fam('/railway-station-taxi'),
  // single-segment pages (city hubs, corridors, guides) — everything at the root
  root: sorted.filter((p) => p.startsWith('/') && !p.slice(1).includes('/') && !p.includes('.')).map((p) => p.slice(1)),
};
writeFileSync(join(outDir, 'family-slugs.json'), JSON.stringify(families));
// A few KB for the client components that build links from a city name.
const clientSlugs = {
  'airport-service': families['airport-service'],
  'sightseeing': families['sightseeing'],
  'wedding': families['wedding'],
  'corporate-transportation-service': families['corporate-transportation-service'],
  'tempo-traveller': families['tempo-traveller'],
  'cab-service': families['cab-service'],
  'local-taxi': families['local-taxi'],
  'outstation-cabs': families['outstation-cabs'],
  'best-time-to-visit': families['best-time-to-visit'],
  // root pages that link builders synthesise from a city name
  rootPatterns: families.root.filter((r) => /-travel-guide$|-shopping-guide$|-food-tour$|^places-to-visit-near-|^how-to-reach-|^weekend-getaways-from-|^things-to-do-in-/.test(r)),
  // Week 48: every other single-segment page except the corridors (/a-to-b), so
  // a client component can check a synthesised /<city> hub link too — see
  // src/lib/seo/client-route-exists.js. ~430 slugs, a few KB.
  rootPages: families.root.filter((r) => r && !r.includes('-to-')),
};
writeFileSync(join(outDir, 'client-slugs.json'), JSON.stringify(clientSlugs));
console.log(`known routes: ${sorted.length} | root pages: ${families.root.length} | families: ${Object.keys(families).length}`);
