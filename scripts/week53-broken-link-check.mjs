/**
 * Week 53: find the internal links that genuinely resolve to nothing.
 *
 * An earlier review reported 968 internal link targets resolving to no built
 * page, of which 957 were covered by a redirect rule and eleven were actually
 * broken. This re-derives that from the current build rather than trusting the
 * figure, because the three pages that were unreachable last quarter were
 * unreachable precisely because a rule and a page disagreed.
 *
 * Resolution order mirrors what the server actually does: a known route wins,
 * then a redirect rule, then it is broken.
 */
import { readFile, readdir, writeFile } from "node:fs/promises";
import path from "node:path";

const ROOT = process.cwd();
const APP = path.join(ROOT, ".next", "server", "app");
const OUT = "D:/Desktop/triveni_next/2.0/week53/measurement/broken-links.json";

const known = new Set(
  JSON.parse(await readFile(path.join(ROOT, "src/generated/known-routes.json"), "utf8")),
);

// Every redirect the build will serve, from the routes manifest.
const manifest = JSON.parse(
  await readFile(path.join(ROOT, ".next", "routes-manifest.json"), "utf8"),
);
const redirects = new Map();
for (const r of manifest.redirects || []) {
  if (!r.source.includes(":") && !r.has) redirects.set(r.source, r.destination);
}

const norm = (href) => {
  const clean = href.split("#")[0].split("?")[0];
  if (!clean.startsWith("/")) return null;
  // A protocol-relative href (//cdn.example.com) begins with a slash but is an
  // external resource, not a route. Treating one as internal reported six
  // image CDNs and the tag manager as broken pages on the first run.
  if (clean.startsWith("//")) return null;
  const trimmed = clean.length > 1 ? clean.replace(/\/+$/, "") : clean;
  return trimmed || "/";
};

const resolves = (p) => {
  const seen = new Set();
  let cur = p;
  while (true) {
    if (known.has(cur)) return true;
    if (!redirects.has(cur) || seen.has(cur)) return false;
    seen.add(cur);
    cur = norm(redirects.get(cur)) || cur;
  }
};

// Things a page legitimately links to that are not app routes.
const NON_ROUTE = /^\/(_next|images?|img|assets|fonts|videos?|favicon|apple-touch|icons?|sitemap|robots|manifest|sw\.js|.*\.(png|jpe?g|webp|avif|svg|gif|ico|css|js|json|xml|txt|pdf|mp4|webm|woff2?|ttf))/i;

async function* htmlFiles(dir) {
  for (const e of await readdir(dir, { withFileTypes: true })) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) yield* htmlFiles(full);
    else if (e.name.endsWith(".html")) yield full;
  }
}

const broken = new Map();     // target -> Set of source pages
let pages = 0, hrefs = 0, viaRedirect = 0;

for await (const file of htmlFiles(APP)) {
  const html = await readFile(file, "utf8");
  pages += 1;
  const src = file.slice(APP.length).replace(/\\/g, "/").replace(/\.html$/, "") || "/";
  for (const m of html.matchAll(/href="(\/[^"]*)"/g)) {
    const target = norm(m[1]);
    if (!target || NON_ROUTE.test(target)) continue;
    hrefs += 1;
    if (known.has(target)) continue;
    if (resolves(target)) { viaRedirect += 1; continue; }
    if (!broken.has(target)) broken.set(target, new Set());
    if (broken.get(target).size < 8) broken.get(target).add(src === "/index" ? "/" : src);
  }
}

const rows = [...broken.entries()]
  .map(([target, srcs]) => ({ target, sources: [...srcs] }))
  .sort((a, b) => b.sources.length - a.sources.length || a.target.localeCompare(b.target));

await writeFile(OUT, JSON.stringify({
  createdAt: new Date().toISOString(),
  pagesScanned: pages,
  internalHrefs: hrefs,
  resolvedViaRedirect: viaRedirect,
  brokenTargets: rows.length,
  rows,
}, null, 2), "utf8");

console.log(`pages scanned:            ${pages.toLocaleString()}`);
console.log(`internal hrefs:           ${hrefs.toLocaleString()}`);
console.log(`resolved via a redirect:  ${viaRedirect.toLocaleString()}`);
console.log(`genuinely broken targets: ${rows.length}`);
console.log();
for (const r of rows) {
  console.log(`  ${r.target}`);
  console.log(`     linked from: ${r.sources.join(", ")}`);
}
console.log(`\nwritten: ${OUT}`);
