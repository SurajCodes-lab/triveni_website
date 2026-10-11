import { friendsTripData } from '@/utilis/friendsTripData';
import FriendsTripClient from '@/components/audience/FriendsTripClient';
import QuickAnswer from '@/components/seo/QuickAnswer';
import { tightenTitle } from '@/lib/seo/serp-ctr';
import SiblingPages from '@/components/seo/SiblingPages';

const data = friendsTripData['bachelor'];

export const metadata = {
  title: tightenTitle('Bachelor Trip North India by Car | Rs 815/Person | 2026'),
  description: 'Book Tempo Traveller for bachelor trip in North India. Rs 815/person. Rishikesh, Manali, Kasol, Jaisalmer. Rafting, bungee, camping. 17-27 seater.',
  keywords: 'bachelor trip north india, bachelor party trip, bachelor trip rishikesh, bachelor trip manali, bachelorette trip india, pre wedding trip tempo traveller',
  authors: [{ name: 'Triveni Cabs™' }], creator: 'Triveni Cabs™', publisher: 'Triveni Cabs™',
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: { canonical: '/bachelor-trip-north-india' },
  openGraph: { title: 'Bachelor Trip North India | Tempo Traveller Rs 815/Person', description: 'Bachelor trip packages. Rishikesh, Manali, Kasol, Jaisalmer. From Rs 815/person.', type: 'website', locale: 'en_IN', url: 'https://www.trivenicabs.in/bachelor-trip-north-india', siteName: 'Triveni Cabs™' },
  twitter: { card: 'summary_large_image', title: 'Bachelor Trip North India | Rs 815/Person', description: 'Bachelor and bachelorette trip packages by Tempo Traveller.' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

export default function BachelorTripNorthIndiaPage() {
  const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" }, { "@type": "ListItem", "position": 2, "name": "Bachelor Trip North India", "item": "https://www.trivenicabs.in/bachelor-trip-north-india" }] };
  const tripSchema = { "@context": "https://schema.org", "@type": "TouristTrip", "name": "Bachelor Trip North India by Tempo Traveller", "description": data.tagline, "touristType": "Bachelor Group", "provider": { "@type": "LocalBusiness", "name": "Triveni Cabs", "telephone": "+91-7668570551" }, "offers": { "@type": "AggregateOffer", "lowPrice": "5000", "highPrice": "20000", "priceCurrency": "INR" } };
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": data.faqs.map(faq => ({ "@type": "Question", "name": faq.question, "acceptedAnswer": { "@type": "Answer", "text": faq.answer } })) };

  return (<><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(tripSchema) }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} /><div className="bg-slate-950 px-4 pt-5 pb-1"> <QuickAnswer tone="dark" className="mx-auto max-w-4xl" question={'How much does a bachelor trip from Delhi cost?'} answer={'A bachelor trip across North India runs 3-5 days, planned for a group of 10-20 people. Triveni Cabs™ prices it at Rs 16,000 for a 17-seater Tempo Traveller and Rs 22,000 for a mini bus, which works out to about Rs 940 per person in the 17-seater. The best season to go is September to June. Base price for Rishikesh. Varies by destination.'} facts={[ { label: 'Distance', value: 'Varies by destination' }, { label: 'Duration', value: '3-5 Days' }, { label: 'Group size', value: '10-20 people' }, { label: 'Per person (17-seater)', value: 'Rs 940' }, ]} /> </div><FriendsTripClient data={data} /><SiblingPages prefix="/friends-trip-" current="/bachelor-trip-north-india" title="Friends&rsquo; trips from Delhi, by destination" intro="The same trip planned for the hill towns and desert forts groups ask for." /></>);
}

export const revalidate = 3600;
