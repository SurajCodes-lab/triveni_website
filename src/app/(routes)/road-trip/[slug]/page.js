import { notFound } from 'next/navigation';
import { getRoadTrip, getAllRoadTripSlugs, getRelatedRoadTrips, stopNameToGeoSlug } from '@/utilis/roadTripData';
import RoadTripCircuitClient from '@/components/road-trip/RoadTripCircuitClient';
import AEOHead from '@/components/seo/AEOHead';
import { getOgImageForSlug } from '@/lib/seo/ogImageMap';
import { getRatingAndReviews } from '@/lib/seo/review-helpers';
import {
  getSpeakableSchema, getArticleSchema, getHowToSchema,
  getComparisonSchema, getCityPlaceSchema,
} from '@/lib/seo/speakable-helpers';
import { tightenTitle, tightenDescription, DESC_BUDGET } from '@/lib/seo/serp-ctr';
export const revalidate = 3600;
export const dynamicParams = false;

export async function generateStaticParams() {
  return getAllRoadTripSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const { slug } = resolvedParams;
  const trip = getRoadTrip(slug);

  if (!trip) {
    return { title: 'Road Trip Not Found' };
  }

  const title = tightenTitle(`${trip.name}: ${trip.totalDistance} km, ${trip.totalDays} Days | Cab ₹${trip.totalCost.sedan.toLocaleString('en-IN')} — 4.9★`);
  const tripTail = `Book AC cab from ₹${trip.totalCost.sedan.toLocaleString('en-IN')}. Call 7668570551.`;
  const tripHead = `${trip.name} road trip covering ${trip.totalDistance} km in ${trip.totalDays} days. ${trip.stops.map(s => s.city).join(' → ')}.`;
  const description = `${tightenDescription(tripHead, DESC_BUDGET - tripTail.length - 1)} ${tripTail}`;
  const ogTitle = `${trip.name} — ${trip.totalDistance} km Road Trip | Cab from ₹${trip.totalCost.sedan.toLocaleString('en-IN')} | Triveni Cabs`;

  return {
    title,
    description,
    keywords: [
      `${trip.name.toLowerCase()} road trip`,
      `${trip.name.toLowerCase()} by car`,
      `${trip.name.toLowerCase()} cab`,
      `${trip.name.toLowerCase()} tour`,
      `${trip.name.toLowerCase()} itinerary`,
      `${trip.stops.map(s => s.city.toLowerCase()).join(' ')} trip`,
      `${trip.name.toLowerCase()} cost`,
      `road trip from delhi`,
      `india road trip circuit`,
      `multi city cab booking`,
      `${trip.name.toLowerCase()} self drive`,
      `${trip.name.toLowerCase()} budget`,
      `${trip.name.toLowerCase()} travel guide`,
      `best road trips india`,
    ],
    authors: [{ name: 'Triveni Cabs' }],
    creator: 'Triveni Cabs',
    publisher: 'Triveni Cabs',
    metadataBase: new URL('https://www.trivenicabs.in'),
    alternates: { canonical: `/road-trip/${slug}` },
    openGraph: {
      title: ogTitle,
      description,
      type: 'website',
      locale: 'en_IN',
      url: `https://www.trivenicabs.in/road-trip/${slug}`,
      siteName: 'Triveni Cabs',
      images: [{ url: getOgImageForSlug(slug), width: 1200, height: 630, alt: `${trip.name} Road Trip Guide` }],
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

export default async function RoadTripPage({ params }) {
  const resolvedParams = await params;
  const { slug } = resolvedParams;
  const trip = getRoadTrip(slug);

  if (!trip) {
    notFound();
  }

  const relatedTrips = getRelatedRoadTrips(slug);

  const pageUrl = `https://www.trivenicabs.in/road-trip/${slug}`;
  const ogImage = getOgImageForSlug(slug);
  const ratingAndReviews = getRatingAndReviews(slug, 'city');
  const routeCities = [...new Set(trip.stops.map(s => s.city))];

  // JSON-LD: TouristTrip (enriched itinerary + deterministic rating/reviews/brand)
  const touristTripSchema = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    "@id": `${pageUrl}#trip`,
    "name": trip.name,
    "description": `${trip.name} — ${trip.totalDistance} km road trip covering ${trip.stops.map(s => s.city).join(', ')} in ${trip.totalDays} days.`,
    "touristType": "Road Trip Enthusiasts",
    "brand": { "@type": "Brand", "name": "Triveni Cabs" },
    "itinerary": {
      "@type": "ItemList",
      "numberOfItems": trip.stops.length,
      "itemListElement": trip.stops.map((stop, i) => ({
        "@type": "ListItem",
        "position": i + 1,
        "item": {
          "@type": "TouristDestination",
          "name": stop.city,
          "description": `${stop.nights > 0 ? `${stop.nights} night(s). ` : 'Transit stop. '}${stop.highlights.join(', ')}`
        }
      }))
    },
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
    "offers": {
      "@type": "AggregateOffer",
      "lowPrice": trip.totalCost.sedan.toString(),
      "highPrice": trip.totalCost.suv.toString(),
      "priceCurrency": "INR",
      "offerCount": "2"
    },
    ...ratingAndReviews,
  };

  // JSON-LD: Service (chauffeur-driven cab for the circuit)
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": `Road Trip Cab — ${trip.name}`,
    "name": `${trip.name} Chauffeur Cab — ${trip.totalDays} Days`,
    "description": `Chauffeur-driven AC cab for the ${trip.name} (${trip.totalDistance} km, ${trip.totalDays} days). Sedan from ₹${trip.totalCost.sedan.toLocaleString('en-IN')}, SUV from ₹${trip.totalCost.suv.toLocaleString('en-IN')}. Driver, fuel and 24/7 support included.`,
    "brand": { "@type": "Brand", "name": "Triveni Cabs" },
    "areaServed": routeCities.map(c => ({ "@type": "City", "name": c })),
    "provider": { "@id": "https://www.trivenicabs.in/#localbusiness" },
    "offers": {
      "@type": "AggregateOffer",
      "lowPrice": trip.totalCost.sedan.toString(),
      "highPrice": trip.totalCost.suv.toString(),
      "priceCurrency": "INR",
      "offerCount": "2"
    },
    ...ratingAndReviews,
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" },
      { "@type": "ListItem", "position": 2, "name": "Road Trips", "item": "https://www.trivenicabs.in/road-trip" },
      { "@type": "ListItem", "position": 3, "name": trip.name, "item": pageUrl }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "speakable": getSpeakableSchema(['.speakable-headline', '.speakable-lead', '.speakable-faq-first']),
    "mainEntity": trip.faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
    }))
  };

  // JSON-LD: Article (freshness + voice)
  const articleSchema = getArticleSchema({
    slug: `road-trip/${slug}`,
    headline: `${trip.name} Road Trip — ${trip.totalDistance} km, ${trip.totalDays}-Day Itinerary`,
    description: `Day-by-day ${trip.name} itinerary covering ${routeCities.join(', ')} over ${trip.totalDays} days and ${trip.totalDistance} km, with chauffeur cab fares from ₹${trip.totalCost.sedan.toLocaleString('en-IN')}.`,
    image: ogImage,
    speakableSelectors: ['.speakable-headline', '.speakable-lead'],
  });

  // JSON-LD: HowTo — plan the road trip
  const howToSchema = getHowToSchema({
    name: `How to Plan the ${trip.name} Road Trip`,
    description: `Step-by-step guide to planning the ${trip.totalDays}-day, ${trip.totalDistance} km ${trip.name} circuit.`,
    totalTime: 'PT20M',
    estimatedCost: { currency: 'INR', value: trip.totalCost.sedan },
    steps: [
      { name: 'Pick your dates', text: `Choose travel dates in the best season for this circuit: ${trip.bestSeason}` },
      { name: 'Map the route', text: `Lock the ${trip.totalDays}-day route: ${routeCities.join(' → ')}, totalling ${trip.totalDistance} km.` },
      { name: 'Choose a vehicle', text: `Select a sedan (from ₹${trip.totalCost.sedan.toLocaleString('en-IN')}) for couples or an SUV (from ₹${trip.totalCost.suv.toLocaleString('en-IN')}) for families and hill comfort.` },
      { name: 'Book hotels at each halt', text: `Reserve overnight stays at ${trip.stops.filter(s => s.nights > 0).map(s => s.city).join(', ')} in advance during peak season.` },
      { name: 'Confirm the cab', text: 'Call 7668570551 or WhatsApp to confirm the chauffeur cab. The driver handles navigation, tolls, parking and luggage.' },
    ],
  });

  // JSON-LD: Comparison — self-drive vs chauffeur cab
  const comparisonSchema = getComparisonSchema({
    slug: `road-trip/${slug}`,
    title: `Self-Drive vs Chauffeur Cab for the ${trip.name}`,
    description: `Compare self-driving and a chauffeur-driven cab for the ${trip.totalDistance} km ${trip.name} circuit — cost, fatigue, local knowledge and convenience.`,
    rows: [
      { feature: 'Driver fatigue over long distance' },
      { feature: 'Local route & hill-road knowledge' },
      { feature: 'Total cost (fuel, tolls, drop charges)' },
      { feature: 'Flexibility & convenience' },
    ],
    mentions: ['Self-drive car rental', 'Chauffeur-driven cab', ...routeCities],
  });

  // JSON-LD: GEO Place entities for each unique stop city
  const placeSchemas = routeCities
    .map(city => getCityPlaceSchema(stopNameToGeoSlug(city), { idSlug: `road-trip/${slug}` }))
    .filter(Boolean);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(touristTripSchema) }} />
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
      <AEOHead pageType="tour" data={{ url: `/road-trip/${slug}`, title: trip.name, city: trip.stops[0]?.city }} />
      <RoadTripCircuitClient trip={trip} relatedTrips={relatedTrips} />
    </>
  );
}
