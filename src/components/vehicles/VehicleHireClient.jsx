"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Phone,
  Users,
  Fuel,
  Car,
  Star,
  ArrowRight,
  Shield,
  Clock,
  CheckCircle,
  ChevronDown,
  MapPin,
  Zap,
  Settings,
  Luggage,
  Navigation,
  IndianRupee,
  Award,
  Gauge,
  Sparkles,
  Route,
  CheckCircle2,
} from "@/components/ui/icons";
import { WhatsAppIcon } from "@/components/ui/icons";
import { trackWhatsAppClick, trackPhoneCall } from '@/utilis/analytics';
import SocialProofStrip from '@/components/shared/SocialProofStrip';
import InclusionBadges from '@/components/shared/InclusionBadges';

export default function VehicleHireClient({ vehicle }) {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  // Feature icon mapping
  const featureIcons = {
    "AC": Zap, "Music System": Star, "USB Charging": Zap, "Spacious Boot": Luggage,
    "Reclining Seats": Car, "Power Windows": Settings, "Fuel Efficient": Fuel,
    "Compact Size": Car, "Power Steering": Navigation, "4x4 Available": Shield,
    "Leather Seats": Award, "Cruise Control": Gauge, "Power Boot": Settings,
    "Sunroof": Star, "ADAS Safety": Shield, "Panoramic Sunroof": Star,
    "Alexa Built-in": Zap, "Wireless Charging": Zap, "Connected Car Tech": Settings,
    "Dual-Zone Climate": Zap, "Pushback Seats": Car, "LED TV": Star,
    "LED Interior": Star, "Large Windows": Car, "PA System": Star,
    "Luggage Rack": Luggage, "Curtains": Shield, "Ice Box": Zap,
    "Shoe Rack": Settings, "Standard Seats": Car, "First Aid Kit": Shield,
    "Luggage Hold": Luggage, "Volvo Recliner Seats": Award, "Washroom": Shield,
    "Wi-Fi": Zap, "Charging Points": Zap, "Reading Lights": Star,
    "Leather Interior": Award, "Premium Sound System": Star, "Ambient Lighting": Star,
    "Massage Seats": Award, "Wi-Fi Hotspot": Zap, "Climate Control": Zap,
    "Zero Emissions": Shield, "Silent Ride": Award, "Automatic Transmission": Settings,
    "Regenerative Braking": Shield, "Fast Charging": Zap, "Digital Instrument Cluster": Settings,
    "Classic Styling": Award, "Retro Interior": Star, "Chrome Accents": Star,
    "Vintage Horn": Star, "White Wall Tires": Car, "Chauffeur in Period Attire": Award,
  };

  // Compute gauge angle for a visual speedometer-like spec display
  const getGaugePercent = (value) => {
    const num = parseInt(String(value).replace(/[^\d]/g, ""));
    if (isNaN(num)) return 50;
    return Math.min(Math.max(num * 2, 15), 95);
  };

  return (
    <div className="min-h-screen bg-gray-950 overflow-hidden">

      {/* ==================== HERO SECTION ==================== */}
      <section className="relative py-24 md:py-36 overflow-hidden">
        {/* Animated background layers */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-slate-900/90 to-gray-950" />
          {/* Animated orbs */}
          <div className="absolute top-10 left-[10%] w-80 h-80 bg-amber-600/15 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-10 right-[10%] w-96 h-96 bg-slate-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-amber-500/5 rounded-full blur-3xl" />
          {/* Grid pattern overlay */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: "linear-gradient(rgba(148,163,184,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.5) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
          {/* Animated diagonal lines */}
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-5">
            <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-amber-400 to-transparent" style={{ transform: "rotate(-15deg)", transformOrigin: "top right" }} />
            <div className="absolute top-0 right-20 w-px h-full bg-gradient-to-b from-transparent via-slate-400 to-transparent" style={{ transform: "rotate(-15deg)", transformOrigin: "top right" }} />
            <div className="absolute top-0 right-40 w-px h-full bg-gradient-to-b from-transparent via-amber-400 to-transparent" style={{ transform: "rotate(-15deg)", transformOrigin: "top right" }} />
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4">
          {/* Breadcrumb */}
          <nav className="flex justify-center mb-10" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2 text-sm bg-white/5 backdrop-blur-xl rounded-full px-5 py-2 border border-white/10">
              <li>
                <Link href="/" className="text-gray-400 hover:text-amber-400 transition-colors">Home</Link>
              </li>
              <li className="text-gray-600">/</li>
              <li>
                <Link href="/vehicles" className="text-gray-400 hover:text-amber-400 transition-colors">Vehicles</Link>
              </li>
              <li className="text-gray-600">/</li>
              <li className="text-amber-400 font-medium">{vehicle.name}</li>
            </ol>
          </nav>

          {/* Category Badge with shimmer */}
          <div className="flex justify-center mb-6">
            <span
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-amber-500/30 text-amber-400 text-sm font-semibold relative overflow-hidden"
              style={{
                background: "linear-gradient(90deg, rgba(59,130,246,0.1) 0%, rgba(148,163,184,0.15) 50%, rgba(59,130,246,0.1) 100%)",
                backgroundSize: "200% 100%",
                animation: "shimmer 3s ease-in-out infinite",
              }}
            >
              <Car className="w-4 h-4" />
              {vehicle.category}
              <Sparkles className="w-3.5 h-3.5 text-slate-400" />
            </span>
          </div>

          {/* Vehicle Name - massive typography */}
          <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-center mb-3 tracking-tight">
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: "linear-gradient(135deg, #f59e0b 0%, #cbd5e1 35%, #f59e0b 50%, #e2e8f0 75%, #d97706 100%)",
                backgroundSize: "200% auto",
                animation: "shimmer 4s linear infinite",
              }}
            >
              {vehicle.name}
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-center text-gray-500 font-light tracking-wide mb-2">on Rent</p>
          <p className="text-lg md:text-xl text-slate-400 text-center max-w-2xl mx-auto mb-12 font-medium italic">
            &ldquo;{vehicle.tagline}&rdquo;
          </p>

          {/* Dashboard-style Key Stats - gauge meter cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mb-12">
            {[
              { label: "Seats", value: vehicle.seats, unit: "PAX", icon: Users, color: "blue" },
              { label: "Rate", value: vehicle.perKmRate.outstation, unit: "", icon: IndianRupee, color: "slate" },
              { label: "Fuel", value: vehicle.fuelType.split(" / ")[0], unit: "", icon: Fuel, color: "blue" },
              { label: "Climate", value: vehicle.ac ? "Full AC" : "Non-AC", unit: "", icon: Zap, color: "slate" },
            ].map((stat, i) => (
              <div
                key={i}
                className="group relative bg-white/[0.04] backdrop-blur-2xl rounded-2xl border border-white/10 p-5 text-center hover:bg-white/[0.08] hover:border-amber-500/40 hover:shadow-lg hover:shadow-amber-500/10 transition-all duration-500"
              >
                {/* Gauge arc decoration */}
                <div className="absolute top-3 right-3 w-8 h-8 opacity-20 group-hover:opacity-40 transition-opacity">
                  <svg viewBox="0 0 36 36" className="w-full h-full">
                    <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3" strokeDasharray={`${getGaugePercent(stat.value)}, 100`} className="text-amber-400" />
                  </svg>
                </div>
                <stat.icon className="w-6 h-6 text-amber-400 mx-auto mb-2 group-hover:scale-110 transition-transform duration-300" />
                <div className="text-xs text-gray-500 uppercase tracking-widest mb-1">{stat.label}</div>
                <div className="text-xl md:text-2xl font-bold text-white">{stat.value}</div>
                {stat.unit && <div className="text-xs text-gray-600">{stat.unit}</div>}
              </div>
            ))}
          </div>

          {/* CTAs with glow */}
          <div className="flex flex-wrap justify-center gap-4">
            <a
              onClick={() => trackPhoneCall('vehicle_hire')} href="tel:+917668570551"
              className="group inline-flex items-center gap-2 bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-white px-8 py-4 rounded-2xl font-bold transition-all duration-300 shadow-xl shadow-amber-600/25 hover:shadow-amber-500/40 hover:scale-105"
            >
              <Phone className="w-5 h-5 group-hover:animate-pulse" />
              Call: +91 76685 70551
            </a>
            <a
              onClick={() => trackWhatsAppClick('vehicle_hire')} href="https://wa.me/917668570551"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 bg-gradient-to-r from-green-600 to-emerald-500 hover:from-green-500 hover:to-emerald-400 text-white px-8 py-4 rounded-2xl font-bold transition-all duration-300 shadow-xl shadow-green-600/25 hover:shadow-green-500/40 hover:scale-105"
            >
              <WhatsAppIcon className="w-5 h-5" />
              WhatsApp Booking
            </a>
          </div>
        </div>
      </section>

      <SocialProofStrip theme="dark" />

      {/* ==================== INSTRUMENT CLUSTER SPECS BAR ==================== */}
      <section className="py-10 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-950/30 via-slate-900/40 to-amber-950/30" />
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {[
              { icon: Users, label: "Passengers", value: typeof vehicle.seats === "number" ? `${vehicle.seats} Seats` : `${vehicle.seats} Seats` },
              { icon: Fuel, label: "Fuel Type", value: vehicle.fuelType },
              { icon: Zap, label: "Climate", value: vehicle.ac ? "AC Available" : "Non-AC" },
              { icon: Luggage, label: "Luggage", value: vehicle.luggage },
              { icon: Settings, label: "Transmission", value: vehicle.transmission },
            ].map((spec, i) => (
              <div
                key={i}
                className="group bg-white/[0.04] backdrop-blur-2xl rounded-2xl border border-white/10 p-5 text-center hover:bg-white/[0.08] hover:border-amber-400/30 hover:shadow-lg hover:shadow-amber-500/10 transition-all duration-500"
              >
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-amber-500/20 to-slate-500/10 border border-amber-500/20 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                  <spec.icon className="w-5 h-5 text-amber-400" />
                </div>
                <div className="text-[10px] text-gray-500 uppercase tracking-[0.15em] mb-1">{spec.label}</div>
                <div className="text-white font-semibold text-sm">{spec.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== PRICING SECTION - Dashboard Gauge Style ==================== */}
      <section className="py-20 md:py-28 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-amber-400 mb-3">Transparent Rates</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-tight">
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: "linear-gradient(to right, #f59e0b, #94a3b8, #f59e0b)" }}
              >
                Pricing Packages
              </span>
            </h2>
            <p className="text-gray-400 mt-4 max-w-lg mx-auto">
              No hidden charges. Choose the package that suits your journey.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { title: "Half Day", price: vehicle.packages.halfDay, popular: false, desc: "Short city trips & local transfers", icon: Clock },
              { title: "Full Day", price: vehicle.packages.fullDay, popular: true, desc: "Full day local sightseeing", icon: Star },
              { title: "Outstation", price: vehicle.packages.outstationPerKm, popular: false, desc: "Inter-city & long distance travel", icon: Route },
            ].map((pkg, i) => (
              <div
                key={i}
                className={`group relative rounded-3xl border p-7 text-center transition-all duration-500 ${
                  pkg.popular
                    ? "bg-gradient-to-b from-amber-500/15 to-white/[0.04] border-amber-500/40 shadow-2xl shadow-amber-500/15 scale-[1.03]"
                    : "bg-white/[0.04] backdrop-blur-2xl border-white/10 hover:bg-white/[0.07] hover:border-amber-400/30 hover:shadow-xl hover:shadow-amber-500/10"
                }`}
              >
                {pkg.popular && (
                  <div
                    className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-amber-600 to-amber-400 text-white text-xs font-bold px-5 py-1.5 rounded-full shadow-lg shadow-amber-500/30"
                  >
                    Most Popular
                  </div>
                )}

                {/* Dashboard-style circular icon */}
                <div className={`w-16 h-16 rounded-2xl mx-auto mb-5 flex items-center justify-center ${
                  pkg.popular
                    ? "bg-amber-500/20 border border-amber-400/30"
                    : "bg-white/5 border border-white/10 group-hover:border-amber-400/20"
                } transition-all duration-300`}>
                  <pkg.icon className={`w-7 h-7 ${pkg.popular ? "text-amber-400" : "text-slate-400 group-hover:text-amber-400"} transition-colors`} />
                </div>

                <h3 className="text-xl font-bold text-white mb-1">{pkg.title}</h3>
                <p className="text-gray-500 text-sm mb-5">{pkg.desc}</p>

                {/* Price display - gauge style border */}
                <div className={`relative mx-auto w-40 h-40 rounded-full flex items-center justify-center mb-6 ${
                  pkg.popular ? "bg-amber-500/10" : "bg-white/[0.03]"
                }`}>
                  <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 120 120">
                    <circle cx="60" cy="60" r="54" fill="none" stroke="currentColor" strokeWidth="2" className="text-white/5" />
                    <circle cx="60" cy="60" r="54" fill="none" stroke="currentColor" strokeWidth="3" strokeDasharray="240 339" strokeLinecap="round" className={pkg.popular ? "text-amber-400" : "text-slate-600"} />
                  </svg>
                  <div className="text-center z-10">
                    <div className={`text-lg font-black leading-tight ${pkg.popular ? "text-amber-400" : "text-white"}`}>
                      {pkg.price.split("(")[0].trim()}
                    </div>
                    {pkg.price.includes("(") && (
                      <div className="text-[10px] text-gray-500 mt-1">
                        ({pkg.price.split("(")[1]}
                      </div>
                    )}
                  </div>
                </div>

                <a
                  onClick={() => trackPhoneCall('vehicle_hire')} href="tel:+917668570551"
                  className={`inline-flex items-center gap-2 w-full justify-center px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    pkg.popular
                      ? "bg-gradient-to-r from-amber-600 to-amber-500 text-white shadow-lg shadow-amber-500/20 hover:shadow-amber-500/40 hover:scale-105"
                      : "bg-white/5 border border-white/10 text-gray-300 hover:bg-amber-500/10 hover:border-amber-500/30 hover:text-amber-400"
                  }`}
                >
                  <Phone className="w-4 h-4" />
                  Book Now
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== FEATURES - Car Dashboard Cards ==================== */}
      <section className="py-20 md:py-28 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-amber-950/10 to-transparent" />
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-amber-400 mb-3">Equipped For Comfort</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-tight">
              <span className="bg-clip-text text-transparent" style={{ backgroundImage: "linear-gradient(to right, #cbd5e1, #f59e0b, #cbd5e1)" }}>
                Vehicle Features
              </span>
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {vehicle.features.map((feature, i) => {
              const IconComp = featureIcons[feature] || CheckCircle;
              return (
                <div
                  key={i}
                  className="group relative bg-white/[0.04] backdrop-blur-2xl rounded-2xl border border-white/10 p-5 flex items-center gap-4 hover:bg-white/[0.08] hover:border-amber-400/30 hover:shadow-lg hover:shadow-amber-500/10 transition-all duration-500"
                >
                  {/* Dashboard indicator dot */}
                  <div className="absolute top-3 right-3 w-2 h-2 rounded-full bg-amber-500/40 group-hover:bg-amber-400 group-hover:animate-pulse transition-all" />
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500/15 to-slate-600/10 border border-amber-500/15 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <IconComp className="w-5 h-5 text-amber-400" />
                  </div>
                  <span className="text-gray-300 text-sm font-medium group-hover:text-white transition-colors">{feature}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ==================== POPULAR ROUTES TABLE ==================== */}
      <section className="py-20 md:py-28 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-amber-400 mb-3">Route Pricing</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-tight">
              <span className="bg-clip-text text-transparent" style={{ backgroundImage: "linear-gradient(to right, #f59e0b, #e2e8f0, #f59e0b)" }}>
                Popular Routes &amp; Fares
              </span>
            </h2>
            <p className="text-gray-400 mt-4">Estimated fares for {vehicle.name}</p>
          </div>

          <div className="max-w-3xl mx-auto overflow-x-auto -mx-4 px-4">
            {/* Table header */}
            <div className="grid grid-cols-3 gap-2 md:gap-4 px-4 md:px-6 py-3 mb-2 text-xs font-bold uppercase tracking-[0.15em] text-gray-500 min-w-[360px]">
              <div>Route</div>
              <div className="text-center">Distance</div>
              <div className="text-right">Fare</div>
            </div>
            {/* Table rows - car dashboard instrument style */}
            <div className="bg-white/[0.03] backdrop-blur-2xl rounded-3xl border border-white/10 overflow-hidden divide-y divide-white/5 min-w-[360px]">
              {vehicle.popularRoutes.map((route, i) => (
                <div
                  key={i}
                  className="group grid grid-cols-3 gap-2 md:gap-4 px-4 md:px-6 py-3 md:py-4 hover:bg-amber-500/5 transition-all duration-300"
                >
                  <div className="text-gray-300 font-medium flex items-center gap-2 md:gap-3 text-xs md:text-sm min-w-0">
                    <div className="w-2 h-2 rounded-full bg-amber-500/50 group-hover:bg-amber-400 transition-colors flex-shrink-0" />
                    <span className="truncate">{route.route}</span>
                  </div>
                  <div className="text-gray-500 text-center text-xs md:text-sm flex items-center justify-center gap-1">
                    <Navigation className="w-3 h-3 text-slate-600 flex-shrink-0" />
                    {route.distance}
                  </div>
                  <div className="text-amber-400 font-bold text-right text-xs md:text-sm group-hover:text-amber-300 transition-colors">{route.price}</div>
                </div>
              ))}
            </div>
            <p className="text-gray-600 text-xs text-center mt-4">
              * Prices are approximate. Toll taxes, parking, and state permits extra.
            </p>
          </div>
        </div>
      </section>

      {/* ==================== BEST FOR SECTION ==================== */}
      <section className="py-20 md:py-28 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/20 to-transparent" />
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-amber-400 mb-3">Ideal Use Cases</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-tight">
              <span className="bg-clip-text text-transparent" style={{ backgroundImage: "linear-gradient(to right, #cbd5e1, #f59e0b, #cbd5e1)" }}>
                Who Should Book This Vehicle?
              </span>
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
            {vehicle.bestFor.map((use, i) => (
              <div
                key={i}
                className="group inline-flex items-center gap-3 px-6 py-3.5 bg-white/[0.04] backdrop-blur-2xl rounded-full border border-white/10 text-gray-300 hover:bg-amber-500/10 hover:border-amber-400/30 hover:text-white transition-all duration-500 hover:scale-105"
              >
                <CheckCircle2 className="w-4 h-4 text-amber-500 group-hover:text-amber-400" />
                <span className="font-medium text-sm">{use}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== TECHNICAL SPECS - Instrument Cluster ==================== */}
      <section className="py-20 md:py-28 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-amber-400 mb-3">Under The Hood</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-tight">
              <span className="bg-clip-text text-transparent" style={{ backgroundImage: "linear-gradient(to right, #f59e0b, #e2e8f0, #f59e0b)" }}>
                Technical Specifications
              </span>
            </h2>
          </div>
          <div className="max-w-2xl mx-auto bg-white/[0.03] backdrop-blur-2xl rounded-3xl border border-white/10 overflow-hidden">
            {Object.entries(vehicle.specs).map(([key, value], i, arr) => (
              <div
                key={key}
                className={`group flex justify-between items-center px-7 py-5 ${
                  i < arr.length - 1 ? "border-b border-white/5" : ""
                } hover:bg-amber-500/5 transition-all duration-300`}
              >
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-amber-500/40 group-hover:bg-amber-400 transition-colors" />
                  <span className="text-gray-400 capitalize text-sm">{key.replace(/([A-Z])/g, " $1").trim()}</span>
                </div>
                <span className="text-white font-bold text-sm">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== HOW TO BOOK - 4-Step Process ==================== */}
      <section className="py-20 md:py-28 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-amber-950/15 to-transparent" />
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-amber-400 mb-3">Simple Process</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-tight">
              <span className="bg-clip-text text-transparent" style={{ backgroundImage: "linear-gradient(to right, #cbd5e1, #f59e0b, #cbd5e1)" }}>
                How to Book
              </span>
            </h2>
          </div>
          <div className="grid md:grid-cols-4 gap-5 max-w-5xl mx-auto">
            {[
              { step: "01", title: "Share Requirements", desc: "Call or WhatsApp with travel date, route, and pickup location", icon: Phone },
              { step: "02", title: "Get Instant Quote", desc: "We provide a transparent quote with no hidden charges", icon: IndianRupee },
              { step: "03", title: "Confirm Booking", desc: "Pay a small advance to confirm your vehicle and driver", icon: CheckCircle },
              { step: "04", title: "Enjoy Your Ride", desc: "Driver arrives at your doorstep on time, every time", icon: Car },
            ].map((s, i) => (
              <div
                key={i}
                className="group relative bg-white/[0.04] backdrop-blur-2xl rounded-3xl border border-white/10 p-7 text-center hover:bg-white/[0.08] hover:border-amber-400/30 hover:shadow-xl hover:shadow-amber-500/10 transition-all duration-500"
              >
                {/* Step number - large background */}
                <div className="absolute top-4 right-5 text-5xl font-black text-white/[0.03] group-hover:text-amber-500/10 transition-colors">{s.step}</div>

                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-500/20 to-slate-500/10 border border-amber-500/20 flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300">
                  <s.icon className="w-6 h-6 text-amber-400" />
                </div>
                <div className="text-[10px] text-amber-400/70 font-bold uppercase tracking-widest mb-2">Step {s.step}</div>
                <h3 className="text-white font-bold mb-2">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>

                {/* Connector line */}
                {i < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 w-6 border-t border-dashed border-white/10" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== ABOUT / DESCRIPTION ==================== */}
      <section className="py-20 md:py-28 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-amber-400 mb-3">Why Choose This Vehicle</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-tight">
              <span className="bg-clip-text text-transparent" style={{ backgroundImage: "linear-gradient(to right, #f59e0b, #e2e8f0, #f59e0b)" }}>
                About {vehicle.name} Rental
              </span>
            </h2>
          </div>
          <div className="bg-white/[0.03] backdrop-blur-2xl rounded-3xl border border-white/10 p-8 md:p-10">
            {vehicle.description.split("\n\n").map((para, i) => (
              <p key={i} className="text-gray-300 leading-relaxed text-base mb-5 last:mb-0">
                {para}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== COMPARE VEHICLES ==================== */}
      {vehicle.comparisons && vehicle.comparisons.length > 0 && (
        <section className="py-20 md:py-28 px-4 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/20 to-transparent" />
          <div className="relative max-w-7xl mx-auto">
            <div className="text-center mb-14">
              <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-amber-400 mb-3">Alternatives</span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-tight">
                <span className="bg-clip-text text-transparent" style={{ backgroundImage: "linear-gradient(to right, #cbd5e1, #f59e0b, #cbd5e1)" }}>
                  Compare With Similar Vehicles
                </span>
              </h2>
            </div>
            <div className="flex flex-wrap justify-center gap-5">
              {vehicle.comparisons.map((slug) => (
                <Link
                  key={slug}
                  href={`/vehicles/${slug}`}
                  className="group inline-flex items-center gap-3 px-8 py-4 bg-white/[0.04] backdrop-blur-2xl rounded-2xl border border-white/10 text-gray-300 hover:bg-amber-500/10 hover:border-amber-400/30 hover:text-white hover:shadow-xl hover:shadow-amber-500/10 transition-all duration-500 hover:scale-105"
                >
                  <Car className="w-5 h-5 text-slate-500 group-hover:text-amber-400 transition-colors" />
                  <span className="font-semibold">
                    {slug.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ")}
                  </span>
                  <ArrowRight className="w-4 h-4 text-slate-600 group-hover:text-amber-400 group-hover:translate-x-1 transition-all" />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <InclusionBadges preset="tour" theme="dark" />

      {/* ==================== FAQ SECTION ==================== */}
      <section className="py-20 md:py-28 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-14">
            <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-amber-400 mb-3">Got Questions?</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-tight">
              <span className="bg-clip-text text-transparent" style={{ backgroundImage: "linear-gradient(to right, #f59e0b, #e2e8f0, #f59e0b)" }}>
                Frequently Asked Questions
              </span>
            </h2>
          </div>
          <div className="space-y-3">
            {vehicle.faqs.map((faq, i) => (
              <div
                key={i}
                className={`bg-white/[0.04] backdrop-blur-2xl rounded-2xl border overflow-hidden transition-all duration-500 ${
                  openFaq === i ? "border-amber-500/30 shadow-lg shadow-amber-500/10" : "border-white/10 hover:border-amber-400/20"
                }`}
              >
                <button
                  onClick={() => toggleFaq(i)}
                  className="w-full flex items-center justify-between p-6 text-left"
                  aria-expanded={openFaq === i}
                >
                  <div className="flex items-center gap-3 pr-4">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors ${
                      openFaq === i ? "bg-amber-500/20" : "bg-white/5"
                    }`}>
                      <span className={`text-xs font-bold ${openFaq === i ? "text-amber-400" : "text-gray-500"}`}>
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <span className={`font-semibold transition-colors ${openFaq === i ? "text-white" : "text-gray-300"}`}>
                      {faq.question}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 flex-shrink-0 transition-all duration-300 ${
                      openFaq === i ? "rotate-180 text-amber-400" : "text-gray-600"
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openFaq === i ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-6 pb-6 pl-[4.25rem]">
                    <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== CROSS LINKS ==================== */}
      <section className="py-14 px-4 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mb-5">Explore More Services</h3>
          <div className="flex flex-wrap gap-3">
            {[
              { label: "All Vehicles", href: "/vehicles" },
              { label: "Tempo Traveller", href: "/tempo-traveller" },
              { label: "Wedding Cars", href: "/wedding" },
              { label: "Airport Service", href: "/airport-service" },
              { label: "Sightseeing Tours", href: "/sightseeing" },
              { label: "Bus Routes", href: "/bus-routes" },
              { label: "All Services", href: "/services" },
              { label: "Tour Packages", href: "/tour-package" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 bg-white/[0.04] rounded-xl border border-white/10 text-gray-500 hover:text-amber-400 hover:border-amber-400/30 hover:bg-amber-500/5 transition-all duration-300 text-sm font-medium"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== FINAL CTA ==================== */}
      <section className="py-24 md:py-32 px-4 relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 bg-gradient-to-t from-amber-950/30 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-slate-400/8 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1.5s" }} />

        <div className="relative max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            Ready to Book?
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-4 tracking-tight">
            Book {vehicle.name} <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-yellow-300">Now</span>
          </h2>
          <p className="text-gray-400 mb-10 max-w-xl mx-auto text-lg">
            Starting at <span className="text-amber-400 font-bold">{vehicle.perKmRate.outstation}</span> for outstation trips. Professional driver, well-maintained vehicle, 24/7 support included.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              onClick={() => trackPhoneCall('vehicle_hire')} href="tel:+917668570551"
              className="group inline-flex items-center gap-3 bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-white px-10 py-5 rounded-2xl font-bold text-lg transition-all duration-300 shadow-2xl shadow-amber-600/30 hover:shadow-amber-500/50 hover:scale-105"
            >
              <Phone className="w-6 h-6 group-hover:animate-pulse" />
              Call: +91 76685 70551
            </a>
            <a
              onClick={() => trackWhatsAppClick('vehicle_hire')} href="https://wa.me/917668570551"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 bg-gradient-to-r from-green-600 to-emerald-500 hover:from-green-500 hover:to-emerald-400 text-white px-10 py-5 rounded-2xl font-bold text-lg transition-all duration-300 shadow-2xl shadow-green-600/30 hover:shadow-green-500/50 hover:scale-105"
            >
              <WhatsAppIcon className="w-6 h-6" />
              WhatsApp Booking
            </a>
          </div>
        </div>
      </section>

      {/* Cross-Service Links */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">Explore More Services</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { href: '/sightseeing', label: 'Sightseeing Tours' },
              { href: '/airport-service', label: 'Airport Taxi Service' },
              { href: '/wedding', label: 'Wedding Car Rental' },
              { href: '/tour-package', label: 'Tour Packages' },
              { href: '/tempo-traveller', label: 'Tempo Traveller' },
              { href: '/outstation-cabs', label: 'Outstation Cabs' },
              { href: '/bus-routes', label: 'Bus Routes' },
              { href: '/services', label: 'All Services' },
            ].map((link) => (
              <Link key={link.href} href={link.href} className="p-4 bg-white/[0.04] backdrop-blur-xl rounded-xl border border-white/10 hover:border-amber-500/30 hover:bg-white/[0.08] transition-all duration-300 text-center">
                <span className="text-white/80 hover:text-white text-sm font-medium">{link.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Shimmer animation keyframe */}
      <style jsx>{`
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
      `}</style>
    </div>
  );
}
