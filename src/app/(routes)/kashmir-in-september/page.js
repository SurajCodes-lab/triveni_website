import { getFestivalBySlug } from '@/utilis/festivalData';
import FestivalTripClient from '@/components/festival/FestivalTripClient';

const festival = getFestivalBySlug('kashmir-in-september');

export const metadata = {
  title: 'Kashmir in September 2026 | Post-Monsoon Trip from Delhi',
  description: 'Kashmir in September 2026 — clear post-monsoon skies, 20-27°C, shoulder rates. Srinagar, Gulmarg, Pahalgam, Sonamarg. From ₹19,800. Call 7668570551.',
  keywords: 'kashmir in september, kashmir september weather, srinagar in september, kashmir trip september 2026, delhi to kashmir cab, gulmarg pahalgam september, kashmir post monsoon',
  authors: [{ name: 'Triveni Cabs' }], creator: 'Triveni Cabs', publisher: 'Triveni Cabs',
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: { canonical: '/kashmir-in-september' },
  openGraph: {
    title: 'Kashmir in September 2026 | From ₹19,800',
    description: 'September is post-monsoon in Kashmir — clear skies, pleasant days, shoulder-season rates. Srinagar, Gulmarg, Pahalgam, Sonamarg.',
    type: 'website', locale: 'en_IN', url: 'https://www.trivenicabs.in/kashmir-in-september', siteName: 'Triveni Cabs',
    images: [{ url: '/images/sightseeing/Srinagar/Dal_Lake.jpg', width: 1200, height: 630, alt: 'Kashmir in September — Dal Lake Srinagar — Triveni Cabs' }],
  },
  twitter: { card: 'summary_large_image', title: 'Kashmir in September 2026', description: 'Post-monsoon Kashmir. Clear skies, shoulder rates. From ₹19,800.', images: ['/images/sightseeing/Srinagar/Dal_Lake.jpg'], creator: '@trivenicabs' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

export const revalidate = 3600;

export default function KashmirInSeptemberPage() {
  if (!festival) return null;

  const serviceSchema = { "@context": "https://schema.org", "@type": "Service", "serviceType": "Kashmir September Trip Transport", "name": "Kashmir in September — Cab and Tempo from Delhi", "description": "September post-monsoon Kashmir trips covering Srinagar, Gulmarg, Pahalgam and Sonamarg. Road transport from Delhi via Jammu, or local valley circuits for customers flying into Srinagar.", "provider": { "@type": "LocalBusiness", "name": "Triveni Cabs", "telephone": "+91-7668570551", "url": "https://www.trivenicabs.in", "address": { "@type": "PostalAddress", "streetAddress": "366 Dandupura near Tajganj", "addressLocality": "Agra", "postalCode": "282006", "addressCountry": "IN" } }, "areaServed": [{ "@type": "City", "name": "Delhi" }, { "@type": "City", "name": "Srinagar" }, { "@type": "City", "name": "Gulmarg" }, { "@type": "City", "name": "Pahalgam" }, { "@type": "City", "name": "Sonamarg" }], "offers": { "@type": "AggregateOffer", "lowPrice": "19800", "highPrice": "50400", "priceCurrency": "INR" } };
  const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" }, { "@type": "ListItem", "position": 2, "name": "Kashmir in September", "item": "https://www.trivenicabs.in/kashmir-in-september" }] };
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
