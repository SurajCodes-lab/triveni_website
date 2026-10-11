/**
 * Week 53: what share of each corporate city page is unique to that city?
 *
 * WHY NOT JUST COMPARE WITH WEEK 52's FIGURE
 * ------------------------------------------
 * Week 52 reported 97.7% median pairwise similarity for the city hubs and 94.7%
 * for the service pages, by a method this script does not reproduce — a trigram
 * Jaccard over the same pages reads 59.0% and 54.8%. The two sets of numbers are
 * not comparable, and quoting a drop from 97.7% to 59.0% would be comparing two
 * different measurements and calling the difference an improvement.
 *
 * So this measures something method-stable and directly meaningful instead:
 * **the share of a page's visible text that appears on no other city hub.**
 *
 * And it gets a genuine before-and-after out of one build, by computing that
 * share twice — once over the full page, and once with the new per-city section
 * removed. The second is what the page was. Same method, same build, same
 * parser, so the difference is the change rather than an artefact.
 */
import { readFile, readdir } from "node:fs/promises";
import path from "node:path";
import { corporateCityLocal } from "../src/utilis/corporateCityLocal.js";

const APP = path.join(process.cwd(), ".next", "server", "app");
const BASE = path.join(APP, "corporate-transportation-service");

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

// The text this change added for a city, so it can be subtracted again.
const addedText = (slug) => {
  const l = corporateCityLocal[slug];
  if (!l) return new Set();
  const parts = [
    l.industryMix,
    ...l.commuteCorridors,
    l.shiftPattern,
    l.airportAccess.airport,
    l.airportAccess.note,
    l.localNote,
  ];
  const s = new Set();
  for (const p of parts) for (const sh of shingles(words(p))) s.add(sh);
  return s;
};

const pages = [];
for (const e of await readdir(BASE, { withFileTypes: true })) {
  if (!e.isFile() || !e.name.endsWith(".html")) continue;
  const slug = e.name.replace(/\.html$/, "");
  if (["industry", "use-case"].includes(slug)) continue;
  const html = await readFile(path.join(BASE, e.name), "utf8");
  const ws = words(html);
  pages.push({ slug, words: ws.length, all: shingles(ws), added: addedText(slug) });
}

const uniqueShare = (page, others, exclude) => {
  const mine = exclude ? new Set([...page.all].filter((x) => !exclude.has(x))) : page.all;
  if (!mine.size) return 0;
  let unique = 0;
  for (const sh of mine) {
    let seen = false;
    for (const o of others) {
      if (o.slug === page.slug) continue;
      const theirs = exclude ? o.all : o.all;
      if (theirs.has(sh)) { seen = true; break; }
    }
    if (!seen) unique += 1;
  }
  return unique / mine.size;
};

console.log("  Share of each page's text that appears on no other corporate city hub.");
console.log("  Visible text, word trigrams. 'Before' is the same page with the new");
console.log("  per-city section subtracted — same build, same method.\n");
console.log(`  ${"city".padEnd(12)}${"words".padStart(7)}${"before".padStart(10)}${"after".padStart(9)}${"change".padStart(10)}`);

let sumBefore = 0;
let sumAfter = 0;
for (const p of pages.sort((a, b) => a.slug.localeCompare(b.slug))) {
  const after = uniqueShare(p, pages, null);
  const before = uniqueShare(p, pages, p.added);
  sumBefore += before;
  sumAfter += after;
  console.log(
    `  ${p.slug.padEnd(12)}${String(p.words).padStart(7)}` +
    `${(before * 100).toFixed(1).padStart(9)}%${(after * 100).toFixed(1).padStart(8)}%` +
    `${("+" + ((after - before) * 100).toFixed(1) + "pt").padStart(10)}`,
  );
}

const n = pages.length;
console.log(`\n  mean unique share before: ${((sumBefore / n) * 100).toFixed(1)}%`);
console.log(`  mean unique share after:  ${((sumAfter / n) * 100).toFixed(1)}%`);
console.log(`  words added per page:     ${Math.round(pages.reduce((s, p) => s + p.added.size, 0) / n)} trigrams of new city-specific text`);
