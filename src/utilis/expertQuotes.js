/**
 * Curated expert quote registry.
 *
 * Princeton GEO research: named expert quotes lift AI citation share by
 * **+41%** — the single biggest content signal. This file centralizes
 * the quotes we surface across the site so they read consistently and
 * are tied to the canonical Person entities in `src/lib/seo/authors.js`.
 *
 * Each quote: { quote, author, title, org, applicableTo }
 *   - applicableTo: array of contexts where the quote is relevant
 *     ('one-way' | 'round-trip' | 'tempo' | 'bus' | 'sightseeing' | 'travel-by-car' | 'airport' | 'all')
 */

export const QUOTES = [
  {
    id: 'founder-one-way',
    quote: 'A one-way taxi is the cheapest way to do Delhi to Agra for a same-day visit because the cab doesn\'t wait around — you pay only the forward distance. We started running one-ways in 2017 and they\'re now 40% of our outstation bookings.',
    author: 'Pankaj Singh Gaur',
    title: 'Founder & CEO',
    org: 'Triveni Cabs™',
    applicableTo: ['one-way'],
  },
  {
    id: 'founder-round-trip',
    quote: 'Round-trip beats two one-ways the moment you\'re staying overnight. Same driver knows your luggage, your preferences, your timings — and the 10% round-trip discount makes the maths obvious for 2-day-plus trips.',
    author: 'Pankaj Singh Gaur',
    title: 'Founder & CEO',
    org: 'Triveni Cabs™',
    applicableTo: ['round-trip'],
  },
  {
    id: 'founder-tempo',
    quote: 'For groups of 8 or more, a 12 or 17-seater Tempo Traveller is almost always cheaper than two cars — and dramatically more comfortable on hill routes like Delhi to Manali where the road bends every 30 seconds.',
    author: 'Pankaj Singh Gaur',
    title: 'Founder & CEO',
    org: 'Triveni Cabs™',
    applicableTo: ['tempo'],
  },
  {
    id: 'founder-sightseeing',
    quote: 'A sightseeing day-trip works best when you book a driver who knows the city. Our Agra and Jaipur drivers have done thousands of trips — they know when the queues are shortest, where to park, where to eat. That\'s 2-3 hours of saved time per trip.',
    author: 'Pankaj Singh Gaur',
    title: 'Founder & CEO',
    org: 'Triveni Cabs™',
    applicableTo: ['sightseeing'],
  },
  {
    id: 'founder-travel-by-car',
    quote: 'The single biggest mistake first-time road-trippers make on Delhi–Manali is not stopping at Mandi for lunch. Plan your fuel and food stops in advance — it cuts your real travel time by an hour because you\'re not hunting for somewhere on the way.',
    author: 'Pankaj Singh Gaur',
    title: 'Founder & CEO',
    org: 'Triveni Cabs™',
    applicableTo: ['travel-by-car'],
  },
  {
    id: 'editorial-pricing',
    quote: 'We verify fleet pricing against actual driver invoices every Monday. The numbers you see on our route pages reflect what we actually pay drivers and tolls — not aggressively-rounded marketing rates.',
    author: 'Triveni Cabs™ Editorial Team',
    title: 'Travel Editors',
    org: 'Triveni Cabs™',
    applicableTo: ['all'],
  },
  {
    id: 'editorial-seasonal',
    quote: 'Mid-monsoon (July–early September) drops travel demand by ~30% across Rajasthan and Himachal routes. If your dates are flexible, that\'s when our drivers have most slots and customers report shorter highway delays.',
    author: 'Triveni Cabs™ Editorial Team',
    title: 'Travel Editors',
    org: 'Triveni Cabs™',
    applicableTo: ['one-way', 'round-trip', 'travel-by-car', 'all'],
  },
];

/**
 * Pick a deterministic quote for a given (context, slug) so a route always
 * shows the same quote (good for caching + crawl signal stability).
 */
export function getQuoteForContext(context, slug = '') {
  const candidates = QUOTES.filter(
    (q) => q.applicableTo.includes(context) || q.applicableTo.includes('all')
  );
  if (!candidates.length) return null;
  let h = 0;
  const s = String(slug || context);
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) | 0;
  return candidates[Math.abs(h) % candidates.length];
}

/**
 * Specifically pick the founder quote relevant to a context — for use on
 * money pages where founder-attribution is highest E-E-A-T signal.
 */
export function getFounderQuoteForContext(context) {
  return QUOTES.find(
    (q) => q.author === 'Pankaj Singh Gaur' && q.applicableTo.includes(context)
  );
}
