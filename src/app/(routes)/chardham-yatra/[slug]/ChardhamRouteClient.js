'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Phone, MessageCircle, MapPin, Users, Star, Shield, ChevronRight, ChevronDown, Mountain, Calendar, IndianRupee, Navigation, Sparkles, ArrowRight, CheckCircle, XCircle, Clock, Sun, Award, Route, Fuel, Compass, Bus } from '@/components/ui/icons';
import { registrationSteps, packingTips, seasonGuide, inclusions, exclusions } from '@/utilis/chardhamYatraData';
import QuickEnquiryForm from '@/components/ui/QuickEnquiryForm';
import { groupDigits } from '@/utilis/pricing';

// ============================================================================
// CHARDHAM ROUTE CLIENT — "Sacred Journey" · Ultra-Premium v2
// Color: deep slate base + saffron/gold accents (reverent night palette)
// Used by 20 route-specific pages (Delhi/Haridwar/Dehradun/Rishikesh → Dhams)
// ============================================================================

export default function ChardhamRouteClient({ data }) {
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [activeItineraryDay, setActiveItineraryDay] = useState(0);
  const [showAllVehicles, setShowAllVehicles] = useState(false);

  const { title, vehicle, origin, originKey, destination, destinationData, duration, distance, distanceKm, estimatedPrice, allCarPrices, allBusPrices, allBusOptions, allCarOptions, tempoOptions, itinerary, whyChoose, features, faqs, images, relatedRoutes, vehicleType } = data;

  const isBusRoute = vehicleType === 'bus35' || vehicleType === 'bus22' || vehicleType === 'bus45';
  const whatsappMsg = encodeURIComponent(`Hello! I want to book ${origin} to ${destination} Char Dham Yatra 2026`);

  // Split the title so the hero H1 carries exactly one gold-foil accent line
  const dashIdx = title.indexOf(' — ');
  const byIdx = dashIdx === -1 ? title.lastIndexOf(' by ') : -1;
  const titleMain = dashIdx > -1 ? title.slice(0, dashIdx) : byIdx > -1 ? title.slice(0, byIdx) : title;
  const titleAccent = dashIdx > -1 ? title.slice(dashIdx + 3) : byIdx > -1 ? title.slice(byIdx + 1) : `by ${vehicle.name}`;

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* ===== HERO: Panoramic Journey Banner ===== */}
      <section className="relative min-h-[85vh] flex items-end overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image src={images.hero} alt={title} fill sizes="100vw" className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-950/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 pb-10 sm:pb-16 pt-16 sm:pt-32 w-full">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-slate-400/60 text-sm mb-6">
            <Link href="/" className="hover:text-orange-400 transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <Link href="/chardham-yatra" className="hover:text-orange-400 transition-colors">Char Dham Yatra</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-orange-400">{origin} to {destination}</span>
          </div>

          <div className="max-w-3xl">
            {/* Route badge */}
            <div
              className="inline-flex items-center gap-2 bg-orange-500/15 border border-orange-500/30 rounded-full px-5 py-2 mb-6"
            >
              <Route className="w-4 h-4 text-orange-400" />
              <span className="text-orange-300 text-sm font-semibold tracking-wide">{origin} → {destination} | {duration}</span>
            </div>

            <h1
              className="speakable-headline font-display-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-[1.05] tracking-tight"
            >
              {titleMain}{' '}
              <span className="mt-2 block text-gold-foil text-2xl sm:text-3xl md:text-4xl lg:text-5xl">{titleAccent}</span>
            </h1>

            <p
              className="speakable-lead text-slate-100/75 text-base md:text-lg mb-8 max-w-2xl leading-relaxed"
            >
              {origin} to {destination} by {vehicle.name} costs from {estimatedPrice} (₹{groupDigits(vehicle.perKm)}/km) for a {duration} trip covering {distance}. Fare includes vehicle, fuel, driver and tolls. Experienced Char Dham hill drivers, daytime-only driving and 24/7 support.
            </p>

            {/* Quick stats bar */}
            <div
              className="flex flex-wrap gap-3 mb-8"
            >
              {[
                { icon: Navigation, label: distance, color: 'text-cyan-400' },
                { icon: Calendar, label: duration, color: 'text-emerald-400' },
                { icon: IndianRupee, label: `From ${estimatedPrice}`, color: 'text-orange-400' },
                { icon: Users, label: `${vehicle.seats} Seater`, color: 'text-slate-300' },
              ].map((stat, i) => (
                <div key={i} className="flex items-center gap-2 bg-white/5 backdrop-blur-sm rounded-full px-4 py-2 border border-white/10">
                  <stat.icon className={`w-4 h-4 ${stat.color}`} />
                  <span className="text-white/80 text-sm">{stat.label}</span>
                </div>
              ))}
            </div>

            {/* CTA buttons */}
            <div
              className="flex flex-wrap gap-4"
            >
              <a href="tel:+917668570551" className="sheen inline-flex items-center gap-2 bg-[#FACF2D] text-slate-900 px-8 py-3.5 rounded-full font-black text-lg shadow-[0_12px_36px_-10px_rgba(250,207,45,0.55)] transition-all hover:bg-amber-300 hover:-translate-y-0.5 lg:w-auto lg:px-5 lg:py-2 lg:text-[13px]">
                <Phone className="w-5 h-5 lg:w-4 lg:h-4" /> Book Now — 7668570551
              </a>
              <a href={`https://wa.me/917668570551?text=${whatsappMsg}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border border-white/20 bg-white/10 backdrop-blur-md text-white px-8 py-3.5 rounded-full font-bold text-lg hover:bg-white/20 transition-all lg:w-auto lg:px-5 lg:py-2 lg:text-[13px]">
                <MessageCircle className="w-5 h-5 text-green-400 lg:w-4 lg:h-4" /> WhatsApp
              </a>
            </div>

            {/* Trust Row */}
            <div
              className="flex flex-wrap items-center gap-x-5 gap-y-2 mt-7 text-white/80 text-sm"
            >
              <span className="flex items-center gap-1.5"><Star className="w-4 h-4 text-orange-400" /> 4.9&#9733; Rated</span>
              <span className="w-1 h-1 rounded-full bg-white/30" />
              <span className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4 text-emerald-400" /> 10,000+ trips</span>
              <span className="w-1 h-1 rounded-full bg-white/30" />
              <span className="flex items-center gap-1.5"><Shield className="w-4 h-4 text-cyan-400" /> Verified hill drivers</span>
              <span className="w-1 h-1 rounded-full bg-white/30" />
              <span className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4 text-emerald-400" /> No advance payment</span>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Quick Enquiry Form ===== */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white font-display-serif mb-4">Get a Free {origin} to {destination} Quote</h2>
            <p className="text-slate-100/75 leading-relaxed">Tell us your dates and group size for a transparent, all-inclusive fare within minutes. No advance payment needed to reserve your vehicle.</p>
          </div>
          <div className="flex lg:justify-end">
            <QuickEnquiryForm fromCity={origin} toCity={destination} pageType="chardham" />
          </div>
        </div>
      </section>

      {/* ===== SECTION 2: Route Gallery Strip ===== */}
      <section className="py-6 bg-slate-950/50 border-y border-slate-800/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {images.gallery.map((img, i) => (
              <div
                key={i}
                className="relative h-40 rounded-xl overflow-hidden group"
              >
                <Image src={img} alt={`${destination} route highlight ${i + 1}`} fill sizes="(max-width: 768px) 50vw, 33vw" className="object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SECTION 3: Multi-Vehicle Pricing Comparison ===== */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-orange-400 text-sm font-bold tracking-widest uppercase">Choose Your Vehicle</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white font-display-serif mt-3">{origin} to {destination} — Vehicle Options</h2>
            <p className="text-slate-300/60 mt-3 max-w-2xl mx-auto">Compare all available vehicles for your sacred journey. Prices include vehicle, fuel, driver, and tolls.</p>
          </div>

          {/* Car options */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
            {allCarPrices.map((car, i) => (
              <div
                key={i}
                className={`relative rounded-2xl overflow-hidden border transition-all duration-300 group ${
                  car.type === vehicleType
                    ? 'bg-orange-500/10 border-orange-500/40 ring-1 ring-orange-500/20'
                    : 'bg-white/5 border-white/10 hover:border-slate-500/30'
                }`}
              >
                {car.type === vehicleType && (
                  <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-orange-500 to-amber-500 text-white text-xs font-bold text-center py-1">
                    RECOMMENDED
                  </div>
                )}
                <div className="p-5 pt-8">
                  <div className="relative h-32 mb-4">
                    <Image src={car.image} alt={car.name} fill sizes="(max-width: 768px) 50vw, 25vw" className="object-contain group-hover:scale-105 transition-transform" />
                  </div>
                  <h3 className="text-white font-bold text-lg">{car.name}</h3>
                  <p className="text-slate-400/60 text-sm">{car.category} | {car.seats} Seater</p>
                  <div className="mt-4 flex items-baseline gap-1">
                    <span className="text-2xl font-black text-gold-foil tabular-nums">{car.estimatedPrice}</span>
                  </div>
                  <p className="text-slate-400/50 text-xs mt-1">₹{groupDigits(car.perKm)}/km × {distanceKm} km + driver</p>
                  <div className="mt-4 grid grid-cols-2 gap-2 text-xs">
                    <div className="flex items-center gap-1 text-slate-300/70"><Fuel className="w-3 h-3" />{car.fuelType}</div>
                    <div className="flex items-center gap-1 text-slate-300/70"><Users className="w-3 h-3" />{car.seats} seats</div>
                  </div>
                  <a href="tel:+917668570551" className="mt-4 block text-center bg-white/10 hover:bg-orange-500 text-white py-2.5 rounded-xl font-semibold text-sm transition-all">
                    Book {car.name}
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Bus & Tempo toggle */}
          <div className="text-center">
            <button
              onClick={() => setShowAllVehicles(!showAllVehicles)}
              className="inline-flex items-center gap-2 text-slate-300 hover:text-orange-400 transition-colors text-sm"
            >
              <Bus className="w-4 h-4" />
              {showAllVehicles ? 'Hide' : 'Show'} Bus & Tempo Options
              <ChevronDown className={`w-4 h-4 transition-transform ${showAllVehicles ? 'rotate-180' : ''}`} />
            </button>
          </div>

          <>
            {showAllVehicles && (
              <div
                className="overflow-hidden"
              >
                {/* Bus options */}
                <h3 className="text-white font-bold text-xl mt-10 mb-5 flex items-center gap-2">
                  <Bus className="w-5 h-5 text-slate-400" /> Bus Options (Group Travel)
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
                  {allBusPrices.map((bus, i) => (
                    <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-4 hover:border-slate-500/30 transition-all">
                      <div className="relative h-24 mb-3">
                        <Image src={bus.image} alt={bus.name} fill sizes="(max-width: 768px) 50vw, 25vw" className="object-contain" />
                      </div>
                      <h4 className="text-white font-semibold">{bus.name}</h4>
                      <p className="text-slate-400/60 text-sm">{bus.seats} Seater | ₹{groupDigits(bus.perKm)}/km</p>
                      <p className="text-[#FACF2D] font-bold mt-2">{bus.estimatedPrice}</p>
                      <a href="tel:+917668570551" className="mt-3 block text-center bg-white/10 hover:bg-slate-600 text-white py-2 rounded-lg text-sm transition-all">
                        Book Bus
                      </a>
                    </div>
                  ))}
                </div>

                {/* Tempo cross-links */}
                <h3 className="text-white font-bold text-xl mb-5 flex items-center gap-2">
                  <Navigation className="w-5 h-5 text-slate-400" /> Tempo Traveller Options
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                  {tempoOptions.map((tempo, i) => (
                    <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-4 text-center hover:border-slate-500/30 transition-all">
                      <div className="relative h-20 mb-2">
                        <Image src={tempo.image} alt={tempo.name} fill sizes="(max-width: 768px) 50vw, 25vw" className="object-contain" />
                      </div>
                      <p className="text-white font-semibold text-sm">{tempo.name}</p>
                      <p className="text-slate-400/60 text-xs">₹{groupDigits(tempo.perKm)}/km</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </>
        </div>
      </section>

      {/* ===== SECTION 4: Day-by-Day Itinerary Timeline ===== */}
      {itinerary.length > 0 && (
        <section className="py-16 md:py-24 bg-gradient-to-b from-slate-950/50 to-slate-900/50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-14">
              <span className="text-emerald-400 text-sm font-bold tracking-widest uppercase">Your Journey</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white font-display-serif mt-3">Day-by-Day Itinerary</h2>
              <p className="text-slate-300/60 mt-3">{origin} to {destination} | {duration} | {distance}</p>
            </div>

            {/* Day selector tabs */}
            <div className="flex flex-wrap gap-2 pb-4 mb-8">
              {itinerary.map((day, i) => (
                <button
                  key={i}
                  onClick={() => setActiveItineraryDay(i)}
                  className={`flex-shrink-0 px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${
                    activeItineraryDay === i
                      ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-lg shadow-orange-500/20'
                      : 'bg-white/5 text-slate-300/70 hover:bg-white/10 border border-white/10'
                  }`}
                >
                  {day.day}
                </button>
              ))}
            </div>

            {/* Active day content */}
            <div
              className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-8"
            >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center">
                    <span className="text-white font-bold text-lg">{itinerary[activeItineraryDay].day.replace('Day ', '')}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-3">{itinerary[activeItineraryDay].title}</h3>
                    <p className="text-slate-200/70 leading-relaxed">{itinerary[activeItineraryDay].desc}</p>
                  </div>
                </div>
            </div>

            {/* Full timeline (collapsed) */}
            <div className="mt-8 space-y-3">
              {itinerary.map((day, i) => (
                <div
                  key={i}
                  className={`flex items-center gap-4 p-4 rounded-xl transition-all cursor-pointer ${
                    activeItineraryDay === i ? 'bg-orange-500/10 border border-orange-500/30' : 'bg-white/[0.02] hover:bg-white/5 border border-transparent'
                  }`}
                  onClick={() => setActiveItineraryDay(i)}
                >
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold ${
                    activeItineraryDay === i ? 'bg-orange-500 text-white' : 'bg-white/10 text-slate-300'
                  }`}>
                    {i + 1}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className={`font-semibold truncate ${activeItineraryDay === i ? 'text-orange-300' : 'text-white/80'}`}>{day.title}</p>
                  </div>
                  <ChevronRight className={`w-4 h-4 flex-shrink-0 ${activeItineraryDay === i ? 'text-orange-400' : 'text-slate-500'}`} />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ===== SECTION 5: Why Choose This Route ===== */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-orange-400 text-sm font-bold tracking-widest uppercase">Why Choose Us</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white font-display-serif mt-3">Why Book {origin} to {destination} with Triveni Cabs™</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChoose.map((item, i) => {
              const icons = [Shield, Star, Award, Mountain, Compass, Sparkles, CheckCircle, Clock];
              const Icon = icons[i % icons.length];
              const gradients = [
                'from-orange-500/20 to-amber-500/20',
                'from-slate-500/20 to-cyan-500/20',
                'from-emerald-500/20 to-green-500/20',
                'from-violet-500/20 to-purple-500/20',
                'from-rose-500/20 to-pink-500/20',
                'from-sky-500/20 to-blue-500/20',
              ];
              return (
                <div
                  key={i}
                  className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-6 hover:border-orange-500/30 transition-all group"
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${gradients[i % gradients.length]} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-slate-300/60 text-sm leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== SECTION 6: Origin City Highlights ===== */}
      {data.originData && (
        <section className="py-16 md:py-24 bg-gradient-to-r from-slate-950/80 to-slate-900/80">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-slate-400 text-sm font-bold tracking-widest uppercase">Starting Point</span>
                <h2 className="text-3xl md:text-4xl font-bold text-white font-display-serif mt-3 mb-6">Starting from {origin}</h2>
                <p className="text-slate-200/70 leading-relaxed mb-8">{data.originData.description}</p>
                <div className="grid grid-cols-2 gap-3">
                  {data.originData.highlights.map((highlight, i) => (
                    <div key={i} className="flex items-center gap-2 bg-white/5 rounded-lg px-4 py-3 border border-white/10">
                      <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                      <span className="text-white/80 text-sm">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {images.gallery.map((img, i) => (
                  <div key={i} className={`relative overflow-hidden rounded-2xl ${i === 0 ? 'row-span-2 h-full min-h-[280px]' : 'h-36'}`}>
                    <Image src={img} alt={`${origin} highlight ${i + 1}`} fill sizes="(max-width: 768px) 50vw, 33vw" className="object-cover hover:scale-110 transition-transform duration-700" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ===== SECTION: Transparent Fare Breakdown — warm-light ledger band ===== */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-[#FFF6DC] via-amber-50/70 to-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-amber-700 text-sm font-bold tracking-widest uppercase">Transparent Pricing</span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 font-display-serif mt-3">{origin} to {destination} Fare Breakdown</h2>
            <p className="text-slate-600 mt-3">All vehicle estimates for {distance} — vehicle, fuel, driver &amp; tolls included (GST 5% extra)</p>
          </div>
          {/* Desktop ledger table */}
          <div className="hidden md:block rounded-2xl border border-amber-300/60 bg-white overflow-hidden shadow-[0_20px_60px_-30px_rgba(184,134,11,0.35)]">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-amber-300/50 bg-amber-100/60">
                  <th className="p-4 text-amber-900 font-bold">Vehicle</th>
                  <th className="p-4 text-amber-900 font-bold text-center">Seats</th>
                  <th className="p-4 text-amber-900 font-bold text-center">Per Km</th>
                  <th className="p-4 text-amber-900 font-bold text-center">Est. Total ({duration})</th>
                </tr>
              </thead>
              <tbody>
                {allCarPrices.map((car, i) => (
                  <tr key={i} className={`border-b border-amber-100 hover:bg-amber-50/70 transition-colors ${car.type === vehicleType ? 'bg-amber-50' : ''}`}>
                    <td className="p-4 text-slate-900 font-medium">
                      {car.name}
                      {car.type === vehicleType && <span className="ml-2 bg-[#FACF2D] text-slate-900 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">Recommended</span>}
                    </td>
                    <td className="p-4 text-center text-slate-600">{car.seats}</td>
                    <td className="p-4 text-center text-slate-600">₹{groupDigits(car.perKm)}</td>
                    <td className="p-4 text-center text-amber-700 font-black tabular-nums">{car.estimatedPrice}</td>
                  </tr>
                ))}
                {allBusPrices.map((bus, i) => (
                  <tr key={`b${i}`} className="border-b border-amber-100 hover:bg-amber-50/70 transition-colors">
                    <td className="p-4 text-slate-900 font-medium">{bus.name}</td>
                    <td className="p-4 text-center text-slate-600">{bus.seats}</td>
                    <td className="p-4 text-center text-slate-600">₹{groupDigits(bus.perKm)}</td>
                    <td className="p-4 text-center text-amber-700 font-black tabular-nums">{bus.estimatedPrice}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* Mobile stacked cards */}
          <div className="space-y-3 md:hidden">
            {[...allCarPrices, ...allBusPrices].map((v, i) => (
              <div key={i} className={`rounded-2xl border bg-white p-4 shadow-sm ${v.type === vehicleType ? 'border-amber-400/70' : 'border-amber-200/60'}`}>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-bold text-slate-900">
                    {v.name}
                    {v.type === vehicleType && <span className="ml-2 bg-[#FACF2D] text-slate-900 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">Recommended</span>}
                  </span>
                  <span className="text-sm font-black text-amber-700 tabular-nums">{v.estimatedPrice}</span>
                </div>
                <p className="text-xs text-slate-500">{v.seats} seats · ₹{groupDigits(v.perKm)}/km</p>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-8">
            <div className="bg-white border border-emerald-300/60 rounded-xl p-5 shadow-sm">
              <h3 className="text-emerald-700 font-bold mb-3 flex items-center gap-2 text-sm"><CheckCircle className="w-4 h-4" /> Included in Fare</h3>
              <ul className="space-y-2">
                {inclusions.slice(0, 6).map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-slate-700 text-sm"><CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />{item}</li>
                ))}
              </ul>
            </div>
            <div className="bg-white border border-rose-300/60 rounded-xl p-5 shadow-sm">
              <h3 className="text-rose-700 font-bold mb-3 flex items-center gap-2 text-sm"><XCircle className="w-4 h-4" /> Not Included</h3>
              <ul className="space-y-2">
                {exclusions.slice(0, 5).map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-slate-700 text-sm"><XCircle className="w-4 h-4 text-rose-600 flex-shrink-0 mt-0.5" />{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION: Registration & Biometric Steps ===== */}
      <section className="py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-orange-400 text-sm font-bold tracking-widest uppercase">Mandatory in 2026</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white font-display-serif mt-3">Char Dham Registration &amp; Biometric Steps</h2>
            <p className="text-slate-300/60 mt-3">We assist with the full process at no extra cost</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {registrationSteps.map((step, i) => (
              <div key={i}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-orange-500/30 transition-all"
              >
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center text-white font-bold text-sm mb-3">{i + 1}</div>
                <h3 className="text-white font-semibold mb-2">{step.name}</h3>
                <p className="text-slate-100/60 text-sm leading-relaxed">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SECTION: What to Pack & Season Guide ===== */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-slate-900/40 to-slate-950/40">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white font-display-serif mb-6">What to Pack for {destination}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {packingTips.map((tip, i) => (
                <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-4">
                  <h3 className="text-orange-300 font-semibold text-sm mb-1">{tip.title}</h3>
                  <p className="text-slate-100/60 text-xs leading-relaxed">{tip.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white font-display-serif mb-6">Season &amp; Weather Guide</h2>
            <div className="space-y-3">
              {seasonGuide.map((s, i) => (
                <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-4">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-white font-semibold text-sm">{s.period}</span>
                    <span className="text-xs font-bold text-orange-400">{s.label}</span>
                  </div>
                  <p className="text-slate-100/60 text-sm">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 7: SEO Content Block ===== */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white font-display-serif mb-8">{origin} to {destination} by {vehicle.name} — Complete Guide</h2>

            <div className="prose prose-invert max-w-none space-y-6 text-slate-200/70 leading-relaxed">
              <p>
                Planning your <strong className="text-white">{origin} to {destination}</strong> yatra by {vehicle.name}? Triveni Cabs™ offers the most reliable and affordable {vehicle.name} rental service for this sacred pilgrimage route. With our experienced mountain drivers and well-maintained fleet, your spiritual journey through the Himalayas will be safe, comfortable, and memorable.
              </p>
              <p>
                The {origin} to {destination} route covers approximately <strong className="text-white">{distance}</strong> and typically takes <strong className="text-white">{duration}</strong> to complete. Our {vehicle.name} ({vehicle.seats}-seater, {vehicle.fuelType}, AC) is priced at just <strong className="text-orange-400">₹{groupDigits(vehicle.perKm)}/km</strong>, making the total estimated cost <strong className="text-orange-400">{estimatedPrice}</strong> including fuel, driver charges, and toll taxes.
              </p>

              {destinationData && (
                <p>
                  {destinationData.significance}
                </p>
              )}

              <h3 className="text-xl font-bold text-white mt-8">Best Time to Travel from {origin}</h3>
              <p>
                The best months for this route are <strong className="text-white">{destinationData?.bestSeason || 'May-June & September-October'}</strong>. The monsoon months (July-August) are not recommended due to landslides and road closures. Winter months (November-April) see temple closures at higher altitudes.
              </p>

              <h3 className="text-xl font-bold text-white mt-8">Vehicle Options from {origin}</h3>
              <p>
                We offer multiple vehicle choices for {origin} to {destination}: <strong className="text-white">Swift Dzire (Sedan) at ₹12/km</strong> for budget travelers, <strong className="text-white">Ertiga at ₹15/km</strong> for small families, <strong className="text-white">Innova Crysta at ₹18/km</strong> for the best comfort-price balance, and <strong className="text-white">Toyota Fortuner at ₹25/km</strong> for premium/VIP travel. For groups, we offer buses from 22 to 56 seaters.
              </p>
            </div>

            {/* Internal links */}
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Link href="/chardham-yatra" className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-5 py-4 hover:border-orange-500/30 transition-all group">
                <Mountain className="w-5 h-5 text-orange-400" />
                <div>
                  <p className="text-white font-semibold text-sm group-hover:text-orange-400 transition-colors">All Char Dham Options</p>
                  <p className="text-slate-400/50 text-xs">Explore 35+ vehicle & route options</p>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-500 ml-auto group-hover:text-orange-400 transition-colors" />
              </Link>
              <Link href="/chardham-yatra/by-car" className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-5 py-4 hover:border-orange-500/30 transition-all group">
                <Compass className="w-5 h-5 text-slate-400" />
                <div>
                  <p className="text-white font-semibold text-sm group-hover:text-orange-400 transition-colors">Char Dham by Car</p>
                  <p className="text-slate-400/50 text-xs">Compare all car options</p>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-500 ml-auto group-hover:text-orange-400 transition-colors" />
              </Link>
            </div>

            {/* Related Char Dham Resources */}
            <div className="mt-10">
              <h3 className="text-white font-bold text-lg mb-4">Related Char Dham Resources</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {[
                  { href: '/chardham-yatra-cost-by-car', label: 'Char Dham Cost by Car' },
                  { href: '/chardham-yatra/by-innova-crysta', label: 'Char Dham by Innova' },
                  { href: '/chardham-yatra/by-bus', label: 'Char Dham by Bus' },
                  { href: '/chardham-yatra/kedarnath-yatra-by-car', label: 'Kedarnath by Car' },
                  { href: '/chardham-yatra/badrinath-yatra-by-car', label: 'Badrinath by Car' },
                  { href: '/tempo-traveller', label: 'Tempo Traveller Hire' },
                ].map((res, i) => (
                  <Link key={i} href={res.href} className="flex items-center gap-2 bg-white/[0.03] border border-white/10 rounded-lg px-4 py-3 hover:border-orange-500/30 transition-all text-sm text-slate-100/80 hover:text-orange-300">
                    <ArrowRight className="w-3 h-3 text-orange-400 flex-shrink-0" />{res.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 8: FAQs ===== */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-slate-900/50 to-slate-950/50">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-amber-400 text-sm font-bold tracking-widest uppercase">Got Questions?</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white font-display-serif mt-3">Frequently Asked Questions</h2>
            <p className="text-slate-300/60 mt-3">{origin} to {destination} Travel FAQ</p>
          </div>

          <div className="grid gap-3 md:grid-cols-2 md:items-start">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl overflow-hidden hover:border-amber-400/30 transition-all"
              >
                <h3 className="m-0">
                <button
                  onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}
                  aria-expanded={expandedFaq === i}
                  className="w-full flex items-center justify-between p-5 text-left"
                >
                  <span className="text-white font-semibold pr-4">{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 text-[#FACF2D] flex-shrink-0 transition-transform ${expandedFaq === i ? 'rotate-180' : ''}`} />
                </button>
                </h3>
                {expandedFaq === i && (
                  <p className={`px-5 pb-5 text-slate-200/70 leading-relaxed${i === 0 ? ' speakable-faq-first' : ''}`}>{faq.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SECTION 9: Related Routes ===== */}
      {relatedRoutes.length > 0 && (
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-white font-display-serif mb-8">Related Routes & Options</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {relatedRoutes.slice(0, 4).map((slug, i) => (
                <Link key={i} href={`/chardham-yatra/${slug}`} className="bg-white/5 border border-white/10 rounded-xl p-5 hover:border-orange-500/30 transition-all group">
                  <p className="text-white font-semibold group-hover:text-orange-400 transition-colors text-sm capitalize">{slug.replace(/-/g, ' ')}</p>
                  <div className="flex items-center gap-1 mt-2 text-slate-400/60 text-xs">
                    <span>View details</span>
                    <ArrowRight className="w-3 h-3" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ===== FINAL CTA ===== */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-orange-600 via-amber-600 to-[#FACF2D] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 50%, white 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a1206] font-display-serif mb-4">Book Your {origin} to {destination} Journey</h2>
            <p className="text-[#2a1d06]/85 text-lg mb-8 max-w-2xl mx-auto">
              Starting from {estimatedPrice}. Experienced drivers. 24/7 on-trip support. Call now to secure your {vehicle.name} for 2026 yatra season.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="tel:+917668570551" className="inline-flex items-center gap-2 bg-[#1a1206] text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-black hover:-translate-y-0.5 transition-all lg:w-auto lg:px-5 lg:py-2 lg:text-[13px]">
                <Phone className="w-5 h-5 text-amber-300 lg:w-4 lg:h-4" /> Call 7668570551
              </a>
              <a href={`https://wa.me/917668570551?text=${whatsappMsg}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white text-[#1a1206] px-10 py-4 rounded-full font-bold text-lg hover:bg-amber-50 hover:-translate-y-0.5 transition-all lg:w-auto lg:px-5 lg:py-2 lg:text-[13px]">
                <MessageCircle className="w-5 h-5 text-green-600 lg:w-4 lg:h-4" /> WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
