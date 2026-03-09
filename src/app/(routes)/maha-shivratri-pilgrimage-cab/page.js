import { getFestivalBySlug } from '@/utilis/festivalData';
import FestivalTripClient from '@/components/festival/FestivalTripClient';

const festival = getFestivalBySlug('maha-shivratri-pilgrimage-cab');

export const metadata = {
  title: 'Maha Shivratri Pilgrimage Cab 2026 | Jyotirlinga Yatra | Triveni Cabs',
  description: 'Book Maha Shivratri cab from Delhi to Haridwar, Varanasi, Rishikesh 2026. Sedan from ₹4,000. Night puja transport, holy dip. Call 7668570551.',
  keywords: 'maha shivratri cab, shivratri pilgrimage cab, delhi to haridwar shivratri, shivratri 2026 cab, shiva temple cab, jyotirlinga yatra cab, shivratri transport',
  authors: [{ name: 'Triveni Cabs' }], creator: 'Triveni Cabs', publisher: 'Triveni Cabs',
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: { canonical: '/maha-shivratri-pilgrimage-cab' },
  openGraph: { title: 'Maha Shivratri Cab 2026 | From ₹4,000', description: 'Shivratri pilgrimage cab from Delhi. Haridwar, Varanasi, Rishikesh.', type: 'website', locale: 'en_IN', url: 'https://www.trivenicabs.in/maha-shivratri-pilgrimage-cab', siteName: 'Triveni Cabs' },
  twitter: { card: 'summary_large_image', title: 'Maha Shivratri Pilgrimage Cab 2026', description: 'Delhi to Haridwar Shivratri cab. From ₹4,000. Night puja transport.' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

export const revalidate = false;

export default function MahaShivratriPage() {
  const serviceSchema = { "@context": "https://schema.org", "@type": "Service", "serviceType": "Maha Shivratri Transport", "name": "Maha Shivratri Pilgrimage Cab", "description": "Cab from Delhi for Maha Shivratri to Haridwar, Varanasi, and Rishikesh. Night puja transport and morning holy dip.", "provider": { "@type": "LocalBusiness", "name": "Triveni Cabs", "telephone": "+91-7668570551", "url": "https://www.trivenicabs.in", "address": { "@type": "PostalAddress", "streetAddress": "366 Dandupura near Tajganj", "addressLocality": "Agra", "postalCode": "282006", "addressCountry": "IN" } }, "areaServed": [{ "@type": "City", "name": "Delhi" }, { "@type": "City", "name": "Haridwar" }, { "@type": "City", "name": "Varanasi" }], "offers": { "@type": "AggregateOffer", "lowPrice": "4000", "highPrice": "10000", "priceCurrency": "INR" } };
  const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" }, { "@type": "ListItem", "position": 2, "name": "Maha Shivratri Pilgrimage Cab", "item": "https://www.trivenicabs.in/maha-shivratri-pilgrimage-cab" }] };
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
