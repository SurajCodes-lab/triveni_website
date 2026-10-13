// ============================================================================
// TollCostClient — "Triveni Aurora" Ultra-Premium redesign (Aug 2026)
// Template behind /toll-cost/[route] — 25 pages incl. the site's #2 clicked
// page (/toll-cost/delhi-to-dehradun). Signature element: THE TOLL LEDGER —
// a receipt-grade semantic table of every plaza (caption, th scope, both car
// and SUV columns; stacked cards on mobile) with a gold-foil all-inclusive total card
// beside it. Every figure comes straight off tollCostData — nothing invented.
// All JSON-LD is emitted by page.js; this file is presentation + funnel only.
// No framer-motion, no infinite animations — CSS-only transitions.
// ============================================================================

import Link from 'next/link';
import Image from 'next/image';
import {
  Phone, ArrowRight, Clock, Car, CheckCircle2, Route, MapPin,
  Star, Fuel, ChevronRight, CreditCard, Tag, Sparkles, Shield,
} from '@/components/ui/icons';
import { getCityImage, heroBlurDataURL } from '@/utilis/imageUtils';
import TrackedLink from '@/components/ui/TrackedLink';
import { SetStickyCta } from '@/components/ui/StickyCtaContext';
import QuickEnquiryForm from '@/components/ui/QuickEnquiryForm';
import ScrollReveal from '@/components/shared/ScrollReveal';
import CTASection from '@/components/shared/CTASection';
import CorridorLinks from '@/components/seo/CorridorLinks';
import Section from '@/components/ui/Section';
import AuroraHeading from '@/components/ui/AuroraHeading';
// canonicalLink keeps these internal links off the Week 43 redirects — see
// src/lib/seo/canonical-link.js for why a prefix rule cannot do this.
import { canonicalLink } from '@/lib/seo/canonical-link';
import SeasonalCorridorCallout from '@/components/seasonal/SeasonalCorridorCallout';
import { groupDigits } from '@/utilis/pricing';
import DirectAnswer from '@/components/content/DirectAnswer';
import { deriveTollAnswer } from '@/utilis/directAnswers';

const WA = <svg className="w-4 h-4" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true"><path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/></svg>;

const fmt = (n) => (!n && n !== 0) ? '---' : n.toLocaleString('en-IN');

// Gold foil — gold as a material, not a flat color.
const FOIL = 'bg-gradient-to-br from-[#FFE9A0] via-[#FACF2D] to-[#B8860B] bg-clip-text text-transparent drop-shadow-[0_2px_12px_rgba(250,207,45,0.35)]';

// Highway lane marking — the page's one recurring motif, used as a band top edge.
const LANE = 'bg-[repeating-linear-gradient(90deg,#FACF2D_0_18px,transparent_18px_34px)]';

// Radius is set per-usage (rounded-full pills in the hero, rounded-xl in cards).
const GOLD_CTA = 'sheen inline-flex items-center justify-center gap-2 bg-[#FACF2D] font-black text-slate-900 shadow-[0_12px_36px_-10px_rgba(250,207,45,0.55)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-amber-300 active:scale-95';

export default function TollCostClient({ route, relatedRoutes, corridorLinks = [], seasonalCallout = null, planningGuide = null, travelByCarHref = null, oneWayHref = null }) {
  // The facts of this corridor's toll, stated first. The measurement found this
  // family's existing summary sitting 43% of the way down the rendered text —
  // the deepest of any family — so the plaza table was reached before the
  // answer. Same figures, at the top.
  const directAnswer = deriveTollAnswer(route);
  const whatsappMsg = `Hi, I want to book a cab from ${route.origin} to ${route.destination} (${route.totalDistance} km). Please share toll-inclusive fare.`;
  const heroWhatsAppHref = `https://wa.me/917668570551?text=${encodeURIComponent(whatsappMsg)}`;
  const suvFare = Math.max(route.totalDistance, 300) * 15;
  const tempoFare = Math.max(route.totalDistance, 300) * 18;
  const heroImage = getCityImage(route.destination);
  const plazaCount = route.tollPlazas.length;
  const allFastag = route.tollPlazas.every((t) => t.acceptsFASTag);
  const planningEstimate = ['delhi-to-dehradun', 'delhi-to-haridwar'].includes(route.slug);

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <SetStickyCta
        price={route.cabFare ? `₹${groupDigits(fmt(route.cabFare))}` : ''}
        label={`${route.origin} → ${route.destination} Cab`}
        whatsappText={whatsappMsg}
      />

      {/* ============================================================ HERO
          Cinematic destination photo, layered scrim, gold-foil title. */}
      <section className="relative flex min-h-[540px] flex-col justify-end overflow-hidden bg-[radial-gradient(circle_at_85%_10%,rgba(250,207,45,0.18),transparent_34%),linear-gradient(145deg,#020617_0%,#0f172a_65%,#29200b_100%)] md:min-h-[65vh]">
        <Image
          src={heroImage}
          alt={`${route.destination} — destination of the ${route.origin} to ${route.destination} toll route`}
          fill
          sizes="(max-width: 767px) 1px, 100vw"
          quality={80}
          placeholder="blur"
          blurDataURL={heroBlurDataURL}
          className="hidden object-cover object-center md:block"
        />
        {/* Layered scrim: readable text, visible photo */}
        <div className="absolute inset-0 hidden bg-gradient-to-t from-slate-950 via-slate-950/55 to-slate-950/15 md:block" />
        <div className="absolute inset-0 hidden bg-gradient-to-r from-slate-950/80 via-slate-950/30 to-transparent md:block" />
        <span aria-hidden="true" className={`absolute inset-x-0 top-0 z-20 h-[5px] ${LANE}`} />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-10 pt-14 sm:pt-24 sm:px-6 sm:pb-14 lg:px-8">
          <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-1.5 text-xs text-white/40">
            <Link href="/" className="transition-colors hover:text-white/70">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <Link href="/toll-cost" className="transition-colors hover:text-white/70">Toll Cost</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-white/60">{route.origin} to {route.destination}</span>
          </nav>

          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-1.5 backdrop-blur-md">
                <Tag className="h-3.5 w-3.5 text-amber-400" />
                <span className="text-[11px] font-black uppercase tracking-[0.2em] text-amber-300">Toll Plaza Ledger · 2026</span>
              </div>

              <h1 className="speakable-headline font-display-serif text-4xl font-black leading-[1.02] tracking-tight text-white sm:text-5xl lg:text-7xl">
                {route.origin} to {route.destination}{' '}
                <span className={`mt-2 block ${FOIL}`}>Toll Cost 2026</span>
              </h1>

              <p className="mt-4 max-w-lg text-sm leading-relaxed text-white/60 sm:text-base">
                Every rupee at every plaza, settled before you leave {route.origin} —
                {' '}{plazaCount} toll plaza{plazaCount === 1 ? '' : 's'} across {route.totalDistance} km of highway.
              </p>

              {/* Compact CTAs — desktop stays tight, mobile gets a 2-up grid */}
              <div className="mt-6 grid w-full max-w-sm grid-cols-2 gap-2.5 sm:flex sm:max-w-none sm:flex-wrap sm:gap-3">
                <TrackedLink
                  track="phone"
                  args={['toll_hero']}
                  href="tel:+917668570551"
                  className={`${GOLD_CTA} min-h-[48px] rounded-full px-5 py-3 text-sm sm:px-6`}
                >
                  <Phone className="h-4 w-4" /> Call 7668570551
                </TrackedLink>
                <TrackedLink
                  track="whatsapp"
                  args={['toll_hero']}
                  href={heroWhatsAppHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full border border-white/15 bg-white/10 px-5 py-3 text-sm font-bold text-white backdrop-blur-sm transition-colors hover:bg-white/15 sm:px-6"
                >
                  {WA} Toll-Inclusive Quote
                </TrackedLink>
              </div>

              {/* Trust emblem — seal-style badge */}
              <div className="mt-6 inline-flex items-center gap-3 rounded-2xl border border-amber-400/25 bg-white/5 px-4 py-2.5 backdrop-blur-md">
                <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border border-amber-400/50 bg-amber-400/15">
                  <Star className="h-4 w-4 text-amber-400" fill="currentColor" />
                </span>
                <p className="text-xs font-semibold tracking-wide text-white/75">
                  4.9★ rated · Since 2015 · Pay after trip
                </p>
              </div>
            </div>

            {/* Hero ledger summary — the answer, glanceable */}
            <div className="w-full max-w-sm flex-shrink-0 rounded-3xl border border-amber-400/20 bg-white/[0.07] p-5 backdrop-blur-xl sm:p-6 lg:w-80">
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-amber-300/90">{planningEstimate ? 'Estimated toll · listed route' : 'Total toll · one-way'}</p>
              <p className={`mt-1 text-5xl font-black leading-none tabular-nums ${FOIL}`}>₹{groupDigits(fmt(route.totalTollCost.car))}</p>
              <p className="mt-1.5 text-xs text-white/50">Car / Sedan · SUV pays ₹{groupDigits(fmt(route.totalTollCost.suv))}</p>
              <div className="mt-4 grid grid-cols-2 gap-3 border-t border-white/10 pt-4">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-widest text-white/35">Plazas</p>
                  <p className="text-lg font-black text-white">{plazaCount}</p>
                </div>
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-widest text-white/35">Distance</p>
                  <p className="text-lg font-black text-white">{route.totalDistance} km</p>
                </div>
              </div>
              <div className="mt-4 flex items-center gap-2 border-t border-white/10 pt-3.5">
                <CreditCard className="h-3.5 w-3.5 flex-shrink-0 text-amber-400" />
                <span className="text-[11px] font-medium text-white/50">
                  {allFastag ? 'Every plaza is FASTag enabled' : 'FASTag accepted at most plazas'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {directAnswer && (
        <DirectAnswer
          heading={directAnswer.heading}
          lead={directAnswer.lead}
          facts={directAnswer.facts}
          note={directAnswer.note}
        />
      )}

      {planningGuide}

      {/* In-window festival / yatra call-out for this destination (server-resolved, null on most routes). */}
      <SeasonalCorridorCallout callout={seasonalCallout} />

      {/* ==================================================== THE TOLL LEDGER
          Signature centerpiece — receipt-grade plaza table on warm paper,
          gold-foil all-inclusive total card beside it. */}
      <section className="relative bg-gradient-to-b from-[#FFF6DC] via-amber-50/70 to-white py-16 md:py-24">
        <span aria-hidden="true" className={`absolute inset-x-0 top-0 h-[5px] ${LANE}`} />
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <AuroraHeading
            align="left"
            eyebrow="The toll ledger"
            title={`Every plaza between ${route.origin} and`}
            highlight={route.destination}
            subtitle={`Plaza-by-plaza rates for 2026 — car and SUV, with the km mark where each barrier stands. Rates are approximate; FASTag users may get 2–5% cashback at some plazas.`}
          />

          <div className="mt-10 grid grid-cols-1 items-start gap-6 lg:grid-cols-[1.5fr_1fr] lg:gap-8">
            {/* Ledger table — semantic, screenshot-worthy */}
            <ScrollReveal>
              {/* Mobile: one card per plaza, gold total card last — no sideways scrolling */}
              <div className="space-y-3 md:hidden">
                <div>
                  <span className="block text-[10px] font-black uppercase tracking-[0.2em] text-amber-600">Official-rate ledger</span>
                  <span className="mt-0.5 block text-sm font-bold text-slate-900">
                    {route.origin} to {route.destination} toll plazas, 2026 — one-way rates in ₹
                  </span>
                </div>
                {route.tollPlazas.map((toll, i) => (
                  <div key={`plaza-card-${i}`} className="rounded-2xl border border-amber-400/25 bg-white p-4 shadow-[0_16px_50px_-34px_rgba(184,134,11,0.45)]">
                    <p className="flex items-baseline gap-2 text-sm font-bold text-slate-900">
                      <span className="text-xs font-black tabular-nums text-amber-600">{String(i + 1).padStart(2, '0')}</span>
                      {toll.name}
                    </p>
                    <dl className="mt-2.5 space-y-1.5">
                      <div className="flex items-baseline justify-between gap-3">
                        <dt className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Km mark</dt>
                        <dd className="text-right text-sm tabular-nums text-slate-500">{toll.location} km</dd>
                      </div>
                      <div className="flex items-baseline justify-between gap-3">
                        <dt className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Car / Sedan</dt>
                        <dd className="text-right text-sm font-bold tabular-nums text-slate-900">₹{groupDigits(fmt(toll.carCost))}</dd>
                      </div>
                      <div className="flex items-baseline justify-between gap-3">
                        <dt className="text-[11px] font-bold uppercase tracking-wider text-slate-400">SUV / MUV</dt>
                        <dd className="text-right text-sm tabular-nums text-slate-600">₹{groupDigits(fmt(toll.suvCost))}</dd>
                      </div>
                      <div className="flex items-baseline justify-between gap-3">
                        <dt className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Payment</dt>
                        <dd className="text-right">
                          {toll.acceptsFASTag ? (
                            <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-1 text-[11px] font-bold text-emerald-700 ring-1 ring-emerald-200">
                              <CheckCircle2 className="h-3 w-3" /> FASTag
                            </span>
                          ) : (
                            <span className="inline-flex items-center rounded-full bg-red-50 px-2.5 py-1 text-[11px] font-bold text-red-600 ring-1 ring-red-200">Cash only</span>
                          )}
                        </dd>
                      </div>
                    </dl>
                  </div>
                ))}
                {/* Total card — the tfoot row, as its own gold card */}
                <div className="rounded-2xl border-2 border-amber-400/60 bg-gradient-to-r from-amber-50 to-yellow-50 p-4">
                  <p className="text-sm font-black uppercase tracking-wide text-slate-900">Total, one-way</p>
                  <dl className="mt-2.5 space-y-1.5">
                    <div className="flex items-baseline justify-between gap-3">
                      <dt className="text-[11px] font-bold uppercase tracking-wider text-slate-500">Distance</dt>
                      <dd className="text-right text-xs font-semibold tabular-nums text-slate-500">{route.totalDistance} km</dd>
                    </div>
                    <div className="flex items-baseline justify-between gap-3">
                      <dt className="text-[11px] font-bold uppercase tracking-wider text-slate-500">Car / Sedan</dt>
                      <dd className="text-right text-lg font-black tabular-nums text-amber-700">₹{groupDigits(fmt(route.totalTollCost.car))}</dd>
                    </div>
                    <div className="flex items-baseline justify-between gap-3">
                      <dt className="text-[11px] font-bold uppercase tracking-wider text-slate-500">SUV / MUV</dt>
                      <dd className="text-right text-base font-black tabular-nums text-slate-700">₹{groupDigits(fmt(route.totalTollCost.suv))}</dd>
                    </div>
                    <div className="flex items-baseline justify-between gap-3">
                      <dt className="text-[11px] font-bold uppercase tracking-wider text-slate-500">Payment</dt>
                      <dd className="text-right text-[11px] font-bold text-emerald-700">{allFastag ? 'All FASTag' : 'FASTag + cash'}</dd>
                    </div>
                  </dl>
                </div>
              </div>

              {/* Desktop: the ledger table, fits its container */}
              <div className="hidden overflow-hidden rounded-3xl border border-amber-400/25 bg-white shadow-[0_24px_70px_-32px_rgba(184,134,11,0.45)] md:block">
                  <table className="w-full text-left text-sm">
                    <caption className="caption-top border-b border-amber-400/20 px-5 py-4 text-left">
                      <span className="block text-[10px] font-black uppercase tracking-[0.2em] text-amber-600">Official-rate ledger</span>
                      <span className="mt-0.5 block text-sm font-bold text-slate-900">
                        {route.origin} to {route.destination} toll plazas, 2026 — one-way rates in ₹
                      </span>
                    </caption>
                    <thead>
                      <tr className="border-b border-amber-400/25 bg-amber-50/60 text-[11px] uppercase tracking-wider text-slate-500">
                        <th scope="col" className="px-5 py-3 font-bold">#</th>
                        <th scope="col" className="px-4 py-3 font-bold">Toll plaza</th>
                        <th scope="col" className="px-4 py-3 font-bold">Km mark</th>
                        <th scope="col" className="px-4 py-3 text-right font-bold">Car / Sedan</th>
                        <th scope="col" className="px-4 py-3 text-right font-bold">SUV / MUV</th>
                        <th scope="col" className="px-5 py-3 font-bold">Payment</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-amber-900/10">
                      {route.tollPlazas.map((toll, i) => (
                        <tr key={i} className="transition-colors hover:bg-amber-50/50">
                          <td className="px-5 py-3.5 text-xs font-black tabular-nums text-amber-600">{String(i + 1).padStart(2, '0')}</td>
                          <th scope="row" className="px-4 py-3.5 text-left font-semibold text-slate-900">{toll.name}</th>
                          <td className="px-4 py-3.5 tabular-nums text-slate-500">{toll.location} km</td>
                          <td className="px-4 py-3.5 text-right font-bold tabular-nums text-slate-900">₹{groupDigits(fmt(toll.carCost))}</td>
                          <td className="px-4 py-3.5 text-right tabular-nums text-slate-600">₹{groupDigits(fmt(toll.suvCost))}</td>
                          <td className="px-5 py-3.5">
                            {toll.acceptsFASTag ? (
                              <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-1 text-[11px] font-bold text-emerald-700 ring-1 ring-emerald-200">
                                <CheckCircle2 className="h-3 w-3" /> FASTag
                              </span>
                            ) : (
                              <span className="inline-flex items-center rounded-full bg-red-50 px-2.5 py-1 text-[11px] font-bold text-red-600 ring-1 ring-red-200">Cash only</span>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                    <tfoot>
                      <tr className="border-t-2 border-amber-400/60 bg-gradient-to-r from-amber-50 to-yellow-50">
                        <td className="px-5 py-4" aria-hidden="true" />
                        <th scope="row" className="px-4 py-4 text-left text-sm font-black uppercase tracking-wide text-slate-900">Total, one-way</th>
                        <td className="px-4 py-4 text-xs font-semibold tabular-nums text-slate-500">{route.totalDistance} km</td>
                        <td className="px-4 py-4 text-right text-lg font-black tabular-nums text-amber-700">₹{groupDigits(fmt(route.totalTollCost.car))}</td>
                        <td className="px-4 py-4 text-right text-base font-black tabular-nums text-slate-700">₹{groupDigits(fmt(route.totalTollCost.suv))}</td>
                        <td className="px-5 py-4 text-[11px] font-bold text-emerald-700">{allFastag ? 'All FASTag' : 'FASTag + cash'}</td>
                      </tr>
                    </tfoot>
                  </table>
              </div>
              <p className="mt-3 text-xs text-slate-400">
                Return leg crosses the same plazas — budget ₹{groupDigits(fmt(route.totalTollCost.car * 2))} (car) or ₹{groupDigits(fmt(route.totalTollCost.suv * 2))} (SUV) for a round trip.
              </p>
            </ScrollReveal>

            {/* All-inclusive total card — the bold answer */}
            <ScrollReveal stagger={120}>
              <div className="relative overflow-hidden rounded-3xl border border-amber-400/30 bg-slate-950 p-6 text-white shadow-[0_24px_70px_-28px_rgba(15,23,42,0.8)] sm:p-8">
                <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-amber-400/15 blur-3xl" aria-hidden="true" />
                <p className="text-[10px] font-black uppercase tracking-[0.22em] text-amber-300/90">
                  All-inclusive · {plazaCount} plaza{plazaCount === 1 ? '' : 's'}
                </p>
                <p className={`mt-2 text-6xl font-black leading-none tabular-nums ${FOIL}`}>₹{groupDigits(fmt(route.totalTollCost.car))}</p>
                <p className="mt-2 text-xs text-white/45">Car / Sedan, one-way ex-{route.origin}</p>

                {/* Seal-style gold chip */}
                <span className="mt-5 inline-flex items-center gap-2 rounded-full bg-gradient-to-br from-[#FFE9A0] via-[#FACF2D] to-[#D4A017] px-4 py-2 text-xs font-black text-slate-900 shadow-[0_10px_28px_-8px_rgba(250,207,45,0.65)]">
                  <CreditCard className="h-3.5 w-3.5" />
                  Total tolls: ₹{groupDigits(fmt(route.totalTollCost.car))} · FASTag
                </span>

                <dl className="mt-6 space-y-2.5 border-t border-white/10 pt-5 text-sm">
                  <div className="flex items-center justify-between">
                    <dt className="text-white/50">SUV / MUV</dt>
                    <dd className="font-bold tabular-nums">₹{groupDigits(fmt(route.totalTollCost.suv))}</dd>
                  </div>
                  <div className="flex items-center justify-between">
                    <dt className="text-white/50">Round trip (car)</dt>
                    <dd className="font-bold tabular-nums">₹{groupDigits(fmt(route.totalTollCost.car * 2))}</dd>
                  </div>
                  <div className="flex items-center justify-between">
                    <dt className="text-white/50">Cab fare (sedan)</dt>
                    <dd className="font-bold tabular-nums">₹{groupDigits(fmt(route.cabFare))} <span className="text-[10px] font-medium text-white/40">+ toll at actual</span></dd>
                  </div>
                </dl>

                <p className="mt-5 text-xs leading-relaxed text-white/50">
                  Book a Triveni cab and the driver’s FASTag clears every plaza without stopping — you settle the actual toll at the end. No estimates, no surprises.
                </p>

                <div className="mt-5 flex flex-col gap-2.5">
                  <TrackedLink
                    track="whatsapp"
                    args={['toll_ledger']}
                    href={heroWhatsAppHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${GOLD_CTA} w-full rounded-xl py-3.5 text-sm`}
                  >
                    {WA} Book Toll-Inclusive Cab
                  </TrackedLink>
                  <TrackedLink
                    track="phone"
                    args={['toll_ledger']}
                    href="tel:+917668570551"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 py-3.5 text-sm font-bold text-white transition-colors hover:bg-white/10"
                  >
                    <Phone className="h-4 w-4" /> Call 7668570551
                  </TrackedLink>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ============================================== DIRECT-ANSWER LEAD
          Voice + featured-snippet target — speakable classes preserved. */}
      <section className="border-b border-slate-100 bg-white py-10 sm:py-12">
        <div className="mx-auto w-full max-w-4xl px-4 sm:px-6">
          <h2 className="font-display-serif mb-2 text-lg font-black text-slate-900 sm:text-xl">
            How much is the toll from {route.origin} to {route.destination}?
          </h2>
          <p className="speakable-lead text-sm leading-relaxed text-slate-600 sm:text-base">
            The total toll from {route.origin} to {route.destination} is approximately
            {' '}<strong className="text-slate-900">{'₹'}{fmt(route.totalTollCost.car)} for a car/sedan</strong> and
            {' '}<strong className="text-slate-900">{'₹'}{fmt(route.totalTollCost.suv)} for an SUV</strong>, paid across
            {' '}{plazaCount} toll plaza{plazaCount === 1 ? '' : 's'} over the {route.totalDistance} km route.
            All plazas accept FASTag. A toll-inclusive Triveni cab starts at {'₹'}{fmt(route.cabFare)} (sedan), with the
            driver handling every toll payment for you.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <Link href={`/distance/${route.slug}`} className="inline-flex items-center gap-1.5 rounded-full bg-amber-50 px-3 py-1.5 text-xs font-bold text-amber-800 ring-1 ring-amber-200/70 transition-colors hover:bg-amber-100">
              <Route className="h-3.5 w-3.5" /> {route.origin}–{route.destination} distance &amp; time
            </Link>
            {/* Also resolved server-side. The Ahmedabad corridors have a toll
                page and a distance page but no one-way booking page, which is
                how this one surfaced. */}
            {oneWayHref && (
              <Link href={oneWayHref} className="inline-flex items-center gap-1.5 rounded-full bg-amber-50 px-3 py-1.5 text-xs font-bold text-amber-800 ring-1 ring-amber-200/70 transition-colors hover:bg-amber-100">
                <Car className="h-3.5 w-3.5" /> Book {route.origin} to {route.destination} cab — one-way
              </Link>
            )}
            {/* Resolved against the build manifest on the server. This chip used
                to synthesise `/travel-by-car/{slug}` by convention, which held
                for the 25 hand-researched corridors and broke on all 20 reverse
                ones at once — the fourth appearance of this fault after records
                C, K and P. The chip is simply absent when the target is not
                served, and returns automatically if one is built. */}
            {travelByCarHref && (
              <Link href={travelByCarHref} className="inline-flex items-center gap-1.5 rounded-full bg-amber-50 px-3 py-1.5 text-xs font-bold text-amber-800 ring-1 ring-amber-200/70 transition-colors hover:bg-amber-100">
                <MapPin className="h-3.5 w-3.5" /> {route.origin} to {route.destination} by car
              </Link>
            )}
          </div>
        </div>
      </section>

      {/* ================================================= TRIP COST, HONESTLY
          Dark band — fuel + toll vs cab fare, plus FASTag intelligence. */}
      <Section tone="dark" pad="none" className="py-16 md:py-24">
        <AuroraHeading
          tone="dark"
          eyebrow="The full picture"
          title="What this trip really costs,"
          highlight="door to door"
          subtitle={`Toll is only one line on the bill. Here is the honest ${route.origin}–${route.destination} math — self-drive against a chauffeur-driven cab.`}
        />

        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2 lg:gap-6">
          {/* Self-drive column */}
          <ScrollReveal>
            <div className="glass-dark h-full rounded-3xl p-6 sm:p-8">
              <div className="flex items-center gap-3">
                <span className="rounded-xl bg-white/10 p-2.5"><Fuel className="h-5 w-5 text-white/70" /></span>
                <h3 className="text-lg font-black text-white">Self-drive</h3>
              </div>
              <dl className="mt-6 space-y-3 text-sm">
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <dt className="text-white/50">Fuel (petrol, approx.)</dt>
                  <dd className="font-bold tabular-nums text-white">₹{groupDigits(fmt(route.estimatedFuel.petrol))}</dd>
                </div>
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <dt className="text-white/50">Fuel (diesel, approx.)</dt>
                  <dd className="font-bold tabular-nums text-white/70">₹{groupDigits(fmt(route.estimatedFuel.diesel))}</dd>
                </div>
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <dt className="text-white/50">Toll ({plazaCount} plaza{plazaCount === 1 ? '' : 's'}, car)</dt>
                  <dd className="font-bold tabular-nums text-white">₹{groupDigits(fmt(route.totalTollCost.car))}</dd>
                </div>
                <div className="flex items-center justify-between pt-1">
                  <dt className="font-bold text-white/70">Petrol + toll</dt>
                  <dd className="text-xl font-black tabular-nums text-white">₹{groupDigits(fmt(route.estimatedFuel.petrol + route.totalTollCost.car))}</dd>
                </div>
              </dl>
              <p className="mt-4 text-xs leading-relaxed text-white/40">
                Plus {route.totalDistance} km of driving, plaza queues and parking — all yours.
              </p>
            </div>
          </ScrollReveal>

          {/* Triveni cab column */}
          <ScrollReveal stagger={100}>
            <div className="border-gradient-gold glass-dark relative h-full overflow-hidden rounded-3xl p-6 sm:p-8">
              <div className="absolute -right-14 -top-14 h-36 w-36 rounded-full bg-amber-400/15 blur-3xl" aria-hidden="true" />
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <span className="rounded-xl bg-amber-400/15 p-2.5"><Car className="h-5 w-5 text-amber-400" /></span>
                  <h3 className="text-lg font-black text-white">Triveni cab, chauffeur-driven</h3>
                </div>
                <span className="rounded-full bg-amber-400/15 px-2.5 py-1 text-[10px] font-black uppercase tracking-wide text-amber-300 ring-1 ring-amber-400/30">Recommended</span>
              </div>
              <dl className="mt-6 space-y-3 text-sm">
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <dt className="text-white/50">Sedan fare (₹11/km)</dt>
                  <dd className="font-bold tabular-nums text-white">₹{groupDigits(fmt(route.cabFare))}</dd>
                </div>
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <dt className="text-white/50">Toll — paid at actual</dt>
                  <dd className="font-bold tabular-nums text-white">₹{groupDigits(fmt(route.totalTollCost.car))}</dd>
                </div>
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <dt className="text-white/50">Fuel, driver, AC</dt>
                  <dd className="font-bold text-emerald-300">Included</dd>
                </div>
                <div className="flex items-center justify-between pt-1">
                  <dt className="font-bold text-white/70">Fare + toll</dt>
                  <dd className={`text-xl font-black tabular-nums ${FOIL}`}>₹{groupDigits(fmt(route.cabFare + route.totalTollCost.car))}</dd>
                </div>
              </dl>
              <TrackedLink
                track="whatsapp"
                args={['toll_cost_compare']}
                href={heroWhatsAppHref}
                target="_blank"
                rel="noopener noreferrer"
                className={`${GOLD_CTA} mt-5 w-full rounded-xl py-3 text-sm`}
              >
                {WA} Get This Exact Quote
              </TrackedLink>
            </div>
          </ScrollReveal>
        </div>

        {/* FASTag intelligence */}
        <ScrollReveal>
          <div className="glass-dark mt-6 rounded-3xl p-6 sm:p-8">
            <div className="flex flex-wrap items-center gap-3">
              <CreditCard className="h-5 w-5 text-amber-400" />
              <h3 className="font-black text-white">FASTag on this route</h3>
              <span className="rounded-full bg-emerald-500/15 px-2.5 py-0.5 text-[10px] font-black uppercase tracking-wide text-emerald-300 ring-1 ring-emerald-400/25">Recommended</span>
            </div>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-white/50">{route.fastagInfo}</p>
            <div className="mt-5 grid grid-cols-1 gap-2.5 sm:grid-cols-3">
              {[
                { t: 'Faster lanes', d: 'Skip the cash queues' },
                { t: 'Cashback', d: '2–5% at some plazas' },
                { t: 'Digital records', d: 'Every debit on SMS' },
              ].map((item, i) => (
                <div key={i} className="rounded-xl border border-white/10 bg-white/5 p-4">
                  <p className="text-xs font-black text-amber-300">{item.t}</p>
                  <p className="mt-0.5 text-[11px] text-white/40">{item.d}</p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </Section>

      {/* ============================================ TIPS + RIDE CARDS
          Warm light band — vehicle photos pop on white. */}
      <section className="relative bg-gradient-to-b from-[#FFF6DC] via-amber-50/60 to-white py-16 md:py-24">
        <span aria-hidden="true" className={`absolute inset-x-0 top-0 h-[5px] ${LANE}`} />
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-5 lg:gap-8">
            {/* Route tips */}
            {route.tips && route.tips.length > 0 && (
              <ScrollReveal className="lg:col-span-2">
                <div className="h-full rounded-3xl border border-amber-400/25 bg-white p-6 shadow-sm sm:p-7">
                  <div className="mb-5 flex items-center gap-2.5">
                    <span className="rounded-xl bg-amber-400/15 p-2"><Sparkles className="h-4 w-4 text-amber-600" /></span>
                    <h3 className="font-display-serif text-lg font-black text-slate-900">Toll route intelligence</h3>
                  </div>
                  <div className="space-y-4">
                    {route.tips.map((tip, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-md bg-gradient-to-br from-[#FFE9A0] to-[#FACF2D] text-[11px] font-black text-slate-900">{i + 1}</span>
                        <p className="text-sm leading-relaxed text-slate-600">{tip}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            )}

            {/* Ride cards */}
            <div className={route.tips && route.tips.length > 0 ? 'lg:col-span-3' : 'lg:col-span-5'}>
              <ScrollReveal>
                <p className="mb-1 text-[10px] font-black uppercase tracking-[0.2em] text-amber-600">Book {route.origin} to {route.destination} cab</p>
                <h3 className="font-display-serif mb-5 text-xl font-black text-slate-900 sm:text-2xl">Choose your ride</h3>
              </ScrollReveal>
              <div className="grid gap-4 sm:grid-cols-3">
                {[
                  { label: 'Sedan', sub: 'Swift Dzire / Etios', price: route.cabFare, rate: '₹11/km', pop: false, img: '/images/car/swift_dzire.jpg' },
                  { label: 'SUV', sub: 'Innova / Ertiga', price: suvFare, rate: '₹15/km', pop: true, img: '/images/car/innova_crysta.jpg' },
                  { label: 'Tempo', sub: '12–16 Seater', price: tempoFare, rate: '₹18/km', pop: false, img: '/images/tempo/12_seater.jpg' },
                ].map((v, i) => (
                  <ScrollReveal key={i} stagger={i * 80}>
                    <div className={`group h-full overflow-hidden rounded-2xl border bg-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl ${v.pop ? 'border-amber-400/50 ring-1 ring-amber-300/50' : 'border-slate-200 hover:border-amber-300'}`}>
                      <div className="relative h-32 w-full overflow-hidden">
                        <Image src={v.img} alt={`${v.label} cab for ${route.origin} to ${route.destination}`} fill sizes="(max-width: 640px) 100vw, 33vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                        {v.pop && (
                          <span className="absolute left-3 top-3 rounded-full bg-gradient-to-br from-[#FFE9A0] to-[#FACF2D] px-2.5 py-1 text-[9px] font-black uppercase tracking-widest text-slate-900 shadow">Best value</span>
                        )}
                      </div>
                      <div className="p-5">
                        <p className="font-bold text-slate-900">{v.label}</p>
                        <p className="text-[11px] text-slate-400">{v.sub}</p>
                        <p className="mt-3 text-2xl font-black tabular-nums text-slate-900">₹{groupDigits(fmt(v.price))}</p>
                        <p className="text-xs text-slate-400">{v.rate} · toll extra, at actual</p>
                        <TrackedLink
                          track="whatsapp"
                          args={[`toll_${v.label.toLowerCase()}`]}
                          href={`https://wa.me/917668570551?text=${encodeURIComponent(`Book ${v.label} from ${route.origin} to ${route.destination}`)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`mt-4 flex w-full items-center justify-center rounded-xl py-2.5 text-center text-sm font-bold transition-all ${v.pop ? 'sheen bg-[#FACF2D] font-black text-slate-900 shadow-[0_12px_36px_-10px_rgba(250,207,45,0.55)] hover:-translate-y-0.5 hover:bg-amber-300 active:scale-95' : 'bg-slate-100 text-slate-700 hover:bg-amber-50 hover:text-amber-800'}`}
                        >
                          Book {v.label}
                        </TrackedLink>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================== ENQUIRY — dark band
          QuickEnquiryForm is dark-only; give it its dark stage. */}
      <Section tone="dark" pad="none" className="py-16 md:py-20">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
          <div>
            <AuroraHeading
              tone="dark"
              align="left"
              eyebrow="Zero toll stress"
              title="Your driver’s FASTag clears"
              highlight="every plaza"
              subtitle={`Send your travel date and pickup point — we reply with an exact ${route.origin} to ${route.destination} quote, toll math included, in minutes.`}
            />
            <ul className="mt-8 space-y-3.5">
              {[
                { icon: Shield, text: 'Verified drivers, GPS-tracked cars, pay after trip' },
                { icon: CreditCard, text: `Toll settled at actual — approximately ₹${groupDigits(fmt(route.totalTollCost.car))} on this route` },
                { icon: Clock, text: '24/7 booking on call and WhatsApp, instant confirmation' },
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-0.5 rounded-lg bg-amber-400/15 p-1.5"><item.icon className="h-4 w-4 text-amber-400" /></span>
                  <span className="text-sm leading-relaxed text-white/60">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
          <QuickEnquiryForm fromCity={route.origin} toCity={route.destination} pageType="outstation" />
        </div>
      </Section>

      {/* ============================================================ FAQ
          Quick-answer card (speakable) + 2-per-row grid, content verbatim. */}
      {route.faqs && route.faqs.length > 0 && (
        <section className="bg-slate-50 py-16 md:py-24">
          <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
            <AuroraHeading
              eyebrow="Frequently asked"
              title={`${route.origin} to ${route.destination}`}
              highlight="toll questions"
              subtitle="Plaza counts, FASTag rules, return-trip math and what a toll-inclusive cab actually costs."
            />

            {/* The most-asked question, kept for the speakable node. The page's
                short answer is the DirectAnswer block below the hero. */}
            <div className="mx-auto mt-10 max-w-3xl rounded-2xl border border-amber-400/30 bg-gradient-to-br from-amber-50 to-yellow-50 p-6">
              <p className="mb-1.5 text-[10px] font-black uppercase tracking-[0.2em] text-amber-700">Most asked</p>
              <p className="mb-1.5 text-sm font-bold text-slate-900">{route.faqs[0].question}</p>
              <p className="speakable-faq-first text-sm leading-relaxed text-slate-600">{route.faqs[0].answer}</p>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2">
              {route.faqs.map((faq, index) => (
                <div key={index} className="h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-amber-300 hover:shadow-lg">
                  <div className="mb-3 flex items-start gap-3">
                    <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#FFE9A0] to-[#FACF2D] text-sm font-black text-slate-900">Q</span>
                    <h3 className="text-base font-bold leading-snug text-slate-900">{faq.question}</h3>
                  </div>
                  <p className="pl-11 text-sm leading-relaxed text-slate-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ============================================ CORRIDOR CLUSTER */}
      {corridorLinks.length > 0 && (
        <section className="bg-white py-12 sm:py-16">
          <div className="mx-auto w-full max-w-5xl px-4 sm:px-6">
            <CorridorLinks
              links={corridorLinks}
              fromLabel={route.origin}
              toLabel={route.destination}
              theme="light"
            />
          </div>
        </section>
      )}

      {/* ============================================ RELATED TOLL ROUTES */}
      {relatedRoutes && relatedRoutes.length > 0 && (
        <section className="relative bg-gradient-to-b from-white via-amber-50/50 to-white py-16 md:py-24">
          <span aria-hidden="true" className={`absolute inset-x-0 top-0 h-[5px] ${LANE}`} />
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <AuroraHeading
              eyebrow="Keep planning"
              title="Related toll"
              highlight="ledgers"
              subtitle="Plaza-by-plaza toll costs for the corridors travellers check next."
            />
            <div className="mt-10 grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-3">
              {relatedRoutes.map((r, i) => (
                <ScrollReveal key={i} stagger={i * 50}>
                  <Link href={`/toll-cost/${r.slug}`} className="group flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-amber-300 hover:shadow-lg">
                    <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-amber-400/15 transition-colors group-hover:bg-amber-400/25">
                      <Tag className="h-4 w-4 text-amber-600" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block break-words text-sm font-bold text-slate-900">{r.origin} → {r.destination}</span>
                      <span className="block text-xs text-slate-500">{r.totalDistance} km{r.totalTollCost ? ` · ₹${groupDigits(fmt(r.totalTollCost.car))} toll` : ''}</span>
                    </span>
                    <ArrowRight className="h-4 w-4 flex-shrink-0 text-slate-300 transition-colors group-hover:text-amber-500" />
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTASection
        heading="Skip the Toll Stress. Book Triveni Cabs™."
        subheading={`${route.origin} to ${route.destination} — ${route.totalDistance} km with ${plazaCount} toll plaza${plazaCount === 1 ? '' : 's'}. Our driver handles it all.`}
      />
    </div>
  );
}
