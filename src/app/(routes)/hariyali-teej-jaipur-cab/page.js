import { notFound } from 'next/navigation';
import { getFestivalBySlug } from '@/utilis/festivalData';
import FestivalTripClient from '@/components/festival/FestivalTripClient';

const festival = getFestivalBySlug('hariyali-teej-jaipur-cab');

export const metadata = {
  title: 'Hariyali Teej Jaipur Cab 2026 | Delhi to Jaipur',
  description: 'Delhi to Jaipur cab for the Teej procession, August 2026. 280 km on NH-48. Sedan ₹11/km, Innova ₹18/km, no surge. Call 7668570551.',
  keywords: 'hariyali teej jaipur cab, teej jaipur 2026, delhi to jaipur teej cab, jaipur teej procession, teej festival rajasthan cab, jaipur cab august 2026, tripolia bazaar teej',
  authors: [{ name: 'Triveni Cabs' }], creator: 'Triveni Cabs', publisher: 'Triveni Cabs',
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: { canonical: '/hariyali-teej-jaipur-cab' },
  openGraph: {
    title: 'Hariyali Teej Jaipur Cab 2026 | From ₹3,300',
    description: 'Delhi to Jaipur for the Teej royal procession, August 2026. 280 km on NH-48. Old City, Amber Fort, Johari Bazaar.',
    type: 'website', locale: 'en_IN', url: 'https://www.trivenicabs.in/hariyali-teej-jaipur-cab', siteName: 'Triveni Cabs',
    images: [{ url: '/images/sightseeing/Jaipur/Hawa_Mahal.jpg', width: 1200, height: 630, alt: 'Hariyali Teej Cab to Jaipur Old City — Triveni Cabs' }],
  },
  twitter: { card: 'summary_large_image', title: 'Hariyali Teej Jaipur Cab 2026', description: 'Delhi to Jaipur for the Teej procession, August 2026. From ₹3,300.', images: ['/images/sightseeing/Jaipur/Hawa_Mahal.jpg'], creator: '@trivenicabs' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

export const revalidate = 3600;

export default function HariyaliTeejJaipurPage() {
  if (!festival) notFound();

  const serviceSchema = { "@context": "https://schema.org", "@type": "Service", "serviceType": "Teej Festival Transport", "name": "Hariyali Teej Jaipur Cab Service", "description": "Cab from Delhi to Jaipur for the Hariyali Teej royal procession in August 2026. Old City, Tripolia Bazaar, Amber Fort, City Palace and Johari Bazaar.", "provider": { "@type": "LocalBusiness", "name": "Triveni Cabs", "telephone": "+91-7668570551", "url": "https://www.trivenicabs.in", "address": { "@type": "PostalAddress", "streetAddress": "366 Dandupura near Tajganj", "addressLocality": "Agra", "postalCode": "282006", "addressCountry": "IN" } }, "areaServed": [{ "@type": "City", "name": "Delhi" }, { "@type": "City", "name": "Gurgaon" }, { "@type": "City", "name": "Noida" }, { "@type": "City", "name": "Jaipur" }], "offers": { "@type": "AggregateOffer", "lowPrice": "3300", "highPrice": "15680", "priceCurrency": "INR" } };
  const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" }, { "@type": "ListItem", "position": 2, "name": "Hariyali Teej Jaipur Cab", "item": "https://www.trivenicabs.in/hariyali-teej-jaipur-cab" }] };
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
