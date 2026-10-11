import { getSpecialTransportBySlug } from '@/utilis/specialTransportData';
import SpecialTransportClient from '@/components/special/SpecialTransportClient';
import { tightenTitle } from '@/lib/seo/serp-ctr';

const service = getSpecialTransportBySlug('hospital-visit-cab-service');

const heroImage = {
  src: '/images/car/swift_dzire.jpg',
  alt: 'Swift Dzire sedan from the Triveni Cabs fleet, sanitized and kept ready for hospital appointment pickups',
};

const fleetImages = [
  { src: '/images/car/swift_dzire.jpg', alt: 'Swift Dzire sedan from the Triveni Cabs fleet used for hospital visits' },
  { src: '/images/car/ertiga.jpg', alt: 'Ertiga SUV from the Triveni Cabs fleet, easier to step into for patients travelling with family' },
  { src: '/images/car/innova_crysta.jpg', alt: 'Innova Crysta from the Triveni Cabs fleet, the most spacious option for patients needing extra legroom' },
];

export const metadata = {
  title: tightenTitle('Hospital Visit Cab Service | Medical Transport'),
  description: 'Book hospital visit cab service. Sanitized vehicles, punctual drivers, patient-friendly driving. From Rs 500. Regular dialysis/chemo transport available.',
  keywords: 'hospital visit cab, medical transport cab, hospital cab service, dialysis transport, chemotherapy transport, doctor visit cab, patient cab service, medical taxi',
  authors: [{ name: 'Triveni Cabs™' }], creator: 'Triveni Cabs™', publisher: 'Triveni Cabs™',
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: { canonical: '/hospital-visit-cab-service' },
  openGraph: { title: 'Hospital Visit Cab Service | Medical Transport', description: 'Sanitized cabs for hospital visits. Punctual, gentle driving, wheelchair assistance.', type: 'website', locale: 'en_IN', url: 'https://www.trivenicabs.in/hospital-visit-cab-service', siteName: 'Triveni Cabs', images: [{ url: '/images/car/swift_dzire.jpg', width: 1200, height: 630, alt: 'Swift Dzire sedan from the Triveni Cabs fleet used for hospital visit bookings' }] },
  twitter: { card: 'summary_large_image', title: 'Hospital Visit Cab Service', description: 'Medical transport cab. Sanitized, punctual, patient-friendly.', images: ['/images/car/swift_dzire.jpg'] },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

export const revalidate = 3600;

export default function HospitalVisitCabPage() {
  const serviceSchema = { "@context": "https://schema.org", "@type": "Service", "serviceType": "Hospital Visit Cab Service", "name": "Hospital Visit Cab Service - Medical Transport", "description": "Reliable cab service for hospital visits with sanitized vehicles, punctual drivers, and patient-friendly driving.", "provider": { "@type": "LocalBusiness", "name": "Triveni Cabs", "telephone": "+91-7668570551", "url": "https://www.trivenicabs.in", "address": { "@type": "PostalAddress", "streetAddress": "366, Dandupura, near Tajganj", "addressLocality": "Agra", "postalCode": "282006", "addressCountry": "IN" } }, "areaServed": { "@type": "Country", "name": "India" } };
  const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" }, { "@type": "ListItem", "position": 2, "name": "Special Services", "item": "https://www.trivenicabs.in" }, { "@type": "ListItem", "position": 3, "name": "Hospital Visit Cab", "item": "https://www.trivenicabs.in/hospital-visit-cab-service" }] };
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": service.faqs.map(f => ({ "@type": "Question", "name": f.question, "acceptedAnswer": { "@type": "Answer", "text": f.answer } })) };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <SpecialTransportClient service={service} heroImage={heroImage} fleetImages={fleetImages} />
    </>
  );
}
