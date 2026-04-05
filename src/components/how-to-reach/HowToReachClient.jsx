'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { getCityImage, heroBlurDataURL } from '@/utilis/imageUtils';
import ScrollReveal from '@/components/shared/ScrollReveal';
import FaqAccordion from '@/components/shared/FaqAccordion';
import CTASection from '@/components/shared/CTASection';
import MobileStickyBar from '@/components/ui/MobileStickyBar';
import {
  Phone, ArrowRight, ChevronRight, ChevronDown, Clock, Car, Bus, Plane, TrainFront,
  CheckCircle2, Route, MapPin, Navigation, Star, Users, Zap, Info,
  Shield, Coffee, Mountain, Gauge,
} from '@/components/ui/icons';
import { trackWhatsAppClick, trackPhoneCall } from '@/utilis/analytics';

const WA = <svg className="w-4 h-4" viewBox="0 0 16 16" fill="currentColor"><path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/></svg>;

const MODE_META = {
  'By Car/Cab':      { icon: Car,        label: 'Car / Cab',    color: 'emerald', speed: 85, comfort: 95, cost: 70 },
  'By Bus':          { icon: Bus,        label: 'Bus',          color: 'amber',   speed: 50, comfort: 35, cost: 90 },
  'By Train + Cab':  { icon: TrainFront, label: 'Train + Cab',  color: 'cyan',    speed: 65, comfort: 60, cost: 55 },
  'By Flight + Cab': { icon: Plane,      label: 'Flight + Cab', color: 'rose',    speed: 95, comfort: 65, cost: 30 },
};

const COLOR_MAP = {
  emerald: { bar: 'bg-emerald-500', bg: 'bg-emerald-50', text: 'text-emerald-600', border: 'border-emerald-200', ring: 'ring-emerald-200/50', badge: 'bg-emerald-500' },
  amber:   { bar: 'bg-amber-500',   bg: 'bg-amber-50',   text: 'text-amber-600',   border: 'border-amber-200',   ring: 'ring-amber-200/50',   badge: 'bg-amber-500' },
  cyan:    { bar: 'bg-cyan-500',    bg: 'bg-cyan-50',    text: 'text-cyan-600',    border: 'border-cyan-200',    ring: 'ring-cyan-200/50',    badge: 'bg-cyan-500' },
  rose:    { bar: 'bg-rose-500',    bg: 'bg-rose-50',    text: 'text-rose-600',    border: 'border-rose-200',    ring: 'ring-rose-200/50',    badge: 'bg-rose-500' },
};

function MeterBar({ value, color }) {
  return (
    <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden flex-1">
      <div className={`h-full rounded-full ${color} transition-all duration-700`} style={{ width: `${value}%` }} />
    </div>
  );
}

export default function HowToReachClient({ route, relatedRoutes }) {
  const [activeMode, setActiveMode] = useState(0);
  const [expandedMode, setExpandedMode] = useState(-1);
  const heroImage = getCityImage(route.destination) || getCityImage(route.origin);
  const whatsappMsg = `Hi, I want to book a cab from ${route.origin} to ${route.destination}`;
  const cabMode = route.travelModes.find(m => m.recommended) || route.travelModes[0];

  return (
    <div className="min-h-screen bg-[#f8f7f4] text-slate-900">

      {/* ━━━ HERO: Departure board aesthetic ━━━ */}
      <section className="relative min-h-[75vh] sm:min-h-[80vh] flex flex-col justify-end overflow-hidden">
        <Image src={heroImage} alt={`How to reach ${route.destination} from ${route.origin}`} fill priority className="object-cover" sizes="100vw" quality={85} placeholder="blur" blurDataURL={heroBlurDataURL} />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-cyan-400 via-sky-500 to-indigo-500 z-20" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full pb-8 sm:pb-12">
          <nav className="mb-6 flex items-center gap-1.5 text-xs text-white/40">
            <Link href="/" className="hover:text-white/70 transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <Link href="/how-to-reach" className="hover:text-white/70 transition-colors">How to Reach</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-white/60">{route.origin} to {route.destination}</span>
          </nav>

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 lg:gap-8">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10 mb-5">
                <Navigation className="w-3.5 h-3.5 text-cyan-400" />
                <span className="text-[11px] font-bold text-cyan-400 uppercase tracking-widest">Transit Guide</span>
              </div>
              <p className="text-white/40 text-sm font-medium uppercase tracking-widest mb-2">How to Reach</p>
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-white leading-[0.95] tracking-tight">
                {route.destination}<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-sky-400">from {route.origin}</span>
              </h1>
              <p className="text-white/40 mt-4 text-sm sm:text-base max-w-lg leading-relaxed">
                {route.travelModes.length} travel modes compared. Cab from {cabMode?.costRange || 'best price'}.
              </p>
              <div className="flex flex-wrap gap-3 mt-6">
                <a onClick={() => trackPhoneCall('how_to_reach_hero')} href="tel:+917668570551" className="inline-flex items-center gap-2 bg-[#FACF2D] text-slate-900 px-6 py-3 rounded-full font-bold text-sm hover:bg-amber-300 transition-all active:scale-[0.97] shadow-lg shadow-amber-500/20">
                  <Phone className="w-4 h-4" /> Call 7668570551
                </a>
                <a onClick={() => trackWhatsAppClick('how_to_reach_hero')} href={`https://wa.me/917668570551?text=${encodeURIComponent(whatsappMsg)}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-full font-bold text-sm border border-white/15 hover:bg-white/15 transition-all">
                  {WA} WhatsApp Quote
                </a>
              </div>
            </div>

            {/* Floating departure card */}
            <div className="bg-white/10 backdrop-blur-xl border border-white/15 rounded-2xl p-5 sm:p-6 lg:w-72 flex-shrink-0">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-[10px] text-white/30 uppercase tracking-widest font-semibold">Modes</p>
                  <p className="text-3xl font-black text-white leading-tight">{route.travelModes.length}</p>
                </div>
                <div>
                  <p className="text-[10px] text-white/30 uppercase tracking-widest font-semibold">Best Fare</p>
                  <p className="text-sm font-bold text-cyan-400">{cabMode?.costRange || 'Call'}</p>
                </div>
                <div>
                  <p className="text-[10px] text-white/30 uppercase tracking-widest font-semibold">Destination</p>
                  <p className="text-sm font-bold text-white/80 truncate">{route.destination}</p>
                </div>
                <div>
                  <p className="text-[10px] text-white/30 uppercase tracking-widest font-semibold">Best Mode</p>
                  <p className="text-sm font-bold text-[#FACF2D]">Cab</p>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-white/10 flex items-center gap-2">
                <div className="flex -space-x-1">{[1,2,3,4,5].map(i => <Star key={i} className="w-3 h-3 text-[#FACF2D] fill-[#FACF2D]" />)}</div>
                <span className="text-[11px] text-white/40 font-medium">4.9 · 10,000+ trips</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ━━━ MODE SELECTOR STRIP: Departure board ━━━ */}
      <section className="bg-slate-900 py-6 sm:py-8 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-[10px] text-white/30 uppercase tracking-widest font-bold mb-4 text-center">Select Travel Mode</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
            {route.travelModes.map((tm, i) => {
              const meta = MODE_META[tm.mode] || { icon: Car, label: tm.mode, color: 'emerald', speed: 50, comfort: 50, cost: 50 };
              const Icon = meta.icon;
              const colors = COLOR_MAP[meta.color] || COLOR_MAP.emerald;
              const isActive = activeMode === i;
              return (
                <button key={i} onClick={() => setActiveMode(i)} className={`relative p-3 sm:p-4 rounded-xl text-left transition-all duration-300 ${isActive ? 'bg-white/10 ring-2 ring-white/20' : 'bg-white/5 hover:bg-white/8'}`}>
                  {tm.recommended && <div className={`absolute -top-1.5 right-3 ${colors.badge} px-2 py-0.5 rounded-full`}><span className="text-[8px] font-black text-white uppercase tracking-wider">Best</span></div>}
                  <Icon className={`w-5 h-5 mb-2 ${isActive ? 'text-cyan-400' : 'text-white/40'}`} />
                  <p className={`font-bold text-xs sm:text-sm ${isActive ? 'text-white' : 'text-white/60'}`}>{meta.label}</p>
                  <p className="text-[10px] text-white/30 mt-0.5">{tm.duration || tm.totalDuration || 'Varies'}</p>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ━━━ ACTIVE MODE DETAIL: Horizontal visual card ━━━ */}
      <section className="py-12 sm:py-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <p className="text-[10px] font-bold text-sky-600 uppercase tracking-widest mb-1">Mode Comparison</p>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-8">{route.origin} to {route.destination} — All Options</h2>
          </ScrollReveal>

          {/* Bento: Large active card + smaller alternatives */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
            {/* Large active mode card */}
            <div className="lg:col-span-3">
              {route.travelModes.map((tm, i) => {
                if (i !== activeMode) return null;
                const meta = MODE_META[tm.mode] || { icon: Car, label: tm.mode, color: 'emerald', speed: 50, comfort: 50, cost: 50 };
                const Icon = meta.icon;
                const colors = COLOR_MAP[meta.color] || COLOR_MAP.emerald;
                return (
                  <div key={i} className={`bg-white rounded-2xl border p-6 sm:p-8 shadow-sm ${tm.recommended ? `${colors.border} ring-1 ${colors.ring}` : 'border-slate-100'}`}>
                    <div className="flex items-center gap-3 mb-6">
                      <div className={`w-12 h-12 rounded-xl ${colors.bg} flex items-center justify-center`}>
                        <Icon className={`w-6 h-6 ${colors.text}`} />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="text-xl font-black text-slate-900">{tm.mode}</h3>
                          {tm.recommended && <span className="text-[9px] font-black text-white bg-emerald-500 px-2 py-0.5 rounded-full uppercase tracking-wider">Recommended</span>}
                        </div>
                        <div className="flex items-center gap-3 text-sm text-slate-500 mt-0.5">
                          <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {tm.duration || tm.totalDuration || 'Varies'}</span>
                          <span className="font-bold text-sky-600">{tm.costRange || tm.flightCostRange || 'Varies'}</span>
                          {tm.distance && <span>{tm.distance}</span>}
                        </div>
                      </div>
                    </div>

                    {/* Visual meters */}
                    <div className="space-y-3 mb-6">
                      {[
                        { label: 'Speed', value: meta.speed, color: 'bg-sky-500' },
                        { label: 'Comfort', value: meta.comfort, color: 'bg-emerald-500' },
                        { label: 'Value', value: meta.cost, color: 'bg-amber-500' },
                      ].map((m, j) => (
                        <div key={j} className="flex items-center gap-3">
                          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest w-14">{m.label}</span>
                          <MeterBar value={m.value} color={m.color} />
                          <span className="text-xs font-bold text-slate-600 w-8 text-right">{m.value}%</span>
                        </div>
                      ))}
                    </div>

                    {tm.details && <p className="text-slate-600 text-sm leading-relaxed mb-5">{tm.details}</p>}

                    {(tm.pros?.length > 0 || tm.cons?.length > 0) && (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {tm.pros?.length > 0 && (
                          <div className="bg-emerald-50 rounded-xl p-4 border border-emerald-100">
                            <p className="text-[10px] font-bold text-emerald-700 uppercase tracking-widest mb-2">Pros</p>
                            {tm.pros.map((pro, j) => (
                              <div key={j} className="flex items-start gap-2 text-sm text-emerald-800 mb-1.5">
                                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0 mt-0.5" /> {pro}
                              </div>
                            ))}
                          </div>
                        )}
                        {tm.cons?.length > 0 && (
                          <div className="bg-red-50 rounded-xl p-4 border border-red-100">
                            <p className="text-[10px] font-bold text-red-700 uppercase tracking-widest mb-2">Cons</p>
                            {tm.cons.map((con, j) => (
                              <div key={j} className="flex items-start gap-2 text-sm text-red-800 mb-1.5">
                                <Info className="w-3.5 h-3.5 text-red-400 flex-shrink-0 mt-0.5" /> {con}
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Smaller alternative cards */}
            <div className="lg:col-span-2 flex flex-col gap-3">
              {route.travelModes.map((tm, i) => {
                if (i === activeMode) return null;
                const meta = MODE_META[tm.mode] || { icon: Car, label: tm.mode, color: 'emerald', speed: 50, comfort: 50, cost: 50 };
                const Icon = meta.icon;
                const colors = COLOR_MAP[meta.color] || COLOR_MAP.emerald;
                return (
                  <button key={i} onClick={() => setActiveMode(i)} className="bg-white rounded-xl border border-slate-100 p-4 text-left hover:border-sky-200 hover:shadow-md transition-all duration-300 group">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-lg ${colors.bg} flex items-center justify-center flex-shrink-0`}>
                        <Icon className={`w-5 h-5 ${colors.text}`} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-bold text-slate-900 text-sm">{meta.label}</p>
                        <div className="flex items-center gap-2 text-xs text-slate-500">
                          <span>{tm.duration || tm.totalDuration || 'Varies'}</span>
                          <span className="font-bold text-sky-600">{tm.costRange || tm.flightCostRange || 'Varies'}</span>
                        </div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-sky-500 transition-colors flex-shrink-0" />
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ━━━ DETAILED BREAKDOWN: Expandable cards ━━━ */}
      <section className="py-12 sm:py-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <p className="text-[10px] font-bold text-sky-600 uppercase tracking-widest mb-1">Deep Dive</p>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-8">Each Mode Explained</h2>
          </ScrollReveal>

          <div className="space-y-3">
            {route.travelModes.map((tm, i) => {
              const meta = MODE_META[tm.mode] || { icon: Car, label: tm.mode, color: 'emerald' };
              const Icon = meta.icon;
              const colors = COLOR_MAP[meta.color] || COLOR_MAP.emerald;
              const isOpen = expandedMode === i;
              return (
                <ScrollReveal key={i} delay={i * 40}>
                  <div className={`rounded-xl border transition-all duration-300 overflow-hidden ${isOpen ? 'bg-white shadow-lg border-slate-200' : 'bg-white/60 border-slate-100 hover:border-slate-200 hover:bg-white'}`}>
                    <button onClick={() => setExpandedMode(isOpen ? -1 : i)} className="w-full flex items-center gap-3 sm:gap-4 p-4 sm:p-5 text-left">
                      <div className={`w-1.5 self-stretch rounded-full ${colors.bar} flex-shrink-0`} />
                      <Icon className={`w-5 h-5 ${colors.text} flex-shrink-0`} />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <h3 className="font-bold text-slate-900 text-sm sm:text-base">{tm.mode}</h3>
                          {tm.recommended && <span className="text-[8px] font-black text-white bg-emerald-500 px-1.5 py-0.5 rounded-full uppercase">Best</span>}
                        </div>
                        <div className="flex items-center gap-3 text-xs text-slate-500">
                          <span className="font-semibold">{tm.duration || tm.totalDuration || 'Varies'}</span>
                          <span className={`font-bold ${colors.text}`}>{tm.costRange || tm.flightCostRange || 'Varies'}</span>
                        </div>
                      </div>
                      <ChevronDown className={`w-4 h-4 text-slate-400 flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                    </button>

                    <div className={`transition-all duration-300 ${isOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
                      <div className="px-5 pb-5 pl-10 sm:pl-12 space-y-4">
                        <div className="h-px bg-slate-100" />
                        {tm.details && <p className="text-slate-600 text-sm leading-relaxed">{tm.details}</p>}

                        {tm.types?.length > 0 && (
                          <div className="bg-amber-50 rounded-lg p-3 border border-amber-100">
                            <p className="text-[10px] font-bold text-amber-700 uppercase tracking-widest mb-2">Bus Options</p>
                            {tm.types.map((type, j) => <p key={j} className="text-sm text-amber-800 flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-amber-400" /> {type}</p>)}
                          </div>
                        )}

                        {tm.trainOptions?.length > 0 && (
                          <div className="bg-cyan-50 rounded-lg p-3 border border-cyan-100">
                            <p className="text-[10px] font-bold text-cyan-700 uppercase tracking-widest mb-2">Train Options</p>
                            {tm.nearestStation && <p className="text-sm text-cyan-700 mb-2"><MapPin className="w-3 h-3 inline mr-1" />Nearest: <strong>{tm.nearestStation}</strong></p>}
                            {tm.trainOptions.map((train, j) => (
                              <div key={j} className="bg-white rounded-lg p-2.5 border border-cyan-100 mb-2">
                                <div className="flex items-center justify-between"><span className="font-bold text-slate-900 text-sm">{train.name}</span><span className="text-cyan-600 font-bold text-sm">{train.fare}</span></div>
                                <div className="flex items-center gap-3 text-xs text-slate-500"><span>From: {train.from}</span><span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {train.duration}</span></div>
                              </div>
                            ))}
                            {tm.cabFromStation && <div className="bg-white rounded-lg p-2.5 border border-sky-100 mt-2"><p className="text-[10px] font-bold text-sky-600 uppercase tracking-wider">Cab from Station</p><p className="text-sm text-slate-600">{tm.cabFromStation}</p></div>}
                          </div>
                        )}

                        {tm.nearestAirport && (
                          <div className="bg-rose-50 rounded-lg p-3 border border-rose-100">
                            <p className="text-[10px] font-bold text-rose-700 uppercase tracking-widest mb-2">Flight Details</p>
                            <p className="text-sm text-rose-800"><Plane className="w-3 h-3 inline mr-1" />Airport: <strong>{tm.nearestAirport}</strong></p>
                            {tm.flightCostRange && <p className="text-sm text-rose-800">Cost: <strong>{tm.flightCostRange}</strong></p>}
                            {tm.cabFromAirport && <div className="bg-white rounded-lg p-2.5 border border-sky-100 mt-2"><p className="text-[10px] font-bold text-sky-600 uppercase tracking-wider">Cab from Airport</p><p className="text-sm text-slate-600">{tm.cabFromAirport}</p></div>}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ━━━ WHY CAB: Dark recommendation panel ━━━ */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <p className="text-[10px] font-bold text-[#FACF2D] uppercase tracking-widest mb-1">Our Recommendation</p>
            <h2 className="text-2xl sm:text-3xl font-black text-white mb-3">Why Cab is the Smartest Choice</h2>
            {route.recommendation && <p className="text-white/40 text-sm max-w-2xl mb-8">{route.recommendation}</p>}
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {[
              { icon: Navigation, title: 'Door-to-Door', desc: 'Picked up from your location, dropped at your destination. No transfers.' },
              { icon: Mountain,   title: 'Luggage Freedom', desc: 'Carry as much luggage as you want. No weight limits, no extra charges.' },
              { icon: Users,      title: 'Family Friendly', desc: 'Perfect for families with kids. Stop anywhere, anytime for breaks.' },
              { icon: Coffee,     title: 'Scenic Stops', desc: 'Stop at viewpoints, restaurants, and attractions along the way.' },
            ].map((b, i) => (
              <ScrollReveal key={i} stagger={i * 80}>
                <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-5 hover:border-cyan-500/30 transition-all duration-300">
                  <b.icon className="w-5 h-5 text-cyan-400 mb-3" />
                  <h3 className="font-bold text-white text-sm mb-1">{b.title}</h3>
                  <p className="text-white/40 text-xs leading-relaxed">{b.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━ CAB PRICING ━━━ */}
      {route.cabPricing && (
        <section className="py-12 sm:py-16 px-4 sm:px-6 bg-slate-900">
          <div className="max-w-6xl mx-auto">
            <ScrollReveal>
              <p className="text-[10px] font-bold text-[#FACF2D] uppercase tracking-widest mb-1">Book Your Ride</p>
              <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
                <h2 className="text-2xl sm:text-3xl font-black text-white">{route.origin} to {route.destination} Cab Fares</h2>
                <p className="text-white/30 text-sm">All-inclusive · No hidden charges</p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { key: 'sedan', name: 'Sedan', sub: route.cabPricing.sedan.type, fare: route.cabPricing.sedan.price, perKm: route.cabPricing.sedan.perKm, seats: '4 Seater', pop: false, img: '/images/car/swift_dzire.jpg' },
                { key: 'suv',   name: 'SUV',   sub: route.cabPricing.suv.type,   fare: route.cabPricing.suv.price,   perKm: route.cabPricing.suv.perKm,   seats: '6-7 Seater', pop: true,  img: '/images/car/innova_crysta.jpg' },
                { key: 'tempo', name: 'Tempo Traveller', sub: route.cabPricing.tempo.type, fare: route.cabPricing.tempo.price, perKm: route.cabPricing.tempo.perKm, seats: '12 Seater', pop: false, img: '/images/car/premium_suv.jpg' },
              ].map((v, i) => (
                <ScrollReveal key={i} stagger={i * 100}>
                  <div className={`relative rounded-2xl overflow-hidden group ${v.pop ? 'ring-2 ring-[#FACF2D]/50' : ''}`}>
                    {v.pop && <div className="bg-[#FACF2D] text-center py-1.5"><span className="text-[10px] font-black text-slate-900 uppercase tracking-widest">Most Popular</span></div>}
                    <div className="relative h-36 sm:h-40">
                      <Image src={v.img} alt={v.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 768px) 100vw, 33vw" />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
                      <div className="absolute bottom-3 left-4">
                        <h3 className="text-lg font-black text-white">{v.name}</h3>
                        <p className="text-[11px] text-white/50">{v.sub} · {v.seats}</p>
                      </div>
                    </div>
                    <div className="bg-slate-800 p-5">
                      <div className="flex items-end justify-between mb-4">
                        <div>
                          <p className="text-[10px] text-white/30 uppercase tracking-wider">Starting from</p>
                          <p className="text-2xl sm:text-3xl font-black text-white">{v.fare}</p>
                        </div>
                        <span className="text-xs text-white/30 font-medium">{v.perKm}</span>
                      </div>
                      <div className="grid grid-cols-2 gap-2 mb-4">
                        {['AC Vehicle', 'GPS Tracked', 'Fuel Included', 'Verified Driver'].map((f, j) => (
                          <span key={j} className="flex items-center gap-1.5 text-[11px] text-white/50">
                            <CheckCircle2 className="w-3 h-3 text-emerald-400 flex-shrink-0" /> {f}
                          </span>
                        ))}
                      </div>
                      <a onClick={() => trackWhatsAppClick('how_to_reach_pricing')} href={`https://wa.me/917668570551?text=${encodeURIComponent(`Hi, book ${v.name} from ${route.origin} to ${route.destination}`)}`} target="_blank" rel="noopener noreferrer"
                        className={`block w-full text-center py-3 rounded-xl font-bold text-sm transition-all active:scale-[0.97] ${v.pop ? 'bg-[#FACF2D] text-slate-900 hover:bg-amber-300' : 'bg-white/10 text-white hover:bg-white/15 border border-white/10'}`}>
                        Book {v.name} <ArrowRight className="w-4 h-4 inline ml-1" />
                      </a>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
            <p className="mt-6 text-center text-white/20 text-xs">* Toll charges and state tax extra at actual.</p>
          </div>
        </section>
      )}

      {/* ━━━ FAQ ━━━ */}
      {route.faqs?.length > 0 && <FaqAccordion heading={`${route.origin} to ${route.destination} — FAQs`} faqs={route.faqs} />}

      {/* ━━━ RELATED ROUTES ━━━ */}
      {relatedRoutes?.length > 0 && (
        <section className="py-12 sm:py-16 px-4 sm:px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <ScrollReveal>
              <p className="text-[10px] font-bold text-sky-600 uppercase tracking-widest mb-1">More Routes</p>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-8">Related Travel Guides</h2>
            </ScrollReveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {relatedRoutes.map((r, i) => (
                <ScrollReveal key={i} stagger={i * 50}>
                  <Link href={`/how-to-reach/${r.slug}`} className="group flex items-center gap-4 bg-[#f8f7f4] rounded-xl p-4 hover:bg-white hover:shadow-lg transition-all duration-300 border border-transparent hover:border-slate-200">
                    <div className="w-10 h-10 rounded-lg bg-sky-50 flex items-center justify-center flex-shrink-0 group-hover:bg-sky-100 transition-colors">
                      <Navigation className="w-4 h-4 text-sky-600" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-bold text-slate-900 text-sm truncate">{r.origin} to {r.destination}</p>
                      <p className="text-xs text-slate-500">{r.travelModes?.length || 4} travel modes</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-sky-500 transition-colors flex-shrink-0" />
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTASection heading="Ready to Travel?" subheading={`Book your ${route.origin} to ${route.destination} cab. AC vehicles, verified drivers, 24/7 booking.`} />
      <MobileStickyBar />
    </div>
  );
}
