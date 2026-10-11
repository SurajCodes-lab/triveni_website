/**
 * SERP-CTR — Answer-Box Defence Layer
 * ===================================
 *
 * WHY THIS MODULE EXISTS (Week 43, GSC-driven)
 * --------------------------------------------
 * Google Search Console (2026-05-19 to 2026-08-18) showed 6,863,932 impressions
 * producing only 42,380 clicks — a sitewide CTR of 0.62% against an expected
 * ~2.2% for the site's average position of 8.4.
 *
 * The cause is NOT ranking and NOT technical SEO. Controlling for position
 * proves it — within the *identical* position band 6-8:
 *
 *     DISTANCE   queries ("delhi to agra distance")  0.132% CTR  (550,669 impr)
 *     TOLL       queries ("delhi to agra toll")      1.446% CTR  ( 11x better)
 *     TRIP-IDEA  queries ("weekend getaways")        1.528% CTR  ( 12x better)
 *     COMMERCIAL queries ("delhi to agra cab")       1.700% CTR  ( 13x better)
 *
 * Same domain, same authority, same position — an 11-13x CTR spread. The
 * variable is whether Google answers the query *inside the SERP*. "How far is
 * X to Y" is resolved by the distance/Maps panel, so the user never clicks.
 * "What is the toll" has no answer box, so they must.
 *
 * 75.6% of this site's impressions sit on answer-box-exposed queries.
 *
 * THE RULE THIS MODULE ENFORCES
 * -----------------------------
 * Never lead a title or description with the fact Google already displays.
 * Lead with the adjacent value the SERP cannot show — toll, real cab fare,
 * total trip cost — and let the answered fact appear later as proof of
 * relevance. A title that repeats the answer box is an advert for not clicking.
 *
 * Applied at the template layer, so one change cascades to every page of a type.
 */

import { tollCostRoutes } from '@/utilis/tollCostData';
import { aliasFor } from './place-aliases';
import { groupDigits } from '@/utilis/pricing';

/* ------------------------------------------------------------------ *
 * Formatting
 * ------------------------------------------------------------------ */

/** Rupees with Indian digit grouping. formatINR(4500) -> "₹4,500" */
export function formatINR(n) {
  const num = Number(n);
  if (!Number.isFinite(num)) return '';
  return `₹${Math.round(num).toLocaleString('en-IN')}`;
}

/**
 * Truncate on a word boundary without ever cutting mid-word or leaving a
 * dangling separator. Returns the input untouched when already short enough.
 */
/**
 * After a cut, a trailing ":" or "-" clause can be left as a single stray word.
 * Dropping the clause outright reads far better than keeping its first word:
 * "Gateway of India Mumbai Guide 2026" beats "Gateway of India Mumbai Guide
 * 2026: How". Only applied where a truncation is known to have happened, and
 * only when the remainder is still a substantial title on its own.
 */
function dropStubClause(str) {
  const s = String(str || '').trim();
  const at = Math.max(s.lastIndexOf(':'), s.lastIndexOf(' - '), s.lastIndexOf(' \u2013 '), s.lastIndexOf(' \u2014 '));
  if (at < 20) return s;
  const head = s.slice(0, at).replace(/[\s,\u2013\u2014|:+&-]+$/, '').trim();
  const tail = s.slice(at).replace(/^[\s:\u2013\u2014-]+/, '').trim();
  const isStub = tail.length > 0 && tail.length <= 8 && !/\s/.test(tail);
  return isStub && head.length >= 20 ? head : s;
}

/** Google renders roughly 155-160 characters; 200 is the hard ceiling we allow. */
export const DESC_BUDGET = 200;

/**
 * Trim a description to a budget without cutting through a sentence.
 *
 * Whole trailing sentences are dropped first, which keeps the text readable. Only
 * if the very first sentence is itself over budget does this fall back to a word
 * boundary cut, and that result still goes through the orphan-tail guard so it
 * cannot end on a connector.
 */
export function tightenDescription(text, max = DESC_BUDGET) {
  const s = String(text || '').trim();
  if (s.length <= max) return s;

  // A sentence ends at punctuation FOLLOWED BY whitespace or the end of the
  // text. The earlier pattern split on any "." at all, so a drive time of
  // "2.5-3 hours" became the fragment "5-3 hours." in the rendered snippet.
  const sentences = s.match(/.+?[.!?]+(?=\s|$)\s*/g);
  if (sentences) {
    let out = '';
    for (const part of sentences) {
      if ((out + part).trim().length > max) break;
      out += part;
    }
    out = out.trim();
    if (out.length >= 70) return out;
  }

  const cut = dropOrphanTail(clamp(s, max));
  return /[.!?]$/.test(cut) ? cut : cut + '.';
}

export function clamp(str, max) {
  const s = String(str || '').trim();
  if (s.length <= max) return s;
  const cut = s.slice(0, max);
  const at = cut.lastIndexOf(' ');
  const trimmed = (at > max * 0.6 ? cut.slice(0, at) : cut)
    .replace(/[\s,–—|:+&-]+$/, '');
  // A word-boundary cut can still land on a connector -- "Gateway of India
  // Mumbai Guide 2026: How to" -- which reads as a broken listing. Clear it.
  return dropStubClause(dropOrphanTail(trimmed));
}

/** Reverse "delhi-to-agra" -> "agra-to-delhi". Null if not an A-to-B slug. */
export function reverseRouteSlug(slug) {
  const parts = String(slug || '').split('-to-');
  return parts.length === 2 && parts[0] && parts[1] ? `${parts[1]}-to-${parts[0]}` : null;
}

/**
 * The title budget available to page content.
 *
 * The root layout appends '%s | Triveni Cabs' (15 characters) and Google
 * truncates the rendered title at roughly 60, so the content half gets 45. An
 * audit of the built HTML found 85% of pages exceeding 60 characters (median 72,
 * maximum 119) because every title was being budgeted at 60 *before* the suffix.
 */
export const TITLE_BUDGET = 45;

/**
 * Pick the first title variant that fits the budget.
 *
 * Route titles vary enormously in length — "Delhi to Agra" is 13 characters,
 * "Amritsar to Wagah Border" is 24 — so a single formula either overflows on the
 * long pairs or wastes the budget on the short ones. Variants are supplied
 * longest-first; the last one should be short enough to survive any city pair,
 * and is clamped as a final guard.
 */
/**
 * Clamp a page title to the content budget.
 *
 * For templates that build their title inline instead of going through
 * metadata-factory's truncateTitle. Without it those titles reach 80-119
 * characters and everything past roughly the 60th — usually the price, the
 * rating and the call to action — never renders in the SERP.
 */
export function clampTitle(title) {
  return clamp(title, TITLE_BUDGET);
}

/** Clauses that carry no information and are always safe to drop. */
const FILLER_CLAUSE = /\s*[|·]\s*(book now|book|vip|budget yatra|no surge|24\/7|4\.9★[^|]*|book online)\s*(?=\||$)/gi;
const TRAILING_RATING = /\s*[—–-]\s*4\.9★.*$/;

/**
 * How much of an EXISTING title actually survives in the SERP.
 *
 * Not the same number as TITLE_BUDGET, and the difference matters.
 *
 * The root layout appends " | Triveni Cabs" (15 chars) and Google truncates the
 * *rendered* title near 60. So a page whose content half is 55 characters renders
 * at 70, Google shows 60, and what gets cut is the brand — the content is fully
 * visible. Harm only begins once the content half passes ~58.
 *
 * TITLE_BUDGET (45) is the target when *writing a new formula*, where the wording
 * is ours to design and 45 informative characters plus a visible brand is the
 * better trade. DISPLAY_BUDGET is the threshold for *editing copy someone already
 * wrote*: squeezing a 55-character hand-written title down to 45 buys a rendered
 * brand and pays for it by deleting a real clause, which is a bad trade.
 */
export const DISPLAY_BUDGET = 58;

/**
 * Fit an existing title into the display budget WITHOUT destroying information.
 *
 * Long titles here are almost always `Primary | Secondary | Filler`, where the
 * filler clause ("Book Now", "VIP", "No Surge", a repeated 4.9★) says nothing a
 * searcher wants. So: strip known filler first, then consider both dropping whole
 * trailing clauses and cutting on a word boundary — and keep whichever candidate
 * is LONGEST while still fitting. An earlier version simply took the first
 * clause-drop that fitted, which turned "Agra Food Tour 2026 | Petha, Mughlai &
 * Street Food Guide" into "Agra Food Tour 2026" and threw away 26 characters of
 * budget along with the entire description.
 *
 * THE GUARD THAT MATTERS: if every way of reaching the budget cuts away a rupee
 * figure the original carried, the original is returned untouched. Losing the
 * brand suffix is cheap — brand queries are 0.1% of impressions. Losing the fare
 * from a fare-led snippet is not.
 */
/**
 * Public entry point for every title on the site.
 *
 * The brand de-duplication and the orphan-tail guard live here rather than in
 * the metadata factory because most pages assemble their own title and call this
 * function directly -- a guard applied only in the factory reached none of them.
 */
export function tightenTitle(title, max = DISPLAY_BUDGET) {
  return dropOrphanTail(tightenCore(deduplicateBrand(title), max));
}

function tightenCore(title, max) {
  const original = String(title || '').trim();
  if (original.length <= max) return original;

  // Only protect a fare the reader can actually see. A ₹ figure sitting at
  // character 90 of a 96-character title is already past Google's cut, so
  // refusing to tighten "for its sake" keeps the title long and protects
  // nothing. Guard on visible prices only.
  const priceAt = original.indexOf('₹');
  const hadVisiblePrice = priceAt >= 0 && priceAt < max;
  const keeps = (c) => c.length > 0 && c.length <= max && (!hadVisiblePrice || /₹/.test(c));

  const stripped = original
    .replace(FILLER_CLAUSE, '')
    .replace(TRAILING_RATING, '')
    .replace(/\s*\|\s*$/, '')
    .trim();
  if (keeps(stripped)) return stripped;

  const candidates = [];

  // Progressively drop trailing clauses.
  const parts = stripped.split(/\s*\|\s*/);
  for (let n = parts.length - 1; n >= 1; n--) {
    candidates.push(parts.slice(0, n).join(' | '));
  }
  // Word-boundary cut, which often retains more than a clause drop.
  candidates.push(clamp(stripped, max));

  const viable = candidates.filter(keeps);
  if (viable.length) {
    // Keep the most informative option that fits.
    return viable.reduce((best, c) => (c.length > best.length ? c : best));
  }

  // Nothing fitted the budget while keeping the fare. Returning the original
  // unchanged was the old behaviour and it is wrong at the extremes: a tour title
  // built as "<name> ₹<price> — <two full highlight sentences> | Book" has no
  // clause boundary early enough, so the guard handed back all 160 characters.
  // Fall back to the display budget instead — wider than the authoring budget, so
  // the fare usually survives, and bounded, so a title can never run away.
  const ceiling = Math.max(max, DISPLAY_BUDGET);
  return clamp(stripped, ceiling);
}

/**
 * Words that cannot legitimately end a title.
 *
 * A word-boundary cut is better than a mid-word cut, but it still lands wherever
 * the budget runs out — and when it lands on a connector the reader sees a
 * listing that stops mid-thought: "Triveni Cabs Pricing Transparency | No Hidden
 * Charges, No | Triveni Cabs". That reads as broken in the results page and costs
 * the click, which is the one thing these titles exist to win.
 *
 * Deliberately closed-class only. "Drivers", "Fleet" or "Customer" can genuinely
 * be the last word of a title, so an open-class word is left alone even when it
 * is the product of a cut; only words that cannot end a phrase are stripped.
 * The brand tokens are included because the layout template re-appends the brand.
 */
const ORPHAN_TAIL =
  /(?:[\s,\u2013\u2014|:&-]*\b(?:a|an|and|at|by|for|from|in|into|no|of|on|or|our|per|the|to|up|vs|we|who|whose|with|your|triveni)\b)+[\s,\u2013\u2014|:&-]*$/i;

/** Remove a trailing fragment left behind by a word-boundary cut. */
export function dropOrphanTail(str) {
  const s = String(str || '').trim();
  const trimmed = s
    .replace(ORPHAN_TAIL, '')
    .replace(/[\s,\u2013\u2014|:+&-]+$/, '')
    .trim();
  // Never strip a title down to nothing; if the guard would gut it, keep it.
  return trimmed.length >= 12 ? trimmed : s;
}

/**
 * Remove a brand mention the layout template is about to add anyway.
 *
 * The layout applies `%s | Triveni Cabs`. A title whose *trailing* clause also
 * names the brand therefore renders it twice — "Trust & Credentials | Triveni
 * Cabs — Verified Since 2015 | Triveni Cabs". A brand mention in the *first*
 * clause is left alone, because on pages like /triveni-cabs-vs-uber the brand is
 * the subject of the page and removing it would destroy the title.
 */
export function deduplicateBrand(title) {
  const parts = String(title || '').split(/\s*\|\s*/);
  if (parts.length < 2) return String(title || '').trim();
  const kept = [parts[0]];
  for (let i = 1; i < parts.length; i++) {
    // The trademark symbol has to come off with the brand it is attached to.
    // Stripping "Triveni Cabs" out of "Triveni Cabs\u2122" on its own would leave a
    // bare "\u2122", which is truthy and would survive as an orphan clause sitting in
    // the middle of the title ("Agra Cantt Taxi | \u2122 | Triveni Cabs\u2122").
    const cleaned = parts[i]
      .replace(/\btriveni\s+cabs\b\s*[\u2122\u00ae]?/gi, '')
      .replace(/\btriveni\b/gi, '')
      .replace(/^[\s,\u2013\u2014:&\u2122\u00ae-]+|[\s,\u2013\u2014:&\u2122\u00ae-]+$/g, '')
      .trim();
    if (cleaned) kept.push(cleaned);
  }
  return kept.join(' | ').trim();
}

/**
 * The full title pipeline: drop a brand the template will re-add, tighten to the
 * budget, then clear any fragment the tightening left behind. Order matters —
 * de-duplicating first frees characters that tightening would otherwise spend.
 */
export function finalizeTitle(title, max = TITLE_BUDGET) {
  return tightenTitle(title, max);
}

export function pickTitle(variants, max = TITLE_BUDGET) {
  for (const v of variants) {
    if (v && v.length <= max) return v;
  }
  return clamp(variants[variants.length - 1] || '', max);
}

/* ------------------------------------------------------------------ *
 * Toll resolution — the highest-CTR asset the site owns
 * ------------------------------------------------------------------ */

/**
 * Resolve measured toll for a route slug.
 *
 * Toll plazas are physically symmetric: the same barriers are crossed in both
 * directions at the same car/SUV rate, so `delhi-to-agra` toll data is valid
 * for `agra-to-delhi`. Checking the reverse slug roughly doubles coverage at
 * zero accuracy cost.
 *
 * Returns null rather than an estimate. Publishing a guessed rupee figure in a
 * title would be worse than omitting it, because the page then fails to deliver
 * what the snippet promised and the user bounces straight back to the SERP.
 *
 * @returns {{car:number, suv:number, plazaCount:number, reversed:boolean}|null}
 */
export function getRouteTollSummary(slug) {
  if (!slug) return null;
  const direct = tollCostRoutes[slug];
  if (direct && direct.totalTollCost) {
    return {
      car: direct.totalTollCost.car,
      suv: direct.totalTollCost.suv,
      plazaCount: direct.tollPlazas ? direct.tollPlazas.length : 0,
      reversed: false,
    };
  }
  const rev = reverseRouteSlug(slug);
  const mirror = rev ? tollCostRoutes[rev] : null;
  if (mirror && mirror.totalTollCost) {
    return {
      car: mirror.totalTollCost.car,
      suv: mirror.totalTollCost.suv,
      plazaCount: mirror.tollPlazas ? mirror.tollPlazas.length : 0,
      reversed: true,
    };
  }
  return null;
}

/** True when a dedicated /toll-cost page exists for this exact slug. */
export function hasTollCostPage(slug) {
  return Boolean(slug && tollCostRoutes[slug]);
}

/**
 * Populate a distance route's `tollPlazas` from the measured /toll-cost dataset
 * when the route has none of its own (115 of 121 routes ship an empty array).
 *
 * This is what makes the new toll-led title honest. The snippet now promises
 * "₹285 car toll across 2 plazas", so the page has to show that table — a
 * promise the page does not keep is worse than a low CTR, because the user
 * bounces back to the SERP and Google reads that as a bad result.
 *
 * DistanceGuideClient already renders a full toll section gated on
 * `route.tollPlazas.length > 0` and expects `{ name, km, cost }`, so filling
 * the array is all that is required — no component change.
 *
 * For a reversed match the plaza distances are re-measured from the new origin
 * and the order flipped, so "60 km in" stays true for the direction travelled.
 */
export function enrichRouteWithToll(route, slug) {
  if (!route) return route;
  if (Array.isArray(route.tollPlazas) && route.tollPlazas.length > 0) return route;

  const direct = tollCostRoutes[slug];
  const rev = reverseRouteSlug(slug);
  const mirror = !direct && rev ? tollCostRoutes[rev] : null;
  const source = direct || mirror;
  if (!source || !Array.isArray(source.tollPlazas) || source.tollPlazas.length === 0) return route;

  const total = source.totalDistance || (route.distance ? route.distance.km : 0);
  const plazas = source.tollPlazas.map((t) => ({
    name: t.name,
    km: mirror && total ? Math.max(0, total - t.location) : t.location,
    cost: t.carCost,
    suvCost: t.suvCost,
  }));
  if (mirror) plazas.sort((a, b) => a.km - b.km);

  return { ...route, tollPlazas: plazas, tollSource: mirror ? 'mirrored' : 'measured' };
}

/* ------------------------------------------------------------------ *
 * /distance/[route] — 2,898,687 impressions, 0.14% CTR (worst on the site)
 * ------------------------------------------------------------------ */

/**
 * Build answer-box-proof metadata for a distance guide.
 *
 * The exact-match keyword ("<Origin> to <Destination> Distance") stays at the
 * front of the title for relevance, but the *promise* is cost — the thing the
 * distance panel never shows. The km figure moves into the back half of the
 * description, where it still proves the page answers the query without
 * satisfying the searcher before they click.
 *
 * WEEK 48 REWRITE (Workstream C3)
 * -------------------------------
 * The Week 43 shape ("<pair> Distance & Cab ₹3,300") moved the km out of the
 * title but the family still sat at 0.14% CTR from position 8. Three reasons,
 * visible in the listing itself:
 *
 *   1. "Distance & Cab ₹3,300" is a label plus a bare number. It never says
 *      what the ₹3,300 buys (one way? per head? sedan?), so it is not an answer.
 *   2. The 300 km minimum makes ~80 Tier-B titles end in the identical "Cab
 *      ₹3,300", so the family reads as a template rather than a page about
 *      *this* road.
 *   3. The description led with "4-5 hours drive, 200 km via NH-56", which is
 *      the panel's own content, and then trailed into a noun list that the
 *      158-char clamp cut mid-phrase ("... 2026 fares. Call").
 *
 * The rewrite keeps the exact-match head term ("<pair> Distance") for
 * relevance, then answers the question the panel cannot: what it costs to go.
 * The price carries its unit ("from ₹3,300 one way") and a second figure the
 * panel cannot show — the measured car toll on Tier A, the SUV fare on Tier B —
 * so every listing names two rate-card prices the page's own fare table shows.
 * The km and drive time move to the second sentence of the description as
 * proof of relevance, and the description is trimmed on sentence boundaries so
 * it can never end mid-clause. Same treatment that took the Delhi hub from
 * "Delhi Cab ₹11/km" to "Taxi Service in Delhi".
 *
 * Every rupee figure is either a value calcFares derives from the published
 * rate card (Sedan ₹11/km, SUV ₹15/km, Tempo ₹23/km, local 4 hr/40 km ₹2,200)
 * or a measured toll from /toll-cost. Nothing is estimated for the snippet.
 *
 * Tier A (measured toll available): sedan fare + car toll.
 * Tier B (no measured toll): sedan fare + SUV fare.
 */
export function buildDistanceMeta(route, slug) {
  const { origin, destination, duration, highway } = route;
  const km = route.distance ? route.distance.km : null;
  const fare = formatINR(route.sedanRaw);
  const suv = formatINR(route.suvRaw);
  const tempo = formatINR(route.tempoRaw);
  const toll = getRouteTollSummary(slug);
  const pair = `${origin} to ${destination}`;

  // Short hops (< 100 km) are quoted from the published 4 hr / 40 km local
  // package, not a one-way outstation fare, so the unit in the snippet has to
  // say so or the page contradicts its own title.
  const unit = route.localPackage ? 'Local Package' : 'One Way';
  const unitLower = route.localPackage ? 'on the 4 hr/40 km local package' : 'one way';

  // "18-20 hours (2-day trip recommended)" is right on the page, but the
  // parenthetical alone costs 25 characters of a 200-character snippet.
  const hours = String(duration || '').replace(/\s*\([^)]*\)/g, '').trim();
  const hrs = hours.replace(/\bhours?\b/i, 'hrs').replace(/\bminutes?\b/i, 'min');

  // Week 49: the query is "<A> to <B> distance", and the answer to it is the
  // kilometre figure and the drive time. Those now lead the snippet; the fare,
  // which used to lead, follows. A searcher who asked how far it is and is shown
  // a price instead does not click, which is what the export showed: positions 6
  // to 10 across this family at a fraction of a percent.
  const title = tightenTitle(
    pickTitle([
      // The fare is the one item in this title that Google's distance panel does
      // not already show, so it is the reason anybody clicks through. These
      // variants therefore give up the literal word "Distance" before they give
      // up the fare: the query term is still carried by the h1, the description
      // and the URL, all of which Google reads, whereas a title offering only
      // the kilometre figure competes head-on with the answer printed above it.
      //
      // Measured on the 6 Oct export: 35% of the 206 pages were falling through
      // to the old "by Road, <hrs>" variant and losing the fare, because longer
      // city pairs push the fare variant past the 58-character display budget.
      `${pair} Distance: ${km} km, ${hrs}, Cab ${fare}`,
      `${pair}: ${km} km, ${hrs}, Cab ${fare}`,
      `${pair} Distance: ${km} km, Cab ${fare}`,
      `${pair}: ${km} km, Cab ${fare}`,
      `${pair} Distance: ${km} km by Road, ${hrs}`,
      `${pair} Distance: ${km} km, ${hrs}`,
      `${pair}: ${km} km by Road, ${hrs}`,
      `${pair} Distance: ${km} km`,
      `${pair}: ${km} km, ${hrs}`,
      `${pair}: ${km} km`,
    ], DISPLAY_BUDGET)
  );

  // Sentence 1 answers the question asked: how far, by which road, how long.
  // Sentence 2 carries the measured toll where the site has one, or the fare.
  // Sentence 3 is the booking line. tightenDescription drops whole trailing
  // sentences on the longest pairs, so the distance answer always survives.
  const plural = toll && toll.plazaCount === 1 ? '' : 's';
  const answer = `${pair} distance is ${km} km by road via ${highway}, ${hours} by car.`;
  const description = tightenDescription(
    toll
      ? `${answer} Toll ${formatINR(toll.car)} for a car across ${toll.plazaCount} plaza${plural}; ` +
        `AC sedan cab ${fare} ${unitLower}, SUV ${suv}. Call 7668570551 to book.`
      : `${answer} AC sedan cab ${fare} ${unitLower}, SUV ${suv}, Tempo ${tempo}; toll extra. ` +
        `Call 7668570551 to book.`,
    DESC_BUDGET);

  const ogTitle = clamp(
    toll
      ? `${pair} by Road: Cab from ${fare} ${unit}, ${formatINR(toll.car)} Toll | Triveni Cabs™`
      : `${pair} by Road: Cab from ${fare} ${unit}, SUV ${suv} | Triveni Cabs™`,
    95);

  return { title, description, ogTitle, toll };
}

/* ------------------------------------------------------------------ *
 * /blog/* attraction guides — 1,380,399 impressions, 0.38% CTR
 * ------------------------------------------------------------------ */

/**
 * Attraction guides rank for "<place> timings" / "<place> ticket price", both
 * of which Google renders in the knowledge panel. Leading a title with
 * "Timings & Ticket Price" therefore competes head-on with a box the user has
 * already read.
 *
 * These titles instead lead with the trip-planning value the panel omits: how
 * to actually get there and what the visit costs end to end. The original
 * title is kept as the fallback so a post that is already differentiated is
 * never degraded.
 */
const ANSWERED_IN_PANEL = /\b(timings?|ticket price|entry fee|opening hours|hours)\b/i;

export function isAnswerBoxExposedTitle(title) {
  return ANSWERED_IN_PANEL.test(String(title || ''));
}

/**
 * Recover the bare entity name from a guide title.
 *
 * Attraction titles arrive in two shapes:
 *   "Akshardham Delhi Timings & Ticket Price (2026) | Closed Mon"
 *   "Mysore Palace Guide 2026 - Illumination, Timings, Entry Fees"
 *
 * The entity is everything before the first thing that is NOT the entity: a
 * separator, a bracket, an answered-fact word ("Timings"), a label word
 * ("Guide", "Complete") or a year. The Week 43 extractor only cut at the fact
 * word, so the second shape came back as "Mysore Palace Guide 2026 -
 * Illumination" and the rendered title was that string with ": How" clamped
 * off the end. Cutting at the first non-entity token of any kind leaves
 * "Mysore Palace" and "Akshardham Delhi" alike.
 */
const ENTITY_CUT =
  /\s*(?:\||\(|\[|:|\s[-–—]\s|\b(?:timings?|ticket prices?|tickets?|entry|fees?|darshan|opening hours|hours|complete|guide|20\d\d)\b).*$/i;

export function extractEntityName(rawTitle) {
  const raw = String(rawTitle || '');
  const cut = raw
    .replace(ENTITY_CUT, '')
    .replace(/[\s,–—:&-]+$/, '')
    .replace(/\s{2,}/g, ' ')
    .trim();
  if (cut.length >= 3) return cut;
  // Legacy shape: cut only at the answered-fact word.
  let s = raw.split('|')[0];
  s = s.replace(/\s*[(\[].*?[)\]]\s*/g, ' ');
  const m = s.match(ANSWERED_IN_PANEL);
  if (m && m.index > 0) s = s.slice(0, m.index);
  return s
    .replace(/\s*[-–—:,&]+\s*$/, '')
    .replace(/\s{2,}/g, ' ')
    .trim();
}

/* ---- Facts the attraction listing is allowed to name ----------------- */

/**
 * A single published entry fee: "₹50", "Free", "₹100 (₹200 with audio guide)"
 * and "₹75 + ₹190 for Chandra Mahal" all resolve to their base figure. A range
 * ("₹50-200 per person") or a non-fee ("Hotel guests only") resolves to null,
 * because a title that says "Entry ₹50" for a ₹50-200 zone fee is a lie.
 */
const FEE_TOKEN = /^\s*(free|₹\s?\d[\d,]*)(?=\s*$|\s*(?:\(|\+|per\b|for\b|adults?\b|indians?\b))/i;

export function parseEntryFee(value) {
  const m = FEE_TOKEN.exec(String(value || ''));
  if (!m) return null;
  return /^free$/i.test(m[1]) ? 'Free' : m[1].replace(/\s+/g, '');
}

function feeFromData(entryFee) {
  if (!entryFee || typeof entryFee !== 'object') return { fee: null, foreign: null };
  const first = (keys) => {
    for (const k of keys) {
      const v = parseEntryFee(entryFee[k]);
      if (v) return v;
    }
    return null;
  };
  return {
    fee: first(['indian', 'temple', 'general', 'adult', 'adults']),
    foreign: first(['foreign', 'foreigner', 'foreigners']),
  };
}

// Posts with no attractionData still state their price in their own copy
// ("free entry", "Indian ₹50, SAARC ₹540, Foreign ₹1,100"). Reading the figure
// the page already publishes keeps the snippet honest without inventing one.
const FREE_IN_TEXT = /\bfree\s+(?:entry|admission|of\s+charge)\b|\bentry\s+(?:is\s+)?free\b|\bno\s+entry\s+fee\b/i;
// A rupee amount with Indian grouping; the trailing comma of "₹50, SAARC ₹540"
// is punctuation, not part of the figure.
const AMT = '₹\\s?(?:\\d{1,3}(?:,\\d{3})+|\\d+)';
const INDIAN_FEE_IN_TEXT = new RegExp(`\\bindians?\\b[^₹\\d.]{0,20}(${AMT})|(${AMT})\\s*(?:\\(\\s*|for\\s+)indians?\\b`, 'i');
const FOREIGN_FEE_IN_TEXT = new RegExp(`\\bforeign(?:ers?|\\s+nationals?|\\s+tourists?)?\\b[^₹\\d.]{0,20}(${AMT})|(${AMT})\\s*(?:\\(\\s*|for\\s+)foreign(?:ers?)?\\b`, 'i');

function feeFromText(text) {
  const s = String(text || '');
  const ind = INDIAN_FEE_IN_TEXT.exec(s);
  const fee = ind ? (ind[1] || ind[2]).replace(/\s+/g, '') : FREE_IN_TEXT.test(s) ? 'Free' : null;
  const fo = FOREIGN_FEE_IN_TEXT.exec(s);
  return { fee, foreign: fo ? (fo[1] || fo[2]).replace(/\s+/g, '') : null };
}

const CLOCK = /\b(\d{1,2})(?::(\d{2}))?\s*(am|pm)\b/i;

/** "Sunrise (6:00 AM)" -> "6 AM"; "24 hours" -> "24 hours"; "Sunset" -> "sunset". */
function clockLabel(value) {
  const s = String(value || '');
  if (/24\s*(?:hours|hrs|\/\s*7)/i.test(s)) return '24 hours';
  const m = CLOCK.exec(s);
  if (m) return `${parseInt(m[1], 10)}${m[2] && m[2] !== '00' ? `:${m[2]}` : ''} ${m[3].toUpperCase()}`;
  const sun = /sunrise|sunset/i.exec(s);
  return sun ? sun[0].toLowerCase() : null;
}

/** "open 9:30 AM to 4:30 PM, closed Mondays" from the post's timings block. */
function describeTimings(timings) {
  if (!timings || typeof timings !== 'object') return null;
  const open = clockLabel(timings.open);
  if (!open) return null;
  const closedRaw = String(timings.closedOn || '').replace(/\s*\([^)]*\)/g, '').trim();
  const daily = !closedRaw || /^(never|open all days|all days|daily|open daily|none)$/i.test(closedRaw);
  let closed = '';
  if (daily) closed = 'open daily';
  else if (closedRaw.length <= 24) {
    closed = `closed ${/^(mon|tues?|wed(?:nes)?|thu(?:rs)?|fri|sat(?:ur)?|sun)day$/i.test(closedRaw) ? `${closedRaw}s` : closedRaw}`;
  }
  if (open === '24 hours') return daily ? 'open 24 hours daily' : ['open 24 hours', closed].filter(Boolean).join(', ');
  const close = clockLabel(timings.close);
  return [close ? `open ${open} to ${close}` : `open from ${open}`, closed].filter(Boolean).join(', ');
}

/** "Nearest metro Akshardham Metro Station, 300m walk" or the railway station. */
function describeReach(howToReach) {
  if (!howToReach || typeof howToReach !== 'object') return null;
  const clean = (v) =>
    String(v || '')
      .replace(/\s*\([^)]*\)/g, '')
      .replace(/\s+-\s+/g, ', ')
      .replace(/\s{2,}/g, ' ')
      .trim();
  const metro = clean(howToReach.nearestMetro || howToReach.metro);
  if (metro && !/^none\b/i.test(metro) && metro.length <= 48) return `Nearest metro ${metro}`;
  const rail = clean(howToReach.nearestRailway);
  if (rail && rail.length <= 48) return `Nearest station ${rail}`;
  return null;
}

const slugify = (v) =>
  String(v || '')
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');

const titleCaseWords = (v) =>
  String(v || '')
    .split(/\s+/)
    .filter(Boolean)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');

/**
 * The Delhi one-way fare the page's booking box quotes, but only when that box
 * is actually about this monument. buildTripCTA resolves the post's first
 * related destination, so the Kedarnath guide carries a Delhi to Rishikesh
 * fare and the Akshardham guide a Delhi to Mathura one. Printing either next to
 * the monument's name in a title would read as the fare to the monument. The
 * fare is used only when the route destination is the post's city or is part
 * of the entity name ("Golden Temple Amritsar", "Jaisalmer Fort").
 */
function routeFareFor(cab, entity, city) {
  if (!cab || !cab.fromDelhi || !cab.fare || !cab.destination) return null;
  const dest = slugify(cab.destination);
  if (!dest) return null;
  const inName = slugify(entity).includes(dest);
  const isCity = Boolean(city) && slugify(city) === dest;
  return inName || isCity ? { fare: cab.fare, destination: cab.destination } : null;
}

/**
 * A second post about the same monument ("Qutub Minar Delhi: History,
 * Architecture & Iron Pillar Mystery" next to the complete guide) would render
 * an identical formula title. The distinguishing noun comes, in order, from
 * the meta title's own qualifier ("Ticket Price"), the H1 subtitle's first item
 * ("History", "Elephant Ride"), or the slug's leftover word. Applied only when
 * the caller says the entity is shared.
 */
function pickAngle({ base, title, entity, slug }) {
  const words = (s) => s.split(' ').filter(Boolean).length;
  const bareFact = /^(timings?|entry fees?|hours|entry)$/i;
  const esc = entity.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

  const after = String(base || '').replace(new RegExp(`^\\s*${esc}\\s*`, 'i'), '');
  const lead = after
    .split(/[|(:–—]|\s-\s/)[0]
    .replace(/\b(complete|guide|20\d\d)\b/gi, ' ')
    .replace(/[\s,&-]+/g, ' ')
    .trim();
  if (lead && words(lead) <= 3 && !bareFact.test(lead)) return titleCaseWords(lead);

  const sub = String(title || '').split(/:\s/)[1];
  if (sub) {
    const first = sub.split(/[,&|(]|\s-\s/)[0].replace(/\b(complete|guide|20\d\d)\b/gi, ' ').replace(/\s{2,}/g, ' ').trim();
    if (first && words(first) <= 3 && !bareFact.test(first)) return titleCaseWords(first);
  }

  const used = new Set([...slugify(entity).split('-'), 'complete', 'guide', 'travel', 'blog', 'the', 'of']);
  const left = String(slug || '')
    .split('-')
    .filter((w) => w && !used.has(w) && !/^20\d\d$/.test(w));
  if (left.length) return titleCaseWords(left[0]);
  return 'Guide';
}

/**
 * Does this post take the attraction price formula, and under which entity?
 *
 * A post qualifies when it publishes a single entry fee (in attractionData or
 * in its own description), or when its title is answer-box-exposed and it
 * publishes parseable timings. City guides that carry an attractionData block
 * with empty fee and timings ("Nainital", "Mussoorie") do not qualify, nor does
 * a zone-priced safari or a hotel, so those keep their existing paths.
 *
 * Exported so the page can build the sibling map that drives disambiguation.
 */
export function attractionGuideEntity(post) {
  if (!post) return null;
  const base = post.metaTitle || post.title || '';
  const data = post.attractionData || {};
  const fromData = feeFromData(data.entryFee);
  const fee = fromData.fee || feeFromText(`${post.metaDescription || ''} ${post.excerpt || ''}`).fee;
  const timing = describeTimings(data.timings);
  if (!fee && !(isAnswerBoxExposedTitle(base) && timing)) return null;
  const entity = post.attractionName || (data && data.name) || extractEntityName(base);
  return entity && entity.length >= 3 ? entity : null;
}

/* ---- The formula ------------------------------------------------------ */

/**
 * WEEK 43 led these titles with "How to Reach & Timings". WEEK 48 GSC data
 * (24 pages, 1,106,512 impressions, 0.27% CTR at position 7.6) shows why that
 * still lost the click: "How to Reach" is a label, not an answer. The listing
 * named no price, no fee and nothing the panel above it had not already said,
 * and nine posts whose titles were not fact-led were clamped to 45 characters
 * mid-clause ("Fatehpur Sikri Guide 2026 - UNESCO Ghost").
 *
 * The rewritten listing answers the visit-cost question the panel cannot: the
 * cab fare (the page's own Delhi one-way fare when the booking box quotes it,
 * else the published ₹11/km sedan rate), then the entry fee, then "Timings" as
 * proof of relevance for the head term. The description carries the same
 * facts in sentence form plus the nearest metro or station, every one read
 * from the post's own data block. Nothing is estimated.
 *
 *   Akshardham Delhi: Cab from ₹11/km, Free Entry & Timings
 *   Taj Mahal: Cab from Delhi ₹3,300, Entry ₹50 & Timings
 *
 * The content half is budgeted at DISPLAY_BUDGET (58): the brand suffix is the
 * cheap thing to lose. Variants run longest-first so a short entity keeps the
 * full "Cab from Delhi" wording and a long one falls back to "Delhi Cab".
 *
 * Exposed titles with no price to name keep the Week 43 "How to Reach" shape;
 * everything else is an editorial post and takes buildEditorialBlogMeta.
 */
const ATTRACTION_TAIL = 'Best time to visit, what to see nearby and how to book. Call 7668570551.';

export function buildAttractionBlogMeta({
  title, metaTitle, excerpt, metaDescription, city, attractionName, attractionData, cab, disambiguate, slug,
  fare, fareRoute, tags, taken,
}) {
  const base = metaTitle || title || '';
  const baseDesc = metaDescription || excerpt || '';
  const exposed = isAnswerBoxExposedTitle(base);

  const entity = attractionGuideEntity({ title, metaTitle, excerpt, metaDescription, attractionName, attractionData });

  if (!entity) {
    if (!exposed) {
      return buildEditorialBlogMeta({ title, metaTitle, excerpt, metaDescription, fare, fareRoute, tags, taken });
    }
    const name = attractionName || extractEntityName(base);
    if (!name) {
      return buildEditorialBlogMeta({ title, metaTitle, excerpt, metaDescription, fare, fareRoute, tags, taken });
    }
    const newTitle = pickTitle([
      `${name}: How to Reach, Timings & Cab Fare`,
      `${name}: How to Reach & Timings 2026`,
      `${name}: How to Reach & Timings`,
      `${name}: How to Reach`,
    ]);
    const cityLabel = city ? city.charAt(0).toUpperCase() + city.slice(1) : '';
    const newDesc = clamp(
      `How to reach ${name}${cityLabel ? ` in ${cityLabel}` : ''}: nearest metro, cab fare and pickup options, ` +
      `plus 2026 timings, the best hour to avoid the queue, dress code and nearby stops. Call 7668570551.`,
      158);
    return { title: newTitle, description: newDesc, rewritten: true };
  }

  const data = attractionData || {};
  const fromData = feeFromData(data.entryFee);
  const fromText = fromData.fee ? { fee: null, foreign: null } : feeFromText(`${baseDesc} ${excerpt || ''}`);
  const fee = fromData.fee || fromText.fee;
  const foreign = fromData.fee ? fromData.foreign : fromText.foreign;
  const timing = describeTimings(data.timings);
  const reach = describeReach(data.howToReach);
  const route = routeFareFor(cab, entity, city);

  // Week 49: where the place is searched under two names ("amer fort timings",
  // 10,518 impressions a quarter, against pages that say Amber Fort), the title
  // carries both once, shortest form first, so the listing matches either.
  const alias = aliasFor(entity);
  const entityWithAlias = alias && alias.also && alias.also.length
    ? `${entity.replace(/^Amber Fort/i, 'Amer Fort')}`
    : entity;
  const name = disambiguate ? `${entityWithAlias} ${pickAngle({ base, title, entity, slug })}` : entityWithAlias;

  const feeT = fee ? (fee === 'Free' ? 'Free Entry' : `Entry ${fee}`) : null;
  const fareLong = route ? `Cab from Delhi ${route.fare}` : 'Cab from ₹11/km';
  const fareShort = route ? `Delhi Cab ${route.fare}` : 'Cab ₹11/km';

  // Week 49: the query decides the order. These pages are shown for "<monument>
  // timings" and "<monument> ticket price", so the hours and the fee lead and
  // the cab fare follows. The clock label is the page's own opening time.
  const openClock = clockLabel((attractionData || {}).timings && attractionData.timings.open);
  const closeClock = clockLabel((attractionData || {}).timings && attractionData.timings.close);
  const titleCase = (v) => String(v || '').replace(/\b([a-z])/g, (m0, c) => c.toUpperCase());
  const hours = openClock === '24 hours'
    ? 'Open 24 Hours'
    : (openClock && closeClock && closeClock.length <= 10
        ? `${titleCase(openClock)}-${titleCase(closeClock)}`
        : (openClock ? `Opens ${titleCase(openClock)}` : null));
  const variants = feeT
    ? [
        `${name} Timings & Tickets: ${hours || 'Hours'}, ${feeT}`,
        `${name}: Timings, ${feeT} & ${fareShort}`,
        `${name} Timings, ${feeT} & How to Reach`,
        `${name}: ${feeT}, Timings & Cab Fare`,
        `${name}: ${feeT} & Timings`,
        `${name}: Timings & ${feeT}`,
      ]
    : [
        `${name} Timings${hours ? `: ${hours}` : ''} & How to Reach`,
        `${name}: Timings, How to Reach & ${fareShort}`,
        `${name} Timings & How to Reach 2026`,
        `${name}: Timings & How to Reach`,
        `${name}: ${fareShort} & Timings`,
      ];
  const newTitle = tightenTitle(pickTitle(variants, DISPLAY_BUDGET), DISPLAY_BUDGET);

  // Sentence 1: the facts (fee, foreign fee, hours). Sentence 2: how to get
  // there. Sentence 3: the fare. Posts without a data block borrow their own
  // meta description after the fare so the snippet still reads as the page;
  // tightenDescription drops whole trailing sentences, so the price answer
  // always survives.
  const feeD = fee
    ? (fee === 'Free' ? 'free entry' : `entry ${fee}`) + (foreign && foreign !== fee ? ` (foreigners ${foreign})` : '')
    : null;
  const facts = [feeD, timing].filter(Boolean).join(', ');
  const fareD = route
    ? `Delhi to ${route.destination} cab from ${route.fare}`
    : 'Cab from ₹11/km (sedan), SUV ₹15/km';
  const hasData = Boolean(timing || reach);
  const lead = facts ? `${name}: ${facts}.` : `${name} timings, tickets and how to reach.`;
  const body = `${lead} ${reach ? `${reach}. ` : ''}${fareD}. ${hasData ? ATTRACTION_TAIL : `${baseDesc} ${ATTRACTION_TAIL}`}`;
  const newDesc = tightenDescription(
    body.replace(/\s*—\s*/g, ', ').replace(/\s{2,}/g, ' ').trim(),
    DESC_BUDGET);

  return { title: newTitle, description: newDesc, rewritten: true, formula: 'attraction-price' };
}

/* ------------------------------------------------------------------ *
 * /blog/* editorial posts — Week 48 C3: 125,875 impressions, 0.24% CTR, pos 7.6
 * ------------------------------------------------------------------ */

/**
 * WHY THE OLD FORMULA LOST AT POSITION 7
 * --------------------------------------
 * The 166 non-attraction posts fell through buildAttractionBlogMeta as a bare
 * `clamp(metaTitle || title, 45)` and `clamp(metaDescription, 158)`. Read the
 * built titles and the three defects are visible in the listing itself:
 *
 *   1. The 45-char clamp cut the authored hook mid-thought, and the hook was
 *      the only reason to click: "Kasol vs Kasauli vs Kufri: Which Hill Town",
 *      "12 vs 17 Seater Tempo Traveller" (the "Per-Pax Cost" clause fell off),
 *      "Vaishno Devi Yatra — Route, Helicopter" (an em-dash and a stub list).
 *   2. Nothing named a price. A cab company's listing that does not say what the
 *      trip costs is a generic label next to nine other generic labels.
 *   3. Several led with the fact Google's panel already prints: "Jewar Airport
 *      Distance", "Best Time to Visit Taj Mahal: Month-by-Month" (the weather).
 *
 * THE FORMULA (one template, every editorial post)
 * ------------------------------------------------
 *     <Subject>: <Answer hook> | Cab from ₹<fare>
 *
 *   Subject     the post's distinguishing noun: the head clause of its authored
 *               metaTitle (title as fallback) with the year, parentheticals and
 *               "Complete/Ultimate ... Guide" filler removed. It stays first so
 *               the head term keeps its relevance and no two posts collide.
 *   Answer hook the authored secondary clause, i.e. what the post decides
 *               ("Which Hill Town for You", "Per-Pax Cost + Hill-Road Math"),
 *               minus any panel fact (distance, km, weather, month-by-month,
 *               timings) and minus any hand-typed rupee figure so the title
 *               never carries two prices. When the authored title has no hook,
 *               the value nouns the authored description promises are used
 *               ("Crowds & Cost"); nothing is promised the page does not say.
 *   Price       the fare the page's own booking box renders, resolved by the
 *               page from oneWayCabData ("Delhi to Manali from ₹5,940"), or
 *               when no route resolves, the published per-km rate card the
 *               template's CTA prints (Sedan ₹11/km, SUV ₹15/km, Innova ₹18/km,
 *               Tempo ₹23/km), chosen by the vehicle the post is about.
 *
 * Variants run longest-first inside DISPLAY_BUDGET (58): full hook, hook cut on
 * a word boundary, description-noun hook, no hook; the price survives every
 * variant. `taken` is the set of titles already assigned to earlier posts, so
 * a variant that duplicates a sibling is skipped for the next one down.
 *
 * The description leads with the subject and the authored answer, then names
 * the same price with its unit ("Delhi to Manali cab from ₹5,940, all-inclusive,
 * no advance deposit"), and ends with the call line. Where the authored text
 * itself opens on a panel number ("Vaishno Devi trek 13 km from Katra"), the
 * price sentence goes first. No em-dashes; trimmed on sentence boundaries;
 * 120-200 characters.
 */

/** Published per-km rate card, keyed by the vehicle a post is about. */
const RATE_CARD = [
  { test: /tempo|traveller|urbania|seater/i, vehicle: 'Tempo', name: 'Tempo Traveller', rate: '₹23/km' },
  { test: /innova|crysta/i, vehicle: 'Innova', name: 'Innova', rate: '₹18/km' },
  { test: /\bsuv\b|scorpio|ertiga|fortuner|xuv/i, vehicle: 'SUV', name: 'SUV', rate: '₹15/km' },
];
const SEDAN_CARD = { vehicle: 'Sedan', name: 'Sedan', rate: '₹11/km' };
// A bus post has no published bus rate; the group vehicle the site does
// publish is the Tempo Traveller, which is what the page's own CTA prints.
const BUS_POST = /\bbus\b|volvo/i;
const CALL_LINE = 'Call 7668570551.';

const TITLE_SEPARATOR = /\s*(?::\s|\s\|\s|\s[—–]\s|\s-\s|\s\+\s)\s*/;
const YEAR_TOKEN = /\s*\b(?:in|for)?\s*\(?20(?:2[5-9]|3\d)\)?\b/gi;
const PARENTHETICAL = /\s*[(\[][^)\]]*[)\]]\s*/g;
const SUBJECT_FILLER = /\b(?:complete|ultimate|comprehensive)\s+(?:travel\s+|pilgrimage\s+|sightseeing\s+|step-by-step\s+)?guide\b|\b(?:complete|ultimate|comprehensive)\b/gi;
const SUBJECT_PANEL_FACT = /\b(?:distance|distances|month[- ]by[- ]month|weather|temperature)\b/gi;
const HOOK_FILLER = /\b(?:complete|ultimate|comprehensive|full|travel guide|guide|book now|book online|honest|expert)\b/gi;
const PANEL_FACT = /\b(?:distance|distances|km|kms|month[- ]by[- ]month|weather|temperature|timings?|opening hours|hours|sunrise(?:\/sunset)?\s+times?)\b/gi;
const LEADS_WITH_PANEL_NUMBER = /^[^.!?]{0,30}?\b\d+(?:\.\d+)?\s*(?:km|kms|°|degrees)\b/i;
/** Connectors that cannot open a clause once the filler before them is gone. */
const ORPHAN_HEAD = /^(?:(?:to|the|a|an|of|for|in|on|and|by|with|your|which|that)\b[\s,:&+-]*)+/i;
/** Open-class words a cut must not end on, on top of ORPHAN_TAIL's list. */
const STUB_TAIL = /(?:[\s,:&+-]*\b(?:that|which|what|who|is|are|was|were|be|make|makes|why|how|when|where)\b)+[\s,:&+-]*$/i;
/** Subject words too generic to prove the description already names the subject. */
const LEAD_STOPWORDS = /^(?:best|time|visit|guide|from|with|trip|trips|tour|your|which|what|complete|travel|road|tips|cost|fare|near|most|top|places|things|perfect|ideas)$/i;

/** Value nouns a description can promise that a knowledge panel cannot show. */
const VALUE_NOUNS = [
  { test: /\b(?:cost|costs|price|prices|pricing|fare|fares|budget|rates?|per[- ]pax|per[- ]head)\b|₹/i, label: 'Cost' },
  { test: /\bcrowd/i, label: 'Crowds' },
  { test: /\bitinerar/i, label: 'Itinerary' },
  { test: /\b(?:route|routes|stops?)\b/i, label: 'Route' },
  { test: /\btoll/i, label: 'Toll' },
  { test: /\b(?:verdict|comparison|compared|vs)\b/i, label: 'Verdict' },
  { test: /\bbook/i, label: 'Booking' },
];

/**
 * Separator hygiene for title clauses. Dashes, pipes and plus signs become
 * commas; a comma inside a number ("₹1,20,000") is left alone, only a comma
 * followed by whitespace is a list separator.
 */
function tidyClause(str) {
  return String(str || '')
    .replace(/\s*[—–]\s*/g, ', ')
    .replace(/\s*\|\s*/g, ', ')
    .replace(/\s+-\s*|\s*-\s+/g, ', ')
    .replace(/\s*\+\s*/g, ', ')
    .replace(/\s*&\s*/g, ' & ')
    .replace(/(?:\s*,\s+)+/g, ', ')
    .replace(/,\s*&/g, ' &')
    .replace(/\s*&\s*,/g, ',')
    .replace(/\s{2,}/g, ' ')
    .replace(/^[\s,&:+-]+|[\s,&:+?!.-]+$/g, '')
    .trim();
}

/** A clause that neither opens nor closes on a connector. May return ''. */
function polishClause(raw) {
  return tidyClause(raw)
    .replace(ORPHAN_HEAD, '')
    .replace(STUB_TAIL, '')
    .replace(ORPHAN_TAIL, '')
    .replace(/[\s,:&+-]+$/, '')
    .trim();
}

function cleanSubject(raw) {
  const stripped = String(raw || '')
    .replace(PARENTHETICAL, ' ')
    .replace(YEAR_TOKEN, ' ')
    .replace(SUBJECT_FILLER, ' ')
    .replace(SUBJECT_PANEL_FACT, ' ');
  const out = polishClause(stripped);
  // A subject stripped to nothing is worse than one carrying its filler.
  return out.length >= 8 ? out : polishClause(String(raw || '').replace(PARENTHETICAL, ' ').replace(YEAR_TOKEN, ' '));
}

/**
 * The answer hook: the authored clauses after the subject, item by item. An
 * item carrying a hand-typed rupee figure is dropped whole (the formula
 * supplies the price, and a title must never show two), panel facts and
 * filler are removed, and a trailing one-word stub ("Naini", "Places") that
 * the authored title itself cut short is discarded.
 */
function cleanHook(raw) {
  const items = tidyClause(String(raw || '').replace(PARENTHETICAL, ' ').replace(YEAR_TOKEN, ' '))
    .split(/,\s+/)
    .filter((item) => !/₹/.test(item))
    .map((item) => polishClause(item.replace(PANEL_FACT, ' ').replace(HOOK_FILLER, ' ')))
    .filter((item) => item.length >= 3);
  const last = items[items.length - 1];
  if (items.length >= 2 && last.length <= 6 && !/\s/.test(last)) items.pop();
  const out = items.join(', ');
  return out.length >= 6 ? out : '';
}

/** Split an authored title into its subject and its answer hook. */
function splitAuthoredTitle(raw) {
  const parts = String(raw || '').split(TITLE_SEPARATOR).filter(Boolean);
  return { subject: cleanSubject(parts[0] || ''), hook: cleanHook(parts.slice(1).join(', ')) };
}

/**
 * Shorten a hook to `max` by dropping whole list items first, then on a word
 * boundary. Never mid-word, never on a connector, and never below half the
 * original: "Why Companies" is not a shorter "Why Companies Are Switching",
 * it is a different, broken phrase.
 */
function wordCut(str, max) {
  const s = String(str || '').trim();
  if (s.length <= max) return s;
  const candidates = [];
  const items = s.split(/,\s+/);
  for (let n = items.length - 1; n >= 1; n--) candidates.push(items.slice(0, n).join(', '));
  const at = s.lastIndexOf(' ', max);
  if (at > 0) candidates.push(s.slice(0, at));
  for (const c of candidates) {
    const out = polishClause(c);
    if (out && out.length <= max && out.length >= 12 && out.length > s.length * 0.5) return out;
  }
  return '';
}

/** "Cost & Crowds" from the nouns the authored description already promises. */
function nounHook(text) {
  const found = VALUE_NOUNS.filter((n) => n.test.test(String(text || ''))).map((n) => n.label);
  return found.slice(0, 2).join(' & ');
}

/** True when the description already names the subject in its opening. */
function descriptionNamesSubject(subject, desc) {
  const opening = String(desc || '').slice(0, 60).toLowerCase();
  return String(subject || '')
    .split(/[^A-Za-z]+/)
    .filter((w) => w.length >= 4 && !LEAD_STOPWORDS.test(w))
    .some((w) => opening.includes(w.toLowerCase()));
}

export function buildEditorialBlogMeta({ title, metaTitle, excerpt, metaDescription, fare, fareRoute, taken }) {
  const sources = metaTitle ? [metaTitle, title] : [title];
  const authoredDesc = String(metaDescription || excerpt || '')
    .replace(/\s*[—–]\s*/g, ', ')
    .replace(/\s{2,}/g, ' ')
    .trim();
  const primary = splitAuthoredTitle(sources[0]);
  const subject = primary.subject || 'Travel Guide';

  // A post about a specific vehicle quotes that vehicle's published rate even
  // when a sedan route fare resolves: "Delhi to Manali Tempo Traveller" must not
  // answer with the sedan price.
  const vehicle = RATE_CARD.find((r) => r.test.test(subject)) || null;
  const card = vehicle || (BUS_POST.test(subject) ? RATE_CARD[0] : SEDAN_CARD);
  const routePrice = Boolean(fare && fareRoute) && !vehicle;
  const priceVariants = routePrice
    ? [`Cab from ${fare}`, `Cab ${fare}`]
    : vehicle
      ? [`Hire from ${card.rate}`, card.rate]
      : [`${card.vehicle} ${card.rate}`];

  // Longest-first, hook before price length: a shorter price clause that keeps
  // the authored answer beats a longer one that loses it.
  const candidates = [];
  for (const src of sources) {
    const split = src === sources[0] ? primary : splitAuthoredTitle(src);
    const s = split.subject || subject;
    for (const kind of ['full', 'cut', 'noun', 'none']) {
      for (const price of priceVariants) {
        const room = DISPLAY_BUDGET - s.length - 2 - 3 - price.length;
        const h =
          kind === 'full' ? split.hook :
          kind === 'cut' ? wordCut(split.hook, room) :
          kind === 'noun' ? nounHook(authoredDesc) : '';
        if (kind !== 'none' && !h) continue;
        candidates.push(h ? `${s}: ${h} | ${price}` : `${s} | ${price}`);
      }
    }
  }
  for (const price of priceVariants) {
    const cut = wordCut(subject, DISPLAY_BUDGET - 3 - price.length);
    if (cut) candidates.push(`${cut} | ${price}`);
  }
  candidates.push(clamp(sources[0], DISPLAY_BUDGET));

  const seen = new Set();
  const ordered = candidates.filter((c) => c && c.length <= DISPLAY_BUDGET && !seen.has(c) && seen.add(c));
  const chosen = ordered.find((c) => !(taken && taken.has(c))) || ordered[0] || clamp(sources[0], DISPLAY_BUDGET);
  const newTitle = tightenTitle(chosen, DISPLAY_BUDGET);

  // The price sentence names the unit the title could not fit. Every figure is
  // either the sedan fare the page's booking box quotes for this route or a
  // published per-km rate card value.
  let priceLine;
  if (routePrice) {
    priceLine = `${fareRoute} sedan cab from ${fare}, all-inclusive, no advance deposit.`;
  } else if (vehicle && fare && fareRoute) {
    priceLine = `${vehicle.name} from ${vehicle.rate}, ${fareRoute} sedan from ${fare}, all-inclusive.`;
  } else {
    const rest = [SEDAN_CARD, RATE_CARD[2], RATE_CARD[0]].filter((c) => c !== card);
    priceLine = `${card.name} ${card.rate}, ${rest.map((c) => `${c.name} ${c.rate}`).join(', ')}, all-inclusive.`;
  }

  const lead = descriptionNamesSubject(subject, authoredDesc) ? '' : `${subject}: `;
  let description = '';
  for (let room = DESC_BUDGET - lead.length - priceLine.length - CALL_LINE.length - 2; room >= 40; room -= 10) {
    let body = tightenDescription(authoredDesc, room);
    if (body && !/[.!?]$/.test(body)) body += '.';
    const answer = body ? `${lead}${body}` : `${subject}: what it costs and how to plan it.`;
    const parts = LEADS_WITH_PANEL_NUMBER.test(authoredDesc) ? [priceLine, answer] : [answer, priceLine];
    description = `${parts.join(' ')} ${CALL_LINE}`;
    if (description.length <= DESC_BUDGET) break;
  }

  return { title: newTitle, description, rewritten: false, formula: 'editorial' };
}

/* ------------------------------------------------------------------ *
 * /best-time-to-visit/[destination] — 70,390 impressions, 0.27% CTR
 * ------------------------------------------------------------------ */

/**
 * "Best time to visit X" is one of the most heavily answered queries in Google
 * — a weather widget plus a featured snippet, both above our result. Repeating
 * "Best Time to Visit X | Month-by-Month Guide" concedes the click.
 *
 * WEEK 43 (answer-box defence) led with "Cheapest Months". WEEK 48 GSC data
 * (38,170 impressions, 0.24% CTR, position 8.4 across the 7 target pages)
 * shows why that still lost: "Cheapest Months" is a label, not an answer. The
 * listing named no month, no price and nothing the searcher could act on, so
 * against a featured snippet that DOES name the months it read as the weaker
 * result.
 *
 * WEEK 48 formula: answer the question in the title, then name the price.
 *
 *     Best Time to Visit Agra: Nov-Feb, Cab ₹11/km
 *
 * The answer-box defence still holds — the title never carries the weather
 * figure the panel prints, and the DESCRIPTION leads with the half the panel
 * cannot show: the cheapest months, their price tier and crowd level, then the
 * published rate card (Sedan ₹11, SUV ₹15, Innova ₹18 per km). Peak months are
 * compressed to "Nov-Feb" / "Apr-Jun, Dec-Jan" so the rate survives Google's
 * ~60-character cut on every destination name in the dataset.
 *
 * Every page runs the same formula; the destination is the distinguishing
 * noun, so no two pages can share a title.
 */
const MONTH_ABBR = /\b(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)[a-z]*\b/gi;

/**
 * "March to June and December to February (skiing)" -> "Mar-Jun, Dec-Feb".
 * Parenthetical qualifiers are dropped; a single month stays as "Nov".
 */
export function compactMonthRange(text) {
  const clean = String(text || '').replace(/\s*\([^)]*\)/g, '').trim();
  if (!clean) return '';
  const parts = clean.split(/\s+and\s+|\s*[,;]\s*/i).filter(Boolean);
  const ranges = parts.map((part) => {
    const months = (part.match(MONTH_ABBR) || []).map(
      (m) => m.slice(0, 1).toUpperCase() + m.slice(1, 3).toLowerCase()
    );
    if (months.length === 0) return part.trim();
    return months.length === 1 ? months[0] : `${months[0]}-${months[months.length - 1]}`;
  });
  return ranges.join(', ');
}

/** Rate-card figures the site publishes; never a computed or invented price. */
const BEST_TIME_RATE_CARD = 'Sedan ₹11/km, SUV ₹15/km, Innova ₹18/km';

export function buildBestTimeMeta(data) {
  const dest = data.destination;
  const seasons = Array.isArray(data.seasons) ? data.seasons : [];
  const peakFull = String(data.peakSeason || '').replace(/\s*\([^)]*\)/g, '').trim();
  const peakShort = compactMonthRange(peakFull);

  // The cheapest open season: Budget tier first, Moderate as the fallback for
  // destinations (Mount Abu, Haridwar, Kashmir, Ladakh) that never drop to
  // Budget. A "Closed" season is never offered as a cheap one.
  const tierOf = (s) => String(s.pricing || '').toLowerCase();
  const cheap =
    seasons.find((s) => /budget|low/.test(tierOf(s))) ||
    seasons.find((s) => /moderate|mid/.test(tierOf(s)));
  const closed = seasons.find((s) => /closed/.test(tierOf(s)));

  const title = pickTitle([
    `Best Time to Visit ${dest}: ${peakShort}, Cab ₹11/km`,
    `${dest} Best Time: ${peakShort}, Cab ₹11/km`,
    `Best Time to Visit ${dest}: Cab ₹11/km`,
  ], DISPLAY_BUDGET);

  const crowdOf = (s) => String(s.crowd || '').replace(/\s*\([^)]*\)/g, '').trim().toLowerCase();
  const lead = cheap
    ? `Cheapest months to visit ${dest}: ${cheap.months} (${tierOf(cheap)} rates` +
      (crowdOf(cheap) ? `, ${crowdOf(cheap)} crowds` : '') + `).`
    : `${dest} has no budget season: peak rates ${seasons.filter((s) => s !== closed).map((s) => s.months).join(' and ')}` +
      (closed ? `, closed ${closed.months}` : '') + `.`;

  const build = (peakLabel) =>
    `${lead} Peak season ${peakLabel}. ` +
    `AC cab ${BEST_TIME_RATE_CARD}, no peak surge. Call 7668570551.`;

  // Full month names read better; fall back to the compact form only when the
  // longer sentence would push the phone number past the 200-character ceiling.
  let description = build(peakFull || 'varies by month');
  if (description.length > DESC_BUDGET) description = build(peakShort || peakFull);
  description = tightenDescription(description, DESC_BUDGET);

  return { title, description };
}

/* ------------------------------------------------------------------ *
 * /travel-by-car/[route] — 196,037 impressions, 0.51% CTR (Week 43)
 *                          64,918 impressions, 0.3% CTR, position 8.3 (Week 48)
 * ------------------------------------------------------------------ */

/**
 * Week 48. The Week 43 title, "<A> to <B> by Car: Toll & Fuel Cost", is a label
 * for a page, not an answer. It names no rupee figure on 31 of 40 routes, and
 * on the other 9 it names a toll the page itself does not render (the guide
 * links to /toll-cost for that). The description then opened with "490 km, 7-8
 * hours drive", which is precisely the line Google's Maps panel already prints
 * above the result, and it was clamped mid-clause ("...with an AC"). A listing
 * that repeats the panel and withholds the price is one more result to skip.
 *
 * The rewrite answers the two things the panel cannot: what this trip costs
 * with a driver, and what the road is actually like. One formula for all 40:
 *
 *   title:  "<A> to <B> by Car: Cab from ₹5,390, Road & Stops"
 *   desc:   "<A> to <B> by car: cab from ₹5,390 (sedan ₹11/km, toll extra) or
 *            self-drive. Road condition by segment, food and fuel stops,
 *            seasonal warnings, 490 km in 7-8 hours. Call 7668570551."
 *
 * Every clause is something the page renders: the fare is the page's own
 * `cabFares.sedan` (billable km at the published ₹11/km, with the 300 km
 * minimum the page states, shown in the hero, the fare table and the CTA), the
 * segment-wise road quality is the road map, and the stops and seasonal tabs
 * are their own sections. The km and hours stay, but as the last fact of the
 * description, as proof of relevance rather than the hook. The city pair keeps
 * every title unique across the family and "by Car" keeps the head term the
 * pages rank for. Fare first, guide value second, so a pixel-width cut costs
 * "& Stops" rather than the price; the three long pairs (Jim Corbett National
 * Park, Srinagar (Kashmir), Kaza (Spiti Valley)) fall through to the bare
 * fare form, still unique and still priced.
 */
export function buildTravelByCarMeta(route) {
  const { origin, destination } = route;
  const pair = `${origin} to ${destination}`;
  const fare = route.cabFares && route.cabFares.sedan ? route.cabFares.sedan : '';
  const km = route.totalDistance;
  // "2-3 days (30+ hours driving)" is accurate but the parenthetical does not
  // survive in a snippet; the day count alone is the answer at this length.
  const time = String(route.drivingTime || '').replace(/\s*\(.*?\)\s*/g, ' ').trim();
  const price = fare ? `Cab from ${fare}` : 'Cab at ₹11/km';

  const title = pickTitle([
    `${pair} by Car: ${price}, Road & Stops`,
    `${pair} by Car: ${price} & Road Guide`,
    `${pair} by Car: ${price}`,
  ], DISPLAY_BUDGET);

  const lead = fare
    ? `${pair} by car: cab from ${fare} (sedan ₹11/km, toll extra) or self-drive. `
    : `${pair} by car: cab at ₹11/km (sedan, toll extra) or self-drive. `;
  const facts = km && time ? `, ${km} km in ${time}` : km ? `, ${km} km` : '';

  const description = pickDescription([
    `${lead}Road condition by segment, food and fuel stops, seasonal warnings${facts}. Call 7668570551.`,
    `${lead}Road condition by segment, food and fuel stops, seasonal warnings${facts}.`,
    `${lead}Road condition by segment, stops and seasonal warnings${facts}.`,
  ]);

  return { title, description };
}

/* ------------------------------------------------------------------ *
 * /<a>-vs-<b> destination comparisons — 37,580 impressions, 0.3% CTR
 * ------------------------------------------------------------------ */

/**
 * Week 48. Ten "X vs Y" pages sit at position 4-7 and earn 0.3% CTR because the
 * listing is a generic label: "Mussoorie vs Nainital — Which Hill Station to
 * Visit" names no price, gives no verdict, and the description opens with a
 * topic list ("cost, distance, activities, and best time") instead of the answer.
 * A searcher typing "shimla vs manali" wants to know which one to pick and what
 * each costs; a listing that withholds both is just one more result.
 *
 * The rewrite is a template, not ten hand edits:
 *
 *   title:  "<A> vs <B>: Which Is Better? Cab ₹7,700 vs ₹11,880"
 *   desc:   "<A> for couples and families, <B> for adventure seekers and
 *            friend groups. Sedan round trip from Delhi: <A> ₹7,700 (350 km),
 *            <B> ₹11,880 (540 km). ..."
 *
 * The fares are the page's own `dest.cabFare` values (sedan round trip at the
 * published ₹11/km rate), rendered on the page in the stats card and the CTA
 * footer, so the snippet never promises a number the reader will not find. The
 * "for whom" clause comes from each destination's `bestFor` list, which is the
 * verdict the page actually gives. The pair keeps every title unique across the
 * family and "Which Is Better" keeps the head term the pages rank for.
 */
function extractFirstFare(text) {
  const m = /₹\s?[\d,]+/.exec(String(text || ''));
  return m ? m[0].replace(/\s/g, '') : '';
}

function lowerFirst(s) {
  const str = String(s || '').trim();
  return str ? str.charAt(0).toLowerCase() + str.slice(1) : '';
}

function audienceClause(dest) {
  const list = Array.isArray(dest.bestFor) ? dest.bestFor.filter(Boolean).slice(0, 2) : [];
  return list.map(lowerFirst).join(' and ');
}

/** First candidate that fits the description window, else the shortest, trimmed. */
function pickDescription(variants, min = 120, max = DESC_BUDGET) {
  for (const v of variants) {
    if (v && v.length >= min && v.length <= max) return v;
  }
  return tightenDescription(variants[variants.length - 1] || '', max);
}

export function buildDestinationCompareMeta(data) {
  const d1 = data.dest1 || {};
  const d2 = data.dest2 || {};
  const a = d1.name || '';
  const b = d2.name || '';
  const pair = `${a} vs ${b}`;
  const f1 = extractFirstFare(d1.cabFare);
  const f2 = extractFirstFare(d2.cabFare);
  const hasFares = Boolean(f1 && f2);

  const title = hasFares
    ? pickTitle([
        `${pair}: Which Is Better? Cab ${f1} vs ${f2}`,
        `${pair}: Which Wins? Cab ${f1} vs ${f2}`,
        `${pair}: Cab ${f1} vs ${f2}, Verdict`,
        `${pair}: Cab ${f1} vs ${f2}`,
      ], DISPLAY_BUDGET)
    : pickTitle([
        `${pair}: Which Is Better? Cost & Verdict`,
        `${pair}: Which Is Better?`,
      ], DISPLAY_BUDGET);

  const who1 = audienceClause(d1);
  const who2 = audienceClause(d2);
  const verdict = who1 && who2 ? `${a} for ${who1}, ${b} for ${who2}. ` : '';
  const km1 = d1.distanceFromDelhi ? ` (${d1.distanceFromDelhi})` : '';
  const km2 = d2.distanceFromDelhi ? ` (${d2.distanceFromDelhi})` : '';
  const fares = hasFares
    ? `Sedan round trip from Delhi: ${a} ${f1}${km1}, ${b} ${f2}${km2}. `
    : `Cab from Delhi at ₹11/km. `;
  // Long audience clauses (Varanasi vs Haridwar) push the km version past 200;
  // the phone CTA outranks the distances, which sit in the panel anyway.
  const faresNoKm = hasFares
    ? `Sedan round trip from Delhi: ${a} ${f1}, ${b} ${f2}. `
    : fares;

  const description = pickDescription([
    `${verdict}${fares}Cost, crowds, best time and verdict compared. Call 7668570551.`,
    `${verdict}${fares}Cost, crowds and verdict compared. Call 7668570551.`,
    `${verdict}${fares}Call 7668570551.`,
    `${verdict}${faresNoKm}Call 7668570551.`,
    `${verdict}${fares}`.trim(),
  ]);

  return { title, description };
}

/* ------------------------------------------------------------------ *
 * /<destination>-trip-cost-from-delhi — 26,301 impressions, 0.4% CTR, pos 7.2
 * ------------------------------------------------------------------ */

/**
 * Week 48, workstream C3. The query is "mussoorie trip cost from delhi" and
 * the old listing answered it with a label: "Mussoorie Trip Cost from Delhi —
 * Complete Budget Guide 2026". Every page in the family said the same thing,
 * the number the searcher typed the query to find sat in the page body, and
 * the description opened with "Plan your ... with full cost breakdown" before
 * reaching a rupee. At position 7 that is a 0.3-0.5% click rate.
 *
 * The rewrite puts the answer in the title: the per-person budget-to-mid-range
 * total for the trip length the page itself budgets, then in the description
 * the sedan fare at the published ₹11/km, the hotel floor and the toll. Every
 * figure is read from the page's own dataset, so the snippet promises exactly
 * what the cost table renders. The destination name keeps the family unique.
 *
 * No answer-box defence is needed here (Google has no trip-cost panel), but the
 * km figure is still kept out of the title so this template never competes
 * with the distance guides for the same head term.
 */
const FIRST_RUPEE = /₹\s?[\d,]+/;

/** "₹4,000-7,000" -> "₹4,000"; "₹3,190 (Manali route)" -> "₹3,190"; '' when absent. */
function firstRupee(str) {
  const m = FIRST_RUPEE.exec(String(str || ''));
  return m ? m[0].replace(/\s/g, '') : '';
}

/** "₹7,000-13,000" -> "₹13,000"; "₹5,000" -> "₹5,000". */
function lastRupee(str) {
  const all = String(str || '').match(/₹?\s?[\d,]{3,}/g);
  if (!all) return '';
  const n = all[all.length - 1].replace(/[₹\s]/g, '');
  return n ? `₹${groupDigits(n)}` : '';
}

/** "Kashmir (Srinagar)" -> "Kashmir"; "Leh-Ladakh" -> "Leh Ladakh". */
function tripCostName(data) {
  return String(data.shortName || data.destination || '')
    .replace(/\s*\(.*?\)\s*/g, ' ')
    .replace(/-/g, ' ')
    .replace(/\s{2,}/g, ' ')
    .trim();
}

export function buildTripCostMeta(data) {
  if (!data) return { title: '', description: '' };

  const name = tripCostName(data);
  const origin = data.origin || 'Delhi';
  const days = String(data.days || '').trim();
  const dayLabel = days ? (/^\d+$/.test(days) ? `${days} Day${days === '1' ? '' : 's'}` : `${days} Days`) : '';
  const dayPhrase = days ? (/^\d+$/.test(days) ? `A ${days}-day` : `A ${days} day`) : 'A';

  const budget = data.totalBudget || {};
  const low = firstRupee(budget.budget);
  const high = lastRupee(budget.mid) || lastRupee(budget.budget);
  const range = low && high && high !== low ? `${low}-${high.replace('₹', '')}` : low;

  const sedan = (data.cabCost && data.cabCost.sedan) || {};
  const oneWay = firstRupee(sedan.oneWay);
  const perKm = firstRupee(sedan.perKm) || '₹11';
  const hotel = firstRupee(data.hotelCost && data.hotelCost.budget);
  const toll = firstRupee(data.tollCost);

  const head = `${name} Trip Cost from ${origin}`;
  const title = pickTitle(
    [
      range && dayLabel ? `${head}: ${range} for ${dayLabel}` : '',
      low && dayLabel ? `${head}: From ${low} for ${dayLabel}` : '',
      low ? `${head}: From ${low}` : '',
      `${name} Trip Cost: From ${low || perKm + '/km'}`,
    ].filter(Boolean),
    DISPLAY_BUDGET,
  );

  const answer = low && high
    ? `${dayPhrase} ${name} trip from ${origin} costs ${low} to ${high} per person.`
    : `${dayPhrase} ${name} trip from ${origin}, fully costed.`;
  const fare = oneWay ? `Sedan cab ${oneWay} one way at ${perKm}/km` : `Sedan cab at ${perKm}/km`;
  const extras = [hotel ? `hotels from ${hotel}/night` : '', toll ? `${toll} toll` : '']
    .filter(Boolean)
    .join(', ');
  const description = tightenDescription(
    `${answer} ${fare}${extras ? `, ${extras}` : ''}, food and entry fees itemised. Call 7668570551.`,
  );

  return { title, description };
}

/* ------------------------------------------------------------------ *
 * Shared: commercial-intent hook for informational templates
 * ------------------------------------------------------------------ */

/**
 * Informational pages carry 62% of this site's impressions but almost none of
 * its leads. Where a route has a bookable twin, surface it in the description
 * so the snippet itself carries commercial intent.
 */
export function commercialHook({ origin, destination, fare }) {
  if (!origin || !destination) return '';
  return `Book ${origin} to ${destination} cab${fare ? ` from ${fare}` : ''} — verified drivers, AC guaranteed.`;
}

export default {
  formatINR,
  clamp,
  clampTitle,
  pickTitle,
  TITLE_BUDGET,
  reverseRouteSlug,
  getRouteTollSummary,
  hasTollCostPage,
  enrichRouteWithToll,
  buildDistanceMeta,
  buildAttractionBlogMeta,
  buildEditorialBlogMeta,
  buildDestinationCompareMeta,
  buildTripCostMeta,
  isAnswerBoxExposedTitle,
  commercialHook,
};
