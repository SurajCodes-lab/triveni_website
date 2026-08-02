import { notFound } from 'next/navigation';
import { getRoundTripRoute, getAllRoundTripSlugs, getRelatedRoundTripRoutes, cityToGeoSlug } from '@/utilis/roundTripData';
import RoundTripClient from '@/components/round-trip/RoundTripClient';
import { getCorridorLinks } from '@/utilis/corridorLinks';
import AEOHead from '@/components/seo/AEOHead';
import { getOgImageForSlug } from '@/lib/seo/ogImageMap';
import RelatedLinks from '@/components/seo/RelatedLinks';
import { getMoneyPageLinks } from '@/lib/seo/linkingHelper';
import { getRatingAndReviews } from '@/lib/seo/review-helpers';
import { getArticleSchema, getHowToSchema, getSpeakableSchema, getTodayDate, getCityPlaceSchema } from '@/lib/seo/speakable-helpers';

export const revalidate = 3600;
export const dynamicParams = false;

export async function generateStaticParams() {
  return getAllRoundTripSlugs().map((slug) => ({ route: slug }));
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const { route: slug } = resolvedParams;
  const route = getRoundTripRoute(slug);

  if (!route) {
    return { title: 'Round Trip Route Not Found' };
  }

  const title = `${route.origin} to ${route.destination} Round Trip Cab | ₹${route.sedanRaw.toLocaleString('en-IN')} — Driver Stays With You — 4.9★`;
  const description = `Book ${route.origin} to ${route.destination} round trip cab from ₹${route.sedanRaw.toLocaleString('en-IN')}. ${route.distanceKm} km one-way via ${route.highway}. Driver stays with you. ${route.nightHalt ? 'Night halt included.' : 'Same day return.'} 10% round trip discount. AC sedan, SUV, Tempo Traveller. Call 7668570551.`;
  const ogTitle = `${route.origin} ⟷ ${route.destination} Round Trip Cab — ₹${route.sedanRaw.toLocaleString('en-IN')} | Driver Stays With You | Triveni Cabs`;

  const o = route.origin.toLowerCase();
  const d = route.destination.toLowerCase();

  return {
    title,
    description,
    keywords: [
      `${o} to ${d} round trip cab`,
      `${o} to ${d} round trip taxi`,
      `${o} to ${d} round trip fare`,
      `${o} ${d} round trip cab`,
      `${o} to ${d} and back cab`,
      `${o} to ${d} return cab`,
      `${o} to ${d} cab with driver`,
      `${o} to ${d} round trip cost`,
      `${o} to ${d} cab booking round trip`,
      `round trip taxi ${o} to ${d}`,
      `${o} to ${d} cab package`,
      `${o} ${d} cab round trip price`,
      `book cab ${o} to ${d} round trip`,
      `${o} to ${d} outstation cab round trip`,
      `${o} to ${d} tour package by car`,
    ],
    authors: [{ name: 'Triveni Cabs' }],
    creator: 'Triveni Cabs',
    publisher: 'Triveni Cabs',
    metadataBase: new URL('https://www.trivenicabs.in'),
    alternates: { canonical: `/round-trip/${slug}` },
    openGraph: {
      title: ogTitle,
      description,
      type: 'website',
      locale: 'en_IN',
      url: `https://www.trivenicabs.in/round-trip/${slug}`,
      siteName: 'Triveni Cabs',
      images: [{ url: getOgImageForSlug(slug), width: 1200, height: 630, alt: `${route.origin} to ${route.destination} Round Trip Cab` }],
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

export default async function RoundTripPage({ params }) {
  const resolvedParams = await params;
  const { route: slug } = resolvedParams;
  const route = getRoundTripRoute(slug);

  if (!route) {
    notFound();
  }

  const relatedRoutes = getRelatedRoundTripRoutes(slug);

  // GEO: resolve origin + destination to real-world Place/City entities with
  // GeoCoordinates from the shared _CITY_PLACES map. Null-safe.
  const originPlace = getCityPlaceSchema(cityToGeoSlug(route.origin), {
    idSlug: `round-trip/${slug}/origin`,
    description: `${route.origin} — start and return city for the round-trip cab to ${route.destination}.`,
  });
  const destinationPlace = getCityPlaceSchema(cityToGeoSlug(route.destination), {
    idSlug: `round-trip/${slug}/destination`,
    description: `${route.destination} — destination on the round-trip cab from ${route.origin}.`,
    image: getOgImageForSlug(slug),
  });
  const originPlaceId = originPlace ? originPlace['@id'] : null;
  const destinationPlaceId = destinationPlace ? destinationPlace['@id'] : null;
  const geoPlaceNodes = [originPlace, destinationPlace].filter(Boolean);

  // JSON-LD: Service Schema
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: `Round Trip Cab Service ${route.origin} to ${route.destination}`,
    name: `${route.origin} to ${route.destination} Round Trip Cab by Triveni Cabs — ₹${route.sedanRaw.toLocaleString('en-IN')}`,
    brand: { '@type': 'Brand', name: 'Triveni Cabs' },
    description: `Book round trip cab from ${route.origin} to ${route.destination} and back. ${route.distanceKm} km one-way, ${route.duration} via ${route.highway}. Sedan from ₹${route.sedanRaw.toLocaleString('en-IN')}. Driver stays with you.`,
    provider: {
      '@type': 'LocalBusiness',
      '@id': 'https://www.trivenicabs.in/#organization',
      name: 'Triveni Cabs',
      telephone: '+91-7668570551',
      email: 'cabstriveni@gmail.com',
      url: 'https://www.trivenicabs.in',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '366 Dandupura near Tajganj',
        addressLocality: 'Agra',
        addressRegion: 'UP',
        postalCode: '282006',
        addressCountry: 'IN',
      },
    },
    areaServed: [
      { '@type': 'City', name: route.origin },
      { '@type': 'City', name: route.destination },
    ],
    offers: {
      '@type': 'AggregateOffer',
      lowPrice: route.sedanRaw.toString(),
      highPrice: route.tempoRaw.toString(),
      priceCurrency: 'INR',
      offerCount: '3',
    },
    ...getRatingAndReviews(slug, 'outstation'),
  };

  // JSON-LD: Breadcrumb
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.trivenicabs.in' },
      { '@type': 'ListItem', position: 2, name: 'Round Trip Cabs', item: 'https://www.trivenicabs.in/round-trip' },
      { '@type': 'ListItem', position: 3, name: `${route.origin} to ${route.destination} Round Trip`, item: `https://www.trivenicabs.in/round-trip/${slug}` },
    ],
  };

  // JSON-LD: FAQ — Speakable wired to hero headline + direct-answer lead +
  // first FAQ answer so voice assistants can read the round-trip fare aloud.
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    speakable: getSpeakableSchema(['.speakable-headline', '.speakable-lead', '.speakable-faq-first']),
    mainEntity: route.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  };

  // JSON-LD: Product Schema (for price visibility in search)
  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: `${route.origin} to ${route.destination} Round Trip Cab — Triveni Cabs`,
    description: `Round trip cab service from ${route.origin} to ${route.destination} (${route.distanceKm} km one way). Driver stays with you. AC vehicle, verified driver, 10% round trip discount.`,
    brand: { '@type': 'Brand', name: 'Triveni Cabs' },
    offers: {
      '@type': 'AggregateOffer',
      lowPrice: route.sedanRaw.toString(),
      highPrice: route.tempoRaw.toString(),
      priceCurrency: 'INR',
      offerCount: '3',
      availability: 'https://schema.org/InStock',
    },
    ...getRatingAndReviews(slug, 'outstation'),
  };

  const tripDays = route.suggestedItinerary?.length || 1;
  const sameDay = !route.nightHalt && tripDays === 1;

  // JSON-LD: HowTo — booking a round-trip cab on this specific route
  const howToSchema = getHowToSchema({
    name: `How to Book a ${route.origin} to ${route.destination} Round Trip Cab`,
    description: `Step-by-step guide to booking a round-trip cab from ${route.origin} to ${route.destination} and back, with the same driver, ${route.distanceKm} km one-way via ${route.highway}.`,
    totalTime: 'PT5M',
    estimatedCost: { currency: 'INR', value: String(route.sedanRaw) },
    steps: [
      { name: 'Choose your vehicle', text: `Pick a Sedan, SUV or Tempo Traveller for your ${route.origin} to ${route.destination} round trip based on group size and luggage. The ${route.totalRoundTripKm} km round trip is billed with a 250 km/day minimum.` },
      { name: 'Call or WhatsApp for a quote', text: `Contact 7668570551 with your travel dates and group size. Get an instant round-trip quote from ₹${route.sedanRaw.toLocaleString('en-IN')} with the 10% round trip discount applied${route.nightHalt ? ' and the ₹300/night driver halt shown upfront' : ''}.` },
      { name: 'Confirm the itinerary', text: `Lock the ${sameDay ? 'same-day return' : `${tripDays}-day`} itinerary via ${route.highway}. We share the driver and vehicle details before the trip; the itinerary is fully customizable.` },
      { name: 'Travel and return with the same driver', text: `Your dedicated driver picks you up in ${route.origin}, stays through sightseeing${route.nightHalt ? ' and the overnight halt' : ''} at ${route.destination}, and drives you safely back. Pay only for kilometres driven plus tolls and taxes at actual.` },
    ],
  });

  // JSON-LD: Article — editorial entity for AEO/GEO + freshness signal
  const articleSchema = getArticleSchema({
    slug: `round-trip/${slug}`,
    headline: `${route.origin} to ${route.destination} Round Trip Cab (2026) — Fare, Itinerary & Booking Guide`,
    description: `Complete guide to booking a ${route.origin} to ${route.destination} round trip cab: fares from ₹${route.sedanRaw.toLocaleString('en-IN')}, ${route.distanceKm} km one-way via ${route.highway}, ${route.totalRoundTripKm} km round trip, driver stays with you, 10% discount.`,
    image: getOgImageForSlug(slug),
    authorName: 'editorial',
    speakableSelectors: ['.speakable-headline', '.speakable-lead', '.speakable-faq-first'],
  });

  // JSON-LD: TouristTrip — frames the round trip as a discoverable trip entity
  const touristTripSchema = {
    '@context': 'https://schema.org',
    '@type': 'TouristTrip',
    '@id': `https://www.trivenicabs.in/round-trip/${slug}#trip`,
    name: `${route.origin} to ${route.destination} Round Trip by Cab`,
    description: `Round trip road journey from ${route.origin} to ${route.destination} and back (${route.totalRoundTripKm} km round trip) by AC cab with the same driver throughout${sameDay ? ', same-day return' : `, ${tripDays}-day itinerary`}.`,
    url: `https://www.trivenicabs.in/round-trip/${slug}`,
    touristType: ['Families', 'Couples', 'Groups', 'Business travellers'],
    fromLocation: originPlaceId ? { '@id': originPlaceId } : { '@type': 'City', name: route.origin },
    toLocation: destinationPlaceId ? { '@id': destinationPlaceId } : { '@type': 'City', name: route.destination },
    itinerary: {
      '@type': 'ItemList',
      numberOfItems: (route.suggestedItinerary || []).length || 2,
      itemListElement: (route.suggestedItinerary && route.suggestedItinerary.length > 0
        ? route.suggestedItinerary.map((d, i) => ({
            '@type': 'ListItem',
            position: i + 1,
            item: { '@type': 'TouristAttraction', name: d.title, description: d.description },
          }))
        : [
            { '@type': 'ListItem', position: 1, item: { '@type': 'TouristAttraction', name: route.origin, description: `Pickup in ${route.origin}` } },
            { '@type': 'ListItem', position: 2, item: { '@type': 'TouristAttraction', name: route.destination, description: `Sightseeing at ${route.destination}, then return to ${route.origin}` } },
          ]),
    },
    offers: {
      '@type': 'Offer',
      price: route.sedanRaw.toString(),
      priceCurrency: 'INR',
      url: `https://www.trivenicabs.in/round-trip/${slug}`,
      availability: 'https://schema.org/InStock',
    },
    provider: { '@type': 'TravelAgency', '@id': 'https://www.trivenicabs.in/#organization', name: 'Triveni Cabs' },
    dateModified: getTodayDate(),
    ...getRatingAndReviews(slug, 'outstation'),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(touristTripSchema) }} />
      {geoPlaceNodes.map((node, i) => (
        <script key={`geo-${i}`} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(node) }} />
      ))}
      <AEOHead pageType="route" data={{ url: `/round-trip/${slug}`, title: `${route.origin} to ${route.destination} Round Trip Cab`, origin: route.origin, destination: route.destination, city: route.origin }} />
      <RoundTripClient route={route} relatedRoutes={relatedRoutes} corridorLinks={getCorridorLinks(slug, 'round-trip')} />

      {/* Internal-link panel for adjacent commercial pages from the origin
          city. relatedRoutes are already rendered inside the client component
          so we only emit the moneyPageLinks panel here. */}
      <div className="container mx-auto px-4 pb-12">
        <RelatedLinks
          heading={`Popular in ${route.origin}`}
          links={getMoneyPageLinks(route.origin, 5)}
          ariaLabel={`Popular ${route.origin} services`}
          tone="slate"
        />
      </div>
    </>
  );
}
