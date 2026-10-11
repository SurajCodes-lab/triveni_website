#!/usr/bin/env node
// Read-only site audit. Writes evidence outside the repository, to the Week 51 folder.
// Existing build evidence is explicitly distinct from fresh/live verification.
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { fileURLToPath } from 'node:url';
import nextConfig from '../next.config.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SITE = 'https://www.trivenicabs.in';
// Reports live outside the repository (see the Week 51 folder), never in the working tree.
const WEEK51_OUT = 'D:/Desktop/triveni_next/2.0/week51/implementation-evidence';
const protectedFiles = [
  'src/app/layout.js', 'src/utilis/analytics.js',
  'src/components/analytics/WebVitalsReporter.jsx',
];
const read = f => fs.readFileSync(path.join(ROOT, f), 'utf8');
const hash = data => crypto.createHash('sha256').update(data).digest('hex');
function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap(e => {
    const p = path.join(dir, e.name);
    return e.isDirectory() ? walk(p) : [p];
  });
}
const relative = f => path.relative(ROOT, f).split(path.sep).join('/');
const decode = text => text.replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#(x[\da-f]+|\d+);/gi, (_, n) => String.fromCodePoint(n[0].toLowerCase() === 'x' ? parseInt(n.slice(1), 16) : Number(n)));
export function normalize(href, from = '/') {
  try {
    const u = new URL(decode(href), SITE + from);
    if (!['trivenicabs.in', 'www.trivenicabs.in'].includes(u.hostname) || !['http:', 'https:'].includes(u.protocol)) return null;
    return u.pathname.replace(/\/+$/, '') || '/';
  } catch { return null; }
}
export function resolveExact(start, redirects) {
  const visited = new Set();
  let current = start;
  while (redirects.has(current)) {
    if (visited.has(current)) return { target: current, cycle: true };
    visited.add(current);
    current = redirects.get(current);
  }
  return { target: current, cycle: false };
}
const attrs = tag => Object.fromEntries([...tag.matchAll(/([\w:-]+)\s*=\s*(?:"([^"]*)"|'([^']*)')/g)].map(m => [m[1].toLowerCase(), decode(m[2] ?? m[3])]));
const csv = rows => rows.map(row => row.map(v => '"' + String(v ?? '').replaceAll('"', '""') + '"').join(',')).join('\n') + '\n';

export async function audit(runName, compareFile) {
  if (!/^[a-zA-Z0-9_-]+$/.test(runName)) throw new Error('Run name must contain only letters, digits, _ or -.');
  const output = path.join(WEEK51_OUT, runName);
  if (fs.existsSync(output)) throw new Error(`Refusing to overwrite existing evidence: ${output}`);
  const appRoot = path.join(ROOT, '.next/server/app');
  const manifest = JSON.parse(read('.next/routes-manifest.json'));
  const currentRules = await nextConfig.redirects();
  const literals = currentRules.filter(r => !r.has && !r.missing && !/[:*()]/.test(r.source));
  const redirects = new Map();
  // Match Next's first applicable rule precedence.
  for (const r of literals) if (!redirects.has(normalize(r.source))) redirects.set(normalize(r.source), normalize(r.destination));
  const dynamicRules = manifest.redirects.filter(r => !r.has && !r.missing && /[:*()]/.test(r.source)).map(r => new RegExp(r.regex));
  const dynamicPages = (manifest.dynamicRoutes || []).map(r => new RegExp(r.regex));
  const files = walk(appRoot).filter(f => f.endsWith('.html'));
  const pages = new Map();
  for (const f of files) {
    let url = '/' + path.relative(appRoot, f).split(path.sep).join('/').slice(0, -5);
    if (url === '/index') url = '/';
    if (url.startsWith('/_') || url === '/404' || /[\[\]]/.test(url)) continue;
    pages.set(url, f);
  }
  const publicFiles = walk(path.join(ROOT, 'public'));
  const assets = new Set(publicFiles.map(f => '/' + path.relative(path.join(ROOT, 'public'), f).split(path.sep).join('/')));
  const handlers = new Set(walk(appRoot).filter(f => f.endsWith('.body')).map(f => '/' + path.relative(appRoot, f).split(path.sep).join('/').slice(0, -5)));
  function classify(url) {
    const result = resolveExact(url, redirects);
    if (result.cycle) return { ...result, status: 'redirect_cycle' };
    const t = result.target;
    if (!t) return { ...result, status: 'external_redirect' };
    if (dynamicRules.some(r => r.test(t))) return { ...result, status: 'pattern_redirect_needs_runtime_check' };
    if (pages.has(t) || assets.has(t) || handlers.has(t)) return { ...result, status: url === t ? 'exists_in_build' : 'redirect_to_built_target' };
    if (t.startsWith('/api/') || t.startsWith('/_next/') || dynamicPages.some(r => r.test(t))) return { ...result, status: 'runtime_route_needs_check' };
    return { ...result, status: 'missing_from_build' };
  }
  const inventory = [];
  const badLinks = new Map();
  const linksByStatus = {};
  const tracking = { pagesChecked: 0, missing: [] };
  for (const [url, f] of pages) {
    const redirect = resolveExact(url, redirects);
    const html = fs.readFileSync(f, 'utf8');
    const document = html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, '');
    const tags = [...document.matchAll(/<link\b[^>]*>/gi)].map(m => attrs(m[0]));
    const canonical = tags.find(a => (a.rel || '').split(/\s+/).includes('canonical'))?.href || '';
    const status = redirect.cycle ? 'redirect_cycle' : redirect.target !== url ? 'redirect_source' : 'built_page';
    inventory.push({ url, status, redirectTarget: redirect.target, canonical, file: relative(f), sha256: hash(html) });
    if (status !== 'built_page') continue; // Redirected HTML is not served.
    tracking.pagesChecked++;
    // Presence only: does not establish delivery to GA4 or Ads.
    const signals = ['ga4-lib', 'ga-init', 'analytics-bootstrap', 'gtm-loader', 'google-site-verification'];
    const missing = signals.filter(signal => !html.includes(signal));
    if (missing.length) tracking.missing.push({ url, missing });
    for (const match of document.matchAll(/<a\b[^>]*>/gi)) {
      const href = attrs(match[0]).href;
      if (!href || href.startsWith('#')) continue;
      const target = normalize(href, url);
      if (!target) continue;
      const result = classify(target);
      linksByStatus[result.status] = (linksByStatus[result.status] || 0) + 1;
      if (!['missing_from_build', 'redirect_cycle', 'pattern_redirect_needs_runtime_check', 'runtime_route_needs_check'].includes(result.status)) continue;
      const key = result.status + ':' + target;
      if (!badLinks.has(key)) badLinks.set(key, { href: target, ...result, occurrences: 0, sources: new Set() });
      const row = badLinks.get(key);
      row.occurrences++;
      row.sources.add(url);
    }
  }
  const snapshot = {
    createdAt: new Date().toISOString(),
    protectedFiles: Object.fromEntries(protectedFiles.map(f => [f, hash(fs.readFileSync(path.join(ROOT, f)))])),
    existingFiles: [...walk(path.join(ROOT, 'src')), ...publicFiles].map(relative).sort(),
    generatedPages: [...pages.keys()].sort(),
    redirectRules: currentRules,
  };
  let comparison = null;
  if (compareFile) {
    const before = JSON.parse(fs.readFileSync(path.resolve(ROOT, compareFile), 'utf8'));
    const nowFiles = new Set(snapshot.existingFiles), nowPages = new Set(snapshot.generatedPages);
    comparison = {
      protectedFilesChanged: Object.entries(before.protectedFiles).filter(([f, h]) => snapshot.protectedFiles[f] !== h).map(([f]) => f),
      removedFiles: before.existingFiles.filter(f => !nowFiles.has(f)),
      removedGeneratedPages: before.generatedPages.filter(p => !nowPages.has(p)),
      redirectsChanged: JSON.stringify(before.redirectRules) !== JSON.stringify(currentRules),
    };
  }
  const buildStat = fs.statSync(path.join(ROOT, '.next/BUILD_ID'));
  const sourceNewer = walk(path.join(ROOT, 'src')).filter(f => fs.statSync(f).mtimeMs > buildStat.mtimeMs).map(relative);
  const findings = [...badLinks.values()].map(r => ({ ...r, sources: [...r.sources].sort() })).sort((a, b) => b.occurrences - a.occurrences);
  const summary = {
    createdAt: snapshot.createdAt, evidence: 'Local generated HTML present at audit time. This audit command does not build, access production or verify analytics-account delivery.',
    buildId: read('.next/BUILD_ID').trim(), buildTime: buildStat.mtime.toISOString(),
    sourceFilesNewerThanBuild: sourceNewer,
    generatedPages: pages.size, redirectSources: inventory.filter(r => r.status === 'redirect_source').length,
    nonRedirectGeneratedPages: inventory.filter(r => r.status === 'built_page').length,
    exactRedirectRules: redirects.size, publicFiles: assets.size, linksByStatus,
    missingTargets: findings.filter(r => r.status === 'missing_from_build').length,
    runtimeOrPatternTargets: findings.filter(r => r.status.includes('runtime') || r.status.includes('needs_check')).length,
    trackingPresence: tracking, comparison,
    limitations: [
      'Build counts are not Google indexing counts or production verification.',
      'Dynamic route matches are unresolved until runtime checks; they are not assumed healthy or broken.',
      'Anchor scan reads generated HTML, excluding scripts; it does not exercise client-created links.',
      'Tracking presence and unchanged file hashes do not prove analytics delivery or attribution.',
      'Source modification time is only a staleness warning, not proof of build/source identity.',
      'File/page preservation checks do not detect deleted sections inside retained files; review diffs and UI separately.',
    ],
  };
  fs.mkdirSync(output, { recursive: true });
  const writeJson = (name, value) => fs.writeFileSync(path.join(output, name), JSON.stringify(value, null, 2) + '\n');
  writeJson('summary.json', summary); writeJson('preservation-snapshot.json', snapshot); writeJson('link-findings.json', findings);
  fs.writeFileSync(path.join(output, 'page-inventory.csv'), csv([['url', 'status', 'redirect_target', 'declared_canonical', 'generated_file', 'html_sha256'], ...inventory.map(r => [r.url, r.status, r.redirectTarget, r.canonical, r.file, r.sha256])]));
  fs.writeFileSync(path.join(output, 'summary.md'), `# Week 51 baseline: ${runName}\n\nCaptured ${summary.createdAt}.\n\n${summary.evidence}\n\n| Measure | Result |\n|---|---:|\n| Generated pages | ${summary.generatedPages} |\n| Existing redirect sources | ${summary.redirectSources} |\n| Non-redirect generated pages | ${summary.nonRedirectGeneratedPages} |\n| Distinct targets missing from build | ${summary.missingTargets} |\n| Runtime/pattern targets needing checks | ${summary.runtimeOrPatternTargets} |\n| Pages missing one or more tracking markers | ${tracking.missing.length} |\n\nBuild: \`${summary.buildId}\`, ${summary.buildTime}. Source files newer than build: ${sourceNewer.length}.\n\n## Preservation comparison\n\n${comparison ? '```json\n' + JSON.stringify(comparison, null, 2) + '\n```' : 'Initial snapshot saved. Future runs can compare against preservation-snapshot.json.'}\n\n## Limits\n\n${summary.limitations.map(l => '- ' + l).join('\n')}\n`);
  console.log(JSON.stringify({ ...summary, sourceFilesNewerThanBuild: sourceNewer.length, trackingPresence: { pagesChecked: tracking.pagesChecked, missingPages: tracking.missing.length } }, null, 2));
  if (comparison && (comparison.protectedFilesChanged.length || comparison.removedFiles.length || comparison.removedGeneratedPages.length || comparison.redirectsChanged)) process.exitCode = 1;
  return summary;
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const [runName, compareFile] = process.argv.slice(2);
  if (!runName) throw new Error('Usage: node scripts/week51-audit.mjs <unique-run-name> [prior-preservation-snapshot.json]');
  await audit(runName, compareFile);
}
