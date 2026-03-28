import { notFound } from 'next/navigation';
import { getBusVsCabRoute, getAllBusVsCabSlugs, getRelatedBusVsCabRoutes } from '@/utilis/busVsCabData';
import BusVsCabClient from '@/components/bus-vs-cab/BusVsCabClient';
import AEOHead from '@/components/seo/AEOHead';
import { getOgImageForSlug } from '@/lib/seo/ogImageMap';

export const revalidate = false;
export const dynamicParams = false;

export async function generateStaticParams() {
  return getAllBusVsCabSlugs().map((slug) => ({ route: slug }));
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const { route: slug } = resolvedParams;
  const route = getBusVsCabRoute(slug);

  if (!route) {
    return { title: 'Comparison Not Found' };
  }

  const title = `Bus vs Cab: ${route.origin} to ${route.destination} | Cost & Time Comparison 2026`;
  const description = `${route.origin} to ${route.destination} — Bus (₹${route.busOptions[0].cost}-₹${route.busOptions[route.busOptions.length - 1].cost}) vs Cab (${route.cabOptions.sedan.fare}). Compare cost, time, comfort for solo/family. Save ${route.comparison.timeSaved}. Call 7668570551.`;
  const ogTitle = `Bus vs Cab: ${route.origin} to ${route.destination} — Which is Cheaper & Faster? | 2026 Guide | Triveni Cabs`;

  return {
    title,
    description,
    keywords: [
      `${route.origin.toLowerCase()} to ${route.destination.toLowerCase()} bus vs cab`,
      `${route.origin.toLowerCase()} to ${route.destination.toLowerCase()} bus or taxi`,
      `${route.origin.toLowerCase()} to ${route.destination.toLowerCase()} travel comparison`,
      `${route.origin.toLowerCase()} to ${route.destination.toLowerCase()} bus fare`,
      `${route.origin.toLowerCase()} to ${route.destination.toLowerCase()} cab fare`,
      `${route.origin.toLowerCase()} to ${route.destination.toLowerCase()} cheapest way`,
      `bus vs taxi ${route.origin.toLowerCase()} to ${route.destination.toLowerCase()}`,
      `${route.origin.toLowerCase()} to ${route.destination.toLowerCase()} transport options`,
      `${route.origin.toLowerCase()} to ${route.destination.toLowerCase()} cost comparison`,
      `how to reach ${route.destination.toLowerCase()} from ${route.origin.toLowerCase()}`,
      `${route.origin.toLowerCase()} to ${route.destination.toLowerCase()} travel guide`,
      `cheapest way ${route.origin.toLowerCase()} to ${route.destination.toLowerCase()}`,
      `${route.origin.toLowerCase()} to ${route.destination.toLowerCase()} family travel`,
      `${route.origin.toLowerCase()} ${route.destination.toLowerCase()} bus timing`,
      `${route.origin.toLowerCase()} to ${route.destination.toLowerCase()} cab booking`,
    ],
    authors: [{ name: 'Triveni Cabs' }],
    creator: 'Triveni Cabs',
    publisher: 'Triveni Cabs',
    metadataBase: new URL('https://www.trivenicabs.in'),
    alternates: { canonical: `/bus-vs-cab/${slug}` },
    openGraph: {
      title: ogTitle,
      description,
      type: 'website',
      locale: 'en_IN',
      url: `https://www.trivenicabs.in/bus-vs-cab/${slug}`,
      siteName: 'Triveni Cabs',
      images: [{ url: getOgImageForSlug(slug), width: 1200, height: 630, alt: `Bus vs Cab: ${route.origin} to ${route.destination}` }],
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

export default async function BusVsCabPage({ params }) {
  const resolvedParams = await params;
  const { route: slug } = resolvedParams;
  const route = getBusVsCabRoute(slug);

  if (!route) {
    notFound();
  }

  const relatedRoutes = getRelatedBusVsCabRoutes(slug);

  // JSON-LD: Service Schema
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": `Cab Service ${route.origin} to ${route.destination}`,
    "name": `${route.origin} to ${route.destination} Cab vs Bus — ${route.distanceKm} km`,
    "description": `Compare bus and cab options from ${route.origin} to ${route.destination}. Cab from ${route.cabOptions.sedan.fare}. Save ${route.comparison.timeSaved} vs bus.`,
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
      "lowPrice": route.cabOptions.sedan.fareRaw.toString(),
      "highPrice": route.cabOptions.suv.fareRaw.toString(),
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

  // JSON-LD: Breadcrumb
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" },
      { "@type": "ListItem", "position": 2, "name": "Bus vs Cab", "item": "https://www.trivenicabs.in/bus-vs-cab" },
      { "@type": "ListItem", "position": 3, "name": `${route.origin} to ${route.destination}`, "item": `https://www.trivenicabs.in/bus-vs-cab/${slug}` }
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <AEOHead pageType="route" data={{ url: `/bus-vs-cab/${slug}`, title: `Bus vs Cab: ${route.origin} to ${route.destination}`, origin: route.origin, destination: route.destination, city: route.origin }} />
      <BusVsCabClient route={route} relatedRoutes={relatedRoutes} />
    </>
  );
}
