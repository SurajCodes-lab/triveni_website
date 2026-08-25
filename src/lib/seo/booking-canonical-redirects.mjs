/**
 * Booking-cluster canonicalisation - Week 43
 * =========================================
 *
 * Google Search Console (19 May - 18 Aug 2026) showed 47 URLs across 18 routes
 * all competing for the same intent: "book a cab from A to B". Their weighted
 * average position was 24.4 - page three - while the purely informational
 * /distance page for the same route ranked at 7.7.
 *
 * Five separate URLs answered "Delhi to Agra cab" (/delhi-to-agra,
 * /one-way-cab/delhi-to-agra, /round-trip/delhi-to-agra, /ertiga-hire/... and
 * /innova-hire/...). Asked which one is the booking page, Google answered "none
 * of these convincingly" and ranked the distance guide instead.
 *
 * Each cluster is consolidated onto the URL Google already ranks best - its
 * revealed preference - rather than onto whichever template we consider tidier.
 * Redirecting a stronger page into a weaker one risks the rankings we are trying
 * to concentrate.
 *
 * DELIBERATELY EXCLUDED: vehicle-specific hire pages (/ertiga-hire/<route>,
 * /innova-hire/<route>, /innova-crysta-hire/<route>). "Ertiga Delhi to Agra" is
 * a distinct vehicle intent and those pages perform - positions 5-9 at 1-3 per
 * cent CTR. Folding them in would retire working pages to fix a problem they do
 * not have.
 *
 * Note: the redirected paths are still prerendered by their templates'
 * generateStaticParams. next.config redirects run before routing, so those pages
 * are never served - a small build-time waste, no SEO consequence. Pruning the
 * params is safe follow-up work.
 *
 * Total consolidated: 26887 impressions across 21 redirects.
 */

export const bookingCanonicalRedirects = [
  // Week 43 - content duplicate found by scripts/seo-check.mjs, not by the URL
  // audit: two blog posts written for the same query, rendering the identical
  // title. /best-time-to-visit-taj-mahal-2026 earns 45 clicks on 10,186
  // impressions at position 7.8; the month-by-month twin has no measurable
  // traffic at all. Same rule as the booking clusters - consolidate onto the
  // page Google already ranks.
  { source: '/blog/best-time-to-visit-taj-mahal-month-by-month-2026', destination: '/blog/best-time-to-visit-taj-mahal-2026', permanent: true },

  // /delhi-to-dehradun                           2796 impr, pos  36.1  ->  /one-way-cab/delhi-to-dehradun (pos 8.8)
  { source: '/delhi-to-dehradun', destination: '/one-way-cab/delhi-to-dehradun', permanent: true },
  // /delhi-to-haridwar                           2666 impr, pos  37.3  ->  /one-way-cab/delhi-to-haridwar (pos 18.8)
  { source: '/delhi-to-haridwar', destination: '/one-way-cab/delhi-to-haridwar', permanent: true },
  // /one-way-cab/chandigarh-to-delhi             2459 impr, pos  26.4  ->  /chandigarh-to-delhi (pos 29.2)
  { source: '/one-way-cab/chandigarh-to-delhi', destination: '/chandigarh-to-delhi', permanent: true },
  // /jaipur-to-delhi                             2206 impr, pos  36.4  ->  /one-way-cab/jaipur-to-delhi (pos 19.3)
  { source: '/jaipur-to-delhi', destination: '/one-way-cab/jaipur-to-delhi', permanent: true },
  // /one-way-cab/chandigarh-to-manali            1628 impr, pos  44.0  ->  /chandigarh-to-manali (pos 22.4)
  { source: '/one-way-cab/chandigarh-to-manali', destination: '/chandigarh-to-manali', permanent: true },
  // /haridwar-to-delhi                           1549 impr, pos  32.2  ->  /one-way-cab/haridwar-to-delhi (pos 26.8)
  { source: '/haridwar-to-delhi', destination: '/one-way-cab/haridwar-to-delhi', permanent: true },
  // /one-way-cab/delhi-to-shimla                 1505 impr, pos  37.5  ->  /delhi-to-shimla (pos 34.0)
  { source: '/one-way-cab/delhi-to-shimla', destination: '/delhi-to-shimla', permanent: true },
  // /delhi-to-manali                             1388 impr, pos  52.1  ->  /one-way-cab/delhi-to-manali (pos 34.6)
  { source: '/delhi-to-manali', destination: '/one-way-cab/delhi-to-manali', permanent: true },
  // /one-way-cab/delhi-to-agra                   1380 impr, pos  37.2  ->  /delhi-to-agra (pos 12.6)
  { source: '/one-way-cab/delhi-to-agra', destination: '/delhi-to-agra', permanent: true },
  // /one-way-cab/delhi-to-rishikesh              1353 impr, pos  22.7  ->  /delhi-to-rishikesh (pos 21.4)
  { source: '/one-way-cab/delhi-to-rishikesh', destination: '/delhi-to-rishikesh', permanent: true },
  // /one-way-cab/manali-to-delhi                 1322 impr, pos  28.2  ->  /manali-to-delhi (pos 22.1)
  { source: '/one-way-cab/manali-to-delhi', destination: '/manali-to-delhi', permanent: true },
  // /one-way-cab/rishikesh-to-delhi              1136 impr, pos  26.2  ->  /rishikesh-to-delhi (pos 23.9)
  { source: '/one-way-cab/rishikesh-to-delhi', destination: '/rishikesh-to-delhi', permanent: true },
  // /one-way-cab/delhi-to-chandigarh              969 impr, pos  31.6  ->  /delhi-to-chandigarh (pos 20.0)
  { source: '/one-way-cab/delhi-to-chandigarh', destination: '/delhi-to-chandigarh', permanent: true },
  // /round-trip/delhi-to-mussoorie                908 impr, pos  46.4  ->  /delhi-to-mussoorie (pos 40.8)
  { source: '/round-trip/delhi-to-mussoorie', destination: '/delhi-to-mussoorie', permanent: true },
  // /agra-to-jaipur                               714 impr, pos  23.6  ->  /one-way-cab/agra-to-jaipur (pos 17.6)
  { source: '/agra-to-jaipur', destination: '/one-way-cab/agra-to-jaipur', permanent: true },
  // /round-trip/delhi-to-agra                     680 impr, pos  56.6  ->  /delhi-to-agra (pos 12.6)
  { source: '/round-trip/delhi-to-agra', destination: '/delhi-to-agra', permanent: true },
  // /round-trip/delhi-to-mathura                  621 impr, pos  62.0  ->  /delhi-to-mathura (pos 29.7)
  { source: '/round-trip/delhi-to-mathura', destination: '/delhi-to-mathura', permanent: true },
  // /one-way-cab/delhi-to-jaipur                  550 impr, pos  16.6  ->  /delhi-to-jaipur (pos 17.1)
  { source: '/one-way-cab/delhi-to-jaipur', destination: '/delhi-to-jaipur', permanent: true },
  // /round-trip/chandigarh-to-manali              409 impr, pos  28.9  ->  /chandigarh-to-manali (pos 22.4)
  { source: '/round-trip/chandigarh-to-manali', destination: '/chandigarh-to-manali', permanent: true },
  // /round-trip/delhi-to-manali                   330 impr, pos  67.6  ->  /one-way-cab/delhi-to-manali (pos 34.6)
  { source: '/round-trip/delhi-to-manali', destination: '/one-way-cab/delhi-to-manali', permanent: true },
  // /round-trip/delhi-to-dharamshala              318 impr, pos  59.9  ->  /delhi-to-dharamshala (pos 22.1)
  { source: '/round-trip/delhi-to-dharamshala', destination: '/delhi-to-dharamshala', permanent: true },
];

export default bookingCanonicalRedirects;
