/**
 * Week 53 baseline: what the site currently offers an answer engine.
 *
 * Reads the built HTML rather than the source, because what matters is what is
 * actually served. Answers a specific list of questions so the Week 53 plan can
 * be sized against measured gaps instead of assumptions:
 *
 *   - which structured-data types the site publishes, and on how many pages
 *   - how many pages carry a direct, extractable answer near the top
 *   - how many headings are phrased as the question a searcher actually types
 *   - how many pages cite an external authority, and which
 *   - author and reviewer attribution, which is what E-E-A-T is read from
 *   - image alt coverage
 *   - whether the site declares anything for AI crawlers at all
 */
import { readFile, readdir, stat, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";

const APP = path.join(process.cwd(), ".next", "server", "app");
const OUT = path.join(
  "D:/Desktop/triveni_next/2.0/week53/measurement",
  "aeo-geo-baseline.json",
);

const FAMILY = [
  [/^\/distance\//, "Distance"],
  [/^\/toll-cost\//, "Toll"],
  [/^\/one-way-cab\//, "One-way cab"],
  [/^\/round-trip\//, "Round trip"],
  [/^\/blog\//, "Guide / blog"],
  [/^\/sightseeing\//, "Sightseeing"],
  [/^\/religious-tours\/|^\/chardham/, "Char Dham / pilgrimage"],
  [/^\/wedding\//, "Wedding"],
  [/^\/corporate-transportation-service/, "Corporate"],
  [/^\/tempo-traveller\/|^\/force-urbania\/|^\/maharaja/, "Group vehicle"],
  [/^\/airport-service\/|airport|station-taxi/, "Airport / station"],
  [/^\/places-to-visit-near-/, "Near-city list"],
  [/^\/weekend-getaways-/, "Weekend"],
  [/-to-[a-z-]+$/, "Corridor / route"],
];

const familyOf = (p) => (FAMILY.find(([re]) => re.test(p)) || [, "Other"])[1];

async function* htmlFiles(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) yield* htmlFiles(full);
    else if (entry.name.endsWith(".html")) yield full;
  }
}

const AUTHORITIES = [
  "nhai.gov.in", "parivahan.gov.in", "asi.nic.in", "incredibleindia.org",
  "delhitourism.gov.in", "uttarakhandtourism.gov.in", "uptourism.gov.in",
  "tourism.rajasthan.gov.in", "himachaltourism.gov.in", "newdelhiairport.in",
  "badrinath-kedarnath.gov.in", "haridwar.nic.in", "irctc.co.in",
  "en.wikipedia.org", "rtoinfo", "morth.nic.in",
];

// A heading phrased as a question is the unit an answer engine extracts.
const QUESTION = /^(how|what|where|when|which|why|who|is|are|can|do|does|should)\b/i;

const r = {
  pages: 0,
  byFamily: {},
  schemaTypes: {},
  // AEO signals
  pagesWithFaqPage: 0,
  pagesWithQuestionNodes: 0,
  questionNodeTotal: 0,
  pagesWithHowTo: 0,
  pagesWithSpeakable: 0,
  pagesWithBreadcrumb: 0,
  pagesWithItemList: 0,
  pagesWithQuickAnswer: 0,
  pagesWithTable: 0,
  pagesWithDefinitionList: 0,
  questionHeadings: 0,
  pagesWithQuestionHeading: 0,
  // GEO / authority signals
  pagesCitingAuthority: 0,
  authorityCounts: {},
  pagesWithAuthorNode: 0,
  pagesWithReviewedBy: 0,
  pagesWithDateModified: 0,
  pagesWithOrganizationNode: 0,
  // on-page hygiene
  pagesMissingMetaDescription: 0,
  pagesWithMultipleH1: 0,
  pagesWithNoH1: 0,
  titleTooLong: 0,
  imagesTotal: 0,
  imagesMissingAlt: 0,
  pagesWithImagesMissingAlt: 0,
  // the two AI-crawler affordances
  hasLlmsTxt: existsSync(path.join(process.cwd(), "public", "llms.txt")),
  hasAiTxt: existsSync(path.join(process.cwd(), "public", "ai.txt")),
  samples: { questionHeadings: [], quickAnswer: [], missingAlt: [] },
};

const bump = (obj, key, by = 1) => {
  obj[key] = (obj[key] || 0) + by;
};

for await (const file of htmlFiles(APP)) {
  const html = await readFile(file, "utf8");
  const rel = file.slice(APP.length).replace(/\\/g, "/").replace(/\.html$/, "");
  const route = rel === "/index" ? "/" : rel;
  r.pages += 1;
  const fam = familyOf(route);
  r.byFamily[fam] ||= { pages: 0, question: 0, cites: 0, quickAnswer: 0, faq: 0 };
  r.byFamily[fam].pages += 1;

  // ---- structured data -----------------------------------------------
  const blocks = [...html.matchAll(
    /<script[^>]+application\/ld\+json[^>]*>([\s\S]*?)<\/script>/g,
  )].map((m) => m[1]);
  const joined = blocks.join(" ");
  for (const t of new Set(
    [...joined.matchAll(/"@type"\s*:\s*"([^"]+)"/g)].map((m) => m[1]),
  )) {
    bump(r.schemaTypes, t);
  }
  if (/"@type"\s*:\s*"FAQPage"/.test(joined)) {
    r.pagesWithFaqPage += 1;
    r.byFamily[fam].faq += 1;
  }
  const qNodes = (joined.match(/"@type"\s*:\s*"Question"/g) || []).length;
  if (qNodes) {
    r.pagesWithQuestionNodes += 1;
    r.questionNodeTotal += qNodes;
  }
  if (/"@type"\s*:\s*"HowTo"/.test(joined)) r.pagesWithHowTo += 1;
  if (/"speakable"/.test(joined)) r.pagesWithSpeakable += 1;
  if (/"@type"\s*:\s*"BreadcrumbList"/.test(joined)) r.pagesWithBreadcrumb += 1;
  if (/"@type"\s*:\s*"ItemList"/.test(joined)) r.pagesWithItemList += 1;
  if (/"author"\s*:/.test(joined)) r.pagesWithAuthorNode += 1;
  if (/"reviewedBy"\s*:/.test(joined)) r.pagesWithReviewedBy += 1;
  if (/"dateModified"\s*:/.test(joined)) r.pagesWithDateModified += 1;
  if (/"@type"\s*:\s*"Organization"/.test(joined)) r.pagesWithOrganizationNode += 1;

  // ---- an extractable answer near the top ----------------------------
  const head = html.slice(0, 60000);
  const quick = /quick\s*answer|at a glance|in short|direct answer|short answer/i.test(head);
  if (quick) {
    r.pagesWithQuickAnswer += 1;
    r.byFamily[fam].quickAnswer += 1;
    if (r.samples.quickAnswer.length < 12) r.samples.quickAnswer.push(route);
  }
  if (/<table[\s>]/.test(html)) r.pagesWithTable += 1;
  if (/<dl[\s>]/.test(html)) r.pagesWithDefinitionList += 1;

  // ---- headings phrased as questions ---------------------------------
  const headings = [...html.matchAll(/<h[23][^>]*>([\s\S]*?)<\/h[23]>/g)]
    .map((m) => m[1].replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim())
    .filter(Boolean);
  const qh = headings.filter((h) => QUESTION.test(h) || h.endsWith("?"));
  if (qh.length) {
    r.pagesWithQuestionHeading += 1;
    r.questionHeadings += qh.length;
    r.byFamily[fam].question += qh.length;
    if (r.samples.questionHeadings.length < 15) {
      r.samples.questionHeadings.push({ route, heading: qh[0] });
    }
  }

  // ---- outbound authority citations ----------------------------------
  let cited = false;
  for (const a of AUTHORITIES) {
    if (html.includes(a)) {
      bump(r.authorityCounts, a);
      cited = true;
    }
  }
  if (cited) {
    r.pagesCitingAuthority += 1;
    r.byFamily[fam].cites += 1;
  }

  // ---- on-page hygiene ------------------------------------------------
  const title = (html.match(/<title[^>]*>([\s\S]*?)<\/title>/) || [, ""])[1].trim();
  if (title.length > 65) r.titleTooLong += 1;
  if (!/<meta[^>]+name="description"/.test(html)) r.pagesMissingMetaDescription += 1;
  const h1s = (html.match(/<h1[\s>]/g) || []).length;
  if (h1s === 0) r.pagesWithNoH1 += 1;
  if (h1s > 1) r.pagesWithMultipleH1 += 1;

  const imgs = [...html.matchAll(/<img\b[^>]*>/g)].map((m) => m[0]);
  r.imagesTotal += imgs.length;
  const noAlt = imgs.filter((t) => !/\balt\s*=/.test(t) || /\balt\s*=\s*(""|'')/.test(t));
  if (noAlt.length) {
    r.imagesMissingAlt += noAlt.length;
    r.pagesWithImagesMissingAlt += 1;
    if (r.samples.missingAlt.length < 10) {
      r.samples.missingAlt.push({ route, count: noAlt.length });
    }
  }
}

r.schemaTypes = Object.fromEntries(
  Object.entries(r.schemaTypes).sort((a, b) => b[1] - a[1]),
);
r.authorityCounts = Object.fromEntries(
  Object.entries(r.authorityCounts).sort((a, b) => b[1] - a[1]),
);
r.byFamily = Object.fromEntries(
  Object.entries(r.byFamily).sort((a, b) => b[1].pages - a[1].pages),
);
r.createdAt = new Date().toISOString();

await writeFile(OUT, JSON.stringify(r, null, 2), "utf8");

console.log(`pages read: ${r.pages}`);
console.log(`\nAEO — an answer engine's view`);
console.log(`  question-and-answer markup:        ${r.pagesWithFaqPage} pages, ${r.questionNodeTotal} question nodes`);
console.log(`  headings phrased as a question:    ${r.pagesWithQuestionHeading} pages, ${r.questionHeadings} headings`);
console.log(`  a direct answer near the top:      ${r.pagesWithQuickAnswer} pages`);
console.log(`  step-by-step markup:               ${r.pagesWithHowTo} pages`);
console.log(`  speakable markup:                  ${r.pagesWithSpeakable} pages`);
console.log(`  a table (extractable facts):       ${r.pagesWithTable} pages`);
console.log(`  llms.txt present:                  ${r.hasLlmsTxt}`);
console.log(`\nGEO — why a generative engine would cite us`);
console.log(`  cites an external authority:       ${r.pagesCitingAuthority} pages`);
console.log(`  names an author:                   ${r.pagesWithAuthorNode} pages`);
console.log(`  names a reviewer:                  ${r.pagesWithReviewedBy} pages`);
console.log(`  declares a last-modified date:     ${r.pagesWithDateModified} pages`);
console.log(`\nOn-page hygiene`);
console.log(`  no meta description:               ${r.pagesMissingMetaDescription}`);
console.log(`  no main heading:                   ${r.pagesWithNoH1}`);
console.log(`  more than one main heading:        ${r.pagesWithMultipleH1}`);
console.log(`  listing over 65 characters:        ${r.titleTooLong}`);
console.log(`  images:                            ${r.imagesTotal}, missing alt text: ${r.imagesMissingAlt} on ${r.pagesWithImagesMissingAlt} pages`);
console.log(`\nwritten: ${OUT}`);
