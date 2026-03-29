'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  Phone, ArrowRight, ChevronDown, Shield, Clock, Car, CheckCircle2,
  MapPin, Star, Users, Sparkles, Award, Zap, X, CheckCircle,
  Crown, Trophy, ThumbsUp, Target, Gauge
} from '@/components/ui/icons';
import { trackWhatsAppClick, trackPhoneCall } from '@/utilis/analytics';

export default function CompetitorCompareClient({ competitor, comparisonData }) {
  const [openFaq, setOpenFaq] = useState(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const { tagline, intro, features = [], verdictTitle, verdictText, faqs = [], advantages = [] } = comparisonData;
  const whatsappMsg = `Hi, I want to know more about Triveni Cabs services vs ${competitor}. Please share pricing details.`;

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-hidden">

      {/* CSS Animations */}
      <style jsx global>{`
        @keyframes shimmer { 0% { background-position: -200% 0; } 100% { background-position: 200% 0; } }
        @keyframes float { 0%,100% { transform: translateY(0px); } 50% { transform: translateY(-14px); } }
        @keyframes float-slow { 0%,100% { transform: translateY(0px) rotate(0deg); } 50% { transform: translateY(-20px) rotate(3deg); } }
        @keyframes pulse-glow { 0%,100% { box-shadow: 0 0 30px rgba(147,51,234,0.2), 0 0 60px rgba(168,85,247,0.1); } 50% { box-shadow: 0 0 60px rgba(147,51,234,0.5), 0 0 120px rgba(168,85,247,0.3); } }
        @keyframes gradient-x { 0%,100% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } }
        @keyframes morph { 0%,100% { border-radius: 60% 40% 30% 70%/60% 30% 70% 40%; } 50% { border-radius: 30% 60% 70% 40%/50% 60% 30% 60%; } }
        @keyframes glow-pulse { 0%,100% { opacity: 0.5; transform: scale(1); } 50% { opacity: 1; transform: scale(1.05); } }
        .comp-glass { background: rgba(255,255,255,0.03); backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px); border: 1px solid rgba(255,255,255,0.06); }
        .comp-glass-strong { background: rgba(255,255,255,0.05); backdrop-filter: blur(40px); -webkit-backdrop-filter: blur(40px); border: 1px solid rgba(255,255,255,0.08); }
        .comp-glass-hover:hover { background: rgba(255,255,255,0.06); border-color: rgba(147,51,234,0.3); box-shadow: 0 8px 32px rgba(147,51,234,0.1), inset 0 1px 0 rgba(255,255,255,0.05); transform: translateY(-2px); }
        .comp-animate-gradient-x { background-size: 200% 200%; animation: gradient-x 6s ease infinite; }
        .comp-animate-morph { animation: morph 8s ease-in-out infinite; }
        .comp-animate-float { animation: float 4s ease-in-out infinite; }
        .comp-animate-float-slow { animation: float-slow 6s ease-in-out infinite; }
        .comp-animate-glow { animation: glow-pulse 2s ease-in-out infinite; }
        .comp-animate-pulse-glow { animation: pulse-glow 3s ease-in-out infinite; }
      `}</style>

      {/* ====== HERO ====== */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-purple-950/50 to-violet-950/30 comp-animate-gradient-x" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(147,51,234,0.12),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(168,85,247,0.08),transparent_50%)]" />
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.5) 1px, transparent 0)', backgroundSize: '32px 32px' }} />

        {/* Floating orbs */}
        <div className="absolute top-[15%] left-[5%] w-80 h-80 bg-purple-600/20 rounded-full blur-[100px] comp-animate-morph" />
        <div className="absolute bottom-[10%] right-[5%] w-[500px] h-[500px] bg-violet-500/12 rounded-full blur-[150px] comp-animate-morph" style={{ animationDelay: '-4s' }} />
        <div className="absolute top-[50%] left-[30%] w-60 h-60 bg-fuchsia-500/8 rounded-full blur-[120px] comp-animate-morph" style={{ animationDelay: '-2s' }} />

        {/* VS floating badge */}
        <div className="absolute top-28 right-[8%] hidden lg:block comp-animate-float">
          <div className="relative">
            <div className="absolute -inset-12 bg-purple-500/15 rounded-full blur-[60px] animate-pulse" />
            <div className="relative comp-glass-strong rounded-full w-36 h-36 flex items-center justify-center comp-animate-pulse-glow border-2 border-purple-500/25">
              <div className="text-center relative z-10">
                <div className="text-4xl font-black bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-violet-400 to-fuchsia-400">VS</div>
                <div className="text-[9px] font-bold text-purple-300/80 uppercase tracking-[0.15em]">Comparison</div>
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
          <div className="inline-flex items-center gap-2.5 comp-glass-strong px-6 py-3 rounded-full mb-10 border-purple-500/25 comp-animate-glow">
            <Trophy className="w-4 h-4 text-purple-400" />
            <span className="text-purple-300 font-semibold text-sm tracking-wide">{tagline}</span>
            <div className="w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse" />
          </div>

          <div className="flex items-center gap-3 sm:gap-4 md:gap-6 mb-8 flex-wrap">
            <span className="text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-black text-white tracking-tight">Triveni Cabs</span>
            <div className="flex items-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-r from-purple-500 to-fuchsia-500 flex items-center justify-center text-xl sm:text-2xl font-black text-white shadow-[0_0_40px_rgba(147,51,234,0.5)]">VS</div>
            </div>
            <span className="text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-black bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-violet-400 to-fuchsia-400 break-words">{competitor}</span>
          </div>

          <p className="text-lg md:text-xl text-white/50 mb-10 max-w-3xl leading-relaxed">{intro}</p>

          <div className="flex flex-wrap gap-3 mb-12">
            {[
              { icon: Star, text: '4.9\u2605 (10,000+ reviews)', special: true },
              { icon: Shield, text: 'Verified Drivers' },
              { icon: Crown, text: 'Best Prices Guaranteed' },
              { icon: Clock, text: '24/7 Support' },
            ].map((pill, i) => (
              <span key={i} className={`inline-flex items-center gap-2 backdrop-blur-2xl px-5 py-3 rounded-2xl text-sm font-medium transition-all duration-300 hover:scale-105 ${pill.special ? 'bg-yellow-500/10 border border-yellow-500/25 text-yellow-300' : 'comp-glass border-white/10 text-white/70 hover:border-purple-500/30'}`}>
                <pill.icon className={`w-4 h-4 ${pill.special ? 'text-yellow-400' : 'text-purple-400'}`} /> {pill.text}
              </span>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link onClick={() => trackPhoneCall('competitor_compare')} href="tel:+917668570551" className="group inline-flex items-center gap-3 bg-gradient-to-r from-purple-500 via-violet-500 to-fuchsia-600 text-white px-10 py-5 rounded-2xl font-bold text-lg shadow-[0_0_40px_rgba(147,51,234,0.3)] hover:shadow-[0_0_60px_rgba(147,51,234,0.5)] hover:scale-105 transition-all duration-300">
              <Phone className="w-5 h-5 group-hover:animate-bounce" /> Call: 7668570551
            </Link>
            <Link onClick={() => trackWhatsAppClick('competitor_compare')} href={`https://wa.me/917668570551?text=${encodeURIComponent(whatsappMsg)}`} className="group inline-flex items-center gap-3 comp-glass-strong text-white px-10 py-5 rounded-2xl font-bold text-lg border border-white/15 hover:border-purple-500/40 transition-all duration-300">
              <svg className="w-5 h-5 text-emerald-400" fill="currentColor" viewBox="0 0 16 16"><path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" /></svg>
              WhatsApp Quote <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* ====== FEATURE COMPARISON TABLE ====== */}
      <section className="relative py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-purple-500/10 px-4 py-2 rounded-full mb-4">
              <Target className="w-4 h-4 text-purple-400" />
              <span className="text-purple-400 text-sm font-semibold">Feature Comparison</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4">Side-by-Side Comparison</h2>
            <p className="text-white/40 max-w-2xl mx-auto">See how Triveni Cabs stacks up against {competitor} across key parameters</p>
          </div>

          {/* Comparison header */}
          <div className="overflow-x-auto -mx-4 px-4">
          <div className="min-w-[540px]">
          <div className="comp-glass rounded-t-2xl border border-white/6 p-4 md:p-6">
            <div className="grid grid-cols-3 gap-3 md:gap-4 items-center">
              <div className="text-sm font-bold text-white/40 uppercase tracking-widest">Feature</div>
              <div className="text-center">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/20 to-violet-500/20 px-4 py-2 rounded-xl border border-purple-500/30">
                  <Crown className="w-4 h-4 text-purple-400" />
                  <span className="text-white font-bold text-sm">Triveni Cabs</span>
                </div>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center gap-2 bg-white/5 px-4 py-2 rounded-xl border border-white/10">
                  <span className="text-white/60 font-bold text-sm">{competitor}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Comparison rows */}
          <div className="border-x border-white/6">
            {features.map((f, i) => (
              <div key={i} className={`grid grid-cols-3 gap-3 md:gap-4 items-center p-4 md:p-6 border-b border-white/6 transition-all duration-300 hover:bg-white/[0.02] ${f.winner === 'triveni' ? 'bg-purple-500/[0.02]' : ''}`}>
                <div>
                  <div className="text-white font-semibold text-sm">{f.feature}</div>
                  {f.note && <div className="text-white/40 text-xs mt-1">{f.note}</div>}
                </div>
                <div className="text-center">
                  <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-medium ${f.winner === 'triveni' ? 'bg-purple-500/15 text-purple-300 border border-purple-500/25' : 'text-white/70'}`}>
                    {f.winner === 'triveni' && <CheckCircle className="w-4 h-4 text-purple-400" />}
                    {f.triveni}
                  </div>
                </div>
                <div className="text-center">
                  <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-medium ${f.winner === 'competitor' ? 'bg-white/10 text-white/80' : 'text-white/40'}`}>
                    {f.competitor}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom summary */}
          <div className="comp-glass rounded-b-2xl border border-white/6 p-4 md:p-6">
            <div className="grid grid-cols-3 gap-3 md:gap-4 items-center">
              <div className="text-xs md:text-sm font-bold text-white/40 uppercase tracking-widest">Winner</div>
              <div className="text-center">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-violet-500 px-6 py-2 rounded-xl text-white font-bold text-sm shadow-[0_0_20px_rgba(147,51,234,0.3)]">
                  <Trophy className="w-4 h-4" /> Triveni Cabs
                </div>
              </div>
              <div className="text-center text-white/40 text-sm">{competitor}</div>
            </div>
          </div>
          </div>
          </div>
        </div>
      </section>

      {/* ====== ADVANTAGES SECTION ====== */}
      {advantages.length > 0 && (
        <section className="relative py-24 border-t border-white/5">
          <div className="absolute top-0 left-[20%] w-96 h-96 bg-purple-500/8 rounded-full blur-[200px]" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-white mb-4">Why Travelers Prefer Triveni Cabs</h2>
              <p className="text-white/40">Key advantages over {competitor}</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {advantages.map((adv, i) => (
                <div key={i} className="comp-glass rounded-2xl p-6 border border-white/6 hover:border-purple-500/30 transition-all duration-300 hover:-translate-y-1">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-violet-500 flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{adv.title}</h3>
                  <p className="text-white/40 text-sm leading-relaxed">{adv.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ====== VERDICT SECTION ====== */}
      <section className="relative py-24 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="comp-glass rounded-3xl p-8 md:p-12 border border-purple-500/20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-[100px]" />
            <div className="relative">
              <div className="inline-flex items-center gap-2 bg-purple-500/10 px-4 py-2 rounded-full mb-6">
                <Award className="w-4 h-4 text-purple-400" />
                <span className="text-purple-400 text-sm font-semibold">Our Verdict</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-black text-white mb-6">{verdictTitle}</h2>
              <p className="text-white/50 leading-relaxed text-lg mb-8">{verdictText}</p>
              <div className="flex flex-wrap gap-4">
                <Link onClick={() => trackPhoneCall('competitor_verdict')} href="tel:+917668570551" className="group inline-flex items-center gap-3 bg-gradient-to-r from-purple-500 to-violet-500 text-white px-8 py-4 rounded-2xl font-bold shadow-[0_0_30px_rgba(147,51,234,0.3)] hover:scale-105 transition-all">
                  <Phone className="w-5 h-5" /> Call: 7668570551
                </Link>
                <Link onClick={() => trackWhatsAppClick('competitor_verdict')} href={`https://wa.me/917668570551?text=${encodeURIComponent(whatsappMsg)}`} className="group inline-flex items-center gap-3 comp-glass-strong text-white px-8 py-4 rounded-2xl font-bold border border-white/15 hover:border-purple-500/30 transition-all">
                  Get Free Quote <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====== FAQ ====== */}
      {faqs.length > 0 && (
        <section className="relative py-24 border-t border-white/5">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-purple-500/10 px-4 py-2 rounded-full mb-4">
                <Sparkles className="w-4 h-4 text-purple-400" />
                <span className="text-purple-400 text-sm font-semibold">Got Questions?</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-white">Frequently Asked Questions</h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div key={i} className={`comp-glass rounded-2xl border border-white/6 ${openFaq === i ? 'border-purple-500/40' : ''} transition-all duration-300 overflow-hidden`}>
                  <button onClick={() => setOpenFaq(openFaq === i ? null : i)} aria-expanded={openFaq === i} aria-label={openFaq === i ? 'Collapse answer' : 'Expand answer'} className="w-full flex items-center justify-between p-6 text-left focus:outline-none focus:ring-2 focus:ring-purple-500/50 rounded-2xl">
                    <span className="text-white font-semibold pr-4">{faq.question}</span>
                    <ChevronDown className={`w-5 h-5 text-purple-400 flex-shrink-0 transition-transform duration-300 ${openFaq === i ? 'rotate-180' : ''}`} />
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
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-purple-600/15 rounded-full blur-[200px] opacity-30" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6">Switch to Triveni Cabs Today</h2>
          <p className="text-white/40 text-lg mb-10 max-w-2xl mx-auto">Better pricing, verified drivers, transparent billing, and 24/7 support. See the difference for yourself.</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link onClick={() => trackPhoneCall('competitor_cta')} href="tel:+917668570551" className="group inline-flex items-center gap-3 bg-gradient-to-r from-purple-500 via-violet-500 to-fuchsia-600 text-white px-10 py-5 rounded-2xl font-bold text-lg shadow-[0_0_40px_rgba(147,51,234,0.3)] hover:shadow-[0_0_60px_rgba(147,51,234,0.5)] hover:scale-105 transition-all duration-300">
              <Phone className="w-5 h-5 group-hover:animate-bounce" /> Call Now: 7668570551
            </Link>
            <Link onClick={() => trackWhatsAppClick('competitor_cta')} href={`https://wa.me/917668570551?text=${encodeURIComponent(whatsappMsg)}`} className="group inline-flex items-center gap-3 comp-glass-strong text-white px-10 py-5 rounded-2xl font-bold text-lg border border-white/15 hover:border-purple-500/40 transition-all duration-300">
              <svg className="w-5 h-5 text-emerald-400" fill="currentColor" viewBox="0 0 16 16"><path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" /></svg>
              WhatsApp Us <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="flex flex-wrap justify-center gap-6 mt-12">
            {['No Surge Pricing', 'Verified Drivers', 'Transparent Billing', '24/7 Support'].map((badge, i) => (
              <span key={i} className="flex items-center gap-2 text-white/40 text-sm">
                <CheckCircle2 className="w-4 h-4 text-purple-400" /> {badge}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
