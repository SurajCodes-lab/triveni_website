import { getFestivalBySlug } from '@/utilis/festivalData';
import FestivalTripClient from '@/components/festival/FestivalTripClient';

const festival = getFestivalBySlug('summer-hill-station-packages');

export const metadata = {
  title: 'Summer Hill Station Cab Packages 2026 | Escape the Heat | Triveni Cabs',
  description: 'Book summer hill station cab from Delhi to Shimla, Manali, Mussoorie, Nainital. From ₹5,500 sedan. AC vehicles, mountain-experienced drivers. Call 7668570551.',
  keywords: 'summer hill station cab, delhi to shimla cab summer, delhi to manali summer package, hill station cab booking, mussoorie cab summer, nainital cab summer, summer vacation cab',
  authors: [{ name: 'Triveni Cabs' }], creator: 'Triveni Cabs', publisher: 'Triveni Cabs',
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: { canonical: '/summer-hill-station-packages' },
  openGraph: { title: 'Summer Hill Station Packages 2026 | From ₹5,500', description: 'Beat the heat with hill station cab packages. Shimla, Manali, Mussoorie from Delhi.', type: 'website', locale: 'en_IN', url: 'https://www.trivenicabs.in/summer-hill-station-packages', siteName: 'Triveni Cabs' },
  twitter: { card: 'summary_large_image', title: 'Summer Hill Station Cab Packages 2026', description: 'Hill station cab from Delhi. Shimla, Manali, Mussoorie. From ₹5,500.' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

export const revalidate = false;

export default function SummerHillStationPage() {
  const serviceSchema = { "@context": "https://schema.org", "@type": "Service", "serviceType": "Summer Hill Station Transport", "name": "Summer Hill Station Cab Packages", "description": "Summer special cab packages from Delhi to Shimla, Manali, Mussoorie, and Nainital. Mountain-experienced drivers, AC vehicles.", "provider": { "@type": "LocalBusiness", "name": "Triveni Cabs", "telephone": "+91-7668570551", "url": "https://www.trivenicabs.in", "address": { "@type": "PostalAddress", "streetAddress": "366 Dandupura near Tajganj", "addressLocality": "Agra", "postalCode": "282006", "addressCountry": "IN" } }, "areaServed": { "@type": "Country", "name": "India" }, "offers": { "@type": "AggregateOffer", "lowPrice": "5500", "highPrice": "14000", "priceCurrency": "INR" } };
  const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" }, { "@type": "ListItem", "position": 2, "name": "Summer Hill Station Packages", "item": "https://www.trivenicabs.in/summer-hill-station-packages" }] };
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": festival.faqs.map(f => ({ "@type": "Question", "name": f.question, "acceptedAnswer": { "@type": "Answer", "text": f.answer } })) };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <FestivalTripClient festival={festival} />
    </>
  );
}
