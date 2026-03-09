import { getFestivalBySlug } from '@/utilis/festivalData';
import FestivalTripClient from '@/components/festival/FestivalTripClient';

const festival = getFestivalBySlug('chhath-puja-varanasi-transport');

export const metadata = {
  title: 'Chhath Puja Varanasi Cab Service 2026 | Ghat Transport | Triveni Cabs',
  description: 'Book cab from Delhi to Varanasi for Chhath Puja 2026. Sedan from ₹11,000, SUV ₹15,000. Ganga ghat transport, sunrise arghya. Call 7668570551.',
  keywords: 'chhath puja varanasi cab, delhi to varanasi chhath, chhath puja transport, varanasi ghat cab, chhath 2026 cab, chhath puja travel service',
  authors: [{ name: 'Triveni Cabs' }], creator: 'Triveni Cabs', publisher: 'Triveni Cabs',
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: { canonical: '/chhath-puja-varanasi-transport' },
  openGraph: { title: 'Chhath Puja Varanasi Cab 2026 | From ₹11,000', description: 'Delhi to Varanasi cab for Chhath Puja. Ghat transport included.', type: 'website', locale: 'en_IN', url: 'https://www.trivenicabs.in/chhath-puja-varanasi-transport', siteName: 'Triveni Cabs' },
  twitter: { card: 'summary_large_image', title: 'Chhath Puja Varanasi Cab 2026', description: 'Delhi to Varanasi Chhath Puja cab. From ₹11,000. Ghat transport.' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

export const revalidate = false;

export default function ChhathPujaVaranasiPage() {
  const serviceSchema = { "@context": "https://schema.org", "@type": "Service", "serviceType": "Chhath Puja Transport", "name": "Chhath Puja Varanasi Cab Service", "description": "Cab from Delhi to Varanasi for Chhath Puja celebrations at Ganga ghats. Local ghat transport included.", "provider": { "@type": "LocalBusiness", "name": "Triveni Cabs", "telephone": "+91-7668570551", "url": "https://www.trivenicabs.in", "address": { "@type": "PostalAddress", "streetAddress": "366 Dandupura near Tajganj", "addressLocality": "Agra", "postalCode": "282006", "addressCountry": "IN" } }, "areaServed": [{ "@type": "City", "name": "Delhi" }, { "@type": "City", "name": "Varanasi" }], "offers": { "@type": "AggregateOffer", "lowPrice": "11000", "highPrice": "24000", "priceCurrency": "INR" } };
  const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" }, { "@type": "ListItem", "position": 2, "name": "Chhath Puja Varanasi Transport", "item": "https://www.trivenicabs.in/chhath-puja-varanasi-transport" }] };
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
