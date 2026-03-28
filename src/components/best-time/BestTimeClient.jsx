'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  Phone, ArrowRight, ChevronDown, Shield, Clock, Car, CheckCircle2,
  Star, Users, Calendar, Sparkles, MapPin, Navigation, ChevronRight, Zap
} from '@/components/ui/icons';
import { trackWhatsAppClick, trackPhoneCall } from '@/utilis/analytics';

const seasonEmoji = { Winter: '❄️', Summer: '☀️', Monsoon: '🌧️', Autumn: '🍂', Spring: '🌸', 'Spring/Summer': '🌸', 'Post-Monsoon': '🍂' };
const crowdColor = { High: 'text-red-400', Medium: 'text-amber-400', Low: 'text-emerald-400' };
const pricingBadge = { Peak: 'bg-red-500/10 text-red-400 border-red-500/20', Moderate: 'bg-amber-500/10 text-amber-400 border-amber-500/20', Budget: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' };

export default function BestTimeClient({ data, relatedDestinations }) {
  const [openFaq, setOpenFaq] = useState(null);
  const [activeSeason, setActiveSeason] = useState(0);

  const whatsappMsg = `Hi, I want to book a cab to ${data.destination}. Best time: ${data.peakSeason}`;

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-hidden">

      <style jsx global>{`
        @keyframes float { 0%,100% { transform: translateY(0px); } 50% { transform: translateY(-14px); } }
        @keyframes morph { 0%,100% { border-radius: 60% 40% 30% 70%/60% 30% 70% 40%; } 50% { border-radius: 30% 60% 70% 40%/50% 60% 30% 60%; } }
        @keyframes gradient-x { 0%,100% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } }
        @keyframes glow-pulse { 0%,100% { opacity: 0.6; } 50% { opacity: 1; } }
        .animate-float { animation: float 4s ease-in-out infinite; }
        .animate-morph { animation: morph 8s ease-in-out infinite; }
        .animate-gradient-x { background-size: 200% 200%; animation: gradient-x 6s ease infinite; }
        .animate-glow { animation: glow-pulse 2s ease-in-out infinite; }
        .glass { background: rgba(255,255,255,0.03); backdrop-filter: blur(20px); border: 1px solid rgba(255,255,255,0.06); }
        .glass-strong { background: rgba(255,255,255,0.05); backdrop-filter: blur(40px); border: 1px solid rgba(255,255,255,0.08); }
        .glass-hover:hover { background: rgba(255,255,255,0.06); border-color: rgba(16,185,129,0.3); box-shadow: 0 8px 32px rgba(16,185,129,0.08); transform: translateY(-2px); }
      `}</style>

      {/* ═══ HERO: Nature Explorer (Emerald/Teal) ═══ */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-emerald-950/50 to-teal-950/30 animate-gradient-x" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(16,185,129,0.12),transparent_50%)]" />
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.4) 1px, transparent 0)', backgroundSize: '36px 36px' }} />

        <div className="absolute top-[15%] left-[5%] w-80 h-80 bg-emerald-600/15 rounded-full blur-[120px] animate-morph" />
        <div className="absolute bottom-[10%] right-[5%] w-[450px] h-[450px] bg-teal-500/10 rounded-full blur-[150px] animate-morph" style={{ animationDelay: '-4s' }} />
        <div className="absolute top-[50%] left-[40%] w-48 h-48 bg-cyan-500/8 rounded-full blur-[100px] animate-morph" style={{ animationDelay: '-2s' }} />

        {/* Floating season badge */}
        <div className="absolute top-28 right-[10%] hidden lg:block animate-float">
          <div className="relative">
            <div className="absolute -inset-10 bg-emerald-500/15 rounded-full blur-[50px] animate-pulse" />
            <div className="relative glass-strong rounded-full w-40 h-40 flex items-center justify-center border-2 border-emerald-500/20" style={{ boxShadow: '0 0 40px rgba(16,185,129,0.2)' }}>
              <div className="text-center">
                <div className="text-4xl mb-1">{seasonEmoji[data.seasons?.[0]?.name] || '🌍'}</div>
                <div className="text-[10px] font-bold text-emerald-300/80 uppercase tracking-[0.2em]">Best Season</div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute -bottom-1 left-0 right-0 h-40">
          <svg viewBox="0 0 1440 120" className="w-full h-full" preserveAspectRatio="none">
            <path d="M0,80 C240,120 480,20 720,60 C960,100 1200,30 1440,70 L1440,120 L0,120 Z" fill="#020617" />
          </svg>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-32">
          <div className="inline-flex items-center gap-2.5 glass-strong px-6 py-3 rounded-full mb-10 border border-emerald-500/25 animate-glow">
            <Calendar className="w-4 h-4 text-emerald-400" />
            <span className="text-emerald-300 font-semibold text-sm tracking-wide">Best Time to Visit Guide 2026</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-9xl font-black tracking-tight mb-6">
            <span className="text-white/30">Best Time to Visit</span><br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400">{data.destination}</span>
          </h1>

          <p className="text-xl md:text-2xl text-white/40 mb-8 max-w-3xl font-medium">{data.overview}</p>

          <div className="flex flex-wrap gap-3 mb-12">
            <span className="inline-flex items-center gap-2 glass px-5 py-3 rounded-2xl text-sm text-emerald-300 font-bold border border-emerald-500/20">
              <Sparkles className="w-4 h-4" /> Peak: {data.peakSeason}
            </span>
            {data.idealDuration && (
              <span className="inline-flex items-center gap-2 glass px-5 py-3 rounded-2xl text-sm text-white/60">
                <Clock className="w-4 h-4 text-teal-400" /> {data.idealDuration} recommended
              </span>
            )}
            <span className="inline-flex items-center gap-2 bg-yellow-500/10 px-5 py-3 rounded-2xl text-sm text-yellow-300 font-bold border border-yellow-500/20">
              <Star className="w-4 h-4" /> 4.9★ Rated Cab Service
            </span>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link onClick={() => trackPhoneCall('best_time')} href="tel:+917668570551" className="inline-flex items-center gap-3 bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-10 py-5 rounded-2xl font-bold text-lg shadow-[0_0_40px_rgba(16,185,129,0.3)] hover:shadow-[0_0_60px_rgba(16,185,129,0.5)] hover:scale-105 transition-all duration-300">
              <Phone className="w-5 h-5" /> Call: 7668570551
            </Link>
            <Link onClick={() => trackWhatsAppClick('best_time')} href={`https://wa.me/917668570551?text=${encodeURIComponent(whatsappMsg)}`} className="inline-flex items-center gap-3 glass-strong text-white px-10 py-5 rounded-2xl font-bold text-lg hover:border-emerald-500/40 transition-all duration-300">
              WhatsApp Booking <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ SOCIAL PROOF ═══ */}
      <section className="relative py-8 border-y border-emerald-500/10">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/20 via-teal-950/20 to-emerald-950/20" />
        <div className="relative max-w-7xl mx-auto px-4 flex flex-wrap justify-center gap-10 md:gap-20">
          {[
            { value: '10,000+', label: 'Happy Travelers', icon: Users },
            { value: '4.9★', label: 'Google Rating', icon: Star },
            { value: '24/7', label: 'Booking Available', icon: Clock },
            { value: '₹11/km', label: 'Sedan Starting', icon: Car },
          ].map((s, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl glass flex items-center justify-center">
                <s.icon className="w-5 h-5 text-emerald-400" />
              </div>
              <div>
                <div className="text-xl font-black">{s.value}</div>
                <div className="text-[10px] text-white/40 uppercase tracking-widest">{s.label}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══ SEASONAL GUIDE: Interactive season cards ═══ */}
      <section className="py-24 md:py-32 px-4 sm:px-6 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.04),transparent_70%)]" />
        <div className="relative max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <span className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-emerald-400 font-semibold text-xs tracking-widest uppercase mb-4">
              <Calendar className="w-3.5 h-3.5" /> Seasonal Guide
            </span>
            <h2 className="text-4xl md:text-6xl font-black tracking-tight">When to Visit {data.destination}</h2>
            <p className="text-white/40 mt-4 text-lg">Click a season to explore weather, crowds &amp; pricing</p>
          </div>

          {/* Season selector tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {data.seasons.map((season, i) => (
              <button key={i} onClick={() => setActiveSeason(i)} className={`px-6 py-3 rounded-2xl font-bold text-sm transition-all duration-300 ${activeSeason === i ? 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-[0_0_30px_rgba(16,185,129,0.3)]' : 'glass text-white/60 hover:text-white hover:border-emerald-500/30'}`}>
                {seasonEmoji[season.name] || '🌍'} {season.name}
              </button>
            ))}
          </div>

          {/* Active season detail card */}
          {data.seasons[activeSeason] && (
            <div className="glass-strong rounded-[2rem] p-8 md:p-12 relative overflow-hidden" style={{ boxShadow: '0 0 60px rgba(16,185,129,0.05), inset 0 1px 0 rgba(255,255,255,0.05)' }}>
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent" />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div>
                  <div className="text-5xl mb-4">{seasonEmoji[data.seasons[activeSeason].name] || '🌍'}</div>
                  <h3 className="text-3xl font-black mb-2">{data.seasons[activeSeason].name}</h3>
                  <p className="text-emerald-400/70 font-semibold text-sm mb-6">{data.seasons[activeSeason].months}</p>
                  <p className="text-white/50 leading-relaxed text-[15px]">{data.seasons[activeSeason].description}</p>
                </div>

                <div className="space-y-4">
                  {/* Temp */}
                  <div className="glass rounded-2xl p-5 border border-white/[0.04]">
                    <div className="text-xs text-white/30 uppercase tracking-wider mb-1">Temperature</div>
                    <div className="text-2xl font-black text-white">{data.seasons[activeSeason].temp}</div>
                  </div>
                  {/* Crowd */}
                  <div className="glass rounded-2xl p-5 border border-white/[0.04]">
                    <div className="text-xs text-white/30 uppercase tracking-wider mb-1">Crowd Level</div>
                    <div className={`text-2xl font-black ${crowdColor[data.seasons[activeSeason].crowd] || 'text-white'}`}>
                      {data.seasons[activeSeason].crowd}
                    </div>
                  </div>
                  {/* Pricing */}
                  <div className="glass rounded-2xl p-5 border border-white/[0.04]">
                    <div className="text-xs text-white/30 uppercase tracking-wider mb-1">Hotel & Cab Pricing</div>
                    <span className={`inline-flex px-4 py-1.5 rounded-full text-sm font-bold border ${pricingBadge[data.seasons[activeSeason].pricing] || 'bg-white/5 text-white/60 border-white/10'}`}>
                      {data.seasons[activeSeason].pricing} Season Rates
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Recommended months badges */}
          <div className="mt-12 text-center">
            <h3 className="text-lg font-bold text-white/50 mb-4">Best Months to Visit</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {data.recommendedMonths.map((month, i) => (
                <span key={i} className="glass px-6 py-3 rounded-2xl font-bold text-emerald-300 border border-emerald-500/20 hover:border-emerald-400/40 hover:shadow-[0_0_20px_rgba(16,185,129,0.1)] transition-all duration-300 cursor-default">
                  {month}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ FESTIVALS ═══ */}
      {data.festivals && data.festivals.length > 0 && (
        <section className="py-24 md:py-32 px-4 sm:px-6 relative">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_left,rgba(20,184,166,0.04),transparent_60%)]" />
          <div className="relative max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-teal-400 font-semibold text-xs tracking-widest uppercase mb-4">
                🎉 Festivals &amp; Events
              </span>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight">Festivals in {data.destination}</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {data.festivals.map((fest, i) => (
                <div key={i} className="glass glass-hover rounded-2xl p-6 transition-all duration-500 cursor-default">
                  <div className="text-3xl mb-3">🎪</div>
                  <h3 className="text-lg font-black mb-1">{fest.name}</h3>
                  <p className="text-emerald-400 text-sm font-semibold mb-3">{fest.month}</p>
                  <p className="text-white/40 text-sm leading-relaxed">{fest.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ═══ PEAK vs OFF SEASON ═══ */}
      <section className="py-24 md:py-32 px-4 sm:px-6 relative">
        <div className="relative max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-cyan-400 font-semibold text-xs tracking-widest uppercase mb-4">
              📊 Season Comparison
            </span>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight">Peak vs Off Season</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Peak */}
            <div className="glass-strong rounded-[2rem] p-8 border border-emerald-500/15 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent" />
              <div className="inline-flex items-center gap-2 bg-emerald-500/15 px-4 py-1.5 rounded-full text-sm font-bold text-emerald-400 border border-emerald-500/20 mb-5">
                <CheckCircle2 className="w-4 h-4" /> Recommended
              </div>
              <h3 className="text-2xl font-black mb-2">Peak Season</h3>
              <p className="text-emerald-400 font-semibold mb-4">{data.peakSeason}</p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-white/60 text-sm"><CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" /> Best weather for sightseeing</li>
                <li className="flex items-center gap-3 text-white/60 text-sm"><CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" /> All attractions fully open</li>
                <li className="flex items-center gap-3 text-white/60 text-sm"><CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" /> Festival season experiences</li>
                <li className="flex items-center gap-3 text-white/40 text-sm"><Zap className="w-4 h-4 text-amber-400 flex-shrink-0" /> Higher hotel &amp; cab demand</li>
              </ul>
            </div>
            {/* Off season */}
            <div className="glass rounded-[2rem] p-8 relative overflow-hidden">
              <div className="inline-flex items-center gap-2 bg-amber-500/10 px-4 py-1.5 rounded-full text-sm font-bold text-amber-400 border border-amber-500/20 mb-5">
                💰 Budget Friendly
              </div>
              <h3 className="text-2xl font-black mb-2">Off Season</h3>
              <p className="text-amber-400 font-semibold mb-4">{data.offSeason}</p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-white/60 text-sm"><CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" /> 30-50% lower prices</li>
                <li className="flex items-center gap-3 text-white/60 text-sm"><CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" /> Fewer crowds at attractions</li>
                <li className="flex items-center gap-3 text-white/60 text-sm"><CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" /> Easier hotel availability</li>
                <li className="flex items-center gap-3 text-white/40 text-sm"><Zap className="w-4 h-4 text-red-400 flex-shrink-0" /> Some activities may be limited</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ CAB BOOKING ═══ */}
      <section className="py-24 md:py-32 px-4 sm:px-6 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(16,185,129,0.05),transparent_60%)]" />
        <div className="relative max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-emerald-400 font-semibold text-xs tracking-widest uppercase mb-4">
              <Car className="w-3.5 h-3.5" /> Plan Your Trip
            </span>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight">Book a Cab to {data.destination}</h2>
            <p className="text-white/40 mt-4 text-lg">AC vehicles &middot; Verified drivers &middot; Best prices guaranteed</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: 'Sedan', sub: 'Dzire / Etios', seats: '4', perKm: '₹11', icon: '🚗', gradient: 'from-emerald-500 to-teal-600', popular: false },
              { name: 'SUV', sub: 'Innova / Ertiga', seats: '6-7', perKm: '₹14', icon: '🚙', gradient: 'from-teal-500 to-cyan-600', popular: true },
              { name: 'Tempo', sub: '12-Seater AC', seats: '12', perKm: '₹20', icon: '🚐', gradient: 'from-cyan-500 to-blue-600', popular: false },
            ].map((v, i) => (
              <div key={i} className={`group glass rounded-[2rem] p-8 transition-all duration-500 hover:border-emerald-500/30 hover:shadow-[0_0_40px_rgba(16,185,129,0.08)] ${v.popular ? 'ring-2 ring-emerald-500/20' : ''}`}>
                {v.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2"><span className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-[10px] font-black px-5 py-1.5 rounded-full uppercase tracking-[0.2em]">Popular</span></div>
                )}
                <div className="text-center mb-6">
                  <div className="text-4xl mb-2">{v.icon}</div>
                  <h3 className="text-xl font-black">{v.name}</h3>
                  <p className="text-white/40 text-sm">{v.sub} &middot; {v.seats} Seater</p>
                </div>
                <div className="glass rounded-2xl p-5 mb-6 text-center">
                  <div className="text-xs text-white/30 uppercase tracking-wider mb-1">Per Kilometer</div>
                  <div className={`text-4xl font-black bg-clip-text text-transparent bg-gradient-to-r ${v.gradient}`}>{v.perKm}</div>
                  <div className="text-white/20 text-sm mt-1">Min 300 km billing</div>
                </div>
                <div className="space-y-2.5 mb-6">
                  {['AC Vehicle', 'Verified Driver', 'GPS Tracking', 'Fuel Included'].map((f, j) => (
                    <div key={j} className="flex items-center gap-2.5 text-sm text-white/40"><CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" /> {f}</div>
                  ))}
                </div>
                <Link onClick={() => trackWhatsAppClick('best_time_cab')} href={`https://wa.me/917668570551?text=${encodeURIComponent(`Hi, I want to book a ${v.name} to ${data.destination}`)}`} className={`block w-full text-center bg-gradient-to-r ${v.gradient} text-white py-4 rounded-2xl font-bold hover:scale-[1.02] transition-all shadow-lg`}>
                  Book {v.name} <ArrowRight className="w-4 h-4 inline ml-1" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FAQ ═══ */}
      <section className="py-24 md:py-32 px-4 sm:px-6 relative">
        <div className="relative max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-teal-400 font-semibold text-xs tracking-widest uppercase mb-4">FAQ</span>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight">Common Questions</h2>
          </div>

          <div className="space-y-4">
            {data.faqs.map((faq, i) => (
              <div key={i} className={`glass rounded-2xl transition-all duration-500 ${openFaq === i ? 'border-emerald-500/30 shadow-[0_0_30px_rgba(16,185,129,0.06)] bg-white/[0.05]' : 'hover:border-white/10'}`}>
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} aria-expanded={openFaq === i} aria-label={openFaq === i ? 'Collapse answer' : 'Expand answer'} className="w-full flex items-center justify-between p-6 text-left focus:outline-none focus:ring-2 focus:ring-emerald-500/50 rounded-2xl">
                  <span className="font-semibold text-white/80 pr-8">{faq.question}</span>
                  <div className={`w-8 h-8 rounded-full glass flex items-center justify-center flex-shrink-0 transition-all duration-300 ${openFaq === i ? 'bg-emerald-500/20 border-emerald-500/30 rotate-180' : ''}`}>
                    <ChevronDown className="w-4 h-4 text-emerald-400" />
                  </div>
                </button>
                <div className={`overflow-hidden transition-all duration-500 ${openFaq === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="px-6 pb-6">
                    <div className="h-px bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent mb-4" />
                    <p className="text-white/50 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ RELATED DESTINATIONS ═══ */}
      {relatedDestinations.length > 0 && (
        <section className="py-24 md:py-32 px-4 sm:px-6 relative">
          <div className="relative max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-emerald-400 font-semibold text-xs tracking-widest uppercase mb-4">
                <Navigation className="w-3.5 h-3.5" /> Explore More
              </span>
              <h2 className="text-3xl md:text-4xl font-black">Other Destinations</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedDestinations.map((r, i) => (
                <Link key={i} href={`/best-time-to-visit/${r.slug}`} className="group glass rounded-2xl p-6 transition-all duration-500 hover:border-emerald-500/30 hover:-translate-y-1">
                  <div className="text-3xl mb-3">{seasonEmoji[r.seasons?.[0]?.name] || '🌍'}</div>
                  <h3 className="text-lg font-black mb-1">{r.destination}</h3>
                  <p className="text-emerald-400 text-sm font-semibold">{r.peakSeason}</p>
                  <div className="mt-3 text-sm font-bold text-emerald-400 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-all">
                    View Guide <ChevronRight className="w-3.5 h-3.5" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ═══ FINAL CTA ═══ */}
      <section className="py-28 md:py-36 px-4 sm:px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/40 via-teal-950/50 to-emerald-950/40" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-500/8 rounded-full blur-[200px]" />

        <div className="relative max-w-4xl mx-auto text-center">
          <div className="glass-strong rounded-[2.5rem] p-12 md:p-16 relative overflow-hidden" style={{ boxShadow: 'inset 0 0 40px rgba(16,185,129,0.05), 0 0 60px rgba(16,185,129,0.03)' }}>
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal-500/30 to-transparent" />

            <div className="text-5xl mb-6">🗺️</div>
            <h2 className="text-4xl md:text-5xl font-black mb-4">Plan Your {data.destination} Trip</h2>
            <p className="text-white/40 text-lg mb-3">Best time: <span className="text-emerald-400 font-bold">{data.peakSeason}</span></p>
            <p className="text-white/20 text-sm mb-12">AC cabs from ₹11/km &middot; Verified drivers &middot; 24/7 booking &middot; 4.9★ rated</p>

            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <Link onClick={() => trackPhoneCall('best_time_cta')} href="tel:+917668570551" className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-12 py-5 rounded-2xl font-bold text-lg shadow-[0_0_50px_rgba(16,185,129,0.3)] hover:scale-105 transition-all duration-300">
                <Phone className="w-5 h-5" /> Call: 7668570551
              </Link>
              <Link onClick={() => trackWhatsAppClick('best_time_cta')} href={`https://wa.me/917668570551?text=${encodeURIComponent(whatsappMsg)}`} className="inline-flex items-center justify-center gap-3 bg-emerald-500/10 text-emerald-300 px-12 py-5 rounded-2xl font-bold text-lg border border-emerald-500/25 hover:bg-emerald-500/20 transition-all duration-300">
                WhatsApp Booking <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="h-16 md:hidden" />
    </div>
  );
}
