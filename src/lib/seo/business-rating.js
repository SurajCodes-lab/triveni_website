// src/lib/seo/business-rating.js
//
// The single source of truth for Triveni's own rating and review data in
// structured markup.
//
// WHY THIS FILE EXISTS
// --------------------
// Measured in the built HTML on 7 October 2026, before this file:
//
//   * All 3,833 pages emitted `aggregateRating` with `reviewCount: "10000"`
//     and `ratingValue: "4.9"`. The 10,000 figure is the one that
//     src/lib/seo/review-helpers.js was written to remove — its own header
//     says "Pages used to render aggregateRating.reviewCount: 10000 which
//     Google now treats as schema spam" — but it only replaced the value on
//     the vertical pages. The global LocalBusiness schema in the root layout
//     kept it, so it was still going out on every page.
//   * 128 distinct review author names were published as `Review` nodes with
//     `author.@type: Person`. The names and the review bodies are written in
//     src/utilis/schemaReviews.js and src/lib/seo/review-helpers.js. Their
//     `datePublished` was computed as "1-10 weeks ago" on each build, with a
//     comment explaining the spread was chosen because "if all 8 reviews
//     shared today as their date they'd look automated".
//   * 12,396 instances of a hardcoded 4.9 across the site.
//
// None of that is collected data. Two things follow from it:
//
// Google's structured-data policy treats fabricated review markup as spam, and
// the exposure is not limited to review snippets — a manual action for spammy
// structured markup can remove every rich result the site earns. Separately,
// self-serving reviews about one's own business have not been eligible for
// review snippets since 2019, so the markup was carrying risk without earning
// the thing it was there to earn.
//
// THE RULE THIS FILE ENFORCES
// ---------------------------
// A rating or a review is published only when it came from somewhere real. When
// VERIFIED is null, the helpers below return null and an empty array, and every
// consumer omits the node rather than emitting an invented one. Absence of a
// claim is always safe; an invented claim is not.
//
// HOW TO TURN IT BACK ON
// ----------------------
// Replace VERIFIED with the figures from the Google Business Profile — the
// rating as shown, the review count as shown, the date read, and where it came
// from. One edit here restores aggregateRating across the whole site, correctly
// and with a provenance trail.
//
//   export const VERIFIED = {
//     ratingValue: 4.7,          // exactly as the profile shows it
//     reviewCount: 312,          // exactly as the profile shows it
//     source: 'Google Business Profile',
//     asOf: '2026-10-07',
//   };
//
// Do NOT populate this from the site's own /reviews page. That page currently
// states "4.8 out of 5 from 2,847+ verified customer reviews", and a web search
// for the business returns that figure — but it returns it *from this site*.
// Citing our own unverified number back to ourselves does not verify it.
//
// Individual `Review` nodes are a separate matter: they need the real review
// text and author as published on the profile, and syndicating those carries
// its own platform-terms questions. Until that is settled deliberately, this
// file publishes no individual reviews at all.

/**
 * Verified rating data, or null when there is none.
 *
 * null is the correct value when nothing has been verified — it is not a
 * placeholder waiting to be guessed at.
 *
 * These figures are the Google Business Profile's own, as the profile shows
 * them, supplied by the business owner. They are NOT the site's own /reviews
 * claim of "4.8 out of 5 from 2,847+", which is the number this file's header
 * warns against: a web search returns that figure, but it returns it *from
 * this site*, so citing it back to ourselves verifies nothing.
 *
 * `asOf` is the date the profile was read, not the date of the build. When the
 * profile moves, update both numbers and the date together — a rating with a
 * stale date is worse than no date, because it claims a check that did not
 * happen.
 *
 * `reviews` is deliberately absent rather than empty. Individual Review nodes
 * need the real review text and author as published, and syndicating those
 * carries its own platform-terms questions; until that is settled, this file
 * publishes the aggregate only.
 */
export const VERIFIED = {
  ratingValue: 4.9,
  reviewCount: 354,
  source: 'Google Business Profile',
  asOf: '2026-10-10',
};

/** Is there verified rating data to publish? */
export function hasVerifiedRating() {
  return Boolean(
    VERIFIED &&
    Number.isFinite(Number(VERIFIED.ratingValue)) &&
    Number.isFinite(Number(VERIFIED.reviewCount)) &&
    Number(VERIFIED.reviewCount) > 0,
  );
}

/**
 * A schema.org AggregateRating node, or null.
 *
 * Callers must spread this conditionally so the key disappears entirely when
 * there is nothing to say:
 *
 *   ...(aggregateRatingNode() ? { aggregateRating: aggregateRatingNode() } : {})
 *
 * Assigning null to the key instead would emit `"aggregateRating": null`, which
 * is a malformed node rather than an absent one.
 */
export function aggregateRatingNode() {
  if (!hasVerifiedRating()) return null;
  return {
    '@type': 'AggregateRating',
    ratingValue: String(VERIFIED.ratingValue),
    reviewCount: String(VERIFIED.reviewCount),
    bestRating: '5',
    worstRating: '1',
  };
}

/**
 * Individual Review nodes. Empty until real reviews are supplied with their own
 * author and text; there is no fallback that invents them.
 */
export function verifiedReviews() {
  if (!VERIFIED || !Array.isArray(VERIFIED.reviews)) return [];
  return VERIFIED.reviews
    .filter((r) => r && r.author && r.body && Number.isFinite(Number(r.rating)) && r.datePublished)
    .map((r) => ({
      '@type': 'Review',
      author: { '@type': 'Person', name: r.author },
      datePublished: r.datePublished,
      reviewRating: {
        '@type': 'Rating',
        ratingValue: String(r.rating),
        bestRating: '5',
        worstRating: '1',
      },
      reviewBody: r.body,
    }));
}

/**
 * Spread helper for the common case — adds both keys when they have content and
 * nothing at all when they do not.
 *
 *   const schema = { '@type': 'LocalBusiness', ...ratingAndReviews() };
 */
export function ratingAndReviews() {
  const out = {};
  const agg = aggregateRatingNode();
  if (agg) out.aggregateRating = agg;
  const reviews = verifiedReviews();
  if (reviews.length) out.review = reviews;
  return out;
}
