import { notFound } from 'next/navigation';
import { getCorridorTripCost, getAllCorridorTripCostSlugs } from '@/utilis/corridorTripCostData';
import TripCostClient from '@/components/trip-cost/TripCostClient';
import DirectAnswer from '@/components/content/DirectAnswer';
import { deriveTripCostAnswer } from '@/utilis/directAnswers';
import { servedHref } from '@/lib/seo/route-exists';
import { tightenTitle } from '@/lib/seo/serp-ctr';
import { getRatingAndReviews } from '@/lib/seo/review-helpers';

// Week 53. The end-to-end cost page — the one cost question the site answered in
// pieces and nowhere in whole. The distance page gives the fare, the toll page
// gives the toll, and nothing added them together or named the three charges
// that sit on top.
//
// Built only where a researched toll record AND a fare record both exist, and
// where no hand-written {destination}-trip-cost-from-delhi page already answers
// the same journey — 25 of those exist and duplicating them would be the same
// page twice. getAllCorridorTripCostSlugs filters on exactly that.

export const revalidate = 3600;

export async function generateStaticParams() {
  return getAllCorridorTripCostSlugs().map((route) => ({ route }));
}

export async function generateMetadata({ params }) {
  const { route } = await params;
  const t = getCorridorTripCost(route);
  if (!t) return {};

  const sedan = t.vehicles[0];
  const total = t.allInSedanDisplay;
  const title = tightenTitle(
    `${t.origin} to ${t.destination} Trip Cost: ${total} All In (Fare + Toll)`,
  );
  const description =
    `What a ${t.origin} to ${t.destination} trip actually costs: ${sedan.display} cab fare for ` +
    `${t.km} km plus ${t.toll.car === null ? 'toll' : `₹${t.toll.car.toLocaleString('en-IN')} toll`} ` +
    `across ${t.toll.plazas.length} plaza${t.toll.plazas.length === 1 ? '' : 's'} = ${total}. ` +
    `Plus parking, state entry and the driver night allowance at actual. Call 7668570551.`;

  return {
    title,
    description,
    keywords: `${t.origin.toLowerCase()} to ${t.destination.toLowerCase()} trip cost, ${t.origin.toLowerCase()} ${t.destination.toLowerCase()} total cost by car, cab fare plus toll ${t.origin.toLowerCase()} ${t.destination.toLowerCase()}, how much does ${t.origin.toLowerCase()} to ${t.destination.toLowerCase()} cost, ${t.origin.toLowerCase()} to ${t.destination.toLowerCase()} by road budget`,
    authors: [{ name: 'Triveni Cabs™' }],
    creator: 'Triveni Cabs™',
    publisher: 'Triveni Cabs™',
    metadataBase: new URL('https://www.trivenicabs.in'),
    alternates: { canonical: `/trip-cost/${route}` },
    openGraph: {
      title: `${t.origin} to ${t.destination} Trip Cost: ${total} All In`,
      description: `Cab fare ${sedan.display} + toll across ${t.toll.plazas.length} plazas. The whole figure, honestly.`,
      type: 'website',
      locale: 'en_IN',
      url: `https://www.trivenicabs.in/trip-cost/${route}`,
      siteName: 'Triveni Cabs',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${t.origin} to ${t.destination} Trip Cost: ${total} All In`,
      description: `Cab fare ${sedan.display} + toll. Plus the three charges at actual.`,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
    },
  };
}

export default async function TripCostPage({ params }) {
  const { route } = await params;
  const t = getCorridorTripCost(route);
  if (!t) notFound();

  const answer = deriveTripCostAnswer(t);
  const sedan = t.vehicles[0];

  // Every link resolved against the build manifest, so none can 404 and each
  // appears automatically once its target exists.
  const links = [
    { label: `${t.origin} to ${t.destination} distance and fare`, href: servedHref(`/distance/${route}`) },
    { label: `${t.origin} to ${t.destination} toll breakdown`, href: servedHref(`/toll-cost/${route}`) },
    { label: `Book a one-way ${t.origin} to ${t.destination} cab`, href: servedHref(`/one-way-cab/${route}`) },
    { label: `${t.origin} to ${t.destination} round trip`, href: servedHref(`/round-trip/${route}`) },
    { label: 'How the rate card works', href: servedHref('/week-long-cab-hire-cost') },
    { label: 'Driver night charges explained', href: servedHref('/driver-night-charges-explained') },
    { label: 'FASTag and tolls on highway trips', href: servedHref('/fastag-and-tolls-on-highway-trips') },
  ].filter((l) => l.href);

  const faqs = [
    {
      question: `How much does a ${t.origin} to ${t.destination} trip cost in total?`,
      answer:
        `${t.allInSedanDisplay} for a sedan, being ${sedan.display} cab fare for the ${t.km} km plus ` +
        `₹${(t.toll.car || 0).toLocaleString('en-IN')} in toll across ${t.toll.plazas.length} plaza` +
        `${t.toll.plazas.length === 1 ? '' : 's'}${t.toll.estimate ? ' as a planning estimate' : ''}. ` +
        `The fare includes the vehicle, fuel, the driver and GST. Parking, state entry and the ` +
        `driver night allowance are charged at actual on top and are not in that figure.`,
    },
    {
      question: `What is the toll from ${t.origin} to ${t.destination}?`,
      answer:
        `₹${(t.toll.car || 0).toLocaleString('en-IN')} for a car and ` +
        `₹${(t.toll.suv || t.toll.car || 0).toLocaleString('en-IN')} for an SUV, across ` +
        `${t.toll.plazas.length} plaza${t.toll.plazas.length === 1 ? '' : 's'} over ${t.km} km. ` +
        `The plaza-by-plaza breakdown is on this page.` +
        (t.toll.estimate
          ? ' These are planning estimates built from the published plaza schedule rather than a notified tariff.'
          : ''),
    },
    {
      question: `Is it cheaper to drive myself from ${t.origin} to ${t.destination}?`,
      answer: t.fuel && t.fuel.petrol
        ? `The fuel alone is about ₹${t.fuel.petrol.toLocaleString('en-IN')} on petrol or ` +
          `₹${(t.fuel.diesel || 0).toLocaleString('en-IN')} on diesel, plus the same toll. That is ` +
          `less than the chauffeur-driven fare and it is not the same product — it excludes the ` +
          `car, the rental or the wear, and the ${t.duration || 'hours'} at the wheel.`
        : `Self-drive fuel plus the same toll is usually less than the chauffeur-driven fare, but it ` +
          `excludes the vehicle, the wear and the driving itself.`,
    },
    {
      question: `Does the ${t.origin} to ${t.destination} fare include toll?`,
      answer:
        `No. Every fare on this site covers the vehicle, fuel, the driver and GST; tolls, parking, ` +
        `state entry and the driver night allowance are charged at actual on top. The driver pays ` +
        `each plaza on the road, usually by FASTag, and the receipts are available. This page exists ` +
        `to add the fare and the toll together, which no other page on the site does.`,
    },
    {
      question: `Is there a state entry charge on the ${t.origin} to ${t.destination} route?`,
      answer: t.crossing === null
        ? `A commercial vehicle entering another state pays that state a levy at or near the border. ` +
          `Ask us which states this route crosses and we will tell you before you travel.`
        : t.crossing.crosses
          ? `Yes. This route runs from ${t.crossing.from} into ${t.crossing.to}, so a state entry levy ` +
            `applies, set by the state government and charged at actual. Some routes also cross an ` +
            `intermediate state — ask us for the full count on your itinerary.`
          : `No, not for a locally registered vehicle: both ${t.origin} and ${t.destination} are in ` +
            `${t.crossing.from}. A vehicle registered in another state pays on entry.`,
    },
  ];

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  };

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Outstation cab with end-to-end cost breakdown',
    name: `${t.origin} to ${t.destination} trip cost`,
    description: `The all-in cost of a ${t.origin} to ${t.destination} journey by car: cab fare, toll, and the charges billed at actual.`,
    areaServed: [
      { '@type': 'City', name: t.origin },
      { '@type': 'City', name: t.destination },
    ],
    provider: {
      '@type': 'LocalBusiness',
      name: 'Triveni Cabs',
      telephone: '+91-7668570551',
      url: 'https://www.trivenicabs.in',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '366, Dandupura, near Tajganj',
        addressLocality: 'Agra',
        postalCode: '282006',
        addressCountry: 'IN',
      },
      ...getRatingAndReviews(),
    },
    offers: t.vehicles.map((v) => ({
      '@type': 'Offer',
      name: v.name,
      price: String(v.amount),
      priceCurrency: 'INR',
      description: `${v.name} for ${t.origin} to ${t.destination}, ${t.km} km. Toll, parking, state entry and driver allowance extra at actual.`,
    })),
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.trivenicabs.in' },
      {
        '@type': 'ListItem',
        position: 2,
        name: `${t.origin} to ${t.destination} trip cost`,
        item: `https://www.trivenicabs.in/trip-cost/${route}`,
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <TripCostClient
        data={t}
        links={links}
        shortAnswer={answer ? (
          <DirectAnswer heading={answer.heading} lead={answer.lead} facts={answer.facts} note={answer.note} />
        ) : null}
      />
      <section className="px-4 py-14 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
            {t.origin} to {t.destination} cost — common questions
          </h2>
          <div className="mt-7 space-y-5">
            {faqs.map((f, i) => (
              <div key={i} className="rounded-xl border border-slate-200 p-5">
                <h3 className="font-bold text-slate-900">{f.question}</h3>
                <p className="mt-2 leading-relaxed text-slate-700">{f.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
