import Link from 'next/link';
import FareCalculator from '@/components/calculator/FareCalculator';
import QuickAnswer from '@/components/seo/QuickAnswer';
import { getRatingAndReviews } from '@/lib/seo/review-helpers';
import { tightenTitle } from '@/lib/seo/serp-ctr';

export const revalidate = 3600;

const BASE = 'https://www.trivenicabs.in';

export const metadata = {
  title: tightenTitle('Taxi Fare Calculator India 2026 — Cab, Tempo & Bus Rates in 10 Seconds'),
  description:
    'Free taxi fare calculator: sedan ₹11/km, SUV ₹15–18/km, tempo traveller ₹20–28/km, bus from ₹30/km. Enter your route, get the all-inclusive fare instantly — fuel, driver and GST included.',
  keywords:
    'taxi fare calculator, cab fare calculator india, outstation cab fare calculator, tempo traveller fare calculator, delhi taxi fare per km, cab rate calculator 2026',
  alternates: { canonical: `${BASE}/fare-calculator` },
  openGraph: {
    title: 'Taxi Fare Calculator — Instant All-Inclusive Cab Rates',
    description:
      'Work out any one-way or round-trip fare in seconds. Sedan ₹11/km · SUV ₹15–18 · Tempo ₹20–28 · Bus ₹30+. No hidden charges.',
    url: `${BASE}/fare-calculator`,
    type: 'website',
    siteName: 'Triveni Cabs™',
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

const RATE_ROWS = [
  ['Sedan (Dzire / Etios)', '₹11/km', '4 passengers', 'One-way discount applies'],
  ['SUV Ertiga', '₹15/km', '6 passengers', 'One-way discount applies'],
  ['SUV Innova Crysta', '₹18/km', '7 passengers', 'One-way discount applies'],
  ['Tempo Traveller 12-seater', '₹23/km', '12 passengers', 'Billed as round trip'],
  ['Tempo Traveller 16-seater', '₹25/km', '16 passengers', 'Billed as round trip'],
  ['Tempo Traveller 17-seater', '₹25/km', '17 passengers', 'Billed as round trip'],
  ['Tempo Traveller 20-seater', '₹31/km', '20 passengers', 'Billed as round trip'],
  ['Tempo Traveller 26-seater', '₹31/km', '26 passengers', 'Billed as round trip'],
  ['Bus (22–56 seater)', 'from ₹30/km', 'up to 56', 'Billed as round trip'],
];

export default function FareCalculatorPage() {
  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to calculate your taxi fare',
    description:
      'Estimate any outstation cab fare in India with per-km rates: distance × rate, with a 250–300 km/day minimum for outstation trips.',
    totalTime: 'PT1M',
    step: [
      { '@type': 'HowToStep', position: 1, name: 'Pick the vehicle', text: 'Sedan ₹11/km, SUV ₹15–18/km, Tempo Traveller ₹20–28/km by seater, Bus from ₹30/km.' },
      { '@type': 'HowToStep', position: 2, name: 'Enter the route', text: 'Type origin and destination — the calculator uses the real road distance.' },
      { '@type': 'HowToStep', position: 3, name: 'Read the all-inclusive fare', text: 'Fuel, driver allowance and GST included. Tolls and state tax at actuals. Tempo and bus one-way trips bill as round trips.' },
    ],
  };

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Taxi fare calculator — Triveni Cabs',
    serviceType: 'TaxiService',
    provider: { '@type': 'LocalBusiness', name: 'Triveni Cabs', telephone: '+91-7668570551' },
    areaServed: { '@type': 'Country', name: 'India' },
    ...getRatingAndReviews('fare-calculator', 'outstation'),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      <div className="min-h-screen bg-slate-950 text-white">
        <section className="relative overflow-hidden px-4 pb-10 pt-10 sm:px-6">
          <div className="absolute -right-24 top-0 h-72 w-72 rounded-full bg-[#FACF2D]/10 blur-3xl" aria-hidden="true" />
          <div className="relative mx-auto w-full max-w-5xl">
            <p className="inline-flex rounded-full border border-[#FACF2D]/30 bg-[#FACF2D]/10 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.15em] text-[#FACF2D]">
              Free tool · No sign-up
            </p>
            <h1 className="speakable-headline font-display-serif mt-4 text-3xl font-black leading-tight tracking-tight sm:text-5xl">
              Taxi Fare <span className="text-[#FACF2D]">Calculator</span>
            </h1>
            <p className="speakable-lead mt-4 max-w-2xl text-base leading-relaxed text-white/65 sm:text-lg">
              The exact per-km rates we quote on the phone, in a calculator. Distance ×
              rate, all-inclusive — fuel, driver and GST in; tolls at actuals. Save this
              page for every trip you plan.
            </p>

            <div className="mt-6">
              <QuickAnswer
                tone="dark"
                question="How much does a taxi cost per km in India?"
                answer="With Triveni Cabs™ a sedan costs ₹11/km, an SUV ₹15–18/km, a tempo traveller ₹20–28/km depending on seater, and a 22–56 seater bus from ₹30/km — all-inclusive of fuel, driver and GST. Outstation trips bill a 250–300 km/day minimum, and tempo/bus one-way trips are charged as round trips."
                facts={[
                  { label: 'Sedan', value: '₹11/km' },
                  { label: 'SUV', value: '₹15–18/km' },
                  { label: 'Tempo', value: '₹20–28/km' },
                  { label: 'Bus', value: 'from ₹30/km' },
                ]}
              />
            </div>
          </div>
        </section>

        <section className="px-4 pb-6 sm:px-6">
          <div className="mx-auto w-full max-w-5xl">
            <FareCalculator />
          </div>
        </section>

        <section className="px-4 pb-12 sm:px-6">
          <div className="mx-auto w-full max-w-5xl">
            <h2 className="text-2xl font-extrabold sm:text-3xl">
              The rate card behind the calculator
            </h2>
            {/* Mobile: stacked rate cards — no sideways scrolling */}
            <div className="mt-5 space-y-3 md:hidden">
              {RATE_ROWS.map((r) => (
                <div key={`rate-card-${r[0]}`} className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                  <p className="text-sm font-bold text-white">{r[0]}</p>
                  <dl className="mt-2.5 space-y-1.5">
                    <div className="flex items-baseline justify-between gap-3">
                      <dt className="text-xs font-semibold uppercase tracking-wide text-white/40">Rate</dt>
                      <dd className="text-right text-sm font-bold text-[#FACF2D]">{r[1]}</dd>
                    </div>
                    <div className="flex items-baseline justify-between gap-3">
                      <dt className="text-xs font-semibold uppercase tracking-wide text-white/40">Seats</dt>
                      <dd className="text-right text-sm text-white/60">{r[2]}</dd>
                    </div>
                    <div className="flex items-baseline justify-between gap-3">
                      <dt className="text-xs font-semibold uppercase tracking-wide text-white/40">Billing note</dt>
                      <dd className="text-right text-sm text-white/60">{r[3]}</dd>
                    </div>
                  </dl>
                </div>
              ))}
            </div>

            {/* Desktop: true semantic table, fits its container */}
            <div className="mt-5 hidden overflow-hidden rounded-2xl border border-white/10 md:block">
              <table className="w-full text-sm">
                <caption className="sr-only">
                  Triveni Cabs™ per-kilometre rate card, 2026
                </caption>
                <thead>
                  <tr className="bg-white/5 text-left">
                    <th scope="col" className="px-4 py-3 font-bold text-[#FACF2D]">Vehicle</th>
                    <th scope="col" className="px-4 py-3 font-bold text-[#FACF2D]">Rate</th>
                    <th scope="col" className="px-4 py-3 font-bold text-[#FACF2D]">Seats</th>
                    <th scope="col" className="px-4 py-3 font-bold text-[#FACF2D]">Billing note</th>
                  </tr>
                </thead>
                <tbody>
                  {RATE_ROWS.map((r) => (
                    <tr key={r[0]} className="border-t border-white/5">
                      <td className="px-4 py-3 font-semibold text-white">{r[0]}</td>
                      <td className="px-4 py-3 font-bold text-[#FACF2D]">{r[1]}</td>
                      <td className="px-4 py-3 text-white/60">{r[2]}</td>
                      <td className="px-4 py-3 text-white/60">{r[3]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-xs text-white/40">
              Outstation minimum billing 250–300 km/day · round trips include ₹300/night
              driver allowance · tolls and state tax at actuals.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/one-way-cab" className="rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-bold transition-all hover:border-[#FACF2D]/60 hover:text-[#FACF2D]">
                Browse one-way routes
              </Link>
              <Link href="/round-trip" className="rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-bold transition-all hover:border-[#FACF2D]/60 hover:text-[#FACF2D]">
                Round-trip routes
              </Link>
              <Link href="/tempo-traveller" className="rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-bold transition-all hover:border-[#FACF2D]/60 hover:text-[#FACF2D]">
                Tempo Traveller
              </Link>
              <Link href="/long-weekend-calendar-2026" className="rounded-xl border border-[#FACF2D]/40 bg-[#FACF2D]/10 px-5 py-3 text-sm font-bold text-[#FACF2D] transition-all hover:bg-[#FACF2D]/20">
                Long Weekend Calendar 2026
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
