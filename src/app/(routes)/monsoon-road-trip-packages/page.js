import { getFestivalBySlug } from '@/utilis/festivalData';
import FestivalTripClient from '@/components/festival/FestivalTripClient';

const festival = getFestivalBySlug('monsoon-road-trip-packages');

export const metadata = {
  title: 'Monsoon Road Trip Packages 2026 | Delhi to North India',
  description: 'Book monsoon road trips from Delhi Aug-Sep 2026. Sedan from ₹8,250, Innova ₹13,500, Tempo ₹15,000. Honest route advice. Call 7668570551.',
  keywords: 'monsoon road trip packages, monsoon road trip from delhi, august road trip north india, september road trip delhi, monsoon cab packages, rainy season road trip india',
  authors: [{ name: 'Triveni Cabs' }], creator: 'Triveni Cabs', publisher: 'Triveni Cabs',
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: { canonical: '/monsoon-road-trip-packages' },
  openGraph: {
    title: 'Monsoon Road Trip Packages 2026 | From ₹8,250',
    description: 'Delhi monsoon road trips across North India. Aug-Sep 2026. AC vehicles with hill-route drivers.',
    type: 'website', locale: 'en_IN', url: 'https://www.trivenicabs.in/monsoon-road-trip-packages', siteName: 'Triveni Cabs',
    images: [{ url: '/images/packages/manali.webp', width: 1200, height: 630, alt: 'Monsoon Road Trip Packages from Delhi — Triveni Cabs' }],
  },
  twitter: { card: 'summary_large_image', title: 'Monsoon Road Trip Packages 2026', description: 'Delhi monsoon road trips Aug-Sep 2026. From ₹8,250.', images: ['/images/packages/manali.webp'], creator: '@trivenicabs' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

export const revalidate = 3600;

export default function MonsoonRoadTripPackagesPage() {
  if (!festival) return null;

  const serviceSchema = { "@context": "https://schema.org", "@type": "Service", "serviceType": "Monsoon Road Trip Transport", "name": "Monsoon Road Trip Packages from Delhi", "description": "Monsoon season road trip cab and tempo packages from Delhi across North India for August-September 2026. Hill-route drivers, buffer-day planning, re-routing on landslide blockages.", "provider": { "@type": "LocalBusiness", "name": "Triveni Cabs", "telephone": "+91-7668570551", "url": "https://www.trivenicabs.in", "address": { "@type": "PostalAddress", "streetAddress": "366 Dandupura near Tajganj", "addressLocality": "Agra", "postalCode": "282006", "addressCountry": "IN" } }, "areaServed": [{ "@type": "City", "name": "Delhi" }, { "@type": "City", "name": "Shimla" }, { "@type": "City", "name": "Manali" }, { "@type": "City", "name": "Srinagar" }], "offers": { "@type": "AggregateOffer", "lowPrice": "8250", "highPrice": "48000", "priceCurrency": "INR" } };
  const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" }, { "@type": "ListItem", "position": 2, "name": "Monsoon Road Trip Packages", "item": "https://www.trivenicabs.in/monsoon-road-trip-packages" }] };
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": (festival.faqs || []).map(f => ({ "@type": "Question", "name": f.question, "acceptedAnswer": { "@type": "Answer", "text": f.answer } })) };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <FestivalTripClient festival={festival} />
    </>
  );
}
