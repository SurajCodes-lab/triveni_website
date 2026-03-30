'use client';

import { useState, useMemo } from 'react';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Phone, MapPin, Clock, Star, ArrowRight, Users, Shield, CheckCircle,
  Car, Bus, ChevronDown, Info, Sparkles, Zap, Headphones, ShieldCheck,
  Compass, Heart, Route, Navigation,
} from '@/components/ui/icons';
import { WhatsAppIcon } from '@/components/ui/icons';
import CabSearchWidget from '@/components/home/CabSearchWidget';
import { searchRoute } from '@/lib/searchUtils';
import { phoneNumber } from '@/utilis/data';
import { trackWhatsAppClick, trackPhoneCall } from '@/utilis/analytics';

/* ═══════════════════════════════════════════════════════
   DATA & HELPERS
   ═══════════════════════════════════════════════════════ */
const FILTERS = [
  { key: 'all', label: 'All Vehicles', icon: Car },
  { key: 'car', label: 'Cars', sub: '2-7 seats', icon: Car },
  { key: 'tempo', label: 'Tempo', sub: '12-26 seats', icon: Bus },
  { key: 'bus', label: 'Bus', sub: '22-56 seats', icon: Bus },
];

// Map city names to hero images for rich route headers
const CITY_IMAGES = {
  delhi: "/images/sightseeing/Delhi/Delhi_hero_section.jpg",
  agra: "/images/sightseeing/Agra/Agra_Hero_section.jpg",
  jaipur: "/images/sightseeing/Jaipur/jaipur_hero_section_image.jpg",
  shimla: "/images/sightseeing/Shimla/shimla_hero_section.jpg",
  manali: "/images/sightseeing/Manali/Manali_hero_section.jpg",
  chandigarh: "/images/sightseeing/Chandigarh/Rock_Garden.jpg",
  varanasi: "/images/sightseeing/Varanasi/varanasi_hero_section.jpg",
  udaipur: "/images/sightseeing/Udaipur/Udaipur_hero_section.jpg",
  rishikesh: "/images/sightseeing/Rishikesh/Rishikesh_hero_section.jpg",
  haridwar: "/images/sightseeing/Haridwar/Haridwar_hero_section.jpg",
  amritsar: "/images/sightseeing/Amritsar/Amristar_hero_section.jpg",
  jaisalmer: "/images/sightseeing/Jaisalmer/Jaisalmer_hero_section.jpg",
  srinagar: "/images/sightseeing/Srinagar/Srinagar_hero_section.jpg",
  jodhpur: "/images/sightseeing/Jodhpur/Mehrangarh Fort.jpg",
  mussoorie: "/images/sightseeing/Mussoorie/Mussorrie_hero_section.jpg",
  nainital: "/images/sightseeing/Nainital/Nainital_hero_section.jpg",
  dehradun: "/images/sightseeing/Dehradun/Dehradun_hero_section.jpg",
  lucknow: "/images/sightseeing/Lucknow/Lucknow_hero_section.jpg",
  mathura: "/images/sightseeing/Mathura_Vrindavan/Prem_Mandir.jpg",
  kasol: "/images/sightseeing/Kasol/Kasol_hero_section.jpg",
};

function getCityImage(cityName) {
  const key = cityName?.toLowerCase().trim().replace(/\s+/g, '');
  return CITY_IMAGES[key] || "/images/about/about_banner.webp";
}

/* ═══════════════════════════════════════════════════════
   PREMIUM VEHICLE CARD
   ═══════════════════════════════════════════════════════ */
function VehicleCard({ vehicle, from, to, date, tripType, index }) {
  const whatsappMessage = encodeURIComponent(
    `Hi, I want to book a ${vehicle.name} from ${from} to ${to} on ${date || 'flexible date'}. Trip: ${tripType === 'roundtrip' ? 'Round Trip' : 'One Way'}. Please share the details.`
  );
  const whatsappUrl = `https://wa.me/917668570551?text=${whatsappMessage}`;
  const callUrl = `tel:${phoneNumber}`;

  const tagColors = {
    Economy: { bg: 'bg-emerald-50', text: 'text-emerald-700', border: 'border-emerald-200' },
    Premium: { bg: 'bg-violet-50', text: 'text-violet-700', border: 'border-violet-200' },
    Spacious: { bg: 'bg-blue-50', text: 'text-blue-700', border: 'border-blue-200' },
    Group: { bg: 'bg-orange-50', text: 'text-orange-700', border: 'border-orange-200' },
    'Large Group': { bg: 'bg-rose-50', text: 'text-rose-700', border: 'border-rose-200' },
  };
  const tc = tagColors[vehicle.tag] || { bg: 'bg-gray-50', text: 'text-gray-600', border: 'border-gray-200' };

  // Smart vehicle image mapping by type and capacity
  const getVehicleImage = () => {
    const name = (vehicle.name || '').toLowerCase();
    const seats = vehicle.seats || 0;

    if (vehicle.category === 'car') {
      if (name.includes('sedan') || name.includes('dzire') || name.includes('etios'))
        return '/images/car/swift_dzire.jpg';
      if (name.includes('ertiga'))
        return '/images/car/ertiga.jpg';
      if (name.includes('innova') || name.includes('crysta'))
        return '/images/car/innova_crysta.jpg';
      if (name.includes('suv') || name.includes('fortuner'))
        return '/images/car/premium_suv.jpg';
      if (seats <= 4) return '/images/car/swift_dzire.jpg';
      if (seats <= 6) return '/images/car/ertiga.jpg';
      return '/images/car/innova_crysta.jpg';
    }

    if (vehicle.category === 'tempo') {
      const tempoMap = { 12: '12_seater', 16: '16_seater', 17: '17_seater', 20: '20_seater', 26: '26_seater' };
      const sizes = [12, 16, 17, 20, 26];
      const closest = sizes.reduce((prev, curr) => Math.abs(curr - seats) < Math.abs(prev - seats) ? curr : prev);
      return `/images/tempo/${tempoMap[closest] || '17_seater'}.jpg`;
    }

    if (vehicle.category === 'bus') {
      const busMap = { 22: '22_SEATER_BUS', 25: '25_SEATER_BUS', 27: '27_SEATER_BUS', 35: '35_SEATER_BUS', 41: '41_SEATER_BUS', 45: '45_SEATER_BUS', 49: '49_SEATER_BUS', 56: '56_SEATER_BUS' };
      const sizes = [22, 25, 27, 35, 41, 45, 49, 56];
      const closest = sizes.reduce((prev, curr) => Math.abs(curr - seats) < Math.abs(prev - seats) ? curr : prev);
      return `/images/bus/${busMap[closest] || '41_SEATER_BUS'}.jpg`;
    }

    return '/images/car/innova_crysta.jpg';
  };
  const vehicleImage = getVehicleImage();

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="group"
    >
      <div className="relative overflow-hidden rounded-[20px] bg-white/70 backdrop-blur-xl border border-white/80 shadow-[0_4px_24px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_40px_rgba(0,0,0,0.1)] hover:-translate-y-0.5 transition-all duration-500">
        <div className="flex flex-col sm:flex-row">
          {/* Vehicle Image */}
          <div className="relative w-full sm:w-48 h-36 sm:h-auto flex-shrink-0 overflow-hidden">
            <Image
              src={vehicleImage}
              alt={vehicle.name}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
              sizes="(max-width:640px) 100vw, 200px"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/30 sm:block hidden" />
            <div className="absolute inset-0 bg-gradient-to-t from-white/40 to-transparent sm:hidden" />
            {/* Tag badge */}
            <div className={`absolute top-3 left-3 ${tc.bg} ${tc.text} border ${tc.border} px-2.5 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider`}>
              {vehicle.tag}
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex-1">
              <h3 className="text-lg font-bold text-gray-900 mb-1.5">{vehicle.name}</h3>
              <div className="flex items-center gap-3 flex-wrap mb-2">
                {vehicle.features.map((f, i) => (
                  <span key={i} className="flex items-center gap-1 text-xs text-gray-500">
                    <CheckCircle className="w-3 h-3 text-green-500" />
                    {f}
                  </span>
                ))}
              </div>
              <p className="text-xs text-gray-400 flex items-center gap-1">
                <Users className="w-3 h-3" /> {vehicle.capacity}
              </p>
            </div>

            {/* Price + Actions */}
            <div className="flex items-center sm:items-end gap-4 sm:flex-col sm:gap-3">
              <div className="sm:text-right">
                <p className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight">{vehicle.displayPrice}</p>
                <p className="text-[10px] text-gray-400 font-medium uppercase tracking-wider">
                  {tripType === 'roundtrip' ? 'round trip' : 'one way'}
                </p>
              </div>
              <div className="flex gap-2">
                <a
                  href={callUrl}
                  onClick={trackPhoneCall}
                  className="p-3 rounded-xl bg-gray-50 border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-all duration-300"
                  title="Call to book"
                >
                  <Phone className="w-4 h-4 text-blue-600" />
                </a>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={trackWhatsAppClick}
                  className="flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white px-5 py-3 rounded-xl font-bold text-sm transition-all duration-300 hover:shadow-lg hover:shadow-green-500/20"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                  <span>Book Now</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════
   ROUTE INTELLIGENCE SECTION
   ═══════════════════════════════════════════════════════ */
function RouteIntelligence({ result }) {
  const hasInfo = result.highlights || result.stops?.length > 0 || result.bestTime || result.tip;
  if (!hasInfo) return null;

  const infoCards = [
    result.highlights && { icon: Compass, title: "Route Highlights", content: result.highlights, gradient: "from-amber-400 to-orange-500" },
    result.stops?.length > 0 && { icon: MapPin, title: "Popular Stops", content: result.stops.join(' \u2022 '), gradient: "from-blue-500 to-indigo-600" },
    result.bestTime && { icon: Clock, title: "Best Time to Travel", content: result.bestTime, gradient: "from-emerald-500 to-teal-600" },
    result.tip && { icon: Sparkles, title: "Local Insider Tip", content: result.tip, gradient: "from-violet-500 to-purple-600" },
  ].filter(Boolean);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center shadow-lg shadow-amber-300/30">
          <Info className="w-4 h-4 text-white" />
        </div>
        <h3 className="text-lg font-black text-gray-900">Route Intelligence</h3>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {infoCards.map((card, i) => (
          <div key={i} className="p-4 rounded-[18px] bg-white/70 backdrop-blur-xl border border-white/80 shadow-[0_4px_20px_rgba(0,0,0,0.04)]">
            <div className="flex items-center gap-2.5 mb-2">
              <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${card.gradient} flex items-center justify-center`}>
                <card.icon className="w-3.5 h-3.5 text-white" />
              </div>
              <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">{card.title}</span>
            </div>
            <p className="text-sm text-gray-700 leading-relaxed">{card.content}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════
   PREMIUM EMPTY STATE
   ═══════════════════════════════════════════════════════ */
function EmptySearchState() {
  const popularRoutes = [
    { from: "Delhi", to: "Agra", price: "\u20B92,400", time: "3-4 hrs" },
    { from: "Delhi", to: "Jaipur", price: "\u20B93,200", time: "5-6 hrs" },
    { from: "Delhi", to: "Shimla", price: "\u20B94,500", time: "7-8 hrs" },
    { from: "Delhi", to: "Manali", price: "\u20B97,000", time: "10-12 hrs" },
    { from: "Delhi", to: "Chandigarh", price: "\u20B93,500", time: "4-5 hrs" },
    { from: "Delhi", to: "Haridwar", price: "\u20B93,200", time: "5-6 hrs" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f8faff] via-white to-[#f8faff]">
      {/* Hero */}
      <section className="relative overflow-hidden pt-24 sm:pt-32 pb-12">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 right-[10%] w-[500px] h-[500px] bg-amber-100/30 rounded-full blur-[150px]" />
          <div className="absolute bottom-0 left-[5%] w-[400px] h-[400px] bg-blue-100/20 rounded-full blur-[120px]" />
        </div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-50 border border-amber-200/60 mb-6">
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
              <span className="text-[11px] font-bold text-amber-700 uppercase tracking-[0.15em]">500+ Routes Available</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 tracking-tight mb-4">
              Find Your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FACF2D] via-amber-500 to-orange-500">Perfect Ride</span>
            </h1>
            <p className="text-gray-500 text-sm sm:text-base max-w-lg mx-auto">Search across 500+ routes with transparent pricing. Sedan, SUV, Tempo &amp; Bus options.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <CabSearchWidget />
          </motion.div>
        </div>
      </section>

      {/* Popular Routes */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 pb-16">
        <h2 className="text-xl font-black text-gray-900 mb-5">Popular Routes</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {popularRoutes.map((route, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 + i * 0.05 }}
            >
              <Link href={`/search?from=${route.from.toLowerCase()}&to=${route.to.toLowerCase()}&type=oneway`}>
                <div className="group p-4 rounded-[18px] bg-white/70 backdrop-blur-xl border border-white/80 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.1)] hover:-translate-y-0.5 transition-all duration-300">
                  <div className="flex items-center gap-1.5 text-sm font-bold text-gray-900 mb-2">
                    <span>{route.from}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-gray-400" />
                    <span>{route.to}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-black text-[#FACF2D]">{route.price}</span>
                    <span className="text-xs text-gray-400 flex items-center gap-1">
                      <Clock className="w-3 h-3" /> {route.time}
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════
   MAIN SEARCH RESULTS PAGE
   ═══════════════════════════════════════════════════════ */
export default function SearchResultsClient() {
  const searchParams = useSearchParams();
  const from = searchParams.get('from') || '';
  const to = searchParams.get('to') || '';
  const type = searchParams.get('type') || 'oneway';
  const date = searchParams.get('date') || '';

  const [filter, setFilter] = useState('all');
  const [showModify, setShowModify] = useState(false);

  const result = useMemo(() => {
    if (!from || !to) return null;
    return searchRoute(from, to, type);
  }, [from, to, type]);

  const filteredVehicles = useMemo(() => {
    if (!result) return [];
    if (filter === 'all') return result.vehicles;
    return result.vehicles.filter(v => v.category === filter);
  }, [result, filter]);

  const fromDisplay = result?.from || from.charAt(0).toUpperCase() + from.slice(1);
  const toDisplay = result?.to || to.charAt(0).toUpperCase() + to.slice(1);

  const dateDisplay = date ? new Date(date + 'T00:00:00').toLocaleDateString('en-IN', {
    weekday: 'short', day: 'numeric', month: 'short', year: 'numeric'
  }) : '';

  // No search params — show premium empty state
  if (!from || !to) {
    return <EmptySearchState />;
  }

  const destinationImage = getCityImage(to) !== "/images/about/about_banner.webp"
    ? getCityImage(to)
    : getCityImage(from);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f8faff] via-white to-[#f8faff]">
      {/* ━━━ ROUTE HERO HEADER ━━━ */}
      <section className="relative overflow-hidden">
        <Image
          src={destinationImage}
          alt={`${fromDisplay} to ${toDisplay} Cab`}
          fill
          priority
          className="object-cover"
          sizes="100vw"
          quality={80}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FACF2D] via-amber-400 to-orange-400 z-10" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 pt-24 sm:pt-28 pb-6 sm:pb-8">
          {/* Trust strip */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-3 mb-5 flex-wrap"
          >
            <div className="flex items-center gap-1.5 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full px-3 py-1.5">
              <div className="flex gap-0.5">
                {[1,2,3,4,5].map(i => <Star key={i} className="w-3 h-3 text-[#FACF2D] fill-[#FACF2D]" />)}
              </div>
              <span className="text-xs font-bold text-[#FACF2D]">4.9</span>
            </div>
            <div className="flex items-center gap-3 text-[11px] text-white/60 font-medium">
              <span className="flex items-center gap-1"><Shield className="w-3 h-3 text-green-400" /> Verified Drivers</span>
              <span className="flex items-center gap-1"><Zap className="w-3 h-3 text-amber-400" /> Instant Confirmation</span>
            </div>
          </motion.div>

          {/* Route heading */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <div className="flex items-center gap-3 mb-2 flex-wrap">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
                {fromDisplay} <span className="text-white/40 mx-1">&rarr;</span> {toDisplay}
              </h1>
            </div>
            <div className="flex items-center gap-3 flex-wrap">
              <span className="text-sm text-white/70 font-medium">
                {type === 'roundtrip' ? 'Round Trip' : 'One Way'}
              </span>
              {dateDisplay && (
                <>
                  <span className="w-1 h-1 rounded-full bg-white/30" />
                  <span className="text-sm text-white/70">{dateDisplay}</span>
                </>
              )}
              {result?.distance && result.distance !== 'Contact for exact distance' && (
                <>
                  <span className="w-1 h-1 rounded-full bg-white/30" />
                  <span className="text-sm text-white/70 flex items-center gap-1"><MapPin className="w-3 h-3" /> {result.distance}</span>
                </>
              )}
              {result?.time && result.time !== 'Contact for exact time' && (
                <>
                  <span className="w-1 h-1 rounded-full bg-white/30" />
                  <span className="text-sm text-white/70 flex items-center gap-1"><Clock className="w-3 h-3" /> {result.time}</span>
                </>
              )}
            </div>

            {/* Route tags */}
            {result?.tags?.length > 0 && (
              <div className="flex gap-2 mt-3 flex-wrap">
                {result.tags.map((tag, i) => (
                  <span key={i} className="px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-[10px] text-white/80 font-bold uppercase tracking-wider">{tag}</span>
                ))}
              </div>
            )}
          </motion.div>

          {/* Modify search */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-5"
          >
            <button
              onClick={() => setShowModify(!showModify)}
              className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-sm text-white/80 font-medium hover:bg-white/20 transition-all duration-300"
            >
              <Navigation className="w-3.5 h-3.5" />
              {showModify ? 'Hide Search' : 'Modify Search'}
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${showModify ? 'rotate-180' : ''}`} />
            </button>
          </motion.div>

          {/* Collapsible search widget */}
          {showModify && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4"
            >
              <CabSearchWidget
                compact
                initialFrom={fromDisplay}
                initialTo={toDisplay}
                initialType={type}
                initialDate={date}
              />
            </motion.div>
          )}
        </div>
      </section>

      {/* ━━━ RESULTS BODY ━━━ */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
        {result && (
          <>
            {/* Estimate Notice */}
            {result.isEstimate && (
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-amber-50/80 backdrop-blur border border-amber-200/60 rounded-[18px] p-4 sm:p-5 mb-6 flex items-start gap-3"
              >
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center flex-shrink-0">
                  <Info className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-sm font-bold text-amber-800">Estimated Pricing</p>
                  <p className="text-sm text-amber-700 mt-0.5">
                    Prices shown are estimates based on per-km rates. Call us for an exact quote for this route.
                  </p>
                </div>
              </motion.div>
            )}

            {/* Vehicle count + filter */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div>
                <h2 className="text-xl font-black text-gray-900">
                  {filteredVehicles.length} Vehicle{filteredVehicles.length !== 1 ? 's' : ''} Available
                </h2>
                <p className="text-sm text-gray-500 mt-0.5">Prices include driver, fuel &amp; toll for this route</p>
              </div>

              {/* Premium filter pills */}
              <div className="flex gap-1.5 bg-gray-100/80 backdrop-blur rounded-[14px] p-1 overflow-x-auto">
                {FILTERS.map(f => {
                  const count = f.key === 'all' ? result.vehicles.length : result.vehicles.filter(v => v.category === f.key).length;
                  if (f.key !== 'all' && count === 0) return null;
                  return (
                    <button
                      key={f.key}
                      onClick={() => setFilter(f.key)}
                      className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-300 ${
                        filter === f.key
                          ? 'bg-white text-gray-900 shadow-sm border border-gray-200/60'
                          : 'text-gray-500 hover:text-gray-700'
                      }`}
                    >
                      <f.icon className="w-3.5 h-3.5" />
                      {f.label}
                      <span className={`text-[10px] ${filter === f.key ? 'text-amber-600' : 'text-gray-400'}`}>({count})</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Vehicle Cards */}
            <div className="space-y-3 mb-8">
              {filteredVehicles.length > 0 ? (
                filteredVehicles.map((vehicle, idx) => (
                  <VehicleCard
                    key={idx}
                    vehicle={vehicle}
                    from={fromDisplay}
                    to={toDisplay}
                    date={dateDisplay || date}
                    tripType={type}
                    index={idx}
                  />
                ))
              ) : (
                <div className="p-8 rounded-[20px] bg-white/70 backdrop-blur-xl border border-white/80 shadow-[0_4px_20px_rgba(0,0,0,0.04)] text-center">
                  <p className="text-gray-500 mb-2">No vehicles in this category for this route.</p>
                  <button onClick={() => setFilter('all')} className="text-sm text-amber-600 font-bold hover:underline">
                    Show all vehicles
                  </button>
                </div>
              )}
            </div>

            {/* Route Intelligence */}
            <div className="mb-8">
              <RouteIntelligence result={result} />
            </div>

            {/* Why Book With Us — Trust Strip */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-8"
            >
              {[
                { title: "No Hidden Charges", desc: "Transparent pricing", icon: Shield, gradient: "from-amber-400 to-orange-500" },
                { title: "Verified Drivers", desc: "Background-checked", icon: ShieldCheck, gradient: "from-blue-500 to-indigo-600" },
                { title: "24/7 Support", desc: "Always available", icon: Headphones, gradient: "from-emerald-500 to-teal-600" },
                { title: "Free Cancellation", desc: "Up to 24hrs before", icon: CheckCircle, gradient: "from-violet-500 to-purple-600" },
              ].map((f, i) => (
                <div key={i} className="p-4 rounded-[16px] bg-white/70 backdrop-blur-xl border border-white/80 shadow-[0_4px_16px_rgba(0,0,0,0.03)]">
                  <div className={`w-9 h-9 rounded-xl bg-gradient-to-br ${f.gradient} flex items-center justify-center shadow-sm mb-3`}>
                    <f.icon className="w-4 h-4 text-white" />
                  </div>
                  <h4 className="text-sm font-bold text-gray-900">{f.title}</h4>
                  <p className="text-[11px] text-gray-500 mt-0.5">{f.desc}</p>
                </div>
              ))}
            </motion.div>

            {/* Premium Help CTA */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="relative overflow-hidden rounded-[22px]"
            >
              <div className="absolute inset-0 bg-gray-900" />
              <div className="absolute inset-0 opacity-[0.04]" style={{
                backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)",
                backgroundSize: "20px 20px"
              }} />
              <div className="absolute top-0 right-0 w-[300px] h-[200px] bg-amber-500/10 rounded-full blur-[100px]" />

              <div className="relative p-6 sm:p-8">
                <div className="flex flex-col sm:flex-row items-center gap-6">
                  <div className="flex-1 text-center sm:text-left">
                    <h3 className="text-xl font-black text-white mb-1">Need Help Booking?</h3>
                    <p className="text-sm text-white/50">Our travel experts will find you the best deal for {fromDisplay} to {toDisplay}</p>
                  </div>
                  <div className="flex gap-3 w-full sm:w-auto">
                    <a
                      href={`tel:${phoneNumber}`}
                      onClick={trackPhoneCall}
                      className="flex-1 sm:flex-auto flex items-center justify-center gap-2 px-6 py-3.5 bg-white/10 border border-white/20 rounded-xl text-white text-sm font-bold hover:bg-white/20 transition-all duration-300"
                    >
                      <Phone className="w-4 h-4" /> Call Now
                    </a>
                    <a
                      href={`https://wa.me/91${phoneNumber}?text=${encodeURIComponent(`Hi, I need help booking a cab from ${fromDisplay} to ${toDisplay} on ${dateDisplay || 'flexible date'}.`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={trackWhatsAppClick}
                      className="flex-1 sm:flex-auto flex items-center justify-center gap-2 px-6 py-3.5 bg-green-600 rounded-xl text-white text-sm font-bold hover:bg-green-500 hover:shadow-lg hover:shadow-green-600/20 transition-all duration-300"
                    >
                      <WhatsAppIcon className="w-4 h-4" /> WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Related Services Cross-sell */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-8 mb-4"
            >
              <h3 className="text-lg font-black text-gray-900 mb-4">You Might Also Need</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { title: "Airport Transfer", href: "/airport-service", icon: Compass, gradient: "from-cyan-500 to-blue-600" },
                  { title: "Tour Packages", href: "/sightseeing", icon: MapPin, gradient: "from-emerald-500 to-teal-600" },
                  { title: "Wedding Cars", href: "/wedding", icon: Heart, gradient: "from-pink-500 to-rose-600" },
                  { title: "Tempo Traveller", href: "/tempo-traveller", icon: Bus, gradient: "from-orange-500 to-red-600" },
                ].map((s, i) => (
                  <Link key={i} href={s.href}>
                    <div className="group p-4 rounded-[16px] bg-white/70 backdrop-blur-xl border border-white/80 shadow-[0_4px_16px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:-translate-y-0.5 transition-all duration-300">
                      <div className={`w-9 h-9 rounded-xl bg-gradient-to-br ${s.gradient} flex items-center justify-center shadow-sm mb-3`}>
                        <s.icon className="w-4 h-4 text-white" />
                      </div>
                      <h4 className="text-sm font-bold text-gray-900 group-hover:text-amber-600 transition-colors">{s.title}</h4>
                      <ArrowRight className="w-3.5 h-3.5 text-gray-300 group-hover:text-amber-500 mt-1 group-hover:translate-x-0.5 transition-all" />
                    </div>
                  </Link>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </div>
    </div>
  );
}
