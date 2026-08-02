import { getFestivalBySlug } from '@/utilis/festivalData';
import { getPostMonsoonBySlug } from '@/utilis/season/postMonsoonSeason';
import FestivalTripClient from '@/components/festival/FestivalTripClient';

const festival = getFestivalBySlug('kedarnath-september-trip') || getPostMonsoonBySlug('kedarnath-september-trip');

export const metadata = {
  title: 'Kedarnath in September 2026 | Delhi to Gaurikund Cab',
  description: 'Kedarnath trip September 2026. Delhi to Gaurikund cab from ₹12,500 sedan, ₹16,500 Ertiga. 450 km road transport. Call 7668570551.',
  keywords: 'kedarnath september trip, kedarnath in september, delhi to kedarnath cab september, kedarnath september 2026, delhi to gaurikund taxi, kedarnath trip post monsoon',
  authors: [{ name: 'Triveni Cabs' }], creator: 'Triveni Cabs', publisher: 'Triveni Cabs',
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: { canonical: '/kedarnath-september-trip' },
  openGraph: {
    title: 'Kedarnath September 2026 | Delhi Cab from ₹12,500',
    description: 'Delhi to Gaurikund road transport for Kedarnath, 450 km. Post-monsoon window, lighter crowds.',
    type: 'website', locale: 'en_IN', url: 'https://www.trivenicabs.in/kedarnath-september-trip', siteName: 'Triveni Cabs',
    images: [{ url: '/images/chardham/kedarnath-hero.png', width: 1200, height: 630, alt: 'Kedarnath September Trip Cab from Delhi — Triveni Cabs' }],
  },
  twitter: { card: 'summary_large_image', title: 'Kedarnath September 2026 Trip', description: 'Delhi to Gaurikund cab from ₹12,500. Post-monsoon Kedarnath window.', images: ['/images/chardham/kedarnath-hero.png'], creator: '@trivenicabs' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

export const revalidate = 3600;

export default function KedarnathSeptemberTripPage() {
  if (!festival) return null;

  const serviceSchema = { "@context": "https://schema.org", "@type": "Service", "serviceType": "Kedarnath Yatra Road Transport", "name": "Kedarnath September Trip Cab Service", "description": "Delhi to Gaurikund/Sonprayag road transport for Kedarnath in the September-October post-monsoon window. Approximately 450 km. Trek and helicopter booked separately by the traveller.", "provider": { "@type": "LocalBusiness", "name": "Triveni Cabs", "telephone": "+91-7668570551", "url": "https://www.trivenicabs.in", "address": { "@type": "PostalAddress", "streetAddress": "366 Dandupura near Tajganj", "addressLocality": "Agra", "postalCode": "282006", "addressCountry": "IN" } }, "areaServed": [{ "@type": "City", "name": "Delhi" }, { "@type": "City", "name": "Haridwar" }, { "@type": "City", "name": "Rishikesh" }, { "@type": "Place", "name": "Kedarnath" }, { "@type": "Place", "name": "Gaurikund" }], "offers": { "@type": "AggregateOffer", "lowPrice": "12500", "highPrice": "21500", "priceCurrency": "INR" } };
  const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" }, { "@type": "ListItem", "position": 2, "name": "Char Dham Yatra", "item": "https://www.trivenicabs.in/chardham-yatra" }, { "@type": "ListItem", "position": 3, "name": "Kedarnath September Trip", "item": "https://www.trivenicabs.in/kedarnath-september-trip" }] };
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": festival.faqs.map(f => ({ "@type": "Question", "name": f.question, "acceptedAnswer": { "@type": "Answer", "text": f.answer } })) };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <FestivalTripClient festival={festival} />
    </>
  );
}
