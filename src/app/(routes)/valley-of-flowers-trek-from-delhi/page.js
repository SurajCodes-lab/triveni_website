import { getFestivalBySlug } from '@/utilis/festivalData';
import FestivalTripClient from '@/components/festival/FestivalTripClient';
import { Hourglass } from '@/components/ui/icons';
import { tightenTitle } from '@/lib/seo/serp-ctr';

const festival = getFestivalBySlug('valley-of-flowers-trek-from-delhi');

export const metadata = {
  title: tightenTitle('Valley of Flowers Trek from Delhi 2026 | Cab to Govindghat'),
  description: 'Delhi to Govindghat cab for the Valley of Flowers trek 2026. 500 km, sedan from ₹11,000, Innova ₹18,000. Bloom mid-Jul to mid-Sep. Call 7668570551.',
  keywords: 'valley of flowers trek from delhi, delhi to valley of flowers, valley of flowers cab, govindghat taxi from delhi, valley of flowers 2026, delhi to govindghat cab, hemkund sahib cab',
  authors: [{ name: 'Triveni Cabs™' }], creator: 'Triveni Cabs™', publisher: 'Triveni Cabs™',
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: { canonical: '/valley-of-flowers-trek-from-delhi' },
  openGraph: {
    title: 'Valley of Flowers Trek from Delhi 2026 | From ₹11,000',
    description: 'Road transport Delhi to Govindghat, where the Valley of Flowers trek begins. Peak bloom mid-July to mid-September.',
    type: 'website', locale: 'en_IN', url: 'https://www.trivenicabs.in/valley-of-flowers-trek-from-delhi', siteName: 'Triveni Cabs™',
    images: [{ url: '/images/sightseeing/Valley_of_Flowers/Valley_of_Flowers_hero_section.jpg', width: 1200, height: 630, alt: 'Valley of Flowers Trek from Delhi — Triveni Cabs' }],
  },
  twitter: { card: 'summary_large_image', title: 'Valley of Flowers Trek from Delhi 2026', description: 'Delhi to Govindghat cab. From ₹11,000. Bloom mid-July to mid-September.', images: ['/images/sightseeing/Valley_of_Flowers/Valley_of_Flowers_hero_section.jpg'], creator: '@trivenicabs' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

export const revalidate = 3600;

export default function ValleyOfFlowersTrekFromDelhiPage() {
  if (!festival) return null;

  const serviceSchema = { "@context": "https://schema.org", "@type": "Service", "serviceType": "Valley of Flowers Trek Road Transport", "name": "Valley of Flowers Trek Cab from Delhi", "description": "Road transport from Delhi to Govindghat and back for the Valley of Flowers trek, with the vehicle and driver waiting through your trek days. Triveni Cabs provides road transport only; the trek is on foot.", "provider": { "@type": "LocalBusiness", "name": "Triveni Cabs", "telephone": "+91-7668570551", "url": "https://www.trivenicabs.in", "address": { "@type": "PostalAddress", "streetAddress": "366, Dandupura, near Tajganj", "addressLocality": "Agra", "postalCode": "282006", "addressCountry": "IN" } }, "areaServed": [{ "@type": "City", "name": "Delhi" }, { "@type": "City", "name": "Rishikesh" }, { "@type": "City", "name": "Joshimath" }, { "@type": "City", "name": "Govindghat" }], "offers": { "@type": "AggregateOffer", "lowPrice": "11000", "highPrice": "24000", "priceCurrency": "INR" } };
  const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" }, { "@type": "ListItem", "position": 2, "name": "Valley of Flowers Trek from Delhi", "item": "https://www.trivenicabs.in/valley-of-flowers-trek-from-delhi" }] };
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": (festival.faqs || []).map(f => ({ "@type": "Question", "name": f.question, "acceptedAnswer": { "@type": "Answer", "text": f.answer } })) };

  // Season banner: shows only while the window below is still ahead of us.
  // Evaluated per render; `revalidate = 3600` regenerates the static page hourly,
  // so the banner drops itself within an hour of the window closing.
  const now = new Date();
  const seasonBanner = [
    { end: '2026-09-15T23:59:59+05:30', head: 'Valley of Flowers peak bloom, mid-July to mid-September 2026:', body: 'August and early September are the honest peak. The park itself usually closes for the season around 4 October.' },
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
