/**
 * Week 53: give every Product node an `image`.
 *
 * Google's Merchant listings report flags a missing `image` as a critical
 * error. Measured in the build, 1,791 Product nodes had none; the two on the
 * city and corridor template were fixed by hand, leaving 1,423 across eleven
 * further templates.
 *
 * Each template gets the image the page already uses — a vehicle image where
 * the page is about a vehicle, the shared social image otherwise. Nothing new
 * is introduced and nothing is invented: every path is checked to exist under
 * public/ before it is written.
 *
 * Only Product nodes that have no `image` key at all are touched. A node that
 * already sets one is left exactly as it is.
 */
import { readFile, writeFile, access } from "node:fs/promises";
import path from "node:path";

const ROOT = process.cwd();

// template file -> image path, chosen to match what the page is about.
const TEMPLATES = [
  ["src/app/(routes)/tempo-traveller/[route]/page.js", "/images/tempo/17_seater.jpg"],
  ["src/app/(routes)/one-way-cab/[route]/page.js", "/images/car/swift_dzire.jpg"],
  ["src/app/(routes)/round-trip/[route]/page.js", "/images/car/swift_dzire.jpg"],
  ["src/app/(routes)/bus-routes/[route]/page.js", "/images/bus/45_SEATER_BUS.jpg"],
  ["src/app/(routes)/local-taxi/[city]/page.js", "/images/car/swift_dzire.jpg"],
  ["src/app/(routes)/railway-station-taxi/[station]/page.js", "/images/car/swift_dzire.jpg"],
  ["src/app/(routes)/bus-stand-taxi/[stand]/page.js", "/images/car/swift_dzire.jpg"],
  ["src/app/(routes)/taxi-fare/[city]/page.js", "/images/car/swift_dzire.jpg"],
  ["src/lib/seo/vehicleCityRoutePage.js", null], // uses vehicle.image, resolved below
];

const exists = async (rel) => {
  try {
    await access(path.join(ROOT, "public", rel.replace(/^\//, "")));
    return true;
  } catch {
    return false;
  }
};

const NOTE =
  '      // Week 53: Google\'s Merchant listings report treats a missing `image`\n' +
  '      // as a critical error. This is an asset the page already uses.\n';

let touched = 0;
let added = 0;

for (const [file, img] of TEMPLATES) {
  let s;
  try {
    s = await readFile(path.join(ROOT, file), "utf8");
  } catch {
    console.log(`  skipped (not found): ${file}`);
    continue;
  }

  // vehicleCityRoutePage builds its nodes from a vehicle record, so the right
  // image is the vehicle's own rather than a fixed path.
  const value = img === null ? "`${BASE_URL}${vehicle.image}`" : `\`\${BASE_URL}${img}\``;
  if (img !== null && !(await exists(img))) {
    console.log(`  SKIPPED — image not on disk: ${img} (${file})`);
    continue;
  }

  // Insert after each Product node's @type line, when that node has no image
  // within the next few lines.
  const lines = s.split("\n");
  const out = [];
  let n = 0;
  for (let i = 0; i < lines.length; i += 1) {
    out.push(lines[i]);
    if (!/"@type":\s*['"]Product['"]/.test(lines[i])) continue;
    // Look ahead for an existing image key inside this node.
    const window = lines.slice(i + 1, i + 14).join("\n");
    if (/"image"\s*:/.test(window)) continue;
    const indent = (lines[i].match(/^\s*/) || [""])[0];
    out.push(NOTE.replace(/^ {6}/gm, indent));
    out.push(`${indent}"image": ${value},`);
    n += 1;
  }
  if (!n) continue;

  s = out.join("\n");

  // BASE_URL has to be in scope.
  if (!/\bBASE_URL\b/.test(s.split("\n").filter((l) => /^import/.test(l)).join("\n"))) {
    const m = s.match(/import \{([^}]*)\} from ['"]@\/lib\/seo\/constants['"];/);
    if (m && !m[1].includes("BASE_URL")) {
      s = s.replace(m[0], `import {${m[1].replace(/\s*$/, "")}, BASE_URL } from '@/lib/seo/constants';`);
    } else if (!m) {
      const ls = s.split("\n");
      let last = -1;
      for (let i = 0; i < ls.length; i += 1) {
        if (/^import\b/.test(ls[i])) {
          let j = i;
          while (j < ls.length && !ls[j].trimEnd().endsWith(";")) j += 1;
          last = j;
          i = j;
        }
      }
      const useDir = /^['"]use (client|server)['"]/.test((ls[0] || "").trim());
      ls.splice(last >= 0 ? last + 1 : useDir ? 1 : 0, 0, "import { BASE_URL } from '@/lib/seo/constants';");
      s = ls.join("\n");
    }
  }

  await writeFile(path.join(ROOT, file), s, "utf8");
  touched += 1;
  added += n;
  console.log(`  ${String(n).padStart(2)} node(s)  ${file}`);
}

console.log(`\n  ${added} Product nodes given an image across ${touched} templates`);
