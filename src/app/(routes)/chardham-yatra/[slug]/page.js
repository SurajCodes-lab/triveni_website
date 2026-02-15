import { getRouteBySlug, getAllSlugs } from '@/utilis/chardhamYatraData';
import ChardhamVehicleHubClient from './ChardhamVehicleHubClient';
import ChardhamRouteClient from './ChardhamRouteClient';
import ChardhamDhamClient from './ChardhamDhamClient';
import ChardhamPackageClient from './ChardhamPackageClient';

export const revalidate = 3600;

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
    return { title: 'Char Dham Yatra by Car | Triveni Cabs', description: 'Book car, SUV, bus for Char Dham Yatra 2026. Best prices, experienced drivers. Call 7668570551.' };
  }

  const baseUrl = 'https://www.trivenicabs.in';
  const canonicalUrl = `${baseUrl}/chardham-yatra/${slug}`;

  return {
    title: route.seo.title,
    description: route.seo.description,
    keywords: route.seo.keywords.join(', '),
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: route.seo.title,
      description: route.seo.description,
      url: canonicalUrl,
      siteName: 'Triveni Cabs',
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
      'og:price:amount': route.priceNum > 0 ? route.priceNum : undefined,
      'og:price:currency': 'INR',
    },
  };
}

// ---------------------------------------------------------------------------
// JSON-LD Structured Data Schemas
// ---------------------------------------------------------------------------
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

  // 2. Service Schema
  const service = {
    '@context': 'https://schema.org',
    '@type': 'TouristTrip',
    name: route.title,
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
      name: 'Triveni Cabs',
      telephone: '+91-7668570551',
      url: baseUrl,
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'IN',
        addressRegion: 'Uttarakhand',
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.8',
        reviewCount: '2450',
        bestRating: '5',
      },
    },
  };

  // 3. FAQ Schema (for rich snippets)
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
  } : null;

  // 4. Vehicle Schema
  const vehicleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: `${route.vehicle.name} for ${route.destination} Yatra`,
    description: route.vehicle.description,
    brand: {
      '@type': 'Brand',
      name: 'Triveni Cabs',
    },
    offers: {
      '@type': 'AggregateOffer',
      lowPrice: route.vehicle.perKm,
      highPrice: route.vehicle.perKm * 2,
      priceCurrency: 'INR',
      offerCount: '1',
      availability: 'https://schema.org/InStock',
    },
    image: `${baseUrl}${route.vehicle.image}`,
  };

  return { breadcrumb, service, faqSchema, vehicleSchema };
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
          <a href="/chardham-yatra" className="bg-orange-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-orange-600 transition-colors">
            View All Char Dham Options
          </a>
        </div>
      </div>
    );
  }

  const schemas = generateSchemas(route);

  return (
    <>
      {/* JSON-LD Structured Data for SEO */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.service) }} />
      {schemas.faqSchema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.faqSchema) }} />
      )}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.vehicleSchema) }} />

      {/* Route to the correct unique design template */}
      {route.pageType === 'vehicleHub' && <ChardhamVehicleHubClient data={route} />}
      {route.pageType === 'route' && <ChardhamRouteClient data={route} />}
      {route.pageType === 'dham' && <ChardhamDhamClient data={route} />}
      {route.pageType === 'package' && <ChardhamPackageClient data={route} />}
    </>
  );
}
