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

  const sentences = s.match(/[^.!?]+[.!?]+(?:\s|$)/g);
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
    const cleaned = parts[i]
      .replace(/\btriveni\s+cabs\b/gi, '')
      .replace(/\btriveni\b/gi, '')
      .replace(/^[\s,\u2013\u2014:&-]+|[\s,\u2013\u2014:&-]+$/g, '')
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
 * Tier A (measured toll available): leads with toll + fare, the exact shape
 *   that earns 4.10% CTR on this site's own /toll-cost pages.
 * Tier B (no measured toll): leads with fare + drive time + stops.
 */
export function buildDistanceMeta(route, slug) {
  const { origin, destination, duration, highway } = route;
  const km = route.distance ? route.distance.km : null;
  const fare = formatINR(route.sedanRaw);
  const toll = getRouteTollSummary(slug);
  const pair = `${origin} to ${destination}`;

  const title = toll
    ? pickTitle([
        `${pair} Distance: ${formatINR(toll.car)} Toll, Cab ${fare}`,
        `${pair} Distance & Toll Cost ${formatINR(toll.car)}`,
        `${pair} Distance: Toll ${formatINR(toll.car)}`,
      ])
    : pickTitle([
        `${pair} Distance & Cab Fare ${fare} 2026`,
        `${pair} Distance & Cab Fare ${fare}`,
        `${pair} Distance & Cab ${fare}`,
        `${pair} Distance: Cab ${fare}`,
      ]);

  const plural = toll && toll.plazaCount === 1 ? '' : 's';
  const description = toll
    ? clamp(
        `${pair}: ${formatINR(toll.car)} car toll across ${toll.plazaCount} plaza${plural}, ` +
        `AC cab from ${fare}, ${duration} drive, ${km} km via ${highway}. ` +
        `Plaza-wise rates, best stops & 2026 fares. Call 7668570551.`, 158)
    : clamp(
        `${pair}: AC cab from ${fare}, ${duration} drive, ${km} km via ${highway}. ` +
        `Toll & fuel cost, best stops, road condition and 2026 fares for sedan, SUV & Tempo. Call 7668570551.`, 158);

  const ogTitle = clamp(
    toll
      ? `${pair} by Road — ${formatINR(toll.car)} Toll, Cab from ${fare} | Triveni Cabs`
      : `${pair} by Road — Cab from ${fare}, ${duration} Drive | Triveni Cabs`,
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
 * Recover the bare entity name from a fact-led title.
 *
 * These titles follow a consistent shape:
 *   "Akshardham Delhi Timings & Ticket Price (2026) | Closed Mon"
 *   "Ayodhya Ram Mandir Darshan Timings & Free Entry (2026)"
 *
 * Everything from the first answered-fact word onward is the part Google
 * already displays, and everything after a pipe is a secondary hook. Cutting at
 * whichever comes first leaves the entity — "Akshardham Delhi", "Ayodhya Ram
 * Mandir Darshan" — intact, including multi-word and qualifier forms.
 */
function extractEntityName(rawTitle) {
  let s = String(rawTitle || '').split('|')[0];
  s = s.replace(/\s*[(\[].*?[)\]]\s*/g, ' ');
  const m = s.match(ANSWERED_IN_PANEL);
  if (m && m.index > 0) s = s.slice(0, m.index);
  return s
    .replace(/\s*[-–—:,&]+\s*$/, '')
    .replace(/\s{2,}/g, ' ')
    .trim();
}

/**
 * Rewrite an attraction-guide title to lead with the intent a knowledge panel
 * cannot satisfy.
 *
 * "Timings" is kept — it is the head term these pages rank for and dropping it
 * would cost relevance — but it is demoted out of the lead. The promise becomes
 * "How to Reach", which is both the largest un-answered slice of the query
 * basket these pages already rank for ("how to reach akshardham",
 * "akshardham parking", "nearest metro") and the one intent a cab company is
 * the natural answer to. It funnels toward a booking instead of ending at a fact.
 */
export function buildAttractionBlogMeta({ title, metaTitle, excerpt, metaDescription, city, attractionName }) {
  const base = metaTitle || title || '';
  const baseDesc = metaDescription || excerpt || '';

  // Only rewrite the ones actually losing to a knowledge panel.
  if (!isAnswerBoxExposedTitle(base)) {
    return { title: clamp(base, TITLE_BUDGET), description: clamp(baseDesc, 158), rewritten: false };
  }

  const name = attractionName || extractEntityName(base);
  if (!name) {
    return { title: clamp(base, TITLE_BUDGET), description: clamp(baseDesc, 158), rewritten: false };
  }

  const newTitle = pickTitle([
    `${name}: How to Reach, Timings & Cab Fare`,
    `${name}: How to Reach & Timings 2026`,
    `${name}: How to Reach & Timings`,
    `${name}: How to Reach`,
  ]);

  // Every clause below is something the page genuinely renders: the guide body
  // carries nearest-metro/how-to-reach copy and timings, and the blog template
  // always ends in either a route-aware fare box or the per-km rate CTA. A
  // snippet must not promise a section the reader will not find.
  const cityLabel = city ? city.charAt(0).toUpperCase() + city.slice(1) : '';
  const newDesc = clamp(
    `How to reach ${name}${cityLabel ? ` in ${cityLabel}` : ''} — nearest metro, cab fare and pickup options, ` +
    `plus 2026 timings, the best hour to avoid the queue, dress code and nearby stops. Call 7668570551.`,
    158);

  return { title: newTitle, description: newDesc, rewritten: true };
}

/* ------------------------------------------------------------------ *
 * /best-time-to-visit/[destination] — 70,390 impressions, 0.27% CTR
 * ------------------------------------------------------------------ */

/**
 * "Best time to visit X" is one of the most heavily answered queries in Google
 * — a weather widget plus a featured snippet, both above our result. Repeating
 * "Best Time to Visit X | Month-by-Month Guide" concedes the click.
 *
 * The un-answered half of that intent is *cost and crowds*: which months are
 * cheap, which are packed. The dataset already carries a `pricing` tier
 * (Peak/Budget) and a `crowd` level per season, so the page can deliver it.
 *
 * Also drops the "— Triveni Cabs" suffix. At 68 characters the old title was
 * truncated before the brand ever rendered, so the suffix cost 15 characters
 * of headline and bought nothing; brand queries are 0.1% of impressions.
 */
export function buildBestTimeMeta(data) {
  const dest = data.destination;
  const seasons = Array.isArray(data.seasons) ? data.seasons : [];
  const cheap = seasons.find((s) => /budget|low/i.test(s.pricing || ''));
  const peak = data.peakSeason || '';

  const title = pickTitle([
    `Best Time to Visit ${dest}: Cheapest Months`,
    `Best Time to Visit ${dest}: Cheap Months`,
    `Best Time to Visit ${dest} & Costs`,
  ]);

  const description = clamp(
    `${dest} peaks ${peak ? peak.toLowerCase() : 'in winter'}` +
    (cheap ? `, but ${cheap.months} costs less with far smaller crowds` : '') +
    `. Month-by-month temperature, crowd level, pricing tier, festivals and cab fare from ₹11/km. Call 7668570551.`,
    158);

  return { title, description };
}

/* ------------------------------------------------------------------ *
 * /travel-by-car/[route] — 196,037 impressions, 0.51% CTR
 * ------------------------------------------------------------------ */

/**
 * Road-trip guides lose the same way distance pages do — the old title led with
 * "by Car | Road Trip Guide 2026 — Triveni Cabs", which promises nothing the
 * SERP has not already implied, and spent its last 15 characters on a brand
 * that was truncated away.
 *
 * The differentiator is the number a road-tripper actually wants and cannot get
 * from a snippet: what the drive costs end to end.
 */
export function buildTravelByCarMeta(route, slug) {
  const { origin, destination } = route;
  const pair = `${origin} to ${destination}`;
  const toll = getRouteTollSummary(slug);
  const fare = route.cabFares && route.cabFares.sedan ? route.cabFares.sedan : '';
  const km = route.totalDistance;
  const time = route.drivingTime;

  const title = toll
    ? pickTitle([
        `${pair} by Car: ${formatINR(toll.car)} Toll, Fuel & Cost`,
        `${pair} by Car: Toll ${formatINR(toll.car)} & Fuel Cost`,
        `${pair} by Car: Toll & Fuel Cost`,
      ])
    : pickTitle([
        `${pair} by Car: Toll, Fuel Cost & Route`,
        `${pair} by Car: Toll & Fuel Cost`,
        `${pair} by Car: Trip Cost`,
      ]);

  const description = clamp(
    `${pair} by car${km ? `: ${km} km` : ''}${time ? `, ${time} drive` : ''}. ` +
    (toll ? `${formatINR(toll.car)} car toll, ` : 'Toll and ') +
    `fuel cost, where to break the journey, seasonal road warnings` +
    (fare ? `, or skip the driving with an AC cab from ${fare}` : '') + `. Call 7668570551.`,
    158);

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
  isAnswerBoxExposedTitle,
  commercialHook,
};
