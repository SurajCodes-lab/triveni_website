import { getRentalBySlug } from '@/utilis/rentalPackageData';
import RentalPackageClient from '@/components/rental/RentalPackageClient';

const rental = getRentalBySlug('half-day-cab-rental');

export const metadata = {
  title: 'Half Day Cab Rental | 4 Hours 40 km from Rs 1,500 | Triveni Cabs',
  description: 'Book half day cab rental for 4 hours 40 km. Sedan Rs 1,500, SUV Rs 2,200, Innova Rs 2,800. Shopping, doctor visits, meetings. Call 7668570551.',
  keywords: 'half day cab rental, 4 hour cab rental, cab for 4 hours, half day taxi, short duration cab hire, cab for shopping, cab for doctor visit',
  authors: [{ name: 'Triveni Cabs' }], creator: 'Triveni Cabs', publisher: 'Triveni Cabs',
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: { canonical: '/half-day-cab-rental' },
  openGraph: { title: 'Half Day Cab Rental | 4 Hrs 40 km from Rs 1,500', description: 'Half day cab with driver. 4 hours, 40 km. From Rs 1,500.', type: 'website', locale: 'en_IN', url: 'https://www.trivenicabs.in/half-day-cab-rental', siteName: 'Triveni Cabs' },
  twitter: { card: 'summary_large_image', title: 'Half Day Cab Rental | Rs 1,500', description: 'Half day cab rental. 4 hours 40 km. Sedan, SUV, Innova.' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

export default function HalfDayCabRentalPage() {
  const serviceSchema = { "@context": "https://schema.org", "@type": "Service", "serviceType": "Half Day Cab Rental", "name": "Half Day Cab Rental - 4 Hours 40 km", "description": "Dedicated AC cab with driver for 4 hours and 40 km at flat rate. Perfect for shopping, doctor visits, meetings.", "provider": { "@type": "LocalBusiness", "name": "Triveni Cabs", "telephone": "+91-7668570551", "url": "https://www.trivenicabs.in", "address": { "@type": "PostalAddress", "streetAddress": "366 Dandupura near Tajganj", "addressLocality": "Agra", "postalCode": "282006", "addressCountry": "IN" } }, "offers": { "@type": "AggregateOffer", "lowPrice": "1500", "highPrice": "2800", "priceCurrency": "INR" } };
  const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" }, { "@type": "ListItem", "position": 2, "name": "Half Day Cab Rental", "item": "https://www.trivenicabs.in/half-day-cab-rental" }] };
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
