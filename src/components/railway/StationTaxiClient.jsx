'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Phone, MapPin, Shield, Clock, Users, Star, ChevronRight, Car, CheckCircle2,
  ArrowRight, ChevronDown, Route, Navigation, TrainFront, BadgeCheck, Sparkles,
  MapPinned, Zap, IndianRupee
} from '@/components/ui/icons';
import { WhatsAppIcon } from '@/components/ui/icons';
import { trackWhatsAppClick, trackPhoneCall } from '@/utilis/analytics';
import { getCityImage, getVehicleImage, getCityGallery, getAttractionImage, getCityImageByIndex } from '@/utilis/imageUtils';
import StickyPriceBar from '@/components/shared/StickyPriceBar';
import SocialProofStrip from '@/components/shared/SocialProofStrip';
import { SetStickyCta } from '@/components/ui/StickyCtaContext';
import QuickEnquiryForm from '@/components/ui/QuickEnquiryForm';
import {
  getStationDetails, getArrivalTips, getTaxiComparison, getOutstationFromCity,
  getStationReviews, getCityThingsToDo, getExtendedStationFaqs, getWhyPreBookReasons,
  STATION_TAXI_INCLUSIONS, STATION_TAXI_EXCLUSIONS, STATION_CANCELLATION_POLICY,
} from '@/utilis/stationTaxiEnrichment';

// Map string icon names to components (since icons can't be serialized from server)
const iconMap = { MapPinned, Shield, Clock, Navigation, BadgeCheck, Sparkles, MapPin, Star, Zap, Phone, Car, Users, CheckCircle2, Route };
function resolveIcon(icon) {
  if (typeof icon === 'string') return iconMap[icon] || MapPin;
  return icon || MapPin;
}

export default function StationTaxiClient({ data }) {
  const [openFaq, setOpenFaq] = useState(null);
  const {
    stationName, stationCode, city, platforms, description,
    destinations, localPackages, vehicles, benefits, faqs,
    slug, cabWaitingPoint, majorTrains
  } = data;

  const cheapest = destinations.reduce((m, d) => Math.min(m, d.fare), Infinity);
  const whatsappMsg = `Hi, I need a taxi from ${stationName} (${stationCode}). Please share rates.`;

  // Derived enrichment — custom data-override-first, then programmatic defaults
  const stationDetails = data.stationDetails || getStationDetails(slug.replace('-station-taxi', '').replace('-station', ''));
  const arrivalTips = data.arrivalTips || getArrivalTips();
  const comparison = data.taxiComparison || getTaxiComparison(stationName);
  const outstationOptions = data.outstationOptions || getOutstationFromCity(city);
  const reviews = data.reviews || getStationReviews(stationName, cheapest);
  const thingsToDo = data.thingsToDoInCity || getCityThingsToDo(city);
  const extendedFaqs = data.extendedFaqs || getExtendedStationFaqs(stationName, stationCode, city);
  const whyPreBook = data.whyPreBook || getWhyPreBookReasons(stationName);
  const inclusions = data.inclusions || STATION_TAXI_INCLUSIONS;
  const exclusions = data.exclusions || STATION_TAXI_EXCLUSIONS;
  const allFaqs = [...faqs, ...extendedFaqs];
  const cityBgImage = getCityImageByIndex(city, 0);       // Hero uses the main hero image
  const cityGuideImage = getCityImageByIndex(city, 1);    // Things-to-Do left panel uses a DIFFERENT image
  const cityBannerImage = getCityImageByIndex(city, 2);   // Destination banner near bottom uses yet another
  const cityGallery = getCityGallery(city);

  return (
    <article className="min-h-screen bg-slate-950" itemScope itemType="https://schema.org/TaxiService">
      <style jsx global>{`
        @keyframes shimmer-slide { 0%{background-position:-200% 0} 100%{background-position:200% 0} }
        @keyframes float-gentle { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-12px)} }
        @keyframes pulse-glow-cyan { 0%,100%{box-shadow:0 0 20px rgba(6,182,212,0.3),0 0 60px rgba(6,182,212,0.1)} 50%{box-shadow:0 0 40px rgba(6,182,212,0.5),0 0 80px rgba(6,182,212,0.2)} }
        @keyframes track-scroll { 0%{background-position:0 0} 100%{background-position:60px 0} }
        .shimmer-text-cyan { background-size:200% 100%; animation:shimmer-slide 3s linear infinite; }
        .float-el { animation:float-gentle 4s ease-in-out infinite; }
        .float-el-d { animation:float-gentle 5s ease-in-out 1s infinite; }
        .glow-cyan { animation:pulse-glow-cyan 3s ease-in-out infinite; }
      `}</style>

      <StickyPriceBar
        title={`${stationName} Taxi`}
        price={`\u20B9${cheapest}`}
        whatsappMessage={whatsappMsg}
      />
      <SetStickyCta
        price={`\u20B9${cheapest}`}
        label={`${stationName} Taxi`}
        whatsappText={whatsappMsg}
      />

      {/* ====== HERO ====== */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden">
        {/* Destination city image backdrop (dimmed) */}
        <Image
          src={cityBgImage}
          alt={`${city} — ${stationName} station taxi destination`}
          fill
          priority
          className="object-cover opacity-25"
          sizes="100vw"
          quality={85}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/95 via-cyan-950/80 to-blue-950/60" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(6,182,212,0.15),transparent_50%)]" />
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.5) 1px, transparent 0)', backgroundSize: '32px 32px' }} />

        {/* Animated tracks */}
        <div className="absolute bottom-[8%] left-0 right-0 h-[2px] bg-cyan-500/20" />
        <div className="absolute bottom-[8%] left-0 right-0 h-[2px] opacity-30" style={{ backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 20px, rgba(6,182,212,0.4) 20px, rgba(6,182,212,0.4) 40px)', backgroundSize: '60px 2px', animation: 'track-scroll 2s linear infinite' }} />
        <div className="absolute bottom-[9.5%] left-0 right-0 h-[2px] bg-cyan-500/20" />

        {/* Orbs */}
        <div className="absolute top-[15%] left-[15%] w-[400px] h-[400px] bg-cyan-600/10 rounded-full blur-[120px] float-el" />
        <div className="absolute top-[50%] right-[10%] w-[350px] h-[350px] bg-blue-500/8 rounded-full blur-[100px] float-el-d" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 w-full py-20">
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-3">
              <div className="inline-flex items-center gap-2.5 bg-cyan-500/10 backdrop-blur-2xl border border-cyan-400/20 rounded-full px-5 py-2.5 mb-8">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <TrainFront className="w-4 h-4 text-cyan-300" />
                <span className="text-cyan-200 text-sm font-mono tracking-widest">{stationCode} STATION</span>
              </div>

              <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-[0.9] tracking-tight">
                {stationName}
                <span className="block text-transparent bg-clip-text shimmer-text-cyan" style={{ backgroundImage: 'linear-gradient(90deg, #22d3ee, #67e8f9, #06b6d4, #22d3ee)', backgroundSize: '200% 100%' }}>
                  Taxi Service
                </span>
              </h1>

              <p className="text-slate-400 text-lg md:text-xl mb-10 max-w-xl leading-relaxed">{description}</p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link onClick={() => trackPhoneCall('station_taxi')} href="tel:+917668570551" className="group inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 text-white px-8 py-4.5 rounded-2xl font-bold text-lg shadow-2xl shadow-cyan-600/25 hover:shadow-cyan-500/40 hover:scale-105 transition-all duration-300">
                  <Phone className="w-5 h-5 group-hover:animate-bounce" /> Call: 7668570551
                </Link>
                <Link onClick={() => trackWhatsAppClick('station_taxi')} href={`https://wa.me/917668570551?text=${encodeURIComponent(whatsappMsg)}`} className="inline-flex items-center justify-center gap-2.5 bg-white/[0.04] backdrop-blur-2xl text-white px-8 py-4.5 rounded-2xl font-bold border border-cyan-400/20 hover:bg-white/10 hover:border-cyan-400/40 transition-all duration-300">
                  <WhatsAppIcon className="w-5 h-5" /> WhatsApp Booking
                </Link>
              </div>

              {/* Quick Enquiry Form */}
              <QuickEnquiryForm fromCity={stationName} toCity={city} pageType="station_taxi" />
            </div>

            {/* Station Ticket Card */}
            <div className="lg:col-span-2">
              <div className="relative glow-cyan bg-white/[0.04] backdrop-blur-2xl rounded-3xl border border-white/10 overflow-hidden shadow-2xl shadow-cyan-500/10">
                <div className="bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 px-6 py-4 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <TrainFront className="w-5 h-5 text-white" />
                    <span className="text-white font-black text-sm font-mono tracking-widest">STATION INFO</span>
                  </div>
                  <span className="text-white/60 font-mono text-xs">TRIVENI CABS</span>
                </div>
                <div className="p-6">
                  <div className="text-center mb-2">
                    <div className="text-cyan-300 font-mono text-xs tracking-widest mb-1">STATION</div>
                    <div className="text-white font-black text-xl leading-tight">{stationName}</div>
                  </div>
                  <div className="flex items-center my-4 -mx-6">
                    <div className="w-5 h-10 bg-slate-950 rounded-r-full" />
                    <div className="flex-1 border-t-2 border-dashed border-white/10 mx-2" />
                    <div className="w-5 h-10 bg-slate-950 rounded-l-full" />
                  </div>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="text-center">
                      <div className="text-slate-500 text-[10px] font-mono tracking-widest mb-1">CODE</div>
                      <div className="text-cyan-300 font-black text-2xl font-mono">{stationCode}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-slate-500 text-[10px] font-mono tracking-widest mb-1">PLATFORMS</div>
                      <div className="text-cyan-300 font-black text-2xl font-mono">{platforms}</div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center bg-cyan-500/10 rounded-xl py-3 border border-cyan-500/10">
                      <div className="text-slate-500 text-[10px] font-mono tracking-widest mb-1">FARE FROM</div>
                      <div className="text-emerald-400 font-black text-xl">{'\u20B9'}{cheapest}</div>
                    </div>
                    <div className="text-center bg-cyan-500/10 rounded-xl py-3 border border-cyan-500/10">
                      <div className="text-slate-500 text-[10px] font-mono tracking-widest mb-1">STATUS</div>
                      <div className="text-emerald-400 font-black text-sm flex items-center justify-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />24/7 LIVE
                      </div>
                    </div>
                  </div>
                </div>
                <div className="px-6 pb-4 flex justify-center gap-[2px]">
                  {[...Array(40)].map((_, i) => (
                    <div key={i} className="bg-white/10 rounded-full" style={{ width: `${Math.random() > 0.5 ? 2 : 3}px`, height: `${12 + Math.random() * 10}px` }} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" preserveAspectRatio="none" className="w-full h-16">
            <path d="M0 80 L0 40 Q720 0 1440 40 L1440 80Z" fill="#020617" />
          </svg>
        </div>
      </section>

      <SocialProofStrip theme="dark" />

      {/* Freshness signal — visible "Last updated" */}
      <div className="bg-gradient-to-r from-slate-950 via-cyan-950/20 to-slate-950 border-y border-cyan-500/10 py-3 px-4">
        <div className="max-w-6xl mx-auto flex items-center justify-center gap-2 text-xs text-slate-400">
          <Clock className="w-3.5 h-3.5 text-cyan-400" />
          <span>Fares and pickup info last verified <span className="text-cyan-300 font-semibold">April 17, 2026</span></span>
          <span className="hidden sm:inline text-slate-600">·</span>
          <span className="hidden sm:inline">Station driver roster updated every 72 hours</span>
        </div>
      </div>

      {/* ====== TRUST BAR ====== */}
      <section className="py-10 px-4 border-b border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {[
            { icon: TrainFront, title: 'Meet at Platform', desc: 'Driver waits at exit', color: 'from-cyan-500 to-blue-500' },
            { icon: Shield, title: 'Fixed Fares', desc: 'Zero surge pricing', color: 'from-emerald-500 to-teal-500' },
            { icon: Clock, title: '24/7 Available', desc: 'Any train, any time', color: 'from-blue-500 to-indigo-500' },
            { icon: Star, title: '4.9 Rating', desc: 'Trusted by thousands', color: 'from-indigo-500 to-violet-500' },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-4 group">
              <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <item.icon className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="font-bold text-white text-sm">{item.title}</div>
                <div className="text-xs text-slate-500">{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ====== POPULAR DESTINATIONS ====== */}
      <section className="py-14 md:py-20 lg:py-32 px-4 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(6,182,212,0.05),transparent_60%)]" />
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-cyan-500/10 text-cyan-300 text-xs font-bold px-5 py-2 rounded-full mb-5 border border-cyan-500/20 tracking-widest uppercase">
              <Route className="w-3.5 h-3.5" /> Popular Routes
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4 tracking-tight">
              Where can a taxi from <span className="text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text">{stationName}</span> drop me?
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">Fixed fares. AC vehicles. Meet at platform exit with name board.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {destinations.map((dest, i) => (
              <div key={i} className="relative bg-white/[0.03] backdrop-blur-2xl rounded-3xl border border-white/10 overflow-hidden hover:border-cyan-500/30 hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-500 group">
                <div className="h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500" />
                <div className="p-5">
                  <div className="flex items-center justify-between mb-1">
                    <div className="text-slate-500 text-[10px] font-mono tracking-widest">{stationCode} &rarr;</div>
                    <ArrowRight className="w-4 h-4 text-slate-700 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all duration-300" />
                  </div>
                  <h3 className="text-white font-black text-lg mb-3">{dest.name}</h3>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-slate-400 text-sm"><Route className="w-3.5 h-3.5 text-slate-600" /> {dest.distance}</div>
                  </div>
                  <div className="flex items-center -mx-5 my-4">
                    <div className="w-4 h-7 bg-slate-950 rounded-r-full" />
                    <div className="flex-1 border-t-2 border-dashed border-white/10 mx-1" />
                    <div className="w-4 h-7 bg-slate-950 rounded-l-full" />
                  </div>
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <div className="text-slate-500 text-[10px] font-mono tracking-widest">FARE</div>
                      <div className="text-cyan-300 font-black text-xl">{'\u20B9'}{dest.fare.toLocaleString('en-IN')}</div>
                    </div>
                    <Link onClick={() => trackPhoneCall('station_taxi')} href="tel:+917668570551" className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-600/20 to-blue-600/20 text-cyan-300 border border-cyan-500/20 text-sm font-bold hover:from-cyan-600/30 hover:to-blue-600/30 hover:border-cyan-500/40 transition-all duration-300">
                      <Phone className="w-3.5 h-3.5" /> Book
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== LOCAL SIGHTSEEING PACKAGES ====== */}
      <section className="py-14 md:py-20 lg:py-32 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-500/10 text-blue-300 text-xs font-bold px-5 py-2 rounded-full mb-5 border border-blue-500/20 tracking-widest uppercase">
              <Sparkles className="w-3.5 h-3.5" /> Local Packages
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4 tracking-tight">
              Which {city} <span className="text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text">sightseeing packages</span> can I book from the station?
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto">Pre-booked local taxi for hassle-free sightseeing from the station</p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {localPackages.map((pkg, i) => (
              <div key={i} className={`relative bg-white/[0.03] backdrop-blur-2xl rounded-3xl border overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/10 ${i === 1 ? 'border-cyan-500/30 ring-1 ring-cyan-500/20' : 'border-white/10 hover:border-cyan-500/30'}`}>
                {i === 1 && <div className="absolute top-4 right-4"><span className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-[9px] font-black px-3 py-1 rounded-full uppercase tracking-[0.15em]">Popular</span></div>}
                <div className="h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500" />
                <div className="p-7">
                  <h3 className="text-white font-black text-xl mb-2">{pkg.name}</h3>
                  <p className="text-slate-500 text-sm mb-6">{pkg.coverage}</p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-cyan-500/10 rounded-xl p-4 text-center border border-cyan-500/10">
                      <div className="text-slate-500 text-[10px] font-mono tracking-widest mb-1">SEDAN</div>
                      <div className="text-cyan-300 font-black text-2xl">{'\u20B9'}{pkg.sedan.toLocaleString('en-IN')}</div>
                    </div>
                    <div className="bg-blue-500/10 rounded-xl p-4 text-center border border-blue-500/10">
                      <div className="text-slate-500 text-[10px] font-mono tracking-widest mb-1">SUV</div>
                      <div className="text-blue-300 font-black text-2xl">{'\u20B9'}{pkg.suv.toLocaleString('en-IN')}</div>
                    </div>
                  </div>
                  <div className="space-y-2 mb-6">
                    {['Station pickup with name board', 'AC vehicle, GPS tracked', 'Fuel & driver included'].map((f, j) => (
                      <div key={j} className="flex items-center gap-2 text-xs text-white/40"><CheckCircle2 className="w-3.5 h-3.5 text-cyan-400/60" /> {f}</div>
                    ))}
                  </div>
                  <a href="tel:+917668570551" className="block text-center py-3.5 rounded-xl font-bold bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:shadow-lg hover:shadow-cyan-500/20 transition-all">Book Now</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== VEHICLE OPTIONS — with real vehicle imagery ====== */}
      <section className="py-14 md:py-20 lg:py-32 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-950/20 to-transparent" />
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-indigo-500/10 text-indigo-300 text-xs font-bold px-5 py-2 rounded-full mb-5 border border-indigo-500/20 tracking-widest uppercase">
              <Car className="w-3.5 h-3.5" /> Vehicle Fleet
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tight mb-4">
              Which <span className="text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text">vehicle</span> should I book from {stationName}?
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto text-base md:text-lg">All AC. All under 4 years old. All GPS-tracked. All driver-verified.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {vehicles.map((v, i) => {
              const vehicleImg = getVehicleImage(v.type.toLowerCase());
              const badge = i === 1 ? "MOST POPULAR" : null;
              const perks = v.type.toLowerCase().includes('sedan') ? ["Powerful AC cabin", "2 large + 1 cabin bag", "4 seatbelts"]
                : v.type.toLowerCase().includes('tempo') ? ["AC cabin, pushback seats", "Huge boot for 12-17 bags", "Seatbelts on all seats"]
                : ["Premium AC climate", "4 large + 2 cabin bags", "Captain seats + boot"];
              return (
                <div key={i} className={`group relative bg-gradient-to-b from-white/[0.05] to-white/[0.02] backdrop-blur-2xl rounded-3xl border overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 flex flex-col ${badge ? 'border-cyan-400/50 shadow-2xl shadow-cyan-500/20' : 'border-white/10 hover:border-cyan-500/40'}`}>
                  {badge && (
                    <div className="absolute top-4 right-4 z-10">
                      <span className="inline-flex items-center gap-1 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-[10px] font-black px-3 py-1.5 rounded-full shadow-lg shadow-cyan-500/40 uppercase tracking-wider">
                        <Star className="w-3 h-3 fill-white" /> {badge}
                      </span>
                    </div>
                  )}
                  {/* Vehicle image */}
                  <div className="relative h-48 md:h-52 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-950 overflow-hidden">
                    <div style={{ background: `radial-gradient(ellipse at center, rgba(6,182,212,0.18) 0%, transparent 70%)` }} className="absolute inset-0" />
                    <Image
                      src={vehicleImg}
                      alt={`${v.type} for ${stationName} taxi — ${v.examples}`}
                      fill
                      className="object-contain p-4 transition-transform duration-700 group-hover:scale-110 drop-shadow-2xl"
                      sizes="(max-width: 768px) 100vw, 33vw"
                      quality={90}
                    />
                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-3/4 h-2 bg-black/40 blur-xl rounded-full" />
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-start justify-between gap-3 mb-1">
                      <h3 className="font-black text-xl md:text-2xl text-white">{v.type}</h3>
                      <span className="inline-flex items-center gap-1 text-[11px] font-bold text-cyan-300 bg-cyan-500/15 px-2.5 py-1 rounded-full border border-cyan-500/25">
                        <Users className="w-3 h-3" /> {v.capacity.replace(' Passengers', '')}
                      </span>
                    </div>
                    <p className="text-white/45 text-sm mb-4">{v.examples}</p>
                    <ul className="space-y-1.5 mb-5">
                      {perks.map((p, j) => (
                        <li key={j} className="flex items-center gap-2 text-xs text-white/55">
                          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="grid grid-cols-2 gap-2 mt-auto">
                      <Link onClick={() => trackPhoneCall('station_taxi')} href="tel:+917668570551" className="inline-flex items-center justify-center gap-1.5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-3 rounded-xl font-bold text-sm shadow-lg shadow-cyan-500/25 hover:scale-[1.03] transition-all">
                        <Phone className="w-4 h-4" /> Book
                      </Link>
                      <Link onClick={() => trackWhatsAppClick('station_taxi')} href={`https://wa.me/917668570551?text=${encodeURIComponent(`I want ${v.type} from ${stationName}`)}`} className="inline-flex items-center justify-center gap-1.5 bg-white/5 text-white px-4 py-3 rounded-xl font-bold text-sm border border-white/15 hover:bg-white/10 hover:border-cyan-400/40 transition-all">
                        WhatsApp
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ====== TAXI COMPARISON (NEW) — us vs prepaid / auto / app ====== */}
      <section className="py-14 md:py-20 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-950/10 to-transparent" />
        <div className="relative max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-cyan-500/10 text-cyan-300 text-xs font-bold px-5 py-2 rounded-full mb-5 border border-cyan-500/20 tracking-widest uppercase"><Shield className="w-3.5 h-3.5" /> Compare Options</div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tight mb-3">Pre-booked Cab vs <span className="text-transparent bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text">Prepaid / Auto / App</span></h2>
            <p className="text-slate-400 max-w-2xl mx-auto">Why thousands of travellers switch away from prepaid booth and ride-hailing apps at {stationName}.</p>
          </div>
          <div className="bg-white/[0.03] backdrop-blur-2xl rounded-3xl border border-white/10 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm min-w-[760px]">
                <thead className="bg-cyan-500/10 border-b border-cyan-500/20">
                  <tr>
                    <th className="text-left p-5 text-cyan-300 font-bold uppercase text-xs tracking-wider">Mode</th>
                    <th className="text-left p-5 text-cyan-300 font-bold uppercase text-xs tracking-wider">Price</th>
                    <th className="text-left p-5 text-cyan-300 font-bold uppercase text-xs tracking-wider">Wait</th>
                    <th className="text-left p-5 text-cyan-300 font-bold uppercase text-xs tracking-wider">Vehicle</th>
                    <th className="text-left p-5 text-cyan-300 font-bold uppercase text-xs tracking-wider">Best For / Caveat</th>
                  </tr>
                </thead>
                <tbody>
                  {comparison.map((c, i) => (
                    <tr key={i} className={`border-b border-white/5 hover:bg-white/[0.04] transition-colors ${c.badge ? 'bg-emerald-500/5' : ''}`}>
                      <td className="p-5 text-white font-bold">
                        {c.badge && <span className="inline-block mr-2 text-[10px] font-black bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded-full border border-emerald-500/30">{c.badge}</span>}
                        {c.mode}
                      </td>
                      <td className="p-5 text-cyan-300 font-bold text-xs">{c.price}</td>
                      <td className="p-5 text-white/70 text-xs">{c.wait}</td>
                      <td className="p-5 text-white/60 text-xs leading-relaxed">{c.vehicle}</td>
                      <td className="p-5 text-white/60 text-xs leading-relaxed">{c.cons || c.pros}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* ====== ARRIVAL TIPS (NEW) — by train type / time ====== */}
      <section className="py-14 md:py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-blue-500/10 text-blue-300 text-xs font-bold px-5 py-2 rounded-full mb-5 border border-blue-500/20 tracking-widest uppercase"><Clock className="w-3.5 h-3.5" /> Arrival Tips</div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tight mb-3">What pickup tips apply by train type and arrival time?</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">Different trains, different logistics. We&apos;ve run {stationName} pickup so many times we wrote it down.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            {arrivalTips.map((a, i) => (
              <div key={i} className="bg-white/[0.04] backdrop-blur-xl rounded-2xl border border-white/10 hover:border-cyan-500/30 p-6 transition-all duration-300">
                <h3 className="font-bold text-white text-base mb-2 flex items-center gap-2">
                  <TrainFront className="w-4 h-4 text-cyan-400" /> {a.scenario}
                </h3>
                <p className="text-white/55 text-sm leading-relaxed">{a.tip}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== THINGS TO DO IN CITY (NEW) — post-arrival guidance ====== */}
      <section className="py-14 md:py-20 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-950/10 to-transparent" />
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-indigo-500/10 text-indigo-300 text-xs font-bold px-5 py-2 rounded-full mb-5 border border-indigo-500/20 tracking-widest uppercase"><MapPin className="w-3.5 h-3.5" /> After You Arrive</div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tight mb-3">What can you do in {city} after you arrive?</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">Driver-curated shortlist. Our taxi can convert into a half-day sightseeing package on request.</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-1 lg:row-span-2 relative rounded-3xl overflow-hidden h-72 lg:h-full min-h-[360px] group">
              <Image src={cityGuideImage} alt={`${city} sightseeing`} fill className="object-cover transition-transform duration-700 group-hover:scale-110" sizes="(max-width: 1024px) 100vw, 33vw" quality={85} />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <span className="inline-flex items-center gap-1.5 bg-cyan-500/20 backdrop-blur-sm text-cyan-200 text-xs font-bold px-3 py-1.5 rounded-full border border-cyan-500/30 mb-3">
                  <MapPinned className="w-3 h-3" /> {city} Guide
                </span>
                <h3 className="text-3xl md:text-4xl font-black text-white mb-2">{city}</h3>
                <p className="text-white/70 text-sm">Covered by our local drivers daily.</p>
              </div>
            </div>
            {thingsToDo.slice(0, 4).map((item, i) => {
              // Each activity card gets its own specific attraction image (e.g., Taj Mahal, Agra Fort)
              const activityImage = getAttractionImage(item.title, city);
              return (
                <div key={i} className="bg-white/[0.04] backdrop-blur-xl rounded-2xl border border-white/10 hover:border-cyan-500/40 overflow-hidden transition-all duration-300 group">
                  {/* Dedicated activity image — varies per card */}
                  <div className="relative h-40 overflow-hidden">
                    <Image src={activityImage} alt={item.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="(max-width: 1024px) 100vw, 33vw" quality={80} />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
                    {item.time && <span className="absolute top-3 right-3 text-[10px] font-bold text-cyan-300 bg-slate-950/80 backdrop-blur-sm px-2.5 py-1 rounded-full border border-cyan-500/30 uppercase tracking-wider">{item.time}</span>}
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <div className="flex items-center gap-2">
                        <span className="flex-shrink-0 w-8 h-8 bg-cyan-500/30 backdrop-blur-sm border border-cyan-500/40 rounded-lg flex items-center justify-center text-cyan-200 font-black text-sm">{i + 1}</span>
                        <h3 className="font-black text-white text-base drop-shadow-lg">{item.title}</h3>
                      </div>
                    </div>
                  </div>
                  <p className="text-white/55 text-sm leading-relaxed p-5">{item.detail}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ====== OUTSTATION FROM STATION (NEW) ====== */}
      {outstationOptions.length > 0 && (
        <section className="py-14 md:py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-cyan-500/10 text-cyan-300 text-xs font-bold px-5 py-2 rounded-full mb-5 border border-cyan-500/20 tracking-widest uppercase"><Route className="w-3.5 h-3.5" /> Onward Journey</div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tight mb-3">Can I travel outstation directly from {stationName}?</h2>
              <p className="text-slate-400 max-w-2xl mx-auto">Arriving here but going elsewhere? We can drop you intercity directly from the station.</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {outstationOptions.map((o, i) => (
                <div key={i} className="bg-white/[0.04] backdrop-blur-xl rounded-2xl border border-white/10 hover:border-cyan-500/30 p-5 transition-all duration-300 group">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs text-white/40 font-mono">{stationCode}</span>
                    <div className="flex-1 h-px bg-gradient-to-r from-cyan-500/30 to-transparent" />
                    <ArrowRight className="w-4 h-4 text-cyan-400/70 group-hover:translate-x-0.5 transition-transform" />
                    <span className="text-sm font-bold text-white">{o.dest}</span>
                  </div>
                  <div className="flex items-center justify-between text-xs text-white/50 mb-3">
                    <span>{o.distance}</span>
                    <span>{o.time}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-white/40 uppercase tracking-wider font-semibold">From</span>
                    <span className="text-cyan-300 font-black text-lg">{o.fare}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ====== INCLUSIONS / EXCLUSIONS (NEW) ====== */}
      <section className="py-14 md:py-20 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-950/10 to-transparent" />
        <div className="relative max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-cyan-500/10 text-cyan-300 text-xs font-bold px-5 py-2 rounded-full mb-5 border border-cyan-500/20 tracking-widest uppercase"><CheckCircle2 className="w-3.5 h-3.5" /> What&apos;s Included</div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tight mb-3">What is included in the {stationName} taxi fare?</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-green-950/30 to-slate-950 backdrop-blur-xl rounded-3xl border border-green-500/20 p-7">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-11 h-11 bg-green-500/20 rounded-xl flex items-center justify-center border border-green-500/30"><CheckCircle2 className="w-5 h-5 text-green-400" /></div>
                <h3 className="font-black text-xl text-white">Included in Fare</h3>
              </div>
              <ul className="space-y-3">
                {inclusions.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-white/70 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-orange-950/30 to-slate-950 backdrop-blur-xl rounded-3xl border border-orange-500/20 p-7">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-11 h-11 bg-orange-500/20 rounded-xl flex items-center justify-center border border-orange-500/30"><IndianRupee className="w-5 h-5 text-orange-400" /></div>
                <h3 className="font-black text-xl text-white">Extra (Paid at Actual)</h3>
              </div>
              <ul className="space-y-3">
                {exclusions.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-white/70 text-sm">
                    <ArrowRight className="w-4 h-4 text-orange-400 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ====== CUSTOMER REVIEWS (NEW) ====== */}
      <section className="py-14 md:py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-cyan-500/10 text-cyan-300 text-xs font-bold px-5 py-2 rounded-full mb-5 border border-cyan-500/20 tracking-widest uppercase"><Star className="w-3.5 h-3.5" /> Reviews</div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tight mb-3">What do {stationName} passengers say about us?</h2>
            <div className="flex items-center justify-center gap-2 mt-4">
              {[...Array(5)].map((_, i) => (<Star key={i} className="w-5 h-5 text-cyan-400 fill-cyan-400" />))}
              <span className="text-white/70 font-bold ml-2">4.9 / 5</span>
              <span className="text-white/40 text-sm">({reviews.length}+ recent reviews for this station)</span>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {reviews.map((r, i) => (
              <div key={i} className="bg-white/[0.04] backdrop-blur-xl rounded-2xl border border-white/10 p-6 hover:border-cyan-500/30 transition-all duration-300">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-white font-black text-sm">{r.name.charAt(0)}</div>
                    <div>
                      <p className="font-bold text-white text-sm">{r.name}</p>
                      <p className="text-white/40 text-[11px]">{r.date} · {r.vehicle}</p>
                    </div>
                  </div>
                  <div className="flex">
                    {[...Array(r.rating)].map((_, s) => (<Star key={s} className="w-3.5 h-3.5 text-cyan-400 fill-cyan-400" />))}
                  </div>
                </div>
                <p className="text-white/60 text-sm leading-relaxed italic">&ldquo;{r.text}&rdquo;</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== CANCELLATION POLICY (NEW) ====== */}
      <section className="py-14 md:py-20 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-950/10 to-transparent" />
        <div className="relative max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-blue-500/10 text-blue-300 text-xs font-bold px-5 py-2 rounded-full mb-5 border border-blue-500/20 tracking-widest uppercase"><Clock className="w-3.5 h-3.5" /> Flexible Cancellation</div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tight">What is the cancellation and refund policy?</h2>
          </div>
          <div className="bg-white/[0.04] backdrop-blur-xl rounded-3xl border border-white/10 overflow-hidden">
            {STATION_CANCELLATION_POLICY.map((c, i) => (
              <div key={i} className={`flex items-center justify-between gap-4 p-5 md:p-6 ${i !== STATION_CANCELLATION_POLICY.length - 1 ? 'border-b border-white/5' : ''} hover:bg-white/[0.02] transition-colors`}>
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-cyan-500/15 rounded-xl flex items-center justify-center border border-cyan-500/25">
                    <Clock className="w-4 h-4 text-cyan-400" />
                  </div>
                  <p className="font-bold text-white text-sm md:text-base">{c.window}</p>
                </div>
                <span className={`text-xs md:text-sm font-bold ${i === 0 || i === 3 ? 'text-green-400' : i === 1 ? 'text-yellow-400' : 'text-orange-400'}`}>{c.charge}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== PRE-BOOK BENEFITS ====== */}
      <section className="py-14 md:py-20 lg:py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-cyan-500/10 text-cyan-300 text-xs font-bold px-5 py-2 rounded-full mb-5 border border-cyan-500/20 tracking-widest uppercase">
              <Shield className="w-3.5 h-3.5" /> Why Pre-Book
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4 tracking-tight">
              Pre-book for <span className="text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text">Hassle-free Pickup</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b, i) => (
              <div key={i} className="relative bg-white/[0.03] backdrop-blur-2xl rounded-3xl border border-white/10 p-7 hover:border-cyan-500/40 hover:bg-white/[0.06] hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-500 group overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-cyan-500/10 transition-all duration-500" />
                <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-600/20 to-blue-600/20 border border-cyan-500/20 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  {(() => { const Icon = resolveIcon(b.icon); return <Icon className="w-6 h-6 text-cyan-400" />; })()}
                </div>
                <h3 className="relative text-white font-bold text-xl mb-2">{b.title}</h3>
                <p className="relative text-slate-400 text-sm leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== HOW TO BOOK ====== */}
      <section className="py-14 md:py-20 lg:py-32 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-500/10 text-blue-300 text-xs font-bold px-5 py-2 rounded-full mb-5 border border-blue-500/20 tracking-widest uppercase">
              <Zap className="w-3.5 h-3.5" /> Simple Process
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tight">
              How to <span className="text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text">Book</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 relative">
            <div className="hidden md:block absolute top-7 left-[12.5%] right-[12.5%] h-[2px] bg-gradient-to-r from-cyan-600/30 via-blue-500/30 to-indigo-600/30" />
            {[
              { step: '01', title: 'Arrive', desc: `Your train pulls into ${stationName}. Collect luggage and head to exit.`, icon: TrainFront },
              { step: '02', title: 'Contact Us', desc: 'Call 7668570551 or WhatsApp with your location and destination.', icon: Phone },
              { step: '03', title: 'Driver Arrives', desc: `Verified driver reaches ${stationCode} exit within 10 min with name board.`, icon: MapPinned },
              { step: '04', title: 'Enjoy Ride', desc: 'Sit back in a clean AC vehicle. Fixed fare, comfortable, safe.', icon: Car },
            ].map((s, i) => (
              <div key={i} className="text-center relative group">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500 via-blue-500 to-indigo-500 flex items-center justify-center mx-auto mb-5 shadow-xl shadow-cyan-600/20 group-hover:scale-110 group-hover:shadow-cyan-500/40 transition-all duration-300 relative z-10">
                  <s.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-cyan-400 font-mono text-xs tracking-widest mb-2">{s.step}</div>
                <h3 className="text-white font-bold text-xl mb-2">{s.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== STATION INFO ====== */}
      {(cabWaitingPoint || majorTrains) && (
        <section className="py-20 md:py-28 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-cyan-500/10 text-cyan-300 text-xs font-bold px-5 py-2 rounded-full mb-5 border border-cyan-500/20 tracking-widest uppercase">
                <TrainFront className="w-3.5 h-3.5" /> Station Details
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4 tracking-tight">
              What you need to know about <span className="text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text">{stationName}</span>
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {cabWaitingPoint && (
                <div className="bg-white/[0.03] backdrop-blur-2xl rounded-3xl border border-white/10 overflow-hidden hover:border-cyan-500/30 transition-all duration-500">
                  <div className="bg-gradient-to-r from-cyan-600/20 to-blue-600/20 px-6 py-4 border-b border-white/5">
                    <div className="flex items-center gap-3"><MapPin className="w-5 h-5 text-cyan-400" /><h3 className="text-white font-bold">Cab Pickup Point</h3></div>
                  </div>
                  <div className="p-6">
                    <p className="text-slate-400 text-sm leading-relaxed">{cabWaitingPoint}</p>
                    <div className="mt-5 flex items-center gap-2 text-emerald-400 text-xs font-bold">
                      <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />Driver waiting at this location
                    </div>
                  </div>
                </div>
              )}
              {majorTrains && majorTrains.length > 0 && (
                <div className="bg-white/[0.03] backdrop-blur-2xl rounded-3xl border border-white/10 overflow-hidden hover:border-blue-500/30 transition-all duration-500">
                  <div className="bg-gradient-to-r from-blue-600/20 to-indigo-600/20 px-6 py-4 border-b border-white/5">
                    <div className="flex items-center gap-3"><TrainFront className="w-5 h-5 text-blue-400" /><h3 className="text-white font-bold">Major Trains</h3></div>
                  </div>
                  <div className="p-6 flex flex-wrap gap-2">
                    {majorTrains.map((t, i) => (
                      <span key={i} className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 text-cyan-300 border border-cyan-500/15 rounded-xl px-4 py-2 text-sm font-semibold">{t}</span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* ====== FAQS ====== */}
      <section className="py-14 md:py-20 lg:py-32 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-indigo-500/10 text-indigo-300 text-xs font-bold px-5 py-2 rounded-full mb-5 border border-indigo-500/20 tracking-widest uppercase">
              FAQs
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tight">
              Common <span className="text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text">Questions</span>
            </h2>
          </div>
          <div className="space-y-3">
            {allFaqs.map((faq, i) => (
              <div key={i} className={`bg-white/[0.03] backdrop-blur-2xl rounded-2xl border overflow-hidden transition-all duration-500 ${openFaq === i ? 'border-cyan-500/30 shadow-lg shadow-cyan-500/5' : 'border-white/10 hover:border-white/20'}`}>
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} aria-expanded={openFaq === i} aria-label={openFaq === i ? 'Collapse answer' : 'Expand answer'} className="w-full flex items-center justify-between p-6 text-left focus:outline-none focus:ring-2 focus:ring-cyan-500/50 rounded-2xl">
                  <div className="flex items-center gap-4 pr-4">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-colors duration-300 ${openFaq === i ? 'bg-cyan-500/20' : 'bg-white/5'}`}>
                      <span className={`text-xs font-black font-mono transition-colors ${openFaq === i ? 'text-cyan-300' : 'text-slate-500'}`}>{String(i + 1).padStart(2, '0')}</span>
                    </div>
                    <h3 className="text-white font-semibold text-sm md:text-base">{faq.question}</h3>
                  </div>
                  <ChevronDown className={`w-5 h-5 text-cyan-400 shrink-0 transition-transform duration-300 ${openFaq === i ? 'rotate-180' : ''}`} />
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${openFaq === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="px-6 pb-6 pt-0">
                    <p className="text-slate-400 text-sm leading-relaxed border-t border-white/5 pt-4 ml-12">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== RELATED GUIDES — cross-links to city cluster ====== */}
      <section className="py-14 md:py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-cyan-500/10 text-cyan-300 text-xs font-bold px-5 py-2 rounded-full mb-4 border border-cyan-500/20 tracking-widest uppercase"><MapPinned className="w-3.5 h-3.5" /> More About {city}</div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight">Plan Your {city} Trip</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link href={`/best-time-to-visit/${city.toLowerCase().replace(/\s+/g, '-')}`} className="group bg-white/[0.04] backdrop-blur-xl rounded-2xl border border-white/10 hover:border-cyan-500/30 p-5 transition-all duration-300">
              <Clock className="w-6 h-6 text-cyan-400 mb-3" />
              <h3 className="font-bold text-white text-base mb-1">Best Time to Visit {city}</h3>
              <p className="text-slate-400 text-xs leading-relaxed">Month-by-month weather, festivals, peak-season guide for {city}.</p>
              <span className="mt-3 inline-flex items-center text-cyan-400 text-xs font-bold gap-1 group-hover:translate-x-1 transition-transform">Read guide <ArrowRight className="w-3 h-3" /></span>
            </Link>
            <Link href={`/cab-service/${city.toLowerCase().replace(/\s+/g, '-')}`} className="group bg-white/[0.04] backdrop-blur-xl rounded-2xl border border-white/10 hover:border-cyan-500/30 p-5 transition-all duration-300">
              <Car className="w-6 h-6 text-cyan-400 mb-3" />
              <h3 className="font-bold text-white text-base mb-1">{city} Cab Service</h3>
              <p className="text-slate-400 text-xs leading-relaxed">Local, outstation, airport transfers — all {city} cab services.</p>
              <span className="mt-3 inline-flex items-center text-cyan-400 text-xs font-bold gap-1 group-hover:translate-x-1 transition-transform">Explore <ArrowRight className="w-3 h-3" /></span>
            </Link>
            <Link href={`/${city.toLowerCase().replace(/\s+/g, '-')}-travel-guide`} className="group bg-white/[0.04] backdrop-blur-xl rounded-2xl border border-white/10 hover:border-cyan-500/30 p-5 transition-all duration-300">
              <MapPin className="w-6 h-6 text-cyan-400 mb-3" />
              <h3 className="font-bold text-white text-base mb-1">{city} Travel Guide</h3>
              <p className="text-slate-400 text-xs leading-relaxed">Complete {city} attractions, food, shopping and itinerary guide.</p>
              <span className="mt-3 inline-flex items-center text-cyan-400 text-xs font-bold gap-1 group-hover:translate-x-1 transition-transform">View guide <ArrowRight className="w-3 h-3" /></span>
            </Link>
          </div>
        </div>
      </section>

      {/* ====== FINAL CTA ====== */}
      <section className="relative py-28 md:py-36 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-600 via-blue-600 to-indigo-700" />
        <div className="absolute inset-0 opacity-[0.08]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.5) 1px, transparent 0)', backgroundSize: '32px 32px' }} />
        <div className="absolute top-[20%] left-[10%] w-[300px] h-[300px] bg-white/5 rounded-full blur-[100px] float-el" />
        <div className="absolute bottom-[20%] right-[10%] w-[250px] h-[250px] bg-white/5 rounded-full blur-[80px] float-el-d" />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 mb-8 float-el">
            <TrainFront className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-5 tracking-tight">
            Arriving at {stationName}?
          </h2>
          <p className="text-2xl md:text-3xl text-cyan-100 font-bold mb-3">Your taxi is waiting at the station.</p>
          <p className="text-cyan-100/60 text-lg mb-10 max-w-xl mx-auto">Fixed fares from {'\u20B9'}{cheapest}. 24/7 service. Meet at platform exit. Clean AC vehicles.</p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Link onClick={() => trackPhoneCall('station_taxi')} href="tel:+917668570551" className="group inline-flex items-center justify-center gap-2.5 bg-white text-blue-600 px-10 py-5 rounded-2xl font-black text-lg shadow-2xl shadow-black/20 hover:scale-105 transition-all duration-300">
              <Phone className="w-5 h-5 group-hover:animate-bounce" /> Call: 7668570551
            </Link>
            <Link onClick={() => trackWhatsAppClick('station_taxi')} href={`https://wa.me/917668570551?text=${encodeURIComponent(whatsappMsg)}`} className="inline-flex items-center justify-center gap-2.5 bg-white/10 backdrop-blur-2xl text-white px-10 py-5 rounded-2xl font-bold text-lg border border-white/20 hover:bg-white/20 hover:scale-105 transition-all duration-300">
              <WhatsAppIcon className="w-5 h-5" /> WhatsApp Booking
            </Link>
          </div>
        </div>
      </section>

      {/* ====== BREADCRUMB ====== */}
      <nav className="py-4 px-4 border-t border-white/5" aria-label="Breadcrumb">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-sm text-slate-500 flex-wrap">
          <Link href="/" className="hover:text-cyan-400 transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <Link href="/railway-station-taxi" className="hover:text-cyan-400 transition-colors">Railway Station Taxi</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-slate-300 font-medium">{stationName} ({stationCode})</span>
        </div>
      </nav>
    </article>
  );
}
