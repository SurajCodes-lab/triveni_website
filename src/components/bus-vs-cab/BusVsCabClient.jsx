'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Phone, ArrowRight, Clock, Car, CheckCircle2, Bus,
  MapPin, Star, Users, ChevronRight, Award, Trophy, IndianRupee, Route, Shield,
} from '@/components/ui/icons';
import { getCityImage, heroBlurDataURL } from '@/utilis/imageUtils';
import { trackWhatsAppClick, trackPhoneCall } from '@/utilis/analytics';
import ScrollReveal from '@/components/shared/ScrollReveal';
import FaqAccordion from '@/components/shared/FaqAccordion';
import CTASection from '@/components/shared/CTASection';
import MobileStickyBar from '@/components/ui/MobileStickyBar';

const WA = <svg className="w-4 h-4" viewBox="0 0 16 16" fill="currentColor"><path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/></svg>;

function ScoreBar({ value, max = 5, color = 'bg-indigo-500' }) {
  const pct = (value / max) * 100;
  return (
    <div className="flex-1 h-2.5 bg-slate-100 rounded-full overflow-hidden">
      <div className={`h-full ${color} rounded-full transition-all duration-500`} style={{ width: `${pct}%` }} />
    </div>
  );
}

export default function BusVsCabClient({ route, relatedRoutes }) {
  const [selectedPassengers, setSelectedPassengers] = useState(2);

  const whatsappMsg = `Hi, I want to book a cab from ${route.origin} to ${route.destination} (${route.distanceKm} km). Please share the best fare.`;
  const avgBusFare = Math.round(route.busOptions.reduce((s, b) => s + b.cost, 0) / route.busOptions.length);
  const cabPerPerson = Math.round(route.cabOptions.sedan.fareRaw / selectedPassengers);
  const busPerPerson = avgBusFare;
  const heroImage = getCityImage(route.origin);

  const metrics = [
    { label: 'Cost (Solo)', bus: 2, cab: 4, busWin: true, desc: `Bus ${route.comparison.costSolo.bus} vs Cab ${route.comparison.costSolo.cab}` },
    { label: 'Comfort', bus: 2, cab: 5, busWin: false, desc: 'AC, private, reclining seats' },
    { label: 'Speed', bus: 2, cab: 5, busWin: false, desc: `Save ${route.comparison.timeSaved} by cab` },
    { label: 'Flexibility', bus: 1, cab: 5, busWin: false, desc: 'Door-to-door, any time' },
    { label: 'Luggage', bus: 2, cab: 5, busWin: false, desc: 'Full boot space' },
    { label: 'Privacy', bus: 1, cab: 5, busWin: false, desc: 'Private vehicle' },
  ];

  return (
    <div className="min-h-screen bg-[#f8f7f4] text-slate-900">

      {/* ━━━ HERO: Split battle arena ━━━ */}
      <section className="relative min-h-[70vh] sm:min-h-[75vh] flex flex-col justify-end overflow-hidden">
        <Image src={heroImage} alt={`${route.origin} to ${route.destination} bus vs cab`} fill priority className="object-cover" sizes="100vw" quality={85} placeholder="blur" blurDataURL={heroBlurDataURL} />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
        <div className="absolute top-0 left-0 right-0 h-1.5 z-20 flex">
          <div className="flex-1 bg-gradient-to-r from-blue-500 to-blue-400" />
          <div className="flex-1 bg-gradient-to-r from-indigo-500 to-indigo-400" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full pb-8 sm:pb-12">
          <nav className="mb-6 flex items-center gap-1.5 text-xs text-white/40">
            <Link href="/" className="hover:text-white/70 transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <Link href="/bus-vs-cab" className="hover:text-white/70 transition-colors">Bus vs Cab</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-white/60">{route.origin} to {route.destination}</span>
          </nav>

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10 mb-5">
                <Trophy className="w-3.5 h-3.5 text-[#FACF2D]" />
                <span className="text-[11px] font-bold text-[#FACF2D] uppercase tracking-widest">Battle Arena 2026</span>
              </div>

              {/* Split title with VS */}
              <div className="flex items-center gap-4 mb-3">
                <div className="flex items-center gap-2">
                  <Bus className="w-7 h-7 text-blue-400" />
                  <span className="text-xl sm:text-2xl font-black text-blue-400">BUS</span>
                </div>
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#FACF2D] to-amber-500 flex items-center justify-center shadow-lg shadow-amber-500/30">
                  <span className="text-sm font-black text-slate-900">VS</span>
                </div>
                <div className="flex items-center gap-2">
                  <Car className="w-7 h-7 text-indigo-400" />
                  <span className="text-xl sm:text-2xl font-black text-indigo-400">CAB</span>
                </div>
              </div>

              <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-white leading-[0.95] tracking-tight mb-3">
                {route.origin} <span className="text-white/30">to</span><br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-blue-400">{route.destination}</span>
              </h1>
              <p className="text-white/40 text-sm sm:text-base max-w-lg">{route.distanceKm} km -- Save {route.comparison.timeSaved} by cab</p>

              <div className="flex flex-wrap gap-3 mt-6">
                <a onClick={() => trackPhoneCall('bus_vs_cab_hero')} href="tel:+917668570551" className="inline-flex items-center gap-2 bg-[#FACF2D] text-slate-900 px-6 py-3 rounded-full font-bold text-sm hover:bg-amber-300 transition-all active:scale-[0.97] shadow-lg shadow-amber-500/20">
                  <Phone className="w-4 h-4" /> Call 7668570551
                </a>
                <a onClick={() => trackWhatsAppClick('bus_vs_cab_hero')} href={`https://wa.me/917668570551?text=${encodeURIComponent(whatsappMsg)}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-full font-bold text-sm border border-white/15 hover:bg-white/15 transition-all">
                  {WA} WhatsApp Quote
                </a>
              </div>
            </div>

            {/* Quick winner card */}
            <div className="bg-white/10 backdrop-blur-xl border border-white/15 rounded-2xl p-5 sm:p-6 lg:w-72 flex-shrink-0">
              <div className="flex items-center gap-2 mb-4">
                <Award className="w-5 h-5 text-[#FACF2D]" />
                <span className="text-xs font-black text-[#FACF2D] uppercase tracking-widest">Quick Verdict</span>
              </div>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { label: 'Solo', winner: route.comparison.costSolo.winner },
                  { label: 'Couple', winner: route.comparison.costCouple.winner },
                  { label: 'Family', winner: route.comparison.costFamily.winner },
                ].map((v, i) => (
                  <div key={i} className="text-center bg-white/5 rounded-lg p-2">
                    <p className="text-[9px] text-white/30 uppercase tracking-widest mb-1">{v.label}</p>
                    <div className="flex items-center justify-center gap-1">
                      {v.winner === 'Cab' ? <Car className="w-3 h-3 text-indigo-400" /> : <Bus className="w-3 h-3 text-blue-400" />}
                      <span className={`text-xs font-black ${v.winner === 'Cab' ? 'text-indigo-300' : 'text-blue-300'}`}>{v.winner}</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t border-white/10">
                <div className="flex -space-x-1 mb-1">
                  {[1,2,3,4,5].map(i => <Star key={i} className="w-3 h-3 text-[#FACF2D] fill-[#FACF2D]" />)}
                </div>
                <span className="text-[11px] text-white/40">4.9 · 10,000+ cab rides on this route</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ━━━ SCORE BARS: Visual metric comparison ━━━ */}
      <section className="bg-slate-900 py-8 sm:py-10 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-[10px] text-white/30 uppercase tracking-widest font-bold mb-6 text-center">Head-to-Head Score</p>
          <div className="space-y-4">
            {metrics.map((m, i) => (
              <div key={i} className="flex items-center gap-3 sm:gap-4">
                <div className="w-20 sm:w-24 text-right">
                  <span className={`text-xs font-bold ${m.busWin ? 'text-blue-400' : 'text-white/30'}`}>Bus</span>
                </div>
                <ScoreBar value={m.bus} color="bg-blue-500" />
                <div className="w-20 sm:w-24 text-center flex-shrink-0">
                  <p className="text-[11px] font-bold text-white">{m.label}</p>
                </div>
                <ScoreBar value={m.cab} color="bg-indigo-500" />
                <div className="w-20 sm:w-24">
                  <span className={`text-xs font-bold ${!m.busWin ? 'text-indigo-400' : 'text-white/30'}`}>Cab</span>
                </div>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-center gap-6 mt-6">
            <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-blue-500" /><span className="text-[10px] text-white/40">Bus</span></div>
            <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-indigo-500" /><span className="text-[10px] text-white/40">Cab (Triveni)</span></div>
          </div>
        </div>
      </section>

      {/* ━━━ SIDE-BY-SIDE PANELS ━━━ */}
      <section className="py-12 sm:py-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-8">
              <div>
                <p className="text-[10px] font-bold text-indigo-600 uppercase tracking-widest mb-1">Detailed Breakdown</p>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900">Bus vs Cab Options</h2>
              </div>
              <p className="text-sm text-slate-500">{route.distanceKm} km route</p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-5 items-start">
            {/* Bus Panel */}
            <ScrollReveal>
              <div className="bg-white rounded-2xl p-6 border border-slate-100">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center"><Bus className="w-5 h-5 text-blue-600" /></div>
                  <div>
                    <h3 className="text-lg font-black text-blue-600">Bus</h3>
                    <p className="text-xs text-slate-400">{route.busOptions.length} options</p>
                  </div>
                </div>
                <div className="space-y-2 mb-5">
                  {route.busOptions.map((bus, i) => (
                    <div key={i} className="flex items-center justify-between bg-blue-50/50 rounded-lg px-4 py-3 border border-blue-100/50">
                      <div>
                        <p className="font-bold text-slate-800 text-sm">{bus.type}</p>
                        <div className="flex gap-3 text-[11px] text-slate-500">
                          <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {bus.duration}</span>
                          <span>{bus.frequency}</span>
                        </div>
                      </div>
                      <span className="text-lg font-black text-blue-600">{'\u20B9'}{bus.cost}</span>
                    </div>
                  ))}
                </div>
                <div className="space-y-1.5">
                  {['Fixed departure times', 'Multiple stops', 'No door-to-door', 'Limited luggage', 'Shared seating'].map((con, j) => (
                    <div key={j} className="flex items-center gap-2 text-sm text-slate-400">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-400 flex-shrink-0" /> {con}
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* VS */}
            <div className="hidden lg:flex items-center justify-center self-center">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#FACF2D] to-amber-500 flex items-center justify-center shadow-lg">
                <span className="text-sm font-black text-slate-900">VS</span>
              </div>
            </div>

            {/* Cab Panel */}
            <ScrollReveal stagger={100}>
              <div className="bg-white rounded-2xl p-6 border-2 border-indigo-200 relative">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2"><span className="bg-indigo-600 text-white text-[9px] font-black px-4 py-1 rounded-full uppercase tracking-widest">Recommended</span></div>
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-indigo-100 flex items-center justify-center"><Car className="w-5 h-5 text-indigo-600" /></div>
                  <div>
                    <h3 className="text-lg font-black text-indigo-600">Cab (Triveni)</h3>
                    <p className="text-xs text-slate-400">Sedan + SUV</p>
                  </div>
                </div>
                <div className="space-y-2 mb-5">
                  {[
                    { name: 'Sedan (AC)', sub: 'Swift Dzire / Etios', ...route.cabOptions.sedan, seats: '4' },
                    { name: 'SUV (AC)', sub: 'Innova / Ertiga', ...route.cabOptions.suv, seats: '6-7' },
                  ].map((cab, i) => (
                    <div key={i} className="flex items-center justify-between bg-indigo-50/50 rounded-lg px-4 py-3 border border-indigo-100/50">
                      <div>
                        <p className="font-bold text-slate-800 text-sm">{cab.name}</p>
                        <div className="flex gap-3 text-[11px] text-slate-500">
                          <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {cab.duration}</span>
                          <span>{'\u20B9'}{cab.perKm}/km</span>
                        </div>
                      </div>
                      <span className="text-lg font-black text-indigo-600">{cab.fare}</span>
                    </div>
                  ))}
                </div>
                <div className="space-y-1.5">
                  {['Door-to-door pickup', 'No stops, fastest route', 'AC with full privacy', 'Unlimited luggage', 'Flexible timing'].map((pro, j) => (
                    <div key={j} className="flex items-center gap-2 text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" /> {pro}
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ━━━ INTERACTIVE PASSENGER COST CALCULATOR ━━━ */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 bg-slate-900">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <p className="text-[10px] font-bold text-[#FACF2D] uppercase tracking-widest mb-1">Interactive Calculator</p>
            <h2 className="text-2xl sm:text-3xl font-black text-white mb-8">Per-Person Cost Breakdown</h2>
          </ScrollReveal>

          <ScrollReveal>
            <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 sm:p-8 border border-white/10">
              {/* Passenger selector */}
              <div className="flex items-center justify-center gap-4 mb-8">
                <span className="text-white/50 text-sm font-bold uppercase tracking-wider">Passengers:</span>
                <div className="flex gap-2">
                  {[1, 2, 3, 4].map(n => (
                    <button key={n} onClick={() => setSelectedPassengers(n)}
                      className={`w-12 h-12 rounded-xl font-black text-base transition-all ${selectedPassengers === n ? 'bg-[#FACF2D] text-slate-900 shadow-lg shadow-amber-500/20' : 'bg-white/10 text-white/50 border border-white/10 hover:border-white/30'}`}>
                      {n}
                    </button>
                  ))}
                </div>
              </div>

              {/* Side by side */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-white/5 rounded-xl p-5 text-center border border-blue-500/20">
                  <Bus className="w-7 h-7 text-blue-400 mx-auto mb-2" />
                  <p className="text-white/40 text-xs uppercase tracking-wider mb-1">Bus (per person)</p>
                  <p className="text-3xl font-black text-blue-400">{'\u20B9'}{busPerPerson}</p>
                  <p className="text-white/30 text-xs mt-1">x {selectedPassengers} = {'\u20B9'}{(busPerPerson * selectedPassengers).toLocaleString('en-IN')}</p>
                </div>
                <div className="bg-white/5 rounded-xl p-5 text-center border border-indigo-500/20">
                  <Car className="w-7 h-7 text-indigo-400 mx-auto mb-2" />
                  <p className="text-white/40 text-xs uppercase tracking-wider mb-1">Cab (per person)</p>
                  <p className="text-3xl font-black text-indigo-400">{'\u20B9'}{cabPerPerson.toLocaleString('en-IN')}</p>
                  <p className="text-white/30 text-xs mt-1">Total: {route.cabOptions.sedan.fare} shared by {selectedPassengers}</p>
                </div>
              </div>

              {/* Winner badge */}
              <div className="text-center">
                <div className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm ${cabPerPerson <= busPerPerson ? 'bg-indigo-500/20 text-indigo-300 border border-indigo-500/30' : 'bg-blue-500/20 text-blue-300 border border-blue-500/30'}`}>
                  <Trophy className="w-5 h-5" />
                  {cabPerPerson <= busPerPerson
                    ? `Cab wins! Save \u20B9${(busPerPerson - cabPerPerson) * selectedPassengers} total`
                    : `Bus is \u20B9${cabPerPerson - busPerPerson}/person cheaper`}
                </div>
              </div>

              {/* All passenger mini breakdown */}
              <div className="grid grid-cols-4 gap-2 mt-6">
                {[1, 2, 3, 4].map(n => {
                  const pp = Math.round(route.cabOptions.sedan.fareRaw / n);
                  const win = pp <= busPerPerson;
                  return (
                    <div key={n} className={`bg-white/5 rounded-lg p-3 text-center border transition-all ${selectedPassengers === n ? 'border-[#FACF2D]/50' : 'border-white/5'}`}>
                      <p className="text-white/30 text-[10px] mb-1">{n} pax</p>
                      <p className={`text-sm font-black ${win ? 'text-emerald-400' : 'text-white/50'}`}>{'\u20B9'}{pp.toLocaleString('en-IN')}</p>
                      {win && <p className="text-[9px] text-emerald-400 font-bold mt-0.5">Cab wins</p>}
                    </div>
                  );
                })}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ━━━ SCENARIO CARDS ━━━ */}
      <section className="py-12 sm:py-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <p className="text-[10px] font-bold text-indigo-600 uppercase tracking-widest mb-1">Travel Scenarios</p>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-8">Who Should Choose What?</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {route.scenarios.map((s, i) => (
              <ScrollReveal key={i} delay={i * 60}>
                <div className="bg-white rounded-xl p-5 border border-slate-100 hover:border-indigo-200 hover:shadow-md transition-all">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-bold text-slate-900 text-sm">{s.scenario}</h3>
                    {s.winner === 'Cab' || s.winner.includes('Cab')
                      ? <Car className="w-5 h-5 text-indigo-500" />
                      : <Bus className="w-5 h-5 text-blue-500" />}
                  </div>
                  <span className={`inline-block px-2.5 py-0.5 rounded-lg text-[10px] font-black uppercase tracking-wider mb-2 ${
                    s.winner === 'Cab' || s.winner.includes('Cab') ? 'bg-indigo-50 text-indigo-700' : 'bg-blue-50 text-blue-700'
                  }`}>Winner: {s.winner}</span>
                  <p className="text-slate-500 text-sm leading-relaxed">{s.reason}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━ DARK VERDICT ━━━ */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 bg-slate-900">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 bg-[#FACF2D]/20 px-4 py-1.5 rounded-full border border-[#FACF2D]/30 mb-6">
              <Award className="w-4 h-4 text-[#FACF2D]" />
              <span className="text-[11px] font-bold text-[#FACF2D] uppercase tracking-widest">Final Verdict</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white mb-4">Our Recommendation</h2>
            <p className="text-white/50 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto mb-6">{route.verdict}</p>
            <a onClick={() => trackWhatsAppClick('bus_vs_cab_verdict')} href={`https://wa.me/917668570551?text=${encodeURIComponent(whatsappMsg)}`} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#FACF2D] text-slate-900 px-8 py-3.5 rounded-full font-bold text-sm hover:bg-amber-300 transition-all shadow-lg shadow-amber-500/20">
              Book a Cab Now <ArrowRight className="w-4 h-4" />
            </a>
          </ScrollReveal>
        </div>
      </section>

      {/* ━━━ FAQ ━━━ */}
      <FaqAccordion heading={`${route.origin} to ${route.destination} Travel FAQs`} faqs={route.faqs} />

      {/* ━━━ RELATED ━━━ */}
      {relatedRoutes.length > 0 && (
        <section className="py-12 sm:py-16 px-4 sm:px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <ScrollReveal>
              <p className="text-[10px] font-bold text-indigo-600 uppercase tracking-widest mb-1">More Comparisons</p>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-8">Related Routes</h2>
            </ScrollReveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {relatedRoutes.map((r, i) => (
                <ScrollReveal key={i} stagger={i * 50}>
                  <Link href={`/bus-vs-cab/${r.slug}`} className="group flex items-center gap-3 bg-[#f8f7f4] rounded-xl p-4 hover:bg-white hover:shadow-lg transition-all border border-transparent hover:border-indigo-200">
                    <div className="w-9 h-9 rounded-lg bg-indigo-50 flex items-center justify-center flex-shrink-0 group-hover:bg-indigo-100 transition-colors">
                      <Route className="w-4 h-4 text-indigo-600" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-bold text-slate-900 text-sm truncate">{r.origin} → {r.destination}</p>
                      <p className="text-xs text-slate-500">{r.distanceKm} km · From {r.cabOptions.sedan.fare}</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-indigo-500 flex-shrink-0" />
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTASection heading="Skip the Bus. Book a Cab." subheading={`${route.origin} to ${route.destination} - ${route.distanceKm} km. From ${route.cabOptions.sedan.fare}. Door-to-door AC comfort.`} />
      <MobileStickyBar />
    </div>
  );
}
