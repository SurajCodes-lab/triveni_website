import { notFound } from 'next/navigation';
import { getLocalTaxiCity, getAllLocalTaxiSlugs, getRelatedLocalTaxiCities } from '@/utilis/localTaxiCityData';
import LocalTaxiCityClient from '@/components/local-taxi/LocalTaxiCityClient';
import AEOHead from '@/components/seo/AEOHead';
import { getOgImageForSlug } from '@/lib/seo/ogImageMap';

export const revalidate = false;
export const dynamicParams = false;

export async function generateStaticParams() {
  return getAllLocalTaxiSlugs().map((slug) => ({ city: slug }));
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const { city: slug } = resolvedParams;
  const city = getLocalTaxiCity(slug);

  if (!city) {
    return { title: 'Local Taxi City Not Found' };
  }

  const lowestSedan = Math.min(...city.packages.map((p) => p.sedan));
  const title = `Local Taxi in ${city.city} | Hourly from Rs ${lowestSedan.toLocaleString('en-IN')} — 4.9★ Rated`;
  const description = `Book local taxi in ${city.city} starting Rs ${lowestSedan.toLocaleString('en-IN')} for 4 hrs. AC sedan & SUV hourly packages. ${city.coverageAreas.slice(0, 3).join(', ')} coverage. 4.9★ rated, GPS-tracked cabs. Call 7668570551.`;

  return {
    title,
    description,
    keywords: [
      `local taxi in ${city.city.toLowerCase()}`,
      `${city.city.toLowerCase()} local cab`,
      `${city.city.toLowerCase()} hourly taxi`,
      `${city.city.toLowerCase()} taxi service`,
      `${city.city.toLowerCase()} cab booking`,
      `hire taxi in ${city.city.toLowerCase()}`,
      `${city.city.toLowerCase()} taxi per hour`,
      `${city.city.toLowerCase()} sightseeing taxi`,
      `best taxi service ${city.city.toLowerCase()}`,
      `cheap local taxi ${city.city.toLowerCase()}`,
      `${city.city.toLowerCase()} cab per km rate`,
      `book cab in ${city.city.toLowerCase()}`,
      `${city.city.toLowerCase()} taxi for shopping`,
      `${city.city.toLowerCase()} taxi near me`,
      `local cab service ${city.city.toLowerCase()}`,
    ],
    authors: [{ name: 'Triveni Cabs' }],
    creator: 'Triveni Cabs',
    publisher: 'Triveni Cabs',
    metadataBase: new URL('https://www.trivenicabs.in'),
    alternates: { canonical: `/local-taxi/${slug}` },
    openGraph: {
      title: `Local Taxi in ${city.city} — Hourly Cab from Rs ${lowestSedan.toLocaleString('en-IN')} | Triveni Cabs`,
      description,
      type: 'website',
      locale: 'en_IN',
      url: `https://www.trivenicabs.in/local-taxi/${slug}`,
      siteName: 'Triveni Cabs',
      images: [{ url: getOgImageForSlug(slug), width: 1200, height: 630, alt: `Local Taxi in ${city.city}` }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `Local Taxi in ${city.city} | Hourly from Rs ${lowestSedan.toLocaleString('en-IN')} — 4.9★`,
      description,
      creator: '@trivenicabs',
      site: '@trivenicabs',
      images: [getOgImageForSlug(slug)],
    },
    robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
  };
}

export default async function LocalTaxiCityPage({ params }) {
  const resolvedParams = await params;
  const { city: slug } = resolvedParams;
  const city = getLocalTaxiCity(slug);

  if (!city) {
    notFound();
  }

  const relatedCities = getRelatedLocalTaxiCities(slug);
  const lowestSedan = Math.min(...city.packages.map((p) => p.sedan));

  // JSON-LD: Service Schema
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": `Local Taxi Service in ${city.city}`,
    "name": `Local Taxi in ${city.city} — Hourly from Rs ${lowestSedan}`,
    "description": `Book local taxi in ${city.city}. Hourly sedan & SUV packages starting Rs ${lowestSedan}. AC cabs, GPS-tracked, verified drivers. 24/7 availability. Call 7668570551.`,
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
    "areaServed": {
      "@type": "City",
      "name": city.city
    },
    "offers": {
      "@type": "AggregateOffer",
      "lowPrice": lowestSedan.toString(),
      "highPrice": Math.max(...city.packages.map((p) => p.suv)).toString(),
      "priceCurrency": "INR",
      "offerCount": city.packages.length.toString()
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
      { "@type": "ListItem", "position": 2, "name": "Local Taxi", "item": "https://www.trivenicabs.in/local-taxi" },
      { "@type": "ListItem", "position": 3, "name": `Local Taxi in ${city.city}`, "item": `https://www.trivenicabs.in/local-taxi/${slug}` }
    ]
  };

  // JSON-LD: FAQ
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": city.faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
    }))
  };

  // JSON-LD: Product (for rich snippets with price)
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": `Local Taxi in ${city.city}`,
    "description": `Hourly local taxi service in ${city.city}. Sedan from Rs ${lowestSedan}, SUV from Rs ${Math.min(...city.packages.map((p) => p.suv))}. Covers ${city.coverageAreas.join(', ')}.`,
    "brand": { "@type": "Brand", "name": "Triveni Cabs" },
    "offers": city.packages.map((pkg) => ({
      "@type": "Offer",
      "name": `${pkg.name} — Sedan`,
      "price": pkg.sedan.toString(),
      "priceCurrency": "INR",
      "availability": "https://schema.org/InStock",
      "url": `https://www.trivenicabs.in/local-taxi/${slug}`
    })),
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
      <AEOHead pageType="cityHub" data={{ url: `/local-taxi/${slug}`, title: `Local Taxi in ${city.city}`, city: city.city }} />
      <LocalTaxiCityClient city={city} relatedCities={relatedCities} />
    </>
  );
}
