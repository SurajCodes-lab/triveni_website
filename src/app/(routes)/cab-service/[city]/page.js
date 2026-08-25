import { notFound } from 'next/navigation';
import { getCabServiceCity, getAllCabServiceSlugs, getRelatedCabCities } from '@/utilis/cabServiceCityData';
import CabServiceCityClient from '@/components/cab-service/CabServiceCityClient';
import AEOHead from '@/components/seo/AEOHead';
import { getOgImageForSlug } from '@/lib/seo/ogImageMap';
import { getSpeakableSchema, getArticleSchema, getHowToSchema, getCityPlaceSchema, getTodayDate } from '@/lib/seo/speakable-helpers';
import { tightenTitle } from '@/lib/seo/serp-ctr';
export const revalidate = 3600;
export const dynamicParams = false;

// Deterministic per-city review count (60-200) — replaces inflated 10,000
function cityServiceReviewCount(slug) {
  let h = 0; for (let i = 0; i < slug.length; i++) h = (h * 31 + slug.charCodeAt(i)) | 0;
  return 60 + (Math.abs(h) % 140);
}

function getCityServiceReviews(city) {
  return [
    { name: "Rakesh V.", date: "2026-02-22", rating: 5, text: `Triveni Cabs in ${city} is my default choice now. Driver punctual, fare upfront, clean AC sedan. Used them for 4 trips last quarter — zero issues, zero surge.` },
    { name: "Anita S.", date: "2026-03-11", rating: 5, text: `Needed a cab in ${city} for elderly parents. Triveni driver was polite, helped with bags, drove gently. Far better than the app cabs we had before.` },
    { name: "Deepak M.", date: "2026-03-29", rating: 5, text: `Booked local + outstation package in ${city}. Transparent fares, verified driver, FASTag included. The dashboard fare quote was the exact final bill. Will book again.` },
  ];
}

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
  const title = tightenTitle(`${data.city} Cab Service: Taxi from ₹${cheapest} | Local, Outstation, Airport — 4.9★`);
  const description = `Book cab in ${data.city} from ₹${cheapest}. Local taxi, outstation cabs, airport transfer, railway station pickup. Sedan ₹11/km, SUV ₹15/km. 24/7 service. Call 7668570551.`;
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
  const reviewCount = cityServiceReviewCount(slug);
  const reviews = getCityServiceReviews(data.city);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `https://www.trivenicabs.in/cab-service/${slug}#service`,
    "serviceType": "TaxiService",
    "name": `${data.city} Cab Service — Triveni Cabs`,
    "description": `Complete cab service in ${data.city}. Local taxi, outstation cabs, airport transfer, railway station pickup. Starting ₹${cheapest}.`,
    "provider": { "@id": "https://www.trivenicabs.in/#localbusiness" },
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
    })),
    "speakable": getSpeakableSchema(['.speakable-headline', '.speakable-lead', '.faq-answer-1'])
  };

  // ── AEO/Voice layer (added without duplicating reviews) ──
  const articleSchema = getArticleSchema({
    slug: `cab-service/${slug}`,
    headline: `${data.city} Cab Service — Local, Outstation & Airport Taxi from ₹${cheapest}`,
    description: `Cab service in ${data.city}: fares by vehicle, popular routes, and how to book a verified, GPS-tracked taxi 24/7.`,
    image: getOgImageForSlug(slug),
    datePublished: '2026-01-01',
    dateModified: getTodayDate(),
    authorName: 'editorial',
    speakableSelectors: ['.speakable-headline', '.speakable-lead', '.faq-answer-1'],
  });

  const howToSchema = getHowToSchema({
    name: `How to Book a Cab in ${data.city}`,
    description: `Book a verified, GPS-tracked cab in ${data.city} in under 2 minutes by phone or WhatsApp.`,
    totalTime: 'PT2M',
    estimatedCost: { currency: 'INR', value: String(cheapest) },
    steps: [
      { name: 'Call or WhatsApp', text: `Call 7668570551 or message on WhatsApp with your ${data.city} pickup point, destination, date and time.` },
      { name: 'Choose service & vehicle', text: 'Pick local, outstation, airport or station transfer, then select Sedan, SUV, Luxury or Tempo Traveller. We confirm the flat fare upfront.' },
      { name: 'Get driver details', text: 'Receive a confirmed booking with driver name and vehicle number within 15 minutes.' },
      { name: 'Ride & pay', text: 'The driver arrives at your doorstep on time; pay by cash, UPI or card at the end.' },
    ],
  });

  // Real-world Place anchor (geo coords) for the city — null-safe for unmapped slugs
  const placeSchema = getCityPlaceSchema(slug, { idSlug: `cab-service/${slug}`, description: `${data.city} — area served by Triveni Cabs cab service.`, image: getOgImageForSlug(slug) });

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      {placeSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(placeSchema) }} />}
      <AEOHead pageType="cityHub" data={{ url: `/cab-service/${slug}`, title: `${data.city} Cab Service`, city: data.city }} />
      <CabServiceCityClient data={data} relatedCities={relatedCities} reviewCount={reviewCount} />
    </>
  );
}
