// Week 49: a truthful "checked on" date for EVERY built page.
//
// A page's date is the latest of:
//   (a) the last git commit that touched any file in the page's import chain
//       (template, data, shared components), and
//   (b) the explicit content-pass dates recorded below for files changed in a
//       pass that has not been committed yet (Week 48's targets, and each
//       Week 49 family pass as it lands).
// Nothing here reads the clock, the build time or filesystem mtimes, so a
// rebuild never advances a date. Output: src/generated/content-updates.json,
// which content-updates.js reads for the visible line, the WebPage markup and
// the sitemap lastmod.
const fs = require('node:fs');
const path = require('node:path');
const { execSync } = require('node:child_process');

const root = path.resolve(__dirname, '..');
const known = require('../src/generated/known-routes.json');

// (b) explicit pass dates: file -> date. Week 48's, plus Week 49 passes.
const targets = new Map([
  ['src/components/seo/FamilyFacts.jsx', '2026-09-13'],
  ['src/components/airport/AirportRoutePage.jsx', '2026-09-12'],
  ['src/components/airport/CityAirportServiceClient.js', '2026-09-12'],
  ['src/components/airport/TerminalPageClient.jsx', '2026-09-12'],
  ['src/components/events/EventVehicleClient.jsx', '2026-09-13'],
  ['src/components/sightseeing/SightseeingFacts.jsx', '2026-09-13'],
  ['src/lib/seo/monument-glance.js', '2026-09-13'],
  ['src/utilis/roadParagraphs/index.js', '2026-09-12'],
  ['src/utilis/guides/week48/index.js', '2026-09-12'],
  ['src/components/VehicleLocalityClient.jsx', '2026-09-13'],
  ['src/components/seo/WeekGuidesForCity.jsx', '2026-09-13'],
  ['src/app/page.js', '2026-09-13'],
]);
// Week 49 pass dates are appended by the family passes (see week-49 records).
const week49 = path.join(root, 'scripts/week49-pass-dates.json');
if (fs.existsSync(week49)) {
  for (const [file, date] of Object.entries(JSON.parse(fs.readFileSync(week49, 'utf8')))) targets.set(file, date);
}

// (a) git: last commit date per file, one pass over the log.
const gitDates = new Map();
{
  const out = execSync('git log --format=%cs --name-only', { cwd: root, encoding: 'utf8', maxBuffer: 1 << 28 });
  let date = null;
  for (const line of out.split('\n')) {
    const t = line.trim();
    if (!t) continue;
    if (/^\d{4}-\d{2}-\d{2}$/.test(t)) { date = t; continue; }
    if (date && !gitDates.has(t)) gitDates.set(t, date);
  }
}
// (a') files changed in the working tree since the last commit (Weeks 46 to 49
// were worked in the tree): their date is the day the file was last written,
// which for an uncommitted file is the true change date. This is the only use
// of a modification time, and it applies only to files git reports as changed.
const modified = new Set();
{
  const out = execSync('git status --porcelain --untracked-files=all', { cwd: root, encoding: 'utf8', maxBuffer: 1 << 28 });
  for (const line of out.split('\n')) {
    const f = line.slice(3).trim().replace(/\\/g, '/');
    if (f) modified.add(f);
  }
}
// Shared files whose working-tree edit did not change the facts on the pages
// that import them (their date is taken from git, not the tree):
//  - tollCostData.js: Week 48 added a `corridorRoad` field read only by the
//    toll page's own title; the toll figures every other page reads are unchanged.
//  - AEOHead.jsx and content-updates.js: the date line itself and its lookup;
//    rolling the line out must not set the date it prints.
const IGNORE_TREE_DATE = new Set(['src/utilis/attractionBlogs.js', 'src/utilis/tollCostData.js', 'src/components/seo/AEOHead.jsx', 'src/lib/seo/content-updates.js', 'scripts/week49-content-dates.cjs']);
function treeDate(rel) {
  if (!modified.has(rel) || IGNORE_TREE_DATE.has(rel)) return null;
  try { return fs.statSync(path.join(root, rel)).mtime.toISOString().slice(0, 10); } catch { return null; }
}

const memo = new Map();
const why = new Map(); // file -> the chain file responsible for its date (for TRACE)
function dateOf(file, visiting = new Set()) {
  const rel = path.relative(root, file).replace(/\\/g, '/');
  if (memo.has(file)) return memo.get(file);
  if (visiting.has(file)) return null;
  visiting.add(file);
  let date = targets.get(rel) || null;
  if (date) why.set(file, rel + ' (pass)');
  const g = gitDates.get(rel);
  if (g && (!date || g > date)) { date = g; why.set(file, rel + ' (git)'); }
  const t = treeDate(rel);
  if (t && (!date || t > date)) { date = t; why.set(file, rel + ' (tree)'); }
  let source = '';
  try { source = fs.readFileSync(file, 'utf8'); } catch { source = ''; }
  for (const m of source.matchAll(/(?:import|export)\s+(?:[^;'"\n]+?\s+from\s+)?['"]([^'"]+)['"]/g)) {
    const name = m[1];
    if (!name.startsWith('@/') && !name.startsWith('.')) continue;
    const base = name.startsWith('@/') ? path.join(root, 'src', name.slice(2)) : path.resolve(path.dirname(file), name);
    const resolved = ['', '.js', '.jsx', '.mjs', '.cjs', '/index.js'].map((e) => base + e).find((p) => fs.existsSync(p) && fs.statSync(p).isFile());
    if (!resolved || resolved.endsWith('.json')) continue;
    const child = dateOf(resolved, visiting);
    if (child && (!date || child > date)) { date = child; why.set(file, why.get(resolved) || rel); }
  }
  visiting.delete(file);
  memo.set(file, date);
  return date;
}

function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((e) => (e.isDirectory() ? walk(path.join(dir, e.name)) : [path.join(dir, e.name)]));
}

const appRoot = path.join(root, 'src/app');
const entries = {};
const pages = walk(appRoot).filter((p) => /[\\/]page\.js$/.test(p));
const traceCounts = {};
for (const file of pages) {
  const date = dateOf(file);
  if (!date) continue;
  if (process.env.TRACE) {
    const w = why.get(file) || '?';
    traceCounts[w] = (traceCounts[w] || 0) + 1;
    if (process.env.TRACE === '2') console.log(date, path.relative(root, file).replace(/\\/g, '/'), '<-', w);
  }
  const relDir = path.relative(appRoot, path.dirname(file)).replace(/\\/g, '/');
  const parts = relDir.split('/').filter((p) => p && !/^\(.*\)$/.test(p));
  const pattern = '^/' + parts.map((p) => (p.startsWith('[') ? '[^/]+' : p.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'))).join('/') + '$';
  const regex = new RegExp(parts.length ? pattern : '^/$');
  for (const p of known) {
    if (typeof p !== 'string' || !regex.test(p)) continue;
    if (!entries[p] || date > entries[p]) entries[p] = date;
  }
}
// Week 48's explicit per-route record wins where it is later (it was authored, not derived).
const w48 = path.join(root, 'src/generated/week48-content-updates.json');
if (fs.existsSync(w48)) {
  for (const [p, d] of Object.entries(JSON.parse(fs.readFileSync(w48, 'utf8')))) if (!entries[p] || d > entries[p]) entries[p] = d;
}
const sorted = Object.fromEntries(Object.entries(entries).sort(([a], [b]) => a.localeCompare(b)));
// Week 49: per-address overrides for pages whose content was re-checked or
// corrected on a date the file-level rules cannot express (e.g. two posts in a
// shared data file). {"/blog/slug": "YYYY-MM-DD"}; a later date wins.
{
  const urlDates = path.join(root, 'scripts/week49-url-dates.json');
  if (fs.existsSync(urlDates)) {
    for (const [u, d] of Object.entries(JSON.parse(fs.readFileSync(urlDates, 'utf8')))) if (!sorted[u] || sorted[u] < d) sorted[u] = d;
  }
}
fs.writeFileSync(path.join(root, 'src/generated/content-updates.json'), JSON.stringify(sorted, null, 0));
// Compact form for the client-rendered line: the most common date as the
// default, and only the pages that differ, so the bundle stays small.
{
  const count = {};
  for (const d of Object.values(sorted)) count[d] = (count[d] || 0) + 1;
  const defaultDate = Object.entries(count).sort((a, b) => b[1] - a[1])[0]?.[0] || null;
  const exceptions = {};
  for (const [p, d] of Object.entries(sorted)) if (d !== defaultDate) exceptions[p] = d;
  fs.writeFileSync(path.join(root, 'src/generated/content-updates-compact.json'), JSON.stringify({ defaultDate, exceptions }, null, 0));
  console.log(`compact: default ${defaultDate}, ${Object.keys(exceptions).length} exceptions`);
}
const dist = {};
for (const d of Object.values(sorted)) dist[d] = (dist[d] || 0) + 1;
if (process.env.TRACE) console.log('templates by responsible file:', Object.entries(traceCounts).sort((a, b) => b[1] - a[1]).slice(0, 12));
console.log(`content-updates.json: ${Object.keys(sorted).length} pages dated (of ${known.length} known routes)`);
console.log('by date:', Object.entries(dist).sort().map(([d, n]) => `${d}:${n}`).join('  '));
