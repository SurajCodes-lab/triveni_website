import { friendsTripData } from '@/utilis/friendsTripData';
import FriendsTripClient from '@/components/audience/FriendsTripClient';

const data = friendsTripData['manali'];

export const metadata = {
  title: 'Friends Trip to Manali by Tempo Traveller | Rs 1,295/Person | 2026',
  description: 'Book Tempo Traveller for friends trip to Manali from Delhi. Rs 1,295/person. Paragliding, snow, Old Manali nightlife. 12-17 seater AC. Call 7668570551.',
  keywords: 'friends trip manali, manali group trip, manali tempo traveller, delhi to manali friends, manali snow trip friends, friends trip package manali',
  authors: [{ name: 'Triveni Cabs' }], creator: 'Triveni Cabs', publisher: 'Triveni Cabs',
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: { canonical: '/friends-trip-manali' },
  openGraph: { title: 'Friends Trip to Manali | Tempo Traveller Rs 1,295/Person', description: 'Manali friends trip. Paragliding, snow, Solang Valley. From Rs 1,295/person.', type: 'website', locale: 'en_IN', url: 'https://www.trivenicabs.in/friends-trip-manali', siteName: 'Triveni Cabs' },
  twitter: { card: 'summary_large_image', title: 'Friends Trip Manali | Rs 1,295/Person', description: 'Manali group trip by Tempo Traveller. Snow, paragliding, adventure.' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

export default function FriendsTripManaliPage() {
  const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" }, { "@type": "ListItem", "position": 2, "name": "Friends Trip to Manali", "item": "https://www.trivenicabs.in/friends-trip-manali" }] };
  const tripSchema = { "@context": "https://schema.org", "@type": "TouristTrip", "name": "Friends Trip to Manali by Tempo Traveller", "description": data.tagline, "touristType": "Friends Group", "provider": { "@type": "LocalBusiness", "name": "Triveni Cabs", "telephone": "+91-7668570551" }, "offers": { "@type": "AggregateOffer", "lowPrice": "6000", "highPrice": "15000", "priceCurrency": "INR" } };
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": data.faqs.map(faq => ({ "@type": "Question", "name": faq.question, "acceptedAnswer": { "@type": "Answer", "text": faq.answer } })) };

  return (<><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(tripSchema) }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} /><FriendsTripClient data={data} /></>);
}

export const revalidate = false;
