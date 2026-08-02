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
  AirportShell, AirportBackdrop, AirportCrumb, FlightStatusPill, SectionKicker,
  TerminalBadge, RouteArc, BoardRow, Barcode, getAccent, HeroPhoto,
} from '@/components/airport/AirportKit';
import { getCityImage } from '@/utilis/imageUtils';

const PHONE = '+917668570551';
const wa = (text) => `https://wa.me/917668570551?text=${encodeURIComponent(text)}`;
const routeSlug = (a, b) => `/${a.toLowerCase().replace(/\s+/g, '-')}-to-${b.toLowerCase().replace(/\s+/g, '-')}`;

const FLEET = [
  { name: 'Sedan', cars: 'Dzire · Etios', seats: '1–4', bags: '2–3', mult: 1, tag: null, img: '/images/car/swift_dzire.jpg' },
  { name: 'SUV', cars: 'Innova · Ertiga', seats: '1–6', bags: '4', mult: 1.4, tag: 'Most Booked', img: '/images/car/innova_crysta.jpg' },
  { name: 'Tempo', cars: '12–16 Seater', seats: '7–16', bags: '12+', mult: 2.2, tag: null, img: '/images/tempo/16_seater.jpg' },
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

      {/* ══ HERO ══ */}
      <section className="relative overflow-hidden px-4 pt-24 pb-16 md:pb-24">
        <HeroPhoto src={getCityImage(city.name)} />
        <AirportBackdrop variant="full" />
        <div className="relative z-10 mx-auto max-w-7xl">
          <AirportCrumb trail={[
            { label: 'Home', href: '/' },
            { label: 'Airport Service', href: '/airport-service' },
            { label: `${city.name} Airport` },
          ]} />

          <div className="grid items-start gap-10 lg:grid-cols-5">
            <div className="lg:col-span-3">
              <div className="flex flex-wrap items-center gap-3">
                <TerminalBadge code={city.airportCode} sub="IATA" accentName={(city.terminals || '').replace(/[^0-9]/g, '') ? `${(city.terminals || '').replace(/[^0-9]/g, '')} TERM` : 'TERM'} />
                <FlightStatusPill label="24/7 Pickup" />
              </div>

              <h1 className="mt-7 text-3xl font-black leading-[1.12] tracking-tight sm:text-5xl md:text-7xl">
                <span className="block text-white">{city.name}</span>
                <span className="block bg-gradient-to-r from-[var(--air-accent)] via-[var(--air-accent2)] to-[var(--air-accent)] bg-clip-text text-transparent">
                  Airport Taxi
                </span>
              </h1>
              <p className="mt-2 font-mono text-sm tracking-wide text-slate-400">{city.airport}</p>

              <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-300">{city.description}</p>

              {/* quick facts */}
              <div className="mt-7 flex flex-wrap gap-3">
                {[
                  { icon: MapPin, l: 'From airport', v: city.distance },
                  { icon: Plane, l: 'Terminals', v: city.terminals },
                  { icon: Car, l: 'Starts at', v: '₹11/km' },
                ].map((s) => (
                  <div key={s.l} className="flex items-center gap-3 rounded-2xl border border-white/[0.08] bg-white/[0.03] px-5 py-3 backdrop-blur-xl">
                    <s.icon className="h-5 w-5 text-[color:var(--air-accent)]" />
                    <div>
                      <div className="text-[10px] uppercase tracking-widest text-slate-500">{s.l}</div>
                      <div className="text-sm font-bold text-white">{s.v}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href={`tel:${PHONE}`} onClick={() => trackPhoneCall('city_airport_hero')}
                  className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-2xl px-7 py-4 text-lg font-bold text-black transition-transform hover:scale-[1.02]"
                  style={{ background: 'linear-gradient(135deg, var(--air-accent), var(--air-accent2))', boxShadow: '0 12px 36px var(--air-glow)' }}>
                  <Phone className="h-5 w-5" /> Call +91 7668570551
                </a>
                <a href={wa(heroWa)} target="_blank" rel="noopener noreferrer" onClick={() => trackWhatsAppClick('city_airport_hero')}
                  className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/[0.04] px-7 py-4 text-lg font-bold text-white backdrop-blur-xl transition-colors hover:border-[color:var(--air-accent)]/40 hover:bg-white/[0.08]">
                  <WhatsAppIcon className="h-5 w-5 text-emerald-400" /> WhatsApp
                </a>
              </div>

              <RouteArc from={city.airportCode} to={city.name.toUpperCase()} className="mt-10 max-w-md" />
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

      {/* ══ POPULAR DESTINATIONS — departure board ══ */}
      {Array.isArray(city.popularDestinations) && city.popularDestinations.length > 0 && (
        <section className="relative overflow-hidden px-4 py-16">
          <AirportBackdrop variant="grid" />
          <div className="relative z-10 mx-auto max-w-5xl">
            <div className="mb-10 text-center">
              <SectionKicker center>Departures from {city.airportCode}</SectionKicker>
              <h2 className="mt-4 text-3xl font-black text-white md:text-5xl">Popular drop points</h2>
            </div>
            <div className="overflow-x-auto rounded-2xl border border-[color:var(--air-accent)]/15 bg-black/30 backdrop-blur-xl">
              <div className="min-w-[560px]">
              <BoardRow head cols={[
                { v: 'Destination', w: '2fr' }, { v: 'Distance', w: '1fr' }, { v: 'Drive Time', w: '1fr' }, { v: '', w: '0.7fr', right: true },
              ]} />
              {city.popularDestinations.map((d, i) => (
                <div key={i} className="grid items-center gap-3 border-b border-white/[0.04] px-4 py-4 transition-colors hover:bg-[color:var(--air-accent)]/[0.04] sm:px-6"
                  style={{ gridTemplateColumns: '2fr 1fr 1fr 0.7fr' }}>
                  <span className="flex items-center gap-2 text-sm font-semibold text-white">
                    <MapPin className="h-4 w-4 shrink-0 text-[color:var(--air-accent)]" /> {d.name}
                  </span>
                  <span className="font-mono text-sm text-slate-300">{d.distance}</span>
                  <span className="font-mono text-sm text-slate-400">{d.time}</span>
                  <a href={wa(`Hi, I need an airport taxi from ${city.airport} to ${d.name}. Please share the fare.`)} target="_blank" rel="noopener noreferrer"
                    onClick={() => trackWhatsAppClick('city_airport_dest')}
                    className="justify-self-end rounded-lg border border-[color:var(--air-accent)]/30 bg-[color:var(--air-accent)]/[0.1] px-3 py-1.5 text-xs font-semibold text-[color:var(--air-accent)] transition-colors hover:bg-[color:var(--air-accent)]/20">
                    Book
                  </a>
                </div>
              ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ══ FLEET ══ */}
      <section className="relative px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <SectionKicker center>Cabin Class</SectionKicker>
            <h2 className="mt-4 text-3xl font-black text-white md:text-5xl">Choose your ride</h2>
            <p className="mt-3 text-slate-400">{city.name} airport transfers — all-inclusive per-km pricing.</p>
          </div>
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
                    <div><div className="text-[10px] uppercase tracking-widest text-slate-500">From</div><div className="font-mono text-2xl font-black text-[color:var(--air-accent)]">₹{Math.round(base * v.mult)}/km</div></div>
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
        </div>
      </section>

      {/* ══ WHAT'S INCLUDED ══ */}
      <section className="relative px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <SectionKicker center>Every Ride Includes</SectionKicker>
            <h2 className="mt-4 text-3xl font-black text-white md:text-5xl">No surprises, ever</h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {INCLUDES.map((it) => (
              <div key={it.t} className="flex items-center gap-4 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5 transition-colors hover:border-[color:var(--air-accent)]/25">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[color:var(--air-accent)]/20 bg-[color:var(--air-accent)]/[0.1]">
                  <it.icon className="h-5 w-5 text-[color:var(--air-accent)]" />
                </div>
                <span className="font-medium text-slate-200">{it.t}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ NEARBY ATTRACTIONS ══ */}
      {Array.isArray(city.nearbyAttractions) && city.nearbyAttractions.length > 0 && (
        <section className="relative overflow-hidden px-4 py-16">
          <AirportBackdrop variant="grid" />
          <div className="relative z-10 mx-auto max-w-6xl">
            <div className="mb-10 text-center">
              <SectionKicker center>After You Land</SectionKicker>
              <h2 className="mt-4 text-3xl font-black text-white md:text-5xl">Explore {city.name}</h2>
            </div>
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
        <section className="relative px-4 py-16">
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 text-center">
              <SectionKicker center>Onward Journeys</SectionKicker>
              <h2 className="mt-4 text-3xl font-black text-white md:text-5xl">Outstation from {city.name}</h2>
            </div>
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
        <section className="relative px-4 py-16">
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 text-center">
              <SectionKicker center>Land &amp; Explore</SectionKicker>
              <h2 className="mt-4 text-3xl font-black text-white md:text-5xl">{city.name} sightseeing tours</h2>
            </div>
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

      {/* ══ HOW IT WORKS ══ */}
      <section className="relative overflow-hidden px-4 py-16">
        <AirportBackdrop variant="grid" />
        <div className="relative z-10 mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <SectionKicker center>3 Steps to Touchdown</SectionKicker>
            <h2 className="mt-4 text-3xl font-black text-white md:text-5xl">How {city.name} pickup works</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { n: '01', t: 'Share your flight', d: `Send your flight number & drop address for ${city.airport}. Call or WhatsApp, 24/7.` },
              { n: '02', t: 'We track it live', d: 'Driver is dispatched on your real landing time — delays cost you nothing.' },
              { n: '03', t: 'Meet at the gate', d: 'Spot your name on the placard, hand over the bags, ride away in a clean AC cab.' },
            ].map((s) => (
              <div key={s.n} className="relative overflow-hidden rounded-2xl border border-[color:var(--air-accent)]/12 bg-white/[0.03] p-7">
                <div className="absolute right-5 top-3 font-mono text-6xl font-black text-[color:var(--air-accent)]/10">{s.n}</div>
                <div className="relative z-10"><h3 className="text-xl font-bold text-white">{s.t}</h3><p className="mt-2 text-sm leading-relaxed text-slate-400">{s.d}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ FAQ ══ */}
      <section className="relative px-4 py-16">
        <div className="mx-auto max-w-3xl">
          <div className="mb-10 text-center">
            <SectionKicker center>Traveller Help</SectionKicker>
            <h2 className="mt-4 text-3xl font-black text-white md:text-5xl">{city.name} airport FAQs</h2>
          </div>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.02]">
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} aria-expanded={openFaq === i}
                  className="flex w-full items-center justify-between gap-4 p-5 text-left">
                  <span className="font-semibold text-white">{faq.question}</span>
                  <ChevronDown className={`h-5 w-5 shrink-0 text-[color:var(--air-accent)] transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === i && <div className="border-t border-white/[0.05] px-5 pb-5 pt-4 leading-relaxed text-slate-300">{faq.answer}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ FINAL CTA ══ */}
      <section className="relative overflow-hidden px-4 py-20">
        <AirportBackdrop variant="full" />
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <FlightStatusPill label="Now Boarding" className="mx-auto" />
          <h2 className="mt-6 text-4xl font-black leading-tight text-white md:text-6xl">
            Book your <span className="bg-gradient-to-r from-[var(--air-accent)] to-[var(--air-accent2)] bg-clip-text text-transparent">{city.name} airport cab</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-slate-300">Fixed fare from ₹11/km · flight tracking · meet &amp; greet · 24/7.</p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <a href={`tel:${PHONE}`} onClick={() => trackPhoneCall('city_airport_cta')}
              className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-2xl px-9 py-4 text-lg font-bold text-black transition-transform hover:scale-[1.02]"
              style={{ background: 'linear-gradient(135deg, var(--air-accent), var(--air-accent2))', boxShadow: '0 12px 36px var(--air-glow)' }}>
              <Phone className="h-5 w-5" /> Call +91 7668570551
            </a>
            <a href={wa(heroWa)} target="_blank" rel="noopener noreferrer" onClick={() => trackWhatsAppClick('city_airport_cta')}
              className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/[0.04] px-9 py-4 text-lg font-bold text-white backdrop-blur-xl transition-colors hover:border-[color:var(--air-accent)]/40">
              <WhatsAppIcon className="h-5 w-5 text-emerald-400" /> WhatsApp Booking
            </a>
          </div>
        </div>
      </section>
    </AirportShell>
  );
}
