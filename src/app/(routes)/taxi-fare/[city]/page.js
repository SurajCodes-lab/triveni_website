import { notFound } from 'next/navigation';
import { getTaxiFareCity, getAllTaxiFareSlugs, getRelatedTaxiFareCities } from '@/utilis/taxiFareData';
import CityTaxiFareClient from '@/components/taxi-fare/CityTaxiFareClient';
import AEOHead from '@/components/seo/AEOHead';
import { getOgImageForSlug } from '@/lib/seo/ogImageMap';

export const revalidate = false;
export const dynamicParams = false;

export async function generateStaticParams() {
  return getAllTaxiFareSlugs().map((slug) => ({ city: slug }));
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const { city: slug } = resolvedParams;
  const cityData = getTaxiFareCity(slug);

  if (!cityData) {
    return { title: 'Taxi Fare Not Found' };
  }

  const title = `Taxi Fare in ${cityData.city} | ₹${cityData.baseFare.sedan}/km | Fare Calculator 2026`;
  const description = `${cityData.city} taxi fare starts at ₹${cityData.baseFare.sedan}/km for Sedan, ₹${cityData.baseFare.suv}/km for SUV. Compare with Ola/Uber — save ${cityData.comparisonWithOla.savings}. No surge pricing. Popular route fares, surcharges & fare calculator. Call 7668570551.`;
  const ogTitle = `${cityData.city} Taxi Fare Guide 2026 — ₹${cityData.baseFare.sedan}/km Sedan | Save ${cityData.comparisonWithOla.savings} vs Ola/Uber | Triveni Cabs`;

  return {
    title,
    description,
    keywords: [
      `taxi fare in ${cityData.city.toLowerCase()}`,
      `${cityData.city.toLowerCase()} cab fare per km`,
      `${cityData.city.toLowerCase()} taxi rate`,
      `${cityData.city.toLowerCase()} auto fare`,
      `${cityData.city.toLowerCase()} cab charges`,
      `cheapest taxi in ${cityData.city.toLowerCase()}`,
      `${cityData.city.toLowerCase()} taxi fare calculator`,
      `${cityData.city.toLowerCase()} taxi price`,
      `${cityData.city.toLowerCase()} cab booking rate`,
      `${cityData.city.toLowerCase()} ola uber fare`,
      `${cityData.city.toLowerCase()} taxi per km rate`,
      `${cityData.city.toLowerCase()} outstation cab fare`,
      `${cityData.city.toLowerCase()} local taxi fare`,
      `best taxi service ${cityData.city.toLowerCase()}`,
      `${cityData.city.toLowerCase()} taxi fare comparison`,
    ],
    authors: [{ name: 'Triveni Cabs' }],
    creator: 'Triveni Cabs',
    publisher: 'Triveni Cabs',
    metadataBase: new URL('https://www.trivenicabs.in'),
    alternates: { canonical: `/taxi-fare/${slug}` },
    openGraph: {
      title: ogTitle,
      description,
      type: 'website',
      locale: 'en_IN',
      url: `https://www.trivenicabs.in/taxi-fare/${slug}`,
      siteName: 'Triveni Cabs',
      images: [{ url: getOgImageForSlug(slug), width: 1200, height: 630, alt: `Taxi Fare in ${cityData.city}` }],
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

export default async function TaxiFarePage({ params }) {
  const resolvedParams = await params;
  const { city: slug } = resolvedParams;
  const cityData = getTaxiFareCity(slug);

  if (!cityData) {
    notFound();
  }

  const relatedCities = getRelatedTaxiFareCities(slug);

  // JSON-LD: Service Schema
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": `Taxi Service in ${cityData.city}`,
    "name": `${cityData.city} Taxi Fare — ₹${cityData.baseFare.sedan}/km`,
    "description": `Affordable taxi service in ${cityData.city}. Sedan from ₹${cityData.baseFare.sedan}/km, SUV from ₹${cityData.baseFare.suv}/km. No surge pricing.`,
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
    "areaServed": { "@type": "City", "name": cityData.city },
    "offers": {
      "@type": "AggregateOffer",
      "lowPrice": cityData.minimumFare.toString(),
      "highPrice": "5000",
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

  // JSON-LD: Product Schema (for fare rates)
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": `${cityData.city} Taxi Service`,
    "description": `Book taxi in ${cityData.city} at ₹${cityData.baseFare.sedan}/km. Sedan, SUV, Tempo Traveller available.`,
    "brand": { "@type": "Brand", "name": "Triveni Cabs" },
    "offers": [
      {
        "@type": "Offer",
        "name": "Sedan Taxi",
        "price": cityData.baseFare.sedan.toString(),
        "priceCurrency": "INR",
        "unitText": "per km",
        "availability": "https://schema.org/InStock"
      },
      {
        "@type": "Offer",
        "name": "SUV Taxi",
        "price": cityData.baseFare.suv.toString(),
        "priceCurrency": "INR",
        "unitText": "per km",
        "availability": "https://schema.org/InStock"
      },
      {
        "@type": "Offer",
        "name": "Tempo Traveller",
        "price": cityData.baseFare.tempo.toString(),
        "priceCurrency": "INR",
        "unitText": "per km",
        "availability": "https://schema.org/InStock"
      }
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
      { "@type": "ListItem", "position": 2, "name": "Taxi Fare", "item": "https://www.trivenicabs.in/taxi-fare" },
      { "@type": "ListItem", "position": 3, "name": cityData.city, "item": `https://www.trivenicabs.in/taxi-fare/${slug}` }
    ]
  };

  // JSON-LD: FAQ
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": cityData.faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
    }))
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <AEOHead pageType="cityHub" data={{ url: `/taxi-fare/${slug}`, title: `Taxi Fare in ${cityData.city}`, city: cityData.city }} />
      <CityTaxiFareClient city={cityData} relatedCities={relatedCities} />
    </>
  );
}
