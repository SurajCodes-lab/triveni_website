import { busStands, busStandSlugs, getBusStandBySlug } from '@/utilis/busStandData';
import BusStandClient from '@/components/busstand/BusStandClient';
import { notFound } from 'next/navigation';

export const revalidate = false;
export const dynamicParams = false;

export async function generateStaticParams() {
  return busStandSlugs.map((stand) => ({ stand }));
}

export async function generateMetadata({ params }) {
  const { stand: slug } = await params;
  const stand = getBusStandBySlug(slug);
  if (!stand) return {};

  const title = `${stand.name} Cab Service | Taxi from ${stand.name}, ${stand.city} | Triveni Cabs`;
  const description = `Book reliable taxi from ${stand.name}, ${stand.city}. Fixed fares, 24/7 service, AC cabs. Destinations: ${stand.destinations.slice(0, 3).map(d => d.name).join(', ')} & more. Call 7668570551.`;

  return {
    title,
    description,
    keywords: `${stand.name} cab, ${stand.name} taxi, cab from ${stand.name.toLowerCase()}, taxi service ${stand.name.toLowerCase()}, ${stand.city.toLowerCase()} bus stand taxi, ${slug} cab service, ISBT ${stand.city.toLowerCase()} cab`,
    authors: [{ name: 'Triveni Cabs' }],
    creator: 'Triveni Cabs',
    publisher: 'Triveni Cabs',
    metadataBase: new URL('https://www.trivenicabs.in'),
    alternates: { canonical: `/bus-stand-taxi/${slug}` },
    openGraph: {
      title: `${stand.name} Cab & Taxi Service | Triveni Cabs`,
      description,
      type: 'website',
      locale: 'en_IN',
      url: `https://www.trivenicabs.in/bus-stand-taxi/${slug}`,
      siteName: 'Triveni Cabs',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${stand.name} Cab Service | Triveni Cabs`,
      description,
      creator: '@trivenicabs',
      site: '@trivenicabs',
    },
    robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
  };
}

export default async function BusStandPage({ params }) {
  const { stand: slug } = await params;
  const stand = getBusStandBySlug(slug);
  if (!stand) notFound();

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" },
      { "@type": "ListItem", "position": 2, "name": "Bus Stand Taxi", "item": "https://www.trivenicabs.in/bus-stand-taxi" },
      { "@type": "ListItem", "position": 3, "name": stand.fullName, "item": `https://www.trivenicabs.in/bus-stand-taxi/${slug}` },
    ],
  };

  const taxiServiceSchema = {
    "@context": "https://schema.org",
    "@type": "TaxiService",
    "name": `Triveni Cabs - ${stand.name} Taxi Service`,
    "description": stand.description,
    "provider": {
      "@type": "LocalBusiness",
      "name": "Triveni Cabs",
      "telephone": "+91-7668570551",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "366 Dandupura near Tajganj",
        "addressLocality": "Agra",
        "postalCode": "282006",
        "addressCountry": "IN",
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "27.1751",
        "longitude": "78.0421"
      },
      "priceRange": "$$",
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "00:00",
        "closes": "23:59"
      }
    },
    "areaServed": {
      "@type": "Place",
      "name": `${stand.name}, ${stand.city}`
    },
    "serviceType": "Bus Stand Taxi Service",
    "offers": {
      "@type": "AggregateOffer",
      "lowPrice": stand.destinations[0]?.fare.replace(/[^\d]/g, '') || "100",
      "highPrice": stand.destinations[stand.destinations.length - 1]?.fare.replace(/[^\d,]/g, '').replace(',', '') || "5000",
      "priceCurrency": "INR"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": stand.faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `Triveni Cabs - ${stand.name}`,
    "description": `Reliable taxi and cab service from ${stand.name}, ${stand.city}. 24/7 availability, fixed fares, AC cabs.`,
    "telephone": "+91-7668570551",
    "url": `https://www.trivenicabs.in/bus-stand-taxi/${slug}`,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": stand.city,
      "addressCountry": "IN"
    },
    "areaServed": stand.city,
    "priceRange": "$$",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    }
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(taxiServiceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <BusStandClient stand={stand} slug={slug} allStands={busStands} />
    </>
  );
}
