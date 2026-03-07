"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import {
  Star, Car, Users, MapPin, Clock, Phone, Shield, Heart,
  CheckCircle, ArrowRight, Headphones, Navigation, Crown,
  Plane, Building2, Compass, Mountain, Route, Bus, TreePine, Sunrise,
  Truck, ShieldCheck, Map, ChevronRight, Sparkles,
} from "@/components/ui/icons";
import Link from "next/link";

/* ══════════════════════════════════════════
   DATA
   ══════════════════════════════════════════ */
const allServices = [
  {
    category: "Cab Booking Services",
    desc: "Flexible cab options for every journey — local, outstation, one-way & more",
    icon: Car,
    gradient: "from-blue-500 to-indigo-600",
    lightGradient: "from-blue-50 to-indigo-50",
    accent: "#4f46e5",
    accentLight: "#eef2ff",
    services: [
      { title: "Local Taxi", href: "/local-taxi", image: "/images/car/WhatsApp Image 2025-01-13 at 14.34.29.webp", desc: "City rides with professional drivers" },
      { title: "Outstation Cabs", href: "/outstation-cabs", image: "/images/car/WhatsApp Image 2025-01-13 at 14.34.22 (1).webp", desc: "Intercity travel starting \u20B911/km" },
      { title: "One-Way Cab", href: "/one-way-cab", image: "/images/car/WhatsApp Image 2025-01-13 at 14.34.14.webp", desc: "No return charges, pay one side only" },
      { title: "Round Trip Cab", href: "/round-trip-cab", image: "/images/car/WhatsApp Image 2025-01-13 at 14.34.16.webp", desc: "Round trip with dedicated driver" },
      { title: "Full Day Rental", href: "/full-day-cab-rental", image: "/images/car/WhatsApp Image 2025-01-13 at 14.34.17 (1).webp", desc: "8-12 hour cab for the entire day" },
      { title: "Half Day Rental", href: "/half-day-cab-rental", image: "/images/car/WhatsApp Image 2025-01-13 at 14.34.18.webp", desc: "4-hour cab for quick errands" },
      { title: "Monthly Car Rental", href: "/monthly-car-rental", image: "/images/car/WhatsApp Image 2025-01-13 at 14.34.15.webp", desc: "Long-term chauffeur-driven rental" },
      { title: "Multi-Day Hire", href: "/multi-day-cab-hire", image: "/images/car/WhatsApp Image 2025-01-13 at 14.34.20.webp", desc: "Multi-day trips with flexible plans" },
      { title: "Private Driver Hire", href: "/private-driver-hire-india", image: "/images/car/WhatsApp Image 2025-01-13 at 14.34.15 (1).webp", desc: "English-speaking dedicated drivers" },
    ]
  },
  {
    category: "Airport Transfers",
    desc: "24/7 flight-tracked airport pickup & drop across 50+ Indian airports",
    icon: Plane,
    gradient: "from-cyan-500 to-blue-600",
    lightGradient: "from-cyan-50 to-blue-50",
    accent: "#0891b2",
    accentLight: "#ecfeff",
    services: [
      { title: "Airport Taxi Service", href: "/airport-service", image: "/images/airport_section.jpg", desc: "24/7 pickup & drop at 50+ airports" },
      { title: "Airport + City Tour", href: "/airport-city-tour-combo", image: "/images/sightseeing/Delhi/India_Gate.jpg", desc: "Airport pickup + city sightseeing" },
      { title: "Delhi Airport to Agra", href: "/delhi-airport-to-agra-taxi", image: "/images/sightseeing/Agra/Taj_mahal.jpg", desc: "Direct transfer to Taj Mahal city" },
      { title: "Delhi Airport to Jaipur", href: "/delhi-airport-to-jaipur-taxi", image: "/images/sightseeing/Jaipur/Hawa_Mahal.jpg", desc: "Comfortable ride to Pink City" },
      { title: "Delhi Airport to Chandigarh", href: "/delhi-airport-to-chandigarh-taxi", image: "/images/sightseeing/Chandigarh/Rock_Garden.jpg", desc: "Direct transfer to City Beautiful" },
      { title: "Delhi Airport to Shimla", href: "/delhi-airport-to-shimla-taxi", image: "/images/sightseeing/Shimla/shimla_hero_section.jpg", desc: "Hill station transfer from IGI" },
      { title: "Delhi Airport to Manali", href: "/delhi-airport-to-manali-taxi", image: "/images/sightseeing/Manali/Manali_hero_section.jpg", desc: "Mountain getaway from airport" },
      { title: "Delhi Airport to Haridwar", href: "/delhi-airport-to-haridwar-taxi", image: "/images/sightseeing/Haridwar/Har_Ki_Pauri.jpg", desc: "Pilgrimage transfer from Delhi" },
      { title: "Delhi Airport to Rishikesh", href: "/delhi-airport-to-rishikesh-taxi", image: "/images/sightseeing/Rishikesh/Laxman_Jhula.jpg", desc: "Adventure capital from airport" },
    ]
  },
  {
    category: "Wedding & Events",
    desc: "Luxury wedding cars, corporate shuttles & large-scale event logistics",
    icon: Heart,
    gradient: "from-pink-500 to-rose-600",
    lightGradient: "from-pink-50 to-rose-50",
    accent: "#e11d48",
    accentLight: "#fff1f2",
    services: [
      { title: "Wedding Car Rental", href: "/wedding", image: "/images/car/WhatsApp Image 2025-01-13 at 14.34.26.webp", desc: "Fortuner, Innova & luxury cars for your big day" },
      { title: "Corporate Transport", href: "/corporate-transportation-service", image: "/images/car/WhatsApp Image 2025-01-13 at 14.34.22.webp", desc: "Professional employee transport" },
      { title: "Event Transportation", href: "/event-transportation-service", image: "/images/bus/41_SEATER_BUS.jpg", desc: "Large-scale event logistics" },
      { title: "School Trip Bus", href: "/school-trip-bus-rental", image: "/images/bus/35_SEATER_BUS.jpg", desc: "Safe school excursion transport" },
      { title: "College Excursion Bus", href: "/college-excursion-bus-hire", image: "/images/bus/45_SEATER_BUS.jpg", desc: "Group travel for college trips" },
    ]
  },
  {
    category: "Sightseeing & Tours",
    desc: "Curated sightseeing tours, religious pilgrimages & multi-day packages",
    icon: Compass,
    gradient: "from-emerald-500 to-teal-600",
    lightGradient: "from-emerald-50 to-teal-50",
    accent: "#059669",
    accentLight: "#ecfdf5",
    services: [
      { title: "Sightseeing Tours", href: "/sightseeing", image: "/images/sightseeing/Sightseeingpage_hero_section_image.jpg", desc: "Guided city tours across India" },
      { title: "Tour Packages", href: "/tour-package/golden-triangle-tour", image: "/images/sightseeing/Golden_Triangle/Golden_triangle_hero_section.jpg", desc: "Curated multi-day packages" },
      { title: "Tour Guide Service", href: "/tour-guide", image: "/images/tour-guide.jpg", desc: "Expert multilingual local guides" },
      { title: "Religious Tours", href: "/religious-tours", image: "/images/sightseeing/Char_Dham/Chardham_hero_section.jpg", desc: "Spiritual pilgrimages across India" },
      { title: "Chardham Yatra", href: "/chardham-yatra", image: "/images/sightseeing/Char_Dham/Kedarnath_Temple.jpg", desc: "Complete Chardham pilgrimage" },
      { title: "Taj Mahal from Delhi", href: "/taj-mahal-tour-from-delhi", image: "/images/sightseeing/Agra/Agra_Hero_section.jpg", desc: "Delhi to Agra day trip" },
    ]
  },
  {
    category: "Same-Day Tours",
    desc: "Full day trips with pickup & drop — explore and return the same day",
    icon: Clock,
    gradient: "from-amber-500 to-orange-600",
    lightGradient: "from-amber-50 to-orange-50",
    accent: "#d97706",
    accentLight: "#fffbeb",
    services: [
      { title: "Same Day Agra", href: "/same-day-agra-tour-from-delhi", image: "/images/sightseeing/Agra/agra_fort.jpg", desc: "Taj Mahal day trip from Delhi" },
      { title: "Same Day Jaipur", href: "/same-day-jaipur-tour-from-delhi", image: "/images/sightseeing/Jaipur/amber_fort.jpg", desc: "Pink City in a day" },
      { title: "Same Day Taj Mahal", href: "/same-day-taj-mahal-tour", image: "/images/sightseeing/Agra/Mehtab_Bagh.jpg", desc: "Sunrise Taj experience" },
      { title: "Same Day Haridwar", href: "/same-day-haridwar-from-delhi", image: "/images/sightseeing/Haridwar/Ganga_Aarti.jpg", desc: "Holy city day trip" },
      { title: "Same Day Mathura", href: "/same-day-mathura-vrindavan-from-delhi", image: "/images/sightseeing/Mathura_Vrindavan/Prem_Mandir.jpg", desc: "Krishna temples day trip" },
      { title: "Same Day Shimla", href: "/same-day-shimla-from-chandigarh", image: "/images/sightseeing/Shimla/Mall_Road.jpg", desc: "Hill station from Chandigarh" },
    ]
  },
  {
    category: "Trip Planning",
    desc: "Honeymoon, family, friends & weekend road trips across North India",
    icon: Map,
    gradient: "from-violet-500 to-purple-600",
    lightGradient: "from-violet-50 to-purple-50",
    accent: "#7c3aed",
    accentLight: "#f5f3ff",
    services: [
      { title: "Honeymoon Trips", href: "/honeymoon-trip-by-car", image: "/images/sightseeing/Kashmir_Valley/Dal_Lake.jpg", desc: "Romantic getaways by road" },
      { title: "Family Trips", href: "/family-trip-manali-from-delhi", image: "/images/sightseeing/Manali/Solang Valley.jpg", desc: "Family-friendly road trips" },
      { title: "Friends Trips", href: "/friends-trip-manali", image: "/images/sightseeing/Rishikesh/River_Rafting.jpg", desc: "Adventure trips with friends" },
      { title: "Bachelor Trip", href: "/bachelor-trip-north-india", image: "/images/sightseeing/Jaisalmer/Desert_Safari.jpg", desc: "Epic bachelor road trips" },
      { title: "Weekend Getaways", href: "/weekend-getaways-from-delhi-by-car", image: "/images/sightseeing/Mussoorie/Kempty_Falls.jpg", desc: "Quick weekend escapes" },
      { title: "Romantic Taj Trip", href: "/romantic-trip-agra-taj-mahal", image: "/images/sightseeing/Udaipur/Lake_Pichola.jpg", desc: "Couples trip to Agra" },
    ]
  },
  {
    category: "Group Travel",
    desc: "Tempo travellers, buses & station pickups for groups of all sizes",
    icon: Users,
    gradient: "from-orange-500 to-red-600",
    lightGradient: "from-orange-50 to-red-50",
    accent: "#ea580c",
    accentLight: "#fff7ed",
    services: [
      { title: "Tempo Traveller", href: "/tempo-traveller", image: "/images/tempo/17_seater.jpg", desc: "12-26 seater for group trips" },
      { title: "Bus Rental", href: "/bus-routes", image: "/images/bus/41_SEATER_BUS.jpg", desc: "22-56 seater bus hire" },
      { title: "Railway Station Taxi", href: "/railway-station-taxi", image: "/images/car/WhatsApp Image 2025-01-13 at 14.34.17 (1).webp", desc: "Pickup from railway stations" },
      { title: "Bus Stand Taxi", href: "/bus-stand-taxi", image: "/images/car/WhatsApp Image 2025-01-13 at 14.34.29.webp", desc: "Pickup from bus terminals" },
    ]
  },
  {
    category: "Seasonal Packages",
    desc: "Summer hills, winter snow, holidays & New Year specials",
    icon: Sunrise,
    gradient: "from-sky-500 to-indigo-600",
    lightGradient: "from-sky-50 to-indigo-50",
    accent: "#0284c7",
    accentLight: "#f0f9ff",
    services: [
      { title: "Summer Hill Stations", href: "/summer-hill-station-packages", image: "/images/sightseeing/Nainital/Naini_Lake.jpg", desc: "Beat the heat in the hills" },
      { title: "Winter Snow Trips", href: "/winter-snow-trip-packages", image: "/images/sightseeing/Gulmarg/Skiing_Slopes.jpg", desc: "Snow adventures & skiing" },
      { title: "Christmas Shimla Manali", href: "/christmas-shimla-manali-package", image: "/images/sightseeing/Shimla/christ church shimla.jpg", desc: "Holiday season special" },
      { title: "New Year Road Trips", href: "/new-year-road-trip-packages", image: "/images/sightseeing/Jaisalmer/Gadisar_Lake.jpg", desc: "Ring in the New Year" },
    ]
  },
  {
    category: "Specialty Services",
    desc: "Inclusive & accessible cab services for everyone",
    icon: ShieldCheck,
    gradient: "from-teal-500 to-emerald-600",
    lightGradient: "from-teal-50 to-emerald-50",
    accent: "#0d9488",
    accentLight: "#f0fdfa",
    services: [
      { title: "Women Safety Cab", href: "/women-safety-cab-service", image: "/images/car/WhatsApp Image 2025-01-13 at 14.34.18.webp", desc: "Verified drivers, SOS & tracking" },
      { title: "Pet Friendly Cab", href: "/pet-friendly-cab-service", image: "/images/car/WhatsApp Image 2025-01-13 at 14.34.16.webp", desc: "Travel with your furry friends" },
      { title: "Wheelchair Accessible", href: "/wheelchair-accessible-cab", image: "/images/car/WhatsApp Image 2025-01-13 at 14.34.22 (1).webp", desc: "Accessible vehicle options" },
      { title: "Senior Citizen Service", href: "/senior-citizen-travel-service", image: "/images/car/WhatsApp Image 2025-01-13 at 14.34.15.webp", desc: "Extra comfort for elders" },
      { title: "Hospital Visit Cab", href: "/hospital-visit-cab-service", image: "/images/car/WhatsApp Image 2025-01-13 at 14.34.14.webp", desc: "Medical appointment transport" },
    ]
  },
];

const NAV = ["Cabs", "Airports", "Weddings", "Sightseeing", "Day Tours", "Trips", "Groups", "Seasonal", "Specialty"];

/* ══════════════════════════════════════════
   GLASS CARD
   ══════════════════════════════════════════ */
function GlassServiceCard({ service, accent, index = 0, large = false }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay: index * 0.06 }}
      className={large ? "col-span-2 row-span-2" : ""}
    >
      <Link href={service.href} className="group block h-full">
        <div className={`relative h-full overflow-hidden rounded-[20px] bg-white/60 backdrop-blur-xl border border-white/80 shadow-[0_4px_30px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_40px_rgba(0,0,0,0.12)] hover:-translate-y-1 transition-all duration-500 ${
          large ? "min-h-[380px]" : "min-h-[260px]"
        }`}>
          {/* Image */}
          <div className={`relative overflow-hidden ${large ? "h-[60%]" : "h-[55%]"}`}>
            <Image
              src={service.image}
              alt={service.title}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-700"
              sizes={large ? "(max-width:768px) 100vw, 55vw" : "(max-width:640px) 50vw, 33vw"}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-60" />
          </div>

          {/* Content */}
          <div className={`relative ${large ? "p-6" : "p-4"}`}>
            {/* Accent dot */}
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: accent }} />
              <div className="h-[1px] w-8 group-hover:w-12 transition-all duration-500" style={{ backgroundColor: `${accent}40` }} />
            </div>
            <h3 className={`font-bold text-gray-900 mb-1 group-hover:translate-x-0.5 transition-transform duration-300 ${
              large ? "text-xl" : "text-[15px]"
            }`}>
              {service.title}
            </h3>
            <p className={`text-gray-500 leading-relaxed ${large ? "text-sm" : "text-xs"}`}>
              {service.desc}
            </p>
            <div className="mt-2.5 flex items-center gap-1.5 opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-400">
              <span className="text-xs font-semibold" style={{ color: accent }}>View Details</span>
              <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" style={{ color: accent }} />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

/* ══════════════════════════════════════════
   LAYOUTS
   ══════════════════════════════════════════ */
function LayoutBento({ services, accent }) {
  if (services.length < 3) return <LayoutGrid services={services} accent={accent} />;
  const [hero, ...rest] = services;
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[190px]">
        <GlassServiceCard service={hero} accent={accent} large index={0} />
        {rest.slice(0, 2).map((s, i) => (
          <GlassServiceCard key={i} service={s} accent={accent} index={i + 1} />
        ))}
      </div>
      {rest.length > 2 && (
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
          {rest.slice(2).map((s, i) => <GlassServiceCard key={i} service={s} accent={accent} index={i + 3} />)}
        </div>
      )}
    </div>
  );
}

function LayoutWide({ services, accent }) {
  if (services.length < 2) return <LayoutGrid services={services} accent={accent} />;
  const [first, ...rest] = services;
  return (
    <div className="space-y-4">
      {/* Wide hero card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <Link href={first.href} className="group block">
          <div className="relative h-56 sm:h-64 overflow-hidden rounded-[20px] bg-white/60 backdrop-blur-xl border border-white/80 shadow-[0_4px_30px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_40px_rgba(0,0,0,0.12)] hover:-translate-y-1 transition-all duration-500">
            <Image src={first.image} alt={first.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" sizes="100vw" />
            <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/40 to-transparent" />
            <div className="absolute bottom-0 left-0 p-7 sm:p-8">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: accent }} />
                <div className="h-[1px] w-10" style={{ backgroundColor: `${accent}40` }} />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1">{first.title}</h3>
              <p className="text-gray-600 text-sm">{first.desc}</p>
            </div>
          </div>
        </Link>
      </motion.div>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
        {rest.map((s, i) => <GlassServiceCard key={i} service={s} accent={accent} index={i + 1} />)}
      </div>
    </div>
  );
}

function LayoutGrid({ services, accent }) {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
      {services.map((s, i) => <GlassServiceCard key={i} service={s} accent={accent} index={i} />)}
    </div>
  );
}

const LAYOUTS = [LayoutBento, LayoutWide, LayoutGrid];

/* ══════════════════════════════════════════
   CATEGORY SECTION
   ══════════════════════════════════════════ */
function CategorySection({ category, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const Layout = LAYOUTS[index % 3];
  const num = String(index + 1).padStart(2, "0");

  return (
    <section
      ref={ref}
      id={`cat-${index}`}
      className={`relative py-16 sm:py-24 scroll-mt-16 ${index % 2 === 0 ? "" : "bg-gradient-to-br from-gray-50/80 to-white"}`}
    >
      {/* Soft background glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-1/3 right-0 w-[500px] h-[500px] rounded-full blur-[200px] opacity-[0.07]"
          style={{ background: category.accent }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-10 sm:mb-14"
        >
          <div className="flex items-center gap-5 sm:gap-8">
            {/* Ghost number */}
            <span className="text-[80px] sm:text-[110px] font-black leading-none select-none tracking-tighter text-gray-100 hidden sm:block">
              {num}
            </span>

            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3">
                <div
                  className={`w-11 h-11 rounded-2xl bg-gradient-to-br ${category.gradient} flex items-center justify-center shadow-lg`}
                  style={{ boxShadow: `0 8px 24px ${category.accent}30` }}
                >
                  <category.icon className="w-5 h-5 text-white" />
                </div>
                <div className="h-[2px] w-12 sm:w-20 rounded-full" style={{ background: `linear-gradient(to right, ${category.accent}30, transparent)` }} />
              </div>
              <h2 className="text-2xl sm:text-4xl font-black text-gray-900 tracking-tight">{category.category}</h2>
              <p className="text-gray-500 mt-2 text-sm sm:text-base max-w-lg">{category.desc}</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <Layout services={category.services} accent={category.accent} />
        </motion.div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════
   MAIN PAGE
   ══════════════════════════════════════════ */
export default function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState(0);
  const navRef = useRef(null);

  useEffect(() => {
    const obs = [];
    allServices.forEach((_, i) => {
      const el = document.getElementById(`cat-${i}`);
      if (!el) return;
      const o = new IntersectionObserver(
        ([e]) => { if (e.isIntersecting) setActiveCategory(i); },
        { rootMargin: "-100px 0px -55% 0px" }
      );
      o.observe(el);
      obs.push(o);
    });
    return () => obs.forEach(o => o.disconnect());
  }, []);

  useEffect(() => {
    const c = navRef.current;
    if (!c) return;
    const btn = c.children[activeCategory];
    if (btn) {
      c.scrollTo({ left: btn.offsetLeft - c.offsetWidth / 2 + btn.offsetWidth / 2, behavior: "smooth" });
    }
  }, [activeCategory]);

  const goTo = (i) => document.getElementById(`cat-${i}`)?.scrollIntoView({ behavior: "smooth" });

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f8faff] via-white to-[#f8faff] text-gray-900">
      <style>{`.hsb::-webkit-scrollbar{display:none}`}</style>

      {/* ━━━ HERO ━━━ */}
      <section className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 overflow-hidden">
        {/* Background blobs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-10 right-[10%] w-[500px] h-[500px] bg-blue-200/30 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-[5%] w-[400px] h-[400px] bg-amber-200/20 rounded-full blur-[100px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-violet-200/15 rounded-full blur-[150px]" />

          {/* Subtle grid */}
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: "linear-gradient(rgba(0,0,0,.1) 1px,transparent 1px),linear-gradient(90deg,rgba(0,0,0,.1) 1px,transparent 1px)",
            backgroundSize: "72px 72px"
          }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">
            {/* Left — Text */}
            <div className="lg:col-span-3">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                {/* Trust badge */}
                <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/70 backdrop-blur-xl border border-gray-200/60 shadow-sm mb-8">
                  <div className="flex gap-0.5">
                    {[1,2,3,4,5].map(i => <Star key={i} className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />)}
                  </div>
                  <div className="w-px h-4 bg-gray-200" />
                  <span className="text-xs font-semibold text-gray-500">
                    4.9 Rating &bull; 55+ Services &bull; 50+ Cities
                  </span>
                </div>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="text-5xl sm:text-6xl lg:text-[78px] font-black tracking-tight leading-[0.95] mb-7"
              >
                <span className="text-gray-900 block">Every Journey</span>
                <span className="text-gray-900 block mt-1">Deserves a</span>
                <span className="block mt-1 text-transparent bg-clip-text bg-gradient-to-r from-[#FACF2D] via-amber-500 to-orange-500">
                  Great Ride.
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-base sm:text-lg text-gray-500 max-w-lg mb-10 leading-relaxed"
              >
                Cabs, airport transfers, wedding cars, tours & more — one platform for every journey across India.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-wrap gap-3"
              >
                <Link href="https://wa.me/917668570551?text=Hello!%20I%27m%20interested%20in%20booking.%20Please%20share%20a%20quote." target="_blank">
                  <button className="group px-8 py-4 bg-gradient-to-r from-[#FACF2D] to-amber-400 text-gray-900 rounded-2xl font-bold text-sm hover:shadow-xl hover:shadow-amber-300/30 hover:scale-[1.02] transition-all duration-300 flex items-center gap-2.5 border border-amber-300/50">
                    Get Free Quote
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </Link>
                <Link href="tel:7668570551">
                  <button className="px-8 py-4 bg-white/70 backdrop-blur-xl border border-gray-200 text-gray-700 rounded-2xl font-semibold text-sm hover:bg-white hover:shadow-lg hover:border-gray-300 transition-all duration-300 flex items-center gap-2">
                    <Phone className="w-4 h-4" /> 7668570551
                  </button>
                </Link>
              </motion.div>
            </div>

            {/* Right — Floating glass stat cards */}
            <div className="lg:col-span-2 hidden lg:block">
              <div className="relative h-[400px]">
                {[
                  { value: "\u20B911/km", label: "Starting Rate", icon: Sparkles, top: "5%", left: "5%" },
                  { value: "5,000+", label: "Expert Drivers", icon: Users, top: "2%", left: "55%" },
                  { value: "10,000+", label: "Trips Done", icon: Route, top: "52%", left: "0%" },
                  { value: "4.9/5", label: "Rating", icon: Star, top: "55%", left: "52%" },
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.8, y: 30 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 + i * 0.12 }}
                    className="absolute"
                    style={{ top: stat.top, left: stat.left }}
                  >
                    <div className="px-6 py-5 rounded-2xl bg-white/70 backdrop-blur-2xl border border-white/80 shadow-[0_8px_32px_rgba(0,0,0,0.08)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.12)] hover:-translate-y-1 transition-all duration-400 min-w-[155px]">
                      <stat.icon className="w-4 h-4 text-amber-500 mb-2" />
                      <div className="text-2xl font-black text-gray-900 tracking-tight">{stat.value}</div>
                      <div className="text-[11px] text-gray-400 font-medium uppercase tracking-wider mt-0.5">{stat.label}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-3 lg:hidden"
          >
            {[
              { value: "\u20B911/km", label: "Starting" },
              { value: "5,000+", label: "Drivers" },
              { value: "10,000+", label: "Trips" },
              { value: "4.9/5", label: "Rating" },
            ].map((s, i) => (
              <div key={i} className="px-4 py-4 rounded-2xl bg-white/70 backdrop-blur-xl border border-gray-200/60 shadow-sm text-center">
                <div className="text-xl font-black text-gray-900">{s.value}</div>
                <div className="text-[10px] text-gray-400 font-medium uppercase tracking-wider mt-0.5">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ━━━ STICKY NAV ━━━ */}
      <nav aria-label="Service categories" className="sticky top-0 z-50 bg-white/70 backdrop-blur-2xl border-b border-gray-200/50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div ref={navRef} className="hsb flex items-center gap-1.5 overflow-x-auto py-3" style={{ scrollbarWidth: "none" }}>
            {allServices.map((cat, i) => {
              const isActive = activeCategory === i;
              return (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className={`relative flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-300 flex-shrink-0 ${
                    isActive
                      ? "text-white font-bold shadow-lg"
                      : "text-gray-400 hover:text-gray-600 hover:bg-gray-100/60"
                  }`}
                  style={isActive ? {
                    background: `linear-gradient(135deg, ${cat.accent}, ${cat.accent}cc)`,
                    boxShadow: `0 4px 16px ${cat.accent}35`
                  } : {}}
                >
                  <cat.icon className="w-3.5 h-3.5" />
                  {NAV[i]}
                </button>
              );
            })}
          </div>
        </div>
      </nav>

      {/* ━━━ CATEGORY SECTIONS ━━━ */}
      {allServices.map((cat, i) => (
        <CategorySection key={i} category={cat} index={i} />
      ))}

      {/* ━━━ CITIES ━━━ */}
      <section className="relative py-20 sm:py-28 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-amber-100/30 rounded-full blur-[200px]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-50 border border-amber-200/60 mb-6">
              <MapPin className="w-3.5 h-3.5 text-amber-600" />
              <span className="text-[11px] font-bold text-amber-700 uppercase tracking-[0.15em]">Nationwide Coverage</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-gray-900 tracking-tight mb-4">Cities We Serve</h2>
            <p className="text-gray-500 text-sm sm:text-base max-w-xl mx-auto">Premium cab services across major destinations in India</p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
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
            ].map((city, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.04 }}
              >
                <Link href={`/${city.name.toLowerCase()}`} className="group block">
                  <div className="relative h-52 sm:h-60 rounded-[20px] overflow-hidden bg-white/60 backdrop-blur-xl border border-white/80 shadow-[0_4px_30px_rgba(0,0,0,0.06)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.12)] hover:-translate-y-1.5 transition-all duration-500">
                    <Image src={city.image} alt={`${city.name} cab service`} fill sizes="(max-width:640px) 50vw,(max-width:1024px) 33vw,25vw" className="object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <span className="inline-block px-2.5 py-0.5 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-[10px] text-white font-bold uppercase tracking-widest mb-2">
                        {city.tag}
                      </span>
                      <h3 className="text-lg font-bold text-white group-hover:text-[#FACF2D] transition-colors duration-300">{city.name}</h3>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mt-10 text-center">
            <p className="text-[10px] text-gray-400 font-bold uppercase tracking-[0.25em] mb-4">Also Serving</p>
            <div className="flex flex-wrap justify-center gap-2 max-w-4xl mx-auto">
              {["Jodhpur","Ayodhya","Ahmedabad","Mathura","Mussoorie","Jim Corbett","Pushkar","Ajmer","Mount Abu","Bikaner","Ranthambore","Dharamshala","Kasauli","Dalhousie","Kasol","Gulmarg","Pahalgam","Leh Ladakh","Noida","Gurgaon","Nainital","Lucknow","Chandigarh","Dehradun"].map((c, i) => (
                <Link key={i} href={`/${c.toLowerCase().replace(/\s+/g, "-")}`}>
                  <span className="px-3.5 py-1.5 bg-white/70 backdrop-blur border border-gray-200/60 rounded-full text-[11px] font-medium text-gray-400 hover:text-amber-600 hover:border-amber-300 hover:bg-amber-50 transition-all duration-300 inline-block shadow-sm">{c}</span>
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ━━━ COMPARISONS ━━━ */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-gray-50/80 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-12"
          >
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center shadow-lg shadow-amber-300/30">
              <Navigation className="w-5 h-5 text-white" />
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight">Compare & Choose</h2>
              <p className="text-gray-500 mt-0.5 text-sm">Helpful guides to pick the right service</p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {[
              { title: "Sedan vs SUV", href: "/sedan-vs-suv", icon: Car },
              { title: "SUV for Hills", href: "/sedan-vs-suv-for-hill-stations", icon: Mountain },
              { title: "Tempo vs Bus", href: "/tempo-vs-bus", icon: Bus },
              { title: "Tempo vs Mini Bus", href: "/tempo-traveller-vs-mini-bus", icon: Truck },
              { title: "Bus vs Tempo Wedding", href: "/bus-vs-tempo-for-wedding", icon: Heart },
              { title: "12 vs 17 Seater", href: "/12-seater-vs-17-seater-tempo", icon: Users },
              { title: "Self Drive vs Chauffeur", href: "/self-drive-vs-chauffeur", icon: Route },
              { title: "One-Way vs Round Trip", href: "/one-way-vs-round-trip-cab", icon: Navigation },
              { title: "Innova vs Ertiga", href: "/innova-vs-ertiga-for-outstation", icon: Car },
              { title: "Fortuner vs Innova", href: "/fortuner-vs-innova-crysta", icon: Crown },
              { title: "Corporate vs Aggregators", href: "/corporate-cab-vs-aggregators", icon: Building2 },
              { title: "Road Trip Guide", href: "/india-road-trip-guide-for-tourists", icon: Compass },
              { title: "Shimla vs Manali", href: "/shimla-vs-manali", icon: TreePine },
              { title: "Rishikesh vs Manali", href: "/rishikesh-vs-manali", icon: Mountain },
              { title: "Kashmir vs Ladakh", href: "/kashmir-vs-ladakh", icon: Compass },
              { title: "Jaipur vs Udaipur", href: "/jaipur-vs-udaipur", icon: MapPin },
            ].map((item, i) => (
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
        </div>
      </section>

      {/* ━━━ CTA ━━━ */}
      <section className="relative py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#FACF2D] via-amber-400 to-orange-400" />
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, rgba(0,0,0,0.1) 1px, transparent 0)",
            backgroundSize: "28px 28px"
          }} />
          {/* Glass circles */}
          <div className="absolute top-10 right-[15%] w-[300px] h-[300px] rounded-full bg-white/10 blur-[80px]" />
          <div className="absolute bottom-10 left-[10%] w-[250px] h-[250px] rounded-full bg-orange-300/20 blur-[60px]" />
        </div>

        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
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
              <Link href="https://wa.me/917668570551?text=Hello!%20I%27m%20ready%20to%20book.%20Please%20share%20a%20quote." target="_blank">
                <button className="group w-full sm:w-auto px-10 py-4 bg-gray-900 text-[#FACF2D] font-bold text-base rounded-2xl hover:bg-gray-800 hover:shadow-2xl hover:shadow-gray-900/30 transition-all duration-300 flex items-center justify-center gap-2.5">
                  Get Free Quote
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
              <Link href="tel:7668570551">
                <button className="w-full sm:w-auto px-10 py-4 bg-white/40 backdrop-blur-md border-2 border-white/50 text-gray-900 font-bold text-base rounded-2xl hover:bg-white/60 transition-all duration-300 flex items-center justify-center gap-2">
                  <Phone className="w-5 h-5" /> 7668570551
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
          </motion.div>
        </div>
      </section>
    </div>
  );
}
