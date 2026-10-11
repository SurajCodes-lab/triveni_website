/**
 * Week 53: how distinguishable is every page family from its own siblings?
 *
 * The corporate city hubs were 97.7% identical to one another, and enriching
 * them took the share of each page unique to itself from 13.5% to 23.2%. The
 * obvious question is which other families have the same problem — and the
 * site's largest family is 1,035 pages generated from one template, so the
 * question is not rhetorical.
 *
 * WHAT IS MEASURED
 * ----------------
 * For each family, over a sample of its pages:
 *
 *   uniqueShare  — the share of a page's visible-text trigrams that appear on
 *                  NO sibling in the same family. This is the metric that
 *                  matters: it is what is left of a page once the template is
 *                  accounted for.
 *   overlap      — median pairwise trigram overlap between siblings, for
 *                  continuity with the corporate figure.
 *   words        — median visible word count.
 *
 * Sampling rather than every page, because a 1,035-page family is 535,000 pairs
 * and the shape of the answer does not need all of them. Sampled evenly across
 * the sorted file list so the sample is not all one city or one vehicle.
 *
 * A LIMIT WORTH STATING
 * ---------------------
 * A low unique share is not automatically a defect. A toll page and a distance
 * page share a lot of structure by design, and the toll family holds the only
 * top-three commercial positions on this site. What this finds is where a
 * family cannot be told apart — the judgement about whether that matters
 * belongs with the family's purpose, not with the number.
 */
import { readFile, readdir, writeFile } from "node:fs/promises";
import path from "node:path";

const APP = path.join(process.cwd(), ".next", "server", "app");
const OUT = "D:/Desktop/triveni_next/2.0/week53/measurement/family-similarity.json";
const SAMPLE = Number(process.env.SAMPLE || 14);

const words = (html) => {
  let t = html.replace(/<script[\s\S]*?<\/script>/g, " ").replace(/<style[\s\S]*?<\/style>/g, " ");
  t = t.replace(/<[^>]+>/g, " ").replace(/&[a-z#0-9]+;/gi, " ");
  return t.toLowerCase().replace(/[^a-z0-9 ]/g, " ").split(/\s+/).filter(Boolean);
};

const shingles = (ws, n = 3) => {
  const s = new Set();
  for (let i = 0; i + n <= ws.length; i += 1) s.add(ws.slice(i, i + n).join(" "));
  return s;
};

const jaccard = (a, b) => {
  let inter = 0;
  for (const x of a) if (b.has(x)) inter += 1;
  return inter / (a.size + b.size - inter);
};

const median = (a) => {
  if (!a.length) return 0;
  const s = [...a].sort((x, y) => x - y);
  return s.length % 2 ? s[(s.length - 1) / 2] : (s[s.length / 2 - 1] + s[s.length / 2]) / 2;
};

async function* htmlFiles(dir) {
  for (const e of await readdir(dir, { withFileTypes: true })) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) yield* htmlFiles(full);
    else if (e.name.endsWith(".html")) yield full;
  }
}

// Families keyed the same way as the Week 52 audits.
const FAMILY = [
  [/^\/distance\//, "Distance"],
  [/^\/toll-cost\//, "Toll"],
  [/^\/one-way-cab\/[^/]+$/, "One-way cab"],
  [/^\/round-trip\//, "Round trip"],
  [/^\/blog\//, "Guide / blog"],
  [/^\/sightseeing\/[^/]+$/, "Sightseeing"],
  [/^\/religious-tours\/|^\/chardham/, "Char Dham / pilgrimage"],
  [/^\/wedding\/cars\//, "Wedding car model"],
  [/^\/wedding\/[^/]+$/, "Wedding city"],
  [/^\/corporate-transportation-service\/[^/]+\/[^/]+$/, "Corporate service page"],
  [/^\/corporate-transportation-service\/[^/]+$/, "Corporate city hub"],
  [/^\/tempo-traveller\//, "Tempo traveller"],
  [/^\/force-urbania\/|^\/maharaja/, "Urbania / Maharaja"],
  [/^\/(dzire|ertiga|innova|innova-crysta|fortuner)-hire\//, "Vehicle hire route"],
  [/^\/airport-service\//, "Airport service"],
  [/^\/railway-station-taxi\/|station-taxi$/, "Station taxi"],
  [/^\/places-to-visit-near-/, "Near-city list"],
  [/^\/weekend-getaways-/, "Weekend list"],
  [/^\/local-taxi\//, "Local taxi"],
  [/^\/taxi-fare\//, "Taxi fare"],
  [/^\/bus-routes\//, "Bus routes"],
  [/^\/bus-vs-cab\//, "Bus vs cab"],
  [/^\/travel-by-car\//, "Travel by car"],
  [/^\/how-to-reach/, "How to reach"],
  [/^\/tours-with-guide\//, "Tours with guide"],
  [/^\/cab-service\//, "Cab service city"],
  [/^\/[a-z0-9-]+-to-[a-z0-9-]+$/, "Corridor / route"],
  [/^\/[a-z0-9-]+$/, "City hub / root"],
];
const familyOf = (p) => (FAMILY.find(([re]) => re.test(p)) || [, "Other"])[1];

const groups = new Map();
for await (const f of htmlFiles(APP)) {
  const route = f.slice(APP.length).replace(/\\/g, "/").replace(/\.html$/, "") || "/";
  if (route === "/_global-error" || route === "/index") continue;
  const fam = familyOf(route);
  if (!groups.has(fam)) groups.set(fam, []);
  groups.get(fam).push(f);
}

const rows = [];
for (const [family, files] of groups) {
  if (files.length < 3) continue;
  files.sort();
  // Even spread across the sorted list rather than the first N.
  const step = Math.max(1, Math.floor(files.length / SAMPLE));
  const picked = [];
  for (let i = 0; i < files.length && picked.length < SAMPLE; i += step) picked.push(files[i]);

  const docs = [];
  for (const f of picked) {
    const ws = words(await readFile(f, "utf8"));
    if (ws.length < 50) continue;
    docs.push({ sh: shingles(ws), words: ws.length });
  }
  if (docs.length < 3) continue;

  const pairs = [];
  for (let i = 0; i < docs.length; i += 1) {
    for (let j = i + 1; j < docs.length; j += 1) pairs.push(jaccard(docs[i].sh, docs[j].sh));
  }

  const uniques = docs.map((d, i) => {
    let uniq = 0;
    for (const sh of d.sh) {
      let seen = false;
      for (let j = 0; j < docs.length; j += 1) {
        if (j !== i && docs[j].sh.has(sh)) { seen = true; break; }
      }
      if (!seen) uniq += 1;
    }
    return d.sh.size ? uniq / d.sh.size : 0;
  });

  rows.push({
    family,
    pages: files.length,
    sampled: docs.length,
    medianWords: Math.round(median(docs.map((d) => d.words))),
    medianOverlap: Number((median(pairs) * 100).toFixed(1)),
    medianUniqueShare: Number((median(uniques) * 100).toFixed(1)),
  });
}

rows.sort((a, b) => a.medianUniqueShare - b.medianUniqueShare);

await writeFile(OUT, JSON.stringify({
  createdAt: new Date().toISOString(),
  method: "visible text, word trigrams, Jaccard; sample spread evenly across the family",
  sampleSize: SAMPLE,
  note: "Unique share is the portion of a page's trigrams found on no sampled sibling. A low share means the pages cannot be told apart; whether that matters depends on the family's purpose.",
  rows,
}, null, 2), "utf8");

console.log(`  ${"family".padEnd(26)}${"pages".padStart(7)}${"words".padStart(7)}${"overlap".padStart(9)}${"unique".padStart(8)}`);
for (const r of rows) {
  console.log(
    `  ${r.family.padEnd(26)}${String(r.pages).padStart(7)}${String(r.medianWords).padStart(7)}` +
    `${(r.medianOverlap + "%").padStart(9)}${(r.medianUniqueShare + "%").padStart(8)}`,
  );
}
console.log(`\n  sorted by unique share, least distinguishable first`);
console.log(`  written: ${OUT}`);
