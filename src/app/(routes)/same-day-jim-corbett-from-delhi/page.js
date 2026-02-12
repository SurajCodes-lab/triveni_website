import { getSameDayTourBySlug } from '@/utilis/sameDayTourData';
import SameDayTourClient from '@/components/tours/SameDayTourClient';

const tour = getSameDayTourBySlug('same-day-jim-corbett-from-delhi');

export const metadata = {
  title: 'Same Day Jim Corbett Tour from Delhi | ₹6,500 AC Cab | 2026',
  description: 'Book same day Jim Corbett National Park tour from Delhi. Wildlife safari, Corbett Museum, Garjia Temple. AC sedan ₹6,500, SUV ₹8,500. Call 7668570551.',
  keywords: 'same day jim corbett tour from delhi, delhi to jim corbett one day trip, jim corbett safari day trip, corbett national park cab',
  authors: [{ name: 'Triveni Cabs' }],
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: { canonical: '/same-day-jim-corbett-from-delhi' },
  openGraph: {
    title: 'Same Day Jim Corbett Tour from Delhi | Wildlife Safari ₹6,500',
    description: 'Delhi to Jim Corbett day trip. Wildlife safari, Corbett Museum. AC sedan ₹6,500.',
    type: 'website', locale: 'en_IN', url: 'https://www.trivenicabs.in/same-day-jim-corbett-from-delhi', siteName: 'Triveni Cabs',
  },
  twitter: { card: 'summary_large_image', title: 'Jim Corbett Day Trip from Delhi | ₹6,500', description: 'Wildlife safari day trip from Delhi. Book now!' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

export default function Page() {
  const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" }, { "@type": "ListItem", "position": 2, "name": tour.title, "item": `https://www.trivenicabs.in/${tour.slug}` }] };
  const tourSchema = { "@context": "https://schema.org", "@type": "TouristTrip", "name": tour.title, "description": tour.description.split('\n\n')[0], "touristType": "Nature Tourist", "itinerary": { "@type": "ItemList", "itemListElement": tour.itinerary.map((item, idx) => ({ "@type": "ListItem", "position": idx + 1, "name": `${item.time} - ${item.activity}` })) }, "provider": { "@type": "LocalBusiness", "name": "Triveni Cabs", "telephone": "+91-7668570551", "address": { "@type": "PostalAddress", "streetAddress": "366 Dandupura near Tajganj", "addressLocality": "Agra", "postalCode": "282006", "addressCountry": "IN" } }, "offers": { "@type": "AggregateOffer", "lowPrice": "6500", "highPrice": "16000", "priceCurrency": "INR" } };
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": tour.faqs.map(item => ({ "@type": "Question", "name": item.question, "acceptedAnswer": { "@type": "Answer", "text": item.answer } })) };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(tourSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <SameDayTourClient tour={tour} />
    </>
  );
}
