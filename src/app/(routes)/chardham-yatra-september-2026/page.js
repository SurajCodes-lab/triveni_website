import { getFestivalBySlug } from '@/utilis/festivalData';
import { getPostMonsoonBySlug } from '@/utilis/season/postMonsoonSeason';
import FestivalTripClient from '@/components/festival/FestivalTripClient';

const festival = getFestivalBySlug('chardham-yatra-september-2026') || getPostMonsoonBySlug('chardham-yatra-september-2026');

export const metadata = {
  title: 'Char Dham Yatra September 2026 | Post-Monsoon Cab',
  description: 'Char Dham Yatra in September 2026 — the post-monsoon window. Delhi cab from ₹32,000 sedan, ₹42,000 SUV. 10-11 day circuit. Call 7668570551.',
  keywords: 'chardham yatra september 2026, char dham september, post monsoon chardham yatra, chardham yatra october 2026, delhi to chardham cab september, chardham yatra best time september',
  authors: [{ name: 'Triveni Cabs' }], creator: 'Triveni Cabs', publisher: 'Triveni Cabs',
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: { canonical: '/chardham-yatra-september-2026' },
  openGraph: {
    title: 'Char Dham Yatra September 2026 | From ₹32,000',
    description: 'Post-monsoon Char Dham window. Delhi to all four dhams, 10-11 days. Clearer views, lighter crowds.',
    type: 'website', locale: 'en_IN', url: 'https://www.trivenicabs.in/chardham-yatra-september-2026', siteName: 'Triveni Cabs',
    images: [{ url: '/images/chardham/chardham-yatra-delhi-hero.png', width: 1200, height: 630, alt: 'Char Dham Yatra September 2026 Cab from Delhi — Triveni Cabs' }],
  },
  twitter: { card: 'summary_large_image', title: 'Char Dham Yatra September 2026', description: 'Post-monsoon Char Dham window. Delhi cab from ₹32,000. 10-11 day circuit.', images: ['/images/chardham/chardham-yatra-delhi-hero.png'], creator: '@trivenicabs' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

export const revalidate = 3600;

export default function CharDhamYatraSeptember2026Page() {
  if (!festival) return null;

  const serviceSchema = { "@context": "https://schema.org", "@type": "Service", "serviceType": "Char Dham Yatra Transport", "name": "Char Dham Yatra September 2026 Cab Service", "description": "Delhi to Char Dham circuit cab in the September-October post-monsoon window. Yamunotri, Gangotri, Kedarnath and Badrinath road transport.", "provider": { "@type": "LocalBusiness", "name": "Triveni Cabs", "telephone": "+91-7668570551", "url": "https://www.trivenicabs.in", "address": { "@type": "PostalAddress", "streetAddress": "366 Dandupura near Tajganj", "addressLocality": "Agra", "postalCode": "282006", "addressCountry": "IN" } }, "areaServed": [{ "@type": "City", "name": "Delhi" }, { "@type": "City", "name": "Haridwar" }, { "@type": "City", "name": "Rishikesh" }, { "@type": "Place", "name": "Kedarnath" }, { "@type": "Place", "name": "Badrinath" }, { "@type": "Place", "name": "Gangotri" }, { "@type": "Place", "name": "Yamunotri" }], "offers": { "@type": "AggregateOffer", "lowPrice": "32000", "highPrice": "54000", "priceCurrency": "INR" } };
  const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" }, { "@type": "ListItem", "position": 2, "name": "Char Dham Yatra", "item": "https://www.trivenicabs.in/chardham-yatra" }, { "@type": "ListItem", "position": 3, "name": "Char Dham Yatra September 2026", "item": "https://www.trivenicabs.in/chardham-yatra-september-2026" }] };
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
