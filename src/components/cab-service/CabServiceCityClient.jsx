'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  Phone, ArrowRight, ChevronDown, Shield, Clock, Car, CheckCircle2,
  Route, MapPin, Star, Users, Sparkles, Award, ChevronRight, Navigation
} from '@/components/ui/icons';
import { trackWhatsAppClick, trackPhoneCall } from '@/utilis/analytics';

export default function CabServiceCityClient({ data, relatedCities }) {
  const [openFaq, setOpenFaq] = useState(null);
  const whatsappMsg = `Hi, I need a cab service in ${data.city}. Please share rates.`;
  const cheapest = Math.min(...data.services.map(s => s.startingPrice));

  return (
    <div className="min-h-screen bg-white text-gray-900 overflow-hidden">

      {/* HERO — Light Theme with Gold Accents */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-white via-yellow-50/50 to-amber-50/30">
        {/* Subtle grid */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(0,0,0,0.3) 1px, transparent 0)', backgroundSize: '32px 32px' }} />

        {/* Decorative blobs */}
        <div className="absolute top-[10%] right-[5%] w-[400px] h-[400px] bg-[#FACF2D]/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] left-[5%] w-[350px] h-[350px] bg-amber-200/15 rounded-full blur-[100px]" />

        {/* Floating price badge */}
        <div className="absolute top-32 right-[10%] hidden lg:block">
          <div className="bg-white shadow-2xl shadow-amber-200/30 rounded-2xl px-6 py-4 border border-[#FACF2D]/30">
            <div className="text-xs text-amber-600 uppercase tracking-wider font-bold">Starting From</div>
            <div className="text-3xl font-black text-gray-900">₹{cheapest}</div>
          </div>
        </div>

        <div className="absolute -bottom-1 left-0 right-0 h-32">
          <svg viewBox="0 0 1440 120" className="w-full h-full" preserveAspectRatio="none">
            <path d="M0,80 C240,120 480,20 720,60 C960,100 1200,30 1440,70 L1440,120 L0,120 Z" fill="#ffffff" />
          </svg>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-32">
          <div className="inline-flex items-center gap-2.5 bg-[#FACF2D]/10 border border-[#FACF2D]/30 px-6 py-3 rounded-full mb-10">
            <MapPin className="w-4 h-4 text-amber-600" />
            <span className="text-amber-700 font-semibold text-sm tracking-wide">Cab Service in {data.city}</span>
            <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-4">
            <span className="text-gray-900">{data.city}</span>
            <br />
            <span className="text-[#FACF2D] drop-shadow-[0_2px_10px_rgba(250,207,45,0.3)]">Cab Service</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-500 mb-8 max-w-3xl font-medium">{data.tagline}</p>

          <div className="flex flex-wrap gap-3 mb-12">
            {[
              { icon: Car, text: `From ₹${cheapest}` },
              { icon: Clock, text: '24/7 Available' },
              { icon: Star, text: '4.9★ (10,000+ reviews)', special: true },
              { icon: Shield, text: 'GPS Tracked' },
            ].map((pill, i) => (
              <span key={i} className={`inline-flex items-center gap-2 px-5 py-3 rounded-2xl text-sm font-medium ${pill.special ? 'bg-amber-50 border border-amber-200 text-amber-700' : 'bg-gray-50 border border-gray-200 text-gray-600'}`}>
                <pill.icon className={`w-4 h-4 ${pill.special ? 'text-amber-500' : 'text-[#FACF2D]'}`} /> {pill.text}
              </span>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link onClick={() => trackPhoneCall('cab_service_city')} href="tel:+917668570551" className="group inline-flex items-center gap-3 bg-[#FACF2D] text-gray-900 px-10 py-5 rounded-2xl font-bold text-lg shadow-lg shadow-[#FACF2D]/30 hover:shadow-xl hover:shadow-[#FACF2D]/40 hover:scale-105 transition-all duration-300">
              <Phone className="w-5 h-5 group-hover:animate-bounce" /> Call: 7668570551
            </Link>
            <Link onClick={() => trackWhatsAppClick('cab_service_city')} href={`https://wa.me/917668570551?text=${encodeURIComponent(whatsappMsg)}`} className="group inline-flex items-center gap-3 bg-white text-gray-900 px-10 py-5 rounded-2xl font-bold text-lg border-2 border-gray-200 hover:border-[#FACF2D] hover:shadow-lg transition-all duration-300">
              <svg className="w-5 h-5 text-emerald-500" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.611.611l4.458-1.495A11.943 11.943 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.318 0-4.468-.67-6.29-1.823l-.451-.27-2.649.888.888-2.649-.27-.451A9.965 9.965 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/></svg>
              WhatsApp Quote <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF STRIP */}
      <section className="py-8 border-y border-gray-100 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap justify-center gap-10 md:gap-20">
            {[
              { value: '10,000+', label: 'Happy Customers', icon: Users },
              { value: '4.9★', label: 'Google Rating', icon: Star },
              { value: '24/7', label: 'Service Available', icon: Clock },
              { value: '15+', label: 'Cities Covered', icon: MapPin },
            ].map((stat, i) => (
              <div key={i} className="group text-center flex items-center gap-3 cursor-default">
                <div className="w-10 h-10 rounded-xl bg-[#FACF2D]/10 border border-[#FACF2D]/20 flex items-center justify-center">
                  <stat.icon className="w-5 h-5 text-amber-600" />
                </div>
                <div className="text-left">
                  <div className="text-xl font-black text-gray-900">{stat.value}</div>
                  <div className="text-[10px] text-gray-400 uppercase tracking-widest">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24 md:py-32 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <span className="inline-flex items-center gap-2 bg-[#FACF2D]/10 border border-[#FACF2D]/20 px-4 py-2 rounded-full text-amber-700 font-semibold text-xs tracking-widest uppercase mb-4">
              <Car className="w-3.5 h-3.5" /> Our Services
            </span>
            <h2 className="text-4xl md:text-6xl font-black tracking-tight text-gray-900">{data.city} Cab Services</h2>
            <p className="text-gray-400 mt-4 text-lg">Complete transportation solutions in {data.city}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.services.map((service, i) => (
              <div key={i} className="group bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:border-[#FACF2D]/30 transition-all duration-300 hover:-translate-y-1">
                <div className="w-14 h-14 rounded-2xl bg-[#FACF2D]/10 border border-[#FACF2D]/20 flex items-center justify-center mb-6 group-hover:bg-[#FACF2D]/20 transition-all">
                  <Car className="w-7 h-7 text-amber-600" />
                </div>
                <h3 className="text-xl font-black text-gray-900 mb-2">{service.name}</h3>
                <p className="text-gray-500 text-sm mb-4 leading-relaxed">{service.description}</p>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-xs text-gray-400 uppercase tracking-wider">Starting</span>
                    <div className="text-2xl font-black text-gray-900">₹{service.startingPrice.toLocaleString('en-IN')}</div>
                  </div>
                  <a href="tel:+917668570551" className="inline-flex items-center gap-1 text-amber-600 font-bold text-sm hover:text-amber-700">
                    Book Now <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FLEET */}
      <section className="py-24 md:py-32 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <span className="inline-flex items-center gap-2 bg-white border border-gray-200 px-4 py-2 rounded-full text-gray-600 font-semibold text-xs tracking-widest uppercase mb-4">
              <Shield className="w-3.5 h-3.5" /> Our Fleet
            </span>
            <h2 className="text-4xl md:text-6xl font-black tracking-tight text-gray-900">Choose Your Ride</h2>
            <p className="text-gray-400 mt-4 text-lg">Well-maintained, AC, GPS-tracked vehicles</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.fleet.map((vehicle, i) => (
              <div key={i} className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:border-[#FACF2D]/30 transition-all duration-300 text-center">
                <div className="text-4xl mb-4">{['🚗', '🚙', '🏎️', '🚐'][i] || '🚗'}</div>
                <h3 className="text-xl font-black text-gray-900 mb-1">{vehicle.type}</h3>
                <p className="text-gray-400 text-sm mb-4">{vehicle.model}</p>
                <div className="text-3xl font-black text-[#FACF2D] mb-1">₹{vehicle.perKm}<span className="text-sm text-gray-400 font-normal">/km</span></div>
                <p className="text-xs text-gray-400">{vehicle.seats} Seater &middot; AC</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* POPULAR ROUTES */}
      <section className="py-24 md:py-32 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <span className="inline-flex items-center gap-2 bg-[#FACF2D]/10 border border-[#FACF2D]/20 px-4 py-2 rounded-full text-amber-700 font-semibold text-xs tracking-widest uppercase mb-4">
              <Route className="w-3.5 h-3.5" /> Popular Routes
            </span>
            <h2 className="text-4xl md:text-6xl font-black tracking-tight text-gray-900">Top Routes from {data.city}</h2>
          </div>

          <div className="space-y-4">
            {data.popularRoutes.map((route, i) => (
              <div key={i} className="group bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-lg hover:border-[#FACF2D]/30 transition-all duration-300 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#FACF2D]/10 flex items-center justify-center flex-shrink-0">
                    <Navigation className="w-5 h-5 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">{data.city} to {route.to}</h3>
                    <p className="text-sm text-gray-400">{route.distance} &middot; {route.time}</p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="text-right">
                    <div className="text-xs text-gray-400">Sedan from</div>
                    <div className="text-xl font-black text-gray-900">{route.fare}</div>
                  </div>
                  <a href="tel:+917668570551" className="inline-flex items-center gap-1 bg-[#FACF2D] text-gray-900 px-5 py-3 rounded-xl font-bold text-sm hover:shadow-lg transition-all">
                    Book <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* KEY INFO */}
      <section className="py-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-50 rounded-3xl p-8 md:p-12 border border-gray-100" data-snippet-type="direct-answer">
            <div className="key-info">
              <h2 className="text-2xl font-black text-gray-900 mb-4">{data.city} Cab Service — Quick Info</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6">
                <div><div className="text-xs text-amber-600 uppercase tracking-wider font-bold mb-1">Sedan Rate</div><div className="text-xl font-black text-gray-900">₹11/km</div></div>
                <div><div className="text-xs text-amber-600 uppercase tracking-wider font-bold mb-1">SUV Rate</div><div className="text-xl font-black text-gray-900">₹14/km</div></div>
                <div><div className="text-xs text-amber-600 uppercase tracking-wider font-bold mb-1">Local Min</div><div className="text-xl font-black text-gray-900">₹{cheapest}</div></div>
                <div><div className="text-xs text-amber-600 uppercase tracking-wider font-bold mb-1">Availability</div><div className="text-xl font-black text-gray-900">24/7</div></div>
              </div>
              <p className="text-gray-500 text-sm">Triveni Cabs provides reliable cab service in {data.city} for local trips, outstation travel, airport transfers, and wedding car rentals. All fares include driver, fuel, and AC. Call 7668570551.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-24 md:py-32 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-gray-900">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-4">
            {data.faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-all">
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} aria-expanded={openFaq === i} aria-label={openFaq === i ? 'Collapse answer' : 'Expand answer'} className="w-full flex items-center justify-between p-6 text-left focus:outline-none focus:ring-2 focus:ring-yellow-500/50 rounded-2xl">
                  <span className="font-bold text-gray-900 pr-4 faq-answer">{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 text-[#FACF2D] transition-transform duration-300 flex-shrink-0 ${openFaq === i ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-6 faq-answer">
                    <p className="text-gray-500 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RELATED CITIES */}
      {relatedCities.length > 0 && (
        <section className="py-24 md:py-32 px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-black tracking-tight text-gray-900">Cab Service in Other Cities</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {relatedCities.map((rc, i) => (
                <Link key={i} href={`/cab-service/${rc.slug}`} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-lg hover:border-[#FACF2D]/30 transition-all duration-300 block text-center">
                  <h3 className="text-lg font-black text-gray-900 mb-1">{rc.city}</h3>
                  <p className="text-gray-400 text-xs mb-3">Cab Service</p>
                  <span className="text-amber-600 font-bold text-sm">View Rates →</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FINAL CTA */}
      <section className="py-24 px-4 sm:px-6 bg-gradient-to-b from-white to-amber-50/30">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">Book a Cab in {data.city}</h2>
          <p className="text-gray-500 text-lg mb-10">Professional drivers, GPS-tracked vehicles, transparent pricing. Available 24/7.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+917668570551" className="inline-flex items-center gap-3 bg-[#FACF2D] text-gray-900 px-10 py-5 rounded-2xl font-bold text-lg shadow-lg shadow-[#FACF2D]/30 hover:shadow-xl hover:scale-105 transition-all">
              <Phone className="w-5 h-5" /> Call: 7668570551
            </a>
            <a href={`https://wa.me/917668570551?text=${encodeURIComponent(whatsappMsg)}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-white text-gray-900 px-10 py-5 rounded-2xl font-bold text-lg border-2 border-gray-200 hover:border-[#FACF2D] transition-all">
              WhatsApp Quote <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
