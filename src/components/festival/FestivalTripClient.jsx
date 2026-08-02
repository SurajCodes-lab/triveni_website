'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Phone, MapPin, Calendar, Check, Star,
  Sparkles, Shield, ChevronRight, ChevronDown,
  Clock, Users, ArrowRight, Car, Heart,
  Navigation, Award, Flame, PartyPopper
} from '@/components/ui/icons';
import { WhatsAppIcon as BsWhatsapp } from '@/components/ui/icons';
import { phoneNumber } from '@/utilis/data';
import { FAQSection } from '@/components/seo/FAQSection';
import { trackWhatsAppClick, trackPhoneCall } from '@/utilis/analytics';
import { SetStickyCta } from '@/components/ui/StickyCtaContext';
import QuickEnquiryForm from '@/components/ui/QuickEnquiryForm';

const FestivalTripClient = ({ festival }) => {
  const [activeDay, setActiveDay] = useState(null);
  const [showAllTips, setShowAllTips] = useState(false);

  const whatsappText = `Hi! I want to book ${festival.title}. Please share package details and availability.`;
  const whatsappMessage = encodeURIComponent(whatsappText);
  const whatsappURL = `https://wa.me/91${phoneNumber}?text=${whatsappMessage}`;

  return (
    <div className="min-h-screen bg-red-950 overflow-hidden">
      <SetStickyCta
        price={festival.fares.sedan}
        label={`${festival.festival} - ${festival.location}`}
        whatsappText={whatsappText}
      />
      {/* Shimmer animation style */}
      <style jsx>{`
        @keyframes shimmer { 0% { background-position: -200% 0; } 100% { background-position: 200% 0; } }
        @keyframes float { 0%,100% { transform: translateY(0px); } 50% { transform: translateY(-12px); } }
        @keyframes diya-glow { 0%,100% { box-shadow: 0 0 20px rgba(251,191,36,0.3), 0 0 60px rgba(251,191,36,0.1); } 50% { box-shadow: 0 0 40px rgba(251,191,36,0.5), 0 0 80px rgba(251,191,36,0.2); } }
        @keyframes lantern-swing { 0%,100% { transform: rotate(-2deg); } 50% { transform: rotate(2deg); } }
        .shimmer-text { background: linear-gradient(90deg, #f59e0b, #fbbf24, #f59e0b, #fbbf24); background-size: 200% auto; -webkit-background-clip: text; -webkit-text-fill-color: transparent; animation: shimmer 3s linear infinite; }
        .diya-card { animation: diya-glow 3s ease-in-out infinite; }
        .float-slow { animation: float 6s ease-in-out infinite; }
        .float-medium { animation: float 4s ease-in-out infinite; }
        .lantern-card { animation: lantern-swing 4s ease-in-out infinite; transform-origin: top center; }
      `}</style>

      {/* HERO SECTION — true viewport-height hero, destination photo visible */}
      <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden">
        {/* Destination photo — the pitch, now actually visible */}
        {festival.heroImage && (
          <Image
            src={festival.heroImage}
            alt={`${festival.festival} at ${festival.location} — cab & tempo hire from Delhi with Triveni Cabs`}
            fill
            priority
            sizes="100vw"
            className="object-cover scale-105"
          />
        )}
        {/* Premium scrim: light at top (photo shows), dark at bottom (text legible) */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/55 via-slate-950/45 to-slate-950/90" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(250,207,45,0.16),transparent_55%)]" />
        {/* top gold hairline */}
        <div className="absolute inset-x-0 top-0 z-20 h-[3px] bg-gradient-to-r from-transparent via-amber-400 to-transparent" />
        {/* two subtle gold glow orbs */}
        <div className="float-slow absolute top-24 left-[8%] w-40 h-40 md:w-72 md:h-72 bg-amber-400/20 rounded-full blur-3xl" />
        <div className="float-medium absolute bottom-24 right-[8%] w-56 h-56 md:w-96 md:h-96 bg-amber-500/12 rounded-full blur-3xl" />

        {/* Hero Content — fits ONE viewport inside the safe area (below the fixed
            header, above the mobile sticky bar). Nothing cut, nothing scrolls. */}
        <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 text-center pt-[76px] pb-[84px] sm:py-16">
          {/* Breadcrumb */}
          <nav className="mb-2.5 sm:mb-4" aria-label="Breadcrumb">
            <ol className="inline-flex items-center gap-2 text-[0.7rem] sm:text-sm">
              <li><Link href="/" className="text-white/60 hover:text-white transition-colors">Home</Link></li>
              <ChevronRight className="w-3.5 h-3.5 text-white/40" />
              <li><span className="text-amber-400 font-medium truncate max-w-[160px] sm:max-w-[220px]">{festival.festival}</span></li>
            </ol>
          </nav>

          {/* Festival badge */}
          <div className="mb-3 sm:mb-5">
            <span className="inline-flex items-center gap-2 rounded-full glass-dark px-3.5 py-1.5 sm:px-5 sm:py-2 text-[0.7rem] sm:text-sm font-bold uppercase tracking-wider text-amber-300 shadow-lg shadow-black/30">
              <PartyPopper className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400" />
              {festival.festival} {festival.year}
              <Flame className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-300" />
            </span>
          </div>

          {/* Title */}
          <h1 className="font-black leading-[1.06] tracking-tight text-balance text-[1.55rem] sm:text-5xl lg:text-6xl mb-3 sm:mb-5">
            <span className="text-white drop-shadow-xl">{festival.festival} Special</span>
            <span className="block mt-0.5 sm:mt-1 text-gradient-gold">{festival.location} Cab Service</span>
          </h1>

          {/* Quick info pills */}
          <div className="flex flex-wrap justify-center gap-2 mb-4 sm:mb-6">
            {[
              { icon: Calendar, text: festival.dates },
              { icon: MapPin, text: `${festival.distanceFromDelhi} from Delhi` },
              { icon: Clock, text: festival.duration }
            ].map((pill, i) => (
              <div key={i} className="flex items-center gap-1.5 glass-dark rounded-full px-3 py-1.5 text-[0.72rem] sm:text-sm">
                <pill.icon className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span className="text-white/90 font-medium">{pill.text}</span>
              </div>
            ))}
          </div>

          {/* Price + CTAs in one compact glass card so it all fits the fold */}
          <div className="mx-auto max-w-lg rounded-3xl glass-dark p-3.5 sm:p-5 shadow-2xl shadow-black/40">
            <div className="flex items-center justify-center gap-3 mb-3 sm:mb-4">
              <span className="text-[0.6rem] uppercase tracking-widest text-white/50">From</span>
              <span className="text-3xl sm:text-5xl font-black text-gradient-gold leading-none">{festival.fares.sedan}</span>
              <span className="text-left text-[0.7rem] text-white/50 leading-tight">Sedan<br/>one-way</span>
            </div>
            <div className="flex flex-col sm:flex-row gap-2.5">
              <a onClick={() => trackWhatsAppClick('festival_trip_hero', whatsappText)} href={whatsappURL} target="_blank" rel="noopener noreferrer"
                className="sheen glow-gold group flex flex-1 items-center justify-center gap-2 min-h-[48px] rounded-xl bg-amber-400 px-5 py-3 font-black text-slate-900 transition-transform hover:scale-[1.02] active:scale-95">
                <BsWhatsapp className="w-5 h-5" />
                Book on WhatsApp
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>
              <a onClick={() => trackPhoneCall('festival_trip_hero')} href={`tel:+91${phoneNumber}`}
                className="flex items-center justify-center gap-2 min-h-[48px] rounded-xl border border-white/15 bg-white/5 px-5 py-3 font-bold text-white backdrop-blur-sm transition-colors hover:bg-white/10">
                <Phone className="w-4 h-4 text-amber-400" />
                Call {phoneNumber}
              </a>
            </div>
            {/* Trust row */}
            <div className="mt-3 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-[0.7rem] sm:text-xs text-white/60">
              <span className="flex items-center gap-1"><Star className="w-3.5 h-3.5 text-amber-400" /> 4.9&#9733;</span>
              <span className="flex items-center gap-1"><Users className="w-3.5 h-3.5 text-amber-400" /> 10,000+ trips</span>
              <span className="flex items-center gap-1"><Shield className="w-3.5 h-3.5 text-amber-400" /> Verified drivers</span>
              <span className="flex items-center gap-1"><Check className="w-3.5 h-3.5 text-amber-400" /> No advance</span>
            </div>
          </div>
        </div>

        {/* scroll cue (desktop only — no room on mobile) */}
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 hidden sm:flex flex-col items-center gap-1 text-white/40">
          <span className="text-[0.65rem] uppercase tracking-widest">Scroll</span>
          <ChevronDown className="w-4 h-4 animate-bounce" />
        </div>
      </section>

      {/* Enquiry form — moved out of the hero so the hero fits one viewport */}
      <section className="relative bg-slate-950 py-10 sm:py-12">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(250,207,45,0.06),transparent_60%)]" />
        <div className="relative max-w-xl mx-auto px-4 sm:px-6">
          <QuickEnquiryForm fromCity="Delhi" toCity={festival.location} pageType="route" />
        </div>
      </section>

      {/* FESTIVAL HIGHLIGHTS - Diya/Lantern style cards */}
      <section className="py-20 md:py-28 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(251,191,36,0.04),transparent_70%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 rounded-full px-6 py-2.5 mb-5">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span className="text-amber-400 font-semibold text-sm uppercase tracking-wider">Festival Highlights</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white">
              Why Celebrate <span className="bg-gradient-to-r from-amber-400 to-red-400 bg-clip-text text-transparent">{festival.festival}</span> at {festival.location}?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {festival.highlights.map((highlight, i) => (
              <div key={i} className="group relative">
                {/* Diya flame accent at top */}
                <div className="absolute -top-3 left-8 w-6 h-6 bg-gradient-to-t from-amber-500 to-yellow-300 rounded-full blur-sm opacity-60 group-hover:opacity-100 transition-opacity" />
                <div className="bg-white/[0.04] backdrop-blur-2xl rounded-2xl border border-white/10 hover:border-amber-500/40 p-6 transition-all duration-500 hover:bg-white/[0.08] hover:shadow-2xl hover:shadow-amber-500/10 relative overflow-hidden">
                  {/* Inner glow on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-500/0 to-red-500/0 group-hover:from-amber-500/5 group-hover:to-red-500/5 transition-all duration-500 rounded-2xl" />
                  <div className="flex items-start gap-4 relative">
                    <div className="flex-shrink-0 w-11 h-11 bg-gradient-to-br from-amber-500 to-red-500 rounded-xl flex items-center justify-center text-white font-bold shadow-lg shadow-amber-500/20 group-hover:scale-110 transition-transform duration-300">
                      {i + 1}
                    </div>
                    <p className="text-white/80 text-lg group-hover:text-white transition-colors duration-300 leading-relaxed">{highlight}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY — real destination photography. A travel page without pictures
          of the place cannot sell the trip; this section previously did not exist. */}
      {festival.gallery?.length > 0 && (
        <section className="py-16 md:py-24 bg-red-950/20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-black text-white">
                {festival.location} <span className="bg-gradient-to-r from-amber-400 to-yellow-300 bg-clip-text text-transparent">in pictures</span>
              </h2>
              <p className="text-white/50 mt-3">What you’ll see on this trip.</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
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
                    <div className="absolute inset-0 bg-gradient-to-t from-red-950/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ITINERARY - Day planner style */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-red-950/30 to-red-950">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 rounded-full px-6 py-2.5 mb-5">
              <Navigation className="w-4 h-4 text-amber-400" />
              <span className="text-amber-400 font-semibold text-sm uppercase tracking-wider">Trip Itinerary</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white">
              Your <span className="bg-gradient-to-r from-amber-400 to-yellow-300 bg-clip-text text-transparent">{festival.festival}</span> Trip Plan
            </h2>
          </div>
          {/* Timeline connector */}
          <div className="relative">
            <div className="absolute left-[29px] md:left-[31px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-amber-500/50 via-red-500/30 to-transparent hidden md:block" />
            <div className="space-y-5">
              {festival.itinerary.map((day, i) => (
                <div key={i} className="relative">
                  {/* Timeline dot */}
                  <div className="absolute left-[22px] top-7 w-4 h-4 bg-amber-500 rounded-full border-2 border-red-950 shadow-lg shadow-amber-500/30 z-10 hidden md:block" />
                  <div className="md:ml-12 bg-white/[0.04] backdrop-blur-2xl rounded-2xl border border-white/10 hover:border-amber-500/30 overflow-hidden transition-all duration-500 hover:shadow-xl hover:shadow-amber-500/5">
                    <button
                      onClick={() => setActiveDay(activeDay === i ? null : i)}
                      className="w-full flex items-center justify-between p-6 text-left hover:bg-white/[0.03] transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-red-500 rounded-2xl flex flex-col items-center justify-center shadow-lg shadow-amber-500/20">
                          <span className="text-white font-black text-xs uppercase">{day.day.split(' ')[0]}</span>
                          <span className="text-white font-black text-lg leading-none">{day.day.split(' ')[1]}</span>
                        </div>
                        <div>
                          <h3 className="text-white font-bold text-lg md:text-xl">{day.title}</h3>
                          <p className="text-white/40 text-sm">{day.activities.length} activities planned</p>
                        </div>
                      </div>
                      <ChevronDown className={`w-5 h-5 text-amber-400 transition-transform duration-300 ${activeDay === i ? 'rotate-180' : ''}`} />
                    </button>
                    {activeDay === i && (
                      <div className="px-6 pb-6 border-t border-white/5">
                        <ul className="space-y-3 pt-5">
                          {day.activities.map((activity, j) => (
                            <li key={j} className="flex items-start gap-3">
                              <div className="flex-shrink-0 w-6 h-6 bg-amber-500/15 rounded-full flex items-center justify-center mt-0.5">
                                <Check className="w-3.5 h-3.5 text-amber-400" />
                              </div>
                              <span className="text-white/75 leading-relaxed">{activity}</span>
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

      {/* PACKAGE PRICING - Festive lantern cards */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 rounded-full px-6 py-2.5 mb-5">
              <Car className="w-4 h-4 text-amber-400" />
              <span className="text-amber-400 font-semibold text-sm uppercase tracking-wider">Vehicle Options</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white">
              Choose Your <span className="bg-gradient-to-r from-amber-400 to-yellow-300 bg-clip-text text-transparent">Vehicle</span>
            </h2>
            <p className="text-white/50 mt-4 text-lg">One-way fares from Delhi. Round-trip packages at discounted rates.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { type: "Sedan", desc: "Swift Dzire / Honda Amaze", capacity: "4 Passengers", fare: festival.fares.sedan, icon: Car, img: "/images/car/swift_dzire.jpg" },
              { type: "SUV", desc: "Ertiga / Innova", capacity: "6 Passengers", fare: festival.fares.suv, icon: Users, popular: true, img: "/images/car/ertiga.jpg" },
              { type: "Tempo Traveller", desc: "12-17 Seater", capacity: "12+ Passengers", fare: festival.fares.tempo, icon: Users, img: "/images/tempo/17_seater.jpg" }
            ].map((vehicle, i) => (
              <div key={i} className={`relative group ${vehicle.popular ? 'md:-mt-4 md:mb-4' : ''}`}>
                {vehicle.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                    <span className="bg-gradient-to-r from-amber-500 to-red-500 text-white text-xs font-bold px-5 py-1.5 rounded-full shadow-lg shadow-amber-500/30 uppercase tracking-wider">Most Popular</span>
                  </div>
                )}
                {/* Lantern string at top */}
                <div className="flex justify-center mb-2">
                  <div className="w-0.5 h-4 bg-gradient-to-b from-amber-500/50 to-amber-500/20" />
                </div>
                <div className={`bg-white/[0.04] backdrop-blur-2xl rounded-3xl border ${vehicle.popular ? 'border-amber-500/40 shadow-2xl shadow-amber-500/15' : 'border-white/10'} p-8 text-center transition-all duration-500 hover:border-amber-500/40 hover:shadow-2xl hover:shadow-amber-500/10 hover:bg-white/[0.07] hover:scale-105 relative overflow-hidden`}>
                  {/* Inner festive glow */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-24 bg-amber-500/10 rounded-full blur-2xl" />
                  <div className="relative">
                    {/* Real fleet photo — object-contain so the whole vehicle shows */}
                    <div className="relative h-32 sm:h-36 w-full mb-4 rounded-2xl bg-white/[0.03] overflow-hidden">
                      <Image
                        src={vehicle.img}
                        alt={`${vehicle.type} (${vehicle.desc}) for ${festival.festival} at ${festival.location} — Triveni Cabs`}
                        fill
                        sizes="(max-width: 768px) 90vw, 30vw"
                        className="object-contain p-2 transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <h3 className="text-white font-bold text-xl mb-1">{vehicle.type}</h3>
                    <p className="text-white/40 text-sm mb-1">{vehicle.desc}</p>
                    <p className="text-white/50 text-sm mb-5">{vehicle.capacity}</p>
                    <div className="text-4xl font-black bg-gradient-to-r from-amber-400 to-yellow-300 bg-clip-text text-transparent mb-6">{vehicle.fare}</div>
                    <a onClick={() => trackWhatsAppClick('festival_trip_vehicle', `Hi! I want to book ${festival.title} with a ${vehicle.type}. Please share package details.`)} href={`https://wa.me/91${phoneNumber}?text=${encodeURIComponent(`Hi! I want to book ${festival.title} with a ${vehicle.type}. Please share package details.`)}`} target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 min-h-[48px] bg-gradient-to-r from-amber-500 to-red-500 hover:from-amber-400 hover:to-red-400 text-white px-6 py-3.5 rounded-xl font-bold text-sm w-full justify-center transition-all duration-300 shadow-lg shadow-amber-500/20 hover:shadow-amber-500/30">
                      <BsWhatsapp className="w-4 h-4" />
                      Book Now
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRAVEL TIPS */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-red-950/30 to-red-950">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 rounded-full px-6 py-2.5 mb-5">
              <Award className="w-4 h-4 text-amber-400" />
              <span className="text-amber-400 font-semibold text-sm uppercase tracking-wider">Travel Tips</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white">
              Tips for Your <span className="bg-gradient-to-r from-amber-400 to-yellow-300 bg-clip-text text-transparent">{festival.festival}</span> Trip
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {(showAllTips ? festival.travelTips : festival.travelTips.slice(0, 4)).map((tip, i) => (
              <div key={i} className="flex items-start gap-4 bg-white/[0.04] backdrop-blur-2xl rounded-2xl border border-white/10 hover:border-amber-500/30 p-5 transition-all duration-300 hover:bg-white/[0.07]">
                <div className="flex-shrink-0 w-9 h-9 bg-gradient-to-br from-amber-500/20 to-red-500/20 rounded-xl flex items-center justify-center">
                  <Check className="w-4 h-4 text-amber-400" />
                </div>
                <p className="text-white/75 leading-relaxed">{tip}</p>
              </div>
            ))}
          </div>
          {festival.travelTips.length > 4 && (
            <div className="text-center mt-8">
              <button onClick={() => setShowAllTips(!showAllTips)}
                className="text-amber-400 hover:text-amber-300 font-semibold transition-colors border border-amber-500/20 hover:border-amber-500/40 rounded-xl px-6 py-2.5">
                {showAllTips ? 'Show Less' : `Show All ${festival.travelTips.length} Tips`}
              </button>
            </div>
          )}
        </div>
      </section>

      {/* DESCRIPTION / ABOUT */}
      <section className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="bg-white/[0.04] backdrop-blur-2xl rounded-3xl border border-white/10 p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-amber-500/10 to-transparent rounded-bl-full" />
            <h2 className="text-2xl md:text-4xl font-black text-white mb-8 relative">
              About <span className="bg-gradient-to-r from-amber-400 to-red-400 bg-clip-text text-transparent">{festival.festival}</span> at {festival.location}
            </h2>
            <div className="relative">
              {festival.description.split('\n\n').map((para, i) => (
                <p key={i} className="text-white/65 leading-relaxed text-lg mb-5 last:mb-0">{para}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* IMPORTANT DATES */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-red-950/30 to-red-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="bg-gradient-to-br from-amber-500/[0.08] to-red-500/[0.08] backdrop-blur-2xl rounded-3xl border border-amber-500/20 p-8 md:p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(251,191,36,0.05),transparent_60%)]" />
            <div className="relative">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-500/20 to-red-500/20 rounded-2xl flex items-center justify-center mx-auto mb-5">
                <Calendar className="w-8 h-8 text-amber-400" />
              </div>
              <h2 className="text-2xl md:text-4xl font-black text-white mb-3">Important Dates</h2>
              <p className="text-white/50 mb-8 text-lg">Mark your calendar for {festival.festival} {festival.year}</p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                {[
                  { value: festival.dates, label: "Festival Dates" },
                  { value: festival.season, label: "Season" },
                  { value: festival.duration, label: "Trip Duration" }
                ].map((item, i) => (
                  <div key={i} className="bg-white/[0.05] backdrop-blur-xl rounded-2xl p-5 border border-white/10 hover:border-amber-500/30 transition-all duration-300">
                    <p className="text-amber-400 font-bold text-lg mb-1">{item.value}</p>
                    <p className="text-white/40 text-sm">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY TRIVENI CABS */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white">
              Why Choose <span className="bg-gradient-to-r from-amber-400 to-yellow-300 bg-clip-text text-transparent">Triveni Cabs</span>?
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {[
              { icon: Shield, title: "Verified Drivers", desc: "Background-checked, experienced drivers" },
              { icon: Star, title: "4.8 Rating", desc: "2,800+ happy customers" },
              { icon: Clock, title: "24/7 Support", desc: "Round-the-clock helpline" },
              { icon: Car, title: "Clean AC Vehicles", desc: "Well-maintained fleet" }
            ].map((item, i) => (
              <div key={i} className="bg-white/[0.04] backdrop-blur-2xl rounded-2xl border border-white/10 hover:border-amber-500/30 p-5 text-center transition-all duration-500 hover:bg-white/[0.07] group">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-500/20 to-red-500/20 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                  <item.icon className="w-6 h-6 text-amber-400" />
                </div>
                <h3 className="text-white font-bold text-sm md:text-base mb-1">{item.title}</h3>
                <p className="text-white/40 text-xs md:text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-red-950/30 to-red-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FAQSection faqs={festival.faqs} title={`${festival.festival} ${festival.location} Cab - FAQs`} variant="dark" />
        </div>
      </section>

      {/* CROSS-SERVICE LINKS */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 rounded-full px-6 py-2.5 mb-5">
              <Navigation className="w-4 h-4 text-amber-400" />
              <span className="text-amber-400 font-semibold text-sm uppercase tracking-wider">Explore More</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white">
              More <span className="bg-gradient-to-r from-amber-400 to-yellow-300 bg-clip-text text-transparent">Services</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {(() => {
              // The auto-generated links below slugify `location` and only resolve
              // when location is a single city that actually has those pages
              // (Mathura, Amritsar…). Multi-destination hubs ("Rishikesh, Corbett
              // & Nainital") or remote shrines (Kedarnath) have no such pages, so
              // an entry can supply an explicit `relatedLinks: [{href,label}]`
              // list instead — that is always preferred and prevents 404s.
              const locSlug = festival.location.toLowerCase().replace(/\s+/g, '-');
              const links = festival.relatedLinks?.length
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
              return links.map((link, i) => (
                <Link key={i} href={link.href} className="group bg-white/[0.04] backdrop-blur-2xl rounded-xl border border-white/10 hover:border-amber-500/40 p-4 transition-all duration-300 hover:bg-white/[0.08] flex items-center gap-3">
                  <ArrowRight className="w-4 h-4 text-amber-400 flex-shrink-0 group-hover:translate-x-1 transition-transform" />
                  <span className="text-white/80 text-sm font-medium group-hover:text-white transition-colors">{link.label}</span>
                </Link>
              ));
            })()}
          </div>
        </div>
      </section>

      {/* BOOKING CTA */}
      <section className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="relative bg-gradient-to-r from-amber-500 to-red-500 rounded-3xl p-8 md:p-14 text-center shadow-2xl shadow-amber-500/20 overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
            <div className="absolute bottom-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-2xl" />
            <div className="relative">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6 backdrop-blur-sm">
                <PartyPopper className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
                Book Your {festival.festival} Trip Now!
              </h2>
              <p className="text-white/90 mb-2 text-lg font-medium">
                {festival.location} | {festival.dates} | From {festival.fares.sedan}
              </p>
              <p className="text-white/70 mb-10 text-lg">
                Book early to guarantee vehicle availability during peak festival season.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a onClick={() => trackWhatsAppClick('festival_trip_footer', whatsappText)} href={whatsappURL} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-white text-red-600 px-8 py-4 rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300">
                  <BsWhatsapp className="w-6 h-6" />
                  <span>WhatsApp Us</span>
                </a>
                <a onClick={() => trackPhoneCall('festival_trip_footer')} href={`tel:+91${phoneNumber}`}
                  className="inline-flex items-center gap-3 bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-2xl font-bold text-lg border border-white/30 hover:bg-white/30 hover:scale-105 transition-all duration-300">
                  <Phone className="w-6 h-6" />
                  <span>Call {phoneNumber}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FestivalTripClient;
