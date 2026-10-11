// src/lib/seo/guide-schema.js
//
// Metadata, fares and the JSON-LD graph for the Week 48 guide family.
//
// One place builds everything a guide page emits, so the twenty-five guides
// cannot drift from each other: the same title budget, the same canonical
// shape, the same Article + FAQ + Breadcrumb graph, fares computed from the
// site's single fare policy (src/utilis/pricing.js) rather than typed in.

import { tightenTitle } from './serp-ctr';
import { BASE_URL } from './constants';
import { getArticleSchema, getHowToSchema, getCityPlaceSchema } from './speakable-helpers';
import { fareFor, PER_KM } from '@/utilis/pricing';

const OG_FALLBACK = '/images/triveni-cabs-og.jpg';

/** Next.js metadata export for a guide. */
export function buildGuideMetadata(guide) {
  const url = `${BASE_URL}${guide.path}`;
  const image = guide.heroImage || OG_FALLBACK;
  return {
    title: tightenTitle(guide.metaTitle || guide.title),
    description: guide.metaDescription,
    keywords: Array.isArray(guide.keywords) ? guide.keywords.join(', ') : guide.keywords,
    authors: [{ name: 'Triveni Cabs™' }],
    metadataBase: new URL(BASE_URL),
    alternates: { canonical: guide.path },
    openGraph: {
      title: guide.ogTitle || guide.metaTitle || guide.title,
      description: guide.metaDescription,
      type: 'article',
      locale: 'en_IN',
      url,
      siteName: 'Triveni Cabs™',
      publishedTime: guide.publishedOn,
      modifiedTime: guide.updatedOn || guide.publishedOn,
      images: [{ url: image, width: 1200, height: 630, alt: guide.heroAlt || guide.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: guide.ogTitle || guide.metaTitle || guide.title,
      description: guide.metaDescription,
      images: [image],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
    },
  };
}

const VEHICLES = [
  { key: 'sedan', vehicle: 'Sedan (Swift Dzire, Etios)', seats: '4' },
  { key: 'ertiga', vehicle: 'Ertiga / SUV', seats: '6' },
  { key: 'innova', vehicle: 'Innova Crysta', seats: '6–7' },
  { key: 'tempo', vehicle: 'Tempo Traveller (12-seater)', seats: '12' },
];

const inr = (n) => `₹${Number(n).toLocaleString('en-IN')}`;

/** Sedan fare for a one-way distance under the canonical policy, formatted. */
export function sedanFare(km) {
  const n = Number(km);
  if (!n) return null;
  return inr(fareFor(n, 'sedan').amount);
}

/** Round-trip sedan fare for a trip of `days` days, formatted (300 km/day minimum). */
export function sedanRoundTrip(km, days = 2) {
  const n = Number(km);
  if (!n) return null;
  const one = fareFor(n, 'sedan').amount;
  return inr(Math.max(one * 2, Number(days) * 300 * PER_KM.sedan));
}

/**
 * Fare rows for a guide's fare box, computed from the canonical per-km policy.
 * A guide may pass explicit rows instead (festival packages, multi-day trips).
 */
export function computeFareRows(fare) {
  if (!fare) return [];
  if (Array.isArray(fare.rows) && fare.rows.length) return fare.rows;
  const km = Number(fare.distanceKm);
  if (!km) return [];
  const days = Number(fare.days || 1);
  return VEHICLES.map((v) => {
    const one = fareFor(km, v.key).amount;
    const round = fare.roundTrip ? Math.max(one * 2, days * 300 * PER_KM[v.key]) : null;
    return {
      vehicle: v.vehicle,
      seats: v.seats,
      rate: `${inr(PER_KM[v.key])}/km`,
      fare: inr(one),
      ...(round ? { roundTrip: inr(round) } : {}),
    };
  });
}

function faqSchema(guide) {
  const faqs = (guide.faqs || []).filter((f) => f.question && f.answer);
  if (!faqs.length) return null;
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': `${BASE_URL}${guide.path}#faq`,
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  };
}

function breadcrumbSchema(guide) {
  const trail = [{ name: 'Home', url: '/' }, ...(guide.crumbs || []), { name: guide.crumbName || guide.title, url: guide.path }];
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: trail.map((t, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: t.name,
      item: `${BASE_URL}${t.url}`,
    })),
  };
}

function itemListSchema(guide) {
  const places = (guide.bands || []).flatMap((b) => b.places || []);
  if (places.length < 2) return null;
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    '@id': `${BASE_URL}${guide.path}#list`,
    name: guide.listName || guide.title,
    numberOfItems: places.length,
    itemListElement: places.map((p, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: p.name,
      ...(p.href ? { url: `${BASE_URL}${p.href}` } : {}),
    })),
  };
}

function tripSchema(guide) {
  const t = guide.schema?.trip;
  if (!t) return null;
  const node = {
    '@context': 'https://schema.org',
    '@type': 'TouristTrip',
    '@id': `${BASE_URL}${guide.path}#trip`,
    name: t.name || guide.title,
    description: t.description || guide.metaDescription,
    touristType: t.touristType || 'Road travellers',
    url: `${BASE_URL}${guide.path}`,
    provider: { '@id': `${BASE_URL}/#organization` },
  };
  if (t.lowPrice && t.highPrice) {
    node.offers = { '@type': 'AggregateOffer', lowPrice: String(t.lowPrice), highPrice: String(t.highPrice), priceCurrency: 'INR' };
  }
  if (Array.isArray(t.itinerary) && t.itinerary.length) {
    node.itinerary = {
      '@type': 'ItemList',
      itemListElement: t.itinerary.map((s, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        item: { '@type': 'TouristAttraction', name: s.name, description: s.text },
      })),
    };
  }
  return node;
}

function eventSchemas(guide) {
  const events = guide.schema?.events;
  if (!Array.isArray(events) || !events.length) return [];
  return events.map((e) => ({
    '@context': 'https://schema.org',
    '@type': 'Event',
    '@id': `${BASE_URL}${guide.path}#event-${e.id}`,
    name: e.name,
    description: e.description,
    startDate: e.startDate,
    endDate: e.endDate || e.startDate,
    eventStatus: 'https://schema.org/EventScheduled',
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    image: `${BASE_URL}${e.image || guide.heroImage || OG_FALLBACK}`,
    url: `${BASE_URL}${guide.path}`,
    location: {
      '@type': 'Place',
      name: e.locationName,
      address: { '@type': 'PostalAddress', addressLocality: e.locality, addressRegion: e.region, addressCountry: 'IN' },
    },
    organizer: { '@type': 'Organization', name: 'Triveni Cabs™', url: BASE_URL, telephone: '+91-7668570551' },
    performer: { '@type': 'Organization', name: e.performer || e.locationName },
    offers: {
      '@type': 'Offer',
      url: `${BASE_URL}${e.offerUrl || guide.path}`,
      price: String(e.price),
      priceCurrency: 'INR',
      availability: 'https://schema.org/InStock',
      validFrom: e.validFrom || guide.publishedOn,
    },
  }));
}

function howToSchema(guide) {
  const h = guide.schema?.howTo;
  if (!h) return null;
  return getHowToSchema({
    name: h.name,
    description: h.description,
    totalTime: h.totalTime || 'PT10M',
    estimatedCost: h.estimatedCost || null,
    steps: h.steps || [],
  });
}

function placeSchemas(guide) {
  const slugs = guide.schema?.places || [];
  return slugs
    .map((c) => getCityPlaceSchema(c, { idSlug: `${guide.slug}-${c}`, image: guide.heroImage }))
    .filter(Boolean);
}

/** Every JSON-LD node a guide page emits, in order. */
export function buildGuideSchemaGraph(guide) {
  const article = getArticleSchema({
    slug: guide.path.replace(/^\//, ''),
    headline: guide.title,
    description: guide.metaDescription,
    image: guide.heroImage || OG_FALLBACK,
    datePublished: guide.publishedOn,
    dateModified: guide.updatedOn || guide.publishedOn,
    authorName: guide.author || 'editorial',
    type: 'Article',
    speakableSelectors: ['.speakable-headline', '.direct-answer', '.key-facts', '.speakable-faq-first'],
  });
  return [
    article,
    breadcrumbSchema(guide),
    faqSchema(guide),
    itemListSchema(guide),
    tripSchema(guide),
    howToSchema(guide),
    ...eventSchemas(guide),
    ...placeSchemas(guide),
  ].filter(Boolean);
}
