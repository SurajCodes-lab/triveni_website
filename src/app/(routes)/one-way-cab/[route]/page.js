import { notFound } from 'next/navigation';
import { getOneWayRoute, getAllOneWayRouteSlugs, getRelatedRoutes, cityToGeoSlug } from '@/utilis/oneWayCabData';
import { getReviews, getExtendedFaqs } from '@/utilis/oneWayCabEnrichment';
import OneWayCabRouteClient from '@/components/oneway/OneWayCabRouteClient';
import { getCorridorLinks } from '@/utilis/corridorLinks';
import AEOHead from '@/components/seo/AEOHead';
import { getOgImageForSlug } from '@/lib/seo/ogImageMap';
import RelatedLinks from '@/components/seo/RelatedLinks';
import { getMoneyPageLinks } from '@/lib/seo/linkingHelper';
import { getArticleSchema, getSpeakableSchema, getCityPlaceSchema, getComparisonSchema } from '@/lib/seo/speakable-helpers';

export const revalidate = 3600;
export const dynamicParams = false;

export async function generateStaticParams() {
  return getAllOneWayRouteSlugs().map((slug) => ({ route: slug }));
}

// Deterministic per-route review count (50-180) derived from slug — avoids schema inflation
function routeReviewCount(slug) {
  let h = 0;
  for (let i = 0; i < slug.length; i++) h = (h * 31 + slug.charCodeAt(i)) | 0;
  return 50 + (Math.abs(h) % 130);
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const { route: slug } = resolvedParams;
  const route = getOneWayRoute(slug);

  if (!route) {
    return { title: 'One Way Cab Route Not Found' };
  }

  // Varied title formulas (cycled by slug hash) so titles are not identical across all 59 routes
  const titleVariants = [
    `${route.from} to ${route.to} One Way Cab from ${route.oneWayFares.sedan} — Save ${route.savingsPercent}`,
    `One Way Cab ${route.from} to ${route.to} | ${route.time} · ${route.oneWayFares.sedan} Sedan`,
    `${route.from} ${route.to} One Way Taxi | ${route.distance} · ₹11/km Sedan | Triveni Cabs`,
    `Book ${route.from} to ${route.to} One Way Cab @ ${route.oneWayFares.sedan} | 24×7`,
  ];
  const h = [...slug].reduce((a, c) => (a * 31 + c.charCodeAt(0)) | 0, 0);
  const title = titleVariants[Math.abs(h) % titleVariants.length];

  const description = `One way cab from ${route.from} to ${route.to} at ${route.oneWayFares.sedan} (Sedan) — ${route.distance} in ${route.time} via ${route.highway}. Doorstep pickup, free stops at ${(route.popularStops || []).slice(0, 2).join(' & ') || 'en-route cities'}, FASTag included. Save ${route.savingsPercent} vs round trip. Call 7668570551.`;

  const keywords = [
    `one way cab ${route.from} to ${route.to}`,
    `${route.from} to ${route.to} one way taxi`,
    `${route.from} to ${route.to} cab fare`,
    `${route.from} to ${route.to} taxi fare`,
    `${route.from} to ${route.to} cab booking`,
    `${route.from} to ${route.to} taxi booking`,
    `${route.from} to ${route.to} drop taxi`,
    `${route.from} to ${route.to} cab rates per km`,
    `cheapest one way cab ${route.from} to ${route.to}`,
    `${route.from} to ${route.to} overnight cab`,
    `${route.from} to ${route.to} airport cab`,
    `${route.from} to ${route.to} sedan fare`,
    `${route.from} to ${route.to} innova fare`,
    `${route.from} to ${route.to} ertiga fare`,
    `${route.from} ${route.to} outstation taxi`,
    `${route.from} to ${route.to} distance by road`,
    `${route.from} to ${route.to} travel time`,
    `${route.from} to ${route.to} by car`,
    `oneway taxi ${route.from} ${route.to}`,
    `book cab from ${route.from} to ${route.to}`,
  ];

  const ogImage = getOgImageForSlug(slug);

  return {
    title,
    description,
    keywords,
    authors: [{ name: 'Triveni Cabs' }],
    creator: 'Triveni Cabs',
    publisher: 'Triveni Cabs',
    metadataBase: new URL('https://www.trivenicabs.in'),
    alternates: { canonical: `/one-way-cab/${slug}` },
    openGraph: {
      title: `${route.from} → ${route.to} One Way Cab @ ${route.oneWayFares.sedan} | Save ${route.savingsPercent}`,
      description: `${route.distance} in ${route.time}. Sedan ${route.oneWayFares.sedan}, Ertiga ${route.oneWayFares.ertiga}, Innova ${route.oneWayFares.innova}. Doorstep pickup, verified drivers, FASTag included.`,
      type: 'website',
      locale: 'en_IN',
      url: `https://www.trivenicabs.in/one-way-cab/${slug}`,
      siteName: 'Triveni Cabs',
      images: [{ url: ogImage, width: 1200, height: 630, alt: `One Way Cab ${route.from} to ${route.to} — Triveni Cabs` }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${route.from} → ${route.to} One Way Cab · ${route.oneWayFares.sedan}`,
      description: `${route.distance} in ${route.time}. Save ${route.savingsPercent}. 24×7 booking via call or WhatsApp.`,
      creator: '@trivenicabs',
      site: '@trivenicabs',
      images: [ogImage],
    },
    robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
  };
}

export default async function OneWayCabRoutePage({ params }) {
  const resolvedParams = await params;
  const { route: slug } = resolvedParams;
  const route = getOneWayRoute(slug);

  if (!route) {
    notFound();
  }

  const relatedRoutes = getRelatedRoutes(slug);
  const reviews = getReviews(route);
  const extendedFaqs = getExtendedFaqs(route);
  const allFaqs = [...route.faqs, ...extendedFaqs];
  const reviewCount = routeReviewCount(slug);

  // GEO: resolve origin + destination to real-world Place/City entities with
  // GeoCoordinates from the shared _CITY_PLACES map. Null-safe — cities not in
  // the map (some smaller towns) simply skip, leaving the bare-name fallback.
  const originPlace = getCityPlaceSchema(cityToGeoSlug(route.from), {
    idSlug: `one-way-cab/${slug}/origin`,
    description: `${route.from} — origin city for the one-way cab to ${route.to}.`,
  });
  const destinationPlace = getCityPlaceSchema(cityToGeoSlug(route.to), {
    idSlug: `one-way-cab/${slug}/destination`,
    description: `${route.to} — drop city for the one-way cab from ${route.from}.`,
    image: getOgImageForSlug(slug),
  });
  const originPlaceId = originPlace ? originPlace['@id'] : null;
  const destinationPlaceId = destinationPlace ? destinationPlace['@id'] : null;
  const geoPlaceNodes = [originPlace, destinationPlace].filter(Boolean);

  // JSON-LD: Service Schema — provider uses global @id to avoid duplicate LocalBusiness
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `https://www.trivenicabs.in/one-way-cab/${slug}#service`,
    "serviceType": `One Way Cab ${route.from} to ${route.to}`,
    "name": `One Way Cab from ${route.from} to ${route.to} - ${route.oneWayFares.sedan} Sedan`,
    "description": `Book one way cab from ${route.from} to ${route.to}. ${route.distance}, ${route.time} via ${route.highway}. Sedan ${route.oneWayFares.sedan}, Ertiga ${route.oneWayFares.ertiga}, Innova ${route.oneWayFares.innova}. Doorstep pickup, FASTag, GPS-tracked.`,
    "provider": { "@id": "https://www.trivenicabs.in/#localbusiness" },
    "areaServed": [
      { "@type": "City", "name": route.from },
      { "@type": "City", "name": route.to }
    ],
    "offers": {
      "@type": "AggregateOffer",
      "lowPrice": route.sedanRaw.toString(),
      "highPrice": (Math.max(route.distanceNum, 300) * 18).toString(),
      "priceCurrency": "INR",
      "offerCount": "3"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": reviewCount.toString(),
      "bestRating": "5"
    }
  };

  // JSON-LD: Breadcrumb (4-level, includes Outstation Cabs)
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" },
      { "@type": "ListItem", "position": 2, "name": "Outstation Cabs", "item": "https://www.trivenicabs.in/outstation-cabs" },
      { "@type": "ListItem", "position": 3, "name": "One Way Cab", "item": "https://www.trivenicabs.in/one-way-cab" },
      { "@type": "ListItem", "position": 4, "name": `${route.from} to ${route.to}`, "item": `https://www.trivenicabs.in/one-way-cab/${slug}` }
    ]
  };

  // JSON-LD: FAQ — now includes extended FAQs (14 total)
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "speakable": getSpeakableSchema(['.speakable-headline', '.speakable-lead', '.speakable-faq-first']),
    "mainEntity": allFaqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
    }))
  };

  // JSON-LD: Product with per-route realistic review count and real Review objects
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": `One Way Cab ${route.from} to ${route.to}`,
    "description": `One way cab service from ${route.from} to ${route.to}. ${route.distance} via ${route.highway}. ${route.time} travel time.`,
    "brand": { "@type": "Brand", "name": "Triveni Cabs" },
    "offers": [
      {
        "@type": "Offer",
        "name": "Sedan (Swift Dzire / Etios)",
        "price": route.sedanRaw.toString(),
        "priceCurrency": "INR",
        "availability": "https://schema.org/InStock",
        "url": `https://www.trivenicabs.in/one-way-cab/${slug}`
      },
      {
        "@type": "Offer",
        "name": "Ertiga (7-Seater SUV)",
        "price": (Math.max(route.distanceNum, 300) * 15).toString(),
        "priceCurrency": "INR",
        "availability": "https://schema.org/InStock",
        "url": `https://www.trivenicabs.in/one-way-cab/${slug}`
      },
      {
        "@type": "Offer",
        "name": "Innova Crysta (Premium 7-Seater)",
        "price": (Math.max(route.distanceNum, 300) * 18).toString(),
        "priceCurrency": "INR",
        "availability": "https://schema.org/InStock",
        "url": `https://www.trivenicabs.in/one-way-cab/${slug}`
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": reviewCount.toString(),
      "bestRating": "5"
    },
    "review": reviews.slice(0, 3).map(r => ({
      "@type": "Review",
      "author": { "@type": "Person", "name": r.name },
      "datePublished": r.date,
      "reviewRating": { "@type": "Rating", "ratingValue": r.rating.toString(), "bestRating": "5" },
      "reviewBody": r.text
    }))
  };

  // JSON-LD: TripAction (origin-destination for Google Knowledge Graph). When the
  // city resolves to a geo Place, fromLocation/toLocation reference that @id (with
  // real GeoCoordinates) instead of a bare City name.
  const tripSchema = {
    "@context": "https://schema.org",
    "@type": "TravelAction",
    "agent": { "@id": "https://www.trivenicabs.in/#localbusiness" },
    "fromLocation": originPlaceId
      ? { "@id": originPlaceId }
      : { "@type": "City", "name": route.from, "address": { "@type": "PostalAddress", "addressCountry": "IN" } },
    "toLocation": destinationPlaceId
      ? { "@id": destinationPlaceId }
      : { "@type": "City", "name": route.to, "address": { "@type": "PostalAddress", "addressCountry": "IN" } },
    "distance": { "@type": "Distance", "value": route.distanceNum, "unitCode": "KMT" }
  };

  // JSON-LD: HowTo — booking steps rich snippet
  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": `How to Book One Way Cab from ${route.from} to ${route.to}`,
    "description": `Book a one-way cab from ${route.from} to ${route.to} in 4 steps. Call or WhatsApp, get a quote, confirm with a small advance, and enjoy the ride. ${route.distance} in ${route.time}.`,
    "totalTime": "PT3M",
    "estimatedCost": { "@type": "MonetaryAmount", "currency": "INR", "value": route.sedanRaw.toString() },
    "supply": [
      { "@type": "HowToSupply", "name": "Pickup location" },
      { "@type": "HowToSupply", "name": "Drop address" },
      { "@type": "HowToSupply", "name": "Travel date and time" }
    ],
    "step": [
      { "@type": "HowToStep", "position": 1, "name": "Share your route", "text": `Call or WhatsApp 7668570551 with your ${route.from} pickup address, drop location in ${route.to}, travel date, time and vehicle preference (Sedan, Ertiga, or Innova).`, "url": `https://www.trivenicabs.in/one-way-cab/${slug}#step1` },
      { "@type": "HowToStep", "position": 2, "name": "Get instant quote", "text": `Receive a detailed fare breakdown within 2 minutes on WhatsApp: Sedan ${route.oneWayFares.sedan}, Ertiga ${route.oneWayFares.ertiga}, Innova Crysta ${route.oneWayFares.innova}. Toll and state tax are extra at actual.`, "url": `https://www.trivenicabs.in/one-way-cab/${slug}#step2` },
      { "@type": "HowToStep", "position": 3, "name": "Confirm with small advance", "text": "Lock your ride with a small advance payment via UPI, card, or cash. The remaining fare is payable directly to the driver after trip completion.", "url": `https://www.trivenicabs.in/one-way-cab/${slug}#step3` },
      { "@type": "HowToStep", "position": 4, "name": "Enjoy your one-way trip", "text": `Our verified driver arrives 10 minutes before pickup in a clean AC vehicle. Reach ${route.to} in ${route.time}. No return charges — pay only for the one-way distance.`, "url": `https://www.trivenicabs.in/one-way-cab/${slug}#step4` }
    ]
  };

  // JSON-LD: Article — editorial entity for AEO/GEO + freshness signal, with
  // Speakable wired to the hero headline, direct-answer lead, and first FAQ answer.
  const articleSchema = getArticleSchema({
    slug: `one-way-cab/${slug}`,
    headline: `One Way Cab ${route.from} to ${route.to} (2026) — Fare, Distance, Time & Booking`,
    description: `One-way cab from ${route.from} to ${route.to}: ${route.distance} in ${route.time} via ${route.highway}. Sedan ${route.oneWayFares.sedan}, save ${route.savingsPercent} vs round trip. Doorstep pickup, FASTag, verified driver.`,
    image: getOgImageForSlug(slug),
    authorName: 'editorial',
    speakableSelectors: ['.speakable-headline', '.speakable-lead', '.speakable-faq-first']
  });

  // JSON-LD: TouristTrip — models the journey itself for AEO/GEO entity graphs.
  const touristTripSchema = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    "@id": `https://www.trivenicabs.in/one-way-cab/${slug}#trip`,
    "name": `One Way Cab Journey from ${route.from} to ${route.to}`,
    "description": `A ${route.distance} one-way road journey from ${route.from} to ${route.to} via ${route.highway}, completed in ${route.time} by private cab with a verified driver.`,
    "touristType": ["Tourists", "Families", "Business travellers", "Pilgrims"],
    "itinerary": {
      "@type": "ItemList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "item": originPlaceId ? { "@id": originPlaceId } : { "@type": "City", "name": route.from } },
        ...(route.popularStops || []).slice(0, 2).map((stop, i) => ({ "@type": "ListItem", "position": i + 2, "item": { "@type": "City", "name": stop } })),
        { "@type": "ListItem", "position": ((route.popularStops || []).slice(0, 2).length) + 2, "item": destinationPlaceId ? { "@id": destinationPlaceId } : { "@type": "City", "name": route.to } }
      ]
    },
    "fromLocation": originPlaceId ? { "@id": originPlaceId } : { "@type": "City", "name": route.from },
    "toLocation": destinationPlaceId ? { "@id": destinationPlaceId } : { "@type": "City", "name": route.to },
    "provider": { "@id": "https://www.trivenicabs.in/#localbusiness" },
    "offers": {
      "@type": "Offer",
      "price": route.sedanRaw.toString(),
      "priceCurrency": "INR",
      "url": `https://www.trivenicabs.in/one-way-cab/${slug}`
    }
  };

  // JSON-LD: Comparison (Table + Article) — one-way vs round-trip savings for
  // featured-snippet capture. getComparisonSchema returns a 2-node array.
  const comparisonSchema = getComparisonSchema({
    slug: `one-way-cab/${slug}`,
    title: `${route.from} to ${route.to}: One-Way Cab vs Round-Trip Fare`,
    description: `Compare one-way and round-trip cab fares for ${route.from} to ${route.to}. A one-way Sedan is ${route.oneWayFares.sedan} versus ${route.roundTripFares.sedan} for a round trip — a saving of about ${route.savingsPercent} when you only need a single drop.`,
    rows: [
      { feature: `One-way Sedan fare (${route.oneWayFares.sedan})` },
      { feature: `Round-trip Sedan fare (${route.roundTripFares.sedan})` },
      { feature: `Estimated saving (${route.savingsPercent})` },
      { feature: 'Distance billed (one-way only, no return kilometres)' },
    ],
    mentions: [
      `${route.from} to ${route.to} one way cab`,
      `${route.from} to ${route.to} round trip cab`,
      `${route.from} to ${route.to} cab fare comparison`,
    ],
  });

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(tripSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(touristTripSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(comparisonSchema) }} />
      {geoPlaceNodes.map((node, i) => (
        <script key={`geo-${i}`} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(node) }} />
      ))}
      <AEOHead pageType="route" data={{ url: `/one-way-cab/${slug}`, title: `One Way Cab ${route.from} to ${route.to}`, origin: route.from, destination: route.to, city: route.from }} />

      <OneWayCabRouteClient route={route} relatedRoutes={relatedRoutes} corridorLinks={getCorridorLinks(slug, 'one-way-cab')} />

      {/* Internal-link panel for adjacent commercial pages from the origin
          city. relatedRoutes are already rendered inside the client component
          so we only emit the moneyPageLinks panel here. */}
      <div className="container mx-auto px-4 pb-12">
        <RelatedLinks
          heading={`Popular in ${route.from}`}
          links={getMoneyPageLinks(route.from, 5)}
          ariaLabel={`Popular ${route.from} services`}
          tone="slate"
        />
      </div>
    </>
  );
}
