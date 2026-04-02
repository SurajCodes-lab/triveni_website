'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Phone, ArrowRight, Shield, Clock, Car, CheckCircle2,
  IndianRupee, MapPin, Star, Users, Zap, Navigation,
  ShieldCheck, Headphones, Fuel, ChevronRight,
} from '@/components/ui/icons';
import { trackWhatsAppClick, trackPhoneCall } from '@/utilis/analytics';
import { getCityImage, heroBlurDataURL } from '@/utilis/imageUtils';
import ScrollReveal from '@/components/shared/ScrollReveal';
import FaqAccordion from '@/components/shared/FaqAccordion';
import CTASection from '@/components/shared/CTASection';
import MobileStickyBar from '@/components/ui/MobileStickyBar';

const WA = <svg className="w-4 h-4" viewBox="0 0 16 16" fill="currentColor"><path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/></svg>;

const PKG_ACCENTS = [
  { bg: 'bg-amber-50', border: 'border-amber-200', ring: 'ring-amber-200', icon: 'bg-amber-100 text-amber-600', badge: 'bg-amber-500', barFrom: 'from-amber-400', barTo: 'to-amber-600' },
  { bg: 'bg-emerald-50', border: 'border-emerald-200', ring: 'ring-emerald-200', icon: 'bg-emerald-100 text-emerald-600', badge: 'bg-emerald-500', barFrom: 'from-emerald-400', barTo: 'to-emerald-600' },
  { bg: 'bg-violet-50', border: 'border-violet-200', ring: 'ring-violet-200', icon: 'bg-violet-100 text-violet-600', badge: 'bg-violet-500', barFrom: 'from-violet-400', barTo: 'to-violet-600' },
  { bg: 'bg-sky-50', border: 'border-sky-200', ring: 'ring-sky-200', icon: 'bg-sky-100 text-sky-600', badge: 'bg-sky-500', barFrom: 'from-sky-400', barTo: 'to-sky-600' },
];

export default function LocalTaxiCityClient({ city, relatedCities }) {
  const [selectedPkg, setSelectedPkg] = useState(1);
  const lowestSedan = Math.min(...city.packages.map(p => p.sedan));
  const heroImage = getCityImage(city.city);
  const whatsappMsg = `Hi, I want to book a local taxi in ${city.city}. Please share details.`;
  const whatsappUrl = `https://wa.me/917668570551?text=${encodeURIComponent(whatsappMsg)}`;

  const handleCall = (loc) => { trackPhoneCall(loc, '7668570551'); window.location.href = 'tel:+917668570551'; };
  const handleWhatsApp = (loc) => { trackWhatsAppClick(loc, whatsappMsg, `local-taxi-${city.slug}`); window.open(whatsappUrl, '_blank'); };

  return (
    <div className="min-h-screen bg-[#f8f7f4] text-slate-900">

      {/* ━━━ HERO: City skyline immersive ━━━ */}
      <section className="relative min-h-[70vh] sm:min-h-[75vh] flex flex-col justify-end overflow-hidden">
        <Image src={heroImage} alt={`Local taxi in ${city.city}`} fill priority className="object-cover" sizes="100vw" quality={85} placeholder="blur" blurDataURL={heroBlurDataURL} />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#FACF2D] via-amber-400 to-orange-400 z-20" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full pb-8 sm:pb-12">
          <nav className="mb-6 flex items-center gap-1.5 text-xs text-white/40">
            <Link href="/" className="hover:text-white/70 transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <Link href="/local-taxi" className="hover:text-white/70 transition-colors">Local Taxi</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-white/60">{city.city}</span>
          </nav>

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10 mb-5">
                <Navigation className="w-3.5 h-3.5 text-[#FACF2D]" />
                <span className="text-[11px] font-bold text-[#FACF2D] uppercase tracking-widest">City Navigator</span>
              </div>
              <p className="text-white/40 text-sm font-medium uppercase tracking-widest mb-2">Local Taxi in</p>
              <h1 className="text-5xl sm:text-6xl md:text-8xl font-black text-white leading-[0.9] tracking-tight">
                {city.city}
              </h1>
              <p className="text-white/40 mt-4 text-sm sm:text-base max-w-lg">{city.tagline}</p>

              <div className="flex flex-wrap gap-3 mt-6">
                <button onClick={() => handleCall('hero')} className="inline-flex items-center gap-2 bg-[#FACF2D] text-slate-900 px-6 py-3 rounded-full font-bold text-sm hover:bg-amber-300 transition-all active:scale-[0.97] shadow-lg shadow-amber-500/20">
                  <Phone className="w-4 h-4" /> Call 7668570551
                </button>
                <button onClick={() => handleWhatsApp('hero')} className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-full font-bold text-sm border border-white/15 hover:bg-white/15 transition-all">
                  {WA} WhatsApp Enquiry
                </button>
              </div>
            </div>

            {/* Stat card */}
            <div className="bg-white/10 backdrop-blur-xl border border-white/15 rounded-2xl p-5 sm:p-6 lg:w-72 flex-shrink-0">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-[10px] text-white/30 uppercase tracking-widest font-semibold">Starting</p>
                  <p className="text-2xl font-black text-[#FACF2D] leading-tight">Rs {lowestSedan.toLocaleString('en-IN')}</p>
                </div>
                <div>
                  <p className="text-[10px] text-white/30 uppercase tracking-widest font-semibold">Vehicles</p>
                  <p className="text-sm font-bold text-white/80">Sedan + SUV</p>
                </div>
                <div>
                  <p className="text-[10px] text-white/30 uppercase tracking-widest font-semibold">Available</p>
                  <p className="text-sm font-bold text-white/80">24/7</p>
                </div>
                <div>
                  <p className="text-[10px] text-white/30 uppercase tracking-widest font-semibold">Packages</p>
                  <p className="text-sm font-bold text-white/80">{city.packages.length} options</p>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-white/10 flex items-center gap-2">
                <div className="flex -space-x-1">{[1,2,3,4,5].map(i => <Star key={i} className="w-3 h-3 text-[#FACF2D] fill-[#FACF2D]" />)}</div>
                <span className="text-[11px] text-white/40">4.9 · 10,000+ rides</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ━━━ INSTANT BOOKING STRIP ━━━ */}
      <section className="bg-slate-900 py-5 sm:py-6 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#FACF2D] flex items-center justify-center">
              <Car className="w-5 h-5 text-slate-900" />
            </div>
            <div>
              <p className="text-white font-bold text-sm">Instant Booking Available</p>
              <p className="text-white/40 text-xs">No advance payment. Pay after your trip.</p>
            </div>
          </div>
          <div className="flex gap-3">
            <button onClick={() => handleCall('strip')} className="inline-flex items-center gap-2 bg-white/10 text-white px-5 py-2.5 rounded-full font-bold text-sm border border-white/10 hover:bg-white/15 transition-all">
              <Phone className="w-3.5 h-3.5" /> Call Now
            </button>
            <button onClick={() => handleWhatsApp('strip')} className="inline-flex items-center gap-2 bg-[#FACF2D] text-slate-900 px-5 py-2.5 rounded-full font-bold text-sm hover:bg-amber-300 transition-all">
              Book Instantly <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>

      {/* ━━━ PACKAGE SELECTOR: Visual cards with different colors ━━━ */}
      <section className="py-12 sm:py-16 px-4 sm:px-6" id="packages">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <p className="text-[10px] font-bold text-amber-600 uppercase tracking-widest mb-1">Transparent Pricing</p>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-2">{city.city} Local Taxi Packages</h2>
            <p className="text-slate-500 text-sm mb-8">All prices include AC vehicle, fuel, and driver charges.</p>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 gap-4">
            {city.packages.map((pkg, i) => {
              const accent = PKG_ACCENTS[i % PKG_ACCENTS.length];
              const isSelected = selectedPkg === i;
              const isPopular = i === 1;
              return (
                <ScrollReveal key={i} delay={i * 80}>
                  <div onClick={() => setSelectedPkg(i)}
                    className={`relative cursor-pointer rounded-2xl border-2 transition-all duration-300 overflow-hidden ${isSelected ? `${accent.border} shadow-lg ring-2 ${accent.ring}` : 'border-slate-200 hover:border-slate-300 shadow-sm'}`}>
                    {/* Color header strip */}
                    <div className={`h-2 bg-gradient-to-r ${accent.barFrom} ${accent.barTo}`} />
                    {isPopular && <div className="absolute top-5 right-4 z-10"><span className={`${accent.badge} text-white px-3 py-0.5 rounded-full text-[9px] font-black uppercase tracking-wider`}>Popular</span></div>}

                    <div className="p-6 bg-white">
                      <div className="flex items-center gap-3 mb-5">
                        <div className={`w-11 h-11 rounded-xl ${accent.icon} flex items-center justify-center`}><Clock className="w-5 h-5" /></div>
                        <div>
                          <h3 className="text-lg font-black text-slate-900">{pkg.name}</h3>
                          <p className="text-xs text-slate-400">Includes fuel, driver and AC</p>
                        </div>
                      </div>

                      <div className="space-y-2 mb-5">
                        <div className={`flex items-center justify-between ${accent.bg} rounded-xl px-4 py-3 border ${accent.border}`}>
                          <div className="flex items-center gap-2">
                            <Car className="w-4 h-4 text-slate-500" />
                            <div><p className="text-sm font-semibold text-slate-900">Sedan</p><p className="text-[11px] text-slate-400">Dzire / Etios</p></div>
                          </div>
                          <span className="text-xl font-black text-slate-900">Rs {pkg.sedan.toLocaleString('en-IN')}</span>
                        </div>
                        <div className={`flex items-center justify-between ${accent.bg} rounded-xl px-4 py-3 border ${accent.border}`}>
                          <div className="flex items-center gap-2">
                            <Users className="w-4 h-4 text-slate-500" />
                            <div><p className="text-sm font-semibold text-slate-900">SUV</p><p className="text-[11px] text-slate-400">Innova / Ertiga</p></div>
                          </div>
                          <span className="text-xl font-black text-slate-900">Rs {pkg.suv.toLocaleString('en-IN')}</span>
                        </div>
                      </div>

                      <button onClick={(e) => { e.stopPropagation(); handleWhatsApp(`package-${i}`); }}
                        className={`w-full py-3 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2 ${isSelected || isPopular ? 'bg-[#FACF2D] text-slate-900 hover:bg-amber-300 shadow-md' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}>
                        Book {pkg.name} <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
          <p className="mt-5 text-center text-sm text-slate-400">Extra km: Rs 14/km (Sedan) | Rs 18/km (SUV) · Extra hours: Rs 200/hr (Sedan) | Rs 280/hr (SUV) · Toll and parking at actual</p>
        </div>
      </section>

      {/* ━━━ POPULAR LOCATIONS: Visual grid ━━━ */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <p className="text-[10px] font-bold text-amber-600 uppercase tracking-widest mb-1">Top Destinations</p>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-8">Popular Places in {city.city}</h2>
          </ScrollReveal>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 mb-8">
            {city.popularLocations.map((loc, i) => (
              <ScrollReveal key={i} delay={i * 40}>
                <div className="bg-[#f8f7f4] rounded-xl px-4 py-3.5 border border-slate-100 hover:border-amber-200 hover:shadow-md transition-all flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-amber-100 flex items-center justify-center flex-shrink-0"><MapPin className="w-4 h-4 text-amber-600" /></div>
                  <span className="text-sm font-semibold text-slate-800 truncate">{loc}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <div className="bg-[#f8f7f4] rounded-2xl p-6 border border-slate-100">
              <div className="flex items-center gap-2 mb-4">
                <Navigation className="w-4 h-4 text-amber-600" />
                <h3 className="font-black text-slate-900 text-sm">Coverage Areas in {city.city}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {city.coverageAreas.map((area, i) => (
                  <span key={i} className="bg-white text-slate-700 px-3 py-1.5 rounded-lg text-sm font-medium border border-slate-100">{area}</span>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ━━━ WHY CHOOSE US: Asymmetric bento ━━━ */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <p className="text-[10px] font-bold text-[#FACF2D] uppercase tracking-widest mb-1">Why Triveni Cabs</p>
            <h2 className="text-2xl sm:text-3xl font-black text-white mb-8">Why Book Local Taxi With Us?</h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { icon: IndianRupee, title: 'No Hidden Charges', desc: 'Transparent pricing. Toll and parking at actual.', span: 'lg:col-span-2' },
              { icon: ShieldCheck, title: 'Verified Drivers', desc: 'Police-verified, experienced locals.', span: '' },
              { icon: Car, title: 'Clean AC Vehicles', desc: 'Sanitized fleet with GPS tracking.', span: '' },
              { icon: Clock, title: '24/7 Availability', desc: `Early morning or late night in ${city.city}.`, span: '' },
              { icon: Headphones, title: 'Dedicated Support', desc: 'Call or WhatsApp anytime.', span: '' },
            ].map((f, i) => (
              <ScrollReveal key={i} delay={i * 60} className={f.span}>
                <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-[#FACF2D]/30 transition-all h-full">
                  <f.icon className="w-5 h-5 text-[#FACF2D] mb-3" />
                  <h3 className="font-black text-white mb-1">{f.title}</h3>
                  <p className="text-white/40 text-sm leading-relaxed">{f.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━ LOCAL TIP + HOW IT WORKS ━━━ */}
      <section className="py-12 sm:py-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
            {/* Local tip */}
            <ScrollReveal className="lg:col-span-2">
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-6 border border-amber-100 h-full">
                <div className="flex items-center gap-2 mb-4">
                  <Zap className="w-4 h-4 text-amber-700" />
                  <h3 className="font-black text-slate-900 text-sm">Local Tip for {city.city}</h3>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">{city.localTips}</p>
              </div>
            </ScrollReveal>

            {/* How it works */}
            <div className="lg:col-span-3">
              <ScrollReveal>
                <h3 className="font-black text-slate-900 mb-4">Book in 3 Simple Steps</h3>
              </ScrollReveal>
              <div className="grid sm:grid-cols-3 gap-3">
                {[
                  { step: '01', title: 'Call or WhatsApp', desc: `Share your ${city.city} pickup, date, package.`, icon: Phone },
                  { step: '02', title: 'Confirm Booking', desc: 'Instant quote. No advance needed.', icon: CheckCircle2 },
                  { step: '03', title: 'Enjoy Your Ride', desc: `Driver arrives 15 min early.`, icon: Car },
                ].map((item, i) => (
                  <ScrollReveal key={i} stagger={i * 80}>
                    <div className="bg-white rounded-xl p-5 border border-slate-100 hover:shadow-md transition-all relative">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-xl bg-[#FACF2D] flex items-center justify-center"><item.icon className="w-5 h-5 text-slate-900" /></div>
                        <span className="text-[10px] font-black text-slate-300">{item.step}</span>
                      </div>
                      <h4 className="font-bold text-slate-900 text-sm mb-1">{item.title}</h4>
                      <p className="text-xs text-slate-500">{item.desc}</p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ━━━ FAQS ━━━ */}
      <FaqAccordion heading={`Local Taxi in ${city.city} - FAQs`} faqs={city.faqs} />

      {/* ━━━ RELATED CITIES ━━━ */}
      {relatedCities.length > 0 && (
        <section className="py-12 sm:py-16 px-4 sm:px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <ScrollReveal>
              <p className="text-[10px] font-bold text-amber-600 uppercase tracking-widest mb-1">Explore More</p>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-8">Local Taxi in Nearby Cities</h2>
            </ScrollReveal>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {relatedCities.map((rc, i) => {
                const rcLowest = Math.min(...rc.packages.map(p => p.sedan));
                return (
                  <ScrollReveal key={i} stagger={i * 50}>
                    <Link href={`/local-taxi/${rc.slug}`} className="group flex items-center gap-3 bg-[#f8f7f4] rounded-xl p-4 hover:bg-white hover:shadow-lg transition-all border border-transparent hover:border-amber-200">
                      <div className="w-9 h-9 rounded-lg bg-amber-50 flex items-center justify-center flex-shrink-0 group-hover:bg-amber-100 transition-colors"><MapPin className="w-4 h-4 text-amber-600" /></div>
                      <div className="flex-1 min-w-0">
                        <p className="font-bold text-slate-900 text-sm">{rc.city}</p>
                        <p className="text-xs text-slate-500">From Rs {rcLowest.toLocaleString('en-IN')}</p>
                      </div>
                      <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-amber-500 flex-shrink-0" />
                    </Link>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </section>
      )}

      <CTASection heading={`Ready to Explore ${city.city}?`} subheading="Book your local taxi now. No advance payment. Pay after your trip. Available 24/7." />
      <MobileStickyBar />
    </div>
  );
}
