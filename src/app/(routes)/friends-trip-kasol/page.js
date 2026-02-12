import { friendsTripData } from '@/utilis/friendsTripData';
import FriendsTripClient from '@/components/audience/FriendsTripClient';

const data = friendsTripData['kasol'];

export const metadata = {
  title: 'Friends Trip to Kasol by Tempo Traveller | Rs 1,175/Person | 2026',
  description: 'Book Tempo Traveller for friends trip to Kasol from Delhi. Rs 1,175/person. Kheerganga trek, riverside camping, Manikaran. 12-17 seater AC. Call 7668570551.',
  keywords: 'friends trip kasol, kasol group trip, kasol tempo traveller, delhi to kasol friends, kheerganga trek group, friends trip package kasol parvati valley',
  authors: [{ name: 'Triveni Cabs' }], creator: 'Triveni Cabs', publisher: 'Triveni Cabs',
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: { canonical: '/friends-trip-kasol' },
  openGraph: { title: 'Friends Trip to Kasol | Tempo Traveller Rs 1,175/Person', description: 'Kasol friends trip. Kheerganga trek, riverside camping. From Rs 1,175/person.', type: 'website', locale: 'en_IN', url: 'https://www.trivenicabs.in/friends-trip-kasol', siteName: 'Triveni Cabs' },
  twitter: { card: 'summary_large_image', title: 'Friends Trip Kasol | Rs 1,175/Person', description: 'Kasol group trip by Tempo Traveller. Trekking, camping, cafes.' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

export default function FriendsTripKasolPage() {
  const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" }, { "@type": "ListItem", "position": 2, "name": "Friends Trip to Kasol", "item": "https://www.trivenicabs.in/friends-trip-kasol" }] };
  const tripSchema = { "@context": "https://schema.org", "@type": "TouristTrip", "name": "Friends Trip to Kasol by Tempo Traveller", "description": data.tagline, "touristType": "Friends Group", "provider": { "@type": "LocalBusiness", "name": "Triveni Cabs", "telephone": "+91-7668570551" }, "offers": { "@type": "AggregateOffer", "lowPrice": "4000", "highPrice": "10000", "priceCurrency": "INR" } };
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": data.faqs.map(faq => ({ "@type": "Question", "name": faq.question, "acceptedAnswer": { "@type": "Answer", "text": faq.answer } })) };

  return (<><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(tripSchema) }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} /><FriendsTripClient data={data} /></>);
}

export const revalidate = 3600;
