
// ============================================================================
// DistanceGuideClient — "Triveni Aurora · Ultra-Premium v2" redesign (Aug 2026)
// The site's biggest traffic engine (101 /distance/[route] pages, top GSC
// clicks). Cinematic destination-photo hero, foil-gold typography, seal-style
// trust emblem, dark ↔ warm-light band rhythm, glass panels.
// PRESERVED: speakable-headline / speakable-lead / speakable-faq-first,
// directAnswer render, full FAQ content, travelModes comparison, tollPlazas
// (stacked cards on mobile, table at md+), fuelCost, the one-way booking funnel (oneWaySlug — now the
// most prominent CTA on the page), all analytics handlers. page.js owns all
// JSON-LD emission. No framer-motion — CSS-only transitions (INP-friendly).
// ============================================================================

import Image from 'next/image';
import Link from 'next/link';
import {
  Phone, ArrowRight, ChevronDown, Shield, Clock, Car, CheckCircle2,
  Route, MapPin, Navigation, Star, Coffee, Info,
  ChevronRight, Calendar, Sparkles, Award,
  TrainFront, Bus, Plane, Fuel, IndianRupee, MessageCircle,
} from '@/components/ui/icons';
import TrackedLink from '@/components/ui/TrackedLink';
import { getCityImage, heroBlurDataURL } from '@/utilis/imageUtils';
import CTASection from '@/components/shared/CTASection';
import { SetStickyCta } from '@/components/ui/StickyCtaContext';
import LeadQuoteSection from '@/components/shared/LeadQuoteSection';
import CorridorLinks from '@/components/seo/CorridorLinks';
import RouteLine from '@/components/ui/RouteLine';
// Resolve booking destinations without dropping the action when no page exists.
import { distanceBookingHref } from '@/lib/seo/distance-booking';
import SeasonalCorridorCallout from '@/components/seasonal/SeasonalCorridorCallout';
import { getRegionTheme } from '@/utilis/regionThemes';
import RegionNotesStrip from '@/components/seo/RegionNotesStrip';
import RoadParagraph from '@/components/seo/RoadParagraph';
import { distanceTripPlanning } from '@/utilis/distanceTripPlanning';
import DistanceBookingLink from './DistanceBookingLink';
import { PER_KM, groupDigits } from '@/utilis/pricing';

// Gold as material — foil-gradient text + soft glow (Ultra-Premium v2).
const FOIL =
  'bg-gradient-to-br from-[#FFE9A0] via-[#FACF2D] to-[#B8860B] bg-clip-text text-transparent drop-shadow-[0_2px_18px_rgba(250,207,45,0.35)]';

// Signature gold CTA — shimmer sheen + deep gold shadow + lift on hover.
const GOLD_BTN =
  'sheen inline-flex items-center justify-center gap-2 rounded-full bg-[#FACF2D] font-black text-slate-900 shadow-[0_12px_36px_-10px_rgba(250,207,45,0.55)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-amber-300 active:translate-y-0 active:scale-[0.98]';

const GHOST_BTN_DARK =
  'inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 font-bold text-white backdrop-blur-sm transition-colors hover:bg-white/10';

// One serif heading rhythm for the whole page (font-display-serif lands via globals).
function SerifHeading({ eyebrow, title, highlight, subtitle, tone = 'light', className = '' }) {
  const dark = tone === 'dark';
  return (
    <div className={`max-w-3xl ${className}`}>
      {eyebrow && (
        <span className={`mb-3 inline-flex items-center gap-2 text-[0.7rem] font-bold uppercase tracking-[0.22em] sm:text-xs ${dark ? 'text-amber-300' : 'text-amber-800'}`}>
          <span className="h-px w-7 bg-amber-500/60" />
          {eyebrow}
        </span>
      )}
      <h2 className={`font-display-serif text-balance text-[1.7rem] font-black leading-[1.12] tracking-tight sm:text-4xl lg:text-[2.75rem] ${dark ? 'text-white' : 'text-slate-900'}`}>
        {title} {highlight && <span className={dark ? FOIL : 'text-amber-800'}>{highlight}</span>}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-sm leading-relaxed sm:text-base ${dark ? 'text-slate-300/80' : 'text-slate-600'}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}

// Trust theater — seal-style emblem, not a mute text row.
function TrustSeal({ compact = false }) {
  return (
    <div className={`flex items-center gap-4 rounded-2xl border border-amber-400/25 bg-white/[0.06] backdrop-blur-md ${compact ? 'px-4 py-3' : 'px-5 py-4'}`}>
      <div className="relative flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full border-2 border-[#FACF2D]/70 bg-gradient-to-br from-amber-400/25 via-transparent to-transparent">
        <div className="absolute inset-1 rounded-full border border-amber-400/30" aria-hidden />
        <Award className="h-6 w-6 text-[#FACF2D]" />
      </div>
      <div className="min-w-0">
        <p className="text-xs font-black uppercase tracking-[0.2em] text-amber-200/90">Since 2015 · 4.9★</p>
        <p className="mt-0.5 text-[11px] leading-snug text-white/60">Pay after trip · No hidden charges · 10,000+ happy travellers</p>
      </div>
    </div>
  );
}

// See the note in the corridor client: a hub name used raw in an href yields
// "/mount abu", which 404s while /mount-abu exists.
const hubSlug = (name) => String(name || '').trim().toLowerCase().replace(/\s+/g, '-');

export default function DistanceGuideClient({ route, relatedRoutes, corridorLinks = [], seasonalCallout = null, roadParagraph = null }) {
  const planning = distanceTripPlanning[`${hubSlug(route.origin)}-to-${hubSlug(route.destination)}`];
  const region = getRegionTheme(route.destination);
  const bookingHref = distanceBookingHref(route);
  const whatsappMsg = `Hi, I want to book a cab from ${route.origin} to ${route.destination} (${route.distance.km} km)`;
  const totalToll = route.tollPlazas.reduce((sum, t) => sum + t.cost, 0);
  const heroImage = getCityImage(route.destination) || getCityImage(route.origin);
  const travelModes = route.travelModes || [];
  const modeIcons = { 'Cab / Taxi': Car, Train: TrainFront, Bus, Flight: Plane };
  const fareRows = [
    { name: 'AC Sedan', sub: 'Swift Dzire / Etios · 4 seater', fare: route.cabFares.sedan, perKm: `₹${groupDigits(PER_KM.sedan)}/km` },
    { name: 'Ertiga SUV', sub: 'Maruti Ertiga · 6 seater', fare: route.cabFares.suv, perKm: `₹${groupDigits(PER_KM.ertiga)}/km` },
    { name: 'Innova Crysta', sub: 'Toyota Innova Crysta · 7 seater', fare: route.cabFares.innova, perKm: `₹${groupDigits(PER_KM.innova)}/km` },
    { name: 'Tempo Traveller', sub: '12-seater AC', fare: route.cabFares.tempo, perKm: `₹${groupDigits(PER_KM.tempo)}/km` },
  ];
  const heroHours = route.duration.split('-')[0].trim();

  return (
    <div className="min-h-screen bg-slate-950 text-white">

      {/* ================================================================ */}
      {/* 1 · CINEMATIC HERO — destination photo, foil-gold route title    */}
      {/* ================================================================ */}
      <section className="relative flex min-h-0 flex-col justify-end overflow-hidden bg-[radial-gradient(circle_at_85%_10%,rgba(250,207,45,0.18),transparent_34%),linear-gradient(145deg,#020617_0%,#0f172a_65%,#29200b_100%)] md:min-h-[78vh]">
        <Image
          src={heroImage}
          alt={`${route.origin} to ${route.destination} — ${route.distance.km} km by road distance guide`}
          fill
          className="object-cover" priority
          sizes="100vw"
          quality={80}
          placeholder="blur"
          blurDataURL={heroBlurDataURL}
        />
        {/* Layered scrim — only where text sits, photo stays visible */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-950/40" />
        <div className="absolute inset-y-0 left-0 w-full bg-gradient-to-r from-slate-950/70 via-slate-950/20 to-transparent lg:w-3/4" />
        {/* Gold lane strip — brand motif */}
        <div className={`absolute inset-x-0 top-0 z-20 h-1.5 ${region.laneStrip}`} aria-hidden />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-10 pt-8 sm:pt-16 sm:px-6 sm:pb-14 lg:px-8">
          <nav className="mb-7 flex flex-wrap items-center gap-1.5 text-xs text-slate-300" aria-label="Breadcrumb">
            <Link href="/" className="transition-colors hover:text-amber-300">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <Link href="/distance" className="transition-colors hover:text-amber-300">Distance Guides</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-white/70">{route.origin} to {route.destination}</span>
          </nav>

          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-1.5 backdrop-blur-md">
                <Route className="h-3.5 w-3.5 text-[#FACF2D]" />
                <span className="text-[11px] font-black uppercase tracking-[0.2em] text-[#FACF2D]">Distance &amp; Travel Guide · {region.name}</span>
              </div>

              <h1 className="speakable-headline font-display-serif text-balance text-4xl font-black leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-7xl">
                {route.origin}
                {/* The word "to" is visible here, but JSX stripped the whitespace on
                    both sides of it, so the heading text read "DelhitoAgra". These
                    sr-only spaces restore real spaces without touching the margins
                    that already do the visual spacing. */}
                <span className="sr-only"> </span>
                <span className="mx-2 font-sans text-2xl font-bold text-slate-300 sm:mx-3 sm:text-4xl lg:text-5xl">to</span>
                <span className="sr-only"> </span>
                <span className={FOIL}>{route.destination}</span>{' '}
                <span className="mt-3 block font-sans text-base font-bold text-white/75 sm:text-xl lg:text-2xl">
                  Road Distance: {route.distance.km} km · {route.duration} · Cab from {route.cabFares.sedan}
                </span>
              </h1>

              <p className="mt-4 max-w-lg text-sm leading-relaxed text-white/60 sm:text-base">{route.bestRoute}</p>
              <p className={`mt-2 max-w-lg text-sm font-semibold ${region.accentText}`}>{region.tagline}</p>

              {/* RouteLine glass chip — real km + time, this template always has it */}
              <div className="glass-dark mt-6 max-w-md rounded-2xl px-4 py-3">
                <RouteLine from={route.origin} to={route.destination} tone="dark" />
                <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-white/60">
                  <span className="inline-flex items-center gap-1">
                    <Navigation className="h-3.5 w-3.5 text-amber-400" /> {route.distance.km} km ({route.distance.miles} mi)
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5 text-amber-400" /> {route.duration}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Route className="h-3.5 w-3.5 text-amber-400" /> {route.highway}
                  </span>
                </div>
              </div>

              {/* CTAs — one-way funnel is the hero money link; compact on desktop */}
              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                {route.oneWaySlug ? (
                  <Link
                    href={bookingHref}
                    className={`${GOLD_BTN} w-full px-7 py-4 text-sm sm:text-base lg:w-auto`}
                  >
                    <Car className="h-5 w-5" />
                    Book {route.origin} to {route.destination} cab — one-way from {route.cabFares.sedan}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                ) : (
                  <TrackedLink track="whatsapp" args={['distance_hero']}
                    href={`https://wa.me/917668570551?text=${encodeURIComponent(whatsappMsg)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${GOLD_BTN} w-full px-7 py-4 text-sm sm:text-base lg:w-auto`}
                  >
                    <MessageCircle className="h-5 w-5" />
                    Get instant quote on WhatsApp
                  </TrackedLink>
                )}
                <TrackedLink track="phone" args={['distance_hero']}
                  href="tel:+917668570551"
                  className={`${GHOST_BTN_DARK} w-full px-7 py-4 text-sm sm:text-base lg:w-auto`}
                >
                  <Phone className="h-4 w-4" /> Call 7668570551
                </TrackedLink>
                {route.oneWaySlug && (
                  <TrackedLink track="whatsapp" args={['distance_hero']}
                    href={`https://wa.me/917668570551?text=${encodeURIComponent(whatsappMsg)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${GHOST_BTN_DARK} w-full px-7 py-4 text-sm sm:text-base lg:w-auto`}
                  >
                    <MessageCircle className="h-4 w-4" /> WhatsApp Quote
                  </TrackedLink>
                )}
              </div>
            </div>

            {/* Fare card + trust seal — the theater sits next to the money */}
            <div className="w-full max-w-sm flex-shrink-0 space-y-3 lg:w-80">
              <div className="border-gradient-gold glass-dark rounded-3xl p-6">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-300">Cab fare, all inclusive</p>
                <div className="mt-1.5 flex items-end gap-2">
                  <span className="font-display-serif text-4xl font-black leading-none text-white sm:text-5xl">{route.cabFares.sedan}</span>
                  <span className="mb-1 text-xs text-slate-300">sedan · one-way</span>
                </div>
                <div className="mt-4 grid grid-cols-2 gap-3 border-t border-white/10 pt-4">
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-slate-300">Distance</p>
                    <p className="text-xl font-black text-white">{route.distance.km}<span className="ml-0.5 text-sm text-slate-300">km</span></p>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-slate-300">Drive time</p>
                    <p className="text-xl font-black text-white">{heroHours}<span className="ml-0.5 text-sm text-slate-300">hrs</span></p>
                  </div>
                </div>
                <div className="mt-3 flex items-center gap-1.5">
                  {[1, 2, 3, 4, 5].map((i) => <Star key={i} className="h-3.5 w-3.5 fill-[#FACF2D] text-[#FACF2D]" />)}
                  <span className="ml-1 text-[11px] font-medium text-slate-300">4.9 · 10,000+ trips</span>
                </div>
              </div>
              <TrustSeal />
            </div>
          </div>
        </div>
      </section>

      {/* In-window festival / yatra call-out for this destination (server-resolved, null on most routes). */}
      <SeasonalCorridorCallout callout={seasonalCallout} />
      <nav aria-label="Guide sections" className="border-y border-slate-200 bg-white px-4 py-3">
        <div className="mx-auto flex max-w-6xl flex-wrap gap-2">
          {[['distance-summary', 'Distance & time'], ['road-and-stops', 'Road & stops'], ...(route.tollPlazas.length ? [['route-tolls', 'Tolls']] : []), ['cab-fares', 'Cab fares'], ['distance-faqs', 'FAQs']].map(([id, label]) => (
            <a key={id} href={`#${id}`} className="inline-flex min-h-11 items-center rounded-full border border-slate-300 px-4 text-sm font-semibold text-slate-800 hover:bg-amber-50">{label}</a>
          ))}
        </div>
      </nav>

      {/* Region-specific driving notes — palette and copy differ by destination region. */}
      <RegionNotesStrip theme={region} origin={route.origin} destination={route.destination} />
      {/* Week 48 A3: the road paragraph for the fifty highest-traffic journeys, resolved on the server */}
      <RoadParagraph paragraph={roadParagraph} theme={region} />


      {/* ================================================================ */}
      {/* 2 · DIRECT ANSWER (voice / AEO) — warm-light band                */}
      {/* ================================================================ */}
      <section id="distance-summary" className="bg-gradient-to-b from-[#FFF6DC] via-amber-50/70 to-white px-4 py-16 text-slate-900 sm:px-6 md:py-24">
        <div className="mx-auto max-w-4xl">
          <div>
            <SerifHeading
              eyebrow="The quick answer"
              title={`How far is ${route.destination} from`}
              highlight={`${route.origin}?`}
            />
            <div className="mt-7 rounded-2xl border border-amber-200/70 bg-white/80 p-6 shadow-[0_10px_40px_-18px_rgba(180,130,10,0.25)] backdrop-blur-sm sm:p-8">
              <p className="speakable-lead border-l-4 border-[#FACF2D] pl-4 text-base leading-relaxed text-slate-700 sm:pl-5 sm:text-lg">
                {route.directAnswer}
              </p>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
              {[
                { Icon: Route, label: 'By Road', value: `${route.distance.km} km` },
                { Icon: Clock, label: 'Drive Time', value: route.duration },
                { Icon: IndianRupee, label: 'Cab From', value: route.cabFares.sedan },
                { Icon: Fuel, label: 'Fuel (self-drive)', value: `₹${(route.fuelCost || 0).toLocaleString('en-IN')}` },
              ].map((s, i) => (
                <div key={i} className="rounded-2xl border border-amber-100 bg-white p-4 shadow-sm transition-shadow hover:shadow-md">
                  <s.Icon className="mb-2 h-4 w-4 text-amber-600" />
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-600">{s.label}</p>
                  <p className="text-base font-black text-slate-900 sm:text-lg">{s.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* 3 · DISTANCE / TIME / FARE TABLE — white band                    */}
      {/* ================================================================ */}
      {planning && (
        <section id="trip-planning" aria-labelledby="trip-planning-title" className="bg-amber-50 px-4 py-10 text-slate-900 sm:px-6">
          <div className="mx-auto max-w-4xl">
            <h2 id="trip-planning-title" className="text-2xl font-bold">{planning[0]}</h2>
            <p className="mt-4 leading-relaxed">Plan for approximately {route.distance.km} km and {route.duration} of driving from {route.origin} to {route.destination}. Your pickup, drop, chosen road, traffic and breaks can change the actual distance and arrival time.</p>
            <ul className="mt-5 list-disc space-y-3 pl-5 leading-relaxed">
              {planning.slice(1).map(note => <li key={note}>{note}</li>)}
            </ul>
            <p className="mt-5 text-sm leading-relaxed">Use the vehicle fares below as planning estimates. Ask for a written quote confirming the route, minimum billing, tolls, parking, driver allowance, taxes and waiting charges, including which items are included or extra.</p>
            <DistanceBookingLink href={bookingHref} routeName={`${route.origin} to ${route.destination}`} />
          </div>
        </section>
      )}

      <section id="distance-facts" className="bg-white px-4 py-16 text-slate-900 sm:px-6 md:py-24">
        <div className="mx-auto max-w-4xl">
          <div>
            <SerifHeading
              eyebrow="At a glance"
              title={`${route.origin} to ${route.destination} distance, time`}
              highlight="& cab fare"
            />
          </div>
          <div>
            {/* Mobile: label/value list — no sideways scrolling */}
            <div className="mt-8 rounded-2xl border border-slate-200/70 bg-white p-4 shadow-[0_16px_50px_-30px_rgba(15,23,42,0.35)] md:hidden">
              <dl className="divide-y divide-slate-100">
                <div className="flex items-baseline justify-between gap-3 py-2.5 first:pt-0">
                  <dt className="text-[11px] font-bold uppercase tracking-wider text-slate-600">Road distance</dt>
                  <dd className="text-right text-sm font-bold text-slate-900">{route.distance.km} km ({route.distance.miles} miles)</dd>
                </div>
                <div className="flex items-baseline justify-between gap-3 py-2.5">
                  <dt className="text-[11px] font-bold uppercase tracking-wider text-slate-600">Drive time by cab</dt>
                  <dd className="text-right text-sm font-bold text-slate-900">{route.duration}</dd>
                </div>
                <div className="flex items-baseline justify-between gap-3 py-2.5">
                  <dt className="text-[11px] font-bold uppercase tracking-wider text-slate-600">Best route / highway</dt>
                  <dd className="text-right text-sm font-bold text-slate-900">{route.highway}</dd>
                </div>
                {fareRows.map((v, i) => (
                  <div key={`fare-line-${i}`} className="flex items-baseline justify-between gap-3 py-2.5">
                    <dt className="text-[11px] font-bold uppercase tracking-wider text-slate-600">
                      {v.name} cab fare <span className="block text-[11px] font-normal normal-case tracking-normal text-slate-600">{v.sub}</span>
                    </dt>
                    <dd className="text-right text-sm font-bold text-slate-900">
                      {v.fare} <span className="text-xs font-medium text-slate-600">({v.perKm})</span>
                    </dd>
                  </div>
                ))}
                <div className="flex items-baseline justify-between gap-3 py-2.5 last:pb-0">
                  <dt className="text-[11px] font-bold uppercase tracking-wider text-slate-600">Approx. fuel cost (self-drive)</dt>
                  <dd className="text-right text-sm font-bold text-slate-900">₹{(route.fuelCost || 0).toLocaleString('en-IN')} one-way</dd>
                </div>
              </dl>
            </div>

            {/* Desktop: true semantic table, fits its container */}
            <div className="mt-8 hidden overflow-hidden rounded-2xl border border-slate-200/70 bg-white shadow-[0_16px_50px_-30px_rgba(15,23,42,0.35)] md:block">
              <table className="w-full text-left text-sm">
                <tbody className="divide-y divide-slate-100">
                  <tr>
                    <th scope="row" className="w-1/2 px-5 py-4 font-semibold text-slate-500">Road distance</th>
                    <td className="px-5 py-4 font-bold text-slate-900">{route.distance.km} km ({route.distance.miles} miles)</td>
                  </tr>
                  <tr>
                    <th scope="row" className="px-5 py-4 font-semibold text-slate-500">Drive time by cab</th>
                    <td className="px-5 py-4 font-bold text-slate-900">{route.duration}</td>
                  </tr>
                  <tr>
                    <th scope="row" className="px-5 py-4 font-semibold text-slate-500">Best route / highway</th>
                    <td className="px-5 py-4 font-bold text-slate-900">{route.highway}</td>
                  </tr>
                  {fareRows.map((v, i) => (
                    <tr key={i} className="transition-colors hover:bg-amber-50/50">
                      <th scope="row" className="px-5 py-4 font-semibold text-slate-500">
                        {v.name} cab fare <span className="block text-[11px] font-normal text-slate-600">{v.sub}</span>
                      </th>
                      <td className="px-5 py-4 font-bold text-slate-900">{v.fare} <span className="text-xs font-medium text-slate-600">({v.perKm})</span></td>
                    </tr>
                  ))}
                  <tr>
                    <th scope="row" className="px-5 py-4 font-semibold text-slate-500">Approx. fuel cost (self-drive)</th>
                    <td className="px-5 py-4 font-bold text-slate-900">₹{(route.fuelCost || 0).toLocaleString('en-IN')} one-way</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-xs text-slate-600">* Cab fares are one-way and include fuel &amp; driver. Toll and state tax are extra at actual.</p>
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* 5 · TRAVEL MODES COMPARISON — white band                         */}
      {/* ================================================================ */}
      {travelModes.length > 0 && (
        <section id="travel-options" className="bg-white px-4 py-16 text-slate-900 sm:px-6 md:py-24">
          <div className="mx-auto max-w-5xl">
            <div>
              <SerifHeading
                eyebrow="Compare options"
                title={`${route.origin} to ${route.destination}: cab vs train vs bus`}
                highlight="vs flight"
                subtitle={`A quick comparison of travel time, cost and comfort for the ${route.distance.km} km journey to help you choose the right mode.`}
              />
            </div>
            <div>
              {/* Mobile: one card per mode — no sideways scrolling */}
              <div className="mt-8 space-y-3 md:hidden">
                {travelModes.map((m, i) => {
                  const Icon = modeIcons[m.mode] || Car;
                  return (
                    <div
                      key={`mode-card-${i}`}
                      className={`rounded-2xl border p-4 shadow-[0_16px_50px_-34px_rgba(15,23,42,0.35)] ${i === 0 ? 'border-amber-300/70 bg-amber-50/70' : 'border-slate-200/70 bg-white'}`}
                    >
                      <p className="flex flex-wrap items-center gap-2 text-sm font-bold text-slate-900">
                        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-400/15">
                          <Icon className="h-4 w-4 text-amber-600" />
                        </span>
                        {m.mode}
                        {i === 0 && <span className="rounded-full bg-[#FACF2D] px-2 py-0.5 text-[9px] font-black uppercase tracking-wide text-slate-900">Recommended</span>}
                      </p>
                      <dl className="mt-3 space-y-1.5">
                        <div className="flex items-baseline justify-between gap-3">
                          <dt className="text-[11px] font-bold uppercase tracking-wider text-slate-600">Travel Time</dt>
                          <dd className="text-right text-sm text-slate-700">{m.time}</dd>
                        </div>
                        <div className="flex items-baseline justify-between gap-3">
                          <dt className="text-[11px] font-bold uppercase tracking-wider text-slate-600">Cost</dt>
                          <dd className="text-right text-sm text-slate-700">{m.cost}</dd>
                        </div>
                        <div className="flex items-baseline justify-between gap-3">
                          <dt className="text-[11px] font-bold uppercase tracking-wider text-slate-600">Comfort</dt>
                          <dd className="text-right text-sm text-slate-600">{m.comfort}</dd>
                        </div>
                        <div className="flex items-baseline justify-between gap-3">
                          <dt className="text-[11px] font-bold uppercase tracking-wider text-slate-600">Best For</dt>
                          <dd className="text-right text-sm text-slate-600">{m.best}</dd>
                        </div>
                      </dl>
                    </div>
                  );
                })}
              </div>

              {/* Desktop: true semantic table, fits its container */}
              <div className="mt-8 hidden overflow-hidden rounded-2xl border border-slate-200/70 shadow-[0_16px_50px_-30px_rgba(15,23,42,0.35)] md:block">
                <table className="w-full text-left text-sm">
                  <thead className="bg-slate-950 text-white">
                    <tr>
                      <th className="px-4 py-3.5 font-bold">Mode</th>
                      <th className="px-4 py-3.5 font-bold">Travel Time</th>
                      <th className="px-4 py-3.5 font-bold">Cost</th>
                      <th className="px-4 py-3.5 font-bold">Comfort</th>
                      <th className="px-4 py-3.5 font-bold">Best For</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 bg-white">
                    {travelModes.map((m, i) => {
                      const Icon = modeIcons[m.mode] || Car;
                      return (
                        <tr key={i} className={i === 0 ? 'bg-amber-50/70' : 'transition-colors hover:bg-slate-50'}>
                          <td className="whitespace-nowrap px-4 py-4 font-bold text-slate-900">
                            <span className="inline-flex items-center gap-2">
                              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-400/15">
                                <Icon className="h-4 w-4 text-amber-600" />
                              </span>
                              {m.mode}
                              {i === 0 && <span className="rounded-full bg-[#FACF2D] px-2 py-0.5 text-[9px] font-black uppercase tracking-wide text-slate-900">Recommended</span>}
                            </span>
                          </td>
                          <td className="px-4 py-4 text-slate-700">{m.time}</td>
                          <td className="px-4 py-4 text-slate-700">{m.cost}</td>
                          <td className="px-4 py-4 text-slate-600">{m.comfort}</td>
                          <td className="px-4 py-4 text-slate-600">{m.best}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
              <p className="mt-3 text-xs text-slate-600">
                For {route.origin} to {route.destination}, a private cab offers door-to-door pickup, no fixed timetable and the freedom to stop anywhere en route.
              </p>
            </div>
          </div>
        </section>
      )}

      {/* ================================================================ */}
      {/* 6 · JOURNEY — best route, road conditions, stops (dark aurora)   */}
      {/* ================================================================ */}
      <section id="road-and-stops" className="bg-aurora grain-overlay relative overflow-hidden px-4 py-16 sm:px-6 md:py-24">
        <div className="relative z-10 mx-auto max-w-6xl">
          <div>
            <SerifHeading
              tone="dark"
              eyebrow="Journey details"
              title={`${route.origin} to ${route.destination}`}
              highlight="road guide"
              subtitle={`Route, road conditions and every worthwhile halt across the ${route.distance.km} km drive via ${route.highway}.`}
            />
          </div>

          <div className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-5">
            {/* Best route + visual journey */}
            <div className="lg:col-span-3">
              <div className="glass-dark h-full rounded-3xl p-6 transition-colors duration-300 hover:border-amber-400/30 sm:p-8">
                <div className="mb-6 flex items-center gap-2">
                  <span className="rounded-xl bg-amber-400/15 p-2">
                    <Navigation className="h-5 w-5 text-amber-400" />
                  </span>
                  <span className="text-[11px] font-black uppercase tracking-[0.2em] text-amber-400">Best Route</span>
                </div>

                <div className="relative mb-7">
                  <div className="mb-1 flex items-center gap-3">
                    <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-[#FACF2D] shadow-[0_6px_20px_-6px_rgba(250,207,45,0.6)]">
                      <MapPin className="h-4 w-4 text-slate-900" />
                    </div>
                    <span className="font-display-serif text-lg font-black sm:text-xl">{route.origin}</span>
                  </div>

                  <div className="ml-[17px] space-y-1.5 border-l-2 border-dashed border-amber-400/25 py-2 pl-7">
                    {route.majorStops.map((stop, i) => (
                      <div key={i} className="relative flex items-center gap-2">
                        <div className="absolute -left-[33px] h-3 w-3 rounded-full border-2 border-amber-400/40 bg-slate-800" />
                        <span className="text-xs font-medium text-white/55">{stop}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-1 flex items-center gap-3">
                    <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-emerald-500 shadow-[0_6px_20px_-6px_rgba(16,185,129,0.6)]">
                      <MapPin className="h-4 w-4 text-white" />
                    </div>
                    <span className="font-display-serif text-lg font-black sm:text-xl">{route.destination}</span>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-2.5">
                  <div className="rounded-xl bg-white/[0.05] px-3 py-2.5 text-center">
                    <p className="text-lg font-black text-white sm:text-xl">{route.distance.km}</p>
                    <p className="text-[9px] uppercase tracking-widest text-slate-300">km</p>
                  </div>
                  <div className="rounded-xl bg-white/[0.05] px-3 py-2.5 text-center">
                    <p className="text-lg font-black text-white sm:text-xl">{heroHours}</p>
                    <p className="text-[9px] uppercase tracking-widest text-slate-300">hours</p>
                  </div>
                  <div className="rounded-xl bg-white/[0.05] px-3 py-2.5 text-center">
                    <p className="break-words text-sm font-bold text-white/75">{route.highway}</p>
                    <p className="text-[9px] uppercase tracking-widest text-slate-300">highway</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Road conditions + quick facts */}
            <div className="flex flex-col gap-5 lg:col-span-2">
              <div>
                <div className="glass-dark rounded-3xl p-6 transition-colors duration-300 hover:border-amber-400/30">
                  <div className="mb-3 flex items-center gap-2">
                    <span className="rounded-xl bg-emerald-400/15 p-2">
                      <Shield className="h-4 w-4 text-emerald-400" />
                    </span>
                    <span className="text-[11px] font-black uppercase tracking-[0.2em] text-emerald-300">Road Conditions</span>
                  </div>
                  <p className="text-sm leading-relaxed text-white/65">{route.roadCondition}</p>
                </div>
              </div>
              <div>
                <div className="glass-dark relative flex-1 overflow-hidden rounded-3xl p-6">
                  <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-amber-400/15 blur-3xl" aria-hidden />
                  <div className="mb-4 flex items-center gap-2">
                    <span className="rounded-xl bg-amber-400/15 p-2">
                      <Info className="h-4 w-4 text-[#FACF2D]" />
                    </span>
                    <span className="text-[11px] font-black uppercase tracking-[0.2em] text-amber-400">Quick Facts</span>
                  </div>
                  <div className="space-y-2.5">
                    {[
                      { k: 'Distance', v: `${route.distance.km} km / ${route.distance.miles} mi` },
                      { k: 'Highway', v: route.highway },
                      { k: 'Tolls', v: `${route.tollPlazas.length} plazas · ₹${groupDigits(totalToll)}` },
                      { k: 'Stops', v: `${route.majorStops.length} en-route` },
                    ].map((f, i) => (
                      <div key={i}>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-slate-300">{f.k}</span>
                          <span className="font-bold text-white">{f.v}</span>
                        </div>
                        {i < 3 && <div className="mt-2.5 h-px bg-white/10" />}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* En-route stops — expandable timeline */}
          {route.majorStops.length > 0 && (
            <div className="mt-12">
              <div>
                <div className="mb-7 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                  <h3 className="font-display-serif text-xl font-black text-white sm:text-2xl">Where to stop en route</h3>
                  <p className="text-sm text-slate-300">{route.majorStops.length} halts along {route.distance.km} km</p>
                </div>
              </div>
              <div className="relative">
                <div className="absolute bottom-0 left-5 top-0 w-0.5 bg-gradient-to-b from-[#FACF2D] via-amber-400/40 to-emerald-400 sm:left-6" aria-hidden />

                <div>
                  <div className="relative mb-3 flex items-center gap-4">
                    <div className="relative z-10 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#FACF2D] shadow-[0_6px_20px_-6px_rgba(250,207,45,0.6)] sm:h-12 sm:w-12">
                      <MapPin className="h-4 w-4 text-slate-900 sm:h-5 sm:w-5" />
                    </div>
                    <div className="glass-dark flex-1 rounded-xl border-amber-400/20 px-4 py-3 sm:px-5">
                      <p className="text-sm font-black text-white">{route.origin}</p>
                      <p className="text-[11px] font-medium text-amber-400">Start · km 0</p>
                    </div>
                  </div>
                </div>

                {route.majorStops.map((stop, i) => (
                  <div key={i}>
                    <div className="group relative mb-3 flex items-center gap-4">
                      <div className="relative z-10 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-white/15 bg-slate-900 transition-colors group-hover:border-amber-400/50 sm:h-12 sm:w-12">
                        <Coffee className="h-4 w-4 text-slate-300 transition-colors group-hover:text-amber-400" />
                      </div>
                      <div className="glass-dark flex-1 rounded-xl px-4 py-3 transition-colors group-hover:border-white/20 sm:px-5">
                        <p className="text-sm font-bold text-white/85">{stop}</p>
                        <p className="text-[11px] text-slate-300">Rest stop · Food &amp; refreshments</p>
                      </div>
                    </div>
                  </div>
                ))}


                <div>
                  <div className="relative flex items-center gap-4">
                    <div className="relative z-10 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-emerald-500 shadow-[0_6px_20px_-6px_rgba(16,185,129,0.6)] sm:h-12 sm:w-12">
                      <MapPin className="h-4 w-4 text-white sm:h-5 sm:w-5" />
                    </div>
                    <div className="glass-dark flex-1 rounded-xl border-emerald-400/20 px-4 py-3 sm:px-5">
                      <p className="text-sm font-black text-white">{route.destination}</p>
                      <p className="text-[11px] font-medium text-emerald-400">Destination · {route.distance.km} km</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ================================================================ */}
      {/* 7 · TOLL PLAZAS — warm-light band, cards on mobile / table md+  */}
      {/* ================================================================ */}
      {route.tollPlazas.length > 0 && (
        <section id="route-tolls" className="bg-gradient-to-b from-[#FFF6DC] via-amber-50/60 to-white px-4 py-16 text-slate-900 sm:px-6 md:py-24">
          <div className="mx-auto max-w-4xl">
            <div>
              <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
                <SerifHeading
                  eyebrow="Toll info"
                  title="Toll plazas on"
                  highlight="this route"
                />
                <div className="flex-shrink-0 rounded-2xl border border-amber-200 bg-white px-6 py-4 shadow-[0_10px_40px_-18px_rgba(180,130,10,0.3)]">
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-amber-800">Total toll</p>
                  <p className="font-display-serif text-3xl font-black text-slate-900">₹{groupDigits(totalToll)}</p>
                </div>
              </div>
            </div>

            <div>
              {/* Mobile: one card per plaza, total card last — no sideways scrolling */}
              <div className="mt-8 space-y-3 md:hidden">
                {route.tollPlazas.map((toll, i) => (
                  <div key={`toll-card-${i}`} className="rounded-2xl border border-amber-200/70 bg-white p-4 shadow-[0_16px_50px_-34px_rgba(180,130,10,0.35)]">
                    <p className="flex items-baseline gap-2 text-sm font-bold text-slate-900">
                      <span className="text-xs font-black text-amber-800">{String(i + 1).padStart(2, '0')}</span>
                      {toll.name}
                    </p>
                    <dl className="mt-2.5 space-y-1.5">
                      <div className="flex items-baseline justify-between gap-3">
                        <dt className="text-[11px] font-bold uppercase tracking-wider text-slate-600">At km</dt>
                        <dd className="text-right text-sm text-slate-600">{toll.km} km</dd>
                      </div>
                      <div className="flex items-baseline justify-between gap-3">
                        <dt className="text-[11px] font-bold uppercase tracking-wider text-slate-600">Toll (car)</dt>
                        <dd className="text-right text-sm font-bold text-slate-900">₹{groupDigits(toll.cost)}</dd>
                      </div>
                    </dl>
                  </div>
                ))}
                <div className="flex items-baseline justify-between gap-3 rounded-2xl border border-amber-200/70 bg-amber-50/80 p-4">
                  <p className="text-sm font-black text-slate-900">Total one-way toll</p>
                  <p className="text-base font-black text-amber-700">₹{groupDigits(totalToll)}</p>
                </div>
              </div>

              {/* Desktop: true semantic table, fits its container */}
              <div className="mt-8 hidden overflow-hidden rounded-2xl border border-amber-200/70 bg-white shadow-[0_16px_50px_-30px_rgba(180,130,10,0.35)] md:block">
                <table className="w-full text-left text-sm">
                  <thead className="bg-slate-950 text-white">
                    <tr>
                      <th className="px-5 py-3.5 font-bold">#</th>
                      <th className="px-5 py-3.5 font-bold">Toll plaza</th>
                      <th className="px-5 py-3.5 font-bold">At km</th>
                      <th className="px-5 py-3.5 font-bold">Toll (car)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {route.tollPlazas.map((toll, i) => (
                      <tr key={i} className="transition-colors hover:bg-amber-50/60">
                        <td className="px-5 py-3.5 font-black text-amber-800">{String(i + 1).padStart(2, '0')}</td>
                        <td className="px-5 py-3.5 font-bold text-slate-900">{toll.name}</td>
                        <td className="px-5 py-3.5 text-slate-600">{toll.km} km</td>
                        <td className="px-5 py-3.5 font-bold text-slate-900">₹{groupDigits(toll.cost)}</td>
                      </tr>
                    ))}
                  </tbody>
                  <tfoot>
                    <tr className="bg-amber-50/80">
                      <td className="px-5 py-3.5" />
                      <td className="px-5 py-3.5 font-black text-slate-900">Total one-way toll</td>
                      <td className="px-5 py-3.5" />
                      <td className="px-5 py-3.5 font-black text-amber-700">₹{groupDigits(totalToll)}</td>
                    </tr>
                  </tfoot>
                </table>
              </div>
              <p className="mt-3 text-xs text-slate-600">* FASTag accepted at all plazas. Rates approximate, may vary. Tolls are billed at actual on your trip.</p>
            </div>
          </div>
        </section>
      )}

      {/* ================================================================ */}
      {/* 8 · FLEET PRICING — dark band, photo cards                       */}
      {/* ================================================================ */}
      <section id="cab-fares" className="bg-slate-950 px-4 py-16 sm:px-6 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <SerifHeading
                tone="dark"
                eyebrow="Book this route"
                title={`${route.origin} to ${route.destination}`}
                highlight="cab fare"
              />
              <p className="flex-shrink-0 text-sm text-slate-300">Fuel and driver included · Tolls and taxes extra</p>
            </div>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
            {[
              { name: 'Sedan', sub: 'Swift Dzire / Etios', fare: route.cabFares.sedan, seats: '4', perKm: `₹${groupDigits(PER_KM.sedan)}/km`, img: '/images/car/swift_dzire.jpg', pop: false },
              { name: 'Ertiga SUV', sub: 'Maruti Ertiga', fare: route.cabFares.suv, seats: '6', perKm: `₹${groupDigits(PER_KM.ertiga)}/km`, img: '/images/car/ertiga.jpg', pop: false },
              { name: 'Innova Crysta', sub: 'Toyota Innova Crysta', fare: route.cabFares.innova, seats: '7', perKm: `₹${groupDigits(PER_KM.innova)}/km`, img: '/images/car/innova_crysta.jpg', pop: true },
              { name: 'Tempo Traveller', sub: '12-Seater AC', fare: route.cabFares.tempo, seats: '12', perKm: `₹${groupDigits(PER_KM.tempo)}/km`, img: '/images/tempo/12_seater.jpg', pop: false },
            ].map((v, i) => (
              <div key={i}>
                <div className={`group relative overflow-hidden rounded-3xl transition-transform duration-300 hover:-translate-y-1 ${v.pop ? 'border-gradient-gold glow-gold' : 'ring-1 ring-white/10'}`}>
                  {v.pop && (
                    <div className="bg-gradient-to-r from-[#B8860B] via-[#FACF2D] to-[#FFE9A0] py-1.5 text-center">
                      <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-900">Most Popular</span>
                    </div>
                  )}
                  <div className="relative h-40 sm:h-44">
                    <Image
                      src={v.img}
                      alt={`${v.name} for ${route.origin} to ${route.destination}`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                    <div className="absolute bottom-3 left-4">
                      <h3 className="font-display-serif text-xl font-black text-white">{v.name}</h3>
                      <p className="text-[11px] text-white/55">{v.sub} · {v.seats} Seater</p>
                    </div>
                  </div>
                  <div className="bg-slate-900 p-5 sm:p-6">
                    <div className="mb-4 flex items-end justify-between">
                      <div>
                        <p className="text-[10px] uppercase tracking-[0.18em] text-slate-300">Starting from</p>
                        <p className={`font-display-serif text-3xl font-black ${v.pop ? FOIL : 'text-white'}`}>{v.fare}</p>
                      </div>
                      <span className="text-xs font-medium text-slate-300">{v.perKm}</span>
                    </div>
                    <div className="mb-5 grid grid-cols-2 gap-2">
                      {['AC Vehicle', 'GPS Tracked', 'Fuel Included', 'Verified Driver'].map((f, j) => (
                        <span key={j} className="flex items-center gap-1.5 text-[11px] text-white/55">
                          <CheckCircle2 className="h-3 w-3 flex-shrink-0 text-emerald-400" /> {f}
                        </span>
                      ))}
                    </div>
                    <TrackedLink track="whatsapp" args={['distance_fare']}
                      href={`https://wa.me/917668570551?text=${encodeURIComponent(`Hi, book ${v.name} from ${route.origin} to ${route.destination}`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex w-full items-center justify-center gap-2 rounded-xl py-3.5 text-sm font-bold transition-all active:scale-[0.97] ${
                        v.pop
                          ? 'sheen bg-[#FACF2D] font-black text-slate-900 shadow-[0_12px_36px_-10px_rgba(250,207,45,0.55)] hover:-translate-y-0.5 hover:bg-amber-300'
                          : 'border border-white/10 bg-white/10 text-white hover:bg-white/15'
                      }`}
                    >
                      Book {v.name} <ArrowRight className="h-4 w-4" />
                    </TrackedLink>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-7 text-center text-xs text-slate-300">* Toll &amp; state tax extra at actual. Fares based on {route.distance.km} km one-way.</p>
        </div>
      </section>

      {/* ================================================================ */}
      {/* 9 · TIPS & WHY TRIVENI — white band                              */}
      {/* ================================================================ */}
      <section className="bg-white px-4 py-16 text-slate-900 sm:px-6 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div>
            <SerifHeading
              eyebrow="Travel smart"
              title="Tips from drivers who run this route"
              highlight="every week"
            />
          </div>

          <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
            <div>
              <div className="h-full rounded-3xl border border-slate-200/70 bg-slate-50 p-7 transition-all duration-300 hover:border-amber-300 hover:shadow-xl sm:p-8">
                <div className="mb-5 inline-flex rounded-2xl bg-emerald-50 p-3.5">
                  <Calendar className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="font-display-serif mb-2.5 text-xl font-black text-slate-900">Best time to travel</h3>
                <p className="text-sm leading-relaxed text-slate-600 sm:text-base">{route.bestTime}</p>
              </div>
            </div>
            <div>
              <div className="h-full rounded-3xl border border-amber-200/70 bg-gradient-to-br from-amber-50 to-orange-50 p-7 transition-all duration-300 hover:border-amber-300 hover:shadow-xl sm:p-8">
                <div className="mb-5 inline-flex rounded-2xl bg-amber-100 p-3.5">
                  <Sparkles className="h-6 w-6 text-amber-600" />
                </div>
                <h3 className="font-display-serif mb-2.5 text-xl font-black text-slate-900">Local insider tip</h3>
                <p className="text-sm leading-relaxed text-slate-600 sm:text-base">{route.localTip}</p>
              </div>
            </div>
          </div>

          {/* Why Triveni strip */}
          <div>
            <div className="mt-10 rounded-3xl border border-slate-200/70 bg-white p-7 shadow-[0_16px_50px_-30px_rgba(15,23,42,0.3)] sm:p-10">
              <h3 className="font-display-serif mb-8 text-center text-xl font-black text-slate-900 sm:text-2xl">
                Why 10,000+ travellers choose <span className={FOIL}>Triveni Cabs™</span>
              </h3>
              <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
                {[
                  { icon: Shield, title: 'Verified Drivers', desc: 'Background-checked pros' },
                  { icon: Car, title: 'Clean AC Fleet', desc: 'GPS-tracked vehicles' },
                  { icon: Award, title: 'Best Prices', desc: 'No surge, no hidden costs' },
                  { icon: Phone, title: '24/7 Support', desc: 'Call or WhatsApp anytime' },
                ].map((f, i) => (
                  <div key={i} className="group text-center">
                    <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full border border-amber-200 bg-gradient-to-br from-amber-50 to-white shadow-sm transition-transform group-hover:scale-105">
                      <f.icon className="h-6 w-6 text-amber-600" />
                    </div>
                    <h4 className="text-xs font-bold text-slate-900 sm:text-sm">{f.title}</h4>
                    <p className="mt-0.5 text-[11px] text-slate-500">{f.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* 10 · QUICK ANSWER + FAQ (2-per-row md+) — slate band             */}
      {/* ================================================================ */}
      <section id="distance-faqs" className="bg-slate-50 px-4 py-16 text-slate-900 sm:px-6 md:py-24">
        <div className="mx-auto max-w-5xl">
          <div>
            <h2 className="font-display-serif text-center text-[1.7rem] font-black leading-tight tracking-tight text-slate-900 sm:text-4xl">
              {route.origin} to {route.destination} <span className="text-amber-800">FAQs</span>
            </h2>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
            {route.faqs.map((faq, index) => (
              // The question is an <h3> inside the <summary>, not bare text in it.
              // This family carried one question-shaped heading per page against
              // fourteen on the toll pages, which are the best-ranking family on
              // the site — and the whole difference was this element. The FAQs,
              // the wording and the accordion behaviour are unchanged; only the
              // question is promoted to a heading so it is read as one.
              <details key={index} className="rounded-2xl border border-slate-200 bg-white p-5">
                <summary className="cursor-pointer list-item focus-visible:outline focus-visible:outline-2 focus-visible:outline-amber-700">
                  <h3 className="inline text-base font-bold leading-relaxed text-slate-900">{faq.question}</h3>
                </summary>
                <p className={`mt-4 text-sm leading-relaxed text-slate-600 ${index === 0 ? 'speakable-faq-first' : ''}`}>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* 11 · PLAN YOUR TRIP — booking funnel + city hubs (white band)    */}
      {/* ================================================================ */}
      <section className="bg-white px-4 py-16 text-slate-900 sm:px-6 md:py-24">
        <div className="mx-auto max-w-5xl">
          <div>
            <SerifHeading
              eyebrow="Plan your trip"
              title={`Book ${route.origin} to ${route.destination} or`}
              highlight="explore the cities"
            />
          </div>
          <div className="mt-9 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {route.oneWaySlug && (
              <div className="sm:col-span-2 lg:col-span-3">
                <Link
                  href={bookingHref}
                  className="group flex flex-col items-start gap-4 rounded-2xl border border-amber-200 bg-gradient-to-r from-amber-50 via-[#FFF6DC] to-amber-50 p-5 transition-all hover:border-amber-300 hover:shadow-[0_16px_50px_-25px_rgba(180,130,10,0.5)] sm:flex-row sm:items-center sm:p-6"
                >
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-[#FACF2D] shadow-[0_8px_24px_-8px_rgba(250,207,45,0.6)]">
                    <Car className="h-5 w-5 text-slate-900" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="font-display-serif text-lg font-black text-slate-900">Book {route.origin} to {route.destination} cab — one-way from {route.cabFares.sedan}</p>
                    <p className="text-sm text-slate-500">{route.origin} to {route.destination} · pay only for the drop, not the return</p>
                  </div>
                  <span className={`${GOLD_BTN} px-6 py-3 text-sm`}>
                    Book one-way <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>
              </div>
            )}
            {route.originHub && (
              <div>
                <Link href={`/${hubSlug(route.originHub)}`} className="group flex items-center gap-4 rounded-xl border border-transparent bg-slate-50 p-4 transition-all hover:border-slate-200 hover:bg-white hover:shadow-lg">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-blue-50">
                    <MapPin className="h-4 w-4 text-blue-600" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-bold text-slate-900">{route.origin} taxi service</p>
                    <p className="text-xs text-slate-500">Local &amp; outstation cabs in {route.origin}</p>
                  </div>
                  <ArrowRight className="h-4 w-4 flex-shrink-0 text-slate-300 group-hover:text-blue-500" />
                </Link>
              </div>
            )}
            {route.destinationHub && (
              <div>
                <Link href={`/${hubSlug(route.destinationHub)}`} className="group flex items-center gap-4 rounded-xl border border-transparent bg-slate-50 p-4 transition-all hover:border-slate-200 hover:bg-white hover:shadow-lg">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-emerald-50">
                    <MapPin className="h-4 w-4 text-emerald-600" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-bold text-slate-900">{route.destination} taxi service</p>
                    <p className="text-xs text-slate-500">Sightseeing &amp; cabs in {route.destination}</p>
                  </div>
                  <ArrowRight className="h-4 w-4 flex-shrink-0 text-slate-300 group-hover:text-emerald-500" />
                </Link>
              </div>
            )}
            <div>
              <Link href="/distance" className="group flex items-center gap-4 rounded-xl border border-transparent bg-slate-50 p-4 transition-all hover:border-slate-200 hover:bg-white hover:shadow-lg">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-violet-50">
                  <Route className="h-4 w-4 text-violet-600" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-bold text-slate-900">All distance guides</p>
                  <p className="text-xs text-slate-500">Browse 100+ route distance &amp; fare guides</p>
                </div>
                <ArrowRight className="h-4 w-4 flex-shrink-0 text-slate-300 group-hover:text-violet-500" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* 12 · CORRIDOR CLUSTER — other ways to book this corridor         */}
      {/* ================================================================ */}
      {corridorLinks.length > 0 && (
        <section className="bg-gradient-to-b from-white via-amber-50/40 to-white px-4 py-14 text-slate-900 sm:px-6 md:py-20">
          <div className="mx-auto max-w-5xl">
            <CorridorLinks
              links={corridorLinks}
              fromLabel={route.origin}
              toLabel={route.destination}
              theme="light"
            />
          </div>
        </section>
      )}

      {/* ================================================================ */}
      {/* 13 · RELATED ROUTES — white band                                 */}
      {/* ================================================================ */}
      {relatedRoutes.length > 0 && (
        <section className="bg-white px-4 py-16 text-slate-900 sm:px-6 md:py-24">
          <div className="mx-auto max-w-6xl">
            <div>
              <SerifHeading
                eyebrow="Explore more"
                title="Related distance"
                highlight="guides"
              />
            </div>
            <div className="mt-9 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {relatedRoutes.map((r, i) => (
                <div key={i}>
                  <Link href={`/distance/${r.slug}`} className="group flex items-center gap-4 rounded-xl border border-transparent bg-slate-50 p-4 transition-all duration-300 hover:border-amber-200 hover:bg-white hover:shadow-lg">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-amber-400/15 transition-colors group-hover:bg-amber-400/25">
                      <Route className="h-4 w-4 text-amber-600" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="break-words text-sm font-bold text-slate-900">{r.origin} → {r.destination}</p>
                      <p className="text-xs text-slate-500">{r.distance.km} km · {r.duration}</p>
                    </div>
                    <ArrowRight className="h-4 w-4 flex-shrink-0 text-slate-300 transition-colors group-hover:text-amber-500" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <div id="distance-enquiry" className="scroll-mt-24">
        <LeadQuoteSection fromCity={route.origin} toCity={route.destination} pageType="route" />
      </div>
      <CTASection
        heading={`Book ${route.origin} to ${route.destination} Cab`}
        subheading={`${route.distance.km} km · From ${route.cabFares.sedan} · AC vehicles, verified drivers, 24/7 support`}
      />
      <SetStickyCta
        price={route.cabFares.sedan}
        label={`${route.origin} to ${route.destination} cab`}
        whatsappText={whatsappMsg}
      />
    </div>
  );
}
