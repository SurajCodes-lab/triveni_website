import { notFound } from 'next/navigation';
import { getTrainTaxiRoute, getAllTrainTaxiSlugs, getRelatedTrainTaxi } from '@/utilis/trainTaxiData';
import TrainTaxiClient from '@/components/train-taxi/TrainTaxiClient';
import AEOHead from '@/components/seo/AEOHead';

export const revalidate = false;
export const dynamicParams = false;

export async function generateStaticParams() {
  return getAllTrainTaxiSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const { slug } = resolvedParams;
  const route = getTrainTaxiRoute(slug);

  if (!route) {
    return { title: 'Train Taxi Route Not Found' };
  }

  const cheapest = Math.min(...route.taxiPackages.map(p => p.sedan));
  const title = `${route.train.name} + ${route.city} Taxi: Station Pickup ₹${cheapest} | Train+Cab Combo — 4.9★`;
  const description = `${route.train.name} (${route.train.number}) to ${route.city} + pre-booked taxi from ₹${cheapest}. ${route.train.duration} train + station pickup. Total: ${route.totalTripCost}. Call 7668570551.`;
  const ogTitle = `${route.train.name} + ${route.city} Taxi Combo — Station Pickup from ₹${cheapest} | Triveni Cabs`;

  return {
    title,
    description,
    keywords: [
      `${route.train.name.toLowerCase()} taxi`,
      `${route.train.name.toLowerCase()} cab`,
      `${route.city.toLowerCase()} station taxi`,
      `${route.city.toLowerCase()} station pickup`,
      `train to ${route.city.toLowerCase()} taxi`,
      `${route.city.toLowerCase()} cab from station`,
      `${route.train.number} taxi service`,
      `${route.city.toLowerCase()} day trip by train`,
      `train taxi combo ${route.city.toLowerCase()}`,
      `pre booked taxi ${route.city.toLowerCase()} station`,
      `${route.train.name.toLowerCase()} sightseeing`,
      `${route.city.toLowerCase()} train station cab`,
    ],
    authors: [{ name: 'Triveni Cabs' }],
    creator: 'Triveni Cabs',
    publisher: 'Triveni Cabs',
    metadataBase: new URL('https://www.trivenicabs.in'),
    alternates: { canonical: `/train-taxi/${slug}` },
    openGraph: {
      title: ogTitle, description, type: 'website', locale: 'en_IN',
      url: `https://www.trivenicabs.in/train-taxi/${slug}`,
      siteName: 'Triveni Cabs',
      images: [{ url: '/images/citypage_hero_section_image.jpg', width: 1200, height: 630, alt: `${route.train.name} + ${route.city} Taxi` }],
    },
    twitter: { card: 'summary_large_image', title: ogTitle, description, creator: '@trivenicabs', site: '@trivenicabs', images: ['/images/citypage_hero_section_image.jpg'] },
    robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
  };
}

export default async function TrainTaxiPage({ params }) {
  const resolvedParams = await params;
  const { slug } = resolvedParams;
  const route = getTrainTaxiRoute(slug);

  if (!route) { notFound(); }

  const relatedRoutes = getRelatedTrainTaxi(slug);
  const cheapest = Math.min(...route.taxiPackages.map(p => p.sedan));

  const serviceSchema = {
    "@context": "https://schema.org", "@type": "Service",
    "serviceType": "Train Station Taxi Service",
    "name": `${route.train.name} + ${route.city} Taxi — Triveni Cabs`,
    "description": `Pre-booked taxi service at ${route.city} station for ${route.train.name} passengers. Station pickup from ₹${cheapest}.`,
    "provider": { "@type": "LocalBusiness", "name": "Triveni Cabs", "telephone": "+91-7668570551", "email": "cabstriveni@gmail.com", "url": "https://www.trivenicabs.in", "address": { "@type": "PostalAddress", "streetAddress": "366 Dandupura near Tajganj", "addressLocality": "Agra", "addressRegion": "UP", "postalCode": "282006", "addressCountry": "IN" } },
    "areaServed": { "@type": "City", "name": route.city },
    "offers": { "@type": "AggregateOffer", "lowPrice": cheapest.toString(), "highPrice": Math.max(...route.taxiPackages.map(p => p.suv)).toString(), "priceCurrency": "INR" },
    "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "10000", "bestRating": "5" }
  };

  const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [ { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" }, { "@type": "ListItem", "position": 2, "name": "Train + Taxi", "item": "https://www.trivenicabs.in/train-taxi" }, { "@type": "ListItem", "position": 3, "name": `${route.train.name} + ${route.city}`, "item": `https://www.trivenicabs.in/train-taxi/${slug}` } ] };

  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": route.faqs.map(faq => ({ "@type": "Question", "name": faq.question, "acceptedAnswer": { "@type": "Answer", "text": faq.answer } })) };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <AEOHead pageType="station" data={{ url: `/train-taxi/${slug}`, title: `${route.train.name} + ${route.city} Taxi`, city: route.city }} />
      <TrainTaxiClient route={route} relatedRoutes={relatedRoutes} />
    </>
  );
}
