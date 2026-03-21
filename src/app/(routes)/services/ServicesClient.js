"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Star, Car, Users, MapPin, Clock, Phone, Shield, Heart,
  CheckCircle, ArrowRight, Headphones, Navigation, Crown,
  Plane, Building2, Compass, Mountain, Route, Bus, Sunrise,
  ShieldCheck, Map, ChevronRight, Sparkles, Zap, MessageCircle,
} from "@/components/ui/icons";
import { WhatsAppIcon } from "@/components/ui/icons";
import { phoneNumber } from "@/utilis/data";
import MobileStickyBar from "@/components/ui/MobileStickyBar";
import LiveActivityBadge from "@/components/shared/LiveActivityBadge";
import GoogleReviewsBadge from "@/components/shared/GoogleReviewsBadge";
import { trackWhatsAppClick, trackPhoneCall } from "@/utilis/analytics";

/* ═══════════════════════════════════════════════════════
   DATA
   ═══════════════════════════════════════════════════════ */
const SERVICE_CATEGORIES = [
  { name: "Outstation Cabs", desc: "Intercity travel with pro drivers", icon: Car, image: "/images/car/WhatsApp Image 2025-01-13 at 14.34.22 (1).webp", href: "/outstation-cabs", gradient: "from-blue-500 to-indigo-600", accent: "#4f46e5", count: "9 services", price: "\u20B911/km" },
  { name: "Airport Transfers", desc: "24/7 flight-tracked pickup & drop", icon: Plane, image: "/images/airport_section.jpg", href: "/airport-service", gradient: "from-cyan-500 to-blue-600", accent: "#0891b2", count: "50+ airports", price: "\u20B91,500+" },
  { name: "Wedding Cars", desc: "Luxury cars & Baraat vehicles", icon: Heart, image: "/images/car/WhatsApp Image 2025-01-13 at 14.34.26.webp", href: "/wedding", gradient: "from-pink-500 to-rose-600", accent: "#e11d48", count: "5 options", price: "\u20B915,000+" },
  { name: "Sightseeing Tours", desc: "Guided city tours across India", icon: Compass, image: "/images/sightseeing/Sightseeingpage_hero_section_image.jpg", href: "/sightseeing", gradient: "from-emerald-500 to-teal-600", accent: "#059669", count: "6 tours", price: "\u20B92,500+" },
  { name: "Same-Day Tours", desc: "Explore & return the same day", icon: Sunrise, image: "/images/sightseeing/Agra/Taj_mahal.jpg", href: "/same-day-agra-tour-from-delhi", gradient: "from-amber-500 to-orange-600", accent: "#d97706", count: "6 tours", price: "\u20B94,500+" },
  { name: "Tempo Traveller", desc: "12-26 seater for group trips", icon: Bus, image: "/images/tempo/17_seater.jpg", href: "/tempo-traveller", gradient: "from-orange-500 to-red-600", accent: "#ea580c", count: "4 options", price: "\u20B920/km" },
  { name: "Trip Planning", desc: "Honeymoon, family & friends trips", icon: Map, image: "/images/sightseeing/Kashmir_Valley/Dal_Lake.jpg", href: "/tour-package/golden-triangle-tour", gradient: "from-violet-500 to-purple-600", accent: "#7c3aed", count: "6 packages", price: "\u20B98,000+" },
  { name: "Corporate Travel", desc: "Professional employee transport", icon: Building2, image: "/images/car/WhatsApp Image 2025-01-13 at 14.34.22.webp", href: "/corporate-transportation-service", gradient: "from-sky-500 to-indigo-600", accent: "#0284c7", count: "Custom plans", price: "Custom" },
  { name: "Specialty Services", desc: "Women safety, pet-friendly & more", icon: ShieldCheck, image: "/images/car/WhatsApp Image 2025-01-13 at 14.34.18.webp", href: "/women-safety-cab-service", gradient: "from-teal-500 to-emerald-600", accent: "#0d9488", count: "5 services", price: "\u20B911/km" },
];

const POPULAR_SERVICES = [
  { title: "Outstation Cabs", href: "/outstation-cabs", image: "/images/car/WhatsApp Image 2025-01-13 at 14.34.22 (1).webp", desc: "Intercity travel starting \u20B911/km with professional drivers", price: "\u20B911/km", gradient: "from-blue-500 to-indigo-600", accent: "#4f46e5" },
  { title: "Airport Taxi", href: "/airport-service", image: "/images/airport_section.jpg", desc: "24/7 flight-tracked pickup & drop at 50+ airports", price: "\u20B91,500+", gradient: "from-cyan-500 to-blue-600", accent: "#0891b2" },
  { title: "Wedding Car Rental", href: "/wedding", image: "/images/car/WhatsApp Image 2025-01-13 at 14.34.26.webp", desc: "Fortuner, Innova & luxury cars for your big day", price: "\u20B915,000+", gradient: "from-pink-500 to-rose-600", accent: "#e11d48" },
  { title: "Sightseeing Tours", href: "/sightseeing", image: "/images/sightseeing/Sightseeingpage_hero_section_image.jpg", desc: "Guided city tours across India with expert drivers", price: "\u20B92,500+", gradient: "from-emerald-500 to-teal-600", accent: "#059669" },
  { title: "Tempo Traveller", href: "/tempo-traveller", image: "/images/tempo/17_seater.jpg", desc: "12-26 seater for group travel & pilgrimages", price: "\u20B920/km", gradient: "from-orange-500 to-red-600", accent: "#ea580c" },
  { title: "Chardham Yatra", href: "/chardham-yatra", image: "/images/sightseeing/Char_Dham/Kedarnath_Temple.jpg", desc: "Complete Chardham pilgrimage with dedicated driver", price: "\u20B918,000+", gradient: "from-emerald-500 to-teal-600", accent: "#059669" },
];

const COMPARISON_GUIDES = [
  { title: "Sedan vs SUV", href: "/sedan-vs-suv", icon: Car },
  { title: "SUV for Hills", href: "/sedan-vs-suv-for-hill-stations", icon: Mountain },
  { title: "Tempo vs Bus", href: "/tempo-vs-bus", icon: Bus },
  { title: "Tempo vs Mini Bus", href: "/tempo-traveller-vs-mini-bus", icon: Bus },
  { title: "Bus vs Tempo Wedding", href: "/bus-vs-tempo-for-wedding", icon: Heart },
  { title: "12 vs 17 Seater", href: "/12-seater-vs-17-seater-tempo", icon: Users },
  { title: "Self Drive vs Chauffeur", href: "/self-drive-vs-chauffeur", icon: Route },
  { title: "One-Way vs Round Trip", href: "/one-way-vs-round-trip-cab", icon: Navigation },
  { title: "Innova vs Ertiga", href: "/innova-vs-ertiga-for-outstation", icon: Car },
  { title: "Fortuner vs Innova", href: "/fortuner-vs-innova-crysta", icon: Crown },
  { title: "Corporate vs Aggregators", href: "/corporate-cab-vs-aggregators", icon: Building2 },
  { title: "Road Trip Guide", href: "/india-road-trip-guide-for-tourists", icon: Compass },
  { title: "Shimla vs Manali", href: "/shimla-vs-manali", icon: Mountain },
  { title: "Rishikesh vs Manali", href: "/rishikesh-vs-manali", icon: Mountain },
  { title: "Kashmir vs Ladakh", href: "/kashmir-vs-ladakh", icon: Compass },
  { title: "Jaipur vs Udaipur", href: "/jaipur-vs-udaipur", icon: MapPin },
];

const TOP_CITIES = [
  { name: "Delhi", image: "/images/sightseeing/Delhi/Delhi_hero_section.jpg", tag: "NCR Region" },
  { name: "Agra", image: "/images/sightseeing/Agra/Baby_Taj.jpg", tag: "City of Taj Mahal" },
  { name: "Jaipur", image: "/images/sightseeing/Jaipur/jaipur_hero_section_image.jpg", tag: "Pink City" },
  { name: "Shimla", image: "/images/sightseeing/Shimla/the ridge shimla.jpg", tag: "Queen of Hills" },
  { name: "Manali", image: "/images/sightseeing/Manali/Hidimba Temple.jpg", tag: "Adventure Capital" },
  { name: "Varanasi", image: "/images/sightseeing/Varanasi/varanasi_hero_section.jpg", tag: "Spiritual Capital" },
  { name: "Udaipur", image: "/images/sightseeing/Udaipur/Udaipur_hero_section.jpg", tag: "City of Lakes" },
  { name: "Rishikesh", image: "/images/sightseeing/Rishikesh/Rishikesh_hero_section.jpg", tag: "Yoga Capital" },
  { name: "Amritsar", image: "/images/sightseeing/Amritsar/Amristar_hero_section.jpg", tag: "Golden Temple" },
  { name: "Jaisalmer", image: "/images/sightseeing/Jaisalmer/Jaisalmer_hero_section.jpg", tag: "Golden City" },
  { name: "Srinagar", image: "/images/sightseeing/Srinagar/Srinagar_hero_section.jpg", tag: "Kashmir Valley" },
  { name: "Haridwar", image: "/images/sightseeing/Haridwar/Haridwar_hero_section.jpg", tag: "Holy City" },
];

const ALSO_SERVING = [
  "Jodhpur","Ayodhya","Ahmedabad","Mathura","Mussoorie","Jim Corbett","Pushkar","Ajmer",
  "Mount Abu","Bikaner","Ranthambore","Dharamshala","Kasauli","Dalhousie","Kasol","Gulmarg",
  "Pahalgam","Leh Ladakh","Noida","Gurgaon","Nainital","Lucknow","Chandigarh","Dehradun",
];

/* ═══════════════════════════════════════════════════════
   FOLD 1 — PREMIUM HERO: Dark cinematic with floating glass stats
   ═══════════════════════════════════════════════════════ */
function HeroSection() {
  return (
    <section className="relative overflow-hidden min-h-[700px] sm:min-h-[750px]">
      {/* Background Image */}
      <Image
        src="/images/about/about_banner.webp"
        alt="Triveni Cabs - Premium Cab Services Across India"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
        quality={90}
      />
      {/* Multi-layer overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/50 to-black/85" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30" />
      {/* Decorative gradient orbs */}
      <div className="absolute top-20 right-[10%] w-[400px] h-[400px] bg-amber-500/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 left-[5%] w-[300px] h-[300px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
      {/* Gold accent bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FACF2D] via-amber-400 to-orange-400 z-10" />
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{
        backgroundImage: "linear-gradient(rgba(255,255,255,.15) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.15) 1px,transparent 1px)",
        backgroundSize: "80px 80px"
      }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 sm:pt-36 pb-12 sm:pb-16">
        <div className="grid lg:grid-cols-5 gap-10 lg:gap-16 items-center">
          {/* Left — Content */}
          <div className="lg:col-span-3 text-center lg:text-left">
            {/* Trust micro-strip */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="flex items-center justify-center lg:justify-start gap-2 sm:gap-4 mb-7 flex-wrap"
            >
              <div className="flex items-center gap-1.5 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full px-4 py-2 shadow-[0_4px_20px_rgba(250,207,45,0.1)]">
                <div className="flex gap-0.5">
                  {[1,2,3,4,5].map(i => <Star key={i} className="w-3.5 h-3.5 text-[#FACF2D] fill-[#FACF2D]" />)}
                </div>
                <div className="w-px h-4 bg-white/20" />
                <span className="text-xs font-bold text-[#FACF2D]">4.9</span>
                <span className="text-[10px] text-white/60">10,000+ Trips</span>
              </div>
              <div className="flex items-center gap-3 text-[11px] text-white/60 font-medium">
                <span className="flex items-center gap-1"><Shield className="w-3 h-3 text-green-400" /> 100% Safe</span>
                <span className="flex items-center gap-1"><Zap className="w-3 h-3 text-amber-400" /> ~2 min Response</span>
              </div>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-black text-white leading-[1.05] tracking-tight drop-shadow-lg mb-5"
            >
              Every Service{" "}
              <br className="hidden sm:block" />
              You Need.{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FACF2D] via-amber-400 to-orange-400">
                One Platform.
              </span>
            </motion.h1>

            {/* Pricing strip */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-center justify-center lg:justify-start gap-3 sm:gap-5 mb-4 flex-wrap"
            >
              {[
                { type: "Sedan", price: "\u20B911/km" },
                { type: "SUV", price: "\u20B914/km" },
                { type: "Tempo", price: "\u20B920/km" },
              ].map((v, i) => (
                <span key={i} className="text-base sm:text-lg font-black text-white">
                  {v.type}{" "}<span className="text-[#FACF2D]">{v.price}</span>
                </span>
              ))}
            </motion.div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="text-sm text-white/50 mb-8 max-w-lg mx-auto lg:mx-0"
            >
              Cabs &middot; Airport Transfers &middot; Wedding Cars &middot; Tours &middot; Corporate Travel &middot; Group Transport
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap gap-3 justify-center lg:justify-start"
            >
              <Link
                href={`https://wa.me/91${phoneNumber}?text=Hello!%20I%27m%20interested%20in%20booking.%20Please%20share%20a%20quote.`}
                target="_blank"
                onClick={trackWhatsAppClick}
                className="group flex items-center gap-2.5 px-8 py-4 bg-gradient-to-r from-[#FACF2D] to-amber-400 text-gray-900 rounded-2xl font-bold text-sm hover:shadow-[0_8px_30px_rgba(250,207,45,0.35)] hover:scale-[1.02] transition-all duration-300 border border-amber-300/50"
              >
                Get Free Quote
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href={`tel:${phoneNumber}`}
                onClick={trackPhoneCall}
                className="flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-xl border border-white/20 text-white rounded-2xl font-semibold text-sm hover:bg-white/20 hover:border-white/30 transition-all duration-300"
              >
                <Phone className="w-4 h-4" /> {phoneNumber}
              </Link>
            </motion.div>

            {/* Live activity */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex justify-center lg:justify-start mt-6"
            >
              <LiveActivityBadge type="booked" min={8} max={24} />
            </motion.div>
          </div>

          {/* Right — Floating Glass Stat Cards (desktop) */}
          <div className="lg:col-span-2 hidden lg:block">
            <div className="relative h-[420px]">
              {[
                { value: "\u20B911/km", label: "Starting Rate", icon: Sparkles, top: "2%", left: "8%", delay: 0.4 },
                { value: "55+", label: "Services", icon: Car, top: "0%", left: "55%", delay: 0.5 },
                { value: "10,000+", label: "Trips Done", icon: Route, top: "50%", left: "0%", delay: 0.6 },
                { value: "4.9/5", label: "Rating", icon: Star, top: "52%", left: "50%", delay: 0.7 },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8, y: 30 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: stat.delay }}
                  className="absolute"
                  style={{ top: stat.top, left: stat.left }}
                >
                  <div className="px-7 py-6 rounded-2xl bg-white/10 backdrop-blur-2xl border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.15)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.2)] hover:-translate-y-1 hover:bg-white/15 transition-all duration-500 min-w-[160px]">
                    <stat.icon className="w-4.5 h-4.5 text-[#FACF2D] mb-2.5" />
                    <div className="text-2xl font-black text-white tracking-tight">{stat.value}</div>
                    <div className="text-[10px] text-white/50 font-semibold uppercase tracking-[0.2em] mt-1">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile stats grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3 lg:hidden"
        >
          {[
            { value: "\u20B911/km", label: "Starting Rate" },
            { value: "55+", label: "Services" },
            { value: "10,000+", label: "Trips Done" },
            { value: "4.9/5", label: "Rating" },
          ].map((s, i) => (
            <div key={i} className="px-4 py-4 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/15 text-center">
              <div className="text-xl font-black text-white">{s.value}</div>
              <div className="text-[10px] text-white/50 font-semibold uppercase tracking-wider mt-0.5">{s.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Quick service chips */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-wrap justify-center gap-2 mt-8 max-w-3xl mx-auto"
        >
          {SERVICE_CATEGORIES.map((cat, i) => (
            <Link key={i} href={cat.href}>
              <span className="flex items-center gap-1.5 px-3.5 py-2 bg-white/[0.07] backdrop-blur-xl border border-white/10 rounded-full text-[11px] text-white/70 font-medium hover:bg-white/15 hover:text-white hover:border-white/20 transition-all duration-300">
                <cat.icon className="w-3 h-3" />
                {cat.name}
              </span>
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   FOLD 2 — PREMIUM SERVICE CATEGORIES: Bento glass grid
   ═══════════════════════════════════════════════════════ */
function ServiceCategoriesSection() {
  const featured = SERVICE_CATEGORIES.slice(0, 3);
  const rest = SERVICE_CATEGORIES.slice(3);

  return (
    <section className="relative py-16 sm:py-24 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50/80 via-white to-white pointer-events-none" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-amber-100/30 rounded-full blur-[200px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-100/20 rounded-full blur-[180px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-50 border border-amber-200/60 mb-6">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span className="text-[11px] font-bold text-amber-700 uppercase tracking-[0.15em]">Complete Service Suite</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 tracking-tight mb-4">
            Browse Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FACF2D] via-amber-500 to-orange-500">Services</span>
          </h2>
          <p className="text-gray-500 text-sm sm:text-base max-w-xl mx-auto">9 categories, 55+ services — from daily rides to dream vacations</p>
        </motion.div>

        {/* Featured — Top 3 as large bento cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mb-5">
          {featured.map((cat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link href={cat.href} className="group block h-full">
                <div className="relative h-72 sm:h-80 overflow-hidden rounded-[24px] bg-white/60 backdrop-blur-xl border border-white/80 shadow-[0_4px_30px_rgba(0,0,0,0.06)] hover:shadow-[0_12px_50px_rgba(0,0,0,0.14)] hover:-translate-y-1.5 transition-all duration-500">
                  <Image
                    src={cat.image}
                    alt={cat.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    sizes="(max-width:640px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  {/* Floating icon badge */}
                  <div className={`absolute top-4 left-4 w-12 h-12 rounded-2xl bg-gradient-to-br ${cat.gradient} flex items-center justify-center shadow-xl`} style={{ boxShadow: `0 8px 24px ${cat.accent}40` }}>
                    <cat.icon className="w-5 h-5 text-white" />
                  </div>

                  {/* Price + count badge */}
                  <div className="absolute top-4 right-4 flex flex-col items-end gap-2">
                    <div className="px-3 py-1.5 bg-white/90 backdrop-blur-sm rounded-xl shadow-lg">
                      <span className="text-sm font-black text-gray-900">{cat.price}</span>
                    </div>
                    <div className="px-2.5 py-1 bg-white/20 backdrop-blur-md rounded-lg border border-white/30">
                      <span className="text-[10px] font-bold text-white uppercase tracking-wider">{cat.count}</span>
                    </div>
                  </div>

                  {/* Bottom content */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-2 h-2 rounded-full" style={{ backgroundColor: cat.accent }} />
                      <div className="h-[1px] w-8 group-hover:w-14 transition-all duration-500" style={{ backgroundColor: `${cat.accent}60` }} />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-black text-white group-hover:text-[#FACF2D] transition-colors duration-300 mb-1">{cat.name}</h3>
                    <p className="text-sm text-white/70">{cat.desc}</p>
                    <div className="mt-3 flex items-center gap-1.5 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-400">
                      <span className="text-xs font-bold text-[#FACF2D]">Explore Services</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#FACF2D] group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Remaining 6 in compact glass grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {rest.map((cat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
            >
              <Link href={cat.href} className="group block">
                <div className="relative h-48 sm:h-56 overflow-hidden rounded-[20px] bg-white/60 backdrop-blur-xl border border-white/80 shadow-[0_4px_24px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_40px_rgba(0,0,0,0.12)] hover:-translate-y-1 transition-all duration-500">
                  <Image
                    src={cat.image}
                    alt={cat.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    sizes="(max-width:640px) 50vw, 16vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />

                  {/* Icon */}
                  <div className={`absolute top-3 left-3 w-9 h-9 rounded-xl bg-gradient-to-br ${cat.gradient} flex items-center justify-center shadow-lg`}>
                    <cat.icon className="w-4 h-4 text-white" />
                  </div>

                  {/* Price */}
                  <div className="absolute top-3 right-3 px-2 py-0.5 bg-white/90 backdrop-blur-sm rounded-lg">
                    <span className="text-[10px] font-bold text-gray-900">{cat.price}</span>
                  </div>

                  {/* Bottom */}
                  <div className="absolute bottom-0 left-0 right-0 p-3">
                    <h3 className="text-sm font-bold text-white group-hover:text-[#FACF2D] transition-colors duration-300 leading-tight">{cat.name}</h3>
                    <p className="text-[10px] text-white/60 mt-0.5 line-clamp-1">{cat.desc}</p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Premium CTA Strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 relative overflow-hidden rounded-2xl"
        >
          <div className="absolute inset-0 bg-gray-900" />
          <div className="absolute inset-0 opacity-[0.04]" style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)",
            backgroundSize: "20px 20px"
          }} />
          <div className="absolute top-0 right-0 w-[300px] h-[200px] bg-amber-500/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative flex flex-col sm:flex-row items-center justify-between gap-4 px-6 sm:px-8 py-5">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#FACF2D] to-amber-400 flex items-center justify-center shadow-lg shadow-amber-500/20 flex-shrink-0">
                <MessageCircle className="w-6 h-6 text-gray-900" />
              </div>
              <div>
                <p className="text-white font-bold text-base">Not sure which service?</p>
                <p className="text-white/40 text-sm">Our travel experts will recommend the best option</p>
              </div>
            </div>
            <div className="flex gap-3 w-full sm:w-auto">
              <Link
                href={`tel:${phoneNumber}`}
                onClick={trackPhoneCall}
                className="flex-1 sm:flex-auto flex items-center justify-center gap-2 px-6 py-3 bg-white/10 border border-white/20 rounded-xl text-white text-sm font-semibold hover:bg-white/20 transition-all duration-300"
              >
                <Phone className="w-4 h-4" /> Call Now
              </Link>
              <Link
                href={`https://wa.me/91${phoneNumber}?text=Hi!%20I%20need%20help%20choosing%20a%20service.`}
                target="_blank"
                onClick={trackWhatsAppClick}
                className="flex-1 sm:flex-auto flex items-center justify-center gap-2 px-6 py-3 bg-green-600 rounded-xl text-white text-sm font-semibold hover:bg-green-500 hover:shadow-lg hover:shadow-green-600/20 transition-all duration-300"
              >
                <WhatsAppIcon className="w-4 h-4" /> WhatsApp
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   FOLD 3 — PREMIUM POPULAR SERVICES: Glass bento layout
   ═══════════════════════════════════════════════════════ */
function PopularServicesSection() {
  const [hero, ...others] = POPULAR_SERVICES;

  return (
    <section className="relative py-16 sm:py-24 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-[5%] w-[500px] h-[500px] bg-violet-100/20 rounded-full blur-[200px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-end justify-between mb-12"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-50 border border-amber-200/60 mb-5">
              <Zap className="w-3.5 h-3.5 text-amber-600" />
              <span className="text-[11px] font-bold text-amber-700 uppercase tracking-[0.15em]">Most Booked</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 tracking-tight">Popular Services</h2>
            <p className="text-gray-500 text-sm sm:text-base mt-2 max-w-md">Our most popular services booked by 10,000+ travellers</p>
          </div>
          <Link href="/outstation-cabs" className="hidden sm:flex items-center gap-2 px-5 py-2.5 rounded-xl border border-gray-200 text-sm font-semibold text-gray-600 hover:text-amber-600 hover:border-amber-300 hover:bg-amber-50 transition-all duration-300">
            View All <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>

        {/* Bento layout: Hero card + grid */}
        <div className="grid lg:grid-cols-2 gap-4 sm:gap-5 mb-5">
          {/* Large hero card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:row-span-2"
          >
            <Link href={hero.href} className="group block h-full">
              <div className="relative h-full min-h-[320px] sm:min-h-[400px] overflow-hidden rounded-[24px] bg-white/60 backdrop-blur-xl border border-white/80 shadow-[0_4px_30px_rgba(0,0,0,0.06)] hover:shadow-[0_12px_50px_rgba(0,0,0,0.14)] hover:-translate-y-1 transition-all duration-500">
                <Image
                  src={hero.image}
                  alt={hero.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width:1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/20 to-transparent lg:block hidden" />

                {/* Price badge */}
                <div className="absolute top-5 right-5 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-xl shadow-lg">
                  <span className="text-lg font-black text-gray-900">{hero.price}</span>
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: hero.accent }} />
                    <div className="h-[2px] w-10 group-hover:w-16 transition-all duration-500" style={{ backgroundColor: `${hero.accent}50` }} />
                    <span className="text-[10px] font-bold text-white/60 uppercase tracking-[0.2em]">Most Popular</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black text-white group-hover:text-[#FACF2D] transition-colors duration-300 mb-2">{hero.title}</h3>
                  <p className="text-sm text-white/70 max-w-sm">{hero.desc}</p>
                  <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-400">
                    <span className="text-xs font-bold text-white">View Details</span>
                    <ArrowRight className="w-3.5 h-3.5 text-white group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Right side — 2 cards stacked */}
          {others.slice(0, 2).map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i + 1) * 0.1 }}
            >
              <Link href={service.href} className="group block h-full">
                <div className="relative h-full min-h-[190px] overflow-hidden rounded-[20px] bg-white/60 backdrop-blur-xl border border-white/80 shadow-[0_4px_24px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_40px_rgba(0,0,0,0.12)] hover:-translate-y-1 transition-all duration-500">
                  <Image src={service.image} alt={service.title} fill className="object-cover group-hover:scale-110 transition-transform duration-700" sizes="(max-width:1024px) 100vw, 50vw" />
                  <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/50 to-transparent" />

                  <div className="absolute inset-0 flex items-end p-5 sm:p-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-2 h-2 rounded-full" style={{ backgroundColor: service.accent }} />
                        <div className="h-[1px] w-8 group-hover:w-12 transition-all duration-500" style={{ backgroundColor: `${service.accent}40` }} />
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-0.5">{service.title}</h3>
                      <p className="text-xs text-gray-500 line-clamp-1">{service.desc}</p>
                    </div>
                    <div className="px-3 py-1.5 bg-white/80 backdrop-blur-sm rounded-xl shadow-sm flex-shrink-0 ml-3">
                      <span className="text-sm font-black text-gray-900">{service.price}</span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Bottom 3 cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">
          {others.slice(2).map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
            >
              <Link href={service.href} className="group block">
                <div className="relative overflow-hidden rounded-[20px] bg-white/60 backdrop-blur-xl border border-white/80 shadow-[0_4px_24px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_40px_rgba(0,0,0,0.12)] hover:-translate-y-1 transition-all duration-500">
                  <div className="relative h-40 sm:h-48 overflow-hidden">
                    <Image src={service.image} alt={service.title} fill className="object-cover group-hover:scale-110 transition-transform duration-700" sizes="(max-width:640px) 100vw, 33vw" />
                    <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-60" />
                    <div className="absolute bottom-3 right-3 px-3 py-1.5 bg-white/90 backdrop-blur-sm rounded-xl shadow-sm">
                      <span className="text-sm font-black text-gray-900">{service.price}</span>
                    </div>
                  </div>
                  <div className="p-4 sm:p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-2 h-2 rounded-full" style={{ backgroundColor: service.accent }} />
                      <div className="h-[1px] w-8 group-hover:w-12 transition-all duration-500" style={{ backgroundColor: `${service.accent}40` }} />
                    </div>
                    <h3 className="text-base font-bold text-gray-900 mb-1">{service.title}</h3>
                    <p className="text-xs text-gray-500 line-clamp-2 leading-relaxed">{service.desc}</p>
                    <div className="mt-3 flex items-center gap-1.5 opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-400">
                      <span className="text-xs font-semibold" style={{ color: service.accent }}>View Details</span>
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" style={{ color: service.accent }} />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   FOLD 4 — PREMIUM TRUST & SOCIAL PROOF
   ═══════════════════════════════════════════════════════ */
function TrustSection() {
  return (
    <section className="relative py-16 sm:py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50/80 via-white to-amber-50/20 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-amber-100/20 rounded-full blur-[200px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats — Glass cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {[
            { value: "10,000+", label: "Trips Completed", icon: Route, gradient: "from-amber-400 to-orange-500" },
            { value: "5,000+", label: "Expert Drivers", icon: Users, gradient: "from-blue-500 to-indigo-600" },
            { value: "50+", label: "Cities Covered", icon: MapPin, gradient: "from-emerald-500 to-teal-600" },
            { value: "4.9/5", label: "Customer Rating", icon: Star, gradient: "from-violet-500 to-purple-600" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative px-5 py-7 rounded-[20px] bg-white/70 backdrop-blur-xl border border-white/80 shadow-[0_4px_30px_rgba(0,0,0,0.06)] text-center group hover:shadow-[0_8px_40px_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-all duration-500"
            >
              <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${stat.gradient} flex items-center justify-center shadow-lg mx-auto mb-4`}>
                <stat.icon className="w-5 h-5 text-white" />
              </div>
              <div className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight">{stat.value}</div>
              <div className="text-xs text-gray-500 font-semibold mt-1 uppercase tracking-wider">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight">
            Why 10,000+ Travellers{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FACF2D] to-amber-500">Choose Us</span>
          </h2>
        </motion.div>

        {/* Features — Premium glass cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
          {[
            { title: "Lowest Prices", desc: "Starting \u20B911/km, no surge pricing, no hidden charges ever", icon: Sparkles, gradient: "from-amber-400 to-orange-500" },
            { title: "Verified Drivers", desc: "Background-checked, trained & rated 4.8+ avg drivers", icon: ShieldCheck, gradient: "from-blue-500 to-indigo-600" },
            { title: "24/7 Support", desc: "Dedicated support via call, WhatsApp or email anytime", icon: Headphones, gradient: "from-emerald-500 to-teal-600" },
            { title: "No Hidden Fees", desc: "Transparent pricing — what you see is what you pay", icon: CheckCircle, gradient: "from-violet-500 to-purple-600" },
          ].map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="p-5 sm:p-6 rounded-[20px] bg-white/70 backdrop-blur-xl border border-white/80 shadow-[0_4px_24px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_40px_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-all duration-500 group"
            >
              <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center shadow-lg mb-4`}>
                <feature.icon className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-base font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Google Reviews */}
        <div className="flex justify-center mb-10">
          <GoogleReviewsBadge variant="compact" />
        </div>

        {/* Premium Testimonials */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {[
            { name: "Rajesh Kumar", city: "Delhi \u2192 Agra Trip", text: "Booked outstation cab for Agra. Driver was on time, car was clean and AC worked perfectly. Best rates compared to other services. Will definitely book again!", rating: 5 },
            { name: "Priya Sharma", city: "Wedding Car Booking", text: "Used Triveni for our wedding. The decorated Fortuner was stunning! Driver was professional and punctual. Everyone complimented the car. Highly recommend!", rating: 5 },
          ].map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative p-6 sm:p-8 rounded-[24px] bg-white/70 backdrop-blur-xl border border-white/80 shadow-[0_4px_30px_rgba(0,0,0,0.06)]"
            >
              {/* Large quote mark */}
              <div className="absolute top-4 right-6 text-6xl sm:text-7xl font-serif text-amber-200/50 leading-none select-none">&ldquo;</div>

              <div className="relative">
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: review.rating }).map((_, j) => (
                    <Star key={j} className="w-4.5 h-4.5 text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <p className="text-gray-600 leading-relaxed mb-6 text-sm sm:text-base">{review.text}</p>
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#FACF2D] to-amber-400 flex items-center justify-center shadow-lg">
                    <span className="text-sm font-bold text-gray-900">{review.name.charAt(0)}</span>
                  </div>
                  <div>
                    <p className="text-base font-bold text-gray-900">{review.name}</p>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-gray-500">{review.city}</span>
                      <span className="flex items-center gap-1 text-[10px] text-green-600 font-bold bg-green-50 px-2 py-0.5 rounded-full">
                        <CheckCircle className="w-3 h-3" /> Verified
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   FOLD 5 — PREMIUM CITIES + COMPARE + FINAL CTA
   ═══════════════════════════════════════════════════════ */
function CitiesCTASection() {
  return (
    <section className="relative pt-16 sm:pt-24 pb-28 sm:pb-16 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-amber-100/25 rounded-full blur-[200px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cities Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-50 border border-amber-200/60 mb-6">
            <MapPin className="w-3.5 h-3.5 text-amber-600" />
            <span className="text-[11px] font-bold text-amber-700 uppercase tracking-[0.15em]">Nationwide Coverage</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 tracking-tight mb-4">
            Available in{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FACF2D] to-amber-500">50+ Cities</span>
          </h2>
          <p className="text-gray-500 text-sm sm:text-base max-w-xl mx-auto">Premium cab services across major destinations in India</p>
        </motion.div>

        {/* Premium City Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
          {TOP_CITIES.map((city, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
            >
              <Link href={`/${city.name.toLowerCase()}`} className="group block">
                <div className="relative h-48 sm:h-56 rounded-[20px] overflow-hidden bg-white/60 backdrop-blur-xl border border-white/80 shadow-[0_4px_24px_rgba(0,0,0,0.05)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.12)] hover:-translate-y-1.5 transition-all duration-500">
                  <Image src={city.image} alt={`${city.name} cab service`} fill sizes="(max-width:640px) 50vw,(max-width:1024px) 33vw,25vw" className="object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
                    <span className="inline-block px-2.5 py-0.5 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-[9px] text-white font-bold uppercase tracking-widest mb-2">
                      {city.tag}
                    </span>
                    <h3 className="text-lg font-bold text-white group-hover:text-[#FACF2D] transition-colors duration-300">{city.name}</h3>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Also Serving */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mb-16">
          <p className="text-[10px] text-gray-400 font-bold uppercase tracking-[0.25em] mb-4">Also Serving</p>
          <div className="flex flex-wrap justify-center gap-2 max-w-4xl mx-auto">
            {ALSO_SERVING.map((c, i) => (
              <Link key={i} href={`/${c.toLowerCase().replace(/\s+/g, "-")}`}>
                <span className="px-3.5 py-1.5 bg-white/70 backdrop-blur border border-gray-200/60 rounded-full text-[11px] font-medium text-gray-400 hover:text-amber-600 hover:border-amber-300 hover:bg-amber-50 transition-all duration-300 inline-block shadow-sm">{c}</span>
              </Link>
            ))}
          </div>
        </motion.div>

        {/* Compare & Choose — Premium design */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center shadow-lg shadow-amber-300/30">
              <Navigation className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight">Compare &amp; Choose</h3>
              <p className="text-gray-500 mt-0.5 text-sm">Helpful guides to pick the right service</p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {COMPARISON_GUIDES.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.03 }}
              >
                <Link href={item.href}>
                  <div className="group flex items-center gap-3 p-4 rounded-2xl bg-white/70 backdrop-blur-xl border border-gray-200/50 hover:border-amber-300/60 hover:bg-amber-50/50 hover:shadow-md transition-all duration-300">
                    <div className="w-9 h-9 rounded-xl bg-gray-100 flex items-center justify-center group-hover:bg-amber-100 transition-colors duration-300 flex-shrink-0">
                      <item.icon className="w-4 h-4 text-gray-400 group-hover:text-amber-600 transition-colors" />
                    </div>
                    <span className="text-sm font-medium text-gray-500 group-hover:text-gray-900 transition-colors flex-1">{item.title}</span>
                    <ChevronRight className="w-4 h-4 text-gray-300 group-hover:text-amber-500 group-hover:translate-x-0.5 flex-shrink-0 transition-all duration-300" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Final CTA — Premium gold gradient */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-[28px]"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#FACF2D] via-amber-400 to-orange-400" />
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, rgba(0,0,0,0.1) 1px, transparent 0)",
            backgroundSize: "28px 28px"
          }} />
          {/* Glass decorative circles */}
          <div className="absolute top-10 right-[15%] w-[300px] h-[300px] rounded-full bg-white/10 blur-[80px]" />
          <div className="absolute bottom-10 left-[10%] w-[250px] h-[250px] rounded-full bg-orange-300/20 blur-[60px]" />

          <div className="relative px-6 py-16 sm:px-12 sm:py-20 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-md border border-white/30 mb-8">
              <Sparkles className="w-3.5 h-3.5 text-gray-900/60" />
              <span className="text-[11px] font-bold text-gray-900/60 uppercase tracking-[0.15em]">Start Your Journey</span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-gray-900 mb-5 tracking-tight leading-tight">
              Ready to Experience<br />Premium Travel?
            </h2>
            <p className="text-base sm:text-lg text-gray-900/50 mb-10 max-w-xl mx-auto leading-relaxed">
              Professional drivers. Modern fleet. 24/7 support. Transparent pricing.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center mb-10">
              <Link href={`https://wa.me/91${phoneNumber}?text=Hello!%20I%27m%20ready%20to%20book.%20Please%20share%20a%20quote.`} target="_blank" onClick={trackWhatsAppClick}>
                <button className="group w-full sm:w-auto px-10 py-4 bg-gray-900 text-[#FACF2D] font-bold text-base rounded-2xl hover:bg-gray-800 hover:shadow-2xl hover:shadow-gray-900/30 transition-all duration-300 flex items-center justify-center gap-2.5">
                  Get Free Quote
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
              <Link href={`tel:${phoneNumber}`} onClick={trackPhoneCall}>
                <button className="w-full sm:w-auto px-10 py-4 bg-white/40 backdrop-blur-md border-2 border-white/50 text-gray-900 font-bold text-base rounded-2xl hover:bg-white/60 transition-all duration-300 flex items-center justify-center gap-2">
                  <Phone className="w-5 h-5" /> {phoneNumber}
                </button>
              </Link>
            </div>

            <div className="flex items-center justify-center gap-6 sm:gap-8 flex-wrap">
              {[
                { icon: Shield, text: "No Hidden Charges" },
                { icon: CheckCircle, text: "Instant Confirmation" },
                { icon: Headphones, text: "24/7 Support" },
              ].map((b, i) => (
                <div key={i} className="flex items-center gap-2 text-sm font-semibold text-gray-900/40">
                  <b.icon className="w-4 h-4" />
                  <span>{b.text}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* SEO Content */}
        <div className="border-t border-gray-200/60 pt-8 mt-12">
          <div className="prose prose-sm max-w-none text-gray-500 text-xs sm:text-sm leading-relaxed space-y-4">
            <p>
              <strong className="text-gray-700">Triveni Cabs</strong> offers a complete range of <Link href="/outstation-cabs" className="text-amber-600 hover:underline">outstation cab services</Link> starting at just <strong>&#8377;11/km for sedans</strong> and <strong>&#8377;14/km for SUVs</strong>. Whether you need an <Link href="/airport-service" className="text-amber-600 hover:underline">airport transfer</Link>, <Link href="/wedding" className="text-amber-600 hover:underline">wedding car rental</Link>, <Link href="/tempo-traveller" className="text-amber-600 hover:underline">tempo traveller for group travel</Link>, or a <Link href="/sightseeing" className="text-amber-600 hover:underline">guided sightseeing tour</Link>, we cover 50+ cities across North India with 5,000+ verified drivers.
            </p>
            <p>
              Popular routes include <Link href="/one-way-cab/delhi-to-agra" className="text-amber-600 hover:underline">Delhi to Agra (&#8377;2,400)</Link>, <Link href="/one-way-cab/delhi-to-jaipur" className="text-amber-600 hover:underline">Delhi to Jaipur (&#8377;3,200)</Link>, and <Link href="/one-way-cab/delhi-to-shimla" className="text-amber-600 hover:underline">Delhi to Shimla (&#8377;4,500)</Link>. Book <Link href="/chardham-yatra" className="text-amber-600 hover:underline">Chardham Yatra packages</Link>, <Link href="/same-day-agra-tour-from-delhi" className="text-amber-600 hover:underline">same-day Taj Mahal tours</Link>, or <Link href="/corporate-transportation-service" className="text-amber-600 hover:underline">corporate transportation</Link> — all with 24/7 support and transparent pricing.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   MAIN PAGE — Compose all 5 premium folds
   ═══════════════════════════════════════════════════════ */
export default function ServicesClient() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f8faff] via-white to-[#f8faff] text-gray-900">
      <HeroSection />
      <ServiceCategoriesSection />
      <PopularServicesSection />
      <TrustSection />
      <CitiesCTASection />
      <MobileStickyBar />
    </div>
  );
}
