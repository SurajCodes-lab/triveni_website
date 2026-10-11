import { notFound } from 'next/navigation';
import { railwayStations, getAllStationSlugs, getNearbyStations } from '@/utilis/railwayStationData';
import { COMPANY_INFO, AGGREGATE_RATING, BASE_URL } from '@/lib/seo/constants';
import RailwayStationClient from '@/components/railway/RailwayStationClient';
import AEOHead from '@/components/seo/AEOHead';
import { getRatingAndReviews } from '@/lib/seo/review-helpers';
import { getSpeakableSchema, getArticleSchema, getCityPlaceSchema, getTodayDate } from '@/lib/seo/speakable-helpers';
import { tightenTitle } from '@/lib/seo/serp-ctr';
import { getContentUpdatedOn } from '@/lib/seo/content-updates';
import { groupDigits } from '@/utilis/pricing';
export const revalidate = 3600;
export const dynamicParams = false;

export async function generateStaticParams() {
  return getAllStationSlugs().map((station) => ({ station }));
}

export async function generateMetadata({ params }) {
  const { station: slug } = await params;
  const station = railwayStations[slug];
  if (!station) return {};

  const lowestFare = station.destinations.reduce((min, d) => Math.min(min, d.sedanFare), Infinity);
  const title = tightenTitle(`${station.name} Taxi from \u20B9${groupDigits(lowestFare)} | Platform Pickup | 24/7`);
  const description = `Taxi from ${station.name} starting \u20B9${groupDigits(lowestFare)}. Meet at platform exit, AC sedan/SUV, fixed fares, no surge. ${station.destinations.length}+ destinations. Call 7668570551.`;

  return {
    title,
    description,
    keywords: `${station.name.toLowerCase()} taxi, ${station.city.toLowerCase()} station cab, ${station.stationCode} station taxi, ${station.city.toLowerCase()} railway station cab service, taxi from ${station.city.toLowerCase()} station, ${station.city.toLowerCase()} station to city taxi, cab booking ${station.name.toLowerCase()}, prepaid taxi ${station.city.toLowerCase()} station, ${station.city.toLowerCase()} station taxi fare, railway station taxi ${station.city.toLowerCase()}, ${station.city.toLowerCase()} station pickup, ${station.city.toLowerCase()} station drop taxi`,
    authors: [{ name: 'Triveni Cabs™' }],
    creator: 'Triveni Cabs™',
    publisher: 'Triveni Cabs™',
    metadataBase: new URL('https://www.trivenicabs.in'),
    alternates: { canonical: `/railway-station-taxi/${slug}` },
    openGraph: {
      title: `${station.name} Taxi Service | Fixed Fare from \u20B9${groupDigits(lowestFare)}`,
      description: `24/7 taxi from ${station.name}. Fixed fares, AC vehicles, meet at platform exit. Sedan, SUV options available. Call 7668570551.`,
      type: 'website',
      locale: 'en_IN',
      url: `https://www.trivenicabs.in/railway-station-taxi/${slug}`,
      siteName: 'Triveni Cabs™',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${station.name} Taxi | \u20B9${groupDigits(lowestFare)} Fixed Fare`,
      description: `Book cab from ${station.name}. 24/7 service, fixed fares, meet at platform.`,
      creator: '@trivenicabs',
      site: '@trivenicabs',
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

export default async function RailwayStationPage({ params }) {
  const { station: slug } = await params;
  const station = railwayStations[slug];

  if (!station) {
    notFound();
  }

  const lowestFare = station.destinations.reduce((min, d) => Math.min(min, d.sedanFare), Infinity);
  const highestFare = station.destinations.reduce((max, d) => Math.max(max, d.suvFare), 0);

  // Deterministic per-slug rating + named reviews (NOT the brand-level 10K).
  const ratingReviews = getRatingAndReviews(slug, 'bus');
  // City geo grounding for AEO/GEO.
  const citySlug = String(station.city || '').toLowerCase().replace(/\s+/g, '-');
  const cityPlaceSchema = getCityPlaceSchema(citySlug, {
    idSlug: `railway-station-taxi/${slug}`,
    description: `${station.name} (${station.stationCode}) railway station in ${station.city}, India. Triveni Cabs™ provides 24/7 fixed-fare taxi pickup at the platform exit.`,
  });

  // JSON-LD Schemas
  const taxiServiceSchema = {
    "@context": "https://schema.org",
    "@type": "TaxiService",
    "name": `Triveni Cabs - ${station.name} Taxi Service`,
    "description": `Reliable 24/7 taxi service from ${station.name} (${station.stationCode}). Fixed fares, AC vehicles, meet at platform exit.`,
    "provider": {
      "@type": "LocalBusiness",
      "name": "Triveni Cabs",
      "telephone": "+91-7668570551",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "366, Dandupura, near Tajganj",
        "addressLocality": "Agra",
        "postalCode": "282006",
        "addressCountry": "IN",
      },
      "priceRange": `\u20B9${groupDigits(lowestFare)} - \u20B9${groupDigits(highestFare)}`,
    },
    "areaServed": {
      "@type": "Place",
      "name": station.city,
    },
    "offers": {
      "@type": "AggregateOffer",
      "lowPrice": lowestFare.toString(),
      "highPrice": highestFare.toString(),
      "priceCurrency": "INR",
    },
    "serviceType": "Railway Station Taxi",
    ...ratingReviews,
    "availableChannel": {
      "@type": "ServiceChannel",
      "servicePhone": {
        "@type": "ContactPoint",
        "telephone": "+91-7668570551",
        "contactType": "customer service",
        "availableLanguage": ["English", "Hindi"],
      },
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" },
      { "@type": "ListItem", "position": 2, "name": "Railway Station Taxi", "item": "https://www.trivenicabs.in/railway-station-taxi" },
      { "@type": "ListItem", "position": 3, "name": `${station.name} Taxi`, "item": `https://www.trivenicabs.in/railway-station-taxi/${slug}` },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "speakable": getSpeakableSchema(['.speakable-headline', '.speakable-lead', '.speakable-faq-first']),
    "mainEntity": station.faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
      },
    })),
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Triveni Cabs",
    "description": `24/7 taxi service from ${station.name}, ${station.city}. Fixed fares, AC vehicles, professional drivers.`,
    "telephone": "+91-7668570551",
    "url": "https://www.trivenicabs.in",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "366, Dandupura, near Tajganj",
      "addressLocality": "Agra",
      "addressRegion": "Uttar Pradesh",
      "postalCode": "282006",
      "addressCountry": "IN",
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "27.1767",
      "longitude": "78.0081",
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59",
    },
    "priceRange": `\u20B9${groupDigits(lowestFare)} - \u20B9${groupDigits(highestFare)}`,
  };

  // Product schema — price rich snippets
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    // Week 53: Google's Merchant listings report treats a missing `image`
    // as a critical error. This is an asset the page already uses.

    "image": `${BASE_URL}/images/car/swift_dzire.jpg`,
    "name": `${station.name} Taxi Service`,
    "description": `Book taxi from ${station.name} starting ₹${groupDigits(lowestFare)}. AC sedan & SUV, fixed fares, 24/7 platform pickup, ${station.destinations.length}+ destinations.`,
    "brand": { "@type": "Brand", "name": COMPANY_INFO.name },
    "offers": {
      "@type": "AggregateOffer",
      "lowPrice": lowestFare,
      "highPrice": highestFare,
      "priceCurrency": "INR",
      "offerCount": station.destinations.length,
      "availability": "https://schema.org/InStock",
      "priceValidUntil": new Date(Date.now() + 90 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
      "seller": { "@type": "Organization", "name": COMPANY_INFO.name }
    },
    ...ratingReviews
  };

  // HowTo schema — booking process
  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": `How to Book Taxi from ${station.name}`,
    "description": `Step-by-step guide to book a cab from ${station.name}, ${station.city}.`,
    "totalTime": "PT3M",
    "estimatedCost": { "@type": "MonetaryAmount", "currency": "INR", "value": lowestFare },
    "step": [
      { "@type": "HowToStep", "position": 1, "name": "Call Before Arrival", "text": `Call ${COMPANY_INFO.phone.display} or WhatsApp at ${COMPANY_INFO.phone.whatsapp} with your train number and arrival time at ${station.name}.` },
      { "@type": "HowToStep", "position": 2, "name": "Choose Vehicle", "text": `Select AC Sedan (₹${groupDigits(lowestFare)}+) or SUV based on passengers and luggage.` },
      { "@type": "HowToStep", "position": 3, "name": "Get Confirmation", "text": "Receive instant booking confirmation with driver name, phone number, and vehicle number." },
      { "@type": "HowToStep", "position": 4, "name": "Meet at Platform Exit", "text": `Your driver meets you at ${station.name} main exit gate with a name placard. No waiting, no surge.` }
    ]
  };

  // Station-native GEO: the railway station as a TrainStation entity, grounded
  // to the city's real coordinates and chained into the City place.
  const trainStationSchema = {
    "@context": "https://schema.org",
    "@type": "TrainStation",
    "@id": `https://www.trivenicabs.in/railway-station-taxi/${slug}#trainstation`,
    "name": station.name,
    ...(station.stationCode ? { "alternateName": station.stationCode } : {}),
    "description": `${station.name} (${station.stationCode || ''}) — railway station in ${station.city}. Triveni Cabs offers 24/7 fixed-fare taxi pickup at the platform exit.`,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": station.city,
      ...(cityPlaceSchema?.address?.addressRegion ? { "addressRegion": cityPlaceSchema.address.addressRegion } : {}),
      "addressCountry": "IN",
    },
    ...(cityPlaceSchema?.geo ? { "geo": cityPlaceSchema.geo } : {}),
    ...(cityPlaceSchema ? { "containedInPlace": { "@id": cityPlaceSchema["@id"] } } : {}),
    "publicAccess": true,
  };

  // Article schema — editorial entity for AEO/GEO + freshness, Speakable-wired.
  const articleSchema = getArticleSchema({
    slug: `railway-station-taxi/${slug}`,
    headline: `${station.name} Taxi — Fixed Fares, Platform Pickup & 24/7 Cabs in ${station.city}`,
    description: `How to book a taxi from ${station.name} (${station.stationCode || ''}), ${station.city}: fixed fares from ₹${groupDigits(lowestFare)}, prepaid platform pickup, night availability, AC sedan & SUV options and verified drivers.`,
    image: '/images/triveni-cabs-og.jpg',
    datePublished: '2026-01-01',
    dateModified: (getContentUpdatedOn(`/railway-station-taxi/${slug}`) || getTodayDate()),
    authorName: 'editorial',
    type: 'Article',
    speakableSelectors: ['.speakable-headline', '.speakable-lead', '.speakable-faq-first'],
  });

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(taxiServiceSchema) }} strategy="afterInteractive" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} strategy="afterInteractive" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} strategy="afterInteractive" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} strategy="afterInteractive" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} strategy="afterInteractive" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} strategy="afterInteractive" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(trainStationSchema) }} strategy="afterInteractive" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} strategy="afterInteractive" />
      {cityPlaceSchema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(cityPlaceSchema) }} strategy="afterInteractive" />
      )}

      <AEOHead pageType="station" data={{ url: `/railway-station-taxi/${slug}`, title: `${station.name} Taxi Service`, city: station.city }} />
      {/* Neighbours resolved here so the 121 KB station dataset stays server-side. */}
      <RailwayStationClient station={station} slug={slug} nearbyStations={getNearbyStations(slug)} />
    </>
  );
}
