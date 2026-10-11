import { busStands, busStandSlugs, getBusStandBySlug, getStandFaqs } from '@/utilis/busStandData';
import BusStandClient from '@/components/busstand/BusStandClient';
import { notFound } from 'next/navigation';
import { COMPANY_INFO, AGGREGATE_RATING, BASE_URL } from '@/lib/seo/constants';
import { getRatingAndReviews } from '@/lib/seo/review-helpers';
import { getSpeakableSchema, getArticleSchema, getCityPlaceSchema, getTodayDate } from '@/lib/seo/speakable-helpers';
import DataTable from '@/components/seo/DataTable';
import AEOHead from '@/components/seo/AEOHead';
import { tightenTitle, pickTitle, DISPLAY_BUDGET, DESC_BUDGET } from '@/lib/seo/serp-ctr';
import { getContentUpdatedOn } from '@/lib/seo/content-updates';
export const revalidate = 3600;
export const dynamicParams = false;

/** "Lucknow Alambagh" -> "Lucknow Alambagh Bus Stand"; "ISBT Anand Vihar" and "Haridwar Bus Stand" stay as they are. */
const HAS_STAND_WORD = /\b(ISBT|Bus Stand)\b/i;
function standLabel(stand) {
  return HAS_STAND_WORD.test(stand.name) ? stand.name : `${stand.name} Bus Stand`;
}

/** "Taj Mahal (East Gate)" -> "Taj Mahal" for the title; the description keeps the full name. */
function shortDestName(name) {
  return String(name || '').replace(/\s*\([^)]*\)/g, '').trim();
}

export async function generateStaticParams() {
  return busStandSlugs.map((stand) => ({ stand }));
}

export async function generateMetadata({ params }) {
  const { stand: slug } = await params;
  const stand = getBusStandBySlug(slug);
  if (!stand) return {};

  /*
   * Week 48 C3 (GSC: 25,389 impressions, 0.24% CTR at position 7.5).
   *
   * The old listing was "<Stand> Taxi from ₹130 | Fixed Fare | 24/7". Three
   * things were wrong with it at that position: "from ₹130" was the cheapest
   * figure in the fare table (the 3 km hop to the railway station) with no
   * destination attached, so it answered nothing -- and it contradicted the
   * "Starting Fare" the page itself shows, which is destinations[0]; "Fixed
   * Fare | 24/7" is filler every competitor also claims; and stands such as
   * "Lucknow Alambagh" never said "bus stand", the phrase the searcher types.
   *
   * The new formula answers the question in the SERP: taxi from <this bus
   * stand>, to <the marquee destination>, for <the exact fare the first fare
   * card on the page shows>. Sedan fares only, matching the page footnote.
   */
  const label = standLabel(stand);
  const where = stand.name.toLowerCase().includes(stand.city.toLowerCase()) ? label : `${label}, ${stand.city}`;
  const hero = stand.destinations[0];
  const heroDest = hero ? shortDestName(hero.name) : '';

  const title = tightenTitle(
    hero
      ? pickTitle([
          `Taxi from ${label}: ${heroDest} ${hero.fare}`,
          `Taxi from ${stand.name}: ${heroDest} ${hero.fare}`,
          `${stand.name} Taxi: ${heroDest} ${hero.fare}`,
        ], DISPLAY_BUDGET)
      : `Taxi from ${label}`,
    DISPLAY_BUDGET
  );

  // Every clause is something the page renders: the fare cards (AC sedan, fixed),
  // the "driver meets you at the bus stand exit, 24/7" line and the no-surge,
  // no-hidden-charges promise. Three fares are listed where the budget allows,
  // falling back to two, then one, so no page ever cuts mid-sentence.
  const fareList = (n) => stand.destinations.slice(0, n).map((d) => `${d.name} ${d.fare}`).join(', ');
  const descTail = 'Driver waits at the bus stand exit 24/7, no surge, no hidden charges. Call 7668570551.';
  const description = hero
    ? pickTitle(
        [3, 2, 1].map((n) => `Taxi from ${where}: ${fareList(n)}, fixed AC sedan fares. ${descTail}`),
        DESC_BUDGET
      )
    : `Taxi from ${where}. ${descTail}`;

  return {
    title,
    description,
    keywords: `${stand.name} cab, ${stand.name} taxi, cab from ${stand.name.toLowerCase()}, taxi service ${stand.name.toLowerCase()}, ${stand.city.toLowerCase()} bus stand taxi, ${slug} cab service, ISBT ${stand.city.toLowerCase()} cab`,
    authors: [{ name: 'Triveni Cabs™' }],
    creator: 'Triveni Cabs™',
    publisher: 'Triveni Cabs™',
    metadataBase: new URL('https://www.trivenicabs.in'),
    alternates: { canonical: `/bus-stand-taxi/${slug}` },
    openGraph: {
      title: `${stand.name} Cab & Taxi Service | Triveni Cabs™`,
      description,
      type: 'website',
      locale: 'en_IN',
      url: `https://www.trivenicabs.in/bus-stand-taxi/${slug}`,
      siteName: 'Triveni Cabs™',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${stand.name} Cab Service | Triveni Cabs™`,
      description,
      creator: '@trivenicabs',
      site: '@trivenicabs',
    },
    robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
  };
}

export default async function BusStandPage({ params }) {
  const { stand: slug } = await params;
  const stand = getBusStandBySlug(slug);
  if (!stand) notFound();

  // Rich, deterministic FAQ set (10-12 stand-specific questions)
  const standFaqs = getStandFaqs(stand);

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" },
      { "@type": "ListItem", "position": 2, "name": "Bus Stand Taxi", "item": "https://www.trivenicabs.in/bus-stand-taxi" },
      { "@type": "ListItem", "position": 3, "name": stand.fullName, "item": `https://www.trivenicabs.in/bus-stand-taxi/${slug}` },
    ],
  };

  const taxiServiceSchema = {
    "@context": "https://schema.org",
    "@type": "TaxiService",
    "name": `Triveni Cabs - ${stand.name} Taxi Service`,
    "brand": { "@type": "Brand", "name": "Triveni Cabs" },
    "description": stand.description,
    "provider": {
      "@type": "LocalBusiness",
      "@id": "https://www.trivenicabs.in/#organization",
      "name": "Triveni Cabs",
      "telephone": "+91-7668570551",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "366, Dandupura, near Tajganj",
        "addressLocality": "Agra",
        "postalCode": "282006",
        "addressCountry": "IN",
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "27.1751",
        "longitude": "78.0421"
      },
      "priceRange": "₹₹",
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "00:00",
        "closes": "23:59"
      }
    },
    "areaServed": {
      "@type": "Place",
      "name": `${stand.name}, ${stand.city}`
    },
    "serviceType": "Bus Stand Taxi Service",
    "offers": {
      "@type": "AggregateOffer",
      "lowPrice": stand.destinations[0]?.fare.replace(/[^\d]/g, '') || "100",
      "highPrice": stand.destinations[stand.destinations.length - 1]?.fare.replace(/[^\d,]/g, '').replace(',', '') || "5000",
      "priceCurrency": "INR"
    },
    ...getRatingAndReviews(slug, 'bus')
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "speakable": getSpeakableSchema(['.speakable-headline', '.speakable-lead', '.speakable-faq-first']),
    "mainEntity": standFaqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `Triveni Cabs - ${stand.name}`,
    "description": `Reliable taxi and cab service from ${stand.name}, ${stand.city}. 24/7 availability, fixed fares, AC cabs.`,
    "telephone": "+91-7668570551",
    "url": `https://www.trivenicabs.in/bus-stand-taxi/${slug}`,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": stand.city,
      "addressCountry": "IN"
    },
    "areaServed": stand.city,
    "priceRange": "₹₹",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    }
  };

  // Product schema — price rich snippets
  const standLowestFare = stand.destinations.reduce((min, d) => {
    const num = parseInt(String(d.fare).replace(/[^\d]/g, ''));
    return num && num < min ? num : min;
  }, Infinity);
  const standHighestFare = stand.destinations.reduce((max, d) => {
    const num = parseInt(String(d.fare).replace(/[^\d,]/g, '').replace(',', ''));
    return num && num > max ? num : max;
  }, 0);

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    // Week 53: Google's Merchant listings report treats a missing `image`
    // as a critical error. This is an asset the page already uses.

    "image": `${BASE_URL}/images/car/swift_dzire.jpg`,
    "name": `${stand.name} Cab & Taxi Service`,
    "description": `Book taxi from ${stand.name}, ${stand.city}. AC sedan & SUV, fixed fares, 24/7, ${stand.destinations.length}+ destinations.`,
    "brand": { "@type": "Brand", "name": COMPANY_INFO.name },
    "offers": {
      "@type": "AggregateOffer",
      "lowPrice": standLowestFare < Infinity ? standLowestFare : 100,
      "highPrice": standHighestFare || 5000,
      "priceCurrency": "INR",
      "offerCount": stand.destinations.length,
      "availability": "https://schema.org/InStock",
      "priceValidUntil": new Date(Date.now() + 90 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
      "seller": { "@type": "Organization", "name": COMPANY_INFO.name }
    },
    ...getRatingAndReviews(slug, 'bus')
  };

  // HowTo schema — booking process
  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": `How to Book Taxi from ${stand.name}`,
    "description": `Step-by-step guide to book a cab from ${stand.name}, ${stand.city}.`,
    "totalTime": "PT3M",
    "estimatedCost": { "@type": "MonetaryAmount", "currency": "INR", "value": standLowestFare < Infinity ? standLowestFare : 100 },
    "step": [
      { "@type": "HowToStep", "position": 1, "name": "Call or WhatsApp", "text": `Call ${COMPANY_INFO.phone.display} or WhatsApp at ${COMPANY_INFO.phone.whatsapp} with your bus arrival time at ${stand.name}.` },
      { "@type": "HowToStep", "position": 2, "name": "Choose Vehicle", "text": "Select AC Sedan or SUV based on passengers and luggage needs." },
      { "@type": "HowToStep", "position": 3, "name": "Get Confirmation", "text": "Receive instant booking confirmation with driver name, phone, and vehicle number." },
      { "@type": "HowToStep", "position": 4, "name": "Meet at Exit", "text": `Driver meets you at ${stand.name} exit gate. Fixed fare, no surge, no waiting.` }
    ]
  };

  // Article schema — E-E-A-T + freshness + voice search for the guide content
  const topDestNames = stand.destinations.slice(0, 3).map(d => d.name).join(', ');
  const articleSchema = getArticleSchema({
    slug: `bus-stand-taxi/${slug}`,
    headline: `${stand.name} Taxi Service — Fixed Fares, 24/7 Cab Pickup in ${stand.city}`,
    description: `Complete guide to booking a taxi from ${stand.name}, ${stand.city}: fixed fares to ${topDestNames} & more, prepaid pickup point, night availability, vehicle options and verified drivers.`,
    image: '/images/triveni-cabs-og.jpg',
    datePublished: '2026-01-01',
    dateModified: (getContentUpdatedOn(`/bus-stand-taxi/${slug}`) || getTodayDate()),
    authorName: 'editorial',
    type: 'Article',
    speakableSelectors: ['.speakable-headline', '.speakable-lead', '.speakable-faq-first']
  });

  // Place schema — anchor to a real geographic entity when the city is known
  const citySlug = stand.city.toLowerCase().replace(/\s+/g, '-');
  const cityPlaceSchema = getCityPlaceSchema(citySlug, {
    idSlug: `bus-stand-taxi/${slug}`,
    description: `${stand.name} (${stand.area}) bus terminal in ${stand.city}, India. Triveni Cabs™ provides 24/7 fixed-fare taxi pickup at this bus stand.`
  });

  // Bus-native GEO: represent the actual stand as a BusStation transit entity,
  // grounded to the city's real coordinates and chained into the City place.
  const busStationSchema = {
    "@context": "https://schema.org",
    "@type": "BusStation",
    "@id": `https://www.trivenicabs.in/bus-stand-taxi/${slug}#busstation`,
    "name": stand.fullName || stand.name,
    "description": `${stand.name}${stand.area ? ` (${stand.area})` : ''} — major bus terminal in ${stand.city}. Triveni Cabs offers 24/7 fixed-fare taxi pickup at this stand.`,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": stand.city,
      ...(cityPlaceSchema?.address?.addressRegion ? { "addressRegion": cityPlaceSchema.address.addressRegion } : {}),
      "addressCountry": "IN",
    },
    ...(cityPlaceSchema?.geo ? { "geo": cityPlaceSchema.geo } : {}),
    ...(cityPlaceSchema ? { "containedInPlace": { "@id": cityPlaceSchema["@id"] } } : {}),
    "publicAccess": true,
    "isAccessibleForFree": true,
    "amenityFeature": stand.cabWaitingArea
      ? [{ "@type": "LocationFeatureSpecification", "name": "Prepaid taxi / cab pickup point", "value": true }]
      : undefined,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} strategy="afterInteractive" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(taxiServiceSchema) }} strategy="afterInteractive" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} strategy="afterInteractive" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} strategy="afterInteractive" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} strategy="afterInteractive" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} strategy="afterInteractive" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} strategy="afterInteractive" />
      {cityPlaceSchema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(cityPlaceSchema) }} strategy="afterInteractive" />
      )}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(busStationSchema) }} strategy="afterInteractive" />

      <AEOHead pageType="busStand" data={{ url: `/bus-stand-taxi/${slug}`, title: `${stand.name} Taxi Service`, city: stand.city }} />
      <BusStandClient stand={stand} slug={slug} allStands={busStands} faqs={standFaqs} />
      {/* Week 49: the fixed fares from this stand as a plain table (the same records the fare cards show). */}
      {Array.isArray(stand.destinations) && stand.destinations.length > 1 && (
        <section className="mx-auto max-w-6xl px-4 py-10">
          <DataTable
            title={`What does a taxi from ${stand.name} cost?`}
            caption={`Fixed sedan fares from ${stand.name}, ${stand.city}, by destination`}
            intro="AC sedan (Swift Dzire or Honda Amaze), fixed fare, no hidden charges; tolls and parking extra at actuals."
            columns={[{ key: 'name', label: 'Destination', strong: true }, { key: 'distance', label: 'Distance' }, { key: 'time', label: 'Time' }, { key: 'fare', label: 'Sedan fare', align: 'right' }]}
            rows={stand.destinations}
          />
        </section>
      )}
    </>
  );
}
