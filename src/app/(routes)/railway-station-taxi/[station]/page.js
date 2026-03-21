import { notFound } from 'next/navigation';
import Script from 'next/script';
import { railwayStations, getAllStationSlugs } from '@/utilis/railwayStationData';
import { COMPANY_INFO, AGGREGATE_RATING, BASE_URL } from '@/lib/seo/constants';
import RailwayStationClient from '@/components/railway/RailwayStationClient';
import AEOHead from '@/components/seo/AEOHead';

export const revalidate = false;
export const dynamicParams = false;

export async function generateStaticParams() {
  return getAllStationSlugs().map((station) => ({ station }));
}

export async function generateMetadata({ params }) {
  const { station: slug } = await params;
  const station = railwayStations[slug];
  if (!station) return {};

  const lowestFare = station.destinations.reduce((min, d) => Math.min(min, d.sedanFare), Infinity);
  const title = `${station.name} Taxi from \u20B9${lowestFare} | Platform Pickup | 24/7`;
  const description = `Taxi from ${station.name} starting \u20B9${lowestFare}. Meet at platform exit, AC sedan/SUV, fixed fares, no surge. ${station.destinations.length}+ destinations. Call 7668570551.`;

  return {
    title,
    description,
    keywords: `${station.name.toLowerCase()} taxi, ${station.city.toLowerCase()} station cab, ${station.stationCode} station taxi, ${station.city.toLowerCase()} railway station cab service, taxi from ${station.city.toLowerCase()} station, ${station.city.toLowerCase()} station to city taxi, cab booking ${station.name.toLowerCase()}, prepaid taxi ${station.city.toLowerCase()} station, ${station.city.toLowerCase()} station taxi fare, railway station taxi ${station.city.toLowerCase()}, ${station.city.toLowerCase()} station pickup, ${station.city.toLowerCase()} station drop taxi`,
    authors: [{ name: 'Triveni Cabs' }],
    creator: 'Triveni Cabs',
    publisher: 'Triveni Cabs',
    metadataBase: new URL('https://www.trivenicabs.in'),
    alternates: { canonical: `/railway-station-taxi/${slug}` },
    openGraph: {
      title: `${station.name} Taxi Service | Fixed Fare from \u20B9${lowestFare}`,
      description: `24/7 taxi from ${station.name}. Fixed fares, AC vehicles, meet at platform exit. Sedan, SUV options available. Call 7668570551.`,
      type: 'website',
      locale: 'en_IN',
      url: `https://www.trivenicabs.in/railway-station-taxi/${slug}`,
      siteName: 'Triveni Cabs',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${station.name} Taxi | \u20B9${lowestFare} Fixed Fare`,
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
        "streetAddress": "366 Dandupura near Tajganj",
        "addressLocality": "Agra",
        "postalCode": "282006",
        "addressCountry": "IN",
      },
      "priceRange": `\u20B9${lowestFare} - \u20B9${highestFare}`,
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
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "10000",
      "bestRating": "5",
      "worstRating": "1"
    },
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
      "streetAddress": "366 Dandupura near Tajganj",
      "addressLocality": "Agra",
      "addressRegion": "UP",
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
    "priceRange": `\u20B9${lowestFare} - \u20B9${highestFare}`,
  };

  // Product schema — price rich snippets
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": `${station.name} Taxi Service`,
    "description": `Book taxi from ${station.name} starting ₹${lowestFare}. AC sedan & SUV, fixed fares, 24/7 platform pickup, ${station.destinations.length}+ destinations.`,
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
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": String(AGGREGATE_RATING.ratingValue),
      "reviewCount": String(AGGREGATE_RATING.reviewCount),
      "bestRating": "5",
      "worstRating": "1"
    }
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
      { "@type": "HowToStep", "position": 2, "name": "Choose Vehicle", "text": `Select AC Sedan (₹${lowestFare}+) or SUV based on passengers and luggage.` },
      { "@type": "HowToStep", "position": 3, "name": "Get Confirmation", "text": "Receive instant booking confirmation with driver name, phone number, and vehicle number." },
      { "@type": "HowToStep", "position": 4, "name": "Meet at Platform Exit", "text": `Your driver meets you at ${station.name} main exit gate with a name placard. No waiting, no surge.` }
    ]
  };

  return (
    <>
      <Script id="station-taxi-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(taxiServiceSchema) }} strategy="beforeInteractive" />
      <Script id="station-breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} strategy="beforeInteractive" />
      <Script id="station-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} strategy="beforeInteractive" />
      <Script id="station-local-business-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} strategy="beforeInteractive" />
      <Script id="station-product-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} strategy="beforeInteractive" />
      <Script id="station-howto-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} strategy="beforeInteractive" />

      <AEOHead pageType="station" data={{ url: `/railway-station-taxi/${slug}`, title: `${station.name} Taxi Service`, city: station.city }} />
      <RailwayStationClient station={station} slug={slug} />
    </>
  );
}
