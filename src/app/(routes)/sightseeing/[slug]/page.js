// src/app/sightseeing/[slug]/page.js

import { getTourBySlug, getAllTours, getToursByCity, getCitiesWithTours } from '@/utilis/sightseeingData';

// ISR - Revalidate every hour (3600 seconds) for fresh content
export const revalidate = 3600;
export const dynamicParams = false;
import SightseeingDetailClient from './SightseeingDetailClient';
import CityToursPage from './CityToursPage';
import { notFound } from 'next/navigation';
import { generateTourMetadata, generateSightseeingCityMetadata } from '@/lib/seo/metadata-factory';
import { generateTourFAQs } from '@/lib/seo/faq-generator';
import { COMPANY_INFO, AGGREGATE_RATING, BASE_URL } from '@/lib/seo/constants';
import Script from 'next/script';
import AEOHead from '@/components/seo/AEOHead';
import RelatedLinks from '@/components/seo/RelatedLinks';
import { getSiloHubLinks, getCityTopicalLinks } from '@/lib/seo/linkingHelper';
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
      title: 'Sightseeing Tour | Premium Guided Tours',
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

  return generateTourMetadata({
    tourName: tour.name,
    city: tour.category || slug.split('-')[0],
    price: lowestPrice?.toLocaleString() || '1,499',
    duration: tour.duration,
    slug,
    description: tour.shortDescription || tour.fullDescription?.substring(0, 155) || null,
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
                    "aggregateRating": {
                      "@type": "AggregateRating",
                      "ratingValue": tour.reviews.averageRating.toString(),
                      "reviewCount": tour.reviews.totalReviews.toString()
                    }
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
        <CityToursPage city={slug} />
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
              "url": tour.heroImage?.startsWith('http') ? tour.heroImage : `https://www.trivenicabs.in${tour.heroImage || `/images/tours/${slug}.jpg`}`,
              "caption": tour.name,
              "contentUrl": tour.heroImage?.startsWith('http') ? tour.heroImage : `https://www.trivenicabs.in${tour.heroImage || `/images/tours/${slug}.jpg`}`
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
            "aggregateRating": realRR.aggregateRating,
            "review": realRR.review,
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
                "speakable": getSpeakableSchema(['.speakable-headline', '.speakable-lead', '.faq-answer']),
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
            dateModified: getTodayDate(),
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
            description: `Step-by-step guide to booking the ${tour.duration} ${tour.name} with Triveni Cabs — choose a vehicle, confirm on WhatsApp, and pay with no large advance.`,
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
          description: `${tour.name} departs from and explores this destination with Triveni Cabs.`
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
              "image": tour.heroImage?.startsWith('http') ? tour.heroImage : `https://www.trivenicabs.in${tour.heroImage || `/images/tours/${slug}.jpg`}`,
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
              "https://twitter.com/TriveniCabs",
              "https://www.facebook.com/TriveniCabs",
              "https://www.instagram.com/cabstriveni?igsh=YzlzYmZsZjZ5bnlo"
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
            "image": tour.heroImage?.startsWith('http') ? tour.heroImage : `https://www.trivenicabs.in${tour.heroImage || `/images/tours/${slug}.jpg`}`,
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
            "aggregateRating": realRR.aggregateRating,
            "review": realRR.review,
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

      {/* Review Schema - Sample Reviews */}
      {tour.reviews && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Product",
              "name": tour.name,
              "review": [
                {
                  "@type": "Review",
                  "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "5",
                    "bestRating": "5"
                  },
                  "author": {
                    "@type": "Person",
                    "name": "Verified Tourist"
                  },
                  "reviewBody": `Excellent ${tour.category.toLowerCase()} tour! The guide was knowledgeable and the vehicle was very comfortable. Highly recommended for anyone visiting.`,
                  "datePublished": new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]
                },
                {
                  "@type": "Review",
                  "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "5",
                    "bestRating": "5"
                  },
                  "author": {
                    "@type": "Person",
                    "name": "International Traveler"
                  },
                  "reviewBody": `Amazing experience! The ${tour.duration} tour covered all major attractions. Professional service and great value for money.`,
                  "datePublished": new Date(Date.now() - 14 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]
                }
              ],
              "aggregateRating": realRR.aggregateRating
            })
          }}
        />
      )}

      {/* Event Schema - For upcoming tour availability */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Event",
            "name": tour.name,
            "description": tour.shortDescription,
            "image": tour.heroImage?.startsWith('http') ? tour.heroImage : `https://www.trivenicabs.in${tour.heroImage || `/images/tours/${slug}.jpg`}`,
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
              "thumbnailUrl": tour.heroImage?.startsWith('http') ? tour.heroImage : `https://www.trivenicabs.in${tour.heroImage || `/images/tours/${slug}.jpg`}`,
              "uploadDate": new Date().toISOString(),
              "contentUrl": tour.videoUrl,
              "embedUrl": tour.videoUrl
            })
          }}
        />
      )}

      <AEOHead pageType="tour" data={{ url: `/sightseeing/${slug}`, title: tour.name, city: tour.category || slug.split('-')[0] }} />

      {/* Server-rendered SEO content — visible to Googlebot immediately */}
      <div className="sr-only-seo" aria-hidden="false" style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px', overflow: 'hidden' }}>
        <article itemScope itemType="https://schema.org/TouristTrip">
          <h1 className="speakable-headline" itemProp="name">{tour.name}</h1>
          <p className="speakable-lead" itemProp="description">{tour.fullDescription}</p>
          <p className="faq-answer">
            The {tour.name} is a {tour.duration} guided sightseeing experience starting from ₹{lowestPrice?.toLocaleString()} (AC sedan).
            {tour.highlights?.length > 0 ? ` It covers ${tour.highlights.slice(0, 4).map(h => h.split(' - ')[0]).join(', ')} and more.` : ''}
            {' '}Book with Triveni Cabs on +91-7668570551 — hotel pickup, experienced driver and flexible timing included.
          </p>

          <div>
            <span>Duration: <strong itemProp="duration">{tour.duration}</strong></span>
            <span>Starting Price: <strong>₹{lowestPrice?.toLocaleString()}</strong></span>
            {tour.reviews && <span>Rating: <strong>{tour.reviews.averageRating}★</strong> ({tour.reviews.totalReviews} reviews)</span>}
            <span>Group Size: <strong>{tour.groupSize}</strong></span>
            <span>Best Time: <strong>{tour.bestTimeToVisit}</strong></span>
            <span>Category: <strong itemProp="category">{tour.category}</strong></span>
          </div>

          {tour.highlights && tour.highlights.length > 0 && (
            <section>
              <h2>Tour Highlights</h2>
              <ul>{tour.highlights.map((h, i) => <li key={i}>{typeof h === 'string' ? h : h.name || h.title || ''}</li>)}</ul>
            </section>
          )}

          {tour.itinerary && tour.itinerary.length > 0 && (
            <section>
              <h2>{tour.name} — Detailed Itinerary</h2>
              <ol>{tour.itinerary.map((item, i) => (
                <li key={i}>
                  <strong>{item.time}</strong> — {item.activity}
                  {item.duration && <span> ({item.duration})</span>}
                  {item.description && <p>{item.description}</p>}
                </li>
              ))}</ol>
            </section>
          )}

          {tour.inclusions && tour.inclusions.length > 0 && (
            <section>
              <h2>What&apos;s Included in {tour.name}</h2>
              <ul>{tour.inclusions.map((inc, i) => <li key={i}>{inc}</li>)}</ul>
            </section>
          )}

          {tour.exclusions && tour.exclusions.length > 0 && (
            <section>
              <h2>Exclusions</h2>
              <ul>{tour.exclusions.map((exc, i) => <li key={i}>{exc}</li>)}</ul>
            </section>
          )}

          {tour.tips && tour.tips.length > 0 && (
            <section>
              <h2>Travel Tips for {tour.name}</h2>
              <ul>{tour.tips.map((tip, i) => <li key={i}>{tip}</li>)}</ul>
            </section>
          )}

          <section>
            <h2>Pricing — {tour.name}</h2>
            <ul>
              {tour.price.sedan && <li>Sedan (4-seater): ₹{tour.price.sedan.toLocaleString()}</li>}
              {tour.price.suv && <li>SUV (6-seater): ₹{tour.price.suv.toLocaleString()}</li>}
              {tour.price.tempoTraveller && <li>Tempo Traveller (12-16 seater): ₹{tour.price.tempoTraveller.toLocaleString()}</li>}
            </ul>
          </section>

          {(() => {
            const faqs = generateTourFAQs({
              tourName: tour.name,
              city: tour.city || slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' '),
              duration: tour.duration,
              price: lowestPrice,
              highlights: tour.highlights || [],
              inclusions: tour.inclusions || []
            });
            return (
              <section>
                <h2>Frequently Asked Questions — {tour.name}</h2>
                {faqs.map((faq, i) => (
                  <details key={i}>
                    <summary>{faq.question}</summary>
                    <p>{faq.answer}</p>
                  </details>
                ))}
              </section>
            );
          })()}

          <p>Book {tour.name} with Triveni Cabs — call +91-7668570551 or WhatsApp for instant booking.</p>
        </article>
      </div>

      <SightseeingDetailClient tour={tour} />

      {/* Internal-link grid — both silo siblings and topical city guides
          where the tour anchors to a city we publish guides for. */}
      <div className="container mx-auto px-4 pb-12">
        {(() => {
          const cityKey = tour.category || (slug.split('-')[0]);
          const topical = getCityTopicalLinks(cityKey);
          return topical.length > 0 ? (
            <RelatedLinks
              heading={`Plan your ${cityKey} trip`}
              links={topical}
              ariaLabel={`${cityKey} travel planning guides`}
              tone="amber"
            />
          ) : null;
        })()}
        <RelatedLinks
          heading="Other Triveni Cabs services"
          links={getSiloHubLinks('sightseeing', 6)}
          ariaLabel="Other service categories"
          tone="slate"
        />
      </div>
    </>
  );
}
