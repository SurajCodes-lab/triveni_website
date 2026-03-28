import { notFound } from 'next/navigation';
import { getTravelByCarRoute, getAllTravelByCarSlugs, getRelatedTravelByCarRoutes } from '@/utilis/travelByCarData';
import TravelByCarClient from '@/components/travel-by-car/TravelByCarClient';
import AEOHead from '@/components/seo/AEOHead';
import { getOgImageForSlug } from '@/lib/seo/ogImageMap';

export const revalidate = false;
export const dynamicParams = false;

export async function generateStaticParams() {
  return getAllTravelByCarSlugs().map((slug) => ({ route: slug }));
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const { route: slug } = resolvedParams;
  const route = getTravelByCarRoute(slug);

  if (!route) {
    return { title: 'Travel Guide Not Found' };
  }

  const originLower = route.origin.toLowerCase();
  const destLower = route.destination.toLowerCase();
  const title = `${route.origin} to ${route.destination} by Car | Road Trip Guide 2026 — Triveni Cabs`;
  const description = `${route.origin} to ${route.destination} by car: ${route.totalDistance} km, ${route.drivingTime} drive. Complete road map, driving tips, fuel stops, seasonal warnings, and cab fares from ${route.cabFares.sedan}. Book AC cab — Call 7668570551.`;
  const ogTitle = `${route.origin} to ${route.destination} Road Trip Guide — ${route.totalDistance} km Drive | Cab from ${route.cabFares.sedan} | Triveni Cabs`;

  return {
    title,
    description,
    keywords: [
      `${originLower} to ${destLower} by car`,
      `${originLower} to ${destLower} road trip`,
      `${originLower} to ${destLower} driving guide`,
      `${originLower} to ${destLower} route`,
      `${originLower} to ${destLower} road conditions`,
      `${originLower} to ${destLower} driving time`,
      `${originLower} to ${destLower} distance`,
      `${originLower} to ${destLower} cab`,
      `${originLower} to ${destLower} travel guide`,
      `${originLower} to ${destLower} best route`,
      `driving from ${originLower} to ${destLower}`,
      `road trip ${originLower} ${destLower}`,
      `${originLower} to ${destLower} car rental`,
      `${originLower} to ${destLower} taxi fare`,
      `how to drive ${originLower} to ${destLower}`,
    ],
    authors: [{ name: 'Triveni Cabs' }],
    creator: 'Triveni Cabs',
    publisher: 'Triveni Cabs',
    metadataBase: new URL('https://www.trivenicabs.in'),
    alternates: { canonical: `/travel-by-car/${slug}` },
    openGraph: {
      title: ogTitle,
      description,
      type: 'website',
      locale: 'en_IN',
      url: `https://www.trivenicabs.in/travel-by-car/${slug}`,
      siteName: 'Triveni Cabs',
      images: [{ url: getOgImageForSlug(slug), width: 1200, height: 630, alt: `${route.origin} to ${route.destination} Road Trip Guide` }],
    },
    twitter: {
      card: 'summary_large_image',
      title: ogTitle,
      description,
      creator: '@trivenicabs',
      site: '@trivenicabs',
      images: [getOgImageForSlug(slug)],
    },
    robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
  };
}

export default async function TravelByCarPage({ params }) {
  const resolvedParams = await params;
  const { route: slug } = resolvedParams;
  const route = getTravelByCarRoute(slug);

  if (!route) {
    notFound();
  }

  const relatedRoutes = getRelatedTravelByCarRoutes(slug);

  // JSON-LD: TravelAction Schema
  const travelActionSchema = {
    "@context": "https://schema.org",
    "@type": "TravelAction",
    "fromLocation": {
      "@type": "City",
      "name": route.origin
    },
    "toLocation": {
      "@type": "City",
      "name": route.destination
    },
    "distance": {
      "@type": "Distance",
      "name": `${route.totalDistance} km`
    },
    "description": `Drive from ${route.origin} to ${route.destination} covering ${route.totalDistance} km. Estimated driving time: ${route.drivingTime}. Complete road trip guide with segment-by-segment road map, driving tips, fuel stops, and seasonal warnings.`
  };

  // JSON-LD: Service Schema
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": `Cab Service ${route.origin} to ${route.destination}`,
    "name": `${route.origin} to ${route.destination} Cab — ${route.totalDistance} km Road Trip`,
    "description": `Book AC cab from ${route.origin} to ${route.destination}. ${route.totalDistance} km, ${route.drivingTime} drive. Sedan from ${route.cabFares.sedan}. Experienced drivers, GPS tracking, 24/7 support.`,
    "provider": {
      "@type": "LocalBusiness",
      "name": "Triveni Cabs",
      "telephone": "+91-7668570551",
      "email": "cabstriveni@gmail.com",
      "url": "https://www.trivenicabs.in",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "366 Dandupura near Tajganj",
        "addressLocality": "Agra",
        "addressRegion": "UP",
        "postalCode": "282006",
        "addressCountry": "IN"
      }
    },
    "areaServed": [
      { "@type": "City", "name": route.origin },
      { "@type": "City", "name": route.destination }
    ],
    "offers": {
      "@type": "AggregateOffer",
      "lowPrice": route.sedanRaw.toString(),
      "highPrice": route.tempoRaw.toString(),
      "priceCurrency": "INR",
      "offerCount": "3"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "10000",
      "bestRating": "5"
    }
  };

  // JSON-LD: Breadcrumb
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" },
      { "@type": "ListItem", "position": 2, "name": "Travel by Car", "item": "https://www.trivenicabs.in/travel-by-car" },
      { "@type": "ListItem", "position": 3, "name": `${route.origin} to ${route.destination}`, "item": `https://www.trivenicabs.in/travel-by-car/${slug}` }
    ]
  };

  // JSON-LD: FAQ
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": route.faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
    }))
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(travelActionSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <AEOHead pageType="route" data={{ url: `/travel-by-car/${slug}`, title: `${route.origin} to ${route.destination} by Car`, origin: route.origin, destination: route.destination, city: route.origin }} />
      <TravelByCarClient route={route} relatedRoutes={relatedRoutes} />
    </>
  );
}
