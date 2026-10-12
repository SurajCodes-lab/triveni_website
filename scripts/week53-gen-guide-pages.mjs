// scripts/week53-gen-guide-pages.mjs
//
// Writes the route wrapper for every guide in src/utilis/guides/week53.
//
// The guide family already has the right division of labour: a 13-line wrapper
// that wires metadata and one server component, and all the content in a data
// module. So this only has to generate the wrapper, and the interesting part is
// the refusals.
//
// REFUSALS, each from a fault that actually shipped
//   * every `${IMG}/...` path is checked on disk, and a guide with a missing
//     image is refused rather than written — Week 52 shipped two pages with
//     broken imagery and record K caught four more before they went out;
//   * the `slug` in the data must match the `path`, because a mismatch produces
//     a page that builds cleanly and canonicalises to the wrong address;
//   * `intro` must be an array, because GuidePage maps it unguarded and record
//     K's first build failed on exactly that;
//   * and the parsed count is asserted against the files found, because the
//     weekend generator reported "21 of 21" after silently never seeing the
//     twenty-second city.

import { readFile, readdir, writeFile, mkdir, access } from "node:fs/promises";
import path from "node:path";

const ROOT = process.cwd();
const DATA_DIR = path.join(ROOT, "src", "utilis", "guides", "week53");

const files = (await readdir(DATA_DIR)).filter((f) => f.endsWith(".js"));
if (files.length === 0) {
  console.error("no guide data files found in src/utilis/guides/week53");
  process.exit(1);
}

let written = 0;
const refused = [];

for (const file of files) {
  const src = await readFile(path.join(DATA_DIR, file), "utf8");
  const mod = file.replace(/\.js$/, "");

  const slug = (src.match(/^\s*slug: '([^']+)',/m) || [])[1];
  const routePath = (src.match(/^\s*path: '([^']+)',/m) || [])[1];

  if (!slug || !routePath) {
    refused.push(`${file}: no slug or path in the data`);
    continue;
  }
  if (routePath !== `/${slug}`) {
    refused.push(`${file}: path "${routePath}" does not match slug "${slug}"`);
    continue;
  }
  if (!/^\s*intro: \[/m.test(src)) {
    refused.push(`${file}: intro is not an array — GuidePage maps it unguarded`);
    continue;
  }

  // A fare in the title must be a fare that appears in the body. Rounding
  // Rs 29,700 to "Rs 30,000" for a title is the same drift the wedding pages
  // had when they advertised "from Rs 15,000" above a table starting at 12,000,
  // and it is caught here rather than by a reader.
  const titleFares = [...(src.match(/^\s*metaTitle: '([^']+)'/m) || ["", ""])[1].matchAll(/₹([\d,]+)/g)].map((m) => m[1]);
  const bodyFares = new Set([...src.matchAll(/₹([\d,]+)/g)].map((m) => m[1]));
  const unbacked = titleFares.filter((f) => {
    // count how many times this figure appears outside the metaTitle line
    const withoutTitle = src.replace(/^\s*metaTitle: '[^']+'/m, "");
    return !withoutTitle.includes(`₹${f}`);
  });
  if (unbacked.length) {
    refused.push(
      `${file}: metaTitle quotes ₹${unbacked.join(", ₹")} which appears nowhere in the body` +
        ` (body has ${[...bodyFares].slice(0, 6).join(", ")})`,
    );
    continue;
  }

  // Every image path, checked on disk.
  // The terminator is the BACKTICK, not a quote: these paths sit inside
  // template literals and some real filenames contain an apostrophe
  // ("Humayun's_Tomb.jpg"). Stopping at the apostrophe made the checker refuse
  // a guide whose image was perfectly present.
  // Two forms to catch. `${IMG}/...` inside a template literal is the common
  // one, but a guide can also carry a literal '/images/car/...' path in quotes,
  // and checking only the first form would let that one through unverified.
  const imgs = [
    ...[...src.matchAll(/\$\{IMG\}([^`]+)/g)].map((m) => `/images/sightseeing${m[1]}`),
    ...[...src.matchAll(/['"`](\/images\/[^'"`]+)['"`]/g)].map((m) => m[1]),
  ];
  const missing = [];
  for (const rel of new Set(imgs)) {
    try {
      await access(path.join(ROOT, "public", rel.replace(/^\//, "")));
    } catch {
      missing.push(rel);
    }
  }
  if (missing.length) {
    refused.push(`${file}: ${missing.length} image path(s) not on disk — ${missing.join(", ")}`);
    continue;
  }

  const fn = `Week53${mod.charAt(0).toUpperCase()}${mod.slice(1)}Page`.replace(/[^A-Za-z0-9]/g, "");

  const page = `// Week 53 guide — see src/utilis/guides/week53/${mod}.js for the content and
// src/components/guides/GuidePage.jsx for the layout. This file only wires the
// route: metadata from the guide, one server component, hourly ISR.
import GuidePage from '@/components/guides/GuidePage';
import { guide } from '@/utilis/guides/week53/${mod}';
import { buildGuideMetadata } from '@/lib/seo/guide-schema';

export const revalidate = 3600;
export const metadata = buildGuideMetadata(guide);

export default function ${fn}() {
  return <GuidePage guide={guide} />;
}
`;

  const dir = path.join(ROOT, "src", "app", "(routes)", slug);
  await mkdir(dir, { recursive: true });
  await writeFile(path.join(dir, "page.js"), page, "utf8");
  written++;
  console.log(`  wrote /${slug}  (${new Set(imgs).size} images verified)`);
}

console.log(`\nguide data files: ${files.length}`);
console.log(`wrappers written: ${written}`);
if (refused.length) {
  console.log(`\nREFUSED (${refused.length}) — nothing written for these:`);
  for (const r of refused) console.log(`  ${r}`);
  process.exitCode = 1;
}
