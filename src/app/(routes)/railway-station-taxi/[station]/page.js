import { notFound } from 'next/navigation';
import { railwayStations, getAllStationSlugs } from '@/utilis/railwayStationData';
import RailwayStationClient from '@/components/railway/RailwayStationClient';

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
  const title = `${station.name} Cab Service | 24/7 Taxi | \u20B9${lowestFare} | Triveni Cabs`;
  const description = `Book reliable taxi from ${station.name} (${station.stationCode}). ${station.platforms} platforms, ${station.destinations.length}+ destinations. Sedan from \u20B9${lowestFare}. 24/7 service, fixed fares, meet at platform. Call 7668570551.`;

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
      "reviewCount": "3000",
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

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(taxiServiceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />

      <RailwayStationClient station={station} slug={slug} />
    </>
  );
}
