import { getRentalBySlug } from '@/utilis/rentalPackageData';
import RentalPackageClient from '@/components/rental/RentalPackageClient';

const rental = getRentalBySlug('monthly-car-rental');

export const metadata = {
  title: 'Monthly Car Rental with Driver | Sedan Rs 35,000/Month | Triveni Cabs',
  description: 'Book monthly car rental with driver. Sedan Rs 35,000/month, SUV Rs 50,000, Innova Rs 60,000. 2,500 km included. Corporate, film shoots, long-term. Call 7668570551.',
  keywords: 'monthly car rental, car on monthly rent, monthly cab hire, long term car rental, corporate car rental, monthly driver hire, car lease with driver',
  authors: [{ name: 'Triveni Cabs' }], creator: 'Triveni Cabs', publisher: 'Triveni Cabs',
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: { canonical: '/monthly-car-rental' },
  openGraph: { title: 'Monthly Car Rental with Driver | From Rs 35,000/Month', description: 'Monthly car rental. Dedicated driver, 2,500 km included. From Rs 35,000/month.', type: 'website', locale: 'en_IN', url: 'https://www.trivenicabs.in/monthly-car-rental', siteName: 'Triveni Cabs' },
  twitter: { card: 'summary_large_image', title: 'Monthly Car Rental | Rs 35,000/Month', description: 'Monthly car rental with driver. 2,500 km. Sedan, SUV, Innova.' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

export default function MonthlyCarRentalPage() {
  const serviceSchema = { "@context": "https://schema.org", "@type": "Service", "serviceType": "Monthly Car Rental", "name": "Monthly Car Rental with Driver", "description": "Dedicated AC vehicle and professional driver for 30 days. 2,500 km and 8 hours daily included. Corporate, film shoots, long-term stays.", "provider": { "@type": "LocalBusiness", "name": "Triveni Cabs", "telephone": "+91-7668570551", "url": "https://www.trivenicabs.in", "address": { "@type": "PostalAddress", "streetAddress": "366 Dandupura near Tajganj", "addressLocality": "Agra", "postalCode": "282006", "addressCountry": "IN" } }, "offers": { "@type": "AggregateOffer", "lowPrice": "35000", "highPrice": "60000", "priceCurrency": "INR" } };
  const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" }, { "@type": "ListItem", "position": 2, "name": "Monthly Car Rental", "item": "https://www.trivenicabs.in/monthly-car-rental" }] };
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
