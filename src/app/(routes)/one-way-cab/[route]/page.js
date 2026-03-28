import { notFound } from 'next/navigation';
import { getOneWayRoute, getAllOneWayRouteSlugs, getRelatedRoutes } from '@/utilis/oneWayCabData';
import OneWayCabRouteClient from '@/components/oneway/OneWayCabRouteClient';
import AEOHead from '@/components/seo/AEOHead';
import { getOgImageForSlug } from '@/lib/seo/ogImageMap';

export const revalidate = false;
export const dynamicParams = false;

export async function generateStaticParams() {
  return getAllOneWayRouteSlugs().map((slug) => ({ route: slug }));
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const { route: slug } = resolvedParams;
  const route = getOneWayRoute(slug);

  if (!route) {
    return { title: 'One Way Cab Route Not Found' };
  }

  const title = `One Way Cab ${route.from} to ${route.to} | ${route.oneWayFares.sedan} | Save ${route.savingsPercent}`;
  const description = `Book one way cab from ${route.from} to ${route.to} at ${route.oneWayFares.sedan} (Sedan). ${route.distance}, ${route.time} via ${route.highway}. Save ${route.savingsPercent} vs round trip. Call 7668570551.`;

  return {
    title,
    description,
    keywords: [
      `one way cab ${route.from} to ${route.to}`,
      `${route.from} to ${route.to} one way taxi`,
      `${route.from} to ${route.to} cab fare`,
      `${route.from} to ${route.to} cab booking`,
      `${route.from} to ${route.to} taxi`,
      `one way taxi ${route.from} to ${route.to}`,
      `${route.from} to ${route.to} drop`,
      `${route.from} to ${route.to} one way`,
      `${route.from} to ${route.to} cab price`,
      `cheap cab ${route.from} to ${route.to}`,
      `${route.from} to ${route.to} by car`,
      `${route.from} to ${route.to} taxi fare`,
      `${route.from} ${route.to} cab`,
      `one way cab booking ${route.from}`,
      `${route.from} to ${route.to} distance`,
    ],
    authors: [{ name: 'Triveni Cabs' }],
    creator: 'Triveni Cabs',
    publisher: 'Triveni Cabs',
    metadataBase: new URL('https://www.trivenicabs.in'),
    alternates: { canonical: `/one-way-cab/${slug}` },
    openGraph: {
      title: `One Way Cab ${route.from} to ${route.to} | ${route.oneWayFares.sedan} Sedan | Triveni Cabs`,
      description,
      type: 'website',
      locale: 'en_IN',
      url: `https://www.trivenicabs.in/one-way-cab/${slug}`,
      siteName: 'Triveni Cabs',
      images: [{ url: getOgImageForSlug(slug), width: 1200, height: 630, alt: `One Way Cab ${route.from} to ${route.to}` }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `One Way Cab ${route.from} to ${route.to} | Save ${route.savingsPercent}`,
      description,
      creator: '@trivenicabs',
      site: '@trivenicabs',
      images: [getOgImageForSlug(slug)],
    },
    robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
  };
}

export default async function OneWayCabRoutePage({ params }) {
  const resolvedParams = await params;
  const { route: slug } = resolvedParams;
  const route = getOneWayRoute(slug);

  if (!route) {
    notFound();
  }

  const relatedRoutes = getRelatedRoutes(slug);

  // JSON-LD: Service Schema
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": `One Way Cab ${route.from} to ${route.to}`,
    "name": `One Way Cab from ${route.from} to ${route.to} - ${route.oneWayFares.sedan} Sedan`,
    "description": `Book one way cab from ${route.from} to ${route.to}. ${route.distance}, ${route.time} via ${route.highway}. Sedan ${route.oneWayFares.sedan}, Ertiga ${route.oneWayFares.ertiga}, Innova ${route.oneWayFares.innova}.`,
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
      { "@type": "City", "name": route.from },
      { "@type": "City", "name": route.to }
    ],
    "offers": {
      "@type": "AggregateOffer",
      "lowPrice": route.sedanRaw.toString(),
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
      { "@type": "ListItem", "position": 2, "name": "One Way Cab", "item": "https://www.trivenicabs.in/one-way-cab" },
      { "@type": "ListItem", "position": 3, "name": `${route.from} to ${route.to}`, "item": `https://www.trivenicabs.in/one-way-cab/${slug}` }
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

  // JSON-LD: Product (for rich snippets with price)
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": `One Way Cab ${route.from} to ${route.to}`,
    "description": `One way cab service from ${route.from} to ${route.to}. ${route.distance} via ${route.highway}. ${route.time} travel time.`,
    "brand": { "@type": "Brand", "name": "Triveni Cabs" },
    "offers": [
      {
        "@type": "Offer",
        "name": "Sedan (Swift Dzire / Etios)",
        "price": route.sedanRaw.toString(),
        "priceCurrency": "INR",
        "availability": "https://schema.org/InStock",
        "url": `https://www.trivenicabs.in/one-way-cab/${slug}`
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "10000"
    }
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      <AEOHead pageType="route" data={{ url: `/one-way-cab/${slug}`, title: `One Way Cab ${route.from} to ${route.to}`, origin: route.from, destination: route.to, city: route.from }} />
      <OneWayCabRouteClient route={route} relatedRoutes={relatedRoutes} />
    </>
  );
}
