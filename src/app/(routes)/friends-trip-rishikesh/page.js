import { friendsTripData } from '@/utilis/friendsTripData';
import FriendsTripClient from '@/components/audience/FriendsTripClient';

const data = friendsTripData['rishikesh'];

export const metadata = {
  title: 'Friends Trip to Rishikesh by Tempo Traveller | Rs 920/Person | 2026',
  description: 'Book Tempo Traveller for friends trip to Rishikesh from Delhi. Rs 920/person. Rafting, bungee, camping, bonfire. 12-17 seater AC. Call 7668570551.',
  keywords: 'friends trip rishikesh, rishikesh group trip, rishikesh tempo traveller, delhi to rishikesh friends, rishikesh rafting group, friends trip package rishikesh',
  authors: [{ name: 'Triveni Cabs' }], creator: 'Triveni Cabs', publisher: 'Triveni Cabs',
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: { canonical: '/friends-trip-rishikesh' },
  openGraph: { title: 'Friends Trip to Rishikesh | Tempo Traveller Rs 920/Person', description: 'Rishikesh friends trip. Rafting, bungee, camping, bonfire. From Rs 920/person.', type: 'website', locale: 'en_IN', url: 'https://www.trivenicabs.in/friends-trip-rishikesh', siteName: 'Triveni Cabs' },
  twitter: { card: 'summary_large_image', title: 'Friends Trip Rishikesh | Rs 920/Person', description: 'Rishikesh group trip by Tempo Traveller. Rafting, camping, bonfire.' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

export default function FriendsTripRishikeshPage() {
  const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" }, { "@type": "ListItem", "position": 2, "name": "Friends Trip to Rishikesh", "item": "https://www.trivenicabs.in/friends-trip-rishikesh" }] };
  const tripSchema = { "@context": "https://schema.org", "@type": "TouristTrip", "name": "Friends Trip to Rishikesh by Tempo Traveller", "description": data.tagline, "touristType": "Friends Group", "provider": { "@type": "LocalBusiness", "name": "Triveni Cabs", "telephone": "+91-7668570551" }, "offers": { "@type": "AggregateOffer", "lowPrice": "3500", "highPrice": "8500", "priceCurrency": "INR" } };
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": data.faqs.map(faq => ({ "@type": "Question", "name": faq.question, "acceptedAnswer": { "@type": "Answer", "text": faq.answer } })) };

  return (<><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(tripSchema) }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} /><FriendsTripClient data={data} /></>);
}

export const revalidate = 3600;
