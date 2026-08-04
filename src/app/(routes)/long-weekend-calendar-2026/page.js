import Link from 'next/link';
import { Calendar, ChevronRight, Hourglass } from '@/components/ui/icons';
import { getRatingAndReviews } from '@/lib/seo/review-helpers';
import QuickAnswer from '@/components/seo/QuickAnswer';

export const revalidate = 3600;

// Remaining 2026 long weekends — weekday-verified (2026-01-01 is a Thursday).
// Every getaway link below is a live route; do not add unverified slugs.
const WEEKENDS = [
  {
    id: 'independence-day',
    dates: '15–16 August 2026',
    days: 'Sat–Sun',
    event: 'Independence Day weekend',
    end: '2026-08-16T23:59:59+05:30',
    idea: 'Two clear days — enough for Rishikesh, Jaipur or a Himachal dash if you leave Friday night.',
    links: [
      { href: '/august-long-weekend-getaways-delhi', label: 'August getaway plans' },
      { href: '/independence-day-weekend-packages-2026', label: 'Independence Day packages' },
      { href: '/one-way-cab/delhi-to-rishikesh', label: 'Delhi to Rishikesh cab' },
    ],
  },
  {
    id: 'raksha-bandhan',
    dates: '28–30 August 2026',
    days: 'Fri–Sun',
    event: 'Raksha Bandhan long weekend',
    end: '2026-08-30T23:59:59+05:30',
    idea: 'Three days — the classic family-visit weekend. Book the return leg early; trains sell out first.',
    links: [
      { href: '/raksha-bandhan-cab-service', label: 'Raksha Bandhan cabs' },
      { href: '/one-way-cab/delhi-to-jaipur', label: 'Delhi to Jaipur cab' },
      { href: '/round-trip/delhi-to-vrindavan', label: 'Delhi to Vrindavan round trip' },
    ],
  },
  {
    id: 'janmashtami',
    dates: '4–6 September 2026',
    days: 'Fri–Sun',
    event: 'Janmashtami long weekend',
    end: '2026-09-06T23:59:59+05:30',
    idea: 'Mathura–Vrindavan is THE trip this weekend — expect crowds, book the cab a week out.',
    links: [
      { href: '/janmashtami-mathura-vrindavan-cab', label: 'Janmashtami Mathura cabs' },
      { href: '/september-long-weekend-trips-2026', label: 'September long-weekend trips' },
    ],
  },
  {
    id: 'ganesh-chaturthi',
    dates: '12–14 September 2026',
    days: 'Sat–Mon',
    event: 'Ganesh Chaturthi long weekend',
    end: '2026-09-14T23:59:59+05:30',
    idea: 'Monsoon is retreating — the first safe hills window. Kasol, Tirthan and Jibhi reopen beautifully.',
    links: [
      { href: '/ganesh-chaturthi-transport', label: 'Ganesh Chaturthi transport' },
      { href: '/one-way-cab/delhi-to-jibhi', label: 'Delhi to Jibhi cab' },
      { href: '/one-way-cab/delhi-to-tirthan-valley', label: 'Delhi to Tirthan Valley cab' },
    ],
  },
  {
    id: 'gandhi-jayanti',
    dates: '2–4 October 2026',
    days: 'Fri–Sun',
    event: 'Gandhi Jayanti long weekend',
    end: '2026-10-04T23:59:59+05:30',
    idea: 'Peak post-monsoon: crisp air in Kumaon and the last Char Dham window before portals close.',
    links: [
      { href: '/one-way-cab/delhi-to-nainital', label: 'Delhi to Nainital cab' },
      { href: '/chardham-yatra-september-2026', label: 'Char Dham autumn window' },
      { href: '/one-way-cab/delhi-to-corbett', label: 'Delhi to Jim Corbett cab' },
    ],
  },
  {
    id: 'diwali',
    dates: '7–9 November 2026 (Diwali on Sunday 8 Nov)',
    days: 'Sat–Mon window',
    event: 'Diwali',
    end: '2026-11-09T23:59:59+05:30',
    idea: 'The heaviest travel weekend of the year. Outstation cabs and tempo travellers book out 2–3 weeks ahead.',
    links: [
      { href: '/one-way-cab/delhi-to-jaipur', label: 'Delhi to Jaipur cab' },
      { href: '/tempo-traveller', label: 'Tempo Traveller for family groups' },
    ],
  },
  {
    id: 'christmas',
    dates: '25–27 December 2026',
    days: 'Fri–Sun',
    event: 'Christmas long weekend',
    end: '2026-12-27T23:59:59+05:30',
    idea: 'Snow season opens — Shimla, Kufri and Manali. Carry chains-fitted cabs; we arrange them.',
    links: [
      { href: '/winter-snow-trip-packages', label: 'Winter snow trips' },
      { href: '/one-way-cab/delhi-to-shimla', label: 'Delhi to Shimla cab' },
      { href: '/one-way-cab/delhi-to-manali', label: 'Delhi to Manali cab' },
    ],
  },
  {
    id: 'new-year',
    dates: '1–3 January 2027',
    days: 'Fri–Sun',
    event: 'New Year long weekend',
    end: '2027-01-03T23:59:59+05:30',
    idea: 'Start 2027 in the mountains or on the ghats — both fill fast, decide before mid-December.',
    links: [
      { href: '/winter-snow-trip-packages', label: 'New Year snow trips' },
      { href: '/one-way-cab/delhi-to-rishikesh', label: 'Delhi to Rishikesh cab' },
    ],
  },
];

const BASE = 'https://www.trivenicabs.in';
const WA_LINK = `https://wa.me/917668570551?text=${encodeURIComponent(
  'Hi Triveni Cabs, please send me the 2026 long weekend list and cab options.'
)}`;

export const metadata = {
  title: 'Long Weekend Calendar 2026 India — Dates + Where To Go | Triveni Cabs',
  description:
    '2026 long weekends: 15-16 Aug, 28-30 Aug, 4-6 Sep, 12-14 Sep, 2-4 Oct, Diwali 7-9 Nov, 25-27 Dec. Every date with the best road trip from Delhi and a cab to get you there.',
  keywords:
    'long weekends 2026, long weekend calendar 2026 india, 2026 holiday weekends, long weekend trips from delhi, august long weekend 2026, october long weekend 2026',
  alternates: { canonical: `${BASE}/long-weekend-calendar-2026` },
  openGraph: {
    title: 'Long Weekend Calendar 2026 — Every Date, Every Getaway',
    description:
      'All remaining 2026 long weekends with the best road trips for each. Bookmark it — plan every trip of the year from one page.',
    url: `${BASE}/long-weekend-calendar-2026`,
    type: 'article',
    siteName: 'Triveni Cabs',
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

export default function LongWeekendCalendar2026() {
  const now = new Date();
  const upcoming = WEEKENDS.filter((w) => now <= new Date(w.end));
  const list = upcoming.length > 0 ? upcoming : WEEKENDS;

  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Long weekends in India, 2026',
    numberOfItems: list.length,
    itemListElement: list.map((w, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: `${w.event} — ${w.dates}`,
    })),
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Which long weekends are left in 2026?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The remaining 2026 long weekends are: 15–16 August (Independence Day), 28–30 August (Raksha Bandhan), 4–6 September (Janmashtami), 12–14 September (Ganesh Chaturthi), 2–4 October (Gandhi Jayanti), the Diwali window around 7–9 November, and 25–27 December (Christmas), followed by 1–3 January 2027.',
        },
      },
      {
        '@type': 'Question',
        name: 'How early should I book a cab for a long weekend?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'For sedans and SUVs, 3–5 days ahead is usually enough. Tempo travellers and buses book out first on long weekends — reserve those 1–2 weeks ahead, and 2–3 weeks ahead for Diwali.',
        },
      },
    ],
  };

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Long weekend cab booking — Triveni Cabs',
    provider: { '@type': 'LocalBusiness', name: 'Triveni Cabs', telephone: '+91-7668570551' },
    areaServed: { '@type': 'Country', name: 'India' },
    ...getRatingAndReviews('long-weekend-calendar-2026', 'outstation'),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      <div className="min-h-screen bg-slate-950 text-white">
        {/* Hero */}
        <section className="relative overflow-hidden px-4 pb-12 pt-10 sm:px-6 sm:pb-16">
          <div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-[#FACF2D]/10 blur-3xl" aria-hidden="true" />
          <div className="relative mx-auto w-full max-w-5xl">
            <p className="inline-flex items-center gap-2 rounded-full border border-[#FACF2D]/30 bg-[#FACF2D]/10 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.15em] text-[#FACF2D]">
              <Calendar className="h-3.5 w-3.5" /> Bookmark this page
            </p>
            <h1 className="speakable-headline mt-4 text-3xl font-black leading-tight tracking-tight sm:text-5xl">
              Long Weekend Calendar <span className="text-[#FACF2D]">2026</span>
            </h1>
            <p className="speakable-lead mt-4 max-w-2xl text-base leading-relaxed text-white/65 sm:text-lg">
              Every long weekend left in 2026, with the trip that fits it best and a cab
              to get you there. Plan the whole year from one page — expired weekends
              drop off automatically.
            </p>

            <div className="mt-6">
              <QuickAnswer
                tone="dark"
                question="Which long weekends are left in 2026?"
                answer={`${list.length} long weekends remain in 2026${list[0] ? `, the next being ${list[0].event} on ${list[0].dates}` : ''}. Three-day windows fall in late August, early and mid September, early October, Diwali week in November and Christmas — tempo travellers and buses book out first on every one of them.`}
                facts={[
                  { label: 'Next up', value: list[0] ? list[0].dates : '—' },
                  { label: 'Remaining in 2026', value: String(list.length) },
                  { label: 'Book tempo/bus', value: '1–2 weeks ahead' },
                ]}
              />
            </div>
          </div>
        </section>

        {/* Calendar list */}
        <section className="px-4 pb-14 sm:px-6">
          <div className="mx-auto w-full max-w-5xl space-y-4">
            {list.map((w) => (
              <article
                key={w.id}
                className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl transition-colors hover:border-[#FACF2D]/40 sm:p-6"
              >
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-[3px] bg-[repeating-linear-gradient(90deg,#FACF2D_0_18px,transparent_18px_34px)] opacity-60"
                />
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div className="min-w-0">
                    <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#FACF2D]">
                      {w.days}
                    </p>
                    <h2 className="mt-1 text-xl font-extrabold leading-tight sm:text-2xl">
                      {w.dates}
                    </h2>
                    <p className="mt-0.5 text-sm font-semibold text-white/80">{w.event}</p>
                    <p className="mt-2 max-w-xl text-sm leading-relaxed text-white/55">
                      {w.idea}
                    </p>
                  </div>
                  <div className="flex shrink-0 flex-col gap-2">
                    {w.links.map((l) => (
                      <Link
                        key={l.href}
                        href={l.href}
                        className="inline-flex items-center justify-between gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-2.5 text-sm font-bold text-white transition-all hover:border-[#FACF2D]/60 hover:bg-[#FACF2D]/10 hover:text-[#FACF2D]"
                      >
                        {l.label}
                        <ChevronRight className="h-4 w-4 shrink-0" />
                      </Link>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Pull-back CTA: get the calendar on WhatsApp = a saved thread */}
        <section className="px-4 pb-16 sm:px-6">
          <div className="mx-auto w-full max-w-5xl overflow-hidden rounded-3xl border-2 border-[#FACF2D]/50 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-6 sm:p-10">
            <div className="flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.15em] text-[#FACF2D]">
                  <Hourglass className="h-4 w-4" /> Never miss a window
                </p>
                <h2 className="mt-2 text-2xl font-black sm:text-3xl">
                  Get this calendar on WhatsApp
                </h2>
                <p className="mt-2 max-w-xl text-sm leading-relaxed text-white/60 sm:text-base">
                  One message and the full 2026 list lands in your chat — with a
                  reminder nudge before each long weekend so the good cabs are still
                  available when you decide.
                </p>
              </div>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 rounded-2xl bg-[#25D366] px-7 py-4 text-base font-extrabold text-black transition-all hover:-translate-y-0.5 hover:bg-[#3ae07a]"
              >
                Send me the list
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
