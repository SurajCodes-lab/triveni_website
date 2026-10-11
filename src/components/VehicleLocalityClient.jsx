'use client';

// VehicleLocalityClient — the NCR locality / airport landing template.
//
// Deliberately NOT VehicleCityClient. That component is built around an
// outstation origin: its spine is a route matrix out of the city. A locality
// page answers a different question — "can you get a vehicle to my gate, and
// how long is the airport run from here" — so this template is built around
// pickup areas, connectivity and local use cases instead.
//
// Two constraints shaped the implementation:
//
//   1. The hero must be server-rendered visible. An earlier template on this
//      site wrapped its priority hero image in a motion.div starting at
//      opacity 0, which meant the LCP element was invisible until hydration
//      finished and mobile LCP ran to about eleven seconds. Here the hero photo
//      and headline are plain SSR markup with no entrance animation at all.
//
//   2. Everything that moves, moves in CSS. No framer-motion is imported —
//      the hover blooms, card lifts and accordion transitions are all CSS
//      transitions, which keeps this template off the ~53KB motion bundle and
//      keeps interaction latency down. No infinite keyframe animations.
//
// The page is image-led throughout: every fare row carries a vehicle
// thumbnail, every use case and getaway is a photograph, and the editorial
// gallery sits between the fare content and the FAQ. All image paths are
// verified against /public/images at build time by the dataset.

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  MapPin, Users, Clock, Star, Shield, Phone, Car, CheckCircle2, ArrowRight,
  Navigation, Plane, Building2, Heart, Briefcase, GraduationCap, Landmark,
  Camera, TrainFront, Bus, Milestone, Hotel, ChevronDown, Snowflake, Luggage,
  IndianRupee, BadgeCheck, Headphones, Route, Sparkles,
} from '@/components/ui/icons';
import { WhatsAppIcon } from '@/components/ui/icons';
import { trackWhatsAppClick, trackPhoneCall } from '@/utilis/analytics';
import { SetStickyCta } from '@/components/ui/StickyCtaContext';
import QuickEnquiryForm from '@/components/ui/QuickEnquiryForm';
import { groupDigits } from '@/utilis/pricing';

const PHONE = '+917668570551';
const wa = (text) => `https://wa.me/917668570551?text=${encodeURIComponent(text)}`;

// Icon names arrive from the dataset as strings, so every icon referenced by
// ncrLocalityData must appear here. A missing entry falls back to Car rather
// than throwing at prerender — an earlier version of the sibling route client
// crashed the build with "Heart is not defined" for exactly this reason.
const ICONS = {
  MapPin, Users, Clock, Star, Shield, Car, Navigation, Plane, Building2,
  Heart, Briefcase, GraduationCap, Landmark, Camera, TrainFront, Bus,
  Milestone, Hotel, Snowflake, Luggage, Route, Sparkles,
};
const Icon = ({ name, className }) => {
  const C = ICONS[name] || Car;
  return <C className={className} />;
};

export default function VehicleLocalityClient({ data }) {
  const [openFaq, setOpenFaq] = useState(0);

  const {
    vehicle: v,
    place,
    fleet = [],
    faqs = [],
    nearby = [],
    parentLink = null,
    childLinks = [],
    originRoutes = [],
    hubHref = '/tempo-traveller',
  } = data;

  const accent = place.accent || '#2563EB';
  const heroWa = `Hi, I want to book a ${v.type} in ${place.displayName}. Please share availability and fare.`;
  const isAirport = Boolean(place.isAirport);

  // One CSS custom property carries the per-locality accent to every rule
  // below, so the whole page recolours from a single dataset field.
  const styleVars = { '--accent': accent };

  return (
    <div style={styleVars} className="bg-white text-slate-900">
      <SetStickyCta
        price={`From ₹${groupDigits(v.lowPrice)}/km`}
        label={`${v.heroLabel} · ${place.displayName}`}
        whatsappText={heroWa}
      />

      {/* ═══════════════════════════════════════════════════════════
          HERO — plain SSR markup. The photo is `priority` and is NOT
          wrapped in any opacity-0 animation, so it paints on the
          server response rather than waiting for hydration.
      ═══════════════════════════════════════════════════════════ */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image
            src={place.heroImage}
            alt={place.heroAlt}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/85 via-slate-900/75 to-slate-950/90" />
          <div
            className="absolute inset-0 opacity-40"
            style={{ background: `radial-gradient(ellipse at 20% 10%, ${accent}66, transparent 60%)` }}
          />
        </div>

        <div className="mx-auto max-w-6xl px-4 pt-28 pb-16 md:pt-36 md:pb-24">
          {/* Breadcrumb trail */}
          <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center gap-2 text-xs text-white/70">
            <Link href="/" className="transition-colors hover:text-white">Home</Link>
            <span aria-hidden="true">/</span>
            <Link href={hubHref} className="transition-colors hover:text-white">{v.heroLabel}</Link>
            {parentLink && (
              <>
                <span aria-hidden="true">/</span>
                <Link href={parentLink.href} className="transition-colors hover:text-white">{parentLink.name}</Link>
              </>
            )}
            <span aria-hidden="true">/</span>
            <span className="text-white">{place.displayName}</span>
          </nav>

          <span
            className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-white backdrop-blur"
            style={{ borderColor: `${accent}88`, background: `${accent}22` }}
          >
            <MapPin className="h-3.5 w-3.5" />
            {place.region} · {place.state}
          </span>

          <h1 className="speakable-headline mt-5 max-w-4xl text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl lg:text-[3.35rem]">
            {v.heroLabel} in {place.displayName}
          </h1>

          <p className="mt-3 text-base font-medium text-white/80 sm:text-lg">{place.tagline}</p>

          <p className="speakable-lead mt-5 max-w-3xl text-[15px] leading-relaxed text-white/85 sm:text-base">
            {place.intro}
          </p>

          {/* Fare + trust pills */}
          <div className="mt-7 flex flex-wrap items-center gap-2.5">
            <span
              className="inline-flex items-center gap-1.5 rounded-lg px-3.5 py-2 text-sm font-bold text-white shadow-lg"
              style={{ background: accent }}
            >
              <IndianRupee className="h-4 w-4" />
              From ₹{groupDigits(v.lowPrice)}/km
            </span>
            {[
              { icon: Users, label: v.capacity },
              { icon: Snowflake, label: 'Fully AC fleet' },
              { icon: BadgeCheck, label: 'Driver & fuel included' },
              { icon: Star, label: '4.9★ rated' },
            ].map((p) => (
              <span
                key={p.label}
                className="inline-flex items-center gap-1.5 rounded-lg border border-white/20 bg-white/10 px-3 py-2 text-xs font-semibold text-white backdrop-blur"
              >
                <p.icon className="h-3.5 w-3.5" />
                {p.label}
              </span>
            ))}
          </div>

          {/* Primary CTAs */}
          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={`tel:${PHONE}`}
              onClick={() => trackPhoneCall(`locality_${place.slug}_hero`)}
              className="inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-sm font-bold text-white shadow-xl transition-transform duration-200 hover:-translate-y-0.5"
              style={{ background: accent }}
            >
              <Phone className="h-4 w-4" />
              Call 7668570551
            </a>
            <a
              href={wa(heroWa)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick(`locality_${place.slug}_hero`, heroWa)}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/25 bg-white/10 px-6 py-3.5 text-sm font-bold text-white backdrop-blur transition-colors duration-200 hover:bg-white/20"
            >
              <WhatsAppIcon className="h-4 w-4" />
              WhatsApp for a quote
            </a>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          QUICK ANSWER — the direct-answer block search engines lift
      ═══════════════════════════════════════════════════════════ */}
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-8">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <p className="text-[11px] font-bold uppercase tracking-[0.16em]" style={{ color: accent }}>
              In short
            </p>
            <p className="mt-2 text-[15px] leading-relaxed text-slate-700 sm:text-base">
              A {v.type.toLowerCase()} in {place.displayName} costs{' '}
              <strong className="text-slate-900">₹{groupDigits(v.lowPrice)} to ₹{groupDigits(v.highPrice)} per kilometre</strong>{' '}
              depending on the seater, or <strong className="text-slate-900">{v.localRate}</strong> for a
              local day package covering {v.localKm}. Fuel and an experienced driver are included; tolls,
              parking and state permits are billed at actuals.{' '}
              {isAirport
                ? 'Flights are tracked from the actual arrival time and sixty minutes of free waiting is included.'
                : `Gate pickup anywhere in ${place.displayName} is standard at no extra charge.`}
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          WHY HERE — the locality-specific editorial paragraph
      ═══════════════════════════════════════════════════════════ */}
      <section className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-[1.15fr_1fr] md:items-center md:gap-12">
          <div>
            <SectionEyebrow accent={accent}>Local knowledge</SectionEyebrow>
            <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
              What makes {place.displayName} different
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-slate-600 sm:text-base">{place.whyLocal}</p>

            <dl className="mt-7 grid grid-cols-2 gap-4 sm:grid-cols-2">
              <Fact label="Nearest landmark" value={place.landmark} icon={Landmark} accent={accent} />
              <Fact label="District" value={place.district} icon={Building2} accent={accent} />
              <Fact label="Fleet range" value={v.capacity} icon={Users} accent={accent} />
              <Fact label="Local package" value={v.localKm} icon={Clock} accent={accent} />
            </dl>
          </div>

          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-xl ring-1 ring-slate-200">
            <Image
              src={place.gallery?.[0]?.img || place.heroImage}
              alt={place.gallery?.[0]?.title || place.heroAlt}
              fill
              sizes="(max-width: 768px) 100vw, 45vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          AIRPORT TERMINALS — only on the airport page
      ═══════════════════════════════════════════════════════════ */}
      {isAirport && Array.isArray(place.terminals) && (
        <section className="border-y border-slate-200 bg-slate-50">
          <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
            <SectionEyebrow accent={accent}>All three terminals</SectionEyebrow>
            <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
              Pickups at T1, T2 and T3
            </h2>
            <p className="mt-3 max-w-3xl text-[15px] leading-relaxed text-slate-600">
              Give us the flight number rather than the terminal when you book. Airlines move between
              Terminal 1 and Terminal 2 periodically, and the flight number lets us confirm the right
              one on the day instead of relying on what was true when the booking was made.
            </p>
            <div className="mt-7 grid gap-4 sm:grid-cols-3">
              {place.terminals.map((t) => (
                <Link
                  key={t.code}
                  href={t.href}
                  className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                  style={{ borderTopColor: accent, borderTopWidth: 3 }}
                >
                  <span className="text-2xl font-extrabold" style={{ color: accent }}>{t.code}</span>
                  <p className="mt-1 font-bold text-slate-900">{t.name}</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{t.note}</p>
                  <span className="mt-3 inline-flex items-center gap-1 text-xs font-bold" style={{ color: accent }}>
                    Terminal details
                    <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ═══════════════════════════════════════════════════════════
          FARE TABLE — real <table> on desktop (Google parses these for
          fare data) with a vehicle thumbnail inside each row, plus a
          card layout on mobile. Same data, not duplicated content.
      ═══════════════════════════════════════════════════════════ */}
      <section className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <SectionEyebrow accent={accent}>Transparent pricing</SectionEyebrow>
        <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
          {v.heroLabel} fares in {place.displayName}
        </h2>
        <p className="mt-3 max-w-3xl text-[15px] leading-relaxed text-slate-600">
          Rates below are the published per-kilometre outstation fare and the local day package for each
          seater. Every fare includes fuel and a professional driver. Tolls, parking, and state permits are
          charged at actuals and appear as separate lines on the invoice — there is no surge pricing and no
          hidden component.
        </p>

        {/* Desktop: semantic table with thumbnails */}
        <div className="mt-7 hidden sm:overflow-x-auto rounded-2xl border border-slate-200 shadow-sm md:block">
          <table className="w-full sm:min-w-[640px] border-collapse bg-white text-left text-sm rt-stack">
            <caption className="sr-only">
              {v.type} per-kilometre and day-package fares in {place.displayName}
            </caption>
            <thead>
              <tr style={{ background: `${accent}12` }}>
                <th scope="col" className="px-5 py-3.5 font-bold text-slate-900">Vehicle</th>
                <th scope="col" className="px-5 py-3.5 font-bold text-slate-900">Seats</th>
                <th scope="col" className="px-5 py-3.5 font-bold text-slate-900">Luggage</th>
                <th scope="col" className="px-5 py-3.5 font-bold text-slate-900">Outstation</th>
                <th scope="col" className="px-5 py-3.5 font-bold text-slate-900">Local (8hr/80km)</th>
              </tr>
            </thead>
            <tbody>
              {fleet.map((f) => (
                <tr key={f.id} className="border-t border-slate-100 transition-colors duration-200 hover:bg-slate-50">
                  <th scope="row" className="px-5 py-3.5 font-semibold text-slate-900">
                    <span className="flex items-center gap-3">
                      <span className="relative h-12 w-16 shrink-0 overflow-hidden rounded-lg ring-1 ring-slate-200">
                        <Image src={f.image} alt={f.name} fill sizes="64px" className="object-cover" />
                      </span>
                      <span>
                        {f.name}
                        {f.popular && (
                          <span
                            className="ml-2 rounded px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white"
                            style={{ background: accent }}
                          >
                            Popular
                          </span>
                        )}
                      </span>
                    </span>
                  </th>
                  <td className="px-5 py-3.5 text-slate-600">{f.capacity}</td>
                  <td className="px-5 py-3.5 text-slate-600">{f.luggage || '—'}</td>
                  <td className="px-5 py-3.5 font-bold" style={{ color: accent }}>{f.outstationRate}</td>
                  <td className="px-5 py-3.5 text-slate-700">{f.localRate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile: the same rows as photo cards */}
        <div className="mt-6 grid gap-4 md:hidden">
          {fleet.map((f) => (
            <div key={f.id} className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
              <div className="relative aspect-[16/9]">
                <Image src={f.image} alt={f.name} fill sizes="100vw" className="object-cover" />
                {f.popular && (
                  <span
                    className="absolute left-3 top-3 rounded px-2 py-1 text-[10px] font-bold uppercase tracking-wide text-white"
                    style={{ background: accent }}
                  >
                    Most booked
                  </span>
                )}
              </div>
              <div className="p-4">
                <p className="font-bold text-slate-900">{f.name}</p>
                <p className="mt-0.5 text-xs text-slate-500">{f.capacity} · {f.luggage || 'luggage on request'}</p>
                <div className="mt-3 flex items-center justify-between border-t border-slate-100 pt-3">
                  <span className="text-lg font-extrabold" style={{ color: accent }}>{f.outstationRate}</span>
                  <span className="text-xs font-semibold text-slate-600">{f.localRate}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          CONNECTIVITY — the question every locality visitor actually
          has: how long is the airport / station run from here
      ═══════════════════════════════════════════════════════════ */}
      <section className="border-y border-slate-200 bg-slate-900 text-white">
        <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
          <SectionEyebrow accent={accent} onDark>Distances & drive times</SectionEyebrow>
          <h2 className="mt-2 text-2xl font-extrabold tracking-tight sm:text-3xl">
            Getting out of {place.displayName}
          </h2>
          <p className="mt-3 max-w-3xl text-[15px] leading-relaxed text-white/70">
            Drive times are realistic door-to-door estimates in normal traffic, not best-case figures. NCR
            peak hours change them substantially, so for an early flight we will usually suggest a pickup
            that feels an hour too early — that hour is what separates arriving relaxed from arriving at a
            closed check-in desk.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {place.connectivity.map((c) => (
              <div
                key={c.label}
                className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur transition-colors duration-300 hover:border-white/25 hover:bg-white/10"
              >
                <span
                  className="inline-flex h-10 w-10 items-center justify-center rounded-xl"
                  style={{ background: `${accent}33`, color: '#fff' }}
                >
                  <Icon name={c.iconName} className="h-5 w-5" />
                </span>
                <p className="mt-3 text-sm font-bold">{c.label}</p>
                <div className="mt-2 flex items-baseline gap-2">
                  <span className="text-2xl font-extrabold" style={{ color: accent }}>{c.distance}</span>
                  <span className="text-xs font-medium text-white/60">{c.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          PICKUP AREAS — the hyperlocal signal. This is the section
          that makes a locality page genuinely different from the
          city page above it.
      ═══════════════════════════════════════════════════════════ */}
      <section className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <SectionEyebrow accent={accent}>Door-to-door coverage</SectionEyebrow>
        <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
          Where we pick up in {place.displayName}
        </h2>
        <p className="mt-3 max-w-3xl text-[15px] leading-relaxed text-slate-600">
          Gate pickup is standard everywhere on this list and there is no additional charge for it. Give the
          driver the specific block, sector or society name — that is genuinely all that is needed, and it
          saves the phone call that otherwise happens five minutes before departure.
        </p>

        <div className="mt-7 flex flex-wrap gap-2">
          {place.pickupAreas.map((a) => (
            <span
              key={a}
              className="rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-[13px] font-medium text-slate-700 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow"
              style={{ borderLeftColor: accent, borderLeftWidth: 3 }}
            >
              {a}
            </span>
          ))}
        </div>

        {/* Landmarks */}
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {place.landmarks.map((l) => (
            <div key={l.name} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <p className="flex items-center gap-2 text-sm font-bold text-slate-900">
                <MapPin className="h-4 w-4 shrink-0" style={{ color: accent }} />
                {l.name}
              </p>
              <p className="mt-1 pl-6 text-[13px] leading-relaxed text-slate-600">{l.note}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          USE CASES — photographic cards
      ═══════════════════════════════════════════════════════════ */}
      <section className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
          <SectionEyebrow accent={accent}>What groups book us for</SectionEyebrow>
          <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
            {v.heroLabel} hire in {place.displayName}, by occasion
          </h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {place.useCases.map((u) => (
              <article
                key={u.title}
                className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={u.img}
                    alt={u.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                  <span
                    className="absolute left-3 top-3 inline-flex h-9 w-9 items-center justify-center rounded-lg text-white shadow-lg backdrop-blur"
                    style={{ background: `${accent}dd` }}
                  >
                    <Icon name={u.iconName} className="h-4.5 w-4.5" />
                  </span>
                  <h3 className="absolute bottom-3 left-4 right-4 text-base font-bold text-white">{u.title}</h3>
                </div>
                <p className="p-4 text-[13.5px] leading-relaxed text-slate-600">{u.blurb}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          GETAWAYS — image cards linking to real generated route pages
      ═══════════════════════════════════════════════════════════ */}
      <section className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <SectionEyebrow accent={accent}>Popular trips</SectionEyebrow>
        <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
          Where groups go from {place.displayName}
        </h2>
        <p className="mt-3 max-w-3xl text-[15px] leading-relaxed text-slate-600">
          The same vehicle and driver stay with you for the whole trip, including local sightseeing once you
          arrive. On a hill station that is worth more than it sounds — arranging transport locally in Manali
          or Shimla at short notice is both expensive and unreliable.
        </p>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {place.getaways.map((g) => (
            <Link
              key={g.name}
              href={`${hubHref}/delhi-to-${g.dest}`}
              className="group relative block aspect-[4/3] overflow-hidden rounded-2xl shadow-md ring-1 ring-slate-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              <Image
                src={g.img}
                alt={`${v.type} to ${g.name}`}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/25 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-4">
                <h3 className="text-lg font-bold text-white">{g.name}</h3>
                <p className="mt-0.5 text-xs font-medium text-white/75">{g.km} · {g.hours}</p>
                <span
                  className="mt-2 inline-flex items-center gap-1 text-xs font-bold text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                >
                  View fares
                  <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          EDITORIAL GALLERY
      ═══════════════════════════════════════════════════════════ */}
      {Array.isArray(place.gallery) && place.gallery.length > 0 && (
        <section className="border-y border-slate-200 bg-slate-900 text-white">
          <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
            <SectionEyebrow accent={accent} onDark>The fleet, in context</SectionEyebrow>
            <h2 className="mt-2 text-2xl font-extrabold tracking-tight sm:text-3xl">
              What you are actually booking
            </h2>
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {place.gallery.map((g) => (
                <figure key={g.title} className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={g.img}
                      alt={g.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <figcaption className="p-4">
                    <p className="text-sm font-bold" style={{ color: accent }}>{g.title}</p>
                    <p className="mt-1 text-[13px] leading-relaxed text-white/70">{g.caption}</p>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ═══════════════════════════════════════════════════════════
          TRUST STRIP
      ═══════════════════════════════════════════════════════════ */}
      <section className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: BadgeCheck, title: 'All-inclusive fares', body: 'Fuel and driver in the quoted rate. Tolls and parking at actuals, itemised on the invoice.' },
            { icon: Shield, title: 'Verified drivers', body: 'Commercially licensed, police-verified, and familiar with the route before they are assigned to it.' },
            { icon: Headphones, title: '24/7 support', body: 'A real person on the phone during the trip, not a ticket queue — which matters at 2am on a hill road.' },
            { icon: Snowflake, title: 'Sanitised, fully AC', body: 'Deep-cleaned before every trip, with fresh linens for overnight journeys on request.' },
          ].map((t) => (
            <div key={t.title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-shadow duration-300 hover:shadow-md">
              <span
                className="inline-flex h-11 w-11 items-center justify-center rounded-xl"
                style={{ background: `${accent}18`, color: accent }}
              >
                <t.icon className="h-5 w-5" />
              </span>
              <p className="mt-3 font-bold text-slate-900">{t.title}</p>
              <p className="mt-1.5 text-[13.5px] leading-relaxed text-slate-600">{t.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          HUB ↔ SPOKE LINKS — states plainly which page is the parent
      ═══════════════════════════════════════════════════════════ */}
      {(childLinks.length > 0 || parentLink) && (
        <section className="border-y border-slate-200 bg-slate-50">
          <div className="mx-auto max-w-6xl px-4 py-10">
            {childLinks.length > 0 && (
              <>
                <SectionEyebrow accent={accent}>Within {place.displayName}</SectionEyebrow>
                <h2 className="mt-2 text-xl font-extrabold tracking-tight text-slate-900 sm:text-2xl">
                  Area-specific pages
                </h2>
                <p className="mt-2 max-w-3xl text-sm leading-relaxed text-slate-600">
                  These localities sit inside {place.displayName} district but the journey times from each are
                  genuinely different, so each has its own page with its own pickup points and drive times.
                </p>
                <div className="mt-5 flex flex-wrap gap-2.5">
                  {childLinks.map((c) => (
                    <Link
                      key={c.href}
                      href={c.href}
                      className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3.5 py-2 text-sm font-semibold text-slate-700 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow"
                      style={{ borderLeftColor: accent, borderLeftWidth: 3 }}
                    >
                      {c.name}
                      <ArrowRight className="h-3.5 w-3.5" style={{ color: accent }} />
                    </Link>
                  ))}
                </div>
              </>
            )}
            {parentLink && (
              <p className="mt-2 text-sm text-slate-600">
                {place.displayName} is part of {parentLink.name} district — see the{' '}
                <Link href={parentLink.href} className="font-bold underline" style={{ color: accent }}>
                  {v.heroLabel} in {parentLink.name}
                </Link>{' '}
                page for district-wide coverage.
              </p>
            )}
          </div>
        </section>
      )}

      {/* Week 48: the origin's own outstation route pages (strategy action 7).
          Every href here is confirmed by the build manifest on the server. */}
      {originRoutes.length > 0 && (
        <section className="bg-white">
          <div className="mx-auto max-w-6xl px-4 py-10">
            <SectionEyebrow accent={accent}>Outstation from {place.displayName}</SectionEyebrow>
            <h2 className="mt-2 text-xl font-extrabold tracking-tight text-slate-900 sm:text-2xl">
              {v.type} routes that start in {place.displayName}
            </h2>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-slate-600">
              Each route has its own page with the distance, the drive time, the fare for this vehicle and where the
              pickup happens in {place.displayName}. The coach starts from {place.displayName}, not from Delhi.
            </p>
            <div className="mt-5 flex flex-wrap gap-2.5">
              {originRoutes.map((r) => (
                <Link
                  key={r.href}
                  href={r.href}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3.5 py-2 text-sm font-semibold text-slate-700 shadow-sm transition-all duration-200 hover:border-slate-300 hover:shadow"
                  style={{ borderLeftColor: accent, borderLeftWidth: 3 }}
                >
                  {place.displayName} to {r.name}
                  <ArrowRight className="h-3.5 w-3.5" style={{ color: accent }} />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ═══════════════════════════════════════════════════════════
          FAQ — CSS-only accordion
      ═══════════════════════════════════════════════════════════ */}
      <section className="mx-auto max-w-4xl px-4 py-12 md:py-16">
        <SectionEyebrow accent={accent}>Questions we get asked</SectionEyebrow>
        <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
          {v.heroLabel} in {place.displayName} — FAQs
        </h2>
        <div className="mt-7 space-y-3">
          {faqs.map((f, i) => (
            <div
              key={f.question}
              className={`overflow-hidden rounded-xl border bg-white transition-colors duration-200 ${
                openFaq === i ? 'border-slate-300 shadow-md' : 'border-slate-200'
              }`}
            >
              <h3 className="m-0">
              <button
                type="button"
                onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                aria-expanded={openFaq === i}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
              >
                <span className={`text-[15px] font-bold text-slate-900 ${i === 0 ? 'speakable-faq-first' : ''}`}>
                  {f.question}
                </span>
                <ChevronDown
                  className={`h-5 w-5 shrink-0 transition-transform duration-300 ${openFaq === i ? 'rotate-180' : ''}`}
                  style={{ color: accent }}
                />
              </button>
              </h3>
              {openFaq === i && (
                <p className="border-t border-slate-100 px-5 py-4 text-[14.5px] leading-relaxed text-slate-600">
                  {f.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          NEARBY LOCALITIES — image cards
      ═══════════════════════════════════════════════════════════ */}
      {nearby.length > 0 && (
        <section className="border-t border-slate-200 bg-slate-50">
          <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
            <SectionEyebrow accent={accent}>Nearby</SectionEyebrow>
            <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
              Other NCR pickup areas
            </h2>
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {nearby.map((n) => (
                <Link
                  key={n.href}
                  href={n.href}
                  className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={n.img}
                      alt={`${v.type} in ${n.name}`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 to-transparent" />
                    <h3 className="absolute bottom-3 left-4 right-4 text-base font-bold text-white">
                      {v.heroLabel} in {n.name}
                    </h3>
                  </div>
                  <p className="p-4 text-[13px] leading-relaxed text-slate-600">{n.tagline}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ═══════════════════════════════════════════════════════════
          CLOSING CTA + enquiry form
      ═══════════════════════════════════════════════════════════ */}
      <section className="relative isolate overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0 -z-10 opacity-25">
          <Image src={place.heroImage} alt="" fill sizes="100vw" className="object-cover" />
        </div>
        <div
          className="absolute inset-0 -z-10"
          style={{ background: `linear-gradient(120deg, ${accent}55, transparent 65%)` }}
        />
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-[1.1fr_1fr] md:py-20">
          <div>
            <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl md:text-4xl">
              Book a {v.heroLabel.toLowerCase()} in {place.displayName}
            </h2>
            <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-white/75">
              Tell us the date, the pickup point and how many are travelling. You get a written quote with
              the fare broken down, and a small advance confirms the vehicle — the balance is payable when
              the trip is done.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a
                href={`tel:${PHONE}`}
                onClick={() => trackPhoneCall(`locality_${place.slug}_footer`)}
                className="inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-sm font-bold text-white shadow-xl transition-transform duration-200 hover:-translate-y-0.5"
                style={{ background: accent }}
              >
                <Phone className="h-4 w-4" />
                Call 7668570551
              </a>
              <a
                href={wa(heroWa)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppClick(`locality_${place.slug}_footer`, heroWa)}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/25 bg-white/10 px-6 py-3.5 text-sm font-bold backdrop-blur transition-colors duration-200 hover:bg-white/20"
              >
                <WhatsAppIcon className="h-4 w-4" />
                WhatsApp
              </a>
            </div>
            <ul className="mt-8 space-y-2.5">
              {[
                'Gate pickup anywhere in ' + place.displayName,
                'Written quote before you commit',
                'Same driver for the whole trip',
                'GST invoice for corporate bookings',
              ].map((li) => (
                <li key={li} className="flex items-start gap-2.5 text-sm text-white/80">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" style={{ color: accent }} />
                  {li}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl bg-slate-900/85 p-1 shadow-2xl ring-1 ring-white/10 backdrop-blur">
            <QuickEnquiryForm fromCity={place.displayName} pageType="locality" />
          </div>
        </div>
      </section>
    </div>
  );
}

/* ── small presentational helpers ─────────────────────────────── */

function SectionEyebrow({ children, accent, onDark = false }) {
  return (
    <p
      className={`text-[11px] font-bold uppercase tracking-[0.18em] ${onDark ? '' : ''}`}
      style={{ color: onDark ? accent : accent }}
    >
      {children}
    </p>
  );
}

function Fact({ label, value, icon: I, accent }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-slate-50 p-3.5">
      <dt className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wide text-slate-500">
        <I className="h-3.5 w-3.5" style={{ color: accent }} />
        {label}
      </dt>
      <dd className="mt-1 text-sm font-bold text-slate-900">{value}</dd>
    </div>
  );
}
