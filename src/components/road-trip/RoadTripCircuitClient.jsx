'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import {
  Phone, ArrowRight, ChevronDown, Shield, Clock, Car, CheckCircle2,
  Route, MapPin, Navigation, Star, Users, Coffee, Calendar,
  Mountain, Sparkles, Award, Compass, ChevronRight, Fuel,
  ShieldCheck, Headphones, Sun, MapPinned, Zap, CheckCircle
} from '@/components/ui/icons';
import { trackWhatsAppClick, trackPhoneCall, trackButtonClick } from '@/utilis/analytics';

/* ────────────────────────────── tiny Moon icon ─────────────────────────── */
function MoonIcon({ className }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
    </svg>
  );
}

/* ──────────────────────── inclusions data ──────────────────────────────── */
const INCLUSIONS = [
  { icon: Car, label: 'AC Vehicle', desc: 'Well-maintained sedan or SUV with AC' },
  { icon: Users, label: 'Expert Driver', desc: 'Experienced hill & highway driver' },
  { icon: Fuel, label: 'Fuel Included', desc: 'All fuel charges covered in fare' },
  { icon: Navigation, label: 'GPS Tracking', desc: 'Real-time GPS tracking for safety' },
  { icon: Headphones, label: '24/7 Support', desc: 'Round-the-clock trip assistance' },
  { icon: ShieldCheck, label: 'Insurance', desc: 'Comprehensive vehicle insurance' },
];

const EXCLUSIONS = [
  'Toll charges & state tax',
  'Parking & entry fees',
  'Driver night allowance (₹300/night)',
  'Personal expenses & meals',
];

/* ═══════════════════════ MAIN COMPONENT ═══════════════════════════════ */
export default function RoadTripCircuitClient({ trip, relatedTrips }) {
  const [openFaq, setOpenFaq] = useState(null);
  const [activeStop, setActiveStop] = useState(0);
  const [expandedStops, setExpandedStops] = useState(new Set([0]));
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const toggleStop = useCallback((i) => {
    setExpandedStops((prev) => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });
    setActiveStop(i);
  }, []);

  const whatsappMsg = `Hi, I want to book a cab for ${trip.name} (${trip.totalDistance} km, ${trip.totalDays} days). Please share details.`;
  const totalNights = trip.stops.reduce((sum, s) => sum + s.nights, 0);

  return (
    <div className="min-h-screen bg-stone-950 text-white overflow-hidden">

      {/* ──────────── CSS Animations ──────────── */}
      <style jsx global>{`
        @keyframes shimmer{0%{background-position:-200% 0}100%{background-position:200% 0}}
        @keyframes float{0%,100%{transform:translateY(0)}50%{transform:translateY(-14px)}}
        @keyframes float-slow{0%,100%{transform:translateY(0) rotate(0deg)}50%{transform:translateY(-20px) rotate(3deg)}}
        @keyframes pulse-glow{0%,100%{box-shadow:0 0 30px rgba(251,113,133,.2),0 0 60px rgba(249,115,22,.1)}50%{box-shadow:0 0 60px rgba(251,113,133,.5),0 0 120px rgba(249,115,22,.3)}}
        @keyframes gradient-x{0%,100%{background-position:0% 50%}50%{background-position:100% 50%}}
        @keyframes morph{0%,100%{border-radius:60% 40% 30% 70%/60% 30% 70% 40%}50%{border-radius:30% 60% 70% 40%/50% 60% 30% 60%}}
        @keyframes dash-march{0%{stroke-dashoffset:0}100%{stroke-dashoffset:-30}}
        @keyframes glow-pulse{0%,100%{opacity:.5;transform:scale(1)}50%{opacity:1;transform:scale(1.05)}}
        @keyframes reveal-up{from{opacity:0;transform:translateY(40px)}to{opacity:1;transform:translateY(0)}}
        @keyframes orbit{0%{transform:rotate(0deg) translateX(60px) rotate(0deg)}100%{transform:rotate(360deg) translateX(60px) rotate(-360deg)}}
        @keyframes line-draw{from{stroke-dashoffset:100%}to{stroke-dashoffset:0}}
        .animate-shimmer{background-size:200% 100%;animation:shimmer 2.5s linear infinite}
        .animate-float{animation:float 4s ease-in-out infinite}
        .animate-float-slow{animation:float-slow 6s ease-in-out infinite}
        .animate-pulse-glow{animation:pulse-glow 3s ease-in-out infinite}
        .animate-gradient-x{background-size:200% 200%;animation:gradient-x 6s ease infinite}
        .animate-morph{animation:morph 8s ease-in-out infinite}
        .animate-dash{animation:dash-march 1.5s linear infinite}
        .animate-glow{animation:glow-pulse 2s ease-in-out infinite}
        .animate-reveal{animation:reveal-up .8s ease-out forwards}
        .glass-card{background:rgba(255,255,255,.03);backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px);border:1px solid rgba(255,255,255,.06)}
        .glass-card-hover:hover{background:rgba(255,255,255,.06);border-color:rgba(251,113,133,.3);box-shadow:0 8px 32px rgba(251,113,133,.1),inset 0 1px 0 rgba(255,255,255,.05);transform:translateY(-2px)}
        .glass-strong{background:rgba(255,255,255,.05);backdrop-filter:blur(40px);-webkit-backdrop-filter:blur(40px);border:1px solid rgba(255,255,255,.08)}
        .glass-neon{box-shadow:0 0 15px rgba(251,113,133,.15),0 0 45px rgba(251,113,133,.05),inset 0 1px 0 rgba(255,255,255,.05)}
        .text-glow{text-shadow:0 0 40px rgba(251,113,133,.5),0 0 80px rgba(249,115,22,.3)}
        .border-glow{box-shadow:inset 0 0 20px rgba(251,113,133,.1),0 0 40px rgba(251,113,133,.05)}
        .rose-neon-btn{box-shadow:0 0 30px rgba(251,113,133,.25),0 0 80px rgba(251,113,133,.1)}
        .rose-neon-btn:hover{box-shadow:0 0 50px rgba(251,113,133,.45),0 0 120px rgba(249,115,22,.2)}
      `}</style>

      {/* ═══════════════════ 1. HERO SECTION ═══════════════════════════ */}
      <section className="relative min-h-[95vh] flex items-center overflow-hidden">
        {/* Layered backgrounds */}
        <div className="absolute inset-0 bg-gradient-to-br from-stone-950 via-rose-950/50 to-orange-950/30 animate-gradient-x" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(251,113,133,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(249,115,22,0.1),transparent_50%)]" />
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.5) 1px, transparent 0)', backgroundSize: '32px 32px' }} />

        {/* Animated orbs */}
        <div className="absolute top-[15%] left-[5%] w-80 h-80 bg-rose-500/15 rounded-full blur-[100px] animate-morph" />
        <div className="absolute bottom-[10%] right-[5%] w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-[150px] animate-morph" style={{ animationDelay: '-4s' }} />
        <div className="absolute top-[60%] left-[50%] w-60 h-60 bg-red-500/8 rounded-full blur-[80px] animate-morph" style={{ animationDelay: '-2s' }} />

        {/* Floating distance badge (desktop) */}
        <div className="absolute top-28 right-[8%] hidden lg:block animate-float">
          <div className="relative">
            <div className="absolute -inset-12 bg-rose-500/15 rounded-full blur-[60px] animate-pulse" />
            <div className="relative glass-strong rounded-full w-44 h-44 flex items-center justify-center animate-pulse-glow border-2 border-rose-500/20">
              <div className="text-center relative z-10">
                <div className="text-4xl font-black text-white text-glow">{trip.totalDistance}</div>
                <div className="text-[10px] font-bold text-rose-300/80 uppercase tracking-[0.2em]">Kilometers</div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating days badge (desktop) */}
        <div className="absolute bottom-40 right-[15%] hidden xl:block animate-float-slow" style={{ animationDelay: '-2s' }}>
          <div className="glass-strong rounded-2xl px-6 py-4 border border-orange-500/20 glass-neon">
            <div className="text-xs text-orange-400 uppercase tracking-wider font-bold">Circuit</div>
            <div className="text-2xl font-black text-orange-300">{trip.totalDays}-Day Trip</div>
          </div>
        </div>

        {/* Bottom wave separator */}
        <div className="absolute -bottom-1 left-0 right-0 h-40">
          <svg viewBox="0 0 1440 120" className="w-full h-full" preserveAspectRatio="none">
            <path d="M0,80 C240,120 480,20 720,60 C960,100 1200,30 1440,70 L1440,120 L0,120 Z" fill="#0c0a09" />
            <path d="M0,90 C360,110 720,40 1080,80 C1260,95 1380,85 1440,80 L1440,120 L0,120 Z" fill="#0c0a09" fillOpacity="0.5" />
          </svg>
        </div>

        {/* Hero content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-32">
          {/* Badge */}
          <div className={`inline-flex items-center gap-2.5 glass-strong px-6 py-3 rounded-full mb-10 border border-rose-500/25 animate-glow transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            <Compass className="w-4 h-4 text-rose-400" />
            <span className="text-rose-300 font-semibold text-sm tracking-wide">Road Trip Circuit Guide 2026</span>
            <div className="w-1.5 h-1.5 bg-orange-400 rounded-full animate-pulse" />
          </div>

          {/* Title */}
          <h1 className={`text-3xl sm:text-5xl md:text-7xl lg:text-9xl font-black tracking-tight mb-6 max-w-5xl transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-rose-400 via-orange-400 to-amber-400 animate-gradient-x">{trip.name}</span>
          </h1>

          {/* Tagline */}
          <p className={`text-xl md:text-2xl text-white/40 mb-4 max-w-3xl font-medium transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {trip.tagline}
          </p>

          {/* Pricing teaser */}
          <p className={`text-lg text-white/40 mb-8 max-w-2xl transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            {trip.totalDistance} km circuit in {trip.totalDays} days &mdash; Cab from <span className="text-rose-400 font-black">&#8377;{trip.totalCost.sedan.toLocaleString('en-IN')}</span>
          </p>

          {/* Route pills */}
          <div className={`flex flex-wrap items-center gap-2 mb-10 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            {trip.stops.map((stop, i) => (
              <span key={i} className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 glass-card px-4 py-2 rounded-full text-sm font-medium text-white/70 hover:border-rose-500/30 transition-all">
                  <MapPin className="w-3.5 h-3.5 text-rose-400" />
                  {stop.city}
                  {stop.nights > 0 && <span className="text-rose-400/70 text-xs">({stop.nights}N)</span>}
                </span>
                {i < trip.stops.length - 1 && <ArrowRight className="w-4 h-4 text-orange-500/40" />}
              </span>
            ))}
          </div>

          {/* Info pills */}
          <div className={`flex flex-wrap gap-3 mb-12 transition-all duration-1000 delay-[600ms] ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            {[
              { icon: Route, text: `${trip.totalDistance} km total`, accent: 'rose' },
              { icon: Calendar, text: `${trip.totalDays} days / ${totalNights} nights`, accent: 'orange' },
              { icon: Car, text: `From ₹${trip.totalCost.sedan.toLocaleString('en-IN')}`, accent: 'rose' },
              { icon: Star, text: '4.9★ (10,000+ reviews)', accent: 'yellow', special: true },
            ].map((pill, i) => (
              <span key={i} className={`inline-flex items-center gap-2 backdrop-blur-2xl px-5 py-3 rounded-2xl text-sm font-medium transition-all duration-300 hover:scale-105 ${pill.special ? 'bg-yellow-500/10 border border-yellow-500/25 text-yellow-300' : 'glass-card border-white/10 text-white/70 hover:border-rose-500/30'}`}>
                <pill.icon className={`w-4 h-4 ${pill.special ? 'text-yellow-400' : pill.accent === 'orange' ? 'text-orange-400' : 'text-rose-400'}`} /> {pill.text}
              </span>
            ))}
          </div>

          {/* CTA buttons */}
          <div className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <Link
              onClick={() => trackPhoneCall('road_trip_hero', '+917668570551')}
              href="tel:+917668570551"
              className="group inline-flex items-center gap-3 bg-gradient-to-r from-rose-500 via-orange-500 to-amber-500 text-white px-10 py-5 rounded-2xl font-bold text-lg rose-neon-btn hover:scale-105 transition-all duration-300"
            >
              <Phone className="w-5 h-5 group-hover:animate-bounce" /> Call: 7668570551
            </Link>
            <Link
              onClick={() => trackWhatsAppClick('road_trip_hero', whatsappMsg, trip.name)}
              href={`https://wa.me/917668570551?text=${encodeURIComponent(whatsappMsg)}`}
              className="group inline-flex items-center gap-3 glass-strong text-white px-10 py-5 rounded-2xl font-bold text-lg border border-white/15 hover:border-rose-500/40 hover:shadow-[0_0_30px_rgba(251,113,133,.15)] transition-all duration-300"
            >
              <svg className="w-5 h-5 text-emerald-400" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.611.611l4.458-1.495A11.943 11.943 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.318 0-4.468-.67-6.29-1.823l-.451-.27-2.649.888.888-2.649-.27-.451A9.965 9.965 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/></svg>
              WhatsApp Quote <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════ SOCIAL PROOF BAR ═══════════════════════════════ */}
      <section className="relative py-8 border-y border-rose-500/10">
        <div className="absolute inset-0 bg-gradient-to-r from-stone-950/80 via-rose-950/20 to-stone-950/80" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap justify-center gap-10 md:gap-20">
            {[
              { value: '10,000+', label: 'Happy Travelers', icon: Users },
              { value: '4.9★', label: 'Google Rating', icon: Star },
              { value: '24/7', label: 'Trip Support', icon: Clock },
              { value: '500+', label: 'Routes Covered', icon: Route },
            ].map((stat, i) => (
              <div key={i} className="group text-center flex items-center gap-3 cursor-default">
                <div className="w-10 h-10 rounded-xl glass-card flex items-center justify-center group-hover:border-rose-500/30 transition-all">
                  <stat.icon className="w-5 h-5 text-rose-400" />
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

      {/* ═══════════════ 2. CIRCUIT MAP ═══════════════════════════════ */}
      <section className="py-24 md:py-32 px-4 sm:px-6 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(251,113,133,0.06),transparent_70%)]" />
        <div className="relative max-w-6xl mx-auto">
          {/* Section heading */}
          <div className="text-center mb-20">
            <span className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full text-rose-400 font-semibold text-xs tracking-widest uppercase mb-4">
              <Route className="w-3.5 h-3.5" /> Circuit Route Map
            </span>
            <h2 className="text-4xl md:text-6xl font-black tracking-tight">Your Journey Map</h2>
            <p className="text-white/40 mt-4 text-lg">{trip.stops.length} stops across {trip.totalDistance} km &mdash; every moment planned</p>
          </div>

          {/* Connected circular nodes (horizontal on desktop, vertical on mobile) */}
          <div className="hidden lg:block mb-20">
            <div className="relative flex items-center justify-between max-w-5xl mx-auto">
              {/* Rose connector line behind the nodes */}
              <div className="absolute top-1/2 left-[10%] right-[10%] h-[2px] -translate-y-1/2">
                <div className="w-full h-full bg-gradient-to-r from-rose-500/40 via-orange-500/30 to-rose-500/40 rounded-full" />
                {/* Animated dashes */}
                <svg className="absolute inset-0 w-full h-full overflow-visible" preserveAspectRatio="none">
                  <line x1="0" y1="50%" x2="100%" y2="50%" stroke="rgba(251,113,133,0.5)" strokeWidth="2" strokeDasharray="8 8" className="animate-dash" />
                </svg>
              </div>

              {trip.stops.map((stop, i) => (
                <div key={i} className="relative flex flex-col items-center z-10" style={{ flex: 1 }}>
                  {/* Glow behind active node */}
                  {activeStop === i && (
                    <div className="absolute -inset-6 bg-rose-500/10 rounded-full blur-[30px] animate-pulse" />
                  )}
                  {/* Node circle */}
                  <button
                    onClick={() => { setActiveStop(i); }}
                    className={`relative w-20 h-20 rounded-full flex items-center justify-center transition-all duration-500 cursor-pointer ${
                      activeStop === i
                        ? 'bg-gradient-to-br from-rose-500 to-orange-500 scale-110 shadow-[0_0_30px_rgba(251,113,133,.35)]'
                        : 'glass-strong border-2 border-rose-500/20 hover:border-rose-400/50 hover:scale-105'
                    }`}
                  >
                    <span className={`text-xl font-black ${activeStop === i ? 'text-white' : 'text-white/60'}`}>{i + 1}</span>
                  </button>
                  {/* City name */}
                  <div className="mt-4 text-center">
                    <div className={`font-bold text-base transition-colors ${activeStop === i ? 'text-rose-400' : 'text-white/70'}`}>{stop.city}</div>
                    {stop.nights > 0 && (
                      <div className="text-xs text-white/30 mt-0.5">{stop.nights}N</div>
                    )}
                    {/* Top highlight */}
                    <div className="text-[11px] text-white/35 mt-1 max-w-[120px] truncate">{stop.highlights[0]}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile: vertical connected nodes */}
          <div className="lg:hidden mb-16">
            <div className="relative flex flex-col items-start pl-10">
              {/* Vertical connector */}
              <div className="absolute left-[27px] top-6 bottom-6 w-[2px] bg-gradient-to-b from-rose-500/40 via-orange-500/30 to-rose-500/40">
                <svg className="absolute inset-0 w-full h-full overflow-visible">
                  <line x1="50%" y1="0" x2="50%" y2="100%" stroke="rgba(251,113,133,0.5)" strokeWidth="2" strokeDasharray="8 8" className="animate-dash" />
                </svg>
              </div>

              {trip.stops.map((stop, i) => (
                <div key={i} className="relative flex items-center gap-5 mb-8 last:mb-0">
                  <button
                    onClick={() => setActiveStop(i)}
                    className={`relative w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                      activeStop === i
                        ? 'bg-gradient-to-br from-rose-500 to-orange-500 shadow-[0_0_20px_rgba(251,113,133,.3)]'
                        : 'glass-strong border border-rose-500/20'
                    }`}
                  >
                    <span className={`font-black ${activeStop === i ? 'text-white' : 'text-white/50'}`}>{i + 1}</span>
                  </button>
                  <div>
                    <div className={`font-bold ${activeStop === i ? 'text-rose-400' : 'text-white/70'}`}>{stop.city}</div>
                    <div className="text-xs text-white/30">
                      {stop.nights > 0 ? `${stop.nights} Night${stop.nights > 1 ? 's' : ''}` : 'Transit'}
                      {' · '}{stop.highlights[0]}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Active stop detail preview */}
          <div className="glass-strong rounded-3xl p-8 md:p-10 border border-rose-500/15 border-glow max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-rose-500 to-orange-500 flex items-center justify-center text-xl font-black text-white shadow-lg shadow-rose-500/20">
                {activeStop + 1}
              </div>
              <div>
                <h3 className="text-2xl font-black">{trip.stops[activeStop]?.city}</h3>
                <p className="text-white/40 text-sm">
                  Stop {activeStop + 1} of {trip.stops.length}
                  {trip.stops[activeStop]?.nights > 0 && (
                    <> &middot; <span className="text-rose-400">{trip.stops[activeStop].nights} Night{trip.stops[activeStop].nights > 1 ? 's' : ''}</span></>
                  )}
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {trip.stops[activeStop]?.highlights.map((h, j) => (
                <div key={j} className="flex items-start gap-2.5 text-sm text-white/55">
                  <CheckCircle2 className="w-4 h-4 text-rose-400/70 flex-shrink-0 mt-0.5" />
                  <span>{h}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ 3. STOP DETAIL CARDS (Expandable) ════════════ */}
      <section className="py-24 md:py-32 px-4 sm:px-6 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(249,115,22,0.05),transparent_60%)]" />
        <div className="relative max-w-5xl mx-auto">
          <div className="text-center mb-20">
            <span className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full text-orange-400 font-semibold text-xs tracking-widest uppercase mb-4">
              <MapPinned className="w-3.5 h-3.5" /> Detailed Itinerary
            </span>
            <h2 className="text-4xl md:text-6xl font-black tracking-tight">Every Stop Explored</h2>
            <p className="text-white/40 mt-4 text-lg">Click to expand each stop and see what awaits</p>
          </div>

          <div className="space-y-5">
            {trip.stops.map((stop, i) => {
              const isOpen = expandedStops.has(i);
              return (
                <div
                  key={i}
                  className={`glass-card rounded-3xl overflow-hidden transition-all duration-500 ${
                    isOpen ? 'ring-2 ring-rose-500/25 shadow-[0_0_40px_rgba(251,113,133,.08)]' : 'hover:border-rose-500/20'
                  }`}
                >
                  {/* Header (always visible) */}
                  <button
                    onClick={() => toggleStop(i)}
                    className="w-full flex items-center gap-5 p-6 md:p-8 text-left group"
                  >
                    {/* Number badge */}
                    <div className={`w-12 h-12 md:w-14 md:h-14 rounded-2xl flex items-center justify-center text-lg font-black transition-all duration-300 flex-shrink-0 ${
                      isOpen
                        ? 'bg-gradient-to-br from-rose-500 to-orange-500 text-white shadow-lg shadow-rose-500/20'
                        : 'bg-white/5 text-white/40 border border-white/10 group-hover:border-rose-500/30'
                    }`}>
                      {i + 1}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 flex-wrap">
                        <h3 className="text-xl md:text-2xl font-black">{stop.city}</h3>
                        {stop.nights > 0 ? (
                          <span className="inline-flex items-center gap-1 bg-rose-500/10 border border-rose-500/20 text-rose-400 px-3 py-1 rounded-full text-xs font-bold">
                            <MoonIcon className="w-3 h-3" /> {stop.nights} {stop.nights === 1 ? 'Night' : 'Nights'}
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1 bg-white/5 border border-white/10 text-white/40 px-3 py-1 rounded-full text-xs font-bold">
                            Transit
                          </span>
                        )}
                        <span className="text-xs text-white/35">{stop.highlights.length} attractions</span>
                      </div>
                      {!isOpen && (
                        <p className="text-white/40 text-sm mt-1 truncate">{stop.highlights.slice(0, 3).join(' · ')}</p>
                      )}
                    </div>

                    <ChevronDown className={`w-5 h-5 text-white/30 transition-transform duration-300 flex-shrink-0 ${isOpen ? 'rotate-180 text-rose-400' : ''}`} />
                  </button>

                  {/* Expandable content */}
                  <div className={`transition-all duration-500 ease-in-out overflow-hidden ${isOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="px-6 md:px-8 pb-8 pt-0">
                      <div className="border-t border-white/5 pt-6">
                        <h4 className="text-xs text-rose-400 uppercase tracking-widest font-bold mb-4">Things to Experience</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {stop.highlights.map((h, j) => (
                            <div key={j} className="flex items-start gap-3 glass-card rounded-xl p-3 hover:border-rose-500/20 transition-all">
                              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-rose-500/15 to-orange-500/15 border border-rose-500/15 flex items-center justify-center flex-shrink-0">
                                <Sparkles className="w-4 h-4 text-rose-400/70" />
                              </div>
                              <span className="text-sm text-white/60 pt-1">{h}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════ 4. TRIP COST / PRICING ═══════════════════════ */}
      <section className="py-24 md:py-32 px-4 sm:px-6 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(249,115,22,0.08),transparent_60%)]" />
        <div className="relative max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <span className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full text-orange-400 font-semibold text-xs tracking-widest uppercase mb-4">
              <Car className="w-3.5 h-3.5" /> Trip Pricing
            </span>
            <h2 className="text-4xl md:text-6xl font-black tracking-tight">Book Your Road Trip</h2>
            <p className="text-white/40 mt-4 text-lg">All fares include driver, fuel &amp; AC &mdash; No hidden charges</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-3xl mx-auto">
            {[
              { name: 'Sedan', sub: 'Swift Dzire / Etios', fare: trip.totalCost.sedan, seats: '4', gradient: 'from-rose-500 to-orange-500', hoverBorderClass: 'hover:border-rose-500/30', iconBgClass: 'bg-gradient-to-br from-rose-500/10 to-orange-500/10', iconBorderClass: 'border-rose-500/20', iconTextClass: 'text-rose-400', perKm: '₹11/km', popular: false },
              { name: 'SUV', sub: 'Innova / Ertiga', fare: trip.totalCost.suv, seats: '6-7', gradient: 'from-orange-500 to-amber-500', hoverBorderClass: 'hover:border-orange-500/30', iconBgClass: 'bg-gradient-to-br from-orange-500/10 to-amber-500/10', iconBorderClass: 'border-orange-500/20', iconTextClass: 'text-orange-400', perKm: '₹14/km', popular: true },
            ].map((v, i) => (
              <div key={i} className={`group relative glass-card rounded-[2rem] p-8 md:p-10 transition-all duration-500 ${v.hoverBorderClass} ${v.popular ? 'ring-2 ring-orange-500/25 shadow-[0_0_40px_rgba(249,115,22,.1)]' : ''}`}>
                {v.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                    <span className="relative bg-gradient-to-r from-orange-500 to-amber-500 text-white text-[10px] font-black px-6 py-2 rounded-full uppercase tracking-[0.2em] shadow-lg">Recommended</span>
                  </div>
                )}

                {/* Vehicle icon */}
                <div className="text-center mb-8">
                  <div className={`w-20 h-20 rounded-2xl mx-auto flex items-center justify-center mb-4 ${v.iconBgClass} border ${v.iconBorderClass}`}>
                    <Car className={`w-10 h-10 ${v.iconTextClass}`} />
                  </div>
                  <h3 className="text-2xl font-black">{v.name}</h3>
                  <p className="text-white/40 text-sm mt-1">{v.sub} &middot; {v.seats} Seater</p>
                </div>

                {/* Price */}
                <div className="text-center mb-8">
                  <div className={`text-5xl font-black bg-clip-text text-transparent bg-gradient-to-r ${v.gradient}`}>
                    &#8377;{v.fare.toLocaleString('en-IN')}
                  </div>
                  <p className="text-white/35 text-xs mt-2">{v.perKm} &middot; {trip.totalDistance} km circuit</p>
                </div>

                {/* Features */}
                <div className="space-y-3 mb-8">
                  {[
                    'Driver + Fuel + AC included',
                    'GPS-tracked vehicle',
                    `${trip.totalDays}-day circuit support`,
                    'No hidden charges',
                    '24/7 roadside assistance',
                  ].map((f, j) => (
                    <div key={j} className="flex items-center gap-2.5 text-sm text-white/45">
                      <CheckCircle2 className="w-4 h-4 text-rose-400/60 flex-shrink-0" /> {f}
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <Link
                  onClick={() => trackPhoneCall(`road_trip_pricing_${v.name.toLowerCase()}`, '+917668570551')}
                  href="tel:+917668570551"
                  className={`block text-center py-4 rounded-xl font-bold text-lg transition-all duration-300 bg-gradient-to-r ${v.gradient} text-white hover:shadow-lg hover:shadow-rose-500/15 hover:scale-[1.02]`}
                >
                  Book {v.name} Now
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ 5. BEST SEASON ═══════════════════════════════ */}
      <section className="py-16 md:py-20 px-4 sm:px-6 relative">
        <div className="relative max-w-4xl mx-auto">
          <div className="glass-strong rounded-[2rem] p-8 md:p-12 border border-orange-500/15 relative overflow-hidden">
            {/* Background accent */}
            <div className="absolute top-0 right-0 w-60 h-60 bg-orange-500/8 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3" />

            <div className="relative z-10 flex flex-col md:flex-row items-start gap-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500/20 to-amber-500/20 border border-orange-500/25 flex items-center justify-center flex-shrink-0">
                <Sun className="w-8 h-8 text-orange-400" />
              </div>
              <div>
                <span className="inline-flex items-center gap-2 text-orange-400 font-bold text-xs uppercase tracking-widest mb-3">
                  <Calendar className="w-3.5 h-3.5" /> Best Time to Visit
                </span>
                <h3 className="text-2xl md:text-3xl font-black mb-3">When to Plan This Circuit</h3>
                <p className="text-white/50 text-lg leading-relaxed">{trip.bestSeason}</p>
                <div className="mt-6 flex flex-wrap gap-3">
                  {trip.bestSeason.match(/\b(January|February|March|April|May|June|July|August|September|October|November|December)\b/gi)?.map((month, i) => (
                    <span key={i} className="glass-card px-4 py-2 rounded-full text-sm text-orange-300/70 font-medium border border-orange-500/15">
                      {month}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ 6. INCLUSIONS / EXCLUSIONS ═══════════════════ */}
      <section className="py-24 md:py-32 px-4 sm:px-6 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_left,rgba(251,113,133,0.05),transparent_60%)]" />
        <div className="relative max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <span className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full text-rose-400 font-semibold text-xs tracking-widest uppercase mb-4">
              <Shield className="w-3.5 h-3.5" /> What You Get
            </span>
            <h2 className="text-4xl md:text-6xl font-black tracking-tight">Package Inclusions</h2>
            <p className="text-white/40 mt-4 text-lg">Everything included in your {trip.totalDays}-day circuit fare</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Inclusions - 3 cols */}
            <div className="lg:col-span-3">
              <h3 className="text-lg font-bold text-rose-400 mb-6 flex items-center gap-2">
                <CheckCircle className="w-5 h-5" /> Included
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {INCLUSIONS.map((item, i) => (
                  <div key={i} className="glass-card glass-card-hover rounded-2xl p-5 transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-rose-500/15 to-orange-500/15 border border-rose-500/15 flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-5 h-5 text-rose-400" />
                      </div>
                      <div>
                        <div className="font-bold text-sm text-white/90">{item.label}</div>
                        <div className="text-xs text-white/35 mt-0.5">{item.desc}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Exclusions - 2 cols */}
            <div className="lg:col-span-2">
              <h3 className="text-lg font-bold text-white/40 mb-6 flex items-center gap-2">
                <Zap className="w-5 h-5 text-white/30" /> Extra Charges
              </h3>
              <div className="glass-card rounded-2xl p-6">
                <div className="space-y-4">
                  {EXCLUSIONS.map((item, i) => (
                    <div key={i} className="flex items-center gap-3 text-sm text-white/40">
                      <div className="w-1.5 h-1.5 rounded-full bg-white/20 flex-shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-5 border-t border-white/5">
                  <p className="text-xs text-white/35 leading-relaxed">
                    Driver night allowance applies when trip extends past 10 PM. Toll, parking, and state tax are pay-as-you-go.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ HIGHLIGHTS ════════════════════════════════════ */}
      <section className="py-24 md:py-32 px-4 sm:px-6 relative">
        <div className="relative max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <span className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full text-rose-400 font-semibold text-xs tracking-widest uppercase mb-4">
              <Sparkles className="w-3.5 h-3.5" /> Trip Highlights
            </span>
            <h2 className="text-4xl md:text-6xl font-black tracking-tight">Why This Circuit</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trip.highlights.map((highlight, i) => {
              const icons = [Award, Mountain, Compass, Sparkles, MapPin, Star];
              const IconComp = icons[i % icons.length];
              return (
                <div key={i} className="glass-card glass-card-hover rounded-2xl p-6 transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-rose-500/20 to-orange-500/20 border border-rose-500/20 flex items-center justify-center mb-4">
                    <IconComp className="w-6 h-6 text-rose-400" />
                  </div>
                  <p className="text-white/60 leading-relaxed">{highlight}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════ KEY INFO SNIPPET (AEO) ═══════════════════════ */}
      <section className="py-16 px-4 sm:px-6 relative">
        <div className="relative max-w-4xl mx-auto">
          <div className="glass-strong rounded-[2rem] p-8 md:p-12 border-glow" data-snippet-type="direct-answer">
            <div className="key-info">
              <h2 className="text-2xl font-black mb-6">{trip.name} &mdash; Quick Facts</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6">
                {[
                  { label: 'Total Distance', value: `${trip.totalDistance} km`, color: 'rose' },
                  { label: 'Duration', value: `${trip.totalDays} Days / ${totalNights}N`, color: 'orange' },
                  { label: 'Sedan Fare', value: `₹${trip.totalCost.sedan.toLocaleString('en-IN')}`, color: 'rose' },
                  { label: 'SUV Fare', value: `₹${trip.totalCost.suv.toLocaleString('en-IN')}`, color: 'orange' },
                ].map((fact, i) => (
                  <div key={i}>
                    <div className={`text-xs ${fact.color === 'rose' ? 'text-rose-400' : 'text-orange-400'} uppercase tracking-wider font-bold mb-1`}>{fact.label}</div>
                    <div className="text-xl font-black">{fact.value}</div>
                  </div>
                ))}
              </div>
              <p className="text-white/40 text-sm leading-relaxed">
                Route: {trip.stops.map(s => s.city).join(' → ')}. Fares include driver, fuel, and AC. Toll, parking extra. Call 7668570551 for custom quotes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ 7. FAQ ACCORDION ═════════════════════════════ */}
      <section className="py-24 md:py-32 px-4 sm:px-6 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(251,113,133,0.04),transparent_60%)]" />
        <div className="relative max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full text-rose-400 font-semibold text-xs tracking-widest uppercase mb-4">
              <Coffee className="w-3.5 h-3.5" /> Common Questions
            </span>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight">Frequently Asked Questions</h2>
            <p className="text-white/40 mt-4">Everything you need to know about the {trip.name}</p>
          </div>

          <div className="space-y-4">
            {trip.faqs.map((faq, i) => {
              const isOpen = openFaq === i;
              return (
                <div key={i} className={`glass-card rounded-2xl overflow-hidden transition-all duration-300 ${isOpen ? 'ring-1 ring-rose-500/20 shadow-[0_0_25px_rgba(251,113,133,.06)]' : 'hover:border-rose-500/15'}`}>
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    aria-label={isOpen ? 'Collapse answer' : 'Expand answer'}
                    className="w-full flex items-center justify-between p-6 text-left group focus:outline-none focus:ring-2 focus:ring-rose-500/50 rounded-2xl"
                  >
                    <div className="flex items-start gap-4 pr-4">
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-all ${isOpen ? 'bg-rose-500/20 text-rose-400' : 'bg-white/5 text-white/30'}`}>
                        <span className="text-xs font-bold">{String(i + 1).padStart(2, '0')}</span>
                      </div>
                      <span className="font-bold text-white/90 faq-answer">{faq.question}</span>
                    </div>
                    <ChevronDown className={`w-5 h-5 text-rose-400 transition-transform duration-300 flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                  <div className={`transition-all duration-400 ease-in-out overflow-hidden ${isOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="px-6 pb-6 pl-[4.5rem] faq-answer">
                      <p className="text-white/50 leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════ RELATED TRIPS ════════════════════════════════ */}
      {relatedTrips && relatedTrips.length > 0 && (
        <section className="py-24 md:py-32 px-4 sm:px-6 relative">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(249,115,22,0.04),transparent_60%)]" />
          <div className="relative max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full text-orange-400 font-semibold text-xs tracking-widest uppercase mb-4">
                <Compass className="w-3.5 h-3.5" /> Explore More
              </span>
              <h2 className="text-3xl md:text-5xl font-black tracking-tight">More Road Trip Circuits</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedTrips.map((rt, i) => (
                <Link
                  key={i}
                  href={`/road-trip/${rt.slug}`}
                  onClick={() => trackButtonClick(`related_trip_${rt.slug}`, 'road_trip_related', `/road-trip/${rt.slug}`)}
                  className="glass-card glass-card-hover rounded-2xl p-6 transition-all duration-300 block group"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-rose-500/15 to-orange-500/15 border border-rose-500/15 flex items-center justify-center">
                      <Route className="w-4 h-4 text-rose-400" />
                    </div>
                    <h3 className="text-lg font-black">{rt.name}</h3>
                  </div>
                  <p className="text-white/40 text-sm mb-4 line-clamp-2">{rt.tagline}</p>
                  <div className="flex items-center gap-4 text-xs text-white/40 mb-4">
                    <span className="flex items-center gap-1"><Route className="w-3 h-3 text-rose-400" /> {rt.totalDistance} km</span>
                    <span className="flex items-center gap-1"><Calendar className="w-3 h-3 text-orange-400" /> {rt.totalDays} days</span>
                    <span className="flex items-center gap-1 text-rose-400/70">From ₹{rt.totalCost.sedan.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="flex items-center gap-1 text-rose-400 text-sm font-semibold group-hover:gap-2 transition-all">
                    View Trip <ChevronRight className="w-4 h-4" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ═══════════════ 8. FINAL CTA (Rose/Orange Neon Glow) ════════ */}
      <section className="py-28 px-4 sm:px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-rose-950/20 to-stone-950" />
        {/* Glow orbs */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-rose-500/8 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[200px] bg-orange-500/6 rounded-full blur-[80px]" />

        <div className="relative max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full text-rose-400 font-semibold text-xs tracking-widest uppercase mb-8 border border-rose-500/20">
            <Zap className="w-3.5 h-3.5" /> Ready to Start
          </div>

          <h2 className="text-4xl md:text-6xl font-black mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-rose-400 via-orange-400 to-amber-400">Ready for This Road Trip?</span>
          </h2>
          <p className="text-white/40 text-lg mb-6 max-w-xl mx-auto">
            Book your {trip.name} circuit with Triveni Cabs. Professional drivers, GPS-tracked vehicles, 24/7 support.
          </p>

          {/* Quick summary */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {[
              `${trip.totalDistance} km`,
              `${trip.totalDays} Days`,
              `From ₹${trip.totalCost.sedan.toLocaleString('en-IN')}`,
            ].map((tag, i) => (
              <span key={i} className="glass-card px-4 py-2 rounded-full text-sm text-white/50 border border-white/10">
                {tag}
              </span>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              onClick={() => trackPhoneCall('road_trip_cta', '+917668570551')}
              href="tel:+917668570551"
              className="group inline-flex items-center gap-3 bg-gradient-to-r from-rose-500 via-orange-500 to-amber-500 text-white px-10 py-5 rounded-2xl font-bold text-lg rose-neon-btn hover:scale-105 transition-all duration-300"
            >
              <Phone className="w-5 h-5 group-hover:animate-bounce" /> Call: 7668570551
            </Link>
            <Link
              onClick={() => trackWhatsAppClick('road_trip_cta', whatsappMsg, trip.name)}
              href={`https://wa.me/917668570551?text=${encodeURIComponent(whatsappMsg)}`}
              className="group inline-flex items-center gap-3 glass-strong text-white px-10 py-5 rounded-2xl font-bold text-lg border border-white/15 hover:border-rose-500/40 hover:shadow-[0_0_30px_rgba(251,113,133,.2)] transition-all duration-300"
            >
              <svg className="w-5 h-5 text-emerald-400" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.611.611l4.458-1.495A11.943 11.943 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.318 0-4.468-.67-6.29-1.823l-.451-.27-2.649.888.888-2.649-.27-.451A9.965 9.965 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/></svg>
              WhatsApp Quote <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Trust line */}
          <p className="text-white/20 text-xs mt-8 flex items-center justify-center gap-2">
            <Shield className="w-3.5 h-3.5" /> Trusted by 10,000+ travelers &middot; 4.9★ Google Rating &middot; Since 2017
          </p>
        </div>
      </section>

    </div>
  );
}
