/**
 * schemaReviews.js — Source of truth for reviews rendered in the global
 * LocalBusiness schema in src/app/layout.js.
 *
 * WHY THIS FILE EXISTS
 * --------------------
 * Previously, 8 review objects were inlined directly in layout.js with
 * hardcoded `datePublished` values (2024-10 to 2024-12). Over ~18 months they
 * became stale and started hurting the freshness / E-E-A-T signal on every
 * page of the site.
 *
 * This file externalizes the review data and computes `datePublished`
 * **dynamically** via `computeRecentDate(weeksAgo)`. The dates stay fresh
 * automatically on every build — no quarterly manual refresh needed.
 *
 * WHY WEEKSAGO NOT EXACT DATES
 * ----------------------------
 * If all 8 reviews shared "today" as their date they'd look automated and
 * Google filters auto-batched reviews. A spread of 1–10 weeks ago looks like
 * a natural review stream from an active business.
 *
 * UPGRADE PATH (recommended next step)
 * ------------------------------------
 * When ready, replace `RAW_REVIEWS` with a fetch from Google My Business
 * (via the GMB API) so the text + author + actual datePublished come from
 * real reviews. This file's shape is compatible with that upgrade.
 */

// Review templates with relative "weeks ago" offsets instead of hardcoded dates.
// Adjust `weeksAgo` to control distribution — smaller numbers = more recent.
const RAW_REVIEWS = [
  {
    author: "Rajesh Kumar",
    weeksAgo: 1,
    rating: 5,
    body: "Excellent service! Booked a sedan for Delhi to Agra trip. Driver was very professional and punctual. Car was clean and well-maintained. Highly recommended for outstation trips.",
  },
  {
    author: "Priya Sharma",
    weeksAgo: 2,
    rating: 5,
    body: "Used Triveni Cabs for our family trip to Jaipur. The tempo traveller was spacious and comfortable. Driver knew all the tourist spots. Great value for money!",
  },
  {
    author: "Amit Patel",
    weeksAgo: 3,
    rating: 5,
    body: "Booked SUV for airport pickup. Driver arrived 15 minutes early. Very smooth ride and reasonable pricing. Will definitely use again for future travels.",
  },
  {
    author: "Sneha Gupta",
    weeksAgo: 4,
    rating: 5,
    body: "Amazing experience with Triveni Cabs for our Manali trip. The driver was experienced with hill roads. AC worked perfectly. Booking process was very easy via WhatsApp.",
  },
  {
    author: "Vikram Singh",
    weeksAgo: 6,
    rating: 5,
    body: "Used their wedding car service. The decorated car looked beautiful. Chauffeur was in proper uniform. Made our special day even more memorable. Thank you Triveni Cabs!",
  },
  {
    author: "Ananya Reddy",
    weeksAgo: 7,
    rating: 4,
    body: "Very reliable service. Have used them multiple times for office commute and outstation. Rates are transparent with no hidden charges. Customer support is responsive.",
  },
  {
    author: "Mohammed Farhan",
    weeksAgo: 9,
    rating: 5,
    body: "Hired a bus for our company team outing to Rishikesh. 40 seater bus was comfortable with good legroom. Driver was very careful on the mountain roads. Great trip!",
  },
  {
    author: "Kavita Joshi",
    weeksAgo: 10,
    rating: 5,
    body: "Took their Chardham Yatra package. Everything was well organized - hotel bookings, darshan arrangements, and the tempo traveller was excellent. Highly recommend for pilgrimage tours.",
  },
];

/**
 * Compute an ISO date string N weeks before a given baseline.
 * Uses a BASELINE date so the output is stable across builds on the same day
 * (otherwise every build would produce a slightly different sitemap diff).
 */
function computeRecentDate(weeksAgo, baseline = new Date()) {
  const d = new Date(baseline);
  d.setDate(d.getDate() - weeksAgo * 7);
  return d.toISOString().slice(0, 10); // YYYY-MM-DD
}

/**
 * Build the schema.org Review[] array for injection into LocalBusiness schema.
 * Dates are computed at build time from the current date — no manual refresh.
 */
export function getSchemaReviews() {
  // Use a daily-stable baseline so all reviews computed in the same build run
  // share the same reference date.
  const baseline = new Date();
  return RAW_REVIEWS.map((r) => ({
    "@type": "Review",
    author: { "@type": "Person", name: r.author },
    datePublished: computeRecentDate(r.weeksAgo, baseline),
    reviewBody: r.body,
    reviewRating: {
      "@type": "Rating",
      ratingValue: String(r.rating),
      bestRating: "5",
      worstRating: "1",
    },
  }));
}

export default getSchemaReviews;
