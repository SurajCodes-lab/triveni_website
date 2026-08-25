import { getFestivalBySlug } from '@/utilis/festivalData';
import { getPostMonsoonBySlug } from '@/utilis/season/postMonsoonSeason';
import FestivalTripClient from '@/components/festival/FestivalTripClient';
import { Hourglass } from '@/components/ui/icons';
import { tightenTitle } from '@/lib/seo/serp-ctr';

const festival = getFestivalBySlug('august-long-weekend-getaways-delhi') || getPostMonsoonBySlug('august-long-weekend-getaways-delhi');

export const metadata = {
  title: tightenTitle('August 2026 Long Weekend Getaways from Delhi'),
  description: 'August 2026 long weekend trips from Delhi — Aug 15-16 & Aug 28-30. Rishikesh, Corbett, Nainital, Shimla. Cab from ₹5,900. Call 7668570551.',
  keywords: 'august long weekend getaways delhi, long weekend august 2026, independence day weekend trip delhi, raksha bandhan long weekend 2026, weekend getaways from delhi august, 2 day trip from delhi august',
  authors: [{ name: 'Triveni Cabs' }], creator: 'Triveni Cabs', publisher: 'Triveni Cabs',
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: { canonical: '/august-long-weekend-getaways-delhi' },
  openGraph: {
    title: 'August 2026 Long Weekend Getaways from Delhi',
    description: 'Aug 15-16 Independence Day and Aug 28-30 Raksha Bandhan weekends. 2-3 day cab trips from ₹5,900.',
    type: 'website', locale: 'en_IN', url: 'https://www.trivenicabs.in/august-long-weekend-getaways-delhi', siteName: 'Triveni Cabs',
    images: [{ url: '/images/sightseeing/Rishikesh/Rishikesh_hero_section.jpg', width: 1200, height: 630, alt: 'August 2026 Long Weekend Getaways from Delhi — Triveni Cabs' }],
  },
  twitter: { card: 'summary_large_image', title: 'August 2026 Long Weekend Getaways', description: 'Aug 15-16 and Aug 28-30 weekends from Delhi. 2-3 day cab trips from ₹5,900.', images: ['/images/sightseeing/Rishikesh/Rishikesh_hero_section.jpg'], creator: '@trivenicabs' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

export const revalidate = 3600;

export default function AugustLongWeekendGetawaysDelhiPage() {
  if (!festival) return null;

  const serviceSchema = { "@context": "https://schema.org", "@type": "Service", "serviceType": "Long Weekend Getaway Cab Service", "name": "August 2026 Long Weekend Getaways from Delhi", "description": "Cab packages for the August 2026 long weekends from Delhi NCR — Independence Day (Aug 15-16) and Raksha Bandhan (Aug 28-30). 2-3 day round trips to Rishikesh, Jim Corbett, Nainital, Shimla, Mussoorie, Agra, Jaipur and Neemrana.", "provider": { "@type": "LocalBusiness", "name": "Triveni Cabs", "telephone": "+91-7668570551", "url": "https://www.trivenicabs.in", "address": { "@type": "PostalAddress", "streetAddress": "366 Dandupura near Tajganj", "addressLocality": "Agra", "postalCode": "282006", "addressCountry": "IN" } }, "areaServed": [{ "@type": "City", "name": "Delhi" }, { "@type": "City", "name": "Noida" }, { "@type": "City", "name": "Gurgaon" }, { "@type": "City", "name": "Rishikesh" }, { "@type": "City", "name": "Nainital" }, { "@type": "City", "name": "Shimla" }, { "@type": "City", "name": "Mussoorie" }, { "@type": "City", "name": "Agra" }, { "@type": "City", "name": "Jaipur" }], "offers": { "@type": "AggregateOffer", "lowPrice": "5900", "highPrice": "16000", "priceCurrency": "INR" } };
  const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" }, { "@type": "ListItem", "position": 2, "name": "Long Weekend Getaway Packages", "item": "https://www.trivenicabs.in/long-weekend-getaway-packages-2026" }, { "@type": "ListItem", "position": 3, "name": "August 2026 Long Weekend Getaways", "item": "https://www.trivenicabs.in/august-long-weekend-getaways-delhi" }] };
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": festival.faqs.map(f => ({ "@type": "Question", "name": f.question, "acceptedAnswer": { "@type": "Answer", "text": f.answer } })) };

  // Season banner: shows only while the window below is still ahead of us.
  // Evaluated per render; `revalidate = 3600` regenerates the static page hourly,
  // so the banner drops itself within an hour of the window closing.
  const now = new Date();
  const seasonBanner = [
    { end: '2026-08-16T23:59:59+05:30', head: 'Next August long weekend, Independence Day 15-16 August 2026:', body: 'cabs for the long weekend get booked out early. Reserve by 12 August.' },
    { end: '2026-08-30T23:59:59+05:30', head: 'Next August long weekend, Raksha Bandhan 28-30 August 2026:', body: 'cabs for the long weekend get booked out early. Reserve by 25 August.' },
  ].find((w) => now <= new Date(w.end));

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      {seasonBanner && (
        <div className="border-b border-amber-500/40 bg-amber-400 text-slate-900">
          <div className="mx-auto flex max-w-5xl items-start justify-center gap-2 px-4 py-2.5 sm:items-center">
            <Hourglass className="mt-[3px] h-4 w-4 shrink-0 sm:mt-0" aria-hidden="true" />
            <p className="text-[0.78rem] font-semibold leading-snug sm:text-center sm:text-sm">
              <span className="font-black">{seasonBanner.head}</span> {seasonBanner.body}
            </p>
          </div>
        </div>
      )}
      <FestivalTripClient festival={festival} />
    </>
  );
}
