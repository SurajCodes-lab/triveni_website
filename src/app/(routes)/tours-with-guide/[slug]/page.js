// src/app/(routes)/tours-with-guide/[slug]/page.js
// Dynamic route for the 80 production Tours-With-Guide pages.

import { notFound } from 'next/navigation';
import {
  toursWithGuideData,
  getAllTourSlugs,
  getTourBySlug,
} from '@/utilis/toursWithGuideData';

/**
 * Generate a short, deterministic SKU under Google Merchant Listing's
 * 40-char limit. The previous SKU used the raw slug (e.g.,
 * "same-day-taj-mahal-from-delhi-with-german-speaking-guide" = 65 chars)
 * which triggered "Invalid string length in field 'sku'" in Search Console.
 *
 * Format: TWG-{8-char-base36-hash}-{6-char-short-tag}
 * Example: "same-day-taj-mahal-from-delhi-with-german-speaking-guide"
 *       → "TWG-2k7q9pxr-tajdel" (max ~22 chars, well under 40)
 */
function generateSku(slug) {
  // Base-36 hash for deterministic uniqueness
  let hash = 0;
  for (let i = 0; i < slug.length; i++) {
    hash = ((hash << 5) - hash) + slug.charCodeAt(i);
    hash |= 0;
  }
  const hashStr = Math.abs(hash).toString(36).padStart(8, '0').slice(0, 8);

  // Short readable tag from first significant words (skip filler)
  const filler = new Set(['a','an','the','of','to','from','for','with','and','by','on','in','at','same','day']);
  const tag = slug.split('-')
    .filter(w => !filler.has(w))
    .slice(0, 3)
    .map(w => w.slice(0, 3))
    .join('')
    .slice(0, 9);

  return `TWG-${hashStr}-${tag}`.slice(0, 40);
}
import {
  getThingsToDo,
  getPickupPoints,
  getGuideCredentials,
  getPriceBreakdown,
  getFaqs,
  getReviews,
  getReviewCount,
  getRelatedTours,
  inclusionExclusion,
  getDirectAnswer,
  getVehicleComparison,
  getLanguageAvailability,
  getBookingSteps,
  getMonumentPlaces,
} from '@/utilis/toursWithGuideEnrichment';
import {
  getSpeakableSchema,
  getArticleSchema,
  getHowToSchema,
  getTodayDate,
} from '@/lib/seo/speakable-helpers';
import { generateTourWithGuideMetadata } from '@/lib/seo/metadata-factory';
import ToursWithGuideClient from './ToursWithGuideClient';

export const revalidate = 3600;

export async function generateStaticParams() {
  return getAllTourSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const record = getTourBySlug(slug);
  if (!record) return {};
  return generateTourWithGuideMetadata({
    slug: record.slug,
    city: record.city,
    vehicle: record.vehicle,
    monument: record.monuments?.[0],
    // Each tour ships a distinct headline; without it three Taj Mahal tours
    // collapsed onto the identical title "Taj Mahal ₹7,000 — Vehicle + Licensed Guide".
    headline: record.headline,
    bundledFare: record.bundledFare,
    guideFee: record.guideFee,
    duration: record.duration,
    guideLanguage: record.guideLanguage || 'English',
    group: record.group,
    heroImage: record.heroImage,
    intro: record.intro,
  });
}

export default async function ToursWithGuideSlugPage({ params }) {
  const { slug } = await params;
  const record = getTourBySlug(slug);
  if (!record) return notFound();

  const allTours = Object.values(toursWithGuideData);
  const things = getThingsToDo(record.cityKey);
  const pickups = getPickupPoints(record.cityKey);
  const guideCred = getGuideCredentials(record.guideLanguage || 'English');
  const priceBd = getPriceBreakdown(record);
  const faqs = getFaqs(record);
  const reviews = getReviews(record.slug, 9);
  const reviewCount = getReviewCount(record.slug);
  const incExc = inclusionExclusion(record);
  const related = getRelatedTours(record, allTours, 6);
  const directAnswer = getDirectAnswer(record);
  const vehicleComparison = getVehicleComparison(record);
  const languageAvailability = getLanguageAvailability(record);
  const bookingSteps = getBookingSteps(record);

  const baseUrl = 'https://www.trivenicabs.in';
  const url = `${baseUrl}/tours-with-guide/${record.slug}`;
  const heroImageAbs = record.heroImage?.startsWith('http')
    ? record.heroImage
    : `${baseUrl}${record.heroImage}`;

  const today = getTodayDate();

  // ===== GEO ENTITY GRAPH: resolve this tour's monuments to real Places =====
  // Each matched landmark becomes a TouristAttraction node with GeoCoordinates +
  // PostalAddress so search/AI engines bind the tour to the physical monument
  // (knowledge-panel + "near me"/place signals). Bazaars/workshops/food streets
  // that have no MONUMENT_GEO entry are skipped gracefully.
  const monumentPlaces = getMonumentPlaces(record);

  const placeNodes = monumentPlaces.map((m) => ({
    '@type': ['TouristAttraction', m.type],
    '@id': `${url}#place-${m.key.replace(/[^a-z0-9]+/g, '-')}`,
    name: m.name,
    description: m.description,
    geo: {
      '@type': 'GeoCoordinates',
      latitude: m.lat,
      longitude: m.lng,
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: m.city,
      addressRegion: m.region,
      addressCountry: 'IN',
    },
    isAccessibleForFree: false,
    touristType: ['Families', 'Couples', 'International Tourists', 'History Enthusiasts'],
    ...(m.unesco && { isPartOf: { '@type': 'Place', name: 'UNESCO World Heritage Site' } }),
  }));

  // Primary monument → city → region → India containedInPlace chain (one node).
  const primary = monumentPlaces[0];
  const containedChainNode = primary
    ? {
        '@type': ['TouristAttraction', primary.type],
        '@id': `${url}#primary-place-chain`,
        name: primary.name,
        containedInPlace: {
          '@type': ['City', 'Place'],
          name: primary.city,
          containedInPlace: {
            '@type': ['State', 'AdministrativeArea'],
            name: primary.region,
            containedInPlace: {
              '@type': 'Country',
              name: 'India',
              identifier: 'IN',
            },
          },
        },
      }
    : null;

  // Article schema — E-E-A-T + Speakable for voice/AI answer engines.
  const articleSchema = getArticleSchema({
    slug: `tours-with-guide/${record.slug}`,
    headline: record.headline,
    description: directAnswer,
    image: heroImageAbs,
    datePublished: '2026-04-29',
    dateModified: today,
    authorName: 'editorial',
    speakableSelectors: ['.speakable-headline', '.speakable-lead', '.speakable-faq-first'],
  });

  // HowTo schema — "How to book {headline}".
  const howToSchema = getHowToSchema({
    name: `How to Book the ${record.headline}`,
    description: `Book the ${record.headline} in 5 steps — bundled fare ₹${record.bundledFare?.toLocaleString('en-IN')} including a licensed ${record.guideLanguage || 'English'}-speaking guide.`,
    totalTime: 'PT10M',
    estimatedCost: { currency: 'INR', value: record.bundledFare },
    steps: bookingSteps.map((s) => ({ name: s.name, text: s.text })),
  });

  // Comparison schema — vehicle options for this tour (Table + Article).
  const comparisonSchema = [
    {
      '@context': 'https://schema.org',
      '@type': 'Table',
      '@id': `${url}#vehicle-comparison-table`,
      about: `Vehicle options for the ${record.headline}`,
      description: `Compare sedan, MPV, SUV and tempo traveller options for this guided ${record.city} tour by seats, fare and best-for.`,
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      '@id': `${url}#vehicle-comparison-article`,
      headline: `Which vehicle should you choose for the ${record.headline}?`,
      description: `Sedan vs MPV vs SUV vs tempo traveller for this guided tour — compared by passenger capacity, bundled fare and ideal traveller group.`,
      datePublished: '2026-04-29',
      dateModified: today,
      author: { '@id': `${baseUrl}/#organization` },
      publisher: { '@id': `${baseUrl}/#organization` },
      about: vehicleComparison.map((v) => ({ '@type': 'Product', name: v.name })),
      mentions: vehicleComparison.map((v) => v.name),
    },
  ];

  // ============== Single @graph JSON-LD (Week-26 pattern) ==============
  const graph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${url}#webpage`,
        url,
        name: record.headline,
        description: record.intro,
        inLanguage: 'en-IN',
        isPartOf: { '@id': `${baseUrl}#website` },
        breadcrumb: { '@id': `${url}#breadcrumb` },
        primaryImageOfPage: {
          '@type': 'ImageObject',
          url: heroImageAbs,
          width: 1200,
          height: 630,
          caption: record.headline,
        },
        datePublished: '2026-04-29T00:00:00+05:30',
        dateModified: new Date().toISOString(),
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${url}#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: baseUrl },
          { '@type': 'ListItem', position: 2, name: 'Tours With Guide', item: `${baseUrl}/tours-with-guide` },
          ...(record.group === 'B'
            ? [{ '@type': 'ListItem', position: 3, name: `${record.guideLanguage}-Speaking Guide`, item: url }]
            : record.group === 'C'
            ? [
                { '@type': 'ListItem', position: 3, name: `${record.guideLanguage}-Speaking Guide`, item: `${baseUrl}/tours-with-guide/by-guide-language` },
                { '@type': 'ListItem', position: 4, name: record.headline, item: url },
              ]
            : [
                { '@type': 'ListItem', position: 3, name: record.city, item: `${baseUrl}/tours-with-guide` },
                { '@type': 'ListItem', position: 4, name: record.headline, item: url },
              ]),
        ],
      },
      {
        '@type': 'TouristTrip',
        '@id': `${url}#trip`,
        name: record.headline,
        description: record.intro,
        url,
        touristType: ['Families', 'Couples', 'Solo Travellers', 'Groups', 'International Tourists'],
        provider: { '@id': `${baseUrl}#localbusiness` },
        // Bind the trip to the actual physical landmarks it visits (GEO signal).
        ...(placeNodes.length && {
          containsPlace: placeNodes.map((p) => ({ '@id': p['@id'] })),
        }),
        offers: {
          '@type': 'Offer',
          priceCurrency: 'INR',
          price: record.bundledFare,
          availability: 'https://schema.org/InStock',
          url,
          priceSpecification: {
            '@type': 'PriceSpecification',
            priceCurrency: 'INR',
            price: record.bundledFare,
            description: `Bundled fare: ${record.vehicle} (₹${record.vehicleFare}) + licensed ${record.guideLanguage || 'English'}-speaking guide (₹${record.guideFee})`,
          },
          validFrom: new Date().toISOString(),
        },
        // Geo-referenced monument itinerary: each item points at the real Place
        // node (with GeoCoordinates) instead of a bare name. Falls back to the
        // day-by-day stop list when no monuments resolve to known landmarks.
        itinerary: placeNodes.length
          ? {
              '@type': 'ItemList',
              name: `Monuments visited on the ${record.headline}`,
              numberOfItems: placeNodes.length,
              itemListElement: placeNodes.map((p, i) => ({
                '@type': 'ListItem',
                position: i + 1,
                item: {
                  '@id': p['@id'],
                  '@type': p['@type'],
                  name: p.name,
                },
              })),
            }
          : (record.itinerary || []).map((d, i) => ({
              '@type': 'ItemList',
              position: i + 1,
              name: d.day,
              itemListElement: d.stops.map((s, j) => ({
                '@type': 'ListItem',
                position: j + 1,
                name: s.stop,
                description: s.detail,
              })),
            })),
      },
      {
        '@type': 'Product',
        '@id': `${url}#product`,
        name: record.headline,
        description: record.intro,
        image: heroImageAbs,
        brand: { '@type': 'Brand', name: 'Triveni Cabs' },
        // SKU: short deterministic identifier under Google's 40-char limit
        // (was record.slug — 65 chars on long URLs — triggered GSC warning)
        sku: generateSku(record.slug),
        mpn: generateSku(record.slug),
        productID: generateSku(record.slug),
        offers: {
          '@type': 'Offer',
          priceCurrency: 'INR',
          price: record.bundledFare,
          availability: 'https://schema.org/InStock',
          url,
        },
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.9',
          reviewCount: String(reviewCount),
          bestRating: '5',
          worstRating: '1',
        },
        review: reviews.map((r) => ({
          '@type': 'Review',
          author: { '@type': 'Person', name: r.author },
          reviewRating: { '@type': 'Rating', ratingValue: r.stars, bestRating: 5 },
          reviewBody: r.body,
          datePublished: r.date,
        })),
      },
      {
        '@type': 'FAQPage',
        '@id': `${url}#faq`,
        speakable: getSpeakableSchema(['.speakable-headline', '.speakable-lead', '.speakable-faq-first']),
        mainEntity: faqs.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      },
      {
        '@type': 'Service',
        '@id': `${url}#service`,
        serviceType: 'Tours With Guide',
        name: record.headline,
        description: record.intro,
        provider: { '@id': `${baseUrl}#localbusiness` },
        ...(record.guideLanguage && { availableLanguage: [record.guideLanguage] }),
        offers: {
          '@type': 'Offer',
          priceCurrency: 'INR',
          price: record.bundledFare,
        },
      },
      {
        '@type': 'Person',
        '@id': `${url}#leadguide`,
        name: 'Triveni Licensed Lead Guide',
        jobTitle: 'Ministry of Tourism Approved Tourist Guide',
        worksFor: { '@id': `${baseUrl}#localbusiness` },
        knowsLanguage: record.guideLanguage ? [record.guideLanguage, 'English', 'Hindi'] : ['English', 'Hindi'],
        hasCredential: {
          '@type': 'EducationalOccupationalCredential',
          name: 'Regional Level Tourist Guide License',
          credentialCategory: 'Government License',
          recognizedBy: { '@type': 'GovernmentOrganization', name: 'Ministry of Tourism, Government of India' },
        },
      },
      // ===== Article (E-E-A-T + Speakable for voice/AI answers) =====
      {
        ...articleSchema,
        '@context': undefined,
      },
      // ===== HowTo: how to book this guided tour =====
      {
        ...howToSchema,
        '@context': undefined,
      },
      // ===== Comparison: vehicle options for this tour (Table + Article) =====
      ...comparisonSchema.map((node) => ({ ...node, '@context': undefined })),
      // ===== GEO: real monument entities (TouristAttraction + GeoCoordinates) =====
      ...placeNodes,
      // ===== GEO: primary monument → city → state → India place chain =====
      ...(containedChainNode ? [containedChainNode] : []),
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
      />
      <ToursWithGuideClient
        record={record}
        things={things}
        pickups={pickups}
        guideCred={guideCred}
        priceBd={priceBd}
        faqs={faqs}
        reviews={reviews}
        reviewCount={reviewCount}
        incExc={incExc}
        related={related}
        directAnswer={directAnswer}
        vehicleComparison={vehicleComparison}
        languageAvailability={languageAvailability}
        bookingSteps={bookingSteps}
      />
    </>
  );
}
