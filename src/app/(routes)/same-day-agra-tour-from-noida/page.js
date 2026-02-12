import { getSameDayTourBySlug } from '@/utilis/sameDayTourData';
import SameDayTourClient from '@/components/tours/SameDayTourClient';

const tour = getSameDayTourBySlug('same-day-agra-tour-from-noida');

export const metadata = {
  title: 'Same Day Agra Tour from Noida | ₹4,500 AC Cab | 2026',
  description: 'Book same day Agra tour from Noida by car. Taj Mahal, Agra Fort via Yamuna Expressway. AC sedan ₹4,500, SUV ₹6,500. Call 7668570551.',
  keywords: 'same day agra tour from noida, noida to agra one day trip, noida to agra cab, taj mahal day trip from noida, noida to agra taxi',
  authors: [{ name: 'Triveni Cabs' }],
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: { canonical: '/same-day-agra-tour-from-noida' },
  openGraph: {
    title: 'Same Day Agra Tour from Noida | Taj Mahal Day Trip ₹4,500',
    description: 'Agra day tour from Noida via Yamuna Expressway. Visit Taj Mahal, Agra Fort. AC sedan ₹4,500.',
    type: 'website', locale: 'en_IN', url: 'https://www.trivenicabs.in/same-day-agra-tour-from-noida', siteName: 'Triveni Cabs',
  },
  twitter: { card: 'summary_large_image', title: 'Same Day Agra Tour from Noida | ₹4,500', description: 'Noida to Agra same day tour. Yamuna Expressway. Book now!' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

export default function Page() {
  const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" }, { "@type": "ListItem", "position": 2, "name": tour.title, "item": `https://www.trivenicabs.in/${tour.slug}` }] };
  const tourSchema = { "@context": "https://schema.org", "@type": "TouristTrip", "name": tour.title, "description": tour.description.split('\n\n')[0], "touristType": "Cultural Tourist", "itinerary": { "@type": "ItemList", "itemListElement": tour.itinerary.map((item, idx) => ({ "@type": "ListItem", "position": idx + 1, "name": `${item.time} - ${item.activity}` })) }, "provider": { "@type": "LocalBusiness", "name": "Triveni Cabs", "telephone": "+91-7668570551", "address": { "@type": "PostalAddress", "streetAddress": "366 Dandupura near Tajganj", "addressLocality": "Agra", "postalCode": "282006", "addressCountry": "IN" } }, "offers": { "@type": "AggregateOffer", "lowPrice": "4500", "highPrice": "12000", "priceCurrency": "INR" } };
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
