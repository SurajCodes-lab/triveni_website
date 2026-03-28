import { notFound } from 'next/navigation';
import { getHowToReachRoute, getAllHowToReachSlugs, getRelatedHowToReachRoutes } from '@/utilis/howToReachRouteData';
import HowToReachClient from '@/components/how-to-reach/HowToReachClient';
import AEOHead from '@/components/seo/AEOHead';
import { getOgImageForSlug } from '@/lib/seo/ogImageMap';

export const revalidate = false;
export const dynamicParams = false;

export async function generateStaticParams() {
  return getAllHowToReachSlugs().map((slug) => ({ route: slug }));
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const { route: slug } = resolvedParams;
  const route = getHowToReachRoute(slug);

  if (!route) {
    return { title: 'How to Reach - Route Not Found' };
  }

  const cabMode = route.travelModes.find(m => m.mode === 'By Car/Cab');
  const title = `How to Reach ${route.destination} from ${route.origin} | 4 Ways Compared \u2014 Triveni Cabs`;
  const description = `Compare 4 ways to reach ${route.destination} from ${route.origin}: Car/Cab (${cabMode?.duration || ''}), Bus, Train, Flight. Best route, cost, duration & tips. Book cab from ${cabMode?.costRange || ''}. Call 7668570551.`;

  return {
    title,
    description,
    keywords: [
      `how to reach ${route.destination} from ${route.origin}`,
      `${route.origin} to ${route.destination} by car`,
      `${route.origin} to ${route.destination} cab`,
      `${route.origin} to ${route.destination} distance`,
      `${route.origin} to ${route.destination} travel options`,
      `${route.origin} to ${route.destination} by bus`,
      `${route.origin} to ${route.destination} by train`,
      `best way to reach ${route.destination}`,
      `${route.destination} from ${route.origin} cost`,
      `${route.origin} to ${route.destination} road trip`,
      `${route.origin} to ${route.destination} route`,
      `cab ${route.origin} to ${route.destination}`,
      `${route.destination} travel guide`,
      `${route.origin} to ${route.destination} time`,
      `${route.destination} transport options`,
    ],
    authors: [{ name: 'Triveni Cabs' }],
    creator: 'Triveni Cabs',
    publisher: 'Triveni Cabs',
    metadataBase: new URL('https://www.trivenicabs.in'),
    alternates: { canonical: `/how-to-reach/${slug}` },
    openGraph: {
      title: `How to Reach ${route.destination} from ${route.origin} | Compare Car, Bus, Train & Flight \u2014 Triveni Cabs`,
      description,
      type: 'website',
      locale: 'en_IN',
      url: `https://www.trivenicabs.in/how-to-reach/${slug}`,
      siteName: 'Triveni Cabs',
      images: [{ url: getOgImageForSlug(slug), width: 1200, height: 630, alt: `How to Reach ${route.destination} from ${route.origin}` }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `How to Reach ${route.destination} from ${route.origin} | 4 Ways Compared`,
      description,
      creator: '@trivenicabs',
      site: '@trivenicabs',
      images: [getOgImageForSlug(slug)],
    },
    robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
  };
}

export default async function HowToReachRoutePage({ params }) {
  const resolvedParams = await params;
  const { route: slug } = resolvedParams;
  const route = getHowToReachRoute(slug);

  if (!route) {
    notFound();
  }

  const relatedRoutes = getRelatedHowToReachRoutes(slug);

  // JSON-LD: TravelAction Schema
  const travelActionSchema = {
    "@context": "https://schema.org",
    "@type": "TravelAction",
    "name": `Travel from ${route.origin} to ${route.destination}`,
    "fromLocation": {
      "@type": "Place",
      "name": route.origin
    },
    "toLocation": {
      "@type": "Place",
      "name": route.destination
    },
    "agent": {
      "@type": "LocalBusiness",
      "name": "Triveni Cabs",
      "telephone": "+91-7668570551",
      "url": "https://www.trivenicabs.in"
    }
  };

  // JSON-LD: Service Schema
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": `Cab Service ${route.origin} to ${route.destination}`,
    "name": `How to Reach ${route.destination} from ${route.origin} - Cab Service by Triveni Cabs`,
    "description": `Compare 4 ways to reach ${route.destination} from ${route.origin}. Book a cab from ${route.cabPricing?.sedan?.price || ''} (Sedan). Door-to-door service with experienced drivers.`,
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
      { "@type": "ListItem", "position": 2, "name": "How to Reach", "item": "https://www.trivenicabs.in/how-to-reach" },
      { "@type": "ListItem", "position": 3, "name": `${route.destination} from ${route.origin}`, "item": `https://www.trivenicabs.in/how-to-reach/${slug}` }
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
      <AEOHead pageType="route" data={{ url: `/how-to-reach/${slug}`, title: `How to Reach ${route.destination} from ${route.origin}`, origin: route.origin, destination: route.destination, city: route.origin }} />
      <HowToReachClient route={route} relatedRoutes={relatedRoutes} />
    </>
  );
}
