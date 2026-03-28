import { notFound } from 'next/navigation';
import { getDistanceRoute, getAllDistanceRouteSlugs, getRelatedDistanceRoutes } from '@/utilis/distanceData';
import DistanceGuideClient from '@/components/distance/DistanceGuideClient';
import AEOHead from '@/components/seo/AEOHead';
import { getOgImageForSlug } from '@/lib/seo/ogImageMap';

export const revalidate = false;
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
      "highPrice": route.suvRaw.toString(),
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
      { "@type": "ListItem", "position": 2, "name": "Distance Guide", "item": "https://www.trivenicabs.in/distance" },
      { "@type": "ListItem", "position": 3, "name": `${route.origin} to ${route.destination}`, "item": `https://www.trivenicabs.in/distance/${slug}` }
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
      <AEOHead pageType="route" data={{ url: `/distance/${slug}`, title: `${route.origin} to ${route.destination} Distance`, origin: route.origin, destination: route.destination, city: route.origin }} />
      <DistanceGuideClient route={route} relatedRoutes={relatedRoutes} />
    </>
  );
}
