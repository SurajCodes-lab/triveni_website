'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  Phone, ArrowRight, ChevronDown, Shield, Clock, Car, CheckCircle2,
  Route, Zap, MapPin, Navigation, Star, Users, Fuel, Info,
  ChevronRight, Sparkles, Award, IndianRupee, CreditCard, CheckCircle,
  Gauge, Tag, ShieldCheck
} from '@/components/ui/icons';
import { trackWhatsAppClick, trackPhoneCall } from '@/utilis/analytics';

export default function TollCostClient({ route, relatedRoutes }) {
  const [openFaq, setOpenFaq] = useState(null);
  const [scrollY, setScrollY] = useState(0);
  const [activeTab, setActiveTab] = useState('car');

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const whatsappMsg = `Hi, I want to book a cab from ${route.origin} to ${route.destination} (${route.totalDistance} km). Please share toll-inclusive fare.`;
  const suvFare = Math.max(route.totalDistance, 300) * 14;
  const tempoFare = Math.max(route.totalDistance, 300) * 18;

  const formatINR = (num) => {
    if (!num && num !== 0) return '---';
    return num.toLocaleString('en-IN');
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-hidden">

      {/* ═══ MEGA CSS Animations ═══ */}
      <style jsx global>{`
        @keyframes shimmer { 0% { background-position: -200% 0; } 100% { background-position: 200% 0; } }
        @keyframes float { 0%,100% { transform: translateY(0px); } 50% { transform: translateY(-14px); } }
        @keyframes float-slow { 0%,100% { transform: translateY(0px) rotate(0deg); } 50% { transform: translateY(-20px) rotate(3deg); } }
        @keyframes pulse-glow { 0%,100% { box-shadow: 0 0 30px rgba(168,85,247,0.2), 0 0 60px rgba(217,70,239,0.1); } 50% { box-shadow: 0 0 60px rgba(168,85,247,0.5), 0 0 120px rgba(217,70,239,0.3); } }
        @keyframes gradient-x { 0%,100% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } }
        @keyframes orbit { 0% { transform: rotate(0deg) translateX(80px) rotate(0deg); } 100% { transform: rotate(360deg) translateX(80px) rotate(-360deg); } }
        @keyframes morph { 0%,100% { border-radius: 60% 40% 30% 70%/60% 30% 70% 40%; } 50% { border-radius: 30% 60% 70% 40%/50% 60% 30% 60%; } }
        @keyframes glow-pulse { 0%,100% { opacity: 0.5; transform: scale(1); } 50% { opacity: 1; transform: scale(1.05); } }
        @keyframes reveal-up { from { opacity: 0; transform: translateY(40px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes toll-scan { 0% { left: -10%; opacity: 0; } 20% { opacity: 1; } 80% { opacity: 1; } 100% { left: 110%; opacity: 0; } }
        @keyframes neon-flicker { 0%,100% { opacity: 1; } 92% { opacity: 1; } 93% { opacity: 0.4; } 94% { opacity: 1; } 96% { opacity: 0.7; } 97% { opacity: 1; } }
        .animate-shimmer { background-size: 200% 100%; animation: shimmer 2.5s linear infinite; }
        .animate-float { animation: float 4s ease-in-out infinite; }
        .animate-float-slow { animation: float-slow 6s ease-in-out infinite; }
        .animate-pulse-glow { animation: pulse-glow 3s ease-in-out infinite; }
        .animate-gradient-x { background-size: 200% 200%; animation: gradient-x 6s ease infinite; }
        .animate-orbit { animation: orbit 20s linear infinite; }
        .animate-morph { animation: morph 8s ease-in-out infinite; }
        .animate-glow { animation: glow-pulse 2s ease-in-out infinite; }
        .animate-reveal { animation: reveal-up 0.8s ease-out forwards; }
        .animate-neon { animation: neon-flicker 4s ease-in-out infinite; }
        .tc-glass { background: rgba(255,255,255,0.03); backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px); border: 1px solid rgba(255,255,255,0.06); }
        .tc-glass-hover:hover { background: rgba(255,255,255,0.06); border-color: rgba(168,85,247,0.3); box-shadow: 0 8px 32px rgba(168,85,247,0.1), inset 0 1px 0 rgba(255,255,255,0.05); transform: translateY(-2px); }
        .tc-glass-strong { background: rgba(255,255,255,0.05); backdrop-filter: blur(40px); -webkit-backdrop-filter: blur(40px); border: 1px solid rgba(255,255,255,0.08); }
        .tc-neon { box-shadow: 0 0 15px rgba(168,85,247,0.15), 0 0 45px rgba(168,85,247,0.05), inset 0 1px 0 rgba(255,255,255,0.05); }
        .tc-text-glow { text-shadow: 0 0 40px rgba(168,85,247,0.5), 0 0 80px rgba(217,70,239,0.3); }
        .tc-border-glow { box-shadow: inset 0 0 20px rgba(168,85,247,0.1), 0 0 40px rgba(168,85,247,0.05); }
        .toll-scan-line { position: absolute; top: 0; bottom: 0; width: 2px; background: linear-gradient(to bottom, transparent, rgba(168,85,247,0.8), transparent); animation: toll-scan 3s ease-in-out infinite; box-shadow: 0 0 15px rgba(168,85,247,0.5); }
      `}</style>

      {/* ═══════════════════════════════════════════════════════════════
          HERO: Toll Cost Cosmic Comparator
         ═══════════════════════════════════════════════════════════════ */}
      <section className="relative min-h-[95vh] flex items-center overflow-hidden">
        {/* Multi-layer gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-purple-950/70 to-fuchsia-950/40 animate-gradient-x" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(168,85,247,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(217,70,239,0.1),transparent_50%)]" />

        {/* Animated mesh grid */}
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.5) 1px, transparent 0)', backgroundSize: '32px 32px' }} />

        {/* Floating morphing orbs */}
        <div className="absolute top-[15%] left-[5%] w-80 h-80 bg-purple-600/20 rounded-full blur-[100px] animate-morph" />
        <div className="absolute bottom-[10%] right-[5%] w-[500px] h-[500px] bg-fuchsia-500/12 rounded-full blur-[150px] animate-morph" style={{ animationDelay: '-4s' }} />
        <div className="absolute top-[50%] left-[30%] w-60 h-60 bg-violet-500/8 rounded-full blur-[120px] animate-morph" style={{ animationDelay: '-2s' }} />
        <div className="absolute top-[20%] right-[25%] w-40 h-40 bg-pink-500/8 rounded-full blur-[80px] animate-float-slow" />

        {/* Orbiting particle */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hidden lg:block">
          <div className="animate-orbit">
            <div className="w-3 h-3 bg-purple-400 rounded-full shadow-lg shadow-purple-400/50" />
          </div>
        </div>

        {/* Floating total toll badge */}
        <div className="absolute top-28 right-[8%] hidden lg:block animate-float">
          <div className="relative">
            <div className="absolute -inset-12 bg-purple-500/15 rounded-full blur-[60px] animate-pulse" />
            <div className="relative tc-glass-strong rounded-full w-44 h-44 flex items-center justify-center animate-pulse-glow border-2 border-purple-500/20">
              <div className="absolute inset-1 rounded-full bg-gradient-to-br from-purple-500/20 via-fuchsia-500/10 to-transparent" />
              <div className="text-center relative z-10">
                <div className="text-xs font-bold text-purple-300/60 uppercase tracking-wider mb-1">Total Toll</div>
                <div className="text-3xl font-black text-white tc-text-glow">{formatINR(route.totalTollCost.car)}</div>
                <div className="text-[10px] font-bold text-purple-300/50 uppercase tracking-[0.15em] mt-0.5">for car</div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating plaza count badge */}
        <div className="absolute bottom-40 right-[15%] hidden xl:block animate-float-slow" style={{ animationDelay: '-2s' }}>
          <div className="tc-glass-strong rounded-2xl px-6 py-4 border border-fuchsia-500/20 tc-neon">
            <div className="text-xs text-fuchsia-400 uppercase tracking-wider font-bold">Toll Plazas</div>
            <div className="text-2xl font-black text-fuchsia-300">{route.tollPlazas.length}</div>
          </div>
        </div>

        {/* Bottom wave clip */}
        <div className="absolute -bottom-1 left-0 right-0 h-40">
          <svg viewBox="0 0 1440 120" className="w-full h-full" preserveAspectRatio="none">
            <path d="M0,80 C240,120 480,20 720,60 C960,100 1200,30 1440,70 L1440,120 L0,120 Z" fill="#020617" />
            <path d="M0,90 C360,110 720,40 1080,80 C1260,95 1380,85 1440,80 L1440,120 L0,120 Z" fill="#020617" fillOpacity="0.5" />
          </svg>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-32">
          {/* Glowing top badge */}
          <div className="inline-flex items-center gap-2.5 tc-glass-strong px-6 py-3 rounded-full mb-10 border border-purple-500/25 animate-glow">
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span className="text-sm font-bold text-purple-300 tracking-wider uppercase">Toll Cost Guide</span>
            <div className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
          </div>

          {/* City names - text-9xl */}
          <div className="mb-8">
            <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-[0.85]">
              <span className="block bg-gradient-to-r from-white via-white to-white/60 bg-clip-text text-transparent">{route.origin}</span>
              <span className="block text-3xl sm:text-4xl font-bold text-purple-400/60 my-3 tracking-normal">to</span>
              <span className="block bg-gradient-to-r from-purple-300 via-fuchsia-300 to-violet-400 bg-clip-text text-transparent animate-shimmer">{route.destination}</span>
            </h1>
          </div>

          {/* Meta pills */}
          <div className="flex flex-wrap gap-4 mb-10">
            <div className="tc-glass rounded-full px-5 py-2.5 flex items-center gap-2">
              <Route className="w-4 h-4 text-purple-400" />
              <span className="text-white/70 text-sm font-medium">{route.totalDistance} km</span>
            </div>
            <div className="tc-glass rounded-full px-5 py-2.5 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-fuchsia-400" />
              <span className="text-white/70 text-sm font-medium">{route.tollPlazas.length} Toll Plaza{route.tollPlazas.length !== 1 ? 's' : ''}</span>
            </div>
            <div className="tc-glass rounded-full px-5 py-2.5 flex items-center gap-2">
              <CreditCard className="w-4 h-4 text-violet-400" />
              <span className="text-white/70 text-sm font-medium">FASTag Enabled</span>
            </div>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-wrap gap-4">
            <a
              href={`https://wa.me/917668570551?text=${encodeURIComponent(whatsappMsg)}`}
              target="_blank" rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick('toll_cost_hero', whatsappMsg, `${route.origin} to ${route.destination}`)}
              className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-fuchsia-600 hover:from-purple-500 hover:to-fuchsia-500 text-white font-bold px-8 py-4 rounded-2xl transition-all duration-300 hover:shadow-[0_0_40px_rgba(168,85,247,0.3)] hover:-translate-y-0.5"
            >
              <span>Get Toll-Inclusive Quote</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="tel:+917668570551"
              onClick={() => trackPhoneCall('toll_cost_hero', '7668570551')}
              className="inline-flex items-center gap-3 tc-glass-strong text-white font-bold px-8 py-4 rounded-2xl border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 hover:-translate-y-0.5"
            >
              <Phone className="w-5 h-5 text-purple-400" />
              <span>Call Now</span>
            </a>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          SUMMARY CARDS: Total Toll / Fuel Cost / Cab Fare
         ═══════════════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-28 px-4 sm:px-6 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(168,85,247,0.06),transparent_60%)]" />
        <div className="relative max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 tc-glass px-4 py-2 rounded-full text-purple-400 font-semibold text-xs tracking-widest uppercase mb-4">
              <Gauge className="w-3.5 h-3.5" /> Cost Breakdown
            </span>
            <h2 className="text-4xl md:text-6xl font-black tracking-tight">Trip Cost at a Glance</h2>
            <p className="text-white/40 mt-4 text-lg">{route.origin} to {route.destination} -- every rupee accounted for</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Total Toll Card */}
            <div className="tc-glass-strong rounded-[2rem] p-8 tc-border-glow relative overflow-hidden group hover:border-purple-400/30 transition-all duration-500 hover:-translate-y-1">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-fuchsia-500 to-purple-500 opacity-60" />
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-purple-500/10 rounded-full blur-[60px] group-hover:bg-purple-500/20 transition-all" />
              <div className="relative">
                <div className="w-14 h-14 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mb-5">
                  <Tag className="w-7 h-7 text-purple-400" />
                </div>
                <p className="text-xs font-bold text-purple-400/70 uppercase tracking-[0.15em] mb-2">Total Toll (Car)</p>
                <div className="text-4xl font-black text-white mb-1 tc-text-glow">{formatINR(route.totalTollCost.car)}</div>
                <p className="text-white/40 text-sm">SUV: <span className="text-purple-300/70 font-semibold">{formatINR(route.totalTollCost.suv)}</span></p>
              </div>
            </div>

            {/* Fuel Cost Card */}
            <div className="tc-glass-strong rounded-[2rem] p-8 tc-border-glow relative overflow-hidden group hover:border-fuchsia-400/30 transition-all duration-500 hover:-translate-y-1">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-fuchsia-500 via-pink-500 to-fuchsia-500 opacity-60" />
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-fuchsia-500/10 rounded-full blur-[60px] group-hover:bg-fuchsia-500/20 transition-all" />
              <div className="relative">
                <div className="w-14 h-14 rounded-2xl bg-fuchsia-500/10 border border-fuchsia-500/20 flex items-center justify-center mb-5">
                  <Fuel className="w-7 h-7 text-fuchsia-400" />
                </div>
                <p className="text-xs font-bold text-fuchsia-400/70 uppercase tracking-[0.15em] mb-2">Est. Fuel Cost</p>
                <div className="text-4xl font-black text-white mb-1">{formatINR(route.estimatedFuel.petrol)}</div>
                <p className="text-white/40 text-sm">Diesel: <span className="text-fuchsia-300/70 font-semibold">{formatINR(route.estimatedFuel.diesel)}</span></p>
              </div>
            </div>

            {/* Cab Fare Card */}
            <div className="tc-glass-strong rounded-[2rem] p-8 tc-border-glow relative overflow-hidden group hover:border-violet-400/30 transition-all duration-500 hover:-translate-y-1">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-violet-500 via-purple-500 to-violet-500 opacity-60" />
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-violet-500/10 rounded-full blur-[60px] group-hover:bg-violet-500/20 transition-all" />
              <div className="relative">
                <div className="w-14 h-14 rounded-2xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center mb-5">
                  <Car className="w-7 h-7 text-violet-400" />
                </div>
                <p className="text-xs font-bold text-violet-400/70 uppercase tracking-[0.15em] mb-2">Cab Fare (Sedan)</p>
                <div className="text-4xl font-black text-white mb-1">{formatINR(route.cabFare)}</div>
                <p className="text-white/40 text-sm">Toll extra, paid at actual</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          TOLL PLAZA BREAKDOWN: Premium glass table with scanning line
         ═══════════════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-28 px-4 sm:px-6 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(217,70,239,0.04),transparent_60%)]" />
        <div className="relative max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 tc-glass px-4 py-2 rounded-full text-fuchsia-400 font-semibold text-xs tracking-widest uppercase mb-4">
              <MapPin className="w-3.5 h-3.5" /> Plaza-by-Plaza
            </span>
            <h2 className="text-4xl md:text-6xl font-black tracking-tight">Toll Plaza Breakdown</h2>
            <p className="text-white/40 mt-4 text-lg">Every toll booth on the {route.origin} to {route.destination} highway</p>
          </div>

          {/* Vehicle type tabs */}
          <div className="flex justify-center mb-10">
            <div className="tc-glass-strong rounded-full p-1.5 inline-flex gap-1">
              {[
                { key: 'car', label: 'Car / Sedan' },
                { key: 'suv', label: 'SUV / MUV' },
              ].map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${
                    activeTab === tab.key
                      ? 'bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white shadow-lg shadow-purple-500/20'
                      : 'text-white/40 hover:text-white/70'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Toll Table */}
          <div className="tc-glass-strong rounded-[2rem] overflow-hidden tc-border-glow relative">
            {/* Scanning line effect */}
            <div className="toll-scan-line" />

            {/* Desktop Header */}
            <div className="hidden md:grid grid-cols-12 gap-4 p-6 border-b border-white/[0.06] bg-white/[0.02]">
              <div className="col-span-1 text-xs font-black text-purple-400 uppercase tracking-[0.15em]">#</div>
              <div className="col-span-4 text-xs font-black text-purple-400 uppercase tracking-[0.15em]">Toll Plaza</div>
              <div className="col-span-2 text-xs font-black text-purple-400 uppercase tracking-[0.15em] text-center">At KM</div>
              <div className="col-span-2 text-xs font-black text-purple-400 uppercase tracking-[0.15em] text-center">Cost</div>
              <div className="col-span-3 text-xs font-black text-purple-400 uppercase tracking-[0.15em] text-right">FASTag</div>
            </div>

            {/* Table Rows */}
            {route.tollPlazas.map((toll, i) => (
              <div
                key={i}
                className={`grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-4 p-5 md:p-6 border-b border-white/[0.03] hover:bg-white/[0.03] transition-colors duration-300 ${
                  i % 2 === 0 ? 'bg-white/[0.01]' : ''
                }`}
              >
                {/* Index */}
                <div className="hidden md:flex col-span-1 items-center">
                  <div className="w-8 h-8 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-xs font-black text-purple-400">
                    {i + 1}
                  </div>
                </div>

                {/* Plaza Name */}
                <div className="col-span-4 flex items-center gap-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-purple-500 to-fuchsia-500 flex-shrink-0 md:hidden" />
                  <div>
                    <div className="font-semibold text-white/90">{toll.name}</div>
                    <div className="text-xs text-white/30 md:hidden mt-0.5">At {toll.location} km</div>
                  </div>
                </div>

                {/* At KM */}
                <div className="hidden md:flex col-span-2 items-center justify-center">
                  <span className="tc-glass px-3 py-1 rounded-full text-sm text-white/50 font-medium">{toll.location} km</span>
                </div>

                {/* Cost */}
                <div className="col-span-2 flex items-center justify-between md:justify-center">
                  <span className="text-xs text-white/30 md:hidden">Cost:</span>
                  <span className="text-lg font-black text-white">
                    {formatINR(activeTab === 'car' ? toll.carCost : toll.suvCost)}
                  </span>
                </div>

                {/* FASTag Status */}
                <div className="col-span-3 flex items-center justify-between md:justify-end">
                  <span className="text-xs text-white/30 md:hidden">FASTag:</span>
                  {toll.acceptsFASTag ? (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold">
                      <CheckCircle className="w-3 h-3" /> Accepted
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-bold">
                      Cash Only
                    </span>
                  )}
                </div>
              </div>
            ))}

            {/* Total Row with purple gradient */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-4 p-6 bg-gradient-to-r from-purple-500/10 via-fuchsia-500/10 to-purple-500/10 border-t border-purple-500/20">
              <div className="hidden md:block col-span-1" />
              <div className="col-span-4 font-black text-purple-300 flex items-center gap-2">
                <Zap className="w-5 h-5 text-fuchsia-400" />
                <span>Total Toll Cost</span>
              </div>
              <div className="hidden md:block col-span-2" />
              <div className="col-span-2 flex items-center justify-between md:justify-center">
                <span className="text-xs text-purple-300/50 md:hidden">Total:</span>
                <span className="text-3xl font-black bg-gradient-to-r from-purple-300 to-fuchsia-300 bg-clip-text text-transparent">
                  {formatINR(activeTab === 'car' ? route.totalTollCost.car : route.totalTollCost.suv)}
                </span>
              </div>
              <div className="col-span-3 flex items-center justify-end">
                <span className="text-purple-400/50 text-sm">approx.</span>
              </div>
            </div>
          </div>

          <p className="text-white/20 text-sm text-center mt-6">* Toll rates are approximate (2026) and may vary. FASTag users may get 2-5% cashback at some plazas.</p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          FASTAG INFO PANEL: Green accent glass card
         ═══════════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 px-4 sm:px-6 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(16,185,129,0.04),transparent_60%)]" />
        <div className="relative max-w-5xl mx-auto">
          <div className="tc-glass-strong rounded-[2rem] p-8 md:p-12 relative overflow-hidden border border-emerald-500/15 hover:border-emerald-400/25 transition-all duration-500">
            {/* Top accent line */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 via-green-400 to-emerald-500 opacity-60" />
            <div className="absolute -top-32 -right-32 w-64 h-64 bg-emerald-500/8 rounded-full blur-[100px]" />

            <div className="relative flex flex-col lg:flex-row gap-8 items-start">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                  <CreditCard className="w-8 h-8 text-emerald-400" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl font-black mb-4 flex flex-wrap items-center gap-3">
                  <span>FASTag Information</span>
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold">
                    <CheckCircle2 className="w-3 h-3" /> Recommended
                  </span>
                </h3>
                <p className="text-white/50 leading-relaxed text-[15px] mb-6">{route.fastagInfo}</p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="tc-glass rounded-xl p-4 border border-emerald-500/10">
                    <div className="text-emerald-400 font-bold text-sm mb-1">Faster Lanes</div>
                    <p className="text-white/40 text-xs">Skip cash queues, save 10-20 min per plaza</p>
                  </div>
                  <div className="tc-glass rounded-xl p-4 border border-emerald-500/10">
                    <div className="text-emerald-400 font-bold text-sm mb-1">Cashback Benefits</div>
                    <p className="text-white/40 text-xs">2-5% cashback on toll via select banks</p>
                  </div>
                  <div className="tc-glass rounded-xl p-4 border border-emerald-500/10">
                    <div className="text-emerald-400 font-bold text-sm mb-1">Digital Records</div>
                    <p className="text-white/40 text-xs">Auto-tracked toll expenses for GST claims</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          TOLL TIPS: Glass cards grid
         ═══════════════════════════════════════════════════════════════ */}
      {route.tips && route.tips.length > 0 && (
        <section className="py-20 md:py-28 px-4 sm:px-6 relative">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(168,85,247,0.03),transparent_60%)]" />
          <div className="relative max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-flex items-center gap-2 tc-glass px-4 py-2 rounded-full text-violet-400 font-semibold text-xs tracking-widest uppercase mb-4">
                <Info className="w-3.5 h-3.5" /> Pro Tips
              </span>
              <h2 className="text-4xl md:text-6xl font-black tracking-tight">Toll Route Tips</h2>
              <p className="text-white/40 mt-4 text-lg">Smart advice for a smooth {route.origin} to {route.destination} drive</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {route.tips.map((tip, i) => {
                const tipColors = ['purple', 'fuchsia', 'violet'];
                const color = tipColors[i % tipColors.length];

                return (
                  <div
                    key={i}
                    className="tc-glass rounded-[2rem] p-7 border border-purple-500/10 hover:border-purple-400/25 transition-all duration-500 hover:shadow-[0_0_40px_rgba(168,85,247,0.08)] hover:-translate-y-1 group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-lg font-black text-purple-400">{i + 1}</span>
                    </div>
                    <p className="text-white/60 leading-relaxed text-[15px]">{tip}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* ═══════════════════════════════════════════════════════════════
          BOOK A CAB: Driver Handles All Tolls - Conversion panel
         ═══════════════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-28 px-4 sm:px-6 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(168,85,247,0.08),transparent_60%)]" />
        <div className="relative max-w-5xl mx-auto">
          <div className="tc-glass-strong rounded-[2rem] p-10 md:p-14 relative overflow-hidden tc-border-glow">
            {/* Neon border lines */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-fuchsia-500/50 to-transparent" />
            <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-80 h-80 bg-purple-500/10 rounded-full blur-[120px]" />

            <div className="relative text-center">
              <div className="inline-flex items-center gap-2 tc-glass px-5 py-2.5 rounded-full text-purple-300 text-sm font-bold mb-8 border border-purple-500/20 animate-neon">
                <ShieldCheck className="w-4 h-4" />
                <span>Zero Hassle Guarantee</span>
              </div>

              <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-6">
                <span className="block text-white">Book a Cab</span>
                <span className="block bg-gradient-to-r from-purple-400 via-fuchsia-400 to-violet-400 bg-clip-text text-transparent mt-2">Driver Handles All Tolls</span>
              </h2>

              <p className="text-white/40 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
                No need to worry about toll payments, FASTag, or cash. Our driver handles every toll plaza on the {route.origin} to {route.destination} route. You just sit back and enjoy the ride.
              </p>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
                {[
                  { icon: Shield, text: 'Verified Drivers' },
                  { icon: CreditCard, text: 'Toll Paid at Actual' },
                  { icon: Car, text: 'AC Fleet, GPS Tracked' },
                  { icon: Phone, text: '24/7 Support' },
                ].map((item, i) => (
                  <div key={i} className="tc-glass rounded-xl p-4 border border-white/[0.04] hover:border-purple-500/20 transition-all group">
                    <item.icon className="w-6 h-6 text-purple-400 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                    <p className="text-white/50 text-xs font-semibold">{item.text}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={`https://wa.me/917668570551?text=${encodeURIComponent(whatsappMsg)}`}
                  target="_blank" rel="noopener noreferrer"
                  onClick={() => trackWhatsAppClick('toll_cost_cta', whatsappMsg, `${route.origin} to ${route.destination}`)}
                  className="group inline-flex items-center justify-center gap-3 bg-gradient-to-r from-purple-600 to-fuchsia-600 hover:from-purple-500 hover:to-fuchsia-500 text-white font-bold px-10 py-4 rounded-2xl transition-all duration-300 hover:shadow-[0_0_50px_rgba(168,85,247,0.3)] hover:-translate-y-0.5"
                >
                  <span>WhatsApp Us for Quote</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="tel:+917668570551"
                  onClick={() => trackPhoneCall('toll_cost_cta', '7668570551')}
                  className="inline-flex items-center justify-center gap-3 tc-glass-strong text-white font-bold px-10 py-4 rounded-2xl border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300"
                >
                  <Phone className="w-5 h-5 text-purple-400" />
                  <span>7668-570-551</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          CAB FARE CARDS: Sedan / SUV / Tempo Traveller
         ═══════════════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-28 px-4 sm:px-6 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(139,92,246,0.05),transparent_60%)]" />
        <div className="relative max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 tc-glass px-4 py-2 rounded-full text-purple-400 font-semibold text-xs tracking-widest uppercase mb-4">
              <IndianRupee className="w-3.5 h-3.5" /> Cab Fares
            </span>
            <h2 className="text-4xl md:text-6xl font-black tracking-tight">Choose Your Ride</h2>
            <p className="text-white/40 mt-4 text-lg">{route.origin} to {route.destination} cab fare (toll charges extra)</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Sedan Card */}
            <div className="tc-glass-strong rounded-[2rem] p-8 relative overflow-hidden border border-purple-500/10 hover:border-purple-400/30 transition-all duration-500 hover:-translate-y-1 group">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 to-purple-400 opacity-50 group-hover:opacity-100 transition-opacity" />
              <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-purple-500/5 rounded-full blur-[60px] group-hover:bg-purple-500/15 transition-all" />
              <div className="relative">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-black text-purple-400 uppercase tracking-[0.15em]">Sedan</span>
                  <span className="tc-glass px-3 py-1 rounded-full text-[10px] font-bold text-purple-300/70 uppercase tracking-wider">Popular</span>
                </div>
                <p className="text-white/40 text-sm mb-4">Swift Dzire, Toyota Etios, Honda Amaze</p>
                <div className="text-4xl font-black text-white mb-2">{formatINR(route.cabFare)}</div>
                <p className="text-white/20 text-xs mb-6">11/km | Min 300 km billing</p>
                <div className="space-y-2 mb-6">
                  {['AC Sedan, GPS tracked', 'Professional driver', 'Toll + parking extra'].map((f, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-white/40 text-sm">
                      <CheckCircle2 className="w-3.5 h-3.5 text-purple-400/60 flex-shrink-0" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
                <a
                  href={`https://wa.me/917668570551?text=${encodeURIComponent(`Hi, I want to book a Sedan from ${route.origin} to ${route.destination}. Please share details.`)}`}
                  target="_blank" rel="noopener noreferrer"
                  onClick={() => trackWhatsAppClick('toll_cost_sedan', '', `${route.origin} to ${route.destination} sedan`)}
                  className="block w-full text-center tc-glass py-3 rounded-xl text-purple-300 font-bold text-sm border border-purple-500/20 hover:bg-purple-500/10 hover:border-purple-400/40 transition-all"
                >
                  Book Sedan
                </a>
              </div>
            </div>

            {/* SUV Card - Featured */}
            <div className="tc-glass-strong rounded-[2rem] p-8 relative overflow-hidden border border-fuchsia-500/15 hover:border-fuchsia-400/30 transition-all duration-500 hover:-translate-y-1 group ring-1 ring-fuchsia-500/10">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-fuchsia-600 via-purple-500 to-fuchsia-600 opacity-70 group-hover:opacity-100 transition-opacity" />
              <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-fuchsia-500/5 rounded-full blur-[60px] group-hover:bg-fuchsia-500/15 transition-all" />
              <div className="absolute top-4 right-4">
                <span className="bg-gradient-to-r from-fuchsia-600 to-purple-600 px-3 py-1 rounded-full text-[10px] font-black text-white uppercase tracking-wider">Best Value</span>
              </div>
              <div className="relative">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-black text-fuchsia-400 uppercase tracking-[0.15em]">SUV</span>
                </div>
                <p className="text-white/40 text-sm mb-4">Toyota Innova, Ertiga, Marazzo</p>
                <div className="text-4xl font-black text-white mb-2">{formatINR(suvFare)}</div>
                <p className="text-white/20 text-xs mb-6">14/km | Min 300 km billing</p>
                <div className="space-y-2 mb-6">
                  {['Spacious SUV, AC + GPS', 'Ideal for families (6-7 pax)', 'Toll + parking extra'].map((f, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-white/40 text-sm">
                      <CheckCircle2 className="w-3.5 h-3.5 text-fuchsia-400/60 flex-shrink-0" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
                <a
                  href={`https://wa.me/917668570551?text=${encodeURIComponent(`Hi, I want to book an SUV from ${route.origin} to ${route.destination}. Please share details.`)}`}
                  target="_blank" rel="noopener noreferrer"
                  onClick={() => trackWhatsAppClick('toll_cost_suv', '', `${route.origin} to ${route.destination} suv`)}
                  className="block w-full text-center bg-gradient-to-r from-fuchsia-600 to-purple-600 hover:from-fuchsia-500 hover:to-purple-500 py-3 rounded-xl text-white font-bold text-sm transition-all shadow-lg shadow-fuchsia-500/15 hover:shadow-fuchsia-500/30"
                >
                  Book SUV
                </a>
              </div>
            </div>

            {/* Tempo Traveller Card */}
            <div className="tc-glass-strong rounded-[2rem] p-8 relative overflow-hidden border border-violet-500/10 hover:border-violet-400/30 transition-all duration-500 hover:-translate-y-1 group">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-violet-600 to-violet-400 opacity-50 group-hover:opacity-100 transition-opacity" />
              <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-violet-500/5 rounded-full blur-[60px] group-hover:bg-violet-500/15 transition-all" />
              <div className="relative">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-black text-violet-400 uppercase tracking-[0.15em]">Tempo</span>
                  <span className="tc-glass px-3 py-1 rounded-full text-[10px] font-bold text-violet-300/70 uppercase tracking-wider">Groups</span>
                </div>
                <p className="text-white/40 text-sm mb-4">Force Tempo, 12-16 Seater</p>
                <div className="text-4xl font-black text-white mb-2">{formatINR(tempoFare)}</div>
                <p className="text-white/20 text-xs mb-6">18/km | Min 300 km billing</p>
                <div className="space-y-2 mb-6">
                  {['AC Tempo, pushback seats', 'Group trips & pilgrimages', 'Toll + parking extra'].map((f, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-white/40 text-sm">
                      <CheckCircle2 className="w-3.5 h-3.5 text-violet-400/60 flex-shrink-0" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
                <a
                  href={`https://wa.me/917668570551?text=${encodeURIComponent(`Hi, I want to book a Tempo Traveller from ${route.origin} to ${route.destination}. Please share details.`)}`}
                  target="_blank" rel="noopener noreferrer"
                  onClick={() => trackWhatsAppClick('toll_cost_tempo', '', `${route.origin} to ${route.destination} tempo`)}
                  className="block w-full text-center tc-glass py-3 rounded-xl text-violet-300 font-bold text-sm border border-violet-500/20 hover:bg-violet-500/10 hover:border-violet-400/40 transition-all"
                >
                  Book Tempo
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          FAQ: Purple-themed glass accordion
         ═══════════════════════════════════════════════════════════════ */}
      {route.faqs && route.faqs.length > 0 && (
        <section className="py-24 md:py-32 px-4 sm:px-6 relative">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(168,85,247,0.05),transparent_60%)]" />
          <div className="relative max-w-4xl mx-auto">
            <div className="text-center mb-20">
              <span className="inline-flex items-center gap-2 tc-glass px-4 py-2 rounded-full text-purple-400 font-semibold text-xs tracking-widest uppercase mb-4">
                FAQ
              </span>
              <h2 className="text-4xl md:text-6xl font-black tracking-tight">Common Questions</h2>
              <p className="text-white/40 mt-4 text-lg">{route.origin} to {route.destination} toll &amp; travel FAQs</p>
            </div>

            <div className="space-y-4">
              {route.faqs.map((faq, i) => (
                <div
                  key={i}
                  className={`tc-glass rounded-2xl transition-all duration-500 ${
                    openFaq === i
                      ? 'border-purple-500/30 shadow-[0_0_30px_rgba(168,85,247,0.08)] bg-white/[0.05]'
                      : 'hover:border-white/10'
                  }`}
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    aria-expanded={openFaq === i}
                    aria-label={openFaq === i ? 'Collapse answer' : 'Expand answer'}
                    className="w-full flex items-center justify-between p-6 md:p-7 text-left group focus:outline-none focus:ring-2 focus:ring-purple-500/50 rounded-2xl"
                  >
                    <span className="font-semibold text-white/80 pr-8 group-hover:text-white transition-colors">{faq.question}</span>
                    <div className={`w-8 h-8 rounded-full tc-glass flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                      openFaq === i ? 'bg-purple-500/20 border-purple-500/30 rotate-180' : 'group-hover:border-white/20'
                    }`}>
                      <ChevronDown className="w-4 h-4 text-purple-400" />
                    </div>
                  </button>
                  <div className={`overflow-hidden transition-all duration-500 ${openFaq === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="px-6 md:px-7 pb-6 md:pb-7">
                      <div className="h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent mb-5" />
                      <p className="text-white/50 leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* FAQ Schema for SEO */}
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  '@context': 'https://schema.org',
                  '@type': 'FAQPage',
                  mainEntity: route.faqs.map((faq) => ({
                    '@type': 'Question',
                    name: faq.question,
                    acceptedAnswer: { '@type': 'Answer', text: faq.answer },
                  })),
                }),
              }}
            />
          </div>
        </section>
      )}

      {/* ═══════════════════════════════════════════════════════════════
          RELATED ROUTES: Hover-glow glass cards
         ═══════════════════════════════════════════════════════════════ */}
      {relatedRoutes && relatedRoutes.length > 0 && (
        <section className="py-24 md:py-32 px-4 sm:px-6 relative">
          <div className="relative max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-flex items-center gap-2 tc-glass px-4 py-2 rounded-full text-purple-400 font-semibold text-xs tracking-widest uppercase mb-4">
                <Navigation className="w-3.5 h-3.5" /> Explore More
              </span>
              <h2 className="text-3xl md:text-5xl font-black">Related Toll Routes</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedRoutes.map((r, i) => (
                <Link
                  key={i}
                  href={`/toll-cost/${r.slug}`}
                  className="group tc-glass rounded-2xl p-6 transition-all duration-500 hover:border-purple-500/30 hover:shadow-[0_0_40px_rgba(168,85,247,0.08)] hover:-translate-y-1"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-lg font-black">{r.origin}</span>
                    <div className="flex-1 h-[2px] bg-gradient-to-r from-purple-500/30 to-fuchsia-500/30 rounded-full relative">
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <span className="text-lg font-black text-purple-400">{r.destination}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-white/30">
                      <span className="flex items-center gap-1">
                        <Route className="w-3.5 h-3.5 text-purple-500/50" /> {r.totalDistance} km
                      </span>
                      {r.totalTollCost && (
                        <span className="flex items-center gap-1">
                          <Tag className="w-3.5 h-3.5 text-fuchsia-500/50" /> {formatINR(r.totalTollCost.car)}
                        </span>
                      )}
                    </div>
                    <ArrowRight className="w-4 h-4 text-purple-500/30 group-hover:text-purple-400 group-hover:translate-x-1 transition-all" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ═══════════════════════════════════════════════════════════════
          FINAL CTA: Purple neon glow
         ═══════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-36 px-4 sm:px-6 relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 bg-gradient-to-t from-purple-950/30 via-slate-950 to-slate-950" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-purple-600/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-20 left-[20%] w-60 h-60 bg-fuchsia-500/8 rounded-full blur-[100px] animate-float" />
        <div className="absolute bottom-20 right-[20%] w-60 h-60 bg-violet-500/8 rounded-full blur-[100px] animate-float-slow" />

        <div className="relative max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 tc-glass-strong px-6 py-3 rounded-full mb-10 border border-purple-500/25 animate-glow">
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span className="text-sm font-bold text-purple-300 tracking-wider uppercase">Ready to Travel?</span>
          </div>

          <h2 className="text-5xl md:text-7xl font-black tracking-tight mb-6">
            <span className="block text-white">Skip the Toll Stress</span>
            <span className="block bg-gradient-to-r from-purple-400 via-fuchsia-400 to-violet-400 bg-clip-text text-transparent mt-3 animate-shimmer tc-text-glow">Book Triveni Cabs</span>
          </h2>

          <p className="text-white/40 text-lg max-w-2xl mx-auto mb-12 leading-relaxed">
            {route.origin} to {route.destination} -- {route.totalDistance} km with {route.tollPlazas.length} toll plaza{route.tollPlazas.length !== 1 ? 's' : ''}. Our driver handles it all. Toll paid at actual, no hidden charges.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <a
              href={`https://wa.me/917668570551?text=${encodeURIComponent(whatsappMsg)}`}
              target="_blank" rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick('toll_cost_final_cta', whatsappMsg, `${route.origin} to ${route.destination}`)}
              className="group relative inline-flex items-center justify-center gap-3 bg-gradient-to-r from-purple-600 to-fuchsia-600 hover:from-purple-500 hover:to-fuchsia-500 text-white font-bold px-12 py-5 rounded-2xl transition-all duration-300 hover:shadow-[0_0_60px_rgba(168,85,247,0.4)] hover:-translate-y-1 text-lg"
            >
              <span>Get Instant Quote on WhatsApp</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              {/* Neon glow ring */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-fuchsia-600 rounded-2xl blur opacity-30 group-hover:opacity-50 transition-opacity -z-10" />
            </a>
            <a
              href="tel:+917668570551"
              onClick={() => trackPhoneCall('toll_cost_final_cta', '7668570551')}
              className="inline-flex items-center justify-center gap-3 tc-glass-strong text-white font-bold px-12 py-5 rounded-2xl border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 hover:-translate-y-0.5 text-lg"
            >
              <Phone className="w-5 h-5 text-purple-400" />
              <span>Call 7668-570-551</span>
            </a>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap justify-center gap-6 mt-12">
            {[
              { icon: Star, text: '4.9 Rating' },
              { icon: Users, text: '10,000+ Trips' },
              { icon: Shield, text: 'Verified Fleet' },
              { icon: Award, text: 'Best Price Guarantee' },
            ].map((badge, i) => (
              <div key={i} className="flex items-center gap-2 text-white/35 text-sm">
                <badge.icon className="w-4 h-4 text-purple-500/50" />
                <span>{badge.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
