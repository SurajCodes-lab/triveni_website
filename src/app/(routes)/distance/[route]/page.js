import { notFound } from 'next/navigation';
import { getDistanceRoute, getAllDistanceRouteSlugs, getRelatedDistanceRoutes, cityToGeoSlug } from '@/utilis/distanceData';
import DistanceGuideClient from '@/components/distance/DistanceGuideClient';
import { getCorridorLinks } from '@/utilis/corridorLinks';
import AEOHead from '@/components/seo/AEOHead';
import { getOgImageForSlug } from '@/lib/seo/ogImageMap';
import { getRatingAndReviews } from '@/lib/seo/review-helpers';
import { getArticleSchema, getHowToSchema, getComparisonSchema, getTodayDate, getCityPlaceSchema } from '@/lib/seo/speakable-helpers';

export const revalidate = 3600;
export const dynamicParams = false;

export async function generateStaticParams() {
  return getAllDistanceRouteSlugs().map((slug) => ({ route: slug }));
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const { route: slug } = resolvedParams;
  const route = getDistanceRoute(slug);

  if (!route) {
    return { title: 'Distance Guide Not Found' };
  }

  const title = `${route.origin} to ${route.destination} Distance: ${route.distance.km} km | Cab ₹${route.sedanRaw} — 4.9★`;
  const description = `${route.origin} to ${route.destination} distance is ${route.distance.km} km by road via ${route.highway}. Drive time: ${route.duration}. Book AC cab from ₹${route.sedanRaw}. Toll info, route map, stops. Call 7668570551.`;
  const ogTitle = `${route.origin} to ${route.destination} Distance by Road — ${route.distance.km} km | Cab from ₹${route.sedanRaw} | Triveni Cabs`;

  return {
    title,
    description,
    keywords: [
      `${route.origin.toLowerCase()} to ${route.destination.toLowerCase()} distance`,
      `${route.origin.toLowerCase()} to ${route.destination.toLowerCase()} distance by road`,
      `${route.origin.toLowerCase()} to ${route.destination.toLowerCase()} km`,
      `${route.origin.toLowerCase()} to ${route.destination.toLowerCase()} by car`,
      `${route.origin.toLowerCase()} to ${route.destination.toLowerCase()} route`,
      `${route.origin.toLowerCase()} to ${route.destination.toLowerCase()} cab`,
      `${route.origin.toLowerCase()} to ${route.destination.toLowerCase()} cab fare`,
      `${route.origin.toLowerCase()} to ${route.destination.toLowerCase()} driving time`,
      `${route.origin.toLowerCase()} to ${route.destination.toLowerCase()} toll`,
      `${route.origin.toLowerCase()} to ${route.destination.toLowerCase()} road trip`,
      `distance from ${route.origin.toLowerCase()} to ${route.destination.toLowerCase()}`,
      `how far is ${route.destination.toLowerCase()} from ${route.origin.toLowerCase()}`,
      `${route.origin.toLowerCase()} ${route.destination.toLowerCase()} distance`,
      `${route.origin.toLowerCase()} to ${route.destination.toLowerCase()} travel guide`,
      `${route.origin.toLowerCase()} to ${route.destination.toLowerCase()} taxi`,
    ],
    authors: [{ name: 'Triveni Cabs' }],
    creator: 'Triveni Cabs',
    publisher: 'Triveni Cabs',
    metadataBase: new URL('https://www.trivenicabs.in'),
    alternates: { canonical: `/distance/${slug}` },
    openGraph: {
      title: ogTitle,
      description,
      type: 'website',
      locale: 'en_IN',
      url: `https://www.trivenicabs.in/distance/${slug}`,
      siteName: 'Triveni Cabs',
      images: [{ url: getOgImageForSlug(slug), width: 1200, height: 630, alt: `${route.origin} to ${route.destination} Distance Guide` }],
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

export default async function DistanceGuidePage({ params }) {
  const resolvedParams = await params;
  const { route: slug } = resolvedParams;
  const route = getDistanceRoute(slug);

  if (!route) {
    notFound();
  }

  const relatedRoutes = getRelatedDistanceRoutes(slug);

  // Deterministic rating + 3 named Reviews (50-180 reviewCount). Replaces the
  // previous hardcoded reviewCount: "10000" which Google flags as schema spam.
  const ratingAndReviews = getRatingAndReviews(slug, 'city');
  const ogImage = getOgImageForSlug(slug);
  const today = getTodayDate();

  // GEO: resolve origin + destination to real-world Place/City entities with
  // GeoCoordinates from the shared _CITY_PLACES map. Null-safe.
  const originPlace = getCityPlaceSchema(cityToGeoSlug(route.origin), {
    idSlug: `distance/${slug}/origin`,
    description: `${route.origin} — origin point for the ${route.distance.km} km road journey to ${route.destination}.`,
  });
  const destinationPlace = getCityPlaceSchema(cityToGeoSlug(route.destination), {
    idSlug: `distance/${slug}/destination`,
    description: `${route.destination} — destination, ${route.distance.km} km by road from ${route.origin} via ${route.highway}.`,
    image: ogImage,
  });
  const originPlaceId = originPlace ? originPlace['@id'] : null;
  const destinationPlaceId = destinationPlace ? destinationPlace['@id'] : null;
  const geoPlaceNodes = [originPlace, destinationPlace].filter(Boolean);

  // JSON-LD: TravelAction Schema — fromLocation/toLocation reference geo Place
  // @ids (with real GeoCoordinates) when the city resolves, else bare City.
  const travelActionSchema = {
    "@context": "https://schema.org",
    "@type": "TravelAction",
    "fromLocation": originPlaceId
      ? { "@id": originPlaceId }
      : { "@type": "City", "name": route.origin },
    "toLocation": destinationPlaceId
      ? { "@id": destinationPlaceId }
      : { "@type": "City", "name": route.destination },
    "distance": {
      "@type": "Distance",
      "name": `${route.distance.km} km`
    },
    "description": `Travel from ${route.origin} to ${route.destination} covering ${route.distance.km} km via ${route.highway}. Estimated drive time: ${route.duration}.`
  };

  // JSON-LD: Service Schema
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": `Cab Service ${route.origin} to ${route.destination}`,
    "name": `${route.origin} to ${route.destination} Cab — ${route.distance.km} km`,
    "description": `Book AC cab from ${route.origin} to ${route.destination}. ${route.distance.km} km, ${route.duration} via ${route.highway}. Sedan from ₹${route.sedanRaw}.`,
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
      "highPrice": (route.tempoRaw || route.suvRaw).toString(),
      "priceCurrency": "INR",
      "offerCount": "3"
    },
    "brand": { "@type": "Brand", "name": "Triveni Cabs" },
    ...ratingAndReviews
  };

  // JSON-LD: Breadcrumb
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" },
      { "@type": "ListItem", "position": 2, "name": "Distance Guide", "item": "https://www.trivenicabs.in/distance" },
      { "@type": "ListItem", "position": 3, "name": `${route.origin} to ${route.destination}`, "item": `https://www.trivenicabs.in/distance/${slug}` }
    ]
  };

  // JSON-LD: FAQ (now 12 Q&A, with Speakable on the first answer for voice).
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "speakable": {
      "@type": "SpeakableSpecification",
      "cssSelector": [".speakable-faq-first"]
    },
    "mainEntity": route.faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
    }))
  };

  // JSON-LD: Article + Speakable (voice-search + freshness signal).
  const articleSchema = getArticleSchema({
    slug: `distance/${slug}`,
    headline: `${route.origin} to ${route.destination} Distance — ${route.distance.km} km by Road, Drive Time & Cab Fare`,
    description: route.directAnswer,
    image: ogImage,
    dateModified: today,
    authorName: 'editorial',
    speakableSelectors: ['.speakable-headline', '.speakable-lead', '.speakable-faq-first'],
  });

  // JSON-LD: HowTo — how to travel from origin to destination (cab/train/bus/flight).
  const howToSchema = getHowToSchema({
    name: `How to Travel from ${route.origin} to ${route.destination}`,
    description: `Step-by-step guide to travelling the ${route.distance.km} km from ${route.origin} to ${route.destination} by cab, train, bus or flight via ${route.highway}.`,
    totalTime: /minute/i.test(route.duration)
      ? 'PT' + Math.max(15, parseInt(route.duration, 10) || 45) + 'M'
      : 'PT' + Math.max(1, parseInt(route.duration, 10) || 5) + 'H',
    estimatedCost: { currency: 'INR', value: route.sedanRaw },
    steps: [
      { name: 'Choose your travel mode', text: `Decide between a private cab (most flexible, ${route.duration}), train, bus, or flight. For door-to-door comfort and freedom to stop en route, a cab from ${route.origin} to ${route.destination} is the most convenient choice.` },
      { name: 'Pick the best route', text: `Travel via ${route.highway} — the fastest and best-maintained route from ${route.origin} to ${route.destination}, covering ${route.distance.km} km (${route.distance.miles} miles).` },
      { name: 'Book your cab and start early', text: `Book an AC sedan from ${route.cabFares.sedan}, SUV, or Tempo Traveller with Triveni Cabs on 7668570551. Start early morning (5-6 AM) to avoid traffic and reach ${route.destination} comfortably.` },
      { name: 'Pay toll at actual and arrive', text: `Tolls on the route are paid at actual via FASTag and added transparently to your bill. Sit back, enjoy the ${route.duration} drive, and arrive in ${route.destination}.` },
    ],
  });

  // JSON-LD: Comparison (Table + Article) for travel-modes comparison block.
  const comparisonSchema = getComparisonSchema({
    slug: `distance/${slug}`,
    title: `${route.origin} to ${route.destination}: Cab vs Train vs Bus vs Flight`,
    description: `Compare travel time, cost and comfort for the ${route.distance.km} km journey from ${route.origin} to ${route.destination} by cab, train, bus and flight.`,
    rows: route.travelModes.map(m => ({ name: m.mode })),
    mentions: [`${route.origin} to ${route.destination} cab`, `${route.origin} to ${route.destination} train`, `${route.origin} to ${route.destination} bus`, `${route.origin} to ${route.destination} flight`],
  });

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(travelActionSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(comparisonSchema) }} />
      {geoPlaceNodes.map((node, i) => (
        <script key={`geo-${i}`} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(node) }} />
      ))}
      <AEOHead pageType="route" data={{ url: `/distance/${slug}`, title: `${route.origin} to ${route.destination} Distance`, origin: route.origin, destination: route.destination, city: route.origin }} />
      <DistanceGuideClient route={route} relatedRoutes={relatedRoutes} corridorLinks={getCorridorLinks(slug, 'distance')} />
    </>
  );
}
