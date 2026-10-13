import { notFound } from 'next/navigation';
import { getTollCostRoute, getAllTollCostSlugs, getRelatedTollCostRoutes, cityNameToGeoSlug } from '@/utilis/tollCostData';
import TollCostClient from '@/components/toll-cost/TollCostClient';
import PriorityPageGuide from '@/components/content/PriorityPageGuide';
import { getCorridorLinks } from '@/utilis/corridorLinks';
import { getSeasonalCorridorCallout } from '@/utilis/seasonalCorridors';
import { canonicalLink } from '@/lib/seo/canonical-link';
import { servedHref } from '@/lib/seo/route-exists';
import AEOHead from '@/components/seo/AEOHead';
import { getOgImageForSlug } from '@/lib/seo/ogImageMap';
import { getRatingAndReviews } from '@/lib/seo/review-helpers';
import {
  getSpeakableSchema, getArticleSchema, getHowToSchema,
  getComparisonSchema, getCityPlaceSchema, getTodayDate,
} from '@/lib/seo/speakable-helpers';
import { tightenTitle } from '@/lib/seo/serp-ctr';
import { groupDigits } from '@/utilis/pricing';
export const revalidate = 3600;
export const dynamicParams = false;

export async function generateStaticParams() {
  return getAllTollCostSlugs().map((slug) => ({ route: slug }));
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const { route: slug } = resolvedParams;
  const route = getTollCostRoute(slug);

  if (!route) {
    return { title: 'Toll Cost Guide Not Found' };
  }

  const o = route.origin.toLowerCase();
  const d = route.destination.toLowerCase();
  // Week 48 C3: expressway corridors lead with the road's name. The toll family
  // converts well (Delhi–Haridwar 2.4%, Delhi–Chandigarh 2.6%) and those pages
  // are untouched controls; the two that lag it (Delhi–Meerut 0.54%) are
  // expressway runs whose titles never named the expressway, which is what a
  // large share of their searches type. The origin–destination pair stays in
  // the first clause so the title clamp can only ever drop the tail.
  const plazaCount = route.tollPlazas.length;
  const plazaWord = plazaCount === 1 ? 'plaza' : 'plazas';
  const title = route.corridorRoad
    ? tightenTitle(`${route.corridorRoad} Toll ₹${groupDigits(route.totalTollCost.car)}: ${route.origin} to ${route.destination} | Plazas 2026`)
    : tightenTitle(`${route.origin} to ${route.destination} Toll Cost ₹${groupDigits(route.totalTollCost.car)} | Toll Plaza List 2026`);
  const description = route.corridorRoad
    ? `${route.origin} to ${route.destination} on the ${route.corridorRoad}: toll ₹${groupDigits(route.totalTollCost.car)} for a car and ₹${groupDigits(route.totalTollCost.suv)} for an SUV across ${plazaCount} ${plazaWord} on ${route.totalDistance} km. Plaza-wise rates, FASTag, and the cab fare of ₹${route.cabFare.toLocaleString('en-IN')}. Call 7668570551.`
    : `${route.origin} to ${route.destination} toll cost is ₹${groupDigits(route.totalTollCost.car)} for car & ₹${groupDigits(route.totalTollCost.suv)} for SUV. ${plazaCount} toll ${plazaWord} on ${route.totalDistance} km route. FASTag info, plaza-wise rates, cab fare ₹${route.cabFare.toLocaleString('en-IN')}. Call 7668570551.`;
  const ogTitle = `${route.origin} to ${route.destination} Toll Cost ₹${groupDigits(route.totalTollCost.car)} — ${route.tollPlazas.length} Toll Plazas | Book Cab from ₹${route.cabFare.toLocaleString('en-IN')} | Triveni Cabs™`;
  const planningEstimate = ['delhi-to-dehradun', 'delhi-to-haridwar'].includes(slug);
  const reviewedTitle = `${route.origin} to ${route.destination} Toll & Route Guide`;
  const reviewedDescription = `Plan ${route.origin} to ${route.destination} toll expenses with the listed route estimates. Check current plaza rates, vehicle class, return conditions and cab inclusions.`;

  return {
    title: planningEstimate ? reviewedTitle : title,
    description: planningEstimate ? reviewedDescription : description,
    keywords: [
      `${o} to ${d} toll cost`,
      `${o} to ${d} toll tax`,
      `${o} to ${d} toll charges`,
      `${o} to ${d} toll plaza`,
      `${o} to ${d} toll rate`,
      `${o} to ${d} toll list 2026`,
      `${o} to ${d} toll fastag`,
      `${o} to ${d} highway toll`,
      `toll from ${o} to ${d}`,
      `toll charges ${o} ${d}`,
      `${o} to ${d} road toll`,
      `${o} to ${d} expressway toll`,
      `${o} to ${d} cab fare with toll`,
      `${o} to ${d} total trip cost`,
      `${o} to ${d} toll plaza list`,
    ],
    authors: [{ name: 'Triveni Cabs™' }],
    creator: 'Triveni Cabs™',
    publisher: 'Triveni Cabs™',
    metadataBase: new URL('https://www.trivenicabs.in'),
    alternates: { canonical: `/toll-cost/${slug}` },
    openGraph: {
      title: planningEstimate ? reviewedTitle : ogTitle,
      description: planningEstimate ? reviewedDescription : description,
      type: 'website',
      locale: 'en_IN',
      url: `https://www.trivenicabs.in/toll-cost/${slug}`,
      siteName: 'Triveni Cabs™',
      images: [{ url: getOgImageForSlug(slug), width: 1200, height: 630, alt: `${route.origin} to ${route.destination} Toll Cost Guide` }],
    },
    twitter: {
      card: 'summary_large_image',
      title: planningEstimate ? reviewedTitle : ogTitle,
      description: planningEstimate ? reviewedDescription : description,
      creator: '@trivenicabs',
      site: '@trivenicabs',
      images: [getOgImageForSlug(slug)],
    },
    robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
  };
}

export default async function TollCostPage({ params }) {
  const resolvedParams = await params;
  const { route: slug } = resolvedParams;
  const route = getTollCostRoute(slug);

  if (!route) {
    notFound();
  }

  const relatedRoutes = getRelatedTollCostRoutes(slug);

  const pageUrl = `https://www.trivenicabs.in/toll-cost/${slug}`;
  const ogImage = getOgImageForSlug(slug);
  const ratingAndReviews = getRatingAndReviews(slug, 'city');

  // JSON-LD: Service Schema (deterministic rating + 3 reviews + brand via helper)
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": `Cab Service ${route.origin} to ${route.destination}`,
    "name": `${route.origin} to ${route.destination} Cab — Toll Cost ₹${groupDigits(route.totalTollCost.car)}`,
    "description": `Book AC cab from ${route.origin} to ${route.destination}. ${route.totalDistance} km route with ${route.tollPlazas.length} toll plaza(s). Total toll: ₹${groupDigits(route.totalTollCost.car)} (car). Cab fare from ₹${route.cabFare.toLocaleString('en-IN')}.`,
    "brand": { "@type": "Brand", "name": "Triveni Cabs" },
    "provider": {
      "@type": "LocalBusiness",
      "@id": "https://www.trivenicabs.in/#localbusiness",
      "name": "Triveni Cabs",
      "telephone": "+91-7668570551",
      "email": "cabstriveni@gmail.com",
      "url": "https://www.trivenicabs.in",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "366, Dandupura, near Tajganj",
        "addressLocality": "Agra",
        "addressRegion": "Uttar Pradesh",
        "postalCode": "282006",
        "addressCountry": "IN"
      }
    },
    "areaServed": [
      { "@type": "City", "name": route.origin },
      { "@type": "City", "name": route.destination }
    ],
    "offers": {
      "@type": "Offer",
      "price": route.cabFare.toString(),
      "priceCurrency": "INR",
      "description": `Sedan cab fare from ${route.origin} to ${route.destination}. Toll charges extra at actual.`
    },
    ...ratingAndReviews,
  };

  // JSON-LD: Breadcrumb
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" },
      { "@type": "ListItem", "position": 2, "name": "Toll Cost Guide", "item": "https://www.trivenicabs.in/toll-cost" },
      { "@type": "ListItem", "position": 3, "name": `${route.origin} to ${route.destination} Toll Cost`, "item": pageUrl }
    ]
  };

  // JSON-LD: FAQ (+ Speakable for voice answers)
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "speakable": getSpeakableSchema(['.speakable-headline', '.speakable-lead', '.speakable-faq-first']),
    "mainEntity": route.faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
    }))
  };

  // JSON-LD: Article (freshness + voice search)
  const articleSchema = getArticleSchema({
    slug: `toll-cost/${slug}`,
    headline: `${route.origin} to ${route.destination} Toll Cost & Plaza List 2026`,
    description: `Plaza-by-plaza toll breakdown for the ${route.totalDistance} km ${route.origin}–${route.destination} highway: ₹${groupDigits(route.totalTollCost.car)} car, ₹${groupDigits(route.totalTollCost.suv)} SUV across ${route.tollPlazas.length} plaza(s), with FASTag tips and toll-inclusive cab fares.`,
    image: ogImage,
    speakableSelectors: ['.speakable-headline', '.speakable-lead'],
  });

  // JSON-LD: HowTo — paying tolls on this route
  const howToSchema = getHowToSchema({
    name: `How to Pay Tolls on the ${route.origin} to ${route.destination} Route`,
    description: `Step-by-step guide to paying the ${route.tollPlazas.length} toll plaza(s) between ${route.origin} and ${route.destination} using FASTag or cash.`,
    totalTime: 'PT5M',
    estimatedCost: { currency: 'INR', value: route.totalTollCost.car },
    steps: [
      { name: 'Fit a FASTag', text: `Affix an active FASTag RFID sticker on your windshield and keep at least ₹${groupDigits(Math.max(route.totalTollCost.car * 2, 500))} balance before starting from ${route.origin}.` },
      { name: 'Use the FASTag lane', text: `At each of the ${route.tollPlazas.length} plaza(s), drive through the dedicated FASTag lane — the toll is auto-debited without stopping.` },
      { name: 'Keep cash as backup', text: 'Carry a small amount of cash in case a FASTag reader fails; cash lanes are available at most plazas but have longer queues.' },
      { name: 'Verify the debit SMS', text: `Confirm each toll debit via the SMS alert. Total car toll for ${route.origin} to ${route.destination} should be about ₹${groupDigits(route.totalTollCost.car)}.` },
      { name: 'Or book a cab', text: 'Book a Triveni Cab and the FASTag-equipped driver handles every toll for you — you simply settle the actual toll amount at the end.' },
    ],
  });

  // JSON-LD: Comparison — FASTag vs Cash payment
  const comparisonSchema = getComparisonSchema({
    slug: `toll-cost/${slug}`,
    title: `FASTag vs Cash: Paying Tolls from ${route.origin} to ${route.destination}`,
    description: `Compare FASTag and cash payment for the ${route.tollPlazas.length} toll plaza(s) on the ${route.origin}–${route.destination} highway — wait time, discounts and convenience.`,
    rows: [
      { feature: 'Wait time at plaza' },
      { feature: 'Discount / cashback' },
      { feature: 'Queue length' },
      { feature: 'Digital expense record' },
    ],
    mentions: ['FASTag', 'Cash toll', route.origin, route.destination, 'NHAI'],
  });

  // JSON-LD: GEO Place entities for origin + destination
  const originPlace = getCityPlaceSchema(cityNameToGeoSlug(route.origin), { idSlug: `toll-cost/${slug}` });
  const destPlace = getCityPlaceSchema(cityNameToGeoSlug(route.destination), { idSlug: `toll-cost/${slug}` });
  const placeSchemas = [originPlace, destPlace].filter(Boolean);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      {comparisonSchema.map((s, i) => (
        <script key={`cmp-${i}`} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}
      {placeSchemas.map((s, i) => (
        <script key={`place-${i}`} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}
      <AEOHead pageType="route" data={{ url: `/toll-cost/${slug}`, title: `${route.origin} to ${route.destination} Toll Cost`, origin: route.origin, destination: route.destination, city: route.origin }} />
      <TollCostClient
        travelByCarHref={servedHref(`/travel-by-car/${slug}`)}
        oneWayHref={servedHref(`/one-way-cab/${slug}`)}
        planningGuide={<PriorityPageGuide path={`/toll-cost/${slug}`} />}
        route={route}
        relatedRoutes={relatedRoutes}
        corridorLinks={getCorridorLinks(slug, 'toll-cost')}
        seasonalCallout={getSeasonalCorridorCallout({
          destination: route.destination,
          origin: route.origin,
          bookingHref: canonicalLink(`/one-way-cab/${route.slug}`),
        })}
      />
    </>
  );
}
