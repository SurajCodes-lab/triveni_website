import { getFestivalBySlug } from '@/utilis/festivalData';
import FestivalTripClient from '@/components/festival/FestivalTripClient';

const festival = getFestivalBySlug('diwali-ayodhya-transport');

export const metadata = {
  title: 'Diwali in Ayodhya Cab Service 2026 | Deepotsav Special | Triveni Cabs',
  description: 'Book cab from Delhi to Ayodhya for Diwali Deepotsav 2026. Sedan from ₹9,500, SUV ₹13,000. Ram Mandir aarti, Saryu Ghat diyas, drone show. Call 7668570551.',
  keywords: 'diwali ayodhya cab, deepotsav ayodhya transport, delhi to ayodhya cab, ayodhya diwali 2026, ram mandir diwali cab, ayodhya cab service, diwali travel ayodhya',
  authors: [{ name: 'Triveni Cabs' }], creator: 'Triveni Cabs', publisher: 'Triveni Cabs',
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: { canonical: '/diwali-ayodhya-transport' },
  openGraph: { title: 'Diwali Ayodhya Cab 2026 | Deepotsav Transport', description: 'Witness Deepotsav at Ayodhya. Delhi to Ayodhya cab from ₹9,500. Ram Mandir aarti experience.', type: 'website', locale: 'en_IN', url: 'https://www.trivenicabs.in/diwali-ayodhya-transport', siteName: 'Triveni Cabs' },
  twitter: { card: 'summary_large_image', title: 'Diwali Ayodhya Cab 2026 | Deepotsav', description: 'Delhi to Ayodhya Diwali cab. Sedan from ₹9,500. Deepotsav experience.' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

export const revalidate = 3600;

export default function DiwaliAyodhyaTransportPage() {
  const serviceSchema = { "@context": "https://schema.org", "@type": "Service", "serviceType": "Diwali Festival Transport", "name": "Diwali Ayodhya Cab Service - Deepotsav Special", "description": "Cab service from Delhi to Ayodhya for Diwali Deepotsav celebrations. Visit Ram Mandir, Saryu Ghat, and witness the spectacular drone show.", "provider": { "@type": "LocalBusiness", "name": "Triveni Cabs", "telephone": "+91-7668570551", "url": "https://www.trivenicabs.in", "address": { "@type": "PostalAddress", "streetAddress": "366 Dandupura near Tajganj", "addressLocality": "Agra", "postalCode": "282006", "addressCountry": "IN" } }, "areaServed": [{ "@type": "City", "name": "Delhi" }, { "@type": "City", "name": "Ayodhya" }], "offers": { "@type": "AggregateOffer", "lowPrice": "9500", "highPrice": "22000", "priceCurrency": "INR" } };
  const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" }, { "@type": "ListItem", "position": 2, "name": "Diwali Ayodhya Transport", "item": "https://www.trivenicabs.in/diwali-ayodhya-transport" }] };
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
