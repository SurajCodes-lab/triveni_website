/**
 * Week 53: insert Indian thousands separators into the rupee amounts written as
 * literal display strings in the data files.
 *
 * The 376 unseparated fares measured across 199 pages are not interpolations —
 * they are amounts written into content strings, mostly inside prose such as
 * "Hotel accommodation for clients (₹2000-6000 per night per room)". No render-
 * time formatter reaches those, because the string is published as written.
 *
 * SAFETY
 * ------
 * This only inserts separators. After rewriting each file, the full ordered
 * sequence of digit-runs (commas stripped) is compared against the original and
 * the write is abandoned if they differ in any way. So no published amount can
 * change: 2000 may become 2,000 and can never become 2,500 or 200.
 *
 * Four-digit-and-longer runs only. Three-digit amounts and per-km rates are left
 * alone, as are years, distances, phone numbers and anything not preceded by a
 * currency marker.
 */
import { readFile, writeFile } from "node:fs/promises";

const FILES = [
  "src/utilis/sightseeingData.js",
  "src/utilis/airportTerminalData.js",
  "src/utilis/busRoutesData.js",
  "src/utilis/chardhamData.js",
  "src/utilis/attractionBlogs.js",
  "src/utilis/sightseeingBlogs.js",
  "src/utilis/busVsCabData.js",
  "src/utilis/cityRoutesData.js",
  "src/utilis/cityRoutePricing.js",
];

// A currency marker, then a 4+ digit run not already grouped.
const AMOUNT = /(₹|Rs\.?\s?)(\d{4,})(?![\d,])/g;
const digitRuns = (s) => (s.match(/\d+/g) || []).join("|");

let totalFiles = 0;
let totalAmounts = 0;

for (const file of FILES) {
  let before;
  try {
    before = await readFile(file, "utf8");
  } catch {
    console.log(`  skipped (not found): ${file}`);
    continue;
  }

  let count = 0;
  const after = before.replace(AMOUNT, (whole, sign, digits) => {
    const grouped = Number(digits).toLocaleString("en-IN");
    if (grouped === digits) return whole;
    count += 1;
    return `${sign}${grouped}`;
  });

  if (!count) continue;

  // The guard: digits, in order, must be identical once commas are removed.
  const a = digitRuns(before.replace(/,/g, ""));
  const b = digitRuns(after.replace(/,/g, ""));
  if (a !== b) {
    console.log(`  ABANDONED — digit sequence changed: ${file}`);
    continue;
  }

  await writeFile(file, after, "utf8");
  totalFiles += 1;
  totalAmounts += count;
  console.log(`  ${String(count).padStart(5)}  ${file}`);
}

console.log(`\n  ${totalAmounts} amounts grouped across ${totalFiles} files`);
console.log("  digit sequences verified identical in every file written");
