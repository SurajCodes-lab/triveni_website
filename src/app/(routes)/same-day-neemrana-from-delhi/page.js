import { getSameDayTourBySlug } from '@/utilis/sameDayTourData';
import SameDayTourClient from '@/components/tours/SameDayTourClient';

const tour = getSameDayTourBySlug('same-day-neemrana-from-delhi');

export const metadata = {
  title: 'Same Day Neemrana Fort Tour from Delhi | ₹3,000 AC Cab | 2026',
  description: 'Book same day Neemrana tour from Delhi. Neemrana Fort Palace, zip-lining, stepwell. Just 120 km. AC sedan ₹3,000, SUV ₹4,500. Call 7668570551.',
  keywords: 'same day neemrana tour from delhi, delhi to neemrana one day trip, neemrana fort day trip, neemrana cab from delhi, neemrana zip lining',
  authors: [{ name: 'Triveni Cabs' }],
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: { canonical: '/same-day-neemrana-from-delhi' },
  openGraph: {
    title: 'Same Day Neemrana Fort Tour from Delhi | ₹3,000 AC Cab',
    description: 'Delhi to Neemrana day trip. Fort Palace, zip-lining, stepwell. Just 120 km. AC sedan ₹3,000.',
    type: 'website', locale: 'en_IN', url: 'https://www.trivenicabs.in/same-day-neemrana-from-delhi', siteName: 'Triveni Cabs',
  },
  twitter: { card: 'summary_large_image', title: 'Neemrana Fort Day Trip from Delhi | ₹3,000', description: 'Heritage fort and zip-lining. Book now!' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

export default function Page() {
  const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" }, { "@type": "ListItem", "position": 2, "name": tour.title, "item": `https://www.trivenicabs.in/${tour.slug}` }] };
  const tourSchema = { "@context": "https://schema.org", "@type": "TouristTrip", "name": tour.title, "description": tour.description.split('\n\n')[0], "touristType": "Leisure Tourist", "itinerary": { "@type": "ItemList", "itemListElement": tour.itinerary.map((item, idx) => ({ "@type": "ListItem", "position": idx + 1, "name": `${item.time} - ${item.activity}` })) }, "provider": { "@type": "LocalBusiness", "name": "Triveni Cabs", "telephone": "+91-7668570551", "address": { "@type": "PostalAddress", "streetAddress": "366 Dandupura near Tajganj", "addressLocality": "Agra", "postalCode": "282006", "addressCountry": "IN" } }, "offers": { "@type": "AggregateOffer", "lowPrice": "3000", "highPrice": "8000", "priceCurrency": "INR" } };
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
