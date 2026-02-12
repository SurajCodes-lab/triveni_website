import { getSpecialTransportBySlug } from '@/utilis/specialTransportData';
import SpecialTransportClient from '@/components/special/SpecialTransportClient';

const service = getSpecialTransportBySlug('school-trip-bus-rental');

export const metadata = {
  title: 'School Trip Bus Rental Service | Safe Student Transport | Triveni Cabs',
  description: 'Book school trip bus rental with GPS tracking and verified drivers. 20-seater from Rs 30/km, 35-seater Rs 40/km. First-aid, speed governor, CCTV. Call 7668570551.',
  keywords: 'school trip bus rental, school bus hire, school excursion bus, student transport service, school picnic bus, school field trip bus, safe school transport',
  authors: [{ name: 'Triveni Cabs' }], creator: 'Triveni Cabs', publisher: 'Triveni Cabs',
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: { canonical: '/school-trip-bus-rental' },
  openGraph: { title: 'School Trip Bus Rental | Safe Student Transport', description: 'GPS tracked school buses with verified drivers. 20 to 45 seater options.', type: 'website', locale: 'en_IN', url: 'https://www.trivenicabs.in/school-trip-bus-rental', siteName: 'Triveni Cabs' },
  twitter: { card: 'summary_large_image', title: 'School Trip Bus Rental | Triveni Cabs', description: 'Safe school bus rental. GPS tracking, verified drivers. From Rs 30/km.' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

export const revalidate = 3600;

export default function SchoolTripBusPage() {
  const serviceSchema = { "@context": "https://schema.org", "@type": "Service", "serviceType": "School Trip Bus Rental", "name": "School Trip Bus Rental Service", "description": "Safe and reliable bus rental for school trips with GPS tracking, verified drivers, and safety equipment.", "provider": { "@type": "LocalBusiness", "name": "Triveni Cabs", "telephone": "+91-7668570551", "url": "https://www.trivenicabs.in", "address": { "@type": "PostalAddress", "streetAddress": "366 Dandupura near Tajganj", "addressLocality": "Agra", "postalCode": "282006", "addressCountry": "IN" } }, "areaServed": { "@type": "Country", "name": "India" } };
  const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" }, { "@type": "ListItem", "position": 2, "name": "Special Services", "item": "https://www.trivenicabs.in" }, { "@type": "ListItem", "position": 3, "name": "School Trip Bus Rental", "item": "https://www.trivenicabs.in/school-trip-bus-rental" }] };
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
