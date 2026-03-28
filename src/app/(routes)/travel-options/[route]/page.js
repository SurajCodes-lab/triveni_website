import { notFound } from 'next/navigation';
import { getTravelOptionsRoute, getAllTravelOptionsSlugs, getRelatedTravelRoutes } from '@/utilis/travelOptionsData';
import TravelOptionsClient from '@/components/travel-options/TravelOptionsClient';
import AEOHead from '@/components/seo/AEOHead';

export const revalidate = false;
export const dynamicParams = false;

export async function generateStaticParams() {
  return getAllTravelOptionsSlugs().map((slug) => ({ route: slug }));
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const { route: slug } = resolvedParams;
  const route = getTravelOptionsRoute(slug);

  if (!route) {
    return { title: 'Travel Options Not Found' };
  }

  const carMode = route.modes.find(m => m.mode === 'Car');
  const title = `${route.origin} to ${route.destination}: Car vs Train vs Bus vs Flight | Cab ${carMode?.cost || ''} — 4.9★`;
  const description = `Compare travel options from ${route.origin} to ${route.destination}. Car (${carMode?.duration}), Train, Bus, Flight — cost, time, comfort compared. Book cab from ${carMode?.cost}. Call 7668570551.`;
  const ogTitle = `${route.origin} to ${route.destination} — Best Way to Travel | Car vs Train vs Bus | Triveni Cabs`;

  return {
    title,
    description,
    keywords: [
      `${route.origin.toLowerCase()} to ${route.destination.toLowerCase()} best way`,
      `${route.origin.toLowerCase()} to ${route.destination.toLowerCase()} by car`,
      `${route.origin.toLowerCase()} to ${route.destination.toLowerCase()} by train`,
      `${route.origin.toLowerCase()} to ${route.destination.toLowerCase()} by bus`,
      `${route.origin.toLowerCase()} to ${route.destination.toLowerCase()} travel options`,
      `how to reach ${route.destination.toLowerCase()} from ${route.origin.toLowerCase()}`,
      `${route.origin.toLowerCase()} to ${route.destination.toLowerCase()} cab`,
      `${route.origin.toLowerCase()} to ${route.destination.toLowerCase()} cost comparison`,
      `${route.origin.toLowerCase()} to ${route.destination.toLowerCase()} cheapest way`,
      `${route.origin.toLowerCase()} to ${route.destination.toLowerCase()} fastest way`,
      `${route.origin.toLowerCase()} ${route.destination.toLowerCase()} travel guide`,
      `best transport ${route.origin.toLowerCase()} to ${route.destination.toLowerCase()}`,
    ],
    authors: [{ name: 'Triveni Cabs' }],
    creator: 'Triveni Cabs',
    publisher: 'Triveni Cabs',
    metadataBase: new URL('https://www.trivenicabs.in'),
    alternates: { canonical: `/travel-options/${slug}` },
    openGraph: {
      title: ogTitle,
      description,
      type: 'website',
      locale: 'en_IN',
      url: `https://www.trivenicabs.in/travel-options/${slug}`,
      siteName: 'Triveni Cabs',
      images: [{ url: '/images/citypage_hero_section_image.jpg', width: 1200, height: 630, alt: `${route.origin} to ${route.destination} Travel Options` }],
    },
    twitter: {
      card: 'summary_large_image',
      title: ogTitle,
      description,
      creator: '@trivenicabs',
      site: '@trivenicabs',
      images: ['/images/citypage_hero_section_image.jpg'],
    },
    robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
  };
}

export default async function TravelOptionsPage({ params }) {
  const resolvedParams = await params;
  const { route: slug } = resolvedParams;
  const route = getTravelOptionsRoute(slug);

  if (!route) {
    notFound();
  }

  const relatedRoutes = getRelatedTravelRoutes(slug);
  const carMode = route.modes.find(m => m.mode === 'Car');

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": `Travel Comparison ${route.origin} to ${route.destination}`,
    "name": `${route.origin} to ${route.destination} Travel Options — Triveni Cabs`,
    "description": `Compare car, train, bus, flight from ${route.origin} to ${route.destination}. Book AC cab from ${carMode?.cost}.`,
    "provider": {
      "@type": "LocalBusiness",
      "name": "Triveni Cabs",
      "telephone": "+91-7668570551",
      "email": "cabstriveni@gmail.com",
      "url": "https://www.trivenicabs.in",
      "address": { "@type": "PostalAddress", "streetAddress": "366 Dandupura near Tajganj", "addressLocality": "Agra", "addressRegion": "UP", "postalCode": "282006", "addressCountry": "IN" }
    },
    "areaServed": [
      { "@type": "City", "name": route.origin },
      { "@type": "City", "name": route.destination }
    ],
    "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "10000", "bestRating": "5" }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" },
      { "@type": "ListItem", "position": 2, "name": "Travel Options", "item": "https://www.trivenicabs.in/travel-options" },
      { "@type": "ListItem", "position": 3, "name": `${route.origin} to ${route.destination}`, "item": `https://www.trivenicabs.in/travel-options/${slug}` }
    ]
  };

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
      <AEOHead pageType="route" data={{ url: `/travel-options/${slug}`, title: `${route.origin} to ${route.destination} Travel Options`, origin: route.origin, destination: route.destination, city: route.origin }} />
      <TravelOptionsClient route={route} relatedRoutes={relatedRoutes} />
    </>
  );
}
