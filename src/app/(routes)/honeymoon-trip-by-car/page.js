import { honeymoonTripData } from '@/utilis/honeymoonTripData';
import HoneymoonTripClient from '@/components/audience/HoneymoonTripClient';

const data = honeymoonTripData['hub'];

export const metadata = {
  title: 'Honeymoon Trip by Car from Delhi | Decorated Car Rs 2,000 | 2026',
  description: 'Book honeymoon road trip from Delhi by private car. Shimla, Manali, Kashmir, Udaipur, Mussoorie. Decorated car option. Sedan from Rs 4,500. Call 7668570551.',
  keywords: 'honeymoon trip by car, honeymoon road trip from delhi, romantic car trip, honeymoon package by car, decorated car honeymoon',
  authors: [{ name: 'Triveni Cabs' }], creator: 'Triveni Cabs', publisher: 'Triveni Cabs',
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: { canonical: '/honeymoon-trip-by-car' },
  openGraph: { title: 'Honeymoon Trip by Car from Delhi | Decorated Car Available', description: 'Romantic honeymoon road trips. Shimla, Manali, Kashmir, Udaipur. Private sedan, decorated car option.', type: 'website', locale: 'en_IN', url: 'https://www.trivenicabs.in/honeymoon-trip-by-car', siteName: 'Triveni Cabs' },
  twitter: { card: 'summary_large_image', title: 'Honeymoon Trip by Car from Delhi', description: 'Romantic honeymoon road trips to top Indian destinations. Decorated car available.' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

export default function HoneymoonHubPage() {
  const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" }, { "@type": "ListItem", "position": 2, "name": "Honeymoon Trip by Car", "item": "https://www.trivenicabs.in/honeymoon-trip-by-car" }] };
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": data.faqs.map(faq => ({ "@type": "Question", "name": faq.question, "acceptedAnswer": { "@type": "Answer", "text": faq.answer } })) };

  return (<><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} /><HoneymoonTripClient data={data} /></>);
}

export const revalidate = false;
