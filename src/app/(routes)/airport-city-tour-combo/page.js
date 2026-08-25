import { getRentalBySlug } from '@/utilis/rentalPackageData';
import RentalPackageClient from '@/components/rental/RentalPackageClient';
import { tightenTitle } from '@/lib/seo/serp-ctr';

const rental = getRentalBySlug('airport-city-tour-combo');

const heroImage = {
  src: '/images/airport_section.jpg',
  alt: 'Airport terminal pickup point where Triveni Cabs drivers meet arriving passengers with a name board',
};

const fleetImages = [
  { src: '/images/car/swift_dzire.jpg', alt: 'Swift Dzire sedan from the Triveni Cabs fleet, the entry option for the airport pickup and city tour combo' },
  { src: '/images/car/ertiga.jpg', alt: 'Ertiga SUV from the Triveni Cabs fleet, with boot space for airport luggage plus a day of sightseeing' },
  { src: '/images/car/innova_crysta.jpg', alt: 'Innova Crysta from the Triveni Cabs fleet, the most comfortable choice for a 12-hour airport and city tour day' },
];

export const metadata = {
  title: tightenTitle('Airport Pickup + City Tour Combo | 12 Hrs Rs 3,500'),
  description: 'Airport pickup with city tour combo package. 12 hours, 120 km. Sedan from Rs 3,500. Flight tracking, name board, sightseeing driver. Call 7668570551.',
  keywords: 'airport city tour combo, airport pickup city tour, delhi airport sightseeing, airport cab with tour, IGI airport city tour, airport transfer plus tour',
  authors: [{ name: 'Triveni Cabs' }], creator: 'Triveni Cabs', publisher: 'Triveni Cabs',
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: { canonical: '/airport-city-tour-combo' },
  openGraph: { title: 'Airport + City Tour Combo | Rs 3,500 | 12 Hrs', description: 'Airport pickup and city sightseeing in one package. 12 hours, 120 km included.', type: 'website', locale: 'en_IN', url: 'https://www.trivenicabs.in/airport-city-tour-combo', siteName: 'Triveni Cabs', images: [{ url: '/images/airport_section.jpg', width: 1200, height: 630, alt: 'Airport pickup point served by Triveni Cabs for the airport plus city tour combo package' }] },
  twitter: { card: 'summary_large_image', title: 'Airport City Tour Combo | Rs 3,500', description: 'Airport pickup + city tour. 12 hours. Sedan from Rs 3,500.', images: ['/images/airport_section.jpg'] },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

export const revalidate = 3600;

export default function AirportCityTourComboPage() {
  const serviceSchema = { "@context": "https://schema.org", "@type": "Service", "serviceType": "Airport City Tour Combo", "name": "Airport Pickup + City Tour Combo Package", "description": "Combo package: airport pickup with name board and city sightseeing. 12 hours, 120 km. Flight tracking included.", "provider": { "@type": "LocalBusiness", "name": "Triveni Cabs", "telephone": "+91-7668570551", "url": "https://www.trivenicabs.in", "address": { "@type": "PostalAddress", "streetAddress": "366 Dandupura near Tajganj", "addressLocality": "Agra", "postalCode": "282006", "addressCountry": "IN" } }, "areaServed": [{ "@type": "City", "name": "Delhi" }], "offers": { "@type": "AggregateOffer", "lowPrice": "3500", "highPrice": "6500", "priceCurrency": "INR" } };
  const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" }, { "@type": "ListItem", "position": 2, "name": "Cab Rental", "item": "https://www.trivenicabs.in/outstation-cabs" }, { "@type": "ListItem", "position": 3, "name": "Airport City Tour Combo", "item": "https://www.trivenicabs.in/airport-city-tour-combo" }] };
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": rental.faqs.map(f => ({ "@type": "Question", "name": f.question, "acceptedAnswer": { "@type": "Answer", "text": f.answer } })) };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <RentalPackageClient rental={rental} heroImage={heroImage} fleetImages={fleetImages} />
    </>
  );
}
