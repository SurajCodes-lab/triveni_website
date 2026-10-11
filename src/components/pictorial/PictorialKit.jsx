'use client';

// PictorialKit — the shared design language for the uplifted vehicle pages.
//
// Three templates now render from this kit: the NCR locality pages, the vehicle
// city pages and the vehicle route pages. Keeping the primitives here is what
// stops the site drifting back into the three-different-designs state it was in
// (TempoCityClient, VehicleCityClient and VehicleLocalityClient all looked
// different from each other on pages a visitor would move between in one session).
//
// Two rules every primitive here respects, both learned the hard way on this site:
//
//   1. The hero photo is `priority` and is never wrapped in an entrance
//      animation that starts at opacity 0. Doing that once made the LCP element
//      invisible until hydration finished and pushed mobile LCP to ~11s.
//
//   2. Everything that moves, moves in CSS. No framer-motion is imported by any
//      file in this folder, which keeps these pages off the ~53KB motion bundle.
//      No infinite keyframes either — they cost interaction latency for decoration.

import Link from 'next/link';
import Image from 'next/image';
import {
  MapPin, Users, Clock, Star, Shield, Phone, Car, CheckCircle2, ArrowRight,
  Navigation, Plane, Building2, Heart, Briefcase, GraduationCap, Landmark,
  Camera, TrainFront, Bus, Milestone, Hotel, ChevronDown, Snowflake, Luggage,
  IndianRupee, BadgeCheck, Headphones, Route, Sparkles, Mountain, Compass,
  Crown, Gem, Gauge, Receipt, ShieldCheck,
} from '@/components/ui/icons';
import { WhatsAppIcon } from '@/components/ui/icons';
import { trackWhatsAppClick, trackPhoneCall } from '@/utilis/analytics';
import { groupDigits } from '@/utilis/pricing';

export const PHONE = '+917668570551';
export const wa = (text) => `https://wa.me/917668570551?text=${encodeURIComponent(text)}`;

// Icon names arrive from data as strings. Anything referenced by the datasets
// must be listed here — a missing entry falls back to Car rather than throwing
// at prerender, which is how a sibling client once failed the whole build.
const ICONS = {
  MapPin, Users, Clock, Star, Shield, Car, Navigation, Plane, Building2,
  Heart, Briefcase, GraduationCap, Landmark, Camera, TrainFront, Bus,
  Milestone, Hotel, Snowflake, Luggage, Route, Sparkles, Mountain, Compass,
  Crown, Gem, Gauge, Receipt, ShieldCheck, BadgeCheck, Headphones,
};
export const Icon = ({ name, className }) => {
  const C = ICONS[name] || Car;
  return <C className={className} />;
};

/* ── Per-vehicle accent ──────────────────────────────────────────────
   The three vehicle types keep distinct identities inside one shared
   layout: tempo reads as the workhorse, Urbania as executive, Maharaja
   as the premium option. Same structure, different temperature. */
export const VEHICLE_ACCENT = {
  'tempo-traveller': { accent: '#E07A1F', tint: 'amber', label: 'Group travel' },
  'force-urbania': { accent: '#2563EB', tint: 'blue', label: 'Executive travel' },
  'maharaja-tempo-traveller': { accent: '#9F1239', tint: 'rose', label: 'Luxury travel' },
};
export const accentFor = (slug) => (VEHICLE_ACCENT[slug] || VEHICLE_ACCENT['tempo-traveller']).accent;

/* ── Hero ────────────────────────────────────────────────────────────
   Plain SSR markup. The photo paints from the server response. */
export function PictorialHero({
  image, alt, accent, crumbs = [], badge, badgeIcon = 'MapPin',
  h1, tagline, lead, pills = [], waText, trackKey, children,
}) {
  return (
    <section className="relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <Image src={image} alt={alt} fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/85 via-slate-900/75 to-slate-950/92" />
        <div
          className="absolute inset-0 opacity-40"
          style={{ background: `radial-gradient(ellipse at 18% 12%, ${accent}66, transparent 62%)` }}
        />
      </div>

      <div className="mx-auto max-w-6xl px-4 pt-28 pb-16 md:pt-36 md:pb-24">
        {crumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center gap-2 text-xs text-white/70">
            {crumbs.map((c, i) => (
              <span key={c.href || c.name} className="flex items-center gap-2">
                {i > 0 && <span aria-hidden="true">/</span>}
                {c.href ? (
                  <Link href={c.href} className="transition-colors hover:text-white">{c.name}</Link>
                ) : (
                  <span className="text-white">{c.name}</span>
                )}
              </span>
            ))}
          </nav>
        )}

        {badge && (
          <span
            className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-white backdrop-blur"
            style={{ borderColor: `${accent}88`, background: `${accent}22` }}
          >
            <Icon name={badgeIcon} className="h-3.5 w-3.5" />
            {badge}
          </span>
        )}

        <h1 className="speakable-headline mt-5 max-w-4xl text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl lg:text-[3.35rem]">
          {h1}
        </h1>
        {tagline && <p className="mt-3 text-base font-medium text-white/80 sm:text-lg">{tagline}</p>}
        {lead && <p className="speakable-lead mt-5 max-w-3xl text-[15px] leading-relaxed text-white/85 sm:text-base">{lead}</p>}

        {pills.length > 0 && (
          <div className="mt-7 flex flex-wrap items-center gap-2.5">
            {pills.map((p, i) => (
              <span
                key={p.label}
                className={
                  i === 0
                    ? 'inline-flex items-center gap-1.5 rounded-lg px-3.5 py-2 text-sm font-bold text-white shadow-lg'
                    : 'inline-flex items-center gap-1.5 rounded-lg border border-white/20 bg-white/10 px-3 py-2 text-xs font-semibold text-white backdrop-blur'
                }
                style={i === 0 ? { background: accent } : undefined}
              >
                <Icon name={p.iconName || 'Star'} className={i === 0 ? 'h-4 w-4' : 'h-3.5 w-3.5'} />
                {p.label}
              </span>
            ))}
          </div>
        )}

        <CtaPair accent={accent} waText={waText} trackKey={`${trackKey}_hero`} />
        {children}
      </div>
    </section>
  );
}

export function CtaPair({ accent, waText, trackKey, className = '' }) {
  return (
    <div className={`mt-7 flex flex-col gap-3 sm:flex-row sm:items-center ${className}`}>
      <a
        href={`tel:${PHONE}`}
        onClick={() => trackPhoneCall(trackKey)}
        className="inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-sm font-bold text-white shadow-xl transition-transform duration-200 hover:-translate-y-0.5"
        style={{ background: accent }}
      >
        <Phone className="h-4 w-4" />
        Call 7668570551
      </a>
      <a
        href={wa(waText)}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackWhatsAppClick(trackKey, waText)}
        className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/25 bg-white/10 px-6 py-3.5 text-sm font-bold text-white backdrop-blur transition-colors duration-200 hover:bg-white/20"
      >
        <WhatsAppIcon className="h-4 w-4" />
        WhatsApp for a quote
      </a>
    </div>
  );
}

export function Eyebrow({ children, accent }) {
  return (
    <p className="text-[11px] font-bold uppercase tracking-[0.18em]" style={{ color: accent }}>
      {children}
    </p>
  );
}

export function SectionHead({ eyebrow, title, sub, accent, onDark = false }) {
  return (
    <>
      <Eyebrow accent={accent}>{eyebrow}</Eyebrow>
      <h2 className={`mt-2 text-2xl font-extrabold tracking-tight sm:text-3xl ${onDark ? 'text-white' : 'text-slate-900'}`}>
        {title}
      </h2>
      {sub && (
        <p className={`mt-3 max-w-3xl text-[15px] leading-relaxed ${onDark ? 'text-white/70' : 'text-slate-600'}`}>
          {sub}
        </p>
      )}
    </>
  );
}

/* ── Direct-answer block (the paragraph search engines lift) ── */
export function QuickAnswer({ accent, children }) {
  return (
    <section className="border-b border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-8">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
          <Eyebrow accent={accent}>In short</Eyebrow>
          <p className="mt-2 text-[15px] leading-relaxed text-slate-700 sm:text-base">{children}</p>
        </div>
      </div>
    </section>
  );
}

/* ── Fare table: real <table> on desktop with a photo in each row, the
      same rows as cards on mobile. Google parses the table for fares. ── */
export function FareTable({ fleet = [], accent, title, sub, eyebrow = 'Transparent pricing' }) {
  if (!fleet.length) return null;
  return (
    <section className="mx-auto max-w-6xl px-4 py-12 md:py-16">
      <SectionHead eyebrow={eyebrow} title={title} sub={sub} accent={accent} />

      <div className="mt-7 hidden sm:overflow-x-auto rounded-2xl border border-slate-200 shadow-sm md:block">
        <table className="w-full sm:min-w-[640px] border-collapse bg-white text-left text-sm rt-stack">
          <caption className="sr-only">{title}</caption>
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
              <tr key={f.id || f.name} className="border-t border-slate-100 transition-colors duration-200 hover:bg-slate-50">
                <th scope="row" className="px-5 py-3.5 font-semibold text-slate-900">
                  <span className="flex items-center gap-3">
                    <span className="relative h-12 w-16 shrink-0 overflow-hidden rounded-lg ring-1 ring-slate-200">
                      <Image src={f.image} alt={f.name} fill sizes="64px" className="object-cover" />
                    </span>
                    <span>
                      {f.name}
                      {f.popular && (
                        <span className="ml-2 rounded px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white" style={{ background: accent }}>
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

      <div className="mt-6 grid gap-4 md:hidden">
        {fleet.map((f) => (
          <div key={f.id || f.name} className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="relative aspect-[16/9]">
              <Image src={f.image} alt={f.name} fill sizes="100vw" className="object-cover" />
              {f.popular && (
                <span className="absolute left-3 top-3 rounded px-2 py-1 text-[10px] font-bold uppercase tracking-wide text-white" style={{ background: accent }}>
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
  );
}

/* ── Photo card grid (destinations, routes, use cases, related links) ── */
export function PhotoCards({ items = [], accent, cols = 3 }) {
  if (!items.length) return null;
  const grid = cols === 4
    ? 'sm:grid-cols-2 lg:grid-cols-4'
    : cols === 2 ? 'sm:grid-cols-2' : 'sm:grid-cols-2 lg:grid-cols-3';
  return (
    <div className={`mt-8 grid gap-5 ${grid}`}>
      {items.map((it) => {
        const inner = (
          <>
            <div className="relative aspect-[16/10] overflow-hidden">
              <Image
                src={it.img}
                alt={it.alt || it.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/15 to-transparent" />
              {it.iconName && (
                <span
                  className="absolute left-3 top-3 inline-flex h-9 w-9 items-center justify-center rounded-lg text-white shadow-lg backdrop-blur"
                  style={{ background: `${accent}dd` }}
                >
                  <Icon name={it.iconName} className="h-4 w-4" />
                </span>
              )}
              <div className="absolute inset-x-0 bottom-0 p-4">
                <h3 className="text-[15px] font-bold text-white">{it.title}</h3>
                {it.meta && <p className="mt-0.5 text-xs font-medium text-white/75">{it.meta}</p>}
              </div>
            </div>
            {it.body && <p className="p-4 text-[13.5px] leading-relaxed text-slate-600">{it.body}</p>}
          </>
        );
        const cls = 'group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl';
        return it.href
          ? <Link key={it.title} href={it.href} className={cls}>{inner}</Link>
          : <article key={it.title} className={cls}>{inner}</article>;
      })}
    </div>
  );
}

/* ── Stat / distance grid on a dark band ── */
export function StatBand({ eyebrow, title, sub, items = [], accent }) {
  if (!items.length) return null;
  return (
    <section className="border-y border-slate-200 bg-slate-900 text-white">
      <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <SectionHead eyebrow={eyebrow} title={title} sub={sub} accent={accent} onDark />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((c) => (
            <div
              key={c.label}
              className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur transition-colors duration-300 hover:border-white/25 hover:bg-white/10"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl text-white" style={{ background: `${accent}33` }}>
                <Icon name={c.iconName} className="h-5 w-5" />
              </span>
              <p className="mt-3 text-sm font-bold">{c.label}</p>
              <div className="mt-2 flex items-baseline gap-2">
                <span className="text-2xl font-extrabold" style={{ color: accent }}>{c.value}</span>
                {c.sub && <span className="text-xs font-medium text-white/60">{c.sub}</span>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Trust strip ── */
export function TrustStrip({ accent, items }) {
  const list = items || [
    { iconName: 'BadgeCheck', title: 'All-inclusive fares', body: 'Fuel and driver in the quoted rate. Tolls and parking at actuals, itemised on the invoice.' },
    { iconName: 'Shield', title: 'Verified drivers', body: 'Commercially licensed, police-verified, and familiar with the route before being assigned to it.' },
    { iconName: 'Headphones', title: '24/7 support', body: 'A real person on the phone during the trip — which matters at 2am on a hill road.' },
    { iconName: 'Snowflake', title: 'Sanitised, fully AC', body: 'Deep-cleaned before every trip, with fresh linens for overnight journeys on request.' },
  ];
  return (
    <section className="mx-auto max-w-6xl px-4 py-12 md:py-16">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {list.map((t) => (
          <div key={t.title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-shadow duration-300 hover:shadow-md">
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl" style={{ background: `${accent}18`, color: accent }}>
              <Icon name={t.iconName} className="h-5 w-5" />
            </span>
            <p className="mt-3 font-bold text-slate-900">{t.title}</p>
            <p className="mt-1.5 text-[13.5px] leading-relaxed text-slate-600">{t.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ── FAQ accordion (CSS transitions only) ── */
export function FaqAccordion({ faqs = [], accent, title, eyebrow = 'Questions we get asked', open, setOpen }) {
  if (!faqs.length) return null;
  return (
    <section className="mx-auto max-w-4xl px-4 py-12 md:py-16">
      <SectionHead eyebrow={eyebrow} title={title} accent={accent} />
      <div className="mt-7 space-y-3">
        {faqs.map((f, i) => {
          const q = f.question || f.q;
          const a = f.answer || f.a;
          return (
            <div
              key={q}
              className={`overflow-hidden rounded-xl border bg-white transition-colors duration-200 ${open === i ? 'border-slate-300 shadow-md' : 'border-slate-200'}`}
            >
              <h3 className="m-0">
              <button
                type="button"
                onClick={() => setOpen(open === i ? -1 : i)}
                aria-expanded={open === i}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
              >
                <span className={`text-[15px] font-bold text-slate-900 ${i === 0 ? 'speakable-faq-first' : ''}`}>{q}</span>
                <ChevronDown
                  className={`h-5 w-5 shrink-0 transition-transform duration-300 ${open === i ? 'rotate-180' : ''}`}
                  style={{ color: accent }}
                />
              </button>
              </h3>
              {open === i && (
                <p className="border-t border-slate-100 px-5 py-4 text-[14.5px] leading-relaxed text-slate-600">{a}</p>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

/* ── Closing CTA band ── */
export function CtaBand({ image, accent, title, body, waText, trackKey, bullets = [], children }) {
  return (
    <section className="relative isolate overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0 -z-10 opacity-25">
        <Image src={image} alt="" fill sizes="100vw" className="object-cover" />
      </div>
      <div className="absolute inset-0 -z-10" style={{ background: `linear-gradient(120deg, ${accent}55, transparent 65%)` }} />
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-[1.1fr_1fr] md:py-20">
        <div>
          <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl md:text-4xl">{title}</h2>
          <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-white/75">{body}</p>
          <CtaPair accent={accent} waText={waText} trackKey={`${trackKey}_footer`} />
          {bullets.length > 0 && (
            <ul className="mt-8 space-y-2.5">
              {bullets.map((li) => (
                <li key={li} className="flex items-start gap-2.5 text-sm text-white/80">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" style={{ color: accent }} />
                  {li}
                </li>
              ))}
            </ul>
          )}
        </div>
        {children && <div className="rounded-2xl bg-slate-900/85 p-1 shadow-2xl ring-1 ring-white/10 backdrop-blur">{children}</div>}
      </div>
    </section>
  );
}

/* ── Vehicle switcher: same page, other fleet ── */
export function VehicleSwitch({ others = [], accent, suffix }) {
  if (!others.length) return null;
  return (
    <section className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <Eyebrow accent={accent}>Other vehicles</Eyebrow>
        <p className="mt-2 text-sm text-slate-600">Same journey, a different fleet:</p>
        <div className="mt-4 flex flex-wrap gap-2.5">
          {others.map((o) => (
            <Link
              key={o.href}
              href={suffix ? `${o.href}/${suffix}` : o.href}
              className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3.5 py-2 text-sm font-semibold text-slate-700 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow"
              style={{ borderLeftColor: accent, borderLeftWidth: 3 }}
            >
              {o.heroLabel}
              <ArrowRight className="h-3.5 w-3.5" style={{ color: accent }} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Trip fare table: the fare for THIS corridor, per seater, worked on the
      published per-km rate and the billed distance (300 km per day minimum).
      Real <table> on desktop, cards on mobile. ── */
export function TripFareTable({ fleet = [], distance, accent, origin, destination, vehicleLabel }) {
  const m = /(\d[\d,]*)\s*km/i.exec(String(distance || ''));
  const km = m ? Number(m[1].replace(/,/g, '')) : 0;
  const rows = fleet.filter((f) => f.perKm);
  if (!km || !rows.length) return null;
  const oneWayKm = Math.max(km, 300);
  const roundKm = Math.max(km * 2, 600);
  const inr = (n) => `₹${Math.round(n).toLocaleString('en-IN')}`;
  const title = `${origin} to ${destination} by ${vehicleLabel}: the fare for each seater`;
  return (
    <section className="border-b border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <SectionHead
          eyebrow="What this trip costs"
          title={title}
          sub={`Worked on the ${km} km drive at each seater's outstation rate${km < 300 ? ', billed on the 300 km per day minimum' : ''}; the two-day round trip is worked on ${roundKm.toLocaleString('en-IN')} km. Fuel and the driver are included. Tolls, parking and state permits are added at actuals and itemised on the invoice.`}
          accent={accent}
        />
        <div className="mt-7 hidden sm:overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm md:block">
          <table className="w-full sm:min-w-[640px] border-collapse text-left text-sm rt-stack">
            <caption className="sr-only">{title}</caption>
            <thead>
              <tr style={{ background: `${accent}12` }}>
                <th scope="col" className="px-5 py-3.5 font-bold text-slate-900">Seater</th>
                <th scope="col" className="px-5 py-3.5 font-bold text-slate-900">Seats</th>
                <th scope="col" className="px-5 py-3.5 font-bold text-slate-900">Rate</th>
                <th scope="col" className="px-5 py-3.5 font-bold text-slate-900">One way · {oneWayKm.toLocaleString('en-IN')} km</th>
                <th scope="col" className="px-5 py-3.5 font-bold text-slate-900">Two-day round trip · {roundKm.toLocaleString('en-IN')} km</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((f) => (
                <tr key={f.id || f.name} className="border-t border-slate-100 transition-colors duration-200 hover:bg-slate-50">
                  <th scope="row" className="px-5 py-3.5 font-semibold text-slate-900">
                    {f.name}
                    {f.popular && (
                      <span className="ml-2 rounded px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white" style={{ background: accent }}>Popular</span>
                    )}
                  </th>
                  <td className="px-5 py-3.5 text-slate-600">{f.capacity}</td>
                  <td className="px-5 py-3.5 text-slate-700">₹{groupDigits(f.perKm)}/km</td>
                  <td className="px-5 py-3.5 text-lg font-extrabold" style={{ color: accent }}>{inr(f.perKm * oneWayKm)}</td>
                  <td className="px-5 py-3.5 font-bold text-slate-900">{inr(f.perKm * roundKm)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 md:hidden">
          {rows.map((f) => (
            <div key={f.id || f.name} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
              <p className="font-bold text-slate-900">{f.name}</p>
              <p className="mt-0.5 text-xs text-slate-500">{f.capacity} · ₹{groupDigits(f.perKm)}/km</p>
              <div className="mt-3 flex items-end justify-between border-t border-slate-100 pt-3">
                <span>
                  <span className="block text-[11px] font-semibold uppercase tracking-wider text-slate-500">One way</span>
                  <span className="text-xl font-extrabold" style={{ color: accent }}>{inr(f.perKm * oneWayKm)}</span>
                </span>
                <span className="text-right">
                  <span className="block text-[11px] font-semibold uppercase tracking-wider text-slate-500">Two-day round trip</span>
                  <span className="text-base font-bold text-slate-900">{inr(f.perKm * roundKm)}</span>
                </span>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-4 text-xs leading-relaxed text-slate-500">
          Each figure is the seater&apos;s published per-kilometre rate multiplied by the billed distance. The written quote confirms it for your date and pickup point.
        </p>
      </div>
    </section>
  );
}

/* ── Route stepper: pickup, the planned halts and the drop as a card strip ── */
export function RouteStepper({ origin, destination, stops = [], accent }) {
  const points = [
    { name: origin, tag: 'Pickup', iconName: 'MapPin' },
    ...stops.map((s, i) => ({ name: s, tag: `Halt ${i + 1}` })),
    { name: destination, tag: 'Drop', iconName: 'Milestone' },
  ];
  return (
    <ol className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
      {points.map((p, i) => (
        <li key={`${p.name}-${i}`} className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
          <span
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-extrabold text-white shadow"
            style={{ background: p.iconName ? accent : `${accent}b3` }}
          >
            {p.iconName ? <Icon name={p.iconName} className="h-4 w-4" /> : i}
          </span>
          <span className="min-w-0">
            <span className="block text-[11px] font-semibold uppercase tracking-wider text-slate-500">{p.tag}</span>
            <span className="mt-0.5 block text-sm font-bold text-slate-900">{p.name}</span>
          </span>
        </li>
      ))}
    </ol>
  );
}
