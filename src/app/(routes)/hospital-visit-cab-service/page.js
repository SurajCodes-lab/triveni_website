import { getSpecialTransportBySlug } from '@/utilis/specialTransportData';
import SpecialTransportClient from '@/components/special/SpecialTransportClient';

const service = getSpecialTransportBySlug('hospital-visit-cab-service');

export const metadata = {
  title: 'Hospital Visit Cab Service | Medical Transport | Triveni Cabs',
  description: 'Book hospital visit cab service. Sanitized vehicles, punctual drivers, patient-friendly driving. From Rs 500. Regular dialysis/chemo transport available. Call 7668570551.',
  keywords: 'hospital visit cab, medical transport cab, hospital cab service, dialysis transport, chemotherapy transport, doctor visit cab, patient cab service, medical taxi',
  authors: [{ name: 'Triveni Cabs' }], creator: 'Triveni Cabs', publisher: 'Triveni Cabs',
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: { canonical: '/hospital-visit-cab-service' },
  openGraph: { title: 'Hospital Visit Cab Service | Medical Transport', description: 'Sanitized cabs for hospital visits. Punctual, gentle driving, wheelchair assistance.', type: 'website', locale: 'en_IN', url: 'https://www.trivenicabs.in/hospital-visit-cab-service', siteName: 'Triveni Cabs' },
  twitter: { card: 'summary_large_image', title: 'Hospital Visit Cab Service', description: 'Medical transport cab. Sanitized, punctual, patient-friendly.' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

export const revalidate = false;

export default function HospitalVisitCabPage() {
  const serviceSchema = { "@context": "https://schema.org", "@type": "Service", "serviceType": "Hospital Visit Cab Service", "name": "Hospital Visit Cab Service - Medical Transport", "description": "Reliable cab service for hospital visits with sanitized vehicles, punctual drivers, and patient-friendly driving.", "provider": { "@type": "LocalBusiness", "name": "Triveni Cabs", "telephone": "+91-7668570551", "url": "https://www.trivenicabs.in", "address": { "@type": "PostalAddress", "streetAddress": "366 Dandupura near Tajganj", "addressLocality": "Agra", "postalCode": "282006", "addressCountry": "IN" } }, "areaServed": { "@type": "Country", "name": "India" } };
  const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" }, { "@type": "ListItem", "position": 2, "name": "Special Services", "item": "https://www.trivenicabs.in" }, { "@type": "ListItem", "position": 3, "name": "Hospital Visit Cab", "item": "https://www.trivenicabs.in/hospital-visit-cab-service" }] };
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": service.faqs.map(f => ({ "@type": "Question", "name": f.question, "acceptedAnswer": { "@type": "Answer", "text": f.answer } })) };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <SpecialTransportClient service={service} />
    </>
  );
}
