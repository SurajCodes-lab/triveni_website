/**
 * tripSchemaHelper — deep schema graph builder for trip / honeymoon / friends /
 * trip-cost pages. Centralises TouristTrip + Service (with rating/reviews) +
 * FAQPage + Speakable + Article + HowTo + GEO Place so the thin page.js server
 * components can emit a full AEO/GEO schema set in one call.
 *
 * Reuses shared helpers (NOT edited):
 *   - getRatingAndReviews(slug, 'city')  → deterministic 50-180 reviewCount + 3 Reviews
 *   - getArticleSchema / getHowToSchema / getSpeakableSchema / getCityPlaceSchema / getTodayDate
 *
 * NEVER emits reviewCount: 10000.
 */
import { getRatingAndReviews } from '@/lib/seo/review-helpers';
import {
  getArticleSchema,
  getHowToSchema,
  getCityPlaceSchema,
  getComparisonSchema,
  getTodayDate,
} from '@/lib/seo/speakable-helpers';

const BASE = 'https://www.trivenicabs.in';

function faqArray(faqs = []) {
  return faqs
    .map((f) => ({ q: f.q || f.question, a: f.a || f.answer }))
    .filter((f) => f.q && f.a);
}

/**
 * Build the breadcrumb schema from an ordered trail of { name, url }.
 */
export function buildBreadcrumb(trail) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: trail.map((t, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: t.name,
      item: t.url,
    })),
  };
}

/**
 * Build FAQPage with Speakable wiring (voice assistants read first answer).
 */
export function buildFaqSchema(faqs, slug) {
  const list = faqArray(faqs);
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': `${BASE}/${slug}#faq`,
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['.speakable-faq-first'],
    },
    mainEntity: list.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
}

/**
 * Enriched TouristTrip with itinerary itemListElement + rating + provider @id.
 */
export function buildTouristTrip({ slug, name, description, touristType, lowPrice, highPrice, itinerary = [], destination, image }) {
  const rr = getRatingAndReviews(slug, 'city');
  const url = `${BASE}/${slug}`;
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'TouristTrip',
    '@id': `${url}#trip`,
    name,
    description,
    url,
    touristType,
    provider: {
      '@type': 'TravelAgency',
      '@id': `${BASE}/#organization`,
      name: 'Triveni Cabs',
      telephone: '+91-7668570551',
      url: BASE,
    },

    offers: {
      '@type': 'AggregateOffer',
      lowPrice: String(lowPrice),
      highPrice: String(highPrice),
      priceCurrency: 'INR',
      availability: 'https://schema.org/InStock',
    },
  };
  if (image) {
    schema.image = image.startsWith('http') ? image : `${BASE}${image}`;
  }
  if (itinerary.length) {
    schema.itinerary = {
      '@type': 'ItemList',
      numberOfItems: itinerary.length,
      itemListElement: itinerary.map((d, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        item: {
          '@type': 'TouristAttraction',
          name: d.title || d.name || `Day ${d.day || i + 1}`,
          description: d.description || d.text || '',
        },
      })),
    };
  }
  if (destination) {
    schema.subjectOf = { '@id': `${BASE}/${slug}#place` };
  }
  return schema;
}

/**
 * Standalone Service schema with rating/reviews — surfaces the cab service as a
 * bookable entity (separate from the TouristTrip product).
 */
export function buildServiceSchema({ slug, name, description, areaServed = 'India', lowPrice, highPrice }) {
  const rr = getRatingAndReviews(slug, 'city');
  const url = `${BASE}/${slug}`;
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${url}#service`,
    name,
    description,
    serviceType: 'Trip Cab Service',
    provider: { '@id': `${BASE}/#organization` },
    areaServed: { '@type': 'Country', name: areaServed },

    offers: {
      '@type': 'AggregateOffer',
      lowPrice: String(lowPrice),
      highPrice: String(highPrice),
      priceCurrency: 'INR',
    },
  };
}

/**
 * One-shot builder for trip clients (family / honeymoon / friends).
 * Returns an array of JSON-LD objects ready to render.
 *
 * config:
 *  - data: the trip data object (needs faqs, itinerary, destination, distance, duration, vehicle, price, tagline)
 *  - slug: page slug
 *  - vertical: label only ('family' | 'honeymoon' | 'friends')
 *  - touristType: schema touristType string
 *  - citySlug: key into _CITY_PLACES (may be null for multi-city / kashmir / goa)
 *  - breadcrumbTrail: [{name,url}]
 *  - image: OG image path
 *  - lowPrice / highPrice
 *  - tripName: TouristTrip display name
 *  - howToName / howToDesc: HowTo header copy
 */
export function buildTripSchemaGraph(config) {
  const {
    data,
    slug,
    touristType,
    citySlug,
    breadcrumbTrail,
    image,
    lowPrice,
    highPrice,
    tripName,
    howToName,
    howToDesc,
  } = config;

  const faqs = faqArray(data.faqs);
  const graph = [];

  graph.push(buildBreadcrumb(breadcrumbTrail));

  graph.push(
    buildTouristTrip({
      slug,
      name: tripName,
      description: data.tagline || tripName,
      touristType,
      lowPrice,
      highPrice,
      itinerary: data.itinerary || [],
      destination: data.destination,
      image,
    })
  );

  graph.push(
    buildServiceSchema({
      slug,
      name: tripName,
      description: data.tagline || tripName,
      lowPrice,
      highPrice,
    })
  );

  graph.push(buildFaqSchema(data.faqs, slug));

  graph.push(
    getArticleSchema({
      slug,
      headline: tripName,
      description: data.tagline || tripName,
      image,
      datePublished: '2025-06-01',
      speakableSelectors: ['.speakable-headline', '.speakable-lead', '.speakable-faq-first'],
    })
  );

  // HowTo — derived from itinerary days when present, else generic booking steps.
  const steps =
    (data.itinerary || []).length > 0
      ? data.itinerary.map((d) => ({
          name: d.title || d.name || `Day ${d.day}`,
          text: d.description || d.text || '',
        }))
      : [
          { name: 'Share your dates and group size', text: `Call or WhatsApp 7668570551 with your travel dates and number of travellers for ${data.destination}.` },
          { name: 'Pick your vehicle', text: `Choose a sedan from Rs ${lowPrice} or a larger SUV / tempo based on group size. Fare is all-inclusive of toll, parking and driver allowance.` },
          { name: 'Confirm and travel', text: 'No advance payment required. The verified driver reaches your Delhi doorstep at the scheduled time.' },
        ];

  graph.push(
    getHowToSchema({
      name: howToName,
      description: howToDesc,
      totalTime: 'PT5M',
      estimatedCost: { currency: 'INR', value: lowPrice },
      steps,
    })
  );

  if (citySlug) {
    const place = getCityPlaceSchema(citySlug, { idSlug: slug, image });
    if (place) graph.push(place);
  }

  return graph;
}

/**
 * Service schema for a trip-cost guide. Surfaces the bookable cab service that
 * underpins the cost breakdown, with deterministic rating + reviews.
 */
export function buildTripCostService({ slug, data }) {
  const rr = getRatingAndReviews(slug, 'city');
  const url = `${BASE}/${slug}`;
  const lowPerKm =
    data.cabCost && data.cabCost.sedan && data.cabCost.sedan.perKm
      ? String(data.cabCost.sedan.perKm).replace(/[^\d]/g, '')
      : null;
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${url}#service`,
    name: `${data.destination} Trip Cab Service from ${data.origin}`,
    description: data.metaDescription || `${data.destination} trip from ${data.origin} — transparent all-inclusive cab fares.`,
    serviceType: 'Outstation Trip Cab Service',
    provider: { '@id': `${BASE}/#organization` },
    areaServed: { '@type': 'Country', name: 'India' },

  };
  if (lowPerKm) {
    schema.offers = {
      '@type': 'Offer',
      priceCurrency: 'INR',
      price: lowPerKm,
      description: `Sedan from Rs ${lowPerKm}/km, all-inclusive of fuel, toll and driver allowance`,
      availability: 'https://schema.org/InStock',
    };
  }
  return schema;
}

/**
 * Full schema graph for the 2 bare trip-cost pages (honeymoon-trip-cost-shimla-manali,
 * rajasthan-trip-cost-budget) — Article + HowTo + Place + Service. Uses the
 * page-level FAQ from FAQSection (already emits FAQPage), so no duplicate FAQPage.
 */
export function buildTripCostBareGraph({ slug, data, citySlug, breadcrumbName, image, howToName, howToDesc, howToSteps }) {
  const url = `${BASE}/${slug}`;
  const graph = [];

  graph.push(
    buildBreadcrumb([
      { name: 'Home', url: BASE },
      { name: breadcrumbName, url },
    ])
  );

  graph.push(
    getArticleSchema({
      slug,
      headline: data.title,
      description: data.metaDescription,
      image,
      datePublished: '2025-01-01',
      speakableSelectors: ['.speakable-headline', '.speakable-lead', '#faq-answer-0'],
    })
  );

  graph.push(buildTripCostService({ slug, data }));

  graph.push(
    getHowToSchema({
      name: howToName,
      description: howToDesc,
      totalTime: 'PT5M',
      estimatedCost: { currency: 'INR', value: 5000 },
      steps: howToSteps,
    })
  );

  if (citySlug) {
    const place = getCityPlaceSchema(citySlug, { idSlug: slug, image });
    if (place) graph.push(place);
  }

  return graph;
}

/**
 * Generic Service schema for the static weekend / road-trip pages.
 */
export function buildStaticService({ slug, name, description, lowPrice, highPrice, serviceType = 'Road Trip Cab Service' }) {
  const rr = getRatingAndReviews(slug, 'city');
  const url = `${BASE}/${slug}`;
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${url}#service`,
    name,
    description,
    serviceType,
    provider: { '@id': `${BASE}/#organization` },
    areaServed: { '@type': 'Country', name: 'India' },

  };
  if (lowPrice && highPrice) {
    schema.offers = {
      '@type': 'AggregateOffer',
      lowPrice: String(lowPrice),
      highPrice: String(highPrice),
      priceCurrency: 'INR',
    };
  }
  return schema;
}

/**
 * Build an array of GEO Place schemas for a list of destination citySlugs.
 * Silently drops unknown slugs.
 */
export function buildPlaceSchemas(citySlugs = [], pageSlug, image) {
  return citySlugs
    .map((c) => getCityPlaceSchema(c, { idSlug: `${pageSlug}-${c}`, image }))
    .filter(Boolean);
}

export { getArticleSchema, getHowToSchema, getComparisonSchema, getCityPlaceSchema };
export { getTodayDate };
