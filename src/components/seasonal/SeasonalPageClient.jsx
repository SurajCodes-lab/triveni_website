'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  Phone, ArrowRight, ChevronDown, Shield, Clock, Car, CheckCircle2,
  MapPin, Star, Users, Sparkles, Award, Calendar, Mountain,
  ChevronRight, Navigation, Zap, Gift, TreePine, Snowflake, Sun, Flame,
  PartyPopper, Landmark
} from '@/components/ui/icons';
import { trackWhatsAppClick, trackPhoneCall } from '@/utilis/analytics';

const themeConfig = {
  christmas: {
    emoji: '\u{1F384}',
    accent: 'emerald',
    gradientFrom: 'from-emerald-500',
    gradientVia: 'via-teal-500',
    gradientTo: 'to-cyan-500',
    bgGlow1: 'bg-emerald-600/20',
    bgGlow2: 'bg-teal-500/12',
    bgGlow3: 'bg-cyan-500/8',
    borderAccent: 'border-emerald-500/25',
    textAccent: 'text-emerald-400',
    textAccent2: 'text-teal-400',
    badgeBg: 'bg-emerald-500/10',
    iconColor: 'text-emerald-400',
    hoverBorder: 'hover:border-emerald-500/30',
    shadow: 'shadow-[0_0_40px_rgba(16,185,129,0.3)]',
    shadowHover: 'hover:shadow-[0_0_60px_rgba(16,185,129,0.5)]',
    Icon: Snowflake,
  },
  summer: {
    emoji: '\u{2600}\u{FE0F}',
    accent: 'emerald',
    gradientFrom: 'from-emerald-500',
    gradientVia: 'via-teal-500',
    gradientTo: 'to-cyan-600',
    bgGlow1: 'bg-emerald-600/20',
    bgGlow2: 'bg-cyan-500/12',
    bgGlow3: 'bg-teal-500/8',
    borderAccent: 'border-emerald-500/25',
    textAccent: 'text-emerald-400',
    textAccent2: 'text-cyan-400',
    badgeBg: 'bg-emerald-500/10',
    iconColor: 'text-emerald-400',
    hoverBorder: 'hover:border-emerald-500/30',
    shadow: 'shadow-[0_0_40px_rgba(16,185,129,0.3)]',
    shadowHover: 'hover:shadow-[0_0_60px_rgba(16,185,129,0.5)]',
    Icon: Sun,
  },
  weekend: {
    emoji: '\u{1F697}',
    accent: 'teal',
    gradientFrom: 'from-teal-500',
    gradientVia: 'via-emerald-500',
    gradientTo: 'to-cyan-500',
    bgGlow1: 'bg-teal-600/20',
    bgGlow2: 'bg-emerald-500/12',
    bgGlow3: 'bg-cyan-500/8',
    borderAccent: 'border-teal-500/25',
    textAccent: 'text-teal-400',
    textAccent2: 'text-emerald-400',
    badgeBg: 'bg-teal-500/10',
    iconColor: 'text-teal-400',
    hoverBorder: 'hover:border-teal-500/30',
    shadow: 'shadow-[0_0_40px_rgba(20,184,166,0.3)]',
    shadowHover: 'hover:shadow-[0_0_60px_rgba(20,184,166,0.5)]',
    Icon: Car,
  },
  durga: {
    emoji: '\u{1F64F}',
    accent: 'emerald',
    gradientFrom: 'from-emerald-500',
    gradientVia: 'via-teal-500',
    gradientTo: 'to-emerald-600',
    bgGlow1: 'bg-emerald-600/20',
    bgGlow2: 'bg-teal-500/12',
    bgGlow3: 'bg-emerald-500/8',
    borderAccent: 'border-emerald-500/25',
    textAccent: 'text-emerald-400',
    textAccent2: 'text-teal-400',
    badgeBg: 'bg-emerald-500/10',
    iconColor: 'text-emerald-400',
    hoverBorder: 'hover:border-emerald-500/30',
    shadow: 'shadow-[0_0_40px_rgba(16,185,129,0.3)]',
    shadowHover: 'hover:shadow-[0_0_60px_rgba(16,185,129,0.5)]',
    Icon: Flame,
  },
  guru: {
    emoji: '\u{1F6D5}',
    accent: 'teal',
    gradientFrom: 'from-teal-500',
    gradientVia: 'via-cyan-500',
    gradientTo: 'to-emerald-500',
    bgGlow1: 'bg-teal-600/20',
    bgGlow2: 'bg-cyan-500/12',
    bgGlow3: 'bg-emerald-500/8',
    borderAccent: 'border-teal-500/25',
    textAccent: 'text-teal-400',
    textAccent2: 'text-cyan-400',
    badgeBg: 'bg-teal-500/10',
    iconColor: 'text-teal-400',
    hoverBorder: 'hover:border-teal-500/30',
    shadow: 'shadow-[0_0_40px_rgba(20,184,166,0.3)]',
    shadowHover: 'hover:shadow-[0_0_60px_rgba(20,184,166,0.5)]',
    Icon: Landmark,
  },
  republic: {
    emoji: '\u{1F1EE}\u{1F1F3}',
    accent: 'cyan',
    gradientFrom: 'from-cyan-500',
    gradientVia: 'via-teal-500',
    gradientTo: 'to-emerald-500',
    bgGlow1: 'bg-cyan-600/20',
    bgGlow2: 'bg-teal-500/12',
    bgGlow3: 'bg-emerald-500/8',
    borderAccent: 'border-cyan-500/25',
    textAccent: 'text-cyan-400',
    textAccent2: 'text-teal-400',
    badgeBg: 'bg-cyan-500/10',
    iconColor: 'text-cyan-400',
    hoverBorder: 'hover:border-cyan-500/30',
    shadow: 'shadow-[0_0_40px_rgba(6,182,212,0.3)]',
    shadowHover: 'hover:shadow-[0_0_60px_rgba(6,182,212,0.5)]',
    Icon: Award,
  },
};

export default function SeasonalPageClient({ title, subtitle, description, destinations = [], packages = [], faqs = [], theme = 'christmas' }) {
  const [openFaq, setOpenFaq] = useState(null);
  const [scrollY, setScrollY] = useState(0);
  const t = themeConfig[theme] || themeConfig.christmas;

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const whatsappMsg = `Hi, I'm interested in ${title}. Please share details and pricing.`;

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-hidden">

      {/* CSS Animations */}
      <style jsx global>{`
        @keyframes shimmer { 0% { background-position: -200% 0; } 100% { background-position: 200% 0; } }
        @keyframes float { 0%,100% { transform: translateY(0px); } 50% { transform: translateY(-14px); } }
        @keyframes float-slow { 0%,100% { transform: translateY(0px) rotate(0deg); } 50% { transform: translateY(-20px) rotate(3deg); } }
        @keyframes pulse-glow { 0%,100% { box-shadow: 0 0 30px rgba(16,185,129,0.2), 0 0 60px rgba(20,184,166,0.1); } 50% { box-shadow: 0 0 60px rgba(16,185,129,0.5), 0 0 120px rgba(20,184,166,0.3); } }
        @keyframes gradient-x { 0%,100% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } }
        @keyframes morph { 0%,100% { border-radius: 60% 40% 30% 70%/60% 30% 70% 40%; } 50% { border-radius: 30% 60% 70% 40%/50% 60% 30% 60%; } }
        @keyframes glow-pulse { 0%,100% { opacity: 0.5; transform: scale(1); } 50% { opacity: 1; transform: scale(1.05); } }
        @keyframes reveal-up { from { opacity: 0; transform: translateY(40px); } to { opacity: 1; transform: translateY(0); } }
        .seasonal-animate-shimmer { background-size: 200% 100%; animation: shimmer 2.5s linear infinite; }
        .seasonal-animate-float { animation: float 4s ease-in-out infinite; }
        .seasonal-animate-float-slow { animation: float-slow 6s ease-in-out infinite; }
        .seasonal-animate-pulse-glow { animation: pulse-glow 3s ease-in-out infinite; }
        .seasonal-animate-gradient-x { background-size: 200% 200%; animation: gradient-x 6s ease infinite; }
        .seasonal-animate-morph { animation: morph 8s ease-in-out infinite; }
        .seasonal-animate-glow { animation: glow-pulse 2s ease-in-out infinite; }
        .seasonal-animate-reveal { animation: reveal-up 0.8s ease-out forwards; }
        .seasonal-glass { background: rgba(255,255,255,0.03); backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px); border: 1px solid rgba(255,255,255,0.06); }
        .seasonal-glass-strong { background: rgba(255,255,255,0.05); backdrop-filter: blur(40px); -webkit-backdrop-filter: blur(40px); border: 1px solid rgba(255,255,255,0.08); }
        .seasonal-glass-hover:hover { background: rgba(255,255,255,0.06); border-color: rgba(16,185,129,0.3); box-shadow: 0 8px 32px rgba(16,185,129,0.1), inset 0 1px 0 rgba(255,255,255,0.05); transform: translateY(-2px); }
      `}</style>

      {/* ====== HERO SECTION ====== */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Layered gradient bg */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-emerald-950/50 to-teal-950/30 seasonal-animate-gradient-x" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(16,185,129,0.12),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(20,184,166,0.08),transparent_50%)]" />

        {/* Dot grid */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.5) 1px, transparent 0)', backgroundSize: '32px 32px' }} />

        {/* Floating orbs */}
        <div className={`absolute top-[15%] left-[5%] w-80 h-80 ${t.bgGlow1} rounded-full blur-[100px] seasonal-animate-morph`} />
        <div className={`absolute bottom-[10%] right-[5%] w-[500px] h-[500px] ${t.bgGlow2} rounded-full blur-[150px] seasonal-animate-morph`} style={{ animationDelay: '-4s' }} />
        <div className={`absolute top-[50%] left-[30%] w-60 h-60 ${t.bgGlow3} rounded-full blur-[120px] seasonal-animate-morph`} style={{ animationDelay: '-2s' }} />

        {/* Floating badge */}
        <div className="absolute top-28 right-[8%] hidden lg:block seasonal-animate-float">
          <div className="relative">
            <div className={`absolute -inset-12 ${t.bgGlow1} rounded-full blur-[60px] animate-pulse`} />
            <div className={`relative seasonal-glass-strong rounded-full w-36 h-36 flex items-center justify-center seasonal-animate-pulse-glow border-2 ${t.borderAccent}`}>
              <div className="text-center relative z-10">
                <div className="text-5xl mb-1">{t.emoji}</div>
                <div className={`text-[9px] font-bold ${t.textAccent} uppercase tracking-[0.15em]`}>Special Offer</div>
              </div>
            </div>
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
          <div className={`inline-flex items-center gap-2.5 seasonal-glass-strong px-6 py-3 rounded-full mb-10 ${t.borderAccent} seasonal-animate-glow`}>
            <t.Icon className={`w-4 h-4 ${t.iconColor}`} />
            <span className={`${t.textAccent} font-semibold text-sm tracking-wide`}>{subtitle}</span>
            <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
          </div>

          {/* Title */}
          <div className="mb-8">
            <span className="text-4xl md:text-5xl lg:text-6xl mr-3 md:mr-4">{t.emoji}</span>
            <h1 className="inline text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight">
              <span className={`bg-clip-text text-transparent bg-gradient-to-r ${t.gradientFrom} ${t.gradientVia} ${t.gradientTo}`}>{title}</span>
            </h1>
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl text-white/50 mb-10 max-w-3xl leading-relaxed">{description}</p>

          {/* Stats pills */}
          <div className="flex flex-wrap gap-3 mb-12">
            {[
              { icon: Star, text: '4.9\u2605 (10,000+ reviews)', special: true },
              { icon: Shield, text: 'Verified Drivers' },
              { icon: Clock, text: '24/7 Available' },
              { icon: Car, text: 'AC Sedans & SUVs' },
            ].map((pill, i) => (
              <span key={i} className={`inline-flex items-center gap-2 backdrop-blur-2xl px-5 py-3 rounded-2xl text-sm font-medium transition-all duration-300 hover:scale-105 ${pill.special ? 'bg-yellow-500/10 border border-yellow-500/25 text-yellow-300' : `seasonal-glass border-white/10 text-white/70 ${t.hoverBorder}`}`}>
                <pill.icon className={`w-4 h-4 ${pill.special ? 'text-yellow-400' : t.iconColor}`} /> {pill.text}
              </span>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link onClick={() => trackPhoneCall('seasonal_page')} href="tel:+917668570551" className={`group inline-flex items-center gap-3 bg-gradient-to-r ${t.gradientFrom} ${t.gradientVia} ${t.gradientTo} text-white px-10 py-5 rounded-2xl font-bold text-lg ${t.shadow} ${t.shadowHover} hover:scale-105 transition-all duration-300`}>
              <Phone className="w-5 h-5 group-hover:animate-bounce" /> Call: 7668570551
            </Link>
            <Link onClick={() => trackWhatsAppClick('seasonal_page')} href={`https://wa.me/917668570551?text=${encodeURIComponent(whatsappMsg)}`} className={`group inline-flex items-center gap-3 seasonal-glass-strong text-white px-10 py-5 rounded-2xl font-bold text-lg border border-white/15 ${t.hoverBorder} transition-all duration-300`}>
              <svg className="w-5 h-5 text-emerald-400" fill="currentColor" viewBox="0 0 16 16"><path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" /></svg>
              WhatsApp Quote <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* ====== SOCIAL PROOF STRIP ====== */}
      <section className={`relative py-8 border-y border-emerald-500/10`}>
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/30 via-teal-950/20 to-emerald-950/30" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap justify-center gap-10 md:gap-20">
            {[
              { value: '10,000+', label: 'Happy Travelers', icon: Users },
              { value: '4.9\u2605', label: 'Google Rating', icon: Star },
              { value: '24/7', label: 'Support Available', icon: Clock },
              { value: '100+', label: 'Cities Covered', icon: MapPin },
            ].map((stat, i) => (
              <div key={i} className="group text-center flex items-center gap-3 cursor-default">
                <div className="w-10 h-10 rounded-xl seasonal-glass flex items-center justify-center transition-all">
                  <stat.icon className={`w-5 h-5 ${t.iconColor}`} />
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

      {/* ====== DESTINATIONS SECTION ====== */}
      {destinations.length > 0 && (
        <section className="relative py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-16">
              <div className={`inline-flex items-center gap-2 ${t.badgeBg} px-4 py-2 rounded-full mb-4`}>
                <MapPin className={`w-4 h-4 ${t.iconColor}`} />
                <span className={`${t.textAccent} text-sm font-semibold`}>Top Destinations</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4">Popular Getaways</h2>
              <p className="text-white/40 max-w-2xl mx-auto">Hand-picked destinations with verified cab service, transparent pricing, and 24/7 support</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {destinations.map((dest, i) => (
                <div key={i} className={`group seasonal-glass rounded-2xl p-6 border border-white/6 ${t.hoverBorder} transition-all duration-500 hover:-translate-y-2`}>
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${t.gradientFrom} ${t.gradientTo} flex items-center justify-center flex-shrink-0`}>
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">{dest.name}</h3>
                      {dest.distance && <p className={`text-sm ${t.textAccent2}`}>{dest.distance}</p>}
                    </div>
                  </div>
                  <p className="text-white/50 text-sm mb-4 leading-relaxed">{dest.description}</p>
                  {dest.highlights && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {dest.highlights.map((h, j) => (
                        <span key={j} className={`text-xs ${t.badgeBg} ${t.textAccent} px-3 py-1 rounded-full`}>{h}</span>
                      ))}
                    </div>
                  )}
                  {dest.price && (
                    <div className="flex items-center justify-between pt-4 border-t border-white/5">
                      <span className="text-white/30 text-sm">Starting from</span>
                      <span className={`${t.textAccent} font-bold text-lg`}>{dest.price}</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ====== PACKAGES SECTION ====== */}
      {packages.length > 0 && (
        <section className="relative py-24">
          <div className={`absolute top-0 left-[20%] w-96 h-96 ${t.bgGlow2} rounded-full blur-[200px]`} />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-16">
              <div className={`inline-flex items-center gap-2 ${t.badgeBg} px-4 py-2 rounded-full mb-4`}>
                <Gift className={`w-4 h-4 ${t.iconColor}`} />
                <span className={`${t.textAccent} text-sm font-semibold`}>Special Packages</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4">Travel Packages</h2>
              <p className="text-white/40 max-w-2xl mx-auto">All-inclusive cab packages with transparent pricing. No hidden charges.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {packages.map((pkg, i) => (
                <div key={i} className={`relative seasonal-glass rounded-2xl overflow-hidden border border-white/6 ${t.hoverBorder} transition-all duration-500 hover:-translate-y-1`}>
                  {pkg.popular && (
                    <div className={`absolute top-4 right-4 ${t.badgeBg} px-3 py-1 rounded-full text-xs font-bold ${t.textAccent} z-10`}>
                      Most Popular
                    </div>
                  )}
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${t.gradientFrom} ${t.gradientTo} flex items-center justify-center`}>
                        <Car className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white">{pkg.name}</h3>
                        {pkg.duration && <p className={`text-xs ${t.textAccent2}`}>{pkg.duration}</p>}
                      </div>
                    </div>
                    <p className="text-white/50 text-sm mb-4">{pkg.description}</p>
                    {pkg.includes && (
                      <ul className="space-y-2 mb-5">
                        {pkg.includes.map((item, j) => (
                          <li key={j} className="flex items-center gap-2 text-sm text-white/60">
                            <CheckCircle2 className={`w-4 h-4 ${t.iconColor} flex-shrink-0`} /> {item}
                          </li>
                        ))}
                      </ul>
                    )}
                    <div className="flex items-center justify-between pt-4 border-t border-white/5">
                      {pkg.price && <span className={`text-2xl font-black ${t.textAccent}`}>{pkg.price}</span>}
                      <Link onClick={() => trackWhatsAppClick('seasonal_package')} href={`https://wa.me/917668570551?text=${encodeURIComponent(`Hi, I'm interested in the ${pkg.name} package. Please share details.`)}`} className={`inline-flex items-center gap-2 bg-gradient-to-r ${t.gradientFrom} ${t.gradientTo} text-white px-6 py-3 rounded-xl text-sm font-bold hover:scale-105 transition-all`}>
                        Book Now <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ====== WHY CHOOSE US ====== */}
      <section className="relative py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">Why Book With Triveni Cabs?</h2>
            <p className="text-white/40">Trusted by 10,000+ travelers across India</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Shield, title: 'Verified Drivers', desc: 'Background-checked, trained, and experienced chauffeurs for a safe journey' },
              { icon: Zap, title: 'Instant Booking', desc: 'Book via call or WhatsApp in under 2 minutes. No app download needed' },
              { icon: Award, title: 'Best Prices', desc: 'Transparent pricing with no hidden charges. Pay what you see upfront' },
              { icon: Clock, title: '24/7 Support', desc: 'Round-the-clock customer support via phone, WhatsApp, and email' },
            ].map((feature, i) => (
              <div key={i} className={`seasonal-glass rounded-2xl p-6 border border-white/6 ${t.hoverBorder} transition-all duration-300 text-center`}>
                <div className={`w-14 h-14 mx-auto rounded-2xl bg-gradient-to-br ${t.gradientFrom} ${t.gradientTo} flex items-center justify-center mb-4`}>
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== FAQ SECTION ====== */}
      {faqs.length > 0 && (
        <section className="relative py-24 border-t border-white/5">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-16">
              <div className={`inline-flex items-center gap-2 ${t.badgeBg} px-4 py-2 rounded-full mb-4`}>
                <Sparkles className={`w-4 h-4 ${t.iconColor}`} />
                <span className={`${t.textAccent} text-sm font-semibold`}>Got Questions?</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-white">Frequently Asked Questions</h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div key={i} className={`seasonal-glass rounded-2xl border border-white/6 ${openFaq === i ? t.borderAccent.replace('border-', 'border-').replace('/25', '/40') : ''} transition-all duration-300 overflow-hidden`}>
                  <button onClick={() => setOpenFaq(openFaq === i ? null : i)} aria-expanded={openFaq === i} aria-label={openFaq === i ? 'Collapse answer' : 'Expand answer'} className="w-full flex items-center justify-between p-6 text-left focus:outline-none focus:ring-2 focus:ring-white/30 rounded-2xl">
                    <span className="text-white font-semibold pr-4">{faq.question}</span>
                    <ChevronDown className={`w-5 h-5 ${t.iconColor} flex-shrink-0 transition-transform duration-300 ${openFaq === i ? 'rotate-180' : ''}`} />
                  </button>
                  <div className={`transition-all duration-300 ${openFaq === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
                    <div className="px-6 pb-6 text-white/50 leading-relaxed">{faq.answer}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ====== FINAL CTA ====== */}
      <section className="relative py-24 border-t border-white/5">
        <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] ${t.bgGlow1} rounded-full blur-[200px] opacity-30`} />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="text-5xl mb-6">{t.emoji}</div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6">Ready to Book Your Trip?</h2>
          <p className="text-white/40 text-lg mb-10 max-w-2xl mx-auto">Get instant quotes, transparent pricing, and 24/7 support. Over 10,000 happy travelers trust Triveni Cabs.</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link onClick={() => trackPhoneCall('seasonal_cta')} href="tel:+917668570551" className={`group inline-flex items-center gap-3 bg-gradient-to-r ${t.gradientFrom} ${t.gradientVia} ${t.gradientTo} text-white px-10 py-5 rounded-2xl font-bold text-lg ${t.shadow} ${t.shadowHover} hover:scale-105 transition-all duration-300`}>
              <Phone className="w-5 h-5 group-hover:animate-bounce" /> Call Now: 7668570551
            </Link>
            <Link onClick={() => trackWhatsAppClick('seasonal_cta')} href={`https://wa.me/917668570551?text=${encodeURIComponent(whatsappMsg)}`} className={`group inline-flex items-center gap-3 seasonal-glass-strong text-white px-10 py-5 rounded-2xl font-bold text-lg border border-white/15 ${t.hoverBorder} transition-all duration-300`}>
              <svg className="w-5 h-5 text-emerald-400" fill="currentColor" viewBox="0 0 16 16"><path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" /></svg>
              WhatsApp Us <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap justify-center gap-6 mt-12">
            {['Verified Drivers', 'No Hidden Charges', 'Free Cancellation', '24/7 Support'].map((badge, i) => (
              <span key={i} className="flex items-center gap-2 text-white/30 text-sm">
                <CheckCircle2 className={`w-4 h-4 ${t.iconColor}`} /> {badge}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
