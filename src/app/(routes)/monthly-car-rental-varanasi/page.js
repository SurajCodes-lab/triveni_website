import { getMonthlyRentalCity, otherMonthlyRentalCities, buildMonthlyFaqs, MONTHLY_PACKAGE } from '@/utilis/monthlyRentalCityData';
import MonthlyRentalCityClient from '@/components/rental/MonthlyRentalCityClient';
import DirectAnswer from '@/components/content/DirectAnswer';
import { deriveMonthlyRentalAnswer } from '@/utilis/directAnswers';
import { tightenTitle } from '@/lib/seo/serp-ctr';

// Week 53. One of 19 new monthly-rental city pages, for the cab-hub cities with
// no city-level page — city coverage existed only inside the corporate family,
// for nine cities.
//
// This is the highest-converting unbuilt shape measured on the site: the monthly
// and corporate rental cluster runs at 6.57% against a 0.60% site average. The
// enquiry is narrow and commercial, and the answer is a price, which is exactly
// the kind of thing no search panel carries.
//
// Every rate comes from the published monthly package already live on
// /monthly-car-rental. No new pricing was introduced — what varies city to city
// is whether 2,500 km is generous or tight for the way a car is actually used
// there, which is a factual question rather than a pricing one.
const SLUG = 'varanasi';
const data = getMonthlyRentalCity(SLUG);
const faqs = buildMonthlyFaqs(data);

export const revalidate = 3600;

export const metadata = {
  title: tightenTitle('Monthly Car Rental Varanasi with Driver | ₹35,000/Month'),
  description: 'Monthly car rental with driver in Varanasi. Sedan ₹35,000, SUV ₹50,000, Innova ₹60,000 per month with 2,500 km and 8 hours a day included. One car, one driver, 30 days. Fuel, driver and GST included. Call 7668570551.',
  keywords: 'monthly car rental varanasi, monthly cab varanasi, car on monthly rent varanasi, long term car rental varanasi, monthly driver hire varanasi, corporate car rental varanasi, monthly taxi varanasi',
  authors: [{ name: 'Triveni Cabs™' }], creator: 'Triveni Cabs™', publisher: 'Triveni Cabs™',
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: { canonical: '/monthly-car-rental-varanasi' },
  openGraph: {
    title: 'Monthly Car Rental Varanasi with Driver | ₹35,000/Month',
    description: 'A dedicated car and driver in Varanasi for 30 days, from ₹35,000 a month with 2,500 km included.',
    type: 'website', locale: 'en_IN',
    url: 'https://www.trivenicabs.in/monthly-car-rental-varanasi',
    siteName: 'Triveni Cabs',
    images: [{ url: '/images/sightseeing/Varanasi/varanasi_hero_section.jpg', width: 1200, height: 630, alt: 'Monthly car rental with driver in Varanasi' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Monthly Car Rental Varanasi with Driver | ₹35,000/Month',
    description: 'A dedicated car and driver in Varanasi for 30 days, from ₹35,000 a month with 2,500 km included.',
    images: ['/images/sightseeing/Varanasi/varanasi_hero_section.jpg'],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

export default function MonthlyCarRentalVaranasiPage() {
  const answer = deriveMonthlyRentalAnswer(data, MONTHLY_PACKAGE);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Monthly Car Rental with Driver",
    "name": "Monthly Car Rental with Driver in Varanasi",
    "description": "A dedicated AC vehicle and professional driver in Varanasi for 30 days, with 2,500 km and 8 hours a day included.",
    "areaServed": { "@type": "City", "name": "Varanasi" },
    "provider": {
      "@type": "LocalBusiness",
      "name": "Triveni Cabs",
      "telephone": "+91-7668570551",
      "url": "https://www.trivenicabs.in",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "366, Dandupura, near Tajganj",
        "addressLocality": "Agra",
        "postalCode": "282006",
        "addressCountry": "IN",
      },
    },
    "offers": MONTHLY_PACKAGE.vehicles.map((v) => ({
      "@type": "Offer",
      "name": v.name,
      "price": String(v.monthly),
      "priceCurrency": "INR",
      "description": `${v.name} for 30 days in Varanasi, ${MONTHLY_PACKAGE.includedKm} km and ${MONTHLY_PACKAGE.includedHoursPerDay} hours a day included`,
    })),
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((f) => ({
      "@type": "Question",
      "name": f.question,
      "acceptedAnswer": { "@type": "Answer", "text": f.answer },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" },
      { "@type": "ListItem", "position": 2, "name": "Monthly Car Rental", "item": "https://www.trivenicabs.in/monthly-car-rental" },
      { "@type": "ListItem", "position": 3, "name": "Varanasi", "item": "https://www.trivenicabs.in/monthly-car-rental-varanasi" },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <MonthlyRentalCityClient
        data={{ ...data, faqs }}
        pkg={MONTHLY_PACKAGE}
        otherCities={otherMonthlyRentalCities(SLUG)}
        shortAnswer={answer ? (
          <DirectAnswer heading={answer.heading} lead={answer.lead} facts={answer.facts} note={answer.note} />
        ) : null}
      />
    </>
  );
}
