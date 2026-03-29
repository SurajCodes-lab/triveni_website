'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  Phone, ArrowRight, ChevronDown, Shield, Clock, Car, CheckCircle2,
  Route, MapPin, Star, Users, Sparkles, ChevronRight
} from '@/components/ui/icons';
import { trackWhatsAppClick, trackPhoneCall } from '@/utilis/analytics';

export default function TrainTaxiClient({ route, relatedRoutes }) {
  const [openFaq, setOpenFaq] = useState(null);
  const cheapest = Math.min(...route.taxiPackages.map(p => p.sedan));
  const whatsappMsg = `Hi, I am arriving by ${route.train.name} (${route.train.number}) at ${route.city}. Need taxi pickup. Train arrival: ${route.train.arrival}`;

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-hidden">
      <style jsx global>{`
        @keyframes float { 0%,100% { transform: translateY(0px); } 50% { transform: translateY(-14px); } }
        @keyframes gradient-x { 0%,100% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } }
        @keyframes morph { 0%,100% { border-radius: 60% 40% 30% 70%/60% 30% 70% 40%; } 50% { border-radius: 30% 60% 70% 40%/50% 60% 30% 60%; } }
        @keyframes glow-pulse { 0%,100% { opacity: 0.5; } 50% { opacity: 1; } }
        @keyframes pulse-glow { 0%,100% { box-shadow: 0 0 30px rgba(6,182,212,0.2); } 50% { box-shadow: 0 0 60px rgba(6,182,212,0.5); } }
        .animate-gradient-x { background-size: 200% 200%; animation: gradient-x 6s ease infinite; }
        .animate-morph { animation: morph 8s ease-in-out infinite; }
        .animate-float { animation: float 4s ease-in-out infinite; }
        .animate-glow { animation: glow-pulse 2s ease-in-out infinite; }
        .animate-pulse-glow { animation: pulse-glow 3s ease-in-out infinite; }
        .glass-card { background: rgba(255,255,255,0.03); backdrop-filter: blur(20px); border: 1px solid rgba(255,255,255,0.06); }
        .glass-card-hover:hover { background: rgba(255,255,255,0.06); border-color: rgba(6,182,212,0.3); box-shadow: 0 8px 32px rgba(6,182,212,0.1); transform: translateY(-2px); }
        .glass-strong { background: rgba(255,255,255,0.05); backdrop-filter: blur(40px); border: 1px solid rgba(255,255,255,0.08); }
      `}</style>

      {/* HERO */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-cyan-950/40 to-blue-950/30 animate-gradient-x" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(6,182,212,0.15),transparent_50%)]" />
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.5) 1px, transparent 0)', backgroundSize: '32px 32px' }} />
        <div className="absolute top-[15%] left-[5%] w-80 h-80 bg-cyan-600/20 rounded-full blur-[100px] animate-morph" />
        <div className="absolute bottom-[10%] right-[5%] w-[400px] h-[400px] bg-blue-500/12 rounded-full blur-[120px] animate-morph" style={{ animationDelay: '-4s' }} />
        <div className="absolute top-28 right-[8%] hidden lg:block animate-float">
          <div className="glass-strong rounded-2xl px-6 py-5 border border-cyan-500/20 animate-pulse-glow">
            <div className="text-xs text-cyan-400 uppercase tracking-wider font-bold mb-1">Train {route.train.number}</div>
            <div className="text-lg font-black text-white">{route.train.name}</div>
            <div className="text-sm text-white/40 mt-1">{route.train.duration}</div>
          </div>
        </div>
        <div className="absolute -bottom-1 left-0 right-0 h-32">
          <svg viewBox="0 0 1440 120" className="w-full h-full" preserveAspectRatio="none"><path d="M0,80 C240,120 480,20 720,60 C960,100 1200,30 1440,70 L1440,120 L0,120 Z" fill="#020617" /></svg>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-32">
          <div className="inline-flex items-center gap-2.5 glass-strong px-6 py-3 rounded-full mb-10 border border-cyan-500/25 animate-glow">
            <span className="text-lg">🚂</span>
            <span className="text-cyan-300 font-semibold text-sm tracking-wide">Train + Taxi Combo</span>
          </div>
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-7xl font-black tracking-tight mb-4 max-w-5xl">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400">{route.train.name}</span>
            <br /><span className="text-white">+ {route.city} Taxi</span>
          </h1>
          <p className="text-xl text-white/40 mb-8 max-w-2xl">Pre-booked cab waiting at {route.city} station — from <span className="text-cyan-400 font-black">₹{cheapest}</span></p>
          <div className="flex flex-wrap gap-3 mb-12">
            {[{ icon: Clock, text: route.train.departure }, { icon: MapPin, text: route.train.arrival }, { icon: Route, text: route.train.duration }, { icon: Star, text: '4.9★ Rating', special: true }].map((pill, i) => (
              <span key={i} className={`inline-flex items-center gap-2 backdrop-blur-2xl px-5 py-3 rounded-2xl text-sm font-medium ${pill.special ? 'bg-yellow-500/10 border border-yellow-500/25 text-yellow-300' : 'glass-card border-white/10 text-white/70'}`}>
                <pill.icon className={`w-4 h-4 ${pill.special ? 'text-yellow-400' : 'text-cyan-400'}`} /> {pill.text}
              </span>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link onClick={() => trackPhoneCall('train_taxi')} href="tel:+917668570551" className="group inline-flex items-center gap-3 bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 text-white px-10 py-5 rounded-2xl font-bold text-lg shadow-[0_0_40px_rgba(6,182,212,0.3)] hover:scale-105 transition-all">
              <Phone className="w-5 h-5 group-hover:animate-bounce" /> Call: 7668570551
            </Link>
            <Link onClick={() => trackWhatsAppClick('train_taxi')} href={`https://wa.me/917668570551?text=${encodeURIComponent(whatsappMsg)}`} className="group inline-flex items-center gap-3 glass-strong text-white px-10 py-5 rounded-2xl font-bold text-lg border border-white/15 hover:border-cyan-500/40 transition-all">
              <svg className="w-5 h-5 text-emerald-400" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.611.611l4.458-1.495A11.943 11.943 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.318 0-4.468-.67-6.29-1.823l-.451-.27-2.649.888.888-2.649-.27-.451A9.965 9.965 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/></svg>
              WhatsApp Quote <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF */}
      <section className="relative py-8 border-y border-cyan-500/10">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-cyan-950/20 to-slate-950/80" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap justify-center gap-10 md:gap-20">
            {[{ value: '10,000+', label: 'Station Pickups', icon: Users }, { value: '4.9★', label: 'Rating', icon: Star }, { value: '24/7', label: 'Available', icon: Clock }, { value: '15 min', label: 'Early Arrival', icon: Shield }].map((stat, i) => (
              <div key={i} className="flex items-center gap-3 cursor-default">
                <div className="w-10 h-10 rounded-xl glass-card flex items-center justify-center"><stat.icon className="w-5 h-5 text-cyan-400" /></div>
                <div><div className="text-xl font-black">{stat.value}</div><div className="text-[10px] text-white/40 uppercase tracking-widest">{stat.label}</div></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRAIN INFO */}
      <section className="py-16 md:py-24 lg:py-32 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-center mb-16">Train Details</h2>
          <div className="glass-strong rounded-[2rem] p-8 md:p-12" data-snippet-type="direct-answer">
            <div className="key-info grid grid-cols-2 md:grid-cols-3 gap-8">
              <div><div className="text-xs text-cyan-400 uppercase tracking-wider font-bold mb-1">Train</div><div className="text-xl font-black">{route.train.name}</div></div>
              <div><div className="text-xs text-cyan-400 uppercase tracking-wider font-bold mb-1">Number</div><div className="text-xl font-black">{route.train.number}</div></div>
              <div><div className="text-xs text-cyan-400 uppercase tracking-wider font-bold mb-1">Duration</div><div className="text-xl font-black">{route.train.duration}</div></div>
              <div><div className="text-xs text-blue-400 uppercase tracking-wider font-bold mb-1">Departure</div><div className="text-lg font-bold text-white/80">{route.train.departure}</div></div>
              <div><div className="text-xs text-blue-400 uppercase tracking-wider font-bold mb-1">Arrival</div><div className="text-lg font-bold text-white/80">{route.train.arrival}</div></div>
              <div><div className="text-xs text-blue-400 uppercase tracking-wider font-bold mb-1">Classes</div><div className="text-sm text-white/60">{route.train.classes.join(', ')}</div></div>
            </div>
            <div className="mt-8 glass-card rounded-2xl p-5">
              <div className="flex items-center gap-2 mb-2"><Sparkles className="w-4 h-4 text-cyan-400" /><span className="text-cyan-400 font-bold text-sm uppercase tracking-wider">Pro Tip</span></div>
              <p className="text-white/50 text-sm leading-relaxed">{route.bookingTip}</p>
            </div>
          </div>
        </div>
      </section>

      {/* TAXI PACKAGES */}
      <section className="py-16 md:py-24 lg:py-32 px-4 sm:px-6 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(6,182,212,0.05),transparent_60%)]" />
        <div className="relative max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-center mb-4">Taxi Packages at {route.city}</h2>
          <p className="text-white/40 text-center mb-16">Pre-booked cab waiting at station exit with your name board</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {route.taxiPackages.map((pkg, i) => (
              <div key={i} className={`glass-card glass-card-hover rounded-[2rem] p-8 transition-all duration-500 ${i === 1 ? 'ring-2 ring-cyan-500/25' : ''}`}>
                {i === 1 && <div className="text-center mb-4"><span className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-[9px] font-black px-4 py-1.5 rounded-full uppercase tracking-[0.15em]">Popular</span></div>}
                <h3 className="text-lg font-black mb-6 text-center">{pkg.name}</h3>
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between"><span className="text-white/40 text-sm">Sedan</span><span className="text-2xl font-black text-cyan-400">₹{pkg.sedan.toLocaleString('en-IN')}</span></div>
                  <div className="flex justify-between"><span className="text-white/40 text-sm">SUV</span><span className="text-2xl font-black text-blue-400">₹{pkg.suv.toLocaleString('en-IN')}</span></div>
                </div>
                <div className="space-y-2 mb-6">
                  {['Station pickup with name board', 'AC vehicle, GPS tracked', 'Return station drop included'].map((f, j) => (
                    <div key={j} className="flex items-center gap-2 text-xs text-white/40"><CheckCircle2 className="w-3.5 h-3.5 text-cyan-400/60" /> {f}</div>
                  ))}
                </div>
                <a href="tel:+917668570551" className="block text-center py-3 rounded-xl font-bold bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:shadow-lg transition-all">Book Now</a>
              </div>
            ))}
          </div>
          <p className="text-center mt-8 text-white/40 text-sm">Total trip cost (train + taxi): <span className="text-cyan-400 font-bold">{route.totalTripCost}</span></p>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-16 md:py-24 lg:py-32 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-center mb-16">How It Works</h2>
          <div className="space-y-6">
            {[
              { step: '1', title: 'Book Train on IRCTC', desc: `Book ${route.train.name} (${route.train.number}) on irctc.co.in. Share PNR with us.` },
              { step: '2', title: 'Call/WhatsApp Us', desc: 'Call 7668570551 or WhatsApp. Share PNR, arrival time, and sightseeing preference.' },
              { step: '3', title: 'Driver Tracks Your Train', desc: 'Our driver monitors train status and arrives 15 minutes before your train.' },
              { step: '4', title: 'Seamless Pickup', desc: `Driver waits at ${route.city} station exit with your name board. No waiting, no haggling.` },
            ].map((item, i) => (
              <div key={i} className="glass-card rounded-2xl p-6 flex items-start gap-5">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center text-white font-black text-lg flex-shrink-0">{item.step}</div>
                <div><h3 className="font-black text-lg mb-1">{item.title}</h3><p className="text-white/40 text-sm">{item.desc}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 md:py-24 lg:py-32 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-center mb-16">FAQs</h2>
          <div className="space-y-4">
            {route.faqs.map((faq, i) => (
              <div key={i} className="glass-card rounded-2xl overflow-hidden hover:border-cyan-500/20 transition-all">
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} aria-expanded={openFaq === i} aria-label={openFaq === i ? 'Collapse answer' : 'Expand answer'} className="w-full flex items-center justify-between p-6 text-left focus:outline-none focus:ring-2 focus:ring-cyan-500/50 rounded-2xl">
                  <span className="font-bold text-white/90 pr-4 faq-answer">{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 text-cyan-400 transition-transform flex-shrink-0 ${openFaq === i ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === i && <div className="px-6 pb-6 faq-answer"><p className="text-white/50 leading-relaxed">{faq.answer}</p></div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RELATED */}
      {relatedRoutes && relatedRoutes.length > 0 && (
        <section className="py-16 md:py-24 lg:py-32 px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-center mb-12 md:mb-16">More Train + Taxi Combos</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedRoutes.map((rr, i) => (
                <Link key={i} href={`/train-taxi/${rr.slug}`} className="glass-card glass-card-hover rounded-2xl p-6 block transition-all">
                  <h3 className="font-black mb-1">{rr.train.name}</h3>
                  <p className="text-white/40 text-sm mb-2">{rr.city} &middot; {rr.train.duration}</p>
                  <span className="text-cyan-400 text-sm font-semibold">View Combo →</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FINAL CTA */}
      <section className="py-24 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-black mb-6">Book Station Pickup</h2>
          <p className="text-white/40 text-lg mb-10">Pre-booked taxi for {route.train.name} passengers at {route.city}. From ₹{cheapest}.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+917668570551" className="inline-flex items-center gap-3 bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 text-white px-10 py-5 rounded-2xl font-bold text-lg shadow-[0_0_40px_rgba(6,182,212,0.3)] hover:scale-105 transition-all"><Phone className="w-5 h-5" /> Call: 7668570551</a>
            <a href={`https://wa.me/917668570551?text=${encodeURIComponent(whatsappMsg)}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 glass-strong text-white px-10 py-5 rounded-2xl font-bold text-lg border border-white/15 hover:border-cyan-500/40 transition-all">WhatsApp Booking <ArrowRight className="w-5 h-5" /></a>
          </div>
        </div>
      </section>
    </div>
  );
}
