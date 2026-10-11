/**
 * Repair: the grouping pass inserted its import after the last line *starting*
 * with "import", which lands inside a multi-line `import {` block and breaks
 * the parse. Move any such line to after the statement that encloses it.
 */
import { readFile, writeFile } from "node:fs/promises";
import { glob } from "node:fs/promises";

const LINE = "import { groupDigits } from '@/utilis/pricing';";
let fixed = 0;

for await (const file of glob("src/**/*.{js,jsx}")) {
  let s = await readFile(file, "utf8");
  if (!s.includes(LINE)) continue;

  const lines = s.split("\n");
  const at = lines.findIndex((l) => l.trim() === LINE);
  if (at < 1) continue;

  // Is the preceding line an unterminated import? Walk back over the statement.
  let open = at - 1;
  while (open >= 0 && !/^import\b/.test(lines[open].trim())) open -= 1;
  if (open < 0) continue;

  const stmt = lines.slice(open, at).join("\n");
  const unterminated = !stmt.trimEnd().endsWith(";");
  if (!unterminated) continue;

  // Remove the misplaced line, then find where the enclosing statement ends.
  lines.splice(at, 1);
  let end = open;
  while (end < lines.length && !lines[end].trimEnd().endsWith(";")) end += 1;
  lines.splice(end + 1, 0, LINE);

  await writeFile(file, lines.join("\n"), "utf8");
  fixed += 1;
  console.log(`  moved import past a multi-line statement: ${file}`);
}

console.log(`\n  ${fixed} files repaired`);
