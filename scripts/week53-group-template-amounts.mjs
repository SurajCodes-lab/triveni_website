/**
 * Week 53, second pass: the remaining unseparated amounts are computed values
 * interpolated into template-literal sentences — "approximately ₹${total} for a
 * car" — rather than JSX. The first pass only wrapped the JSX form.
 *
 * Same helper, same guarantee: groupDigits regroups digits and never adds,
 * removes or moves a currency sign, so the sign stays where the string put it.
 */
import { readFile, writeFile } from "node:fs/promises";
import { glob } from "node:fs/promises";

const RUPEE = "\u20b9";
const SKIP = /groupDigits|rupee|toLocaleString|\bfare\(/i;
const IMPORT = "import { groupDigits } from '@/utilis/pricing';";

let files = 0;
let sites = 0;

for await (const file of glob("src/**/*.{js,jsx}")) {
  const norm = file.split("\\").join("/");
  // pricing.js defines the helper; its own doc examples must not be rewritten.
  if (norm.endsWith("src/utilis/pricing.js")) continue;

  let s = await readFile(file, "utf8");
  if (!s.includes(RUPEE + "${")) continue;

  let hits = 0;
  s = s.replace(new RegExp(RUPEE + "\\$\\{([^{}]{1,80})\\}", "g"), (whole, expr) => {
    if (SKIP.test(expr)) return whole;
    hits += 1;
    return RUPEE + "${groupDigits(" + expr.trim() + ")}";
  });
  if (!hits) continue;

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
      // Insert after the last COMPLETE import statement, so a multi-line
      // import is never split — that broke three files on the first pass.
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
      const at = last >= 0 ? last + 1 : useDirective ? 1 : 0;
      lines.splice(at, 0, IMPORT);
      s = lines.join("\n");
    }
  }

  await writeFile(file, s, "utf8");
  files += 1;
  sites += hits;
  console.log(`  ${String(hits).padStart(3)}  ${norm}`);
}

console.log(`\n  ${sites} template-literal sites wrapped across ${files} files`);
