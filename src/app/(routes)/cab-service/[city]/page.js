import { notFound } from 'next/navigation';
import { getCabServiceCity, getAllCabServiceSlugs, getRelatedCabCities } from '@/utilis/cabServiceCityData';
import CabServiceCityClient from '@/components/cab-service/CabServiceCityClient';
import AEOHead from '@/components/seo/AEOHead';
import { getOgImageForSlug } from '@/lib/seo/ogImageMap';

export const revalidate = false;
export const dynamicParams = false;

export async function generateStaticParams() {
  return getAllCabServiceSlugs().map((slug) => ({ city: slug }));
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const { city: slug } = resolvedParams;
  const data = getCabServiceCity(slug);

  if (!data) {
    return { title: 'City Not Found' };
  }

  const cheapest = Math.min(...data.services.map(s => s.startingPrice));
  const title = `${data.city} Cab Service: Taxi from ₹${cheapest} | Local, Outstation, Airport — 4.9★`;
  const description = `Book cab in ${data.city} from ₹${cheapest}. Local taxi, outstation cabs, airport transfer, railway station pickup. Sedan ₹11/km, SUV ₹14/km. 24/7 service. Call 7668570551.`;
  const ogTitle = `${data.city} Cab Service — Local & Outstation Taxi from ₹${cheapest} | 24/7 Booking | Triveni Cabs`;

  return {
    title,
    description,
    keywords: [
      `${data.city.toLowerCase()} cab service`,
      `${data.city.toLowerCase()} taxi service`,
      `cab in ${data.city.toLowerCase()}`,
      `taxi in ${data.city.toLowerCase()}`,
      `${data.city.toLowerCase()} cab booking`,
      `${data.city.toLowerCase()} local taxi`,
      `${data.city.toLowerCase()} outstation cab`,
      `${data.city.toLowerCase()} airport taxi`,
      `${data.city.toLowerCase()} cab fare`,
      `best cab service ${data.city.toLowerCase()}`,
      `cheap taxi ${data.city.toLowerCase()}`,
      `${data.city.toLowerCase()} cab rate per km`,
      `online cab booking ${data.city.toLowerCase()}`,
      `24 hour taxi ${data.city.toLowerCase()}`,
    ],
    authors: [{ name: 'Triveni Cabs' }],
    creator: 'Triveni Cabs',
    publisher: 'Triveni Cabs',
    metadataBase: new URL('https://www.trivenicabs.in'),
    alternates: { canonical: `/cab-service/${slug}` },
    openGraph: {
      title: ogTitle,
      description,
      type: 'website',
      locale: 'en_IN',
      url: `https://www.trivenicabs.in/cab-service/${slug}`,
      siteName: 'Triveni Cabs',
      images: [{ url: getOgImageForSlug(slug), width: 1200, height: 630, alt: `${data.city} Cab Service` }],
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

export default async function CabServiceCityPage({ params }) {
  const resolvedParams = await params;
  const { city: slug } = resolvedParams;
  const data = getCabServiceCity(slug);

  if (!data) {
    notFound();
  }

  const relatedCities = getRelatedCabCities(slug);
  const cheapest = Math.min(...data.services.map(s => s.startingPrice));

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "TaxiService",
    "name": `${data.city} Cab Service — Triveni Cabs`,
    "description": `Complete cab service in ${data.city}. Local taxi, outstation cabs, airport transfer, railway station pickup. Starting ₹${cheapest}.`,
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
      "name": data.city
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": `${data.city} Cab Services`,
      "itemListElement": data.services.map(s => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": s.name,
          "description": s.description
        },
        "price": s.startingPrice.toString(),
        "priceCurrency": "INR"
      }))
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
      { "@type": "ListItem", "position": 2, "name": "Cab Service", "item": "https://www.trivenicabs.in/cab-service" },
      { "@type": "ListItem", "position": 3, "name": data.city, "item": `https://www.trivenicabs.in/cab-service/${slug}` }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": data.faqs.map(faq => ({
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
      <AEOHead pageType="cityHub" data={{ url: `/cab-service/${slug}`, title: `${data.city} Cab Service`, city: data.city }} />
      <CabServiceCityClient data={data} relatedCities={relatedCities} />
    </>
  );
}
