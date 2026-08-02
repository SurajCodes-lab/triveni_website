import { notFound } from 'next/navigation';
import { getFestivalBySlug } from '@/utilis/festivalData';
import FestivalTripClient from '@/components/festival/FestivalTripClient';

const festival = getFestivalBySlug('janmashtami-mathura-vrindavan-cab');

export const metadata = {
  title: 'Janmashtami Mathura Vrindavan Cab 2026 | Sep 4-6',
  description: 'Book Janmashtami cab from Delhi to Mathura Vrindavan, 4-6 Sep 2026. Sedan ₹11/km, Innova ₹18/km, no surge. Yamuna Expressway. Call 7668570551.',
  keywords: 'janmashtami mathura vrindavan cab, delhi to mathura janmashtami 2026, vrindavan cab janmashtami, krishna janmabhoomi taxi, banke bihari temple cab, mathura vrindavan tempo traveller, janmashtami 2026 date cab',
  authors: [{ name: 'Triveni Cabs' }], creator: 'Triveni Cabs', publisher: 'Triveni Cabs',
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: { canonical: '/janmashtami-mathura-vrindavan-cab' },
  openGraph: {
    title: 'Janmashtami Mathura Vrindavan Cab 2026 | From ₹3,300',
    description: 'Delhi to Mathura & Vrindavan for Janmashtami, 4-6 Sep 2026. 180 km via Yamuna Expressway. AC vehicles, no festival surge.',
    type: 'website', locale: 'en_IN', url: 'https://www.trivenicabs.in/janmashtami-mathura-vrindavan-cab', siteName: 'Triveni Cabs',
    images: [{ url: '/images/sightseeing/Mathura_Vrindavan/Krishna_Janmabhoomi.jpg', width: 1200, height: 630, alt: 'Janmashtami Cab to Krishna Janmabhoomi Mathura — Triveni Cabs' }],
  },
  twitter: { card: 'summary_large_image', title: 'Janmashtami Mathura Vrindavan Cab 2026', description: 'Delhi to Mathura Vrindavan for Janmashtami, 4-6 Sep 2026. From ₹3,300.', images: ['/images/sightseeing/Mathura_Vrindavan/Krishna_Janmabhoomi.jpg'], creator: '@trivenicabs' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

export const revalidate = 3600;

export default function JanmashtamiMathuraVrindavanPage() {
  if (!festival) notFound();

  const serviceSchema = { "@context": "https://schema.org", "@type": "Service", "serviceType": "Janmashtami Festival Transport", "name": "Janmashtami Mathura Vrindavan Cab Service", "description": "Cab from Delhi to Mathura and Vrindavan for Krishna Janmashtami 2026. Krishna Janmabhoomi, Banke Bihari Temple, Prem Mandir and ISKCON Vrindavan.", "provider": { "@type": "LocalBusiness", "name": "Triveni Cabs", "telephone": "+91-7668570551", "url": "https://www.trivenicabs.in", "address": { "@type": "PostalAddress", "streetAddress": "366 Dandupura near Tajganj", "addressLocality": "Agra", "postalCode": "282006", "addressCountry": "IN" } }, "areaServed": [{ "@type": "City", "name": "Delhi" }, { "@type": "City", "name": "Noida" }, { "@type": "City", "name": "Gurgaon" }, { "@type": "City", "name": "Mathura" }, { "@type": "City", "name": "Vrindavan" }], "offers": { "@type": "AggregateOffer", "lowPrice": "3300", "highPrice": "10080", "priceCurrency": "INR" } };
  const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" }, { "@type": "ListItem", "position": 2, "name": "Janmashtami Mathura Vrindavan Cab", "item": "https://www.trivenicabs.in/janmashtami-mathura-vrindavan-cab" }] };
  const eventSchema = { "@context": "https://schema.org", "@type": "Event", "name": "Krishna Janmashtami 2026 — Mathura & Vrindavan", "startDate": "2026-09-04", "endDate": "2026-09-06", "eventStatus": "https://schema.org/EventScheduled", "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode", "location": { "@type": "Place", "name": "Shri Krishna Janmabhoomi, Mathura", "address": { "@type": "PostalAddress", "addressLocality": "Mathura", "addressRegion": "Uttar Pradesh", "addressCountry": "IN" } }, "description": "Krishna Janmashtami celebrations in Mathura and Vrindavan, including the midnight abhishek at Krishna Janmabhoomi." };
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": festival.faqs.map(f => ({ "@type": "Question", "name": f.question, "acceptedAnswer": { "@type": "Answer", "text": f.answer } })) };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(eventSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <FestivalTripClient festival={festival} />
    </>
  );
}
