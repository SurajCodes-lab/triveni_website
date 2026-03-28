import { notFound } from 'next/navigation';
import { getTollCostRoute, getAllTollCostSlugs, getRelatedTollCostRoutes } from '@/utilis/tollCostData';
import TollCostClient from '@/components/toll-cost/TollCostClient';
import AEOHead from '@/components/seo/AEOHead';
import { getOgImageForSlug } from '@/lib/seo/ogImageMap';

export const revalidate = false;
export const dynamicParams = false;

export async function generateStaticParams() {
  return getAllTollCostSlugs().map((slug) => ({ route: slug }));
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const { route: slug } = resolvedParams;
  const route = getTollCostRoute(slug);

  if (!route) {
    return { title: 'Toll Cost Guide Not Found' };
  }

  const o = route.origin.toLowerCase();
  const d = route.destination.toLowerCase();
  const title = `${route.origin} to ${route.destination} Toll Cost ₹${route.totalTollCost.car} | Toll Plaza List 2026`;
  const description = `${route.origin} to ${route.destination} toll cost is ₹${route.totalTollCost.car} for car & ₹${route.totalTollCost.suv} for SUV. ${route.tollPlazas.length} toll plaza(s) on ${route.totalDistance} km route. FASTag info, plaza-wise rates, cab fare ₹${route.cabFare.toLocaleString('en-IN')}. Call 7668570551.`;
  const ogTitle = `${route.origin} to ${route.destination} Toll Cost ₹${route.totalTollCost.car} — ${route.tollPlazas.length} Toll Plazas | Book Cab from ₹${route.cabFare.toLocaleString('en-IN')} | Triveni Cabs`;

  return {
    title,
    description,
    keywords: [
      `${o} to ${d} toll cost`,
      `${o} to ${d} toll tax`,
      `${o} to ${d} toll charges`,
      `${o} to ${d} toll plaza`,
      `${o} to ${d} toll rate`,
      `${o} to ${d} toll list 2026`,
      `${o} to ${d} toll fastag`,
      `${o} to ${d} highway toll`,
      `toll from ${o} to ${d}`,
      `toll charges ${o} ${d}`,
      `${o} to ${d} road toll`,
      `${o} to ${d} expressway toll`,
      `${o} to ${d} cab fare with toll`,
      `${o} to ${d} total trip cost`,
      `${o} to ${d} toll plaza list`,
    ],
    authors: [{ name: 'Triveni Cabs' }],
    creator: 'Triveni Cabs',
    publisher: 'Triveni Cabs',
    metadataBase: new URL('https://www.trivenicabs.in'),
    alternates: { canonical: `/toll-cost/${slug}` },
    openGraph: {
      title: ogTitle,
      description,
      type: 'website',
      locale: 'en_IN',
      url: `https://www.trivenicabs.in/toll-cost/${slug}`,
      siteName: 'Triveni Cabs',
      images: [{ url: getOgImageForSlug(slug), width: 1200, height: 630, alt: `${route.origin} to ${route.destination} Toll Cost Guide` }],
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

export default async function TollCostPage({ params }) {
  const resolvedParams = await params;
  const { route: slug } = resolvedParams;
  const route = getTollCostRoute(slug);

  if (!route) {
    notFound();
  }

  const relatedRoutes = getRelatedTollCostRoutes(slug);

  // JSON-LD: Service Schema
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": `Cab Service ${route.origin} to ${route.destination}`,
    "name": `${route.origin} to ${route.destination} Cab — Toll Cost ₹${route.totalTollCost.car}`,
    "description": `Book AC cab from ${route.origin} to ${route.destination}. ${route.totalDistance} km route with ${route.tollPlazas.length} toll plaza(s). Total toll: ₹${route.totalTollCost.car} (car). Cab fare from ₹${route.cabFare.toLocaleString('en-IN')}.`,
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
      "@type": "Offer",
      "price": route.cabFare.toString(),
      "priceCurrency": "INR",
      "description": `Sedan cab fare from ${route.origin} to ${route.destination}. Toll charges extra at actual.`
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
      { "@type": "ListItem", "position": 2, "name": "Toll Cost Guide", "item": "https://www.trivenicabs.in/toll-cost" },
      { "@type": "ListItem", "position": 3, "name": `${route.origin} to ${route.destination} Toll Cost`, "item": `https://www.trivenicabs.in/toll-cost/${slug}` }
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
      <AEOHead pageType="route" data={{ url: `/toll-cost/${slug}`, title: `${route.origin} to ${route.destination} Toll Cost`, origin: route.origin, destination: route.destination, city: route.origin }} />
      <TollCostClient route={route} relatedRoutes={relatedRoutes} />
    </>
  );
}
