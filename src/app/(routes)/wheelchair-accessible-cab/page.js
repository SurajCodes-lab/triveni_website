import { getSpecialTransportBySlug } from '@/utilis/specialTransportData';
import SpecialTransportClient from '@/components/special/SpecialTransportClient';

const service = getSpecialTransportBySlug('wheelchair-accessible-cab');

export const metadata = {
  title: 'Wheelchair Accessible Cab Service | Disability-Friendly Transport | Triveni Cabs',
  description: 'Book wheelchair accessible cab with ramp access and trained drivers. Disability-friendly transport with spacious vehicles. From Rs 16/km. Call 7668570551.',
  keywords: 'wheelchair accessible cab, disability friendly taxi, handicapped transport service, wheelchair cab, accessible vehicle hire, disabled transport india',
  authors: [{ name: 'Triveni Cabs' }], creator: 'Triveni Cabs', publisher: 'Triveni Cabs',
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: { canonical: '/wheelchair-accessible-cab' },
  openGraph: { title: 'Wheelchair Accessible Cab | Disability-Friendly Transport', description: 'Wheelchair accessible cabs with ramp access, trained drivers, spacious vehicles. From Rs 16/km.', type: 'website', locale: 'en_IN', url: 'https://www.trivenicabs.in/wheelchair-accessible-cab', siteName: 'Triveni Cabs' },
  twitter: { card: 'summary_large_image', title: 'Wheelchair Accessible Cab | Triveni Cabs', description: 'Disability-friendly cabs with ramp, trained drivers. From Rs 16/km.' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

export const revalidate = false;

export default function WheelchairAccessibleCabPage() {
  const serviceSchema = { "@context": "https://schema.org", "@type": "Service", "serviceType": "Wheelchair Accessible Cab Service", "name": "Wheelchair Accessible Cab - Disability-Friendly Transport", "description": "Wheelchair accessible cab service with ramp access, trained drivers, and spacious vehicles for comfortable disability-friendly transport.", "provider": { "@type": "LocalBusiness", "name": "Triveni Cabs", "telephone": "+91-7668570551", "url": "https://www.trivenicabs.in", "address": { "@type": "PostalAddress", "streetAddress": "366 Dandupura near Tajganj", "addressLocality": "Agra", "postalCode": "282006", "addressCountry": "IN" } }, "areaServed": { "@type": "Country", "name": "India" } };
  const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" }, { "@type": "ListItem", "position": 2, "name": "Special Services", "item": "https://www.trivenicabs.in" }, { "@type": "ListItem", "position": 3, "name": "Wheelchair Accessible Cab", "item": "https://www.trivenicabs.in/wheelchair-accessible-cab" }] };
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
