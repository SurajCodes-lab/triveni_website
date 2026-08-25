'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Phone, MessageCircle, MapPin, Users, Star, Shield, ChevronRight, ChevronDown, Mountain, Calendar, IndianRupee, Navigation, Sparkles, ArrowRight, CheckCircle, XCircle, Clock, Sun, Award, Crown, Zap, Heart, Package, Bus, Fuel, Route, Compass } from '@/components/ui/icons';
import { registrationSteps, packingTips, seasonGuide, exclusions } from '@/utilis/chardhamYatraData';
import QuickEnquiryForm from '@/components/ui/QuickEnquiryForm';
import ChardhamVehicleTable from '@/components/seo/ChardhamVehicleTable';
import { vehicles } from '@/utilis/chardhamYatraData';

// ============================================================================
// CHARDHAM PACKAGE CLIENT — "Royal Yatra" Design
// Each package gets a UNIQUE theme:
//   Luxury (Fortuner) → Gold/Amber on deep navy
//   Budget (Sedan) → Green/Emerald on dark slate
//   Family (Ertiga) → Orange/Warm on dark brown
//   Group (Bus) → Blue/Indigo on dark slate
// Base: Warm dark backgrounds with package-specific accent colors
// Used by 4 special package pages
// ============================================================================

const packageThemes = {
  fortuner: {
    name: 'Luxury',
    icon: Crown,
    gradient: 'from-amber-500 to-yellow-600',
    gradientBg: 'from-amber-500/15 to-yellow-600/15',
    border: 'border-amber-500/30',
    hoverBorder: 'hover:border-amber-500/40',
    text: 'text-amber-400',
    textMuted: 'text-amber-400/60',
    bg: 'bg-amber-500',
    bgPage: 'from-[#0a0a1a] via-[#0d0d20] to-[#0a0a18]',
    shadow: 'shadow-amber-500/20',
    badge: 'VIP PREMIUM',
    tagline: 'The Ultimate Himalayan Luxury Experience',
    included: ['Toyota Fortuner 4x4 with leather seats', 'Experienced VIP driver (10+ yrs mountain)', 'All fuel, tolls, and parking', 'Driver night allowance', 'Free airport/hotel pickup', '24/7 dedicated trip manager', 'First Aid kit & oxygen cylinder', 'Complimentary water bottles daily'],
    excluded: ['Hotel accommodation', 'Meals and snacks', 'Temple donation / offerings', 'Helicopter tickets (if applicable)', 'Personal expenses', 'Travel insurance'],
  },
  sedan: {
    name: 'Budget',
    icon: Zap,
    gradient: 'from-emerald-500 to-green-600',
    gradientBg: 'from-emerald-500/15 to-green-600/15',
    border: 'border-emerald-500/30',
    hoverBorder: 'hover:border-emerald-500/40',
    text: 'text-emerald-400',
    textMuted: 'text-emerald-400/60',
    bg: 'bg-emerald-500',
    bgPage: 'from-slate-950 via-slate-900 to-slate-950',
    shadow: 'shadow-emerald-500/20',
    badge: 'BEST VALUE',
    tagline: 'Complete Your Yatra Without Breaking the Bank',
    included: ['Swift Dzire AC sedan', 'Experienced mountain driver', 'All fuel and toll taxes', 'Driver allowance', '24/7 helpline support', 'First Aid kit'],
    excluded: ['Hotel accommodation', 'Meals', 'Temple offerings', 'Helicopter tickets', 'Personal expenses', 'Travel insurance'],
  },
  ertiga: {
    name: 'Family',
    icon: Heart,
    gradient: 'from-orange-500 to-rose-500',
    gradientBg: 'from-orange-500/15 to-rose-500/15',
    border: 'border-orange-500/30',
    hoverBorder: 'hover:border-orange-500/40',
    text: 'text-orange-400',
    textMuted: 'text-orange-400/60',
    bg: 'bg-orange-500',
    bgPage: 'from-stone-950 via-stone-900 to-stone-950',
    shadow: 'shadow-orange-500/20',
    badge: 'FAMILY FAVORITE',
    tagline: 'A Sacred Journey the Whole Family Will Cherish',
    included: ['Maruti Ertiga 6-seater AC MPV', 'Experienced family-friendly driver', 'All fuel, tolls, and parking', 'Driver night allowance', 'Child seat available on request', '24/7 helpline support', 'First Aid kit', 'Complimentary water bottles'],
    excluded: ['Hotel accommodation', 'Meals', 'Temple offerings', 'Helicopter tickets', 'Personal expenses', 'Travel insurance'],
  },
  bus45: {
    name: 'Group',
    icon: Users,
    gradient: 'from-blue-500 to-indigo-600',
    gradientBg: 'from-blue-500/15 to-indigo-600/15',
    border: 'border-blue-500/30',
    hoverBorder: 'hover:border-blue-500/40',
    text: 'text-blue-400',
    textMuted: 'text-blue-400/60',
    bg: 'bg-blue-500',
    bgPage: 'from-slate-950 via-gray-900 to-slate-950',
    shadow: 'shadow-blue-500/20',
    badge: 'GROUP SPECIAL',
    tagline: 'The Most Economical Way for Large Groups',
    included: ['AC Volvo/Luxury Coach (45 seats)', 'Experienced bus driver + helper', 'All fuel, tolls, and parking', 'PA system for announcements', 'Luggage storage compartment', '24/7 trip coordinator', 'First Aid kit', 'Local vehicle transfers (narrow roads)'],
    excluded: ['Hotel accommodation', 'Meals', 'Temple offerings', 'Helicopter tickets', 'Personal expenses', 'Travel insurance'],
  },
};

export default function ChardhamPackageClient({ data }) {
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [activeDay, setActiveDay] = useState(0);

  const { title, vehicle, destination, duration, distance, distanceKm, estimatedPrice, priceNum, allCarPrices, allBusPrices, allBusOptions, allCarOptions, tempoOptions, itinerary, whyChoose, faqs, images, relatedRoutes, vehicleType } = data;

  const theme = packageThemes[vehicleType] || packageThemes.fortuner;
  const ThemeIcon = theme.icon;
  const whatsappMsg = encodeURIComponent(`Hello! I want to book the ${theme.name} Char Dham Yatra Package 2026`);

  // Per-person cost for group packages
  const perPersonCost = vehicleType === 'bus45' && priceNum > 0 ? Math.round(priceNum / 40) : null;

  // Split the title so the hero H1 carries exactly one gold-foil accent line
  const dashIdx = title.indexOf(' — ');
  const byIdx = dashIdx === -1 ? title.lastIndexOf(' by ') : -1;
  const titleMain = dashIdx > -1 ? title.slice(0, dashIdx) : byIdx > -1 ? title.slice(0, byIdx) : title;
  const titleAccent = dashIdx > -1 ? title.slice(dashIdx + 3) : byIdx > -1 ? title.slice(byIdx + 1) : `by ${vehicle.name}`;

  return (
    <div className={`min-h-screen bg-gradient-to-b ${theme.bgPage}`}>
      {/* ===== HERO: Package Showcase ===== */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <Image src={images.hero} alt={title} fill sizes="100vw" className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 py-24 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Package Info */}
            <div>
              {/* Breadcrumb */}
              <div className="flex items-center gap-2 text-gray-500 text-sm mb-6">
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
                <ChevronRight className="w-3 h-3" />
                <Link href="/chardham-yatra" className="hover:text-white transition-colors">Char Dham Yatra</Link>
                <ChevronRight className="w-3 h-3" />
                <span className={theme.text}>{theme.name} Package</span>
              </div>

              {/* Package badge */}
              <div
                className={`inline-flex items-center gap-2 bg-gradient-to-r ${theme.gradientBg} border ${theme.border} rounded-full px-5 py-2 mb-6`}
              >
                <ThemeIcon className={`w-4 h-4 ${theme.text}`} />
                <span className={`${theme.text} text-xs font-bold tracking-widest uppercase`}>{theme.badge}</span>
              </div>

              <h1
                className="speakable-headline font-display-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 leading-[1.05] tracking-tight"
              >
                {titleMain}
                <span className="mt-2 block text-gold-foil text-2xl sm:text-3xl md:text-4xl">{titleAccent}</span>
              </h1>

              <p
                className="speakable-lead text-white/75 text-base md:text-lg mb-3 max-w-2xl leading-relaxed"
              >
                This {theme.name.toLowerCase()} Char Dham Yatra 2026 package uses the {vehicle.name} ({vehicle.seats}-seater) at ₹{vehicle.perKm}/km — from {estimatedPrice} for the full {duration} circuit covering all four Dhams. Includes vehicle, fuel, driver, tolls and 24/7 support with experienced hill drivers.
              </p>

              <p
                className={`${theme.textMuted} text-lg italic mb-8`}
              >
                {theme.tagline}
              </p>

              {/* Price highlight */}
              <div
                className={`inline-block bg-gradient-to-r ${theme.gradientBg} border ${theme.border} rounded-2xl px-8 py-5 mb-8`}
              >
                <p className="text-white/60 text-sm">Starting from</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-black text-gold-foil tabular-nums">{estimatedPrice}</span>
                  <span className="text-white/40 text-sm">for {duration}</span>
                </div>
                <p className="text-white/40 text-xs mt-1">₹{vehicle.perKm}/km | {distance}</p>
                {perPersonCost && (
                  <p className={`${theme.text} text-sm font-semibold mt-2`}>Just ₹{perPersonCost.toLocaleString('en-IN')}/person (40 pax)</p>
                )}
              </div>

              {/* Quick stats */}
              <div
                className="flex flex-wrap gap-3 mb-8"
              >
                {[
                  { icon: Users, label: `${vehicle.seats} Seater` },
                  { icon: Calendar, label: duration },
                  { icon: Navigation, label: distance },
                  { icon: Shield, label: '24/7 Support' },
                ].map((s, i) => (
                  <div key={i} className="flex items-center gap-2 bg-white/5 rounded-full px-4 py-2 border border-white/10">
                    <s.icon className={`w-4 h-4 ${theme.text}`} />
                    <span className="text-white/80 text-sm">{s.label}</span>
                  </div>
                ))}
              </div>

              {/* CTAs */}
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
                <span className="flex items-center gap-1.5"><Star className={`w-4 h-4 ${theme.text}`} /> 4.9&#9733; Rated</span>
                <span className="w-1 h-1 rounded-full bg-white/30" />
                <span className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4 text-emerald-400" /> 10,000+ trips</span>
                <span className="w-1 h-1 rounded-full bg-white/30" />
                <span className="flex items-center gap-1.5"><Shield className="w-4 h-4 text-cyan-400" /> Verified hill drivers</span>
                <span className="w-1 h-1 rounded-full bg-white/30" />
                <span className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4 text-emerald-400" /> No advance payment</span>
              </div>
            </div>

            {/* Right: Vehicle Image */}
            <div
              className="relative hidden lg:block"
            >
              <div className={`relative h-[400px] rounded-3xl overflow-hidden border ${theme.border}`}>
                <Image src={images.vehicle} alt={vehicle.name} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-white font-bold text-xl">{vehicle.name}</p>
                  <p className="text-white/60 text-sm">{vehicle.category} | {vehicle.fuelType} | {vehicle.transmission}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Vehicle comparison table (AEO/GEO) ==========================
           "Which vehicle for Char Dham" is a four-variable trade-off, and
           these package pages carried no <table> at all despite existing to
           answer exactly that. The circuit total is multiplied out here so a
           per-km rate becomes a number someone can budget against. ======= */}
      <ChardhamVehicleTable vehicles={vehicles} highlightType={data?.vehicleType} />

      {/* ===== Quick Enquiry Form ===== */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white font-display-serif mb-4">Reserve the {theme.name} Package</h2>
            <p className="text-white/70 leading-relaxed">Share your dates and group size for a transparent, all-inclusive quote within minutes. Reserve with a small refundable token — pay the balance on arrival.</p>
          </div>
          <div className="flex lg:justify-end">
            <QuickEnquiryForm pageType="chardham" />
          </div>
        </div>
      </section>

      {/* ===== SECTION 2: Included / Excluded ===== */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className={`${theme.text} text-sm font-bold tracking-widest uppercase`}>Package Details</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white font-display-serif mt-3">What is Included & Excluded</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Included */}
            <div
              className={`bg-white/5 backdrop-blur-xl rounded-2xl border ${theme.border} p-8`}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${theme.gradient} flex items-center justify-center`}>
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-white font-bold text-xl">Included</h3>
              </div>
              <ul className="space-y-3">
                {theme.included.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className={`w-5 h-5 ${theme.text} flex-shrink-0 mt-0.5`} />
                    <span className="text-white/80 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Excluded */}
            <div
              className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-red-500/20 flex items-center justify-center">
                  <span className="text-red-400 text-lg">✕</span>
                </div>
                <h3 className="text-white font-bold text-xl">Not Included</h3>
              </div>
              <ul className="space-y-3">
                {theme.excluded.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-red-400/60 flex-shrink-0 mt-0.5">✕</span>
                    <span className="text-white/60 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 3: Vehicle Gallery ===== */}
      <section className="py-16 md:py-24 bg-black/20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-white font-display-serif mb-8 text-center">Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {images.gallery.map((img, i) => (
              <div
                key={i}
                className={`relative h-40 rounded-xl overflow-hidden border border-white/10 ${theme.hoverBorder} transition-all group`}
              >
                <Image src={img} alt={`Package gallery ${i + 1}`} fill sizes="(max-width: 768px) 50vw, 33vw" className="object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SECTION 4: Compare All Packages ===== */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className={`${theme.text} text-sm font-bold tracking-widest uppercase`}>Compare Packages</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white font-display-serif mt-3">Which Package is Right for You?</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {allCarPrices.map((car, i) => {
              const pkgTheme = packageThemes[car.type] || packageThemes.fortuner;
              const isCurrentPackage = car.type === vehicleType;
              return (
                <div
                  key={i}
                  className={`relative rounded-2xl overflow-hidden border transition-all ${
                    isCurrentPackage
                      ? `${pkgTheme.border} ring-1 ${pkgTheme.ring || 'ring-white/10'} bg-gradient-to-b ${pkgTheme.gradientBg}`
                      : 'border-white/10 bg-white/5 hover:border-white/20'
                  }`}
                >
                  {isCurrentPackage && (
                    <div className={`bg-gradient-to-r ${pkgTheme.gradient} text-white text-xs font-bold text-center py-1.5`}>
                      CURRENT PACKAGE
                    </div>
                  )}
                  <div className="p-5">
                    <div className="relative h-28 mb-4">
                      <Image src={car.image} alt={car.name} fill sizes="(max-width: 768px) 50vw, 25vw" className="object-contain" />
                    </div>
                    <h3 className="text-white font-bold">{car.name}</h3>
                    <p className="text-gray-400 text-sm">{car.category} | {car.seats} Seater</p>
                    <div className="mt-3">
                      <span className={`text-2xl font-bold ${isCurrentPackage ? pkgTheme.text : 'text-white'}`}>{car.estimatedPrice}</span>
                    </div>
                    <p className="text-gray-500 text-xs mt-1">₹{car.perKm}/km outstation</p>
                    <a href="tel:+917668570551" className={`mt-4 block text-center py-2.5 rounded-xl font-semibold text-sm transition-all ${
                      isCurrentPackage
                        ? `bg-gradient-to-r ${pkgTheme.gradient} text-white hover:shadow-lg ${pkgTheme.shadow}`
                        : 'bg-white/10 text-white hover:bg-white/20'
                    }`}>
                      {isCurrentPackage ? 'Book This Package' : 'Enquire'}
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bus alternatives for group package */}
          {vehicleType === 'bus45' && (
            <div className="mt-12">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <Bus className={`w-5 h-5 ${theme.text}`} /> All Bus Sizes Available
              </h3>
              <div className="bg-white/5 rounded-2xl border border-white/10 overflow-hidden">
                {/* Desktop table */}
                <table className="hidden md:table w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/10 bg-white/[0.02]">
                      <th className="text-left text-gray-400 p-4 font-medium">Bus Type</th>
                      <th className="text-center text-gray-400 p-4 font-medium">Seats</th>
                      <th className="text-center text-gray-400 p-4 font-medium">Per Km</th>
                      <th className="text-center text-gray-400 p-4 font-medium">Min. Charge</th>
                      <th className="text-center text-gray-400 p-4 font-medium">Per Person (est.)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {allBusOptions.map((bus, i) => (
                      <tr key={i} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                        <td className="p-4">
                          <div className="flex items-center gap-3">
                            <div className="relative w-12 h-8 flex-shrink-0">
                              <Image src={bus.image} alt={bus.name} fill sizes="96px" className="object-contain" />
                            </div>
                            <span className="text-white font-medium">{bus.name}</span>
                          </div>
                        </td>
                        <td className="p-4 text-center text-gray-300">{bus.seats}</td>
                        <td className="p-4 text-center text-[#FACF2D] font-semibold">₹{bus.perKm}</td>
                        <td className="p-4 text-center text-gray-300">{bus.minCharge}</td>
                        <td className="p-4 text-center text-gray-300">
                          ~₹{Math.round((distanceKm * bus.perKm) / (bus.seats * 0.85)).toLocaleString('en-IN')}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                {/* Mobile stacked cards */}
                <div className="md:hidden divide-y divide-white/5">
                  {allBusOptions.map((bus, i) => (
                    <div key={i} className="p-4">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-white font-medium text-sm">{bus.name}</span>
                        <span className="text-[#FACF2D] font-semibold text-sm">₹{bus.perKm}/km</span>
                      </div>
                      <p className="text-gray-400 text-xs">
                        {bus.seats} seats · Min. {bus.minCharge} · ~₹{Math.round((distanceKm * bus.perKm) / (bus.seats * 0.85)).toLocaleString('en-IN')}/person
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ===== SECTION 5: Itinerary ===== */}
      {itinerary.length > 0 && (
        <section className="py-16 md:py-24 bg-black/20">
          <div className="max-w-5xl mx-auto px-4">
            <div className="text-center mb-14">
              <span className={`${theme.text} text-sm font-bold tracking-widest uppercase`}>Your Itinerary</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white font-display-serif mt-3">{theme.name} Package — {duration}</h2>
            </div>

            {/* Day cards in a grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {itinerary.map((day, i) => (
                <div
                  key={i}
                  className={`bg-white/5 border border-white/10 rounded-xl p-5 ${theme.hoverBorder} transition-all cursor-pointer ${activeDay === i ? `ring-1 ${theme.border}` : ''}`}
                  onClick={() => setActiveDay(i)}
                >
                  <div className="flex items-start gap-4">
                    <div className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${theme.gradient} flex items-center justify-center`}>
                      <span className="text-white font-bold text-sm">{day.day.replace('Day ', 'D')}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-white font-bold mb-1">{day.title}</h3>
                      <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">{day.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ===== SECTION 6: Why Choose This Package ===== */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className={`${theme.text} text-sm font-bold tracking-widest uppercase`}>Why This Package</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white font-display-serif mt-3">Why Choose the {theme.name} Package</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {whyChoose.slice(0, 6).map((item, i) => {
              const icons = [Shield, Star, Award, Mountain, Compass, CheckCircle];
              const Icon = icons[i % icons.length];
              return (
                <div
                  key={i}
                  className={`bg-white/5 rounded-2xl border border-white/10 p-6 ${theme.hoverBorder} transition-all`}
                >
                  <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${theme.gradientBg} flex items-center justify-center mb-4`}>
                    <Icon className={`w-5 h-5 ${theme.text}`} />
                  </div>
                  <h3 className="text-white font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== SECTION 7: SEO Content ===== */}
      <section className="py-16 md:py-24 bg-black/20">
        <div className="max-w-4xl mx-auto px-4">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white font-display-serif mb-8">{theme.name} Char Dham Yatra Package 2026 — Complete Details</h2>

            <div className="prose prose-invert max-w-none space-y-6 text-gray-300/80 leading-relaxed">
              <p>
                The <strong className="text-white">{theme.name} Char Dham Yatra Package</strong> by Triveni Cabs offers a {theme.name === 'Luxury' ? 'premium VIP experience' : theme.name === 'Budget' ? 'cost-effective pilgrimage solution' : theme.name === 'Family' ? 'comfortable family-friendly journey' : 'group-optimized travel experience'} for your sacred pilgrimage to all four Dhams of Uttarakhand — Yamunotri, Gangotri, Kedarnath, and Badrinath.
              </p>
              <p>
                <strong className="text-white">Vehicle:</strong> {vehicle.name} ({vehicle.seats}-seater, {vehicle.fuelType}, {vehicle.transmission}). <strong className={theme.text}>Price: ₹{vehicle.perKm}/km outstation.</strong> The {duration} package covers approximately {distance}, starting from {estimatedPrice} (including vehicle, fuel, driver, tolls).
              </p>
              <p>
                {vehicle.description}
              </p>
              <p>
                <strong className="text-white">Route covered:</strong> Delhi → Haridwar → Barkot → Yamunotri → Uttarkashi → Gangotri → Guptkashi → Kedarnath → Badrinath → Rudraprayag → Haridwar → Delhi. The exact itinerary is customizable based on your preferences.
              </p>
              <p>
                <strong className="text-white">Booking process:</strong> Call <strong className={theme.text}>7668570551</strong> or WhatsApp us to discuss your preferred dates, group size, and any customizations. We provide a detailed quotation within 1 hour. Reserve your vehicle with a small refundable token — the balance is payable on arrival, so there is no large advance required.
              </p>
            </div>

            {/* Internal links */}
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Link href="/chardham-yatra" className={`flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-5 py-4 ${theme.hoverBorder} transition-all group`}>
                <Mountain className={`w-5 h-5 ${theme.text}`} />
                <div>
                  <p className="text-white font-semibold text-sm">All Char Dham Options</p>
                  <p className="text-gray-500 text-xs">35+ vehicle & route options</p>
                </div>
                <ArrowRight className="w-4 h-4 text-gray-500 ml-auto" />
              </Link>
              <Link href="/chardham-yatra/by-car" className={`flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-5 py-4 ${theme.hoverBorder} transition-all group`}>
                <Route className={`w-5 h-5 ${theme.text}`} />
                <div>
                  <p className="text-white font-semibold text-sm">Char Dham by Car</p>
                  <p className="text-gray-500 text-xs">Compare all car models</p>
                </div>
                <ArrowRight className="w-4 h-4 text-gray-500 ml-auto" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION: Registration & Biometric — warm-light band ===== */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-[#FFF6DC] via-amber-50/70 to-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-amber-700 text-sm font-bold tracking-widest uppercase">Mandatory in 2026</span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 font-display-serif mt-3">Registration &amp; Biometric Steps</h2>
            <p className="text-slate-600 mt-3">Free with this package — we handle the paperwork for you</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {registrationSteps.map((step, i) => (
              <div key={i}
                className="bg-white border border-amber-200/60 rounded-2xl p-6 shadow-sm hover:border-amber-400/70 transition-all"
              >
                <div className="w-9 h-9 rounded-full bg-[#FACF2D] flex items-center justify-center text-slate-900 font-black text-sm mb-3">{i + 1}</div>
                <h3 className="text-slate-900 font-semibold mb-2">{step.name}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SECTION: Packing, Season & Exclusions ===== */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-10">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white font-display-serif mb-6">What to Pack &amp; Altitude Tips</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {packingTips.map((tip, i) => (
                  <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-4">
                    <h3 className={`font-semibold text-sm mb-1 ${theme.text}`}>{tip.title}</h3>
                    <p className="text-gray-400 text-xs leading-relaxed">{tip.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white font-display-serif mb-6">Best Time to Travel</h2>
              <div className="space-y-3">
                {seasonGuide.map((s, i) => (
                  <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-4">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-white font-semibold text-sm">{s.period}</span>
                      <span className={`text-xs font-bold ${theme.text}`}>{s.label}</span>
                    </div>
                    <p className="text-gray-400 text-sm">{s.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="bg-white/5 border border-rose-500/20 rounded-xl p-5 max-w-3xl mx-auto">
            <h3 className="text-rose-400 font-bold mb-3 flex items-center gap-2 text-sm"><XCircle className="w-4 h-4" /> Not Included in This Package</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {exclusions.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-gray-300/80 text-sm"><XCircle className="w-4 h-4 text-rose-400 flex-shrink-0 mt-0.5" />{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ===== SECTION 8: FAQs ===== */}
      <section className="py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className={`${theme.text} text-sm font-bold tracking-widest uppercase`}>FAQs</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white font-display-serif mt-3">{theme.name} Package — Common Questions</h2>
          </div>

          <div className="grid gap-3 md:grid-cols-2 md:items-start">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className={`bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl overflow-hidden ${theme.hoverBorder} transition-all`}
              >
                <button
                  onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}
                  aria-expanded={expandedFaq === i}
                  className="w-full flex items-center justify-between p-5 text-left"
                >
                  <span className="text-white font-semibold pr-4">{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 text-[#FACF2D] flex-shrink-0 transition-transform ${expandedFaq === i ? 'rotate-180' : ''}`} />
                </button>
                {expandedFaq === i && (
                  <p className={`px-5 pb-5 text-gray-300/70 leading-relaxed${i === 0 ? ' speakable-faq-first' : ''}`}>{faq.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SECTION 9: Other Packages ===== */}
      {relatedRoutes.length > 0 && (
        <section className="py-16 md:py-24 bg-black/20">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-white font-display-serif mb-8 text-center">Explore Other Packages</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {relatedRoutes.slice(0, 3).map((slug, i) => {
                const pkgType = slug.includes('luxury') ? 'fortuner' : slug.includes('budget') ? 'sedan' : slug.includes('family') ? 'ertiga' : 'bus45';
                const pkgTheme = packageThemes[pkgType];
                const PkgIcon = pkgTheme.icon;
                return (
                  <Link key={i} href={`/chardham-yatra/${slug}`} className={`bg-white/5 border border-white/10 rounded-2xl p-6 ${pkgTheme.hoverBorder} transition-all group`}>
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${pkgTheme.gradientBg} flex items-center justify-center mb-4`}>
                      <PkgIcon className={`w-5 h-5 ${pkgTheme.text}`} />
                    </div>
                    <h3 className="text-white font-bold text-lg capitalize">{slug.replace(/-/g, ' ')}</h3>
                    <p className="text-gray-400 text-sm mt-1">{pkgTheme.tagline}</p>
                    <div className={`flex items-center gap-1 mt-4 ${pkgTheme.text} text-sm font-semibold`}>
                      <span>View Package</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* ===== FINAL CTA — gold-foil band ===== */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-orange-600 via-amber-600 to-[#FACF2D] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <div>
            <ThemeIcon className="w-12 h-12 text-[#1a1206]/70 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a1206] font-display-serif mb-4">Book the {theme.name} Char Dham Package</h2>
            <p className="text-[#2a1d06]/85 text-lg mb-8 max-w-2xl mx-auto">
              Starting from {estimatedPrice}. {vehicle.name}, experienced drivers, 24/7 support. Secure your 2026 yatra season booking today.
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
