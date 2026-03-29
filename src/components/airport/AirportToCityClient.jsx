'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  Plane, Clock, Shield, MapPin, Car, ChevronRight, ChevronDown,
  CheckCircle, Phone, Star, Users, Navigation, Home, Luggage, Calendar
} from '@/components/ui/icons';
import { WhatsAppIcon } from '@/components/ui/icons';
import { trackWhatsAppClick, trackPhoneCall } from '@/utilis/analytics';

// Vehicle options shared across all routes
const VEHICLES = [
  { name: 'Sedan', desc: 'Swift Dzire / Etios', seats: 4, luggage: 2, multiplier: 1 },
  { name: 'SUV', desc: 'Innova / Ertiga', seats: 6, luggage: 4, multiplier: 1.4 },
  { name: 'Tempo Traveller', desc: '12-16 Seater', seats: 12, luggage: 8, multiplier: 2.2 },
];

const INCLUDES = [
  { icon: Navigation, text: 'Meet & Greet at Arrivals' },
  { icon: Plane, text: 'Real-Time Flight Tracking' },
  { icon: Car, text: 'AC Vehicle with Clean Interiors' },
  { icon: Luggage, text: 'Free Luggage Assistance' },
  { icon: Clock, text: '30 Min Free Waiting Time' },
  { icon: Shield, text: 'No Hidden Charges — Fixed Fare' },
];

export default function AirportToCityClient({ airport, city, distance, duration, fare, faqs = [] }) {
  const [openFaq, setOpenFaq] = useState(null);

  const whatsappText = `Hi, I need a cab from ${airport} to ${city}. Please share availability and fare details.`;
  const whatsappUrl = `https://wa.me/917668570551?text=${encodeURIComponent(whatsappText)}`;

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* ── HERO ── */}
      <section className="relative overflow-hidden pt-24 pb-20 px-4">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(6,182,212,0.15),transparent_60%)]" />
        <div className="relative z-10 max-w-6xl mx-auto">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 text-sm text-slate-400">
              <li><Link href="/" className="hover:text-cyan-400 transition flex items-center gap-1"><Home className="w-3.5 h-3.5" />Home</Link></li>
              <ChevronRight className="w-3.5 h-3.5" />
              <li><Link href="/airport-service" className="hover:text-cyan-400 transition">Airport Service</Link></li>
              <ChevronRight className="w-3.5 h-3.5" />
              <li className="text-cyan-400 font-medium">{airport} to {city}</li>
            </ol>
          </nav>

          <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full px-4 py-1.5 text-cyan-400 text-sm font-medium mb-6">
            <Plane className="w-4 h-4" /> Airport Transfer
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-7xl font-black mb-6 leading-[1.1] tracking-tight">
            <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 bg-clip-text text-transparent">
              {airport}
            </span>
            <br />
            <span className="text-white">to {city} Cab</span>
          </h1>

          <p className="text-xl text-slate-300 max-w-2xl mb-8 leading-relaxed">
            Pre-booked airport transfer with flight tracking, meet &amp; greet at arrivals, and guaranteed fixed fare of <strong className="text-cyan-400">&#8377;{fare}</strong>.
          </p>

          {/* Route Stats Cards */}
          <div className="flex flex-wrap gap-4 mb-10">
            {[
              { icon: MapPin, label: 'Distance', value: distance },
              { icon: Clock, label: 'Duration', value: duration },
              { icon: Car, label: 'Sedan Fare', value: `\u20B9${fare}` },
            ].map((s) => (
              <div key={s.label} className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 px-6 py-4 flex items-center gap-3">
                <s.icon className="w-5 h-5 text-cyan-400" />
                <div>
                  <span className="block text-xs text-slate-400 uppercase tracking-wider">{s.label}</span>
                  <span className="text-lg font-bold text-white">{s.value}</span>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Row */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="tel:+917668570551"
              onClick={() => trackPhoneCall('airport_to_city_hero')}
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold px-8 py-4 rounded-xl hover:shadow-lg hover:shadow-cyan-500/25 transition-all text-lg"
            >
              <Phone className="w-5 h-5" /> Call Now: +91 7668570551
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick('airport_to_city_hero')}
              className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-8 py-4 rounded-xl transition-all text-lg"
            >
              <WhatsAppIcon className="w-5 h-5" /> WhatsApp Booking
            </a>
          </div>
        </div>
      </section>

      {/* ── TRUST STRIP ── */}
      <div className="border-y border-white/5 bg-white/[0.02] py-4">
        <div className="max-w-6xl mx-auto px-4 flex flex-wrap items-center justify-center gap-x-10 gap-y-2 text-sm text-slate-400">
          <span className="flex items-center gap-1.5"><Star className="w-4 h-4 text-yellow-500 fill-yellow-500" /> 4.9&#9733; Google Rated</span>
          <span className="flex items-center gap-1.5"><Users className="w-4 h-4 text-cyan-400" /> 10,000+ Airport Trips</span>
          <span className="flex items-center gap-1.5"><Shield className="w-4 h-4 text-emerald-400" /> Verified Drivers</span>
          <span className="flex items-center gap-1.5"><Plane className="w-4 h-4 text-sky-400" /> Flight Tracking Included</span>
        </div>
      </div>

      {/* ── FLIGHT ARRIVAL INFO ── */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-cyan-500/10 to-blue-600/10 backdrop-blur-xl rounded-2xl border border-cyan-500/20 p-8 md:p-12">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center shrink-0">
                <Plane className="w-6 h-6 text-cyan-400" />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Our Driver Tracks Your Flight</h2>
                <p className="text-slate-300 text-lg leading-relaxed">
                  No need to worry about delays. Once you share your flight number, we monitor it in real time.
                  If your flight is early or delayed, your driver adjusts automatically. You will find them waiting with a name placard
                  at the arrivals gate of {airport}, ready to help with your luggage.
                </p>
              </div>
            </div>
            <div className="grid sm:grid-cols-3 gap-4 mt-8">
              {[
                { step: '1', label: 'Share Flight Details', sub: 'PNR or flight number at booking' },
                { step: '2', label: 'We Track in Real-Time', sub: 'Driver dispatched based on landing' },
                { step: '3', label: 'Meet at Arrivals', sub: 'Name placard + luggage help' },
              ].map((s) => (
                <div key={s.step} className="bg-white/5 rounded-xl p-5 border border-white/10 text-center">
                  <span className="inline-block w-8 h-8 rounded-full bg-cyan-500 text-white font-bold text-sm leading-8 mb-3">{s.step}</span>
                  <h3 className="font-semibold text-white mb-1">{s.label}</h3>
                  <p className="text-slate-400 text-sm">{s.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── VEHICLE OPTIONS ── */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 text-center">Choose Your Vehicle</h2>
          <p className="text-slate-400 text-center mb-10">{airport} to {city} — all-inclusive pricing</p>
          <div className="grid md:grid-cols-3 gap-6">
            {VEHICLES.map((v) => {
              const price = Math.round(fare * v.multiplier);
              return (
                <div
                  key={v.name}
                  className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 hover:border-cyan-500/30 transition-all duration-300 p-6 group"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white">{v.name}</h3>
                      <p className="text-slate-400 text-sm">{v.desc}</p>
                    </div>
                    <Car className="w-8 h-8 text-cyan-400 group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="text-3xl font-black text-cyan-400 mb-4">&#8377;{price}</div>
                  <div className="space-y-2 text-sm text-slate-300">
                    <div className="flex items-center gap-2"><Users className="w-4 h-4 text-cyan-400" /> {v.seats} Passengers</div>
                    <div className="flex items-center gap-2"><Luggage className="w-4 h-4 text-cyan-400" /> {v.luggage} Bags</div>
                    <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-400" /> AC + Flight Tracking</div>
                  </div>
                  <a
                    href={`https://wa.me/917668570551?text=${encodeURIComponent(`Hi, I want to book a ${v.name} from ${airport} to ${city}. Please confirm.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackWhatsAppClick(`airport_vehicle_${v.name.toLowerCase()}`)}
                    className="mt-6 block w-full text-center bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-semibold py-3 rounded-xl hover:bg-cyan-500/20 transition-all"
                  >
                    Book {v.name} &#8594;
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── WHAT IS INCLUDED ── */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-10 text-center">What&apos;s Included</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {INCLUDES.map((item) => (
              <div key={item.text} className="flex items-start gap-4 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-5">
                <div className="w-10 h-10 rounded-lg bg-cyan-500/15 flex items-center justify-center shrink-0">
                  <item.icon className="w-5 h-5 text-cyan-400" />
                </div>
                <span className="text-slate-200 font-medium">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ SECTION ── */}
      {faqs.length > 0 && (
        <section className="py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-10 text-center">Frequently Asked Questions</h2>
            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <div key={i} className="bg-white/5 backdrop-blur-xl rounded-xl border border-white/10 overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between p-5 text-left"
                    aria-expanded={openFaq === i}
                  >
                    <span className="font-semibold text-white pr-4">{faq.question}</span>
                    <ChevronDown className={`w-5 h-5 text-cyan-400 shrink-0 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
                  </button>
                  {openFaq === i && (
                    <div className="px-5 pb-5 text-slate-300 leading-relaxed border-t border-white/5 pt-4">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── BOTTOM CTA ── */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Book Your {airport} to {city} Cab?
          </h2>
          <p className="text-slate-400 text-lg mb-8">
            Fixed fare &#8377;{fare} &middot; Flight tracking &middot; 24/7 availability &middot; Verified drivers
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+917668570551"
              onClick={() => trackPhoneCall('airport_to_city_cta')}
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold px-10 py-4 rounded-xl hover:shadow-lg hover:shadow-cyan-500/25 transition-all text-lg"
            >
              <Phone className="w-5 h-5" /> Call: +91 7668570551
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick('airport_to_city_cta')}
              className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-10 py-4 rounded-xl transition-all text-lg"
            >
              <WhatsAppIcon className="w-5 h-5" /> WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
