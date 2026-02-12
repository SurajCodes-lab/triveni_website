import { getFestivalBySlug } from '@/utilis/festivalData';
import FestivalTripClient from '@/components/festival/FestivalTripClient';

const festival = getFestivalBySlug('navratri-vaishno-devi-cab');

export const metadata = {
  title: 'Navratri Vaishno Devi Cab Service 2026 | Mata Darshan Special | Triveni Cabs',
  description: 'Book Navratri cab from Delhi to Vaishno Devi Katra 2026. Sedan from ₹9,500, SUV ₹13,500. Mata darshan during Navratri. Experienced drivers. Call 7668570551.',
  keywords: 'navratri vaishno devi cab, delhi to katra cab navratri, vaishno devi cab service, navratri 2026 cab, mata vaishno devi transport, katra taxi navratri',
  authors: [{ name: 'Triveni Cabs' }], creator: 'Triveni Cabs', publisher: 'Triveni Cabs',
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: { canonical: '/navratri-vaishno-devi-cab' },
  openGraph: { title: 'Navratri Vaishno Devi Cab 2026 | From ₹9,500', description: 'Delhi to Katra cab for Navratri. Vaishno Devi yatra. AC vehicles.', type: 'website', locale: 'en_IN', url: 'https://www.trivenicabs.in/navratri-vaishno-devi-cab', siteName: 'Triveni Cabs' },
  twitter: { card: 'summary_large_image', title: 'Navratri Vaishno Devi Cab 2026', description: 'Delhi to Katra Navratri cab. From ₹9,500. Mata darshan special.' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

export const revalidate = 3600;

export default function NavratriVaishnodeviPage() {
  const serviceSchema = { "@context": "https://schema.org", "@type": "Service", "serviceType": "Navratri Vaishno Devi Transport", "name": "Navratri Vaishno Devi Cab Service", "description": "Cab service from Delhi to Katra for Navratri Vaishno Devi yatra. Experienced drivers for the Jammu highway journey.", "provider": { "@type": "LocalBusiness", "name": "Triveni Cabs", "telephone": "+91-7668570551", "url": "https://www.trivenicabs.in", "address": { "@type": "PostalAddress", "streetAddress": "366 Dandupura near Tajganj", "addressLocality": "Agra", "postalCode": "282006", "addressCountry": "IN" } }, "areaServed": [{ "@type": "City", "name": "Delhi" }, { "@type": "City", "name": "Katra" }], "offers": { "@type": "AggregateOffer", "lowPrice": "9500", "highPrice": "22000", "priceCurrency": "INR" } };
  const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" }, { "@type": "ListItem", "position": 2, "name": "Navratri Vaishno Devi Cab", "item": "https://www.trivenicabs.in/navratri-vaishno-devi-cab" }] };
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
