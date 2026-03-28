import { notFound } from 'next/navigation';
import { getBestTimeData, getAllBestTimeSlugs, getRelatedBestTimeDestinations } from '@/utilis/bestTimeToVisitData';
import BestTimeClient from '@/components/best-time/BestTimeClient';
import AEOHead from '@/components/seo/AEOHead';
import { getOgImageForSlug } from '@/lib/seo/ogImageMap';

export const revalidate = false;
export const dynamicParams = false;

export async function generateStaticParams() {
  return getAllBestTimeSlugs().map((slug) => ({ destination: slug }));
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const { destination: slug } = resolvedParams;
  const data = getBestTimeData(slug);

  if (!data) {
    return { title: 'Best Time to Visit - Not Found' };
  }

  const title = `Best Time to Visit ${data.destination} | Month-by-Month Guide 2026 — Triveni Cabs`;
  const description = `Best time to visit ${data.destination}: ${data.peakSeason}. Complete month-by-month weather, crowd, festival & budget guide. Book cab from ₹11/km. Call 7668570551.`;
  const ogTitle = `When to Visit ${data.destination}? | Season-by-Season Travel Guide with Cab Booking | Triveni Cabs`;

  return {
    title,
    description,
    keywords: [
      `best time to visit ${data.destination.toLowerCase()}`,
      `${data.destination.toLowerCase()} weather`,
      `${data.destination.toLowerCase()} best month`,
      `${data.destination.toLowerCase()} travel season`,
      `when to visit ${data.destination.toLowerCase()}`,
      `${data.destination.toLowerCase()} climate`,
      `${data.destination.toLowerCase()} peak season`,
      `${data.destination.toLowerCase()} off season`,
      `${data.destination.toLowerCase()} weather month wise`,
      `${data.destination.toLowerCase()} trip planning`,
      `${data.destination.toLowerCase()} festivals`,
      `${data.destination.toLowerCase()} cab booking`,
      `${data.destination.toLowerCase()} travel guide 2026`,
      `best season ${data.destination.toLowerCase()}`,
      `${data.destination.toLowerCase()} tourism`,
    ],
    authors: [{ name: 'Triveni Cabs' }],
    creator: 'Triveni Cabs',
    publisher: 'Triveni Cabs',
    metadataBase: new URL('https://www.trivenicabs.in'),
    alternates: { canonical: `/best-time-to-visit/${slug}` },
    openGraph: {
      title: ogTitle,
      description,
      type: 'website',
      locale: 'en_IN',
      url: `https://www.trivenicabs.in/best-time-to-visit/${slug}`,
      siteName: 'Triveni Cabs',
      images: [{ url: getOgImageForSlug(slug), width: 1200, height: 630, alt: `Best Time to Visit ${data.destination}` }],
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

export default async function BestTimeToVisitPage({ params }) {
  const resolvedParams = await params;
  const { destination: slug } = resolvedParams;
  const data = getBestTimeData(slug);

  if (!data) {
    notFound();
  }

  const relatedDestinations = getRelatedBestTimeDestinations(slug);

  // JSON-LD: TouristDestination
  const destinationSchema = {
    "@context": "https://schema.org",
    "@type": "TouristDestination",
    "name": data.destination,
    "description": data.overview,
    "touristType": ["Adventure", "Cultural", "Family", "Leisure"],
  };

  // JSON-LD: Service
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": `Cab Service to ${data.destination}`,
    "name": `${data.destination} Cab Booking — Triveni Cabs`,
    "description": `Book AC cab to ${data.destination}. Sedan ₹11/km, SUV ₹14/km. 4.9★ rated, verified drivers. Best time: ${data.peakSeason}.`,
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
    "offers": {
      "@type": "AggregateOffer",
      "lowPrice": "11",
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
      { "@type": "ListItem", "position": 2, "name": "Best Time to Visit", "item": "https://www.trivenicabs.in/best-time-to-visit" },
      { "@type": "ListItem", "position": 3, "name": data.destination, "item": `https://www.trivenicabs.in/best-time-to-visit/${slug}` }
    ]
  };

  // JSON-LD: FAQ
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(destinationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <AEOHead pageType="cityHub" data={{ url: `/best-time-to-visit/${slug}`, title: `Best Time to Visit ${data.destination}`, city: data.destination }} />
      <BestTimeClient data={data} relatedDestinations={relatedDestinations} />
    </>
  );
}
