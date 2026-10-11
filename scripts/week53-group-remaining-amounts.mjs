/**
 * Week 53, third pass: the last 24 unseparated amounts.
 *
 * Two forms the earlier passes could not see:
 *
 *   1. The rupee sign written as a unicode escape rather than the character —
 *      `Bus is \u20B9${a - b}/person cheaper`. A search for the literal sign
 *      never matches it.
 *   2. Literal amounts in data files outside the nine covered by the first
 *      data pass.
 *
 * Same guarantee throughout: digits are only regrouped. Every file written is
 * checked so the ordered sequence of digit-runs is unchanged.
 */
import { readFile, writeFile } from "node:fs/promises";
import { glob } from "node:fs/promises";

const RUPEE = "\u20b9";
const SKIP = /groupDigits|rupee|toLocaleString|\bfare\(/i;
const IMPORT = "import { groupDigits } from '@/utilis/pricing';";
const digitRuns = (s) => (s.match(/\d+/g) || []).join("|");

let wrapped = 0;
let grouped = 0;
let touched = 0;

for await (const file of glob("src/**/*.{js,jsx,mjs}")) {
  const norm = file.split("\\").join("/");
  if (norm.endsWith("src/utilis/pricing.js")) continue;

  const before = await readFile(file, "utf8");
  let s = before;
  let w = 0;
  let g = 0;

  // 1. Escaped rupee sign followed by a template interpolation.
  s = s.replace(/\\u20[bB]9\$\{([^{}]{1,80})\}/g, (whole, expr) => {
    if (SKIP.test(expr)) return whole;
    w += 1;
    return "\\u20B9${groupDigits(" + expr.trim() + ")}";
  });

  // 2. Literal four-digit-plus amounts after either form of the sign.
  s = s.replace(
    new RegExp("(" + RUPEE + "|\\\\u20[bB]9|Rs\\.?\\s?)(\\d{4,})(?![\\d,])", "g"),
    (whole, sign, digits) => {
      const n = Number(digits).toLocaleString("en-IN");
      if (n === digits) return whole;
      g += 1;
      return sign + n;
    },
  );

  if (!w && !g) continue;

  // Guard: the digits themselves must not have moved.
  if (digitRuns(before.replace(/,/g, "")) !== digitRuns(s.replace(/,/g, ""))) {
    console.log(`  ABANDONED — digit sequence changed: ${norm}`);
    continue;
  }

  if (w) {
    const importLines = s.split("\n").filter((l) => /^import\b/.test(l)).join("\n");
    if (!/groupDigits/.test(importLines)) {
      const existing = s.match(/import \{([^}]*)\} from ['"]@\/utilis\/pricing['"];/);
      if (existing) {
        s = s.replace(
          existing[0],
          "import {" + existing[1].replace(/\s*$/, "") + ", groupDigits } from '@/utilis/pricing';",
        );
      } else {
        const lines = s.split("\n");
        let last = -1;
        for (let i = 0; i < lines.length; i += 1) {
          if (/^import\b/.test(lines[i])) {
            let j = i;
            while (j < lines.length && !lines[j].trimEnd().endsWith(";")) j += 1;
            last = j;
            i = j;
          }
        }
        const useDirective = /^['"]use (client|server)['"]/.test((lines[0] || "").trim());
        lines.splice(last >= 0 ? last + 1 : useDirective ? 1 : 0, 0, IMPORT);
        s = lines.join("\n");
      }
    }
  }

  await writeFile(file, s, "utf8");
  touched += 1;
  wrapped += w;
  grouped += g;
  console.log(`  ${String(w).padStart(3)} wrapped  ${String(g).padStart(4)} grouped  ${norm}`);
}

console.log(`\n  ${wrapped} escaped-sign sites wrapped, ${grouped} literals grouped, ${touched} files`);
console.log("  digit sequences verified identical in every file written");
