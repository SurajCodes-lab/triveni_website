import { getSameDayTourBySlug } from '@/utilis/sameDayTourData';
import SameDayTourClient from '@/components/tours/SameDayTourClient';

const tour = getSameDayTourBySlug('same-day-agra-tour-from-jaipur');

export const revalidate = false;

export const metadata = {
  title: 'Same Day Agra Tour from Jaipur | ₹5,500 AC Cab | 2026',
  description: 'Book same day Agra tour from Jaipur by car. Visit Taj Mahal, Agra Fort, Baby Taj via NH21. AC sedan ₹5,500, SUV ₹7,500. Call 7668570551.',
  keywords: 'same day agra tour from jaipur, jaipur to agra one day trip, jaipur to agra cab, jaipur agra same day tour, taj mahal day trip from jaipur',
  authors: [{ name: 'Triveni Cabs' }],
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: { canonical: '/same-day-agra-tour-from-jaipur' },
  openGraph: {
    title: 'Same Day Agra Tour from Jaipur | Taj Mahal Day Trip ₹5,500',
    description: 'Full day Agra tour from Jaipur. Visit Taj Mahal, Agra Fort, Baby Taj. AC sedan ₹5,500. NH21 via Bharatpur route.',
    type: 'website',
    locale: 'en_IN',
    url: 'https://www.trivenicabs.in/same-day-agra-tour-from-jaipur',
    siteName: 'Triveni Cabs',
  },
  twitter: { card: 'summary_large_image', title: 'Same Day Agra Tour from Jaipur | ₹5,500 AC Cab', description: 'Jaipur to Agra same day tour. Taj Mahal, Agra Fort, Baby Taj. AC sedan ₹5,500. Book now!' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

export default function SameDayAgraTourFromJaipurPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" },
      { "@type": "ListItem", "position": 2, "name": "Same Day Agra Tour from Jaipur", "item": "https://www.trivenicabs.in/same-day-agra-tour-from-jaipur" },
    ],
  };

  const tourSchema = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    "name": "Same Day Agra Tour from Jaipur",
    "description": tour.description.split('\n\n')[0],
    "touristType": "Cultural Tourist",
    "itinerary": {
      "@type": "ItemList",
      "itemListElement": tour.itinerary.map((item, idx) => ({
        "@type": "ListItem", "position": idx + 1, "name": `${item.time} - ${item.activity}`
      })),
    },
    "provider": {
      "@type": "LocalBusiness",
      "name": "Triveni Cabs",
      "telephone": "+91-7668570551",
      "address": { "@type": "PostalAddress", "streetAddress": "366 Dandupura near Tajganj", "addressLocality": "Agra", "postalCode": "282006", "addressCountry": "IN" },
    },
    "offers": { "@type": "AggregateOffer", "lowPrice": "5500", "highPrice": "14000", "priceCurrency": "INR" },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": tour.faqs.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": { "@type": "Answer", "text": item.answer },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(tourSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <SameDayTourClient tour={tour} />
    </>
  );
}
