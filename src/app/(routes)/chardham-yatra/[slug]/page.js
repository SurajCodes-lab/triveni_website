import Link from 'next/link';
import { getRouteBySlug, getAllSlugs } from '@/utilis/chardhamYatraData';
import ChardhamVehicleHubClient from './ChardhamVehicleHubClient';
import ChardhamRouteClient from './ChardhamRouteClient';
import ChardhamDhamClient from './ChardhamDhamClient';
import ChardhamPackageClient from './ChardhamPackageClient';
import AEOHead from '@/components/seo/AEOHead';
import { getRatingAndReviews } from '@/lib/seo/review-helpers';
import { getSpeakableSchema, getHowToSchema, getTodayDate } from '@/lib/seo/speakable-helpers';
import { registrationSteps } from '@/utilis/chardhamYatraData';

// Geo coordinates for the four Dhams (for TouristAttraction/Place schema on dham pages)
const DHAM_GEO = {
  kedarnath: { lat: '30.7346', lng: '79.0669', altitude: 3583, region: 'Rudraprayag, Uttarakhand', deity: 'Lord Shiva (Jyotirlinga)' },
  badrinath: { lat: '30.7433', lng: '79.4938', altitude: 3300, region: 'Chamoli, Uttarakhand', deity: 'Lord Vishnu (Badrinarayan)' },
  gangotri: { lat: '30.9947', lng: '78.9398', altitude: 3100, region: 'Uttarkashi, Uttarakhand', deity: 'Goddess Ganga' },
  yamunotri: { lat: '31.0136', lng: '78.4561', altitude: 3293, region: 'Uttarkashi, Uttarakhand', deity: 'Goddess Yamuna' },
};

export const revalidate = 3600;
export const dynamicParams = false;

// ---------------------------------------------------------------------------
// Static Params — Pre-build all 35 pages
// ---------------------------------------------------------------------------
export async function generateStaticParams() {
  const slugs = getAllSlugs();
  return slugs.map(slug => ({ slug }));
}

// ---------------------------------------------------------------------------
// SEO Metadata — Rich titles, descriptions, keywords, OpenGraph, Twitter
// ---------------------------------------------------------------------------
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const route = getRouteBySlug(slug);
  if (!route) {
    return { title: 'Char Dham Yatra by Car | Triveni Cabs™', description: 'Book car, SUV, bus for Char Dham Yatra 2026. Best prices, experienced drivers. Call 7668570551.' };
  }

  const baseUrl = 'https://www.trivenicabs.in';
  const canonicalUrl = `${baseUrl}/chardham-yatra/${slug}`;

  // Expand keywords: page-specific base + circuit/intent/semantic/LSI terms (18-25 total)
  const dest = (route.destination || '').toLowerCase();
  const orig = (route.origin || '').toLowerCase();
  const semanticTerms = [
    'char dham yatra 2026', 'chardham yatra package', 'chardham yatra cost',
    'how much chardham yatra cost', 'chardham yatra by car', 'chardham by innova',
    'chardham by sedan', 'chardham by bus', 'do dham yatra', 'ek dham yatra',
    'kedarnath badrinath package', 'garhwal himalayas pilgrimage',
    'chardham yatra registration 2026', 'chardham opening dates 2026',
    'chardham yatra itinerary', 'best time chardham yatra', 'chardham helicopter',
    `${dest} yatra package`, `${dest} by car`,
    ...(orig ? [`chardham yatra from ${orig}`, `${orig} to chardham`] : []),
  ];
  const mergedKeywords = Array.from(new Set([...(route.seo.keywords || []), ...semanticTerms])).slice(0, 24);

  return {
    title: route.seo.title,
    description: route.seo.description,
    keywords: mergedKeywords.join(', '),
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: route.seo.title,
      description: route.seo.description,
      url: canonicalUrl,
      siteName: 'Triveni Cabs™',
      images: [
        {
          url: `${baseUrl}${route.images.hero}`,
          width: 1200,
          height: 630,
          alt: `${route.title} - Triveni Cabs`,
        },
      ],
      locale: 'en_IN',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: route.seo.title,
      description: route.seo.description,
      images: [`${baseUrl}${route.images.hero}`],
    },
    robots: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
    other: {
      'geo.region': 'IN-UK',
      'geo.placename': route.origin || 'Uttarakhand',
      ...(route.priceNum > 0 && { 'og:price:amount': String(route.priceNum) }),
      'og:price:currency': 'INR',
    },
  };
}

// ---------------------------------------------------------------------------
// JSON-LD Structured Data Schemas
// ---------------------------------------------------------------------------
function cleanSchema(obj) {
  return JSON.parse(JSON.stringify(obj, (_, v) => (v === undefined ? undefined : v)));
}

function generateSchemas(route) {
  const baseUrl = 'https://www.trivenicabs.in';
  const pageUrl = `${baseUrl}/chardham-yatra/${route.slug}`;

  // 1. Breadcrumb Schema
  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: baseUrl },
      { '@type': 'ListItem', position: 2, name: 'Char Dham Yatra', item: `${baseUrl}/chardham-yatra` },
      { '@type': 'ListItem', position: 3, name: route.title, item: pageUrl },
    ],
  };

  // 2. Service Schema — aggregateRating + Reviews moved to top-level (correct schema location).
  // Provider's misplaced nested aggregateRating removed.
  const service = {
    '@context': 'https://schema.org',
    '@type': 'TouristTrip',
    name: `${route.title} by Triveni Cabs`,
    brand: { '@type': 'Brand', name: 'Triveni Cabs™' },
    description: route.seo.description,
    url: pageUrl,
    touristType: 'Pilgrim',
    itinerary: route.itinerary.length > 0 ? {
      '@type': 'ItemList',
      numberOfItems: route.itinerary.length,
      itemListElement: route.itinerary.map((item, idx) => ({
        '@type': 'ListItem',
        position: idx + 1,
        name: item.title,
        description: item.desc,
      })),
    } : undefined,
    offers: route.priceNum > 0 ? {
      '@type': 'Offer',
      price: route.priceNum,
      priceCurrency: 'INR',
      availability: 'https://schema.org/InStock',
      validFrom: '2026-01-01',
      validThrough: '2026-12-31',
    } : undefined,
    provider: {
      '@type': 'LocalBusiness',
      '@id': 'https://www.trivenicabs.in/#organization',
      name: 'Triveni Cabs',
      telephone: '+91-7668570551',
      url: baseUrl,
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'IN',
        addressRegion: 'Uttarakhand',
      },
    },
    ...getRatingAndReviews(route.slug, 'yatra'),
    speakable: getSpeakableSchema(['.speakable-headline', '.speakable-lead']),
  };

  // 3. FAQ Schema (for rich snippets) + Speakable for voice answers
  const faqSchema = route.faqs.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: route.faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
    speakable: getSpeakableSchema(['.speakable-headline', '.speakable-lead', '.speakable-faq-first']),
  } : null;

  // 4. Vehicle Schema — Product with brand, deterministic reviewCount + 3 yatra Reviews
  const vehicleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: `${route.vehicle.name} for ${route.destination} Yatra — Triveni Cabs`,
    description: route.vehicle.description,
    brand: {
      '@type': 'Brand',
      name: 'Triveni Cabs',
    },
    offers: route.vehicle.perKm > 0 ? {
      '@type': 'AggregateOffer',
      lowPrice: route.vehicle.perKm,
      highPrice: route.vehicle.perKm * 2,
      priceCurrency: 'INR',
      offerCount: '1',
      availability: 'https://schema.org/InStock',
      seller: { '@type': 'Organization', '@id': 'https://www.trivenicabs.in/#organization', name: 'Triveni Cabs' },
    } : undefined,
    image: `${baseUrl}${route.vehicle.image}`,
    ...getRatingAndReviews(route.slug, 'yatra'),
  };

  // 5. Type-specific schema
  //  - dham → TouristAttraction (geo, altitude, deity) for entity graph + GEO
  //  - route/package → HowTo (plan & register) for AEO/voice
  let extraSchema = null;

  if (route.pageType === 'dham') {
    const geo = DHAM_GEO[route.destinationKey] || DHAM_GEO[(route.destination || '').toLowerCase()] || null;
    extraSchema = {
      '@context': 'https://schema.org',
      '@type': ['TouristAttraction', 'Place'],
      '@id': `${pageUrl}#attraction`,
      name: `${route.destination} Temple`,
      description: route.destinationData?.significance || route.seo.description,
      url: pageUrl,
      image: `${baseUrl}${route.images.hero}`,
      isAccessibleForFree: true,
      publicAccess: true,
      touristType: 'Pilgrim',
      ...(route.destinationData?.altitude ? { additionalProperty: [{ '@type': 'PropertyValue', name: 'Altitude', value: route.destinationData.altitude }] } : {}),
      address: {
        '@type': 'PostalAddress',
        addressRegion: geo?.region || 'Uttarakhand',
        addressCountry: 'IN',
      },
      ...(geo ? { geo: { '@type': 'GeoCoordinates', latitude: geo.lat, longitude: geo.lng } } : {}),
      ...getRatingAndReviews(route.slug, 'yatra'),
    };
  } else if (route.pageType === 'route' || route.pageType === 'package') {
    extraSchema = {
      ...getHowToSchema({
        name: `How to Plan ${route.title}`,
        description: `Step-by-step guide to booking and registering for ${route.destination} Yatra 2026 by ${route.vehicle.name} with Triveni Cabs™.`,
        totalTime: 'PT15M',
        estimatedCost: route.priceNum > 0 ? { currency: 'INR', value: route.priceNum } : null,
        steps: registrationSteps,
      }),
      '@id': `${pageUrl}#howto`,
    };
  }

  return { breadcrumb, service, faqSchema, vehicleSchema, extraSchema };
}

// ---------------------------------------------------------------------------
// Page Component — Routes to correct client design
// ---------------------------------------------------------------------------
export default async function ChardhamYatraPage({ params }) {
  const { slug } = await params;
  const route = getRouteBySlug(slug);

  if (!route) {
    return (
      <div className="min-h-screen bg-stone-950 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Page Not Found</h1>
          <p className="text-stone-400 mb-8">The Char Dham Yatra page you are looking for does not exist.</p>
          <Link href="/chardham-yatra" className="bg-orange-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-orange-600 transition-colors">
            View All Char Dham Options
          </Link>
        </div>
      </div>
    );
  }

  const schemas = generateSchemas(route);

  return (
    <>
      {/* JSON-LD Structured Data for SEO */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(cleanSchema(schemas.breadcrumb)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(cleanSchema(schemas.service)) }} />
      {schemas.faqSchema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(cleanSchema(schemas.faqSchema)) }} />
      )}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(cleanSchema(schemas.vehicleSchema)) }} />
      {schemas.extraSchema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(cleanSchema(schemas.extraSchema)) }} />
      )}

      <AEOHead pageType="tour" data={{ url: `/chardham-yatra/${slug}`, title: route.title || '' }} />

      {/* Route to the correct unique design template */}
      {route.pageType === 'vehicleHub' && <ChardhamVehicleHubClient data={route} />}
      {route.pageType === 'route' && <ChardhamRouteClient data={route} />}
      {route.pageType === 'dham' && <ChardhamDhamClient data={route} />}
      {route.pageType === 'package' && <ChardhamPackageClient data={route} />}
    </>
  );
}
