'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  Phone, ArrowRight, ChevronDown, Shield, Clock, Car, CheckCircle2,
  Route, Zap, MapPin, Navigation, Star, Users, Fuel,
  ChevronRight, Sparkles, Award, Luggage, Snowflake, IndianRupee,
  CheckCircle, XCircle, Info
} from '@/components/ui/icons';
import { trackWhatsAppClick, trackPhoneCall } from '@/utilis/analytics';

export default function VehicleHireClient({ vehicleSpec, routeData }) {
  const [openFaq, setOpenFaq] = useState(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const whatsappMsg = `Hi, I want to hire a ${vehicleSpec.name} from ${routeData.origin} to ${routeData.destination} (${routeData.distanceKm} km). Please share fare details.`;

  return (
    <div className="min-h-screen bg-stone-950 text-white overflow-hidden">

      {/* CSS Animations */}
      <style jsx global>{`
        @keyframes vh-shimmer { 0% { background-position: -200% 0; } 100% { background-position: 200% 0; } }
        @keyframes vh-float { 0%,100% { transform: translateY(0px); } 50% { transform: translateY(-14px); } }
        @keyframes vh-float-slow { 0%,100% { transform: translateY(0px) rotate(0deg); } 50% { transform: translateY(-20px) rotate(3deg); } }
        @keyframes vh-pulse-glow { 0%,100% { box-shadow: 0 0 30px rgba(244,63,94,0.2), 0 0 60px rgba(251,146,60,0.1); } 50% { box-shadow: 0 0 60px rgba(244,63,94,0.4), 0 0 120px rgba(251,146,60,0.2); } }
        @keyframes vh-gradient-x { 0%,100% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } }
        @keyframes vh-morph { 0%,100% { border-radius: 60% 40% 30% 70%/60% 30% 70% 40%; } 50% { border-radius: 30% 60% 70% 40%/50% 60% 30% 60%; } }
        @keyframes vh-dash-march { 0% { stroke-dashoffset: 0; } 100% { stroke-dashoffset: -30; } }
        @keyframes vh-glow-pulse { 0%,100% { opacity: 0.5; transform: scale(1); } 50% { opacity: 1; transform: scale(1.05); } }
        @keyframes vh-reveal { from { opacity: 0; transform: translateY(40px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes vh-road { 0% { transform: translateX(-12px); } 100% { transform: translateX(12px); } }
        .vh-float { animation: vh-float 4s ease-in-out infinite; }
        .vh-float-slow { animation: vh-float-slow 6s ease-in-out infinite; }
        .vh-pulse-glow { animation: vh-pulse-glow 3s ease-in-out infinite; }
        .vh-gradient-x { background-size: 200% 200%; animation: vh-gradient-x 6s ease infinite; }
        .vh-morph { animation: vh-morph 8s ease-in-out infinite; }
        .vh-dash { animation: vh-dash-march 1.5s linear infinite; }
        .vh-glow { animation: vh-glow-pulse 2s ease-in-out infinite; }
        .vh-reveal { animation: vh-reveal 0.8s ease-out forwards; }
        .vh-road { animation: vh-road 1.5s ease-in-out infinite alternate; }
        .vh-glass { background: rgba(255,255,255,0.03); backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px); border: 1px solid rgba(255,255,255,0.06); }
        .vh-glass-hover:hover { background: rgba(255,255,255,0.06); border-color: rgba(244,63,94,0.3); box-shadow: 0 8px 32px rgba(244,63,94,0.1), inset 0 1px 0 rgba(255,255,255,0.05); transform: translateY(-2px); }
        .vh-glass-strong { background: rgba(255,255,255,0.05); backdrop-filter: blur(40px); -webkit-backdrop-filter: blur(40px); border: 1px solid rgba(255,255,255,0.08); }
        .vh-neon { box-shadow: 0 0 15px rgba(244,63,94,0.15), 0 0 45px rgba(244,63,94,0.05), inset 0 1px 0 rgba(255,255,255,0.05); }
        .vh-text-glow { text-shadow: 0 0 40px rgba(244,63,94,0.5), 0 0 80px rgba(251,146,60,0.3); }
      `}</style>

      {/* ═══════════════════════════════════════════════════════════════
          HERO: Vehicle name with rose/orange gradient on stone-950
         ═══════════════════════════════════════════════════════════════ */}
      <section className="relative min-h-[95vh] flex items-center overflow-hidden">
        {/* Multi-layer gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-stone-950 via-rose-950/40 to-orange-950/30 vh-gradient-x" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(244,63,94,0.12),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(251,146,60,0.08),transparent_50%)]" />

        {/* Mesh grid */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.5) 1px, transparent 0)', backgroundSize: '32px 32px' }} />

        {/* Floating orbs */}
        <div className="absolute top-[15%] left-[5%] w-80 h-80 bg-rose-600/15 rounded-full blur-[100px] vh-morph" />
        <div className="absolute bottom-[10%] right-[5%] w-[500px] h-[500px] bg-orange-500/8 rounded-full blur-[150px] vh-morph" style={{ animationDelay: '-4s' }} />
        <div className="absolute top-[50%] left-[30%] w-60 h-60 bg-amber-500/6 rounded-full blur-[120px] vh-morph" style={{ animationDelay: '-2s' }} />

        {/* Floating fare badge */}
        <div className="absolute top-28 right-[8%] hidden lg:block vh-float">
          <div className="relative">
            <div className="absolute -inset-12 bg-rose-500/10 rounded-full blur-[60px] animate-pulse" />
            <div className="relative vh-glass-strong rounded-full w-44 h-44 flex items-center justify-center vh-pulse-glow border-2 border-rose-500/20">
              <div className="absolute inset-1 rounded-full bg-gradient-to-br from-rose-500/15 via-orange-500/10 to-transparent" />
              <div className="text-center relative z-10">
                <div className="text-[10px] font-bold text-rose-300/80 uppercase tracking-[0.2em]">Starting</div>
                <div className="text-2xl font-black text-white vh-text-glow">{routeData.fareFormatted}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom wave */}
        <div className="absolute -bottom-1 left-0 right-0 h-40">
          <svg viewBox="0 0 1440 120" className="w-full h-full" preserveAspectRatio="none">
            <path d="M0,80 C240,120 480,20 720,60 C960,100 1200,30 1440,70 L1440,120 L0,120 Z" fill="#0c0a09" />
            <path d="M0,90 C360,110 720,40 1080,80 C1260,95 1380,85 1440,80 L1440,120 L0,120 Z" fill="#0c0a09" fillOpacity="0.5" />
          </svg>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-32">
          {/* Top badge */}
          <div className="inline-flex items-center gap-2.5 vh-glass-strong px-6 py-3 rounded-full mb-10 border border-rose-500/25 vh-glow">
            <Sparkles className="w-4 h-4 text-rose-400" />
            <span className="text-rose-300 font-semibold text-sm tracking-wide">Premium Fleet 2026</span>
            <div className="w-1.5 h-1.5 bg-orange-400 rounded-full animate-pulse" />
          </div>

          {/* Vehicle name massive */}
          <h2 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-black bg-clip-text text-transparent bg-gradient-to-r from-rose-400 via-orange-400 to-amber-400 tracking-tight mb-6 drop-shadow-[0_0_30px_rgba(244,63,94,0.3)]">
            {vehicleSpec.name}
          </h2>

          {/* Route: Origin to Destination */}
          <div className="flex items-center gap-4 sm:gap-6 mb-8 flex-wrap">
            <span className="text-3xl md:text-5xl lg:text-6xl font-black text-white tracking-tight">{routeData.origin}</span>
            <div className="flex items-center gap-2">
              <svg width="60" height="4" className="hidden sm:block">
                <line x1="0" y1="2" x2="60" y2="2" stroke="url(#vh-road-grad)" strokeWidth="3" strokeDasharray="8 6" className="vh-dash" />
                <defs><linearGradient id="vh-road-grad" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stopColor="#fb7185" /><stop offset="100%" stopColor="#fb923c" /></linearGradient></defs>
              </svg>
              <div className="vh-road">
                <ArrowRight className="w-8 h-8 sm:w-10 sm:h-10 text-rose-400 drop-shadow-[0_0_20px_rgba(244,63,94,0.6)]" />
              </div>
              <svg width="60" height="4" className="hidden sm:block">
                <line x1="0" y1="2" x2="60" y2="2" stroke="url(#vh-road-grad2)" strokeWidth="3" strokeDasharray="8 6" className="vh-dash" />
                <defs><linearGradient id="vh-road-grad2" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stopColor="#fb923c" /><stop offset="100%" stopColor="#fbbf24" /></linearGradient></defs>
              </svg>
            </div>
            <span className="text-3xl md:text-5xl lg:text-6xl font-black bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-amber-400">{routeData.destination}</span>
          </div>

          {/* H1 */}
          <h1 className="text-xl md:text-2xl lg:text-3xl text-white/40 mb-8 max-w-3xl font-medium">
            Hire {vehicleSpec.name} for {routeData.origin} to {routeData.destination} &mdash; <span className="text-rose-400 font-black vh-text-glow">{routeData.fareFormatted}</span> &middot; {routeData.distanceKm} km &middot; {routeData.duration}
          </h1>

          {/* Info pills */}
          <div className="flex flex-wrap gap-3 mb-12">
            {[
              { icon: Car, text: vehicleSpec.type, accent: 'rose' },
              { icon: Users, text: `${vehicleSpec.seating} Seater`, accent: 'rose' },
              { icon: Route, text: `${routeData.distanceKm} km`, accent: 'orange' },
              { icon: Clock, text: routeData.duration, accent: 'orange' },
              { icon: Star, text: '4.9 (10,000+ reviews)', accent: 'yellow', special: true },
            ].map((pill, i) => (
              <span key={i} className={`inline-flex items-center gap-2 backdrop-blur-2xl px-5 py-3 rounded-2xl text-sm font-medium transition-all duration-300 hover:scale-105 ${pill.special ? 'bg-yellow-500/10 border border-yellow-500/25 text-yellow-300' : 'vh-glass border-white/10 text-white/70 hover:border-rose-500/30'}`}>
                <pill.icon className={`w-4 h-4 ${pill.special ? 'text-yellow-400' : pill.accent === 'orange' ? 'text-orange-400' : 'text-rose-400'}`} /> {pill.text}
              </span>
            ))}
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link onClick={() => trackPhoneCall('vehicle_hire_hero')} href="tel:+917668570551" className="group inline-flex items-center gap-3 bg-gradient-to-r from-rose-500 via-orange-500 to-amber-500 text-white px-10 py-5 rounded-2xl font-bold text-lg shadow-[0_0_40px_rgba(244,63,94,0.3)] hover:shadow-[0_0_60px_rgba(244,63,94,0.5)] hover:scale-105 transition-all duration-300">
              <Phone className="w-5 h-5 group-hover:animate-bounce" /> Call: 7668570551
            </Link>
            <Link onClick={() => trackWhatsAppClick('vehicle_hire_hero')} href={`https://wa.me/917668570551?text=${encodeURIComponent(whatsappMsg)}`} className="group inline-flex items-center gap-3 vh-glass-strong text-white px-10 py-5 rounded-2xl font-bold text-lg border border-white/15 hover:border-rose-500/40 hover:shadow-[0_0_30px_rgba(244,63,94,0.15)] transition-all duration-300">
              <svg className="w-5 h-5 text-emerald-400" fill="currentColor" viewBox="0 0 16 16"><path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" /></svg>
              WhatsApp Quote <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          SOCIAL PROOF STRIP
         ═══════════════════════════════════════════════════════════════ */}
      <section className="relative py-8 border-y border-rose-500/10">
        <div className="absolute inset-0 bg-gradient-to-r from-rose-950/20 via-orange-950/15 to-rose-950/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap justify-center gap-10 md:gap-20">
            {[
              { value: '10,000+', label: 'Happy Customers', icon: Users },
              { value: '4.9', label: 'Google Rating', icon: Star },
              { value: '24/7', label: 'Service Available', icon: Clock },
              { value: '50+', label: 'Cities Covered', icon: MapPin },
            ].map((stat, i) => (
              <div key={i} className="group text-center flex items-center gap-3 cursor-default">
                <div className="w-10 h-10 rounded-xl vh-glass flex items-center justify-center group-hover:border-rose-500/30 transition-all">
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

      {/* ═══════════════════════════════════════════════════════════════
          VEHICLE SHOWCASE: Specs Grid
         ═══════════════════════════════════════════════════════════════ */}
      <section className="relative py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 vh-glass-strong px-5 py-2 rounded-full mb-6 border border-rose-500/20">
              <Car className="w-4 h-4 text-rose-400" />
              <span className="text-rose-300 font-semibold text-sm">Vehicle Specifications</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
              {vehicleSpec.name} <span className="bg-clip-text text-transparent bg-gradient-to-r from-rose-400 to-orange-400">at a Glance</span>
            </h2>
            <p className="text-white/50 max-w-2xl mx-auto text-lg">Everything you need to know about your ride for the {routeData.origin} to {routeData.destination} journey</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { icon: Users, label: 'Seating', value: vehicleSpec.seating, bgClass: 'bg-rose-500/10', borderClass: 'border-rose-500/20', hoverBorderClass: 'group-hover:border-rose-500/40', textClass: 'text-rose-400' },
              { icon: Luggage, label: 'Luggage', value: vehicleSpec.luggage, bgClass: 'bg-orange-500/10', borderClass: 'border-orange-500/20', hoverBorderClass: 'group-hover:border-orange-500/40', textClass: 'text-orange-400' },
              { icon: Fuel, label: 'Fuel', value: vehicleSpec.fuelType, bgClass: 'bg-amber-500/10', borderClass: 'border-amber-500/20', hoverBorderClass: 'group-hover:border-amber-500/40', textClass: 'text-amber-400' },
              { icon: Snowflake, label: 'AC', value: vehicleSpec.ac ? 'Yes' : 'No', bgClass: 'bg-cyan-500/10', borderClass: 'border-cyan-500/20', hoverBorderClass: 'group-hover:border-cyan-500/40', textClass: 'text-cyan-400' },
              { icon: Car, label: 'Type', value: vehicleSpec.type, bgClass: 'bg-rose-500/10', borderClass: 'border-rose-500/20', hoverBorderClass: 'group-hover:border-rose-500/40', textClass: 'text-rose-400' },
              { icon: IndianRupee, label: 'Per Km', value: `Rs ${vehicleSpec.perKm}`, bgClass: 'bg-emerald-500/10', borderClass: 'border-emerald-500/20', hoverBorderClass: 'group-hover:border-emerald-500/40', textClass: 'text-emerald-400' },
            ].map((spec, i) => (
              <div key={i} className="vh-glass vh-glass-hover rounded-2xl p-6 text-center transition-all duration-300 cursor-default group">
                <div className={`w-12 h-12 rounded-xl mx-auto mb-3 flex items-center justify-center ${spec.bgClass} border ${spec.borderClass} ${spec.hoverBorderClass} transition-all`}>
                  <spec.icon className={`w-6 h-6 ${spec.textClass}`} />
                </div>
                <div className="text-[10px] text-white/40 uppercase tracking-widest mb-1">{spec.label}</div>
                <div className="text-white font-bold text-sm">{spec.value}</div>
              </div>
            ))}
          </div>

          {/* Features pills */}
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {vehicleSpec.features.map((f, i) => (
              <span key={i} className="inline-flex items-center gap-2 vh-glass px-4 py-2 rounded-full text-sm text-white/60 border border-white/5 hover:border-rose-500/20 transition-all">
                <CheckCircle2 className="w-3.5 h-3.5 text-rose-400" /> {f}
              </span>
            ))}
            {vehicleSpec.idealFor.map((item, i) => (
              <span key={`ideal-${i}`} className="inline-flex items-center gap-2 vh-glass px-4 py-2 rounded-full text-sm text-orange-300/70 border border-orange-500/10 hover:border-orange-500/20 transition-all">
                <Award className="w-3.5 h-3.5 text-orange-400" /> {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          PRICING: Glass panel with inclusions/exclusions
         ═══════════════════════════════════════════════════════════════ */}
      <section className="relative py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-rose-950/10 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 vh-glass-strong px-5 py-2 rounded-full mb-6 border border-orange-500/20">
              <IndianRupee className="w-4 h-4 text-orange-400" />
              <span className="text-orange-300 font-semibold text-sm">Transparent Pricing</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
              {vehicleSpec.name} Fare: <span className="bg-clip-text text-transparent bg-gradient-to-r from-rose-400 to-orange-400">{routeData.origin} to {routeData.destination}</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Main fare card */}
            <div className="lg:col-span-1 vh-glass rounded-3xl p-8 border border-rose-500/20 vh-neon relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-rose-500 via-orange-500 to-amber-500" />
              <div className="text-center">
                <div className="text-sm text-white/40 uppercase tracking-widest mb-2">Total Fare</div>
                <div className="text-5xl font-black bg-clip-text text-transparent bg-gradient-to-r from-rose-400 to-orange-400 mb-2">{routeData.fareFormatted}</div>
                <div className="text-white/40 text-sm mb-6">({routeData.distanceKm} km x Rs {vehicleSpec.perKm}/km)</div>
                <div className="space-y-3 text-left">
                  <div className="flex items-center gap-3 text-white/60 text-sm">
                    <Route className="w-4 h-4 text-rose-400 shrink-0" />
                    <span>{routeData.distanceKm} km distance</span>
                  </div>
                  <div className="flex items-center gap-3 text-white/60 text-sm">
                    <Clock className="w-4 h-4 text-orange-400 shrink-0" />
                    <span>{routeData.duration} drive</span>
                  </div>
                  <div className="flex items-center gap-3 text-white/60 text-sm">
                    <Navigation className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>Via {routeData.highway}</span>
                  </div>
                </div>
                <div className="mt-8">
                  <Link onClick={() => trackPhoneCall('vehicle_hire_pricing')} href="tel:+917668570551" className="block w-full bg-gradient-to-r from-rose-500 to-orange-500 text-white px-6 py-4 rounded-xl font-bold text-center hover:shadow-[0_0_30px_rgba(244,63,94,0.3)] hover:scale-105 transition-all duration-300">
                    <Phone className="w-4 h-4 inline mr-2" /> Book Now
                  </Link>
                </div>
              </div>
            </div>

            {/* Inclusions */}
            <div className="vh-glass rounded-3xl p-8 border border-emerald-500/15">
              <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-emerald-400" /> Inclusions
              </h3>
              <ul className="space-y-4">
                {routeData.inclusions.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                    <span className="text-white/70 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Exclusions */}
            <div className="vh-glass rounded-3xl p-8 border border-red-500/15">
              <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                <XCircle className="w-5 h-5 text-red-400" /> Exclusions
              </h3>
              <ul className="space-y-4">
                {routeData.exclusions.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <XCircle className="w-4 h-4 text-red-400/60 mt-0.5 shrink-0" />
                    <span className="text-white/50 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          WHY THIS VEHICLE: Benefit cards
         ═══════════════════════════════════════════════════════════════ */}
      <section className="relative py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 vh-glass-strong px-5 py-2 rounded-full mb-6 border border-rose-500/20">
              <Zap className="w-4 h-4 text-rose-400" />
              <span className="text-rose-300 font-semibold text-sm">Why Choose This Vehicle</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
              Why <span className="bg-clip-text text-transparent bg-gradient-to-r from-rose-400 to-orange-400">{vehicleSpec.name}</span> for {routeData.destination}?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {routeData.whyThisVehicle.map((reason, i) => (
              <div key={i} className="vh-glass vh-glass-hover rounded-2xl p-8 transition-all duration-300 group cursor-default">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-rose-500/20 to-orange-500/10 border border-rose-500/20 flex items-center justify-center shrink-0 group-hover:border-rose-500/40 transition-all">
                    <span className="text-xl font-black text-rose-400">{String(i + 1).padStart(2, '0')}</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-rose-300 transition-colors">{reason.title}</h3>
                    <p className="text-white/50 text-sm leading-relaxed">{reason.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          ROUTE OVERVIEW: Distance, time, stops
         ═══════════════════════════════════════════════════════════════ */}
      <section className="relative py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-orange-950/10 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 vh-glass-strong px-5 py-2 rounded-full mb-6 border border-orange-500/20">
              <Route className="w-4 h-4 text-orange-400" />
              <span className="text-orange-300 font-semibold text-sm">Route Overview</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
              {routeData.origin} to {routeData.destination} <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-amber-400">Route Map</span>
            </h2>
          </div>

          {/* Route visual */}
          <div className="max-w-3xl mx-auto vh-glass rounded-3xl p-8 md:p-12 border border-orange-500/15">
            {/* Start */}
            <div className="flex items-center gap-4 mb-8">
              <div className="w-10 h-10 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-emerald-400" />
              </div>
              <div>
                <div className="text-white font-bold text-lg">{routeData.origin}</div>
                <div className="text-white/40 text-sm">Starting Point</div>
              </div>
            </div>

            {/* Stops */}
            <div className="ml-5 border-l-2 border-dashed border-rose-500/20 pl-9 space-y-6 mb-8">
              {routeData.stops.map((stop, i) => (
                <div key={i} className="relative">
                  <div className="absolute -left-[2.55rem] top-1 w-3 h-3 rounded-full bg-rose-500/30 border border-rose-500/40" />
                  <div className="text-white/60 font-medium">{stop}</div>
                </div>
              ))}
            </div>

            {/* End */}
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-rose-500/20 border border-rose-500/30 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-rose-400" />
              </div>
              <div>
                <div className="text-white font-bold text-lg">{routeData.destination}</div>
                <div className="text-white/40 text-sm">Destination</div>
              </div>
            </div>

            {/* Summary stats */}
            <div className="mt-10 pt-8 border-t border-white/5 grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl font-black text-rose-400">{routeData.distanceKm} km</div>
                <div className="text-[10px] text-white/40 uppercase tracking-widest">Distance</div>
              </div>
              <div>
                <div className="text-2xl font-black text-orange-400">{routeData.duration}</div>
                <div className="text-[10px] text-white/40 uppercase tracking-widest">Drive Time</div>
              </div>
              <div>
                <div className="text-2xl font-black text-amber-400">{routeData.stops.length}</div>
                <div className="text-[10px] text-white/40 uppercase tracking-widest">Major Stops</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          OTHER VEHICLES: Comparison section
         ═══════════════════════════════════════════════════════════════ */}
      {routeData.relatedVehicleRoutes.length > 0 && (
        <section className="relative py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 vh-glass-strong px-5 py-2 rounded-full mb-6 border border-rose-500/20">
                <Car className="w-4 h-4 text-rose-400" />
                <span className="text-rose-300 font-semibold text-sm">Explore More Options</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
                Other <span className="bg-clip-text text-transparent bg-gradient-to-r from-rose-400 to-orange-400">Vehicle Options</span>
              </h2>
              <p className="text-white/50 max-w-2xl mx-auto text-lg">Compare different vehicles for similar routes</p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {routeData.relatedVehicleRoutes.map((related, i) => (
                <Link
                  key={i}
                  href={`/${related.vehicleSlug}/${related.routeSlug}`}
                  className="vh-glass vh-glass-hover rounded-2xl p-6 transition-all duration-300 group block"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs vh-glass-strong px-3 py-1 rounded-full text-rose-300 border border-rose-500/20">{related.vehicleType === routeData.vehicleType ? 'Same Vehicle' : 'Alternative'}</span>
                    <ChevronRight className="w-4 h-4 text-white/30 group-hover:text-rose-400 group-hover:translate-x-1 transition-all" />
                  </div>
                  <h3 className="text-white font-bold text-sm group-hover:text-rose-300 transition-colors">{related.label}</h3>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ═══════════════════════════════════════════════════════════════
          FAQ ACCORDION
         ═══════════════════════════════════════════════════════════════ */}
      <section className="relative py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-rose-950/10 to-transparent" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 vh-glass-strong px-5 py-2 rounded-full mb-6 border border-rose-500/20">
              <Info className="w-4 h-4 text-rose-400" />
              <span className="text-rose-300 font-semibold text-sm">Frequently Asked Questions</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
              {vehicleSpec.name} Hire <span className="bg-clip-text text-transparent bg-gradient-to-r from-rose-400 to-orange-400">FAQs</span>
            </h2>
          </div>

          <div className="space-y-4">
            {routeData.faqs.map((faq, i) => (
              <div key={i} className={`vh-glass rounded-2xl overflow-hidden transition-all duration-300 ${openFaq === i ? 'border border-rose-500/30 vh-neon' : 'border border-white/5 hover:border-rose-500/15'}`}>
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  aria-expanded={openFaq === i}
                  aria-label={openFaq === i ? 'Collapse answer' : 'Expand answer'}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none focus:ring-2 focus:ring-rose-500/50 rounded-2xl"
                >
                  <span className="text-white font-semibold text-sm md:text-base pr-4">{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 text-rose-400 shrink-0 transition-transform duration-300 ${openFaq === i ? 'rotate-180' : ''}`} />
                </button>
                <div className={`transition-all duration-300 overflow-hidden ${openFaq === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="px-6 pb-6 text-white/50 text-sm leading-relaxed faq-answer" data-snippet-type="faq">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          FINAL CTA
         ═══════════════════════════════════════════════════════════════ */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-rose-950/40 via-stone-950 to-orange-950/30" />
        <div className="absolute top-[20%] left-[10%] w-[400px] h-[400px] bg-rose-600/10 rounded-full blur-[150px] vh-morph" />
        <div className="absolute bottom-[20%] right-[10%] w-[300px] h-[300px] bg-orange-500/8 rounded-full blur-[120px] vh-morph" style={{ animationDelay: '-4s' }} />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
            Ready to Hire <span className="bg-clip-text text-transparent bg-gradient-to-r from-rose-400 via-orange-400 to-amber-400">{vehicleSpec.name}</span>?
          </h2>
          <p className="text-white/40 text-lg mb-10 max-w-2xl mx-auto">
            Book your {vehicleSpec.name} from {routeData.origin} to {routeData.destination} starting at just {routeData.fareFormatted}. Professional driver, AC, all inclusive.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link onClick={() => trackPhoneCall('vehicle_hire_cta')} href="tel:+917668570551" className="group inline-flex items-center gap-3 bg-gradient-to-r from-rose-500 via-orange-500 to-amber-500 text-white px-10 py-5 rounded-2xl font-bold text-lg shadow-[0_0_40px_rgba(244,63,94,0.3)] hover:shadow-[0_0_60px_rgba(244,63,94,0.5)] hover:scale-105 transition-all duration-300">
              <Phone className="w-5 h-5 group-hover:animate-bounce" /> Call: 7668570551
            </Link>
            <Link onClick={() => trackWhatsAppClick('vehicle_hire_cta')} href={`https://wa.me/917668570551?text=${encodeURIComponent(whatsappMsg)}`} className="group inline-flex items-center gap-3 vh-glass-strong text-white px-10 py-5 rounded-2xl font-bold text-lg border border-white/15 hover:border-rose-500/40 hover:shadow-[0_0_30px_rgba(244,63,94,0.15)] transition-all duration-300">
              <svg className="w-5 h-5 text-emerald-400" fill="currentColor" viewBox="0 0 16 16"><path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" /></svg>
              WhatsApp Quote <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          <p className="text-white/20 text-sm mt-6">Toll taxes included. Parking extra at actual. GST as applicable.</p>
        </div>
      </section>
    </div>
  );
}
