import { notFound } from 'next/navigation';
import { getFestivalBySlug } from '@/utilis/festivalData';
import FestivalTripClient from '@/components/festival/FestivalTripClient';
import { Hourglass } from '@/components/ui/icons';
import { tightenTitle } from '@/lib/seo/serp-ctr';

const festival = getFestivalBySlug('raksha-bandhan-cab-service');

export const metadata = {
  title: tightenTitle('Raksha Bandhan Cab Service 2026 | Delhi NCR & Intercity'),
  description: 'Book a Raksha Bandhan cab for 28-30 Aug 2026. NCR multi-stop family trips & intercity drops. Sedan ₹11/km, no surge pricing. Call 7668570551.',
  keywords: 'raksha bandhan cab service, rakhi cab booking delhi, raksha bandhan 2026 taxi, delhi to jaipur rakhi cab, family cab raksha bandhan, rakhi day cab ncr, intercity cab raksha bandhan',
  authors: [{ name: 'Triveni Cabs™' }], creator: 'Triveni Cabs™', publisher: 'Triveni Cabs™',
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: { canonical: '/raksha-bandhan-cab-service' },
  openGraph: {
    title: 'Raksha Bandhan Cab Service 2026 | From ₹3,300',
    description: 'Rakhi weekend 28-30 Aug 2026. One cab, multiple family stops across Delhi NCR, or an intercity drop. Fixed fares, no surge.',
    type: 'website', locale: 'en_IN', url: 'https://www.trivenicabs.in/raksha-bandhan-cab-service', siteName: 'Triveni Cabs™',
    images: [{ url: '/images/sightseeing/Delhi/India_Gate.jpg', width: 1200, height: 630, alt: 'Raksha Bandhan Cab Service Delhi NCR — Triveni Cabs' }],
  },
  twitter: { card: 'summary_large_image', title: 'Raksha Bandhan Cab Service 2026', description: 'Rakhi weekend 28-30 Aug 2026. NCR multi-stop and intercity cabs from ₹3,300.', images: ['/images/sightseeing/Delhi/India_Gate.jpg'], creator: '@trivenicabs' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

export const revalidate = 3600;

export default function RakshaBandhanCabPage() {
  if (!festival) notFound();

  const serviceSchema = { "@context": "https://schema.org", "@type": "Service", "serviceType": "Raksha Bandhan Family Transport", "name": "Raksha Bandhan Cab Service", "description": "Cab service for Raksha Bandhan 2026 across Delhi NCR and intercity to Jaipur, Agra, Chandigarh, Dehradun and Lucknow. Multi-stop family bookings with driver waiting.", "provider": { "@type": "LocalBusiness", "name": "Triveni Cabs", "telephone": "+91-7668570551", "url": "https://www.trivenicabs.in", "address": { "@type": "PostalAddress", "streetAddress": "366, Dandupura, near Tajganj", "addressLocality": "Agra", "postalCode": "282006", "addressCountry": "IN" } }, "areaServed": [{ "@type": "City", "name": "Delhi" }, { "@type": "City", "name": "Noida" }, { "@type": "City", "name": "Gurgaon" }, { "@type": "City", "name": "Faridabad" }, { "@type": "City", "name": "Ghaziabad" }, { "@type": "City", "name": "Jaipur" }, { "@type": "City", "name": "Agra" }], "offers": { "@type": "AggregateOffer", "lowPrice": "3300", "highPrice": "12000", "priceCurrency": "INR" } };
  const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" }, { "@type": "ListItem", "position": 2, "name": "Raksha Bandhan Cab Service", "item": "https://www.trivenicabs.in/raksha-bandhan-cab-service" }] };
  const eventSchema = { "@context": "https://schema.org", "@type": "Event", "name": "Raksha Bandhan 2026", "startDate": "2026-08-28", "endDate": "2026-08-30", "eventStatus": "https://schema.org/EventScheduled", "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode", "location": { "@type": "Place", "name": "Delhi NCR", "address": { "@type": "PostalAddress", "addressLocality": "New Delhi", "addressRegion": "Delhi", "addressCountry": "IN" } }, "description": "Raksha Bandhan 2026 falls on Friday 28 August, creating an Aug 28-30 family travel weekend across Delhi NCR and North India.", "image": ["https://www.trivenicabs.in/images/sightseeing/Delhi/India_Gate.jpg"], "url": "https://www.trivenicabs.in/raksha-bandhan-cab-service", "organizer": { "@type": "Organization", "name": "Triveni Cabs", "url": "https://www.trivenicabs.in", "telephone": "+91-7668570551" }, "performer": { "@type": "Organization", "name": "Triveni Cabs" }, "offers": { "@type": "Offer", "url": "https://www.trivenicabs.in/raksha-bandhan-cab-service", "price": "3300", "priceCurrency": "INR", "availability": "https://schema.org/InStock", "validFrom": "2026-08-01" } };
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": festival.faqs.map(f => ({ "@type": "Question", "name": f.question, "acceptedAnswer": { "@type": "Answer", "text": f.answer } })) };

  // Season banner: shows only while the window below is still ahead of us.
  // Evaluated per render; `revalidate = 3600` regenerates the static page hourly,
  // so the banner drops itself within an hour of the window closing.
  const now = new Date();
  const seasonBanner = [
    { end: '2026-08-30T23:59:59+05:30', head: 'Raksha Bandhan, 28-30 August 2026:', body: 'cabs for the long weekend get booked out early. Reserve by 25 August.' },
  ].find((w) => now <= new Date(w.end));

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(eventSchema) }} />
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
