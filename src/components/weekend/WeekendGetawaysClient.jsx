'use client';

// src/components/weekend/WeekendGetawaysClient.jsx
//
// The renderer shared by the 22 new weekend-getaway city pages.
//
// Built as one component with a data file behind it rather than as 22 standalone
// pages, which is how the six existing weekend pages were done. Those carry
// their destination list, their FAQs and their hand-typed fares inline in
// page.js, 482 lines apiece, and the cost of that shows: a fare can only be
// corrected in 22 places, and the per-destination `rating: 4.9` they invented
// had to be carried forward every time the shape was copied.
//
// Here the page wrapper holds metadata and structured data; everything a reader
// sees comes from one component fed by one researched record.
//
// The existing six pages are deliberately left untouched. They rank, and
// rewriting a live page to match a new internal shape is risk without return.

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import {
  Phone, MapPin, Clock, Moon, Calendar, IndianRupee, ArrowRight,
  Compass, ChevronDown, ChevronUp, HelpCircle, Car, ShieldCheck,
} from '@/components/ui/icons';
import { trackWhatsAppClick, trackPhoneCall } from '@/utilis/analytics';

const PHONE = '7668570551';

export default function WeekendGetawaysClient({ data, shortAnswer = null, otherCities = [] }) {
  const [openFaq, setOpenFaq] = useState(null);

  const dests = Array.isArray(data.destinations) ? data.destinations : [];
  const twoDay = dests.filter((d) => d.nights === 1).length;
  const threeDay = dests.filter((d) => d.nights >= 2).length;

  return (
    <main className="min-h-screen bg-white">
      {/* ─── HERO ─────────────────────────────────────────────────────── */}
      <section className="relative min-h-[62vh] flex items-end overflow-hidden">
        <Image
          src={data.heroImage}
          alt={`Weekend getaways from ${data.city} by car`}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/75 to-slate-900/30" />

        <div className="relative z-10 mx-auto w-full max-w-6xl px-4 pb-14 pt-24 sm:px-6">
          <nav aria-label="Breadcrumb" className="mb-5 text-sm text-slate-300">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="px-2 text-slate-500">/</span>
            <span className="text-white">Weekend getaways from {data.city}</span>
          </nav>

          <h1 className="max-w-3xl text-3xl font-black leading-tight text-white sm:text-4xl md:text-5xl">
            {data.heroTitle}
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-200 sm:text-lg">
            {data.heroSubtitle}
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href={`tel:${PHONE}`}
              onClick={() => trackPhoneCall(`weekend-${data.slug}-hero`)}
              className="inline-flex items-center gap-2 rounded-xl bg-[#FACF2D] px-5 py-3 font-bold text-slate-900 transition hover:brightness-95"
            >
              <Phone className="h-4 w-4" /> Call {PHONE}
            </a>
            <a
              href={`https://wa.me/91${PHONE}?text=${encodeURIComponent(`Hi, I'd like to plan a weekend trip from ${data.city}.`)}`}
              onPointerDown={() => trackWhatsAppClick(`weekend-${data.slug}-hero`)}
              className="inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/10 px-5 py-3 font-semibold text-white backdrop-blur transition hover:bg-white/20"
            >
              WhatsApp a plan
            </a>
          </div>

          <div className="mt-7 flex flex-wrap gap-x-7 gap-y-2 text-sm text-slate-300">
            <span className="flex items-center gap-1.5">
              <Compass className="h-4 w-4 text-[#FACF2D]" /> {dests.length} destinations
            </span>
            {twoDay > 0 && (
              <span className="flex items-center gap-1.5">
                <Moon className="h-4 w-4 text-[#FACF2D]" /> {twoDay} two-day trips
              </span>
            )}
            {threeDay > 0 && (
              <span className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4 text-[#FACF2D]" /> {threeDay} need three days
              </span>
            )}
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="h-4 w-4 text-[#FACF2D]" /> Chauffeur-driven, fare fixed before travel
            </span>
          </div>
        </div>
      </section>

      {/* The short answer, rendered on the server and slotted in here. */}
      {shortAnswer}

      {/* ─── INTRO ────────────────────────────────────────────────────── */}
      <section className="px-4 py-14 sm:px-6 md:py-20">
        <div className="mx-auto max-w-3xl space-y-5">
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
            Planning a weekend out of {data.city}
          </h2>
          {(data.intro || []).map((para, i) => (
            <p key={i} className="leading-relaxed text-slate-700">{para}</p>
          ))}
        </div>
      </section>

      {/* ─── THE DESTINATIONS ─────────────────────────────────────────── */}
      <section className="bg-slate-50 px-4 py-14 sm:px-6 md:py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
            {dests.length} weekend trips from {data.city}, nearest first
          </h2>
          <p className="mt-2 max-w-3xl text-slate-600">
            Every fare below is the full return journey with a chauffeur, computed from the published
            round-trip rate card. Fuel, the driver and GST are included; tolls, parking and any state
            permit are charged at actuals.
          </p>

          <div className="mt-9 space-y-6">
            {dests.map((d) => (
              <article
                key={d.name}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-3 border-b border-slate-100 bg-slate-50/70 px-5 py-4 sm:px-6">
                  <h3 className="text-lg font-bold text-slate-900 sm:text-xl">
                    {data.city} to {d.name}
                  </h3>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-900 px-3 py-1 text-xs font-bold text-white">
                    <Moon className="h-3 w-3" />
                    {d.nights === 1 ? '1 night · 2 days' : `${d.nights} nights · ${d.nights + 1} days`}
                  </span>
                </div>

                <div className="px-5 py-5 sm:px-6">
                  <dl className="grid gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-4">
                    <div>
                      <dt className="text-xs font-semibold uppercase tracking-wide text-slate-500">Distance one way</dt>
                      <dd className="mt-0.5 font-bold text-slate-900 [font-variant-numeric:tabular-nums]">{d.distance}</dd>
                    </div>
                    <div>
                      <dt className="text-xs font-semibold uppercase tracking-wide text-slate-500">Driving time</dt>
                      <dd className="mt-0.5 font-bold text-slate-900">{d.driveTime}</dd>
                    </div>
                    <div>
                      <dt className="text-xs font-semibold uppercase tracking-wide text-slate-500">Sedan, return</dt>
                      <dd className="mt-0.5 font-bold text-slate-900 [font-variant-numeric:tabular-nums]">{d.sedanFare}</dd>
                    </div>
                    <div>
                      <dt className="text-xs font-semibold uppercase tracking-wide text-slate-500">SUV, return</dt>
                      <dd className="mt-0.5 font-bold text-slate-900 [font-variant-numeric:tabular-nums]">{d.suvFare}</dd>
                    </div>
                  </dl>

                  <p className="mt-5 leading-relaxed text-slate-700">{d.whatYouDo}</p>

                  <div className="mt-4 rounded-xl border-l-4 border-[#FACF2D] bg-amber-50/60 px-4 py-3">
                    <p className="text-xs font-bold uppercase tracking-wide text-amber-800">
                      How the weekend runs
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-slate-700">{d.weekendShape}</p>
                  </div>

                  <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-slate-600">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="h-4 w-4 text-slate-400" /> Best season: {d.bestSeason}
                    </span>
                    <span className="flex items-center gap-1.5 [font-variant-numeric:tabular-nums]">
                      <Car className="h-4 w-4 text-slate-400" /> {d.billableKm.toLocaleString('en-IN')} km billed
                    </span>
                    {/* Resolved on the server; absent when the target is not served. */}
                    {d.bookingHref && (
                      <Link
                        href={d.bookingHref}
                        className="inline-flex items-center gap-1 font-semibold text-slate-900 underline decoration-[#FACF2D] decoration-2 underline-offset-4 hover:text-slate-700"
                      >
                        Route details <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FAQS ─────────────────────────────────────────────────────── */}
      <section className="px-4 py-14 sm:px-6 md:py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
            Weekend trips from {data.city} — common questions
          </h2>
          <div className="mt-7 space-y-3">
            {(data.faqs || []).map((f, i) => (
              <div key={i} className="overflow-hidden rounded-xl border border-slate-200">
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  aria-expanded={openFaq === i}
                  className="flex w-full items-start justify-between gap-4 px-5 py-4 text-left transition hover:bg-slate-50"
                >
                  <span className="flex items-start gap-3 font-semibold text-slate-900">
                    <HelpCircle className="mt-0.5 h-5 w-5 shrink-0 text-[#FACF2D]" />
                    {f.question}
                  </span>
                  {openFaq === i
                    ? <ChevronUp className="mt-0.5 h-5 w-5 shrink-0 text-slate-400" />
                    : <ChevronDown className="mt-0.5 h-5 w-5 shrink-0 text-slate-400" />}
                </button>
                {openFaq === i && (
                  <p className="border-t border-slate-100 px-5 py-4 leading-relaxed text-slate-700">
                    {f.answer}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── OTHER CITIES ────────────────────────────────────────────── */}
      {otherCities.length > 0 && (
        <section className="border-t border-slate-200 bg-slate-50 px-4 py-12 sm:px-6">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-xl font-bold text-slate-900">Weekend getaways from other cities</h2>
            <div className="mt-5 flex flex-wrap gap-2.5">
              {otherCities.map((c) => (
                <Link
                  key={c.href}
                  href={c.href}
                  className="rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-900 hover:text-slate-900"
                >
                  {c.city}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ─── CLOSING CTA ─────────────────────────────────────────────── */}
      <section className="bg-slate-900 px-4 py-14 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Plan your weekend from {data.city}
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-slate-300">
            Tell us the destination and the dates. We confirm the car, the driver and the fare before
            you travel, and there is no advance payment.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <a
              href={`tel:${PHONE}`}
              onClick={() => trackPhoneCall(`weekend-${data.slug}-footer`)}
              className="inline-flex items-center gap-2 rounded-xl bg-[#FACF2D] px-6 py-3 font-bold text-slate-900 transition hover:brightness-95"
            >
              <Phone className="h-4 w-4" /> {PHONE}
            </a>
            <a
              href={`https://wa.me/91${PHONE}?text=${encodeURIComponent(`Hi, I'd like to plan a weekend trip from ${data.city}.`)}`}
              onPointerDown={() => trackWhatsAppClick(`weekend-${data.slug}-footer`)}
              className="inline-flex items-center gap-2 rounded-xl border border-white/25 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
            >
              WhatsApp us
            </a>
          </div>
          <p className="mt-6 flex items-center justify-center gap-2 text-sm text-slate-400">
            <MapPin className="h-4 w-4" /> Chauffeur-driven across North India
            <Clock className="ml-3 h-4 w-4" /> Available 24/7
          </p>
        </div>
      </section>
    </main>
  );
}
