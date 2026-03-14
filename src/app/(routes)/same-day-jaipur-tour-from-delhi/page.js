import { getSameDayTourBySlug } from '@/utilis/sameDayTourData';
import SameDayTourClient from '@/components/tours/SameDayTourClient';

const tour = getSameDayTourBySlug('same-day-jaipur-tour-from-delhi');

export const revalidate = false;

export const metadata = {
  title: 'Same Day Jaipur Tour from Delhi | ₹6,000 AC Cab | 2026',
  description: 'Book same day Jaipur tour from Delhi by car. Visit Amber Fort, Hawa Mahal, City Palace. AC sedan ₹6,000, SUV ₹8,000. Call 7668570551.',
  keywords: 'same day jaipur tour from delhi, delhi to jaipur one day trip, delhi to jaipur cab, jaipur day trip from delhi, pink city tour from delhi',
  authors: [{ name: 'Triveni Cabs' }],
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: { canonical: '/same-day-jaipur-tour-from-delhi' },
  openGraph: {
    title: 'Same Day Jaipur Tour from Delhi | Pink City Day Trip ₹6,000',
    description: 'Delhi to Jaipur day tour. Amber Fort, Hawa Mahal, City Palace. AC sedan ₹6,000. NH48 route.',
    type: 'website', locale: 'en_IN', url: 'https://www.trivenicabs.in/same-day-jaipur-tour-from-delhi', siteName: 'Triveni Cabs',
  },
  twitter: { card: 'summary_large_image', title: 'Same Day Jaipur Tour from Delhi | ₹6,000', description: 'Delhi to Jaipur same day tour. Amber Fort, Hawa Mahal. Book now!' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

export default function Page() {
  const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" }, { "@type": "ListItem", "position": 2, "name": tour.title, "item": `https://www.trivenicabs.in/${tour.slug}` }] };
  const tourSchema = { "@context": "https://schema.org", "@type": "TouristTrip", "name": tour.title, "description": tour.description.split('\n\n')[0], "touristType": "Cultural Tourist", "itinerary": { "@type": "ItemList", "itemListElement": tour.itinerary.map((item, idx) => ({ "@type": "ListItem", "position": idx + 1, "name": `${item.time} - ${item.activity}` })) }, "provider": { "@type": "LocalBusiness", "name": "Triveni Cabs", "telephone": "+91-7668570551", "address": { "@type": "PostalAddress", "streetAddress": "366 Dandupura near Tajganj", "addressLocality": "Agra", "postalCode": "282006", "addressCountry": "IN" } }, "offers": { "@type": "AggregateOffer", "lowPrice": "6000", "highPrice": "15000", "priceCurrency": "INR" } };
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
