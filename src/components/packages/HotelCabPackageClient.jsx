'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  Phone, ArrowRight, ChevronDown, Shield, Clock, Car, CheckCircle2,
  Route, MapPin, Star, Users, Sparkles, Award, ChevronRight, Calendar,
  Hotel, Coffee, Compass
} from '@/components/ui/icons';
import { trackWhatsAppClick, trackPhoneCall } from '@/utilis/analytics';

export default function HotelCabPackageClient({ pkg, relatedPackages }) {
  const [openFaq, setOpenFaq] = useState(null);
  const [activeDay, setActiveDay] = useState(0);

  const whatsappMsg = `Hi, I'm interested in the ${pkg.destination} ${pkg.duration} package (₹${pkg.startingPrice.toLocaleString('en-IN')}/person)`;

  return (
    <div className="min-h-screen bg-stone-950 text-white overflow-hidden">

      <style jsx global>{`
        @keyframes shimmer { 0% { background-position: -200% 0; } 100% { background-position: 200% 0; } }
        @keyframes float { 0%,100% { transform: translateY(0px); } 50% { transform: translateY(-14px); } }
        @keyframes float-slow { 0%,100% { transform: translateY(0px) rotate(0deg); } 50% { transform: translateY(-20px) rotate(3deg); } }
        @keyframes pulse-glow { 0%,100% { box-shadow: 0 0 30px rgba(251,113,133,0.2), 0 0 60px rgba(249,115,22,0.1); } 50% { box-shadow: 0 0 60px rgba(251,113,133,0.5), 0 0 120px rgba(249,115,22,0.3); } }
        @keyframes gradient-x { 0%,100% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } }
        @keyframes morph { 0%,100% { border-radius: 60% 40% 30% 70%/60% 30% 70% 40%; } 50% { border-radius: 30% 60% 70% 40%/50% 60% 30% 60%; } }
        @keyframes glow-pulse { 0%,100% { opacity: 0.5; transform: scale(1); } 50% { opacity: 1; transform: scale(1.05); } }
        .animate-gradient-x { background-size: 200% 200%; animation: gradient-x 6s ease infinite; }
        .animate-morph { animation: morph 8s ease-in-out infinite; }
        .animate-float { animation: float 4s ease-in-out infinite; }
        .animate-float-slow { animation: float-slow 6s ease-in-out infinite; }
        .animate-pulse-glow { animation: pulse-glow 3s ease-in-out infinite; }
        .animate-glow { animation: glow-pulse 2s ease-in-out infinite; }
        .glass-card { background: rgba(255,255,255,0.03); backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px); border: 1px solid rgba(255,255,255,0.06); }
        .glass-card-hover:hover { background: rgba(255,255,255,0.06); border-color: rgba(251,113,133,0.3); box-shadow: 0 8px 32px rgba(251,113,133,0.1); transform: translateY(-2px); }
        .glass-strong { background: rgba(255,255,255,0.05); backdrop-filter: blur(40px); -webkit-backdrop-filter: blur(40px); border: 1px solid rgba(255,255,255,0.08); }
        .text-glow { text-shadow: 0 0 40px rgba(251,113,133,0.5), 0 0 80px rgba(249,115,22,0.3); }
        .border-glow { box-shadow: inset 0 0 20px rgba(251,113,133,0.1), 0 0 40px rgba(251,113,133,0.05); }
      `}</style>

      {/* HERO */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-stone-950 via-rose-950/50 to-orange-950/30 animate-gradient-x" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(251,113,133,0.15),transparent_50%)]" />
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.5) 1px, transparent 0)', backgroundSize: '32px 32px' }} />

        <div className="absolute top-[15%] left-[5%] w-80 h-80 bg-rose-600/20 rounded-full blur-[100px] animate-morph" />
        <div className="absolute bottom-[10%] right-[5%] w-[400px] h-[400px] bg-orange-500/12 rounded-full blur-[120px] animate-morph" style={{ animationDelay: '-4s' }} />

        <div className="absolute top-28 right-[8%] hidden lg:block animate-float">
          <div className="glass-strong rounded-2xl px-6 py-5 border border-rose-500/20 animate-pulse-glow">
            <div className="text-xs text-rose-400 uppercase tracking-wider font-bold">Starting From</div>
            <div className="text-3xl font-black text-white text-glow">₹{pkg.startingPrice.toLocaleString('en-IN')}</div>
            <div className="text-xs text-white/40">per person</div>
          </div>
        </div>

        <div className="absolute -bottom-1 left-0 right-0 h-32">
          <svg viewBox="0 0 1440 120" className="w-full h-full" preserveAspectRatio="none">
            <path d="M0,80 C240,120 480,20 720,60 C960,100 1200,30 1440,70 L1440,120 L0,120 Z" fill="#0c0a09" />
          </svg>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-32">
          <div className="inline-flex items-center gap-2.5 glass-strong px-6 py-3 rounded-full mb-10 border border-rose-500/25 animate-glow">
            <Hotel className="w-4 h-4 text-rose-400" />
            <span className="text-rose-300 font-semibold text-sm tracking-wide">Hotel + Cab Package</span>
            <div className="w-1.5 h-1.5 bg-orange-400 rounded-full animate-pulse" />
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight mb-4 max-w-4xl">
            <span className="text-white">{pkg.destination}</span>{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-rose-400 via-orange-400 to-amber-400">{pkg.duration}</span>
          </h1>

          <p className="text-xl text-white/40 mb-8 max-w-2xl">Complete tour package with hotel stay, AC cab, sightseeing &amp; transfers</p>

          <div className="flex flex-wrap gap-3 mb-12">
            {[
              { icon: Calendar, text: pkg.duration },
              { icon: Car, text: 'AC Cab Included' },
              { icon: Hotel, text: 'Hotel Stay' },
              { icon: Star, text: '4.9★ (10,000+ reviews)', special: true },
            ].map((pill, i) => (
              <span key={i} className={`inline-flex items-center gap-2 backdrop-blur-2xl px-5 py-3 rounded-2xl text-sm font-medium ${pill.special ? 'bg-yellow-500/10 border border-yellow-500/25 text-yellow-300' : 'glass-card border-white/10 text-white/70 hover:border-rose-500/30'} transition-all`}>
                <pill.icon className={`w-4 h-4 ${pill.special ? 'text-yellow-400' : 'text-rose-400'}`} /> {pill.text}
              </span>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link onClick={() => trackPhoneCall('package')} href="tel:+917668570551" className="group inline-flex items-center gap-3 bg-gradient-to-r from-rose-500 via-orange-500 to-amber-500 text-white px-10 py-5 rounded-2xl font-bold text-lg shadow-[0_0_40px_rgba(251,113,133,0.3)] hover:shadow-[0_0_60px_rgba(251,113,133,0.5)] hover:scale-105 transition-all duration-300">
              <Phone className="w-5 h-5 group-hover:animate-bounce" /> Call: 7668570551
            </Link>
            <Link onClick={() => trackWhatsAppClick('package')} href={`https://wa.me/917668570551?text=${encodeURIComponent(whatsappMsg)}`} className="group inline-flex items-center gap-3 glass-strong text-white px-10 py-5 rounded-2xl font-bold text-lg border border-white/15 hover:border-rose-500/40 transition-all duration-300">
              <svg className="w-5 h-5 text-emerald-400" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.611.611l4.458-1.495A11.943 11.943 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.318 0-4.468-.67-6.29-1.823l-.451-.27-2.649.888.888-2.649-.27-.451A9.965 9.965 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/></svg>
              WhatsApp Quote <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF */}
      <section className="relative py-8 border-y border-rose-500/10">
        <div className="absolute inset-0 bg-gradient-to-r from-stone-950/80 via-rose-950/20 to-stone-950/80" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap justify-center gap-10 md:gap-20">
            {[
              { value: '10,000+', label: 'Happy Travelers', icon: Users },
              { value: '4.9★', label: 'Google Rating', icon: Star },
              { value: '24/7', label: 'Trip Support', icon: Clock },
              { value: '50+', label: 'Packages', icon: Compass },
            ].map((stat, i) => (
              <div key={i} className="group text-center flex items-center gap-3 cursor-default">
                <div className="w-10 h-10 rounded-xl glass-card flex items-center justify-center">
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

      {/* PACKAGE INCLUDES */}
      <section className="py-24 md:py-32 px-4 sm:px-6 relative">
        <div className="relative max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full text-rose-400 font-semibold text-xs tracking-widest uppercase mb-4">
              <CheckCircle2 className="w-3.5 h-3.5" /> What&apos;s Included
            </span>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight">Package Includes</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {pkg.includes.map((item, i) => (
              <div key={i} className="glass-card glass-card-hover rounded-2xl p-5 flex items-center gap-4 transition-all duration-300">
                <CheckCircle2 className="w-5 h-5 text-rose-400 flex-shrink-0" />
                <span className="text-white/70 font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DAY-BY-DAY ITINERARY */}
      <section className="py-24 md:py-32 px-4 sm:px-6 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(251,113,133,0.05),transparent_70%)]" />
        <div className="relative max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full text-orange-400 font-semibold text-xs tracking-widest uppercase mb-4">
              <Calendar className="w-3.5 h-3.5" /> Day by Day
            </span>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight">Your Itinerary</h2>
          </div>

          <div className="space-y-4">
            {pkg.itinerary.map((day, i) => (
              <div
                key={i}
                onClick={() => setActiveDay(activeDay === i ? -1 : i)}
                className={`glass-card rounded-2xl overflow-hidden transition-all duration-300 cursor-pointer ${activeDay === i ? 'ring-2 ring-rose-500/30' : 'hover:border-rose-500/20'}`}
              >
                <div className="flex items-center justify-between p-6">
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-black text-lg transition-all ${activeDay === i ? 'bg-gradient-to-br from-rose-500 to-orange-500 text-white' : 'bg-white/5 text-white/40 border border-white/10'}`}>
                      {day.day}
                    </div>
                    <div>
                      <div className="text-xs text-rose-400 uppercase tracking-wider font-bold">Day {day.day}</div>
                      <h3 className="text-lg font-black text-white">{day.title}</h3>
                    </div>
                  </div>
                  <ChevronDown className={`w-5 h-5 text-rose-400 transition-transform flex-shrink-0 ${activeDay === i ? 'rotate-180' : ''}`} />
                </div>
                {activeDay === i && (
                  <div className="px-6 pb-6 space-y-2">
                    {day.activities.map((activity, j) => (
                      <div key={j} className="flex items-start gap-3 text-white/50 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-rose-400/60 flex-shrink-0 mt-0.5" />
                        <span>{activity}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOTEL OPTIONS / PRICING */}
      <section className="py-24 md:py-32 px-4 sm:px-6 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(249,115,22,0.08),transparent_60%)]" />
        <div className="relative max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full text-rose-400 font-semibold text-xs tracking-widest uppercase mb-4">
              <Hotel className="w-3.5 h-3.5" /> Choose Your Stay
            </span>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight">Hotel Options</h2>
            <p className="text-white/40 mt-4 text-lg">All prices per person on twin-sharing basis</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pkg.hotelOptions.map((option, i) => (
              <div key={i} className={`group glass-card rounded-[2rem] p-8 transition-all duration-500 ${i === 1 ? 'ring-2 ring-rose-500/25 shadow-[0_0_40px_rgba(251,113,133,0.1)]' : ''} hover:border-rose-500/30`}>
                {i === 1 && (
                  <div className="text-center mb-4">
                    <span className="bg-gradient-to-r from-rose-500 to-orange-500 text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-[0.2em]">Most Popular</span>
                  </div>
                )}
                <div className="text-center">
                  <div className="text-4xl mb-3">{['🏨', '🏩', '👑'][i]}</div>
                  <h3 className="text-xl font-black mb-2">{option.category}</h3>
                  <div className="text-4xl font-black bg-clip-text text-transparent bg-gradient-to-r from-rose-400 to-orange-400 mb-1">
                    ₹{option.price.toLocaleString('en-IN')}
                  </div>
                  <p className="text-white/40 text-sm mb-6">per person</p>

                  <div className="space-y-2 mb-8 text-left">
                    {pkg.includes.slice(0, 4).map((inc, j) => (
                      <div key={j} className="flex items-center gap-2 text-sm text-white/40">
                        <CheckCircle2 className="w-3.5 h-3.5 text-rose-400/60" /> {inc}
                      </div>
                    ))}
                  </div>

                  <a href="tel:+917668570551" className="block text-center py-4 rounded-xl font-bold transition-all bg-gradient-to-r from-rose-500 to-orange-500 text-white hover:shadow-lg hover:scale-[1.02]">
                    Book This Package
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* KEY INFO */}
      <section className="py-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="glass-strong rounded-[2rem] p-8 md:p-12 border-glow" data-snippet-type="direct-answer">
            <div className="key-info">
              <h2 className="text-2xl font-black mb-4">{pkg.destination} Package — Quick Facts</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6">
                <div><div className="text-xs text-rose-400 uppercase tracking-wider font-bold mb-1">Duration</div><div className="text-xl font-black">{pkg.duration}</div></div>
                <div><div className="text-xs text-orange-400 uppercase tracking-wider font-bold mb-1">Starting Price</div><div className="text-xl font-black">₹{pkg.startingPrice.toLocaleString('en-IN')}</div></div>
                <div><div className="text-xs text-rose-400 uppercase tracking-wider font-bold mb-1">Meals</div><div className="text-xl font-black">Breakfast</div></div>
                <div><div className="text-xs text-orange-400 uppercase tracking-wider font-bold mb-1">Transport</div><div className="text-xl font-black">AC Cab</div></div>
              </div>
              <p className="text-white/40 text-sm">Includes: {pkg.includes.join(', ')}. Call 7668570551 for custom quotes and group discounts.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-24 md:py-32 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight">FAQs</h2>
          </div>
          <div className="space-y-4">
            {pkg.faqs.map((faq, i) => (
              <div key={i} className="glass-card rounded-2xl overflow-hidden hover:border-rose-500/20 transition-all">
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} aria-expanded={openFaq === i} aria-label={openFaq === i ? 'Collapse answer' : 'Expand answer'} className="w-full flex items-center justify-between p-6 text-left focus:outline-none focus:ring-2 focus:ring-rose-500/50 rounded-2xl">
                  <span className="font-bold text-white/90 pr-4 faq-answer">{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 text-rose-400 transition-transform flex-shrink-0 ${openFaq === i ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-6 faq-answer"><p className="text-white/50 leading-relaxed">{faq.answer}</p></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RELATED PACKAGES */}
      {relatedPackages.length > 0 && (
        <section className="py-24 md:py-32 px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-center mb-16">More Packages</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPackages.map((rp, i) => (
                <Link key={i} href={`/packages/${rp.slug}`} className="glass-card glass-card-hover rounded-2xl p-6 block transition-all">
                  <h3 className="text-lg font-black mb-1">{rp.destination}</h3>
                  <p className="text-white/40 text-sm mb-3">{rp.duration}</p>
                  <div className="text-rose-400 font-black text-lg mb-2">₹{rp.startingPrice.toLocaleString('en-IN')}<span className="text-white/40 text-sm font-normal"> /person</span></div>
                  <span className="text-rose-400 text-sm font-semibold">View Package →</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FINAL CTA */}
      <section className="py-24 px-4 sm:px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-rose-950/20 to-stone-950" />
        <div className="relative max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6">Book Your {pkg.destination} Package</h2>
          <p className="text-white/40 text-lg mb-10">{pkg.duration} starting from ₹{pkg.startingPrice.toLocaleString('en-IN')}/person. Hotel + Cab + Sightseeing all included.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+917668570551" className="inline-flex items-center gap-3 bg-gradient-to-r from-rose-500 via-orange-500 to-amber-500 text-white px-10 py-5 rounded-2xl font-bold text-lg shadow-[0_0_40px_rgba(251,113,133,0.3)] hover:scale-105 transition-all">
              <Phone className="w-5 h-5" /> Call: 7668570551
            </a>
            <a href={`https://wa.me/917668570551?text=${encodeURIComponent(whatsappMsg)}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 glass-strong text-white px-10 py-5 rounded-2xl font-bold text-lg border border-white/15 hover:border-rose-500/40 transition-all">
              WhatsApp Quote <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
