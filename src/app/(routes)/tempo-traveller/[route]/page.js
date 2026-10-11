// src/app/tempo-traveller/[route]/page.js

import { tempoFleet, tempoRoutes, localSightseeing, tempoCities, routeDescriptions } from '@/utilis/tempoTravellerData';
import { NOINDEX_ROBOTS, isNoindexPath } from '@/lib/seo/noindex-families.mjs';
// Attractions resolved here so touristAttractionsData.js (26 KB) stays server-side.
import { getAttractionsForCity } from '@/utilis/touristAttractionsData';

// ISR: Revalidate every hour for better SEO and performance
export const revalidate = 3600;
export const dynamicParams = false;
import { chardhamRoutes, getChardhamExtendedFaqs, DHAM_FACTS } from '@/utilis/chardhamData';
import { generateTempoMetadata } from '@/lib/seo/metadata-factory';
import { generateTempoServiceSchema } from '@/lib/seo/schema-generators';
import { getRatingAndReviews, getYatraReviews, getDeterministicReviewCount } from '@/lib/seo/review-helpers';
import { getSpeakableSchema, getHowToSchema, getArticleSchema, getTodayDate, getCityPlaceSchema } from '@/lib/seo/speakable-helpers';
import DynamicTempoRoutesClient from '@/components/DynamicTempoRoutes';
import { getCorridorLinks } from '@/utilis/corridorLinks';
import { resolveRouteMetrics } from '@/utilis/routeMetrics';
import TempoCityClient from '@/components/TempoCityClient';
import PriorityPageGuide from '@/components/content/PriorityPageGuide';
import AdventureActivities from '@/components/content/AdventureActivities';
import ChardhamTempoClient from '@/components/ChardhamTempoClient';
import AEOHead from '@/components/seo/AEOHead';
import RelatedLinks from '@/components/seo/RelatedLinks';
import { getMoneyPageLinks, getSiloHubLinks } from '@/lib/seo/linkingHelper';
// Server-only: pulls in the large blog dataset, never import from a client component.
import { getRelatedBlogPosts } from '@/lib/seo/blogLinkHelper';
import { tightenTitle } from '@/lib/seo/serp-ctr';
// Shared keyword-cluster builder — the same one the force-urbania and maharaja
// city pages use, so all three vehicle types target the proposal cluster from
// one definition instead of three drifting copies.
import { buildCityKeywordCluster } from '@/utilis/vehicleTypeConfig';
// NCR locality tier (Noida, Gurgaon, Indirapuram, Delhi Airport, …). The
// metadata + render live in vehicleCityRoutePage.js so this page and the
// force-urbania factory share one implementation instead of two copies.
import {
  getNcrLocalityParams, ncrLocalityServes, buildNcrLocalityMetadata, renderNcrLocalityPage,
} from '@/lib/seo/vehicleCityRoutePage';
import { getContentUpdatedOn } from '@/lib/seo/content-updates';
import { BASE_URL } from '@/lib/seo/constants';

// Some routeDescriptions carry prose-y distances ("1000 km (one way via Manali,
// ~2000 km circuit)") that would eat the whole snippet — keep only the number.
const compactKm = (d) => {
  const m = /(\d[\d,]*)\s*km/i.exec(d || '');
  return m ? `${m[1]} km` : null;
};

// Week 48 (C3): the route description names a total fare, so it has to be the
// total the page shows. DynamicTempoRoutes computes "distance x 2 x rate" for the
// seater it selects by default (the fleet's `popular` entry) from the dataset km
// resolved server-side, falling back to routeDescriptions. This mirrors that
// exactly and refuses to quote a figure when the client's own parse of a prose
// distance ("1000 km (one way via Manali, ~2000 km circuit)") would disagree
// with the clean km, so the snippet can never promise a number the page lacks.
function buildTempoEstimate({ slug, origin, destination, routeMeta }) {
  const metrics = resolveRouteMetrics({ slug, origin, destination });
  const display = metrics.distance || routeMeta?.distance || '';
  const clean = compactKm(display);
  if (!clean) return null;
  const km = parseInt(clean.replace(/,/g, ''), 10);
  const clientKm = parseFloat(String(display).replace(/[^0-9.]/g, ''));
  if (!Number.isFinite(km) || km <= 0 || clientKm !== km) return null;
  const seater = tempoFleet.find((v) => v?.popular) || tempoFleet[0];
  const rate = parseInt(String(seater?.outstationRate || '').replace(/[^\d]/g, ''), 10);
  const seats = /^(\d+)/.exec(seater?.name || '');
  if (!rate || !seats) return null;
  return { seats: seats[1], km, fare: Math.round(km * 2 * rate) };
}

// Fare-first meta description: numbers lead, softer segments drop off the end
// until the line fits inside Google's ~160-char snippet.
function buildFareFirstDescription(segments, limit = 160) {
  const parts = segments.filter(Boolean);
  let out = parts.join(' · ');
  while (out.length > limit && parts.length > 1) {
    parts.pop();
    out = parts.join(' · ');
  }
  return out.length > limit ? out.slice(0, limit) : out;
}

// Helper to check if slug is a Chardham route
function isChardhamSlug(slug) {
  return chardhamRoutes.some(route => route.slug === slug);
}

// Helper to get Chardham data by slug
function getChardhamBySlug(slug) {
  return chardhamRoutes.find(route => route.slug === slug);
}

// Human-readable dham coverage label for OG copy / schema descriptions.
function isFullDhamLabel(d) {
  return d.destination === 'Chardham Yatra'
    ? 'Yamunotri, Gangotri, Kedarnath & Badrinath'
    : d.destination;
}

// Helper to check if slug is a city
function isCitySlug(slug) {
  return Object.values(tempoCities).some(city => city.slug === slug);
}

// Helper to get city data by slug
function getCityBySlug(slug) {
  return Object.entries(tempoCities).find(([_, city]) => city.slug === slug);
}

export async function generateStaticParams() {
  // Generate static params for cities
  const cityParams = Object.values(tempoCities).map(city => ({
    route: city.slug,
  }));

  // Generate static params for ALL routes from tempoRoutes data
  const routeParams = [];
  Object.entries(tempoRoutes).forEach(([origin, destinations]) => {
    destinations.forEach(dest => {
      const routeSlug = `${origin.toLowerCase().replace(/\s+/g, '-')}-to-${dest.name.toLowerCase().replace(/\s+/g, '-')}`;
      routeParams.push({ route: routeSlug });
    });
  });

  const chardhamParams = chardhamRoutes.map(route => ({
    route: route.slug
  }));

  // NCR locality + airport pages (Noida, Ghaziabad, Indirapuram, Dwarka,
  // Karol Bagh, Delhi Airport, …). Kept out of tempoCities on purpose so they
  // do not generate an origin→destination route matrix.
  const localityParams = getNcrLocalityParams('tempo-traveller');

  return [...cityParams, ...routeParams, ...chardhamParams, ...localityParams];
}

export async function generateMetadata({ params }) {
  // Await params in Next.js 15
  const resolvedParams = await params;
  const { route } = resolvedParams;

  // Add null check
  if (!route) {
    return {
      title: tightenTitle('Tempo Traveller Service | Premium Group Travel'),
      description: 'Book premium tempo travellers for comfortable group travel across India.'
    };
  }

  // NCR locality / airport page — checked first because these slugs are plain
  // place names and must not fall through to the route parser.
  if (ncrLocalityServes('tempo-traveller', route)) {
    return buildNcrLocalityMetadata('tempo-traveller', route);
  }

  // Check if it's a Chardham page
  if (isChardhamSlug(route)) {
    const chardhamData = getChardhamBySlug(route);
    const startingPrice = chardhamData.packages?.[0]?.price || '₹70,000';
    const origin = chardhamData.origin;
    const destShort = chardhamData.destination === 'Chardham Yatra' ? 'Char Dham' : chardhamData.destination;

    // Concise title (under 60 chars) — "{Origin} to Char Dham by Tempo 2026 | ₹X"
    let pageTitle = `${origin} to ${destShort} by Tempo Traveller 2026 | ${startingPrice}`;
    if (pageTitle.length > 60) pageTitle = `${origin} to ${destShort} Tempo Traveller 2026 | ${startingPrice}`;
    if (pageTitle.length > 60) pageTitle = `${origin} to ${destShort} Tempo 2026 | ${startingPrice}`;

    // Fare-first meta description: package price leads, then duration + inclusions
    const pageDescription = buildFareFirstDescription([
      `12-26 seater tempo from ${startingPrice}`,
      `${origin} to ${destShort} ${chardhamData.duration}`,
      'hill driver, fuel & tolls included',
      '4.9★',
      'call 7668570551'
    ]);

    // Keyword set (15-22 focused terms): vehicle + origin + intent + entity
    const chardhamKeywords = [
      `${origin.toLowerCase()} to chardham tempo traveller`,
      `${origin.toLowerCase()} to ${destShort.toLowerCase()} tempo traveller`,
      'tempo traveller chardham yatra',
      'chardham yatra tempo traveller',
      '12 seater chardham yatra tempo',
      '17 seater chardham tempo traveller',
      '26 seater chardham yatra tempo',
      'group chardham yatra package',
      'ac tempo kedarnath badrinath',
      'chardham yatra by tempo 2026',
      'tempo traveller for kedarnath',
      'tempo traveller for badrinath',
      'yamunotri gangotri tempo traveller',
      `${origin.toLowerCase()} chardham yatra package`,
      'chardham tempo traveller booking',
      'chardham yatra tempo traveller fare',
      'family chardham yatra tempo',
      'senior citizen chardham tempo',
    ];

    return {
      title: pageTitle,
      description: pageDescription,
      keywords: chardhamKeywords,
      applicationName: 'Triveni Cabs™',
      authors: [{ name: 'Triveni Cabs™' }],
      creator: 'Triveni Cabs™',
      publisher: 'Triveni Cabs™',
      metadataBase: new URL('https://www.trivenicabs.in'),
      alternates: {
        canonical: `https://www.trivenicabs.in/tempo-traveller/${route}`,
      },
      openGraph: {
        title: `${chardhamData.title} by Tempo Traveller — ${chardhamData.duration} from ${startingPrice}`,
        description: `Journey to Moksha from ${origin}. AC 12-26 seater tempo charter for ${isFullDhamLabel(chardhamData)}, experienced hill drivers, oxygen onboard. Book your 2026 Yatra.`,
        url: `https://www.trivenicabs.in/tempo-traveller/${route}`,
        type: 'website',
        locale: 'en_IN',
        siteName: 'Triveni Cabs™',
        images: [
          {
            url: chardhamData.images?.hero || '/images/tempo_hero_section.jpg',
            width: 1200,
            height: 630,
            alt: `${chardhamData.title} - Tempo Traveller Service`,
            type: 'image/jpeg',
          },
        ],
      },
      twitter: {
        card: 'summary_large_image',
        title: pageTitle,
        description: `${chardhamData.duration} pilgrimage by AC tempo from ${startingPrice}. 12-26 seater, hill driver. Call +91-7668570551`,
        site: '@trivenicabs',
        images: [chardhamData.images?.hero || '/images/tempo_hero_section.jpg'],
      },
      robots: isNoindexPath(`/tempo-traveller/${route}`) ? NOINDEX_ROBOTS : { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
      category: 'Travel',
    };
  }

  // Check if it's a city page
  if (isCitySlug(route)) {
    const [cityName, cityData] = getCityBySlug(route);
    const routeCount = tempoRoutes[cityName]?.length || 0;

    return {
      // Week 49 (Workstream E, plan action 8): the title answers the booking
      // question with the rate card's day price for a 12-seater (₹23/km on the
      // 300 km minimum, ₹6,900) instead of the per-kilometre range the page
      // showed before, which did not match the rate card. Title under 60 chars.
      title: `Tempo Traveller in ${cityData.name} ₹6,900 a Day, 12-Seater | Hire`,
      description: buildFareFirstDescription([
        `12-seater tempo traveller in ${cityData.name} ₹6,900 a day (300 km at ₹23/km)`,
        '17 and 26 seater on request',
        `${routeCount}+ routes from ${cityData.name}`,
        'driver + fuel included, tolls extra',
        'call 7668570551'
      ]),
      // The full SEO-proposal keyword cluster for this city (on rent / in /
      // rental / hire / booking / book / luxury / price / per km / cheap / AC /
      // outstation / near me + seater-specific + wedding, corporate and family
      // intents). Without this the page inherited the 13 generic site-wide
      // defaults from the root layout, which carried nothing city-specific —
      // the force-urbania and maharaja city pages already got this cluster
      // through the shared factory, so tempo was the odd one out.
      keywords: buildCityKeywordCluster('tempo-traveller', cityData.name),
      applicationName: 'Triveni Cabs™',
      metadataBase: new URL('https://www.trivenicabs.in'),
      alternates: {
        canonical: `https://www.trivenicabs.in/tempo-traveller/${route}`,
      },
      openGraph: {
        title: `Tempo Traveller from ${cityData.name} | ${routeCount} Destinations | Book Online`,
        description: `${cityData.tagline} - Book tempo traveller from ${cityData.name} to ${cityData.popularDestinations.join(', ')} and more. ₹20-28/km all-inclusive.`,
        url: `https://www.trivenicabs.in/tempo-traveller/${route}`,
        type: 'website',
        locale: 'en_IN',
        siteName: 'Triveni Cabs™ - Tempo Traveller Rental',
        images: [
          {
            url: '/images/tempo_hero_section.jpg',
            width: 1200,
            height: 630,
            alt: `Tempo Traveller on Rent from ${cityData.name} - Triveni Cabs`,
            type: 'image/jpeg',
          },
        ],
      },
      twitter: {
        card: 'summary_large_image',
        title: `Tempo Traveller from ${cityData.name} | ${routeCount} Destinations | ₹23/km`,
        description: `${cityData.tagline} | Book tempo traveller to ${cityData.popularDestinations.join(', ')} | Call +91-7668570551`,
        site: '@trivenicabs',
        images: ['/images/tempo_hero_section.jpg'],
      },
      robots: isNoindexPath(`/tempo-traveller/${route}`) ? NOINDEX_ROBOTS : { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
      category: 'Travel & Transportation',
    };
  }

  // It's a route page
  const routeParts = route.split('-to-');
  if (routeParts.length !== 2) {
    return {
      title: 'Tempo Traveller Service | Premium Group Travel',
      description: 'Book premium tempo travellers for comfortable group travel across India.'
    };
  }

  const [origin, destination] = routeParts;

  const formatCityName = (city) => {
    // Capitalise past an opening bracket too: "(golden Triangle)" read as broken copy.
    return city.split('-').map(word =>
      word.replace(/^(\(?)([a-z])/, (_, open, ch) => open + ch.toUpperCase())
    ).join(' ');
  };

  const originFormatted = formatCityName(origin);
  const destinationFormatted = formatCityName(destination);

  const routeMeta = routeDescriptions[route] || null;
  // Title and description both come from the factory formula (Week 48, C3) so
  // every route in the family reads the same way; the page's only contribution
  // is the fare estimate it will itself render.
  const baseMeta = generateTempoMetadata({
    origin: originFormatted,
    destination: destinationFormatted,
    price: '23/km',
    seats: '12-26',
    slug: route,
    estimate: buildTempoEstimate({ slug: route, origin: originFormatted, destination: destinationFormatted, routeMeta }),
  });

  return {
    ...baseMeta,
    // Week 47: routes from origins with zero traffic are de-indexed by rule (see noindex-families.mjs).
    robots: isNoindexPath(`/tempo-traveller/${route}`) ? NOINDEX_ROBOTS : baseMeta.robots,
  };
}

export default async function TempoTravellerRoutePage({ params }) {
  // Await params in Next.js 15
  const resolvedParams = await params;
  const { route } = resolvedParams;

  // Add null check and handle invalid routes
  if (!route) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Invalid Route</h1>
          <p className="text-gray-600">The requested route was not found.</p>
        </div>
      </div>
    );
  }

  // NCR locality / airport page — shares its implementation with the
  // force-urbania factory via renderNcrLocalityPage.
  if (ncrLocalityServes('tempo-traveller', route)) {
    return renderNcrLocalityPage('tempo-traveller', route);
  }

  // Check if it's a Chardham page
  if (isChardhamSlug(route)) {
    const chardhamData = getChardhamBySlug(route);
    const startingPrice = chardhamData.packages?.[0]?.price || '₹70,000';
    const pageUrl = `https://www.trivenicabs.in/tempo-traveller/${route}`;
    const dhamLabel = isFullDhamLabel(chardhamData);
    const lowNum = startingPrice.replace(/[₹,]/g, '');
    const highPkg = chardhamData.packages?.[chardhamData.packages.length - 1]?.price || startingPrice;
    const highNum = highPkg.replace(/[₹,]/g, '');
    const ratingAndReviews = getRatingAndReviews(route, 'yatra');
    const extendedFaqs = getChardhamExtendedFaqs(chardhamData);

    // Service schema for pilgrimage transport (deterministic yatra reviews)
    const serviceSchema = {
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "Char Dham Pilgrimage Tempo Traveller Charter",
      "name": `${chardhamData.title} by Tempo Traveller — Triveni Cabs`,
      "brand": { "@type": "Brand", "name": "Triveni Cabs" },
      "description": chardhamData.description,
      "provider": {
        "@type": "LocalBusiness",
        "@id": "https://www.trivenicabs.in/#organization",
        "name": "Triveni Cabs",
        "telephone": "+91-7668570551",
        "email": "cabstriveni@gmail.com",
        "url": "https://www.trivenicabs.in",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Delhi",
          "addressRegion": "Delhi",
          "addressCountry": "IN"
        },
        "priceRange": "₹₹"
      },
      "areaServed": { "@type": "State", "name": "Uttarakhand" },
      "offers": {
        "@type": "AggregateOffer",
        "lowPrice": lowNum,
        "highPrice": highNum,
        "priceCurrency": "INR",
        "offerCount": chardhamData.packages?.length || 5
      },
      ...ratingAndReviews
    };

    // Product schema — packages become offers (12-26 seater tempo charters)
    const productSchema = {
      "@context": "https://schema.org",
      "@type": "Product",
      // Week 53: Google's Merchant listings report treats a missing `image`
      // as a critical error. This is an asset the page already uses.

      "image": `${BASE_URL}/images/tempo/17_seater.jpg`,
      "name": `${chardhamData.title} Tempo Traveller Package — Triveni Cabs`,
      "description": `${chardhamData.duration} Char Dham tempo traveller charter from ${chardhamData.origin} covering ${dhamLabel}. Available in 12, 16, 17, 20 and 26 seater AC tempo travellers with hill driver, fuel, tolls and parking included.`,
      "brand": { "@type": "Brand", "name": "Triveni Cabs" },
      "category": "Pilgrimage Transport",
      "offers": (chardhamData.packages || []).map((pkg) => ({
        "@type": "Offer",
        "name": `${pkg.type} — ${pkg.vehicle} Tempo Traveller`,
        "price": pkg.price.replace(/[₹,]/g, ''),
        "priceCurrency": "INR",
        "availability": "https://schema.org/InStock",
        "url": pageUrl,
        "seller": { "@type": "Organization", "@id": "https://www.trivenicabs.in/#organization", "name": "Triveni Cabs" }
      })),
      ...ratingAndReviews
    };

    // BreadcrumbList schema — 4-level (Home > Tempo Traveller > Char Dham Yatra > {title})
    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" },
        { "@type": "ListItem", "position": 2, "name": "Tempo Traveller", "item": "https://www.trivenicabs.in/tempo-traveller" },
        { "@type": "ListItem", "position": 3, "name": "Char Dham Yatra", "item": "https://www.trivenicabs.in/chardham-yatra" },
        { "@type": "ListItem", "position": 4, "name": `${chardhamData.title} by Tempo Traveller`, "item": pageUrl }
      ]
    };

    // FAQPage schema — uses the 10-12 extended FAQs rendered on the page,
    // with Speakable wired to the first answer for voice assistants.
    const faqSchema = extendedFaqs && extendedFaqs.length > 0 ? {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "speakable": getSpeakableSchema(['.speakable-headline', '.speakable-lead', '.speakable-faq-first']),
      "mainEntity": extendedFaqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
      }))
    } : null;

    // HowTo schema — booking a tempo traveller for Char Dham
    const howToSchema = getHowToSchema({
      name: `How to Book a Tempo Traveller for ${chardhamData.title}`,
      description: `Step-by-step guide to booking a 12-26 seater AC tempo traveller for the ${chardhamData.title} pilgrimage from ${chardhamData.origin}.`,
      totalTime: 'PT5M',
      estimatedCost: { currency: 'INR', value: lowNum },
      steps: [
        { name: 'Choose your seater', text: `Pick a 12, 16, 17, 20 or 26 seater tempo traveller based on your ${chardhamData.origin} pilgrim group size — the 17 seater offers the best value per seat.` },
        { name: 'Call or WhatsApp', text: 'Contact +91-7668570551 with your travel dates, pilgrim count and pickup point for an instant Char Dham tempo quote.' },
        { name: 'Confirm itinerary & vehicle', text: `Lock the ${chardhamData.duration} itinerary covering ${dhamLabel}; we share the hill driver and vehicle details and assist with biometric registration.` },
        { name: 'Pay advance & travel', text: 'Pay a small advance to confirm; the AC tempo with an experienced Pahari driver arrives at your pickup point to begin the Yatra.' }
      ]
    });

    // TouristTrip schema — the pilgrimage itinerary as an entity for AEO/GEO
    const touristTripSchema = {
      "@context": "https://schema.org",
      "@type": "TouristTrip",
      "@id": `${pageUrl}#trip`,
      "name": `${chardhamData.title} by Tempo Traveller`,
      "description": chardhamData.description,
      "url": pageUrl,
      "touristType": ["Pilgrims", "Families", "Senior Citizens", "Religious groups"],
      "itinerary": {
        "@type": "ItemList",
        "numberOfItems": (chardhamData.itinerary || []).length,
        "itemListElement": (chardhamData.itinerary || []).map((day, i) => ({
          "@type": "ListItem",
          "position": i + 1,
          "item": { "@type": "TouristAttraction", "name": day.title, "description": day.desc }
        }))
      },
      "subjectOf": DHAM_FACTS
        .filter(d => chardhamData.destination === 'Chardham Yatra' || (chardhamData.destination || '').includes(d.name))
        .map(d => ({
          "@type": "Place",
          "name": d.name,
          "description": `${d.deity} • ${d.river} • Altitude ${d.altitude} • ${d.district} district, Uttarakhand. ${d.note}`,
          "address": { "@type": "PostalAddress", "addressRegion": "Uttarakhand", "addressCountry": "IN" }
        })),
      "offers": {
        "@type": "Offer",
        "price": lowNum,
        "priceCurrency": "INR",
        "url": pageUrl,
        "availability": "https://schema.org/InStock"
      },
      "provider": { "@type": "TravelAgency", "@id": "https://www.trivenicabs.in/#organization", "name": "Triveni Cabs" },
      "dateModified": (getContentUpdatedOn(`/tempo-traveller/${route}`) || getTodayDate()),
      ...ratingAndReviews
    };

    // Article schema — editorial guide entity for AEO/GEO + freshness signal,
    // with Speakable wired to the hero headline + direct-answer lead.
    const articleSchema = getArticleSchema({
      slug: `tempo-traveller/${route}`,
      headline: `${chardhamData.title} by Tempo Traveller (2026) — Packages, Itinerary & Fare`,
      description: chardhamData.description,
      image: chardhamData.images?.hero || '/images/tempo_hero_section.jpg',
      authorName: 'editorial',
      speakableSelectors: ['.speakable-headline', '.speakable-lead', '.speakable-faq-first']
    });

    // Place schemas for each dham in scope — standalone geographic entities
    // (TouristAttraction) for richer GEO entity graph / knowledge-panel signals.
    const placeSchemas = DHAM_FACTS
      .filter(d => chardhamData.destination === 'Chardham Yatra' || (chardhamData.destination || '').includes(d.name))
      .map(d => ({
        "@context": "https://schema.org",
        "@type": "TouristAttraction",
        "name": `${d.name} Dham`,
        "description": `${d.deity} • ${d.river} • Altitude ${d.altitude} • ${d.district} district, Uttarakhand. ${d.note}`,
        "touristType": ["Pilgrims", "Religious tourists"],
        "address": { "@type": "PostalAddress", "addressRegion": "Uttarakhand", "addressCountry": "IN" }
      }));

    return (
      <>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
        {faqSchema && (
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
        )}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(touristTripSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
        {placeSchemas.map((p, i) => (
          <script key={`dham-place-${i}`} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(p) }} />
        ))}
        <AEOHead pageType="tour" data={{ url: `/tempo-traveller/${route}`, title: `${chardhamData.title} Tempo Traveller` }} />
        <ChardhamTempoClient
          data={chardhamData}
          reviews={getYatraReviews(route)}
          reviewCount={getDeterministicReviewCount(route)}
        />
      </>
    );
  }

  // Check if it's a city page
  if (isCitySlug(route)) {
    const [cityName, cityData] = getCityBySlug(route);
    const cityRoutes = tempoRoutes[cityName] || [];

    // Prepare all cities data for "Other Cities" section
    const allCitiesData = Object.entries(tempoCities).map(([name, data]) => ({
      ...data,
      routeCount: tempoRoutes[name]?.length || 0
    }));

    const pageData = {
      cityData: cityData,
      routes: cityRoutes,
      fleet: tempoFleet,
      allCities: allCitiesData
    };

    // City page schemas
    const cityBreadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" },
        { "@type": "ListItem", "position": 2, "name": "Tempo Traveller", "item": "https://www.trivenicabs.in/tempo-traveller" },
        { "@type": "ListItem", "position": 3, "name": `Tempo Traveller in ${cityData.name}`, "item": `https://www.trivenicabs.in/tempo-traveller/${route}` }
      ]
    };

    const cityServiceSchema = {
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "Tempo Traveller Rental",
      "name": `Tempo Traveller on Rent in ${cityData.name} — Triveni Cabs`,
      "brand": { "@type": "Brand", "name": "Triveni Cabs" },
      "description": `Book 12-26 seater AC tempo traveller in ${cityData.name}. ${cityRoutes.length}+ routes to ${cityData.popularDestinations.join(', ')} and more. From ₹23/km all-inclusive.`,
      "provider": {
        "@type": "LocalBusiness",
        "@id": "https://www.trivenicabs.in/#organization",
        "name": "Triveni Cabs",
        "telephone": "+91-7668570551",
        "url": "https://www.trivenicabs.in",
        "priceRange": "₹₹"
      },
      "areaServed": { "@type": "City", "name": cityData.name },
      "offers": {
        "@type": "AggregateOffer",
        "lowPrice": "23",
        "highPrice": "35",
        "priceCurrency": "INR",
        "offerCount": cityRoutes.length
      },
      ...getRatingAndReviews(route, 'tempo')
    };

    const cityItemListSchema = {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "name": `Tempo Traveller Routes from ${cityData.name}`,
      "numberOfItems": cityRoutes.length,
      "itemListElement": cityRoutes.slice(0, 10).map((r, i) => ({
        "@type": "ListItem",
        "position": i + 1,
        "name": `${cityData.name} to ${r.name} Tempo Traveller`,
        "url": `https://www.trivenicabs.in/tempo-traveller/${cityName.toLowerCase().replace(/\s+/g, '-')}-to-${r.name.toLowerCase().replace(/\s+/g, '-')}`
      }))
    };

    // City-specific destinations string for natural-language FAQ answers
    const topDests = cityRoutes.slice(0, 5).map(r => r.name).join(', ') || (cityData.popularDestinations || []).join(', ');

    // FAQPage schema — 10 city-specific Q&A targeting "tempo traveller in {city}"
    // long-tail + AEO/voice queries (fares, seaters, popular routes, local vs
    // outstation, night charge, GST, wedding, airport pickup). Speakable wired
    // to the direct-answer lead + first FAQ for voice assistants.
    const cityFaqs = [
      {
        // Week 49 gap fix: phrased in the export's own words ("tempo
        // traveller in lucknow") rather than formal site copy, per
        // Workstream F's "FAQ questions in the searcher's words".
        question: `Tempo Traveller in ${cityData.name}: how much does it cost?`,
        answer: `Tempo traveller hire in ${cityData.name} starts at ₹23/km for a 12-seater AC tempo and goes up to ₹31/km for a 26-seater Maharaja edition. Local 8-hour/80-km day packages start around ₹6,000. Fares include fuel and driver; tolls, parking and state taxes are extra. Call 7668570551 for an exact ${cityData.name} quote.`
      },
      {
        question: `What seater tempo travellers are available in ${cityData.name}?`,
        answer: `In ${cityData.name} we offer 12-seater, 16-seater, 17-seater (most popular), 20-seater with LED TV, and 26-seater Maharaja tempo travellers. All are AC with pushback recliner seats, music system, charging points and GPS tracking.`
      },
      {
        question: `Which are the most popular tempo traveller routes from ${cityData.name}?`,
        answer: `Popular tempo traveller routes from ${cityData.name} include ${topDests}. We cover ${cityRoutes.length}+ outstation destinations plus local sightseeing, pilgrimage, wedding and corporate trips.`
      },
      {
        question: `Do you offer both local and outstation tempo traveller in ${cityData.name}?`,
        answer: `Yes. In ${cityData.name} you can book a tempo traveller for local sightseeing (8 hours / 80 km day package) or for outstation one-way and round trips charged per kilometre. Multi-day tours with hotel-to-hotel pickup are also available.`
      },
      {
        question: `Is there a driver allowance or night charge for tempo traveller in ${cityData.name}?`,
        answer: `For local day trips in ${cityData.name} the driver allowance is included in the package. For outstation and overnight journeys, a driver night charge (₹300-₹500 per night) applies and is shown upfront. There are no hidden charges.`
      },
      {
        question: `Do tempo traveller fares in ${cityData.name} include GST and tolls?`,
        answer: `Base per-km fares in ${cityData.name} cover fuel and driver. Tolls, parking and applicable state permits are billed at actuals. GST is added as per government rules, and we provide a proper GST invoice for corporate and business bookings.`
      },
      {
        question: `Can I book a decorated tempo traveller for a wedding or baraat in ${cityData.name}?`,
        answer: `Yes, we provide decorated 17 and 26-seater Maharaja tempo travellers for weddings, baraat and family functions in ${cityData.name}, complete with a music system and a professional chauffeur in formals. Book early for peak wedding-season dates.`
      },
      {
        question: `Do you provide tempo traveller for airport and railway pickup in ${cityData.name}?`,
        answer: `Yes, we offer tempo traveller airport and railway station pickup and drop in ${cityData.name} for groups with luggage. Share your flight or train details and the driver tracks arrival time so the vehicle is ready when you land.`
      },
      {
        question: `How do I book a tempo traveller in ${cityData.name}?`,
        answer: `Call or WhatsApp +91-7668570551 with your travel date, pickup point in ${cityData.name}, group size and destination. You get an instant quote and confirmation with driver and vehicle details. No advance is needed for most bookings.`
      },
      {
        question: `Are tempo travellers in ${cityData.name} safe for family and senior-citizen group travel?`,
        answer: `Absolutely. Every tempo traveller in ${cityData.name} comes with a verified, experienced driver, GPS live tracking, first-aid kit and 24/7 support. Pushback seats and powerful AC keep elderly passengers and children comfortable on long journeys.`
      }
    ];

    const cityFaqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "speakable": getSpeakableSchema(['.speakable-headline', '.speakable-lead', '.speakable-faq-first']),
      "mainEntity": cityFaqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
      }))
    };

    // HowTo schema — booking a tempo traveller in the city
    const cityHowToSchema = getHowToSchema({
      name: `How to Book a Tempo Traveller in ${cityData.name}`,
      description: `Step-by-step guide to booking a 12-26 seater AC tempo traveller in ${cityData.name} for local sightseeing or outstation group travel.`,
      totalTime: 'PT5M',
      estimatedCost: { currency: 'INR', value: '6000' },
      steps: [
        { name: 'Choose your seater', text: `Pick a 12, 16, 17, 20 or 26 seater tempo traveller based on your ${cityData.name} group size — the 17 seater offers the best value per seat.` },
        { name: 'Call or WhatsApp', text: `Contact +91-7668570551 with your travel date, pickup point in ${cityData.name}, group size and destination for an instant quote.` },
        { name: 'Confirm vehicle & fare', text: 'Lock the local day package or per-km outstation fare; we share the assigned driver and vehicle details upfront with no hidden charges.' },
        { name: 'Travel comfortably', text: `The AC tempo traveller with a professional driver arrives at your ${cityData.name} pickup point at the scheduled time to begin your trip.` }
      ]
    });

    // Article schema — editorial guide entity for AEO/GEO + freshness signal,
    // Speakable-enabled, so the page can be cited as an authoritative answer
    // source for "tempo traveller in {city}" AI/voice queries.
    const cityArticleSchema = getArticleSchema({
      slug: `tempo-traveller/${route}`,
      headline: `Tempo Traveller in ${cityData.name} (2026) — Fares, Seater Options, Routes & Booking Guide`,
      description: `Complete guide to hiring a 12-26 seater AC tempo traveller in ${cityData.name}: per-km fares from ₹23/km, local day packages, ${cityRoutes.length}+ outstation routes, wedding and corporate options.`,
      image: '/images/tempo_hero_section.jpg',
      authorName: 'editorial',
      speakableSelectors: ['.speakable-headline', '.speakable-lead', '.speakable-faq-first']
    });

    // City Place schema — anchors the page to a real-world geographic entity
    // (geo coordinates + address) for the GEO entity graph. Null-safe.
    const cityPlaceSchema = getCityPlaceSchema(cityData.slug, {
      idSlug: `tempo-traveller/${route}`,
      description: `${cityData.name} — served by Triveni Cabs™ tempo traveller rental with ${cityRoutes.length}+ outstation routes and local group travel.`,
      image: '/images/tempo_hero_section.jpg'
    });

    // Pass FAQ + popular destinations into the client so they render as visible
    // DOM (required for the FAQPage/Speakable schema to be valid + for content depth).
    const cityPageData = {
      ...pageData,
      cityFaqs,
      topDestinations: cityRoutes.slice(0, 8).map(r => ({
        name: r.name,
        type: r.type,
        slug: `${cityData.slug}-to-${r.name.toLowerCase().replace(/\s+/g, '-')}`
      }))
    };

    return (
      <>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(cityBreadcrumbSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(cityServiceSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(cityItemListSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(cityFaqSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(cityHowToSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(cityArticleSchema) }} />
        {cityPlaceSchema && (
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(cityPlaceSchema) }} />
        )}
        <AEOHead pageType="tempo" data={{ url: `/tempo-traveller/${route}`, title: `${cityData.name} Tempo Traveller`, city: cityData.name }} />
        <AdventureActivities path={`/tempo-traveller/${route}`} />
        <TempoCityClient data={cityPageData} planningGuide={<PriorityPageGuide path={`/tempo-traveller/${route}`} />} />
      </>
    );
  }

  // It's a route page
  const routeParts = route.split('-to-');
  if (routeParts.length !== 2) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Invalid Route Format</h1>
          <p className="text-gray-600">The route format should be origin-to-destination.</p>
        </div>
      </div>
    );
  }

  const [origin, destination] = routeParts;

  const formatCityName = (city) => {
    // Capitalise past an opening bracket too: "(golden Triangle)" read as broken copy.
    return city.split('-').map(word =>
      word.replace(/^(\(?)([a-z])/, (_, open, ch) => open + ch.toUpperCase())
    ).join(' ');
  };

  const originFormatted = formatCityName(origin);
  const destinationFormatted = formatCityName(destination);

  // Find route data on server side
  const findRouteData = (originCity, destinationCity) => {
    if (tempoRoutes[originCity]) {
      const routeInfo = tempoRoutes[originCity].find(r =>
        r.name.toLowerCase() === destinationCity.toLowerCase()
      );
      if (routeInfo) {
        return {
          ...routeInfo,
          origin: originCity,
          destination: destinationCity,
          exists: true
        };
      }
    }

    return {
      name: destinationCity,
      type: 'Tourism',
      origin: originCity,
      destination: destinationCity,
      exists: false
    };
  };

  // Check if tourist spots are available for the destination
  const hasTouristSpots = (city) => {
    const spotsAvailable = ['Delhi', 'Agra', 'Jaipur', 'Udaipur', 'Haridwar', 'Rishikesh', 'Shimla', 'Manali', 'Amritsar', 'Lucknow', 'Varanasi', 'Jodhpur', 'Ayodhya'];
    return spotsAvailable.includes(city);
  };

  const routeDataBase = findRouteData(originFormatted, destinationFormatted);
  // tempoRoutes entries carry no distance/drive time of their own, so borrow the
  // real figures for this corridor from the distance / one-way datasets. Anything
  // still unresolved stays absent — the client drops the fact rather than
  // rendering a placeholder.
  const routeMetrics = resolveRouteMetrics({
    slug: route,
    origin: originFormatted,
    destination: destinationFormatted,
    distance: routeDataBase.distance,
    duration: routeDataBase.duration,
  });
  const routeData = {
    ...routeDataBase,
    ...(routeMetrics.distance ? { distance: routeMetrics.distance } : {}),
    ...(routeMetrics.duration ? { duration: routeMetrics.duration } : {}),
  };
  // Phase 2 GEO: geo-located origin/destination City Place entities (GeoCoordinates).
  const _tgeo = (s) => s.toLowerCase().replace(/\s+/g, '-');
  const originPlace = getCityPlaceSchema(_tgeo(originFormatted), { idSlug: `tempo-traveller/${route}#origin` });
  const destinationPlace = getCityPlaceSchema(_tgeo(destinationFormatted), { idSlug: `tempo-traveller/${route}#destination` });
  const tempoGeoNodes = [originPlace, destinationPlace].filter(Boolean);
  const destinationSightseeing = localSightseeing?.[destinationFormatted] || [];

  // Get related routes from the same origin for internal linking
  const relatedRoutes = (tempoRoutes[originFormatted] || [])
    .filter(r => r.name.toLowerCase() !== destinationFormatted.toLowerCase())
    .slice(0, 6)
    .map(r => ({
      name: r.name,
      type: r.type,
      slug: `${originFormatted.toLowerCase().replace(/\s+/g, '-')}-to-${r.name.toLowerCase().replace(/\s+/g, '-')}`
    }));

  // Prepare data for client component
  const pageData = {
    routeSlug: route,
    origin: originFormatted,
    destination: destinationFormatted,
    routeData: routeData,
    hasTouristSpots: hasTouristSpots(destinationFormatted),
    localSightseeing: destinationSightseeing,
    fleet: tempoFleet,
    relatedRoutes: relatedRoutes,
    corridorLinks: getCorridorLinks(route, 'tempo-traveller')
  };

  // Get route description for enriched schema data
  const routeDesc = routeDescriptions[route] || null;

  // Blog posts covering this corridor — links money page back to editorial content.
  const tempoBlogLinks = getRelatedBlogPosts([originFormatted, destinationFormatted], 3)
    .map((p) => ({
      href: `/blog/${p.slug}`,
      anchor: p.readTime ? `${p.title} · ${p.readTime}` : p.title
    }));

  // TravelAction schema
  const travelActionSchema = {
    "@context": "https://schema.org",
    "@type": "TravelAction",
    "name": `${originFormatted} to ${destinationFormatted} Tempo Traveller Service`,
    "description": `Premium tempo traveller rental from ${originFormatted} to ${destinationFormatted}. 12 to 26 seater AC tempo with pushback seats, professional drivers, and GPS tracking.`,
    "fromLocation": originPlace
      ? { "@id": originPlace["@id"] }
      : { "@type": "Place", "name": originFormatted, "address": { "@type": "PostalAddress", "addressCountry": "IN" } },
    "toLocation": destinationPlace
      ? { "@id": destinationPlace["@id"] }
      : { "@type": "Place", "name": destinationFormatted, "address": { "@type": "PostalAddress", "addressCountry": "IN" } },
    "provider": {
      "@type": "LocalBusiness",
      "@id": "https://www.trivenicabs.in/#organization",
      "name": "Triveni Cabs",
      "telephone": "+91-7668570551",
      "email": "cabstriveni@gmail.com",
      "url": "https://www.trivenicabs.in"
    },
    ...(routeDesc?.distance && { "distance": routeDesc.distance }),
    ...(routeDesc?.travelTime && { "duration": routeDesc.travelTime })
  };

  // Product schema with pricing and rating (deterministic per-slug review count)
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    // Week 53: Google's Merchant listings report treats a missing `image`
    // as a critical error. This is an asset the page already uses.

    "image": `${BASE_URL}/images/tempo/17_seater.jpg`,
    "name": `${originFormatted} to ${destinationFormatted} Tempo Traveller Rental — Triveni Cabs`,
    "description": `Book tempo traveller from ${originFormatted} to ${destinationFormatted}. Available in 12, 14, 17, 20, and 26 seater options. All vehicles AC with pushback seats, music system, and GPS tracking.`,
    "brand": { "@type": "Brand", "name": "Triveni Cabs" },
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "INR",
      "lowPrice": "23",
      "highPrice": "35",
      "priceSpecification": {
        "@type": "UnitPriceSpecification",
        "priceCurrency": "INR",
        "unitText": "per kilometer"
      },
      "availability": "https://schema.org/InStock",
      "url": `https://www.trivenicabs.in/tempo-traveller/${route}`,
      "seller": { "@type": "Organization", "@id": "https://www.trivenicabs.in/#organization", "name": "Triveni Cabs" }
    },
    ...getRatingAndReviews(route, 'tempo')
  };

  // BreadcrumbList schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" },
      { "@type": "ListItem", "position": 2, "name": "Tempo Traveller", "item": "https://www.trivenicabs.in/tempo-traveller" },
      { "@type": "ListItem", "position": 3, "name": `${originFormatted} to ${destinationFormatted}`, "item": `https://www.trivenicabs.in/tempo-traveller/${route}` }
    ]
  };

  // FAQPage schema — route-specific long-tail keyword targeting.
  // Speakable wired to the hero headline + direct-answer lead + first FAQ
  // answer so voice assistants (Google Assistant/Alexa) can read the fare aloud.
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "speakable": getSpeakableSchema(['.speakable-headline', '.speakable-lead', '.speakable-faq-first']),
    "mainEntity": [
      {
        "@type": "Question",
        "name": `What is the fare for ${originFormatted} to ${destinationFormatted} tempo traveller?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Tempo traveller fare from ${originFormatted} to ${destinationFormatted} starts at ₹23/km for 12 seater and goes up to ₹31/km for 26 seater AC tempo. ${routeDesc?.distance ? `The total distance is approximately ${routeDesc.distance}.` : ''} Price includes driver, fuel, and AC. Toll and parking extra. Call 7668570551 for exact quote.`
        }
      },
      {
        "@type": "Question",
        "name": `How long does ${originFormatted} to ${destinationFormatted} take by tempo traveller?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": routeDesc?.travelTime
            ? `The journey from ${originFormatted} to ${destinationFormatted} by tempo traveller takes approximately ${routeDesc.travelTime}, depending on traffic and road conditions.`
            : `The travel time from ${originFormatted} to ${destinationFormatted} by tempo traveller depends on the route and traffic. Contact us at 7668570551 for estimated travel time.`
        }
      },
      {
        "@type": "Question",
        "name": `What tempo traveller sizes are available for ${originFormatted} to ${destinationFormatted}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `We offer 12 seater, 14 seater, 17 seater, 20 seater, and 26 seater tempo travellers for ${originFormatted} to ${destinationFormatted}. All are AC with pushback seats, music system, charging points, and GPS tracking. 17 seater is most popular for this route.`
        }
      },
      {
        "@type": "Question",
        "name": `Is it safe to travel ${originFormatted} to ${destinationFormatted} by tempo traveller?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Yes, absolutely safe. All our tempo travellers for ${originFormatted} to ${destinationFormatted} come with experienced drivers (10+ years), GPS tracking, first-aid kit, and 24/7 roadside assistance. Vehicles are regularly serviced and inspected.`
        }
      },
      {
        "@type": "Question",
        "name": `Can I book ${originFormatted} to ${destinationFormatted} tempo traveller for a round trip?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Yes, we offer both one-way and round trip tempo traveller bookings from ${originFormatted} to ${destinationFormatted}. Round trips get better per-km rates. Multi-day trips with sightseeing stops are also available. Call 7668570551 or WhatsApp for custom itineraries.`
        }
      },
      {
        "@type": "Question",
        "name": `What is the best time to travel from ${originFormatted} to ${destinationFormatted}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": routeDesc?.bestSeason
            ? `The best time to travel from ${originFormatted} to ${destinationFormatted} is ${routeDesc.bestSeason}. We recommend starting early morning for the most comfortable journey.`
            : `${originFormatted} to ${destinationFormatted} can be traveled year-round. We recommend starting early morning for the best experience. Contact us for seasonal travel advice.`
        }
      },
      {
        "@type": "Question",
        "name": `Do you provide overnight tempo traveller from ${originFormatted} to ${destinationFormatted}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Yes, overnight tempo traveller service is available from ${originFormatted} to ${destinationFormatted}. Our experienced drivers are comfortable with night driving. For long routes, we provide two drivers for safety. Driver night charges apply for overnight journeys.`
        }
      },
      {
        "@type": "Question",
        "name": `How do I book a tempo traveller from ${originFormatted} to ${destinationFormatted}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Booking is easy: Call +91-7668570551 or WhatsApp us with your travel date, pickup location in ${originFormatted}, group size, and any sightseeing stops needed. We confirm within 15 minutes with driver details and vehicle photos. No advance payment needed for most bookings.`
        }
      }
    ]
  };

  // HowTo schema for booking — same helper the Chardham and city branches use,
  // so all three tempo page types emit an identical HowTo shape.
  const howToSchema = getHowToSchema({
    name: `How to Book a Tempo Traveller from ${originFormatted} to ${destinationFormatted}`,
    description: `Step-by-step guide to booking a 12-26 seater AC tempo traveller for the ${originFormatted} to ${destinationFormatted} trip${routeDesc?.distance ? ` (${routeDesc.distance})` : ''}.`,
    totalTime: 'PT5M',
    steps: [
      { name: 'Choose your seater', text: `Pick a 12, 16, 17, 20 or 26 seater tempo traveller for your ${originFormatted} to ${destinationFormatted} journey based on group size — the 17 seater offers the best value per seat.` },
      { name: 'Call or WhatsApp', text: 'Contact +91-7668570551 or WhatsApp for an instant booking and price quote.' },
      { name: 'Share trip details', text: `Provide travel date, pickup location in ${originFormatted}, number of passengers and any sightseeing stops.` },
      { name: 'Get instant confirmation', text: 'Receive booking confirmation with driver name, photo, vehicle number and GPS tracking link within 15 minutes.' }
    ]
  });

  // Article schema — editorial guide entity for AEO/GEO + freshness signal,
  // with Speakable wired to the hero headline + direct-answer lead. Helps the
  // page surface as an authoritative answer source for AI/voice queries on the
  // "{origin} to {destination} tempo traveller" topic.
  const routeArticleSchema = getArticleSchema({
    slug: `tempo-traveller/${route}`,
    headline: `${originFormatted} to ${destinationFormatted} Tempo Traveller (2026) — Fare, Seater Options & Booking Guide`,
    description: `Complete guide to booking a 12-26 seater AC tempo traveller from ${originFormatted} to ${destinationFormatted}${routeDesc?.distance ? ` (${routeDesc.distance})` : ''}. Fares from ₹23/km, all-inclusive of fuel, driver and tolls.`,
    image: '/images/tempo_hero_section.jpg',
    authorName: 'editorial',
    speakableSelectors: ['.speakable-headline', '.speakable-lead', '.speakable-faq-first']
  });

  // TouristTrip schema — frames the journey as a discoverable trip entity for
  // AEO/GEO; links from/to City entities and surfaces fare + provider.
  const routeTripSchema = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    "@id": `https://www.trivenicabs.in/tempo-traveller/${route}#trip`,
    "name": `${originFormatted} to ${destinationFormatted} by Tempo Traveller`,
    "description": `Group road trip from ${originFormatted} to ${destinationFormatted} in a 12-26 seater AC tempo traveller with professional driver${routeDesc?.distance ? `, covering approximately ${routeDesc.distance}` : ''}${routeDesc?.travelTime ? ` in around ${routeDesc.travelTime}` : ''}.`,
    "url": `https://www.trivenicabs.in/tempo-traveller/${route}`,
    "touristType": ["Families", "Groups", "Corporate teams", "Wedding parties", "Pilgrims"],
    "itinerary": {
      "@type": "ItemList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "item": { "@type": "TouristAttraction", "name": originFormatted, "description": `Pickup point in ${originFormatted}` } },
        { "@type": "ListItem", "position": 2, "item": { "@type": "TouristAttraction", "name": destinationFormatted, "description": `Drop / sightseeing destination ${destinationFormatted}` } }
      ]
    },
    "offers": {
      "@type": "Offer",
      "price": "23",
      "priceCurrency": "INR",
      "url": `https://www.trivenicabs.in/tempo-traveller/${route}`,
      "availability": "https://schema.org/InStock"
    },
    "provider": { "@type": "TravelAgency", "@id": "https://www.trivenicabs.in/#organization", "name": "Triveni Cabs" },
    "dateModified": (getContentUpdatedOn(`/tempo-traveller/${route}`) || getTodayDate()),
    ...getRatingAndReviews(route, 'tempo')
  };

  return (
    <>
      <script
        id="tempo-travel-action"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(travelActionSchema) }}
      />
      <script
        id="tempo-product"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <script
        id="tempo-breadcrumb"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        id="tempo-faq"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        id="tempo-howto"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <script
        id="tempo-service"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          ...generateTempoServiceSchema(originFormatted, destinationFormatted, '23', '12-26'),
          brand: { "@type": "Brand", "name": "Triveni Cabs™" },
          ...getRatingAndReviews(route, 'tempo')
        }) }}
      />
      {tempoGeoNodes.map((node, i) => (
        <script key={`tempo-geo-${i}`} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(node) }} />
      ))}
      <AEOHead pageType="tempo" data={{ url: `/tempo-traveller/${route}`, title: `Tempo Traveller ${originFormatted} to ${destinationFormatted}`, origin: originFormatted, destination: destinationFormatted, city: originFormatted }} />

      {/* routeDescription is looked up here rather than in the client, so the
          265 KB tempoTravellerData module stays out of the browser bundle. */}
      <DynamicTempoRoutesClient
        data={{ ...pageData, routeDescription: routeDescriptions[route] || null }}
        destinationAttractions={getAttractionsForCity(pageData.destination)}
      />

      <AdventureActivities path={`/tempo-traveller/${route}`} />

      <div className="container mx-auto px-4 pb-12">
        <RelatedLinks
          heading={`Popular in ${originFormatted}`}
          links={getMoneyPageLinks(originFormatted, 5)}
          ariaLabel={`Popular ${originFormatted} services`}
          tone="slate"
        />
        {tempoBlogLinks.length > 0 && (
          <RelatedLinks
            heading="Trip guides & tips"
            links={tempoBlogLinks}
            ariaLabel={`${originFormatted} to ${destinationFormatted} travel guides`}
            tone="amber"
          />
        )}
      </div>
    </>
  );
}
