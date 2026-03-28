'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  Phone, ArrowRight, ChevronDown, Shield, Clock, Car, CheckCircle2,
  Route, Zap, MapPin, Navigation, Star, Users, Fuel, Coffee, Info,
  ChevronRight, Calendar, Mountain, Sparkles, Award, AlertTriangle,
  Sun, Moon, Compass
} from '@/components/ui/icons';
import { trackWhatsAppClick, trackPhoneCall } from '@/utilis/analytics';

export default function TravelByCarClient({ route, relatedRoutes }) {
  const [openFaq, setOpenFaq] = useState(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const whatsappMsg = `Hi, I want to book a cab from ${route.origin} to ${route.destination} (${route.totalDistance} km)`;

  const roadQualityColor = (quality) => {
    const q = quality.toLowerCase();
    if (q.includes('excellent')) return { bg: 'bg-emerald-500/15', text: 'text-emerald-400', border: 'border-emerald-500/25', dot: 'bg-emerald-400' };
    if (q.includes('good')) return { bg: 'bg-sky-500/15', text: 'text-sky-400', border: 'border-sky-500/25', dot: 'bg-sky-400' };
    if (q.includes('moderate')) return { bg: 'bg-amber-500/15', text: 'text-amber-400', border: 'border-amber-500/25', dot: 'bg-amber-400' };
    return { bg: 'bg-red-500/15', text: 'text-red-400', border: 'border-red-500/25', dot: 'bg-red-400' };
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-hidden">

      {/* ═══ CSS Animations ═══ */}
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
        @keyframes timeline-pulse { 0%,100% { box-shadow: 0 0 0 0 rgba(99,102,241,0.4); } 50% { box-shadow: 0 0 0 8px rgba(99,102,241,0); } }
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
        .animate-timeline-pulse { animation: timeline-pulse 2s ease-in-out infinite; }
        .glass-card { background: rgba(255,255,255,0.03); backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px); border: 1px solid rgba(255,255,255,0.06); }
        .glass-card-hover:hover { background: rgba(255,255,255,0.06); border-color: rgba(129,140,248,0.3); box-shadow: 0 8px 32px rgba(99,102,241,0.1), inset 0 1px 0 rgba(255,255,255,0.05); transform: translateY(-2px); }
        .glass-strong { background: rgba(255,255,255,0.05); backdrop-filter: blur(40px); -webkit-backdrop-filter: blur(40px); border: 1px solid rgba(255,255,255,0.08); }
        .glass-neon { box-shadow: 0 0 15px rgba(99,102,241,0.15), 0 0 45px rgba(99,102,241,0.05), inset 0 1px 0 rgba(255,255,255,0.05); }
        .text-glow { text-shadow: 0 0 40px rgba(99,102,241,0.5), 0 0 80px rgba(139,92,246,0.3); }
        .border-glow { box-shadow: inset 0 0 20px rgba(99,102,241,0.1), 0 0 40px rgba(99,102,241,0.05); }
      `}</style>

      {/* ═══════════════════════════════════════════════════════════════
          HERO: Drive {Origin} to {Destination} — Cosmic Navigator
         ═══════════════════════════════════════════════════════════════ */}
      <section className="relative min-h-[95vh] flex items-center overflow-hidden">
        {/* Multi-layer gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-indigo-950/70 to-violet-950/40 animate-gradient-x" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(99,102,241,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(139,92,246,0.1),transparent_50%)]" />

        {/* Dot grid mesh */}
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

        {/* Floating distance badge */}
        <div className="absolute top-28 right-[8%] hidden lg:block animate-float">
          <div className="relative">
            <div className="absolute -inset-12 bg-indigo-500/15 rounded-full blur-[60px] animate-pulse" />
            <div className="relative glass-strong rounded-full w-44 h-44 flex items-center justify-center animate-pulse-glow border-2 border-indigo-500/20">
              <div className="absolute inset-1 rounded-full bg-gradient-to-br from-indigo-500/20 via-violet-500/10 to-transparent" />
              <div className="text-center relative z-10">
                <div className="text-4xl font-black text-white text-glow">{route.totalDistance}</div>
                <div className="text-[10px] font-bold text-indigo-300/80 uppercase tracking-[0.2em]">Kilometers</div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating driving time badge */}
        <div className="absolute bottom-40 right-[15%] hidden xl:block animate-float-slow" style={{ animationDelay: '-2s' }}>
          <div className="glass-strong rounded-2xl px-6 py-4 border border-violet-500/20 glass-neon">
            <div className="text-xs text-violet-400 uppercase tracking-wider font-bold">Drive Time</div>
            <div className="text-2xl font-black text-violet-300">{route.drivingTime}</div>
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
          <div className="inline-flex items-center gap-2.5 glass-strong px-6 py-3 rounded-full mb-10 border border-indigo-500/25 animate-glow">
            <Compass className="w-4 h-4 text-indigo-400" />
            <span className="text-indigo-300 font-semibold text-sm tracking-wide">Road Trip Guide 2026</span>
            <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
          </div>

          {/* Title: Drive {Origin} to {Destination} */}
          <div className="mb-4">
            <span className="text-2xl md:text-3xl lg:text-4xl font-medium text-white/40 tracking-tight">Drive</span>
          </div>
          <div className="flex items-center gap-4 sm:gap-6 mb-8 flex-wrap">
            <span className="text-3xl sm:text-5xl md:text-7xl lg:text-9xl font-black text-white tracking-tight drop-shadow-[0_0_30px_rgba(255,255,255,0.1)]">{route.origin}</span>
            <div className="flex items-center gap-2">
              <svg width="80" height="4" className="hidden sm:block">
                <line x1="0" y1="2" x2="80" y2="2" stroke="url(#road-grad1)" strokeWidth="3" strokeDasharray="8 6" className="animate-dash" />
                <defs><linearGradient id="road-grad1" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stopColor="#818cf8" /><stop offset="100%" stopColor="#a78bfa" /></linearGradient></defs>
              </svg>
              <div className="animate-road">
                <ArrowRight className="w-10 h-10 sm:w-12 sm:h-12 text-indigo-400 drop-shadow-[0_0_20px_rgba(99,102,241,0.6)]" />
              </div>
              <svg width="80" height="4" className="hidden sm:block">
                <line x1="0" y1="2" x2="80" y2="2" stroke="url(#road-grad2)" strokeWidth="3" strokeDasharray="8 6" className="animate-dash" />
                <defs><linearGradient id="road-grad2" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stopColor="#a78bfa" /><stop offset="100%" stopColor="#c084fc" /></linearGradient></defs>
              </svg>
            </div>
            <span className="text-3xl sm:text-5xl md:text-7xl lg:text-9xl font-black bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-violet-400 to-purple-400 drop-shadow-[0_0_30px_rgba(139,92,246,0.3)]">{route.destination}</span>
          </div>

          {/* H1 subtitle */}
          <h1 className="text-xl md:text-2xl lg:text-3xl text-white/40 mb-8 max-w-3xl font-medium">
            {route.origin} to {route.destination} by Car: <span className="text-indigo-400 font-black text-glow">{route.totalDistance} km</span> Road Trip Guide &mdash; Cab from <span className="text-violet-400 font-black">{route.cabFares.sedan}</span>
          </h1>

          {/* Glass info pills */}
          <div className="flex flex-wrap gap-3 mb-12">
            {[
              { icon: Route, text: `${route.totalDistance} km`, accent: 'indigo' },
              { icon: Clock, text: route.drivingTime, accent: 'indigo' },
              { icon: Fuel, text: `${route.petrolStops} fuel stops`, accent: 'violet' },
              { icon: Car, text: route.bestCarType, accent: 'purple' },
              { icon: Star, text: '4.9\u2605 (10,000+ reviews)', accent: 'yellow', special: true },
            ].map((pill, i) => (
              <span key={i} className={`inline-flex items-center gap-2 backdrop-blur-2xl px-5 py-3 rounded-2xl text-sm font-medium transition-all duration-300 hover:scale-105 ${pill.special ? 'bg-yellow-500/10 border border-yellow-500/25 text-yellow-300' : 'glass-card border-white/10 text-white/70 hover:border-indigo-500/30'}`}>
                <pill.icon className={`w-4 h-4 ${pill.special ? 'text-yellow-400' : pill.accent === 'violet' ? 'text-violet-400' : pill.accent === 'purple' ? 'text-purple-400' : 'text-indigo-400'}`} /> {pill.text}
              </span>
            ))}
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link onClick={() => trackPhoneCall('travel_by_car')} href="tel:+917668570551" className="group inline-flex items-center gap-3 bg-gradient-to-r from-indigo-500 via-violet-500 to-purple-600 text-white px-10 py-5 rounded-2xl font-bold text-lg shadow-[0_0_40px_rgba(99,102,241,0.3)] hover:shadow-[0_0_60px_rgba(99,102,241,0.5)] hover:scale-105 transition-all duration-300">
              <Phone className="w-5 h-5 group-hover:animate-bounce" /> Call: 7668570551
            </Link>
            <Link onClick={() => trackWhatsAppClick('travel_by_car')} href={`https://wa.me/917668570551?text=${encodeURIComponent(whatsappMsg)}`} className="group inline-flex items-center gap-3 glass-strong text-white px-10 py-5 rounded-2xl font-bold text-lg border border-white/15 hover:border-indigo-500/40 hover:shadow-[0_0_30px_rgba(99,102,241,0.15)] transition-all duration-300">
              <svg className="w-5 h-5 text-emerald-400" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.611.611l4.458-1.495A11.943 11.943 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.318 0-4.468-.67-6.29-1.823l-.451-.27-2.649.888.888-2.649-.27-.451A9.965 9.965 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/></svg>
              WhatsApp Quote <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          SOCIAL PROOF: Neon glass strip
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
          JOURNEY OVERVIEW: Glass cards — distance, time, fuel, food
         ═══════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 px-4 sm:px-6 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.05),transparent_70%)]" />
        <div className="relative max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <span className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full text-indigo-400 font-semibold text-xs tracking-widest uppercase mb-4">
              <Compass className="w-3.5 h-3.5" /> Journey Overview
            </span>
            <h2 className="text-4xl md:text-6xl font-black tracking-tight">{route.origin} to {route.destination}</h2>
            <p className="text-white/40 mt-4 text-lg">Complete driving guide with road conditions, stops, and seasonal advice</p>
          </div>

          {/* Overview glass cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              { icon: Route, label: 'Total Distance', value: `${route.totalDistance} km`, sub: `${Math.round(route.totalDistance * 0.621)} miles`, bgClass: 'bg-indigo-500/10', borderClass: 'border-indigo-500/20', textClass: 'text-indigo-400', shadowClass: 'group-hover:shadow-indigo-500/20' },
              { icon: Clock, label: 'Driving Time', value: route.drivingTime, sub: 'Including breaks', bgClass: 'bg-violet-500/10', borderClass: 'border-violet-500/20', textClass: 'text-violet-400', shadowClass: 'group-hover:shadow-violet-500/20' },
              { icon: Fuel, label: 'Fuel Stops', value: `${route.petrolStops} stations`, sub: 'Along the route', bgClass: 'bg-purple-500/10', borderClass: 'border-purple-500/20', textClass: 'text-purple-400', shadowClass: 'group-hover:shadow-purple-500/20' },
              { icon: Coffee, label: 'Food Stops', value: `${route.foodStops.length} places`, sub: 'Recommended restaurants', bgClass: 'bg-cyan-500/10', borderClass: 'border-cyan-500/20', textClass: 'text-cyan-400', shadowClass: 'group-hover:shadow-cyan-500/20' },
            ].map((card, i) => (
              <div key={i} className="group glass-card glass-card-hover rounded-3xl p-6 md:p-8 transition-all duration-500 cursor-default">
                <div className={`w-14 h-14 rounded-2xl ${card.bgClass} border ${card.borderClass} flex items-center justify-center mb-4 group-hover:scale-110 group-hover:shadow-lg ${card.shadowClass} transition-all duration-300`}>
                  <card.icon className={`w-7 h-7 ${card.textClass}`} />
                </div>
                <div className="text-[10px] text-white/40 uppercase tracking-[0.15em] mb-2">{card.label}</div>
                <div className="text-xl md:text-2xl font-black text-white leading-tight">{card.value}</div>
                <div className="text-xs text-white/35 mt-1.5 truncate">{card.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          SEGMENT-BY-SEGMENT ROAD MAP: Glass timeline
         ═══════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 px-4 sm:px-6 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_left,rgba(99,102,241,0.05),transparent_60%)]" />
        <div className="relative max-w-5xl mx-auto">
          <div className="text-center mb-20">
            <span className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full text-indigo-400 font-semibold text-xs tracking-widest uppercase mb-4">
              <MapPin className="w-3.5 h-3.5" /> Segment-by-Segment Road Map
            </span>
            <h2 className="text-4xl md:text-6xl font-black tracking-tight">The Route</h2>
            <p className="text-white/40 mt-4 text-lg">Every stretch of your {route.origin} to {route.destination} drive, detailed</p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Glowing vertical connector */}
            <div className="absolute left-7 top-0 bottom-0 w-[2px]">
              <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/60 via-violet-500/40 to-purple-500/20" />
              <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/30 via-violet-500/20 to-transparent blur-sm" />
            </div>

            {/* Origin node */}
            <div className="relative flex items-center gap-6 mb-8">
              <div className="relative z-10 w-14 h-14 rounded-full bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center shadow-[0_0_30px_rgba(99,102,241,0.4)] animate-timeline-pulse flex-shrink-0">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div className="glass-strong rounded-2xl px-6 py-4 flex-1 border border-indigo-500/20 glass-neon">
                <div className="font-black text-lg">{route.origin}</div>
                <div className="text-indigo-300/60 text-sm">Starting Point &middot; km 0</div>
              </div>
            </div>

            {/* Segment nodes */}
            {route.roadMap.map((segment, i) => {
              const qc = roadQualityColor(segment.roadQuality);
              return (
                <div key={i} className="relative flex items-start gap-6 mb-8 group">
                  <div className="relative z-10 w-14 h-14 rounded-full glass-card flex items-center justify-center border border-indigo-500/15 group-hover:border-indigo-400/40 group-hover:shadow-[0_0_20px_rgba(99,102,241,0.2)] transition-all duration-300 flex-shrink-0">
                    <Navigation className="w-5 h-5 text-indigo-400" />
                  </div>
                  <div className="glass-card glass-card-hover rounded-2xl p-6 flex-1 transition-all duration-300">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-3">
                      <div className="font-black text-white/90 text-lg">{segment.segment}</div>
                      <span className={`inline-flex items-center gap-1.5 ${qc.bg} ${qc.border} border px-3 py-1 rounded-full text-xs font-bold ${qc.text} w-fit`}>
                        <span className={`w-1.5 h-1.5 rounded-full ${qc.dot}`} />
                        {segment.roadQuality}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-4 mb-3">
                      <span className="flex items-center gap-1.5 text-sm text-white/40">
                        <Route className="w-3.5 h-3.5 text-indigo-500/60" /> {segment.distance} km
                      </span>
                      <span className="flex items-center gap-1.5 text-sm text-white/40">
                        <Clock className="w-3.5 h-3.5 text-indigo-500/60" /> {segment.time}
                      </span>
                    </div>
                    <p className="text-white/40 text-sm leading-relaxed">{segment.highlights}</p>
                  </div>
                </div>
              );
            })}

            {/* Destination node */}
            <div className="relative flex items-center gap-6">
              <div className="relative z-10 w-14 h-14 rounded-full bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center shadow-[0_0_30px_rgba(139,92,246,0.4)] animate-timeline-pulse flex-shrink-0">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div className="glass-strong rounded-2xl px-6 py-4 flex-1 border border-violet-500/20" style={{ boxShadow: '0 0 15px rgba(139,92,246,0.15), inset 0 1px 0 rgba(255,255,255,0.05)' }}>
                <div className="font-black text-lg">{route.destination}</div>
                <div className="text-violet-300/60 text-sm">Destination &middot; {route.totalDistance} km</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          DRIVING TIPS: Glass cards with numbered icons
         ═══════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 px-4 sm:px-6 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(6,182,212,0.03),transparent_60%)]" />
        <div className="relative max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <span className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full text-cyan-400 font-semibold text-xs tracking-widest uppercase mb-4">
              <Info className="w-3.5 h-3.5" /> Driving Tips
            </span>
            <h2 className="text-4xl md:text-6xl font-black tracking-tight">Drive Smart</h2>
            <p className="text-white/40 mt-4 text-lg">Expert tips for your {route.origin} to {route.destination} road trip</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {route.drivingTips.map((tip, i) => (
              <div key={i} className="glass-card rounded-2xl p-6 border border-white/[0.04] hover:border-indigo-500/25 transition-all duration-500 hover:shadow-[0_0_30px_rgba(99,102,241,0.06)] group">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500/20 to-violet-500/20 border border-indigo-500/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-sm font-black text-indigo-400">{i + 1}</span>
                  </div>
                  <p className="text-white/50 leading-relaxed text-[15px] group-hover:text-white/70 transition-colors">{tip}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          FOOD STOPS: Horizontal glass strip
         ═══════════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-20 px-4 sm:px-6 relative">
        <div className="relative max-w-6xl mx-auto">
          <div className="glass-strong rounded-[2rem] p-8 md:p-12 border-glow relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent" />
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center">
                <Coffee className="w-7 h-7 text-amber-400" />
              </div>
              <div>
                <h3 className="text-2xl font-black">Recommended Food Stops</h3>
                <p className="text-white/40 text-sm">Best places to eat on the {route.origin} to {route.destination} route</p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {route.foodStops.map((stop, i) => (
                <div key={i} className="glass-card rounded-xl px-5 py-4 border border-amber-500/10 hover:border-amber-400/25 transition-all duration-300 group cursor-default">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-amber-500/15 flex items-center justify-center flex-shrink-0">
                      <span className="text-xs font-black text-amber-400">{i + 1}</span>
                    </div>
                    <span className="text-white/70 text-sm font-medium group-hover:text-white/90 transition-colors">{stop}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          SEASONAL WARNINGS: Color-coded glass panels
         ═══════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 px-4 sm:px-6 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_right,rgba(168,85,247,0.05),transparent_60%)]" />
        <div className="relative max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <span className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full text-purple-400 font-semibold text-xs tracking-widest uppercase mb-4">
              <AlertTriangle className="w-3.5 h-3.5" /> Seasonal Warnings
            </span>
            <h2 className="text-4xl md:text-6xl font-black tracking-tight">When to Go</h2>
            <p className="text-white/40 mt-4 text-lg">Season-wise road conditions for {route.origin} to {route.destination}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { season: 'Winter', icon: Moon, period: 'Dec — Feb', warning: route.seasonalWarnings.winter, borderClass: 'border-sky-500/10', hoverBorderClass: 'hover:border-sky-500/25', gradient: 'from-sky-500 to-blue-600', glow: 'rgba(14,165,233,0.15)', periodClass: 'text-sky-400/70' },
              { season: 'Monsoon', icon: Mountain, period: 'Jul — Sep', warning: route.seasonalWarnings.monsoon, borderClass: 'border-emerald-500/10', hoverBorderClass: 'hover:border-emerald-500/25', gradient: 'from-emerald-500 to-green-600', glow: 'rgba(16,185,129,0.15)', periodClass: 'text-emerald-400/70' },
              { season: 'Summer', icon: Sun, period: 'Apr — Jun', warning: route.seasonalWarnings.summer, borderClass: 'border-red-500/10', hoverBorderClass: 'hover:border-red-500/25', gradient: 'from-orange-500 to-red-500', glow: 'rgba(239,68,68,0.15)', periodClass: 'text-red-400/70' },
            ].map((s, i) => (
              <div key={i} className={`glass-card rounded-[2rem] p-8 border ${s.borderClass} ${s.hoverBorderClass} transition-all duration-500 group`} style={{ '--glow': s.glow }}>
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${s.gradient} flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`} style={{ boxShadow: `0 8px 30px ${s.glow}` }}>
                  <s.icon className="w-7 h-7 text-white" />
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <h3 className="text-xl font-black">{s.season}</h3>
                  <span className={`text-xs font-bold ${s.periodClass} uppercase tracking-wider`}>{s.period}</span>
                </div>
                <p className="text-white/50 leading-relaxed text-[15px]">{s.warning}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          SKIP THE DRIVE — BOOK A CAB: Conversion section
         ═══════════════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-24 px-4 sm:px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-950/40 via-violet-950/50 to-indigo-950/40" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-violet-500/8 rounded-full blur-[200px]" />

        <div className="relative max-w-5xl mx-auto">
          <div className="glass-strong rounded-[2.5rem] p-10 md:p-16 border-glow relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent" />

            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full text-emerald-400 font-semibold text-xs tracking-widest uppercase mb-6">
                <Shield className="w-3.5 h-3.5" /> Skip the Drive
              </div>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4">Let Us Drive You</h2>
              <p className="text-white/40 text-lg max-w-2xl mx-auto">
                Why stress about {route.totalDistance} km of driving? Sit back, relax, and let our experienced drivers handle the {route.origin} to {route.destination} road trip for you.
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
              {[
                { icon: Shield, title: 'Verified Drivers', desc: 'Background-checked pros', bgClass: 'bg-indigo-500/10', borderClass: 'border-indigo-500/15', textClass: 'text-indigo-400' },
                { icon: Car, title: 'AC Fleet', desc: 'GPS-tracked vehicles', bgClass: 'bg-violet-500/10', borderClass: 'border-violet-500/15', textClass: 'text-violet-400' },
                { icon: Award, title: 'Best Prices', desc: 'No surge, no hidden fees', bgClass: 'bg-emerald-500/10', borderClass: 'border-emerald-500/15', textClass: 'text-emerald-400' },
                { icon: Phone, title: '24/7 Support', desc: 'Always reachable', bgClass: 'bg-cyan-500/10', borderClass: 'border-cyan-500/15', textClass: 'text-cyan-400' },
              ].map((f, i) => (
                <div key={i} className="text-center group">
                  <div className={`w-14 h-14 rounded-2xl ${f.bgClass} border ${f.borderClass} flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-all duration-300`}>
                    <f.icon className={`w-6 h-6 ${f.textClass}`} />
                  </div>
                  <h4 className="font-bold text-sm mb-0.5">{f.title}</h4>
                  <p className="text-white/40 text-xs">{f.desc}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a onClick={() => trackPhoneCall('skip_drive_cta')} href="tel:+917668570551" className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-indigo-500 via-violet-500 to-purple-600 text-white px-10 py-5 rounded-2xl font-bold text-lg shadow-[0_0_40px_rgba(99,102,241,0.3)] hover:shadow-[0_0_60px_rgba(99,102,241,0.5)] hover:scale-105 transition-all duration-300">
                <Phone className="w-5 h-5" /> Book Cab: 7668570551
              </a>
              <a onClick={() => trackWhatsAppClick('skip_drive_cta')} href={`https://wa.me/917668570551?text=${encodeURIComponent(whatsappMsg)}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-3 bg-emerald-500/10 text-emerald-300 px-10 py-5 rounded-2xl font-bold text-lg border border-emerald-500/25 hover:bg-emerald-500/20 hover:border-emerald-400/50 transition-all duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.611.611l4.458-1.495A11.943 11.943 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.318 0-4.468-.67-6.29-1.823l-.451-.27-2.649.888.888-2.649-.27-.451A9.965 9.965 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/></svg>
                WhatsApp Quote <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          PRICING: Cab fare cards — Sedan / SUV / Tempo
         ═══════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 px-4 sm:px-6 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(139,92,246,0.08),transparent_60%)]" />
        <div className="relative max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <span className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full text-violet-400 font-semibold text-xs tracking-widest uppercase mb-4">
              <Car className="w-3.5 h-3.5" /> Cab Fares
            </span>
            <h2 className="text-4xl md:text-6xl font-black tracking-tight">{route.origin} to {route.destination} Cab</h2>
            <p className="text-white/40 mt-4 text-lg">All fares include driver, fuel &amp; AC &mdash; No hidden charges</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {[
              { name: 'Sedan', sub: 'Swift Dzire / Etios', fare: route.cabFares.sedan, seats: '4', gradient: 'from-indigo-500 to-blue-600', glow: 'rgba(99,102,241,0.25)', hoverBorderClass: 'hover:border-indigo-500/30', hoverPriceBorderClass: 'group-hover:border-indigo-500/20', perKm: '\u20B911/km', popular: false, icon: '\uD83D\uDE97' },
              { name: 'SUV', sub: 'Innova / Ertiga', fare: route.cabFares.suv, seats: '6-7', gradient: 'from-violet-500 to-purple-600', glow: 'rgba(139,92,246,0.25)', hoverBorderClass: 'hover:border-violet-500/30', hoverPriceBorderClass: 'group-hover:border-violet-500/20', perKm: '\u20B914/km', popular: true, icon: '\uD83D\uDE99' },
              { name: 'Tempo Traveller', sub: '12-Seater AC', fare: route.cabFares.tempo, seats: '12', gradient: 'from-purple-500 to-fuchsia-600', glow: 'rgba(168,85,247,0.25)', hoverBorderClass: 'hover:border-purple-500/30', hoverPriceBorderClass: 'group-hover:border-purple-500/20', perKm: '\u20B920/km', popular: false, icon: '\uD83D\uDE90' },
            ].map((v, i) => (
              <div key={i} className={`group relative glass-card rounded-[2rem] p-8 transition-all duration-500 ${v.hoverBorderClass} ${v.popular ? 'ring-2 ring-violet-500/25 shadow-[0_0_40px_rgba(139,92,246,0.1)]' : ''}`}>
                {v.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                    <div className="relative">
                      <div className="absolute inset-0 bg-violet-500 blur-lg opacity-50" />
                      <span className="relative bg-gradient-to-r from-violet-500 to-purple-500 text-white text-[10px] font-black px-6 py-2 rounded-full uppercase tracking-[0.2em] shadow-lg">Most Popular</span>
                    </div>
                  </div>
                )}

                <div className="text-center mb-8">
                  <div className="text-5xl mb-3">{v.icon}</div>
                  <h3 className="text-2xl font-black">{v.name}</h3>
                  <p className="text-white/40 text-sm mt-1">{v.sub} &middot; {v.seats} Seater</p>
                </div>

                <div className={`glass-card rounded-2xl p-6 mb-8 text-center border border-white/[0.04] ${v.hoverPriceBorderClass} transition-all`}>
                  <div className="text-xs text-white/30 uppercase tracking-wider mb-1">Starting from</div>
                  <div className={`text-4xl md:text-5xl font-black bg-clip-text text-transparent bg-gradient-to-r ${v.gradient}`}>{v.fare}</div>
                  <div className="text-white/40 text-sm mt-2">{v.perKm} &middot; Min 300 km billing</div>
                </div>

                <div className="space-y-3 mb-8">
                  {['AC Vehicle & GPS Tracking', 'Experienced Verified Driver', 'Door-to-door Pickup & Drop', 'Fuel Included in Fare', '24/7 Customer Support'].map((inc, j) => (
                    <div key={j} className="flex items-center gap-3 text-sm text-white/50 group-hover:text-white/70 transition-colors">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" /> {inc}
                    </div>
                  ))}
                </div>

                <Link onClick={() => trackWhatsAppClick('travel_fare')} href={`https://wa.me/917668570551?text=${encodeURIComponent(`Hi, I want to book a ${v.name} from ${route.origin} to ${route.destination}`)}`} className={`block w-full text-center bg-gradient-to-r ${v.gradient} text-white py-4 rounded-2xl font-bold text-lg hover:scale-[1.03] transition-all duration-300 shadow-lg`} style={{ boxShadow: `0 10px 40px ${v.glow}` }}>
                  Book {v.name} <ArrowRight className="w-4 h-4 inline ml-1" />
                </Link>
              </div>
            ))}
          </div>

          <p className="mt-10 text-center text-white/20 text-sm">* Toll charges and state tax extra at actual. Fares based on {route.totalDistance} km one-way distance.</p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          BEST CAR TYPE & TRAVEL TIPS: Two-column glass cards
         ═══════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 px-4 sm:px-6 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(6,182,212,0.03),transparent_60%)]" />
        <div className="relative max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="glass-card rounded-[2rem] p-8 border border-indigo-500/10 hover:border-indigo-400/25 transition-all duration-500 hover:shadow-[0_0_40px_rgba(99,102,241,0.08)]">
              <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mb-5">
                <Car className="w-7 h-7 text-indigo-400" />
              </div>
              <h3 className="text-xl font-black mb-3">Best Car for This Trip</h3>
              <p className="text-white/50 leading-relaxed text-[15px]">
                We recommend a <span className="text-indigo-400 font-bold">{route.bestCarType}</span> for the {route.origin} to {route.destination} drive.
                {route.bestCarType.toLowerCase().includes('suv')
                  ? ' Mountain roads, luggage space, and family comfort make an SUV the ideal choice for this route.'
                  : ' The well-maintained highway makes a comfortable sedan the perfect choice — smooth ride, great mileage, lower cost.'}
              </p>
            </div>
            <div className="glass-card rounded-[2rem] p-8 border border-emerald-500/10 hover:border-emerald-400/25 transition-all duration-500 hover:shadow-[0_0_40px_rgba(16,185,129,0.08)]">
              <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-5">
                <Fuel className="w-7 h-7 text-emerald-400" />
              </div>
              <h3 className="text-xl font-black mb-3">Fuel Planning</h3>
              <p className="text-white/50 leading-relaxed text-[15px]">
                There are approximately <span className="text-emerald-400 font-bold">{route.petrolStops} petrol stations</span> along the {route.origin} to {route.destination} route.
                {route.petrolStops <= 4
                  ? ' Fuel stations are limited on parts of this route — fill your tank whenever you see one and do not take risks.'
                  : ' Fuel stations are adequately spaced. We recommend filling up at least once mid-route for a comfortable buffer.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          FAQ: Glass accordion
         ═══════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 px-4 sm:px-6 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(139,92,246,0.05),transparent_60%)]" />
        <div className="relative max-w-4xl mx-auto">
          <div className="text-center mb-20">
            <span className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full text-violet-400 font-semibold text-xs tracking-widest uppercase mb-4">
              FAQ
            </span>
            <h2 className="text-4xl md:text-6xl font-black tracking-tight">Common Questions</h2>
            <p className="text-white/40 mt-4 text-lg">{route.origin} to {route.destination} road trip FAQs</p>
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

      {/* ═══════════════════════════════════════════════════════════════
          RELATED ROUTES: Hover-glow glass cards
         ═══════════════════════════════════════════════════════════════ */}
      {relatedRoutes.length > 0 && (
        <section className="py-24 md:py-32 px-4 sm:px-6 relative">
          <div className="relative max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full text-indigo-400 font-semibold text-xs tracking-widest uppercase mb-4">
                <Navigation className="w-3.5 h-3.5" /> Explore More
              </span>
              <h2 className="text-3xl md:text-5xl font-black">Related Road Trips</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedRoutes.map((r, i) => (
                <Link key={i} href={`/travel-by-car/${r.slug}`} className="group glass-card rounded-2xl p-6 transition-all duration-500 hover:border-indigo-500/30 hover:shadow-[0_0_40px_rgba(99,102,241,0.08)] hover:-translate-y-1">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-sm font-black truncate">{r.origin}</span>
                    <div className="flex-1 h-[2px] bg-gradient-to-r from-indigo-500/30 to-violet-500/30 rounded-full" />
                    <span className="text-sm font-black text-indigo-400 truncate">{r.destination}</span>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-white/40">
                    <span className="flex items-center gap-1.5"><Route className="w-3.5 h-3.5 text-indigo-500/60" /> {r.totalDistance} km</span>
                    <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5 text-indigo-500/60" /> {r.drivingTime}</span>
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
          FINAL CTA: Full-bleed glass with dramatic neon
         ═══════════════════════════════════════════════════════════════ */}
      <section className="py-28 md:py-36 px-4 sm:px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-950/50 via-violet-950/60 to-purple-950/50" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[200px]" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent" />

        <div className="relative max-w-4xl mx-auto text-center">
          <div className="glass-strong rounded-[2.5rem] p-12 md:p-16 border-glow relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/40 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/30 to-transparent" />
            <div className="absolute top-0 bottom-0 left-0 w-px bg-gradient-to-b from-transparent via-indigo-500/20 to-transparent" />
            <div className="absolute top-0 bottom-0 right-0 w-px bg-gradient-to-b from-transparent via-violet-500/20 to-transparent" />

            <div className="text-5xl mb-6">{'\uD83D\uDE97'}</div>
            <h2 className="text-4xl md:text-6xl font-black mb-4 tracking-tight">Ready for the Road?</h2>
            <p className="text-white/40 text-xl mb-3">
              {route.origin} to {route.destination} &middot; {route.totalDistance} km &middot; From <span className="text-indigo-400 font-bold">{route.cabFares.sedan}</span>
            </p>
            <p className="text-white/20 text-sm mb-12">AC vehicles &middot; Verified drivers &middot; 24/7 booking &middot; No hidden charges &middot; 4.9\u2605 rated</p>

            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <Link onClick={() => trackPhoneCall('travel_final_cta')} href="tel:+917668570551" className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-indigo-500 via-violet-500 to-purple-600 text-white px-12 py-5 rounded-2xl font-bold text-lg shadow-[0_0_50px_rgba(99,102,241,0.35)] hover:shadow-[0_0_80px_rgba(99,102,241,0.5)] hover:scale-105 transition-all duration-300">
                <Phone className="w-5 h-5" /> Call Now: 7668570551
              </Link>
              <Link onClick={() => trackWhatsAppClick('travel_final_cta')} href={`https://wa.me/917668570551?text=${encodeURIComponent(whatsappMsg)}`} className="inline-flex items-center justify-center gap-3 bg-emerald-500/10 text-emerald-300 px-12 py-5 rounded-2xl font-bold text-lg border border-emerald-500/25 hover:bg-emerald-500/20 hover:border-emerald-400/50 hover:shadow-[0_0_30px_rgba(16,185,129,0.15)] transition-all duration-300">
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
