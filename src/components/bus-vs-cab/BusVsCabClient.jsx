'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  Phone, ArrowRight, ChevronDown, Shield, Clock, Car, CheckCircle2,
  Bus, Zap, MapPin, Star, Users, Info, ChevronRight, Sparkles, Award,
  TrendingUp, Target, Trophy, IndianRupee, Route
} from '@/components/ui/icons';
import { trackWhatsAppClick, trackPhoneCall } from '@/utilis/analytics';

export default function BusVsCabClient({ route, relatedRoutes }) {
  const [openFaq, setOpenFaq] = useState(null);
  const [scrollY, setScrollY] = useState(0);
  const [selectedPassengers, setSelectedPassengers] = useState(1);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const whatsappMsg = `Hi, I want to book a cab from ${route.origin} to ${route.destination} (${route.distanceKm} km). Please share the best fare.`;
  const avgBusFare = Math.round(route.busOptions.reduce((s, b) => s + b.cost, 0) / route.busOptions.length);
  const cabPerPerson = Math.round(route.cabOptions.sedan.fareRaw / selectedPassengers);
  const busPerPerson = avgBusFare;

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-hidden">

      {/* ═══ CSS Animations ═══ */}
      <style jsx global>{`
        @keyframes shimmer-purple { 0% { background-position: -200% 0; } 100% { background-position: 200% 0; } }
        @keyframes float-comp { 0%,100% { transform: translateY(0px); } 50% { transform: translateY(-14px); } }
        @keyframes float-slow-comp { 0%,100% { transform: translateY(0px) rotate(0deg); } 50% { transform: translateY(-20px) rotate(3deg); } }
        @keyframes pulse-purple { 0%,100% { box-shadow: 0 0 30px rgba(168,85,247,0.2), 0 0 60px rgba(192,132,252,0.1); } 50% { box-shadow: 0 0 60px rgba(168,85,247,0.5), 0 0 120px rgba(192,132,252,0.3); } }
        @keyframes gradient-comp { 0%,100% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } }
        @keyframes morph-comp { 0%,100% { border-radius: 60% 40% 30% 70%/60% 30% 70% 40%; } 50% { border-radius: 30% 60% 70% 40%/50% 60% 30% 60%; } }
        @keyframes vs-pulse { 0%,100% { transform: scale(1); box-shadow: 0 0 30px rgba(168,85,247,0.3); } 50% { transform: scale(1.1); box-shadow: 0 0 60px rgba(168,85,247,0.6); } }
        @keyframes reveal-up-comp { from { opacity: 0; transform: translateY(40px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes dash-march-comp { 0% { stroke-dashoffset: 0; } 100% { stroke-dashoffset: -30; } }
        @keyframes glow-pulse-comp { 0%,100% { opacity: 0.5; transform: scale(1); } 50% { opacity: 1; transform: scale(1.05); } }
        .animate-shimmer-purple { background-size: 200% 100%; animation: shimmer-purple 2.5s linear infinite; }
        .animate-float-comp { animation: float-comp 4s ease-in-out infinite; }
        .animate-float-slow-comp { animation: float-slow-comp 6s ease-in-out infinite; }
        .animate-pulse-purple { animation: pulse-purple 3s ease-in-out infinite; }
        .animate-gradient-comp { background-size: 200% 200%; animation: gradient-comp 6s ease infinite; }
        .animate-morph-comp { animation: morph-comp 8s ease-in-out infinite; }
        .animate-vs-pulse { animation: vs-pulse 2s ease-in-out infinite; }
        .animate-reveal-comp { animation: reveal-up-comp 0.8s ease-out forwards; }
        .animate-dash-comp { animation: dash-march-comp 1.5s linear infinite; }
        .animate-glow-comp { animation: glow-pulse-comp 2s ease-in-out infinite; }
        .glass-comp { background: rgba(255,255,255,0.03); backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px); border: 1px solid rgba(255,255,255,0.06); }
        .glass-comp-hover:hover { background: rgba(255,255,255,0.06); border-color: rgba(168,85,247,0.3); box-shadow: 0 8px 32px rgba(168,85,247,0.1), inset 0 1px 0 rgba(255,255,255,0.05); transform: translateY(-2px); }
        .glass-comp-strong { background: rgba(255,255,255,0.05); backdrop-filter: blur(40px); -webkit-backdrop-filter: blur(40px); border: 1px solid rgba(255,255,255,0.08); }
        .glass-comp-neon { box-shadow: 0 0 15px rgba(168,85,247,0.15), 0 0 45px rgba(168,85,247,0.05), inset 0 1px 0 rgba(255,255,255,0.05); }
        .text-glow-comp { text-shadow: 0 0 40px rgba(168,85,247,0.5), 0 0 80px rgba(192,132,252,0.3); }
        .border-glow-comp { box-shadow: inset 0 0 20px rgba(168,85,247,0.1), 0 0 40px rgba(168,85,247,0.05); }
      `}</style>

      {/* ═══════════════════════════════════════════════════════════════
          HERO: Bus vs Cab with VS badge animation
         ═══════════════════════════════════════════════════════════════ */}
      <section className="relative min-h-[95vh] flex items-center overflow-hidden">
        {/* Multi-layer gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-purple-950/60 to-fuchsia-950/40 animate-gradient-comp" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(168,85,247,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(192,132,252,0.1),transparent_50%)]" />

        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.5) 1px, transparent 0)', backgroundSize: '32px 32px' }} />

        {/* Floating morphing orbs */}
        <div className="absolute top-[15%] left-[5%] w-80 h-80 bg-purple-600/20 rounded-full blur-[100px] animate-morph-comp" />
        <div className="absolute bottom-[10%] right-[5%] w-[500px] h-[500px] bg-fuchsia-500/12 rounded-full blur-[150px] animate-morph-comp" style={{ animationDelay: '-4s' }} />
        <div className="absolute top-[50%] left-[30%] w-60 h-60 bg-pink-500/8 rounded-full blur-[120px] animate-morph-comp" style={{ animationDelay: '-2s' }} />

        {/* Floating VS badge */}
        <div className="absolute top-28 right-[8%] hidden lg:block animate-float-comp">
          <div className="relative">
            <div className="absolute -inset-12 bg-purple-500/15 rounded-full blur-[60px] animate-pulse" />
            <div className="relative glass-comp-strong rounded-full w-36 h-36 flex items-center justify-center animate-vs-pulse border-2 border-purple-500/30">
              <div className="text-center relative z-10">
                <div className="text-5xl font-black bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-fuchsia-400 text-glow-comp">VS</div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating time saved badge */}
        <div className="absolute bottom-40 right-[15%] hidden xl:block animate-float-slow-comp" style={{ animationDelay: '-2s' }}>
          <div className="glass-comp-strong rounded-2xl px-6 py-4 border border-emerald-500/20 glass-comp-neon">
            <div className="text-xs text-emerald-400 uppercase tracking-wider font-bold">Time Saved</div>
            <div className="text-2xl font-black text-emerald-300">{route.comparison.timeSaved}</div>
          </div>
        </div>

        {/* Bottom wave */}
        <div className="absolute -bottom-1 left-0 right-0 h-40">
          <svg viewBox="0 0 1440 120" className="w-full h-full" preserveAspectRatio="none">
            <path d="M0,80 C240,120 480,20 720,60 C960,100 1200,30 1440,70 L1440,120 L0,120 Z" fill="#020617" />
            <path d="M0,90 C360,110 720,40 1080,80 C1260,95 1380,85 1440,80 L1440,120 L0,120 Z" fill="#020617" fillOpacity="0.5" />
          </svg>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-32">
          {/* Top badge */}
          <div className="inline-flex items-center gap-2.5 glass-comp-strong px-6 py-3 rounded-full mb-10 border border-purple-500/25 animate-glow-comp">
            <Target className="w-4 h-4 text-purple-400" />
            <span className="text-purple-300 font-semibold text-sm tracking-wide">Smart Travel Comparison 2026</span>
            <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
          </div>

          {/* City names with VS in between */}
          <div className="flex items-center gap-4 sm:gap-6 mb-8 flex-wrap">
            <span className="text-3xl sm:text-5xl md:text-7xl lg:text-9xl font-black text-white tracking-tight drop-shadow-[0_0_30px_rgba(255,255,255,0.1)]">{route.origin}</span>
            <div className="flex items-center gap-3">
              <svg width="60" height="4" className="hidden sm:block">
                <line x1="0" y1="2" x2="60" y2="2" stroke="url(#vs-grad1)" strokeWidth="3" strokeDasharray="8 6" className="animate-dash-comp" />
                <defs><linearGradient id="vs-grad1" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stopColor="#a855f7" /><stop offset="100%" stopColor="#d946ef" /></linearGradient></defs>
              </svg>
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-purple-500 to-fuchsia-600 flex items-center justify-center shadow-[0_0_40px_rgba(168,85,247,0.5)] animate-vs-pulse">
                <span className="text-2xl md:text-3xl font-black text-white">VS</span>
              </div>
              <svg width="60" height="4" className="hidden sm:block">
                <line x1="0" y1="2" x2="60" y2="2" stroke="url(#vs-grad2)" strokeWidth="3" strokeDasharray="8 6" className="animate-dash-comp" />
                <defs><linearGradient id="vs-grad2" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stopColor="#d946ef" /><stop offset="100%" stopColor="#ec4899" /></linearGradient></defs>
              </svg>
            </div>
            <span className="text-3xl sm:text-5xl md:text-7xl lg:text-9xl font-black bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-fuchsia-400 to-pink-400 drop-shadow-[0_0_30px_rgba(168,85,247,0.3)]">{route.destination}</span>
          </div>

          {/* H1 */}
          <h1 className="text-xl md:text-2xl lg:text-3xl text-white/40 mb-8 max-w-3xl font-medium">
            Bus vs Cab: {route.origin} to {route.destination} &mdash; <span className="text-purple-400 font-black text-glow-comp">{route.distanceKm} km</span> &mdash; Save <span className="text-emerald-400 font-black">{route.comparison.timeSaved}</span> by Cab
          </h1>

          {/* Info pills */}
          <div className="flex flex-wrap gap-3 mb-12">
            {[
              { icon: Route, text: `${route.distanceKm} km`, accent: 'purple' },
              { icon: Clock, text: `Cab: ${route.cabOptions.sedan.duration}`, accent: 'purple' },
              { icon: Bus, text: `Bus: ${route.busOptions[route.busOptions.length - 1].duration}`, accent: 'fuchsia' },
              { icon: Star, text: '4.9★ (10,000+ reviews)', special: true },
            ].map((pill, i) => (
              <span key={i} className={`inline-flex items-center gap-2 backdrop-blur-2xl px-5 py-3 rounded-2xl text-sm font-medium transition-all duration-300 hover:scale-105 ${pill.special ? 'bg-yellow-500/10 border border-yellow-500/25 text-yellow-300' : 'glass-comp border-white/10 text-white/70 hover:border-purple-500/30'}`}>
                <pill.icon className={`w-4 h-4 ${pill.special ? 'text-yellow-400' : pill.accent === 'fuchsia' ? 'text-fuchsia-400' : 'text-purple-400'}`} /> {pill.text}
              </span>
            ))}
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link onClick={() => trackPhoneCall('bus_vs_cab')} href="tel:+917668570551" className="group inline-flex items-center gap-3 bg-gradient-to-r from-purple-500 via-fuchsia-500 to-pink-600 text-white px-10 py-5 rounded-2xl font-bold text-lg shadow-[0_0_40px_rgba(168,85,247,0.3)] hover:shadow-[0_0_60px_rgba(168,85,247,0.5)] hover:scale-105 transition-all duration-300">
              <Phone className="w-5 h-5 group-hover:animate-bounce" /> Call: 7668570551
            </Link>
            <Link onClick={() => trackWhatsAppClick('bus_vs_cab')} href={`https://wa.me/917668570551?text=${encodeURIComponent(whatsappMsg)}`} className="group inline-flex items-center gap-3 glass-comp-strong text-white px-10 py-5 rounded-2xl font-bold text-lg border border-white/15 hover:border-purple-500/40 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)] transition-all duration-300">
              <svg className="w-5 h-5 text-emerald-400" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.611.611l4.458-1.495A11.943 11.943 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.318 0-4.468-.67-6.29-1.823l-.451-.27-2.649.888.888-2.649-.27-.451A9.965 9.965 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/></svg>
              WhatsApp Quote <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          SOCIAL PROOF
         ═══════════════════════════════════════════════════════════════ */}
      <section className="relative py-8 border-y border-purple-500/10">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-950/30 via-fuchsia-950/20 to-purple-950/30" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap justify-center gap-10 md:gap-20">
            {[
              { value: '10,000+', label: 'Happy Customers', icon: Users },
              { value: '4.9★', label: 'Google Rating', icon: Star },
              { value: route.comparison.timeSaved, label: 'Time Saved', icon: Clock },
              { value: `${route.distanceKm} km`, label: 'Route Distance', icon: Route },
            ].map((stat, i) => (
              <div key={i} className="group text-center flex items-center gap-3 cursor-default">
                <div className="w-10 h-10 rounded-xl glass-comp flex items-center justify-center group-hover:border-purple-500/30 transition-all">
                  <stat.icon className="w-5 h-5 text-purple-400" />
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
          QUICK VERDICT
         ═══════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 px-4 sm:px-6 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(168,85,247,0.05),transparent_70%)]" />
        <div className="relative max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 glass-comp px-4 py-2 rounded-full text-purple-400 font-semibold text-xs tracking-widest uppercase mb-4">
              <Trophy className="w-3.5 h-3.5" /> Quick Verdict
            </span>
            <h2 className="text-4xl md:text-6xl font-black tracking-tight">Our Recommendation</h2>
          </div>

          <div className="glass-comp-strong rounded-[2rem] p-8 md:p-12 border-glow-comp relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/40 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-fuchsia-500/30 to-transparent" />

            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500/20 to-fuchsia-500/20 border border-purple-500/20 flex items-center justify-center">
                <Zap className="w-7 h-7 text-purple-400" />
              </div>
              <div>
                <h3 className="text-2xl font-black">The Verdict</h3>
                <p className="text-white/40 text-sm">{route.origin} to {route.destination} &middot; {route.distanceKm} km</p>
              </div>
            </div>

            <p className="text-white/60 text-lg leading-relaxed mb-8">{route.verdict}</p>

            <div className="grid grid-cols-3 gap-4">
              {[
                { label: 'Solo', winner: route.comparison.costSolo.winner, color: route.comparison.costSolo.winner === 'Bus' ? 'orange' : 'emerald' },
                { label: 'Couple', winner: route.comparison.costCouple.winner, color: route.comparison.costCouple.winner === 'Bus' ? 'orange' : 'emerald' },
                { label: 'Family (4)', winner: route.comparison.costFamily.winner, color: route.comparison.costFamily.winner === 'Bus' ? 'orange' : 'emerald' },
              ].map((v, i) => (
                <div key={i} className="glass-comp rounded-2xl p-4 text-center">
                  <div className="text-xs text-white/30 uppercase tracking-wider mb-2">{v.label}</div>
                  <div className={`text-lg font-black ${v.color === 'emerald' ? 'text-emerald-400' : 'text-orange-400'}`}>
                    {v.winner === 'Cab' ? '🚗' : '🚌'} {v.winner}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          SIDE-BY-SIDE COMPARISON: Bus vs Cab panels
         ═══════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 px-4 sm:px-6 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(192,132,252,0.08),transparent_60%)]" />
        <div className="relative max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <span className="inline-flex items-center gap-2 glass-comp px-4 py-2 rounded-full text-fuchsia-400 font-semibold text-xs tracking-widest uppercase mb-4">
              <TrendingUp className="w-3.5 h-3.5" /> Head to Head
            </span>
            <h2 className="text-4xl md:text-6xl font-black tracking-tight">Bus vs Cab</h2>
            <p className="text-white/40 mt-4 text-lg">{route.origin} to {route.destination} detailed comparison</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-6 items-start">
            {/* Bus Panel */}
            <div className="glass-comp rounded-[2rem] p-8 border border-orange-500/10 hover:border-orange-500/25 transition-all duration-500">
              <div className="text-center mb-8">
                <div className="text-5xl mb-3">🚌</div>
                <h3 className="text-2xl font-black text-orange-400">Bus</h3>
                <p className="text-white/40 text-sm mt-1">{route.busOptions.length} options available</p>
              </div>

              {/* Bus options */}
              <div className="space-y-4 mb-8">
                {route.busOptions.map((bus, i) => (
                  <div key={i} className="glass-comp rounded-2xl p-5 border border-white/[0.04] hover:border-orange-500/15 transition-all">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-bold text-white/80 text-sm">{bus.type}</h4>
                      <span className="text-xl font-black text-orange-400">₹{bus.cost}</span>
                    </div>
                    <div className="flex gap-4 text-xs text-white/40">
                      <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {bus.duration}</span>
                      <span className="flex items-center gap-1"><Users className="w-3 h-3" /> {bus.frequency}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Bus cons */}
              <div className="space-y-2.5">
                {['Fixed bus stand departure', 'Multiple stops en route', 'No door-to-door service', 'Limited luggage space', 'Crowded during holidays'].map((con, j) => (
                  <div key={j} className="flex items-center gap-3 text-sm text-white/40">
                    <div className="w-5 h-5 rounded-full bg-red-500/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-red-400 text-[10px]">✕</span>
                    </div>
                    {con}
                  </div>
                ))}
              </div>
            </div>

            {/* VS Badge (center) */}
            <div className="hidden lg:flex items-center justify-center self-center">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-500 to-fuchsia-600 flex items-center justify-center shadow-[0_0_50px_rgba(168,85,247,0.4)] animate-vs-pulse">
                <span className="text-2xl font-black text-white">VS</span>
              </div>
            </div>

            {/* Cab Panel */}
            <div className="glass-comp rounded-[2rem] p-8 border-2 border-purple-500/20 hover:border-purple-500/35 transition-all duration-500 relative shadow-[0_0_40px_rgba(168,85,247,0.08)]">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                <span className="bg-gradient-to-r from-purple-500 to-fuchsia-500 text-white text-[10px] font-black px-6 py-2 rounded-full uppercase tracking-[0.2em] shadow-lg">Recommended</span>
              </div>

              <div className="text-center mb-8">
                <div className="text-5xl mb-3">🚗</div>
                <h3 className="text-2xl font-black text-purple-400">Cab (Triveni)</h3>
                <p className="text-white/40 text-sm mt-1">Sedan &amp; SUV available</p>
              </div>

              {/* Cab options */}
              <div className="space-y-4 mb-8">
                {[
                  { name: 'Sedan (AC)', sub: 'Swift Dzire / Etios', ...route.cabOptions.sedan, seats: '4' },
                  { name: 'SUV (AC)', sub: 'Innova / Ertiga', ...route.cabOptions.suv, seats: '6-7' },
                ].map((cab, i) => (
                  <div key={i} className="glass-comp rounded-2xl p-5 border border-purple-500/10 hover:border-purple-500/25 transition-all">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="font-bold text-white/80 text-sm">{cab.name}</h4>
                        <p className="text-white/40 text-xs">{cab.sub} &middot; {cab.seats} seater</p>
                      </div>
                      <span className="text-xl font-black text-purple-400">{cab.fare}</span>
                    </div>
                    <div className="flex gap-4 text-xs text-white/40">
                      <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {cab.duration}</span>
                      <span className="flex items-center gap-1"><IndianRupee className="w-3 h-3" /> ₹{cab.perKm}/km</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Cab pros */}
              <div className="space-y-2.5">
                {['Door-to-door pickup & drop', 'No stops — fastest route', 'AC comfort with privacy', 'Unlimited luggage space', 'Flexible timing & stops'].map((pro, j) => (
                  <div key={j} className="flex items-center gap-3 text-sm text-white/60">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    {pro}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          DETAILED COMPARISON TABLE
         ═══════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 px-4 sm:px-6 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_right,rgba(168,85,247,0.05),transparent_60%)]" />
        <div className="relative max-w-5xl mx-auto">
          <div className="text-center mb-20">
            <span className="inline-flex items-center gap-2 glass-comp px-4 py-2 rounded-full text-purple-400 font-semibold text-xs tracking-widest uppercase mb-4">
              <Info className="w-3.5 h-3.5" /> Detailed Breakdown
            </span>
            <h2 className="text-4xl md:text-6xl font-black tracking-tight">Feature Comparison</h2>
          </div>

          <div className="glass-comp-strong rounded-[2rem] overflow-hidden border-glow-comp">
            {/* Header */}
            <div className="grid grid-cols-3 gap-4 p-6 border-b border-white/[0.06] bg-white/[0.02]">
              <div className="text-xs font-black text-purple-400 uppercase tracking-[0.15em]">Feature</div>
              <div className="text-xs font-black text-orange-400 uppercase tracking-[0.15em] text-center">Bus</div>
              <div className="text-xs font-black text-purple-400 uppercase tracking-[0.15em] text-center">Cab</div>
            </div>
            {[
              { feature: 'Cost (Solo)', bus: route.comparison.costSolo.bus, cab: route.comparison.costSolo.cab, winner: route.comparison.costSolo.winner },
              { feature: 'Cost (Family of 4)', bus: route.comparison.costFamily.bus, cab: `${route.comparison.costFamily.cab} total`, winner: route.comparison.costFamily.winner },
              { feature: 'Travel Time', bus: route.busOptions[route.busOptions.length - 1].duration, cab: route.cabOptions.sedan.duration, winner: 'Cab' },
              { feature: 'Comfort Rating', bus: '★★★☆☆', cab: '★★★★★', winner: 'Cab' },
              { feature: 'Door-to-Door', bus: 'No', cab: 'Yes', winner: 'Cab' },
              { feature: 'Luggage Space', bus: 'Limited', cab: 'Unlimited', winner: 'Cab' },
              { feature: 'Flexible Stops', bus: 'No', cab: 'Yes', winner: 'Cab' },
              { feature: 'Night Travel', bus: 'Scheduled only', cab: '24/7 available', winner: 'Cab' },
              { feature: 'Privacy', bus: 'Shared', cab: 'Private', winner: 'Cab' },
              { feature: 'Child Friendly', bus: 'Moderate', cab: 'Excellent', winner: 'Cab' },
            ].map((row, i) => (
              <div key={i} className={`grid grid-cols-3 gap-4 p-6 border-b border-white/[0.03] hover:bg-white/[0.02] transition-colors ${i % 2 === 0 ? 'bg-white/[0.01]' : ''}`}>
                <div className="font-medium text-white/80 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-purple-500/60" />
                  {row.feature}
                </div>
                <div className={`text-center ${row.winner === 'Bus' ? 'text-emerald-400 font-bold' : 'text-white/40'}`}>{row.bus}</div>
                <div className={`text-center ${row.winner === 'Cab' ? 'text-emerald-400 font-bold' : 'text-white/40'}`}>{row.cab}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          SCENARIO CARDS
         ═══════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 px-4 sm:px-6 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_left,rgba(192,132,252,0.05),transparent_60%)]" />
        <div className="relative max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <span className="inline-flex items-center gap-2 glass-comp px-4 py-2 rounded-full text-fuchsia-400 font-semibold text-xs tracking-widest uppercase mb-4">
              <Users className="w-3.5 h-3.5" /> Who Should Choose What?
            </span>
            <h2 className="text-4xl md:text-6xl font-black tracking-tight">Travel Scenarios</h2>
            <p className="text-white/40 mt-4 text-lg">Best pick for every type of traveler</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {route.scenarios.map((s, i) => (
              <div key={i} className="group glass-comp rounded-[2rem] p-7 transition-all duration-500 hover:border-purple-500/25 hover:shadow-[0_0_40px_rgba(168,85,247,0.08)] hover:-translate-y-1">
                <div className="flex items-center justify-between mb-5">
                  <h3 className="text-lg font-black text-white/90">{s.scenario}</h3>
                  <span className={`text-2xl ${s.winner === 'Cab' || s.winner.includes('Cab') ? '🚗' : '🚌'}`}>{s.winner === 'Cab' || s.winner.includes('Cab') ? '🚗' : '🚌'}</span>
                </div>
                <div className={`inline-block px-4 py-1.5 rounded-xl text-xs font-black uppercase tracking-wider mb-4 ${s.winner === 'Cab' || s.winner.includes('Cab') ? 'bg-purple-500/15 text-purple-300 border border-purple-500/20' : 'bg-orange-500/15 text-orange-300 border border-orange-500/20'}`}>
                  Winner: {s.winner}
                </div>
                <p className="text-white/40 text-sm leading-relaxed">{s.reason}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          PER-PERSON COST CALCULATOR
         ═══════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 px-4 sm:px-6 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(168,85,247,0.05),transparent_60%)]" />
        <div className="relative max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 glass-comp px-4 py-2 rounded-full text-purple-400 font-semibold text-xs tracking-widest uppercase mb-4">
              <IndianRupee className="w-3.5 h-3.5" /> Cost Calculator
            </span>
            <h2 className="text-4xl md:text-6xl font-black tracking-tight">Per-Person Breakdown</h2>
            <p className="text-white/40 mt-4 text-lg">See how cab cost per person drops with more passengers</p>
          </div>

          <div className="glass-comp-strong rounded-[2rem] p-8 md:p-12 border-glow-comp">
            {/* Passenger selector */}
            <div className="flex items-center justify-center gap-4 mb-10">
              <span className="text-white/50 text-sm font-bold uppercase tracking-wider">Passengers:</span>
              <div className="flex gap-2">
                {[1, 2, 3, 4].map((n) => (
                  <button
                    key={n}
                    onClick={() => setSelectedPassengers(n)}
                    className={`w-12 h-12 rounded-xl font-black text-lg transition-all duration-300 ${selectedPassengers === n ? 'bg-gradient-to-br from-purple-500 to-fuchsia-600 text-white shadow-[0_0_30px_rgba(168,85,247,0.3)]' : 'glass-comp text-white/50 hover:text-white hover:border-purple-500/30'}`}
                  >
                    {n}
                  </button>
                ))}
              </div>
            </div>

            {/* Comparison cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Bus per person */}
              <div className="glass-comp rounded-2xl p-6 text-center border border-orange-500/10">
                <div className="text-3xl mb-3">🚌</div>
                <div className="text-xs text-white/30 uppercase tracking-wider mb-2">Bus (per person)</div>
                <div className="text-4xl font-black text-orange-400 mb-1">₹{busPerPerson}</div>
                <div className="text-xs text-white/30">x {selectedPassengers} = ₹{(busPerPerson * selectedPassengers).toLocaleString('en-IN')} total</div>
              </div>

              {/* Cab per person */}
              <div className="glass-comp rounded-2xl p-6 text-center border border-purple-500/15 shadow-[0_0_20px_rgba(168,85,247,0.06)]">
                <div className="text-3xl mb-3">🚗</div>
                <div className="text-xs text-white/30 uppercase tracking-wider mb-2">Cab (per person)</div>
                <div className="text-4xl font-black text-purple-400 mb-1">₹{cabPerPerson.toLocaleString('en-IN')}</div>
                <div className="text-xs text-white/30">Total fare: {route.cabOptions.sedan.fare} (shared by {selectedPassengers})</div>
              </div>
            </div>

            {/* Winner announcement */}
            <div className="mt-8 text-center">
              <div className={`inline-flex items-center gap-3 px-8 py-4 rounded-2xl font-bold text-lg ${cabPerPerson <= busPerPerson ? 'bg-purple-500/15 text-purple-300 border border-purple-500/20' : 'bg-orange-500/15 text-orange-300 border border-orange-500/20'}`}>
                <Trophy className="w-5 h-5" />
                {cabPerPerson <= busPerPerson
                  ? `Cab wins! Save ₹${(busPerPerson - cabPerPerson) * selectedPassengers} total`
                  : `Bus is ₹${cabPerPerson - busPerPerson}/person cheaper for ${selectedPassengers} passenger${selectedPassengers > 1 ? 's' : ''}`
                }
              </div>
            </div>

            {/* All passenger breakdown */}
            <div className="mt-10 grid grid-cols-4 gap-3">
              {[1, 2, 3, 4].map((n) => {
                const perPerson = Math.round(route.cabOptions.sedan.fareRaw / n);
                const isWinner = perPerson <= busPerPerson;
                return (
                  <div key={n} className={`glass-comp rounded-xl p-4 text-center transition-all ${selectedPassengers === n ? 'border-purple-500/30 bg-white/[0.04]' : ''}`}>
                    <div className="text-xs text-white/30 mb-1">{n} pax</div>
                    <div className={`text-lg font-black ${isWinner ? 'text-emerald-400' : 'text-white/60'}`}>₹{perPerson.toLocaleString('en-IN')}</div>
                    <div className="text-[10px] text-white/20">per person</div>
                    {isWinner && <div className="text-[10px] text-emerald-400 mt-1 font-bold">Cab wins!</div>}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          FAQ: Accordion
         ═══════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 px-4 sm:px-6 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(192,132,252,0.05),transparent_60%)]" />
        <div className="relative max-w-4xl mx-auto">
          <div className="text-center mb-20">
            <span className="inline-flex items-center gap-2 glass-comp px-4 py-2 rounded-full text-fuchsia-400 font-semibold text-xs tracking-widest uppercase mb-4">
              FAQ
            </span>
            <h2 className="text-4xl md:text-6xl font-black tracking-tight">Common Questions</h2>
            <p className="text-white/40 mt-4 text-lg">{route.origin} to {route.destination} travel FAQs</p>
          </div>

          <div className="space-y-4">
            {route.faqs.map((faq, i) => (
              <div key={i} className={`glass-comp rounded-2xl transition-all duration-500 ${openFaq === i ? 'border-purple-500/30 shadow-[0_0_30px_rgba(168,85,247,0.08)] bg-white/[0.05]' : 'hover:border-white/10'}`}>
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} aria-expanded={openFaq === i} aria-label={openFaq === i ? 'Collapse answer' : 'Expand answer'} className="w-full flex items-center justify-between p-6 md:p-7 text-left group focus:outline-none focus:ring-2 focus:ring-purple-500/50 rounded-2xl">
                  <span className="font-semibold text-white/80 pr-8 group-hover:text-white transition-colors">{faq.question}</span>
                  <div className={`w-8 h-8 rounded-full glass-comp flex items-center justify-center flex-shrink-0 transition-all duration-300 ${openFaq === i ? 'bg-purple-500/20 border-purple-500/30 rotate-180' : 'group-hover:border-white/20'}`}>
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
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          RELATED ROUTES
         ═══════════════════════════════════════════════════════════════ */}
      {relatedRoutes.length > 0 && (
        <section className="py-24 md:py-32 px-4 sm:px-6 relative">
          <div className="relative max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-flex items-center gap-2 glass-comp px-4 py-2 rounded-full text-purple-400 font-semibold text-xs tracking-widest uppercase mb-4">
                <Route className="w-3.5 h-3.5" /> More Comparisons
              </span>
              <h2 className="text-3xl md:text-5xl font-black">Related Routes</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedRoutes.map((r, i) => (
                <Link key={i} href={`/bus-vs-cab/${r.slug}`} className="group glass-comp rounded-2xl p-6 transition-all duration-500 hover:border-purple-500/30 hover:shadow-[0_0_40px_rgba(168,85,247,0.08)] hover:-translate-y-1">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-sm font-black text-white">{r.origin}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-purple-400" />
                    <span className="text-sm font-black text-purple-400">{r.destination}</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-white/40">
                    <span>{r.distanceKm} km</span>
                    <span>&middot;</span>
                    <span>From {r.cabOptions.sedan.fare}</span>
                  </div>
                  <div className="mt-3 text-xs font-bold text-purple-400 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    Compare <ChevronRight className="w-3 h-3" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ═══════════════════════════════════════════════════════════════
          FINAL CTA
         ═══════════════════════════════════════════════════════════════ */}
      <section className="py-28 md:py-36 px-4 sm:px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-950/50 via-fuchsia-950/60 to-purple-950/50" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[200px]" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />

        <div className="relative max-w-4xl mx-auto text-center">
          <div className="glass-comp-strong rounded-[2.5rem] p-12 md:p-16 border-glow-comp relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/40 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-fuchsia-500/30 to-transparent" />

            <div className="text-5xl mb-6">🚗</div>
            <h2 className="text-4xl md:text-6xl font-black mb-4 tracking-tight">Skip the Bus. Book a Cab.</h2>
            <p className="text-white/40 text-xl mb-3">
              {route.origin} to {route.destination} &middot; {route.distanceKm} km &middot; From <span className="text-purple-400 font-bold">{route.cabOptions.sedan.fare}</span>
            </p>
            <p className="text-white/20 text-sm mb-12">AC vehicles &middot; Door-to-door &middot; Save {route.comparison.timeSaved} &middot; No hidden charges &middot; 4.9★ rated</p>

            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <Link onClick={() => trackPhoneCall('bus_vs_cab_cta')} href="tel:+917668570551" className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-purple-500 via-fuchsia-500 to-pink-600 text-white px-12 py-5 rounded-2xl font-bold text-lg shadow-[0_0_50px_rgba(168,85,247,0.35)] hover:shadow-[0_0_80px_rgba(168,85,247,0.5)] hover:scale-105 transition-all duration-300">
                <Phone className="w-5 h-5" /> Call Now: 7668570551
              </Link>
              <Link onClick={() => trackWhatsAppClick('bus_vs_cab_cta')} href={`https://wa.me/917668570551?text=${encodeURIComponent(whatsappMsg)}`} className="inline-flex items-center justify-center gap-3 bg-emerald-500/10 text-emerald-300 px-12 py-5 rounded-2xl font-bold text-lg border border-emerald-500/25 hover:bg-emerald-500/20 hover:border-emerald-400/50 hover:shadow-[0_0_30px_rgba(16,185,129,0.15)] transition-all duration-300">
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
