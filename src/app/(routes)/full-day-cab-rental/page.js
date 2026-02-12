import { getRentalBySlug } from '@/utilis/rentalPackageData';
import RentalPackageClient from '@/components/rental/RentalPackageClient';

const rental = getRentalBySlug('full-day-cab-rental');

export const metadata = {
  title: 'Full Day Cab Rental | 8 Hours 80 km from Rs 2,500 | Triveni Cabs',
  description: 'Book full day cab rental for 8 hours 80 km. Sedan Rs 2,500, SUV Rs 3,500, Innova Rs 4,500. Sightseeing, business, weddings. Call 7668570551.',
  keywords: 'full day cab rental, 8 hour cab rental, cab for full day, full day taxi hire, day cab with driver, sightseeing cab rental, full day car hire',
  authors: [{ name: 'Triveni Cabs' }], creator: 'Triveni Cabs', publisher: 'Triveni Cabs',
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: { canonical: '/full-day-cab-rental' },
  openGraph: { title: 'Full Day Cab Rental | 8 Hrs 80 km from Rs 2,500', description: 'Full day cab with driver. 8 hours, 80 km. From Rs 2,500.', type: 'website', locale: 'en_IN', url: 'https://www.trivenicabs.in/full-day-cab-rental', siteName: 'Triveni Cabs' },
  twitter: { card: 'summary_large_image', title: 'Full Day Cab Rental | Rs 2,500', description: 'Full day cab rental. 8 hours 80 km. Sedan, SUV, Innova.' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

export default function FullDayCabRentalPage() {
  const serviceSchema = { "@context": "https://schema.org", "@type": "Service", "serviceType": "Full Day Cab Rental", "name": "Full Day Cab Rental - 8 Hours 80 km", "description": "Dedicated AC vehicle and driver for 8 hours and 80 km. Perfect for city sightseeing, business travel, wedding functions.", "provider": { "@type": "LocalBusiness", "name": "Triveni Cabs", "telephone": "+91-7668570551", "url": "https://www.trivenicabs.in", "address": { "@type": "PostalAddress", "streetAddress": "366 Dandupura near Tajganj", "addressLocality": "Agra", "postalCode": "282006", "addressCountry": "IN" } }, "offers": { "@type": "AggregateOffer", "lowPrice": "2500", "highPrice": "4500", "priceCurrency": "INR" } };
  const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" }, { "@type": "ListItem", "position": 2, "name": "Full Day Cab Rental", "item": "https://www.trivenicabs.in/full-day-cab-rental" }] };
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": rental.faqs.map(f => ({ "@type": "Question", "name": f.question, "acceptedAnswer": { "@type": "Answer", "text": f.answer } })) };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <RentalPackageClient rental={rental} />
    </>
  );
}

export const revalidate = 3600;
