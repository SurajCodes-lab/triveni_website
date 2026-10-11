'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Phone, MessageCircle, MapPin, Users, Star, Shield, ChevronRight, ChevronDown, Mountain, Calendar, IndianRupee, Navigation, Sparkles, ArrowRight, CheckCircle, XCircle, Clock, Sun, Award } from '@/components/ui/icons';
import { inclusions, exclusions, openingDates2026, registrationSteps } from '@/utilis/chardhamYatraData';
import QuickEnquiryForm from '@/components/ui/QuickEnquiryForm';
import { groupDigits } from '@/utilis/pricing';

export default function ChardhamVehicleHubClient({ data }) {
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [activeDay, setActiveDay] = useState(0);

  const { title, vehicle, destination, duration, distance, estimatedPrice, allCarPrices, allBusPrices, allBusOptions, allCarOptions, tempoOptions, itinerary, whyChoose, features, faqs, images, relatedRoutes, destinationData, vehicleType } = data;

  const isBusPage = vehicleType === 'bus35' || vehicleType === 'bus22' || vehicleType === 'bus45';
  const comparisonItems = isBusPage ? allBusOptions : allCarOptions;
  const mountainRating = { sedan: 3, ertiga: 3.5, innova: 4.5, fortuner: 5, suv: 4, bus: 3.5, bus22: 3.5, bus35: 3, bus45: 2.5 };

  const whatsappMsg = encodeURIComponent(`Hello! I want to book a ${vehicle.name} for Char Dham Yatra 2026`);

  // Split the title so the hero H1 carries exactly one gold-foil accent line
  const dashIdx = title.indexOf(' — ');
  const byIdx = dashIdx === -1 ? title.lastIndexOf(' by ') : -1;
  const titleMain = dashIdx > -1 ? title.slice(0, dashIdx) : byIdx > -1 ? title.slice(0, byIdx) : title;
  const titleAccent = dashIdx > -1 ? title.slice(dashIdx + 3) : byIdx > -1 ? title.slice(byIdx + 1) : `by ${vehicle.name}`;

  return (
    <div className="min-h-screen bg-slate-950">
      {/* ===== HERO: Vehicle Spotlight — visible photo, scrim on text side ===== */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <Image
          src={images?.hero || vehicle.image}
          alt={`${destinationData?.fullName || 'Char Dham Yatra'} — ${vehicle.name}`}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Scrim: heavy on the text side, photo stays visible on the right */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/75 to-slate-950/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/40" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 py-14 sm:py-24 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              {/* Breadcrumb */}
              <div className="flex items-center gap-2 text-slate-500 text-sm mb-6">
                <Link href="/" className="hover:text-amber-400 transition-colors">Home</Link>
                <ChevronRight className="w-3 h-3" />
                <Link href="/chardham-yatra" className="hover:text-amber-400 transition-colors">Char Dham Yatra</Link>
                <ChevronRight className="w-3 h-3" />
                <span className="text-amber-400">{vehicle.name}</span>
              </div>

              <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 rounded-full px-4 py-1.5 mb-6">
                <span className="text-amber-400 text-xs font-bold uppercase tracking-wider">{vehicle.category} | {vehicle.seats} Seater</span>
              </div>

              <h1 className="speakable-headline font-display-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 leading-[1.05] tracking-tight">
                {titleMain}{' '}
                <span className="mt-2 block text-gold-foil text-2xl sm:text-3xl md:text-4xl lg:text-5xl">{titleAccent}</span>
              </h1>
              <p className="speakable-lead text-indigo-200/75 text-base md:text-lg mb-3 max-w-2xl leading-relaxed">
                Book the {vehicle.name} ({vehicle.seats}-seater, AC) for Char Dham Yatra 2026 at ₹{groupDigits(vehicle.perKm)}/km — about {estimatedPrice} for the full circuit, with experienced Garhwal hill drivers.
              </p>
              <p className="text-amber-400/80 italic text-lg mb-8">{vehicle.tagline}</p>

              {/* Key Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
                {[
                  { icon: IndianRupee, label: 'Per Km', value: `₹${groupDigits(vehicle.perKm)}` },
                  { icon: Users, label: 'Seats', value: vehicle.seats },
                  { icon: Sun, label: 'Fuel', value: vehicle.fuelType },
                  { icon: Award, label: 'Luggage', value: vehicle.luggage?.split('+')[0]?.trim() || vehicle.luggage },
                ].map((stat, i) => {
                  const Icon = stat.icon;
                  return (
                    <div key={i} className="bg-white/[0.04] backdrop-blur border border-white/10 rounded-xl p-3 text-center">
                      <Icon className="w-4 h-4 text-amber-400 mx-auto mb-1" />
                      <div className="text-white font-bold text-sm">{stat.value}</div>
                      <div className="text-slate-500 text-xs">{stat.label}</div>
                    </div>
                  );
                })}
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <a href="tel:+917668570551" className="sheen flex items-center justify-center gap-2 bg-[#FACF2D] text-slate-900 px-8 py-4 rounded-full font-black shadow-[0_12px_36px_-10px_rgba(250,207,45,0.55)] transition-all hover:bg-amber-300 hover:-translate-y-0.5 lg:w-auto lg:px-5 lg:py-2 lg:text-[13px]">
                  <Phone className="w-5 h-5 lg:w-4 lg:h-4" /> Call 7668570551
                </a>
                <a href={`https://wa.me/917668570551?text=${whatsappMsg}`} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-white/10 backdrop-blur border border-white/20 text-white px-8 py-4 rounded-full font-bold hover:bg-white/20 transition-all lg:w-auto lg:px-5 lg:py-2 lg:text-[13px]">
                  <MessageCircle className="w-5 h-5 text-green-400 lg:w-4 lg:h-4" /> WhatsApp
                </a>
              </div>

              {/* Trust Row */}
              <div className="flex flex-wrap items-center gap-x-5 gap-y-2 mt-7 text-slate-300/90 text-sm">
                <span className="flex items-center gap-1.5"><Star className="w-4 h-4 text-amber-400" /> 4.9&#9733; Rated</span>
                <span className="w-1 h-1 rounded-full bg-white/30" />
                <span className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4 text-emerald-400" /> 10,000+ trips</span>
                <span className="w-1 h-1 rounded-full bg-white/30" />
                <span className="flex items-center gap-1.5"><Shield className="w-4 h-4 text-cyan-400" /> Verified hill drivers</span>
                <span className="w-1 h-1 rounded-full bg-white/30" />
                <span className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4 text-emerald-400" /> No advance payment</span>
              </div>
            </div>

            {/* Right - Vehicle Image */}
            <div
              className="relative"
            >
              <div className="relative h-72 md:h-96 rounded-2xl overflow-hidden border border-white/10">
                <Image src={vehicle.image} alt={`${vehicle.name} for Char Dham Yatra - ${vehicle.seats} seater ${vehicle.category}`} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 to-transparent" />
              </div>
              {/* Floating Badges */}
              <div className="absolute top-4 right-4 bg-amber-500/90 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">{vehicle.seats} Seats</div>
              <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur text-amber-400 text-sm font-bold px-3 py-1.5 rounded-full">₹{groupDigits(vehicle.perKm)}/km</div>
              <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur text-slate-300 text-xs px-3 py-1.5 rounded-full">{vehicle.fuelType}</div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Quick Enquiry Form ===== */}
      <section className="py-16 md:py-24 px-4 bg-slate-950">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white font-display-serif mb-4">Book Your {vehicle.name} for Char Dham</h2>
            <p className="text-slate-400 leading-relaxed">Share your dates and group size — we send a transparent, all-inclusive quote within minutes. No advance payment needed to reserve.</p>
          </div>
          <div className="flex lg:justify-end">
            <QuickEnquiryForm pageType="chardham" />
          </div>
        </div>
      </section>

      {/* ===== Vehicle Gallery ===== */}
      <section className="py-16 md:py-24 px-4 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-white font-display-serif text-center mb-10">Vehicle Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { src: vehicle.image, label: 'Front View' },
              { src: vehicle.sideImage, label: 'Side Profile' },
              { src: vehicle.interiorImage, label: 'Interior' },
              { src: vehicle.backImage, label: 'Rear View' },
            ].map((img, i) => (
              <div key={i}
                className="relative h-40 md:h-48 rounded-xl overflow-hidden border border-white/10 group"
              >
                <Image src={img.src} alt={`${vehicle.name} ${img.label} - Char Dham Yatra vehicle`} fill className="object-cover group-hover:scale-110 transition-transform duration-500" sizes="(max-width: 768px) 50vw, 25vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="absolute bottom-2 left-2 text-white text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity">{img.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Vehicle Specs Dashboard ===== */}
      <section className="py-16 md:py-24 px-4 bg-slate-950">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-white font-display-serif text-center mb-10">Vehicle Specifications</h2>
          <div className="bg-white/[0.03] border border-amber-500/20 rounded-2xl p-6 md:p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { label: 'Seats', value: vehicle.seats, icon: Users },
                { label: 'Luggage', value: vehicle.luggage, icon: Award },
                { label: 'Fuel Type', value: vehicle.fuelType, icon: Sun },
                { label: 'Transmission', value: vehicle.transmission, icon: Navigation },
                { label: 'AC', value: vehicle.ac ? 'Yes - Powerful AC' : 'No', icon: Sun },
                { label: 'Per Km (Outstation)', value: `₹${groupDigits(vehicle.perKm)}`, icon: IndianRupee },
                { label: 'Per Km (Local)', value: `₹${groupDigits(vehicle.localPerKm || vehicle.perKm + 2)}`, icon: IndianRupee },
                { label: 'Best For', value: vehicle.bestFor, icon: Star },
              ].map((spec, i) => {
                const Icon = spec.icon;
                return (
                  <div key={i} className="text-center">
                    <div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center mx-auto mb-2">
                      <Icon className="w-5 h-5 text-amber-400" />
                    </div>
                    <div className="text-white font-bold text-sm">{spec.value}</div>
                    <div className="text-slate-500 text-xs mt-1">{spec.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
          <p className="text-slate-400 text-center mt-6 leading-relaxed max-w-3xl mx-auto">{vehicle.description}</p>
        </div>
      </section>

      {/* ===== Vehicle Comparison ===== */}
      <section className="py-16 md:py-24 px-4 bg-slate-900/30">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-white font-display-serif text-center mb-4">Complete Vehicle Comparison</h2>
          <p className="text-slate-400 text-center mb-10">Compare {vehicle.name} with other {isBusPage ? 'bus' : 'car'} options for Char Dham Yatra</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {(isBusPage ? allBusOptions : [...allCarOptions, ...tempoOptions.slice(0, 2)]).map((item, idx) => {
              const isCurrent = item.name?.includes(vehicle.name?.split(' ')[0]) || item.type === vehicleType;
              return (
                <div key={idx}
                  className={`bg-white/[0.04] border ${isCurrent ? 'border-amber-500/40 ring-1 ring-amber-500/20' : 'border-white/10'} rounded-xl p-5 relative`}
                >
                  {isCurrent && <span className="absolute -top-2 left-4 bg-amber-500 text-white text-[10px] font-bold px-3 py-0.5 rounded-full uppercase">Current</span>}
                  <div className="relative h-28 rounded-lg overflow-hidden mb-4">
                    <Image src={item.image} alt={`${item.name} for Char Dham Yatra`} fill className="object-cover" sizes="(max-width: 640px) 100vw, 33vw" />
                  </div>
                  <h3 className="text-white font-bold text-sm mb-2">{item.name}</h3>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-slate-400 text-xs">{item.seats} Seats</span>
                    <span className="text-amber-400 font-bold text-sm">₹{groupDigits(item.perKm)}/km</span>
                  </div>
                  <div className="flex items-center gap-0.5">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <Star key={s} className={`w-3 h-3 ${s < Math.floor(mountainRating[item.type] || 3.5) ? 'text-amber-400' : 'text-slate-700'}`} />
                    ))}
                    <span className="text-slate-500 text-xs ml-1">Mountain</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Section CTA strip */}
          <div className="mt-10 bg-gradient-to-r from-amber-600/15 to-amber-700/10 border border-amber-500/25 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-white font-semibold text-center sm:text-left">Ready to book the {vehicle.name} or compare another vehicle? Get a free Char Dham quote.</p>
            <div className="flex items-center gap-3">
              <a href="tel:+917668570551" className="flex items-center gap-2 bg-gradient-to-r from-amber-600 to-amber-700 text-white px-6 py-3 rounded-full font-bold text-sm hover:scale-105 transition-all">
                <Phone className="w-4 h-4" /> Call Now
              </a>
              <a href={`https://wa.me/917668570551?text=${whatsappMsg}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-white/10 border border-amber-500/30 text-amber-200 px-6 py-3 rounded-full font-bold text-sm hover:bg-white/20 transition-all">
                <MessageCircle className="w-4 h-4 text-green-400" /> WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Itinerary (Horizontal on desktop) ===== */}
      {itinerary.length > 0 && (
        <section className="py-16 md:py-24 px-4 bg-slate-950">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-white font-display-serif text-center mb-10">Sample {duration} Itinerary</h2>

            {/* Day Selector */}
            <div className="flex flex-wrap gap-2 mb-8 pb-2">
              {itinerary.map((item, idx) => (
                <button key={idx} onClick={() => setActiveDay(idx)}
                  className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all ${activeDay === idx ? 'bg-amber-500 text-white' : 'bg-white/5 text-slate-400 hover:bg-white/10'}`}
                >
                  {item.day}
                </button>
              ))}
            </div>

            {/* Active Day Detail */}
            <div
              className="bg-white/[0.04] border border-amber-500/20 rounded-2xl p-6 md:p-8"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-[#FACF2D] text-slate-900 text-sm font-bold px-3 py-1 rounded-full">{itinerary[activeDay].day}</span>
                <h3 className="text-white font-bold text-xl">{itinerary[activeDay].title}</h3>
              </div>
              <p className="text-slate-300 leading-relaxed">{itinerary[activeDay].desc}</p>
            </div>
          </div>
        </section>
      )}

      {/* ===== Why Choose ===== */}
      <section className="py-16 md:py-24 px-4 bg-slate-900/30">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-white font-display-serif text-center mb-10">Why Choose {vehicle.name} for Char Dham</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {whyChoose.map((item, idx) => (
              <div key={idx}
                className="bg-white/[0.03] border-l-4 border-l-amber-500 border border-slate-800 rounded-r-xl p-5"
              >
                <h3 className="text-white font-bold mb-2">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{item.desc || item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Features ===== */}
      <section className="py-12 px-4 bg-slate-950">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-xl font-bold text-amber-400 uppercase tracking-wider mb-6">Vehicle Features & Amenities</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {features.map((f, i) => (
              <span key={i} className="bg-amber-500/10 text-amber-300 text-sm px-4 py-2 rounded-full border border-amber-500/20">
                <CheckCircle className="w-3 h-3 inline mr-1" />{f}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 2026 Opening Dates — warm-light ledger band ===== */}
      <section className="py-16 md:py-24 px-4 bg-gradient-to-b from-[#FFF6DC] via-amber-50/70 to-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-black text-slate-900 font-display-serif text-center mb-3">Char Dham Yatra 2026 Opening Dates</h2>
          <p className="text-slate-600 text-center mb-10">Plan your {vehicle.name} booking around the kapat opening dates</p>
          {/* Desktop table */}
          <div className="hidden md:block rounded-2xl border border-amber-300/60 bg-white overflow-hidden shadow-[0_20px_60px_-30px_rgba(184,134,11,0.35)]">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-amber-300/50 bg-amber-100/60">
                  <th className="py-3 px-4 text-amber-900 font-bold">Dham</th>
                  <th className="py-3 px-4 text-amber-900 font-bold">Altitude</th>
                  <th className="py-3 px-4 text-amber-900 font-bold">Opening 2026</th>
                  <th className="py-3 px-4 text-amber-900 font-bold">Closing 2026</th>
                  <th className="py-3 px-4 text-amber-900 font-bold">Base Camp</th>
                </tr>
              </thead>
              <tbody>
                {openingDates2026.map((d, i) => (
                  <tr key={i} className="border-b border-amber-100 hover:bg-amber-50/70 transition-colors">
                    <td className="py-4 px-4 text-slate-900 font-semibold">{d.dham}</td>
                    <td className="py-4 px-4 text-amber-700 font-bold">{d.altitude}</td>
                    <td className="py-4 px-4 text-emerald-700">{d.opening}</td>
                    <td className="py-4 px-4 text-rose-700/80">{d.closing}</td>
                    <td className="py-4 px-4 text-slate-600">{d.base}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* Mobile stacked cards */}
          <div className="space-y-3 md:hidden">
            {openingDates2026.map((d, i) => (
              <div key={i} className="rounded-2xl border border-amber-200/60 bg-white p-4 shadow-sm">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-display-serif text-base font-bold text-slate-900">{d.dham}</span>
                  <span className="text-xs font-bold text-amber-700">{d.altitude}</span>
                </div>
                <p className="text-xs text-emerald-700">Opens: {d.opening}</p>
                <p className="text-xs text-rose-700/80">Closes: {d.closing}</p>
                <p className="mt-1 text-xs text-slate-500">Base camp: {d.base}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== What's Included + Registration ===== */}
      <section className="py-16 md:py-24 px-4 bg-slate-950">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white font-display-serif mb-6">What’s Included with Your {vehicle.name}</h2>
            <div className="bg-white/[0.03] border border-emerald-500/20 rounded-xl p-5 mb-4">
              <h3 className="text-emerald-400 font-bold mb-3 flex items-center gap-2 text-sm"><CheckCircle className="w-4 h-4" /> Included</h3>
              <ul className="space-y-2">
                {inclusions.slice(0, 6).map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-slate-300/80 text-sm"><CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />{item}</li>
                ))}
              </ul>
            </div>
            <div className="bg-white/[0.03] border border-rose-500/20 rounded-xl p-5">
              <h3 className="text-rose-400 font-bold mb-3 flex items-center gap-2 text-sm"><XCircle className="w-4 h-4" /> Not Included</h3>
              <ul className="space-y-2">
                {exclusions.slice(0, 5).map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-slate-300/80 text-sm"><XCircle className="w-4 h-4 text-rose-400 flex-shrink-0 mt-0.5" />{item}</li>
                ))}
              </ul>
            </div>
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white font-display-serif mb-6">Registration &amp; Biometric (2026)</h2>
            <div className="space-y-3">
              {registrationSteps.map((step, i) => (
                <div key={i} className="flex gap-3 bg-white/[0.03] border border-white/10 rounded-xl p-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-amber-600 to-amber-700 flex items-center justify-center text-white font-bold text-xs">{i + 1}</div>
                  <div>
                    <h3 className="text-white font-semibold text-sm mb-1">{step.name}</h3>
                    <p className="text-slate-400 text-xs leading-relaxed">{step.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== FAQs ===== */}
      <section className="py-16 md:py-24 px-4 bg-slate-900/30">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-white font-display-serif text-center mb-10">Frequently Asked Questions</h2>
          <div className="grid gap-3 md:grid-cols-2 md:items-start">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-white/[0.03] backdrop-blur border border-white/10 rounded-xl overflow-hidden">
                <h3 className="m-0">
                <button onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)} aria-expanded={expandedFaq === idx} className="w-full flex items-center justify-between p-5 text-left">
                  <span className="text-white font-semibold text-sm pr-4">{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 text-[#FACF2D] shrink-0 transition-transform ${expandedFaq === idx ? 'rotate-180' : ''}`} />
                </button>
                </h3>
                {expandedFaq === idx && (
                  <p className={`px-5 pb-5 text-slate-400 text-sm leading-relaxed${idx === 0 ? ' speakable-faq-first' : ''}`}>{faq.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Cross Links ===== */}
      <section className="py-12 px-4 bg-slate-950">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xl font-bold text-white text-center mb-8">Also Explore</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { title: 'Tempo Traveller Options', desc: '12-26 seater for groups', href: '/tempo-traveller', icon: Users },
              { title: 'All Vehicle Hire', desc: 'Complete fleet catalog', href: '/vehicles', icon: Navigation },
              { title: 'Char Dham Tour Package', desc: 'All-inclusive package', href: '/tour-package/chardham-yatra-package', icon: Star },
            ].map((link, i) => {
              const Icon = link.icon;
              return (
                <Link key={i} href={link.href} className="bg-white/[0.03] border border-white/10 rounded-xl p-5 hover:border-amber-500/30 transition-all group">
                  <Icon className="w-5 h-5 text-amber-400 mb-3" />
                  <h3 className="text-white font-bold text-sm mb-1 group-hover:text-amber-400 transition-colors">{link.title}</h3>
                  <p className="text-slate-500 text-xs">{link.desc}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== SEO Content ===== */}
      <section className="py-16 md:py-24 px-4 bg-slate-900/20 border-t border-white/5">
        <div className="max-w-4xl mx-auto prose prose-invert">
          <h2 className="text-2xl font-bold text-white font-display-serif">{vehicle.name} for Char Dham Yatra — Complete Guide</h2>
          <p className="text-slate-300 leading-relaxed">
            The {vehicle.name} is {vehicleType === 'sedan' ? 'the most affordable' : vehicleType === 'ertiga' ? 'the best family' : vehicleType === 'fortuner' ? 'the most premium' : vehicleType === 'innova' ? 'India’s most popular' : 'an excellent'} vehicle for Char Dham Yatra, offering {vehicle.seats} seats at just ₹{groupDigits(vehicle.perKm)}/km. The {destinationData.fullName} circuit covers all four sacred temples — Yamunotri, Gangotri, Kedarnath, and Badrinath — across the majestic Garhwal Himalayas of Uttarakhand.
          </p>
          <p className="text-slate-300 leading-relaxed">
            With our experienced hill drivers, your {vehicle.name} journey covers approximately {distance} with {duration} of comfortable travel. Every booking includes fuel, tolls, driver charges, and 24/7 trip support. Compare with other options on our <Link href="/chardham-yatra" className="text-amber-400 underline">Char Dham Yatra hub page</Link>, or explore <Link href="/tempo-traveller" className="text-amber-400 underline">tempo traveller options</Link> for larger groups. Call <a href="tel:+917668570551" className="text-amber-400">7668570551</a> to book.
          </p>
        </div>
      </section>

      {/* ===== Final CTA — gold-foil band ===== */}
      <section className="py-16 md:py-24 px-4 bg-gradient-to-br from-orange-600 via-amber-600 to-[#FACF2D]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-[#1a1206] font-display-serif mb-6">Book Your {vehicle.name} for Char Dham</h2>
          <p className="text-[#2a1d06]/85 text-lg mb-10">Starting from {estimatedPrice} | {duration} | {vehicle.seats} Seater | Experienced Driver</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="tel:+917668570551" className="flex items-center gap-3 bg-[#1a1206] text-white px-10 py-4 rounded-full font-bold text-lg shadow-xl hover:bg-black hover:-translate-y-0.5 transition-all lg:w-auto lg:px-5 lg:py-2 lg:text-[13px]">
              <Phone className="w-5 h-5 text-amber-300 lg:w-4 lg:h-4" /> Call 7668570551
            </a>
            <a href={`https://wa.me/917668570551?text=${whatsappMsg}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 bg-white text-[#1a1206] px-10 py-4 rounded-full font-bold text-lg shadow-xl hover:bg-amber-50 hover:-translate-y-0.5 transition-all lg:w-auto lg:px-5 lg:py-2 lg:text-[13px]">
              <MessageCircle className="w-5 h-5 text-green-600 lg:w-4 lg:h-4" /> WhatsApp Booking
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
