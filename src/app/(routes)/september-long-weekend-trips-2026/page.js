import { getFestivalBySlug } from '@/utilis/festivalData';
import { getPostMonsoonBySlug } from '@/utilis/season/postMonsoonSeason';
import FestivalTripClient from '@/components/festival/FestivalTripClient';

const festival = getFestivalBySlug('september-long-weekend-trips-2026') || getPostMonsoonBySlug('september-long-weekend-trips-2026');

export const metadata = {
  title: 'September 2026 Long Weekend Trips from Delhi',
  description: 'September 2026 long weekends from Delhi — Sep 4-6 Janmashtami & Sep 12-14 Ganesh Chaturthi. Vrindavan, Haridwar, hills. From ₹9,100. Call 7668570551.',
  keywords: 'september long weekend trips 2026, long weekend september 2026 delhi, janmashtami long weekend trip, ganesh chaturthi weekend getaway delhi, 3 day trip from delhi september, post monsoon weekend trips delhi',
  authors: [{ name: 'Triveni Cabs' }], creator: 'Triveni Cabs', publisher: 'Triveni Cabs',
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: { canonical: '/september-long-weekend-trips-2026' },
  openGraph: {
    title: 'September 2026 Long Weekend Trips from Delhi',
    description: 'Sep 4-6 Janmashtami and Sep 12-14 Ganesh Chaturthi weekends. 3-day cab trips from ₹9,100.',
    type: 'website', locale: 'en_IN', url: 'https://www.trivenicabs.in/september-long-weekend-trips-2026', siteName: 'Triveni Cabs',
    images: [{ url: '/images/sightseeing/Mathura_Vrindavan/mathura_vrindvan_hero_image.png', width: 1200, height: 630, alt: 'September 2026 Long Weekend Trips from Delhi — Triveni Cabs' }],
  },
  twitter: { card: 'summary_large_image', title: 'September 2026 Long Weekend Trips', description: 'Sep 4-6 and Sep 12-14 weekends from Delhi. 3-day cab trips from ₹9,100.', images: ['/images/sightseeing/Mathura_Vrindavan/mathura_vrindvan_hero_image.png'], creator: '@trivenicabs' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

export const revalidate = 3600;

export default function SeptemberLongWeekendTrips2026Page() {
  if (!festival) return null;

  const serviceSchema = { "@context": "https://schema.org", "@type": "Service", "serviceType": "Long Weekend Getaway Cab Service", "name": "September 2026 Long Weekend Trips from Delhi", "description": "Cab packages for the September 2026 long weekends from Delhi NCR — Krishna Janmashtami (Sep 4-6) and Ganesh Chaturthi (Sep 12-14). 2-3 day round trips to Mathura, Vrindavan, Haridwar, Rishikesh, Nainital, Mussoorie and Shimla.", "provider": { "@type": "LocalBusiness", "name": "Triveni Cabs", "telephone": "+91-7668570551", "url": "https://www.trivenicabs.in", "address": { "@type": "PostalAddress", "streetAddress": "366 Dandupura near Tajganj", "addressLocality": "Agra", "postalCode": "282006", "addressCountry": "IN" } }, "areaServed": [{ "@type": "City", "name": "Delhi" }, { "@type": "City", "name": "Noida" }, { "@type": "City", "name": "Gurgaon" }, { "@type": "City", "name": "Mathura" }, { "@type": "City", "name": "Vrindavan" }, { "@type": "City", "name": "Haridwar" }, { "@type": "City", "name": "Rishikesh" }, { "@type": "City", "name": "Nainital" }, { "@type": "City", "name": "Shimla" }], "offers": { "@type": "AggregateOffer", "lowPrice": "9100", "highPrice": "20000", "priceCurrency": "INR" } };
  const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" }, { "@type": "ListItem", "position": 2, "name": "Long Weekend Getaway Packages", "item": "https://www.trivenicabs.in/long-weekend-getaway-packages-2026" }, { "@type": "ListItem", "position": 3, "name": "September 2026 Long Weekend Trips", "item": "https://www.trivenicabs.in/september-long-weekend-trips-2026" }] };
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
