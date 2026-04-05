'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Phone, ArrowRight, ChevronDown, Clock, Car, CheckCircle2,
  MapPin, Star, Users, Calendar, Hotel, XCircle, Shield, ChevronRight
} from '@/components/ui/icons';
import { getCityImage, heroBlurDataURL } from '@/utilis/imageUtils';
import { trackWhatsAppClick, trackPhoneCall } from '@/utilis/analytics';
import ScrollReveal from '@/components/shared/ScrollReveal';
import FaqAccordion from '@/components/shared/FaqAccordion';
import CTASection from '@/components/shared/CTASection';
import MobileStickyBar from '@/components/ui/MobileStickyBar';

const WA = <svg className="w-4 h-4" viewBox="0 0 16 16" fill="currentColor"><path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" /></svg>;

export default function HotelCabPackageClient({ pkg, relatedPackages }) {
  const [activeDay, setActiveDay] = useState(0);
  const whatsappMsg = `Hi, I'm interested in the ${pkg.destination} ${pkg.duration} package (\u20B9${pkg.startingPrice.toLocaleString('en-IN')}/person)`;
  const heroImage = getCityImage(pkg.destination);

  return (
    <div className="min-h-screen bg-[#f8f7f4] text-slate-900">

      {/* ━━━ HERO: Premium package display ━━━ */}
      <section className="relative min-h-[75vh] sm:min-h-[80vh] flex flex-col justify-end overflow-hidden">
        <Image src={heroImage} alt={`${pkg.destination} hotel and cab package`} fill priority className="object-cover" sizes="100vw" quality={85} placeholder="blur" blurDataURL={heroBlurDataURL} />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-rose-500 via-pink-400 to-amber-400 z-20" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full pb-8 sm:pb-12">
          <nav className="mb-6 flex items-center gap-1.5 text-xs text-white/40">
            <Link href="/" className="hover:text-white/70 transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <Link href="/packages" className="hover:text-white/70 transition-colors">Packages</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-white/60">{pkg.destination}</span>
          </nav>

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 lg:gap-8">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10 mb-5">
                <Hotel className="w-3.5 h-3.5 text-rose-400" />
                <span className="text-[11px] font-bold text-rose-300 uppercase tracking-widest">Hotel + Cab Package</span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-white leading-[0.95] tracking-tight">
                {pkg.destination}<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-amber-300">{pkg.duration}</span>
              </h1>
              <p className="text-white/40 mt-4 text-sm sm:text-base max-w-lg leading-relaxed">
                Complete tour with hotel stay, AC cab, sightseeing & transfers
              </p>

              <div className="flex flex-wrap gap-3 mt-6">
                <a href={`https://wa.me/917668570551?text=${encodeURIComponent(whatsappMsg)}`} target="_blank" rel="noopener noreferrer" onClick={() => trackWhatsAppClick('hotel_cab_hero')} className="inline-flex items-center gap-2 bg-[#FACF2D] text-slate-900 px-6 py-3.5 rounded-full font-bold text-sm hover:bg-amber-300 transition-all active:scale-[0.97] shadow-lg shadow-amber-500/20">
                  Get Free Quote <ArrowRight className="w-4 h-4" />
                </a>
                <a href="tel:+917668570551" onClick={() => trackPhoneCall('hotel_cab_hero')} className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-6 py-3.5 rounded-full font-bold text-sm border border-white/15 hover:bg-white/15 transition-all">
                  <Phone className="w-4 h-4" /> Call Now
                </a>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-xl border border-white/15 rounded-2xl p-5 sm:p-6 lg:w-72 flex-shrink-0">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-[10px] text-white/30 uppercase tracking-widest font-semibold">Duration</p>
                  <p className="text-sm font-bold text-white">{pkg.duration}</p>
                </div>
                <div>
                  <p className="text-[10px] text-white/30 uppercase tracking-widest font-semibold">Starting</p>
                  <p className="text-lg font-black text-[#FACF2D]">{'\u20B9'}{pkg.startingPrice.toLocaleString('en-IN')}</p>
                </div>
                <div>
                  <p className="text-[10px] text-white/30 uppercase tracking-widest font-semibold">Meals</p>
                  <p className="text-sm font-bold text-white/80">Breakfast</p>
                </div>
                <div>
                  <p className="text-[10px] text-white/30 uppercase tracking-widest font-semibold">Transport</p>
                  <p className="text-sm font-bold text-white/80">AC Cab</p>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-white/10 flex items-center gap-2">
                <div className="flex -space-x-1">
                  {[1,2,3,4,5].map(i => <Star key={i} className="w-3 h-3 text-[#FACF2D] fill-[#FACF2D]" />)}
                </div>
                <span className="text-[11px] text-white/40 font-medium">4.9 &middot; 10,000+ reviews</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ━━━ DARK STRIP: Package overview stats ━━━ */}
      <section className="bg-slate-900 py-6 sm:py-8 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-[10px] text-white/30 uppercase tracking-widest font-bold mb-4 text-center">Package Highlights</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { label: 'Duration', value: pkg.duration, icon: Calendar },
              { label: 'Itinerary Days', value: `${pkg.itinerary.length} Days`, icon: MapPin },
              { label: 'Per Person', value: `\u20B9${pkg.startingPrice.toLocaleString('en-IN')}`, icon: Star },
              { label: 'Hotel Options', value: `${pkg.hotelOptions.length} Tiers`, icon: Hotel },
            ].map((s, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-4 text-center">
                <s.icon className="w-5 h-5 text-rose-400 mx-auto mb-2" />
                <p className="text-lg font-black text-white">{s.value}</p>
                <p className="text-[10px] text-white/30 uppercase tracking-wider">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━ INCLUSIONS ━━━ */}
      <section className="py-12 sm:py-16 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <p className="text-[10px] font-bold text-rose-600 uppercase tracking-widest mb-1">Package Details</p>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-8">What&apos;s Included</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {pkg.includes.map((item, i) => (
              <ScrollReveal key={i} delay={i * 40}>
                <div className="flex items-center gap-3 bg-white rounded-xl p-4 border border-emerald-100">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                  <span className="text-sm font-medium text-slate-700">{item}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━ DAY-BY-DAY ITINERARY: Numbered timeline ━━━ */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <p className="text-[10px] font-bold text-rose-600 uppercase tracking-widest mb-1">Day by Day</p>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-8">Your Itinerary</h2>
          </ScrollReveal>

          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-rose-100 hidden sm:block" />

            <div className="space-y-3">
              {pkg.itinerary.map((day, i) => (
                <ScrollReveal key={i} delay={i * 50}>
                  <div className={`relative bg-[#f8f7f4] sm:bg-white rounded-xl border transition-all duration-300 cursor-pointer ${activeDay === i ? 'border-rose-300 shadow-md' : 'border-slate-200 hover:border-slate-300'}`} onClick={() => setActiveDay(activeDay === i ? -1 : i)}>
                    <div className="absolute left-6 top-6 -translate-x-1/2 hidden sm:block z-10">
                      <div className={`w-3 h-3 rounded-full ring-4 ring-white ${activeDay === i ? 'bg-rose-500' : 'bg-slate-300'}`} />
                    </div>

                    <div className="flex items-center justify-between p-5 sm:pl-14">
                      <div className="flex items-center gap-4">
                        <div className={`w-11 h-11 rounded-xl flex items-center justify-center font-black text-sm transition-all flex-shrink-0 ${activeDay === i ? 'bg-rose-600 text-white' : 'bg-rose-50 text-rose-600'}`}>
                          {day.day}
                        </div>
                        <div>
                          <p className="text-[10px] text-rose-500 uppercase tracking-wider font-bold">Day {day.day}</p>
                          <h3 className="text-base font-bold text-slate-900">{day.title}</h3>
                        </div>
                      </div>
                      <div className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 transition-all ${activeDay === i ? 'bg-rose-100 rotate-180' : 'bg-slate-100'}`}>
                        <ChevronDown className={`w-4 h-4 ${activeDay === i ? 'text-rose-600' : 'text-slate-500'}`} />
                      </div>
                    </div>
                    <div className={`overflow-hidden transition-all duration-300 ${activeDay === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                      <div className="px-5 sm:pl-14 pb-5">
                        <div className="h-px bg-slate-100 mb-4" />
                        <div className="space-y-2">
                          {day.activities.map((activity, j) => (
                            <div key={j} className="flex items-start gap-3 text-sm text-slate-600">
                              <CheckCircle2 className="w-4 h-4 text-rose-400 flex-shrink-0 mt-0.5" />
                              <span>{activity}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ━━━ HOTEL OPTIONS: Dark section ━━━ */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 bg-slate-900">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <p className="text-[10px] font-bold text-[#FACF2D] uppercase tracking-widest mb-1">Choose Your Stay</p>
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
              <h2 className="text-2xl sm:text-3xl font-black text-white">Hotel Options</h2>
              <p className="text-white/30 text-sm">Per person on twin-sharing basis</p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {pkg.hotelOptions.map((option, i) => (
              <ScrollReveal key={i} stagger={i * 80}>
                <div className={`relative rounded-2xl overflow-hidden ${i === 1 ? 'ring-2 ring-rose-400/50' : ''}`}>
                  {i === 1 && <div className="bg-rose-500 text-center py-1.5"><span className="text-[10px] font-black text-white uppercase tracking-widest">Most Popular</span></div>}
                  <div className="bg-slate-800 p-6 text-center">
                    <div className={`w-14 h-14 rounded-2xl mx-auto flex items-center justify-center mb-4 ${['bg-white/10', 'bg-rose-500/20', 'bg-amber-500/20'][i]}`}>
                      <Hotel className={`w-7 h-7 ${['text-white/60', 'text-rose-400', 'text-amber-400'][i]}`} />
                    </div>
                    <h3 className="text-lg font-black text-white mb-2">{option.category}</h3>
                    <div className="text-3xl font-black text-[#FACF2D] mb-1">{'\u20B9'}{option.price.toLocaleString('en-IN')}</div>
                    <p className="text-white/30 text-sm mb-5">per person</p>
                    <div className="space-y-2 mb-5 text-left">
                      {pkg.includes.slice(0, 4).map((inc, j) => (
                        <div key={j} className="flex items-center gap-2 text-[11px] text-white/50">
                          <CheckCircle2 className="w-3 h-3 text-emerald-400 flex-shrink-0" /> {inc}
                        </div>
                      ))}
                    </div>
                    <a href="tel:+917668570551" onClick={() => trackPhoneCall('hotel_cab_pricing')}
                      className={`block w-full text-center py-3.5 rounded-xl font-bold text-sm transition-all active:scale-[0.97] ${i === 1 ? 'bg-[#FACF2D] text-slate-900 hover:bg-amber-300' : 'bg-white/10 text-white hover:bg-white/15 border border-white/10'}`}>
                      Book This Package
                    </a>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━ QUICK FACTS ━━━ */}
      <section className="py-12 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm" data-snippet-type="direct-answer">
              <div className="key-info">
                <h2 className="text-xl font-black text-slate-900 mb-4">{pkg.destination} Package -- Quick Facts</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                  {[
                    { label: 'Duration', value: pkg.duration, color: 'text-rose-600' },
                    { label: 'Starting Price', value: `\u20B9${pkg.startingPrice.toLocaleString('en-IN')}`, color: 'text-amber-600' },
                    { label: 'Meals', value: 'Breakfast', color: 'text-rose-600' },
                    { label: 'Transport', value: 'AC Cab', color: 'text-amber-600' },
                  ].map((f, i) => (
                    <div key={i}>
                      <p className={`text-[10px] ${f.color} uppercase tracking-wider font-bold mb-0.5`}>{f.label}</p>
                      <p className="text-lg font-black text-slate-900">{f.value}</p>
                    </div>
                  ))}
                </div>
                <p className="text-slate-500 text-sm">Includes: {pkg.includes.join(', ')}. Call 7668570551 for custom quotes and group discounts.</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <FaqAccordion heading={`${pkg.destination} Package FAQs`} faqs={pkg.faqs} />

      {relatedPackages.length > 0 && (
        <section className="py-12 sm:py-16 px-4 sm:px-6 bg-white">
          <div className="max-w-5xl mx-auto">
            <ScrollReveal>
              <p className="text-[10px] font-bold text-rose-600 uppercase tracking-widest mb-1">Explore More</p>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-8">More Packages</h2>
            </ScrollReveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {relatedPackages.map((rp, i) => (
                <ScrollReveal key={i} stagger={i * 60}>
                  <Link href={`/packages/${rp.slug}`} className="block bg-white rounded-xl border border-slate-200 p-5 hover:shadow-lg hover:border-rose-200 transition-all group">
                    <h3 className="text-base font-bold text-slate-900 group-hover:text-rose-600 transition-colors">{rp.destination}</h3>
                    <p className="text-slate-400 text-sm mt-1">{rp.duration}</p>
                    <p className="text-rose-600 font-black text-lg mt-2">{'\u20B9'}{rp.startingPrice.toLocaleString('en-IN')} <span className="text-slate-400 text-sm font-normal">/person</span></p>
                    <span className="inline-flex items-center gap-1 text-rose-600 text-sm font-semibold mt-3 group-hover:gap-2 transition-all">View Package <ArrowRight className="w-4 h-4" /></span>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTASection heading={`Book Your ${pkg.destination} Package`} subheading={`${pkg.duration} starting from \u20B9${pkg.startingPrice.toLocaleString('en-IN')}/person. Hotel + Cab + Sightseeing included.`} />
      <MobileStickyBar />
    </div>
  );
}
