'use client';

import { useState } from 'react';
import Link from '@/components/ui/JourneyLink';
import Image from 'next/image';
import {
  Phone, MapPin, Calendar, Check, Star,
  Sparkles, Shield, ChevronRight, ChevronDown,
  Clock, Users, ArrowRight, Car,
  Navigation, Award, Flame, PartyPopper
} from '@/components/ui/icons';
import { WhatsAppIcon as BsWhatsapp } from '@/components/ui/icons';
import { phoneNumber } from '@/utilis/contact';
import { trackWhatsAppClick, trackPhoneCall } from '@/utilis/analytics';
import { SetStickyCta } from '@/components/ui/StickyCtaContext';
import QuickEnquiryForm from '@/components/ui/QuickEnquiryForm';
import { filterClientLinks } from '@/lib/seo/client-route-exists';

/* ─── Ultra-Premium v2 tokens ─────────────────────────────────────────────
   Gold CTA: gold background, BLACK text, compact on desktop.             */
const GOLD_CTA =
  'sheen glow-gold inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full bg-amber-400 px-6 py-3 text-sm font-black text-slate-950 transition-colors hover:bg-amber-300 lg:min-h-0 lg:w-auto lg:px-5 lg:py-2 lg:text-[13px]';
const GHOST_CTA =
  'inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-bold text-white backdrop-blur-sm transition-colors hover:bg-white/10 lg:min-h-0 lg:w-auto lg:px-5 lg:py-2 lg:text-[13px]';
const GLASS = 'bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10';
const GOLD_LANE =
  'bg-gradient-to-r from-transparent via-amber-400 to-transparent';

const FestivalTripClient = ({ festival }) => {
  const [activeDay, setActiveDay] = useState(null);
  const [showAllTips, setShowAllTips] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);

  const whatsappText = `Hi! I want to book ${festival.title}. Please share package details and availability.`;
  const whatsappMessage = encodeURIComponent(whatsappText);
  const whatsappURL = `https://wa.me/91${phoneNumber}?text=${whatsappMessage}`;

  return (
    <div className="min-h-screen overflow-hidden bg-slate-950">
      <SetStickyCta
        price={festival.fares.sedan}
        label={`${festival.festival} - ${festival.location}`}
        whatsappText={whatsappText}
      />

      {/* ═══════════════════════════════════════════════════ HERO — DARK
          Destination photo stays visible; the scrim sits on the text side
          only (left + a soft floor), never a drowned black wall. */}
      <section className="relative flex min-h-[72vh] flex-col justify-end overflow-hidden bg-slate-950 md:min-h-[78vh]">
        {festival.heroImage && (
          <Image
            src={festival.heroImage}
            alt={`${festival.festival} at ${festival.location} — cab & tempo hire from Delhi with Triveni Cabs`}
            fill
            priority
            sizes="100vw"
            quality={85}
            className="object-cover object-center"
          />
        )}
        {/* Text-side scrim: strong left, transparent right; soft floor for legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-950/40 to-slate-950/5" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
        <span aria-hidden="true" className={`absolute inset-x-0 top-0 z-20 h-[3px] ${GOLD_LANE}`} />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-12 pt-16 sm:pt-28 sm:px-6 md:pb-16 lg:px-8">
          {/* Breadcrumb */}
          <nav className="mb-6 flex items-center gap-1.5 text-xs text-white/45" aria-label="Breadcrumb">
            <Link href="/" className="transition-colors hover:text-white/75">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="max-w-[220px] truncate font-medium text-amber-300">{festival.festival}</span>
          </nav>

          <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
            {/* Left: identity */}
            <div className="max-w-2xl">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-1.5 backdrop-blur-md">
                <PartyPopper className="h-3.5 w-3.5 text-amber-400" />
                <span className="text-[11px] font-black uppercase tracking-[0.2em] text-amber-300">
                  {festival.festival} {festival.year} · {festival.season}
                </span>
                <Flame className="h-3.5 w-3.5 text-amber-300" />
              </div>

              <h1 className="speakable-headline font-display-serif text-balance text-4xl font-black leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
                {festival.festival} Special
                <span className="mt-1.5 block text-gold-foil">{festival.location} Cab Service</span>
              </h1>

              <p className="speakable-lead mt-4 max-w-lg text-sm leading-relaxed text-white/65 sm:text-base">
                Doorstep pickup across Delhi NCR, festival-season routing by drivers
                who know the crowds — {festival.distanceFromDelhi} from Delhi,
                planned for {festival.duration.toLowerCase()}.
              </p>

              {/* Info pills */}
              <div className="mt-5 flex flex-wrap gap-2">
                {[
                  { icon: Calendar, text: festival.dates },
                  { icon: MapPin, text: `${festival.distanceFromDelhi} from Delhi` },
                  { icon: Clock, text: festival.duration },
                ].map((pill, i) => (
                  <span key={i} className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-white/85 backdrop-blur-md sm:text-sm">
                    <pill.icon className="h-3.5 w-3.5 shrink-0 text-amber-400" />
                    {pill.text}
                  </span>
                ))}
              </div>

              {/* CTAs — gold bg, black text, compact on desktop */}
              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  onClick={() => trackWhatsAppClick('festival_trip_hero', whatsappText)}
                  href={whatsappURL} target="_blank" rel="noopener noreferrer"
                  className={GOLD_CTA}
                >
                  <BsWhatsapp className="h-4 w-4" />
                  Book on WhatsApp
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  onClick={() => trackPhoneCall('festival_trip_hero')}
                  href={`tel:+91${phoneNumber}`}
                  className={GHOST_CTA}
                >
                  <Phone className="h-4 w-4 text-amber-400" />
                  Call {phoneNumber}
                </a>
              </div>

              {/* Trust row */}
              <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-white/60">
                <span className="flex items-center gap-1.5"><Star className="h-3.5 w-3.5 text-amber-400" /> 4.9&#9733; rated</span>
                <span className="flex items-center gap-1.5"><Users className="h-3.5 w-3.5 text-amber-400" /> 10,000+ trips</span>
                <span className="flex items-center gap-1.5"><Shield className="h-3.5 w-3.5 text-amber-400" /> Verified drivers</span>
                <span className="flex items-center gap-1.5"><Check className="h-3.5 w-3.5 text-amber-400" /> No advance</span>
              </div>
            </div>

            {/* Right: glanceable fare card on glass */}
            <div className={`${GLASS} w-full max-w-sm flex-shrink-0 rounded-3xl p-5 sm:p-6 lg:w-80`}>
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-amber-300/90">Sedan · one-way from Delhi</p>
              <p className="mt-1 text-5xl font-black leading-none tabular-nums text-gold-foil">{festival.fares.sedan}</p>
              <div className="mt-4 grid grid-cols-2 gap-3 border-t border-white/10 pt-4">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-widest text-white/35">SUV</p>
                  <p className="text-lg font-black text-white">{festival.fares.suv}</p>
                </div>
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-widest text-white/35">Tempo</p>
                  <p className="text-lg font-black text-white">{festival.fares.tempo}</p>
                </div>
              </div>
              <div className="mt-4 flex items-center gap-2 border-t border-white/10 pt-3.5">
                <Calendar className="h-3.5 w-3.5 flex-shrink-0 text-amber-400" />
                <span className="text-[11px] font-medium text-white/50">{festival.dates}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enquiry — dark, visually part of the hero block */}
      <section className="relative bg-slate-950 py-16 md:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(250,207,45,0.07),transparent_60%)]" />
        <div className="relative mx-auto max-w-xl px-4 sm:px-6">
          <QuickEnquiryForm fromCity="Delhi" toCity={festival.location} pageType="route" />
        </div>
      </section>

      {/* ══════════════════════════════════════════ HIGHLIGHTS — WARM LIGHT */}
      <section className="relative bg-gradient-to-b from-[#FFF6DC] via-amber-50/70 to-white py-16 md:py-24">
        <span aria-hidden="true" className={`absolute inset-x-0 top-0 h-[3px] ${GOLD_LANE}`} />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-amber-300 bg-amber-100/70 px-5 py-2">
              <Sparkles className="h-4 w-4 text-amber-600" />
              <span className="text-xs font-black uppercase tracking-[0.18em] text-amber-700">Festival Highlights</span>
            </div>
            <h2 className="font-display-serif text-balance text-3xl font-black text-slate-900 sm:text-4xl lg:text-5xl">
              Why celebrate {festival.festival} at <span className="text-amber-600">{festival.location}</span>?
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {festival.highlights.map((highlight, i) => (
              <div key={i} className="group flex items-start gap-4 rounded-2xl border border-amber-200/70 bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-lg">
                <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-amber-400/60 bg-amber-400/15 font-display-serif text-base font-black text-amber-700">
                  {i + 1}
                </span>
                <p className="text-base leading-relaxed text-slate-700">{highlight}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════ GALLERY — DARK */}
      {festival.gallery?.length > 0 && (
        <section className="relative bg-slate-950 py-16 md:py-24">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(250,207,45,0.05),transparent_70%)]" />
          <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
            <div className="mb-10 text-center">
              <h2 className="font-display-serif text-3xl font-black text-white md:text-4xl">
                {festival.location} <span className="text-gradient-gold">in pictures</span>
              </h2>
              <p className="mt-3 text-white/50">What you’ll see on this trip.</p>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3">
              {festival.gallery.map((src, i) => (
                <div
                  key={i}
                  className={`group relative overflow-hidden rounded-2xl border border-white/10 ${i === 0 ? 'col-span-2 md:col-span-1' : ''}`}
                >
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={src}
                      alt={`${festival.location} — ${festival.festival} trip with Triveni Cabs (${i + 1})`}
                      fill
                      loading="lazy"
                      sizes="(max-width: 768px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ═══════════════════════════════════════ ITINERARY — WARM LIGHT */}
      <section className="relative bg-gradient-to-b from-[#FFF6DC] via-amber-50/60 to-white py-16 md:py-24">
        <span aria-hidden="true" className={`absolute inset-x-0 top-0 h-[3px] ${GOLD_LANE}`} />
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="mb-12 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-amber-300 bg-amber-100/70 px-5 py-2">
              <Navigation className="h-4 w-4 text-amber-600" />
              <span className="text-xs font-black uppercase tracking-[0.18em] text-amber-700">Trip Itinerary</span>
            </div>
            <h2 className="font-display-serif text-balance text-3xl font-black text-slate-900 sm:text-4xl lg:text-5xl">
              Your {festival.festival} <span className="text-amber-600">trip plan</span>
            </h2>
          </div>
          <div className="relative">
            <div className="absolute bottom-0 left-[29px] top-0 hidden w-px bg-gradient-to-b from-amber-400/60 via-amber-300/40 to-transparent md:block" />
            <div className="space-y-4">
              {festival.itinerary.map((day, i) => (
                <div key={i} className="relative">
                  <div className="absolute left-[23px] top-8 z-10 hidden h-3.5 w-3.5 rounded-full border-2 border-[#FFF6DC] bg-amber-500 md:block" />
                  <div className="overflow-hidden rounded-2xl border border-amber-200/70 bg-white shadow-sm transition-shadow duration-300 hover:shadow-lg md:ml-12">
                    <button
                      onClick={() => setActiveDay(activeDay === i ? null : i)}
                      aria-expanded={activeDay === i}
                      className="flex w-full items-center justify-between gap-4 p-5 text-left sm:p-6"
                    >
                      <div className="flex items-center gap-4">
                        <div className="flex h-14 w-14 flex-shrink-0 flex-col items-center justify-center rounded-2xl border border-amber-400/50 bg-gradient-to-b from-amber-100 to-amber-200/70">
                          <span className="text-[10px] font-black uppercase text-amber-700">{day.day.split(' ')[0]}</span>
                          <span className="font-display-serif text-lg font-black leading-none text-amber-800">{day.day.split(' ')[1]}</span>
                        </div>
                        <div>
                          <h3 className="text-base font-black text-slate-900 md:text-lg">{day.title}</h3>
                          <p className="text-sm text-slate-500">{day.activities.length} activities planned</p>
                        </div>
                      </div>
                      <ChevronDown className={`h-5 w-5 flex-shrink-0 text-amber-600 transition-transform duration-300 ${activeDay === i ? 'rotate-180' : ''}`} />
                    </button>
                    {activeDay === i && (
                      <div className="border-t border-amber-100 px-5 pb-5 sm:px-6 sm:pb-6">
                        <ul className="space-y-3 pt-5">
                          {day.activities.map((activity, j) => (
                            <li key={j} className="flex items-start gap-3">
                              <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-amber-400/20">
                                <Check className="h-3.5 w-3.5 text-amber-700" />
                              </span>
                              <span className="leading-relaxed text-slate-700">{activity}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═════════════════════════════════════════ VEHICLES & FARES — DARK */}
      <section className="relative bg-slate-950 py-16 md:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(250,207,45,0.06),transparent_60%)]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-5 py-2">
              <Car className="h-4 w-4 text-amber-400" />
              <span className="text-xs font-black uppercase tracking-[0.18em] text-amber-300">Vehicle Options</span>
            </div>
            <h2 className="font-display-serif text-balance text-3xl font-black text-white sm:text-4xl lg:text-5xl">
              Choose your <span className="text-gradient-gold">vehicle</span>
            </h2>
            <p className="mt-4 text-base text-white/50 sm:text-lg">One-way fares from Delhi. Round-trip packages at discounted rates.</p>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
            {[
              { type: 'Sedan', desc: 'Swift Dzire / Honda Amaze', capacity: '4 Passengers', fare: festival.fares.sedan, img: '/images/car/swift_dzire.jpg' },
              { type: 'SUV', desc: 'Ertiga / Innova', capacity: '6 Passengers', fare: festival.fares.suv, popular: true, img: '/images/car/ertiga.jpg' },
              { type: 'Tempo Traveller', desc: '12-17 Seater', capacity: '12+ Passengers', fare: festival.fares.tempo, img: '/images/tempo/17_seater.jpg' },
            ].map((vehicle, i) => (
              <div key={i} className={`relative ${vehicle.popular ? 'md:-mt-3 md:mb-3' : ''}`}>
                {vehicle.popular && (
                  <div className="absolute -top-3.5 left-1/2 z-10 -translate-x-1/2">
                    <span className="rounded-full bg-amber-400 px-4 py-1 text-[11px] font-black uppercase tracking-wider text-slate-950 shadow-lg">Most Popular</span>
                  </div>
                )}
                <div className={`${GLASS} group rounded-3xl p-6 text-center transition-colors duration-300 sm:p-7 ${vehicle.popular ? 'border-amber-400/40' : 'hover:border-amber-400/30'}`}>
                  <div className="relative mb-5 h-32 w-full overflow-hidden rounded-2xl bg-white/[0.03] sm:h-36">
                    <Image
                      src={vehicle.img}
                      alt={`${vehicle.type} (${vehicle.desc}) for ${festival.festival} at ${festival.location} — Triveni Cabs`}
                      fill
                      sizes="(max-width: 768px) 90vw, 30vw"
                      className="object-contain p-2 transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="font-display-serif text-xl font-black text-white">{vehicle.type}</h3>
                  <p className="mt-1 text-sm text-white/45">{vehicle.desc}</p>
                  <p className="text-sm text-white/55">{vehicle.capacity}</p>
                  <p className="mt-4 mb-6 text-4xl font-black tabular-nums text-gold-foil">{vehicle.fare}</p>
                  <a
                    onClick={() => trackWhatsAppClick('festival_trip_vehicle', `Hi! I want to book ${festival.title} with a ${vehicle.type}. Please share package details.`)}
                    href={`https://wa.me/91${phoneNumber}?text=${encodeURIComponent(`Hi! I want to book ${festival.title} with a ${vehicle.type}. Please share package details.`)}`}
                    target="_blank" rel="noopener noreferrer"
                    className={`${GOLD_CTA} w-full`}
                  >
                    <BsWhatsapp className="h-4 w-4" />
                    Book Now
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════ TRAVEL TIPS — WARM LIGHT */}
      <section className="relative bg-gradient-to-b from-[#FFF6DC] via-amber-50/60 to-white py-16 md:py-24">
        <span aria-hidden="true" className={`absolute inset-x-0 top-0 h-[3px] ${GOLD_LANE}`} />
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="mb-12 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-amber-300 bg-amber-100/70 px-5 py-2">
              <Award className="h-4 w-4 text-amber-600" />
              <span className="text-xs font-black uppercase tracking-[0.18em] text-amber-700">Travel Tips</span>
            </div>
            <h2 className="font-display-serif text-balance text-3xl font-black text-slate-900 sm:text-4xl lg:text-5xl">
              Tips for your {festival.festival} <span className="text-amber-600">trip</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {(showAllTips ? festival.travelTips : festival.travelTips.slice(0, 4)).map((tip, i) => (
              <div key={i} className="flex items-start gap-4 rounded-2xl border border-amber-200/70 bg-white p-5 shadow-sm">
                <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-amber-400/20">
                  <Check className="h-4 w-4 text-amber-700" />
                </span>
                <p className="leading-relaxed text-slate-700">{tip}</p>
              </div>
            ))}
          </div>
          {festival.travelTips.length > 4 && (
            <div className="mt-8 text-center">
              <button
                onClick={() => setShowAllTips(!showAllTips)}
                className="rounded-full border border-amber-400/60 px-6 py-2.5 text-sm font-bold text-amber-700 transition-colors hover:bg-amber-100"
              >
                {showAllTips ? 'Show Less' : `Show All ${festival.travelTips.length} Tips`}
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ═════════════════════ ABOUT + IMPORTANT DATES — DARK, GLASS */}
      <section className="relative bg-slate-950 py-16 md:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(250,207,45,0.05),transparent_65%)]" />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6">
          <div className={`${GLASS} rounded-3xl p-7 md:p-12`}>
            <h2 className="font-display-serif mb-7 text-2xl font-black text-white md:text-4xl">
              About {festival.festival} at <span className="text-gradient-gold">{festival.location}</span>
            </h2>
            {festival.description.split('\n\n').map((para, i) => (
              <p key={i} className="mb-5 text-base leading-relaxed text-white/65 last:mb-0 sm:text-lg">{para}</p>
            ))}
          </div>

          {/* Important dates — glass stat trio */}
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {[
              { value: festival.dates, label: 'Festival Dates' },
              { value: festival.season, label: 'Season' },
              { value: festival.duration, label: 'Trip Duration' },
            ].map((item, i) => (
              <div key={i} className={`${GLASS} p-5 text-center transition-colors duration-300 hover:border-amber-400/30`}>
                <Calendar className="mx-auto mb-2.5 h-5 w-5 text-amber-400" />
                <p className="font-display-serif text-lg font-black text-amber-300">{item.value}</p>
                <p className="mt-1 text-xs uppercase tracking-widest text-white/40">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════ WHY TRIVENI — WARM LIGHT */}
      <section className="relative bg-gradient-to-b from-[#FFF6DC] via-amber-50/60 to-white py-16 md:py-24">
        <span aria-hidden="true" className={`absolute inset-x-0 top-0 h-[3px] ${GOLD_LANE}`} />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="font-display-serif text-balance text-3xl font-black text-slate-900 sm:text-4xl lg:text-5xl">
              Why choose <span className="text-amber-600">Triveni Cabs™</span>?
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-5">
            {[
              { icon: Shield, title: 'Verified Drivers', desc: 'Background-checked, experienced drivers' },
              { icon: Star, title: '4.8 Rating', desc: '2,800+ happy customers' },
              { icon: Clock, title: '24/7 Support', desc: 'Round-the-clock helpline' },
              { icon: Car, title: 'Clean AC Vehicles', desc: 'Well-maintained fleet' },
            ].map((item, i) => (
              <div key={i} className="rounded-2xl border border-amber-200/70 bg-white p-5 text-center shadow-sm transition-shadow duration-300 hover:shadow-lg">
                <span className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full border border-amber-400/50 bg-amber-400/15">
                  <item.icon className="h-6 w-6 text-amber-700" />
                </span>
                <h3 className="mb-1 text-sm font-black text-slate-900 md:text-base">{item.title}</h3>
                <p className="text-xs text-slate-500 md:text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════ FAQ — DARK, two-up on md, glass cards */}
      <section className="relative bg-slate-950 py-16 md:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(250,207,45,0.05),transparent_60%)]" />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mb-12 text-center">
            <h2 className="font-display-serif text-balance text-3xl font-black text-white sm:text-4xl lg:text-5xl">
              {festival.festival} {festival.location} Cab — <span className="text-gradient-gold">FAQs</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-start md:gap-5">
            {festival.faqs.map((faq, index) => (
              <div key={index} className={`${GLASS} overflow-hidden transition-colors duration-300 hover:border-amber-400/30`}>
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  aria-expanded={openFaq === index}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left md:px-6 md:py-5"
                >
                  <h3 className="text-sm font-bold text-white md:text-base">{faq.question}</h3>
                  <ChevronDown className={`h-5 w-5 shrink-0 text-amber-400 transition-transform duration-200 ${openFaq === index ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === index && (
                  <div className="px-5 pb-4 md:px-6 md:pb-5">
                    <p className={`text-sm leading-relaxed text-white/65 md:text-base${index === 0 ? ' speakable-faq-first' : ''}`}>
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═════════════════════════════ EXPLORE MORE — WARM LIGHT */}
      <section className="relative bg-gradient-to-b from-[#FFF6DC] via-amber-50/60 to-white py-16 md:py-24">
        <span aria-hidden="true" className={`absolute inset-x-0 top-0 h-[3px] ${GOLD_LANE}`} />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-amber-300 bg-amber-100/70 px-5 py-2">
              <Navigation className="h-4 w-4 text-amber-600" />
              <span className="text-xs font-black uppercase tracking-[0.18em] text-amber-700">Explore More</span>
            </div>
            <h2 className="font-display-serif text-balance text-3xl font-black text-slate-900 sm:text-4xl lg:text-5xl">
              More <span className="text-amber-600">services</span>
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {(() => {
              // The auto-generated links below slugify `location` and only resolve
              // when location is a single city that actually has those pages
              // (Mathura, Amritsar…). Multi-destination hubs ("Rishikesh, Corbett
              // & Nainital") or remote shrines (Kedarnath) have no such pages, so
              // an entry can supply an explicit `relatedLinks: [{href,label}]`
              // list instead — that is always preferred and prevents 404s.
              const locSlug = festival.location.toLowerCase().replace(/\s+/g, '-');
              // Week 48: the guide that explains this trip (dates, where to
              // stand, when to leave) is linked first from its booking page.
              const FESTIVAL_GUIDE = {
                'navratri-vaishno-devi-cab': { href: '/navratri-vaishno-devi-by-road', label: 'Navratri at Vaishno Devi by road: the guide' },
                'diwali-ayodhya-transport': { href: '/deepotsav-ayodhya-2026-guide', label: 'Deepotsav in Ayodhya: how to reach, where to stand' },
                'chhath-puja-varanasi-transport': { href: '/chhath-puja-varanasi-ghat-guide', label: 'Chhath on the Varanasi ghats: the guide' },
                'pushkar-mela-transport': { href: '/pushkar-mela-2026-by-car', label: 'Pushkar Mela 2026 by car: the guide' },
              };
              const guideLink = FESTIVAL_GUIDE[festival.slug];
              const baseLinks = festival.relatedLinks?.length
                ? festival.relatedLinks
                : [
                { href: `/sightseeing/${locSlug}`, label: `${festival.location} Sightseeing Tour` },
                { href: `/delhi-airport-to-${locSlug}-taxi`, label: `Delhi Airport to ${festival.location} Taxi` },
                { href: `/${locSlug}`, label: `${festival.location} Cab Service` },
                { href: `/${locSlug}-travel-guide`, label: `${festival.location} Travel Guide` },
                { href: `/places-to-visit-near-${locSlug}`, label: `Places Near ${festival.location}` },
                { href: `/${locSlug}-food-tour`, label: `${festival.location} Food Tour` },
                { href: '/tour-package', label: 'Tour Packages from Delhi' },
                { href: '/outstation-cabs', label: 'Outstation Cab Service' },
              ];
              // Week 48: whichever list is used, a link is rendered only when its
              // page exists in the build manifest (client-slugs.json).
              const links = guideLink ? [guideLink, ...baseLinks] : baseLinks;
              return filterClientLinks(links).map((link, i) => (
                <Link key={i} href={link.href} className="group flex items-center gap-3 rounded-xl border border-amber-200/70 bg-white p-4 shadow-sm transition-all duration-300 hover:border-amber-400 hover:shadow-md">
                  <ArrowRight className="h-4 w-4 flex-shrink-0 text-amber-600 transition-transform group-hover:translate-x-1" />
                  <span className="text-sm font-semibold text-slate-700 transition-colors group-hover:text-slate-900">{link.label}</span>
                </Link>
              ));
            })()}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════ FINAL CTA — DARK AURORA */}
      <section className="bg-aurora relative border-t border-white/5 py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-amber-400/40 bg-amber-400/10">
            <PartyPopper className="h-7 w-7 text-amber-400" />
          </div>
          <h2 className="font-display-serif text-balance text-3xl font-black text-white md:text-5xl">
            Book your {festival.festival} <span className="text-gradient-gold">trip now</span>
          </h2>
          <p className="mt-4 text-base font-medium text-white/80 sm:text-lg">
            {festival.location} · {festival.dates} · From {festival.fares.sedan}
          </p>
          <p className="mx-auto mt-2 max-w-xl text-sm text-white/55 sm:text-base">
            Book early to guarantee vehicle availability during peak festival season.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              onClick={() => trackWhatsAppClick('festival_trip_footer', whatsappText)}
              href={whatsappURL} target="_blank" rel="noopener noreferrer"
              className={GOLD_CTA}
            >
              <BsWhatsapp className="h-4 w-4" />
              WhatsApp Us
            </a>
            <a
              onClick={() => trackPhoneCall('festival_trip_footer')}
              href={`tel:+91${phoneNumber}`}
              className={GHOST_CTA}
            >
              <Phone className="h-4 w-4 text-amber-400" />
              Call {phoneNumber}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FestivalTripClient;
