/**
 * Week 53: how similar are the nine corporate city pages to one another?
 *
 * Week 52 measured 97.7% median pairwise similarity across these pages, against
 * 94.7% for the service pages nested inside them — and recorded plainly that the
 * three-point difference cannot be carrying an eleven-position ranking gap. So
 * this is not a claim that similarity explains the ranking. It is the figure
 * needed to say whether the enrichment actually made nine pages out of what was
 * effectively one.
 *
 * Method matches Week 52 so the before and after are comparable: visible text
 * only, structured data and markup stripped, compared as word shingles.
 */
import { readFile, readdir } from "node:fs/promises";
import path from "node:path";

const APP = path.join(process.cwd(), ".next", "server", "app");

const visibleText = (html) => {
  let t = html.replace(/<script[\s\S]*?<\/script>/g, " ");
  t = t.replace(/<style[\s\S]*?<\/style>/g, " ");
  t = t.replace(/<[^>]+>/g, " ");
  t = t.replace(/&[a-z#0-9]+;/gi, " ");
  return t.toLowerCase().replace(/[^a-z0-9 ]/g, " ").split(/\s+/).filter(Boolean);
};

// Word trigrams: sensitive to shared sentences rather than shared vocabulary.
const shingles = (words, n = 3) => {
  const s = new Set();
  for (let i = 0; i + n <= words.length; i += 1) s.add(words.slice(i, i + n).join(" "));
  return s;
};

const jaccard = (a, b) => {
  let inter = 0;
  for (const x of a) if (b.has(x)) inter += 1;
  return inter / (a.size + b.size - inter);
};

async function load(dir, depth) {
  const out = [];
  const walk = async (d, level) => {
    for (const e of await readdir(d, { withFileTypes: true })) {
      const full = path.join(d, e.name);
      if (e.isDirectory() && level < depth) await walk(full, level + 1);
      else if (e.isFile() && e.name.endsWith(".html") && level === depth) {
        out.push([e.name.replace(/\.html$/, ""), await readFile(full, "utf8")]);
      }
    }
  };
  await walk(dir, 0);
  return out;
}

const base = path.join(APP, "corporate-transportation-service");

// City hubs sit at the top level of the corporate directory; the service pages
// one level below, inside each city.
const cityFiles = await load(base, 0);
const cities = cityFiles.filter(([n]) => !["industry", "use-case"].includes(n));

const subFiles = [];
for (const e of await readdir(base, { withFileTypes: true })) {
  if (!e.isDirectory() || ["industry", "use-case"].includes(e.name)) continue;
  for (const f of await readdir(path.join(base, e.name), { withFileTypes: true })) {
    if (f.isFile() && f.name.endsWith(".html")) {
      subFiles.push([`${e.name}/${f.name.replace(/\.html$/, "")}`,
                     await readFile(path.join(base, e.name, f.name), "utf8")]);
    }
  }
}

const report = (label, docs) => {
  const prepared = docs.map(([name, html]) => {
    const words = visibleText(html);
    return { name, words: words.length, sh: shingles(words) };
  });
  const pairs = [];
  for (let i = 0; i < prepared.length; i += 1) {
    for (let j = i + 1; j < prepared.length; j += 1) {
      pairs.push({ a: prepared[i].name, b: prepared[j].name, v: jaccard(prepared[i].sh, prepared[j].sh) });
    }
  }
  pairs.sort((x, y) => y.v - x.v);
  const med = pairs.length
    ? pairs[Math.floor(pairs.length / 2)].v
    : 0;
  const wordsSorted = prepared.map((p) => p.words).sort((a, b) => a - b);
  console.log(`\n  ${label}`);
  console.log(`     pages:                    ${prepared.length}`);
  console.log(`     median words:             ${wordsSorted[Math.floor(wordsSorted.length / 2)]}`);
  console.log(`     word range:               ${wordsSorted[0]} to ${wordsSorted[wordsSorted.length - 1]}`);
  console.log(`     median pairwise overlap:  ${(med * 100).toFixed(1)}%`);
  if (pairs.length) {
    console.log(`     most alike:               ${pairs[0].a} / ${pairs[0].b}  ${(pairs[0].v * 100).toFixed(1)}%`);
    console.log(`     least alike:              ${pairs[pairs.length - 1].a} / ${pairs[pairs.length - 1].b}  ${(pairs[pairs.length - 1].v * 100).toFixed(1)}%`);
  }
  return { pages: prepared.length, median: med };
};

console.log("  Visible text only, word trigrams, Jaccard overlap.");
console.log("  Week 52 baseline: city hubs 97.7%, service pages 94.7%.");
report("City hubs", cities);
report("City service pages", subFiles);
