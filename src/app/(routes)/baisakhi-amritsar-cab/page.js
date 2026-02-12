import { getFestivalBySlug } from '@/utilis/festivalData';
import FestivalTripClient from '@/components/festival/FestivalTripClient';

const festival = getFestivalBySlug('baisakhi-amritsar-cab');

export const metadata = {
  title: 'Baisakhi Amritsar Cab Service 2026 | Golden Temple Special | Triveni Cabs',
  description: 'Book Baisakhi cab from Delhi to Amritsar 2026. Sedan from ₹7,000, SUV ₹10,000. Golden Temple celebrations, Wagah Border. Call 7668570551.',
  keywords: 'baisakhi amritsar cab, delhi to amritsar baisakhi, golden temple baisakhi cab, baisakhi 2026 cab, amritsar cab service baisakhi, punjab festival cab',
  authors: [{ name: 'Triveni Cabs' }], creator: 'Triveni Cabs', publisher: 'Triveni Cabs',
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: { canonical: '/baisakhi-amritsar-cab' },
  openGraph: { title: 'Baisakhi Amritsar Cab 2026 | From ₹7,000', description: 'Delhi to Amritsar cab for Baisakhi. Golden Temple celebrations. AC vehicles.', type: 'website', locale: 'en_IN', url: 'https://www.trivenicabs.in/baisakhi-amritsar-cab', siteName: 'Triveni Cabs' },
  twitter: { card: 'summary_large_image', title: 'Baisakhi Amritsar Cab 2026', description: 'Delhi to Amritsar Baisakhi cab. From ₹7,000. Golden Temple special.' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

export const revalidate = 3600;

export default function BaisakhiAmritsarPage() {
  const serviceSchema = { "@context": "https://schema.org", "@type": "Service", "serviceType": "Baisakhi Festival Transport", "name": "Baisakhi Amritsar Cab Service", "description": "Cab from Delhi to Amritsar for Baisakhi celebrations at Golden Temple. Wagah Border ceremony included.", "provider": { "@type": "LocalBusiness", "name": "Triveni Cabs", "telephone": "+91-7668570551", "url": "https://www.trivenicabs.in", "address": { "@type": "PostalAddress", "streetAddress": "366 Dandupura near Tajganj", "addressLocality": "Agra", "postalCode": "282006", "addressCountry": "IN" } }, "areaServed": [{ "@type": "City", "name": "Delhi" }, { "@type": "City", "name": "Amritsar" }], "offers": { "@type": "AggregateOffer", "lowPrice": "7000", "highPrice": "18000", "priceCurrency": "INR" } };
  const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" }, { "@type": "ListItem", "position": 2, "name": "Baisakhi Amritsar Cab", "item": "https://www.trivenicabs.in/baisakhi-amritsar-cab" }] };
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
