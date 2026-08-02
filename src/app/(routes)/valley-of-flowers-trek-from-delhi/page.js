import { getFestivalBySlug } from '@/utilis/festivalData';
import FestivalTripClient from '@/components/festival/FestivalTripClient';

const festival = getFestivalBySlug('valley-of-flowers-trek-from-delhi');

export const metadata = {
  title: 'Valley of Flowers Trek from Delhi 2026 | Cab to Govindghat',
  description: 'Delhi to Govindghat cab for the Valley of Flowers trek 2026. 500 km, sedan from ₹11,000, Innova ₹18,000. Bloom mid-Jul to mid-Sep. Call 7668570551.',
  keywords: 'valley of flowers trek from delhi, delhi to valley of flowers, valley of flowers cab, govindghat taxi from delhi, valley of flowers 2026, delhi to govindghat cab, hemkund sahib cab',
  authors: [{ name: 'Triveni Cabs' }], creator: 'Triveni Cabs', publisher: 'Triveni Cabs',
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: { canonical: '/valley-of-flowers-trek-from-delhi' },
  openGraph: {
    title: 'Valley of Flowers Trek from Delhi 2026 | From ₹11,000',
    description: 'Road transport Delhi to Govindghat, where the Valley of Flowers trek begins. Peak bloom mid-July to mid-September.',
    type: 'website', locale: 'en_IN', url: 'https://www.trivenicabs.in/valley-of-flowers-trek-from-delhi', siteName: 'Triveni Cabs',
    images: [{ url: '/images/sightseeing/Valley_of_Flowers/Valley_of_Flowers_hero_section.jpg', width: 1200, height: 630, alt: 'Valley of Flowers Trek from Delhi — Triveni Cabs' }],
  },
  twitter: { card: 'summary_large_image', title: 'Valley of Flowers Trek from Delhi 2026', description: 'Delhi to Govindghat cab. From ₹11,000. Bloom mid-July to mid-September.', images: ['/images/sightseeing/Valley_of_Flowers/Valley_of_Flowers_hero_section.jpg'], creator: '@trivenicabs' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

export const revalidate = 3600;

export default function ValleyOfFlowersTrekFromDelhiPage() {
  if (!festival) return null;

  const serviceSchema = { "@context": "https://schema.org", "@type": "Service", "serviceType": "Valley of Flowers Trek Road Transport", "name": "Valley of Flowers Trek Cab from Delhi", "description": "Road transport from Delhi to Govindghat and back for the Valley of Flowers trek, with the vehicle and driver waiting through your trek days. Triveni Cabs provides road transport only; the trek is on foot.", "provider": { "@type": "LocalBusiness", "name": "Triveni Cabs", "telephone": "+91-7668570551", "url": "https://www.trivenicabs.in", "address": { "@type": "PostalAddress", "streetAddress": "366 Dandupura near Tajganj", "addressLocality": "Agra", "postalCode": "282006", "addressCountry": "IN" } }, "areaServed": [{ "@type": "City", "name": "Delhi" }, { "@type": "City", "name": "Rishikesh" }, { "@type": "City", "name": "Joshimath" }, { "@type": "City", "name": "Govindghat" }], "offers": { "@type": "AggregateOffer", "lowPrice": "11000", "highPrice": "24000", "priceCurrency": "INR" } };
  const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" }, { "@type": "ListItem", "position": 2, "name": "Valley of Flowers Trek from Delhi", "item": "https://www.trivenicabs.in/valley-of-flowers-trek-from-delhi" }] };
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
