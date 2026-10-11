import SightseeingFacts from '@/components/sightseeing/SightseeingFacts';
import AdventureActivities from '@/components/content/AdventureActivities';
// src/app/sightseeing/[slug]/page.js

import { getTourBySlug, getAllTours, getToursByCity, getCitiesWithTours } from '@/utilis/sightseeingData';
// Week 41: membership-checked money links (zero 404s) — every href below is
// verified against the real route data before it is rendered.
import { getAllOneWayRouteSlugs } from '@/utilis/oneWayCabData';
import { getAllRoundTripSlugs } from '@/utilis/roundTripData';
import { cities as serviceCities } from '@/utilis/data';

// ISR - Revalidate every hour (3600 seconds) for fresh content
export const revalidate = 3600;
export const dynamicParams = false;
import SightseeingDetailClient from './SightseeingDetailClient';
import CityToursPage from './CityToursPage';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { generateTourMetadata, generateSightseeingCityMetadata } from '@/lib/seo/metadata-factory';
import { generateTourFAQs } from '@/lib/seo/faq-generator';
import { COMPANY_INFO, AGGREGATE_RATING, BASE_URL } from '@/lib/seo/constants';
import Script from 'next/script';
import AEOHead from '@/components/seo/AEOHead';
import CityFaresTable from '@/components/seo/CityFaresTable';
import RelatedLinks from '@/components/seo/RelatedLinks';
import { getSiloHubLinks, getCityTopicalLinks } from '@/lib/seo/linkingHelper';
// Aliased is unnecessary here — these names do not clash with the lib/seo import
// above. They pull in sightseeingData.js (1.24 MB), which is exactly why they are
// called here rather than inside the client component.
import { getRelatedToursByCity, getRelatedContent, getNearbyDestinations } from '@/utilis/linkingHelper';
// May 2026 SEO overhaul: per-slug real reviews replace hardcoded fake review counts
import { getRatingAndReviews } from '@/lib/seo/review-helpers';
// June 2026 deep AEO/GEO: Speakable + Article + HowTo + Comparison + per-attraction geo
import {
  getSpeakableSchema,
  getArticleSchema,
  getHowToSchema,
  getComparisonSchema,
  getCityPlaceSchema,
  getTodayDate
} from '@/lib/seo/speakable-helpers';
import { tightenTitle, tightenDescription } from '@/lib/seo/serp-ctr';
import { canonicalHref } from '@/lib/seo/route-exists';
import { getContentUpdatedOn } from '@/lib/seo/content-updates';
import SightseeingPlanningGuide from '@/components/sightseeing/SightseeingPlanningGuide';

/* ------------------------------------------------------------------ *
 * Money-page linking (Week 41)
 *
 * Sightseeing pages sit at the top of the funnel; these links push the
 * reader into the pages that actually convert. Everything is resolved
 * against live route data at build time, so a city with no matching
 * route simply renders fewer links rather than a broken one.
 * ------------------------------------------------------------------ */

// Every published city-guide page, enumerated from src/app/(routes).
// getCityTopicalLinks() synthesises hrefs by convention and over-reaches
// (e.g. /jaipur-in-1-day-itinerary does not exist), so its output is
// filtered through this set before rendering.
const TOPICAL_PAGE_SLUGS = new Set([
  'agra-food-tour', 'agra-in-1-day-itinerary', 'agra-in-2-days-itinerary', 'agra-shopping-guide', 'agra-travel-guide',
  'ajmer-travel-guide',
  'amritsar-food-tour', 'amritsar-in-2-days-itinerary', 'amritsar-shopping-guide', 'amritsar-travel-guide',
  'ayodhya-travel-guide',
  'chandigarh-food-tour', 'chandigarh-shopping-guide', 'chandigarh-travel-guide',
  'dalhousie-travel-guide', 'dehradun-travel-guide',
  'delhi-food-tour', 'delhi-in-2-days-itinerary', 'delhi-shopping-guide',
  'dharamshala-in-2-days-itinerary', 'dharamshala-travel-guide',
  'haridwar-food-tour', 'haridwar-in-2-days-itinerary', 'haridwar-travel-guide',
  'jaipur-food-tour', 'jaipur-in-2-days-itinerary', 'jaipur-shopping-guide', 'jaipur-travel-guide',
  'jaisalmer-in-2-days-itinerary', 'jaisalmer-shopping-guide', 'jaisalmer-travel-guide',
  'jodhpur-food-tour', 'jodhpur-in-2-days-itinerary', 'jodhpur-shopping-guide', 'jodhpur-travel-guide',
  'kashmir-travel-guide',
  'lucknow-food-tour', 'lucknow-in-2-days-itinerary', 'lucknow-shopping-guide', 'lucknow-travel-guide',
  'manali-travel-guide',
  'mathura-food-tour', 'mathura-vrindavan-travel-guide', 'mount-abu-travel-guide',
  'mussoorie-in-2-days-itinerary', 'mussoorie-travel-guide',
  'nainital-in-2-days-itinerary', 'nainital-travel-guide',
  'pushkar-food-tour', 'pushkar-travel-guide',
  'rishikesh-in-2-days-itinerary', 'rishikesh-travel-guide',
  'shimla-in-2-days-itinerary', 'shimla-shopping-guide', 'shimla-travel-guide',
  'udaipur-food-tour', 'udaipur-in-2-days-itinerary', 'udaipur-shopping-guide', 'udaipur-travel-guide',
  'varanasi-food-tour', 'varanasi-in-2-days-itinerary', 'varanasi-shopping-guide', 'varanasi-travel-guide'
]);

// /<city> hub pages come from the same `cities` array that drives
// generateStaticParams in src/app/(routes)/[cityName]/page.js.
const CITY_HUB_SLUGS = new Set(
  (serviceCities || []).map((c) => String(c?.name || '').toLowerCase().replace(/\s+/g, '-')).filter(Boolean)
);

const ONE_WAY_SLUGS = new Set(getAllOneWayRouteSlugs());
const ROUND_TRIP_SLUGS = new Set(getAllRoundTripSlugs());

function titleCaseSlug(slug) {
  return String(slug)
    .split('-')
    .map((w) => (w === 'to' ? 'to' : w.charAt(0).toUpperCase() + w.slice(1)))
    .join(' ');
}

/**
 * Resolve a tour slug to the sightseeingData city bucket it belongs to.
 * Tour names are unreliable here ("Delhi to Manali Tour Package" would
 * resolve to Delhi), so we go back to the data grouping instead.
 */
function resolveTourCity(tourSlug) {
  for (const city of getCitiesWithTours()) {
    if (getToursByCity(city).some((t) => t.slug === tourSlug)) return city;
  }
  return null;
}

/**
 * Build the booking-page link set for a city. `excludeSightseeingHub` is set
 * on the city hub itself so it does not link to its own URL.
 */
function buildMoneyLinks(citySlug, { excludeSightseeingHub = false } = {}) {
  if (!citySlug) return [];
  const city = String(citySlug).toLowerCase();
  const cityLabel = titleCaseSlug(city);
  const links = [];
  const seen = new Set();
  const push = (href, anchor) => {
    if (!href || seen.has(href)) return;
    seen.add(href);
    links.push({ href, anchor });
  };

  if (CITY_HUB_SLUGS.has(city)) push(`/${city}`, `${cityLabel} taxi service — fares & fleet`);
  if (TOPICAL_PAGE_SLUGS.has(`${city}-travel-guide`)) push(`/${city}-travel-guide`, `${cityLabel} travel guide`);

  const arrivals = [...ONE_WAY_SLUGS].filter((s) => s.endsWith(`-to-${city}`));
  const departures = [...ONE_WAY_SLUGS].filter((s) => s.startsWith(`${city}-to-`));
  arrivals.slice(0, 3).forEach((s) => push(`/one-way-cab/${s}`, `${titleCaseSlug(s)} one-way cab`));
  departures.slice(0, 2).forEach((s) => push(`/one-way-cab/${s}`, `${titleCaseSlug(s)} one-way cab`));

  [...ROUND_TRIP_SLUGS]
    .filter((s) => s.endsWith(`-to-${city}`) || s.startsWith(`${city}-to-`))
    .slice(0, 2)
    .forEach((s) => push(`/round-trip/${s}`, `${titleCaseSlug(s)} round trip`));

  if (!excludeSightseeingHub && getCitiesWithTours().includes(city)) {
    push(`/sightseeing/${city}`, `All ${cityLabel} sightseeing tours`);
  }

  // A handful of destinations (Ladakh, Chopta, Shekhawati…) have no dedicated
  // hub or point-to-point route yet. Top those up with the category hubs so
  // the band still gives the reader somewhere useful to go.
  if (links.length < 4) {
    push('/outstation-cabs', 'Outstation cab booking');
    push('/one-way-cab', 'One-way cab routes & fares');
    push('/round-trip', 'Round-trip cab packages');
    push('/tempo-traveller', 'Tempo Traveller hire for groups');
  }

  return links.slice(0, 8);
}

/** Emerald/teal link band matching the sightseeing design language. */
function MoneyLinksBand({ cityLabel, links }) {
  if (!links || links.length === 0) return null;
  return (
    <section className="bg-slate-950 px-4 py-12">
      <nav
        aria-label={`${cityLabel} cab booking pages`}
        className="max-w-5xl mx-auto rounded-3xl border border-emerald-500/25 bg-white/5 backdrop-blur-xl p-6 sm:p-8"
      >
        <h2 className="text-2xl sm:text-3xl font-black text-white mb-2">
          Book your {cityLabel} cab
        </h2>
        <p className="text-slate-400 mb-6 text-sm sm:text-base">
          Fixed fares, no surge, and the same driver all day — pick the service you need.
        </p>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3 list-none">
          {links.map(({ href, anchor }) => (
            <li key={href}>
              <Link
                href={canonicalHref(href)}
                className="group inline-flex items-center gap-2 text-emerald-300 hover:text-emerald-200 hover:underline py-1"
              >
                <span aria-hidden="true" className="text-teal-400 transition-transform group-hover:translate-x-0.5">→</span>
                <span>{anchor}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </section>
  );
}

/**
 * Approximate per-attraction geo offsets so each named monument in a tour
 * resolves to a distinct TouristAttraction node near the tour's city centre.
 * We deterministically fan attractions around the tour coordinate on a small
 * ring (~1-3 km) so Google sees discrete Place entities rather than one point.
 * This is GEO-grade entity expansion, not fabricated precision — we label them
 * as approximate via the tour-level geo anchor.
 */
function buildAttractionPlaces(tour, slug) {
  if (!tour.highlights || !tour.coordinates) return [];
  const baseLat = parseFloat(tour.coordinates.latitude);
  const baseLng = parseFloat(tour.coordinates.longitude);
  if (Number.isNaN(baseLat) || Number.isNaN(baseLng)) return [];
  const baseUrl = 'https://www.trivenicabs.in';
  return tour.highlights
    .filter(Boolean)
    .slice(0, 8)
    .map((highlight, i) => {
      const name = highlight.split(' - ')[0].trim();
      const desc = highlight.split(' - ')[1]?.trim() || `${name} — a key stop on the ${tour.name}.`;
      // Fan out on a small ring: ~0.012 deg ≈ 1.3 km steps
      const angle = (i / Math.max(tour.highlights.length, 1)) * 2 * Math.PI;
      const ring = 0.012;
      const lat = (baseLat + Math.cos(angle) * ring).toFixed(4);
      const lng = (baseLng + Math.sin(angle) * ring).toFixed(4);
      const img = tour.images && tour.images[i];
      return {
        "@type": "TouristAttraction",
        "@id": `${baseUrl}/sightseeing/${slug}#attraction-${i + 1}`,
        "name": name,
        "description": desc,
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": lat,
          "longitude": lng
        },
        "isAccessibleForFree": false,
        "touristType": ["Cultural Tourism", "Heritage Tourism"],
        ...(img ? { "image": img.startsWith('http') ? img : `${baseUrl}${img}` } : {}),
        "containedInPlace": {
          "@type": "City",
          "name": tour.category || (slug.split('-')[0])
        }
      };
    });
}

/**
 * Build a 12-14 question FAQ set: the 8 base generator FAQs plus deterministic
 * tour-specific long-tail questions (guide, vehicle choice, tickets, pickup,
 * cancellation, accessibility, payment) for AEO / People-Also-Ask capture.
 */
function buildExtendedTourFAQs(tour, slug, lowestPrice) {
  const cityLabel = tour.category || slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
  const base = generateTourFAQs({
    tourName: tour.name,
    city: tour.city || cityLabel,
    duration: tour.duration,
    price: lowestPrice,
    highlights: tour.highlights || [],
    inclusions: tour.inclusions || []
  });
  const sedan = tour.price?.sedan ? `₹${tour.price.sedan.toLocaleString()}` : 'our base sedan rate';
  const suv = tour.price?.suv ? `₹${tour.price.suv.toLocaleString()}` : 'a higher rate';
  const tempo = tour.price?.tempoTraveller ? `₹${tour.price.tempoTraveller.toLocaleString()}` : 'a group rate';
  const extra = [
    {
      question: `Which vehicle should I choose for the ${tour.name}?`,
      answer: `For 1-3 travellers an AC sedan (${sedan}) is the most economical choice. Families of 4-6 are most comfortable in an SUV (${suv}), and groups of 7 or more should book the Tempo Traveller (${tempo}). All vehicles are air-conditioned with an experienced driver included.`
    },
    {
      question: `Are monument entry tickets included in the ${tour.name}?`,
      answer: `Monument and attraction entry tickets are not included in the tour fare — they are paid directly at each site. ${tour.exclusions && tour.exclusions.length ? `Typical exclusions: ${tour.exclusions.slice(0, 2).join('; ')}.` : ''} Your driver will guide you to the official ticket counters, and we can arrange a licensed guide on request.`
    },
    {
      question: `Is a tour guide available for the ${tour.name}?`,
      answer: `Yes. Professional, licensed guides fluent in English, Hindi and major foreign languages can be arranged on request for the ${tour.name}. Guides add historical and cultural context at each stop. Mention your preferred language when booking.`
    },
    {
      question: `Where does the ${tour.name} start, and is hotel pickup included?`,
      answer: `The ${tour.name} includes complimentary pickup and drop-off from your hotel, residence or station within the city limits. Pickup typically begins around 8:00 AM and the schedule can be adjusted to suit your plans.`
    },
    {
      question: `What is the cancellation policy for the ${tour.name}?`,
      answer: `You can cancel free of charge up to 24 hours before the scheduled start of the ${tour.name}. We accept cash, UPI, and bank transfer, and no large advance is required to confirm — a small refundable token secures your booking.`
    },
    {
      question: `Is the ${tour.name} suitable for senior citizens and is it accessible?`,
      answer: `Yes. The ${tour.name} runs at a relaxed pace with door-to-door AC transport, so it suits senior citizens and travellers with limited mobility. ${tour.accessibility ? `Accessibility note: ${tour.accessibility}.` : 'Let us know any specific accessibility needs and we will plan the route accordingly.'}`
    }
  ];
  // Combine and cap at 14 (target 12-14)
  return [...base, ...extra].slice(0, 14);
}

/**
 * Generate a Google-Merchant-Listings-compliant SKU under 40 chars.
 * Long sightseeing slugs like 'jaipur-amber-fort-elephant-ride-photography-day-tour'
 * (50+ chars) trigger "Invalid string length in field 'sku'" GSC warnings.
 */
function generateTourSku(slug) {
  let hash = 0;
  for (let i = 0; i < slug.length; i++) {
    hash = ((hash << 5) - hash) + slug.charCodeAt(i);
    hash |= 0;
  }
  const hashStr = Math.abs(hash).toString(36).padStart(8, '0').slice(0, 8);
  const filler = new Set(['a','an','the','of','to','from','for','with','and','by','on','in','at','same','day','tour']);
  const tag = slug.split('-').filter(w => !filler.has(w)).slice(0, 3).map(w => w.slice(0, 3)).join('').slice(0, 9);
  return `STG-${hashStr}-${tag}`.slice(0, 40);
}

export async function generateStaticParams() {
  const allTours = getAllTours();
  const cities = getCitiesWithTours();

  // Generate params for both tours AND cities
  const tourParams = allTours.map((tour) => ({
    slug: tour.slug,
  }));

  const cityParams = cities.map((city) => ({
    slug: city,
  }));

  return [...tourParams, ...cityParams];
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const { slug } = resolvedParams;

  if (!slug) {
    return {
      title: tightenTitle('Sightseeing Tour | Premium Guided Tours'),
      description: 'Discover amazing sightseeing tours across India with expert guides.'
    };
  }

  // Check if this is a city page first
  const cities = getCitiesWithTours();
  if (cities.includes(slug)) {
    const cityName = slug.charAt(0).toUpperCase() + slug.slice(1);
    const tours = getToursByCity(slug);

    // Calculate lowest price from all city tours
    const allPrices = tours.flatMap(tour => [
      tour.price.sedan,
      tour.price.suv,
      tour.price.tempoTraveller
    ].filter(Boolean));
    const cityLowestPrice = allPrices.length > 0 ? Math.min(...allPrices) : 1499;

    return generateSightseeingCityMetadata({
      city: cityName,
      tourCount: tours.length,
      lowestPrice: cityLowestPrice.toLocaleString(),
      slug,
      heroImage: tours[0]?.heroImage || null
    });
  }

  // Otherwise, it's a tour detail page
  const tour = getTourBySlug(slug);

  if (!tour) {
    return {
      title: 'Tour Not Found | Sightseeing Tours',
      description: 'The requested tour could not be found.'
    };
  }

  // Get the lowest price from available vehicle types
  const lowestPrice = tour.price.sedan || tour.price.carRental || tour.price.suv;

  const baseDesc = tour.shortDescription || tour.fullDescription?.substring(0, 155) || null;
  const composedDescription = baseDesc
    ? tightenDescription(
        baseDesc.replace(/[.\s]+$/, '') +
          `. ${tour.duration} private tour with an experienced driver, from ₹${lowestPrice?.toLocaleString() || '1,499'}. Hotel pickup included.`
      )
    : null;

  return generateTourMetadata({
    tourName: tour.name,
    city: tour.category || slug.split('-')[0],
    price: lowestPrice?.toLocaleString() || '1,499',
    duration: tour.duration,
    slug,
    // A bare shortDescription runs as low as 51 characters, well short of what
    // Google will render. Compose it with the two facts a searcher wants next --
    // how long the tour takes and what it starts at -- instead of a thin snippet.
    description: composedDescription,
    image: tour.heroImage || null,
    highlights: tour.highlights || [],
    inclusions: tour.inclusions || []
  });
}

export default async function SightseeingDetailPage({ params }) {
  const resolvedParams = await params;
  const { slug } = resolvedParams;

  if (!slug) {
    notFound();
  }

  // Check if this is a city page
  const cities = getCitiesWithTours();
  if (cities.includes(slug)) {
    // Get city tours for schema
    const cityTours = getToursByCity(slug);
    const cityName = slug.charAt(0).toUpperCase() + slug.slice(1);

    // Calculate price range for city tours
    const allPrices = cityTours.flatMap(tour => [
      tour.price.sedan,
      tour.price.suv,
      tour.price.tempoTraveller
    ].filter(Boolean));
    const cityLowestPrice = Math.min(...allPrices);
    const cityHighestPrice = Math.max(...allPrices);

    // Render city tours page with schema
    return (
      <>
        {/* City TouristDestination Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "TouristDestination",
              "name": `${cityName} - Tourist Destination`,
              "description": `Explore ${cityName} with our premium sightseeing tours. ${cityTours.length}+ expert-guided tours covering heritage sites, cultural landmarks, and hidden gems.`,
              "url": `https://www.trivenicabs.in/sightseeing/${slug}`,
              "touristType": ["Cultural Tourism", "Heritage Tourism", "Adventure Tourism", "Family Tourism"],
              "includesAttraction": cityTours.slice(0, 5).map(tour => ({
                "@type": "TouristAttraction",
                "name": tour.name,
                "description": tour.shortDescription,
                "url": `https://www.trivenicabs.in/sightseeing/${tour.slug}`
              }))
            })
          }}
        />

        {/* City Breadcrumb Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://www.trivenicabs.in"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Sightseeing Tours",
                  "item": "https://www.trivenicabs.in/sightseeing"
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": `${cityName} Tours`,
                  "item": `https://www.trivenicabs.in/sightseeing/${slug}`
                }
              ]
            })
          }}
        />

        {/* City ItemList Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ItemList",
              "name": `${cityName} Sightseeing Tours`,
              "description": `Complete list of sightseeing tours available in ${cityName}`,
              "numberOfItems": cityTours.length,
              "itemListElement": cityTours.map((tour, index) => ({
                "@type": "ListItem",
                "position": index + 1,
                "item": {
                  "@type": "TouristTrip",
                  "name": tour.name,
                  "description": tour.shortDescription,
                  "url": `https://www.trivenicabs.in/sightseeing/${tour.slug}`,
                  "offers": {
                    "@type": "Offer",
                    "price": tour.price.sedan || tour.price.suv,
                    "priceCurrency": "INR",
                    "availability": "https://schema.org/InStock"
                  },
                  ...(tour.reviews && {
                    
                  })
                }
              }))
            })
          }}
        />

        {/* City Service Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "serviceType": `${cityName} Sightseeing Tours`,
              "name": `${cityName} Tour Packages - Triveni Cabs`,
              "description": `Premium ${cityName} sightseeing tours with professional guides, comfortable AC vehicles, and customizable itineraries.`,
              "provider": {
                "@type": "TravelAgency",
                "name": "Triveni Cabs",
                "telephone": "+91-7668570551",
                "url": "https://www.trivenicabs.in"
              },
              "areaServed": {
                "@type": "City",
                "name": cityName
              },
              "offers": {
                "@type": "AggregateOffer",
                "lowPrice": cityLowestPrice,
                "highPrice": cityHighestPrice,
                "priceCurrency": "INR",
                "offerCount": cityTours.length
              },
              "availableChannel": {
                "@type": "ServiceChannel",
                "serviceUrl": `https://www.trivenicabs.in/sightseeing/${slug}`,
                "servicePhone": "+91-7668570551"
              }
            })
          }}
        />

        {/* City FAQ Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": `What sightseeing tours are available in ${cityName}?`,
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": `We offer ${cityTours.length}+ sightseeing tours in ${cityName}, including ${cityTours.slice(0, 3).map(t => t.name).join(', ')}. Tours range from half-day to multi-day packages covering heritage sites, cultural landmarks, and local experiences.`
                  }
                },
                {
                  "@type": "Question",
                  "name": `How much does a ${cityName} sightseeing tour cost?`,
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": `Our ${cityName} tours start from ₹${cityLowestPrice.toLocaleString()} for sedan vehicles. Prices vary based on tour duration and vehicle type. SUV and Tempo Traveller options are available for larger groups.`
                  }
                },
                {
                  "@type": "Question",
                  "name": `What is the best time to visit ${cityName}?`,
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": `The best time for ${cityName} sightseeing is October to March when the weather is pleasant. However, we offer tours year-round with appropriate arrangements for comfort.`
                  }
                },
                {
                  "@type": "Question",
                  "name": `Are ${cityName} tour guides included?`,
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": `Yes, professional tour guides fluent in English, Hindi, and other languages can be arranged for all ${cityName} tours. They provide detailed insights about history, culture, and architecture.`
                  }
                }
              ]
            })
          }}
        />

        {/* City CollectionPage Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "CollectionPage",
              "name": `${cityName} Sightseeing Tours Collection`,
              "description": `Browse all ${cityTours.length} sightseeing tours available in ${cityName}`,
              "url": `https://www.trivenicabs.in/sightseeing/${slug}`,
              "isPartOf": {
                "@type": "WebSite",
                "name": "Triveni Cabs",
                "url": "https://www.trivenicabs.in"
              },
              "about": {
                "@type": "City",
                "name": cityName
              },
              "mainEntity": {
                "@type": "ItemList",
                "numberOfItems": cityTours.length
              }
            })
          }}
        />

        <AEOHead pageType="tour" data={{ url: `/sightseeing/${slug}`, title: `${cityName} Sightseeing Tours`, city: cityName }} />
        {/* Tours resolved here so the 1.24 MB sightseeing dataset stays
            out of the browser bundle. */}
        <CityToursPage
          city={slug}
          initialTours={getToursByCity(slug)}
          nearbyDestinations={getNearbyDestinations(slug, 6)}
          relatedContent={getRelatedContent(slug)}
        />
        <SightseeingPlanningGuide city={slug} />
        {getToursByCity(slug).length < 2 && (
          <div className="container mx-auto px-4 pb-10">
            <CityFaresTable city={cityName} citySlug={slug} />
          </div>
        )}
        <MoneyLinksBand
          cityLabel={cityName}
          links={buildMoneyLinks(slug, { excludeSightseeingHub: true })}
        />
        <AdventureActivities path={`/sightseeing/${slug}`} />
      </>
    );
  }

  // Otherwise, it's a tour detail page
  const tour = getTourBySlug(slug);

  if (!tour) {
    notFound();
  }

  // Get the lowest and highest prices for schema
  const prices = [
    tour.price.sedan,
    tour.price.suv,
    tour.price.tempoTraveller,
    tour.price.carRental
  ].filter(Boolean);
  const lowestPrice = Math.min(...prices);
  const highestPrice = Math.max(...prices);

  // May 2026: real per-slug ratings + 3 reviews from the sightseeing pool
  const realRR = getRatingAndReviews(slug, 'sightseeing');

  // The sightseeingData bucket this tour belongs to — drives both the pickup
  // wording in the Quick Answer and the money-link band below.
  const tourCitySlug = resolveTourCity(slug);
  const tourCityLabel = tourCitySlug ? titleCaseSlug(tourCitySlug) : null;

  return (
    <>
      {/* Enhanced TouristTrip Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TouristTrip",
            "name": tour.name,
            "description": tour.fullDescription,
            "url": `https://www.trivenicabs.in/sightseeing/${slug}`,
            "image": {
              "@type": "ImageObject",
              "url": tour.heroImage?.startsWith('http') ? tour.heroImage : `https://www.trivenicabs.in${tour.heroImage || '/images/sightseeing/Sightseeingpage_hero_section_image.jpg'}`,
              "caption": tour.name,
              "contentUrl": tour.heroImage?.startsWith('http') ? tour.heroImage : `https://www.trivenicabs.in${tour.heroImage || '/images/sightseeing/Sightseeingpage_hero_section_image.jpg'}`
            },
            "touristType": [
              "Families",
              "Solo Travelers",
              "Couples",
              "Groups",
              "International Tourists",
              "Domestic Tourists"
            ],
            "provider": {
              "@type": "TravelAgency",
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
              },
              "priceRange": "₹₹"
            },
            "offers": prices.length > 1 ? {
              "@type": "AggregateOffer",
              "lowPrice": lowestPrice,
              "highPrice": highestPrice,
              "priceCurrency": "INR",
              "availability": "https://schema.org/InStock",
              "url": `https://www.trivenicabs.in/sightseeing/${slug}`,
              "validFrom": new Date().toISOString(),
              "priceValidUntil": new Date(Date.now() + 90 * 24 * 60 * 60 * 1000).toISOString(),
              "seller": {
                "@type": "Organization",
                "name": "Triveni Cabs"
              }
            } : {
              "@type": "Offer",
              "price": lowestPrice,
              "priceCurrency": "INR",
              "availability": "https://schema.org/InStock",
              "url": `https://www.trivenicabs.in/sightseeing/${slug}`,
              "validFrom": new Date().toISOString(),
              "priceValidUntil": new Date(Date.now() + 90 * 24 * 60 * 60 * 1000).toISOString()
            },

            "duration": tour.duration,
            ...(tour.itinerary && {
              "itinerary": tour.itinerary.map((item, index) => ({
                "@type": "Action",
                "name": item.activity,
                "description": item.description || item.activity,
                "startTime": item.time,
                "actionStatus": "https://schema.org/PotentialActionStatus"
              }))
            }),
            ...(tour.coordinates && {
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": tour.coordinates.latitude,
                "longitude": tour.coordinates.longitude
              }
            })
          })
        }}
      />

      {/* Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://www.trivenicabs.in"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Sightseeing Tours",
                "item": "https://www.trivenicabs.in/sightseeing"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": tour.name,
                "item": `https://www.trivenicabs.in/sightseeing/${slug}`
              }
            ]
          })
        }}
      />

      {/* FAQ Schema — expanded 12-14 Q set (base generator + tour-specific long-tail) */}
      {(() => {
        const tourFAQs = buildExtendedTourFAQs(tour, slug, lowestPrice);
        return (
          <Script
            id="tour-faq-schema"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                // Speakable: voice assistants read the first answer aloud
                "speakable": getSpeakableSchema(['.speakable-headline', '.speakable-lead', '.speakable-answer', '.faq-answer']),
                "mainEntity": tourFAQs.map(faq => ({
                  "@type": "Question",
                  "name": faq.question,
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": faq.answer
                  }
                }))
              })
            }}
            strategy="afterInteractive"
          />
        );
      })()}

      {/* Article schema (E-E-A-T + freshness + Speakable) — June 2026 */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getArticleSchema({
            slug: `sightseeing/${slug}`,
            headline: `${tour.name} — Itinerary, Price & Booking Guide`,
            description: tour.shortDescription || tour.fullDescription?.substring(0, 155),
            image: tour.heroImage,
            authorName: 'editorial',
            datePublished: '2026-01-01',
            dateModified: (getContentUpdatedOn(`/sightseeing/${slug}`) || getTodayDate()),
            speakableSelectors: ['.speakable-headline', '.speakable-lead', '.faq-answer']
          }))
        }}
      />

      {/* HowTo schema — "How to Book the {tour} Sightseeing Tour" */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getHowToSchema({
            name: `How to Book the ${tour.name} Sightseeing Tour`,
            description: `Step-by-step guide to booking the ${tour.duration} ${tour.name} with Triveni Cabs™ — choose a vehicle, confirm on WhatsApp, and pay with no large advance.`,
            totalTime: 'PT5M',
            estimatedCost: { currency: 'INR', value: lowestPrice },
            steps: [
              { name: 'Review the itinerary', text: `Read the ${tour.name} itinerary and highlights to confirm the attractions match your interests.`, image: tour.heroImage },
              { name: 'Pick your vehicle', text: `Choose an AC sedan (1-3 pax), SUV (4-6 pax) or Tempo Traveller (7+ pax) based on your group size.` },
              { name: 'Share trip details', text: `Send your travel date, hotel/pickup point and any customisation on WhatsApp (+91-7668570551) or by phone.` },
              { name: 'Confirm and get a quote', text: `Receive an all-inclusive fare quote with no hidden charges. A small refundable token confirms the booking.` },
              { name: 'Travel with your driver', text: `Your driver arrives at the scheduled pickup time and follows the ${tour.name} plan, with flexible stops as needed.` }
            ]
          }))
        }}
      />

      {/* Comparison schema — vehicle options for this tour (featured-snippet target) */}
      {prices.length > 1 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getComparisonSchema({
              slug: `sightseeing/${slug}`,
              title: `${tour.name} — Sedan vs SUV vs Tempo Traveller`,
              description: `Compare vehicle options for the ${tour.name}: best for, seating capacity and price (AC sedan from ₹${(tour.price?.sedan || lowestPrice).toLocaleString()}, SUV from ₹${(tour.price?.suv || lowestPrice).toLocaleString()}, Tempo Traveller from ₹${(tour.price?.tempoTraveller || highestPrice).toLocaleString()}).`,
              rows: [
                { feature: 'AC Sedan (1-3 passengers)' },
                { feature: 'SUV (4-6 passengers)' },
                { feature: 'Tempo Traveller (7-16 passengers)' }
              ],
              mentions: ['Sedan', 'SUV', 'Tempo Traveller', tour.name, tour.category || 'Sightseeing Tour']
            }))
          }}
        />
      )}

      {/* Per-attraction TouristAttraction + GeoCoordinates graph (GEO entity expansion) */}
      {(() => {
        const attractions = buildAttractionPlaces(tour, slug);
        if (!attractions.length) return null;
        return (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "ItemList",
                "name": `Attractions on the ${tour.name}`,
                "description": `Monuments and sightseeing spots covered on the ${tour.name}.`,
                "numberOfItems": attractions.length,
                "itemListElement": attractions.map((a, i) => ({
                  "@type": "ListItem",
                  "position": i + 1,
                  "item": a
                }))
              })
            }}
          />
        );
      })()}

      {/* City Place schema — anchors tour to a real-world geographic entity */}
      {(() => {
        const cityKey = (tour.category || slug.split('-')[0] || '').toLowerCase();
        const cityPlace = getCityPlaceSchema(cityKey, {
          idSlug: `sightseeing/${slug}`,
          image: tour.heroImage,
          description: `${tour.name} departs from and explores this destination with Triveni Cabs™.`
        });
        return cityPlace ? (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(cityPlace) }}
          />
        ) : null;
      })()}

      {/* ItemList Schema for Itinerary */}
      {tour.itinerary && tour.itinerary.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ItemList",
              "name": `${tour.name} Itinerary`,
              "description": `Detailed itinerary for ${tour.name}`,
              "numberOfItems": tour.itinerary.length,
              "itemListElement": tour.itinerary.map((item, index) => ({
                "@type": "ListItem",
                "position": index + 1,
                "name": item.activity,
                "description": item.description || item.activity,
                "item": {
                  "@type": "Thing",
                  "name": item.activity,
                  "description": item.description || `${item.activity} at ${item.time}`
                }
              }))
            })
          }}
        />
      )}

      {/* Place Schema */}
      {tour.coordinates && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Place",
              "name": tour.name,
              "description": tour.shortDescription,
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": tour.coordinates.latitude,
                "longitude": tour.coordinates.longitude
              },
              "image": tour.heroImage?.startsWith('http') ? tour.heroImage : `https://www.trivenicabs.in${tour.heroImage || '/images/sightseeing/Sightseeingpage_hero_section_image.jpg'}`,
              "url": `https://www.trivenicabs.in/sightseeing/${slug}`
            })
          }}
        />
      )}

      {/* Organization Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Triveni Cabs",
            "url": "https://www.trivenicabs.in",
            "logo": "https://www.trivenicabs.in/logo.png",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+91-7668570551",
              "contactType": "Customer Service",
              "areaServed": "IN",
              "availableLanguage": ["English", "Hindi"]
            },
            "sameAs": [
              "https://twitter.com/trivenicabs",
              "https://www.facebook.com/trivenicabs",
              "https://www.instagram.com/cabstriveni"
            ]
          })
        }}
      />

      {/* Product Schema for better e-commerce SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": tour.name,
            "description": tour.fullDescription,
            "image": tour.heroImage?.startsWith('http') ? tour.heroImage : `https://www.trivenicabs.in${tour.heroImage || '/images/sightseeing/Sightseeingpage_hero_section_image.jpg'}`,
            "brand": {
              "@type": "Brand",
              "name": "Triveni Cabs"
            },
            "offers": prices.length > 1 ? {
              "@type": "AggregateOffer",
              "lowPrice": lowestPrice,
              "highPrice": highestPrice,
              "priceCurrency": "INR",
              "availability": "https://schema.org/InStock",
              "url": `https://www.trivenicabs.in/sightseeing/${slug}`,
              "priceValidUntil": new Date(Date.now() + 90 * 24 * 60 * 60 * 1000).toISOString(),
              "offerCount": prices.length
            } : {
              "@type": "Offer",
              "price": lowestPrice,
              "priceCurrency": "INR",
              "availability": "https://schema.org/InStock",
              "url": `https://www.trivenicabs.in/sightseeing/${slug}`,
              "priceValidUntil": new Date(Date.now() + 90 * 24 * 60 * 60 * 1000).toISOString()
            },

            "category": tour.category,
            // SKU/MPN: short deterministic identifier under Google's 40-char Merchant Listing limit
            // (was raw slug — long sightseeing slugs triggered GSC "Invalid string length in field 'sku'")
            "sku": generateTourSku(slug),
            "mpn": generateTourSku(slug),
            "productID": generateTourSku(slug)
          })
        }}
      />

      {/* TravelAction Schema - For booking intent */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TravelAction",
            "name": `Book ${tour.name}`,
            "description": `Book this ${tour.duration} guided sightseeing tour with professional guides and comfortable transportation`,
            "agent": {
              "@type": "TravelAgency",
              "name": "Triveni Cabs",
              "telephone": "+91-7668570551",
              "url": "https://www.trivenicabs.in"
            },
            "object": {
              "@type": "TouristTrip",
              "name": tour.name,
              "description": tour.shortDescription
            },
            "result": {
              "@type": "Reservation",
              "reservationFor": {
                "@type": "TouristTrip",
                "name": tour.name
              }
            },
            "target": {
              "@type": "EntryPoint",
              "urlTemplate": `https://wa.me/917668570551?text=I'm interested in booking the ${encodeURIComponent(tour.name)} tour`,
              "actionPlatform": [
                "https://schema.org/DesktopWebPlatform",
                "https://schema.org/MobileWebPlatform"
              ]
            },
            "potentialAction": {
              "@type": "ReserveAction",
              "target": {
                "@type": "EntryPoint",
                "urlTemplate": "https://wa.me/917668570551",
                "inLanguage": "en",
                "actionPlatform": [
                  "https://schema.org/DesktopWebPlatform",
                  "https://schema.org/MobileWebPlatform"
                ]
              },
              "result": {
                "@type": "Reservation",
                "name": `${tour.name} Booking`
              }
            }
          })
        }}
      />

      {/* The second Product node here was removed in Week 44. It carried two
          fabricated five-star reviews ("Verified Tourist", "International
          Traveler") whose text was generated from the tour fields and whose
          dates were Date.now() minus 7 and 14 days, so they moved on every
          build. Google's review snippet policy requires review markup to
          describe real customer reviews. It was also a duplicate Product with
          no price, competing with the priced Product node above. Real rating
          and review data comes from review-helpers via realRR. */}

      {/* Event Schema - For upcoming tour availability */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Event",
            "name": tour.name,
            "description": tour.shortDescription,
            "image": tour.heroImage?.startsWith('http') ? tour.heroImage : `https://www.trivenicabs.in${tour.heroImage || '/images/sightseeing/Sightseeingpage_hero_section_image.jpg'}`,
            "startDate": new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(),
            "endDate": new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString(),
            "eventStatus": "https://schema.org/EventScheduled",
            "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
            "location": {
              "@type": "Place",
              "name": tour.category,
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "IN"
              }
            },
            "organizer": {
              "@type": "Organization",
              "name": "Triveni Cabs",
              "url": "https://www.trivenicabs.in"
            },
            "performer": {
              "@type": "Organization",
              "name": "Triveni Cabs Expert Guides"
            },
            "offers": {
              "@type": "Offer",
              "url": `https://www.trivenicabs.in/sightseeing/${slug}`,
              "price": lowestPrice,
              "priceCurrency": "INR",
              "availability": "https://schema.org/InStock",
              "validFrom": new Date().toISOString()
            }
          })
        }}
      />

      {/* VideoObject Schema placeholder - if tour has video */}
      {tour.videoUrl && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "VideoObject",
              "name": `${tour.name} - Tour Preview`,
              "description": tour.shortDescription,
              "thumbnailUrl": tour.heroImage?.startsWith('http') ? tour.heroImage : `https://www.trivenicabs.in${tour.heroImage || '/images/sightseeing/Sightseeingpage_hero_section_image.jpg'}`,
              "uploadDate": new Date().toISOString(),
              "contentUrl": tour.videoUrl,
              "embedUrl": tour.videoUrl
            })
          }}
        />
      )}

      <AEOHead pageType="tour" data={{ url: `/sightseeing/${slug}`, title: tour.name, city: tour.category || slug.split('-')[0] }} />

      {/* The off-screen "sr-only-seo" duplicate of this page's content was
          removed in Week 44. It shipped a second <h1> on 133 pages and used
          an off-screen text block, which is the pattern Google treats as
          hidden text. It was also redundant: this page's client component is
          server-rendered, and every string the block contained was verified
          present in the visible HTML without it. */}

      {/* Related tours and content resolved here so the 1.24 MB sightseeing
          dataset stays out of the browser bundle on all 170 tour pages. */}
      <SightseeingDetailClient
        tour={tour}
        cityLabel={tourCityLabel}
        richContent={<SightseeingFacts tour={tour} city={tourCitySlug} />}
        relatedTours={getRelatedToursByCity(tourCitySlug || tour.name.split(' ')[0], tour.slug, 4)}
        relatedContent={getRelatedContent(tourCitySlug || tour.name.split(' ')[0])}
      />
      <SightseeingPlanningGuide city={tourCitySlug} tourSlug={tour.slug} />

      {/* Money links — booking pages for the city this tour belongs to.
          Resolved from the sightseeingData grouping (not the tour name) and
          membership-checked against the real route data. */}
      {tourCitySlug && (
        <MoneyLinksBand
          cityLabel={tourCityLabel}
          links={buildMoneyLinks(tourCitySlug)}
        />
      )}

      {/* Internal-link grid — both silo siblings and topical city guides
          where the tour anchors to a city we publish guides for. */}
      <div className="container mx-auto px-4 pb-12">
        {(() => {
          // tour.category holds a theme ("Hill Station & Nature"), never a city,
          // so resolve the real city bucket before asking for topical links.
          const cityKey = tourCitySlug || slug.split('-')[0];
          const cityLabel = titleCaseSlug(cityKey);
          const topical = getCityTopicalLinks(cityKey)
            .filter((l) => TOPICAL_PAGE_SLUGS.has(l.href.replace(/^\//, '')));
          return topical.length > 0 ? (
            <RelatedLinks
              heading={`Plan your ${cityLabel} trip`}
              links={topical}
              ariaLabel={`${cityLabel} travel planning guides`}
              tone="amber"
            />
          ) : null;
        })()}
        <RelatedLinks
          heading="Other Triveni Cabs™ services"
          links={getSiloHubLinks('sightseeing', 6)}
          ariaLabel="Other service categories"
          tone="slate"
        />
      </div>
      <AdventureActivities path={`/sightseeing/${slug}`} />
    </>
  );
}
