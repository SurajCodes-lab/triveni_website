import { getFestivalBySlug } from '@/utilis/festivalData';
import FestivalTripClient from '@/components/festival/FestivalTripClient';

const festival = getFestivalBySlug('kumbh-mela-prayagraj-transport');

export const metadata = {
  title: 'Kumbh Mela Prayagraj Cab Service 2026 | Holy Snan Transport | Triveni Cabs',
  description: 'Book cab from Delhi to Prayagraj for Kumbh Mela 2026. Sedan from ₹9,000, SUV ₹12,500. Shahi Snan at Triveni Sangam. Experienced drivers. Call 7668570551.',
  keywords: 'kumbh mela cab, prayagraj kumbh transport, delhi to prayagraj cab, kumbh mela 2026 cab, triveni sangam cab, shahi snan transport, allahabad kumbh cab',
  authors: [{ name: 'Triveni Cabs' }], creator: 'Triveni Cabs', publisher: 'Triveni Cabs',
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: { canonical: '/kumbh-mela-prayagraj-transport' },
  openGraph: { title: 'Kumbh Mela Prayagraj Cab 2026 | Shahi Snan Transport', description: 'Delhi to Prayagraj cab for Kumbh Mela. From ₹9,000. Holy dip at Triveni Sangam.', type: 'website', locale: 'en_IN', url: 'https://www.trivenicabs.in/kumbh-mela-prayagraj-transport', siteName: 'Triveni Cabs' },
  twitter: { card: 'summary_large_image', title: 'Kumbh Mela Prayagraj Cab 2026', description: 'Kumbh Mela transport. Delhi to Prayagraj. From ₹9,000 sedan.' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

export const revalidate = 3600;

export default function KumbhMelaPrayagrajPage() {
  const serviceSchema = { "@context": "https://schema.org", "@type": "Service", "serviceType": "Kumbh Mela Transport", "name": "Kumbh Mela Prayagraj Cab Service", "description": "Reliable cab service from Delhi to Prayagraj for Kumbh Mela. Shahi Snan transport with experienced drivers.", "provider": { "@type": "LocalBusiness", "name": "Triveni Cabs", "telephone": "+91-7668570551", "url": "https://www.trivenicabs.in", "address": { "@type": "PostalAddress", "streetAddress": "366 Dandupura near Tajganj", "addressLocality": "Agra", "postalCode": "282006", "addressCountry": "IN" } }, "areaServed": [{ "@type": "City", "name": "Delhi" }, { "@type": "City", "name": "Prayagraj" }], "offers": { "@type": "AggregateOffer", "lowPrice": "9000", "highPrice": "21000", "priceCurrency": "INR" } };
  const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" }, { "@type": "ListItem", "position": 2, "name": "Kumbh Mela Prayagraj Transport", "item": "https://www.trivenicabs.in/kumbh-mela-prayagraj-transport" }] };
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
