import { getRentalBySlug } from '@/utilis/rentalPackageData';
import RentalPackageClient from '@/components/rental/RentalPackageClient';

const rental = getRentalBySlug('multi-day-cab-hire');

export const metadata = {
  title: 'Multi-Day Cab Hire | 2-7 Day Packages | Rs 2,750/Day | Triveni Cabs',
  description: 'Book multi-day cab hire for 2-7 days. Sedan from Rs 2,750/day, 250 km/day included. Golden Triangle, Rajasthan, Char Dham packages. Call 7668570551.',
  keywords: 'multi day cab hire, outstation cab for days, multi day taxi, cab for multiple days, road trip cab, golden triangle cab, rajasthan cab hire, multi day car rental',
  authors: [{ name: 'Triveni Cabs' }], creator: 'Triveni Cabs', publisher: 'Triveni Cabs',
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: { canonical: '/multi-day-cab-hire' },
  openGraph: { title: 'Multi-Day Cab Hire | Rs 2,750/Day | 250 km/Day', description: 'Multi-day cab for road trips and tours. 250 km/day included. Driver stay covered.', type: 'website', locale: 'en_IN', url: 'https://www.trivenicabs.in/multi-day-cab-hire', siteName: 'Triveni Cabs' },
  twitter: { card: 'summary_large_image', title: 'Multi-Day Cab Hire | Rs 2,750/Day', description: '2-7 day cab hire. 250 km/day. Driver accommodation included.' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

export const revalidate = 3600;

export default function MultiDayCabHirePage() {
  const serviceSchema = { "@context": "https://schema.org", "@type": "Service", "serviceType": "Multi-Day Cab Hire", "name": "Multi-Day Cab Hire - 2 to 7 Day Packages", "description": "Multi-day outstation cab hire for road trips and tours. 250 km/day included with driver accommodation.", "provider": { "@type": "LocalBusiness", "name": "Triveni Cabs", "telephone": "+91-7668570551", "url": "https://www.trivenicabs.in", "address": { "@type": "PostalAddress", "streetAddress": "366 Dandupura near Tajganj", "addressLocality": "Agra", "postalCode": "282006", "addressCountry": "IN" } }, "areaServed": { "@type": "Country", "name": "India" }, "offers": { "@type": "AggregateOffer", "lowPrice": "2750", "highPrice": "4500", "priceCurrency": "INR" } };
  const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" }, { "@type": "ListItem", "position": 2, "name": "Cab Rental", "item": "https://www.trivenicabs.in/outstation-cabs" }, { "@type": "ListItem", "position": 3, "name": "Multi-Day Cab Hire", "item": "https://www.trivenicabs.in/multi-day-cab-hire" }] };
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
