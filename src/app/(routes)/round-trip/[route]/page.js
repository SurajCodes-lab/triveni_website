import { notFound } from 'next/navigation';
import { getRoundTripRoute, getAllRoundTripSlugs, getRelatedRoundTripRoutes } from '@/utilis/roundTripData';
import RoundTripClient from '@/components/round-trip/RoundTripClient';
import AEOHead from '@/components/seo/AEOHead';
import { getOgImageForSlug } from '@/lib/seo/ogImageMap';

export const revalidate = false;
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

  // JSON-LD: Service Schema
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: `Round Trip Cab Service ${route.origin} to ${route.destination}`,
    name: `${route.origin} to ${route.destination} Round Trip Cab — ₹${route.sedanRaw.toLocaleString('en-IN')}`,
    description: `Book round trip cab from ${route.origin} to ${route.destination} and back. ${route.distanceKm} km one-way, ${route.duration} via ${route.highway}. Sedan from ₹${route.sedanRaw.toLocaleString('en-IN')}. Driver stays with you.`,
    provider: {
      '@type': 'LocalBusiness',
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
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '10000',
      bestRating: '5',
    },
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

  // JSON-LD: FAQ
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
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
    name: `${route.origin} to ${route.destination} Round Trip Cab`,
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
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '10000',
      bestRating: '5',
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      <AEOHead pageType="route" data={{ url: `/round-trip/${slug}`, title: `${route.origin} to ${route.destination} Round Trip Cab`, origin: route.origin, destination: route.destination, city: route.origin }} />
      <RoundTripClient route={route} relatedRoutes={relatedRoutes} />
    </>
  );
}
