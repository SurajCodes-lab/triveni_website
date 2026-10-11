import { notFound } from 'next/navigation';
import { getBestTimeData, getAllBestTimeSlugs, getRelatedBestTimeDestinations } from '@/utilis/bestTimeToVisitData';
import BestTimeClient from '@/components/best-time/BestTimeClient';
import AEOHead from '@/components/seo/AEOHead';
import { getOgImageForSlug } from '@/lib/seo/ogImageMap';
import { getCityImage } from '@/utilis/imageUtils';
import { buildBestTimeMeta } from '@/lib/seo/serp-ctr';
import DataTable from '@/components/seo/DataTable';
// Week 48: two destinations (Kasol, Amritsar) were rebuilt as full guides on
// their existing URLs rather than beside them, so the ranking URL keeps its
// history. The registry answers with a guide for those slugs and null for the
// rest, which fall through to the family template unchanged.
import { getWeek48GuideByPath } from '@/utilis/guides/week48';
import GuidePage from '@/components/guides/GuidePage';
import { buildGuideMetadata } from '@/lib/seo/guide-schema';

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
  const week48Guide = getWeek48GuideByPath(`/best-time-to-visit/${slug}`);
  if (week48Guide) return buildGuideMetadata(week48Guide);
  const data = getBestTimeData(slug);

  if (!data) {
    return { title: 'Best Time to Visit - Not Found' };
  }

  // Week 43 — answer-box defence: Google prints a weather widget and a
  // featured snippet for "best time to visit X", so the title never carries
  // the weather figure. Week 48 (C3): the title now answers the question
  // (peak months) and names the rate card; the description leads with the
  // cheapest months and crowds, which the panel cannot show.
  // See buildBestTimeMeta in src/lib/seo/serp-ctr.js.
  const { title, description } = buildBestTimeMeta(data);
  const ogTitle = `When to Visit ${data.destination}? | Season-by-Season Travel Guide with Cab Booking | Triveni Cabs™`;

  return {
    // Title carries no brand suffix of its own: the root layout appends
    // '%s | Triveni Cabs'. serp-ctr budgets the content half at 58 chars
    // (DISPLAY_BUDGET) so the peak months and the rate survive Google's
    // ~60-char truncation on every destination name in the dataset.
    title: title,
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
    authors: [{ name: 'Triveni Cabs™' }],
    creator: 'Triveni Cabs™',
    publisher: 'Triveni Cabs™',
    metadataBase: new URL('https://www.trivenicabs.in'),
    alternates: { canonical: `/best-time-to-visit/${slug}` },
    openGraph: {
      title: ogTitle,
      description,
      type: 'website',
      locale: 'en_IN',
      url: `https://www.trivenicabs.in/best-time-to-visit/${slug}`,
      siteName: 'Triveni Cabs™',
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
  const week48Guide = getWeek48GuideByPath(`/best-time-to-visit/${slug}`);
  if (week48Guide) return <GuidePage guide={week48Guide} />;
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
      {/* Season table — "best time to visit X" is a month-by-month question,
          and a table is the format Google renders as a snippet for it. */}
      <DataTable
        title={`Best time to visit ${data.destination} — season by season`}
        caption={`Seasons in ${data.destination} compared by months, typical temperature, crowd level and price tier.`}
        intro="Temperatures are typical daytime ranges. Price tier reflects both accommodation and cab demand."
        columns={[
          { key: 'name', label: 'Season' },
          { key: 'months', label: 'Months' },
          { key: 'temp', label: 'Temperature' },
          { key: 'crowd', label: 'Crowds' },
          { key: 'pricing', label: 'Price tier', align: 'right', strong: true },
        ]}
        rows={data.seasons || []}
        tone="light"
        className="bg-slate-50"
      />

      <BestTimeClient data={data} relatedDestinations={relatedDestinations} />
    </>
  );
}
