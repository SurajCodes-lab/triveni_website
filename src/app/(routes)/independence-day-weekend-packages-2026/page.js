import { notFound } from 'next/navigation';
import { getFestivalBySlug } from '@/utilis/festivalData';
import FestivalTripClient from '@/components/festival/FestivalTripClient';

const festival = getFestivalBySlug('independence-day-weekend-packages-2026');

export const metadata = {
  title: 'Independence Day Weekend Packages 2026 from Delhi',
  description: 'Short getaways for the 15-16 Aug 2026 weekend: Rishikesh, Neemrana, Agra, Corbett. Sedan ₹11/km, Innova ₹18/km, no surge. Call 7668570551.',
  keywords: 'independence day weekend packages 2026, 15 august trip from delhi, long weekend trip delhi august 2026, independence day getaway delhi, delhi to rishikesh 15 august, weekend cab package delhi',
  authors: [{ name: 'Triveni Cabs' }], creator: 'Triveni Cabs', publisher: 'Triveni Cabs',
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: { canonical: '/independence-day-weekend-packages-2026' },
  openGraph: {
    title: 'Independence Day Weekend Packages 2026 | From ₹5,300',
    description: 'Aug 15-16 2026 getaways from Delhi — Rishikesh, Neemrana, Agra, Jim Corbett, Shimla. Private cabs, doorstep pickup.',
    type: 'website', locale: 'en_IN', url: 'https://www.trivenicabs.in/independence-day-weekend-packages-2026', siteName: 'Triveni Cabs',
    images: [{ url: '/images/sightseeing/Delhi/red_fort.jpg', width: 1200, height: 630, alt: 'Independence Day Weekend Trips from Delhi — Triveni Cabs' }],
  },
  twitter: { card: 'summary_large_image', title: 'Independence Day Weekend Packages 2026', description: 'Aug 15-16 2026 getaways from Delhi. Rishikesh, Neemrana, Agra. From ₹5,300.', images: ['/images/sightseeing/Delhi/red_fort.jpg'], creator: '@trivenicabs' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

export const revalidate = 3600;

export default function IndependenceDayWeekendPage() {
  if (!festival) notFound();

  const serviceSchema = { "@context": "https://schema.org", "@type": "Service", "serviceType": "Independence Day Weekend Trip Packages", "name": "Independence Day Weekend Packages 2026 from Delhi", "description": "Private cab packages for the 15-16 August 2026 weekend from Delhi NCR to Rishikesh, Haridwar, Neemrana, Agra, Jim Corbett, Dehradun, Mussoorie, Kasauli and Shimla.", "provider": { "@type": "LocalBusiness", "name": "Triveni Cabs", "telephone": "+91-7668570551", "url": "https://www.trivenicabs.in", "address": { "@type": "PostalAddress", "streetAddress": "366 Dandupura near Tajganj", "addressLocality": "Agra", "postalCode": "282006", "addressCountry": "IN" } }, "areaServed": [{ "@type": "City", "name": "Delhi" }, { "@type": "City", "name": "Rishikesh" }, { "@type": "City", "name": "Haridwar" }, { "@type": "City", "name": "Agra" }, { "@type": "City", "name": "Dehradun" }, { "@type": "City", "name": "Shimla" }], "offers": { "@type": "AggregateOffer", "lowPrice": "5300", "highPrice": "14000", "priceCurrency": "INR" } };
  const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" }, { "@type": "ListItem", "position": 2, "name": "Independence Day Weekend Packages 2026", "item": "https://www.trivenicabs.in/independence-day-weekend-packages-2026" }] };
  const eventSchema = { "@context": "https://schema.org", "@type": "Event", "name": "Independence Day Weekend 2026", "startDate": "2026-08-15", "endDate": "2026-08-16", "eventStatus": "https://schema.org/EventScheduled", "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode", "location": { "@type": "Place", "name": "Delhi NCR", "address": { "@type": "PostalAddress", "addressLocality": "New Delhi", "addressRegion": "Delhi", "addressCountry": "IN" } }, "description": "Independence Day 2026 falls on Saturday 15 August, giving a two-day Aug 15-16 weekend for short getaways from Delhi." };
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
