'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Phone, MapPin, Shield, Clock, Users, Star, ChevronRight, Car, CheckCircle2,
  ArrowRight, IndianRupee, ChevronDown, Route, Navigation, TrainFront,
  Headphones, BadgeCheck, Sparkles, MapPinned, Milestone, Luggage, Zap
} from '@/components/ui/icons';
import { WhatsAppIcon } from '@/components/ui/icons';
import { getNearbyStations } from '@/utilis/railwayStationData';
import { getCityImage } from '@/utilis/imageUtils';
import { trackWhatsAppClick, trackPhoneCall } from '@/utilis/analytics';
import StickyPriceBar from '@/components/shared/StickyPriceBar';
import { SetStickyCta } from '@/components/ui/StickyCtaContext';
import QuickEnquiryForm from '@/components/ui/QuickEnquiryForm';
import InclusionBadges from '@/components/shared/InclusionBadges';
import SocialProofStrip from '@/components/shared/SocialProofStrip';
import SectionDivider from '@/components/shared/SectionDivider';

// ─── Ultra-Premium v2 vocabulary ────────────────────────────────────────────
const FOIL =
  'text-gold-foil bg-gradient-to-br from-[#FFE9A0] via-[#FACF2D] to-[#B8860B] bg-clip-text text-transparent drop-shadow-[0_2px_18px_rgba(250,207,45,0.35)]';
const GOLD_BTN =
  'sheen inline-flex items-center justify-center gap-2 rounded-full bg-[#FACF2D] font-black text-slate-950 shadow-[0_12px_36px_-10px_rgba(250,207,45,0.55)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-amber-300 active:translate-y-0 active:scale-[0.98]';
const GHOST_BTN =
  'inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 font-bold text-white backdrop-blur-sm transition-colors hover:bg-white/10';
const CTA_SIZE = 'w-full px-7 py-4 text-sm lg:w-auto lg:px-5 lg:py-2 lg:text-[13px]';
const GLASS = 'bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10';

// Deterministic ticket-barcode heights (stable hydration, no randomness)
const BARCODE = [16, 21, 13, 19, 22, 14, 20, 12, 18, 15, 21, 17, 13, 22, 16, 19, 12, 20, 14, 18, 21, 15, 17, 22, 13, 19, 16, 20, 12, 18, 14, 21, 17, 15, 22, 13, 19, 16, 20, 14];

function SerifHeading({ eyebrow, icon: EyebrowIcon, title, highlight, after, subtitle, tone = 'dark' }) {
  const dark = tone === 'dark';
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center md:mb-16">
      {eyebrow && (
        <span className={`mb-4 inline-flex items-center gap-2 text-[0.68rem] font-bold uppercase tracking-[0.22em] sm:text-xs ${dark ? 'text-amber-300' : 'text-amber-600'}`}>
          <span className={`h-px w-7 ${dark ? 'bg-amber-400/60' : 'bg-amber-500/60'}`} />
          {EyebrowIcon && <EyebrowIcon className="h-3.5 w-3.5" />}
          {eyebrow}
          <span className={`h-px w-7 ${dark ? 'bg-amber-400/60' : 'bg-amber-500/60'}`} />
        </span>
      )}
      <h2 className={`font-display-serif text-balance text-[1.7rem] font-black leading-[1.12] tracking-tight sm:text-4xl lg:text-[2.75rem] ${dark ? 'text-white' : 'text-slate-900'}`}>
        {title} {highlight && <span className={FOIL}>{highlight}</span>}{after ? <> {after}</> : null}
      </h2>
      {subtitle && (
        <p className={`mx-auto mt-4 max-w-2xl text-sm leading-relaxed sm:text-base ${dark ? 'text-slate-300/80' : 'text-slate-600'}`}>{subtitle}</p>
      )}
    </div>
  );
}

export default function RailwayStationClient({ station, slug }) {
  const [openFaq, setOpenFaq] = useState(null);
  const nearbyStations = getNearbyStations(slug);
  const lowestFare = station.destinations.reduce((min, d) => Math.min(min, d.sedanFare), Infinity);
  const heroImage = getCityImage(station.city);

  return (
    <article className="min-h-screen bg-slate-950" itemScope itemType="https://schema.org/TaxiService">
      <StickyPriceBar
        title={`${station.name} Taxi Service`}
        price={`₹${lowestFare}`}
        whatsappMessage={`Hi, I need a taxi from ${station.name}`}
      />
      <SetStickyCta
        price={`₹${lowestFare}`}
        label={`${station.name} Taxi`}
        whatsappText={`Hi, I need a taxi from ${station.name} (${station.stationCode}). Please share rates and availability.`}
      />

      {/* === HERO — visible city photo, scrim on the text side only === */}
      <section className="relative flex min-h-[88vh] flex-col justify-end overflow-hidden">
        <Image
          src={heroImage}
          alt={`${station.city} — taxi from ${station.name}`}
          fill
          priority
          className="object-cover"
          sizes="100vw"
          quality={85}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/45 to-slate-950/10" />
        <div className="absolute inset-y-0 left-0 w-full bg-gradient-to-r from-slate-950/80 via-slate-950/25 to-transparent lg:w-3/4" />
        <div className="absolute inset-x-0 top-0 z-20 h-1.5 bg-gradient-to-r from-[#B8860B] via-[#FACF2D] to-[#FFE9A0]" aria-hidden />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-12 pt-28 sm:px-6 lg:px-8">
          <div className="grid items-end gap-10 lg:grid-cols-5 lg:gap-12">
            {/* Left: Content (3 cols) */}
            <div className="lg:col-span-3">
              {/* Station route-board seal — honest data: code + platforms */}
              <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-amber-400/30 bg-slate-950/60 py-2 pl-2 pr-5 backdrop-blur-md">
                <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border-2 border-[#FACF2D]/70 bg-amber-400/15">
                  <TrainFront className="h-4 w-4 text-[#FACF2D]" />
                </span>
                <span className="text-left">
                  <span className="block font-mono text-[11px] font-black tracking-[0.22em] text-amber-200">{station.stationCode} STATION · {station.platforms} PLATFORMS</span>
                  <span className="block text-[10px] text-white/55">Driver meets you at the platform exit, 24/7</span>
                </span>
              </div>

              <h1 className="font-display-serif text-balance text-4xl font-black leading-[1.04] tracking-tight text-white sm:text-6xl lg:text-7xl">
                {station.city}
                <span className={`block ${FOIL}`}>Station Taxi</span>
              </h1>

              <p className="mt-5 max-w-xl text-sm leading-relaxed text-white/70 sm:text-base md:text-lg">
                {station.description.split('.').slice(0, 2).join('.')}.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Link onClick={() => trackPhoneCall('railway_station')} href="tel:+917668570551" className={`${GOLD_BTN} ${CTA_SIZE}`}>
                  <Phone className="h-4 w-4" /> Call: 7668570551
                </Link>
                <Link onClick={() => trackWhatsAppClick('railway_station')} href={`https://wa.me/917668570551?text=I need a taxi from ${station.name}`} className={`${GHOST_BTN} ${CTA_SIZE}`}>
                  <WhatsAppIcon className="h-4 w-4" /> WhatsApp Booking
                </Link>
              </div>

              {/* Quick Enquiry Form */}
              <div className="mt-8">
                <QuickEnquiryForm fromCity={station.name} toCity={station.city} pageType="station_taxi" />
              </div>
            </div>

            {/* Right: Train Ticket Style Info Card (2 cols) */}
            <div className="lg:col-span-2">
              <div className="border-gradient-gold relative overflow-hidden rounded-3xl border border-white/10 bg-slate-950/70 shadow-2xl backdrop-blur-xl">
                <div className="flex items-center justify-between border-b border-amber-400/25 bg-gradient-to-r from-amber-400/15 via-amber-300/5 to-transparent px-6 py-4">
                  <div className="flex items-center gap-2.5">
                    <TrainFront className="h-5 w-5 text-[#FACF2D]" />
                    <span className="font-mono text-sm font-black tracking-widest text-amber-100">PLATFORM TICKET</span>
                  </div>
                  <span className="font-mono text-xs text-white/50">TRIVENI CABS</span>
                </div>

                <div className="p-6">
                  <div className="mb-2 text-center">
                    <div className="mb-1 font-mono text-xs tracking-widest text-amber-300/80">STATION</div>
                    <div className="font-display-serif text-xl font-black leading-tight text-white">{station.name}</div>
                  </div>

                  <div className="-mx-6 my-4 flex items-center">
                    <div className="h-10 w-5 rounded-r-full bg-slate-950" />
                    <div className="mx-2 flex-1 border-t-2 border-dashed border-white/10" />
                    <div className="h-10 w-5 rounded-l-full bg-slate-950" />
                  </div>

                  <div className="mb-4 grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="mb-1 font-mono text-[10px] tracking-widest text-white/45">CODE</div>
                      <div className="font-mono text-2xl font-black text-[#FACF2D]">{station.stationCode}</div>
                    </div>
                    <div className="text-center">
                      <div className="mb-1 font-mono text-[10px] tracking-widest text-white/45">PLATFORMS</div>
                      <div className="font-mono text-2xl font-black text-[#FACF2D]">{station.platforms}</div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="rounded-xl border border-amber-400/15 bg-amber-400/10 py-3 text-center">
                      <div className="mb-1 font-mono text-[10px] tracking-widest text-white/45">FARE FROM</div>
                      <div className="font-display-serif text-xl font-black text-white">{'₹'}{lowestFare}</div>
                    </div>
                    <div className="rounded-xl border border-amber-400/15 bg-amber-400/10 py-3 text-center">
                      <div className="mb-1 font-mono text-[10px] tracking-widest text-white/45">STATUS</div>
                      <div className="flex items-center justify-center gap-1.5 text-sm font-black text-emerald-400">
                        <span className="h-2 w-2 rounded-full bg-emerald-400" />
                        24/7 LIVE
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center gap-[2px] px-6 pb-4" aria-hidden>
                  {BARCODE.map((h, i) => (
                    <div key={i} className="w-[2px] rounded-full bg-white/15" style={{ height: `${h}px` }} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SocialProofStrip theme="dark" />

      {/* === TRUST BAR === */}
      <section className="border-b border-white/5 px-4 py-10">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4 md:gap-8">
          {[
            { icon: TrainFront, title: 'Meet at Platform', desc: 'Driver waits at exit' },
            { icon: Shield, title: 'Fixed Fares', desc: 'Zero surge pricing' },
            { icon: Clock, title: '24/7 Available', desc: 'Any train, any time' },
            { icon: Star, title: '4.9 Rating', desc: 'Trusted by thousands' },
          ].map((item, i) => (
            <div key={i} className="group flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border-2 border-[#FACF2D]/40 bg-gradient-to-br from-amber-400/20 via-transparent to-transparent transition-transform duration-300 group-hover:scale-110">
                <item.icon className="h-5 w-5 text-[#FACF2D]" />
              </div>
              <div>
                <div className="text-sm font-bold text-white">{item.title}</div>
                <div className="text-xs text-slate-500">{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* === FARE TABLE — stacked cards on mobile, full ledger on desktop === */}
      <section className="px-4 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <SerifHeading
            eyebrow="Fare Chart"
            icon={IndianRupee}
            title="Taxi Fares from"
            highlight={station.city}
            subtitle="Transparent pricing. Tolls included. No hidden charges."
            tone="dark"
          />

          {/* Mobile — stacked label/value fare cards */}
          <div className="space-y-4 md:hidden">
            {station.destinations.map((dest, i) => (
              <div key={i} className={`${GLASS} p-5`}>
                <div className="mb-3 flex items-center gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-amber-400/25 bg-amber-400/10">
                    <ArrowRight className="h-3.5 w-3.5 text-[#FACF2D]" />
                  </div>
                  <span className="font-display-serif text-base font-black text-white">{dest.name}</span>
                </div>
                <dl className="space-y-2 text-xs">
                  <div className="flex justify-between gap-3 border-b border-white/5 pb-2">
                    <dt className="font-mono uppercase tracking-widest text-white/40">Distance</dt>
                    <dd className="text-white/70">{dest.distance}</dd>
                  </div>
                  <div className="flex justify-between gap-3 border-b border-white/5 pb-2">
                    <dt className="font-mono uppercase tracking-widest text-white/40">Sedan Fare</dt>
                    <dd className="font-bold text-amber-300">{'₹'}{dest.sedanFare.toLocaleString()}</dd>
                  </div>
                  <div className="flex justify-between gap-3 border-b border-white/5 pb-2">
                    <dt className="font-mono uppercase tracking-widest text-white/40">SUV Fare</dt>
                    <dd className="font-bold text-amber-200">{'₹'}{dest.suvFare.toLocaleString()}</dd>
                  </div>
                  <div className="flex justify-between gap-3">
                    <dt className="font-mono uppercase tracking-widest text-white/40">Est. Time</dt>
                    <dd className="text-white/70">{dest.time}</dd>
                  </div>
                </dl>
              </div>
            ))}
          </div>

          {/* Desktop — fare ledger table, no horizontal scroll wrapper */}
          <div className={`hidden overflow-hidden md:block ${GLASS}`}>
            <div className="flex items-center justify-between border-b border-amber-400/20 bg-gradient-to-r from-amber-400/15 via-amber-300/5 to-transparent px-8 py-5">
              <div className="flex items-center gap-3">
                <span className="h-3 w-3 rounded-full bg-emerald-400" />
                <span className="font-mono text-sm font-black tracking-widest text-amber-100">FARE DISPLAY</span>
              </div>
              <span className="font-mono text-xs text-slate-400">{station.stationCode} &bull; {station.platforms} PLATFORMS</span>
            </div>
            <table className="w-full text-sm">
              <thead className="bg-white/[0.02]">
                <tr>
                  <th className="p-5 pl-8 text-left font-mono text-xs font-black tracking-widest text-amber-300">DESTINATION</th>
                  <th className="p-5 text-center font-mono text-xs font-black tracking-widest text-amber-300">DISTANCE</th>
                  <th className="p-5 text-center font-mono text-xs font-black tracking-widest text-amber-300">SEDAN FARE</th>
                  <th className="p-5 text-center font-mono text-xs font-black tracking-widest text-amber-300">SUV FARE</th>
                  <th className="p-5 pr-8 text-center font-mono text-xs font-black tracking-widest text-amber-300">EST. TIME</th>
                </tr>
              </thead>
              <tbody>
                {station.destinations.map((dest, i) => (
                  <tr key={i} className="group border-b border-white/[0.03] transition-all duration-300 last:border-0 hover:bg-amber-400/[0.05]">
                    <td className="p-5 pl-8">
                      <div className="flex items-center gap-3">
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-amber-400/25 bg-amber-400/10 transition-colors group-hover:bg-amber-400/20">
                          <ArrowRight className="h-3.5 w-3.5 text-[#FACF2D]" />
                        </div>
                        <span className="font-bold text-white">{dest.name}</span>
                      </div>
                    </td>
                    <td className="p-5 text-center font-mono text-slate-400">{dest.distance}</td>
                    <td className="p-5 text-center font-mono text-base font-black text-amber-300">{'₹'}{dest.sedanFare.toLocaleString()}</td>
                    <td className="p-5 text-center font-mono text-base font-black text-amber-200">{'₹'}{dest.suvFare.toLocaleString()}</td>
                    <td className="p-5 pr-8 text-center font-mono text-slate-400">{dest.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-5 text-center font-mono text-xs text-slate-600">* Fares include AC vehicle, driver, and fuel. Tolls and parking included.</p>
        </div>
      </section>

      {/* === WHY BOOK — warm-light band === */}
      <section className="bg-gradient-to-b from-[#FFF6DC] via-amber-50/70 to-white px-4 py-16 text-slate-900 md:py-24">
        <div className="mx-auto max-w-7xl">
          <SerifHeading
            eyebrow="Premium Service"
            icon={Sparkles}
            title="Why Book"
            highlight="With Us"
            tone="light"
          />

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: MapPinned, title: 'Meet at Platform Exit', desc: 'Our driver waits right at the station exit with your name board. No searching, no confusion.' },
              { icon: Clock, title: '24/7 Available', desc: 'Whether your train arrives at 2 AM or noon, our taxi is ready and waiting for you.' },
              { icon: Shield, title: 'No Surge Pricing', desc: 'Fixed fares agreed before booking. No meters, no multipliers, no hidden charges.' },
              { icon: Navigation, title: 'GPS Tracked Rides', desc: 'All vehicles are GPS tracked. Share your live location with family for complete safety.' },
              { icon: Car, title: 'Clean AC Vehicles', desc: 'Well-maintained, sanitized AC cars. Sedan, SUV, and Tempo Traveller options available.' },
              { icon: BadgeCheck, title: 'Verified Drivers', desc: 'All drivers are background-verified, experienced, and know local routes perfectly.' },
            ].map((item, i) => (
              <div key={i} className="group rounded-2xl border border-amber-200 bg-white p-7 shadow-[0_16px_50px_-30px_rgba(180,130,10,0.45)] transition-all duration-500 hover:border-amber-300 hover:shadow-[0_20px_60px_-28px_rgba(180,130,10,0.6)]">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border-2 border-[#FACF2D]/50 bg-gradient-to-br from-amber-100 via-amber-50 to-transparent transition-transform duration-300 group-hover:scale-110">
                  <item.icon className="h-6 w-6 text-amber-600" />
                </div>
                <h3 className="font-display-serif mb-2 text-xl font-black text-slate-900">{item.title}</h3>
                <p className="text-sm leading-relaxed text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === STATION INFO — dark band === */}
      <section className="px-4 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <SerifHeading
            eyebrow="Station Details"
            icon={TrainFront}
            title="About"
            highlight={station.name}
            tone="dark"
          />

          <div className="grid gap-6 md:grid-cols-3">
            {/* Platform Card */}
            <div className={`overflow-hidden ${GLASS} transition-all duration-500 hover:border-amber-400/40`}>
              <div className="border-b border-white/5 bg-gradient-to-r from-amber-400/15 to-transparent px-6 py-4">
                <div className="flex items-center gap-3">
                  <Milestone className="h-5 w-5 text-[#FACF2D]" />
                  <h3 className="font-bold text-white">Platform Details</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="mb-5 text-sm text-slate-400">{station.platforms} platforms serving passengers daily</p>
                <div className="flex items-center justify-between rounded-2xl border border-amber-400/15 bg-amber-400/10 p-4">
                  <span className="font-mono text-xs tracking-widest text-slate-400">STATION CODE</span>
                  <span className="font-mono text-3xl font-black text-[#FACF2D]">{station.stationCode}</span>
                </div>
              </div>
            </div>

            {/* Cab Point Card */}
            <div className={`overflow-hidden ${GLASS} transition-all duration-500 hover:border-amber-400/40`}>
              <div className="border-b border-white/5 bg-gradient-to-r from-amber-400/15 to-transparent px-6 py-4">
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-[#FACF2D]" />
                  <h3 className="font-bold text-white">Cab Pickup Point</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-sm leading-relaxed text-slate-400">{station.cabWaitingPoint}</p>
                <div className="mt-5 flex items-center gap-2 text-xs font-bold text-emerald-400">
                  <div className="h-2 w-2 rounded-full bg-emerald-400" />
                  Driver waiting at this location
                </div>
              </div>
            </div>

            {/* Landmarks Card */}
            <div className={`overflow-hidden ${GLASS} transition-all duration-500 hover:border-amber-400/40`}>
              <div className="border-b border-white/5 bg-gradient-to-r from-amber-400/15 to-transparent px-6 py-4">
                <div className="flex items-center gap-3">
                  <Luggage className="h-5 w-5 text-[#FACF2D]" />
                  <h3 className="font-bold text-white">Nearby Landmarks</h3>
                </div>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  {station.nearbyLandmarks.map((landmark, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-slate-300">
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-amber-400/25 bg-amber-400/10">
                        <CheckCircle2 className="h-3 w-3 text-[#FACF2D]" />
                      </div>
                      {landmark}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Major Trains */}
          <div className={`mt-8 ${GLASS} p-6 md:p-8`}>
            <h3 className="font-display-serif mb-6 flex items-center gap-3 text-xl font-black text-white">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border-2 border-[#FACF2D]/40 bg-gradient-to-br from-amber-400/20 to-transparent">
                <TrainFront className="h-5 w-5 text-[#FACF2D]" />
              </div>
              Major Trains at {station.name}
            </h3>
            <div className="flex flex-wrap gap-3">
              {station.majorTrains.map((train, i) => (
                <span key={i} className="cursor-default rounded-xl border border-amber-400/20 bg-amber-400/10 px-5 py-2.5 text-sm font-semibold text-amber-200 transition-all duration-300 hover:border-amber-400/40 hover:bg-amber-400/15">
                  {train}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* === DIRECT ANSWER BOX (AEO/Featured Snippet Target) — warm-light band === */}
      <section className="bg-gradient-to-b from-[#FFF6DC] via-amber-50/60 to-white px-4 py-16 text-slate-900 md:py-24">
        <div className="mx-auto max-w-4xl">
          <div className="direct-answer rounded-2xl border border-amber-200 bg-white p-6 shadow-[0_16px_50px_-30px_rgba(180,130,10,0.45)] md:p-8" data-snippet-type="direct-answer">
            <h2 className="font-display-serif mb-4 text-2xl font-black text-slate-900 md:text-3xl">
              {station.name} Taxi — <span className={FOIL}>Quick Info</span>
            </h2>
            <div className="key-info mb-6 grid grid-cols-2 gap-4 md:grid-cols-4">
              <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-center">
                <p className="mb-1 text-xs font-semibold uppercase text-slate-500">Starting Fare</p>
                <p className="font-display-serif text-xl font-black text-amber-600">₹{lowestFare}</p>
              </div>
              <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-center">
                <p className="mb-1 text-xs font-semibold uppercase text-slate-500">Destinations</p>
                <p className="font-display-serif text-xl font-black text-slate-900">{station.destinations.length}+</p>
              </div>
              <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-center">
                <p className="mb-1 text-xs font-semibold uppercase text-slate-500">Available</p>
                <p className="font-display-serif text-xl font-black text-slate-900">24/7</p>
              </div>
              <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-center">
                <p className="mb-1 text-xs font-semibold uppercase text-slate-500">Rating</p>
                <p className="font-display-serif text-xl font-black text-amber-600">4.9★</p>
              </div>
            </div>
            <p className="faq-answer text-base leading-relaxed text-slate-700 md:text-lg">
              Taxi from <strong className="text-slate-900">{station.name} ({station.stationCode})</strong> starts at just <strong className="text-amber-600">₹{lowestFare}</strong> for AC sedan.
              Our drivers meet you at the <strong className="text-slate-900">platform exit gate</strong> with a name placard — no waiting, no searching.
              Fixed fares to {station.destinations.slice(0, 3).map(d => d.name).join(', ')} and {station.destinations.length - 3}+ more destinations.
              AC sedan and SUV options with verified professional drivers and GPS tracking.
              Book by calling <strong className="text-slate-900">+91-7668570551</strong> or WhatsApp. 4.9★ rated, 10,000+ station pickups completed.
            </p>
          </div>
        </div>
      </section>

      {/* === DESTINATIONS — train-ticket cards, dark band === */}
      <section className="relative px-4 py-16 md:py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-amber-950/15 to-transparent" />
        <div className="relative mx-auto max-w-7xl">
          <SerifHeading
            eyebrow="Popular Routes"
            icon={Route}
            title="Popular Destinations from"
            highlight={station.city}
            subtitle="Book a taxi to any destination. Fixed fares, AC vehicles, professional drivers."
            tone="dark"
          />

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {station.destinations.map((dest, i) => (
              <div key={i} className={`group relative overflow-hidden ${GLASS} transition-all duration-500 hover:border-amber-400/40 hover:shadow-2xl hover:shadow-amber-500/10`}>
                <div className="h-1 bg-gradient-to-r from-[#B8860B] via-[#FACF2D] to-[#FFE9A0]" />

                <div className="p-5">
                  <div className="mb-1 flex items-center justify-between">
                    <div className="font-mono text-[10px] tracking-widest text-slate-500">{station.stationCode} &rarr;</div>
                    <ArrowRight className="h-4 w-4 text-slate-700 transition-all duration-300 group-hover:translate-x-1 group-hover:text-amber-400" />
                  </div>
                  <h3 className="font-display-serif mb-3 text-lg font-black text-white">{dest.name}</h3>

                  <div className="mb-4 space-y-2">
                    <div className="flex items-center gap-2 text-sm text-slate-400">
                      <Route className="h-3.5 w-3.5 text-slate-600" /> {dest.distance}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-400">
                      <Clock className="h-3.5 w-3.5 text-slate-600" /> {dest.time}
                    </div>
                  </div>

                  <div className="-mx-5 my-4 flex items-center">
                    <div className="h-7 w-4 rounded-r-full bg-slate-950" />
                    <div className="mx-1 flex-1 border-t-2 border-dashed border-white/10" />
                    <div className="h-7 w-4 rounded-l-full bg-slate-950" />
                  </div>

                  <div className="mb-4 flex items-center justify-between">
                    <div className="text-center">
                      <div className="font-mono text-[10px] tracking-widest text-slate-500">SEDAN</div>
                      <div className="font-display-serif text-lg font-black text-amber-300">{'₹'}{dest.sedanFare.toLocaleString()}</div>
                    </div>
                    <div className="h-8 w-px bg-white/10" />
                    <div className="text-center">
                      <div className="font-mono text-[10px] tracking-widest text-slate-500">SUV</div>
                      <div className="font-display-serif text-lg font-black text-amber-200">{'₹'}{dest.suvFare.toLocaleString()}</div>
                    </div>
                  </div>

                  <Link onClick={() => trackPhoneCall('railway_station')} href="tel:+917668570551" className={`${GOLD_BTN} w-full px-5 py-3 text-sm lg:px-5 lg:py-2 lg:text-[13px]`}>
                    <Phone className="h-3.5 w-3.5" /> Book Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === HOW TO BOOK — warm-light band === */}
      <section className="bg-gradient-to-b from-[#FFF6DC] via-amber-50/60 to-white px-4 py-16 text-slate-900 md:py-24">
        <div className="mx-auto max-w-5xl">
          <SerifHeading
            eyebrow="Simple Process"
            icon={Zap}
            title="How to"
            highlight="Book"
            tone="light"
          />

          <div className="relative grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
            <div className="absolute left-[12.5%] right-[12.5%] top-7 hidden h-[2px] bg-gradient-to-r from-amber-300/50 via-[#FACF2D]/50 to-amber-300/50 md:block" />

            {[
              { step: '01', title: 'Arrive', desc: `Your train pulls into ${station.city}. Collect your luggage and head to the station exit.`, icon: TrainFront },
              { step: '02', title: 'Contact Us', desc: 'Call 7668570551 or WhatsApp with your location and destination for instant booking.', icon: Phone },
              { step: '03', title: 'Driver Arrives', desc: 'Our verified driver reaches the station exit within 10 minutes with your name board.', icon: MapPinned },
              { step: '04', title: 'Enjoy Ride', desc: 'Sit back in a clean AC vehicle. Fixed fare, no hassle, comfortable and safe journey.', icon: Car },
            ].map((s, i) => (
              <div key={i} className="group relative text-center">
                <div className="relative z-10 mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#FACF2D] shadow-[0_12px_36px_-10px_rgba(250,207,45,0.55)] transition-transform duration-300 group-hover:scale-110">
                  <s.icon className="h-6 w-6 text-slate-950" />
                </div>
                <div className="mb-2 font-mono text-xs tracking-widest text-amber-600">{s.step}</div>
                <h3 className="font-display-serif mb-2 text-xl font-black text-slate-900">{s.title}</h3>
                <p className="text-sm leading-relaxed text-slate-600">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === SEO CONTENT — About This Station === */}
      {station.seoContent && station.seoContent.length > 0 && (
        <section className="px-4 py-16 md:py-24">
          <div className="mx-auto max-w-4xl">
            <div className={`${GLASS} p-8 md:p-12`}>
              <h2 className="font-display-serif mb-8 text-2xl font-black text-white md:text-3xl">
                Complete Guide to Taxi from <span className={FOIL}>{station.name}</span>
              </h2>
              <div className="space-y-5 leading-relaxed text-slate-300">
                {station.seoContent.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* === TRAVEL TIPS — warm-light band === */}
      <section className="bg-gradient-to-b from-[#FFF6DC] via-amber-50/60 to-white px-4 py-16 text-slate-900 md:py-24">
        <div className="mx-auto max-w-5xl">
          <SerifHeading
            eyebrow="Pro Tips"
            title="Tips for"
            highlight={`${station.city} Station`}
            tone="light"
          />

          <div className="grid gap-5 sm:grid-cols-2">
            {station.tips.map((tip, i) => (
              <div key={i} className="flex gap-5 rounded-2xl border border-amber-200 bg-white p-6 shadow-[0_16px_50px_-30px_rgba(180,130,10,0.45)] transition-all duration-500 hover:border-amber-300">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#FACF2D]">
                  <span className="text-sm font-black text-slate-950">{String(i + 1).padStart(2, '0')}</span>
                </div>
                <p className="text-sm leading-relaxed text-slate-700">{tip}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <InclusionBadges preset="outstation" theme="dark" />
      <SectionDivider color="violet" className="my-8" />

      {/* === FAQ — two-column accordion grid === */}
      <section className="px-4 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <SerifHeading
            eyebrow="FAQs"
            title="Common"
            highlight="Questions"
            tone="dark"
          />

          <div className="grid gap-3 md:grid-cols-2 md:items-start">
            {station.faqs.map((faq, i) => (
              <div key={i} className={`overflow-hidden rounded-2xl border bg-white/5 backdrop-blur-xl transition-all duration-500 ${openFaq === i ? 'border-amber-400/40 shadow-lg shadow-amber-500/5' : 'border-white/10 hover:border-white/20'}`}>
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  aria-expanded={openFaq === i}
                  aria-label={openFaq === i ? 'Collapse answer' : 'Expand answer'}
                  className="flex w-full items-center justify-between rounded-2xl p-5 text-left focus:outline-none focus:ring-2 focus:ring-amber-500/50 md:p-6"
                >
                  <div className="flex items-center gap-4 pr-4">
                    <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg transition-colors duration-300 ${openFaq === i ? 'bg-[#FACF2D]' : 'bg-white/5'}`}>
                      <span className={`font-mono text-xs font-black transition-colors ${openFaq === i ? 'text-slate-950' : 'text-slate-500'}`}>{String(i + 1).padStart(2, '0')}</span>
                    </div>
                    <h3 className="text-sm font-semibold text-white md:text-base">{faq.question}</h3>
                  </div>
                  <ChevronDown className={`h-5 w-5 shrink-0 text-[#FACF2D] transition-transform duration-300 ${openFaq === i ? 'rotate-180' : ''}`} />
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${openFaq === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="px-6 pb-6 pt-0">
                    <p className="ml-12 border-t border-white/5 pt-4 text-sm leading-relaxed text-slate-400">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === CROSS-SERVICE LINKS — warm-light band === */}
      <section className="bg-gradient-to-b from-[#FFF6DC] via-amber-50/60 to-white px-4 py-16 text-slate-900 md:py-24">
        <div className="mx-auto max-w-7xl">
          <SerifHeading
            title="Other Travel Options from"
            highlight={station.city}
            subtitle={`Explore more ways to travel from ${station.city}`}
            tone="light"
          />

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { title: `${station.city} Bus Stand Taxi`, href: '/bus-stand-taxi', icon: Route, desc: 'Taxi from bus terminals' },
              { title: `${station.city} Sightseeing`, href: `/sightseeing/${station.city.toLowerCase().replace(/\s+/g, '-')}`, icon: MapPin, desc: 'Explore tourist attractions' },
              { title: `One-Way Cab from ${station.city}`, href: '/one-way-cab', icon: Car, desc: 'Affordable outstation cabs' },
              { title: 'Tour Packages', href: '/tour-package', icon: Navigation, desc: 'Multi-day curated tours' },
            ].map((link, i) => (
              <Link
                key={i}
                href={link.href}
                className="group rounded-2xl border border-amber-200 bg-white p-6 shadow-[0_16px_50px_-30px_rgba(180,130,10,0.45)] transition-all duration-500 hover:border-amber-300 hover:shadow-[0_20px_60px_-28px_rgba(180,130,10,0.6)]"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl border-2 border-[#FACF2D]/50 bg-gradient-to-br from-amber-100 to-transparent transition-transform duration-300 group-hover:scale-110">
                  <link.icon className="h-6 w-6 text-amber-600" />
                </div>
                <h3 className="mb-1 font-bold text-slate-900 transition-colors group-hover:text-amber-700">{link.title}</h3>
                <p className="text-sm text-slate-600">{link.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* === CROSS LINKS — Station Network === */}
      <section className="border-t border-white/5 px-4 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <SerifHeading
            title="Nearby"
            highlight="Railway Stations"
            subtitle="Explore taxi services at nearby railway stations"
            tone="dark"
          />

          <div className="grid grid-cols-2 gap-5 md:grid-cols-4">
            {nearbyStations.map((s, i) => (
              <Link
                key={i}
                href={`/railway-station-taxi/${s.slug}`}
                className={`group ${GLASS} p-6 text-center transition-all duration-500 hover:border-amber-400/40 hover:bg-white/[0.07]`}
              >
                <div className="mb-2 font-mono text-xs tracking-widest text-[#FACF2D]">{s.stationCode}</div>
                <h3 className="mb-1 text-base font-bold text-white transition-colors group-hover:text-amber-300">{s.city}</h3>
                <p className="mb-3 text-xs text-slate-500">Station Taxi</p>
                <ArrowRight className="mx-auto h-4 w-4 text-slate-600 transition-all duration-300 group-hover:translate-x-1 group-hover:text-amber-400" />
              </Link>
            ))}
          </div>

          {/* Related Services */}
          <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
            {[
              { title: 'Delhi Airport Taxi', href: '/airport-service/delhi' },
              { title: 'Agra Sightseeing', href: '/sightseeing/agra' },
              { title: 'Wedding Car Rental', href: '/wedding' },
              { title: 'Tour Packages', href: '/tour-package' },
            ].map((link, i) => (
              <Link key={i} href={link.href} className={`group ${GLASS} p-4 text-center transition-all duration-300 hover:border-amber-400/30`}>
                <h3 className="text-sm font-semibold text-slate-300 transition-colors group-hover:text-amber-300">{link.title}</h3>
                <ArrowRight className="mx-auto mt-1.5 h-3.5 w-3.5 text-slate-600 transition-colors group-hover:text-amber-400" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* === FINAL CTA — city photo banner with gold === */}
      <section className="relative overflow-hidden px-4 py-24 md:py-32">
        <Image
          src={heroImage}
          alt={`${station.city} — book your station taxi`}
          fill
          className="object-cover"
          sizes="100vw"
          quality={80}
        />
        <div className="absolute inset-0 bg-slate-950/80" />
        <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-[#B8860B] via-[#FACF2D] to-[#FFE9A0]" aria-hidden />

        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <div className="mb-8 inline-flex h-20 w-20 items-center justify-center rounded-full border-2 border-[#FACF2D]/70 bg-gradient-to-br from-amber-400/25 via-transparent to-transparent backdrop-blur-xl">
            <TrainFront className="h-9 w-9 text-[#FACF2D]" />
          </div>
          <h2 className="font-display-serif mb-5 text-4xl font-black tracking-tight text-white md:text-6xl">
            Arriving at <span className={FOIL}>{station.city}?</span>
          </h2>
          <p className="mb-3 text-xl font-bold text-amber-100 md:text-2xl">Your taxi is waiting at the station.</p>
          <p className="mx-auto mb-10 max-w-xl text-base text-white/60 md:text-lg">Fixed fares from {'₹'}{lowestFare}. 24/7 service. Meet at platform exit. Clean AC vehicles.</p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link onClick={() => trackPhoneCall('railway_station')} href="tel:+917668570551" className={`${GOLD_BTN} ${CTA_SIZE}`}>
              <Phone className="h-4 w-4" /> Call: 7668570551
            </Link>
            <Link onClick={() => trackWhatsAppClick('railway_station')} href={`https://wa.me/917668570551?text=I need a taxi from ${station.name}`} className={`${GHOST_BTN} ${CTA_SIZE}`}>
              <WhatsAppIcon className="h-4 w-4" /> WhatsApp Booking
            </Link>
          </div>
        </div>
      </section>

      {/* === BREADCRUMB === */}
      <nav className="border-t border-white/5 px-4 py-4" aria-label="Breadcrumb">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-2 text-sm text-slate-500">
          <Link href="/" className="transition-colors hover:text-amber-300">Home</Link>
          <ChevronRight className="h-3 w-3" />
          <Link href="/railway-station-taxi" className="transition-colors hover:text-amber-300">Railway Station Taxi</Link>
          <ChevronRight className="h-3 w-3" />
          <span className="font-medium text-slate-300">{station.name}</span>
        </div>
      </nav>
    </article>
  );
}
