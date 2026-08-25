import { notFound } from 'next/navigation';
import { getTravelByCarRoute, getAllTravelByCarSlugs, getRelatedTravelByCarRoutes, cityNameToGeoSlug } from '@/utilis/travelByCarData';
import TravelByCarClient from '@/components/travel-by-car/TravelByCarClient';
import AEOHead from '@/components/seo/AEOHead';
import { getOgImageForSlug } from '@/lib/seo/ogImageMap';
import { getRatingAndReviews } from '@/lib/seo/review-helpers';
import {
  getSpeakableSchema, getArticleSchema, getHowToSchema,
  getComparisonSchema, getCityPlaceSchema,
} from '@/lib/seo/speakable-helpers';
import { buildTravelByCarMeta } from '@/lib/seo/serp-ctr';

export const revalidate = 3600;
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
  // Week 43 — answer-box defence: lead with the end-to-end cost of the drive
  // (toll + fuel), which no SERP feature supplies. See src/lib/seo/serp-ctr.js.
  const { title, description } = buildTravelByCarMeta(route, slug);
  const ogTitle = `${route.origin} to ${route.destination} Road Trip Guide — ${route.totalDistance} km Drive | Cab from ${route.cabFares.sedan} | Triveni Cabs`;

  return {
    // Title carries no brand suffix of its own: the root layout appends
    // '%s | Triveni Cabs'. serp-ctr budgets the content half at 45 chars
    // (TITLE_BUDGET) so the rendered title lands inside Google's ~60-char
    // truncation instead of being cut mid-phrase.
    title: title,
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

  const pageUrl = `https://www.trivenicabs.in/travel-by-car/${slug}`;
  const ogImage = getOgImageForSlug(slug);
  const ratingAndReviews = getRatingAndReviews(slug, 'city');

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
    "brand": { "@type": "Brand", "name": "Triveni Cabs" },
    "provider": {
      "@type": "LocalBusiness",
      "@id": "https://www.trivenicabs.in/#localbusiness",
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
    ...ratingAndReviews,
  };

  // JSON-LD: Breadcrumb
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" },
      { "@type": "ListItem", "position": 2, "name": "Travel by Car", "item": "https://www.trivenicabs.in/travel-by-car" },
      { "@type": "ListItem", "position": 3, "name": `${route.origin} to ${route.destination}`, "item": pageUrl }
    ]
  };

  // JSON-LD: FAQ (+ Speakable for voice answers)
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "speakable": getSpeakableSchema(['.speakable-headline', '.speakable-lead', '.speakable-faq-first']),
    "mainEntity": route.faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
    }))
  };

  // JSON-LD: Article (freshness + voice search)
  const articleSchema = getArticleSchema({
    slug: `travel-by-car/${slug}`,
    headline: `${route.origin} to ${route.destination} by Car — ${route.totalDistance} km Road Trip Guide`,
    description: `Complete ${route.origin} to ${route.destination} driving guide: ${route.totalDistance} km, ${route.drivingTime}, segment-by-segment road map, fuel and food stops, seasonal road conditions, and cab fares from ${route.cabFares.sedan}.`,
    image: ogImage,
    speakableSelectors: ['.speakable-headline', '.speakable-lead'],
  });

  // JSON-LD: HowTo — drive this route
  const howToSchema = getHowToSchema({
    name: `How to Drive from ${route.origin} to ${route.destination}`,
    description: `Step-by-step guide to driving the ${route.totalDistance} km ${route.origin}–${route.destination} route in ${route.drivingTime}.`,
    totalTime: 'PT10M',
    estimatedCost: { currency: 'INR', value: route.sedanRaw },
    steps: [
      { name: 'Start early', text: `Leave ${route.origin} by 5-6 AM to beat city traffic and, on hill routes, cover the mountain stretches in daylight. Total drive: about ${route.drivingTime}.` },
      { name: 'Follow the highway route', text: `Take the main highway through ${route.roadMap.slice(0, 3).map(s => s.segment.split(' to ')[1] || s.segment).join(', ')} toward ${route.destination}.` },
      { name: 'Fuel up and rest', text: `Plan fuel stops (about ${route.petrolStops} stations en route) and food breaks every 2-3 hours at ${route.foodStops.slice(0, 2).join(' and ')}.` },
      { name: 'Drive for the season', text: 'Check seasonal road conditions before you go — hill sections can have snow in winter and landslide risk in monsoon.' },
      { name: 'Or book a chauffeur cab', text: `Book a Triveni cab from ${route.cabFares.sedan} (sedan) and skip the driving fatigue — the driver handles navigation, tolls and parking.` },
    ],
  });

  // JSON-LD: Comparison — car vs train/bus/flight
  const comparisonSchema = getComparisonSchema({
    slug: `travel-by-car/${slug}`,
    title: `Car vs Train, Bus or Flight from ${route.origin} to ${route.destination}`,
    description: `Compare travelling by car, train, bus and flight from ${route.origin} to ${route.destination} (${route.totalDistance} km) — door-to-door convenience, luggage freedom, cost and flexibility.`,
    rows: [
      { feature: 'Door-to-door convenience' },
      { feature: 'Luggage freedom' },
      { feature: 'Stops & sightseeing en route' },
      { feature: 'Total travel time' },
      { feature: 'Cost for a group' },
    ],
    mentions: ['Car / cab', 'Train', 'Bus', 'Flight', route.origin, route.destination],
  });

  // JSON-LD: GEO Place entities for origin + destination
  const originPlace = getCityPlaceSchema(cityNameToGeoSlug(route.origin), { idSlug: `travel-by-car/${slug}` });
  const destPlace = getCityPlaceSchema(cityNameToGeoSlug(route.destination), { idSlug: `travel-by-car/${slug}` });
  const placeSchemas = [originPlace, destPlace].filter(Boolean);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(travelActionSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      {comparisonSchema.map((s, i) => (
        <script key={`cmp-${i}`} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}
      {placeSchemas.map((s, i) => (
        <script key={`place-${i}`} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}
      <AEOHead pageType="route" data={{ url: `/travel-by-car/${slug}`, title: `${route.origin} to ${route.destination} by Car`, origin: route.origin, destination: route.destination, city: route.origin }} />
      <TravelByCarClient route={route} relatedRoutes={relatedRoutes} />
    </>
  );
}
