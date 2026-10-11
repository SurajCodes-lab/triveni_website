'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Plane, Clock, Shield, MapPin, Car, ChevronRight, ChevronDown, CheckCircle2,
  Phone, Luggage, Star, Users, Navigation, Camera, Award, ArrowRight,
} from '@/components/ui/icons';
import { WhatsAppIcon } from '@/components/ui/icons';
import { generateAirportFAQs } from '@/lib/seo/faq-generator';
import { trackWhatsAppClick, trackPhoneCall } from '@/utilis/analytics';
import { SetStickyCta } from '@/components/ui/StickyCtaContext';
import QuickEnquiryForm from '@/components/ui/QuickEnquiryForm';
import {
  AirportShell, AirportBackdrop, AirportCrumb, FlightStatusPill,
  TerminalBadge, RouteArc, Barcode, getAccent, HeroPhoto,
  SerifHeading, TrustSeal, LaneStrip, GOLD_BTN, GHOST_BTN, FOIL,
} from '@/components/airport/AirportKit';
import { getCityImage } from '@/utilis/imageUtils';
import AirportAnswerBox from './AirportAnswerBox';
import DataTable from '@/components/seo/DataTable';
import DestinationPhotos from '@/components/seo/DestinationPhotos';

const PHONE = '+917668570551';
const wa = (text) => `https://wa.me/917668570551?text=${encodeURIComponent(text)}`;

// Canonical airport fleet-card rates: Sedan ₹11/km · SUV ₹15/km · Tempo ₹23/km.
const FLEET = [
  { name: 'Sedan', cars: 'Dzire · Etios', seats: '1–4', bags: '2–3', rate: '₹11/km', tag: null, img: '/images/car/swift_dzire.jpg' },
  { name: 'SUV', cars: 'Innova · Ertiga', seats: '1–6', bags: '4', rate: '₹15/km', tag: 'Most Booked', img: '/images/car/innova_crysta.jpg' },
  { name: 'Tempo', cars: '12–16 Seater', seats: '7–16', bags: '12+', rate: '₹23/km', tag: null, img: '/images/tempo/16_seater.jpg' },
];

// Terminal-level pages per airport city. Keeps every terminal page one click
// from its city hub instead of relying on the sitemap alone for discovery.
const CITY_TERMINALS = {
  delhi: [
    { href: '/airport-service/delhi/igi-terminal-1-domestic', code: 'T1', name: 'Terminal 1 — Domestic', desc: 'IndiGo, SpiceJet and the low-cost domestic carriers.', img: '/images/sightseeing/Delhi/Delhi_hero_section.jpg' },
    { href: '/airport-service/delhi/igi-terminal-2-domestic', code: 'T2', name: 'Terminal 2 — Domestic', desc: 'Additional domestic operations at IGI.', img: '/images/sightseeing/Delhi/red_fort.jpg' },
    { href: '/airport-service/delhi/igi-terminal-3-international', code: 'T3', name: 'Terminal 3 — International', desc: 'Emirates, Lufthansa, Singapore and premium domestic.', img: '/images/sightseeing/Delhi/India_Gate.jpg' },
  ],
  jaipur: [
    { href: '/airport-service/jaipur/jai-terminal-1-international', code: 'T1', name: 'Terminal 1 — International', desc: 'Dubai, Sharjah, Muscat, Bangkok and Kuala Lumpur.', img: '/images/sightseeing/Jaipur/jaipur_hero_section_image.jpg' },
    { href: '/airport-service/jaipur/jai-terminal-2-domestic', code: 'T2', name: 'Terminal 2 — Domestic', desc: 'IndiGo, Air India, SpiceJet and Akasa domestic arrivals.', img: '/images/sightseeing/Jaipur/Hawa_Mahal.jpg' },
  ],
  agra: [
    { href: '/airport-service/agra/kheria-civil-terminal-domestic', code: 'AGR', name: 'Kheria Civil Terminal', desc: 'The single civil terminal — Taj Mahal in 30 minutes.', img: '/images/sightseeing/Agra/Taj_mahal.jpg' },
  ],
  chandigarh: [
    { href: '/airport-service/chandigarh/ixc-integrated-terminal', code: 'IXC', name: 'Integrated Terminal', desc: 'One building for domestic and international arrivals.', img: '/images/sightseeing/Chandigarh/Chandigarh_hero_section.jpg' },
  ],
  hindon: [
    { href: '/airport-service/hindon/hindon-civil-terminal-domestic', code: 'HDO', name: 'Hindon Civil Terminal', desc: 'Ghaziabad RCS-UDAN domestic terminal.', img: '/images/airport_section.jpg' },
  ],
  jewar: [
    { href: '/airport-service/jewar/jewar-terminal-1-international', code: 'T1', name: 'Terminal 1 — International', desc: 'Noida International Airport greenfield terminal.', img: '/images/airport_section.jpg' },
  ],
};

const INCLUDES = [
  { icon: Navigation, t: 'Meet & greet at arrivals' },
  { icon: Plane, t: 'Real-time flight tracking' },
  { icon: Car, t: 'Clean, sanitised AC vehicle' },
  { icon: Luggage, t: 'Free luggage assistance' },
  { icon: Clock, t: 'Up to 60 min free waiting' },
  { icon: Shield, t: 'Fixed fare — no hidden charges' },
];

export default function CityAirportServiceClient({ city, citySlug, cityTours = [], corridorRows = [], terminalRows = [], onwardLinks = [], shortAnswer = null }) {
  const [openFaq, setOpenFaq] = useState(0);
  const [requestedTransfer, setRequestedTransfer] = useState(null);
  const accent = getAccent(citySlug);
  const terminals = CITY_TERMINALS[citySlug] || [];
  const base = 11; // ₹/km

  const heroWa = `Hi Triveni Cabs™, I need an airport taxi in ${city.name} (${city.airport}) with flight tracking. Please share availability and fare.`;
  const policyFaqs = generateAirportFAQs({ city: city.name, airportName: city.airport, price: base, distance: (city.distance || '').replace(/[^0-9]/g, '') || '15' });
  const firstDrop = city.popularDestinations?.[0];
  const faqs = [...[1,3,4,6].map(i => policyFaqs[i]),
    ...(firstDrop ? [{question: `How far is ${city.airport} from ${firstDrop.name}?`, answer: `${firstDrop.name} is ${firstDrop.distance} from ${city.airport}; the published driving estimate is ${firstDrop.time}. Traffic and your exact drop point can change this.`}] : []),
    {question: `Which terminal should I book for my ${city.name} transfer?`, answer: `${city.airport}: ${city.terminals}. Share the terminal and flight number shown on your ticket so the meeting point can be confirmed.`},
    {question: `What can I visit after arriving in ${city.name}?`, answer: `Places listed in our ${city.name} guide include ${(city.nearbyAttractions || []).join(', ')}. Arrange sightseeing separately from your airport transfer.`},
  ];

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.question, acceptedAnswer: { '@type': 'Answer', text: f.answer } })),
  };

  return (
    <AirportShell accent={accent}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <SetStickyCta price="From ₹11/km" label={`${city.name} Airport Taxi`} whatsappText={heroWa} />

      {/* ══ HERO — cinematic city photo, serif + gold-foil title ══ */}
      <section className="relative overflow-hidden px-4 pt-14 sm:pt-24 pb-16 md:pb-24">
        <HeroPhoto src={getCityImage(city.name)} />
        <LaneStrip />
        <div className="relative z-10 mx-auto max-w-7xl">
          <AirportCrumb trail={[
            { label: 'Home', href: '/' },
            { label: 'Airport Service', href: '/airport-service' },
            { label: `${city.name} Airport` },
          ]} />

          <div className="grid items-start gap-10 lg:grid-cols-5">
            <div className="lg:col-span-3">
              <div className="flex flex-wrap items-center gap-3">
                <TerminalBadge code={city.airportCode} sub="IATA" accentName={((city.terminals || '').match(/\d+/) || [])[0]} />
                <FlightStatusPill label="24/7 Pickup" />
              </div>

              <h1 className="mt-7 font-display-serif text-balance text-4xl font-black leading-[1.05] tracking-tight sm:text-5xl md:text-7xl">
                <span className="block text-white">{city.name}</span>{' '}
                <span className={`block ${FOIL}`}>Airport Taxi</span>
              </h1>
              <p className="mt-2 font-mono text-sm tracking-wide text-slate-400">{city.airport}</p>

              <AirportAnswerBox updatedOn="2026-09-12" answer={`${city.airport} serves this ${city.name} transfer page (${city.distance}). Published fleet rates start at ₹11/km for a sedan, ₹15/km for an SUV and ₹23/km for a Tempo Traveller. Confirm the fixed airport quote and terminal meeting point before booking.`}
                facts={[{label:'Airport',value:city.airportCode},{label:'Distance',value:city.distance},{label:'Terminals',value:city.terminals},{label:'Sedan rate',value:'From ₹11/km'}]} />

              {/* quick facts — glass stat tiles, missing values omitted */}
              <div className="mt-7 flex flex-wrap gap-3">
                {[
                  { icon: MapPin, l: 'From airport', v: city.distance },
                  { icon: Plane, l: 'Terminals', v: city.terminals },
                  { icon: Car, l: 'Starts at', v: '₹11/km' },
                ].filter((s) => s.v).map((s) => (
                  <div key={s.l} className="flex items-center gap-3 rounded-2xl border border-white/[0.08] bg-white/[0.03] px-5 py-3 backdrop-blur-xl">
                    <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-amber-400/15">
                      <s.icon className="h-5 w-5 text-[color:var(--air-accent)]" />
                    </span>
                    <div>
                      <div className="text-[10px] uppercase tracking-widest text-slate-500">{s.l}</div>
                      <div className="text-sm font-bold text-white">{s.v}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a href={`tel:${PHONE}`} onClick={() => trackPhoneCall('city_airport_hero')}
                  className={`${GOLD_BTN} w-full px-7 py-4 text-base lg:w-auto lg:py-2`}>
                  <Phone className="h-5 w-5" /> Call +91 7668570551
                </a>
                <a href={wa(heroWa)} target="_blank" rel="noopener noreferrer" onClick={() => trackWhatsAppClick('city_airport_hero')}
                  className={`${GHOST_BTN} w-full px-7 py-4 text-base lg:w-auto lg:py-2`}>
                  <WhatsAppIcon className="h-5 w-5 text-emerald-400" /> WhatsApp
                </a>
              </div>

              <TrustSeal compact className="mt-6 max-w-md" />

              <RouteArc from={city.airportCode} to={city.name.toUpperCase()} className="mt-8 max-w-md" />
            </div>

            <div className="lg:col-span-2">
              <div className="rounded-3xl border border-[color:var(--air-accent)]/20 bg-white/[0.04] p-1.5 backdrop-blur-xl">
                <div className="mb-1 flex items-center justify-between px-4 pt-3">
                  <span className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-[color:var(--air-accent)]">{city.name} Desk</span>
                  <FlightStatusPill label="Open" />
                </div>
                <div id="airport-enquiry" className="scroll-mt-24">
                  {requestedTransfer && <p className="mb-3 text-sm text-amber-200">Request a quote: {requestedTransfer.label}</p>}
                  <QuickEnquiryForm fromCity={requestedTransfer?.fromCity || ''} toCity={requestedTransfer?.toCity || city.name} pageType="airport_transfer" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The short answer, rendered on the server and slotted in directly
          below the hero so it is the first prose on the page. */}
      {shortAnswer}

      {/* ══ TRUST BOARD ══ */}
      <section className="relative px-4 py-8">
        <div className="mx-auto max-w-7xl">
          <div className="overflow-hidden rounded-2xl border border-white/[0.06] bg-black/30 backdrop-blur-xl">
            <div className="grid grid-cols-2 divide-x divide-white/[0.05] sm:grid-cols-4">
              {[
                { v: '4.9★', l: 'Rated by Flyers' },
                { v: '60 min', l: 'Free Waiting' },
                { v: '24/7', l: 'Live Dispatch' },
                { v: '₹0', l: 'Surge / Hidden' },
              ].map((s, i) => (
                <div key={i} className="px-4 py-5 text-center">
                  <div className="font-mono text-xl font-black text-[color:var(--air-accent)] sm:text-3xl">{s.v}</div>
                  <div className="mt-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-400">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ TERMINAL PICKER — one click from the city hub to each terminal ══ */}
      {terminals.length > 0 && (
        <section className="relative overflow-hidden px-4 py-16 md:py-20">
          <AirportBackdrop variant="grid" />
          <div className="relative z-10 mx-auto max-w-7xl">
            <SerifHeading
              center
              eyebrow="Choose Your Terminal"
              title="Pickup by"
              highlight="terminal"
              subtitle={`Exact meeting point, free waiting time and fixed fares for each ${city.name} terminal.`}
              className="mb-10"
            />
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {terminals.map((t) => (
                <Link
                  key={t.href}
                  href={t.href}
                  className="group relative overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.02] transition-all duration-500 hover:-translate-y-1.5 hover:border-[color:var(--air-accent)]/40 hover:shadow-[0_30px_80px_-30px_var(--air-glow)]"
                >
                  <div className="relative h-44 w-full overflow-hidden">
                    <Image src={t.img} alt={t.name} fill sizes="(max-width:640px) 100vw, 33vw" className="object-cover transition-transform duration-700 group-hover:scale-[1.06]" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--air-deep)] via-[var(--air-deep)]/40 to-transparent" />
                    <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                         style={{ background: 'radial-gradient(120% 80% at 50% 100%, var(--air-glow), transparent 65%)' }} />
                    <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-xl border border-[color:var(--air-accent)]/35 bg-black/55 px-3 py-1.5 font-mono text-sm font-black text-[color:var(--air-accent)] backdrop-blur-sm">
                      <Plane className="h-3.5 w-3.5" /> {t.code}
                    </span>
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-white group-hover:text-[color:var(--air-accent)]">{t.name}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-slate-400">{t.desc}</p>
                    <span className="mt-3 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-[color:var(--air-accent)]">
                      View fares <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
            {['delhi', 'jewar', 'hindon'].includes(citySlug) && (
              <p className="mt-8 text-center text-sm text-slate-400">
                Delhi NCR has three airports.{' '}
                <Link href="/delhi-ncr-airports-guide" className="font-semibold text-[color:var(--air-accent)] underline-offset-4 hover:underline">
                  Compare IGI, Jewar and Hindon
                </Link>{' '}
                to see which is closest to you.
              </p>
            )}
          </div>
        </section>
      )}

      {/* ══ POPULAR DESTINATIONS — stacked cards on mobile, true table md+ ══ */}
      {Array.isArray(city.popularDestinations) && city.popularDestinations.length > 0 && (
        <section className="relative overflow-hidden px-4 py-16 md:py-24">
          <AirportBackdrop variant="grid" />
          <div className="relative z-10 mx-auto max-w-5xl">
            <SerifHeading
              center
              eyebrow={`Departures from ${city.airportCode}`}
              title="How far are popular drop"
              highlight="points?"
              className="mb-10"
            />

            {/* Mobile: one glass card per destination — no sideways scrolling */}
            <div className="space-y-3 md:hidden">
              {city.popularDestinations.map((d, i) => (
                <div key={`dest-card-${i}`} className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-4 backdrop-blur-xl">
                  <p className="flex items-center gap-2 text-sm font-bold text-white">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-amber-400/15">
                      <MapPin className="h-4 w-4 text-[color:var(--air-accent)]" />
                    </span>
                    {d.name}
                  </p>
                  <dl className="mt-3 space-y-1.5">
                    <div className="flex items-baseline justify-between gap-3">
                      <dt className="text-[11px] font-bold uppercase tracking-wider text-slate-500">Distance</dt>
                      <dd className="text-right font-mono text-sm text-slate-300">{d.distance}</dd>
                    </div>
                    <div className="flex items-baseline justify-between gap-3">
                      <dt className="text-[11px] font-bold uppercase tracking-wider text-slate-500">Drive time</dt>
                      <dd className="text-right font-mono text-sm text-slate-300">{d.time}</dd>
                    </div>
                  </dl>
                  <a href={wa(`Hi, I need an airport taxi from ${city.airport} to ${d.name}. Please share the fare.`)} target="_blank" rel="noopener noreferrer"
                    onClick={() => trackWhatsAppClick('city_airport_dest')}
                    className="mt-3 block rounded-lg border border-[color:var(--air-accent)]/30 bg-[color:var(--air-accent)]/[0.1] px-3 py-2 text-center text-xs font-semibold text-[color:var(--air-accent)] transition-colors hover:bg-[color:var(--air-accent)]/20">
                    Book this drop
                  </a>
                </div>
              ))}
            </div>

            {/* Desktop: true semantic table, fits its container */}
            <div className="hidden overflow-hidden rounded-2xl border border-[color:var(--air-accent)]/15 bg-black/30 backdrop-blur-xl md:block">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-[color:var(--air-accent)]/15 bg-[color:var(--air-accent)]/[0.08]">
                    <th scope="col" className="px-6 py-3.5 text-[10px] font-bold uppercase tracking-[0.2em] text-[color:var(--air-accent)]">Destination</th>
                    <th scope="col" className="px-4 py-3.5 text-[10px] font-bold uppercase tracking-[0.2em] text-[color:var(--air-accent)]">Distance</th>
                    <th scope="col" className="px-4 py-3.5 text-[10px] font-bold uppercase tracking-[0.2em] text-[color:var(--air-accent)]">Drive Time</th>
                    <th scope="col" className="px-6 py-3.5 text-right text-[10px] font-bold uppercase tracking-[0.2em] text-[color:var(--air-accent)]">Book</th>
                  </tr>
                </thead>
                <tbody>
                  {city.popularDestinations.map((d, i) => (
                    <tr key={i} className="border-b border-white/[0.04] transition-colors hover:bg-[color:var(--air-accent)]/[0.04]">
                      <th scope="row" className="px-6 py-4 text-left">
                        <span className="flex items-center gap-2 text-sm font-semibold text-white">
                          <MapPin className="h-4 w-4 shrink-0 text-[color:var(--air-accent)]" /> {d.name}
                        </span>
                      </th>
                      <td className="px-4 py-4 font-mono text-sm text-slate-300">{d.distance}</td>
                      <td className="px-4 py-4 font-mono text-sm text-slate-400">{d.time}</td>
                      <td className="px-6 py-4 text-right">
                        <a href={wa(`Hi, I need an airport taxi from ${city.airport} to ${d.name}. Please share the fare.`)} target="_blank" rel="noopener noreferrer"
                          onClick={() => trackWhatsAppClick('city_airport_dest')}
                          className="inline-block rounded-lg border border-[color:var(--air-accent)]/30 bg-[color:var(--air-accent)]/[0.1] px-3 py-1.5 text-xs font-semibold text-[color:var(--air-accent)] transition-colors hover:bg-[color:var(--air-accent)]/20">
                          Book
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}

      {/* ══ FLEET ══ */}
      <section className="relative px-4 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <SerifHeading
            center
            eyebrow="Cabin Class"
            title="Which is your"
            highlight="ride?"
            subtitle={`${city.name} airport transfers — all-inclusive per-km pricing.`}
            className="mb-12"
          />
          <div className="grid gap-6 md:grid-cols-3">
            {FLEET.map((v) => (
              <div key={v.name} className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-gradient-to-b from-white/[0.05] to-white/[0.02] transition-all duration-300 hover:-translate-y-1.5 hover:border-[color:var(--air-accent)]/40">
                <div className="relative h-36 w-full overflow-hidden">
                  <Image src={v.img} alt={`${v.name} for ${city.name} airport transfer`} fill sizes="(max-width:768px) 100vw, 33vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--air-deep)] via-transparent to-transparent" />
                </div>
                <div className="flex items-center justify-between border-b border-dashed border-white/10 px-5 py-4">
                  <div className="flex items-center gap-2"><Car className="h-5 w-5 text-[color:var(--air-accent)]" /><span className="font-bold text-white">{v.name}</span></div>
                  {v.tag && <span className="rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase text-black" style={{ background: 'linear-gradient(135deg, var(--air-accent), var(--air-accent2))' }}>{v.tag}</span>}
                </div>
                <div className="relative">
                  <span className="absolute -left-2 top-0 h-4 w-4 -translate-y-1/2 rounded-full" style={{ backgroundColor: 'var(--air-deep)' }} />
                  <span className="absolute -right-2 top-0 h-4 w-4 -translate-y-1/2 rounded-full" style={{ backgroundColor: 'var(--air-deep)' }} />
                </div>
                <div className="px-5 py-5">
                  <p className="text-sm text-slate-400">{v.cars}</p>
                  <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
                    <div><div className="text-[10px] uppercase tracking-widest text-slate-500">Seats</div><div className="font-mono font-bold text-white">{v.seats}</div></div>
                    <div><div className="text-[10px] uppercase tracking-widest text-slate-500">Bags</div><div className="font-mono font-bold text-white">{v.bags}</div></div>
                  </div>
                  <div className="mt-5 flex items-end justify-between">
                    <div><div className="text-[10px] uppercase tracking-widest text-slate-500">From</div><div className="font-mono text-2xl font-black text-[color:var(--air-accent)]">{v.rate}</div></div>
                    <Barcode />
                  </div>
                  <a href={wa(`Hi, I want to book a ${v.name} from ${city.airport}. Please confirm.`)} target="_blank" rel="noopener noreferrer"
                    onClick={() => trackWhatsAppClick(`city_airport_fleet_${v.name.toLowerCase()}`)}
                    className="mt-5 block rounded-xl border border-[color:var(--air-accent)]/30 bg-[color:var(--air-accent)]/[0.1] py-2.5 text-center text-sm font-semibold text-[color:var(--air-accent)] transition-colors hover:bg-[color:var(--air-accent)]/20">
                    Book {v.name}
                  </a>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 flex justify-center">
            <TrustSeal />
          </div>
        </div>
      </section>

      {/* ══ WHAT'S INCLUDED — warm-light band ══ */}
      <section className="relative bg-gradient-to-b from-[#FFF6DC] via-amber-50/70 to-white px-4 py-16 text-slate-900 md:py-24">
        <div className="mx-auto max-w-6xl">
          <SerifHeading
            tone="light"
            center
            eyebrow="Every Ride Includes"
            title="What does your transfer"
            highlight="include?"
            className="mb-12"
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {INCLUDES.map((it) => (
              <div key={it.t} className="flex items-center gap-4 rounded-2xl border border-amber-200/60 bg-white p-5 shadow-[0_16px_50px_-34px_rgba(15,23,42,0.3)] transition-all hover:-translate-y-0.5 hover:border-amber-300 hover:shadow-lg">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-amber-400/15">
                  <it.icon className="h-5 w-5 text-amber-600" />
                </div>
                <span className="font-medium text-slate-700">{it.t}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ NEARBY ATTRACTIONS ══ */}
      {Array.isArray(city.nearbyAttractions) && city.nearbyAttractions.length > 0 && (
        <section className="relative overflow-hidden px-4 py-16 md:py-24">
          <AirportBackdrop variant="grid" />
          <div className="relative z-10 mx-auto max-w-6xl">
            <SerifHeading
              center
              eyebrow="After You Land"
              title="Explore"
              highlight={city.name}
              className="mb-10"
            />
            <div className="flex flex-wrap justify-center gap-3">
              {city.nearbyAttractions.map((a) => (
                <span key={a} className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-5 py-2.5 text-sm font-medium text-slate-200 transition-colors hover:border-[color:var(--air-accent)]/30">
                  <Camera className="h-4 w-4 text-[color:var(--air-accent)]" /> {a}
                </span>
              ))}
            </div>
          </div>
        </section>
      )}

      <DataTable tone="dark" title={`Which vehicle can you book in ${city.name}?`} columns={[{key:'name',label:'Vehicle'},{key:'cars',label:'Models'},{key:'seats',label:'Seats'},{key:'bags',label:'Bags'},{key:'rate',label:'Rate'}]} rows={FLEET} footnote="Per-kilometre rates do not determine the fixed airport-transfer fare. Confirm your complete quote." />
      <DataTable tone="dark" title={`Where do you meet the driver at ${city.airport}?`} columns={[{key:'terminalCode',label:'Terminal'},{key:'terminalType',label:'Traffic'},{key:'meetingPoint',label:'Meeting point'},{key:'waitInfo',label:'Published waiting policy'}]} rows={terminalRows} />
      <DataTable tone="dark" title={`Where can you drive from ${city.name}?`} columns={[{key:'label',label:'City corridor'},{key:'distance',label:'Distance'},{key:'duration',label:'Drive time'},{key:'guide',label:'Road guide'}]} rows={corridorRows.map(r => ({...r, guide:<Link href={r.href} className="underline">{r.label} road guide</Link>}))} footnote="City-to-city reference distances; airport approaches may differ." />
      {citySlug !== 'ahmedabad' && <DestinationPhotos city={city.name} />}
      {/* ══ POPULAR ROUTES FROM CITY ══ */}
      {Array.isArray(city.routes) && city.routes.length > 0 && (
        <section className="relative px-4 py-16 md:py-24">
          <div className="mx-auto max-w-6xl">
            <SerifHeading
              center
              eyebrow="Onward Journeys"
              title="Outstation from"
              highlight={city.name}
              className="mb-10"
            />
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {onwardLinks.map((route) => {
                const r = route.label;
                const href = route.href;
                return (
                  <Link key={r} href={href}
                    aria-label={href.startsWith('#') ? `Request a quote for ${r}` : r}
                    onClick={href.startsWith('#') ? () => setRequestedTransfer(route) : undefined}
                    className="group flex items-center justify-between rounded-2xl border border-white/[0.07] bg-white/[0.03] px-6 py-5 transition-all duration-300 hover:-translate-y-1 hover:border-[color:var(--air-accent)]/30">
                    <span className="flex items-center gap-3 font-semibold text-white">
                      <Navigation className="h-5 w-5 text-[color:var(--air-accent)]" /> {r}
                    </span>
                    <ArrowRight className="h-5 w-5 text-[color:var(--air-accent)] transition-transform group-hover:translate-x-1.5" />
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* ══ CITY TOURS ══ */}
      {cityTours.length > 0 && (
        <section className="relative px-4 py-16 md:py-24">
          <div className="mx-auto max-w-6xl">
            <SerifHeading
              center
              eyebrow="Land & Explore"
              title={`${city.name} sightseeing`}
              highlight="tours"
              className="mb-10"
            />
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {cityTours.map((t) => (
                <Link key={t.slug} href={`/sightseeing/${t.slug}`}
                  className="group rounded-2xl border border-white/[0.07] bg-white/[0.03] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[color:var(--air-accent)]/30">
                  <div className="flex items-center gap-2 text-[color:var(--air-accent)]"><Star className="h-4 w-4 fill-current" /><span className="text-xs font-bold uppercase tracking-wide">Guided Tour</span></div>
                  <h3 className="mt-3 font-bold text-white group-hover:text-[color:var(--air-accent)]">{t.title || t.name}</h3>
                  {t.duration && <p className="mt-1 text-sm text-slate-400">{t.duration}</p>}
                  <div className="mt-4 flex items-center gap-1 text-sm font-semibold text-[color:var(--air-accent)]">View tour <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ══ HOW IT WORKS — warm-light band ══ */}
      <section className="relative bg-gradient-to-b from-white via-amber-50/60 to-[#FFF6DC] px-4 py-16 text-slate-900 md:py-24">
        <div className="mx-auto max-w-5xl">
          <SerifHeading
            tone="light"
            center
            eyebrow="3 Steps to Touchdown"
            title={`How ${city.name} pickup`}
            highlight="works?"
            className="mb-12"
          />
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { n: '01', t: 'Share your flight', d: `Send your flight number & drop address for ${city.airport}. Call or WhatsApp, 24/7.` },
              { n: '02', t: 'We track it live', d: 'Driver is dispatched on your real landing time — delays cost you nothing.' },
              { n: '03', t: 'Meet at the gate', d: 'Spot your name on the placard, hand over the bags, ride away in a clean AC cab.' },
            ].map((s) => (
              <div key={s.n} className="relative overflow-hidden rounded-2xl border border-amber-200/60 bg-white p-7 shadow-[0_16px_50px_-32px_rgba(15,23,42,0.3)]">
                <div className="absolute right-5 top-3 font-mono text-6xl font-black text-amber-400/20">{s.n}</div>
                <div className="relative z-10"><h3 className="text-xl font-bold text-slate-900">{s.t}</h3><p className="mt-2 text-sm leading-relaxed text-slate-600">{s.d}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ FAQ — warm-light band, 2-up on md+ ══ */}
      <section className="relative bg-gradient-to-b from-[#FFF6DC] via-amber-50/60 to-white px-4 py-16 text-slate-900 md:py-24">
        <div className="mx-auto max-w-5xl">
          <SerifHeading
            tone="light"
            center
            eyebrow="Traveller Help"
            title={`${city.name} airport`}
            highlight="questions?"
            className="mb-10"
          />
          <div className="grid items-start gap-3 md:grid-cols-2 md:gap-4">
            {faqs.map((faq, i) => (
              <div key={i} className="overflow-hidden rounded-2xl border border-amber-200/60 bg-white shadow-[0_16px_50px_-34px_rgba(15,23,42,0.3)]">
                <h3 className="m-0">
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} aria-expanded={openFaq === i}
                  className="flex w-full items-center justify-between gap-4 p-5 text-left">
                  <span className="font-semibold text-slate-900">{faq.question}</span>
                  <ChevronDown className={`h-5 w-5 shrink-0 text-amber-500 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
                </button>
                </h3>
                <div hidden={openFaq !== i} className="faq-answer border-t border-amber-100 px-5 pb-5 pt-4 leading-relaxed text-slate-600">{faq.answer}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ FINAL CTA ══ */}
      <section className="relative overflow-hidden px-4 py-20 md:py-24">
        <AirportBackdrop variant="full" />
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <FlightStatusPill label="Now Boarding" className="mx-auto" />
          <h2 className="mt-6 font-display-serif text-balance text-4xl font-black leading-tight text-white md:text-6xl">
            Book your <span className={FOIL}>{city.name} airport cab</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-slate-300">Fixed fare from ₹11/km · flight tracking · meet &amp; greet · 24/7.</p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href={`tel:${PHONE}`} onClick={() => trackPhoneCall('city_airport_cta')}
              className={`${GOLD_BTN} w-full px-9 py-4 text-base sm:w-auto lg:py-2`}>
              <Phone className="h-5 w-5" /> Call +91 7668570551
            </a>
            <a href={wa(heroWa)} target="_blank" rel="noopener noreferrer" onClick={() => trackWhatsAppClick('city_airport_cta')}
              className={`${GHOST_BTN} w-full px-9 py-4 text-base sm:w-auto lg:py-2`}>
              <WhatsAppIcon className="h-5 w-5 text-emerald-400" /> WhatsApp Booking
            </a>
          </div>
        </div>
      </section>
    </AirportShell>
  );
}
