'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Plane, Clock, Shield, Users, MapPin, Car, ChevronRight, ChevronDown,
  CheckCircle2, Award, Star, Phone, Luggage, Navigation, Crown,
} from '@/components/ui/icons';
import { WhatsAppIcon } from '@/components/ui/icons';
import { trackWhatsAppClick, trackPhoneCall } from '@/utilis/analytics';
import { SetStickyCta } from '@/components/ui/StickyCtaContext';
import QuickEnquiryForm from '@/components/ui/QuickEnquiryForm';
import {
  AirportShell, AirportBackdrop, AirportCrumb, FlightStatusPill, SectionKicker,
  RouteArc, BoardRow, Barcode, getAccent, HeroPhoto,
} from '@/components/airport/AirportKit';
import { getCityImage } from '@/utilis/imageUtils';

const PHONE = '+917668570551';

const CITY_PORTS = [
  { slug: 'delhi', name: 'Delhi', airport: 'IGI International', code: 'DEL' },
  { slug: 'jaipur', name: 'Jaipur', airport: 'Jaipur International', code: 'JAI' },
  { slug: 'chandigarh', name: 'Chandigarh', airport: 'Chandigarh Int’l', code: 'IXC' },
  { slug: 'agra', name: 'Agra', airport: 'Kheria Airport', code: 'AGR' },
  { slug: 'shimla', name: 'Shimla', airport: 'Jubbarhatti', code: 'SLV' },
  { slug: 'manali', name: 'Manali', airport: 'Bhuntar', code: 'KUU' },
  { slug: 'amritsar', name: 'Amritsar', airport: 'Sri Guru Ram Dass', code: 'ATQ' },
  { slug: 'dehradun', name: 'Dehradun', airport: 'Jolly Grant', code: 'DED' },
  { slug: 'haridwar', name: 'Haridwar', airport: 'via Jolly Grant', code: 'DED' },
  { slug: 'rishikesh', name: 'Rishikesh', airport: 'via Jolly Grant', code: 'DED' },
  { slug: 'udaipur', name: 'Udaipur', airport: 'Maharana Pratap', code: 'UDR' },
  { slug: 'ayodhya', name: 'Ayodhya', airport: 'via Lucknow', code: 'LKO' },
];

const FEATURES = [
  { icon: Plane, title: 'Live Flight Tracking', desc: 'We watch your flight in real time — early or delayed, your driver is already there.' },
  { icon: Clock, title: '24 / 7 Arrivals Desk', desc: 'Red-eye landing or 4 AM departure, a verified cab is dispatched round the clock.' },
  { icon: Shield, title: 'Meet & Greet', desc: 'Driver waits at the arrivals gate with a name placard and helps with your bags.' },
  { icon: Award, title: 'Fixed Fare, No Surge', desc: 'The price you see is the price you pay — midnight, monsoon or peak hour.' },
  { icon: Luggage, title: 'Free Waiting', desc: 'Up to 60 min free wait on international and 30 min on domestic arrivals.' },
  { icon: Users, title: 'Every Group Size', desc: 'Sedans for solos, SUVs for families, tempo travellers for the whole crew.' },
];

const FLEET = [
  { name: 'Sedan', cars: 'Dzire · Etios · Ciaz', seats: '1–4', bags: '2–3', rate: '₹11/km', tag: null, img: '/images/car/swift_dzire.jpg' },
  { name: 'SUV', cars: 'Innova · Ertiga', seats: '1–6', bags: '4', rate: '₹15/km', tag: 'Most Booked', img: '/images/car/innova_crysta.jpg' },
  { name: 'Tempo Traveller', cars: '12–26 Seater', seats: '7–26', bags: '12+', rate: '₹20/km', tag: null, img: '/images/tempo/16_seater.jpg' },
  { name: 'Luxury', cars: 'Audi · BMW · Benz', seats: '1–4', bags: '3', rate: 'On Ask', tag: 'VIP', img: '/images/car/premium_suv.jpg' },
];

const SERVICES = [
  { icon: Plane, title: 'Airport Pickup', desc: 'Meet & greet at arrivals with flight tracking.', img: '/images/airport_section.jpg' },
  { icon: MapPin, title: 'Airport Drop', desc: 'On-time departures so you never miss a gate.', img: '/images/sightseeing/Delhi/Delhi_hero_section.jpg' },
  { icon: Navigation, title: 'Round Trips', desc: 'Pickup + return on one transparent booking.', img: '/images/citypage_hero_section_image.jpg' },
  { icon: Crown, title: 'Corporate Transfers', desc: 'Executive cars for business arrivals.', img: '/images/car/premium_suv.jpg' },
  { icon: Users, title: 'Group Transfers', desc: 'Tempo travellers & buses for large parties.', img: '/images/tempo/16_seater.jpg' },
  { icon: Clock, title: 'Red-Eye Runs', desc: 'Early-morning & late-night flights covered.', img: '/images/airport_section.jpg' },
];

const wa = (text) => `https://wa.me/917668570551?text=${encodeURIComponent(text)}`;

export default function AirportServiceClient({ faqData }) {
  const [openFaq, setOpenFaq] = useState(0);
  const heroWa = 'Hi Triveni Cabs, I need an airport taxi with flight tracking & meet-and-greet. Please share availability and fare.';

  return (
    <AirportShell accent={getAccent('default')}>
      <SetStickyCta price="From ₹11/km" label="Airport Taxi Service"
        whatsappText={heroWa} />

      {/* ══ HERO ══ */}
      <section className="relative overflow-hidden px-4 pt-24 pb-16 md:pb-24">
        <HeroPhoto src="/images/airport_section.jpg" />
        <AirportBackdrop variant="full" />
        <div className="relative z-10 mx-auto max-w-7xl">
          <AirportCrumb trail={[{ label: 'Home', href: '/' }, { label: 'Airport Service' }]} />

          <div className="grid items-start gap-10 lg:grid-cols-5">
            <div className="lg:col-span-3">
              <FlightStatusPill label="24/7 · Arrivals Live" />
              <h1 className="mt-6 text-3xl font-black leading-[1.12] tracking-tight sm:text-5xl md:text-7xl">
                <span className="block text-white">Airport Taxi,</span>
                <span className="block bg-gradient-to-r from-[var(--air-accent)] via-[var(--air-accent2)] to-[var(--air-accent)] bg-clip-text text-transparent">
                  arrivals hall to anywhere
                </span>
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-300">
                India’s most trusted airport transfer — <strong className="text-white">live flight tracking</strong>,
                a driver waiting with your name, and a <strong className="text-white">fixed fare with zero surge</strong>.
                Serving Delhi IGI, Jaipur, Chandigarh, Noida Jewar &amp; 50+ cities.
              </p>

              {/* trust ribbon */}
              <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-slate-400">
                <span className="flex items-center gap-1.5"><Star className="h-4 w-4 fill-[var(--air-accent)] text-[color:var(--air-accent)]" /> 4.9★ Google Rated</span>
                <span className="flex items-center gap-1.5"><Users className="h-4 w-4 text-[color:var(--air-accent)]" /> 10,000+ Transfers</span>
                <span className="flex items-center gap-1.5"><Shield className="h-4 w-4 text-[color:var(--air-accent)]" /> Verified Drivers</span>
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href={`tel:${PHONE}`} onClick={() => trackPhoneCall('airport_hub_hero')}
                  className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-2xl px-7 py-4 text-lg font-bold text-black transition-transform hover:scale-[1.02]"
                  style={{ background: 'linear-gradient(135deg, var(--air-accent), var(--air-accent2))', boxShadow: '0 12px 36px var(--air-glow)' }}>
                  <Phone className="h-5 w-5" /> Call +91 7668570551
                </a>
                <a href={wa(heroWa)} target="_blank" rel="noopener noreferrer" onClick={() => trackWhatsAppClick('airport_hub_hero')}
                  className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/[0.04] px-7 py-4 text-lg font-bold text-white backdrop-blur-xl transition-colors hover:border-[color:var(--air-accent)]/40 hover:bg-white/[0.08]">
                  <WhatsAppIcon className="h-5 w-5 text-emerald-400" /> WhatsApp Us
                </a>
              </div>

              <RouteArc from="ANY AIRPORT" to="YOUR DOOR" className="mt-10 max-w-md" />
            </div>

            {/* enquiry */}
            <div className="lg:col-span-2">
              <div className="rounded-3xl border border-[color:var(--air-accent)]/20 bg-white/[0.04] p-1.5 backdrop-blur-xl">
                <div className="mb-1 flex items-center justify-between px-4 pt-3">
                  <span className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-[color:var(--air-accent)]">Booking Desk</span>
                  <FlightStatusPill label="Open" />
                </div>
                <QuickEnquiryForm pageType="airport_transfer" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ LIVE STATS BOARD ══ */}
      <section className="relative px-4 py-10">
        <div className="mx-auto max-w-7xl">
          <div className="overflow-hidden rounded-2xl border border-white/[0.06] bg-black/30 backdrop-blur-xl">
            <div className="grid grid-cols-2 divide-x divide-white/[0.05] sm:grid-cols-4">
              {[
                { v: '10,000+', l: 'Airport Transfers' },
                { v: '24/7', l: 'Live Dispatch' },
                { v: '50+', l: 'Cities Served' },
                { v: '4.9★', l: 'Traveller Rating' },
              ].map((s, i) => (
                <div key={i} className="px-4 py-6 text-center">
                  <div className="font-mono text-2xl font-black text-[color:var(--air-accent)] sm:text-4xl">{s.v}</div>
                  <div className="mt-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ WHY US ══ */}
      <section className="relative px-4 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <SectionKicker center>Why Triveni at the Terminal</SectionKicker>
            <h2 className="mt-4 text-3xl font-black text-white md:text-5xl">A pickup that just works</h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((f) => (
              <div key={f.title} className="group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[color:var(--air-accent)]/30">
                <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full opacity-0 blur-2xl transition-opacity group-hover:opacity-100" style={{ background: 'var(--air-glow)' }} />
                <div className="relative flex h-12 w-12 items-center justify-center rounded-xl border border-[color:var(--air-accent)]/20 bg-[color:var(--air-accent)]/[0.1]">
                  <f.icon className="h-6 w-6 text-[color:var(--air-accent)]" />
                </div>
                <h3 className="relative mt-5 text-xl font-bold text-white">{f.title}</h3>
                <p className="relative mt-2 leading-relaxed text-slate-400">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ AIRPORTS BY CITY — each card its own accent ══ */}
      <section className="relative overflow-hidden px-4 py-16">
        <AirportBackdrop variant="grid" />
        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <SectionKicker center>Departure Board</SectionKicker>
            <h2 className="mt-4 text-3xl font-black text-white md:text-5xl">Choose your airport</h2>
            <p className="mx-auto mt-3 max-w-2xl text-slate-400">Tap a city for terminal-wise pickup points, fares and flight tracking.</p>
          </div>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {CITY_PORTS.map((c) => {
              const a = getAccent(c.slug);
              return (
                <Link key={c.slug} href={`/airport-service/${c.slug}`}
                  style={{ '--air-accent': a.accent, '--air-accent2': a.accent2, '--air-glow': a.glow }}
                  className="group relative overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.03] transition-all duration-300 hover:-translate-y-1.5 hover:border-[color:var(--air-accent)]/40">
                  {/* city photo */}
                  <div className="relative h-28 w-full overflow-hidden">
                    <Image src={getCityImage(c.name)} alt={`${c.name} airport taxi`} fill sizes="(max-width:768px) 50vw, 25vw" className="object-cover transition-transform duration-500 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--air-deep)] via-[var(--air-deep)]/30 to-transparent" />
                    <div className="absolute inset-x-0 top-0 h-1" style={{ background: 'linear-gradient(90deg, var(--air-accent), var(--air-accent2))' }} />
                    <div className="absolute right-3 top-3 flex items-center gap-1.5 rounded-full bg-black/45 px-2 py-1 backdrop-blur-sm">
                      <Plane className="h-3.5 w-3.5 text-[color:var(--air-accent)]" />
                      <span className="font-mono text-[11px] font-bold tracking-widest text-white">{c.code}</span>
                    </div>
                  </div>
                  {/* content */}
                  <div className="p-4">
                    <h3 className="text-lg font-bold text-white">{c.name}</h3>
                    <p className="mt-0.5 text-xs text-slate-400">{c.airport}</p>
                    <div className="mt-3 flex items-center gap-1 text-xs font-semibold text-[color:var(--air-accent)]">
                      View pickup <ChevronRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══ FLEET — boarding-pass cards ══ */}
      <section className="relative px-4 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <SectionKicker center>The Fleet</SectionKicker>
            <h2 className="mt-4 text-3xl font-black text-white md:text-5xl">Pick your cabin class</h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {FLEET.map((v) => (
              <div key={v.name} className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-gradient-to-b from-white/[0.05] to-white/[0.02] transition-all duration-300 hover:-translate-y-1.5 hover:border-[color:var(--air-accent)]/40">
                {/* vehicle photo */}
                <div className="relative h-36 w-full overflow-hidden">
                  <Image src={v.img} alt={`${v.name} for airport transfer`} fill sizes="(max-width:640px) 100vw, 25vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--air-deep)] via-transparent to-transparent" />
                </div>
                {/* ticket header */}
                <div className="flex items-center justify-between border-b border-dashed border-white/10 px-5 py-4">
                  <div className="flex items-center gap-2">
                    <Car className="h-5 w-5 text-[color:var(--air-accent)]" />
                    <span className="font-bold text-white">{v.name}</span>
                  </div>
                  {v.tag && (
                    <span className="rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-black"
                      style={{ background: 'linear-gradient(135deg, var(--air-accent), var(--air-accent2))' }}>{v.tag}</span>
                  )}
                </div>
                {/* perforation notches */}
                <div className="relative">
                  <span className="absolute -left-2 top-0 h-4 w-4 -translate-y-1/2 rounded-full" style={{ backgroundColor: 'var(--air-deep, #050B16)' }} />
                  <span className="absolute -right-2 top-0 h-4 w-4 -translate-y-1/2 rounded-full" style={{ backgroundColor: 'var(--air-deep, #050B16)' }} />
                </div>
                <div className="px-5 py-5">
                  <p className="text-sm text-slate-400">{v.cars}</p>
                  <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
                    <div><div className="text-[10px] uppercase tracking-widest text-slate-500">Seats</div><div className="font-mono font-bold text-white">{v.seats}</div></div>
                    <div><div className="text-[10px] uppercase tracking-widest text-slate-500">Bags</div><div className="font-mono font-bold text-white">{v.bags}</div></div>
                  </div>
                  <div className="mt-5 flex items-end justify-between">
                    <div>
                      <div className="text-[10px] uppercase tracking-widest text-slate-500">From</div>
                      <div className="font-mono text-2xl font-black text-[color:var(--air-accent)]">{v.rate}</div>
                    </div>
                    <Barcode />
                  </div>
                  <a href={wa(`Hi, I want to book a ${v.name} airport transfer. Please confirm.`)} target="_blank" rel="noopener noreferrer"
                    onClick={() => trackWhatsAppClick(`airport_hub_fleet_${v.name.toLowerCase()}`)}
                    className="mt-5 block rounded-xl border border-[color:var(--air-accent)]/30 bg-[color:var(--air-accent)]/[0.1] py-2.5 text-center text-sm font-semibold text-[color:var(--air-accent)] transition-colors hover:bg-[color:var(--air-accent)]/20">
                    Book {v.name}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ HOW IT WORKS ══ */}
      <section className="relative overflow-hidden px-4 py-16">
        <AirportBackdrop variant="grid" />
        <div className="relative z-10 mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <SectionKicker center>3 Steps to Touchdown</SectionKicker>
            <h2 className="mt-4 text-3xl font-black text-white md:text-5xl">From boarding pass to back seat</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { n: '01', t: 'Share your flight', d: 'Send your flight number, arrival time and drop address on WhatsApp or call.' },
              { n: '02', t: 'We track it live', d: 'Driver is dispatched on your real landing time — delays cost you nothing.' },
              { n: '03', t: 'Meet at the gate', d: 'Spot your name on the placard, hand over the bags, settle into a clean AC cab.' },
            ].map((s) => (
              <div key={s.n} className="relative overflow-hidden rounded-2xl border border-[color:var(--air-accent)]/12 bg-white/[0.03] p-7">
                <div className="absolute right-5 top-3 font-mono text-6xl font-black text-[color:var(--air-accent)]/10">{s.n}</div>
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-white">{s.t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">{s.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ SERVICES ══ */}
      <section className="relative px-4 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <SectionKicker center>Every Kind of Transfer</SectionKicker>
            <h2 className="mt-4 text-3xl font-black text-white md:text-5xl">More than a pickup</h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s) => (
              <div key={s.title} className="group overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02] transition-colors hover:border-[color:var(--air-accent)]/25">
                <div className="relative h-32 w-full overflow-hidden">
                  <Image src={s.img} alt={s.title} fill sizes="(max-width:768px) 100vw, 33vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--air-deep)] via-[var(--air-deep)]/40 to-transparent" />
                  <div className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-xl border border-[color:var(--air-accent)]/30 bg-black/40 backdrop-blur-sm">
                    <s.icon className="h-5 w-5 text-[color:var(--air-accent)]" />
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-white">{s.title}</h3>
                  <p className="mt-1 text-sm text-slate-400">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ EXPLORE MORE ══ */}
      <section className="relative px-4 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 text-center">
            <SectionKicker center>Beyond the Airport</SectionKicker>
            <h2 className="mt-4 text-3xl font-black text-white md:text-4xl">Complete travel solutions</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { href: '/sightseeing', icon: MapPin, t: 'Sightseeing Tours', d: 'Expert-guided heritage tours across Delhi, Agra & Jaipur.', img: '/images/sightseeing/Golden_Triangle/Golden_triangle_hero_section.jpg' },
              { href: '/bus-routes', icon: Users, t: 'Bus & Tempo Routes', d: 'Comfortable group travel for long-distance journeys.', img: '/images/bus/hero_section_image.webp' },
              { href: '/routes', icon: Navigation, t: 'Outstation Routes', d: 'One-way & round-trip cabs on every popular route.', img: '/images/citypage_hero_section_image.jpg' },
            ].map((x) => (
              <Link key={x.href} href={x.href}
                className="group relative overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.03] transition-all duration-300 hover:-translate-y-1 hover:border-[color:var(--air-accent)]/30">
                <div className="relative h-44 w-full overflow-hidden">
                  <Image src={x.img} alt={x.t} fill sizes="(max-width:768px) 100vw, 33vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--air-deep)] via-[var(--air-deep)]/40 to-transparent" />
                  <div className="absolute left-5 top-5 flex h-12 w-12 items-center justify-center rounded-xl border border-[color:var(--air-accent)]/30 bg-black/40 backdrop-blur-sm">
                    <x.icon className="h-6 w-6 text-[color:var(--air-accent)]" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white">{x.t}</h3>
                  <p className="mt-2 leading-relaxed text-slate-400">{x.d}</p>
                  <div className="mt-4 flex items-center gap-1 font-semibold text-[color:var(--air-accent)]">
                    Explore <ChevronRight className="h-5 w-5 transition-transform group-hover:translate-x-1.5" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══ FAQ ══ */}
      {faqData && faqData.length > 0 && (
        <section className="relative px-4 py-16">
          <div className="mx-auto max-w-3xl">
            <div className="mb-10 text-center">
              <SectionKicker center>Traveller Help</SectionKicker>
              <h2 className="mt-4 text-3xl font-black text-white md:text-5xl">Frequently asked</h2>
            </div>
            <div className="space-y-3">
              {faqData.map((faq, i) => (
                <div key={i} className="overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.02]">
                  <button onClick={() => setOpenFaq(openFaq === i ? null : i)} aria-expanded={openFaq === i}
                    className="flex w-full items-center justify-between gap-4 p-5 text-left">
                    <span className="font-semibold text-white">{faq.question}</span>
                    <ChevronDown className={`h-5 w-5 shrink-0 text-[color:var(--air-accent)] transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
                  </button>
                  {openFaq === i && (
                    <div className="border-t border-white/[0.05] px-5 pb-5 pt-4 leading-relaxed text-slate-300">{faq.answer}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ══ FINAL CTA ══ */}
      <section className="relative overflow-hidden px-4 py-20">
        <AirportBackdrop variant="full" />
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <FlightStatusPill label="Now Boarding" className="mx-auto" />
          <h2 className="mt-6 text-4xl font-black leading-tight text-white md:text-6xl">
            Your cab is <span className="bg-gradient-to-r from-[var(--air-accent)] to-[var(--air-accent2)] bg-clip-text text-transparent">cleared for pickup</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-slate-300">Fixed fare · flight tracking · verified drivers · 24/7 dispatch.</p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <a href={`tel:${PHONE}`} onClick={() => trackPhoneCall('airport_hub_cta')}
              className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-2xl px-9 py-4 text-lg font-bold text-black transition-transform hover:scale-[1.02]"
              style={{ background: 'linear-gradient(135deg, var(--air-accent), var(--air-accent2))', boxShadow: '0 12px 36px var(--air-glow)' }}>
              <Phone className="h-5 w-5" /> Call +91 7668570551
            </a>
            <a href={wa(heroWa)} target="_blank" rel="noopener noreferrer" onClick={() => trackWhatsAppClick('airport_hub_cta')}
              className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/[0.04] px-9 py-4 text-lg font-bold text-white backdrop-blur-xl transition-colors hover:border-[color:var(--air-accent)]/40">
              <WhatsAppIcon className="h-5 w-5 text-emerald-400" /> WhatsApp Booking
            </a>
          </div>
        </div>
      </section>
    </AirportShell>
  );
}
