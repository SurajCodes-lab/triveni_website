import { notFound } from 'next/navigation';
import { getFestivalBySlug } from '@/utilis/festivalData';
import FestivalTripClient from '@/components/festival/FestivalTripClient';
import { Hourglass } from '@/components/ui/icons';
import { tightenTitle } from '@/lib/seo/serp-ctr';

const festival = getFestivalBySlug('janmashtami-mathura-vrindavan-cab');

export const metadata = {
  title: tightenTitle('Janmashtami Mathura Vrindavan Cab 2026 | Sep 4-6'),
  description: 'Book Janmashtami cab from Delhi to Mathura Vrindavan, 4-6 Sep 2026. Sedan ₹11/km, Innova ₹18/km, no surge. Yamuna Expressway. Call 7668570551.',
  keywords: 'janmashtami mathura vrindavan cab, delhi to mathura janmashtami 2026, vrindavan cab janmashtami, krishna janmabhoomi taxi, banke bihari temple cab, mathura vrindavan tempo traveller, janmashtami 2026 date cab',
  authors: [{ name: 'Triveni Cabs™' }], creator: 'Triveni Cabs™', publisher: 'Triveni Cabs™',
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: { canonical: '/janmashtami-mathura-vrindavan-cab' },
  openGraph: {
    title: 'Janmashtami Mathura Vrindavan Cab 2026 | From ₹3,300',
    description: 'Delhi to Mathura & Vrindavan for Janmashtami, 4-6 Sep 2026. 180 km via Yamuna Expressway. AC vehicles, no festival surge.',
    type: 'website', locale: 'en_IN', url: 'https://www.trivenicabs.in/janmashtami-mathura-vrindavan-cab', siteName: 'Triveni Cabs™',
    images: [{ url: '/images/sightseeing/Mathura_Vrindavan/Krishna_Janmabhoomi.jpg', width: 1200, height: 630, alt: 'Janmashtami Cab to Krishna Janmabhoomi Mathura — Triveni Cabs' }],
  },
  twitter: { card: 'summary_large_image', title: 'Janmashtami Mathura Vrindavan Cab 2026', description: 'Delhi to Mathura Vrindavan for Janmashtami, 4-6 Sep 2026. From ₹3,300.', images: ['/images/sightseeing/Mathura_Vrindavan/Krishna_Janmabhoomi.jpg'], creator: '@trivenicabs' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

export const revalidate = 3600;

export default function JanmashtamiMathuraVrindavanPage() {
  if (!festival) notFound();

  const serviceSchema = { "@context": "https://schema.org", "@type": "Service", "serviceType": "Janmashtami Festival Transport", "name": "Janmashtami Mathura Vrindavan Cab Service", "description": "Cab from Delhi to Mathura and Vrindavan for Krishna Janmashtami 2026. Krishna Janmabhoomi, Banke Bihari Temple, Prem Mandir and ISKCON Vrindavan.", "provider": { "@type": "LocalBusiness", "name": "Triveni Cabs", "telephone": "+91-7668570551", "url": "https://www.trivenicabs.in", "address": { "@type": "PostalAddress", "streetAddress": "366, Dandupura, near Tajganj", "addressLocality": "Agra", "postalCode": "282006", "addressCountry": "IN" } }, "areaServed": [{ "@type": "City", "name": "Delhi" }, { "@type": "City", "name": "Noida" }, { "@type": "City", "name": "Gurgaon" }, { "@type": "City", "name": "Mathura" }, { "@type": "City", "name": "Vrindavan" }], "offers": { "@type": "AggregateOffer", "lowPrice": "3300", "highPrice": "10080", "priceCurrency": "INR" } };
  const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" }, { "@type": "ListItem", "position": 2, "name": "Janmashtami Mathura Vrindavan Cab", "item": "https://www.trivenicabs.in/janmashtami-mathura-vrindavan-cab" }] };
  const eventSchema = { "@context": "https://schema.org", "@type": "Event", "name": "Krishna Janmashtami 2026 — Mathura & Vrindavan", "startDate": "2026-09-04", "endDate": "2026-09-06", "eventStatus": "https://schema.org/EventScheduled", "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode", "location": { "@type": "Place", "name": "Shri Krishna Janmabhoomi, Mathura", "address": { "@type": "PostalAddress", "addressLocality": "Mathura", "addressRegion": "Uttar Pradesh", "addressCountry": "IN" } }, "description": "Krishna Janmashtami celebrations in Mathura and Vrindavan, including the midnight abhishek at Krishna Janmabhoomi.", "image": ["https://www.trivenicabs.in/images/sightseeing/Mathura_Vrindavan/Krishna_Janmabhoomi.jpg"], "url": "https://www.trivenicabs.in/janmashtami-mathura-vrindavan-cab", "organizer": { "@type": "Organization", "name": "Triveni Cabs", "url": "https://www.trivenicabs.in", "telephone": "+91-7668570551" }, "performer": { "@type": "Organization", "name": "Triveni Cabs" }, "offers": { "@type": "Offer", "url": "https://www.trivenicabs.in/janmashtami-mathura-vrindavan-cab", "price": "3300", "priceCurrency": "INR", "availability": "https://schema.org/InStock", "validFrom": "2026-08-01" } };
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": festival.faqs.map(f => ({ "@type": "Question", "name": f.question, "acceptedAnswer": { "@type": "Answer", "text": f.answer } })) };

  // Season banner: shows only while the window below is still ahead of us.
  // Evaluated per render; `revalidate = 3600` regenerates the static page hourly,
  // so the banner drops itself within an hour of the window closing.
  const now = new Date();
  const seasonBanner = [
    { end: '2026-09-06T23:59:59+05:30', head: 'Krishna Janmashtami, 4-6 September 2026:', body: 'cabs for the long weekend get booked out early. Reserve by 1 September.' },
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
