import { getFestivalBySlug } from '@/utilis/festivalData';
import FestivalTripClient from '@/components/festival/FestivalTripClient';
import { Hourglass } from '@/components/ui/icons';
import { tightenTitle } from '@/lib/seo/serp-ctr';

const festival = getFestivalBySlug('leh-ladakh-august-september-trip');

export const metadata = {
  title: tightenTitle('Leh Ladakh August September Trip 2026 | Last Road Window'),
  description: 'Ladakh in August-September 2026 — the last dependable road window before the passes close. Manali-Leh in, Srinagar out. From ₹26,400. Call 7668570551.',
  keywords: 'leh ladakh august september trip, best time to visit ladakh, ladakh in august, ladakh in september, ladakh road closing date, manali leh highway august, ladakh trip from delhi september',
  authors: [{ name: 'Triveni Cabs™' }], creator: 'Triveni Cabs™', publisher: 'Triveni Cabs™',
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: { canonical: '/leh-ladakh-august-september-trip' },
  openGraph: {
    title: 'Leh Ladakh August September Trip 2026 | From ₹26,400',
    description: 'August-September is the last dependable Ladakh road window before the passes close. Manali-Leh in, Srinagar-Leh out.',
    type: 'website', locale: 'en_IN', url: 'https://www.trivenicabs.in/leh-ladakh-august-september-trip', siteName: 'Triveni Cabs™',
    images: [{ url: '/images/sightseeing/Ladakh/Pangong_Lake.jpg', width: 1200, height: 630, alt: 'Leh Ladakh August September Trip — Pangong Lake — Triveni Cabs' }],
  },
  twitter: { card: 'summary_large_image', title: 'Leh Ladakh August September Trip 2026', description: 'The last dependable Ladakh road window. From ₹26,400.', images: ['/images/sightseeing/Ladakh/Pangong_Lake.jpg'], creator: '@trivenicabs' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

export const revalidate = 3600;

export default function LehLadakhAugustSeptemberTripPage() {
  if (!festival) return null;

  const serviceSchema = { "@context": "https://schema.org", "@type": "Service", "serviceType": "Ladakh Seasonal Road Trip Transport", "name": "Leh Ladakh August September Trip from Delhi", "description": "Seasonal Ladakh road trips in August and September — the last dependable window before the Manali-Leh and Srinagar-Leh highways close. Full circuit via Manali, Leh, Nubra, Pangong and Srinagar with a mandatory Leh acclimatisation day and Inner Line Permit assistance.", "provider": { "@type": "LocalBusiness", "name": "Triveni Cabs", "telephone": "+91-7668570551", "url": "https://www.trivenicabs.in", "address": { "@type": "PostalAddress", "streetAddress": "366, Dandupura, near Tajganj", "addressLocality": "Agra", "postalCode": "282006", "addressCountry": "IN" } }, "areaServed": [{ "@type": "City", "name": "Delhi" }, { "@type": "City", "name": "Manali" }, { "@type": "City", "name": "Leh" }, { "@type": "City", "name": "Srinagar" }], "offers": { "@type": "AggregateOffer", "lowPrice": "26400", "highPrice": "67200", "priceCurrency": "INR" } };
  const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" }, { "@type": "ListItem", "position": 2, "name": "Leh Ladakh August September Trip", "item": "https://www.trivenicabs.in/leh-ladakh-august-september-trip" }] };
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": (festival.faqs || []).map(f => ({ "@type": "Question", "name": f.question, "acceptedAnswer": { "@type": "Answer", "text": f.answer } })) };

  // Season banner: shows only while the window below is still ahead of us.
  // Evaluated per render; `revalidate = 3600` regenerates the static page hourly,
  // so the banner drops itself within an hour of the window closing.
  const now = new Date();
  const seasonBanner = [
    { end: '2026-09-30T23:59:59+05:30', head: 'Leh-Ladakh season, August to September 2026:', body: 'the high passes close around late September into October once snow settles - after mid-September you are gambling on the weather.' },
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
