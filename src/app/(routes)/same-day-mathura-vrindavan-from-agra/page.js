import { getSameDayTourBySlug } from '@/utilis/sameDayTourData';
import SameDayTourClient from '@/components/tours/SameDayTourClient';

const tour = getSameDayTourBySlug('same-day-mathura-vrindavan-from-agra');

export const revalidate = false;

export const metadata = {
  title: 'Same Day Mathura Vrindavan Tour from Agra | ₹2,500 AC Cab | 2026',
  description: 'Book same day Mathura Vrindavan tour from Agra. Krishna Janmabhoomi, Banke Bihari, ISKCON, Prem Mandir. Just 58 km. AC sedan ₹2,500. Call 7668570551.',
  keywords: 'same day mathura vrindavan tour from agra, agra to mathura one day trip, agra to vrindavan cab, krishna tour from agra',
  authors: [{ name: 'Triveni Cabs' }],
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: { canonical: '/same-day-mathura-vrindavan-from-agra' },
  openGraph: {
    title: 'Same Day Mathura Vrindavan Tour from Agra | ₹2,500',
    description: 'Agra to Mathura Vrindavan day trip. Just 58 km. Krishna Janmabhoomi, Banke Bihari Temple. AC sedan ₹2,500.',
    type: 'website', locale: 'en_IN', url: 'https://www.trivenicabs.in/same-day-mathura-vrindavan-from-agra', siteName: 'Triveni Cabs',
  },
  twitter: { card: 'summary_large_image', title: 'Mathura Vrindavan Tour from Agra | ₹2,500', description: 'Agra to Mathura Vrindavan day trip. Book now!' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

export default function Page() {
  const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" }, { "@type": "ListItem", "position": 2, "name": tour.title, "item": `https://www.trivenicabs.in/${tour.slug}` }] };
  const tourSchema = { "@context": "https://schema.org", "@type": "TouristTrip", "name": tour.title, "description": tour.description.split('\n\n')[0], "touristType": "Pilgrim", "itinerary": { "@type": "ItemList", "itemListElement": tour.itinerary.map((item, idx) => ({ "@type": "ListItem", "position": idx + 1, "name": `${item.time} - ${item.activity}` })) }, "provider": { "@type": "LocalBusiness", "name": "Triveni Cabs", "telephone": "+91-7668570551", "address": { "@type": "PostalAddress", "streetAddress": "366 Dandupura near Tajganj", "addressLocality": "Agra", "postalCode": "282006", "addressCountry": "IN" } }, "offers": { "@type": "AggregateOffer", "lowPrice": "2500", "highPrice": "7000", "priceCurrency": "INR" } };
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
