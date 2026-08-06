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

const PHONE = '+917668570551';
const wa = (text) => `https://wa.me/917668570551?text=${encodeURIComponent(text)}`;
const routeSlug = (a, b) => `/${a.toLowerCase().replace(/\s+/g, '-')}-to-${b.toLowerCase().replace(/\s+/g, '-')}`;

// Canonical airport fleet-card rates: Sedan ₹11/km · SUV ₹15/km · Tempo ₹20/km.
const FLEET = [
  { name: 'Sedan', cars: 'Dzire · Etios', seats: '1–4', bags: '2–3', rate: '₹11/km', tag: null, img: '/images/car/swift_dzire.jpg' },
  { name: 'SUV', cars: 'Innova · Ertiga', seats: '1–6', bags: '4', rate: '₹15/km', tag: 'Most Booked', img: '/images/car/innova_crysta.jpg' },
  { name: 'Tempo', cars: '12–16 Seater', seats: '7–16', bags: '12+', rate: '₹20/km', tag: null, img: '/images/tempo/16_seater.jpg' },
];

const INCLUDES = [
  { icon: Navigation, t: 'Meet & greet at arrivals' },
  { icon: Plane, t: 'Real-time flight tracking' },
  { icon: Car, t: 'Clean, sanitised AC vehicle' },
  { icon: Luggage, t: 'Free luggage assistance' },
  { icon: Clock, t: 'Up to 60 min free waiting' },
  { icon: Shield, t: 'Fixed fare — no hidden charges' },
];

export default function CityAirportServiceClient({ city, citySlug, cityTours = [] }) {
  const [openFaq, setOpenFaq] = useState(0);
  const accent = getAccent(citySlug);
  const base = 11; // ₹/km

  const heroWa = `Hi Triveni Cabs, I need an airport taxi in ${city.name} (${city.airport}) with flight tracking. Please share availability and fare.`;
  const faqs = generateAirportFAQs({ city: city.name, airportName: city.airport, price: base, distance: (city.distance || '').replace(/[^0-9]/g, '') || '15' });

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
      <section className="relative overflow-hidden px-4 pt-24 pb-16 md:pb-24">
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
                <span className="block text-white">{city.name}</span>
                <span className={`block ${FOIL}`}>Airport Taxi</span>
              </h1>
              <p className="mt-2 font-mono text-sm tracking-wide text-slate-400">{city.airport}</p>

              <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-300">{city.description}</p>

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
                <QuickEnquiryForm toCity={city.name} pageType="airport_transfer" />
              </div>
            </div>
          </div>
        </div>
      </section>

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

      {/* ══ POPULAR DESTINATIONS — stacked cards on mobile, true table md+ ══ */}
      {Array.isArray(city.popularDestinations) && city.popularDestinations.length > 0 && (
        <section className="relative overflow-hidden px-4 py-16 md:py-24">
          <AirportBackdrop variant="grid" />
          <div className="relative z-10 mx-auto max-w-5xl">
            <SerifHeading
              center
              eyebrow={`Departures from ${city.airportCode}`}
              title="Popular drop"
              highlight="points"
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
            title="Choose your"
            highlight="ride"
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
            title="No surprises,"
            highlight="ever"
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
              {city.routes.map((r) => {
                const parts = r.split(' to ');
                const href = parts.length === 2 ? routeSlug(parts[0], parts[1]) : '#';
                return (
                  <Link key={r} href={href}
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
            highlight="works"
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
            highlight="FAQs"
            className="mb-10"
          />
          <div className="grid items-start gap-3 md:grid-cols-2 md:gap-4">
            {faqs.map((faq, i) => (
              <div key={i} className="overflow-hidden rounded-2xl border border-amber-200/60 bg-white shadow-[0_16px_50px_-34px_rgba(15,23,42,0.3)]">
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} aria-expanded={openFaq === i}
                  className="flex w-full items-center justify-between gap-4 p-5 text-left">
                  <span className="font-semibold text-slate-900">{faq.question}</span>
                  <ChevronDown className={`h-5 w-5 shrink-0 text-amber-500 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === i && <div className="border-t border-amber-100 px-5 pb-5 pt-4 leading-relaxed text-slate-600">{faq.answer}</div>}
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
