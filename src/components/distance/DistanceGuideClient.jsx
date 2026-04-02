'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Phone, ArrowRight, ChevronDown, Shield, Clock, Car, CheckCircle2,
  Route, MapPin, Navigation, Star, Coffee, Info,
  ChevronRight, Calendar, Sparkles, Award,
} from '@/components/ui/icons';
import { trackWhatsAppClick, trackPhoneCall } from '@/utilis/analytics';
import { getCityImage, heroBlurDataURL } from '@/utilis/imageUtils';
import ScrollReveal from '@/components/shared/ScrollReveal';
import FaqAccordion from '@/components/shared/FaqAccordion';
import CTASection from '@/components/shared/CTASection';
import MobileStickyBar from '@/components/ui/MobileStickyBar';

const WA = <svg className="w-4 h-4" viewBox="0 0 16 16" fill="currentColor"><path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" /></svg>;

export default function DistanceGuideClient({ route, relatedRoutes }) {
  const [showAllStops, setShowAllStops] = useState(false);
  const whatsappMsg = `Hi, I want to book a cab from ${route.origin} to ${route.destination} (${route.distance.km} km)`;
  const totalToll = route.tollPlazas.reduce((sum, t) => sum + t.cost, 0);
  const heroImage = getCityImage(route.destination) || getCityImage(route.origin);
  const visibleStops = showAllStops ? route.majorStops : route.majorStops.slice(0, 4);

  return (
    <div className="min-h-screen bg-[#f8f7f4] text-slate-900">

      {/* ---- HERO: Journey Dashboard ---- */}
      <section className="relative min-h-[75vh] sm:min-h-[80vh] flex flex-col justify-end overflow-hidden">
        <Image src={heroImage} alt={`${route.origin} to ${route.destination} distance guide`} fill priority className="object-cover" sizes="100vw" quality={85} placeholder="blur" blurDataURL={heroBlurDataURL} />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#FACF2D] via-amber-400 to-blue-400 z-20" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full pb-8 sm:pb-12">
          <nav className="mb-6 flex items-center gap-1.5 text-xs text-white/40">
            <Link href="/" className="hover:text-white/70 transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <Link href="/distance" className="hover:text-white/70 transition-colors">Distance Guides</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-white/60">{route.origin} to {route.destination}</span>
          </nav>

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10 mb-5">
                <Route className="w-3.5 h-3.5 text-[#FACF2D]" />
                <span className="text-[11px] font-bold text-[#FACF2D] uppercase tracking-widest">Distance &amp; Travel Guide</span>
              </div>
              <p className="text-white/40 text-sm font-medium uppercase tracking-widest mb-2">Journey Planner</p>
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-white leading-[0.95] tracking-tight">
                {route.origin}<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FACF2D] to-blue-400">
                  {route.destination}
                </span>
              </h1>
              <p className="text-white/40 mt-4 text-sm sm:text-base max-w-lg leading-relaxed">{route.bestRoute}</p>

              <div className="flex flex-wrap gap-3 mt-6">
                <a onClick={() => trackPhoneCall('distance_hero')} href="tel:+917668570551" className="inline-flex items-center gap-2 bg-[#FACF2D] text-slate-900 px-6 py-3 rounded-full font-bold text-sm hover:bg-amber-300 transition-all active:scale-[0.97] shadow-lg shadow-amber-500/20">
                  <Phone className="w-4 h-4" /> Call 7668570551
                </a>
                <a onClick={() => trackWhatsAppClick('distance_hero')} href={`https://wa.me/917668570551?text=${encodeURIComponent(whatsappMsg)}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-full font-bold text-sm border border-white/15 hover:bg-white/15 transition-all">
                  {WA} WhatsApp Quote
                </a>
              </div>
            </div>

            {/* Floating stat card */}
            <div className="bg-white/10 backdrop-blur-xl border border-white/15 rounded-2xl p-5 sm:p-6 lg:w-72 flex-shrink-0">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-[10px] text-white/30 uppercase tracking-widest font-semibold">Distance</p>
                  <p className="text-3xl font-black text-white leading-tight">{route.distance.km}<span className="text-lg text-white/40 ml-0.5">km</span></p>
                </div>
                <div>
                  <p className="text-[10px] text-white/30 uppercase tracking-widest font-semibold">Drive Time</p>
                  <p className="text-3xl font-black text-white leading-tight">{route.duration.split('-')[0].split(' ')[0]}<span className="text-lg text-white/40 ml-0.5">hrs</span></p>
                </div>
                <div>
                  <p className="text-[10px] text-white/30 uppercase tracking-widest font-semibold">Highway</p>
                  <p className="text-sm font-bold text-white/80">{route.highway}</p>
                </div>
                <div>
                  <p className="text-[10px] text-white/30 uppercase tracking-widest font-semibold">Cab From</p>
                  <p className="text-sm font-bold text-[#FACF2D]">{route.cabFares.sedan}</p>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-white/10 flex items-center gap-2">
                <div className="flex -space-x-1">
                  {[1,2,3,4,5].map(i => <Star key={i} className="w-3 h-3 text-[#FACF2D] fill-[#FACF2D]" />)}
                </div>
                <span className="text-[11px] text-white/40 font-medium">4.9 · 10,000+ trips</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---- VISUAL ROUTE STRIP: Origin -> Stops -> Destination ---- */}
      <section className="bg-slate-900 py-6 sm:py-8 px-4 sm:px-6 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <p className="text-[10px] text-white/30 uppercase tracking-widest font-bold mb-5 text-center">Your Route at a Glance</p>
          <div className="flex items-center gap-0 w-full">
            <div className="text-center flex-shrink-0 w-16 sm:w-20">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#FACF2D] flex items-center justify-center mx-auto mb-1">
                <MapPin className="w-4 h-4 text-slate-900" />
              </div>
              <p className="text-[10px] sm:text-xs font-bold text-white truncate">{route.origin}</p>
            </div>

            <div className="flex-1 relative h-3 sm:h-4 bg-slate-700 rounded-full mx-1 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-[#FACF2D] via-blue-400 to-emerald-400 rounded-full" />
              {route.majorStops.map((stop, i) => {
                const pct = ((i + 1) / (route.majorStops.length + 1)) * 100;
                return (
                  <div key={i} className="absolute top-1/2 -translate-y-1/2 group z-10" style={{ left: `${pct}%` }}>
                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-white rounded-full border-2 border-slate-900 -ml-1.5 cursor-pointer" />
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-[9px] px-2 py-0.5 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none font-medium">
                      {stop}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="text-center flex-shrink-0 w-16 sm:w-20">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-emerald-500 flex items-center justify-center mx-auto mb-1">
                <MapPin className="w-4 h-4 text-white" />
              </div>
              <p className="text-[10px] sm:text-xs font-bold text-white truncate">{route.destination}</p>
            </div>
          </div>

          {/* Quick metrics strip */}
          <div className="flex items-center justify-center gap-6 sm:gap-10 mt-5">
            {[
              { label: 'Distance', value: `${route.distance.km} km` },
              { label: 'Miles', value: `${route.distance.miles} mi` },
              { label: 'Duration', value: route.duration },
              { label: 'Stops', value: `${route.majorStops.length}` },
            ].map((m, i) => (
              <div key={i} className="text-center">
                <p className="text-[10px] text-white/25 uppercase tracking-widest font-semibold">{m.label}</p>
                <p className="text-sm sm:text-base font-black text-white">{m.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---- BENTO GRID: Route overview ---- */}
      <section className="py-12 sm:py-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <p className="text-[10px] font-bold text-blue-600 uppercase tracking-widest mb-1">Route Overview</p>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-8">{route.origin} to {route.destination} Road Guide</h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
            {/* Large route card */}
            <ScrollReveal className="lg:col-span-3">
              <div className="h-full bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-6 sm:p-8 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-4">
                    <Navigation className="w-5 h-5 text-blue-200" />
                    <span className="text-xs font-bold text-blue-200 uppercase tracking-wider">Best Route</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black mb-3 leading-snug">{route.origin} → {route.destination}</h3>
                  <p className="text-white/70 leading-relaxed text-sm mb-6">{route.bestRoute}</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-lg text-xs font-semibold text-white/80">
                      <Route className="w-3 h-3" /> {route.distance.km} km
                    </span>
                    <span className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-lg text-xs font-semibold text-white/80">
                      <Clock className="w-3 h-3" /> {route.duration}
                    </span>
                    <span className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-lg text-xs font-semibold text-white/80">
                      <Navigation className="w-3 h-3" /> {route.highway}
                    </span>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Smaller stat cards */}
            <div className="lg:col-span-2 flex flex-col gap-4">
              <ScrollReveal stagger={80}>
                <div className="bg-white rounded-2xl border border-slate-200/60 p-5 hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center">
                      <Shield className="w-4 h-4 text-emerald-600" />
                    </div>
                    <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider">Road Conditions</span>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed">{route.roadCondition}</p>
                </div>
              </ScrollReveal>
              <ScrollReveal stagger={160}>
                <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-5 text-white relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-[#FACF2D]/10 rounded-full -translate-y-1/3 translate-x-1/3" />
                  <p className="text-[10px] text-white/40 uppercase tracking-wider font-semibold mb-1">Starting from</p>
                  <p className="text-3xl font-black text-[#FACF2D] leading-tight">{route.cabFares.sedan}</p>
                  <p className="text-white/40 text-xs mt-1">Sedan · AC · Verified Driver</p>
                  <a onClick={() => trackWhatsAppClick('distance_quick')} href={`https://wa.me/917668570551?text=${encodeURIComponent(whatsappMsg)}`} target="_blank" rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-2 bg-[#FACF2D] text-slate-900 px-5 py-2.5 rounded-full font-bold text-xs hover:bg-amber-300 transition-colors">
                    Book Now <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ---- EN-ROUTE STOPS: Expandable journey stops ---- */}
      {route.majorStops.length > 0 && (
        <section className="py-12 sm:py-16 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-8">
                <div>
                  <p className="text-[10px] font-bold text-blue-600 uppercase tracking-widest mb-1">Your Journey</p>
                  <h2 className="text-2xl sm:text-3xl font-black text-slate-900">En-Route Stops</h2>
                </div>
                <p className="text-sm text-slate-500">{route.majorStops.length} stops along {route.distance.km} km</p>
              </div>
            </ScrollReveal>

            <div className="relative">
              <div className="absolute left-5 sm:left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#FACF2D] via-blue-400 to-emerald-400" />

              <ScrollReveal>
                <div className="relative flex items-center gap-4 mb-3">
                  <div className="relative z-10 w-10 sm:w-12 h-10 sm:h-12 rounded-full bg-[#FACF2D] flex items-center justify-center shadow-lg flex-shrink-0">
                    <MapPin className="w-4 sm:w-5 h-4 sm:h-5 text-slate-900" />
                  </div>
                  <div className="flex-1 bg-amber-50 rounded-xl px-4 sm:px-5 py-3 border border-amber-100">
                    <p className="font-black text-slate-900 text-sm">{route.origin}</p>
                    <p className="text-[11px] text-amber-600 font-medium">Start · km 0</p>
                  </div>
                </div>
              </ScrollReveal>

              {visibleStops.map((stop, i) => (
                <ScrollReveal key={i} stagger={i * 60}>
                  <div className="relative flex items-center gap-4 mb-3 group">
                    <div className="relative z-10 w-10 sm:w-12 h-10 sm:h-12 rounded-full bg-white border-2 border-slate-200 flex items-center justify-center flex-shrink-0 group-hover:border-blue-400 group-hover:shadow-md transition-all">
                      <Coffee className="w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-colors" />
                    </div>
                    <div className="flex-1 bg-white rounded-xl px-4 sm:px-5 py-3 border border-slate-200/60 group-hover:border-slate-300 group-hover:shadow-sm transition-all">
                      <p className="font-bold text-slate-800 text-sm">{stop}</p>
                      <p className="text-[11px] text-slate-500">Rest stop · Food &amp; refreshments</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}

              {route.majorStops.length > 4 && !showAllStops && (
                <div className="relative flex items-center gap-4 mb-3">
                  <div className="w-10 sm:w-12 flex-shrink-0" />
                  <button onClick={() => setShowAllStops(true)} className="text-blue-600 text-sm font-bold hover:text-blue-700 transition-colors flex items-center gap-1">
                    Show {route.majorStops.length - 4} more stops <ChevronDown className="w-4 h-4" />
                  </button>
                </div>
              )}

              <ScrollReveal>
                <div className="relative flex items-center gap-4">
                  <div className="relative z-10 w-10 sm:w-12 h-10 sm:h-12 rounded-full bg-emerald-600 flex items-center justify-center shadow-lg flex-shrink-0">
                    <MapPin className="w-4 sm:w-5 h-4 sm:h-5 text-white" />
                  </div>
                  <div className="flex-1 bg-emerald-50 rounded-xl px-4 sm:px-5 py-3 border border-emerald-100">
                    <p className="font-black text-slate-900 text-sm">{route.destination}</p>
                    <p className="text-[11px] text-emerald-600 font-medium">Destination · {route.distance.km} km</p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>
      )}

      {/* ---- TOLL SECTION: Visual toll progress ---- */}
      {route.tollPlazas.length > 0 && (
        <section className="py-12 sm:py-16 px-4 sm:px-6 bg-white">
          <div className="max-w-5xl mx-auto">
            <ScrollReveal>
              <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
                <div>
                  <p className="text-[10px] font-bold text-violet-600 uppercase tracking-widest mb-1">Toll Info</p>
                  <h2 className="text-2xl sm:text-3xl font-black text-slate-900">Toll Plazas on This Route</h2>
                </div>
                <div className="bg-violet-50 rounded-xl px-5 py-3 border border-violet-100">
                  <p className="text-[10px] text-violet-500 uppercase tracking-wider font-semibold">Total Toll</p>
                  <p className="text-2xl font-black text-violet-700">{`\u20B9`}{totalToll}</p>
                </div>
              </div>
            </ScrollReveal>

            {/* Visual toll progress bar */}
            <ScrollReveal>
              <div className="mb-8 bg-slate-50 rounded-2xl p-5 sm:p-6 border border-slate-100">
                <div className="relative">
                  <div className="h-2 bg-slate-200 rounded-full w-full">
                    <div className="h-full bg-gradient-to-r from-violet-500 to-indigo-500 rounded-full" style={{ width: '100%' }} />
                  </div>
                  {route.tollPlazas.map((toll, i) => {
                    const pct = (toll.km / route.distance.km) * 100;
                    return (
                      <div key={i} className="absolute top-0 group" style={{ left: `${Math.min(pct, 96)}%` }}>
                        <div className="w-4 h-4 bg-white border-2 border-violet-500 rounded-full -mt-1 cursor-pointer hover:scale-125 transition-transform" />
                        <div className="absolute top-6 left-1/2 -translate-x-1/2 whitespace-nowrap text-center">
                          <p className="text-[10px] font-bold text-slate-700">{toll.name}</p>
                          <p className="text-[9px] text-slate-400">{toll.km} km · {`\u20B9`}{toll.cost}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className="flex justify-between mt-12 text-[10px] text-slate-400">
                  <span>{route.origin}</span>
                  <span>{route.destination}</span>
                </div>
              </div>
            </ScrollReveal>

            {/* Toll cards grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {route.tollPlazas.map((toll, i) => (
                <ScrollReveal key={i} stagger={i * 50}>
                  <div className="flex items-center gap-3 bg-slate-50 rounded-xl p-4 border border-slate-100 hover:border-violet-200 hover:shadow-sm transition-all">
                    <div className="w-10 h-10 rounded-lg bg-violet-50 flex items-center justify-center flex-shrink-0">
                      <span className="text-sm font-black text-violet-600">{String(i + 1).padStart(2, '0')}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-bold text-slate-800 text-sm truncate">{toll.name}</p>
                      <p className="text-[11px] text-slate-400">at {toll.km} km</p>
                    </div>
                    <p className="font-black text-violet-700 text-sm flex-shrink-0">{`\u20B9`}{toll.cost}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
            <p className="text-slate-400 text-xs text-center mt-4">* FASTag accepted at all plazas. Rates approximate, may vary.</p>
          </div>
        </section>
      )}

      {/* ---- PRICING: Dark section ---- */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <p className="text-[10px] font-bold text-[#FACF2D] uppercase tracking-widest mb-1">Book This Route</p>
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
              <h2 className="text-2xl sm:text-3xl font-black text-white">{route.origin} to {route.destination} Cab Fare</h2>
              <p className="text-white/30 text-sm">All-inclusive · No hidden charges</p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { name: 'Sedan', sub: 'Swift Dzire / Etios', fare: route.cabFares.sedan, seats: '4', perKm: '\u20B911/km', img: '/images/car/swift_dzire.jpg', pop: false },
              { name: 'SUV', sub: 'Innova Crysta / Ertiga', fare: route.cabFares.suv, seats: '6-7', perKm: '\u20B914/km', img: '/images/car/innova_crysta.jpg', pop: true },
              { name: 'Tempo Traveller', sub: '12-Seater AC', fare: route.cabFares.tempo, seats: '12', perKm: '\u20B920/km', img: '/images/car/premium_suv.jpg', pop: false },
            ].map((v, i) => (
              <ScrollReveal key={i} stagger={i * 100}>
                <div className={`relative rounded-2xl overflow-hidden group ${v.pop ? 'ring-2 ring-[#FACF2D]/50' : ''}`}>
                  {v.pop && <div className="bg-[#FACF2D] text-center py-1.5"><span className="text-[10px] font-black text-slate-900 uppercase tracking-widest">Most Popular</span></div>}
                  <div className="relative h-36 sm:h-40">
                    <Image src={v.img} alt={v.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 768px) 100vw, 33vw" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
                    <div className="absolute bottom-3 left-4">
                      <h3 className="text-lg font-black text-white">{v.name}</h3>
                      <p className="text-[11px] text-white/50">{v.sub} · {v.seats} Seater</p>
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
                    <a onClick={() => trackWhatsAppClick('distance_fare')} href={`https://wa.me/917668570551?text=${encodeURIComponent(`Hi, book ${v.name} from ${route.origin} to ${route.destination}`)}`} target="_blank" rel="noopener noreferrer"
                      className={`block w-full text-center py-3 rounded-xl font-bold text-sm transition-all active:scale-[0.97] ${v.pop ? 'bg-[#FACF2D] text-slate-900 hover:bg-amber-300' : 'bg-white/10 text-white hover:bg-white/15 border border-white/10'}`}>
                      Book {v.name} <ArrowRight className="w-4 h-4 inline ml-1" />
                    </a>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <p className="mt-6 text-center text-white/20 text-xs">* Toll &amp; state tax extra at actual. Fares based on {route.distance.km} km one-way.</p>
        </div>
      </section>

      {/* ---- TIPS & INSIGHTS: Asymmetric bento ---- */}
      <section className="py-12 sm:py-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <p className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest mb-1">Travel Smart</p>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-8">Tips &amp; Insights</h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <ScrollReveal>
              <div className="bg-white rounded-2xl border border-slate-200/60 p-6 hover:shadow-md transition-shadow h-full">
                <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center mb-4">
                  <Calendar className="w-5 h-5 text-emerald-600" />
                </div>
                <h3 className="font-black text-slate-900 mb-2">Best Time to Travel</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{route.bestTime}</p>
              </div>
            </ScrollReveal>
            <ScrollReveal stagger={80}>
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl border border-amber-100 p-6 hover:shadow-md transition-shadow h-full">
                <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center mb-4">
                  <Sparkles className="w-5 h-5 text-amber-600" />
                </div>
                <h3 className="font-black text-slate-900 mb-2">Local Insider Tip</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{route.localTip}</p>
              </div>
            </ScrollReveal>
            <ScrollReveal stagger={160}>
              <div className="bg-slate-900 rounded-2xl p-6 text-white h-full">
                <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center mb-4">
                  <Info className="w-5 h-5 text-[#FACF2D]" />
                </div>
                <h3 className="font-black mb-2">Quick Facts</h3>
                <div className="space-y-2.5 mt-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-white/50">Distance</span>
                    <span className="font-bold">{route.distance.km} km / {route.distance.miles} mi</span>
                  </div>
                  <div className="h-px bg-white/10" />
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-white/50">Highway</span>
                    <span className="font-bold">{route.highway}</span>
                  </div>
                  <div className="h-px bg-white/10" />
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-white/50">Tolls</span>
                    <span className="font-bold">{route.tollPlazas.length} plazas · {`\u20B9`}{totalToll}</span>
                  </div>
                  <div className="h-px bg-white/10" />
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-white/50">Stops</span>
                    <span className="font-bold">{route.majorStops.length} en-route</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Why Triveni strip */}
          <ScrollReveal>
            <div className="mt-6 bg-white rounded-2xl border border-slate-200/60 p-6 sm:p-8">
              <h3 className="text-lg font-black text-slate-900 mb-5 text-center">Why 10,000+ Travellers Choose Triveni Cabs</h3>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { icon: Shield, title: 'Verified Drivers', desc: 'Background-checked pros', color: 'text-blue-600', bg: 'bg-blue-50' },
                  { icon: Car, title: 'Clean AC Fleet', desc: 'GPS-tracked vehicles', color: 'text-indigo-600', bg: 'bg-indigo-50' },
                  { icon: Award, title: 'Best Prices', desc: 'No surge, no hidden costs', color: 'text-emerald-600', bg: 'bg-emerald-50' },
                  { icon: Phone, title: '24/7 Support', desc: 'Call or WhatsApp anytime', color: 'text-amber-600', bg: 'bg-amber-50' },
                ].map((f, i) => (
                  <div key={i} className="text-center group">
                    <div className={`w-12 h-12 rounded-xl ${f.bg} flex items-center justify-center mx-auto mb-3 group-hover:scale-105 transition-transform`}>
                      <f.icon className={`w-5 h-5 ${f.color}`} />
                    </div>
                    <h4 className="font-bold text-slate-900 text-xs sm:text-sm">{f.title}</h4>
                    <p className="text-slate-500 text-[11px] mt-0.5">{f.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ---- FAQ ---- */}
      <FaqAccordion heading={`${route.origin} to ${route.destination} FAQs`} faqs={route.faqs} />

      {/* ---- RELATED ROUTES ---- */}
      {relatedRoutes.length > 0 && (
        <section className="py-12 sm:py-16 px-4 sm:px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <ScrollReveal>
              <p className="text-[10px] font-bold text-blue-600 uppercase tracking-widest mb-1">Explore More</p>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-8">Related Distance Guides</h2>
            </ScrollReveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {relatedRoutes.map((r, i) => (
                <ScrollReveal key={i} stagger={i * 50}>
                  <Link href={`/distance/${r.slug}`} className="group flex items-center gap-4 bg-[#f8f7f4] rounded-xl p-4 hover:bg-white hover:shadow-lg transition-all duration-300 border border-transparent hover:border-slate-200">
                    <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-100 transition-colors">
                      <Route className="w-4 h-4 text-blue-600" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-bold text-slate-900 text-sm truncate">{r.origin} → {r.destination}</p>
                      <p className="text-xs text-slate-500">{r.distance.km} km · {r.duration}</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-blue-500 transition-colors flex-shrink-0" />
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTASection
        heading={`Book ${route.origin} to ${route.destination} Cab`}
        subheading={`${route.distance.km} km · From ${route.cabFares.sedan} · AC vehicles, verified drivers, 24/7 support`}
      />
      <MobileStickyBar />
    </div>
  );
}
