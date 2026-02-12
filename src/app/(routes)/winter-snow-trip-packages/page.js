import { getFestivalBySlug } from '@/utilis/festivalData';
import FestivalTripClient from '@/components/festival/FestivalTripClient';

const festival = getFestivalBySlug('winter-snow-trip-packages');

export const metadata = {
  title: 'Winter Snow Trip Cab Packages 2026 | Snowfall Destinations | Triveni Cabs',
  description: 'Book winter snow trip cab from Delhi to Shimla, Manali, Auli, Chopta. From ₹6,000 sedan. Snow chains, experienced mountain drivers. Call 7668570551.',
  keywords: 'winter snow trip cab, delhi to shimla snow cab, delhi to manali winter, snow trip packages, auli skiing cab, snowfall destination cab, winter vacation cab delhi',
  authors: [{ name: 'Triveni Cabs' }], creator: 'Triveni Cabs', publisher: 'Triveni Cabs',
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: { canonical: '/winter-snow-trip-packages' },
  openGraph: { title: 'Winter Snow Trip Packages 2026 | From ₹6,000', description: 'Experience snowfall in Himalayas. Cab from Delhi to snow destinations. Winter-ready vehicles.', type: 'website', locale: 'en_IN', url: 'https://www.trivenicabs.in/winter-snow-trip-packages', siteName: 'Triveni Cabs' },
  twitter: { card: 'summary_large_image', title: 'Winter Snow Trip Cab 2026', description: 'Snow trip cab from Delhi. Shimla, Manali, Auli. From ₹6,000.' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

export const revalidate = 3600;

export default function WinterSnowTripPage() {
  const serviceSchema = { "@context": "https://schema.org", "@type": "Service", "serviceType": "Winter Snow Trip Transport", "name": "Winter Snow Trip Cab Packages", "description": "Winter snow trip packages from Delhi to Shimla, Manali, Auli, and Chopta. Winter-ready vehicles with snow chains.", "provider": { "@type": "LocalBusiness", "name": "Triveni Cabs", "telephone": "+91-7668570551", "url": "https://www.trivenicabs.in", "address": { "@type": "PostalAddress", "streetAddress": "366 Dandupura near Tajganj", "addressLocality": "Agra", "postalCode": "282006", "addressCountry": "IN" } }, "areaServed": { "@type": "Country", "name": "India" }, "offers": { "@type": "AggregateOffer", "lowPrice": "6000", "highPrice": "15000", "priceCurrency": "INR" } };
  const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" }, { "@type": "ListItem", "position": 2, "name": "Winter Snow Trip Packages", "item": "https://www.trivenicabs.in/winter-snow-trip-packages" }] };
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
