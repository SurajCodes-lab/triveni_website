import Link from 'next/link';
import Image from 'next/image';
import { Plane, MapPin, Clock, Navigation, Globe, Car } from '@/components/ui/icons';
import {
  AirportShell, AirportBackdrop, AirportCrumb, FlightStatusPill,
  getAccent, HeroPhoto, SerifHeading, TrustSeal, LaneStrip, GOLD_BTN, GHOST_BTN, FOIL,
} from '@/components/airport/AirportKit';
import { tightenTitle } from '@/lib/seo/serp-ctr';

export const revalidate = 3600;

const PHONE = '+917668570551';
const CANONICAL = 'https://www.trivenicabs.in/delhi-ncr-airports-guide';

export const metadata = {
  title: tightenTitle('Delhi Airports: IGI vs Jewar vs Hindon | Which to Use'),
  description: 'Delhi NCR has 3 airports — IGI, Jewar (Noida) and Hindon (Ghaziabad). Distances to Noida, Gurgaon, Ghaziabad, Meerut & Agra, plus fixed taxi fares. Call 7668570551.',
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: 'Delhi NCR Airports Compared — IGI vs Jewar vs Hindon',
    description: 'Three airports serve Delhi NCR. Which is closest to Noida, Gurgaon, Ghaziabad, Meerut or Agra? Full distance table and fixed airport taxi fares from Triveni Cabs™.',
    type: 'article', locale: 'en_IN', siteName: 'Triveni Cabs™', url: CANONICAL,
    images: [{ url: '/images/airport_section.jpg', width: 1200, height: 630, alt: 'Delhi NCR airports compared — IGI, Jewar and Hindon' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Delhi NCR Airports: IGI vs Jewar vs Hindon',
    description: 'Which Delhi airport should you fly into? Distances to every NCR hub, plus fixed taxi fares.',
    creator: '@trivenicabs', site: '@trivenicabs',
    images: ['/images/airport_section.jpg'],
  },
  keywords: 'how many airports in delhi, delhi ncr airports, igi vs jewar airport, hindon vs igi airport, nearest airport to ghaziabad, nearest airport to noida, nearest airport to meerut, nearest airport to greater noida, which delhi airport is closer to agra, noida international airport vs igi, delhi airport list, delhi second airport, delhi third airport, jewar airport distance from delhi, hindon airport distance from delhi',
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

const AIRPORTS = [
  {
    code: 'DEL', name: 'Indira Gandhi International', short: 'Delhi IGI',
    href: '/airport-service/delhi', img: '/images/sightseeing/Delhi/Delhi_hero_section.jpg',
    terminals: '3 terminals (T1, T2, T3)',
    type: 'Domestic & International',
    bestFor: 'Central and south Delhi, Gurgaon, and anyone who needs choice of flights',
    blurb: 'India’s busiest airport and the default answer for most travellers. T1 and T2 handle domestic traffic, T3 handles international and premium domestic. If your journey depends on a particular flight time or an overseas connection, this is almost certainly your airport.',
    terminalLinks: [
      { href: '/airport-service/delhi/igi-terminal-1-domestic', label: 'T1 Domestic' },
      { href: '/airport-service/delhi/igi-terminal-2-domestic', label: 'T2 Domestic' },
      { href: '/airport-service/delhi/igi-terminal-3-international', label: 'T3 International' },
    ],
  },
  {
    code: 'DXN', name: 'Noida International Airport, Jewar', short: 'Jewar',
    href: '/airport-service/jewar', img: '/images/airport_section.jpg',
    terminals: '1 terminal',
    type: 'International & Domestic',
    bestFor: 'Greater Noida, the Yamuna Expressway corridor, Agra and Mathura',
    blurb: 'NCR’s newest greenfield airport, in Gautam Buddha Nagar. Its real advantage is southward: it sits closer to Agra than any other NCR airport, which makes it the shortest airport-to-Taj-Mahal drive in the country at around 130 km.',
    terminalLinks: [
      { href: '/airport-service/jewar/jewar-terminal-1-international', label: 'Terminal 1 International' },
    ],
  },
  {
    code: 'HDO', name: 'Hindon Airport, Ghaziabad', short: 'Hindon',
    href: '/airport-service/hindon', img: '/images/citypage_hero_section_image.jpg',
    terminals: '1 civil terminal',
    type: 'Domestic (RCS-UDAN)',
    bestFor: 'Ghaziabad, Meerut and the eastern side of NCR',
    blurb: 'A civil enclave inside an Indian Air Force station, running regional flights under the government’s UDAN scheme to around ten cities. The schedule is thin, but if you are headed for Ghaziabad or Meerut it will save you a great deal of driving.',
    terminalLinks: [
      { href: '/airport-service/hindon/hindon-civil-terminal-domestic', label: 'Hindon Civil Terminal' },
    ],
  },
];

// Approximate road distances in km. Bold winner per row is computed, not hand-set.
const MATRIX = [
  { place: 'Connaught Place (central Delhi)', del: 20, dxn: 72, hdo: 30 },
  { place: 'Noida Sector 18', del: 35, dxn: 35, hdo: 25 },
  { place: 'Greater Noida', del: 50, dxn: 25, hdo: 40 },
  { place: 'Gurgaon (Cyber City)', del: 30, dxn: 90, hdo: 50 },
  { place: 'Ghaziabad', del: 45, dxn: 55, hdo: 8 },
  { place: 'Meerut', del: 90, dxn: 110, hdo: 55 },
  { place: 'Faridabad', del: 35, dxn: 70, hdo: 55 },
  { place: 'Agra (Taj Mahal)', del: 230, dxn: 130, hdo: 200 },
];

const FAQS = [
  { q: 'How many airports does Delhi NCR have?', a: 'Three commercial airports serve Delhi NCR. Indira Gandhi International (IGI, code DEL) in Delhi itself is by far the largest, with three terminals. Noida International Airport at Jewar (DXN) in Gautam Buddha Nagar is the newest, a greenfield airport with one terminal. Hindon Airport (HDO) in Ghaziabad is a civil enclave inside an Air Force station running regional UDAN flights from a single civil terminal.' },
  { q: 'Which airport is nearest to Ghaziabad?', a: 'Hindon, comfortably. It sits about 8 km from Ghaziabad city centre against roughly 45 km to IGI and 55 km to Jewar. If a Hindon flight fits your schedule it will save you well over an hour of driving each way compared with IGI.' },
  { q: 'Which airport is nearest to Noida and Greater Noida?', a: 'For Noida Sector 18 the three are closer than people expect — Hindon is nearest at about 25 km, with IGI and Jewar both around 35 km. For Greater Noida, Jewar is clearly closest at roughly 25 km, against 50 km to IGI.' },
  { q: 'Which Delhi airport is closest to Agra and the Taj Mahal?', a: 'Jewar, and by a wide margin. It is roughly 130 km from Agra straight down the Yamuna Expressway, around two to two and a half hours, against about 230 km and three to four hours from IGI. If your trip is built around the Taj Mahal, flying into Jewar is worth checking.' },
  { q: 'Which airport should I use for Gurgaon?', a: 'IGI, without much debate. Gurgaon sits about 30 km from IGI on the same side of the city, against roughly 90 km from Jewar and 50 km from Hindon. Gurgaon is one of the few destinations where IGI wins on distance as well as on flight choice.' },
  { q: 'Is it worth flying into Jewar or Hindon instead of IGI?', a: 'It depends entirely on where you are going and whether the flight exists. IGI has vastly more services, so for most routes it is the only practical option. But if you are headed for Greater Noida, Agra, Ghaziabad or Meerut and a Jewar or Hindon flight fits your schedule, the shorter drive is a genuine saving. Check the flight first, then the drive.' },
  { q: 'Do you provide taxis from all three NCR airports?', a: 'Yes. We run flight-tracked pickups with nameboard meet and greet at all three, including every IGI terminal, with fixed fares quoted before you fly and no surge pricing at any hour. Each airport has its own page on this site with exact pickup points, waiting allowances and fare tables.' },
];

function best(row) {
  const m = Math.min(row.del, row.dxn, row.hdo);
  return { del: row.del === m, dxn: row.dxn === m, hdo: row.hdo === m };
}

const articleSchema = {
  '@context': 'https://schema.org', '@type': 'Article',
  headline: 'Delhi NCR Airports Compared: IGI vs Jewar vs Hindon',
  description: 'A comparison of the three commercial airports serving Delhi NCR — Indira Gandhi International, Noida International at Jewar, and Hindon at Ghaziabad — with road distances to every major NCR destination.',
  author: { '@type': 'Organization', name: 'Triveni Cabs', url: 'https://www.trivenicabs.in' },
  publisher: { '@type': 'Organization', name: 'Triveni Cabs', '@id': 'https://www.trivenicabs.in/#organization' },
  mainEntityOfPage: { '@type': 'WebPage', '@id': CANONICAL },
  image: 'https://www.trivenicabs.in/images/airport_section.jpg',
};

const breadcrumbSchema = {
  '@context': 'https://schema.org', '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.trivenicabs.in' },
    { '@type': 'ListItem', position: 2, name: 'Airport Service', item: 'https://www.trivenicabs.in/airport-service' },
    { '@type': 'ListItem', position: 3, name: 'Delhi NCR Airports Guide', item: CANONICAL },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: FAQS.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
};

const itemListSchema = {
  '@context': 'https://schema.org', '@type': 'ItemList',
  name: 'Commercial airports serving Delhi NCR',
  itemListElement: AIRPORTS.map((a, i) => ({
    '@type': 'ListItem', position: i + 1,
    item: { '@type': 'Airport', name: a.name, iataCode: a.code, url: `https://www.trivenicabs.in${a.href}` },
  })),
};

export default function DelhiNcrAirportsGuidePage() {
  const accent = getAccent('default');

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />

      <AirportShell accent={accent}>
        {/* ══ HERO ══ */}
        <section className="relative overflow-hidden px-4 pt-14 sm:pt-24 pb-16 md:pb-20">
          <HeroPhoto src="/images/airport_section.jpg" />
          <LaneStrip />
          <div className="relative z-10 mx-auto max-w-5xl">
            <AirportCrumb trail={[
              { label: 'Home', href: '/' },
              { label: 'Airport Service', href: '/airport-service' },
              { label: 'Delhi NCR Airports' },
            ]} />
            <FlightStatusPill label="3 Airports · 24/7 Pickup" />
            <h1 className="mt-6 font-display-serif text-balance text-4xl font-black leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
              <span className={`block ${FOIL}`}>Delhi NCR has three airports.</span>
              <span className="block text-white">Which one should you fly into?</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
              IGI, Jewar and Hindon each win for a different part of the region. Here is the honest comparison —
              road distances to every major NCR destination, what each airport is actually good for, and where
              the obvious choice turns out to be the wrong one.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={`tel:${PHONE}`} className={`${GOLD_BTN} w-full px-7 py-4 text-base sm:w-auto lg:py-2`}>
                <Plane className="h-5 w-5" /> Book Airport Pickup
              </a>
              <Link href="/airport-service" className={`${GHOST_BTN} w-full px-7 py-4 text-base sm:w-auto lg:py-2`}>
                <Globe className="h-5 w-5" /> All Airport Services
              </Link>
            </div>
            <TrustSeal compact className="mt-6 max-w-md" />
          </div>
        </section>

        {/* ══ THE THREE AIRPORTS ══ */}
        <section className="relative overflow-hidden px-4 py-16 md:py-20">
          <AirportBackdrop variant="grid" />
          <div className="relative z-10 mx-auto max-w-7xl">
            <SerifHeading center eyebrow="The Three" title="Airports serving" highlight="Delhi NCR" className="mb-12" />
            <div className="grid gap-6 lg:grid-cols-3">
              {AIRPORTS.map((a) => (
                <article key={a.code} className="group overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.02] transition-all duration-500 hover:-translate-y-1.5 hover:border-[color:var(--air-accent)]/40 hover:shadow-[0_30px_80px_-30px_var(--air-glow)]">
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image src={a.img} alt={a.name} fill sizes="(max-width:1024px) 100vw, 33vw" className="object-cover transition-transform duration-700 group-hover:scale-[1.06]" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--air-deep)] via-[var(--air-deep)]/35 to-transparent" />
                    <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-xl border border-[color:var(--air-accent)]/35 bg-black/55 px-3 py-1.5 font-mono text-sm font-black text-[color:var(--air-accent)] backdrop-blur-sm">
                      <Plane className="h-3.5 w-3.5" /> {a.code}
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="font-display-serif text-2xl font-black text-white">{a.short}</h3>
                    <p className="mt-1 font-mono text-xs tracking-wide text-slate-500">{a.name}</p>
                    <dl className="mt-4 space-y-2 text-sm">
                      <div className="flex gap-2"><dt className="shrink-0 font-bold text-slate-500">Terminals:</dt><dd className="text-slate-300">{a.terminals}</dd></div>
                      <div className="flex gap-2"><dt className="shrink-0 font-bold text-slate-500">Type:</dt><dd className="text-slate-300">{a.type}</dd></div>
                      <div className="flex gap-2"><dt className="shrink-0 font-bold text-slate-500">Best for:</dt><dd className="text-slate-300">{a.bestFor}</dd></div>
                    </dl>
                    <p className="mt-4 text-sm leading-relaxed text-slate-400">{a.blurb}</p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {a.terminalLinks.map((t) => (
                        <Link key={t.href} href={t.href} className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-semibold text-slate-300 transition-colors hover:border-[color:var(--air-accent)]/40 hover:text-[color:var(--air-accent)]">
                          {t.label}
                        </Link>
                      ))}
                    </div>
                    <Link href={a.href} className="mt-5 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-[color:var(--air-accent)]">
                      {a.short} taxi fares <Navigation className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ══ DISTANCE MATRIX ══ */}
        <section className="relative px-4 py-16 md:py-20">
          <div className="mx-auto max-w-5xl">
            <SerifHeading
              center eyebrow="Road Distances" title="Which airport is" highlight="closest?"
              subtitle="Approximate road distance in kilometres. The shortest for each destination is highlighted."
              className="mb-10"
            />

            {/* Mobile: card per destination */}
            <div className="space-y-3 md:hidden">
              {MATRIX.map((r) => {
                const b = best(r);
                return (
                  <div key={r.place} className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-4 backdrop-blur-xl">
                    <p className="flex items-center gap-2 text-sm font-bold text-white">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-amber-400/15">
                        <MapPin className="h-4 w-4 text-[color:var(--air-accent)]" />
                      </span>
                      {r.place}
                    </p>
                    <dl className="mt-3 grid grid-cols-3 gap-2 text-center">
                      {[['IGI', r.del, b.del], ['Jewar', r.dxn, b.dxn], ['Hindon', r.hdo, b.hdo]].map(([l, v, win]) => (
                        <div key={l} className={`rounded-xl border px-2 py-2 ${win ? 'border-[color:var(--air-accent)]/40 bg-[color:var(--air-accent)]/[0.1]' : 'border-white/[0.06] bg-white/[0.02]'}`}>
                          <dt className="text-[10px] font-bold uppercase tracking-wider text-slate-500">{l}</dt>
                          <dd className={`font-mono text-sm font-bold ${win ? 'text-[color:var(--air-accent)]' : 'text-slate-300'}`}>{v} km</dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                );
              })}
            </div>

            {/* Desktop: semantic table */}
            <div className="hidden overflow-hidden rounded-2xl border border-[color:var(--air-accent)]/15 bg-black/30 backdrop-blur-xl md:block">
              <table className="w-full text-left text-sm">
                <caption className="sr-only">Road distance in kilometres from each Delhi NCR airport to major destinations</caption>
                <thead>
                  <tr className="border-b border-[color:var(--air-accent)]/15 bg-[color:var(--air-accent)]/[0.08]">
                    <th scope="col" className="px-6 py-3.5 text-[10px] font-bold uppercase tracking-[0.2em] text-[color:var(--air-accent)]">Destination</th>
                    <th scope="col" className="px-4 py-3.5 text-[10px] font-bold uppercase tracking-[0.2em] text-[color:var(--air-accent)]">Delhi IGI</th>
                    <th scope="col" className="px-4 py-3.5 text-[10px] font-bold uppercase tracking-[0.2em] text-[color:var(--air-accent)]">Jewar</th>
                    <th scope="col" className="px-6 py-3.5 text-[10px] font-bold uppercase tracking-[0.2em] text-[color:var(--air-accent)]">Hindon</th>
                  </tr>
                </thead>
                <tbody>
                  {MATRIX.map((r) => {
                    const b = best(r);
                    const cell = (v, win) => (
                      <td className={`px-4 py-4 font-mono text-sm ${win ? 'font-black text-[color:var(--air-accent)]' : 'text-slate-400'}`}>
                        {v} km{win && <span className="sr-only"> (closest)</span>}
                      </td>
                    );
                    return (
                      <tr key={r.place} className="border-b border-white/[0.04] transition-colors hover:bg-[color:var(--air-accent)]/[0.04]">
                        <th scope="row" className="px-6 py-4 text-left text-sm font-semibold text-white">{r.place}</th>
                        {cell(r.del, b.del)}
                        {cell(r.dxn, b.dxn)}
                        {cell(r.hdo, b.hdo)}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            <p className="mt-6 text-center text-sm leading-relaxed text-slate-400">
              Distances are approximate road distances and will vary with your exact pickup point and route.
              Whichever airport you land at, we quote a fixed fare before you fly — no surge, no meter.
            </p>
            <div className="mt-8 flex justify-center"><TrustSeal /></div>
          </div>
        </section>

        {/* ══ HOW TO CHOOSE — warm band ══ */}
        <section className="relative bg-gradient-to-b from-[#FFF6DC] via-amber-50/70 to-white px-4 py-16 text-slate-900 md:py-20">
          <div className="mx-auto max-w-4xl">
            <SerifHeading tone="light" center eyebrow="The Short Version" title="How to actually" highlight="choose" className="mb-10" />
            <div className="space-y-5 text-lg leading-relaxed text-slate-700">
              <p>
                The honest advice is to check the flight before you check the drive. IGI operates vastly more
                services than the other two combined, so for most routes and most dates it is not really a
                choice — it is the only airport with a flight that works. Start there.
              </p>
              <p>
                Where it becomes a genuine decision is when a Jewar or Hindon flight happens to fit. If you are
                heading to <strong>Greater Noida, Agra or Mathura</strong>, Jewar is meaningfully closer, and the
                Yamuna Expressway makes the drive fast as well as short. If you are heading to{' '}
                <strong>Ghaziabad or Meerut</strong>, Hindon is dramatically closer — 8 km against 45 km to IGI
                for Ghaziabad — and will save you well over an hour each way.
              </p>
              <p>
                For <strong>central Delhi, south Delhi and Gurgaon</strong>, IGI wins on distance as well as on
                flight choice, so there is rarely a reason to look elsewhere. And one point worth making plainly:
                a shorter drive is no bargain if it costs you a connection or an inconvenient departure time.
                The drive is the smaller part of the journey.
              </p>
            </div>
          </div>
        </section>

        {/* ══ FAQ — zero-JS details/summary ══ */}
        <section className="relative bg-gradient-to-b from-white via-amber-50/60 to-[#FFF6DC] px-4 py-16 text-slate-900 md:py-20">
          <div className="mx-auto max-w-4xl">
            <SerifHeading tone="light" center eyebrow="Common Questions" title="Delhi NCR airports" highlight="FAQs" className="mb-10" />
            <div className="space-y-3">
              {FAQS.map((f, i) => (
                <details key={i} className="group overflow-hidden rounded-2xl border border-amber-200/60 bg-white shadow-[0_16px_50px_-34px_rgba(15,23,42,0.3)]" open={i === 0}>
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 font-semibold text-slate-900 marker:hidden">
                    {f.q}
                    <span className="shrink-0 font-mono text-amber-500 transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <div className="border-t border-amber-100 px-5 pb-5 pt-4 leading-relaxed text-slate-600">{f.a}</div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ══ CTA ══ */}
        <section className="relative overflow-hidden px-4 py-12 sm:py-20">
          <AirportBackdrop variant="full" />
          <div className="relative z-10 mx-auto max-w-4xl text-center">
            <FlightStatusPill label="Now Boarding" className="mx-auto" />
            <h2 className="mt-6 font-display-serif text-balance text-4xl font-black leading-tight text-white md:text-5xl">
              Landing at any NCR airport? We will be there.
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lg text-slate-300">
              Flight-tracked pickup with nameboard meet &amp; greet at IGI, Jewar and Hindon. Fixed fare, no surge, 24/7.
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a href={`tel:${PHONE}`} className={`${GOLD_BTN} w-full px-9 py-4 text-base sm:w-auto lg:py-2`}>
                <Car className="h-5 w-5" /> Call +91 7668570551
              </a>
              <Link href="/airport-service" className={`${GHOST_BTN} w-full px-9 py-4 text-base sm:w-auto lg:py-2`}>
                <Clock className="h-5 w-5" /> Compare Airport Fares
              </Link>
            </div>
          </div>
        </section>
      </AirportShell>
    </>
  );
}
