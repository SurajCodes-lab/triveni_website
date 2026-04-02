'use client';

import Image from 'next/image';
import Link from 'next/link';
import { getCityImage, heroBlurDataURL } from '@/utilis/imageUtils';
import ScrollReveal from '@/components/shared/ScrollReveal';
import FaqAccordion from '@/components/shared/FaqAccordion';
import CTASection from '@/components/shared/CTASection';
import MobileStickyBar from '@/components/ui/MobileStickyBar';
import {
  Phone, ArrowRight, Shield, Clock, CheckCircle2,
  Star, Users, MapPin, Award, CheckCircle, Trophy, ChevronRight
} from '@/components/ui/icons';
import { trackWhatsAppClick, trackPhoneCall } from '@/utilis/analytics';

const WA = <svg className="w-4 h-4" viewBox="0 0 16 16" fill="currentColor"><path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" /></svg>;

export default function CompetitorCompareClient({ competitor, comparisonData }) {
  const { tagline, intro, features = [], verdictTitle, verdictText, faqs = [], advantages = [] } = comparisonData;
  const whatsappMsg = `Hi, I want to know more about Triveni Cabs services vs ${competitor}. Please share pricing details.`;
  const heroImage = getCityImage('delhi');

  return (
    <div className="min-h-screen bg-[#f8f7f4] text-slate-900">

      {/* ━━━ HERO ━━━ */}
      <section className="relative min-h-[75vh] sm:min-h-[80vh] flex flex-col justify-end overflow-hidden">
        <Image src={heroImage} alt={`Triveni Cabs vs ${competitor}`} fill priority className="object-cover" sizes="100vw" quality={85} placeholder="blur" blurDataURL={heroBlurDataURL} />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#FACF2D] via-indigo-400 to-violet-400 z-20" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full pb-8 sm:pb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10 mb-5">
              <Trophy className="w-3.5 h-3.5 text-[#FACF2D]" />
              <span className="text-[11px] font-bold text-[#FACF2D] uppercase tracking-widest">{tagline}</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-[0.95] tracking-tight">
              Triveni Cabs<br />
              <span className="text-indigo-400">vs</span> <span className="text-white/70">{competitor}</span>
            </h1>
            <p className="text-white/40 mt-4 text-sm sm:text-base max-w-lg leading-relaxed">{intro}</p>

            <div className="flex flex-wrap gap-3 mt-6">
              <Link onClick={() => trackPhoneCall('competitor_hero')} href="tel:+917668570551" className="inline-flex items-center gap-2 bg-[#FACF2D] text-slate-900 px-6 py-3.5 rounded-full font-bold text-sm hover:bg-amber-300 transition-all active:scale-[0.97] shadow-lg shadow-amber-500/20">
                <Phone className="w-4 h-4" /> Call 7668570551
              </Link>
              <Link onClick={() => trackWhatsAppClick('competitor_hero')} href={`https://wa.me/917668570551?text=${encodeURIComponent(whatsappMsg)}`} className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-6 py-3.5 rounded-full font-bold text-sm border border-white/15 hover:bg-white/15 transition-all">
                {WA} WhatsApp Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ━━━ DARK STRIP: Key stats ━━━ */}
      <section className="bg-slate-900 py-6 sm:py-8 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { value: '4.9', label: 'Google Rating', icon: Star },
              { value: '10,000+', label: 'Reviews', icon: Users },
              { value: '100+', label: 'Cities', icon: MapPin },
              { value: '24/7', label: 'Support', icon: Clock },
            ].map((s, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-4 text-center">
                <s.icon className="w-5 h-5 text-indigo-400 mx-auto mb-2" />
                <p className="text-lg font-black text-white">{s.value}</p>
                <p className="text-[10px] text-white/30 uppercase tracking-wider">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━ FEATURE COMPARISON TABLE ━━━ */}
      <section className="py-12 sm:py-16 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <p className="text-[10px] font-bold text-indigo-600 uppercase tracking-widest mb-1">Feature Comparison</p>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-8">Side-by-Side Comparison</h2>
          </ScrollReveal>

          {/* Desktop table */}
          <ScrollReveal>
            <div className="hidden md:block">
              <div className="bg-white rounded-t-2xl border border-slate-200 p-5">
                <div className="grid grid-cols-3 gap-4 items-center">
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">Feature</div>
                  <div className="text-center">
                    <div className="inline-flex items-center gap-2 bg-indigo-50 px-4 py-2 rounded-xl border border-indigo-200">
                      <Trophy className="w-4 h-4 text-indigo-600" />
                      <span className="text-slate-900 font-bold text-sm">Triveni Cabs</span>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="inline-flex items-center gap-2 bg-slate-100 px-4 py-2 rounded-xl border border-slate-200">
                      <span className="text-slate-500 font-bold text-sm">{competitor}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border-x border-slate-200">
                {features.map((f, i) => (
                  <div key={i} className={`grid grid-cols-3 gap-4 items-center p-5 border-b border-slate-100 transition-colors ${f.winner === 'triveni' ? 'bg-indigo-50/40' : 'bg-white'}`}>
                    <div>
                      <div className="text-slate-800 font-semibold text-sm">{f.feature}</div>
                      {f.note && <div className="text-slate-400 text-xs mt-0.5">{f.note}</div>}
                    </div>
                    <div className="text-center">
                      <div className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium ${f.winner === 'triveni' ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' : 'text-slate-600'}`}>
                        {f.winner === 'triveni' && <CheckCircle className="w-4 h-4 text-emerald-500" />}
                        {f.triveni}
                      </div>
                    </div>
                    <div className="text-center">
                      <span className="text-slate-400 text-sm">{f.competitor}</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="bg-white rounded-b-2xl border border-slate-200 p-5">
                <div className="grid grid-cols-3 gap-4 items-center">
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">Winner</div>
                  <div className="text-center">
                    <div className="inline-flex items-center gap-2 bg-[#FACF2D] px-5 py-2 rounded-xl text-slate-900 font-bold text-sm shadow-sm">
                      <Trophy className="w-4 h-4" /> Triveni Cabs
                    </div>
                  </div>
                  <div className="text-center text-slate-400 text-sm">{competitor}</div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Mobile stacked cards */}
          <div className="md:hidden space-y-3">
            {features.map((f, i) => (
              <ScrollReveal key={i} delay={i * 40}>
                <div className={`rounded-xl border p-4 ${f.winner === 'triveni' ? 'bg-indigo-50/40 border-indigo-200/60' : 'bg-white border-slate-200'}`}>
                  <p className="text-sm font-bold text-slate-900 mb-2">{f.feature}</p>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <p className="text-[10px] text-slate-400 uppercase tracking-wider mb-1">Triveni</p>
                      <div className={`text-sm font-medium ${f.winner === 'triveni' ? 'text-emerald-700' : 'text-slate-700'}`}>
                        {f.winner === 'triveni' && <CheckCircle className="w-3.5 h-3.5 text-emerald-500 inline mr-1" />}
                        {f.triveni}
                      </div>
                    </div>
                    <div>
                      <p className="text-[10px] text-slate-400 uppercase tracking-wider mb-1">{competitor}</p>
                      <p className="text-sm text-slate-500">{f.competitor}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
            <div className="bg-[#FACF2D] rounded-xl p-4 text-center">
              <Trophy className="w-5 h-5 text-slate-900 mx-auto mb-1" />
              <p className="font-black text-slate-900 text-sm">Triveni Cabs Wins</p>
            </div>
          </div>
        </div>
      </section>

      {/* ━━━ ADVANTAGES: Dark section ━━━ */}
      {advantages.length > 0 && (
        <section className="py-12 sm:py-16 px-4 sm:px-6 bg-slate-900">
          <div className="max-w-6xl mx-auto">
            <ScrollReveal>
              <p className="text-[10px] font-bold text-[#FACF2D] uppercase tracking-widest mb-1">Key Advantages</p>
              <h2 className="text-2xl sm:text-3xl font-black text-white mb-8">Why Travelers Prefer Triveni Cabs</h2>
            </ScrollReveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {advantages.map((adv, i) => (
                <ScrollReveal key={i} stagger={i * 60}>
                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-5 hover:border-indigo-400/30 transition-all h-full">
                    <div className="w-10 h-10 rounded-xl bg-indigo-500/20 flex items-center justify-center mb-3">
                      <CheckCircle2 className="w-5 h-5 text-indigo-400" />
                    </div>
                    <h3 className="text-base font-bold text-white mb-1">{adv.title}</h3>
                    <p className="text-white/50 text-sm leading-relaxed">{adv.description}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ━━━ VERDICT ━━━ */}
      <section className="py-12 sm:py-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl border border-indigo-200/60 p-6 md:p-10">
              <div className="inline-flex items-center gap-2 bg-white border border-indigo-200 px-4 py-2 rounded-full mb-5">
                <Award className="w-4 h-4 text-indigo-600" />
                <span className="text-indigo-700 text-xs font-bold uppercase tracking-wide">Our Verdict</span>
              </div>
              <h2 className="text-xl md:text-2xl font-black text-slate-900 mb-4">{verdictTitle}</h2>
              <p className="text-slate-600 leading-relaxed mb-6">{verdictText}</p>
              <div className="flex flex-wrap gap-3">
                <Link onClick={() => trackPhoneCall('competitor_verdict')} href="tel:+917668570551" className="inline-flex items-center gap-2 bg-[#FACF2D] text-slate-900 px-6 py-3.5 rounded-full font-bold text-sm hover:bg-amber-300 transition-all shadow-lg shadow-amber-500/20">
                  <Phone className="w-4 h-4" /> Call 7668570551
                </Link>
                <Link onClick={() => trackWhatsAppClick('competitor_verdict')} href={`https://wa.me/917668570551?text=${encodeURIComponent(whatsappMsg)}`} className="inline-flex items-center gap-2 bg-white text-slate-900 px-6 py-3.5 rounded-full font-bold text-sm border border-slate-200 hover:border-indigo-300 transition-all">
                  Get Free Quote <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <FaqAccordion faqs={faqs} />
      <CTASection heading="Switch to Triveni Cabs Today" subheading="Better pricing, verified drivers, transparent billing, and 24/7 support. See the difference for yourself." />
      <MobileStickyBar />
    </div>
  );
}
