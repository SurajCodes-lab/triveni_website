'use client';

import { useState, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Phone, ArrowRight, ChevronDown, Clock, Car, CheckCircle2,
  Route, MapPin, Navigation, Star, Users, Calendar,
  Sparkles, Award, Compass, ChevronRight, Fuel,
  ShieldCheck, Headphones, Shield, XCircle
} from '@/components/ui/icons';
import { getCityImage, heroBlurDataURL } from '@/utilis/imageUtils';
import { trackWhatsAppClick, trackPhoneCall } from '@/utilis/analytics';
import ScrollReveal from '@/components/shared/ScrollReveal';
import FaqAccordion from '@/components/shared/FaqAccordion';
import CTASection from '@/components/shared/CTASection';
import MobileStickyBar from '@/components/ui/MobileStickyBar';

const INCLUSIONS = [
  { icon: Car, label: 'AC Vehicle', desc: 'Well-maintained sedan or SUV with AC' },
  { icon: Users, label: 'Expert Driver', desc: 'Experienced hill & highway driver' },
  { icon: Fuel, label: 'Fuel Included', desc: 'All fuel charges covered in fare' },
  { icon: Navigation, label: 'GPS Tracking', desc: 'Real-time GPS tracking for safety' },
  { icon: Headphones, label: '24/7 Support', desc: 'Round-the-clock trip assistance' },
  { icon: ShieldCheck, label: 'Insurance', desc: 'Comprehensive vehicle insurance' },
];

const EXCLUSIONS = [
  'Toll charges & state tax',
  'Parking & entry fees',
  'Driver night allowance (\u20B9300/night)',
  'Personal expenses & meals',
];

export default function RoadTripCircuitClient({ trip, relatedTrips }) {
  const [expandedStops, setExpandedStops] = useState(new Set([0]));

  const toggleStop = useCallback((i) => {
    setExpandedStops((prev) => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });
  }, []);

  const whatsappMsg = `Hi, I want to book a cab for ${trip.name} (${trip.totalDistance} km, ${trip.totalDays} days). Please share details.`;
  const totalNights = trip.stops.reduce((sum, s) => sum + s.nights, 0);
  const firstCity = trip.stops?.[0]?.city || '';
  const heroImage = getCityImage(firstCity);

  return (
    <div className="min-h-screen bg-[#f8f7f4] text-slate-900">

      {/* ━━━ HERO: Circuit explorer ━━━ */}
      <section className="relative min-h-[75vh] sm:min-h-[80vh] flex flex-col justify-end overflow-hidden">
        <Image src={heroImage} alt={`${trip.name} road trip circuit`} fill priority className="object-cover" sizes="100vw" quality={85} placeholder="blur" blurDataURL={heroBlurDataURL} />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-amber-400 via-orange-400 to-rose-400 z-20" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full pb-8 sm:pb-12">
          <nav className="mb-6 flex items-center gap-1.5 text-xs text-white/40">
            <Link href="/" className="hover:text-white/70 transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <Link href="/road-trip" className="hover:text-white/70 transition-colors">Road Trips</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-white/60">{trip.name}</span>
          </nav>

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10 mb-5">
                <Compass className="w-3.5 h-3.5 text-amber-400" />
                <span className="text-[11px] font-bold text-amber-300 uppercase tracking-widest">Circuit Explorer</span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-[0.95] tracking-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-300">{trip.name}</span>
              </h1>
              <p className="text-white/40 mt-4 text-sm sm:text-base max-w-lg leading-relaxed">
                {trip.tagline} -- {trip.totalDistance} km in {trip.totalDays} days from <span className="text-[#FACF2D] font-bold">{'\u20B9'}{trip.totalCost.sedan.toLocaleString('en-IN')}</span>
              </p>

              <div className="flex flex-wrap items-center gap-2 mt-5 mb-6">
                {trip.stops.map((stop, i) => (
                  <span key={i} className="flex items-center gap-1.5">
                    <span className="inline-flex items-center gap-1 bg-white/10 backdrop-blur-sm px-2.5 py-1 rounded-full text-xs text-white/70 border border-white/15">
                      <MapPin className="w-3 h-3 text-amber-400" />
                      {stop.city}
                      {stop.nights > 0 && <span className="text-amber-400/70 text-[10px]">({stop.nights}N)</span>}
                    </span>
                    {i < trip.stops.length - 1 && <ArrowRight className="w-3 h-3 text-white/20" />}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                <a href={`https://wa.me/917668570551?text=${encodeURIComponent(whatsappMsg)}`} target="_blank" rel="noopener noreferrer" onClick={() => trackWhatsAppClick('road_trip_hero')} className="inline-flex items-center gap-2 bg-[#FACF2D] text-slate-900 px-6 py-3.5 rounded-full font-bold text-sm hover:bg-amber-300 transition-all active:scale-[0.97] shadow-lg shadow-amber-500/20">
                  Get Free Quote <ArrowRight className="w-4 h-4" />
                </a>
                <a href="tel:+917668570551" onClick={() => trackPhoneCall('road_trip_hero')} className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-6 py-3.5 rounded-full font-bold text-sm border border-white/15 hover:bg-white/15 transition-all">
                  <Phone className="w-4 h-4" /> Call Now
                </a>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-xl border border-white/15 rounded-2xl p-5 sm:p-6 lg:w-72 flex-shrink-0">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-[10px] text-white/30 uppercase tracking-widest font-semibold">Distance</p>
                  <p className="text-3xl font-black text-white leading-tight">{trip.totalDistance}<span className="text-lg text-white/40 ml-0.5">km</span></p>
                </div>
                <div>
                  <p className="text-[10px] text-white/30 uppercase tracking-widest font-semibold">Duration</p>
                  <p className="text-3xl font-black text-white leading-tight">{trip.totalDays}<span className="text-lg text-white/40 ml-0.5">days</span></p>
                </div>
                <div>
                  <p className="text-[10px] text-white/30 uppercase tracking-widest font-semibold">Stops</p>
                  <p className="text-sm font-bold text-white/80">{trip.stops.length} cities</p>
                </div>
                <div>
                  <p className="text-[10px] text-white/30 uppercase tracking-widest font-semibold">Sedan</p>
                  <p className="text-sm font-bold text-[#FACF2D]">{'\u20B9'}{trip.totalCost.sedan.toLocaleString('en-IN')}</p>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-white/10 flex items-center gap-2">
                <div className="flex -space-x-1">
                  {[1,2,3,4,5].map(i => <Star key={i} className="w-3 h-3 text-[#FACF2D] fill-[#FACF2D]" />)}
                </div>
                <span className="text-[11px] text-white/40 font-medium">4.9 &middot; 10,000+ trips</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ━━━ DARK STRIP: Circuit stats ━━━ */}
      <section className="bg-slate-900 py-6 sm:py-8 px-4 sm:px-6 overflow-hidden">
        <div className="max-w-5xl mx-auto">
          <p className="text-[10px] text-white/30 uppercase tracking-widest font-bold mb-4 text-center">Circuit Overview</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { icon: Route, label: 'Total Distance', value: `${trip.totalDistance} km`, color: 'text-amber-400' },
              { icon: Calendar, label: 'Duration', value: `${trip.totalDays}D / ${totalNights}N`, color: 'text-orange-400' },
              { icon: Car, label: 'Sedan Fare', value: `\u20B9${trip.totalCost.sedan.toLocaleString('en-IN')}`, color: 'text-[#FACF2D]' },
              { icon: Star, label: 'Rating', value: '4.9 / 5', color: 'text-amber-400' },
            ].map((s, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-4 text-center">
                <s.icon className={`w-5 h-5 ${s.color} mx-auto mb-2`} />
                <p className="text-sm font-black text-white">{s.value}</p>
                <p className="text-[10px] text-white/30 uppercase tracking-wider">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━ CIRCUIT TIMELINE ━━━ */}
      <section className="py-12 sm:py-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <p className="text-[10px] font-bold text-amber-600 uppercase tracking-widest mb-1">Detailed Itinerary</p>
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-8">
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900">Every Stop Explored</h2>
              <p className="text-sm text-slate-500">{trip.stops.length} stops &middot; {trip.totalDistance} km</p>
            </div>
          </ScrollReveal>

          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-amber-200 hidden sm:block" />

            <div className="space-y-3">
              {trip.stops.map((stop, i) => {
                const isOpen = expandedStops.has(i);
                return (
                  <ScrollReveal key={i} delay={i * 50}>
                    <div className={`relative bg-white rounded-xl border transition-all duration-300 ${isOpen ? 'border-amber-300 shadow-md' : 'border-slate-200 hover:border-slate-300'}`}>
                      <div className="absolute left-6 top-6 -translate-x-1/2 hidden sm:block z-10">
                        <div className={`w-3 h-3 rounded-full ring-4 ring-white ${isOpen ? 'bg-amber-500' : 'bg-slate-300'}`} />
                      </div>

                      <button onClick={() => toggleStop(i)} className="w-full flex items-center gap-4 p-5 sm:pl-14 text-left group">
                        <div className={`w-11 h-11 rounded-xl flex items-center justify-center text-sm font-black flex-shrink-0 transition-all ${isOpen ? 'bg-amber-500 text-white' : 'bg-amber-50 text-amber-600 group-hover:bg-amber-100'}`}>
                          {i + 1}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 flex-wrap">
                            <h3 className="text-base font-bold text-slate-900">{stop.city}</h3>
                            {stop.nights > 0 ? (
                              <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-amber-50 text-amber-700 border border-amber-200">{stop.nights} {stop.nights === 1 ? 'Night' : 'Nights'}</span>
                            ) : (
                              <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-slate-100 text-slate-500">Transit</span>
                            )}
                          </div>
                          {!isOpen && <p className="text-slate-400 text-sm mt-0.5 truncate">{stop.highlights.slice(0, 3).join(' / ')}</p>}
                        </div>
                        <div className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 transition-all ${isOpen ? 'bg-amber-100 rotate-180' : 'bg-slate-100'}`}>
                          <ChevronDown className={`w-4 h-4 ${isOpen ? 'text-amber-600' : 'text-slate-500'}`} />
                        </div>
                      </button>

                      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'}`}>
                        <div className="px-5 sm:pl-14 pb-5">
                          <div className="h-px bg-slate-100 mb-4" />
                          <p className="text-xs text-amber-600 uppercase tracking-widest font-bold mb-3">Things to Experience</p>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {stop.highlights.map((h, j) => (
                              <div key={j} className="flex items-start gap-2.5 text-sm text-slate-600 bg-amber-50/50 rounded-lg p-2.5">
                                <Sparkles className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                                <span>{h}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ━━━ PRICING: Dark section ━━━ */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 bg-slate-900">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <p className="text-[10px] font-bold text-[#FACF2D] uppercase tracking-widest mb-1">Trip Pricing</p>
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
              <h2 className="text-2xl sm:text-3xl font-black text-white">Book Your Road Trip</h2>
              <p className="text-white/30 text-sm">All fares include driver, fuel & AC</p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {[
              { name: 'Sedan', sub: 'Swift Dzire / Etios', fare: trip.totalCost.sedan, seats: '4', perKm: '\u20B911/km', popular: false },
              { name: 'SUV', sub: 'Innova / Ertiga', fare: trip.totalCost.suv, seats: '6-7', perKm: '\u20B914/km', popular: true },
            ].map((v, i) => (
              <ScrollReveal key={i} stagger={i * 80}>
                <div className={`relative rounded-2xl overflow-hidden ${v.popular ? 'ring-2 ring-amber-400/50' : ''}`}>
                  {v.popular && <div className="bg-amber-500 text-center py-1.5"><span className="text-[10px] font-black text-white uppercase tracking-widest">Recommended</span></div>}
                  <div className="bg-slate-800 p-6 text-center">
                    <div className={`w-16 h-16 rounded-2xl mx-auto flex items-center justify-center mb-4 ${v.popular ? 'bg-amber-500/20' : 'bg-white/10'}`}>
                      <Car className={`w-8 h-8 ${v.popular ? 'text-amber-400' : 'text-white/60'}`} />
                    </div>
                    <h3 className="text-xl font-black text-white">{v.name}</h3>
                    <p className="text-white/40 text-sm mt-1">{v.sub} / {v.seats} Seater</p>
                    <div className="text-4xl font-black text-[#FACF2D] my-4">{'\u20B9'}{v.fare.toLocaleString('en-IN')}</div>
                    <p className="text-white/30 text-xs mb-5">{v.perKm} / {trip.totalDistance} km circuit</p>
                    <div className="space-y-2 mb-5 text-left">
                      {['Driver + Fuel + AC included', 'GPS-tracked vehicle', `${trip.totalDays}-day circuit support`, 'No hidden charges'].map((f, j) => (
                        <div key={j} className="flex items-center gap-2 text-[11px] text-white/50">
                          <CheckCircle2 className="w-3 h-3 text-emerald-400 flex-shrink-0" /> {f}
                        </div>
                      ))}
                    </div>
                    <a href="tel:+917668570551" onClick={() => trackPhoneCall(`road_trip_${v.name.toLowerCase()}`)}
                      className={`block w-full text-center py-3.5 rounded-xl font-bold text-sm transition-all active:scale-[0.97] ${v.popular ? 'bg-[#FACF2D] text-slate-900 hover:bg-amber-300' : 'bg-white/10 text-white hover:bg-white/15 border border-white/10'}`}>
                      Book {v.name} Now
                    </a>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━ BEST SEASON ━━━ */}
      <section className="py-12 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <div className="bg-amber-50 rounded-2xl border border-amber-100 p-6 sm:p-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center flex-shrink-0">
                  <Calendar className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <p className="text-xs text-amber-600 uppercase tracking-widest font-bold mb-1">Best Time to Visit</p>
                  <h3 className="text-lg font-black text-slate-900 mb-2">When to Plan This Circuit</h3>
                  <p className="text-slate-600 leading-relaxed">{trip.bestSeason}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {trip.bestSeason.match(/\b(January|February|March|April|May|June|July|August|September|October|November|December)\b/gi)?.map((month, i) => (
                      <span key={i} className="bg-white border border-amber-200 px-3 py-1.5 rounded-full text-sm text-amber-700 font-medium">{month}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ━━━ INCLUSIONS / EXCLUSIONS ━━━ */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <p className="text-[10px] font-bold text-amber-600 uppercase tracking-widest mb-1">What You Get</p>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-8">Package Inclusions</h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
            <div className="lg:col-span-3">
              <p className="text-sm font-bold text-emerald-600 mb-4 flex items-center gap-2"><CheckCircle2 className="w-4 h-4" /> Included</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {INCLUSIONS.map((item, i) => (
                  <ScrollReveal key={i} delay={i * 40}>
                    <div className="bg-[#f8f7f4] rounded-xl border border-slate-100 p-4 flex items-start gap-3 hover:shadow-sm transition-all">
                      <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-5 h-5 text-emerald-600" />
                      </div>
                      <div>
                        <p className="font-bold text-sm text-slate-900">{item.label}</p>
                        <p className="text-xs text-slate-400 mt-0.5">{item.desc}</p>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>

            <div className="lg:col-span-2">
              <p className="text-sm font-bold text-slate-500 mb-4 flex items-center gap-2"><XCircle className="w-4 h-4 text-red-400" /> Extra Charges</p>
              <ScrollReveal>
                <div className="bg-[#f8f7f4] rounded-xl border border-slate-100 p-5">
                  <div className="space-y-3">
                    {EXCLUSIONS.map((item, i) => (
                      <div key={i} className="flex items-center gap-3 text-sm text-slate-500">
                        <div className="w-1.5 h-1.5 rounded-full bg-red-300 flex-shrink-0" />
                        {item}
                      </div>
                    ))}
                  </div>
                  <div className="mt-5 pt-4 border-t border-slate-200">
                    <p className="text-xs text-slate-400 leading-relaxed">Driver night allowance applies when trip extends past 10 PM. Toll, parking, and state tax are pay-as-you-go.</p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ━━━ HIGHLIGHTS ━━━ */}
      <section className="py-12 sm:py-16 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <p className="text-[10px] font-bold text-amber-600 uppercase tracking-widest mb-1">Trip Highlights</p>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-8">Why This Circuit</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {trip.highlights.map((highlight, i) => {
              const icons = [Award, Compass, Sparkles, MapPin, Star, Route];
              const IconComp = icons[i % icons.length];
              return (
                <ScrollReveal key={i} delay={i * 50}>
                  <div className="bg-white rounded-xl border border-slate-100 p-5 hover:shadow-sm hover:border-amber-200 transition-all">
                    <div className="w-10 h-10 rounded-lg bg-amber-50 flex items-center justify-center mb-3">
                      <IconComp className="w-5 h-5 text-amber-600" />
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed">{highlight}</p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      <FaqAccordion heading={`${trip.name} FAQs`} faqs={trip.faqs} />

      {relatedTrips && relatedTrips.length > 0 && (
        <section className="py-12 sm:py-16 px-4 sm:px-6 bg-white">
          <div className="max-w-5xl mx-auto">
            <ScrollReveal>
              <p className="text-[10px] font-bold text-amber-600 uppercase tracking-widest mb-1">Explore More</p>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-8">More Road Trip Circuits</h2>
            </ScrollReveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {relatedTrips.map((rt, i) => (
                <ScrollReveal key={i} stagger={i * 60}>
                  <Link href={`/road-trip/${rt.slug}`} className="block bg-white rounded-xl border border-slate-200 p-5 hover:shadow-lg hover:border-amber-200 transition-all group">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-8 h-8 rounded-lg bg-amber-50 flex items-center justify-center">
                        <Route className="w-4 h-4 text-amber-600" />
                      </div>
                      <h3 className="text-base font-bold text-slate-900 group-hover:text-amber-600 transition-colors">{rt.name}</h3>
                    </div>
                    <p className="text-slate-400 text-sm mb-3 line-clamp-2">{rt.tagline}</p>
                    <div className="flex items-center gap-3 text-xs text-slate-400 mb-3 flex-wrap">
                      <span className="flex items-center gap-1"><Route className="w-3 h-3 text-amber-500" /> {rt.totalDistance} km</span>
                      <span className="flex items-center gap-1"><Calendar className="w-3 h-3 text-orange-500" /> {rt.totalDays} days</span>
                      <span className="text-amber-600 font-bold">From {'\u20B9'}{rt.totalCost.sedan.toLocaleString('en-IN')}</span>
                    </div>
                    <span className="inline-flex items-center gap-1 text-amber-600 text-sm font-semibold group-hover:gap-2 transition-all">View Trip <ChevronRight className="w-4 h-4" /></span>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTASection heading="Ready for This Road Trip?" subheading={`Book your ${trip.name} circuit with Triveni Cabs. ${trip.totalDistance} km, ${trip.totalDays} days, from \u20B9${trip.totalCost.sedan.toLocaleString('en-IN')}.`} />
      <MobileStickyBar />
    </div>
  );
}
