'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  Phone, ArrowRight, ChevronDown, Shield, Clock, Car, CheckCircle2,
  MapPin, Star, Users, Sparkles, Award, Zap, CheckCircle,
  Crown, ThumbsUp, ShieldCheck, Gauge, UserCheck
} from '@/components/ui/icons';
import { trackWhatsAppClick, trackPhoneCall } from '@/utilis/analytics';

export default function TrustPageClient({ title, subtitle, description, sections = [], faqs = [] }) {
  const [openFaq, setOpenFaq] = useState(null);

  const whatsappMsg = `Hi, I want to learn more about Triveni Cabs. Please share details.`;

  return (
    <div className="min-h-screen bg-white text-gray-900 overflow-hidden">

      {/* ====== HERO SECTION ====== */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        {/* Subtle warm gradient bg */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-50/80 via-white to-yellow-50/50" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(251,191,36,0.08),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(245,158,11,0.05),transparent_60%)]" />

        {/* Subtle dot pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(0,0,0,0.3) 1px, transparent 0)', backgroundSize: '24px 24px' }} />

        {/* Gold accent decorations */}
        <div className="absolute top-20 right-[10%] w-64 h-64 bg-amber-200/20 rounded-full blur-[80px]" />
        <div className="absolute bottom-10 left-[5%] w-48 h-48 bg-yellow-200/15 rounded-full blur-[60px]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          {/* Top badge */}
          {subtitle && (
            <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-200/60 px-5 py-2.5 rounded-full mb-8">
              <ShieldCheck className="w-4 h-4 text-amber-600" />
              <span className="text-amber-700 font-semibold text-sm">{subtitle}</span>
            </div>
          )}

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6 tracking-tight max-w-4xl">
            {title}
          </h1>

          {description && (
            <p className="text-lg md:text-xl text-gray-500 mb-10 max-w-3xl leading-relaxed">{description}</p>
          )}

          {/* Stats strip */}
          <div className="flex flex-wrap gap-6 mb-10">
            {[
              { value: '10,000+', label: 'Happy Customers', icon: Users },
              { value: '4.9\u2605', label: 'Google Rating', icon: Star },
              { value: '24/7', label: 'Available', icon: Clock },
              { value: '100+', label: 'Cities', icon: MapPin },
            ].map((stat, i) => (
              <div key={i} className="flex items-center gap-3 bg-white border border-gray-100 shadow-sm px-5 py-3 rounded-xl">
                <div className="w-9 h-9 rounded-lg bg-amber-50 flex items-center justify-center">
                  <stat.icon className="w-4.5 h-4.5 text-amber-600" />
                </div>
                <div>
                  <div className="text-lg font-black text-gray-900">{stat.value}</div>
                  <div className="text-[10px] text-gray-400 uppercase tracking-widest">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link onClick={() => trackPhoneCall('trust_page')} href="tel:+917668570551" className="group inline-flex items-center gap-3 bg-gray-900 text-white px-8 py-4 rounded-xl font-bold text-base hover:bg-gray-800 transition-all shadow-lg shadow-gray-900/20 hover:shadow-xl">
              <Phone className="w-5 h-5 group-hover:animate-bounce" /> Call: 7668570551
            </Link>
            <Link onClick={() => trackWhatsAppClick('trust_page')} href={`https://wa.me/917668570551?text=${encodeURIComponent(whatsappMsg)}`} className="group inline-flex items-center gap-3 bg-white border-2 border-gray-200 text-gray-900 px-8 py-4 rounded-xl font-bold text-base hover:border-amber-300 hover:bg-amber-50/50 transition-all">
              <svg className="w-5 h-5 text-emerald-600" fill="currentColor" viewBox="0 0 16 16"><path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" /></svg>
              WhatsApp Us <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* ====== TRUST BADGES STRIP ====== */}
      <section className="py-8 border-y border-gray-100 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            {[
              'Government Registered',
              'GPS-Tracked Fleet',
              'Verified Drivers',
              'Transparent Pricing',
              'Insurance Covered',
            ].map((badge, i) => (
              <span key={i} className="flex items-center gap-2 text-gray-500 text-sm font-medium">
                <CheckCircle className="w-4 h-4 text-amber-500" /> {badge}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ====== SECTIONS ====== */}
      {sections.map((section, idx) => (
        <section key={idx} className={`relative py-20 ${idx % 2 === 1 ? 'bg-gray-50/60' : 'bg-white'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            {/* Section header */}
            <div className={`mb-14 ${section.centered ? 'text-center' : ''}`}>
              {section.badge && (
                <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-200/60 px-4 py-2 rounded-full mb-4">
                  <Sparkles className="w-4 h-4 text-amber-600" />
                  <span className="text-amber-700 text-sm font-semibold">{section.badge}</span>
                </div>
              )}
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">{section.title}</h2>
              {section.description && <p className="text-gray-500 max-w-2xl leading-relaxed">{section.description}</p>}
            </div>

            {/* Feature grid */}
            {section.features && (
              <div className={`grid grid-cols-1 ${section.columns === 2 ? 'md:grid-cols-2' : 'sm:grid-cols-2 lg:grid-cols-3'} gap-6`}>
                {section.features.map((feature, i) => (
                  <div key={i} className="group bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-lg hover:shadow-amber-500/5 hover:border-amber-200/60 transition-all duration-300 hover:-translate-y-1">
                    <div className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center mb-4 group-hover:bg-amber-100 transition-colors">
                      <CheckCircle2 className="w-6 h-6 text-amber-600" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{feature.description}</p>
                  </div>
                ))}
              </div>
            )}

            {/* Steps/process */}
            {section.steps && (
              <div className="space-y-6">
                {section.steps.map((step, i) => (
                  <div key={i} className="flex gap-6 bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-md hover:border-amber-200/60 transition-all">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-amber-50 border-2 border-amber-200 flex items-center justify-center">
                      <span className="text-amber-700 font-black text-lg">{i + 1}</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-1">{step.title}</h3>
                      <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Stats grid */}
            {section.stats && (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {section.stats.map((stat, i) => (
                  <div key={i} className="text-center bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-md transition-all">
                    <div className="text-3xl md:text-4xl font-black text-gray-900 mb-1">{stat.value}</div>
                    <div className="text-gray-400 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            )}

            {/* Text content block */}
            {section.content && (
              <div className="max-w-3xl">
                <div className="prose prose-gray prose-lg leading-relaxed text-gray-500">
                  {section.content.map((paragraph, i) => (
                    <p key={i} className="mb-4">{paragraph}</p>
                  ))}
                </div>
              </div>
            )}

            {/* List items */}
            {section.items && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {section.items.map((item, i) => (
                  <div key={i} className="flex items-start gap-3 bg-white border border-gray-100 rounded-xl p-4 hover:border-amber-200/60 transition-all">
                    <CheckCircle2 className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-gray-900">{item.title}</span>
                      {item.description && <span className="text-gray-500 text-sm"> &mdash; {item.description}</span>}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      ))}

      {/* ====== FAQ ====== */}
      {faqs.length > 0 && (
        <section className="relative py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-14">
              <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-200/60 px-4 py-2 rounded-full mb-4">
                <Sparkles className="w-4 h-4 text-amber-600" />
                <span className="text-amber-700 text-sm font-semibold">Got Questions?</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900">Frequently Asked Questions</h2>
            </div>

            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <div key={i} className={`bg-white border rounded-xl ${openFaq === i ? 'border-amber-300 shadow-md shadow-amber-500/5' : 'border-gray-100'} transition-all duration-300 overflow-hidden`}>
                  <button onClick={() => setOpenFaq(openFaq === i ? null : i)} aria-expanded={openFaq === i} aria-label={openFaq === i ? 'Collapse answer' : 'Expand answer'} className="w-full flex items-center justify-between p-5 text-left focus:outline-none focus:ring-2 focus:ring-amber-500/50 rounded-2xl">
                    <span className="text-gray-900 font-semibold pr-4">{faq.question}</span>
                    <ChevronDown className={`w-5 h-5 text-amber-500 flex-shrink-0 transition-transform duration-300 ${openFaq === i ? 'rotate-180' : ''}`} />
                  </button>
                  <div className={`transition-all duration-300 ${openFaq === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
                    <div className="px-5 pb-5 text-gray-500 leading-relaxed">{faq.answer}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ====== FINAL CTA ====== */}
      <section className="relative py-20 bg-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(251,191,36,0.08),transparent_60%)]" />
        <div className="absolute top-0 left-[30%] w-96 h-96 bg-amber-500/5 rounded-full blur-[150px]" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6">Ready to Experience the Difference?</h2>
          <p className="text-white/50 text-lg mb-10 max-w-2xl mx-auto">Join 10,000+ happy travelers who trust Triveni Cabs for safe, reliable, and affordable travel across India.</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link onClick={() => trackPhoneCall('trust_cta')} href="tel:+917668570551" className="group inline-flex items-center gap-3 bg-[#FACF2D] text-gray-900 px-10 py-5 rounded-xl font-bold text-lg hover:bg-yellow-400 transition-all shadow-lg shadow-amber-500/20">
              <Phone className="w-5 h-5 group-hover:animate-bounce" /> Call Now: 7668570551
            </Link>
            <Link onClick={() => trackWhatsAppClick('trust_cta')} href={`https://wa.me/917668570551?text=${encodeURIComponent(whatsappMsg)}`} className="group inline-flex items-center gap-3 bg-white/10 backdrop-blur-xl text-white px-10 py-5 rounded-xl font-bold text-lg border border-white/15 hover:border-amber-300/40 transition-all">
              <svg className="w-5 h-5 text-emerald-400" fill="currentColor" viewBox="0 0 16 16"><path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" /></svg>
              WhatsApp Us <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="flex flex-wrap justify-center gap-6 mt-12">
            {['Verified Drivers', 'No Hidden Charges', 'Free Cancellation', '24/7 Support'].map((badge, i) => (
              <span key={i} className="flex items-center gap-2 text-white/40 text-sm">
                <CheckCircle2 className="w-4 h-4 text-amber-400" /> {badge}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
