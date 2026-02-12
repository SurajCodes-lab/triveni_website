import { friendsTripData } from '@/utilis/friendsTripData';
import FriendsTripClient from '@/components/audience/FriendsTripClient';

const data = friendsTripData['goa'];

export const metadata = {
  title: 'Friends Trip to Goa from Delhi | Tempo Traveller in Goa Rs 590/Person | 2026',
  description: 'Book Tempo Traveller for friends trip in Goa. Rs 590/person local transport. Beach hopping, water sports, Dudhsagar, nightlife. 12-17 seater AC. Call 7668570551.',
  keywords: 'friends trip goa, goa group trip from delhi, goa tempo traveller, goa friends package, goa beach trip friends, goa nightlife group trip',
  authors: [{ name: 'Triveni Cabs' }], creator: 'Triveni Cabs', publisher: 'Triveni Cabs',
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: { canonical: '/friends-trip-goa-from-delhi' },
  openGraph: { title: 'Friends Trip to Goa | Local Tempo Traveller Rs 590/Person', description: 'Goa friends trip. Beach hopping, water sports, nightlife. From Rs 590/person local transport.', type: 'website', locale: 'en_IN', url: 'https://www.trivenicabs.in/friends-trip-goa-from-delhi', siteName: 'Triveni Cabs' },
  twitter: { card: 'summary_large_image', title: 'Friends Trip Goa | Rs 590/Person', description: 'Goa group trip. Beaches, water sports, parties. Tempo Traveller.' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

export default function FriendsTripGoaPage() {
  const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" }, { "@type": "ListItem", "position": 2, "name": "Friends Trip to Goa from Delhi", "item": "https://www.trivenicabs.in/friends-trip-goa-from-delhi" }] };
  const tripSchema = { "@context": "https://schema.org", "@type": "TouristTrip", "name": "Friends Trip to Goa from Delhi", "description": data.tagline, "touristType": "Friends Group", "provider": { "@type": "LocalBusiness", "name": "Triveni Cabs", "telephone": "+91-7668570551" }, "offers": { "@type": "AggregateOffer", "lowPrice": "10000", "highPrice": "30000", "priceCurrency": "INR" } };
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": data.faqs.map(faq => ({ "@type": "Question", "name": faq.question, "acceptedAnswer": { "@type": "Answer", "text": faq.answer } })) };

  return (<><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(tripSchema) }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} /><FriendsTripClient data={data} /></>);
}

export const revalidate = 3600;
