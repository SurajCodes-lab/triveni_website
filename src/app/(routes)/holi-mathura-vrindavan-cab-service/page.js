import { getFestivalBySlug } from '@/utilis/festivalData';
import FestivalTripClient from '@/components/festival/FestivalTripClient';

const festival = getFestivalBySlug('holi-mathura-vrindavan-cab-service');

export const metadata = {
  title: 'Holi Special Mathura Vrindavan Cab Service 2026 | Book Early | Triveni Cabs',
  description: 'Book Holi special cab from Delhi to Mathura Vrindavan 2026. Sedan from ₹3,500, SUV ₹5,000. Lathmar Holi Barsana, Phalen ki Holi Vrindavan. AC vehicles. Call 7668570551.',
  keywords: 'holi cab mathura, holi vrindavan cab, holi special cab service, delhi to mathura holi cab, barsana holi cab, holi 2026 cab booking, mathura vrindavan taxi, holi festival transport',
  authors: [{ name: 'Triveni Cabs' }],
  creator: 'Triveni Cabs',
  publisher: 'Triveni Cabs',
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: { canonical: '/holi-mathura-vrindavan-cab-service' },
  openGraph: {
    title: 'Holi Special Mathura Vrindavan Cab 2026 | From ₹3,500',
    description: 'Celebrate Holi in Mathura-Vrindavan. Cab from Delhi starting ₹3,500. AC sedan, SUV, Tempo Traveller. Book now.',
    type: 'website', locale: 'en_IN',
    url: 'https://www.trivenicabs.in/holi-mathura-vrindavan-cab-service',
    siteName: 'Triveni Cabs',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Holi Mathura Vrindavan Cab 2026 | From ₹3,500',
    description: 'Holi special cab service. Delhi to Mathura-Vrindavan. AC vehicles, experienced drivers.',
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

export const revalidate = 3600;

export default function HoliMathuraVrindavanCabPage() {
  const serviceSchema = {
    "@context": "https://schema.org", "@type": "Service",
    "serviceType": "Holi Festival Transport Service",
    "name": "Holi Special Mathura Vrindavan Cab Service",
    "description": "Book Holi special cab from Delhi to Mathura and Vrindavan. Experience Lathmar Holi, Barsana Holi, and Banke Bihari Temple celebrations.",
    "provider": { "@type": "LocalBusiness", "name": "Triveni Cabs", "telephone": "+91-7668570551", "url": "https://www.trivenicabs.in", "address": { "@type": "PostalAddress", "streetAddress": "366 Dandupura near Tajganj", "addressLocality": "Agra", "postalCode": "282006", "addressCountry": "IN" } },
    "areaServed": [{ "@type": "City", "name": "Delhi" }, { "@type": "City", "name": "Mathura" }, { "@type": "City", "name": "Vrindavan" }],
    "offers": { "@type": "AggregateOffer", "lowPrice": "3500", "highPrice": "10000", "priceCurrency": "INR" }
  };
  const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" },
    { "@type": "ListItem", "position": 2, "name": "Holi Mathura Vrindavan Cab", "item": "https://www.trivenicabs.in/holi-mathura-vrindavan-cab-service" }
  ]};
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
