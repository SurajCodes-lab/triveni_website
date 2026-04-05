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
  MapPin, Star, Users, Sparkles, CheckCircle, ChevronRight
} from '@/components/ui/icons';
import { trackWhatsAppClick, trackPhoneCall } from '@/utilis/analytics';

const WA = <svg className="w-4 h-4" viewBox="0 0 16 16" fill="currentColor"><path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" /></svg>;

export default function TrustPageClient({ title, subtitle, description, sections = [], faqs = [] }) {
  const whatsappMsg = `Hi, I want to learn more about Triveni Cabs. Please share details.`;
  const heroImage = getCityImage('agra');

  return (
    <div className="min-h-screen bg-[#f8f7f4] text-slate-900">

      {/* ━━━ HERO ━━━ */}
      <section className="relative min-h-[75vh] sm:min-h-[80vh] flex flex-col justify-end overflow-hidden">
        <Image src={heroImage} alt={title} fill priority className="object-cover" sizes="100vw" quality={85} placeholder="blur" blurDataURL={heroBlurDataURL} />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#FACF2D] via-amber-400 to-orange-400 z-20" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full pb-8 sm:pb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10 mb-5">
              <Shield className="w-3.5 h-3.5 text-[#FACF2D]" />
              <span className="text-[11px] font-bold text-[#FACF2D] uppercase tracking-widest">Trust & Safety</span>
            </div>
            {subtitle && <p className="text-white/40 text-sm font-medium uppercase tracking-widest mb-2">{subtitle}</p>}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black text-white leading-[0.95] tracking-tight">{title}</h1>
            {description && <p className="text-white/40 mt-4 text-sm sm:text-base max-w-lg leading-relaxed">{description}</p>}

            <div className="flex flex-wrap gap-3 mt-6">
              <Link onClick={() => trackPhoneCall('trust_hero')} href="tel:+917668570551" className="inline-flex items-center gap-2 bg-[#FACF2D] text-slate-900 px-6 py-3.5 rounded-full font-bold text-sm hover:bg-amber-300 transition-all active:scale-[0.97] shadow-lg shadow-amber-500/20">
                <Phone className="w-4 h-4" /> Call 7668570551
              </Link>
              <Link onClick={() => trackWhatsAppClick('trust_hero')} href={`https://wa.me/917668570551?text=${encodeURIComponent(whatsappMsg)}`} className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-6 py-3.5 rounded-full font-bold text-sm border border-white/15 hover:bg-white/15 transition-all">
                {WA} WhatsApp Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ━━━ DARK STRIP: Stats + trust badges ━━━ */}
      <section className="bg-slate-900 py-6 sm:py-8 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-5">
            {[
              { value: '10,000+', label: 'Happy Customers', icon: Users },
              { value: '4.9', label: 'Google Rating', icon: Star },
              { value: '24/7', label: 'Available', icon: Clock },
              { value: '100+', label: 'Cities', icon: MapPin },
            ].map((s, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-4 text-center">
                <s.icon className="w-5 h-5 text-[#FACF2D] mx-auto mb-2" />
                <p className="text-lg font-black text-white">{s.value}</p>
                <p className="text-[10px] text-white/30 uppercase tracking-wider">{s.label}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            {['Government Registered', 'GPS-Tracked Fleet', 'Verified Drivers', 'Transparent Pricing', 'Insurance Covered'].map((badge, i) => (
              <span key={i} className="flex items-center gap-2 text-white/40 text-xs font-medium">
                <CheckCircle className="w-3.5 h-3.5 text-amber-400" /> {badge}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━ DYNAMIC SECTIONS ━━━ */}
      {sections.map((section, idx) => {
        const isDark = idx % 3 === 1;
        return (
          <section key={idx} className={`py-12 sm:py-16 px-4 sm:px-6 ${isDark ? 'bg-slate-900' : idx % 2 === 0 ? 'bg-[#f8f7f4]' : 'bg-white'}`}>
            <div className="max-w-6xl mx-auto">
              <ScrollReveal>
                <div className={`mb-8 ${section.centered ? 'text-center' : ''}`}>
                  {section.badge && (
                    <p className={`text-[10px] font-bold uppercase tracking-widest mb-1 ${isDark ? 'text-[#FACF2D]' : 'text-amber-600'}`}>{section.badge}</p>
                  )}
                  <h2 className={`text-2xl sm:text-3xl font-black mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>{section.title}</h2>
                  {section.description && <p className={`max-w-2xl leading-relaxed text-sm ${isDark ? 'text-white/40' : 'text-slate-500'}`}>{section.description}</p>}
                </div>
              </ScrollReveal>

              {/* Feature grid */}
              {section.features && (
                <div className={`grid grid-cols-1 ${section.columns === 2 ? 'md:grid-cols-2' : 'sm:grid-cols-2 lg:grid-cols-3'} gap-4`}>
                  {section.features.map((feature, i) => (
                    <ScrollReveal key={i} delay={i * 50}>
                      <div className={`rounded-2xl border p-5 transition-all hover:shadow-md h-full ${isDark ? 'bg-white/5 border-white/10 hover:border-[#FACF2D]/30' : 'bg-white border-slate-100 hover:border-amber-200'}`}>
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 ${isDark ? 'bg-amber-500/20' : 'bg-amber-50'}`}>
                          <CheckCircle2 className={`w-5 h-5 ${isDark ? 'text-amber-400' : 'text-amber-600'}`} />
                        </div>
                        <h3 className={`text-base font-bold mb-1 ${isDark ? 'text-white' : 'text-slate-900'}`}>{feature.title}</h3>
                        <p className={`text-sm leading-relaxed ${isDark ? 'text-white/50' : 'text-slate-500'}`}>{feature.description}</p>
                      </div>
                    </ScrollReveal>
                  ))}
                </div>
              )}

              {/* Steps/process */}
              {section.steps && (
                <div className="space-y-3">
                  {section.steps.map((step, i) => (
                    <ScrollReveal key={i} delay={i * 60}>
                      <div className={`flex gap-4 rounded-2xl border p-5 transition-all hover:shadow-md ${isDark ? 'bg-white/5 border-white/10 hover:border-[#FACF2D]/30' : 'bg-white border-slate-100 hover:border-amber-200'}`}>
                        <div className={`flex-shrink-0 w-10 h-10 rounded-full border-2 flex items-center justify-center ${isDark ? 'bg-amber-500/20 border-amber-500/30' : 'bg-amber-50 border-amber-200'}`}>
                          <span className={`font-black text-sm ${isDark ? 'text-amber-400' : 'text-amber-700'}`}>{i + 1}</span>
                        </div>
                        <div>
                          <h3 className={`text-base font-bold mb-0.5 ${isDark ? 'text-white' : 'text-slate-900'}`}>{step.title}</h3>
                          <p className={`text-sm leading-relaxed ${isDark ? 'text-white/50' : 'text-slate-500'}`}>{step.description}</p>
                        </div>
                      </div>
                    </ScrollReveal>
                  ))}
                </div>
              )}

              {/* Stats grid */}
              {section.stats && (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {section.stats.map((stat, i) => (
                    <ScrollReveal key={i} delay={i * 60}>
                      <div className={`text-center rounded-2xl border p-5 transition-all hover:shadow-md ${isDark ? 'bg-white/5 border-white/10' : 'bg-white border-slate-100'}`}>
                        <div className={`text-2xl md:text-3xl font-black mb-1 ${isDark ? 'text-white' : 'text-slate-900'}`}>{stat.value}</div>
                        <div className={`text-xs ${isDark ? 'text-white/30' : 'text-slate-400'}`}>{stat.label}</div>
                      </div>
                    </ScrollReveal>
                  ))}
                </div>
              )}

              {/* Text content */}
              {section.content && (
                <ScrollReveal>
                  <div className="max-w-3xl">
                    {section.content.map((paragraph, i) => (
                      <p key={i} className={`text-sm leading-relaxed mb-3 ${isDark ? 'text-white/50' : 'text-slate-500'}`}>{paragraph}</p>
                    ))}
                  </div>
                </ScrollReveal>
              )}

              {/* List items */}
              {section.items && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {section.items.map((item, i) => (
                    <ScrollReveal key={i} delay={i * 40}>
                      <div className={`flex items-start gap-3 rounded-xl border p-4 transition-all ${isDark ? 'bg-white/5 border-white/10 hover:border-[#FACF2D]/30' : 'bg-white border-slate-100 hover:border-amber-200'}`}>
                        <CheckCircle2 className={`w-5 h-5 flex-shrink-0 mt-0.5 ${isDark ? 'text-amber-400' : 'text-amber-500'}`} />
                        <div>
                          <span className={`font-semibold text-sm ${isDark ? 'text-white' : 'text-slate-900'}`}>{item.title}</span>
                          {item.description && <span className={`text-sm ${isDark ? 'text-white/40' : 'text-slate-500'}`}> &mdash; {item.description}</span>}
                        </div>
                      </div>
                    </ScrollReveal>
                  ))}
                </div>
              )}
            </div>
          </section>
        );
      })}

      <FaqAccordion faqs={faqs} />
      <CTASection heading="Ready to Experience the Difference?" subheading="Join 10,000+ happy travelers who trust Triveni Cabs for safe, reliable, and affordable travel across India." />
      <MobileStickyBar />
    </div>
  );
}
