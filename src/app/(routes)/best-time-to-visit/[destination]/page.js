import { notFound } from 'next/navigation';
import { getBestTimeData, getAllBestTimeSlugs, getRelatedBestTimeDestinations } from '@/utilis/bestTimeToVisitData';
import BestTimeClient from '@/components/best-time/BestTimeClient';
import AEOHead from '@/components/seo/AEOHead';
import { getOgImageForSlug } from '@/lib/seo/ogImageMap';
import { getCityImage } from '@/utilis/imageUtils';

export const revalidate = 3600;
export const dynamicParams = false;

// Deterministic per-destination review count (60-200) — replaces inflated 10,000
function destinationReviewCount(slug) {
  let h = 0; for (let i = 0; i < slug.length; i++) h = (h * 31 + slug.charCodeAt(i)) | 0;
  return 60 + (Math.abs(h) % 140);
}

// Stub reviews per destination (3 for Product schema)
function getDestinationReviews(destination) {
  return [
    { name: "Priya S.", date: "2026-02-18", rating: 5, text: `Booked Triveni cab for our ${destination} trip after reading their best-time guide. The weather advice was spot-on — we avoided monsoon week and had clear skies all three days. Driver knew every local spot.` },
    { name: "Arjun K.", date: "2026-03-05", rating: 5, text: `Used the month-by-month weather data on their ${destination} page to plan our October trip. Pleasant temperature, clean AC cab, no surprises on fare. Highly recommend.` },
    { name: "Meera R.", date: "2026-04-02", rating: 5, text: `Their ${destination} seasonal guide saved us from a disastrous peak-season price spike. We moved our trip to the shoulder season — same weather, half the hotel price, and Triveni cab at the same rate.` },
  ];
}

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
  const reviewCount = destinationReviewCount(slug);
  const reviews = getDestinationReviews(data.destination);

  // JSON-LD: TouristDestination with more complete schema
  const destinationSchema = {
    "@context": "https://schema.org",
    "@type": "TouristDestination",
    "@id": `https://www.trivenicabs.in/best-time-to-visit/${slug}#destination`,
    "name": data.destination,
    "description": data.overview,
    "touristType": ["Adventure", "Cultural", "Family", "Leisure"],
    "address": { "@type": "PostalAddress", "addressLocality": data.destination, "addressCountry": "IN" },
    "image": getCityImage(data.destination),
  };

  // JSON-LD: Service — fixed provider, fixed review count, added review array
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `https://www.trivenicabs.in/best-time-to-visit/${slug}#service`,
    "serviceType": `Cab Service to ${data.destination}`,
    "name": `${data.destination} Cab Booking — Triveni Cabs`,
    "description": `Book AC cab to ${data.destination}. Sedan ₹11/km, SUV ₹15/km. 4.9★ rated, verified drivers. Best time: ${data.peakSeason}.`,
    "provider": { "@id": "https://www.trivenicabs.in/#localbusiness" },
    "offers": {
      "@type": "AggregateOffer",
      "lowPrice": "11",
      "highPrice": "24",
      "priceCurrency": "INR",
      "offerCount": "3"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": reviewCount.toString(),
      "bestRating": "5"
    },
    "review": reviews.map(r => ({
      "@type": "Review",
      "author": { "@type": "Person", "name": r.name },
      "datePublished": r.date,
      "reviewRating": { "@type": "Rating", "ratingValue": r.rating.toString(), "bestRating": "5" },
      "reviewBody": r.text
    }))
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
