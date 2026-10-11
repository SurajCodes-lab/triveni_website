// scripts/week53-answer-gap-indexable.mjs
//
// The direct-answer gap, re-measured honestly.
//
// WHY THIS RE-MEASUREMENT EXISTS
// ------------------------------
// The AEO baseline reported that only 905 of 3,843 pages carry a direct answer,
// and named that the single largest remaining answer-engine gap. Before building
// anything against that number it was checked, and it is wrong in two ways.
//
// 1. The baseline tested `html.slice(0, 60000)` — the first 60,000 characters of
//    the document. Next.js inlines a large amount of flight/script payload into
//    a prerendered page, so 60,000 characters of HTML is NOT "near the top of
//    the page" in any reliable sense. A block can be the second section a reader
//    sees and still sit past that cut.
//
// 2. It tested only for prose cues ("quick answer", "short answer", "at a
//    glance", "in short", "direct answer"). A family can render a perfectly good
//    answer block under a different heading and score zero.
//
// The distance family is the proof. The baseline scored it 38 of 206. In fact
// DistanceGuideClient renders, as its second section on every one of the 206
// pages, an eyebrow reading "The quick answer", a `route.directAnswer`
// paragraph, and a four-fact grid — which is precisely the shape the Week 53
// plan asked to be built.
//
// So this script:
//   * scans the WHOLE document, not a prefix;
//   * measures WHERE the block sits, as a share of the rendered text (not of the
//     raw HTML), so "absent" and "present but buried" are separated;
//   * reports the noindex position too, since a block on a noindexed page earns
//     nothing — though with the Week 47 master switch off, that is currently
//     every page being indexable.

import { readdir, readFile } from "node:fs/promises";
import path from "node:path";
import { isNoindexPath } from "../src/lib/seo/noindex-families.mjs";

const APP = path.join(process.cwd(), ".next", "server", "app");

const FAMILY = [
  [/^\/places-to-visit-near-|^\/weekend-getaways/, "Near-city list"],
  [/^\/one-way-cab\//, "One-way cab"],
  [/^\/round-trip\//, "Round trip"],
  [/^\/distance\//, "Distance"],
  [/^\/toll-cost\//, "Toll"],
  [/^\/religious-tours\/|^\/chardham/, "Char Dham / pilgrimage"],
  [/^\/wedding\//, "Wedding"],
  [/^\/corporate-transportation-service\//, "Corporate"],
  [/^\/airport-service\/|airport|station-taxi/, "Airport / station"],
  [
    /^\/tempo-traveller\/|^\/force-urbania\/|^\/maharaja-tempo-traveller\/|-hire\//,
    "Group vehicle",
  ],
  [/^\/blog\//, "Blog"],
  [/-to-[a-z-]+$/, "Corridor / route"],
];
const familyOf = (p) => (FAMILY.find(([re]) => re.test(p)) || [, "Other"])[1];

// Prose cues, as the baseline used them.
const CUE = /quick\s*answer|at a glance|in short|direct answer|short answer|the short answer/i;

// Structural markers: a section built to be the page's answer block. These are
// the ids and classes the site's own answer components emit.
const STRUCT =
  /id="(direct-answer|city-quick-answer|distance-summary|quick-answer)"|class="[^"]*speakable-lead/;

/** Strip tags, scripts and styles to get something close to what a reader (or a
 *  retrieval engine working on rendered text) actually sees. */
function renderedText(html) {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

async function walk(dir, base = "") {
  const out = [];
  let entries;
  try {
    entries = await readdir(dir, { withFileTypes: true });
  } catch {
    return out;
  }
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) out.push(...(await walk(full, `${base}/${e.name}`)));
    else if (e.name.endsWith(".html")) {
      const slug = e.name.replace(/\.html$/, "");
      out.push({ file: full, route: slug === "index" ? base || "/" : `${base}/${slug}` });
    }
  }
  return out;
}

const pages = (await walk(APP)).filter(
  (p) => !p.route.startsWith("/(") && !/\/_/.test(p.route),
);

const fam = new Map();
const buried = [];
let noindexed = 0;
const totals = { struct: 0, cue: 0, either: 0, none: 0, baselineWouldSee: 0 };

for (const p of pages) {
  let html = "";
  try {
    html = await readFile(p.file, "utf8");
  } catch {
    continue;
  }

  const isNoindex = isNoindexPath(p.route) || /<meta name="robots"[^>]*noindex/i.test(html);
  if (isNoindex) noindexed++;

  const hasStruct = STRUCT.test(html);
  const hasCue = CUE.test(html);
  const has = hasStruct || hasCue;

  // What the baseline's prefix test would have seen, for comparison.
  if (CUE.test(html.slice(0, 60000))) totals.baselineWouldSee++;

  if (hasStruct) totals.struct++;
  if (hasCue) totals.cue++;
  if (has) totals.either++;
  else totals.none++;

  // Depth: where the cue falls in the RENDERED text, as a percentage.
  let depth = null;
  if (has) {
    const text = renderedText(html);
    const m = text.match(CUE);
    if (m && text.length > 0) {
      depth = Math.round((m.index / text.length) * 100);
      if (depth > 35) buried.push({ route: p.route, depth });
    }
  }

  const f = familyOf(p.route);
  if (!fam.has(f))
    fam.set(f, { pages: 0, has: 0, gap: 0, noindex: 0, depthSum: 0, depthN: 0 });
  const r = fam.get(f);
  r.pages++;
  if (isNoindex) r.noindex++;
  if (has) r.has++;
  else r.gap++;
  if (depth !== null) {
    r.depthSum += depth;
    r.depthN++;
  }
}

console.log(`\nbuilt pages                              ${pages.length}`);
console.log(`noindexed                                ${noindexed}`);
console.log(`\ncarries an answer block (full document)   ${totals.either}`);
console.log(`  by structural marker                   ${totals.struct}`);
console.log(`  by prose cue                           ${totals.cue}`);
console.log(`what the baseline's 60KB prefix saw      ${totals.baselineWouldSee}`);
console.log(`genuinely has none                       ${totals.none}\n`);

const rows = [...fam.entries()].sort((a, b) => b[1].gap - a[1].gap);
console.log("family                      pages    has    GAP   avg depth in text");
for (const [f, r] of rows) {
  const d = r.depthN ? `${Math.round(r.depthSum / r.depthN)}%` : "—";
  console.log(
    `${f.padEnd(26)} ${String(r.pages).padStart(5)} ${String(r.has).padStart(6)} ` +
      `${String(r.gap).padStart(6)}   ${d.padStart(6)}`,
  );
}

console.log(`\nblocks sitting deeper than 35% into the page: ${buried.length}`);
for (const b of buried.sort((a, b) => b.depth - a.depth).slice(0, 12)) {
  console.log(`  ${String(b.depth).padStart(3)}%  ${b.route}`);
}

// Dump the actionable lists so the build order can be read rather than guessed.
import { writeFile } from "node:fs/promises";
const GAPS = [];
const BURIED = buried.slice();
for (const p of pages) {
  let html = "";
  try { html = await readFile(p.file, "utf8"); } catch { continue; }
  if (!(STRUCT.test(html) || CUE.test(html))) GAPS.push({ route: p.route, family: familyOf(p.route) });
}
await writeFile(
  "D:/Desktop/triveni_next/2.0/week53/measurement/answer-gap.json",
  JSON.stringify({ gaps: GAPS, buried: BURIED, createdAt: new Date().toISOString() }, null, 2),
  "utf8",
);
console.log(`\nwritten: answer-gap.json  (${GAPS.length} gaps, ${BURIED.length} buried)`);
