'use client';

// GroupAirportTransferClient — the interactive shell for
// /group-airport-transfer-delhi.
//
// Same rules as VehicleLocalityClient: the hero photo is `priority` and plain
// SSR markup with no opacity-0 entrance, and every transition here is CSS
// rather than framer-motion. The one piece of client state is the capacity
// filter, which is genuinely interactive — someone arriving with 40 people
// wants the list narrowed, not scrolled.

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Phone, Plane, Users, Luggage, Clock, Shield, CheckCircle2, ArrowRight,
  Briefcase, Heart, Landmark, Building2, IndianRupee, BadgeCheck, Headphones,
  Bus, MapPin,
} from '@/components/ui/icons';
import { WhatsAppIcon } from '@/components/ui/icons';
import { trackWhatsAppClick, trackPhoneCall } from '@/utilis/analytics';
import { SetStickyCta } from '@/components/ui/StickyCtaContext';

const PHONE = '+917668570551';
const ACCENT = '#0F766E';
const wa = (text) => `https://wa.me/917668570551?text=${encodeURIComponent(text)}`;

// The bands people actually think in when they describe a group.
const BANDS = [
  { key: 'all', label: 'Any size', min: 0, max: 999 },
  { key: 'small', label: '10–17', min: 10, max: 17 },
  { key: 'mid', label: '18–26', min: 18, max: 26 },
  { key: 'large', label: '27–45', min: 27, max: 45 },
  { key: 'xl', label: '46+', min: 46, max: 999 },
];

const TERMINALS = [
  { code: 'T3', name: 'Terminal 3', note: 'International and full-service domestic. The busiest of the three and the one most groups land at.', href: '/airport-service/delhi/igi-terminal-3-international' },
  { code: 'T1', name: 'Terminal 1', note: 'Domestic low-cost carriers. Coach access is via the dedicated bay in the forecourt.', href: '/airport-service/delhi/igi-terminal-1-domestic' },
  { code: 'T2', name: 'Terminal 2', note: 'Additional domestic operations. Airlines move between T1 and T2, so we confirm on the flight number.', href: '/airport-service/delhi/igi-terminal-2-domestic' },
];

const OCCASIONS = [
  { title: 'Conference & exhibition delegations', blurb: 'Delegate movement between IGI, Aerocity, Yashobhoomi and India Expo Mart, with vehicles held on site between sessions.', img: '/images/bus/35_SEATER_BUS.jpg', icon: Building2 },
  { title: 'Corporate arrivals', blurb: 'Incoming teams and client delegations met at the gate, with GST invoicing and monthly billing for recurring transfers.', img: '/images/citypage_hero_section_image.jpg', icon: Briefcase },
  { title: 'Wedding guests', blurb: 'Out-of-town guests arriving across a whole day, collected in batches and taken straight to the hotel block.', img: '/images/wedding/premium_suv.jpg', icon: Heart },
  { title: 'Tour groups', blurb: 'Parties landing together and driving on the same day — many go straight to Agra or Jaipur without a night in Delhi.', img: '/images/sightseeing/Agra/Agra_Hero_section.jpg', icon: Landmark },
  { title: 'Pilgrimage groups', blurb: 'Large parties continuing to Haridwar, Rishikesh or Vaishno Devi, with drivers who know the halt points.', img: '/images/sightseeing/Haridwar/Haridwar_hero_section.jpg', icon: MapPin },
  { title: 'School & university groups', blurb: 'Student parties with verified drivers, seat belts on every row and a seat kept free for accompanying staff.', img: '/images/tempo/26_seater.jpg', icon: Users },
];

export default function GroupAirportTransferClient({ ladder = [], coaches = [] }) {
  const [band, setBand] = useState('all');

  const active = BANDS.find((b) => b.key === band) || BANDS[0];
  const visibleLadder = ladder.filter((r) => r.seats >= active.min && r.seats <= active.max);
  const visibleCoaches = coaches.filter((c) => c.seats >= active.min && c.seats <= active.max);
  const heroWa = 'Hi, I need a group airport transfer at Delhi IGI. Please share availability and fare.';

  return (
    <div className="bg-white text-slate-900" style={{ '--accent': ACCENT }}>
      <SetStickyCta price="12–56 seats" label="Delhi Airport Group Transfer" whatsappText={heroWa} />

      {/* ══ HERO — SSR-visible priority photo, no entrance animation ══ */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/airport_section.jpg"
            alt="Group airport transfer vehicles at Delhi IGI Airport"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/88 via-slate-900/78 to-slate-950/92" />
          <div className="absolute inset-0 opacity-40" style={{ background: `radial-gradient(ellipse at 25% 15%, ${ACCENT}77, transparent 60%)` }} />
        </div>

        <div className="mx-auto max-w-6xl px-4 pt-28 pb-16 md:pt-36 md:pb-24">
          <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center gap-2 text-xs text-white/70">
            <Link href="/" className="transition-colors hover:text-white">Home</Link>
            <span aria-hidden="true">/</span>
            <Link href="/airport-service" className="transition-colors hover:text-white">Airport Service</Link>
            <span aria-hidden="true">/</span>
            <span className="text-white">Group Transfer Delhi</span>
          </nav>

          <span
            className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-white backdrop-blur"
            style={{ borderColor: `${ACCENT}99`, background: `${ACCENT}26` }}
          >
            <Plane className="h-3.5 w-3.5" />
            Delhi IGI · All three terminals
          </span>

          <h1 className="speakable-headline mt-5 max-w-4xl text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl lg:text-[3.35rem]">
            Group Airport Transfer, Delhi
          </h1>
          <p className="mt-3 text-base font-medium text-white/80 sm:text-lg">
            One vehicle for the whole group — 12 to 56 seats
          </p>

          <p className="speakable-lead mt-5 max-w-3xl text-[15px] leading-relaxed text-white/85 sm:text-base">
            Moving a group through Delhi airport is a different problem from moving a person. Four separate
            taxis for a party of fifteen means four fares, four arrival times at the hotel and at least one
            driver who cannot find it. One vehicle removes all of that — and above about twenty people we
            send a coordinator into arrivals as well as the driver, because somebody has to be counting
            heads at the door while the vehicle stays in the bay.
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-2.5">
            {[
              { icon: Users, label: '12 to 56 seats' },
              { icon: Clock, label: '60 min free wait' },
              { icon: Plane, label: 'Flight tracked' },
              { icon: BadgeCheck, label: 'GST invoicing' },
            ].map((p) => (
              <span key={p.label} className="inline-flex items-center gap-1.5 rounded-lg border border-white/20 bg-white/10 px-3 py-2 text-xs font-semibold text-white backdrop-blur">
                <p.icon className="h-3.5 w-3.5" />
                {p.label}
              </span>
            ))}
          </div>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={`tel:${PHONE}`}
              onClick={() => trackPhoneCall('group_airport_transfer_hero')}
              className="inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-sm font-bold text-white shadow-xl transition-transform duration-200 hover:-translate-y-0.5"
              style={{ background: ACCENT }}
            >
              <Phone className="h-4 w-4" />
              Call 7668570551
            </a>
            <a
              href={wa(heroWa)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick('group_airport_transfer_hero', heroWa)}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/25 bg-white/10 px-6 py-3.5 text-sm font-bold text-white backdrop-blur transition-colors duration-200 hover:bg-white/20"
            >
              <WhatsAppIcon className="h-4 w-4" />
              WhatsApp your group size
            </a>
          </div>
        </div>
      </section>

      {/* ══ QUICK ANSWER ══ */}
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-8">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <p className="text-[11px] font-bold uppercase tracking-[0.16em]" style={{ color: ACCENT }}>In short</p>
            <p className="mt-2 text-[15px] leading-relaxed text-slate-700 sm:text-base">
              Triveni Cabs™ runs group airport transfers at Delhi IGI for{' '}
              <strong className="text-slate-900">12 to 56 passengers</strong> in a single vehicle — tempo
              travellers and Force Urbania up to 26 seats, coaches from 22 to 56. Fares start at{' '}
              <strong className="text-slate-900">₹23 per kilometre</strong> including driver and fuel.
              Flights are tracked from the actual arrival time and{' '}
              <strong className="text-slate-900">sixty minutes of free waiting</strong> is included on every
              pickup.
            </p>
          </div>
        </div>
      </section>

      {/* ══ THE LUGGAGE POINT — the thing people get wrong ══ */}
      <section className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-[1.15fr_1fr] md:items-center md:gap-12">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.18em]" style={{ color: ACCENT }}>
              Sizing the vehicle
            </p>
            <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
              Count the bags, not just the people
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-slate-600">
              This is the single most common mistake on a group airport booking, and it is worth being blunt
              about. A 26-seater has 26 seats — it does not have 26 international suitcases of boot space. A
              party of twenty-six landing from a long-haul flight with two large cases each needs a 35-seat
              coach, and if we size that vehicle off the headcount alone, the problem appears at the kerb at
              two in the morning when it is too late to fix.
            </p>
            <p className="mt-3 text-[15px] leading-relaxed text-slate-600">
              So when you enquire, give us two numbers rather than one: how many passengers, and how many
              large bags. A domestic arrival with cabin baggage and an international arrival with checked
              cases are genuinely different vehicles for the same number of people.
            </p>
            <ul className="mt-6 space-y-2.5">
              {[
                'Domestic, cabin bags only — seats are the limit',
                'Domestic with checked bags — allow one size up',
                'International long-haul — allow one to two sizes up',
                'Groups splitting to two hotels — two vehicles beat one coach',
              ].map((li) => (
                <li key={li} className="flex items-start gap-2.5 text-sm text-slate-700">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" style={{ color: ACCENT }} />
                  {li}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-xl ring-1 ring-slate-200">
            <Image
              src="/images/tempo/26_seater.jpg"
              alt="26 seater tempo traveller luggage capacity for airport group transfer"
              fill
              sizes="(max-width: 768px) 100vw, 45vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* ══ CAPACITY LADDER — filterable, photo-led ══ */}
      <section className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
          <p className="text-[11px] font-bold uppercase tracking-[0.18em]" style={{ color: ACCENT }}>
            The full ladder
          </p>
          <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
            Every vehicle we run to the terminal
          </h2>
          <p className="mt-3 max-w-3xl text-[15px] leading-relaxed text-slate-600">
            Filter by how many are travelling. Rates shown are the per-kilometre outstation fare including
            fuel and driver; tolls, parking and airport entry are billed at actuals and itemised on the
            invoice. Coach fares are quoted per trip rather than per kilometre — tell us the group size and
            the drop point and we will price it.
          </p>

          {/* Band filter */}
          <div className="mt-6 flex flex-wrap gap-2" role="group" aria-label="Filter by group size">
            {BANDS.map((b) => (
              <button
                key={b.key}
                type="button"
                onClick={() => setBand(b.key)}
                aria-pressed={band === b.key}
                className={`rounded-lg border px-4 py-2 text-sm font-bold transition-all duration-200 ${
                  band === b.key
                    ? 'text-white shadow-md'
                    : 'border-slate-200 bg-white text-slate-700 hover:-translate-y-0.5 hover:shadow'
                }`}
                style={band === b.key ? { background: ACCENT, borderColor: ACCENT } : undefined}
              >
                {b.label}
              </button>
            ))}
          </div>

          {/* Tempo / Urbania cards */}
          {visibleLadder.length > 0 && (
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {visibleLadder.map((r) => (
                <Link
                  key={`${r.group}-${r.seats}`}
                  href={r.href}
                  className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={r.image}
                      alt={r.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-transparent" />
                    <span
                      className="absolute left-3 top-3 rounded px-2 py-1 text-[10px] font-bold uppercase tracking-wide text-white shadow"
                      style={{ background: `${ACCENT}e6` }}
                    >
                      {r.group}
                    </span>
                    <p className="absolute bottom-3 left-4 right-4 text-base font-bold text-white">{r.name}</p>
                  </div>
                  <div className="p-4">
                    <div className="flex items-center gap-4 text-xs font-medium text-slate-500">
                      <span className="inline-flex items-center gap-1"><Users className="h-3.5 w-3.5" />{r.capacity}</span>
                      <span className="inline-flex items-center gap-1"><Luggage className="h-3.5 w-3.5" />{r.luggage}</span>
                    </div>
                    <p className="mt-2 text-[13px] leading-relaxed text-slate-600">{r.note}</p>
                    <div className="mt-3 flex items-center justify-between border-t border-slate-100 pt-3">
                      <span className="text-lg font-extrabold" style={{ color: ACCENT }}>{r.rate}</span>
                      <span className="inline-flex items-center gap-1 text-xs font-bold text-slate-500 transition-colors group-hover:text-slate-900">
                        Details <ArrowRight className="h-3.5 w-3.5" />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}

          {/* Coaches */}
          {visibleCoaches.length > 0 && (
            <>
              <h3 className="mt-12 flex items-center gap-2 text-lg font-extrabold text-slate-900">
                <Bus className="h-5 w-5" style={{ color: ACCENT }} />
                Coaches — above 26 passengers
              </h3>
              <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {visibleCoaches.map((c) => (
                  <div key={c.seats} className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image
                        src={c.image}
                        alt={c.name}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 to-transparent" />
                      <p className="absolute bottom-3 left-4 right-4 text-sm font-bold text-white">{c.name}</p>
                    </div>
                    <p className="p-4 text-[13px] leading-relaxed text-slate-600">{c.note}</p>
                  </div>
                ))}
              </div>
            </>
          )}

          {visibleLadder.length === 0 && visibleCoaches.length === 0 && (
            <p className="mt-8 rounded-xl border border-slate-200 bg-white p-5 text-sm text-slate-600">
              Nothing in that band as a single vehicle — for a group this size we would run several vehicles
              dispatched together. Call us and we will plan it around your drop points.
            </p>
          )}
        </div>
      </section>

      {/* ══ TERMINALS ══ */}
      <section className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <p className="text-[11px] font-bold uppercase tracking-[0.18em]" style={{ color: ACCENT }}>Terminals</p>
        <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
          Where we meet you at IGI
        </h2>
        <p className="mt-3 max-w-3xl text-[15px] leading-relaxed text-slate-600">
          Give us the flight number rather than the terminal. Airlines move between Terminal 1 and Terminal 2
          periodically, and the flight number lets us confirm the right one on the day instead of relying on
          what was true when the booking was made.
        </p>
        <div className="mt-7 grid gap-4 sm:grid-cols-3">
          {TERMINALS.map((t) => (
            <Link
              key={t.code}
              href={t.href}
              className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              style={{ borderTopColor: ACCENT, borderTopWidth: 3 }}
            >
              <span className="text-2xl font-extrabold" style={{ color: ACCENT }}>{t.code}</span>
              <p className="mt-1 font-bold text-slate-900">{t.name}</p>
              <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{t.note}</p>
              <span className="mt-3 inline-flex items-center gap-1 text-xs font-bold" style={{ color: ACCENT }}>
                Terminal details
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* ══ OCCASIONS ══ */}
      <section className="border-y border-slate-200 bg-slate-900 text-white">
        <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
          <p className="text-[11px] font-bold uppercase tracking-[0.18em]" style={{ color: ACCENT }}>Who books this</p>
          <h2 className="mt-2 text-2xl font-extrabold tracking-tight sm:text-3xl">
            Groups we move through Delhi airport
          </h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {OCCASIONS.map((o) => (
              <article key={o.title} className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={o.img}
                    alt={o.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  <span
                    className="absolute left-3 top-3 inline-flex h-9 w-9 items-center justify-center rounded-lg text-white shadow-lg backdrop-blur"
                    style={{ background: `${ACCENT}dd` }}
                  >
                    <o.icon className="h-4 w-4" />
                  </span>
                  <h3 className="absolute bottom-3 left-4 right-4 text-[15px] font-bold text-white">{o.title}</h3>
                </div>
                <p className="p-4 text-[13px] leading-relaxed text-white/70">{o.blurb}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ══ TRUST ══ */}
      <section className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: Plane, title: 'Flight tracked', body: 'We watch the actual arrival, not the timetable. A delay moves the pickup at no charge.' },
            { icon: Clock, title: '60 min free wait', body: 'Counted from wheels down — enough for immigration and baggage on an international arrival.' },
            { icon: Shield, title: 'Met inside arrivals', body: 'Nameboard at the gate, and a coordinator as well as the driver for groups above twenty.' },
            { icon: Headphones, title: '24/7 support', body: 'A real person on the phone at 3am, which is when most international arrivals actually land.' },
          ].map((t) => (
            <div key={t.title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-shadow duration-300 hover:shadow-md">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl" style={{ background: `${ACCENT}18`, color: ACCENT }}>
                <t.icon className="h-5 w-5" />
              </span>
              <p className="mt-3 font-bold text-slate-900">{t.title}</p>
              <p className="mt-1.5 text-[13.5px] leading-relaxed text-slate-600">{t.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ══ CTA ══ */}
      <section className="relative isolate overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0 -z-10 opacity-25">
          <Image src="/images/airport_section.jpg" alt="" fill sizes="100vw" className="object-cover" />
        </div>
        <div className="absolute inset-0 -z-10" style={{ background: `linear-gradient(120deg, ${ACCENT}55, transparent 65%)` }} />
        <div className="mx-auto max-w-4xl px-4 py-14 text-center md:py-20">
          <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl md:text-4xl">
            Tell us the flight and the headcount
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-relaxed text-white/75">
            Send the flight number, how many are travelling and how many large bags. We come back with a
            written quote and the right vehicle for the luggage — not just the seats.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href={`tel:${PHONE}`}
              onClick={() => trackPhoneCall('group_airport_transfer_footer')}
              className="inline-flex items-center justify-center gap-2 rounded-xl px-7 py-3.5 text-sm font-bold text-white shadow-xl transition-transform duration-200 hover:-translate-y-0.5"
              style={{ background: ACCENT }}
            >
              <Phone className="h-4 w-4" />
              Call 7668570551
            </a>
            <a
              href={wa(heroWa)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick('group_airport_transfer_footer', heroWa)}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/25 bg-white/10 px-7 py-3.5 text-sm font-bold backdrop-blur transition-colors duration-200 hover:bg-white/20"
            >
              <WhatsAppIcon className="h-4 w-4" />
              WhatsApp
            </a>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-3 text-xs font-semibold text-white/70">
            <Link href="/tempo-traveller/delhi-airport" className="rounded-lg border border-white/20 px-3 py-2 transition-colors hover:bg-white/10">
              Tempo Traveller at Delhi Airport
            </Link>
            <Link href="/force-urbania/delhi-airport" className="rounded-lg border border-white/20 px-3 py-2 transition-colors hover:bg-white/10">
              Force Urbania at Delhi Airport
            </Link>
            <Link href="/airport-service" className="rounded-lg border border-white/20 px-3 py-2 transition-colors hover:bg-white/10">
              All airport services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
