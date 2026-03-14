import { getSameDayTourBySlug } from '@/utilis/sameDayTourData';
import SameDayTourClient from '@/components/tours/SameDayTourClient';

const tour = getSameDayTourBySlug('same-day-kurukshetra-from-delhi');

export const revalidate = false;

export const metadata = {
  title: 'Same Day Kurukshetra Tour from Delhi | ₹4,000 AC Cab | 2026',
  description: 'Book same day Kurukshetra tour from Delhi. Brahma Sarovar, Jyotisar (Bhagavad Gita site), Bhadrakali Temple. AC sedan ₹4,000. Call 7668570551.',
  keywords: 'same day kurukshetra tour from delhi, delhi to kurukshetra one day trip, kurukshetra mahabharata tour, jyotisar bhagavad gita tour',
  authors: [{ name: 'Triveni Cabs' }],
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: { canonical: '/same-day-kurukshetra-from-delhi' },
  openGraph: {
    title: 'Same Day Kurukshetra Tour from Delhi | Mahabharata Day Trip ₹4,000',
    description: 'Delhi to Kurukshetra day trip. Brahma Sarovar, Jyotisar, Bhadrakali Temple. AC sedan ₹4,000.',
    type: 'website', locale: 'en_IN', url: 'https://www.trivenicabs.in/same-day-kurukshetra-from-delhi', siteName: 'Triveni Cabs',
  },
  twitter: { card: 'summary_large_image', title: 'Kurukshetra Day Trip from Delhi | ₹4,000', description: 'Walk the land of Mahabharata. Book now!' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

export default function Page() {
  const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" }, { "@type": "ListItem", "position": 2, "name": tour.title, "item": `https://www.trivenicabs.in/${tour.slug}` }] };
  const tourSchema = { "@context": "https://schema.org", "@type": "TouristTrip", "name": tour.title, "description": tour.description.split('\n\n')[0], "touristType": "Pilgrim", "itinerary": { "@type": "ItemList", "itemListElement": tour.itinerary.map((item, idx) => ({ "@type": "ListItem", "position": idx + 1, "name": `${item.time} - ${item.activity}` })) }, "provider": { "@type": "LocalBusiness", "name": "Triveni Cabs", "telephone": "+91-7668570551", "address": { "@type": "PostalAddress", "streetAddress": "366 Dandupura near Tajganj", "addressLocality": "Agra", "postalCode": "282006", "addressCountry": "IN" } }, "offers": { "@type": "AggregateOffer", "lowPrice": "4000", "highPrice": "10000", "priceCurrency": "INR" } };
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
