import { notFound } from 'next/navigation';
import { getMonthData, getAllMonthSlugs, getAdjacentMonths } from '@/utilis/monthlyCalendarData';
import MonthlyCalendarClient from '@/components/monthly-calendar/MonthlyCalendarClient';
import AEOHead from '@/components/seo/AEOHead';

export const revalidate = false;
export const dynamicParams = false;

export async function generateStaticParams() {
  return getAllMonthSlugs().map((slug) => ({ month: slug }));
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const { month: slug } = resolvedParams;
  const data = getMonthData(slug);

  if (!data) {
    return { title: 'Month Not Found' };
  }

  const topDest = data.destinations.slice(0, 4).map(d => d.name).join(', ');
  const title = `Where to Go in ${data.month} 2026 | Top ${data.destinations.length} Destinations — Triveni Cabs`;
  const description = `Best places to visit in ${data.month} 2026: ${topDest} & more. Weather, crowd levels, budget ranges, cab fares included. Book travel with Triveni Cabs — Call 7668570551.`;
  const ogTitle = `Where to Go in ${data.month} 2026 — ${data.destinations.length} Best Destinations with Cab Service | Triveni Cabs`;

  return {
    title,
    description,
    keywords: [
      `where to go in ${data.month.toLowerCase()}`,
      `best places to visit in ${data.month.toLowerCase()}`,
      `${data.month.toLowerCase()} travel destinations india`,
      `${data.month.toLowerCase()} holiday destinations`,
      `best time to travel ${data.month.toLowerCase()}`,
      `${data.month.toLowerCase()} trip ideas india`,
      `${data.month.toLowerCase()} weather travel guide`,
      `${data.month.toLowerCase()} festival destinations india`,
      `${data.month.toLowerCase()} weekend getaway from delhi`,
      `${data.month.toLowerCase()} vacation india 2026`,
      `travel calendar ${data.month.toLowerCase()}`,
      `${data.month.toLowerCase()} cab booking india`,
      `best month to visit india ${data.month.toLowerCase()}`,
      `${data.month.toLowerCase()} road trip destinations`,
      `seasonal travel guide india ${data.month.toLowerCase()}`,
    ],
    authors: [{ name: 'Triveni Cabs' }],
    creator: 'Triveni Cabs',
    publisher: 'Triveni Cabs',
    metadataBase: new URL('https://www.trivenicabs.in'),
    alternates: { canonical: `/where-to-go/${slug}` },
    openGraph: {
      title: ogTitle, description, type: 'website', locale: 'en_IN',
      url: `https://www.trivenicabs.in/where-to-go/${slug}`,
      siteName: 'Triveni Cabs',
      images: [{ url: '/images/citypage_hero_section_image.jpg', width: 1200, height: 630, alt: `Best Places to Visit in ${data.month}` }],
    },
    twitter: { card: 'summary_large_image', title: ogTitle, description, creator: '@trivenicabs', site: '@trivenicabs', images: ['/images/citypage_hero_section_image.jpg'] },
    robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
  };
}

export default async function WhereToGoPage({ params }) {
  const resolvedParams = await params;
  const { month: slug } = resolvedParams;
  const data = getMonthData(slug);

  if (!data) { notFound(); }

  const { prev, next } = getAdjacentMonths(slug);

  const serviceSchema = {
    "@context": "https://schema.org", "@type": "TouristTrip",
    "name": `Best Places to Visit in ${data.month} — India Travel Guide`,
    "description": `Top ${data.destinations.length} destinations to visit in ${data.month}: ${data.destinations.map(d => d.name).join(', ')}. Complete weather, cost, and festival guide.`,
    "touristType": "Leisure Travelers",
    "provider": { "@type": "LocalBusiness", "name": "Triveni Cabs", "telephone": "+91-7668570551", "email": "cabstriveni@gmail.com", "url": "https://www.trivenicabs.in", "address": { "@type": "PostalAddress", "streetAddress": "366 Dandupura near Tajganj", "addressLocality": "Agra", "addressRegion": "UP", "postalCode": "282006", "addressCountry": "IN" } },
    "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "10000", "bestRating": "5" }
  };

  const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [ { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" }, { "@type": "ListItem", "position": 2, "name": "Where to Go", "item": "https://www.trivenicabs.in/where-to-go" }, { "@type": "ListItem", "position": 3, "name": data.month, "item": `https://www.trivenicabs.in/where-to-go/${slug}` } ] };

  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": data.faqs.map(faq => ({ "@type": "Question", "name": faq.question, "acceptedAnswer": { "@type": "Answer", "text": faq.answer } })) };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <AEOHead pageType="tour" data={{ url: `/where-to-go/${slug}`, title: `Best Places to Visit in ${data.month}` }} />
      <MonthlyCalendarClient data={data} prev={prev} next={next} />
    </>
  );
}
