import { getFestivalBySlug } from '@/utilis/festivalData';
import FestivalTripClient from '@/components/festival/FestivalTripClient';

const festival = getFestivalBySlug('pushkar-mela-transport');

export const metadata = {
  title: 'Pushkar Mela Cab Service 2026 | Camel Fair Transport | Triveni Cabs',
  description: 'Book cab from Delhi to Pushkar for Pushkar Mela 2026. Sedan from ₹6,500, SUV ₹9,000. Camel fair, Brahma Temple, hot air balloon. Call 7668570551.',
  keywords: 'pushkar mela cab, pushkar camel fair transport, delhi to pushkar cab, pushkar mela 2026, pushkar fair cab service, rajasthan cab pushkar',
  authors: [{ name: 'Triveni Cabs' }], creator: 'Triveni Cabs', publisher: 'Triveni Cabs',
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: { canonical: '/pushkar-mela-transport' },
  openGraph: { title: 'Pushkar Mela Cab 2026 | Camel Fair Transport', description: 'Delhi to Pushkar cab for Pushkar Mela. From ₹6,500. Camel fair, Brahma Temple.', type: 'website', locale: 'en_IN', url: 'https://www.trivenicabs.in/pushkar-mela-transport', siteName: 'Triveni Cabs' },
  twitter: { card: 'summary_large_image', title: 'Pushkar Mela Cab 2026 | From ₹6,500', description: 'Pushkar Camel Fair transport. Delhi to Pushkar. AC vehicles.' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

export const revalidate = 3600;

export default function PushkarMelaTransportPage() {
  const serviceSchema = { "@context": "https://schema.org", "@type": "Service", "serviceType": "Pushkar Mela Transport", "name": "Pushkar Mela Cab Service - Camel Fair Special", "description": "Cab service from Delhi to Pushkar for the world-famous Pushkar Camel Fair. Visit Brahma Temple and experience Rajasthani culture.", "provider": { "@type": "LocalBusiness", "name": "Triveni Cabs", "telephone": "+91-7668570551", "url": "https://www.trivenicabs.in", "address": { "@type": "PostalAddress", "streetAddress": "366 Dandupura near Tajganj", "addressLocality": "Agra", "postalCode": "282006", "addressCountry": "IN" } }, "areaServed": [{ "@type": "City", "name": "Delhi" }, { "@type": "City", "name": "Pushkar" }], "offers": { "@type": "AggregateOffer", "lowPrice": "6500", "highPrice": "16000", "priceCurrency": "INR" } };
  const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" }, { "@type": "ListItem", "position": 2, "name": "Pushkar Mela Transport", "item": "https://www.trivenicabs.in/pushkar-mela-transport" }] };
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
