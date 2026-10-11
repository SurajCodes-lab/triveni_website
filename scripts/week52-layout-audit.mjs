#!/usr/bin/env node
// Layout and screen-space audit across the page families.
//
// The complaint this measures: components consume a great deal of vertical space,
// so a reader has to scroll past decoration before reaching the thing they came
// for. On a site where 83% of visits are mobile, that is the difference between
// an answer in the first screen and an answer nobody sees.
//
// Everything here is measured from the built HTML. It cannot measure rendered
// pixel height — that needs a browser, which the companion script does — but it
// can measure the structural causes: full-viewport heroes, stacked vertical
// padding, decorative elements, nesting depth, and how far into the document the
// first substantive content sits.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const APP = path.join(ROOT, '.next/server/app');
const OUT = 'D:/Desktop/triveni_next/2.0/week52/measurement';

const FAMILIES = [
  ['Corridor / route', /^\/[a-z0-9-]+-to-[a-z0-9-]+$/],
  ['City hub', /^\/[a-z0-9-]+$/],
  ['Distance', /^\/distance\//],
  ['Toll', /^\/toll-cost\//],
  ['One-way cab', /^\/one-way-cab\//],
  ['Group vehicle', /^\/tempo-traveller\//],
  ['Guide / blog', /^\/blog\//],
  ['Sightseeing', /^\/sightseeing\//],
  ['Airport / station', /^\/airport-service\//],
  ['Near-city', /^\/places-to-visit-near/],
  ['Weekend', /^\/weekend-getaways/],
  ['Wedding', /^\/wedding\//],
  ['Religious tours', /^\/religious-tours\//],
];

const walk = (dir) => fs.readdirSync(dir, { withFileTypes: true }).flatMap((e) => {
  const p = path.join(dir, e.name);
  return e.isDirectory() ? walk(p) : [p];
});

const famOf = (u) => (FAMILIES.find(([, re]) => re.test(u)) || ['Other', null])[0];

/** Vertical padding/margin utility classes, summed as a rough space proxy.
 *
 * Only unprefixed classes count. A py-20 that has been given a mobile step
 * reads as "py-12 sm:py-20" in the HTML, and summing both scores it higher
 * than the py-20 it replaced — the metric would report a regression for a
 * change that halved the space a phone actually renders. Breakpoint variants
 * are therefore excluded, which makes this a mobile-space proxy specifically,
 * and mobile is the width that matters here. */
function verticalSpace(html) {
  let total = 0;
  for (const m of html.matchAll(/(?:^|[\s"'])(?:py|pt|pb|my|mt|mb)-(\d{1,2})(?=[\s"']|$)/g)) {
    total += Number(m[1]);
  }
  return total;
}

function analyse(html) {
  const body = html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, '')
                   .replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, '');

  // Elements before the first real content heading (h2), as a share of the page.
  const firstH2 = body.search(/<h2\b/);
  const elementsBefore = firstH2 > 0 ? (body.slice(0, firstH2).match(/<[a-z]/g) || []).length : 0;
  const elementsTotal = (body.match(/<[a-z]/g) || []).length;

  return {
    elements: elementsTotal,
    elementsBeforeFirstH2: elementsBefore,
    shareBeforeFirstH2: elementsTotal ? Math.round((elementsBefore / elementsTotal) * 100) : 0,
    // Full-viewport blockers: a hero that fills the screen pushes everything down.
    minHScreen: (body.match(/min-h-screen/g) || []).length,
    hScreen: (body.match(/\bh-screen\b/g) || []).length,
    // Decoration: absolutely positioned ornament, blurs, gradient overlays.
    absolute: (body.match(/\babsolute\b/g) || []).length,
    blur: (body.match(/\bblur-(?:sm|md|lg|xl|2xl|3xl)\b/g) || []).length,
    animate: (body.match(/\banimate-\w+/g) || []).length,
    gradients: (body.match(/bg-gradient-to-/g) || []).length,
    // Large single paddings are the main space consumers.
    bigPadding: (body.match(/\bp[ytb]?-(?:1[6-9]|2\d|3\d)\b/g) || []).length,
    verticalSpaceScore: verticalSpace(body),
    sections: (body.match(/<section\b/g) || []).length,
    h2: (body.match(/<h2\b/g) || []).length,
    // Deepest wrapper nesting, a proxy for over-wrapped components.
    maxDivDepth: maxDepth(body),
  };
}

function maxDepth(body) {
  let depth = 0, max = 0;
  for (const m of body.matchAll(/<(\/?)div\b/g)) {
    depth += m[1] ? -1 : 1;
    if (depth > max) max = depth;
  }
  return max;
}

const files = walk(APP).filter((f) => f.endsWith('.html'));
const byFamily = new Map();

for (const f of files) {
  const url = '/' + path.relative(APP, f).split(path.sep).join('/').slice(0, -5);
  if (url.startsWith('/_')) continue;
  const html = fs.readFileSync(f, 'utf8');
  const a = analyse(html);
  const fam = famOf(url);
  if (!byFamily.has(fam)) byFamily.set(fam, []);
  byFamily.get(fam).push({ url, ...a });
}

const med = (arr) => {
  if (!arr.length) return 0;
  const s = [...arr].sort((x, y) => x - y);
  return s[Math.floor(s.length / 2)];
};

const summary = [...byFamily.entries()]
  .map(([fam, rows]) => ({
    family: fam,
    pages: rows.length,
    medianElements: med(rows.map((r) => r.elements)),
    medianMaxDivDepth: med(rows.map((r) => r.maxDivDepth)),
    medianSections: med(rows.map((r) => r.sections)),
    medianVerticalSpaceScore: med(rows.map((r) => r.verticalSpaceScore)),
    medianBigPaddingBlocks: med(rows.map((r) => r.bigPadding)),
    medianDecorativeAbsolute: med(rows.map((r) => r.absolute)),
    medianAnimations: med(rows.map((r) => r.animate)),
    medianGradients: med(rows.map((r) => r.gradients)),
    pagesWithFullViewportHero: rows.filter((r) => r.minHScreen + r.hScreen > 0).length,
    medianShareBeforeFirstH2: med(rows.map((r) => r.shareBeforeFirstH2)),
  }))
  .sort((a, b) => b.pages - a.pages);

fs.mkdirSync(OUT, { recursive: true });
fs.writeFileSync(path.join(OUT, 'layout-audit.json'), JSON.stringify({
  createdAt: new Date().toISOString(),
  scope: 'Built HTML. Structural proxies for screen space, not rendered pixel height.',
  families: summary,
  limits: [
    'Padding/margin class sums are a proxy; they do not equal rendered height.',
    'Decorative counts include legitimate layout uses of absolute positioning.',
    'Rendered height and above-the-fold content need a browser measurement.',
  ],
}, null, 2) + '\n');

console.log(`pages analysed: ${files.length}\n`);
const w = (s, n) => String(s).padEnd(n);
console.log(w('Family', 20) + w('pages', 7) + w('elem', 7) + w('depth', 7) + w('sect', 6) + w('vspace', 8) + w('bigPad', 8) + w('abs', 6) + w('anim', 6) + w('wrapper*', 10) + 'beforeH2');
for (const s of summary) {
  console.log(
    w(s.family, 20) + w(s.pages, 7) + w(s.medianElements, 7) + w(s.medianMaxDivDepth, 7) +
    w(s.medianSections, 6) + w(s.medianVerticalSpaceScore, 8) + w(s.medianBigPaddingBlocks, 8) +
    w(s.medianDecorativeAbsolute, 6) + w(s.medianAnimations, 6) +
    w(`${s.pagesWithFullViewportHero}/${s.pages}`, 10) + `${s.medianShareBeforeFirstH2}%`
  );
}
