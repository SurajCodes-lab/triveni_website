import { getSpecialTransportBySlug } from '@/utilis/specialTransportData';
import SpecialTransportClient from '@/components/special/SpecialTransportClient';

const service = getSpecialTransportBySlug('women-safety-cab-service');

export const metadata = {
  title: 'Women Safety Cab Service | Verified Drivers, GPS Tracked | Triveni Cabs',
  description: 'Book women safety cab with verified drivers, GPS tracking, SOS panic button. No night surcharge. Safe travel for women at all hours. Call 7668570551.',
  keywords: 'women safety cab, safe cab for women, women cab service, night cab for women, women safety taxi, lady cab service, SOS cab, GPS tracked cab women',
  authors: [{ name: 'Triveni Cabs' }], creator: 'Triveni Cabs', publisher: 'Triveni Cabs',
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: { canonical: '/women-safety-cab-service' },
  openGraph: { title: 'Women Safety Cab | Verified Drivers, GPS Tracked', description: 'Safe cabs for women. Verified drivers, GPS tracking, SOS button. No night surcharge.', type: 'website', locale: 'en_IN', url: 'https://www.trivenicabs.in/women-safety-cab-service', siteName: 'Triveni Cabs' },
  twitter: { card: 'summary_large_image', title: 'Women Safety Cab Service', description: 'Safe cab for women. GPS tracked, SOS enabled, verified drivers.' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

export const revalidate = false;

export default function WomenSafetyCabPage() {
  const serviceSchema = { "@context": "https://schema.org", "@type": "Service", "serviceType": "Women Safety Cab Service", "name": "Women Safety Cab Service - Secure Travel for Women", "description": "Safe cab service for women with verified drivers, GPS tracking, SOS panic button, and no night surcharge.", "provider": { "@type": "LocalBusiness", "name": "Triveni Cabs", "telephone": "+91-7668570551", "url": "https://www.trivenicabs.in", "address": { "@type": "PostalAddress", "streetAddress": "366 Dandupura near Tajganj", "addressLocality": "Agra", "postalCode": "282006", "addressCountry": "IN" } }, "areaServed": { "@type": "Country", "name": "India" } };
  const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" }, { "@type": "ListItem", "position": 2, "name": "Special Services", "item": "https://www.trivenicabs.in" }, { "@type": "ListItem", "position": 3, "name": "Women Safety Cab", "item": "https://www.trivenicabs.in/women-safety-cab-service" }] };
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
