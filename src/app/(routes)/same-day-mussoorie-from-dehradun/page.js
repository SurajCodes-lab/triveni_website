import { getSameDayTourBySlug } from '@/utilis/sameDayTourData';
import SameDayTourClient from '@/components/tours/SameDayTourClient';

const tour = getSameDayTourBySlug('same-day-mussoorie-from-dehradun');

export const metadata = {
  title: 'Same Day Mussoorie Tour from Dehradun | ₹2,000 AC Cab | 2026',
  description: 'Book same day Mussoorie tour from Dehradun. Kempty Falls, Gun Hill, Mall Road, Lal Tibba. Just 35 km. AC sedan ₹2,000. Call 7668570551.',
  keywords: 'same day mussoorie tour from dehradun, dehradun to mussoorie one day trip, dehradun to mussoorie cab, mussoorie day trip',
  authors: [{ name: 'Triveni Cabs' }],
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: { canonical: '/same-day-mussoorie-from-dehradun' },
  openGraph: {
    title: 'Same Day Mussoorie Tour from Dehradun | ₹2,000 AC Cab',
    description: 'Dehradun to Mussoorie day trip. Kempty Falls, Gun Hill, Mall Road. Just 35 km. AC sedan ₹2,000.',
    type: 'website', locale: 'en_IN', url: 'https://www.trivenicabs.in/same-day-mussoorie-from-dehradun', siteName: 'Triveni Cabs',
  },
  twitter: { card: 'summary_large_image', title: 'Mussoorie Day Trip from Dehradun | ₹2,000', description: 'Queen of Hills just 35 km away. Book now!' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

export default function Page() {
  const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" }, { "@type": "ListItem", "position": 2, "name": tour.title, "item": `https://www.trivenicabs.in/${tour.slug}` }] };
  const tourSchema = { "@context": "https://schema.org", "@type": "TouristTrip", "name": tour.title, "description": tour.description.split('\n\n')[0], "touristType": "Leisure Tourist", "itinerary": { "@type": "ItemList", "itemListElement": tour.itinerary.map((item, idx) => ({ "@type": "ListItem", "position": idx + 1, "name": `${item.time} - ${item.activity}` })) }, "provider": { "@type": "LocalBusiness", "name": "Triveni Cabs", "telephone": "+91-7668570551", "address": { "@type": "PostalAddress", "streetAddress": "366 Dandupura near Tajganj", "addressLocality": "Agra", "postalCode": "282006", "addressCountry": "IN" } }, "offers": { "@type": "AggregateOffer", "lowPrice": "2000", "highPrice": "6000", "priceCurrency": "INR" } };
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
