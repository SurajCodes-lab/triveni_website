import { getSpecialTransportBySlug } from '@/utilis/specialTransportData';
import SpecialTransportClient from '@/components/special/SpecialTransportClient';

const service = getSpecialTransportBySlug('college-excursion-bus-hire');

export const metadata = {
  title: 'College Excursion Bus Hire | Student Group Transport | Triveni Cabs',
  description: 'Book college excursion bus and Tempo Traveller. 12-seater from Rs 18/km, 45-seater Volvo Rs 48/km. Budget-friendly group trips. Music system. Call 7668570551.',
  keywords: 'college excursion bus, college trip bus hire, student group transport, tempo traveller for college, college annual trip bus, college fest transport, budget group trip bus',
  authors: [{ name: 'Triveni Cabs' }], creator: 'Triveni Cabs', publisher: 'Triveni Cabs',
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: { canonical: '/college-excursion-bus-hire' },
  openGraph: { title: 'College Excursion Bus Hire | Budget Group Transport', description: 'Affordable bus hire for college trips. Tempo Traveller and Volvo buses.', type: 'website', locale: 'en_IN', url: 'https://www.trivenicabs.in/college-excursion-bus-hire', siteName: 'Triveni Cabs' },
  twitter: { card: 'summary_large_image', title: 'College Excursion Bus Hire', description: 'Budget college trip transport. 12-seater from Rs 18/km.' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

export const revalidate = false;

export default function CollegeExcursionBusPage() {
  const serviceSchema = { "@context": "https://schema.org", "@type": "Service", "serviceType": "College Excursion Bus Hire", "name": "College Excursion Bus Hire Service", "description": "Affordable bus and Tempo Traveller hire for college excursions, study tours, and group trips.", "provider": { "@type": "LocalBusiness", "name": "Triveni Cabs", "telephone": "+91-7668570551", "url": "https://www.trivenicabs.in", "address": { "@type": "PostalAddress", "streetAddress": "366 Dandupura near Tajganj", "addressLocality": "Agra", "postalCode": "282006", "addressCountry": "IN" } }, "areaServed": { "@type": "Country", "name": "India" } };
  const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" }, { "@type": "ListItem", "position": 2, "name": "Special Services", "item": "https://www.trivenicabs.in" }, { "@type": "ListItem", "position": 3, "name": "College Excursion Bus Hire", "item": "https://www.trivenicabs.in/college-excursion-bus-hire" }] };
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
