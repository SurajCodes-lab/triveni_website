'use client';

import Image from 'next/image';
import Link from 'next/link';
import { getCityImage, heroBlurDataURL } from '@/utilis/imageUtils';
import ScrollReveal from '@/components/shared/ScrollReveal';
import FaqAccordion from '@/components/shared/FaqAccordion';
import CTASection from '@/components/shared/CTASection';
import MobileStickyBar from '@/components/ui/MobileStickyBar';
import {
  Phone, ArrowRight, Shield, Clock, Car, CheckCircle2,
  MapPin, Star, Users, Zap, Award, Calendar, ChevronRight
} from '@/components/ui/icons';
import { trackWhatsAppClick, trackPhoneCall } from '@/utilis/analytics';

const ACCENT = {
  summer:    { text: 'text-amber-600',   bg: 'bg-amber-50',   badge: 'bg-amber-100 text-amber-700', strip: 'from-amber-400 via-orange-400 to-rose-400', dark: 'text-amber-400' },
  winter:    { text: 'text-blue-600',    bg: 'bg-blue-50',    badge: 'bg-blue-100 text-blue-700',   strip: 'from-blue-400 via-cyan-400 to-sky-400',     dark: 'text-blue-400' },
  monsoon:   { text: 'text-emerald-600', bg: 'bg-emerald-50', badge: 'bg-emerald-100 text-emerald-700', strip: 'from-emerald-400 via-teal-400 to-cyan-400', dark: 'text-emerald-400' },
  festival:  { text: 'text-rose-600',    bg: 'bg-rose-50',    badge: 'bg-rose-100 text-rose-700',   strip: 'from-rose-400 via-pink-400 to-amber-400',   dark: 'text-rose-400' },
  christmas: { text: 'text-emerald-600', bg: 'bg-emerald-50', badge: 'bg-emerald-100 text-emerald-700', strip: 'from-emerald-400 via-red-400 to-green-400', dark: 'text-emerald-400' },
  weekend:   { text: 'text-amber-600',   bg: 'bg-amber-50',   badge: 'bg-amber-100 text-amber-700', strip: 'from-amber-400 via-yellow-400 to-orange-400', dark: 'text-amber-400' },
  durga:     { text: 'text-rose-600',    bg: 'bg-rose-50',    badge: 'bg-rose-100 text-rose-700',   strip: 'from-rose-400 via-orange-400 to-amber-400', dark: 'text-rose-400' },
  guru:      { text: 'text-amber-600',   bg: 'bg-amber-50',   badge: 'bg-amber-100 text-amber-700', strip: 'from-amber-400 via-yellow-400 to-orange-400', dark: 'text-amber-400' },
  republic:  { text: 'text-blue-600',    bg: 'bg-blue-50',    badge: 'bg-blue-100 text-blue-700',   strip: 'from-blue-400 via-indigo-400 to-violet-400', dark: 'text-blue-400' },
};

const WA = <svg className="w-4 h-4" viewBox="0 0 16 16" fill="currentColor"><path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" /></svg>;

export default function SeasonalPageClient({ title, subtitle, description, destinations = [], packages = [], faqs = [], theme = 'christmas' }) {
  const a = ACCENT[theme] || ACCENT.christmas;
  const heroImage = getCityImage(destinations[0]?.name?.split(' to ').pop() || 'delhi');
  const whatsappMsg = `Hi, I'm interested in ${title}. Please share details and pricing.`;

  return (
    <div className="min-h-screen bg-[#f8f7f4] text-slate-900">

      {/* ━━━ HERO ━━━ */}
      <section className="relative min-h-[75vh] sm:min-h-[80vh] flex flex-col justify-end overflow-hidden">
        <Image src={heroImage} alt={title} fill priority className="object-cover" sizes="100vw" quality={85} placeholder="blur" blurDataURL={heroBlurDataURL} />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />
        <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${a.strip} z-20`} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full pb-8 sm:pb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10 mb-5">
              <Calendar className={`w-3.5 h-3.5 ${a.dark}`} />
              <span className={`text-[11px] font-bold ${a.dark} uppercase tracking-widest`}>{subtitle || 'Seasonal Travel'}</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-white leading-[0.95] tracking-tight">{title}</h1>
            <p className="text-white/40 mt-4 text-sm sm:text-base max-w-lg leading-relaxed">{description}</p>

            <div className="flex flex-wrap gap-3 mt-6">
              <Link onClick={() => trackPhoneCall('seasonal_hero')} href="tel:+917668570551" className="inline-flex items-center gap-2 bg-[#FACF2D] text-slate-900 px-6 py-3.5 rounded-full font-bold text-sm hover:bg-amber-300 transition-all active:scale-[0.97] shadow-lg shadow-amber-500/20">
                <Phone className="w-4 h-4" /> Call 7668570551
              </Link>
              <Link onClick={() => trackWhatsAppClick('seasonal_hero')} href={`https://wa.me/917668570551?text=${encodeURIComponent(whatsappMsg)}`} className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-6 py-3.5 rounded-full font-bold text-sm border border-white/15 hover:bg-white/15 transition-all">
                {WA} WhatsApp Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ━━━ DARK STRIP: Key metrics ━━━ */}
      <section className="bg-slate-900 py-6 sm:py-8 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { value: '10,000+', label: 'Happy Travelers', icon: Users },
              { value: '4.9', label: 'Google Rating', icon: Star },
              { value: '24/7', label: 'Support', icon: Clock },
              { value: '100+', label: 'Cities', icon: MapPin },
            ].map((s, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-4 text-center">
                <s.icon className={`w-5 h-5 ${a.dark} mx-auto mb-2`} />
                <p className="text-lg font-black text-white">{s.value}</p>
                <p className="text-[10px] text-white/30 uppercase tracking-wider">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━ DESTINATIONS ━━━ */}
      {destinations.length > 0 && (
        <section className="py-12 sm:py-16 px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <ScrollReveal>
              <p className={`text-[10px] font-bold ${a.text} uppercase tracking-widest mb-1`}>Top Destinations</p>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-8">Popular Getaways</h2>
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {destinations.map((dest, i) => (
                <ScrollReveal key={i} delay={i * 60}>
                  <div className="bg-white rounded-2xl border border-slate-100 p-5 hover:shadow-lg hover:border-slate-200 transition-all duration-300 h-full">
                    <div className="flex items-start gap-3 mb-3">
                      <div className={`w-10 h-10 rounded-xl ${a.bg} flex items-center justify-center flex-shrink-0`}>
                        <MapPin className={`w-5 h-5 ${a.text}`} />
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-slate-900">{dest.name}</h3>
                        {dest.distance && <p className="text-xs text-slate-400">{dest.distance}</p>}
                      </div>
                    </div>
                    <p className="text-slate-500 text-sm mb-3 leading-relaxed">{dest.description}</p>
                    {dest.highlights && (
                      <div className="flex flex-wrap gap-1.5 mb-3">
                        {dest.highlights.map((h, j) => (
                          <span key={j} className={`text-xs ${a.badge} px-2.5 py-0.5 rounded-full font-medium`}>{h}</span>
                        ))}
                      </div>
                    )}
                    {dest.price && (
                      <div className="flex items-center justify-between pt-3 border-t border-slate-100">
                        <span className="text-slate-400 text-xs">Starting from</span>
                        <span className={`${a.text} font-bold text-base`}>{dest.price}</span>
                      </div>
                    )}
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ━━━ PACKAGES: Dark section ━━━ */}
      {packages.length > 0 && (
        <section className="py-12 sm:py-16 px-4 sm:px-6 bg-slate-900">
          <div className="max-w-6xl mx-auto">
            <ScrollReveal>
              <p className="text-[10px] font-bold text-[#FACF2D] uppercase tracking-widest mb-1">Special Packages</p>
              <h2 className="text-2xl sm:text-3xl font-black text-white mb-8">Travel Packages</h2>
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {packages.map((pkg, i) => (
                <ScrollReveal key={i} stagger={i * 80}>
                  <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden hover:border-white/20 transition-all h-full">
                    {pkg.popular && (
                      <div className="absolute top-3 right-3 bg-[#FACF2D] text-slate-900 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide z-10">
                        Most Popular
                      </div>
                    )}
                    <div className="p-5">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                          <Car className={`w-5 h-5 ${a.dark}`} />
                        </div>
                        <div>
                          <h3 className="text-base font-bold text-white">{pkg.name}</h3>
                          {pkg.duration && <p className="text-xs text-white/40">{pkg.duration}</p>}
                        </div>
                      </div>
                      <p className="text-white/50 text-sm mb-4">{pkg.description}</p>
                      {pkg.includes && (
                        <ul className="space-y-2 mb-5">
                          {pkg.includes.map((item, j) => (
                            <li key={j} className="flex items-center gap-2 text-[11px] text-white/50">
                              <CheckCircle2 className="w-3 h-3 text-emerald-400 flex-shrink-0" /> {item}
                            </li>
                          ))}
                        </ul>
                      )}
                      <div className="flex items-center justify-between pt-4 border-t border-white/10">
                        {pkg.price && <span className="text-xl font-black text-[#FACF2D]">{pkg.price}</span>}
                        <Link onClick={() => trackWhatsAppClick('seasonal_package')} href={`https://wa.me/917668570551?text=${encodeURIComponent(`Hi, I'm interested in the ${pkg.name} package. Please share details.`)}`}
                          className="inline-flex items-center gap-2 bg-[#FACF2D] text-slate-900 px-5 py-2.5 rounded-full text-xs font-bold hover:bg-amber-300 transition-all">
                          Book Now <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ━━━ WHY CHOOSE US ━━━ */}
      <section className="py-12 sm:py-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <p className={`text-[10px] font-bold ${a.text} uppercase tracking-widest mb-1`}>Our Promise</p>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-8">Why Book With Triveni Cabs?</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: Shield, title: 'Verified Drivers', desc: 'Background-checked, trained, and experienced chauffeurs' },
              { icon: Zap, title: 'Instant Booking', desc: 'Book via call or WhatsApp in under 2 minutes' },
              { icon: Award, title: 'Best Prices', desc: 'Transparent pricing with no hidden charges' },
              { icon: Clock, title: '24/7 Support', desc: 'Round-the-clock support via phone & WhatsApp' },
            ].map((f, i) => (
              <ScrollReveal key={i} stagger={i * 60}>
                <div className="bg-white rounded-2xl border border-slate-100 p-5 text-center hover:shadow-md transition-all h-full">
                  <div className={`w-12 h-12 mx-auto rounded-2xl ${a.bg} flex items-center justify-center mb-4`}>
                    <f.icon className={`w-6 h-6 ${a.text}`} />
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 mb-1">{f.title}</h3>
                  <p className="text-slate-500 text-xs leading-relaxed">{f.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <FaqAccordion faqs={faqs} />
      <CTASection heading="Ready to Book Your Trip?" subheading="Get instant quotes, transparent pricing, and 24/7 support. Over 10,000 happy travelers trust Triveni Cabs." />
      <MobileStickyBar />
    </div>
  );
}
