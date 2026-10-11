import { notFound } from 'next/navigation';
import { getDistanceRoute, getAllDistanceRouteSlugs, getRelatedDistanceRoutes, cityToGeoSlug } from '@/utilis/distanceData';
import DistanceGuideClient from '@/components/distance/DistanceGuideClient';
import { getRoadParagraph } from '@/utilis/roadParagraphs';
import { getCorridorLinks } from '@/utilis/corridorLinks';
import { getSeasonalCorridorCallout } from '@/utilis/seasonalCorridors';
import { canonicalLink } from '@/lib/seo/canonical-link';
import { servedHref } from '@/lib/seo/route-exists';
import AEOHead from '@/components/seo/AEOHead';
import { getOgImageForSlug } from '@/lib/seo/ogImageMap';
import { getRatingAndReviews } from '@/lib/seo/review-helpers';
import { getArticleSchema, getHowToSchema, getComparisonSchema, getTodayDate, getCityPlaceSchema } from '@/lib/seo/speakable-helpers';
import { buildDistanceMeta, enrichRouteWithToll } from '@/lib/seo/serp-ctr';
import { aliasFaq, aliasKeywords } from '@/lib/seo/place-aliases';
import { getContentUpdatedOn } from '@/lib/seo/content-updates';
import { groupDigits } from '@/utilis/pricing';

export const revalidate = 3600;
export const dynamicParams = false;

export async function generateStaticParams() {
  return getAllDistanceRouteSlugs().map((slug) => ({ route: slug }));
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const { route: slug } = resolvedParams;
  const route = getDistanceRoute(slug);

  if (!route) {
    return { title: 'Distance Guide Not Found' };
  }

  // Week 43 — answer-box defence. The previous title led with the km figure,
  // which is exactly what Google's distance panel already shows above us; these
  // pages carried 2,898,687 impressions at 0.14% CTR while /toll-cost pages hit
  // 4.10% on queries Google cannot answer inline.
  // Week 48 (C3) — the title now answers the price with its unit ("Cab from
  // ₹3,300 One Way") plus the measured toll or the SUV fare, and the
  // description leads with that answer before the km/drive-time proof.
  // See buildDistanceMeta in src/lib/seo/serp-ctr.js for the formula and the
  // position-controlled evidence.
  // Week 52 — the trip-planning pilots were overriding the title above with a
  // plain "<A> to <B> Distance: <km> km". That is the one title this family must
  // not use: it repeats the single number Google's distance panel has already
  // shown the searcher, so the listing offers no reason to click.
  //
  // The 6 Oct export measured the cost. Those ten slugs are the biggest pages
  // in the family — 795,147 impressions, 30% of all distance impressions — and
  // they ran at 0.127% CTR against 0.160% for the 109 pages that kept the
  // answer-box title, despite ranking in the same 5.7-9.0 band. The override
  // was suppressing the better title on precisely the pages with the most to
  // gain.
  //
  // The on-page trip-planning advice those ten pages carry is unaffected; it is
  // rendered by DistanceGuideClient and remains the reason they were piloted.
  // Only the metadata override is gone, so every distance page now leads with
  // the km figure plus the drive time and fare the panel does not carry.
  const { title, description, ogTitle } = buildDistanceMeta(route, slug);

  return {
    // Title carries no brand suffix of its own: the root layout appends
    // '%s | Triveni Cabs'. serp-ctr fits the content half inside DISPLAY_BUDGET
    // (58 chars) via tightenTitle, so the rendered title lands inside Google's
    // ~60-char truncation instead of being cut mid-phrase.
    title: title,
    description,
    keywords: [
      `${route.origin.toLowerCase()} to ${route.destination.toLowerCase()} distance`,
      `${route.origin.toLowerCase()} to ${route.destination.toLowerCase()} distance by road`,
      `${route.origin.toLowerCase()} to ${route.destination.toLowerCase()} km`,
      `${route.origin.toLowerCase()} to ${route.destination.toLowerCase()} by car`,
      `${route.origin.toLowerCase()} to ${route.destination.toLowerCase()} route`,
      `${route.origin.toLowerCase()} to ${route.destination.toLowerCase()} cab`,
      `${route.origin.toLowerCase()} to ${route.destination.toLowerCase()} cab fare`,
      `${route.origin.toLowerCase()} to ${route.destination.toLowerCase()} driving time`,
      `${route.origin.toLowerCase()} to ${route.destination.toLowerCase()} toll`,
      `${route.origin.toLowerCase()} to ${route.destination.toLowerCase()} road trip`,
      `distance from ${route.origin.toLowerCase()} to ${route.destination.toLowerCase()}`,
      `how far is ${route.destination.toLowerCase()} from ${route.origin.toLowerCase()}`,
      `${route.origin.toLowerCase()} ${route.destination.toLowerCase()} distance`,
      `${route.origin.toLowerCase()} to ${route.destination.toLowerCase()} travel guide`,
      `${route.origin.toLowerCase()} to ${route.destination.toLowerCase()} taxi`,
          ...aliasKeywords(route.origin, route.destination),
],
    authors: [{ name: 'Triveni Cabs™' }],
    creator: 'Triveni Cabs™',
    publisher: 'Triveni Cabs™',
    metadataBase: new URL('https://www.trivenicabs.in'),
    alternates: { canonical: `/distance/${slug}` },
    openGraph: {
      title: ogTitle,
      description,
      type: 'website',
      locale: 'en_IN',
      url: `https://www.trivenicabs.in/distance/${slug}`,
      siteName: 'Triveni Cabs™',
      images: [{ url: getOgImageForSlug(slug), width: 1200, height: 630, alt: `${route.origin} to ${route.destination} Distance Guide` }],
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

export default async function DistanceGuidePage({ params }) {
  const resolvedParams = await params;
  const { route: slug } = resolvedParams;
  // Fill tollPlazas from the measured /toll-cost dataset so the page delivers
  // the toll figure its title now promises (Week 43 — see serp-ctr.js).
  const route = enrichRouteWithToll(getDistanceRoute(slug), slug);

  if (!route) {
    notFound();
  }

  const relatedRoutes = getRelatedDistanceRoutes(slug);
  // Week 49: the other name people type. Where an end of the corridor has a
  // common second name (Banaras for Varanasi, Allahabad for Prayagraj), the
  // page answers under both rather than leaving a second page to be built for
  // the same journey.
  const aliasQuestion = aliasFaq(route.origin, route.destination);
  const routeForClient = aliasQuestion
    ? { ...route, faqs: [...(route.faqs || []), aliasQuestion] }
    : route;

  // Deterministic rating + 3 named Reviews (50-180 reviewCount). Replaces the
  // previous hardcoded reviewCount: "10000" which Google flags as schema spam.
  const ratingAndReviews = getRatingAndReviews(slug, 'city');
  const ogImage = getOgImageForSlug(slug);
  const today = (getContentUpdatedOn(`/distance/${slug}`) || getTodayDate());

  // GEO: resolve origin + destination to real-world Place/City entities with
  // GeoCoordinates from the shared _CITY_PLACES map. Null-safe.
  const originPlace = getCityPlaceSchema(cityToGeoSlug(route.origin), {
    idSlug: `distance/${slug}/origin`,
    description: `${route.origin} — origin point for the ${route.distance.km} km road journey to ${route.destination}.`,
  });
  const destinationPlace = getCityPlaceSchema(cityToGeoSlug(route.destination), {
    idSlug: `distance/${slug}/destination`,
    description: `${route.destination} — destination, ${route.distance.km} km by road from ${route.origin} via ${route.highway}.`,
    image: ogImage,
  });
  const originPlaceId = originPlace ? originPlace['@id'] : null;
  const destinationPlaceId = destinationPlace ? destinationPlace['@id'] : null;
  const geoPlaceNodes = [originPlace, destinationPlace].filter(Boolean);

  // JSON-LD: TravelAction Schema — fromLocation/toLocation reference geo Place
  // @ids (with real GeoCoordinates) when the city resolves, else bare City.
  const travelActionSchema = {
    "@context": "https://schema.org",
    "@type": "TravelAction",
    "fromLocation": originPlaceId
      ? { "@id": originPlaceId }
      : { "@type": "City", "name": route.origin },
    "toLocation": destinationPlaceId
      ? { "@id": destinationPlaceId }
      : { "@type": "City", "name": route.destination },
    "distance": {
      "@type": "Distance",
      "name": `${route.distance.km} km`
    },
    "description": `Travel from ${route.origin} to ${route.destination} covering ${route.distance.km} km via ${route.highway}. Estimated drive time: ${route.duration}.`
  };

  // JSON-LD: Service Schema
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": `Cab Service ${route.origin} to ${route.destination}`,
    "name": `${route.origin} to ${route.destination} Cab — ${route.distance.km} km`,
    "description": `Book AC cab from ${route.origin} to ${route.destination}. ${route.distance.km} km, ${route.duration} via ${route.highway}. Sedan from ₹${groupDigits(route.sedanRaw)}.`,
    "provider": {
      "@type": "LocalBusiness",
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
      "@type": "AggregateOffer",
      "lowPrice": route.sedanRaw.toString(),
      "highPrice": (route.tempoRaw || route.suvRaw).toString(),
      "priceCurrency": "INR",
      "offerCount": "3"
    },
    "brand": { "@type": "Brand", "name": "Triveni Cabs" },
    ...ratingAndReviews
  };

  // JSON-LD: Breadcrumb
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" },
      { "@type": "ListItem", "position": 2, "name": "Distance Guide", "item": "https://www.trivenicabs.in/distance" },
      { "@type": "ListItem", "position": 3, "name": `${route.origin} to ${route.destination}`, "item": `https://www.trivenicabs.in/distance/${slug}` }
    ]
  };

  // JSON-LD: FAQ (now 12 Q&A, with Speakable on the first answer for voice).
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "speakable": {
      "@type": "SpeakableSpecification",
      "cssSelector": [".speakable-faq-first"]
    },
    "mainEntity": route.faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
    }))
  };

  // JSON-LD: Article + Speakable (voice-search + freshness signal).
  const articleSchema = getArticleSchema({
    slug: `distance/${slug}`,
    headline: `${route.origin} to ${route.destination} Distance — ${route.distance.km} km by Road, Drive Time & Cab Fare`,
    description: route.directAnswer,
    image: ogImage,
    dateModified: today,
    authorName: 'editorial',
    speakableSelectors: ['.speakable-headline', '.speakable-lead', '.speakable-faq-first'],
  });

  // JSON-LD: HowTo — how to travel from origin to destination (cab/train/bus/flight).
  const howToSchema = getHowToSchema({
    name: `How to Travel from ${route.origin} to ${route.destination}`,
    description: `Step-by-step guide to travelling the ${route.distance.km} km from ${route.origin} to ${route.destination} by cab, train, bus or flight via ${route.highway}.`,
    totalTime: /minute/i.test(route.duration)
      ? 'PT' + Math.max(15, parseInt(route.duration, 10) || 45) + 'M'
      : 'PT' + Math.max(1, parseInt(route.duration, 10) || 5) + 'H',
    estimatedCost: { currency: 'INR', value: route.sedanRaw },
    steps: [
      { name: 'Choose your travel mode', text: `Decide between a private cab (most flexible, ${route.duration}), train, bus, or flight. For door-to-door comfort and freedom to stop en route, a cab from ${route.origin} to ${route.destination} is the most convenient choice.` },
      { name: 'Pick the best route', text: `Travel via ${route.highway} — the fastest and best-maintained route from ${route.origin} to ${route.destination}, covering ${route.distance.km} km (${route.distance.miles} miles).` },
      { name: 'Book your cab and start early', text: `Book an AC sedan from ${route.cabFares.sedan}, SUV, or Tempo Traveller with Triveni Cabs™ on 7668570551. Start early morning (5-6 AM) to avoid traffic and reach ${route.destination} comfortably.` },
      { name: 'Pay toll at actual and arrive', text: `Tolls on the route are paid at actual via FASTag and added transparently to your bill. Sit back, enjoy the ${route.duration} drive, and arrive in ${route.destination}.` },
    ],
  });

  // JSON-LD: Comparison (Table + Article) for travel-modes comparison block.
  const comparisonSchema = getComparisonSchema({
    slug: `distance/${slug}`,
    title: `${route.origin} to ${route.destination}: Cab vs Train vs Bus vs Flight`,
    description: `Compare travel time, cost and comfort for the ${route.distance.km} km journey from ${route.origin} to ${route.destination} by cab, train, bus and flight.`,
    rows: route.travelModes.map(m => ({ name: m.mode })),
    mentions: [`${route.origin} to ${route.destination} cab`, `${route.origin} to ${route.destination} train`, `${route.origin} to ${route.destination} bus`, `${route.origin} to ${route.destination} flight`],
  });

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(travelActionSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(comparisonSchema) }} />
      {geoPlaceNodes.map((node, i) => (
        <script key={`geo-${i}`} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(node) }} />
      ))}
      <AEOHead pageType="route" data={{ url: `/distance/${slug}`, title: `${route.origin} to ${route.destination} Distance`, origin: route.origin, destination: route.destination, city: route.origin }} />
      <DistanceGuideClient
        route={routeForClient}
        relatedRoutes={relatedRoutes}
        corridorLinks={getCorridorLinks(slug, 'distance')}
        seasonalCallout={getSeasonalCorridorCallout({
          destination: route.destination,
          origin: route.origin,
          // servedHref rather than canonicalLink: canonicalLink follows the
            // booking-canonical redirects but never checks that the result was
            // built, so three routes with a oneWaySlug and no one-way page --
            // Bodh Gaya, Gaya and Prayagraj to Varanasi -- were linking at a 404.
            // servedHref returns null there, and the callout already renders
            // without a booking link.
            bookingHref: route.oneWaySlug ? servedHref(`/one-way-cab/${route.oneWaySlug}`) : null,
        })}
        roadParagraph={getRoadParagraph(slug)}
      />
    </>
  );
}
