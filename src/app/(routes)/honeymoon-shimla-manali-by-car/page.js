import { honeymoonTripData } from '@/utilis/honeymoonTripData';
import HoneymoonTripClient from '@/components/audience/HoneymoonTripClient';

const data = honeymoonTripData['shimla-manali'];

export const metadata = {
  title: 'Shimla Manali Honeymoon by Car | Romantic Road Trip Rs 14,500 | 2026',
  description: 'Book Shimla Manali honeymoon by car from Delhi. Sedan Rs 14,500, Innova Rs 18,000. Decorated car Rs 2,000 extra. Snow, valleys, romance. Call 7668570551.',
  keywords: 'shimla manali honeymoon by car, honeymoon shimla manali road trip, shimla manali couple trip, romantic trip shimla manali, honeymoon package shimla manali by car',
  authors: [{ name: 'Triveni Cabs' }], creator: 'Triveni Cabs', publisher: 'Triveni Cabs',
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: { canonical: '/honeymoon-shimla-manali-by-car' },
  openGraph: { title: 'Shimla Manali Honeymoon by Car | Rs 14,500', description: 'Romantic Shimla-Manali honeymoon road trip. Snow, valleys, decorated car option.', type: 'website', locale: 'en_IN', url: 'https://www.trivenicabs.in/honeymoon-shimla-manali-by-car', siteName: 'Triveni Cabs' },
  twitter: { card: 'summary_large_image', title: 'Shimla Manali Honeymoon by Car | Rs 14,500', description: 'Snow-kissed romance. Shimla & Manali honeymoon road trip from Delhi.' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

export default function HoneymoonShimlaManaliPage() {
  const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" }, { "@type": "ListItem", "position": 2, "name": "Honeymoon Trips", "item": "https://www.trivenicabs.in/honeymoon-trip-by-car" }, { "@type": "ListItem", "position": 3, "name": "Shimla Manali Honeymoon", "item": "https://www.trivenicabs.in/honeymoon-shimla-manali-by-car" }] };
  const tripSchema = { "@context": "https://schema.org", "@type": "TouristTrip", "name": "Shimla Manali Honeymoon by Car", "description": data.tagline, "touristType": "Honeymoon Couple", "provider": { "@type": "LocalBusiness", "name": "Triveni Cabs", "telephone": "+91-7668570551" }, "offers": { "@type": "AggregateOffer", "lowPrice": "14500", "highPrice": "18000", "priceCurrency": "INR" } };
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": data.faqs.map(faq => ({ "@type": "Question", "name": faq.question, "acceptedAnswer": { "@type": "Answer", "text": faq.answer } })) };

  return (<><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(tripSchema) }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} /><HoneymoonTripClient data={data} /></>);
}

export const revalidate = 3600;
