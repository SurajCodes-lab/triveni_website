import { getFestivalBySlug } from '@/utilis/festivalData';
import FestivalTripClient from '@/components/festival/FestivalTripClient';

const festival = getFestivalBySlug('new-year-road-trip-packages');

export const metadata = {
  title: 'New Year 2027 Road Trip Packages | Celebrate on the Road | Triveni Cabs',
  description: 'Book New Year road trip from Delhi to Jaipur, Rishikesh, Jim Corbett, Udaipur. From ₹5,000 sedan. Celebrate NYE at exciting destinations. Call 7668570551.',
  keywords: 'new year road trip, new year cab delhi, new year 2027 trip, delhi to jaipur new year, delhi to rishikesh new year, new year eve cab, nye road trip package',
  authors: [{ name: 'Triveni Cabs' }], creator: 'Triveni Cabs', publisher: 'Triveni Cabs',
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: { canonical: '/new-year-road-trip-packages' },
  openGraph: { title: 'New Year Road Trip 2027 | From ₹5,000', description: 'New Year road trip packages from Delhi. Jaipur, Rishikesh, Jim Corbett. Celebrate NYE!', type: 'website', locale: 'en_IN', url: 'https://www.trivenicabs.in/new-year-road-trip-packages', siteName: 'Triveni Cabs' },
  twitter: { card: 'summary_large_image', title: 'New Year Road Trip 2027 | Triveni Cabs', description: 'NYE road trip packages from Delhi. Multiple destinations. From ₹5,000.' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

export const revalidate = 3600;

export default function NewYearRoadTripPage() {
  const serviceSchema = { "@context": "https://schema.org", "@type": "Service", "serviceType": "New Year Road Trip Transport", "name": "New Year Road Trip Packages from Delhi", "description": "New Year road trip packages from Delhi to Jaipur, Rishikesh, Jim Corbett, and more. Celebrate NYE at exciting destinations.", "provider": { "@type": "LocalBusiness", "name": "Triveni Cabs", "telephone": "+91-7668570551", "url": "https://www.trivenicabs.in", "address": { "@type": "PostalAddress", "streetAddress": "366 Dandupura near Tajganj", "addressLocality": "Agra", "postalCode": "282006", "addressCountry": "IN" } }, "areaServed": { "@type": "Country", "name": "India" }, "offers": { "@type": "AggregateOffer", "lowPrice": "5000", "highPrice": "13000", "priceCurrency": "INR" } };
  const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" }, { "@type": "ListItem", "position": 2, "name": "New Year Road Trip Packages", "item": "https://www.trivenicabs.in/new-year-road-trip-packages" }] };
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
