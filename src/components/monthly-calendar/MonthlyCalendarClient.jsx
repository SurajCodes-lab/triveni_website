'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  Phone, ArrowRight, ChevronDown, Shield, Clock, Car, CheckCircle2,
  MapPin, Star, Users, Sparkles, ChevronRight, ChevronLeft, Calendar,
  Thermometer, CloudSun, Compass, Award
} from '@/components/ui/icons';
import { trackWhatsAppClick, trackPhoneCall } from '@/utilis/analytics';

export default function MonthlyCalendarClient({ data, prev, next }) {
  const [openFaq, setOpenFaq] = useState(null);
  const [activeDest, setActiveDest] = useState(0);
  const whatsappMsg = `Hi, I want to plan a trip in ${data.month}. Please suggest destinations and cab rates.`;

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-hidden">
      <style jsx global>{`
        @keyframes float { 0%,100% { transform: translateY(0px); } 50% { transform: translateY(-14px); } }
        @keyframes gradient-x { 0%,100% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } }
        @keyframes morph { 0%,100% { border-radius: 60% 40% 30% 70%/60% 30% 70% 40%; } 50% { border-radius: 30% 60% 70% 40%/50% 60% 30% 60%; } }
        @keyframes glow-pulse { 0%,100% { opacity: 0.5; } 50% { opacity: 1; } }
        .animate-gradient-x { background-size: 200% 200%; animation: gradient-x 6s ease infinite; }
        .animate-morph { animation: morph 8s ease-in-out infinite; }
        .animate-float { animation: float 4s ease-in-out infinite; }
        .animate-glow { animation: glow-pulse 2s ease-in-out infinite; }
        .glass-card { background: rgba(255,255,255,0.03); backdrop-filter: blur(20px); border: 1px solid rgba(255,255,255,0.06); }
        .glass-card-hover:hover { background: rgba(255,255,255,0.06); border-color: rgba(16,185,129,0.3); box-shadow: 0 8px 32px rgba(16,185,129,0.1); transform: translateY(-2px); }
        .glass-strong { background: rgba(255,255,255,0.05); backdrop-filter: blur(40px); border: 1px solid rgba(255,255,255,0.08); }
      `}</style>

      {/* HERO */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-emerald-950/40 to-teal-950/30 animate-gradient-x" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(16,185,129,0.15),transparent_50%)]" />
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.5) 1px, transparent 0)', backgroundSize: '32px 32px' }} />
        <div className="absolute top-[15%] left-[5%] w-80 h-80 bg-emerald-600/20 rounded-full blur-[100px] animate-morph" />
        <div className="absolute bottom-[10%] right-[5%] w-[400px] h-[400px] bg-teal-500/12 rounded-full blur-[120px] animate-morph" style={{ animationDelay: '-4s' }} />

        <div className="absolute -bottom-1 left-0 right-0 h-32">
          <svg viewBox="0 0 1440 120" className="w-full h-full" preserveAspectRatio="none"><path d="M0,80 C240,120 480,20 720,60 C960,100 1200,30 1440,70 L1440,120 L0,120 Z" fill="#020617" /></svg>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-32">
          {/* Month navigation */}
          <div className="flex items-center gap-4 mb-10">
            <Link href={`/where-to-go/${prev.slug}`} className="glass-card px-4 py-2 rounded-xl flex items-center gap-1 text-sm text-white/50 hover:text-emerald-400 hover:border-emerald-500/30 transition-all">
              <ChevronLeft className="w-4 h-4" /> {prev.month}
            </Link>
            <div className="inline-flex items-center gap-2.5 glass-strong px-6 py-3 rounded-full border border-emerald-500/25 animate-glow">
              <Calendar className="w-4 h-4 text-emerald-400" />
              <span className="text-emerald-300 font-semibold text-sm tracking-wide">Travel Calendar 2026</span>
            </div>
            <Link href={`/where-to-go/${next.slug}`} className="glass-card px-4 py-2 rounded-xl flex items-center gap-1 text-sm text-white/50 hover:text-emerald-400 hover:border-emerald-500/30 transition-all">
              {next.month} <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400">{data.month}</span>
          </h1>

          <p className="text-xl md:text-2xl text-white/40 mb-8 max-w-3xl font-medium">{data.tagline}</p>

          <div className="flex flex-wrap gap-3 mb-12">
            {[
              { icon: MapPin, text: `${data.destinations.length} Destinations` },
              { icon: Calendar, text: `${data.festivals.length} Festivals` },
              { icon: Star, text: '4.9★ Rating', special: true },
            ].map((pill, i) => (
              <span key={i} className={`inline-flex items-center gap-2 backdrop-blur-2xl px-5 py-3 rounded-2xl text-sm font-medium ${pill.special ? 'bg-yellow-500/10 border border-yellow-500/25 text-yellow-300' : 'glass-card border-white/10 text-white/70'}`}>
                <pill.icon className={`w-4 h-4 ${pill.special ? 'text-yellow-400' : 'text-emerald-400'}`} /> {pill.text}
              </span>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link onClick={() => trackPhoneCall('monthly_calendar')} href="tel:+917668570551" className="group inline-flex items-center gap-3 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 text-white px-10 py-5 rounded-2xl font-bold text-lg shadow-[0_0_40px_rgba(16,185,129,0.3)] hover:scale-105 transition-all">
              <Phone className="w-5 h-5 group-hover:animate-bounce" /> Call: 7668570551
            </Link>
            <Link onClick={() => trackWhatsAppClick('monthly_calendar')} href={`https://wa.me/917668570551?text=${encodeURIComponent(whatsappMsg)}`} className="group inline-flex items-center gap-3 glass-strong text-white px-10 py-5 rounded-2xl font-bold text-lg border border-white/15 hover:border-emerald-500/40 transition-all">
              <svg className="w-5 h-5 text-emerald-400" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.611.611l4.458-1.495A11.943 11.943 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.318 0-4.468-.67-6.29-1.823l-.451-.27-2.649.888.888-2.649-.27-.451A9.965 9.965 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/></svg>
              Plan My Trip <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* DESTINATIONS */}
      <section className="py-24 md:py-32 px-4 sm:px-6 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.05),transparent_70%)]" />
        <div className="relative max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <span className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full text-emerald-400 font-semibold text-xs tracking-widest uppercase mb-4">
              <Compass className="w-3.5 h-3.5" /> Top Destinations
            </span>
            <h2 className="text-4xl md:text-6xl font-black tracking-tight">Where to Go in {data.month}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {data.destinations.map((dest, i) => (
              <div
                key={i}
                onClick={() => setActiveDest(activeDest === i ? -1 : i)}
                className={`glass-card glass-card-hover rounded-2xl p-6 cursor-pointer transition-all duration-300 ${activeDest === i ? 'ring-2 ring-emerald-500/30' : ''}`}
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-black">{dest.name}</h3>
                    <p className="text-white/40 text-sm mt-1">{dest.why}</p>
                  </div>
                  <ChevronDown className={`w-5 h-5 text-emerald-400 transition-transform flex-shrink-0 ${activeDest === i ? 'rotate-180' : ''}`} />
                </div>

                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="inline-flex items-center gap-1 text-xs glass-card px-3 py-1.5 rounded-full text-white/50">
                    <CloudSun className="w-3 h-3 text-emerald-400" /> {dest.weather}
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs glass-card px-3 py-1.5 rounded-full text-white/50">
                    <Users className="w-3 h-3 text-teal-400" /> {dest.crowd}
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs glass-card px-3 py-1.5 rounded-full text-white/50">
                    <Car className="w-3 h-3 text-cyan-400" /> {typeof dest.cabFare === 'number' ? `From \u20b9${dest.cabFare.toLocaleString('en-IN')}` : dest.cabFare}
                  </span>
                </div>

                {activeDest === i && (
                  <div className="mt-4 space-y-3 animate-in">
                    <div className="flex items-center gap-2 text-sm">
                      <span className="text-emerald-400 font-bold">Budget:</span>
                      <span className="text-white/60">{dest.budgetRange} per person</span>
                    </div>
                    <div>
                      <span className="text-emerald-400 font-bold text-sm">Highlights:</span>
                      <div className="mt-2 space-y-1">
                        {dest.highlights.map((h, j) => (
                          <div key={j} className="flex items-center gap-2 text-sm text-white/50">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400/60 flex-shrink-0" /> {h}
                          </div>
                        ))}
                      </div>
                    </div>
                    <a href="tel:+917668570551" className="inline-flex items-center gap-2 text-emerald-400 font-bold text-sm mt-2">
                      Book Cab to {dest.name} <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FESTIVALS */}
      <section className="py-24 md:py-32 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full text-teal-400 font-semibold text-xs tracking-widest uppercase mb-4">
              <Sparkles className="w-3.5 h-3.5" /> Festivals & Events
            </span>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight">{data.month} Festivals</h2>
          </div>
          <div className="space-y-4">
            {data.festivals.map((fest, i) => (
              <div key={i} className="glass-card rounded-2xl p-6 flex items-start gap-5">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500/20 to-teal-500/20 border border-emerald-500/20 flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-6 h-6 text-emerald-400" />
                </div>
                <div>
                  <h3 className="font-black text-lg">{fest.name}</h3>
                  <p className="text-emerald-400 text-sm font-medium mt-1">{fest.date}</p>
                  <p className="text-white/40 text-sm mt-1">{fest.where}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRAVEL TIPS */}
      <section className="py-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="glass-strong rounded-[2rem] p-8 md:p-12" data-snippet-type="direct-answer">
            <div className="key-info">
              <div className="flex items-center gap-3 mb-6">
                <Award className="w-6 h-6 text-emerald-400" />
                <h2 className="text-2xl font-black">{data.month} Travel Tips</h2>
              </div>
              <div className="space-y-4">
                {data.travelTips.map((tip, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <p className="text-white/60 leading-relaxed">{tip}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-24 md:py-32 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-16">FAQs for {data.month} Travel</h2>
          <div className="space-y-4">
            {data.faqs.map((faq, i) => (
              <div key={i} className="glass-card rounded-2xl overflow-hidden hover:border-emerald-500/20 transition-all">
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} aria-expanded={openFaq === i} aria-label={openFaq === i ? 'Collapse answer' : 'Expand answer'} className="w-full flex items-center justify-between p-6 text-left focus:outline-none focus:ring-2 focus:ring-emerald-500/50 rounded-2xl">
                  <span className="font-bold text-white/90 pr-4 faq-answer">{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 text-emerald-400 transition-transform flex-shrink-0 ${openFaq === i ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === i && <div className="px-6 pb-6 faq-answer"><p className="text-white/50 leading-relaxed">{faq.answer}</p></div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MONTH NAVIGATION */}
      <section className="py-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row gap-4 justify-between">
          <Link href={`/where-to-go/${prev.slug}`} className="glass-card glass-card-hover rounded-2xl p-6 flex-1 block transition-all">
            <div className="text-xs text-white/30 uppercase tracking-wider mb-2 flex items-center gap-1"><ChevronLeft className="w-3 h-3" /> Previous Month</div>
            <h3 className="text-xl font-black">{prev.month}</h3>
            <p className="text-white/40 text-sm mt-1">{prev.tagline}</p>
          </Link>
          <Link href={`/where-to-go/${next.slug}`} className="glass-card glass-card-hover rounded-2xl p-6 flex-1 block text-right transition-all">
            <div className="text-xs text-white/30 uppercase tracking-wider mb-2 flex items-center gap-1 justify-end">Next Month <ChevronRight className="w-3 h-3" /></div>
            <h3 className="text-xl font-black">{next.month}</h3>
            <p className="text-white/40 text-sm mt-1">{next.tagline}</p>
          </Link>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6">Plan Your {data.month} Trip</h2>
          <p className="text-white/40 text-lg mb-10">Tell us your dates and preferences. We will plan the perfect {data.month} getaway with cab, hotel, and sightseeing.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+917668570551" className="inline-flex items-center gap-3 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 text-white px-10 py-5 rounded-2xl font-bold text-lg shadow-[0_0_40px_rgba(16,185,129,0.3)] hover:scale-105 transition-all"><Phone className="w-5 h-5" /> Call: 7668570551</a>
            <a href={`https://wa.me/917668570551?text=${encodeURIComponent(whatsappMsg)}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 glass-strong text-white px-10 py-5 rounded-2xl font-bold text-lg border border-white/15 hover:border-emerald-500/40 transition-all">WhatsApp <ArrowRight className="w-5 h-5" /></a>
          </div>
        </div>
      </section>
    </div>
  );
}
