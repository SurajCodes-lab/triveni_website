import { notFound } from 'next/navigation';
import { getFestivalBySlug } from '@/utilis/festivalData';
import FestivalTripClient from '@/components/festival/FestivalTripClient';

const festival = getFestivalBySlug('ganesh-chaturthi-transport');

export const metadata = {
  title: 'Ganesh Chaturthi Transport 2026 | Delhi NCR Cab',
  description: 'Ganesh Chaturthi 12-14 Sep 2026 transport: pandal-hopping cabs, visarjan Tempo Travellers, murti transport. Sedan ₹11/km. Call 7668570551.',
  keywords: 'ganesh chaturthi transport, ganpati visarjan tempo traveller delhi, pandal hopping cab delhi, ganesh chaturthi 2026 cab, murti transport delhi, ganpati bus booking ncr',
  authors: [{ name: 'Triveni Cabs' }], creator: 'Triveni Cabs', publisher: 'Triveni Cabs',
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: { canonical: '/ganesh-chaturthi-transport' },
  openGraph: {
    title: 'Ganesh Chaturthi Transport 2026 | From ₹3,300',
    description: 'Sep 12-14 2026. Pandal-hopping cabs, visarjan group transport and murti carriage across Delhi NCR. No festival surge.',
    type: 'website', locale: 'en_IN', url: 'https://www.trivenicabs.in/ganesh-chaturthi-transport', siteName: 'Triveni Cabs',
    images: [{ url: '/images/sightseeing/Delhi/Akshardham_Temple.jpg', width: 1200, height: 630, alt: 'Ganesh Chaturthi Transport Delhi NCR — Triveni Cabs' }],
  },
  twitter: { card: 'summary_large_image', title: 'Ganesh Chaturthi Transport 2026', description: 'Sep 12-14 2026. Pandal-hopping, visarjan and murti transport in Delhi NCR.', images: ['/images/sightseeing/Delhi/Akshardham_Temple.jpg'], creator: '@trivenicabs' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

export const revalidate = 3600;

export default function GaneshChaturthiTransportPage() {
  if (!festival) notFound();

  const serviceSchema = { "@context": "https://schema.org", "@type": "Service", "serviceType": "Ganesh Chaturthi Festival Transport", "name": "Ganesh Chaturthi Transport", "description": "Ganesh Chaturthi 2026 transport across Delhi NCR: pandal-hopping cabs with driver waiting, Tempo Traveller and bus group transport for visarjan processions, and murti transport from idol markets.", "provider": { "@type": "LocalBusiness", "name": "Triveni Cabs", "telephone": "+91-7668570551", "url": "https://www.trivenicabs.in", "address": { "@type": "PostalAddress", "streetAddress": "366 Dandupura near Tajganj", "addressLocality": "Agra", "postalCode": "282006", "addressCountry": "IN" } }, "areaServed": [{ "@type": "City", "name": "Delhi" }, { "@type": "City", "name": "Noida" }, { "@type": "City", "name": "Gurgaon" }, { "@type": "City", "name": "Faridabad" }, { "@type": "City", "name": "Ghaziabad" }], "offers": { "@type": "AggregateOffer", "lowPrice": "3300", "highPrice": "12000", "priceCurrency": "INR" } };
  const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" }, { "@type": "ListItem", "position": 2, "name": "Ganesh Chaturthi Transport", "item": "https://www.trivenicabs.in/ganesh-chaturthi-transport" }] };
  const eventSchema = { "@context": "https://schema.org", "@type": "Event", "name": "Ganesh Chaturthi 2026 — Delhi NCR", "startDate": "2026-09-12", "endDate": "2026-09-14", "eventStatus": "https://schema.org/EventScheduled", "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode", "location": { "@type": "Place", "name": "Delhi NCR", "address": { "@type": "PostalAddress", "addressLocality": "New Delhi", "addressRegion": "Delhi", "addressCountry": "IN" } }, "description": "Ganesh Chaturthi 2026 falls on Monday 14 September, creating a Sep 12-14 long weekend. Delhi NCR pandals and visarjan processions." };
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
