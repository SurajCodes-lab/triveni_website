import { getFestivalBySlug } from '@/utilis/festivalData';
import FestivalTripClient from '@/components/festival/FestivalTripClient';

const festival = getFestivalBySlug('monsoon-hill-station-packages');

export const metadata = {
  title: 'Monsoon Hill Station Packages 2026 | Shimla & Manali',
  description: 'Monsoon hill station cab packages from Delhi 2026. Shimla, Manali, Mussoorie, Nainital. Sedan from ₹8,250, Tempo ₹15,000. Call 7668570551.',
  keywords: 'monsoon hill station packages, shimla in monsoon, manali monsoon trip, mussoorie monsoon package, nainital in rains, delhi to hill station august, monsoon hill station cab',
  authors: [{ name: 'Triveni Cabs' }], creator: 'Triveni Cabs', publisher: 'Triveni Cabs',
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: { canonical: '/monsoon-hill-station-packages' },
  openGraph: {
    title: 'Monsoon Hill Station Packages 2026 | From ₹8,250',
    description: 'Shimla, Manali, Mussoorie and Nainital in the rains. Waterfalls at full flow, off-season rates.',
    type: 'website', locale: 'en_IN', url: 'https://www.trivenicabs.in/monsoon-hill-station-packages', siteName: 'Triveni Cabs',
    images: [{ url: '/images/sightseeing/Shimla/shimla_hero_section.jpg', width: 1200, height: 630, alt: 'Monsoon Hill Station Packages from Delhi — Triveni Cabs' }],
  },
  twitter: { card: 'summary_large_image', title: 'Monsoon Hill Station Packages 2026', description: 'Shimla, Manali, Mussoorie, Nainital in the rains. From ₹8,250.', images: ['/images/sightseeing/Shimla/shimla_hero_section.jpg'], creator: '@trivenicabs' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

export const revalidate = 3600;

export default function MonsoonHillStationPackagesPage() {
  if (!festival) return null;

  const serviceSchema = { "@context": "https://schema.org", "@type": "Service", "serviceType": "Monsoon Hill Station Transport", "name": "Monsoon Hill Station Cab Packages from Delhi", "description": "Monsoon season cab and tempo packages from Delhi to Shimla, Manali, Mussoorie and Nainital for August-September 2026. Experienced hill drivers, daily road-status checks.", "provider": { "@type": "LocalBusiness", "name": "Triveni Cabs", "telephone": "+91-7668570551", "url": "https://www.trivenicabs.in", "address": { "@type": "PostalAddress", "streetAddress": "366 Dandupura near Tajganj", "addressLocality": "Agra", "postalCode": "282006", "addressCountry": "IN" } }, "areaServed": [{ "@type": "City", "name": "Delhi" }, { "@type": "City", "name": "Shimla" }, { "@type": "City", "name": "Manali" }, { "@type": "City", "name": "Mussoorie" }, { "@type": "City", "name": "Nainital" }], "offers": { "@type": "AggregateOffer", "lowPrice": "8250", "highPrice": "20000", "priceCurrency": "INR" } };
  const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" }, { "@type": "ListItem", "position": 2, "name": "Monsoon Hill Station Packages", "item": "https://www.trivenicabs.in/monsoon-hill-station-packages" }] };
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
