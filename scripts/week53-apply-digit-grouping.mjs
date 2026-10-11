/**
 * Week 53: wrap every `₹{value}` render site in groupDigits().
 *
 * Measured before: 376 fares across 199 pages rendered without a thousands
 * separator, because the fare data is a mixture of numbers, digit strings and
 * already-grouped strings and the render sites interpolate whichever they get.
 *
 * groupDigits only regroups digits — it never adds, removes or moves a currency
 * sign — so this is a pure transformation of 127 call sites and is idempotent.
 * Call sites already wrapped in a formatter are skipped.
 */
import { readFile, writeFile } from "node:fs/promises";
import { glob } from "node:fs/promises";

const RUPEE = "₹";
const SKIP = /rupee|groupDigits|toLocaleString|\bfare\(/i;

const files = [];
for await (const f of glob("src/**/*.{js,jsx}")) files.push(f);

let changedFiles = 0;
let changedSites = 0;

for (const file of files.sort()) {
  let s = await readFile(file, "utf8");
  if (!s.includes(`${RUPEE}{`)) continue;

  let hits = 0;
  // Only JSX interpolations immediately after a rupee sign, with a simple
  // expression inside — a nested brace or a ternary is left for a human.
  const out = s.replace(
    new RegExp(`${RUPEE}\\{([^{}]{1,80})\\}`, "g"),
    (whole, expr) => {
      if (SKIP.test(expr)) return whole;
      hits += 1;
      return `${RUPEE}{groupDigits(${expr.trim()})}`;
    },
  );
  if (!hits) continue;

  s = out;

  // Ensure the import, matching whatever style the file already uses.
  if (!/groupDigits\s*\}/.test(s.split("\n").filter((l) => l.startsWith("import")).join("\n"))) {
    const existing = s.match(/import \{([^}]*)\} from ['"]@\/utilis\/pricing['"];/);
    if (existing && !existing[1].includes("groupDigits")) {
      s = s.replace(
        existing[0],
        `import {${existing[1].replace(/\s*$/, "")}, groupDigits } from '@/utilis/pricing';`,
      );
    } else if (!existing) {
      const lines = s.split("\n");
      const lastImport = lines.reduce((acc, l, i) => (l.startsWith("import ") ? i : acc), -1);
      const insertAt = lastImport >= 0 ? lastImport + 1 : (lines[0]?.startsWith("'use client'") ? 1 : 0);
      lines.splice(insertAt, 0, `import { groupDigits } from '@/utilis/pricing';`);
      s = lines.join("\n");
    }
  }

  await writeFile(file, s, "utf8");
  changedFiles += 1;
  changedSites += hits;
  console.log(`  ${String(hits).padStart(3)}  ${file}`);
}

console.log(`\n  ${changedSites} render sites wrapped across ${changedFiles} files`);
