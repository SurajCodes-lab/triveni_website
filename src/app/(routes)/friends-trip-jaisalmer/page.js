import { friendsTripData } from '@/utilis/friendsTripData';
import FriendsTripClient from '@/components/audience/FriendsTripClient';

const data = friendsTripData['jaisalmer'];

export const metadata = {
  title: 'Friends Trip to Jaisalmer by Tempo Traveller | Rs 1,765/Person | 2026',
  description: 'Book Tempo Traveller for friends trip to Jaisalmer from Delhi. Rs 1,765/person. Desert safari, dune bashing, camping under stars. 12-17 seater AC. Call 7668570551.',
  keywords: 'friends trip jaisalmer, jaisalmer group trip, jaisalmer tempo traveller, delhi to jaisalmer friends, desert safari friends, sam sand dunes group trip',
  authors: [{ name: 'Triveni Cabs' }], creator: 'Triveni Cabs', publisher: 'Triveni Cabs',
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: { canonical: '/friends-trip-jaisalmer' },
  openGraph: { title: 'Friends Trip to Jaisalmer | Tempo Traveller Rs 1,765/Person', description: 'Jaisalmer friends trip. Desert safari, dune bashing, starry nights. From Rs 1,765/person.', type: 'website', locale: 'en_IN', url: 'https://www.trivenicabs.in/friends-trip-jaisalmer', siteName: 'Triveni Cabs' },
  twitter: { card: 'summary_large_image', title: 'Friends Trip Jaisalmer | Rs 1,765/Person', description: 'Jaisalmer group trip by Tempo Traveller. Desert camping, camel safari.' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

export default function FriendsTripJaisalmerPage() {
  const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" }, { "@type": "ListItem", "position": 2, "name": "Friends Trip to Jaisalmer", "item": "https://www.trivenicabs.in/friends-trip-jaisalmer" }] };
  const tripSchema = { "@context": "https://schema.org", "@type": "TouristTrip", "name": "Friends Trip to Jaisalmer by Tempo Traveller", "description": data.tagline, "touristType": "Friends Group", "provider": { "@type": "LocalBusiness", "name": "Triveni Cabs", "telephone": "+91-7668570551" }, "offers": { "@type": "AggregateOffer", "lowPrice": "7000", "highPrice": "18000", "priceCurrency": "INR" } };
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": data.faqs.map(faq => ({ "@type": "Question", "name": faq.question, "acceptedAnswer": { "@type": "Answer", "text": faq.answer } })) };

  return (<><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(tripSchema) }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} /><FriendsTripClient data={data} /></>);
}

export const revalidate = false;
