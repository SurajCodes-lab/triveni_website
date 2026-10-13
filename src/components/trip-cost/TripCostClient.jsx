'use client';

// src/components/trip-cost/TripCostClient.jsx
//
// The end-to-end cost page. Two exact figures at the top — the cab fare and the
// toll — then the three charges that are named rather than costed, then the
// self-drive comparison.
//
// The design decision worth recording: the "all in" headline is deliberately
// fare + toll only, and it says so. Adding a made-up allowance for parking and
// state entry would produce a bigger, rounder, more satisfying number that
// nobody could check. A smaller honest number with the remainder named is more
// useful to somebody actually budgeting.

import Link from 'next/link';
import {
  Phone, MapPin, Clock, Car, IndianRupee, Route, Fuel, ArrowRight,
  CheckCircle, AlertCircle, Building2,
} from '@/components/ui/icons';
import { trackWhatsAppClick, trackPhoneCall } from '@/utilis/analytics';

const PHONE = '7668570551';
const inr = (n) => `₹${Number(n).toLocaleString('en-IN')}`;

export default function TripCostClient({ data, shortAnswer = null, links = [] }) {
  const { origin, destination, km, duration, highway, vehicles, toll, fuel, crossing } = data;
  const msg = `Hi, I'd like the all-in cost for a ${origin} to ${destination} trip.`;

  return (
    <main className="min-h-screen bg-white">
      {/* ─── HERO ─────────────────────────────────────────────────────── */}
      <section className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-800 px-4 pb-14 pt-24 sm:px-6">
        <div className="mx-auto max-w-5xl">
          <nav aria-label="Breadcrumb" className="mb-5 text-sm text-slate-400">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="px-2 text-slate-600">/</span>
            <span className="text-white">{origin} to {destination} trip cost</span>
          </nav>

          <h1 className="max-w-3xl text-3xl font-black leading-tight text-white sm:text-4xl md:text-5xl">
            {origin} to {destination}: what the trip actually costs
          </h1>
          <p className="mt-4 max-w-2xl leading-relaxed text-slate-300">
            The cab fare and the toll, added together, plus the three charges that sit on top —
            named honestly rather than estimated into a round number.
          </p>

          <div className="mt-7 flex flex-wrap gap-x-7 gap-y-2 text-sm text-slate-300">
            <span className="flex items-center gap-1.5">
              <Route className="h-4 w-4 text-[#FACF2D]" /> {km} km
            </span>
            {duration && (
              <span className="flex items-center gap-1.5">
                <Clock className="h-4 w-4 text-[#FACF2D]" /> {duration}
              </span>
            )}
            {highway && (
              <span className="flex items-center gap-1.5">
                <MapPin className="h-4 w-4 text-[#FACF2D]" /> {highway}
              </span>
            )}
          </div>

          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href={`tel:${PHONE}`}
              onClick={() => trackPhoneCall(`trip-cost-${data.slug}-hero`)}
              className="inline-flex items-center gap-2 rounded-xl bg-[#FACF2D] px-5 py-3 font-bold text-slate-900 transition hover:brightness-95"
            >
              <Phone className="h-4 w-4" /> Call {PHONE}
            </a>
            <a
              href={`https://wa.me/91${PHONE}?text=${encodeURIComponent(msg)}`}
              onPointerDown={() => trackWhatsAppClick(`trip-cost-${data.slug}-hero`)}
              className="inline-flex items-center gap-2 rounded-xl border border-white/25 px-5 py-3 font-semibold text-white transition hover:bg-white/10"
            >
              Get the all-in figure
            </a>
          </div>
        </div>
      </section>

      {shortAnswer}

      {/* ─── THE TWO EXACT FIGURES ────────────────────────────────────── */}
      <section className="px-4 py-14 sm:px-6 md:py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
            The cab fare and the toll
          </h2>
          <p className="mt-2 max-w-3xl text-slate-600">
            These two are exact. The fare is the published rate card applied to {km} km; the toll is
            the {toll.plazas.length} plaza{toll.plazas.length === 1 ? '' : 's'} on this corridor
            {toll.estimate ? ', as a planning estimate' : ''}.
          </p>

          <div className="mt-8 overflow-x-auto">
            <table className="w-full min-w-[560px] border-collapse text-left">
              <thead>
                <tr className="border-b-2 border-slate-900">
                  <th className="pb-3 pr-4 text-sm font-bold uppercase tracking-wide text-slate-600">Vehicle</th>
                  <th className="pb-3 pr-4 text-right text-sm font-bold uppercase tracking-wide text-slate-600">Per km</th>
                  <th className="pb-3 pr-4 text-right text-sm font-bold uppercase tracking-wide text-slate-600">Cab fare</th>
                  <th className="pb-3 pr-4 text-right text-sm font-bold uppercase tracking-wide text-slate-600">Toll</th>
                  <th className="pb-3 text-right text-sm font-bold uppercase tracking-wide text-slate-600">Fare + toll</th>
                </tr>
              </thead>
              <tbody>
                {vehicles.map((v) => {
                  const t = v.key === 'sedan' ? toll.car : toll.suv ?? toll.car;
                  return (
                    <tr key={v.key} className="border-b border-slate-200">
                      <td className="py-4 pr-4 font-semibold text-slate-900">{v.name}</td>
                      <td className="py-4 pr-4 text-right text-slate-700 [font-variant-numeric:tabular-nums]">{inr(v.perKm)}</td>
                      <td className="py-4 pr-4 text-right text-slate-900 [font-variant-numeric:tabular-nums]">{v.display}</td>
                      <td className="py-4 pr-4 text-right text-slate-700 [font-variant-numeric:tabular-nums]">
                        {t === null ? '—' : inr(t)}
                      </td>
                      <td className="py-4 text-right text-lg font-bold text-slate-900 [font-variant-numeric:tabular-nums]">
                        {t === null ? '—' : inr(v.amount + t)}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <p className="mt-5 text-sm leading-relaxed text-slate-600">
            The cab fare includes the vehicle, fuel, the driver and GST. Sedan toll is the car rate;
            the other three use the SUV rate, which is how the plazas class them.
            {toll.estimate && ' These toll figures are a planning estimate built from the published plaza schedule rather than a notified tariff — confirm the current rate and the vehicle\'s toll class before travel.'}
          </p>
        </div>
      </section>

      {/* ─── THE THREE NAMED CHARGES ──────────────────────────────────── */}
      <section className="bg-slate-50 px-4 py-14 sm:px-6 md:py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
            The three charges we will not put a number on
          </h2>
          <p className="mt-2 text-slate-600">
            Each of these is real and charged at actual. We name them rather than estimating them
            into the headline, because a figure you cannot check is worth less than a line you can
            ask about.
          </p>

          <div className="mt-8 space-y-5">
            <article className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
              <h3 className="flex items-center gap-2.5 text-lg font-bold text-slate-900">
                <Building2 className="h-5 w-5 shrink-0 text-[#FACF2D]" /> State entry
              </h3>
              <p className="mt-2 leading-relaxed text-slate-700">
                {crossing === null
                  ? 'A commercial vehicle entering another state pays that state a levy, collected at or near the border. Ask us which states this route crosses and we will tell you.'
                  : crossing.crosses
                    ? `This route runs from ${crossing.from} into ${crossing.to}, so a state entry levy applies. It is set by the state government, collected at or near the border, and charged at actual. Some routes cross an intermediate state as well — ask us for the full count on your itinerary.`
                    : `Both ends of this route are in ${crossing.from}, so no state entry levy applies on a vehicle registered there. A vehicle registered elsewhere pays on entry.`}
              </p>
            </article>

            <article className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
              <h3 className="flex items-center gap-2.5 text-lg font-bold text-slate-900">
                <Car className="h-5 w-5 shrink-0 text-[#FACF2D]" /> The driver night allowance
              </h3>
              <p className="mt-2 leading-relaxed text-slate-700">
                A fixed amount per night the driver is away from base, covering his food and bed. On
                a same-day return it does not apply at all, however late the car gets in. On an
                overnight trip it applies once. It goes to the driver rather than to us, which is
                why it is itemised.
              </p>
            </article>

            <article className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
              <h3 className="flex items-center gap-2.5 text-lg font-bold text-slate-900">
                <MapPin className="h-5 w-5 shrink-0 text-[#FACF2D]" /> Parking
              </h3>
              <p className="mt-2 leading-relaxed text-slate-700">
                Monument, hotel and airport parking, paid where it is charged and billed at actual.
                It is the smallest of the three on almost every corridor, and the one that varies
                most with what you actually do at the far end.
              </p>
            </article>
          </div>

          <p className="mt-6 flex gap-2.5 text-sm leading-relaxed text-slate-700">
            <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
            On request we will estimate all three for your specific itinerary alongside the fare, so
            the whole figure is known before you travel. What we will not do is fold them into a
            per-kilometre rate.
          </p>
        </div>
      </section>

      {/* ─── SELF-DRIVE COMPARISON ────────────────────────────────────── */}
      {fuel && (fuel.petrol || fuel.diesel) && (
        <section className="px-4 py-14 sm:px-6 md:py-20">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
              If you drove it yourself
            </h2>
            <p className="mt-2 text-slate-600">
              The fuel for {km} km one way, for comparison. Note what it leaves out: the car, the
              wear, the parking, and the driving.
            </p>
            <dl className="mt-7 grid gap-5 sm:grid-cols-3">
              {fuel.petrol ? (
                <div className="rounded-xl border border-slate-200 p-5">
                  <dt className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-slate-500">
                    <Fuel className="h-4 w-4" /> Petrol
                  </dt>
                  <dd className="mt-1 text-2xl font-bold text-slate-900 [font-variant-numeric:tabular-nums]">{inr(fuel.petrol)}</dd>
                </div>
              ) : null}
              {fuel.diesel ? (
                <div className="rounded-xl border border-slate-200 p-5">
                  <dt className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-slate-500">
                    <Fuel className="h-4 w-4" /> Diesel
                  </dt>
                  <dd className="mt-1 text-2xl font-bold text-slate-900 [font-variant-numeric:tabular-nums]">{inr(fuel.diesel)}</dd>
                </div>
              ) : null}
              <div className="rounded-xl border border-slate-200 p-5">
                <dt className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-slate-500">
                  <IndianRupee className="h-4 w-4" /> Plus the same toll
                </dt>
                <dd className="mt-1 text-2xl font-bold text-slate-900 [font-variant-numeric:tabular-nums]">
                  {toll.car === null ? '—' : inr(toll.car)}
                </dd>
              </div>
            </dl>
            <p className="mt-5 flex gap-2.5 text-sm leading-relaxed text-slate-700">
              <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" />
              Self-drive fuel plus toll looks cheaper than a chauffeur-driven fare and it is not the
              same product. A rental, the deposit, the wear and the hours at the wheel are all on
              the other side of that comparison.
            </p>
          </div>
        </section>
      )}

      {/* ─── THE PLAZAS ───────────────────────────────────────────────── */}
      {toll.plazas.length > 0 && (
        <section className="bg-slate-50 px-4 py-14 sm:px-6">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
              Where the toll is paid
            </h2>
            <div className="mt-7 overflow-x-auto">
              <table className="w-full min-w-[480px] border-collapse text-left">
                <thead>
                  <tr className="border-b-2 border-slate-900">
                    <th className="pb-3 pr-4 text-sm font-bold uppercase tracking-wide text-slate-600">Plaza</th>
                    <th className="pb-3 pr-4 text-right text-sm font-bold uppercase tracking-wide text-slate-600">Km in</th>
                    <th className="pb-3 pr-4 text-right text-sm font-bold uppercase tracking-wide text-slate-600">Car</th>
                    <th className="pb-3 pr-4 text-right text-sm font-bold uppercase tracking-wide text-slate-600">SUV</th>
                    <th className="pb-3 text-sm font-bold uppercase tracking-wide text-slate-600">FASTag</th>
                  </tr>
                </thead>
                <tbody>
                  {toll.plazas.map((p) => (
                    <tr key={p.name} className="border-b border-slate-200">
                      <td className="py-3 pr-4 font-medium text-slate-900">{p.name}</td>
                      <td className="py-3 pr-4 text-right text-slate-700 [font-variant-numeric:tabular-nums]">{p.location}</td>
                      <td className="py-3 pr-4 text-right text-slate-700 [font-variant-numeric:tabular-nums]">{inr(p.carCost)}</td>
                      <td className="py-3 pr-4 text-right text-slate-700 [font-variant-numeric:tabular-nums]">{inr(p.suvCost)}</td>
                      <td className="py-3 text-slate-700">{p.acceptsFASTag ? 'Yes' : 'Check'}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}

      {/* ─── LINKS ────────────────────────────────────────────────────── */}
      {links.length > 0 && (
        <section className="border-t border-slate-200 px-4 py-12 sm:px-6">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-xl font-bold text-slate-900">More on this corridor</h2>
            <div className="mt-5 flex flex-wrap gap-2.5">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="inline-flex items-center gap-1.5 rounded-full border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-900 hover:text-slate-900"
                >
                  {l.label} <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ─── CTA ──────────────────────────────────────────────────────── */}
      <section className="bg-slate-900 px-4 py-14 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Want the whole figure for your dates?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-slate-300">
            Tell us the dates and the vehicle and we will put a number on the state entry, the night
            allowance and the parking alongside the fare, so nothing is a surprise at the end.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <a
              href={`tel:${PHONE}`}
              onClick={() => trackPhoneCall(`trip-cost-${data.slug}-footer`)}
              className="inline-flex items-center gap-2 rounded-xl bg-[#FACF2D] px-6 py-3 font-bold text-slate-900 transition hover:brightness-95"
            >
              <Phone className="h-4 w-4" /> {PHONE}
            </a>
            <a
              href={`https://wa.me/91${PHONE}?text=${encodeURIComponent(msg)}`}
              onPointerDown={() => trackWhatsAppClick(`trip-cost-${data.slug}-footer`)}
              className="inline-flex items-center gap-2 rounded-xl border border-white/25 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
            >
              WhatsApp us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
