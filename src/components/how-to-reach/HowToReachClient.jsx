'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  Phone, ArrowRight, ChevronDown, Shield, Clock, Car, Bus, Plane,
  CheckCircle2, Route, Zap, MapPin, Navigation, Star, Users,
  ChevronRight, Coffee, Mountain, Sparkles, Award, Info, TrainFront
} from '@/components/ui/icons';
import { trackWhatsAppClick, trackPhoneCall } from '@/utilis/analytics';

// ── Mode config for colors & icons ──
const MODE_CONFIG = {
  'By Car/Cab': { icon: Car, color: 'indigo', emoji: '🚗', label: 'Car / Cab' },
  'By Bus':     { icon: Bus, color: 'amber', emoji: '🚌', label: 'Bus' },
  'By Train + Cab': { icon: TrainFront, color: 'cyan', emoji: '🚆', label: 'Train + Cab' },
  'By Flight + Cab': { icon: Plane, color: 'rose', emoji: '✈️', label: 'Flight + Cab' },
};

export default function HowToReachClient({ route, relatedRoutes }) {
  const [openFaq, setOpenFaq] = useState(null);
  const [expandedMode, setExpandedMode] = useState(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const cabMode = route.travelModes.find(m => m.recommended) || route.travelModes[0];
  const whatsappMsg = `Hi, I want to book a cab from ${route.origin} to ${route.destination}`;

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-hidden">

      {/* ═══ MEGA CSS Animations ═══ */}
      <style jsx global>{`
        @keyframes shimmer { 0% { background-position: -200% 0; } 100% { background-position: 200% 0; } }
        @keyframes float { 0%,100% { transform: translateY(0px); } 50% { transform: translateY(-14px); } }
        @keyframes float-slow { 0%,100% { transform: translateY(0px) rotate(0deg); } 50% { transform: translateY(-20px) rotate(3deg); } }
        @keyframes pulse-glow { 0%,100% { box-shadow: 0 0 30px rgba(99,102,241,0.2), 0 0 60px rgba(139,92,246,0.1); } 50% { box-shadow: 0 0 60px rgba(99,102,241,0.5), 0 0 120px rgba(139,92,246,0.3); } }
        @keyframes gradient-x { 0%,100% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } }
        @keyframes road-move { 0% { transform: translateX(-12px); } 100% { transform: translateX(12px); } }
        @keyframes orbit { 0% { transform: rotate(0deg) translateX(80px) rotate(0deg); } 100% { transform: rotate(360deg) translateX(80px) rotate(-360deg); } }
        @keyframes morph { 0%,100% { border-radius: 60% 40% 30% 70%/60% 30% 70% 40%; } 50% { border-radius: 30% 60% 70% 40%/50% 60% 30% 60%; } }
        @keyframes dash-march { 0% { stroke-dashoffset: 0; } 100% { stroke-dashoffset: -30; } }
        @keyframes glow-pulse { 0%,100% { opacity: 0.5; transform: scale(1); } 50% { opacity: 1; transform: scale(1.05); } }
        @keyframes reveal-up { from { opacity: 0; transform: translateY(40px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes border-glow-spin {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-shimmer { background-size: 200% 100%; animation: shimmer 2.5s linear infinite; }
        .animate-float { animation: float 4s ease-in-out infinite; }
        .animate-float-slow { animation: float-slow 6s ease-in-out infinite; }
        .animate-pulse-glow { animation: pulse-glow 3s ease-in-out infinite; }
        .animate-gradient-x { background-size: 200% 200%; animation: gradient-x 6s ease infinite; }
        .animate-road { animation: road-move 1.5s ease-in-out infinite alternate; }
        .animate-orbit { animation: orbit 20s linear infinite; }
        .animate-morph { animation: morph 8s ease-in-out infinite; }
        .animate-dash { animation: dash-march 1.5s linear infinite; }
        .animate-glow { animation: glow-pulse 2s ease-in-out infinite; }
        .animate-reveal { animation: reveal-up 0.8s ease-out forwards; }
        .glass-card { background: rgba(255,255,255,0.03); backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px); border: 1px solid rgba(255,255,255,0.06); }
        .glass-card-hover:hover { background: rgba(255,255,255,0.06); border-color: rgba(129,140,248,0.3); box-shadow: 0 8px 32px rgba(99,102,241,0.1), inset 0 1px 0 rgba(255,255,255,0.05); transform: translateY(-2px); }
        .glass-strong { background: rgba(255,255,255,0.05); backdrop-filter: blur(40px); -webkit-backdrop-filter: blur(40px); border: 1px solid rgba(255,255,255,0.08); }
        .glass-neon { box-shadow: 0 0 15px rgba(99,102,241,0.15), 0 0 45px rgba(99,102,241,0.05), inset 0 1px 0 rgba(255,255,255,0.05); }
        .text-glow { text-shadow: 0 0 40px rgba(99,102,241,0.5), 0 0 80px rgba(139,92,246,0.3); }
        .border-glow { box-shadow: inset 0 0 20px rgba(99,102,241,0.1), 0 0 40px rgba(99,102,241,0.05); }
        .recommended-glow { box-shadow: 0 0 25px rgba(34,197,94,0.2), 0 0 60px rgba(34,197,94,0.08), inset 0 1px 0 rgba(255,255,255,0.05); }
      `}</style>

      {/* ═══════════════════════════════════════════════════════════════
          SECTION 1 — HERO: Cosmic Navigator with floating glass elements
         ═══════════════════════════════════════════════════════════════ */}
      <section className="relative min-h-[95vh] flex items-center overflow-hidden">
        {/* Multi-layer gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-indigo-950/70 to-violet-950/40 animate-gradient-x" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(99,102,241,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(139,92,246,0.1),transparent_50%)]" />

        {/* Animated mesh grid */}
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.5) 1px, transparent 0)', backgroundSize: '32px 32px' }} />

        {/* Floating morphing orbs */}
        <div className="absolute top-[15%] left-[5%] w-80 h-80 bg-indigo-600/20 rounded-full blur-[100px] animate-morph" />
        <div className="absolute bottom-[10%] right-[5%] w-[500px] h-[500px] bg-violet-500/12 rounded-full blur-[150px] animate-morph" style={{ animationDelay: '-4s' }} />
        <div className="absolute top-[50%] left-[30%] w-60 h-60 bg-cyan-500/8 rounded-full blur-[120px] animate-morph" style={{ animationDelay: '-2s' }} />
        <div className="absolute top-[20%] right-[25%] w-40 h-40 bg-fuchsia-500/8 rounded-full blur-[80px] animate-float-slow" />

        {/* Orbiting particle */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hidden lg:block">
          <div className="animate-orbit">
            <div className="w-3 h-3 bg-indigo-400 rounded-full shadow-lg shadow-indigo-400/50" />
          </div>
        </div>

        {/* Floating destination glass badge */}
        <div className="absolute top-28 right-[8%] hidden lg:block animate-float">
          <div className="relative">
            <div className="absolute -inset-12 bg-violet-500/15 rounded-full blur-[60px] animate-pulse" />
            <div className="relative glass-strong rounded-full w-44 h-44 flex items-center justify-center animate-pulse-glow border-2 border-violet-500/20">
              <div className="absolute inset-1 rounded-full bg-gradient-to-br from-indigo-500/20 via-violet-500/10 to-transparent" />
              <div className="text-center relative z-10">
                <div className="text-5xl mb-1">🗺️</div>
                <div className="text-[10px] font-bold text-violet-300/80 uppercase tracking-[0.2em]">Travel Guide</div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating modes count badge */}
        <div className="absolute bottom-40 right-[15%] hidden xl:block animate-float-slow" style={{ animationDelay: '-2s' }}>
          <div className="glass-strong rounded-2xl px-6 py-4 border border-indigo-500/20 glass-neon">
            <div className="text-xs text-indigo-400 uppercase tracking-wider font-bold">{route.travelModes.length} Modes</div>
            <div className="text-2xl font-black text-indigo-300">Compared</div>
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
          <div className="inline-flex items-center gap-2.5 glass-strong px-6 py-3 rounded-full mb-10 border border-indigo-500/25 animate-glow">
            <Sparkles className="w-4 h-4 text-indigo-400" />
            <span className="text-indigo-300 font-semibold text-sm tracking-wide">How to Reach &mdash; Complete Guide 2026</span>
            <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
          </div>

          {/* Massive city names with neon glow */}
          <div className="flex items-center gap-4 sm:gap-6 mb-8 flex-wrap">
            <span className="text-3xl sm:text-5xl md:text-7xl lg:text-9xl font-black bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-violet-400 to-purple-400 drop-shadow-[0_0_30px_rgba(139,92,246,0.3)]">{route.destination}</span>
          </div>

          {/* H1 subtitle */}
          <h1 className="text-xl md:text-2xl lg:text-3xl text-white/40 mb-8 max-w-4xl font-medium">
            How to Reach <span className="text-indigo-400 font-black text-glow">{route.destination}</span> from <span className="text-violet-400 font-black">{route.origin}</span> &mdash; {route.travelModes.length} Travel Modes Compared
          </h1>

          {/* Glass info pills */}
          <div className="flex flex-wrap gap-3 mb-12">
            {[
              { icon: Navigation, text: `From ${route.origin}`, accent: 'indigo' },
              { icon: MapPin, text: `To ${route.destination}`, accent: 'violet' },
              { icon: Route, text: `${route.travelModes.length} Travel Modes`, accent: 'purple' },
              { icon: Star, text: '4.9\u2605 (10,000+ reviews)', accent: 'yellow', special: true },
            ].map((pill, i) => (
              <span key={i} className={`inline-flex items-center gap-2 backdrop-blur-2xl px-5 py-3 rounded-2xl text-sm font-medium transition-all duration-300 hover:scale-105 ${pill.special ? 'bg-yellow-500/10 border border-yellow-500/25 text-yellow-300' : 'glass-card border-white/10 text-white/70 hover:border-indigo-500/30'}`}>
                <pill.icon className={`w-4 h-4 ${pill.special ? 'text-yellow-400' : pill.accent === 'violet' ? 'text-violet-400' : pill.accent === 'purple' ? 'text-purple-400' : 'text-indigo-400'}`} /> {pill.text}
              </span>
            ))}
          </div>

          {/* CTA buttons with glass + neon */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link onClick={() => trackPhoneCall('how_to_reach_hero')} href="tel:+917668570551" className="group inline-flex items-center gap-3 bg-gradient-to-r from-indigo-500 via-violet-500 to-purple-600 text-white px-10 py-5 rounded-2xl font-bold text-lg shadow-[0_0_40px_rgba(99,102,241,0.3)] hover:shadow-[0_0_60px_rgba(99,102,241,0.5)] hover:scale-105 transition-all duration-300">
              <Phone className="w-5 h-5 group-hover:animate-bounce" /> Call: 7668570551
            </Link>
            <Link onClick={() => trackWhatsAppClick('how_to_reach_hero')} href={`https://wa.me/917668570551?text=${encodeURIComponent(whatsappMsg)}`} className="group inline-flex items-center gap-3 glass-strong text-white px-10 py-5 rounded-2xl font-bold text-lg border border-white/15 hover:border-indigo-500/40 hover:shadow-[0_0_30px_rgba(99,102,241,0.15)] transition-all duration-300">
              <svg className="w-5 h-5 text-emerald-400" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.611.611l4.458-1.495A11.943 11.943 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.318 0-4.468-.67-6.29-1.823l-.451-.27-2.649.888.888-2.649-.27-.451A9.965 9.965 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/></svg>
              WhatsApp Quote <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          SECTION 2 — SOCIAL PROOF: Neon glass strip
         ═══════════════════════════════════════════════════════════════ */}
      <section className="relative py-8 border-y border-indigo-500/10">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-950/30 via-violet-950/20 to-indigo-950/30" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap justify-center gap-10 md:gap-20">
            {[
              { value: '10,000+', label: 'Happy Customers', icon: Users },
              { value: '4.9\u2605', label: 'Google Rating', icon: Star },
              { value: '24/7', label: 'Service Available', icon: Clock },
              { value: '500+', label: 'Routes Covered', icon: Route },
            ].map((stat, i) => (
              <div key={i} className="group text-center flex items-center gap-3 cursor-default">
                <div className="w-10 h-10 rounded-xl glass-card flex items-center justify-center group-hover:border-indigo-500/30 transition-all">
                  <stat.icon className="w-5 h-5 text-indigo-400" />
                </div>
                <div className="text-left">
                  <div className="text-xl font-black text-white">{stat.value}</div>
                  <div className="text-[10px] text-white/40 uppercase tracking-widest">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          SECTION 3 — QUICK COMPARISON CARDS: 4 glass cards in a row
         ═══════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 px-4 sm:px-6 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.05),transparent_70%)]" />
        <div className="relative max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <span className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full text-indigo-400 font-semibold text-xs tracking-widest uppercase mb-4">
              <Route className="w-3.5 h-3.5" /> Quick Comparison
            </span>
            <h2 className="text-4xl md:text-6xl font-black tracking-tight">Compare All Travel Modes</h2>
            <p className="text-white/40 mt-4 text-lg">{route.origin} to {route.destination} &mdash; Find your best option</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
            {route.travelModes.map((tm, i) => {
              const cfg = MODE_CONFIG[tm.mode] || { icon: Mountain, color: 'gray', emoji: '🚐', label: tm.mode };
              const ModeIcon = cfg.icon;
              const isRecommended = tm.recommended;

              // Color-specific classes
              const colorMap = {
                indigo: { bg: 'bg-indigo-500/10', border: 'border-indigo-500/20', text: 'text-indigo-400', hoverBorder: 'hover:border-indigo-500/40', hoverShadow: 'hover:shadow-[0_0_40px_rgba(99,102,241,0.12)]', iconGlow: 'shadow-indigo-500/20' },
                amber: { bg: 'bg-amber-500/10', border: 'border-amber-500/20', text: 'text-amber-400', hoverBorder: 'hover:border-amber-500/40', hoverShadow: 'hover:shadow-[0_0_40px_rgba(245,158,11,0.12)]', iconGlow: 'shadow-amber-500/20' },
                cyan: { bg: 'bg-cyan-500/10', border: 'border-cyan-500/20', text: 'text-cyan-400', hoverBorder: 'hover:border-cyan-500/40', hoverShadow: 'hover:shadow-[0_0_40px_rgba(6,182,212,0.12)]', iconGlow: 'shadow-cyan-500/20' },
                rose: { bg: 'bg-rose-500/10', border: 'border-rose-500/20', text: 'text-rose-400', hoverBorder: 'hover:border-rose-500/40', hoverShadow: 'hover:shadow-[0_0_40px_rgba(244,63,94,0.12)]', iconGlow: 'shadow-rose-500/20' },
                gray: { bg: 'bg-gray-500/10', border: 'border-gray-500/20', text: 'text-gray-400', hoverBorder: 'hover:border-gray-500/40', hoverShadow: 'hover:shadow-[0_0_40px_rgba(107,114,128,0.12)]', iconGlow: 'shadow-gray-500/20' },
              };
              const c = colorMap[cfg.color] || colorMap.gray;

              return (
                <div key={i} className={`group relative glass-card rounded-3xl p-7 transition-all duration-500 ${c.hoverBorder} ${c.hoverShadow} ${isRecommended ? 'ring-2 ring-emerald-500/25 recommended-glow' : ''}`}>
                  {/* Recommended badge */}
                  {isRecommended && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-20">
                      <div className="relative">
                        <div className="absolute inset-0 bg-emerald-500 blur-lg opacity-40" />
                        <span className="relative bg-gradient-to-r from-emerald-500 to-green-500 text-white text-[9px] font-black px-5 py-1.5 rounded-full uppercase tracking-[0.2em] shadow-lg flex items-center gap-1.5">
                          <Zap className="w-3 h-3" /> Recommended
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Icon + emoji */}
                  <div className="text-center mb-5">
                    <div className={`w-16 h-16 rounded-2xl ${c.bg} ${c.border} border flex items-center justify-center mx-auto mb-3 group-hover:scale-110 group-hover:shadow-lg group-hover:${c.iconGlow} transition-all duration-300`}>
                      <ModeIcon className={`w-8 h-8 ${c.text}`} />
                    </div>
                    <h3 className="text-lg font-black">{cfg.label}</h3>
                  </div>

                  {/* Duration */}
                  <div className="glass-card rounded-xl p-4 mb-4 text-center border border-white/[0.04]">
                    <div className="text-[10px] text-white/30 uppercase tracking-wider mb-1">Duration</div>
                    <div className="text-xl font-black text-white">{tm.duration || tm.totalDuration || 'Varies'}</div>
                  </div>

                  {/* Cost */}
                  <div className="text-center">
                    <div className="text-[10px] text-white/30 uppercase tracking-wider mb-1">Cost Range</div>
                    <div className={`text-lg font-black ${c.text}`}>{tm.costRange || tm.flightCostRange || 'Varies'}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          SECTION 4 — DETAILED COMPARISON TABLE: Glass table with neon rows
         ═══════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 px-4 sm:px-6 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_left,rgba(139,92,246,0.05),transparent_60%)]" />
        <div className="relative max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <span className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full text-violet-400 font-semibold text-xs tracking-widest uppercase mb-4">
              <Info className="w-3.5 h-3.5" /> Side-by-Side
            </span>
            <h2 className="text-4xl md:text-6xl font-black tracking-tight">Full Comparison</h2>
            <p className="text-white/40 mt-4 text-lg">Every detail at a glance &mdash; pick the best mode for your trip</p>
          </div>

          <div className="glass-strong rounded-[2rem] overflow-hidden border-glow">
            {/* Header row */}
            <div className="hidden md:grid md:grid-cols-5 gap-4 p-6 border-b border-white/[0.06] bg-white/[0.02]">
              <div className="text-xs font-black text-violet-400 uppercase tracking-[0.15em]">Travel Mode</div>
              <div className="text-xs font-black text-violet-400 uppercase tracking-[0.15em] text-center">Duration</div>
              <div className="text-xs font-black text-violet-400 uppercase tracking-[0.15em] text-center">Cost Range</div>
              <div className="text-xs font-black text-violet-400 uppercase tracking-[0.15em] text-center">Comfort</div>
              <div className="text-xs font-black text-violet-400 uppercase tracking-[0.15em] text-center">Flexibility</div>
            </div>

            {route.travelModes.map((tm, i) => {
              const cfg = MODE_CONFIG[tm.mode] || { icon: Mountain, color: 'gray', emoji: '🚐', label: tm.mode };
              const ModeIcon = cfg.icon;
              const isRecommended = tm.recommended;

              // Derive comfort/flexibility scores from mode
              const comfortMap = { 'By Car/Cab': { comfort: 'Excellent', flexibility: 'Highest' }, 'By Bus': { comfort: 'Basic', flexibility: 'Low' }, 'By Train + Cab': { comfort: 'Good', flexibility: 'Moderate' }, 'By Flight + Cab': { comfort: 'Good', flexibility: 'Low' } };
              const scores = comfortMap[tm.mode] || { comfort: 'Varies', flexibility: 'Varies' };

              const colorTextMap = { indigo: 'text-indigo-400', amber: 'text-amber-400', cyan: 'text-cyan-400', rose: 'text-rose-400', gray: 'text-gray-400' };
              const ct = colorTextMap[cfg.color] || 'text-gray-400';

              return (
                <div key={i} className={`grid grid-cols-1 md:grid-cols-5 gap-4 p-6 border-b border-white/[0.03] transition-colors ${isRecommended ? 'bg-emerald-500/[0.03] border-l-2 border-l-emerald-500/40' : i % 2 === 0 ? 'bg-white/[0.01]' : ''} hover:bg-white/[0.03]`}>
                  {/* Mode */}
                  <div className="flex items-center gap-3">
                    <ModeIcon className={`w-5 h-5 ${ct} flex-shrink-0`} />
                    <div>
                      <span className="font-bold text-white/90">{cfg.label}</span>
                      {isRecommended && <span className="ml-2 text-[9px] font-black text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full uppercase tracking-wider">Best</span>}
                    </div>
                  </div>
                  {/* Duration */}
                  <div className="text-center">
                    <span className="md:hidden text-[10px] text-white/30 uppercase tracking-wider mr-2">Duration:</span>
                    <span className="font-medium text-white/70">{tm.duration || tm.totalDuration || 'Varies'}</span>
                  </div>
                  {/* Cost */}
                  <div className="text-center">
                    <span className="md:hidden text-[10px] text-white/30 uppercase tracking-wider mr-2">Cost:</span>
                    <span className={`font-bold ${ct}`}>{tm.costRange || tm.flightCostRange || 'Varies'}</span>
                  </div>
                  {/* Comfort */}
                  <div className="text-center">
                    <span className="md:hidden text-[10px] text-white/30 uppercase tracking-wider mr-2">Comfort:</span>
                    <span className={`font-medium ${isRecommended ? 'text-emerald-400' : 'text-white/60'}`}>{scores.comfort}</span>
                  </div>
                  {/* Flexibility */}
                  <div className="text-center">
                    <span className="md:hidden text-[10px] text-white/30 uppercase tracking-wider mr-2">Flexibility:</span>
                    <span className={`font-medium ${isRecommended ? 'text-emerald-400' : 'text-white/60'}`}>{scores.flexibility}</span>
                  </div>
                </div>
              );
            })}

            {/* Winner callout row */}
            <div className="p-6 bg-gradient-to-r from-indigo-500/10 via-violet-500/10 to-indigo-500/10 border-t border-indigo-500/20">
              <div className="flex items-center gap-3 justify-center">
                <Award className="w-5 h-5 text-indigo-400" />
                <span className="font-black text-indigo-300">Best Overall:</span>
                <span className="text-white/70">By Car/Cab &mdash; Best comfort, flexibility &amp; door-to-door convenience</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          SECTION 5 — DETAILED MODE SECTIONS: Expandable glass panels
         ═══════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 px-4 sm:px-6 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_right,rgba(99,102,241,0.04),transparent_60%)]" />
        <div className="relative max-w-5xl mx-auto">
          <div className="text-center mb-20">
            <span className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full text-indigo-400 font-semibold text-xs tracking-widest uppercase mb-4">
              <MapPin className="w-3.5 h-3.5" /> Detailed Breakdown
            </span>
            <h2 className="text-4xl md:text-6xl font-black tracking-tight">Each Mode Explained</h2>
            <p className="text-white/40 mt-4 text-lg">Pros, cons &amp; everything you need to know</p>
          </div>

          <div className="space-y-5">
            {route.travelModes.map((tm, i) => {
              const cfg = MODE_CONFIG[tm.mode] || { icon: Mountain, color: 'gray', emoji: '🚐', label: tm.mode };
              const ModeIcon = cfg.icon;
              const isRecommended = tm.recommended;
              const isExpanded = expandedMode === i;

              const borderColors = { indigo: 'border-indigo-500/30', amber: 'border-amber-500/20', cyan: 'border-cyan-500/20', rose: 'border-rose-500/20', gray: 'border-gray-500/20' };
              const textColors = { indigo: 'text-indigo-400', amber: 'text-amber-400', cyan: 'text-cyan-400', rose: 'text-rose-400', gray: 'text-gray-400' };
              const bgColors = { indigo: 'bg-indigo-500/10', amber: 'bg-amber-500/10', cyan: 'bg-cyan-500/10', rose: 'bg-rose-500/10', gray: 'bg-gray-500/10' };

              const bc = borderColors[cfg.color] || borderColors.gray;
              const tc = textColors[cfg.color] || textColors.gray;
              const bgc = bgColors[cfg.color] || bgColors.gray;

              return (
                <div key={i} className={`glass-card rounded-[2rem] transition-all duration-500 ${isRecommended ? `border-2 ${borderColors.indigo} recommended-glow` : ''} ${isExpanded ? `${bc} shadow-[0_0_40px_rgba(99,102,241,0.08)]` : ''}`}>
                  {/* Clickable header */}
                  <button
                    onClick={() => setExpandedMode(isExpanded ? null : i)}
                    className="w-full flex items-center justify-between p-7 md:p-8 text-left group"
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-14 h-14 rounded-2xl ${bgc} border ${bc} flex items-center justify-center group-hover:scale-110 transition-all duration-300`}>
                        <ModeIcon className={`w-7 h-7 ${tc}`} />
                      </div>
                      <div>
                        <div className="flex items-center gap-3">
                          <h3 className="text-xl font-black">{tm.mode}</h3>
                          {isRecommended && (
                            <span className="text-[9px] font-black text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full uppercase tracking-wider border border-emerald-500/20">
                              Recommended
                            </span>
                          )}
                        </div>
                        <div className="flex items-center gap-4 mt-1.5 text-sm text-white/40">
                          <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> {tm.duration || tm.totalDuration || 'Varies'}</span>
                          <span className={`font-bold ${tc}`}>{tm.costRange || tm.flightCostRange || 'Varies'}</span>
                          {tm.distance && <span className="flex items-center gap-1.5"><Route className="w-3.5 h-3.5" /> {tm.distance}</span>}
                        </div>
                      </div>
                    </div>
                    <div className={`w-10 h-10 rounded-full glass-card flex items-center justify-center flex-shrink-0 transition-all duration-300 ${isExpanded ? `${bgc} ${bc} rotate-180` : 'group-hover:border-white/20'}`}>
                      <ChevronDown className={`w-5 h-5 ${tc}`} />
                    </div>
                  </button>

                  {/* Expandable content */}
                  <div className={`overflow-hidden transition-all duration-500 ${isExpanded ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="px-7 md:px-8 pb-8">
                      <div className="h-px bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent mb-7" />

                      {/* Details text */}
                      {tm.details && (
                        <p className="text-white/50 leading-relaxed mb-6 text-[15px]">{tm.details}</p>
                      )}

                      {/* Pros & Cons */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
                        {/* Pros */}
                        {tm.pros && tm.pros.length > 0 && (
                          <div className="glass-card rounded-2xl p-6 border border-emerald-500/10">
                            <div className="flex items-center gap-2 mb-4">
                              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                              <h4 className="text-sm font-bold text-emerald-400 uppercase tracking-wider">Pros</h4>
                            </div>
                            <div className="space-y-2.5">
                              {tm.pros.map((pro, j) => (
                                <div key={j} className="flex items-start gap-2.5 text-sm text-white/60">
                                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                                  <span>{pro}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Cons */}
                        {tm.cons && tm.cons.length > 0 && (
                          <div className="glass-card rounded-2xl p-6 border border-red-500/10">
                            <div className="flex items-center gap-2 mb-4">
                              <Info className="w-4 h-4 text-red-400" />
                              <h4 className="text-sm font-bold text-red-400 uppercase tracking-wider">Cons</h4>
                            </div>
                            <div className="space-y-2.5">
                              {tm.cons.map((con, j) => (
                                <div key={j} className="flex items-start gap-2.5 text-sm text-white/60">
                                  <Info className="w-4 h-4 text-red-400/70 flex-shrink-0 mt-0.5" />
                                  <span>{con}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Mode-specific details */}
                      {/* Bus types */}
                      {tm.types && tm.types.length > 0 && (
                        <div className="glass-card rounded-2xl p-6 border border-amber-500/10 mb-5">
                          <h4 className="text-sm font-bold text-amber-400 uppercase tracking-wider mb-3">Bus Options</h4>
                          <div className="space-y-2">
                            {tm.types.map((type, j) => (
                              <div key={j} className="flex items-center gap-2.5 text-sm text-white/60">
                                <div className="w-1.5 h-1.5 rounded-full bg-amber-500/60" />
                                <span>{type}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Train options */}
                      {tm.trainOptions && tm.trainOptions.length > 0 && (
                        <div className="glass-card rounded-2xl p-6 border border-cyan-500/10 mb-5">
                          <h4 className="text-sm font-bold text-cyan-400 uppercase tracking-wider mb-3">Train Options</h4>
                          {tm.nearestStation && (
                            <p className="text-white/40 text-sm mb-4 flex items-center gap-2">
                              <MapPin className="w-3.5 h-3.5 text-cyan-400" /> Nearest Station: <span className="text-cyan-300 font-medium">{tm.nearestStation}</span>
                            </p>
                          )}
                          <div className="space-y-3">
                            {tm.trainOptions.map((train, j) => (
                              <div key={j} className="glass-card rounded-xl p-4 border border-white/[0.04] hover:border-cyan-500/15 transition-colors">
                                <div className="flex items-center justify-between mb-1.5">
                                  <span className="font-bold text-white/80 text-sm">{train.name}</span>
                                  <span className="text-cyan-400 font-bold text-sm">{train.fare}</span>
                                </div>
                                <div className="flex items-center gap-4 text-xs text-white/40">
                                  <span>From: {train.from}</span>
                                  <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {train.duration}</span>
                                </div>
                              </div>
                            ))}
                          </div>
                          {tm.cabFromStation && (
                            <div className="mt-4 glass-card rounded-xl p-4 border border-indigo-500/10">
                              <div className="text-[10px] text-indigo-400 uppercase tracking-wider font-bold mb-1">Cab from Station</div>
                              <div className="text-sm text-white/60">{tm.cabFromStation}</div>
                            </div>
                          )}
                        </div>
                      )}

                      {/* Flight details */}
                      {tm.nearestAirport && (
                        <div className="glass-card rounded-2xl p-6 border border-rose-500/10 mb-5">
                          <h4 className="text-sm font-bold text-rose-400 uppercase tracking-wider mb-3">Flight Details</h4>
                          <div className="space-y-3">
                            <div className="flex items-center gap-2 text-sm text-white/60">
                              <Plane className="w-4 h-4 text-rose-400 flex-shrink-0" />
                              <span>Nearest Airport: <span className="text-rose-300 font-medium">{tm.nearestAirport}</span></span>
                            </div>
                            {tm.flightCostRange && (
                              <div className="flex items-center gap-2 text-sm text-white/60">
                                <Zap className="w-4 h-4 text-rose-400 flex-shrink-0" />
                                <span>Flight Cost: <span className="text-rose-300 font-medium">{tm.flightCostRange}</span></span>
                              </div>
                            )}
                            {tm.cabFromAirport && (
                              <div className="mt-3 glass-card rounded-xl p-4 border border-indigo-500/10">
                                <div className="text-[10px] text-indigo-400 uppercase tracking-wider font-bold mb-1">Cab from Airport</div>
                                <div className="text-sm text-white/60">{tm.cabFromAirport}</div>
                              </div>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          SECTION 6 — WHY CAB IS BEST: Big glass panel with benefit cards
         ═══════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 px-4 sm:px-6 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(99,102,241,0.06),transparent_60%)]" />
        <div className="relative max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full text-indigo-400 font-semibold text-xs tracking-widest uppercase mb-4">
              <Car className="w-3.5 h-3.5" /> Why Cab Wins
            </span>
            <h2 className="text-4xl md:text-6xl font-black tracking-tight">Why Cab is the Best Choice</h2>
            <p className="text-white/40 mt-4 text-lg max-w-2xl mx-auto">{route.recommendation}</p>
          </div>

          <div className="glass-strong rounded-[2rem] p-8 md:p-12 border-glow relative overflow-hidden">
            {/* Top glow line */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/20 to-transparent" />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Navigation, title: 'Door-to-Door', desc: 'Picked up from your location, dropped at your hotel. No transfers, no hassle.', bgClass: 'bg-indigo-500/10', borderClass: 'border-indigo-500/15', textClass: 'text-indigo-400' },
                { icon: Mountain, title: 'Luggage Freedom', desc: 'Carry as much luggage as you want. No weight limits, no extra charges.', bgClass: 'bg-violet-500/10', borderClass: 'border-violet-500/15', textClass: 'text-violet-400' },
                { icon: Users, title: 'Family Friendly', desc: 'Perfect for families with kids. Stop anywhere, anytime for breaks.', bgClass: 'bg-cyan-500/10', borderClass: 'border-cyan-500/15', textClass: 'text-cyan-400' },
                { icon: Coffee, title: 'Scenic Stops', desc: 'Stop at viewpoints, restaurants, and attractions along the way.', bgClass: 'bg-purple-500/10', borderClass: 'border-purple-500/15', textClass: 'text-purple-400' },
              ].map((benefit, i) => (
                <div key={i} className="group text-center p-4">
                  <div className={`w-18 h-18 w-[72px] h-[72px] rounded-2xl ${benefit.bgClass} border ${benefit.borderClass} flex items-center justify-center mx-auto mb-5 group-hover:scale-110 group-hover:shadow-lg transition-all duration-300`}>
                    <benefit.icon className={`w-8 h-8 ${benefit.textClass}`} />
                  </div>
                  <h3 className="text-lg font-black mb-2">{benefit.title}</h3>
                  <p className="text-white/40 text-sm leading-relaxed">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          SECTION 7 — CAB PRICING GRID: 3 dramatic glass fare cards
         ═══════════════════════════════════════════════════════════════ */}
      {route.cabPricing && (
        <section className="py-24 md:py-32 px-4 sm:px-6 relative">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(139,92,246,0.08),transparent_60%)]" />
          <div className="relative max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <span className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full text-violet-400 font-semibold text-xs tracking-widest uppercase mb-4">
                <Car className="w-3.5 h-3.5" /> Book Your Ride
              </span>
              <h2 className="text-4xl md:text-6xl font-black tracking-tight">{route.origin} to {route.destination} Cab</h2>
              <p className="text-white/40 mt-4 text-lg">All fares include driver, fuel &amp; AC &mdash; No hidden charges</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {[
                { key: 'sedan', name: 'Sedan', sub: route.cabPricing.sedan.type, fare: route.cabPricing.sedan.price, perKm: route.cabPricing.sedan.perKm, seats: '4', gradient: 'from-indigo-500 to-blue-600', glow: 'rgba(99,102,241,0.25)', hoverBorderClass: 'hover:border-indigo-500/30', hoverPriceBorderClass: 'group-hover:border-indigo-500/20', popular: false, icon: '🚗' },
                { key: 'suv', name: 'SUV', sub: route.cabPricing.suv.type, fare: route.cabPricing.suv.price, perKm: route.cabPricing.suv.perKm, seats: '6-7', gradient: 'from-violet-500 to-purple-600', glow: 'rgba(139,92,246,0.25)', hoverBorderClass: 'hover:border-violet-500/30', hoverPriceBorderClass: 'group-hover:border-violet-500/20', popular: true, icon: '🚙' },
                { key: 'tempo', name: 'Tempo Traveller', sub: route.cabPricing.tempo.type, fare: route.cabPricing.tempo.price, perKm: route.cabPricing.tempo.perKm, seats: '12', gradient: 'from-purple-500 to-fuchsia-600', glow: 'rgba(168,85,247,0.25)', hoverBorderClass: 'hover:border-purple-500/30', hoverPriceBorderClass: 'group-hover:border-purple-500/20', popular: false, icon: '🚐' },
              ].map((v, i) => (
                <div key={i} className={`group relative glass-card rounded-[2rem] p-8 transition-all duration-500 ${v.hoverBorderClass} ${v.popular ? 'ring-2 ring-violet-500/25 shadow-[0_0_40px_rgba(139,92,246,0.1)]' : ''}`} style={v.popular ? {} : {}}>
                  {/* Popular ribbon */}
                  {v.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                      <div className="relative">
                        <div className="absolute inset-0 bg-violet-500 blur-lg opacity-50" />
                        <span className="relative bg-gradient-to-r from-violet-500 to-purple-500 text-white text-[10px] font-black px-6 py-2 rounded-full uppercase tracking-[0.2em] shadow-lg">Most Popular</span>
                      </div>
                    </div>
                  )}

                  {/* Vehicle emoji + name */}
                  <div className="text-center mb-8">
                    <div className="text-5xl mb-3">{v.icon}</div>
                    <h3 className="text-2xl font-black">{v.name}</h3>
                    <p className="text-white/40 text-sm mt-1">{v.sub} &middot; {v.seats} Seater</p>
                  </div>

                  {/* Price */}
                  <div className={`glass-card rounded-2xl p-6 mb-8 text-center border border-white/[0.04] ${v.hoverPriceBorderClass} transition-all`}>
                    <div className="text-xs text-white/30 uppercase tracking-wider mb-1">Starting from</div>
                    <div className={`text-4xl md:text-5xl font-black bg-clip-text text-transparent bg-gradient-to-r ${v.gradient}`}>{v.fare}</div>
                    <div className="text-white/40 text-sm mt-2">{v.perKm}</div>
                  </div>

                  {/* Inclusions */}
                  <div className="space-y-3 mb-8">
                    {['AC Vehicle & GPS Tracking', 'Experienced Verified Driver', 'Door-to-door Pickup & Drop', 'Fuel Included in Fare', '24/7 Customer Support'].map((inc, j) => (
                      <div key={j} className="flex items-center gap-3 text-sm text-white/50 group-hover:text-white/70 transition-colors">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" /> {inc}
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <a onClick={() => trackWhatsAppClick('how_to_reach_pricing')} href={`https://wa.me/917668570551?text=${encodeURIComponent(`Hi, I want to book a ${v.name} from ${route.origin} to ${route.destination}`)}`} target="_blank" rel="noopener noreferrer" className={`block w-full text-center bg-gradient-to-r ${v.gradient} text-white py-4 rounded-2xl font-bold text-lg hover:scale-[1.03] transition-all duration-300 shadow-lg`} style={{ boxShadow: `0 10px 40px ${v.glow}` }}>
                    Book {v.name} <ArrowRight className="w-4 h-4 inline ml-1" />
                  </a>
                </div>
              ))}
            </div>

            <p className="mt-10 text-center text-white/20 text-sm">* Toll charges and state tax extra at actual.</p>
          </div>
        </section>
      )}

      {/* ═══════════════════════════════════════════════════════════════
          SECTION 8 — FAQ ACCORDION: Glass accordion with animated borders
         ═══════════════════════════════════════════════════════════════ */}
      {route.faqs && route.faqs.length > 0 && (
        <section className="py-24 md:py-32 px-4 sm:px-6 relative">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(139,92,246,0.05),transparent_60%)]" />
          <div className="relative max-w-4xl mx-auto">
            <div className="text-center mb-20">
              <span className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full text-violet-400 font-semibold text-xs tracking-widest uppercase mb-4">
                FAQ
              </span>
              <h2 className="text-4xl md:text-6xl font-black tracking-tight">Common Questions</h2>
              <p className="text-white/40 mt-4 text-lg">How to reach {route.destination} from {route.origin} &mdash; FAQs</p>
            </div>

            <div className="space-y-4">
              {route.faqs.map((faq, i) => (
                <div key={i} className={`glass-card rounded-2xl transition-all duration-500 ${openFaq === i ? 'border-indigo-500/30 shadow-[0_0_30px_rgba(99,102,241,0.08)] bg-white/[0.05]' : 'hover:border-white/10'}`}>
                  <button onClick={() => setOpenFaq(openFaq === i ? null : i)} aria-expanded={openFaq === i} aria-label={openFaq === i ? 'Collapse answer' : 'Expand answer'} className="w-full flex items-center justify-between p-6 md:p-7 text-left group focus:outline-none focus:ring-2 focus:ring-indigo-500/50 rounded-2xl">
                    <span className="font-semibold text-white/80 pr-8 group-hover:text-white transition-colors">{faq.question}</span>
                    <div className={`w-8 h-8 rounded-full glass-card flex items-center justify-center flex-shrink-0 transition-all duration-300 ${openFaq === i ? 'bg-indigo-500/20 border-indigo-500/30 rotate-180' : 'group-hover:border-white/20'}`}>
                      <ChevronDown className="w-4 h-4 text-indigo-400" />
                    </div>
                  </button>
                  <div className={`overflow-hidden transition-all duration-500 ${openFaq === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="px-6 md:px-7 pb-6 md:pb-7">
                      <div className="h-px bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent mb-5" />
                      <p className="text-white/50 leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ═══════════════════════════════════════════════════════════════
          SECTION 9 — RELATED ROUTES: Hover-glow glass cards
         ═══════════════════════════════════════════════════════════════ */}
      {relatedRoutes && relatedRoutes.length > 0 && (
        <section className="py-24 md:py-32 px-4 sm:px-6 relative">
          <div className="relative max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full text-indigo-400 font-semibold text-xs tracking-widest uppercase mb-4">
                <Navigation className="w-3.5 h-3.5" /> Explore More
              </span>
              <h2 className="text-3xl md:text-5xl font-black">Related Routes</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedRoutes.map((r, i) => (
                <Link key={i} href={`/how-to-reach/${r.slug}`} className="group glass-card rounded-2xl p-6 transition-all duration-500 hover:border-indigo-500/30 hover:shadow-[0_0_40px_rgba(99,102,241,0.08)] hover:-translate-y-1">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-lg font-black">{r.origin}</span>
                    <div className="flex-1 h-[2px] bg-gradient-to-r from-indigo-500/30 to-violet-500/30 rounded-full" />
                    <span className="text-lg font-black text-indigo-400">{r.destination}</span>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-white/40">
                    <span className="flex items-center gap-1.5"><Route className="w-3.5 h-3.5 text-indigo-500/60" /> {r.travelModes?.length || 4} modes</span>
                  </div>
                  <div className="mt-4 text-sm font-bold text-indigo-400 flex items-center gap-1 opacity-0 group-hover:opacity-100 translate-x-0 group-hover:translate-x-1 transition-all duration-300">
                    View Guide <ChevronRight className="w-3.5 h-3.5" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ═══════════════════════════════════════════════════════════════
          SECTION 10 — FINAL CTA: Full-bleed glass with dramatic neon
         ═══════════════════════════════════════════════════════════════ */}
      <section className="py-28 md:py-36 px-4 sm:px-6 relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-950/50 via-violet-950/60 to-purple-950/50" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[200px]" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent" />

        <div className="relative max-w-4xl mx-auto text-center">
          <div className="glass-strong rounded-[2.5rem] p-12 md:p-16 border-glow relative overflow-hidden">
            {/* Inner glow lines */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/40 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/30 to-transparent" />
            <div className="absolute top-0 bottom-0 left-0 w-px bg-gradient-to-b from-transparent via-indigo-500/20 to-transparent" />
            <div className="absolute top-0 bottom-0 right-0 w-px bg-gradient-to-b from-transparent via-violet-500/20 to-transparent" />

            <div className="text-5xl mb-6">🚗</div>
            <h2 className="text-4xl md:text-6xl font-black mb-4 tracking-tight">Ready to Travel?</h2>
            <p className="text-white/40 text-xl mb-3">
              {route.origin} to {route.destination} &middot; Book cab from <span className="text-indigo-400 font-bold">{route.cabPricing?.sedan?.price || cabMode?.costRange || 'Best Price'}</span>
            </p>
            <p className="text-white/20 text-sm mb-12">AC vehicles &middot; Verified drivers &middot; 24/7 booking &middot; No hidden charges &middot; 4.9&#9733; rated</p>

            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <Link onClick={() => trackPhoneCall('how_to_reach_cta')} href="tel:+917668570551" className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-indigo-500 via-violet-500 to-purple-600 text-white px-12 py-5 rounded-2xl font-bold text-lg shadow-[0_0_50px_rgba(99,102,241,0.35)] hover:shadow-[0_0_80px_rgba(99,102,241,0.5)] hover:scale-105 transition-all duration-300">
                <Phone className="w-5 h-5" /> Call Now: 7668570551
              </Link>
              <Link onClick={() => trackWhatsAppClick('how_to_reach_cta')} href={`https://wa.me/917668570551?text=${encodeURIComponent(whatsappMsg)}`} className="inline-flex items-center justify-center gap-3 bg-emerald-500/10 text-emerald-300 px-12 py-5 rounded-2xl font-bold text-lg border border-emerald-500/25 hover:bg-emerald-500/20 hover:border-emerald-400/50 hover:shadow-[0_0_30px_rgba(16,185,129,0.15)] transition-all duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.611.611l4.458-1.495A11.943 11.943 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.318 0-4.468-.67-6.29-1.823l-.451-.27-2.649.888.888-2.649-.27-.451A9.965 9.965 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/></svg>
                WhatsApp Booking <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile spacer for sticky bar */}
      <div className="h-16 md:hidden" />
    </div>
  );
}
