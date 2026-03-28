import { notFound } from 'next/navigation';
import { getRoadTrip, getAllRoadTripSlugs, getRelatedRoadTrips } from '@/utilis/roadTripData';
import RoadTripCircuitClient from '@/components/road-trip/RoadTripCircuitClient';
import AEOHead from '@/components/seo/AEOHead';
import { getOgImageForSlug } from '@/lib/seo/ogImageMap';

export const revalidate = false;
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

  const title = `${trip.name}: ${trip.totalDistance} km, ${trip.totalDays} Days | Cab ₹${trip.totalCost.sedan.toLocaleString('en-IN')} — 4.9★`;
  const description = `${trip.name} road trip covering ${trip.totalDistance} km in ${trip.totalDays} days. ${trip.stops.map(s => s.city).join(' → ')}. Book AC cab from ₹${trip.totalCost.sedan.toLocaleString('en-IN')}. Call 7668570551.`;
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

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    "name": trip.name,
    "description": `${trip.name} — ${trip.totalDistance} km road trip covering ${trip.stops.map(s => s.city).join(', ')} in ${trip.totalDays} days.`,
    "touristType": "Road Trip Enthusiasts",
    "itinerary": {
      "@type": "ItemList",
      "itemListElement": trip.stops.map((stop, i) => ({
        "@type": "ListItem",
        "position": i + 1,
        "item": {
          "@type": "TouristDestination",
          "name": stop.city,
          "description": stop.highlights.join(', ')
        }
      }))
    },
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
    "offers": {
      "@type": "AggregateOffer",
      "lowPrice": trip.totalCost.sedan.toString(),
      "highPrice": trip.totalCost.suv.toString(),
      "priceCurrency": "INR",
      "offerCount": "2"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "10000",
      "bestRating": "5"
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" },
      { "@type": "ListItem", "position": 2, "name": "Road Trips", "item": "https://www.trivenicabs.in/road-trip" },
      { "@type": "ListItem", "position": 3, "name": trip.name, "item": `https://www.trivenicabs.in/road-trip/${slug}` }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": trip.faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
    }))
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <AEOHead pageType="tour" data={{ url: `/road-trip/${slug}`, title: trip.name, city: trip.stops[0]?.city }} />
      <RoadTripCircuitClient trip={trip} relatedTrips={relatedTrips} />
    </>
  );
}
