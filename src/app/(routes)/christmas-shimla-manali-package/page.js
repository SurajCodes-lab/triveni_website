import { getFestivalBySlug } from '@/utilis/festivalData';
import FestivalTripClient from '@/components/festival/FestivalTripClient';

const festival = getFestivalBySlug('christmas-shimla-manali-package');

export const metadata = {
  title: 'Christmas 2026 Shimla Manali Cab Package | White Christmas | Triveni Cabs',
  description: 'Book Christmas cab package Delhi to Shimla and Manali 2026. From Rs 10,000 sedan. White Christmas, snow sports, Mall Road. Winter-ready vehicles. Call 7668570551.',
  keywords: 'christmas shimla cab, christmas manali package, delhi to shimla christmas, white christmas cab, shimla manali christmas 2026, christmas holiday cab, snow trip christmas',
  authors: [{ name: 'Triveni Cabs' }], creator: 'Triveni Cabs', publisher: 'Triveni Cabs',
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: { canonical: '/christmas-shimla-manali-package' },
  openGraph: { title: 'Christmas Shimla Manali Package 2026 | From Rs 10,000', description: 'White Christmas at Shimla and Manali. Cab from Delhi. Snow sports, Mall Road celebrations.', type: 'website', locale: 'en_IN', url: 'https://www.trivenicabs.in/christmas-shimla-manali-package', siteName: 'Triveni Cabs' },
  twitter: { card: 'summary_large_image', title: 'Christmas Shimla Manali 2026', description: 'Delhi to Shimla-Manali Christmas cab. From Rs 10,000. White Christmas.' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

export const revalidate = false;

export default function ChristmasShimlaManaliPage() {
  const serviceSchema = { "@context": "https://schema.org", "@type": "Service", "serviceType": "Christmas Holiday Transport", "name": "Christmas Shimla Manali Cab Package", "description": "Christmas cab package from Delhi to Shimla and Manali. White Christmas experience with snow sports and Mall Road celebrations.", "provider": { "@type": "LocalBusiness", "name": "Triveni Cabs", "telephone": "+91-7668570551", "url": "https://www.trivenicabs.in", "address": { "@type": "PostalAddress", "streetAddress": "366 Dandupura near Tajganj", "addressLocality": "Agra", "postalCode": "282006", "addressCountry": "IN" } }, "areaServed": [{ "@type": "City", "name": "Delhi" }, { "@type": "City", "name": "Shimla" }, { "@type": "City", "name": "Manali" }], "offers": { "@type": "AggregateOffer", "lowPrice": "10000", "highPrice": "24000", "priceCurrency": "INR" } };
  const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" }, { "@type": "ListItem", "position": 2, "name": "Christmas Shimla Manali Package", "item": "https://www.trivenicabs.in/christmas-shimla-manali-package" }] };
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
