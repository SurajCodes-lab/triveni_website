import { notFound } from 'next/navigation';
import { getPackage, getAllPackageSlugs, getRelatedPackages } from '@/utilis/packageData';
import HotelCabPackageClient from '@/components/packages/HotelCabPackageClient';
import AEOHead from '@/components/seo/AEOHead';
import { getOgImageForSlug } from '@/lib/seo/ogImageMap';

export const revalidate = false;
export const dynamicParams = false;

export async function generateStaticParams() {
  return getAllPackageSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const { slug } = resolvedParams;
  const pkg = getPackage(slug);

  if (!pkg) {
    return { title: 'Package Not Found' };
  }

  const title = `${pkg.destination} ${pkg.duration} Package: Hotel + Cab ₹${pkg.startingPrice.toLocaleString('en-IN')}/person — 4.9★`;
  const description = `${pkg.destination} ${pkg.duration} tour package with hotel & cab from ₹${pkg.startingPrice.toLocaleString('en-IN')} per person. Includes ${pkg.includes.slice(0, 3).join(', ')}. Book now — Call 7668570551.`;
  const ogTitle = `${pkg.destination} Tour Package — ${pkg.duration} | Hotel + Cab from ₹${pkg.startingPrice.toLocaleString('en-IN')} | Triveni Cabs`;

  return {
    title,
    description,
    keywords: [
      `${pkg.destination.toLowerCase()} tour package`,
      `${pkg.destination.toLowerCase()} ${pkg.duration.toLowerCase()} package`,
      `${pkg.destination.toLowerCase()} hotel and cab package`,
      `${pkg.destination.toLowerCase()} trip package`,
      `${pkg.destination.toLowerCase()} holiday package`,
      `${pkg.destination.toLowerCase()} travel package`,
      `cheap ${pkg.destination.toLowerCase()} package`,
      `${pkg.destination.toLowerCase()} package from delhi`,
      `${pkg.destination.toLowerCase()} tour cost`,
      `${pkg.destination.toLowerCase()} trip cost per person`,
      `best ${pkg.destination.toLowerCase()} packages`,
      `${pkg.destination.toLowerCase()} family package`,
      `${pkg.destination.toLowerCase()} honeymoon package`,
      `${pkg.destination.toLowerCase()} budget trip`,
    ],
    authors: [{ name: 'Triveni Cabs' }],
    creator: 'Triveni Cabs',
    publisher: 'Triveni Cabs',
    metadataBase: new URL('https://www.trivenicabs.in'),
    alternates: { canonical: `/packages/${slug}` },
    openGraph: {
      title: ogTitle,
      description,
      type: 'website',
      locale: 'en_IN',
      url: `https://www.trivenicabs.in/packages/${slug}`,
      siteName: 'Triveni Cabs',
      images: [{ url: getOgImageForSlug(slug), width: 1200, height: 630, alt: `${pkg.destination} Tour Package` }],
    },
    twitter: {
      card: 'summary_large_image',
      title: ogTitle,
      description,
      creator: '@trivenicabs',
      site: '@trivenicabs',
      images: [getOgImageForSlug(slug)],
    },
    robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
  };
}

export default async function PackagePage({ params }) {
  const resolvedParams = await params;
  const { slug } = resolvedParams;
  const pkg = getPackage(slug);

  if (!pkg) {
    notFound();
  }

  const relatedPackages = getRelatedPackages(slug);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    "name": `${pkg.destination} ${pkg.duration} Tour Package`,
    "description": `${pkg.destination} tour package — ${pkg.duration} with hotel stay and cab service. Starting ₹${pkg.startingPrice.toLocaleString('en-IN')} per person.`,
    "touristType": "Leisure Travelers",
    "itinerary": {
      "@type": "ItemList",
      "itemListElement": pkg.itinerary.map((day, i) => ({
        "@type": "ListItem",
        "position": i + 1,
        "name": `Day ${day.day}: ${day.title}`,
        "description": day.activities.join(', ')
      }))
    },
    "offers": {
      "@type": "AggregateOffer",
      "lowPrice": pkg.startingPrice.toString(),
      "highPrice": pkg.hotelOptions[pkg.hotelOptions.length - 1].price.toString(),
      "priceCurrency": "INR",
      "offerCount": pkg.hotelOptions.length.toString()
    },
    "provider": {
      "@type": "LocalBusiness",
      "name": "Triveni Cabs",
      "telephone": "+91-7668570551",
      "email": "cabstriveni@gmail.com",
      "url": "https://www.trivenicabs.in",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "366 Dandupura near Tajganj",
        "addressLocality": "Agra",
        "addressRegion": "UP",
        "postalCode": "282006",
        "addressCountry": "IN"
      }
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "10000",
      "bestRating": "5"
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" },
      { "@type": "ListItem", "position": 2, "name": "Packages", "item": "https://www.trivenicabs.in/packages" },
      { "@type": "ListItem", "position": 3, "name": `${pkg.destination} Package`, "item": `https://www.trivenicabs.in/packages/${slug}` }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": pkg.faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
    }))
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <AEOHead pageType="tour" data={{ url: `/packages/${slug}`, title: `${pkg.destination} Tour Package`, city: pkg.destination }} />
      <HotelCabPackageClient pkg={pkg} relatedPackages={relatedPackages} />
    </>
  );
}
