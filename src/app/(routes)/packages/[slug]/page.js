import { notFound } from 'next/navigation';
import { getPackage, getAllPackageSlugs, getRelatedPackages } from '@/utilis/packageData';
import { getDeterministicReviewCount } from "@/lib/seo/review-helpers";
import HotelCabPackageClient from '@/components/packages/HotelCabPackageClient';
import AEOHead from '@/components/seo/AEOHead';
import { getOgImageForSlug } from '@/lib/seo/ogImageMap';
import { tightenTitle, tightenDescription, DESC_BUDGET } from '@/lib/seo/serp-ctr';
import DataTable from '@/components/seo/DataTable';
export const revalidate = 3600;
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

  const title = tightenTitle(`${pkg.destination} ${pkg.duration} Package: Hotel + Cab ₹${pkg.startingPrice.toLocaleString('en-IN')}/person — 4.9★`);
  // Listing three inclusions pushed the longest of these to 224 characters.
  // The price and the phone number sit at the end, so they are the first thing
  // a trim would remove -- reserve them and let the inclusions take what is left.
  const priceTail = `from ₹${pkg.startingPrice.toLocaleString('en-IN')} per person. Call 7668570551.`;
  const descHead = `${pkg.destination} ${pkg.duration} tour package with hotel & cab. Includes ${pkg.includes.slice(0, 3).join(', ')}.`;
  const description = `${tightenDescription(descHead, DESC_BUDGET - priceTail.length - 1)} ${priceTail}`;
  const ogTitle = `${pkg.destination} Tour Package — ${pkg.duration} | Hotel + Cab from ₹${pkg.startingPrice.toLocaleString('en-IN')} | Triveni Cabs™`;

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
    authors: [{ name: 'Triveni Cabs™' }],
    creator: 'Triveni Cabs™',
    publisher: 'Triveni Cabs™',
    metadataBase: new URL('https://www.trivenicabs.in'),
    alternates: { canonical: `/packages/${slug}` },
    openGraph: {
      title: ogTitle,
      description,
      type: 'website',
      locale: 'en_IN',
      url: `https://www.trivenicabs.in/packages/${slug}`,
      siteName: 'Triveni Cabs™',
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
        "streetAddress": "366, Dandupura, near Tajganj",
        "addressLocality": "Agra",
        "addressRegion": "Uttar Pradesh",
        "postalCode": "282006",
        "addressCountry": "IN"
      }
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
      {/* Day-by-day itinerary table — see the religious-tours page for the
          reasoning. Activities are joined into one cell so the day stays one row. */}
      <DataTable
        title={`${pkg.destination} ${pkg.duration} — day-by-day itinerary`}
        caption={`Day-by-day itinerary for the ${pkg.destination} package, listing the activities included on each day.`}
        intro="Hotel, cab and all listed transfers are included. Monument entry and meals are extra unless stated."
        columns={[
          { key: 'dayLabel', label: 'Day' },
          { key: 'title', label: 'Where' },
          { key: 'activityList', label: 'Included that day' },
        ]}
        rows={(pkg.itinerary || []).map((d) => ({
          ...d,
          dayLabel: `Day ${d.day}`,
          activityList: Array.isArray(d.activities) ? d.activities.join(' · ') : (d.description || ''),
        }))}
        tone="light"
        className="bg-slate-50"
      />

      <HotelCabPackageClient pkg={pkg} relatedPackages={relatedPackages} />
    </>
  );
}
