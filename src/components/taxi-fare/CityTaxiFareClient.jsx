'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Phone, ArrowRight, Shield, Clock, Car, CheckCircle2,
  IndianRupee, MapPin, Star, Users, Route, ChevronRight,
  Info, Check, Calendar, Navigation, Fuel, Tag,
} from '@/components/ui/icons';
import { trackWhatsAppClick, trackPhoneCall } from '@/utilis/analytics';
import { getCityImage, heroBlurDataURL } from '@/utilis/imageUtils';
import ScrollReveal from '@/components/shared/ScrollReveal';
import FaqAccordion from '@/components/shared/FaqAccordion';
import CTASection from '@/components/shared/CTASection';
import MobileStickyBar from '@/components/ui/MobileStickyBar';

const WA = <svg className="w-4 h-4" viewBox="0 0 16 16" fill="currentColor"><path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/></svg>;

export default function CityTaxiFareClient({ city, relatedCities }) {
  const [activeVehicle, setActiveVehicle] = useState('suv');
  const heroImage = getCityImage(city.city);
  const whatsappMsg = `Hi, I need a taxi in ${city.city}. Please share fare details and availability.`;
  const whatsappUrl = `https://wa.me/917668570551?text=${encodeURIComponent(whatsappMsg)}`;

  const vehicles = [
    { key: 'sedan', name: 'AC Sedan', models: 'Swift Dzire / Etios', rate: city.baseFare.sedan, capacity: '4 Passengers', accent: { bg: 'bg-sky-50', border: 'border-sky-200', text: 'text-sky-600', bar: 'bg-sky-500' } },
    { key: 'suv', name: 'SUV / MUV', models: 'Innova / Ertiga', rate: city.baseFare.suv, capacity: '6-7 Passengers', accent: { bg: 'bg-amber-50', border: 'border-amber-200', text: 'text-amber-600', bar: 'bg-amber-500' } },
    { key: 'tempo', name: 'Tempo Traveller', models: '12-20 Seater', rate: city.baseFare.tempo, capacity: '12-20 Passengers', accent: { bg: 'bg-violet-50', border: 'border-violet-200', text: 'text-violet-600', bar: 'bg-violet-500' } },
  ];

  const maxRate = Math.max(city.baseFare.sedan, city.baseFare.suv, city.baseFare.tempo);

  return (
    <div className="min-h-screen bg-[#f8f7f4] text-slate-900">

      {/* ━━━ HERO: Pricing dashboard cinematic ━━━ */}
      <section className="relative min-h-[70vh] sm:min-h-[75vh] flex flex-col justify-end overflow-hidden">
        <Image src={heroImage} alt={`${city.city} taxi fare guide`} fill priority className="object-cover" sizes="100vw" quality={85} placeholder="blur" blurDataURL={heroBlurDataURL} />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/55 to-transparent" />
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#FACF2D] via-amber-400 to-emerald-400 z-20" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full pb-8 sm:pb-12">
          <nav className="mb-6 flex items-center gap-1.5 text-xs text-white/40">
            <Link href="/" className="hover:text-white/70 transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <Link href="/taxi-fare" className="hover:text-white/70 transition-colors">Taxi Fare</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-white/60">{city.city}</span>
          </nav>

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10 mb-5">
                <IndianRupee className="w-3.5 h-3.5 text-[#FACF2D]" />
                <span className="text-[11px] font-bold text-[#FACF2D] uppercase tracking-widest">Fare Calculator 2026</span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-white leading-[0.95] tracking-tight">
                {city.city}<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FACF2D] to-emerald-400">Taxi Fare</span>
              </h1>
              <p className="text-white/40 mt-4 text-sm sm:text-base max-w-lg">
                No surge pricing. Save up to <span className="text-emerald-400 font-bold">{city.comparisonWithOla.savings}</span> vs Ola/Uber.
              </p>

              <div className="flex flex-wrap gap-3 mt-6">
                <a onClick={() => trackPhoneCall('taxi_fare_hero')} href="tel:+917668570551" className="inline-flex items-center gap-2 bg-[#FACF2D] text-slate-900 px-6 py-3 rounded-full font-bold text-sm hover:bg-amber-300 transition-all active:scale-[0.97] shadow-lg shadow-amber-500/20">
                  <Phone className="w-4 h-4" /> Call 7668570551
                </a>
                <a onClick={() => trackWhatsAppClick('taxi_fare_hero')} href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-full font-bold text-sm border border-white/15 hover:bg-white/15 transition-all">
                  {WA} WhatsApp Quote
                </a>
              </div>
            </div>

            {/* Stat card */}
            <div className="bg-white/10 backdrop-blur-xl border border-white/15 rounded-2xl p-5 sm:p-6 lg:w-72 flex-shrink-0">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-[10px] text-white/30 uppercase tracking-widest font-semibold">Sedan</p>
                  <p className="text-2xl font-black text-white leading-tight">Rs {city.baseFare.sedan}<span className="text-sm text-white/40">/km</span></p>
                </div>
                <div>
                  <p className="text-[10px] text-white/30 uppercase tracking-widest font-semibold">SUV</p>
                  <p className="text-2xl font-black text-white leading-tight">Rs {city.baseFare.suv}<span className="text-sm text-white/40">/km</span></p>
                </div>
                <div>
                  <p className="text-[10px] text-white/30 uppercase tracking-widest font-semibold">Min Fare</p>
                  <p className="text-sm font-bold text-[#FACF2D]">Rs {city.minimumFare}</p>
                </div>
                <div>
                  <p className="text-[10px] text-white/30 uppercase tracking-widest font-semibold">Rating</p>
                  <p className="text-sm font-bold text-white/80">4.9/5</p>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-white/10 flex items-center gap-2">
                <div className="flex -space-x-1">{[1,2,3,4,5].map(i => <Star key={i} className="w-3 h-3 text-[#FACF2D] fill-[#FACF2D]" />)}</div>
                <span className="text-[11px] text-white/40">10,000+ rides</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ━━━ VISUAL FARE CHART: Horizontal bars for each vehicle ━━━ */}
      <section className="bg-slate-900 py-8 sm:py-10 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-[10px] text-white/30 uppercase tracking-widest font-bold mb-6 text-center">Per-Km Rate Comparison</p>
          <div className="space-y-4">
            {vehicles.map((v) => (
              <button key={v.key} onClick={() => setActiveVehicle(v.key)} className="w-full text-left group">
                <div className="flex items-center gap-4">
                  <div className="w-28 sm:w-32 flex-shrink-0">
                    <p className={`text-sm font-bold transition-colors ${activeVehicle === v.key ? 'text-white' : 'text-white/40'}`}>{v.name}</p>
                    <p className="text-[10px] text-white/25">{v.models}</p>
                  </div>
                  <div className="flex-1 h-8 bg-white/5 rounded-full overflow-hidden">
                    <div className={`h-full ${v.accent.bar} rounded-full transition-all duration-500 flex items-center justify-end pr-3`}
                      style={{ width: `${(v.rate / maxRate) * 100}%` }}>
                      <span className="text-xs font-black text-white">Rs {v.rate}/km</span>
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━ VEHICLE FARE CARDS with instant display ━━━ */}
      <section className="py-12 sm:py-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <p className="text-[10px] font-bold text-amber-600 uppercase tracking-widest mb-1">Transparent Pricing</p>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-8">{city.city} Taxi Fare Per Km</h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-4">
            {vehicles.map((v, i) => {
              const isActive = activeVehicle === v.key;
              return (
                <ScrollReveal key={v.key} delay={i * 80}>
                  <div onClick={() => setActiveVehicle(v.key)}
                    className={`relative cursor-pointer rounded-2xl overflow-hidden border-2 transition-all duration-300 ${isActive ? `${v.accent.border} shadow-lg` : 'border-slate-200 hover:border-slate-300 shadow-sm'}`}>
                    {/* Color accent strip */}
                    <div className={`h-1.5 ${v.accent.bar}`} />
                    {v.key === 'suv' && <div className="absolute top-5 right-4"><span className="bg-[#FACF2D] text-slate-900 text-[9px] font-black uppercase tracking-wider px-3 py-0.5 rounded-full">Popular</span></div>}

                    <div className="bg-white p-6">
                      <h3 className="text-xl font-black text-slate-900 mb-0.5">{v.name}</h3>
                      <p className="text-sm text-slate-400 mb-5">{v.models}</p>

                      <div className="flex items-baseline gap-1 mb-1">
                        <span className="text-4xl font-black text-slate-900">Rs {v.rate}</span>
                        <span className="text-slate-400">/km</span>
                      </div>
                      <p className="text-xs text-slate-400 mb-5">Min fare: Rs {city.minimumFare}</p>

                      <div className="space-y-2 mb-5">
                        <div className="flex items-center gap-2 text-sm text-slate-600"><Users className={`w-4 h-4 ${v.accent.text}`} /> {v.capacity}</div>
                        {['AC Vehicle', 'GPS Tracked', 'Fuel Included'].map((f, j) => (
                          <div key={j} className="flex items-center gap-2 text-sm text-slate-600"><Check className="w-4 h-4 text-emerald-500" /> {f}</div>
                        ))}
                      </div>

                      <a href="tel:+917668570551" onClick={(e) => { e.stopPropagation(); trackPhoneCall(`fare_${v.key}`); }}
                        className={`block w-full text-center py-3 rounded-xl font-bold text-sm transition-all ${isActive ? 'bg-[#FACF2D] text-slate-900 hover:bg-amber-300' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}>
                        <Phone className="w-4 h-4 inline mr-1" /> Book {v.name}
                      </a>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ━━━ POPULAR ROUTE FARES ━━━ */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 bg-slate-900">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <p className="text-[10px] font-bold text-[#FACF2D] uppercase tracking-widest mb-1">Popular Routes</p>
            <h2 className="text-2xl sm:text-3xl font-black text-white mb-8">{city.city} Taxi Fare Estimates</h2>
          </ScrollReveal>

          <ScrollReveal>
            <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden">
              <div className="bg-[#FACF2D] px-5 py-3 grid grid-cols-12 gap-4 text-sm font-bold text-slate-900 uppercase tracking-wider">
                <div className="col-span-4">From</div>
                <div className="col-span-4">To</div>
                <div className="col-span-2 text-center">Dist.</div>
                <div className="col-span-2 text-right">Fare</div>
              </div>
              {city.popularFares.map((r, i) => (
                <div key={i} className={`grid grid-cols-12 gap-4 px-5 py-3.5 items-center border-b border-white/5 hover:bg-white/5 transition-colors ${i % 2 ? 'bg-white/[0.02]' : ''}`}>
                  <div className="col-span-4 flex items-center gap-2">
                    <div className="w-2 h-2 bg-[#FACF2D] rounded-full flex-shrink-0" />
                    <span className="font-semibold text-white text-sm truncate">{r.from}</span>
                  </div>
                  <div className="col-span-4 flex items-center gap-2">
                    <div className="w-2 h-2 bg-white/20 rounded-full flex-shrink-0" />
                    <span className="text-white/60 text-sm truncate">{r.to}</span>
                  </div>
                  <div className="col-span-2 text-center">
                    <span className="bg-white/10 rounded-lg px-2 py-0.5 text-sm font-semibold text-white/70">{r.distance} km</span>
                  </div>
                  <div className="col-span-2 text-right text-lg font-black text-white">Rs {r.fare}</div>
                </div>
              ))}
              <div className="px-5 py-3 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-2">
                <p className="text-[11px] text-white/30">* Sedan (AC) fares. SUV fares ~25-30% higher. Toll/parking extra.</p>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" onClick={() => trackWhatsAppClick('route_table')} className="flex items-center gap-2 bg-[#FACF2D] text-slate-900 font-bold text-sm px-5 py-2 rounded-lg hover:bg-amber-300 transition-all">
                  Get Exact Fare <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ━━━ COMPETITOR COMPARISON: Visual meter ━━━ */}
      <section className="py-12 sm:py-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <p className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest mb-1">Save More</p>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-8">Triveni Cabs vs Ola/Uber</h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-4">
            {/* Triveni */}
            <ScrollReveal>
              <div className="relative bg-white rounded-2xl border-2 border-[#FACF2D] shadow-lg p-6 pt-8">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2"><span className="bg-emerald-500 text-white text-[9px] font-black uppercase tracking-widest px-4 py-1 rounded-full">Winner</span></div>
                <h3 className="text-lg font-black text-slate-900 mb-1">Triveni Cabs</h3>
                <p className="text-4xl font-black text-slate-900 mb-4">{city.comparisonWithOla.triveni}</p>
                {['No surge pricing ever', 'Flat rate, rain or shine', 'No booking fees', 'Free cancellation', 'Direct driver contact', 'AC guaranteed'].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 mb-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" /><span className="text-sm text-slate-700">{item}</span></div>
                ))}
                <a href="tel:+917668570551" onClick={() => trackPhoneCall('comparison_triveni')} className="w-full mt-4 flex items-center justify-center gap-2 bg-[#FACF2D] text-slate-900 font-bold py-3 rounded-xl hover:bg-amber-300 transition-all text-sm">
                  <Phone className="w-4 h-4" /> Book Triveni
                </a>
              </div>
            </ScrollReveal>

            {/* Ola/Uber */}
            <ScrollReveal stagger={100}>
              <div className="bg-slate-100 rounded-2xl border border-slate-200 p-6 opacity-70">
                <h3 className="text-lg font-bold text-slate-400 mb-1">Ola / Uber</h3>
                <p className="text-4xl font-bold text-slate-400 mb-4">{city.comparisonWithOla.ola}</p>
                {['Surge pricing during peak', 'Rates change with demand', 'Booking + convenience fees', 'Cancellation charges apply', 'No direct driver contact', 'AC not guaranteed'].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 mb-1.5">
                    <div className="w-3.5 h-3.5 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0"><span className="text-red-400 text-[8px] font-bold">x</span></div>
                    <span className="text-sm text-slate-400">{item}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal>
            <div className="mt-6 bg-emerald-50 border border-emerald-200 rounded-2xl p-5 text-center">
              <p className="text-sm text-slate-500 mb-1">Your savings with Triveni</p>
              <p className="text-3xl font-black text-emerald-600">{city.comparisonWithOla.savings} <span className="text-base text-slate-400 font-medium">cheaper per ride</span></p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ━━━ SURCHARGES: Dark bento ━━━ */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 bg-slate-900">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <p className="text-[10px] font-bold text-[#FACF2D] uppercase tracking-widest mb-1">Full Transparency</p>
            <h2 className="text-2xl sm:text-3xl font-black text-white mb-8">Surcharges and Inclusions</h2>
          </ScrollReveal>

          <div className="grid sm:grid-cols-3 gap-4 mb-6">
            {[
              { icon: Clock, title: 'Night Surcharge', value: city.surcharges.night, desc: '11 PM - 6 AM' },
              { icon: Calendar, title: 'Holiday Surcharge', value: city.surcharges.holiday, desc: 'Peak festivals' },
              { icon: Navigation, title: 'Airport Pickup', value: city.surcharges.airport, desc: 'Meet-and-greet' },
            ].map((s, i) => (
              <ScrollReveal key={i} stagger={i * 80}>
                <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-5 border border-white/10">
                  <s.icon className="w-5 h-5 text-[#FACF2D] mb-3" />
                  <h3 className="font-bold text-white mb-1 text-sm">{s.title}</h3>
                  <p className="text-xl font-black text-white mb-0.5">{s.value}</p>
                  <p className="text-white/30 text-xs">{s.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-5 border border-white/10">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { icon: Fuel, label: 'Fuel', val: 'Included' },
                  { icon: Shield, label: 'Driver allowance', val: 'Included' },
                  { icon: Phone, label: '24/7 support', val: 'Free' },
                  { icon: Star, label: 'AC throughout', val: 'Guaranteed' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 bg-emerald-500/10 rounded-lg p-3 border border-emerald-500/20">
                    <item.icon className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <div>
                      <p className="text-xs font-bold text-white">{item.label}</p>
                      <p className="text-[10px] text-emerald-400">{item.val}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ━━━ FAQS ━━━ */}
      <FaqAccordion heading={`${city.city} Taxi Fare FAQs`} faqs={city.faqs} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: city.faqs.map(faq => ({ '@type': 'Question', name: faq.question, acceptedAnswer: { '@type': 'Answer', text: faq.answer } })) }) }} />

      {/* ━━━ RELATED CITIES ━━━ */}
      {relatedCities?.length > 0 && (
        <section className="py-12 sm:py-16 px-4 sm:px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <ScrollReveal>
              <p className="text-[10px] font-bold text-amber-600 uppercase tracking-widest mb-1">Explore More</p>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-8">Taxi Fares in Nearby Cities</h2>
            </ScrollReveal>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {relatedCities.map((rc) => (
                <ScrollReveal key={rc.slug} stagger={50}>
                  <Link href={`/taxi-fare/${rc.slug}`} className="group flex items-center gap-3 bg-[#f8f7f4] rounded-xl p-4 hover:bg-white hover:shadow-lg transition-all border border-transparent hover:border-amber-200">
                    <div className="w-9 h-9 rounded-lg bg-amber-50 flex items-center justify-center flex-shrink-0 group-hover:bg-amber-100 transition-colors"><MapPin className="w-4 h-4 text-amber-600" /></div>
                    <div className="flex-1 min-w-0">
                      <p className="font-bold text-slate-900 text-sm">{rc.city}</p>
                      <p className="text-xs text-slate-500">From Rs {rc.baseFare.sedan}/km</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-amber-500 flex-shrink-0" />
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTASection heading={`Need a Taxi in ${city.city}?`} subheading={`Skip surge pricing. Book a Triveni cab at flat Rs ${city.baseFare.sedan}/km and save up to ${city.comparisonWithOla.savings} on every ride.`} />
      <MobileStickyBar />
    </div>
  );
}
