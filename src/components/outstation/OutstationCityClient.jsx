'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Phone, ArrowRight, ChevronDown, Shield, Clock, Car, CheckCircle2,
  IndianRupee, Route, MapPin, Navigation, Star, Users,
  MapPinned, Calendar, ChevronRight
} from '@/components/ui/icons';
import { trackWhatsAppClick, trackPhoneCall } from '@/utilis/analytics';
import { getCityImage, heroBlurDataURL } from '@/utilis/imageUtils';
import ScrollReveal from '@/components/shared/ScrollReveal';
import FaqAccordion from '@/components/shared/FaqAccordion';
import CTASection from '@/components/shared/CTASection';
import MobileStickyBar from '@/components/ui/MobileStickyBar';

const WA = <svg className="w-4 h-4" viewBox="0 0 16 16" fill="currentColor"><path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" /></svg>;

export default function OutstationCityClient({ cityData, relatedCities }) {
  const [tripType, setTripType] = useState('oneWay');
  const lowestFare = Math.min(...cityData.popularRoutes.map((r) => r.fare));
  const heroImage = getCityImage(cityData.city);
  const whatsappMsg = `Hi, I want to book an outstation cab from ${cityData.city}. Please share rates.`;
  const whatsappUrl = `https://wa.me/917668570551?text=${encodeURIComponent(whatsappMsg)}`;

  return (
    <div className="min-h-screen bg-[#f8f7f4] text-slate-900">

      {/* ━━━ HERO: City departure terminal ━━━ */}
      <section className="relative min-h-[75vh] sm:min-h-[80vh] flex flex-col justify-end overflow-hidden">
        <Image src={heroImage} alt={`Outstation cabs from ${cityData.city}`} fill priority className="object-cover" sizes="100vw" quality={85} placeholder="blur" blurDataURL={heroBlurDataURL} />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#FACF2D] via-amber-400 to-blue-400 z-20" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full pb-8 sm:pb-12">
          <nav className="mb-6 flex items-center gap-1.5 text-xs text-white/40">
            <Link href="/" className="hover:text-white/70 transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <Link href="/outstation-cabs" className="hover:text-white/70 transition-colors">Outstation Cabs</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-white/60">{cityData.city}</span>
          </nav>

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 lg:gap-8">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10 mb-5">
                <Route className="w-3.5 h-3.5 text-[#FACF2D]" />
                <span className="text-[11px] font-bold text-[#FACF2D] uppercase tracking-widest">City Hub</span>
              </div>
              <p className="text-white/40 text-sm font-medium uppercase tracking-widest mb-2">Outstation Cabs from</p>
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-white leading-[0.95] tracking-tight">
                {cityData.city}
              </h1>
              <p className="text-white/40 mt-4 text-sm sm:text-base max-w-lg leading-relaxed">
                {cityData.tagline} -- Starting from <span className="text-[#FACF2D] font-bold">{'\u20B9'}{lowestFare.toLocaleString('en-IN')}</span>
              </p>

              <div className="flex flex-wrap gap-3 mt-6">
                <a onClick={() => trackWhatsAppClick('outstation_hero', whatsappMsg)} href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#FACF2D] text-slate-900 px-6 py-3.5 rounded-full font-bold text-sm hover:bg-amber-300 transition-all active:scale-[0.97] shadow-lg shadow-amber-500/20">
                  Get Instant Quote <ArrowRight className="w-4 h-4" />
                </a>
                <a onClick={() => trackPhoneCall('outstation_hero')} href="tel:+917668570551" className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-6 py-3.5 rounded-full font-bold text-sm border border-white/15 hover:bg-white/15 transition-all">
                  <Phone className="w-4 h-4" /> Call 7668570551
                </a>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-xl border border-white/15 rounded-2xl p-5 sm:p-6 lg:w-72 flex-shrink-0">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-[10px] text-white/30 uppercase tracking-widest font-semibold">Routes</p>
                  <p className="text-3xl font-black text-white leading-tight">{cityData.popularRoutes.length}0<span className="text-lg text-white/40 ml-0.5">+</span></p>
                </div>
                <div>
                  <p className="text-[10px] text-white/30 uppercase tracking-widest font-semibold">Sedan Rate</p>
                  <p className="text-3xl font-black text-white leading-tight">{'\u20B9'}11<span className="text-lg text-white/40 ml-0.5">/km</span></p>
                </div>
                <div>
                  <p className="text-[10px] text-white/30 uppercase tracking-widest font-semibold">Rating</p>
                  <p className="text-sm font-bold text-[#FACF2D]">4.9/5 Stars</p>
                </div>
                <div>
                  <p className="text-[10px] text-white/30 uppercase tracking-widest font-semibold">Available</p>
                  <p className="text-sm font-bold text-white/80">24/7</p>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-white/10 flex items-center gap-2">
                <div className="flex -space-x-1">
                  {[1,2,3,4,5].map(i => <Star key={i} className="w-3 h-3 text-[#FACF2D] fill-[#FACF2D]" />)}
                </div>
                <span className="text-[11px] text-white/40 font-medium">10,000+ happy travelers</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ━━━ DARK STRIP: Departure board ━━━ */}
      <section className="bg-slate-900 py-6 sm:py-8 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-[10px] text-white/30 uppercase tracking-widest font-bold mb-4 text-center">Top Departures from {cityData.city}</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {cityData.popularRoutes.slice(0, 6).map((route, i) => (
              <Link key={i} href={`/distance/${route.slug}`} className="group bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-3 hover:border-[#FACF2D]/30 transition-all text-center">
                <p className="text-xs font-bold text-white truncate group-hover:text-[#FACF2D] transition-colors">{route.destination}</p>
                <p className="text-[10px] text-white/30 mt-1">{route.distance} km &middot; {route.duration}</p>
                <p className="text-sm font-black text-[#FACF2D] mt-1">{'\u20B9'}{route.fare.toLocaleString('en-IN')}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━ POPULAR ROUTES: Visual cards ━━━ */}
      <section className="py-12 sm:py-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <p className="text-[10px] font-bold text-blue-600 uppercase tracking-widest mb-1">Popular Destinations</p>
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-8">
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900">Top Routes from {cityData.city}</h2>
              <p className="text-sm text-slate-500">{cityData.popularRoutes.length} routes &middot; All-inclusive fares</p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {cityData.popularRoutes.map((route, i) => (
              <ScrollReveal key={i} delay={i * 50}>
                <Link href={`/distance/${route.slug}`} className="group bg-white rounded-2xl border border-slate-100 p-5 hover:border-blue-200 hover:shadow-lg transition-all duration-300 block">
                  <div className="flex items-start justify-between mb-3">
                    <div className="min-w-0">
                      <div className="flex items-center gap-2 mb-1 text-sm">
                        <span className="text-blue-600 font-bold">{cityData.city}</span>
                        <ArrowRight className="w-3 h-3 text-blue-400/50" />
                        <span className="text-slate-700 font-bold truncate">{route.destination}</span>
                      </div>
                      <h3 className="text-lg font-black text-slate-900 group-hover:text-blue-600 transition-colors">{route.destination}</h3>
                    </div>
                    <div className="bg-blue-50 p-2 rounded-xl group-hover:bg-blue-100 transition-colors flex-shrink-0">
                      <MapPinned className="w-5 h-5 text-blue-500" />
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-2 mb-4">
                    <div className="bg-slate-50 rounded-lg px-3 py-2 text-center"><div className="text-blue-600 font-bold text-sm">{route.distance} km</div><div className="text-slate-400 text-[10px] uppercase tracking-wider">Distance</div></div>
                    <div className="bg-slate-50 rounded-lg px-3 py-2 text-center"><div className="text-indigo-600 font-bold text-sm">{route.duration}</div><div className="text-slate-400 text-[10px] uppercase tracking-wider">Duration</div></div>
                    <div className="bg-slate-50 rounded-lg px-3 py-2 text-center"><div className="text-amber-600 font-bold text-sm">{'\u20B9'}{route.fare.toLocaleString('en-IN')}</div><div className="text-slate-400 text-[10px] uppercase tracking-wider">From</div></div>
                  </div>
                  <div className="flex items-center justify-between pt-3 border-t border-slate-100">
                    <span className="text-slate-400 text-xs">Sedan starting fare</span>
                    <span className="flex items-center gap-1 text-blue-600 text-sm font-semibold group-hover:gap-2 transition-all">View Route <ChevronRight className="w-4 h-4" /></span>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━ TRIP TYPE: One-Way vs Round Trip ━━━ */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 bg-slate-900">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <p className="text-[10px] font-bold text-[#FACF2D] uppercase tracking-widest mb-1">Trip Options</p>
            <h2 className="text-2xl sm:text-3xl font-black text-white mb-8">One-Way vs Round Trip</h2>
          </ScrollReveal>

          <ScrollReveal>
            <div className="flex justify-center mb-8">
              <div className="bg-white/10 rounded-xl p-1 inline-flex">
                <button onClick={() => setTripType('oneWay')} className={`px-6 py-2.5 rounded-lg font-bold text-sm transition-all ${tripType === 'oneWay' ? 'bg-[#FACF2D] text-slate-900 shadow-md' : 'text-white/50 hover:text-white/70'}`}>One Way</button>
                <button onClick={() => setTripType('roundTrip')} className={`px-6 py-2.5 rounded-lg font-bold text-sm transition-all ${tripType === 'roundTrip' ? 'bg-[#FACF2D] text-slate-900 shadow-md' : 'text-white/50 hover:text-white/70'}`}>Round Trip</button>
              </div>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ScrollReveal>
              <div className={`rounded-2xl border p-6 transition-all ${tripType === 'oneWay' ? 'bg-white/10 border-[#FACF2D]/40 shadow-lg' : 'bg-white/5 border-white/10 opacity-60'}`}>
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-11 h-11 rounded-xl bg-blue-500/20 flex items-center justify-center"><ArrowRight className="w-5 h-5 text-blue-400" /></div>
                  <div><h3 className="text-lg font-black text-white">One-Way Drop</h3><p className="text-sm text-white/40">Pay single direction only</p></div>
                </div>
                {[{ l: 'Min Billing', v: '300 km' }, { l: 'Sedan Rate', v: '\u20B911/km' }, { l: 'SUV Rate', v: '\u20B915/km' }, { l: 'Toll/Tax', v: 'Extra (one side)' }, { l: 'Best For', v: 'Single direction' }, { l: 'Savings', v: 'Up to 50%' }].map((item, i) => (
                  <div key={i} className="flex justify-between py-2 border-b border-white/10 last:border-0"><span className="text-sm text-white/40">{item.l}</span><span className="text-sm font-semibold text-white">{item.v}</span></div>
                ))}
              </div>
            </ScrollReveal>
            <ScrollReveal stagger={100}>
              <div className={`rounded-2xl border p-6 transition-all ${tripType === 'roundTrip' ? 'bg-white/10 border-[#FACF2D]/40 shadow-lg' : 'bg-white/5 border-white/10 opacity-60'}`}>
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-11 h-11 rounded-xl bg-indigo-500/20 flex items-center justify-center"><Route className="w-5 h-5 text-indigo-400" /></div>
                  <div><h3 className="text-lg font-black text-white">Round Trip</h3><p className="text-sm text-white/40">{cityData.roundTripDiscount}</p></div>
                </div>
                {[{ l: 'Min Billing', v: '250 km/day' }, { l: 'Sedan Rate', v: '\u20B911/km' }, { l: 'SUV Rate', v: '\u20B915/km' }, { l: 'Toll/Tax', v: 'Extra (both sides)' }, { l: 'Best For', v: 'Multi-day trips' }, { l: 'Driver Allow.', v: '\u20B9300/night' }].map((item, i) => (
                  <div key={i} className="flex justify-between py-2 border-b border-white/10 last:border-0"><span className="text-sm text-white/40">{item.l}</span><span className="text-sm font-semibold text-white">{item.v}</span></div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ━━━ FARE BREAKDOWN ━━━ */}
      <section className="py-12 sm:py-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-8 text-center">Fare Breakdown</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ScrollReveal>
              <div className="bg-white rounded-2xl border border-emerald-200 p-6">
                <h3 className="font-bold text-emerald-700 mb-4 flex items-center gap-2"><CheckCircle2 className="w-5 h-5" /> Included in Fare</h3>
                {['Fuel charges', 'Driver charges', 'Per km billing', 'GST on service', `Pickup from ${cityData.city}`, 'Drop to destination'].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 mb-2"><CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" /><span className="text-sm text-slate-600">{item}</span></div>
                ))}
              </div>
            </ScrollReveal>
            <ScrollReveal stagger={80}>
              <div className="bg-white rounded-2xl border border-red-200 p-6">
                <h3 className="font-bold text-red-600 mb-4 flex items-center gap-2"><IndianRupee className="w-5 h-5" /> Paid Separately</h3>
                {['Toll charges (at plazas)', 'State entry taxes', 'Parking fees', 'Night allowance (\u20B9300)', 'Extra km beyond package', 'Waiting (\u20B9150/hr)'].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 mb-2"><IndianRupee className="w-4 h-4 text-red-400 flex-shrink-0" /><span className="text-sm text-slate-600">{item}</span></div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ━━━ BOOKING STEPS ━━━ */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <p className="text-[10px] font-bold text-blue-600 uppercase tracking-widest mb-1">Easy Booking</p>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-8">Book in 3 Simple Steps</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { step: '01', icon: MapPin, title: 'Share Trip Details', desc: `Tell us pickup in ${cityData.city}, destination, date & passengers.` },
              { step: '02', icon: IndianRupee, title: 'Get Instant Quote', desc: 'Transparent all-inclusive pricing. No hidden charges.' },
              { step: '03', icon: Car, title: 'Confirm & Travel', desc: 'Driver arrives 15 minutes early. 24/7 support on call.' },
            ].map((item, i) => (
              <ScrollReveal key={i} stagger={i * 80}>
                <div className="relative bg-white rounded-2xl border border-slate-200 p-6 hover:shadow-lg transition-all text-center">
                  <div className="relative inline-flex mb-4">
                    <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center"><item.icon className="w-7 h-7 text-blue-500" /></div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center"><span className="text-[9px] font-black text-white">{item.step}</span></div>
                  </div>
                  <h3 className="text-lg font-black text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <FaqAccordion heading={`Outstation Cabs from ${cityData.city} - FAQs`} faqs={cityData.faqs} />

      {relatedCities?.length > 0 && (
        <section className="py-12 px-4 sm:px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <ScrollReveal>
              <p className="text-[10px] font-bold text-blue-600 uppercase tracking-widest mb-1">More Cities</p>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-8">Outstation Cabs from Other Cities</h2>
            </ScrollReveal>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {relatedCities.map((rc, i) => (
                <ScrollReveal key={i} stagger={i * 40}>
                  <Link href={`/outstation-cabs/${rc.slug}`} className="group bg-white rounded-xl border border-slate-200 p-5 text-center hover:border-blue-300 hover:shadow-md transition-all block">
                    <h3 className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors">{rc.city}</h3>
                    <p className="text-xs text-slate-400 mb-2">{rc.popularRoutes.length}0+ routes</p>
                    <span className="text-blue-600 text-sm font-semibold flex items-center justify-center gap-1">View Routes <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" /></span>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTASection heading={`Ready to Travel from ${cityData.city}?`} subheading="Book your outstation cab now. Instant confirmation, transparent pricing, verified drivers." />
      <MobileStickyBar />
    </div>
  );
}
