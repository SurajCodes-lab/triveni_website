import { notFound } from 'next/navigation';
import { getOutstationCity, getAllOutstationCitySlugs, getRelatedOutstationCities } from '@/utilis/outstationCityData';
import OutstationCityClient from '@/components/outstation/OutstationCityClient';
import AEOHead from '@/components/seo/AEOHead';
import { getOgImageForSlug } from '@/lib/seo/ogImageMap';

export const revalidate = false;
export const dynamicParams = false;

export async function generateStaticParams() {
  return getAllOutstationCitySlugs().map((slug) => ({ city: slug }));
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const { city: slug } = resolvedParams;
  const cityData = getOutstationCity(slug);

  if (!cityData) {
    return { title: 'Outstation Cabs - City Not Found' };
  }

  const lowestFare = Math.min(...cityData.popularRoutes.map((r) => r.fare));
  const routeCount = cityData.popularRoutes.length;

  const title = `Outstation Cabs from ${cityData.city} | ${routeCount}0+ Routes from \u20B9${lowestFare.toLocaleString('en-IN')} \u2014 4.9\u2605`;
  const description = `Book outstation cabs from ${cityData.city} starting \u20B9${cityData.vehicleOptions[0].perKm}/km. ${routeCount}0+ routes with one-way & round trip options. Sedan, SUV, Tempo Traveller. Verified drivers, AC vehicles. Call 7668570551 for instant booking.`;

  return {
    title,
    description,
    keywords: [
      `outstation cab from ${cityData.city.toLowerCase()}`,
      `${cityData.city.toLowerCase()} outstation taxi`,
      `${cityData.city.toLowerCase()} outstation cab booking`,
      `one way cab from ${cityData.city.toLowerCase()}`,
      `${cityData.city.toLowerCase()} to delhi cab`,
      `${cityData.city.toLowerCase()} outstation cab service`,
      `outstation taxi ${cityData.city.toLowerCase()}`,
      `${cityData.city.toLowerCase()} intercity cab`,
      `${cityData.city.toLowerCase()} long distance taxi`,
      `cheap outstation cab ${cityData.city.toLowerCase()}`,
      `${cityData.city.toLowerCase()} cab booking outstation`,
      `best outstation cab ${cityData.city.toLowerCase()}`,
      `${cityData.city.toLowerCase()} outstation car rental`,
      `${cityData.city.toLowerCase()} round trip cab`,
      `${cityData.city.toLowerCase()} outstation cab fare`,
    ],
    authors: [{ name: 'Triveni Cabs' }],
    creator: 'Triveni Cabs',
    publisher: 'Triveni Cabs',
    metadataBase: new URL('https://www.trivenicabs.in'),
    alternates: { canonical: `/outstation-cabs/${slug}` },
    openGraph: {
      title: `Outstation Cabs from ${cityData.city} | Book ${routeCount}0+ Routes from \u20B9${lowestFare.toLocaleString('en-IN')} | Triveni Cabs`,
      description,
      type: 'website',
      locale: 'en_IN',
      url: `https://www.trivenicabs.in/outstation-cabs/${slug}`,
      siteName: 'Triveni Cabs',
      images: [{ url: getOgImageForSlug(slug), width: 1200, height: 630, alt: `Outstation Cabs from ${cityData.city}` }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `Outstation Cabs from ${cityData.city} | ${routeCount}0+ Routes | 4.9\u2605 Rated`,
      description,
      creator: '@trivenicabs',
      site: '@trivenicabs',
      images: [getOgImageForSlug(slug)],
    },
    robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
  };
}

export default async function OutstationCityCabPage({ params }) {
  const resolvedParams = await params;
  const { city: slug } = resolvedParams;
  const cityData = getOutstationCity(slug);

  if (!cityData) {
    notFound();
  }

  const relatedCities = getRelatedOutstationCities(slug);
  const lowestFare = Math.min(...cityData.popularRoutes.map((r) => r.fare));

  // JSON-LD: Service Schema
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": `Outstation Cab Service from ${cityData.city}`,
    "name": `Outstation Cabs from ${cityData.city} - One Way & Round Trip`,
    "description": `Book outstation cabs from ${cityData.city}. Sedan \u20B9${cityData.vehicleOptions[0].perKm}/km, SUV \u20B9${cityData.vehicleOptions[1].perKm}/km, Tempo \u20B9${cityData.vehicleOptions[2].perKm}/km. ${cityData.popularRoutes.length}0+ routes available.`,
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
      "name": cityData.city
    },
    "offers": {
      "@type": "AggregateOffer",
      "lowPrice": lowestFare.toString(),
      "highPrice": (lowestFare * 3).toString(),
      "priceCurrency": "INR",
      "offerCount": `${cityData.popularRoutes.length}0`
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
      { "@type": "ListItem", "position": 2, "name": "Outstation Cabs", "item": "https://www.trivenicabs.in/outstation-cabs" },
      { "@type": "ListItem", "position": 3, "name": `Outstation Cabs from ${cityData.city}`, "item": `https://www.trivenicabs.in/outstation-cabs/${slug}` }
    ]
  };

  // JSON-LD: FAQ
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": cityData.faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
    }))
  };

  // JSON-LD: AggregateOffer (for rich fare snippets)
  const aggregateOfferSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": `Outstation Cab from ${cityData.city}`,
    "description": `Outstation cab service from ${cityData.city} to ${cityData.popularRoutes.length}0+ destinations. Sedan, SUV, and Tempo Traveller options.`,
    "brand": { "@type": "Brand", "name": "Triveni Cabs" },
    "offers": cityData.vehicleOptions.map((v) => ({
      "@type": "Offer",
      "name": `${v.type} (${v.model})`,
      "price": (v.perKm * v.minKm).toString(),
      "priceCurrency": "INR",
      "availability": "https://schema.org/InStock",
      "url": `https://www.trivenicabs.in/outstation-cabs/${slug}`
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aggregateOfferSchema) }} />
      <AEOHead pageType="route" data={{ url: `/outstation-cabs/${slug}`, title: `Outstation Cabs from ${cityData.city}`, city: cityData.city }} />
      <OutstationCityClient cityData={cityData} relatedCities={relatedCities} />
    </>
  );
}
