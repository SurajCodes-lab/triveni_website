'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  Phone, ArrowRight, ChevronDown, Shield, Clock, Car, CheckCircle2,
  Route, Zap, MapPin, Star, Users, Calendar, ChevronRight, Sparkles,
  XCircle, MinusCircle
} from '@/components/ui/icons';
import { trackWhatsAppClick, trackPhoneCall } from '@/utilis/analytics';

export default function RoundTripClient({ route, relatedRoutes }) {
  const [openFaq, setOpenFaq] = useState(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const whatsappMsg = `Hi, I want to book a round trip cab from ${route.origin} to ${route.destination} (${route.distanceKm} km one-way, ${route.totalRoundTripKm} km round trip)`;
  const tripDays = route.suggestedItinerary?.length || 1;

  const perDaySedan = tripDays > 1 ? Math.round(route.sedanRaw / tripDays) : route.sedanRaw;
  const perDaySuv = tripDays > 1 ? Math.round(route.suvRaw / tripDays) : route.suvRaw;
  const perDayTempo = tripDays > 1 ? Math.round(route.tempoRaw / tripDays) : route.tempoRaw;

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-hidden">

      {/* ═══ GOLDEN HIGHWAY CSS Animations & Glass System ═══ */}
      <style jsx global>{`
        @keyframes morph {
          0%,100% { border-radius: 60% 40% 30% 70%/60% 30% 70% 40%; }
          50% { border-radius: 30% 60% 70% 40%/50% 60% 30% 60%; }
        }
        @keyframes float {
          0%,100% { transform: translateY(0px); }
          50% { transform: translateY(-14px); }
        }
        @keyframes float-slow {
          0%,100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(3deg); }
        }
        @keyframes gradient-x {
          0%,100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes glow-pulse {
          0%,100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.05); }
        }
        @keyframes shimmer-gold {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        @keyframes road-bounce {
          0%,100% { transform: translateX(0) scale(1); }
          50% { transform: translateX(6px) scale(1.1); }
        }
        @keyframes orbit-gold {
          0% { transform: rotate(0deg) translateX(80px) rotate(0deg); }
          100% { transform: rotate(360deg) translateX(80px) rotate(-360deg); }
        }
        @keyframes dash-march {
          0% { stroke-dashoffset: 0; }
          100% { stroke-dashoffset: -30; }
        }
        @keyframes timeline-pulse {
          0%,100% { box-shadow: 0 0 0 0 rgba(245,158,11,0.4); }
          70% { box-shadow: 0 0 0 12px rgba(245,158,11,0); }
        }
        @keyframes badge-float {
          0%,100% { transform: translateY(0) rotate(-2deg); }
          50% { transform: translateY(-8px) rotate(2deg); }
        }
        .animate-morph { animation: morph 8s ease-in-out infinite; }
        .animate-float { animation: float 4s ease-in-out infinite; }
        .animate-float-slow { animation: float-slow 6s ease-in-out infinite; }
        .animate-gradient-x { background-size: 200% 200%; animation: gradient-x 6s ease infinite; }
        .animate-glow-pulse { animation: glow-pulse 2.5s ease-in-out infinite; }
        .animate-shimmer-gold { background-size: 200% 100%; animation: shimmer-gold 2.5s linear infinite; }
        .animate-road-bounce { animation: road-bounce 2s ease-in-out infinite; }
        .animate-orbit-gold { animation: orbit-gold 20s linear infinite; }
        .animate-dash { animation: dash-march 1.5s linear infinite; }
        .animate-timeline-pulse { animation: timeline-pulse 2s ease-in-out infinite; }
        .animate-badge-float { animation: badge-float 3s ease-in-out infinite; }

        .glass {
          background: rgba(255,255,255,0.03);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(251,191,36,0.1);
        }
        .glass-strong {
          background: rgba(255,255,255,0.05);
          backdrop-filter: blur(40px);
          -webkit-backdrop-filter: blur(40px);
          border: 1px solid rgba(251,191,36,0.15);
        }
        .glass-hover {
          transition: all 0.4s ease;
        }
        .glass-hover:hover {
          background: rgba(255,255,255,0.07);
          border-color: rgba(251,191,36,0.3);
          box-shadow: 0 8px 32px rgba(251,191,36,0.08), inset 0 1px 0 rgba(255,255,255,0.05);
          transform: translateY(-2px);
        }
        .amber-neon {
          box-shadow: 0 0 20px rgba(245,158,11,0.15), 0 0 60px rgba(245,158,11,0.05), inset 0 1px 0 rgba(255,255,255,0.05);
        }
        .text-glow-gold {
          text-shadow: 0 0 40px rgba(245,158,11,0.5), 0 0 80px rgba(217,119,6,0.3);
        }
        .border-glow-gold {
          box-shadow: inset 0 0 20px rgba(245,158,11,0.08), 0 0 40px rgba(245,158,11,0.05);
        }
      `}</style>

      {/* ═══════════════════════════════════════════════════════════════
          1. HERO: Golden Highway — Origin ⟷ Destination
         ═══════════════════════════════════════════════════════════════ */}
      <section className="relative min-h-[95vh] flex items-center overflow-hidden">
        {/* Multi-layer amber gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-amber-950/40 to-orange-950/30 animate-gradient-x" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(245,158,11,0.12),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(217,119,6,0.08),transparent_50%)]" />

        {/* Dot grid */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(251,191,36,0.5) 1px, transparent 0)', backgroundSize: '32px 32px' }} />

        {/* Floating morphing orbs — amber/gold */}
        <div className="absolute top-[15%] left-[5%] w-80 h-80 bg-amber-600/15 rounded-full blur-[100px] animate-morph" />
        <div className="absolute bottom-[10%] right-[5%] w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-[150px] animate-morph" style={{ animationDelay: '-4s' }} />
        <div className="absolute top-[50%] left-[30%] w-60 h-60 bg-yellow-500/8 rounded-full blur-[120px] animate-morph" style={{ animationDelay: '-2s' }} />

        {/* Orbiting gold particle */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hidden lg:block">
          <div className="animate-orbit-gold">
            <div className="w-3 h-3 bg-amber-400 rounded-full shadow-lg shadow-amber-400/50" />
          </div>
        </div>

        {/* Floating Round Trip KM badge */}
        <div className="absolute top-28 right-[8%] hidden lg:block animate-float">
          <div className="relative">
            <div className="absolute -inset-12 bg-amber-500/15 rounded-full blur-[60px] animate-pulse" />
            <div className="relative glass-strong rounded-full w-44 h-44 flex items-center justify-center border-2 border-amber-500/20 amber-neon">
              <div className="absolute inset-1 rounded-full bg-gradient-to-br from-amber-500/20 via-orange-500/10 to-transparent" />
              <div className="text-center relative z-10">
                <div className="text-3xl font-black text-amber-300 text-glow-gold">{route.totalRoundTripKm}</div>
                <div className="text-[9px] font-bold text-amber-400/70 uppercase tracking-[0.2em]">Round Trip KM</div>
              </div>
            </div>
          </div>
        </div>

        {/* Animated "Driver Stays With You" emerald badge */}
        <div className="absolute bottom-40 right-[12%] hidden xl:block animate-badge-float">
          <div className="relative overflow-hidden glass-strong rounded-2xl px-6 py-4 border border-emerald-500/25">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-emerald-600/5" />
            <div className="relative flex items-center gap-2.5">
              <div className="w-2.5 h-2.5 bg-emerald-400 rounded-full animate-pulse" />
              <span className="text-sm font-bold text-emerald-300 tracking-wide">Driver Stays With You</span>
            </div>
          </div>
        </div>

        {/* Floating fare teaser */}
        <div className="absolute bottom-60 left-[5%] hidden xl:block animate-float-slow" style={{ animationDelay: '-2s' }}>
          <div className="glass-strong rounded-2xl px-6 py-4 border border-amber-500/20">
            <div className="text-xs text-amber-400 uppercase tracking-wider font-bold">Round Trip From</div>
            <div className="text-2xl font-black text-amber-300">{route.cabFares.sedan}</div>
          </div>
        </div>

        {/* Bottom wave clip */}
        <div className="absolute -bottom-1 left-0 right-0 h-40">
          <svg viewBox="0 0 1440 120" className="w-full h-full" preserveAspectRatio="none">
            <path d="M0,80 C240,120 480,20 720,60 C960,100 1200,30 1440,70 L1440,120 L0,120 Z" fill="#020617" />
            <path d="M0,90 C360,110 720,40 1080,80 C1260,95 1380,85 1440,80 L1440,120 L0,120 Z" fill="#020617" fillOpacity="0.5" />
          </svg>
        </div>

        {/* Hero content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-32">
          {/* "Round Trip" top badge */}
          <div className="inline-flex items-center gap-2.5 glass-strong px-6 py-3 rounded-full mb-10 border border-amber-500/25 animate-glow-pulse">
            <Route className="w-4 h-4 text-amber-400" />
            <span className="text-sm font-bold bg-gradient-to-r from-amber-300 to-yellow-200 bg-clip-text text-transparent uppercase tracking-wider">
              Round Trip
            </span>
            <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
          </div>

          {/* Massive city names: Origin ⟷ Destination */}
          <div className="flex items-center gap-4 sm:gap-6 mb-8 flex-wrap">
            <span className="text-2xl sm:text-4xl md:text-6xl lg:text-8xl font-black text-white tracking-tight drop-shadow-[0_0_30px_rgba(255,255,255,0.1)]">
              {route.origin}
            </span>
            <div className="flex items-center gap-2">
              <svg width="60" height="4" className="hidden sm:block">
                <line x1="0" y1="2" x2="60" y2="2" stroke="url(#gold-road-l)" strokeWidth="3" strokeDasharray="8 6" className="animate-dash" />
                <defs><linearGradient id="gold-road-l" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stopColor="#f59e0b" /><stop offset="100%" stopColor="#d97706" /></linearGradient></defs>
              </svg>
              <div className="animate-road-bounce flex items-center">
                <span className="text-amber-400 text-3xl sm:text-4xl font-black drop-shadow-[0_0_20px_rgba(245,158,11,0.6)]">&#10231;</span>
              </div>
              <svg width="60" height="4" className="hidden sm:block">
                <line x1="0" y1="2" x2="60" y2="2" stroke="url(#gold-road-r)" strokeWidth="3" strokeDasharray="8 6" className="animate-dash" />
                <defs><linearGradient id="gold-road-r" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stopColor="#d97706" /><stop offset="100%" stopColor="#b45309" /></linearGradient></defs>
              </svg>
            </div>
            <span className="text-2xl sm:text-4xl md:text-6xl lg:text-8xl font-black bg-clip-text text-transparent bg-gradient-to-r from-amber-400 via-yellow-400 to-orange-400 drop-shadow-[0_0_30px_rgba(245,158,11,0.3)]">
              {route.destination}
            </span>
          </div>

          {/* H1 subtitle */}
          <h1 className="text-xl md:text-2xl lg:text-3xl text-white/40 mb-8 max-w-4xl font-medium">
            {route.origin} to {route.destination} Round Trip Cab: <span className="text-amber-400 font-black text-glow-gold">{route.distanceKm} km</span> one-way &mdash; From <span className="text-yellow-400 font-black">{route.cabFares.sedan}</span> round trip &mdash; Driver Stays With You
          </h1>

          {/* Stats pills */}
          <div className="flex flex-wrap gap-3 mb-12">
            {[
              { icon: <Route className="w-4 h-4 text-amber-400" />, text: `${route.totalRoundTripKm} km round trip` },
              { icon: <Clock className="w-4 h-4 text-amber-400" />, text: `${route.duration} one-way` },
              { icon: <MapPin className="w-4 h-4 text-orange-400" />, text: route.highway },
              { icon: <Shield className="w-4 h-4 text-emerald-400" />, text: 'Driver stays with you' },
              ...(route.nightHalt ? [{ icon: <Calendar className="w-4 h-4 text-yellow-400" />, text: `${tripDays}-day trip` }] : []),
            ].map((pill, i) => (
              <span key={i} className="inline-flex items-center gap-2 glass px-5 py-3 rounded-2xl text-sm font-medium text-white/70 glass-hover cursor-default">
                {pill.icon} {pill.text}
              </span>
            ))}
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="tel:+917668570551"
              onClick={() => trackPhoneCall('round_trip_hero', '+917668570551')}
              className="group inline-flex items-center gap-3 bg-gradient-to-r from-amber-500 via-orange-500 to-yellow-600 text-white px-10 py-5 rounded-2xl font-bold text-lg shadow-[0_0_40px_rgba(245,158,11,0.3)] hover:shadow-[0_0_60px_rgba(245,158,11,0.5)] hover:scale-105 transition-all duration-300"
            >
              <Phone className="w-5 h-5 group-hover:animate-bounce" />
              Call: 7668570551
            </a>
            <a
              href={`https://wa.me/917668570551?text=${encodeURIComponent(whatsappMsg)}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick('round_trip_hero', whatsappMsg)}
              className="group inline-flex items-center gap-3 glass-strong text-white px-10 py-5 rounded-2xl font-bold text-lg border border-white/15 hover:border-amber-500/40 hover:shadow-[0_0_30px_rgba(245,158,11,0.15)] transition-all duration-300"
            >
              <svg className="w-5 h-5 text-emerald-400" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.611.611l4.458-1.495A11.943 11.943 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.318 0-4.468-.67-6.29-1.823l-.451-.27-2.649.888.888-2.649-.27-.451A9.965 9.965 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/></svg>
              WhatsApp Quote
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          2. ROUND TRIP FARE CARDS — 3 glass cards with ribbon
         ═══════════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 lg:py-32 px-4 sm:px-6 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(245,158,11,0.06),transparent_60%)]" />
        <div className="relative max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <span className="inline-flex items-center gap-2 glass px-5 py-2.5 rounded-full text-amber-400 font-semibold text-xs tracking-widest uppercase mb-5">
              <Car className="w-3.5 h-3.5" /> Round Trip Fares
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-black tracking-tight">
              {route.origin} &#10231; {route.destination}
            </h2>
            <p className="text-white/40 mt-4 text-lg">
              All fares include driver, fuel, AC &amp; <span className="text-amber-400 font-bold">10% round trip discount</span>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {/* Sedan Card */}
            <div className="group relative glass rounded-[2rem] p-8 transition-all duration-500 hover:border-amber-500/30 hover:shadow-[0_0_60px_rgba(245,158,11,0.12)] hover:-translate-y-1">
              {/* ROUND TRIP ribbon */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                <div className="relative">
                  <div className="absolute inset-0 bg-amber-500 blur-lg opacity-40" />
                  <span className="relative bg-gradient-to-r from-amber-500 to-yellow-600 text-white text-[10px] font-black px-6 py-2 rounded-full uppercase tracking-[0.2em] shadow-lg">
                    Round Trip
                  </span>
                </div>
              </div>

              <div className="text-center mb-8 mt-2">
                <div className="text-5xl mb-3">&#128663;</div>
                <h3 className="text-2xl font-black">Sedan</h3>
                <p className="text-white/40 text-sm mt-1">Swift Dzire / Etios &middot; 4 Seater</p>
              </div>

              <div className="glass rounded-2xl p-6 mb-6 text-center border border-white/[0.04] group-hover:border-amber-500/20 transition-all">
                <div className="text-xs text-white/30 uppercase tracking-wider mb-1">Round Trip Fare</div>
                <div className="text-3xl sm:text-4xl md:text-5xl font-black bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-yellow-500">
                  {route.cabFares.sedan}
                </div>
                <div className="text-white/40 text-sm mt-2">&#8377;11/km &middot; {route.totalBillableKm} km billed</div>
              </div>

              {tripDays > 1 && (
                <div className="glass rounded-xl px-4 py-3 mb-6 text-center border border-amber-500/10">
                  <span className="text-xs text-white/40">Per day ({tripDays} days): </span>
                  <span className="text-sm font-bold text-amber-400">&#8377;{perDaySedan.toLocaleString('en-IN')}/day</span>
                </div>
              )}

              <div className="flex items-center justify-center gap-2 mb-6">
                <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 py-1.5 flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400 text-xs font-bold">10% Discount Applied</span>
                </div>
              </div>

              <div className="space-y-3 mb-8">
                {['AC Vehicle & GPS Tracking', 'Driver Stays With You', 'Fuel Included', 'Flexible Itinerary', '24/7 Support'].map((inc, j) => (
                  <div key={j} className="flex items-center gap-3 text-sm text-white/50 group-hover:text-white/70 transition-colors">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" /> {inc}
                  </div>
                ))}
              </div>

              <a
                href={`https://wa.me/917668570551?text=${encodeURIComponent(`Hi, I want to book a Sedan round trip from ${route.origin} to ${route.destination}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppClick('round_trip_fare_sedan', route.slug)}
                className="block w-full text-center bg-gradient-to-r from-amber-500 to-yellow-600 text-white py-4 rounded-2xl font-bold text-lg hover:scale-[1.03] transition-all duration-300 shadow-lg shadow-amber-500/20"
              >
                Book Sedan <ArrowRight className="w-4 h-4 inline ml-1" />
              </a>
            </div>

            {/* SUV Card — MOST POPULAR */}
            <div className="group relative glass rounded-[2rem] p-8 transition-all duration-500 ring-2 ring-amber-500/25 shadow-[0_0_40px_rgba(245,158,11,0.1)] hover:shadow-[0_0_70px_rgba(245,158,11,0.18)] hover:-translate-y-2 md:-mt-4 md:mb-4">
              {/* MOST POPULAR ribbon */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                <div className="relative">
                  <div className="absolute inset-0 bg-orange-500 blur-lg opacity-50" />
                  <span className="relative bg-gradient-to-r from-orange-500 to-amber-500 text-white text-[10px] font-black px-6 py-2 rounded-full uppercase tracking-[0.2em] shadow-lg">
                    Most Popular
                  </span>
                </div>
              </div>

              <div className="text-center mb-8 mt-2">
                <div className="text-5xl mb-3">&#128665;</div>
                <h3 className="text-2xl font-black">SUV</h3>
                <p className="text-white/40 text-sm mt-1">Innova / Ertiga &middot; 6-7 Seater</p>
              </div>

              <div className="glass rounded-2xl p-6 mb-6 text-center border border-white/[0.04] group-hover:border-orange-500/20 transition-all">
                <div className="text-xs text-white/30 uppercase tracking-wider mb-1">Round Trip Fare</div>
                <div className="text-3xl sm:text-4xl md:text-5xl font-black bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-amber-500">
                  {route.cabFares.suv}
                </div>
                <div className="text-white/40 text-sm mt-2">&#8377;14/km &middot; {route.totalBillableKm} km billed</div>
              </div>

              {tripDays > 1 && (
                <div className="glass rounded-xl px-4 py-3 mb-6 text-center border border-orange-500/10">
                  <span className="text-xs text-white/40">Per day ({tripDays} days): </span>
                  <span className="text-sm font-bold text-orange-400">&#8377;{perDaySuv.toLocaleString('en-IN')}/day</span>
                </div>
              )}

              <div className="flex items-center justify-center gap-2 mb-6">
                <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 py-1.5 flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400 text-xs font-bold">10% Discount Applied</span>
                </div>
              </div>

              <div className="space-y-3 mb-8">
                {['AC Vehicle & GPS Tracking', 'Driver Stays With You', 'Fuel Included', 'Flexible Itinerary', '24/7 Support'].map((inc, j) => (
                  <div key={j} className="flex items-center gap-3 text-sm text-white/50 group-hover:text-white/70 transition-colors">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" /> {inc}
                  </div>
                ))}
              </div>

              <a
                href={`https://wa.me/917668570551?text=${encodeURIComponent(`Hi, I want to book an SUV round trip from ${route.origin} to ${route.destination}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppClick('round_trip_fare_suv', route.slug)}
                className="block w-full text-center bg-gradient-to-r from-orange-500 to-amber-600 text-white py-4 rounded-2xl font-bold text-lg hover:scale-[1.03] transition-all duration-300 shadow-lg shadow-orange-500/20"
              >
                Book SUV <ArrowRight className="w-4 h-4 inline ml-1" />
              </a>
            </div>

            {/* Tempo Traveller Card */}
            <div className="group relative glass rounded-[2rem] p-8 transition-all duration-500 hover:border-yellow-500/30 hover:shadow-[0_0_60px_rgba(234,179,8,0.12)] hover:-translate-y-1">
              {/* ROUND TRIP ribbon */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                <div className="relative">
                  <div className="absolute inset-0 bg-yellow-500 blur-lg opacity-40" />
                  <span className="relative bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-[10px] font-black px-6 py-2 rounded-full uppercase tracking-[0.2em] shadow-lg">
                    Round Trip
                  </span>
                </div>
              </div>

              <div className="text-center mb-8 mt-2">
                <div className="text-5xl mb-3">&#128656;</div>
                <h3 className="text-2xl font-black">Tempo Traveller</h3>
                <p className="text-white/40 text-sm mt-1">12-Seater AC &middot; 12 Seater</p>
              </div>

              <div className="glass rounded-2xl p-6 mb-6 text-center border border-white/[0.04] group-hover:border-yellow-500/20 transition-all">
                <div className="text-xs text-white/30 uppercase tracking-wider mb-1">Round Trip Fare</div>
                <div className="text-3xl sm:text-4xl md:text-5xl font-black bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500">
                  {route.cabFares.tempo}
                </div>
                <div className="text-white/40 text-sm mt-2">&#8377;20/km &middot; {route.totalBillableKm} km billed</div>
              </div>

              {tripDays > 1 && (
                <div className="glass rounded-xl px-4 py-3 mb-6 text-center border border-yellow-500/10">
                  <span className="text-xs text-white/40">Per day ({tripDays} days): </span>
                  <span className="text-sm font-bold text-yellow-400">&#8377;{perDayTempo.toLocaleString('en-IN')}/day</span>
                </div>
              )}

              <div className="flex items-center justify-center gap-2 mb-6">
                <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 py-1.5 flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400 text-xs font-bold">10% Discount Applied</span>
                </div>
              </div>

              <div className="space-y-3 mb-8">
                {['AC Vehicle & GPS Tracking', 'Driver Stays With You', 'Fuel Included', 'Flexible Itinerary', '24/7 Support'].map((inc, j) => (
                  <div key={j} className="flex items-center gap-3 text-sm text-white/50 group-hover:text-white/70 transition-colors">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" /> {inc}
                  </div>
                ))}
              </div>

              <a
                href={`https://wa.me/917668570551?text=${encodeURIComponent(`Hi, I want to book a Tempo Traveller round trip from ${route.origin} to ${route.destination}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppClick('round_trip_fare_tempo', route.slug)}
                className="block w-full text-center bg-gradient-to-r from-yellow-500 to-orange-600 text-white py-4 rounded-2xl font-bold text-lg hover:scale-[1.03] transition-all duration-300 shadow-lg shadow-yellow-500/20"
              >
                Book Tempo <ArrowRight className="w-4 h-4 inline ml-1" />
              </a>
            </div>
          </div>

          <p className="mt-10 text-center text-white/20 text-sm">
            * Toll charges, state tax, parking, and driver night halt ({route.driverAllowance}) extra at actual.
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          3. DAY-WISE ITINERARY — Glass timeline with day nodes
         ═══════════════════════════════════════════════════════════════ */}
      {route.suggestedItinerary && route.suggestedItinerary.length > 0 && (
        <section className="py-16 md:py-24 lg:py-32 px-4 sm:px-6 relative">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_left,rgba(245,158,11,0.05),transparent_60%)]" />
          <div className="relative max-w-4xl mx-auto">
            <div className="text-center mb-20">
              <span className="inline-flex items-center gap-2 glass px-5 py-2.5 rounded-full text-amber-400 font-semibold text-xs tracking-widest uppercase mb-5">
                <Calendar className="w-3.5 h-3.5" /> Suggested Itinerary
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-black tracking-tight">Day-by-Day Plan</h2>
              <p className="text-white/40 mt-4 text-lg">
                {route.origin} &#10231; {route.destination} &mdash; {tripDays === 1 ? 'Same Day Return' : `${tripDays} Days`}
              </p>
            </div>

            {/* Glass timeline with glowing amber vertical line */}
            <div className="relative">
              {/* Glowing vertical connector */}
              <div className="absolute left-7 top-0 bottom-0 w-[2px]">
                <div className="absolute inset-0 bg-gradient-to-b from-amber-500/60 via-orange-500/40 to-yellow-500/20" />
                <div className="absolute inset-0 bg-gradient-to-b from-amber-500/30 via-orange-500/20 to-transparent blur-sm" />
              </div>

              {route.suggestedItinerary.map((item, i) => (
                <div key={i} className="relative flex items-start gap-6 mb-8 group">
                  {/* Day numbered circle */}
                  <div className="relative z-10 flex-shrink-0">
                    <div
                      className="w-14 h-14 rounded-full bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center shadow-[0_0_30px_rgba(245,158,11,0.4)] animate-timeline-pulse"
                      style={{ animationDelay: `${i * 0.5}s` }}
                    >
                      <span className="text-white font-black text-sm">Day {item.day}</span>
                    </div>
                  </div>
                  {/* Content card */}
                  <div className="glass glass-hover rounded-2xl px-6 py-5 flex-1">
                    <h3 className="font-black text-lg text-amber-300 mb-2">{item.title}</h3>
                    <p className="text-white/50 leading-relaxed text-[15px]">{item.description}</p>
                  </div>
                </div>
              ))}

              {/* Final "Return" node */}
              <div className="relative flex items-start gap-6">
                <div className="relative z-10 flex-shrink-0">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center shadow-[0_0_30px_rgba(16,185,129,0.4)]">
                    <CheckCircle2 className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="glass-strong rounded-2xl px-6 py-5 flex-1 border border-emerald-500/20">
                  <h3 className="font-black text-lg text-emerald-300">Return to {route.origin}</h3>
                  <p className="text-white/50 text-[15px]">Safe drop at your doorstep. Same driver, same car throughout the journey.</p>
                </div>
              </div>
            </div>

            {/* Customization note */}
            <div className="mt-10 glass rounded-2xl p-6 border border-amber-500/15 text-center">
              <p className="text-white/40 text-sm">
                <Sparkles className="w-4 h-4 text-amber-400 inline mr-2" />
                This itinerary is fully customizable. Call{' '}
                <a href="tel:+917668570551" onClick={() => trackPhoneCall('round_trip_itinerary')} className="text-amber-400 font-bold hover:text-amber-300 transition-colors">
                  7668570551
                </a>{' '}
                to tailor it to your needs.
              </p>
            </div>
          </div>
        </section>
      )}

      {/* ═══════════════════════════════════════════════════════════════
          4. INCLUSIONS vs EXCLUSIONS — Side-by-side glass panels
         ═══════════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 lg:py-32 px-4 sm:px-6 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_right,rgba(217,119,6,0.04),transparent_60%)]" />
        <div className="relative max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <span className="inline-flex items-center gap-2 glass px-5 py-2.5 rounded-full text-orange-400 font-semibold text-xs tracking-widest uppercase mb-5">
              <Shield className="w-3.5 h-3.5" /> Full Transparency
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-black tracking-tight">Inclusions &amp; Exclusions</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Inclusions — green checks */}
            <div className="glass-strong rounded-[2rem] p-8 md:p-10 relative overflow-hidden border-glow-gold">
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent" />
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6 text-emerald-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-emerald-300">Included</h3>
                  <p className="text-xs text-emerald-400/60">In your round trip fare</p>
                </div>
              </div>
              <div className="space-y-4">
                {route.inclusions.map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-white/60 hover:text-white/80 transition-colors">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                    <span className="text-[15px]">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Exclusions — red X */}
            <div className="glass-strong rounded-[2rem] p-8 md:p-10 relative overflow-hidden border-glow-gold">
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-rose-500/20 to-transparent" />
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-2xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center">
                  <XCircle className="w-6 h-6 text-rose-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-rose-300">Not Included</h3>
                  <p className="text-xs text-rose-400/60">Paid separately at actual</p>
                </div>
              </div>
              <div className="space-y-4">
                {route.exclusions.map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-white/60 hover:text-white/80 transition-colors">
                    <MinusCircle className="w-5 h-5 text-rose-400/60 flex-shrink-0" />
                    <span className="text-[15px]">{item}</span>
                  </div>
                ))}
              </div>

              {/* Driver allowance + night halt callout */}
              {route.nightHalt && (
                <div className="mt-6 rounded-xl bg-amber-500/5 border border-amber-500/15 p-4">
                  <div className="flex items-center gap-2 text-amber-400 text-sm font-medium">
                    <Star className="w-4 h-4" />
                    <span>Driver Night Halt: {route.driverAllowance}</span>
                  </div>
                  <p className="text-xs text-white/40 mt-1 ml-6">Required for overnight stays at {route.destination}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          5. WHY ROUND TRIP? — 4 benefit glass cards
         ═══════════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 lg:py-32 px-4 sm:px-6 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(245,158,11,0.04),transparent_60%)]" />
        <div className="relative max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <span className="inline-flex items-center gap-2 glass px-5 py-2.5 rounded-full text-yellow-400 font-semibold text-xs tracking-widest uppercase mb-5">
              <Sparkles className="w-3.5 h-3.5" /> The Smart Choice
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-black tracking-tight">Why Book a Round Trip?</h2>
            <p className="text-white/40 mt-4 text-lg">More comfort, more flexibility, better value</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Same Driver */}
            <div className="group glass glass-hover rounded-[2rem] p-8 transition-all duration-500">
              <div className="w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:shadow-lg transition-all duration-300">
                <Users className="w-7 h-7 text-amber-400" />
              </div>
              <h3 className="text-xl font-black mb-3 text-white group-hover:text-amber-200 transition-colors">Same Driver, Entire Trip</h3>
              <p className="text-white/40 leading-relaxed text-[15px]">
                Your dedicated driver stays with you from pickup to final drop. No strangers, no rebooking.
              </p>
            </div>

            {/* No Rebooking */}
            <div className="group glass glass-hover rounded-[2rem] p-8 transition-all duration-500">
              <div className="w-14 h-14 rounded-2xl bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:shadow-lg transition-all duration-300">
                <Calendar className="w-7 h-7 text-yellow-400" />
              </div>
              <h3 className="text-xl font-black mb-3 text-white group-hover:text-yellow-200 transition-colors">No Rebooking Hassle</h3>
              <p className="text-white/40 leading-relaxed text-[15px]">
                One booking covers your entire round trip. No need to search for return cabs at {route.destination}.
              </p>
            </div>

            {/* Flexible Schedule */}
            <div className="group glass glass-hover rounded-[2rem] p-8 transition-all duration-500">
              <div className="w-14 h-14 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:shadow-lg transition-all duration-300">
                <Clock className="w-7 h-7 text-orange-400" />
              </div>
              <h3 className="text-xl font-black mb-3 text-white group-hover:text-orange-200 transition-colors">Flexible Schedule</h3>
              <p className="text-white/40 leading-relaxed text-[15px]">
                Change plans on the go. Add stops, extend stays, or leave early. Your trip, your rules.
              </p>
            </div>

            {/* Cost Effective */}
            <div className="group glass glass-hover rounded-[2rem] p-8 transition-all duration-500">
              <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:shadow-lg transition-all duration-300">
                <Zap className="w-7 h-7 text-emerald-400" />
              </div>
              <h3 className="text-xl font-black mb-3 text-white group-hover:text-emerald-200 transition-colors">Cost Effective</h3>
              <p className="text-white/40 leading-relaxed text-[15px]">
                Flat 10% round trip discount vs two one-way bookings. Save more on multi-day trips.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          6. FAQ ACCORDION — Amber-themed glass accordion
         ═══════════════════════════════════════════════════════════════ */}
      {route.faqs && route.faqs.length > 0 && (
        <section className="py-16 md:py-24 lg:py-32 px-4 sm:px-6 relative">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(245,158,11,0.05),transparent_60%)]" />
          <div className="relative max-w-4xl mx-auto">
            <div className="text-center mb-20">
              <span className="inline-flex items-center gap-2 glass px-5 py-2.5 rounded-full text-amber-400 font-semibold text-xs tracking-widest uppercase mb-5">
                <Zap className="w-3.5 h-3.5" /> Got Questions?
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-black tracking-tight">Common Questions</h2>
              <p className="text-white/40 mt-4 text-lg">{route.origin} to {route.destination} round trip FAQs</p>
            </div>

            <div className="space-y-4">
              {route.faqs.map((faq, i) => (
                <div
                  key={i}
                  className={`glass rounded-2xl transition-all duration-500 overflow-hidden ${
                    openFaq === i
                      ? 'border-amber-500/30 shadow-[0_0_30px_rgba(245,158,11,0.08)] bg-white/[0.05]'
                      : 'hover:border-amber-500/20'
                  }`}
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between p-6 md:p-7 text-left group focus:outline-none focus:ring-2 focus:ring-amber-500/50 rounded-2xl"
                    aria-expanded={openFaq === i}
                    aria-label={openFaq === i ? 'Collapse answer' : 'Expand answer'}
                  >
                    <span className="font-semibold text-white/80 pr-8 group-hover:text-white transition-colors">
                      {faq.question}
                    </span>
                    <div className={`w-8 h-8 rounded-full glass flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                      openFaq === i ? 'bg-amber-500/20 border-amber-500/30 rotate-180' : 'group-hover:border-white/20'
                    }`}>
                      <ChevronDown className="w-4 h-4 text-amber-400" />
                    </div>
                  </button>
                  <div className={`overflow-hidden transition-all duration-500 ${
                    openFaq === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    <div className="px-6 md:px-7 pb-6 md:pb-7">
                      <div className="h-px bg-gradient-to-r from-transparent via-amber-500/20 to-transparent mb-5" />
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
          7. RELATED ROUTES — Glass cards linking to other round trips
         ═══════════════════════════════════════════════════════════════ */}
      {relatedRoutes && relatedRoutes.length > 0 && (
        <section className="py-16 md:py-24 lg:py-32 px-4 sm:px-6 relative">
          <div className="relative max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-flex items-center gap-2 glass px-5 py-2.5 rounded-full text-amber-400 font-semibold text-xs tracking-widest uppercase mb-5">
                <Route className="w-3.5 h-3.5" /> Explore More
              </span>
              <h2 className="text-3xl md:text-5xl font-black">Related Round Trips</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {relatedRoutes.map((r, i) => (
                <Link
                  key={i}
                  href={`/round-trip/${r.slug}`}
                  className="group glass rounded-2xl p-6 transition-all duration-500 hover:border-amber-500/30 hover:shadow-[0_0_40px_rgba(245,158,11,0.08)] hover:-translate-y-1"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-lg font-black">{r.origin}</span>
                    <div className="flex-1 h-[2px] bg-gradient-to-r from-amber-500/30 to-orange-500/30 rounded-full relative">
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-amber-500/60 text-[10px]">&#10231;</div>
                    </div>
                    <span className="text-lg font-black text-amber-400">{r.destination}</span>
                  </div>

                  <div className="flex items-center gap-4 text-sm text-white/40 mb-2">
                    <span className="flex items-center gap-1.5">
                      <Route className="w-3.5 h-3.5 text-amber-500/60" /> {r.totalRoundTripKm} km RT
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-amber-500/60" /> {r.duration}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-white/30">
                    <Car className="w-3.5 h-3.5 text-amber-500/40" />
                    <span>From {r.cabFares.sedan}</span>
                  </div>

                  <div className="mt-4 text-sm font-bold text-amber-400 flex items-center gap-1 opacity-0 group-hover:opacity-100 translate-x-0 group-hover:translate-x-1 transition-all duration-300">
                    View Round Trip <ChevronRight className="w-3.5 h-3.5" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ═══════════════════════════════════════════════════════════════
          8. FINAL CTA — Amber neon glow glass panel
         ═══════════════════════════════════════════════════════════════ */}
      <section className="py-28 md:py-36 px-4 sm:px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-950/30 via-orange-950/40 to-amber-950/30" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-[200px]" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />

        <div className="relative max-w-4xl mx-auto text-center">
          <div className="glass-strong rounded-[2.5rem] p-12 md:p-16 border-glow-gold relative overflow-hidden">
            {/* Inner glow border lines */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/40 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500/30 to-transparent" />
            <div className="absolute top-0 bottom-0 left-0 w-px bg-gradient-to-b from-transparent via-amber-500/20 to-transparent" />
            <div className="absolute top-0 bottom-0 right-0 w-px bg-gradient-to-b from-transparent via-orange-500/20 to-transparent" />

            <div className="inline-flex items-center gap-2 glass px-5 py-2 rounded-full mb-8 border border-amber-500/25">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span className="text-xs font-bold text-amber-300 uppercase tracking-wider">Book Today</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-black mb-4 tracking-tight">Book Your Round Trip</h2>
            <p className="text-white/40 text-xl mb-3">
              {route.origin} &#10231; {route.destination} &middot; {route.totalRoundTripKm} km &middot; From{' '}
              <span className="text-amber-400 font-bold">{route.cabFares.sedan}</span>
            </p>
            <p className="text-white/20 text-sm mb-12">
              Driver stays with you &middot; 10% discount &middot; AC vehicles &middot; Verified drivers &middot; 4.9&#9733; rated
            </p>

            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <a
                href="tel:+917668570551"
                onClick={() => trackPhoneCall('round_trip_cta', '+917668570551')}
                className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-amber-500 via-orange-500 to-yellow-600 text-white px-12 py-5 rounded-2xl font-bold text-lg shadow-[0_0_50px_rgba(245,158,11,0.35)] hover:shadow-[0_0_80px_rgba(245,158,11,0.5)] hover:scale-105 transition-all duration-300"
              >
                <Phone className="w-5 h-5" /> Call Now: 7668570551
              </a>
              <a
                href={`https://wa.me/917668570551?text=${encodeURIComponent(whatsappMsg)}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppClick('round_trip_cta', whatsappMsg)}
                className="inline-flex items-center justify-center gap-3 bg-emerald-500/10 text-emerald-300 px-12 py-5 rounded-2xl font-bold text-lg border border-emerald-500/25 hover:bg-emerald-500/20 hover:border-emerald-400/50 hover:shadow-[0_0_30px_rgba(16,185,129,0.15)] transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.611.611l4.458-1.495A11.943 11.943 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.318 0-4.468-.67-6.29-1.823l-.451-.27-2.649.888.888-2.649-.27-.451A9.965 9.965 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/></svg>
                WhatsApp Booking <ArrowRight className="w-5 h-5" />
              </a>
            </div>

            {/* Trust signals */}
            <div className="flex flex-wrap items-center justify-center gap-6 mt-10 text-xs text-white/30">
              <span className="flex items-center gap-1.5"><Shield className="w-3.5 h-3.5 text-amber-500/50" /> Verified Drivers</span>
              <span className="flex items-center gap-1.5"><Star className="w-3.5 h-3.5 text-amber-500/50" /> 4.9 Rating</span>
              <span className="flex items-center gap-1.5"><Users className="w-3.5 h-3.5 text-amber-500/50" /> 10,000+ Trips</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-amber-500/50" /> GPS Tracked</span>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile spacer for sticky bar */}
      <div className="h-16 md:hidden" />
    </div>
  );
}
