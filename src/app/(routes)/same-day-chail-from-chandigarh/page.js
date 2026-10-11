import { getSameDayTourBySlug, getRelatedTours } from '@/utilis/sameDayTourData';
import SameDayTourClient from '@/components/tours/SameDayTourClient';
import { tightenTitle } from '@/lib/seo/serp-ctr';

const SLUG = 'same-day-chail-from-chandigarh';
const tour = getSameDayTourBySlug(SLUG);
export const revalidate = 3600;

const _desc = (tour.description || '').split('\n\n')[0].slice(0, 160) || `${tour.title} by AC cab with Triveni Cabs™.`;
export const metadata = {
  title: tightenTitle(`${tour.title} | AC Cab | 2026`),
  description: _desc,
  keywords: `${tour.title.toLowerCase()}, chandigarh to ${tour.destination.toLowerCase()} day trip, chandigarh to ${tour.destination.toLowerCase()} cab`,
  authors: [{ name: 'Triveni Cabs™' }],
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: { canonical: `/${SLUG}` },
  openGraph: { title: tour.title, description: _desc, type: 'website', locale: 'en_IN', url: `https://www.trivenicabs.in/${SLUG}`, siteName: 'Triveni Cabs™' },
  twitter: { card: 'summary_large_image', title: tour.title, description: _desc },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

export default function Page() {
  const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" }, { "@type": "ListItem", "position": 2, "name": tour.title, "item": `https://www.trivenicabs.in/${tour.slug}` }] };
  const tourSchema = { "@context": "https://schema.org", "@type": "TouristTrip", "name": tour.title, "description": (tour.description || '').split('\n\n')[0], "touristType": "Leisure Tourist", "itinerary": { "@type": "ItemList", "itemListElement": (tour.itinerary || []).map((item, idx) => ({ "@type": "ListItem", "position": idx + 1, "name": `${item.time ? item.time + ' - ' : ''}${item.activity || item.title || ''}` })) }, "provider": { "@type": "LocalBusiness", "name": "Triveni Cabs", "telephone": "+91-7668570551", "address": { "@type": "PostalAddress", "addressLocality": "Chandigarh", "addressCountry": "IN" } } };
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": (tour.faqs || []).map(item => ({ "@type": "Question", "name": item.question, "acceptedAnswer": { "@type": "Answer", "text": item.answer } })) };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(tourSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <SameDayTourClient tour={tour} related={getRelatedTours(tour.slug, 6)} />
    </>
  );
}
