'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  Phone, ArrowRight, ChevronDown, Shield, Clock, Car, CheckCircle2,
  Route, MapPin, Star, Users, Sparkles, Award, ChevronRight, Zap
} from '@/components/ui/icons';
import { trackWhatsAppClick, trackPhoneCall } from '@/utilis/analytics';

const modeIcons = { Car: '🚗', Bus: '🚌', Train: '🚂', Flight: '✈️' };
const modeColors = { Car: 'purple', Bus: 'green', Train: 'blue', Flight: 'sky' };

function ComfortBar({ value, max = 5, activeClass = 'bg-purple-400' }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: max }, (_, i) => (
        <div key={i} className={`w-4 h-2 rounded-full ${i < value ? activeClass : 'bg-white/10'}`} />
      ))}
    </div>
  );
}

export default function TravelOptionsClient({ route, relatedRoutes }) {
  const [openFaq, setOpenFaq] = useState(null);

  const whatsappMsg = `Hi, I want to book a cab from ${route.origin} to ${route.destination}`;
  const carMode = route.modes.find(m => m.mode === 'Car');
  const availableModes = route.modes.filter(m => m.comfort > 0);
  const fastestMode = [...availableModes].sort((a, b) => a.duration.length - b.duration.length)[0];
  const cheapestMode = availableModes[0]; // Bus is typically cheapest
  const bestComfort = [...availableModes].sort((a, b) => b.comfort - a.comfort)[0];

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-hidden">

      <style jsx global>{`
        @keyframes shimmer { 0% { background-position: -200% 0; } 100% { background-position: 200% 0; } }
        @keyframes float { 0%,100% { transform: translateY(0px); } 50% { transform: translateY(-14px); } }
        @keyframes float-slow { 0%,100% { transform: translateY(0px); } 50% { transform: translateY(-20px); } }
        @keyframes pulse-glow { 0%,100% { box-shadow: 0 0 30px rgba(168,85,247,0.2); } 50% { box-shadow: 0 0 60px rgba(168,85,247,0.5); } }
        @keyframes gradient-x { 0%,100% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } }
        @keyframes morph { 0%,100% { border-radius: 60% 40% 30% 70%/60% 30% 70% 40%; } 50% { border-radius: 30% 60% 70% 40%/50% 60% 30% 60%; } }
        @keyframes glow-pulse { 0%,100% { opacity: 0.5; } 50% { opacity: 1; } }
        .animate-gradient-x { background-size: 200% 200%; animation: gradient-x 6s ease infinite; }
        .animate-morph { animation: morph 8s ease-in-out infinite; }
        .animate-float { animation: float 4s ease-in-out infinite; }
        .animate-float-slow { animation: float-slow 6s ease-in-out infinite; }
        .animate-pulse-glow { animation: pulse-glow 3s ease-in-out infinite; }
        .animate-glow { animation: glow-pulse 2s ease-in-out infinite; }
        .glass-card { background: rgba(255,255,255,0.03); backdrop-filter: blur(20px); border: 1px solid rgba(255,255,255,0.06); }
        .glass-card-hover:hover { background: rgba(255,255,255,0.06); border-color: rgba(168,85,247,0.3); box-shadow: 0 8px 32px rgba(168,85,247,0.1); transform: translateY(-2px); }
        .glass-strong { background: rgba(255,255,255,0.05); backdrop-filter: blur(40px); border: 1px solid rgba(255,255,255,0.08); }
        .text-glow { text-shadow: 0 0 40px rgba(168,85,247,0.5), 0 0 80px rgba(217,70,239,0.3); }
      `}</style>

      {/* HERO */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-purple-950/50 to-fuchsia-950/30 animate-gradient-x" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(168,85,247,0.15),transparent_50%)]" />
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.5) 1px, transparent 0)', backgroundSize: '32px 32px' }} />
        <div className="absolute top-[15%] left-[5%] w-80 h-80 bg-purple-600/20 rounded-full blur-[100px] animate-morph" />
        <div className="absolute bottom-[10%] right-[5%] w-[400px] h-[400px] bg-fuchsia-500/12 rounded-full blur-[120px] animate-morph" style={{ animationDelay: '-4s' }} />

        <div className="absolute -bottom-1 left-0 right-0 h-32">
          <svg viewBox="0 0 1440 120" className="w-full h-full" preserveAspectRatio="none">
            <path d="M0,80 C240,120 480,20 720,60 C960,100 1200,30 1440,70 L1440,120 L0,120 Z" fill="#020617" />
          </svg>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-32">
          <div className="inline-flex items-center gap-2.5 glass-strong px-6 py-3 rounded-full mb-10 border border-purple-500/25 animate-glow">
            <Zap className="w-4 h-4 text-purple-400" />
            <span className="text-purple-300 font-semibold text-sm tracking-wide">Smart Travel Comparator</span>
          </div>

          <div className="flex items-center gap-4 sm:gap-6 mb-6 flex-wrap">
            <span className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-black text-white">{route.origin}</span>
            <ArrowRight className="w-8 h-8 sm:w-10 sm:h-10 text-purple-400" />
            <span className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-black bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-fuchsia-400 to-pink-400">{route.destination}</span>
          </div>

          <h1 className="text-xl md:text-2xl text-white/40 mb-8 max-w-3xl font-medium">
            Compare <span className="text-purple-400 font-bold">Car vs Train vs Bus vs Flight</span> — Find the best way to travel
          </h1>

          <div className="flex flex-wrap gap-3 mb-12">
            {[
              { icon: Car, text: `Cab from ${carMode?.cost || 'N/A'}` },
              { icon: Clock, text: `Car: ${carMode?.duration || 'N/A'}` },
              { icon: Star, text: '4.9★ Rating', special: true },
            ].map((pill, i) => (
              <span key={i} className={`inline-flex items-center gap-2 backdrop-blur-2xl px-5 py-3 rounded-2xl text-sm font-medium ${pill.special ? 'bg-yellow-500/10 border border-yellow-500/25 text-yellow-300' : 'glass-card border-white/10 text-white/70'} transition-all`}>
                <pill.icon className={`w-4 h-4 ${pill.special ? 'text-yellow-400' : 'text-purple-400'}`} /> {pill.text}
              </span>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link onClick={() => trackPhoneCall('travel_options')} href="tel:+917668570551" className="group inline-flex items-center gap-3 bg-gradient-to-r from-purple-500 via-fuchsia-500 to-pink-500 text-white px-10 py-5 rounded-2xl font-bold text-lg shadow-[0_0_40px_rgba(168,85,247,0.3)] hover:shadow-[0_0_60px_rgba(168,85,247,0.5)] hover:scale-105 transition-all">
              <Phone className="w-5 h-5 group-hover:animate-bounce" /> Call: 7668570551
            </Link>
            <Link onClick={() => trackWhatsAppClick('travel_options')} href={`https://wa.me/917668570551?text=${encodeURIComponent(whatsappMsg)}`} className="group inline-flex items-center gap-3 glass-strong text-white px-10 py-5 rounded-2xl font-bold text-lg border border-white/15 hover:border-purple-500/40 transition-all">
              <svg className="w-5 h-5 text-emerald-400" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.611.611l4.458-1.495A11.943 11.943 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.318 0-4.468-.67-6.29-1.823l-.451-.27-2.649.888.888-2.649-.27-.451A9.965 9.965 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/></svg>
              WhatsApp Quote <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* 4-WAY COMPARISON */}
      <section className="py-24 md:py-32 px-4 sm:px-6 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(168,85,247,0.05),transparent_70%)]" />
        <div className="relative max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <span className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full text-purple-400 font-semibold text-xs tracking-widest uppercase mb-4">
              <Zap className="w-3.5 h-3.5" /> 4-Way Comparison
            </span>
            <h2 className="text-4xl md:text-6xl font-black tracking-tight">Compare All Options</h2>
            <p className="text-white/40 mt-4 text-lg">{route.origin} to {route.destination} — every way to get there</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {route.modes.map((mode, i) => {
              const isAvailable = mode.comfort > 0;
              const isBestValue = mode.mode === 'Car';
              const isFastest = mode === fastestMode;
              const isMostComfortable = mode === bestComfort;

              return (
                <div key={i} className={`group glass-card rounded-[2rem] p-6 transition-all duration-500 relative ${!isAvailable ? 'opacity-40' : 'glass-card-hover'} ${isBestValue ? 'ring-2 ring-purple-500/30 shadow-[0_0_40px_rgba(168,85,247,0.1)]' : ''}`}>
                  {/* Badges */}
                  {isAvailable && isBestValue && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="bg-gradient-to-r from-purple-500 to-fuchsia-500 text-white text-[9px] font-black px-4 py-1.5 rounded-full uppercase tracking-[0.15em]">Best Value</span>
                    </div>
                  )}
                  {isAvailable && isFastest && !isBestValue && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="bg-gradient-to-r from-sky-500 to-cyan-500 text-white text-[9px] font-black px-4 py-1.5 rounded-full uppercase tracking-[0.15em]">Fastest</span>
                    </div>
                  )}

                  <div className="text-center mb-6">
                    <div className="text-4xl mb-2">{modeIcons[mode.mode] || '🚗'}</div>
                    <h3 className="text-xl font-black">{mode.mode}</h3>
                  </div>

                  {isAvailable ? (
                    <>
                      <div className="space-y-4 mb-6">
                        <div>
                          <div className="text-[10px] text-white/30 uppercase tracking-wider mb-1">Duration</div>
                          <div className="text-lg font-bold text-white">{mode.duration}</div>
                        </div>
                        <div>
                          <div className="text-[10px] text-white/30 uppercase tracking-wider mb-1">Cost</div>
                          <div className="text-lg font-bold text-purple-400">{mode.cost}</div>
                        </div>
                        <div>
                          <div className="text-[10px] text-white/30 uppercase tracking-wider mb-1">Comfort</div>
                          <div className="flex gap-1">
                            {Array.from({ length: 5 }, (_, j) => (
                              <div key={j} className={`w-5 h-2 rounded-full ${j < mode.comfort ? 'bg-purple-400' : 'bg-white/10'}`} />
                            ))}
                          </div>
                        </div>
                        <div>
                          <div className="text-[10px] text-white/30 uppercase tracking-wider mb-1">Flexibility</div>
                          <div className="flex gap-1">
                            {Array.from({ length: 5 }, (_, j) => (
                              <div key={j} className={`w-5 h-2 rounded-full ${j < mode.flexibility ? 'bg-fuchsia-400' : 'bg-white/10'}`} />
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="glass-card rounded-xl p-3">
                        <div className="text-[10px] text-white/30 uppercase tracking-wider mb-1">Best For</div>
                        <p className="text-sm text-white/60">{mode.bestFor}</p>
                      </div>
                    </>
                  ) : (
                    <div className="text-center py-8">
                      <p className="text-white/40 text-sm">Not available on this route</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* VERDICT */}
      <section className="py-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="glass-strong rounded-[2rem] p-8 md:p-12 relative overflow-hidden" data-snippet-type="direct-answer">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />
            <div className="key-info">
              <div className="flex items-center gap-3 mb-4">
                <Award className="w-6 h-6 text-purple-400" />
                <h2 className="text-2xl font-black">Our Verdict</h2>
              </div>
              <p className="text-white/60 leading-relaxed text-lg">{route.verdict}</p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE CAB */}
      <section className="py-24 md:py-32 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight">Why Choose Cab</h2>
            <p className="text-white/40 mt-4">Advantages of hiring a car for this route</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: MapPin, title: 'Door-to-Door', desc: 'Pickup from your exact location, drop at your destination. No station/airport transfers needed.' },
              { icon: Clock, title: 'Flexible Timing', desc: 'Leave when you want, stop where you want. No fixed schedules or missed connections.' },
              { icon: Shield, title: 'Private & Safe', desc: 'Your own AC vehicle with experienced driver. GPS-tracked with 24/7 support.' },
              { icon: Users, title: 'Group Friendly', desc: 'For 3-4 people, per-person cab cost equals bus fare. For families, it is the most economical.' },
              { icon: Car, title: 'Scenic Stops', desc: 'Stop for photos, food breaks, and detours. The journey becomes part of the vacation.' },
              { icon: CheckCircle2, title: 'No Hidden Costs', desc: 'Transparent pricing: ₹11/km Sedan, ₹14/km SUV. Toll extra at actual. That is it.' },
            ].map((item, i) => (
              <div key={i} className="glass-card glass-card-hover rounded-2xl p-6 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-lg font-black mb-2">{item.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
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
            {route.faqs.map((faq, i) => (
              <div key={i} className="glass-card rounded-2xl overflow-hidden hover:border-purple-500/20 transition-all">
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} aria-expanded={openFaq === i} aria-label={openFaq === i ? 'Collapse answer' : 'Expand answer'} className="w-full flex items-center justify-between p-6 text-left focus:outline-none focus:ring-2 focus:ring-purple-500/50 rounded-2xl">
                  <span className="font-bold text-white/90 pr-4 faq-answer">{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 text-purple-400 transition-transform flex-shrink-0 ${openFaq === i ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-6 faq-answer"><p className="text-white/50 leading-relaxed">{faq.answer}</p></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RELATED ROUTES */}
      {relatedRoutes.length > 0 && (
        <section className="py-24 md:py-32 px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-black text-center mb-16">Compare More Routes</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {relatedRoutes.map((rr, i) => (
                <Link key={i} href={`/travel-options/${rr.slug}`} className="glass-card glass-card-hover rounded-2xl p-5 block transition-all">
                  <h3 className="font-black mb-1 text-sm">{rr.origin} → {rr.destination}</h3>
                  <p className="text-white/40 text-xs mb-2">{rr.modes.find(m => m.mode === 'Car')?.duration || ''}</p>
                  <span className="text-purple-400 text-xs font-semibold">Compare →</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FINAL CTA */}
      <section className="py-24 px-4 sm:px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/20 to-slate-950" />
        <div className="relative max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6">Book Your Cab Now</h2>
          <p className="text-white/40 text-lg mb-10">{route.origin} to {route.destination} — AC cab from {carMode?.cost}. Door-to-door service.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+917668570551" className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-500 via-fuchsia-500 to-pink-500 text-white px-10 py-5 rounded-2xl font-bold text-lg shadow-[0_0_40px_rgba(168,85,247,0.3)] hover:scale-105 transition-all">
              <Phone className="w-5 h-5" /> Call: 7668570551
            </a>
            <a href={`https://wa.me/917668570551?text=${encodeURIComponent(whatsappMsg)}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 glass-strong text-white px-10 py-5 rounded-2xl font-bold text-lg border border-white/15 hover:border-purple-500/40 transition-all">
              WhatsApp Quote <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
