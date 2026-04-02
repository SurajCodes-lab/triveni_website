'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Phone, ArrowRight, Clock, Car, CheckCircle2, Route, MapPin,
  Star, Users, Fuel, ChevronRight, CreditCard, Tag, Sparkles,
  IndianRupee, Shield, ChevronDown, Gauge,
} from '@/components/ui/icons';
import { getCityImage, heroBlurDataURL } from '@/utilis/imageUtils';
import { trackWhatsAppClick, trackPhoneCall } from '@/utilis/analytics';
import ScrollReveal from '@/components/shared/ScrollReveal';
import FaqAccordion from '@/components/shared/FaqAccordion';
import CTASection from '@/components/shared/CTASection';
import MobileStickyBar from '@/components/ui/MobileStickyBar';

const WA = <svg className="w-4 h-4" viewBox="0 0 16 16" fill="currentColor"><path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/></svg>;

const fmt = (n) => (!n && n !== 0) ? '---' : n.toLocaleString('en-IN');

export default function TollCostClient({ route, relatedRoutes }) {
  const [activeTab, setActiveTab] = useState('car');

  const whatsappMsg = `Hi, I want to book a cab from ${route.origin} to ${route.destination} (${route.totalDistance} km). Please share toll-inclusive fare.`;
  const suvFare = Math.max(route.totalDistance, 300) * 14;
  const tempoFare = Math.max(route.totalDistance, 300) * 18;
  const heroImage = getCityImage(route.origin);
  const totalToll = activeTab === 'car' ? route.totalTollCost.car : route.totalTollCost.suv;
  const maxSingleToll = Math.max(...route.tollPlazas.map(t => activeTab === 'car' ? t.carCost : t.suvCost));
  let cumulative = 0;

  return (
    <div className="min-h-screen bg-[#f8f7f4] text-slate-900">

      {/* ━━━ HERO: Financial dashboard vibe ━━━ */}
      <section className="relative min-h-[70vh] sm:min-h-[75vh] flex flex-col justify-end overflow-hidden">
        <Image src={heroImage} alt={`${route.origin} to ${route.destination} highway toll costs`} fill priority className="object-cover" sizes="100vw" quality={85} placeholder="blur" blurDataURL={heroBlurDataURL} />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-violet-500 via-purple-400 to-fuchsia-400 z-20" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full pb-8 sm:pb-12">
          <nav className="mb-6 flex items-center gap-1.5 text-xs text-white/40">
            <Link href="/" className="hover:text-white/70 transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <Link href="/toll-cost" className="hover:text-white/70 transition-colors">Toll Cost</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-white/60">{route.origin} to {route.destination}</span>
          </nav>

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10 mb-5">
                <Gauge className="w-3.5 h-3.5 text-violet-400" />
                <span className="text-[11px] font-bold text-violet-300 uppercase tracking-widest">Cost Dashboard 2026</span>
              </div>
              <p className="text-white/40 text-sm font-medium uppercase tracking-widest mb-2">Toll Breakdown</p>
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-white leading-[0.95] tracking-tight">
                {route.origin}<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400">{route.destination}</span>
              </h1>
              <p className="text-white/40 mt-4 text-sm sm:text-base max-w-lg">{route.tollPlazas.length} toll plazas across {route.totalDistance} km highway</p>

              <div className="flex flex-wrap gap-3 mt-6">
                <a onClick={() => trackPhoneCall('toll_hero')} href="tel:+917668570551" className="inline-flex items-center gap-2 bg-[#FACF2D] text-slate-900 px-6 py-3 rounded-full font-bold text-sm hover:bg-amber-300 transition-all active:scale-[0.97] shadow-lg shadow-amber-500/20">
                  <Phone className="w-4 h-4" /> Call 7668570551
                </a>
                <a onClick={() => trackWhatsAppClick('toll_hero')} href={`https://wa.me/917668570551?text=${encodeURIComponent(whatsappMsg)}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-full font-bold text-sm border border-white/15 hover:bg-white/15 transition-all">
                  {WA} Toll-Inclusive Quote
                </a>
              </div>
            </div>

            {/* Stat card */}
            <div className="bg-white/10 backdrop-blur-xl border border-white/15 rounded-2xl p-5 sm:p-6 lg:w-72 flex-shrink-0">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-[10px] text-white/30 uppercase tracking-widest font-semibold">Toll (Car)</p>
                  <p className="text-2xl font-black text-white leading-tight">{fmt(route.totalTollCost.car)}</p>
                </div>
                <div>
                  <p className="text-[10px] text-white/30 uppercase tracking-widest font-semibold">Toll (SUV)</p>
                  <p className="text-2xl font-black text-white leading-tight">{fmt(route.totalTollCost.suv)}</p>
                </div>
                <div>
                  <p className="text-[10px] text-white/30 uppercase tracking-widest font-semibold">Plazas</p>
                  <p className="text-2xl font-black text-violet-300 leading-tight">{route.tollPlazas.length}</p>
                </div>
                <div>
                  <p className="text-[10px] text-white/30 uppercase tracking-widest font-semibold">Distance</p>
                  <p className="text-sm font-bold text-white/80">{route.totalDistance} km</p>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-white/10 flex items-center gap-2">
                <CreditCard className="w-3.5 h-3.5 text-violet-400" />
                <span className="text-[11px] text-white/40 font-medium">All plazas FASTag enabled</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ━━━ TOLL PROGRESS STRIP: Cumulative cost bar ━━━ */}
      <section className="bg-slate-900 py-6 sm:py-8 px-4 sm:px-6 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-4">
            <p className="text-[10px] text-white/30 uppercase tracking-widest font-bold">Cumulative Toll Progress</p>
            <div className="flex gap-2">
              {['car', 'suv'].map(t => (
                <button key={t} onClick={() => setActiveTab(t)} className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${activeTab === t ? 'bg-violet-500 text-white' : 'bg-white/10 text-white/50 hover:text-white/70'}`}>
                  {t === 'car' ? 'Car / Sedan' : 'SUV / MUV'}
                </button>
              ))}
            </div>
          </div>

          {/* Progress bar */}
          <div className="relative">
            <div className="flex items-center gap-0 w-full">
              <div className="text-center flex-shrink-0 w-14 sm:w-16">
                <div className="w-8 h-8 rounded-full bg-violet-500 flex items-center justify-center mx-auto mb-1">
                  <MapPin className="w-4 h-4 text-white" />
                </div>
                <p className="text-[9px] font-bold text-white truncate">{route.origin}</p>
              </div>

              <div className="flex-1 h-8 bg-white/5 rounded-full overflow-hidden flex relative mx-2">
                {route.tollPlazas.map((toll, i) => {
                  const cost = activeTab === 'car' ? toll.carCost : toll.suvCost;
                  const pct = (cost / totalToll) * 100;
                  return (
                    <div key={i} className="relative group cursor-pointer h-full transition-opacity hover:opacity-80" style={{ width: `${pct}%` }}>
                      <div className={`h-full ${i % 2 === 0 ? 'bg-violet-500' : 'bg-fuchsia-500'}`} />
                      <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-[9px] px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10 font-medium">
                        {toll.name} - {fmt(cost)}
                      </div>
                      {i < route.tollPlazas.length - 1 && <div className="absolute right-0 top-0 w-0.5 h-full bg-slate-900/60 z-10" />}
                    </div>
                  );
                })}
              </div>

              <div className="text-center flex-shrink-0 w-14 sm:w-16">
                <div className="w-8 h-8 rounded-full bg-fuchsia-500 flex items-center justify-center mx-auto mb-1">
                  <MapPin className="w-4 h-4 text-white" />
                </div>
                <p className="text-[9px] font-bold text-white truncate">{route.destination}</p>
              </div>
            </div>
          </div>

          {/* Total display */}
          <div className="flex items-center justify-center mt-4 gap-6">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-violet-500" />
              <span className="text-[10px] text-white/40">Even plazas</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-fuchsia-500" />
              <span className="text-[10px] text-white/40">Odd plazas</span>
            </div>
            <span className="text-sm font-black text-violet-300">Total: {fmt(totalToll)}</span>
          </div>
        </div>
      </section>

      {/* ━━━ TOLL PLAZA ROWS: Compact dashboard rows ━━━ */}
      <section className="py-12 sm:py-16 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-8">
              <div>
                <p className="text-[10px] font-bold text-violet-600 uppercase tracking-widest mb-1">Plaza by Plaza</p>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900">Toll Breakdown</h2>
              </div>
              <p className="text-sm text-slate-500">{route.tollPlazas.length} plazas on {route.origin}-{route.destination} highway</p>
            </div>
          </ScrollReveal>

          <div className="space-y-2">
            {route.tollPlazas.map((toll, i) => {
              const cost = activeTab === 'car' ? toll.carCost : toll.suvCost;
              cumulative += cost;
              const proportion = (cost / maxSingleToll) * 100;
              return (
                <ScrollReveal key={i} delay={i * 40}>
                  <div className="bg-white rounded-xl border border-slate-100 hover:border-violet-200 hover:shadow-md transition-all p-4 sm:p-5">
                    <div className="flex items-center gap-3 sm:gap-4">
                      <div className="w-8 h-8 rounded-lg bg-violet-100 flex items-center justify-center flex-shrink-0">
                        <span className="text-xs font-black text-violet-600">{String(i + 1).padStart(2, '0')}</span>
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-1.5">
                          <h3 className="font-bold text-slate-900 text-sm truncate pr-2">{toll.name}</h3>
                          <span className="text-lg font-black text-slate-900 tabular-nums flex-shrink-0">{fmt(cost)}</span>
                        </div>
                        {/* Proportion bar */}
                        <div className="flex items-center gap-3">
                          <div className="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden">
                            <div className="h-full bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-full transition-all duration-500" style={{ width: `${proportion}%` }} />
                          </div>
                          <div className="flex items-center gap-2 text-[11px] text-slate-500 flex-shrink-0">
                            <span className="font-medium">{toll.location} km</span>
                            {toll.acceptsFASTag ? (
                              <span className="flex items-center gap-0.5 text-emerald-600 font-bold"><CheckCircle2 className="w-3 h-3" /> FASTag</span>
                            ) : (
                              <span className="text-red-500 font-bold">Cash</span>
                            )}
                          </div>
                        </div>
                        {/* Cumulative indicator (desktop) */}
                        <div className="hidden sm:flex items-center gap-1 mt-1.5">
                          <span className="text-[10px] text-slate-400">Cumulative:</span>
                          <span className="text-[10px] font-bold text-violet-600">{fmt(cumulative)}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>

          <p className="text-slate-400 text-xs text-center mt-4">* Toll rates approximate (2026). FASTag users may get 2-5% cashback at some plazas.</p>
        </div>
      </section>

      {/* ━━━ BENTO GRID: Fuel + Toll + Cab fare ━━━ */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <p className="text-[10px] font-bold text-[#FACF2D] uppercase tracking-widest mb-1">Total Trip Cost</p>
            <h2 className="text-2xl sm:text-3xl font-black text-white mb-8">Cost Dashboard</h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Toll Cost - Tall */}
            <ScrollReveal>
              <div className="bg-gradient-to-br from-violet-600 to-fuchsia-600 rounded-2xl p-6 sm:p-8 text-white md:row-span-2 h-full flex flex-col justify-between">
                <div>
                  <Tag className="w-6 h-6 text-white/60 mb-4" />
                  <p className="text-white/50 text-xs uppercase tracking-widest font-bold mb-1">Total Toll</p>
                  <p className="text-4xl sm:text-5xl font-black leading-tight mb-1">{fmt(route.totalTollCost.car)}</p>
                  <p className="text-white/40 text-sm">Car/Sedan (one-way)</p>
                </div>
                <div className="mt-6 pt-4 border-t border-white/15">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white/50 text-xs">SUV / MUV</span>
                    <span className="font-bold text-sm">{fmt(route.totalTollCost.suv)}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white/50 text-xs">Plazas</span>
                    <span className="font-bold text-sm">{route.tollPlazas.length}</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Fuel Cost */}
            <ScrollReveal stagger={100}>
              <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 text-white">
                <Fuel className="w-5 h-5 text-emerald-400 mb-3" />
                <p className="text-white/40 text-xs uppercase tracking-widest font-bold mb-1">Fuel (Petrol)</p>
                <p className="text-3xl font-black">{fmt(route.estimatedFuel.petrol)}</p>
                <p className="text-white/30 text-xs mt-1">Diesel: {fmt(route.estimatedFuel.diesel)}</p>
              </div>
            </ScrollReveal>

            {/* Cab Fare */}
            <ScrollReveal stagger={200}>
              <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 text-white">
                <Car className="w-5 h-5 text-[#FACF2D] mb-3" />
                <p className="text-white/40 text-xs uppercase tracking-widest font-bold mb-1">Cab Fare (Sedan)</p>
                <p className="text-3xl font-black">{fmt(route.cabFare)}</p>
                <p className="text-white/30 text-xs mt-1">Toll extra, paid at actual</p>
              </div>
            </ScrollReveal>

            {/* FASTag Info */}
            <ScrollReveal stagger={300}>
              <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 text-white md:col-span-2">
                <div className="flex items-center gap-3 mb-3">
                  <CreditCard className="w-5 h-5 text-violet-400" />
                  <h3 className="font-black text-white">FASTag Information</h3>
                  <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded-full font-bold">Recommended</span>
                </div>
                <p className="text-white/40 text-sm leading-relaxed mb-4">{route.fastagInfo}</p>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { t: 'Faster Lanes', d: 'Skip cash queues' },
                    { t: 'Cashback', d: '2-5% on toll' },
                    { t: 'Digital Records', d: 'Auto-tracked expenses' },
                  ].map((item, i) => (
                    <div key={i} className="bg-white/5 rounded-lg p-3 border border-white/5">
                      <p className="text-violet-300 font-bold text-xs mb-0.5">{item.t}</p>
                      <p className="text-white/30 text-[11px]">{item.d}</p>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ━━━ TIPS + CAB CARDS ━━━ */}
      <section className="py-12 sm:py-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
            {/* Tips */}
            {route.tips && route.tips.length > 0 && (
              <ScrollReveal className="lg:col-span-2">
                <div className="bg-white rounded-2xl border border-slate-100 p-6 h-full">
                  <div className="flex items-center gap-2 mb-5">
                    <Sparkles className="w-4 h-4 text-violet-600" />
                    <h3 className="font-black text-slate-900 text-sm">Toll Route Tips</h3>
                  </div>
                  <div className="space-y-3">
                    {route.tips.map((tip, i) => (
                      <div key={i} className="flex items-start gap-2.5">
                        <span className="w-5 h-5 rounded-md bg-violet-50 flex items-center justify-center flex-shrink-0 mt-0.5 text-[10px] font-black text-violet-600">{i + 1}</span>
                        <p className="text-slate-600 text-sm leading-relaxed">{tip}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            )}

            {/* Cab Fare Cards */}
            <div className={`${route.tips && route.tips.length > 0 ? 'lg:col-span-3' : 'lg:col-span-5'}`}>
              <ScrollReveal>
                <p className="text-[10px] font-bold text-violet-600 uppercase tracking-widest mb-1">Book This Route</p>
                <h3 className="text-xl font-black text-slate-900 mb-4">Choose Your Ride</h3>
              </ScrollReveal>
              <div className="grid sm:grid-cols-3 gap-3">
                {[
                  { label: 'Sedan', sub: 'Swift Dzire / Etios', price: route.cabFare, rate: '11/km', pop: false },
                  { label: 'SUV', sub: 'Innova / Ertiga', price: suvFare, rate: '14/km', pop: true },
                  { label: 'Tempo', sub: '12-16 Seater', price: tempoFare, rate: '18/km', pop: false },
                ].map((v, i) => (
                  <ScrollReveal key={i} stagger={i * 80}>
                    <div className={`bg-white rounded-xl p-5 border transition-all hover:shadow-md ${v.pop ? 'border-violet-200 ring-1 ring-violet-100' : 'border-slate-100 hover:border-violet-200'}`}>
                      {v.pop && <span className="text-[9px] font-black text-violet-600 uppercase tracking-widest bg-violet-50 px-2 py-0.5 rounded-full">Best Value</span>}
                      <p className="font-bold text-slate-900 text-sm mt-2">{v.label}</p>
                      <p className="text-[11px] text-slate-400 mb-3">{v.sub}</p>
                      <p className="text-2xl font-black text-slate-900">{fmt(v.price)}</p>
                      <p className="text-xs text-slate-400 mb-4">{v.rate} | Toll extra</p>
                      <a href={`https://wa.me/917668570551?text=${encodeURIComponent(`Book ${v.label} from ${route.origin} to ${route.destination}`)}`} target="_blank" rel="noopener noreferrer" onClick={() => trackWhatsAppClick(`toll_${v.label.toLowerCase()}`)}
                        className={`block w-full text-center py-2.5 rounded-lg font-bold text-sm transition-all ${v.pop ? 'bg-[#FACF2D] text-slate-900 hover:bg-amber-300' : 'bg-slate-100 text-slate-700 hover:bg-violet-50 hover:text-violet-700'}`}>
                        Book {v.label}
                      </a>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ━━━ FAQ ━━━ */}
      {route.faqs && route.faqs.length > 0 && (
        <FaqAccordion heading={`${route.origin} to ${route.destination} Toll FAQs`} faqs={route.faqs} />
      )}

      {/* ━━━ RELATED ROUTES ━━━ */}
      {relatedRoutes && relatedRoutes.length > 0 && (
        <section className="py-12 sm:py-16 px-4 sm:px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <ScrollReveal>
              <p className="text-[10px] font-bold text-violet-600 uppercase tracking-widest mb-1">Explore More</p>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-8">Related Toll Routes</h2>
            </ScrollReveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {relatedRoutes.map((r, i) => (
                <ScrollReveal key={i} stagger={i * 50}>
                  <Link href={`/toll-cost/${r.slug}`} className="group flex items-center gap-4 bg-[#f8f7f4] rounded-xl p-4 hover:bg-white hover:shadow-lg transition-all duration-300 border border-transparent hover:border-violet-200">
                    <div className="w-10 h-10 rounded-lg bg-violet-50 flex items-center justify-center flex-shrink-0 group-hover:bg-violet-100 transition-colors">
                      <Tag className="w-4 h-4 text-violet-600" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-bold text-slate-900 text-sm truncate">{r.origin} → {r.destination}</p>
                      <p className="text-xs text-slate-500">{r.totalDistance} km {r.totalTollCost ? `· ₹${fmt(r.totalTollCost.car)}` : ''}</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-violet-500 transition-colors flex-shrink-0" />
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTASection heading="Skip the Toll Stress. Book Triveni Cabs." subheading={`${route.origin} to ${route.destination} -- ${route.totalDistance} km with ${route.tollPlazas.length} toll plazas. Our driver handles it all.`} />
      <MobileStickyBar />
    </div>
  );
}
