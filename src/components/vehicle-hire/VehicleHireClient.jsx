'use client';

import Image from 'next/image';
import Link from 'next/link';
import { getVehicleImage, heroBlurDataURL } from '@/utilis/imageUtils';
import ScrollReveal from '@/components/shared/ScrollReveal';
import FaqAccordion from '@/components/shared/FaqAccordion';
import CTASection from '@/components/shared/CTASection';
import MobileStickyBar from '@/components/ui/MobileStickyBar';
import {
  Phone, ArrowRight, Shield, Clock, Car, CheckCircle2,
  Route, MapPin, Star, Users, Fuel, Luggage, Snowflake,
  IndianRupee, XCircle, Navigation, ChevronRight, Gauge, Zap,
} from '@/components/ui/icons';
import { trackWhatsAppClick, trackPhoneCall } from '@/utilis/analytics';

const WA = <svg className="w-4 h-4" viewBox="0 0 16 16" fill="currentColor"><path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/></svg>;

const SPEC_ICONS = {
  Seating: Users, Luggage: Luggage, Fuel: Fuel, AC: Snowflake, Type: Car, 'Per Km': IndianRupee,
};

export default function VehicleHireClient({ vehicleSpec, routeData }) {
  const vehicleImage = getVehicleImage(vehicleSpec.name);
  const whatsappMsg = `Hi, I want to hire a ${vehicleSpec.name} from ${routeData.origin} to ${routeData.destination} (${routeData.distanceKm} km). Please share fare details.`;

  const specs = [
    { label: 'Seating', value: vehicleSpec.seating, icon: Users },
    { label: 'Luggage', value: vehicleSpec.luggage, icon: Luggage },
    { label: 'Fuel', value: vehicleSpec.fuelType, icon: Fuel },
    { label: 'AC', value: vehicleSpec.ac ? 'Yes — Full AC' : 'No', icon: Snowflake },
    { label: 'Type', value: vehicleSpec.type, icon: Car },
    { label: 'Per Km', value: `Rs ${vehicleSpec.perKm}`, icon: IndianRupee },
  ];

  return (
    <div className="min-h-screen bg-[#f8f7f4] text-slate-900">

      {/* ━━━ HERO: Showroom style, vehicle as headline ━━━ */}
      <section className="relative min-h-[75vh] sm:min-h-[80vh] flex flex-col justify-end overflow-hidden">
        <Image src={vehicleImage} alt={`${vehicleSpec.name} for ${routeData.origin} to ${routeData.destination}`} fill priority className="object-cover" sizes="100vw" quality={85} placeholder="blur" blurDataURL={heroBlurDataURL} />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-rose-500 via-orange-400 to-amber-400 z-20" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full pb-8 sm:pb-12">
          <nav className="mb-6 flex items-center gap-1.5 text-xs text-white/40">
            <Link href="/" className="hover:text-white/70 transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-white/60">{vehicleSpec.name}</span>
            <ChevronRight className="w-3 h-3" />
            <span className="text-white/60">{routeData.origin} to {routeData.destination}</span>
          </nav>

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 lg:gap-8">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10 mb-5">
                <Car className="w-3.5 h-3.5 text-rose-400" />
                <span className="text-[11px] font-bold text-rose-400 uppercase tracking-widest">Premium Fleet 2026</span>
              </div>
              <p className="text-white/40 text-sm font-medium uppercase tracking-widest mb-2">Hire</p>
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-white leading-[0.95] tracking-tight">
                {vehicleSpec.name}
              </h1>
              <p className="text-white/40 mt-3 text-sm sm:text-base max-w-lg">
                {routeData.origin} to {routeData.destination} — {routeData.distanceKm} km · {routeData.duration}
              </p>

              <div className="flex flex-wrap gap-3 mt-6">
                <a onClick={() => trackPhoneCall('vehicle_hero')} href="tel:+917668570551" className="inline-flex items-center gap-2 bg-[#FACF2D] text-slate-900 px-6 py-3 rounded-full font-bold text-sm hover:bg-amber-300 transition-all active:scale-[0.97] shadow-lg shadow-amber-500/20">
                  <Phone className="w-4 h-4" /> Call 7668570551
                </a>
                <a onClick={() => trackWhatsAppClick('vehicle_hero')} href={`https://wa.me/917668570551?text=${encodeURIComponent(whatsappMsg)}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-full font-bold text-sm border border-white/15 hover:bg-white/15 transition-all">
                  {WA} WhatsApp Quote
                </a>
              </div>
            </div>

            {/* Floating price card */}
            <div className="bg-white/10 backdrop-blur-xl border border-white/15 rounded-2xl p-5 sm:p-6 lg:w-72 flex-shrink-0">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-[10px] text-white/30 uppercase tracking-widest font-semibold">Total Fare</p>
                  <p className="text-2xl font-black text-[#FACF2D] leading-tight">{routeData.fareFormatted}</p>
                </div>
                <div>
                  <p className="text-[10px] text-white/30 uppercase tracking-widest font-semibold">Distance</p>
                  <p className="text-2xl font-black text-white leading-tight">{routeData.distanceKm}<span className="text-sm text-white/40 ml-0.5">km</span></p>
                </div>
                <div>
                  <p className="text-[10px] text-white/30 uppercase tracking-widest font-semibold">Drive Time</p>
                  <p className="text-sm font-bold text-white/80">{routeData.duration}</p>
                </div>
                <div>
                  <p className="text-[10px] text-white/30 uppercase tracking-widest font-semibold">Rate</p>
                  <p className="text-sm font-bold text-white/80">Rs {vehicleSpec.perKm}/km</p>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-white/10 flex items-center gap-2">
                <div className="flex -space-x-1">{[1,2,3,4,5].map(i => <Star key={i} className="w-3 h-3 text-[#FACF2D] fill-[#FACF2D]" />)}</div>
                <span className="text-[11px] text-white/40 font-medium">4.9 · 10,000+ trips</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ━━━ SPECS DASHBOARD STRIP ━━━ */}
      <section className="bg-slate-900 py-6 sm:py-8 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-[10px] text-white/30 uppercase tracking-widest font-bold mb-4 text-center">Vehicle Specs Dashboard</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-3">
            {specs.map((spec, i) => {
              const Icon = spec.icon;
              return (
                <div key={i} className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-3 sm:p-4 text-center hover:border-rose-500/30 transition-all duration-300">
                  <Icon className="w-5 h-5 text-rose-400 mx-auto mb-2" />
                  <p className="text-[9px] text-white/30 uppercase tracking-widest font-semibold mb-0.5">{spec.label}</p>
                  <p className="text-sm font-bold text-white">{spec.value}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ━━━ VEHICLE SHOWCASE: Bento asymmetric ━━━ */}
      <section className="py-12 sm:py-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <p className="text-[10px] font-bold text-rose-600 uppercase tracking-widest mb-1">The Vehicle</p>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-8">{vehicleSpec.name} at a Glance</h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
            {/* Large vehicle image */}
            <ScrollReveal className="lg:col-span-3">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                <Image src={vehicleImage} alt={vehicleSpec.name} fill className="object-cover" sizes="(max-width: 768px) 100vw, 60vw" placeholder="blur" blurDataURL={heroBlurDataURL} />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900/80 to-transparent p-5">
                  <div className="flex flex-wrap gap-2">
                    {vehicleSpec.features.map((f, i) => (
                      <span key={i} className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-sm text-white text-[11px] font-medium px-3 py-1.5 rounded-full border border-white/15">
                        <CheckCircle2 className="w-3 h-3 text-emerald-400" /> {f}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Ideal for + features column */}
            <div className="lg:col-span-2 flex flex-col gap-4">
              <ScrollReveal stagger={50}>
                <div className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm">
                  <div className="flex items-center gap-2 mb-4">
                    <Star className="w-4 h-4 text-rose-500" />
                    <h3 className="font-black text-slate-900 text-sm">Ideal For</h3>
                  </div>
                  <div className="space-y-2">
                    {vehicleSpec.idealFor.map((item, i) => (
                      <div key={i} className="flex items-center gap-3 bg-rose-50 rounded-lg px-3 py-2">
                        <span className="w-5 h-5 rounded-full bg-rose-200 flex items-center justify-center text-[10px] font-black text-rose-800 flex-shrink-0">{i + 1}</span>
                        <span className="text-sm text-slate-700 font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal stagger={100}>
                <div className="bg-slate-900 rounded-2xl p-6 text-white">
                  <Shield className="w-5 h-5 text-emerald-400 mb-3" />
                  <h3 className="font-black mb-2">Verified & Safe</h3>
                  <p className="text-white/50 text-sm leading-relaxed">Every {vehicleSpec.name} comes with a verified, experienced driver, GPS tracking, and 24/7 support for your safety.</p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ━━━ PRICING: Single large card + inclusions/exclusions ━━━ */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <p className="text-[10px] font-bold text-[#FACF2D] uppercase tracking-widest mb-1">Transparent Pricing</p>
            <h2 className="text-2xl sm:text-3xl font-black text-white mb-10">{vehicleSpec.name} Fare: {routeData.origin} to {routeData.destination}</h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {/* Main pricing card */}
            <ScrollReveal>
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl border border-white/15 p-6 sm:p-8 h-full">
                <div className="text-center mb-6">
                  <p className="text-[10px] text-white/30 uppercase tracking-widest font-semibold mb-2">Total Fare</p>
                  <p className="text-5xl font-black text-[#FACF2D]">{routeData.fareFormatted}</p>
                  <p className="text-white/30 text-xs mt-2">({routeData.distanceKm} km x Rs {vehicleSpec.perKm}/km)</p>
                </div>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3 text-white/60 text-sm"><Route className="w-4 h-4 text-rose-400 flex-shrink-0" /> {routeData.distanceKm} km distance</div>
                  <div className="flex items-center gap-3 text-white/60 text-sm"><Clock className="w-4 h-4 text-rose-400 flex-shrink-0" /> {routeData.duration} drive</div>
                  <div className="flex items-center gap-3 text-white/60 text-sm"><Navigation className="w-4 h-4 text-rose-400 flex-shrink-0" /> Via {routeData.highway}</div>
                </div>
                <a onClick={() => trackPhoneCall('vehicle_pricing')} href="tel:+917668570551" className="block w-full text-center bg-[#FACF2D] text-slate-900 py-3.5 rounded-xl font-bold text-sm hover:bg-amber-300 transition-all active:scale-[0.97]">
                  <Phone className="w-4 h-4 inline mr-1.5" /> Book Now
                </a>
              </div>
            </ScrollReveal>

            {/* Inclusions */}
            <ScrollReveal stagger={100}>
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6 h-full">
                <div className="flex items-center gap-2 mb-5">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                  <h3 className="font-black text-white text-sm">Included in Fare</h3>
                </div>
                <div className="space-y-3">
                  {routeData.inclusions.map((item, i) => (
                    <div key={i} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span className="text-white/60 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Exclusions */}
            <ScrollReveal stagger={200}>
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6 h-full">
                <div className="flex items-center gap-2 mb-5">
                  <XCircle className="w-5 h-5 text-red-400" />
                  <h3 className="font-black text-white text-sm">Not Included</h3>
                </div>
                <div className="space-y-3">
                  {routeData.exclusions.map((item, i) => (
                    <div key={i} className="flex items-start gap-2.5">
                      <XCircle className="w-4 h-4 text-red-400/60 flex-shrink-0 mt-0.5" />
                      <span className="text-white/40 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ━━━ WHY THIS VEHICLE: Bento grid ━━━ */}
      <section className="py-12 sm:py-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <p className="text-[10px] font-bold text-rose-600 uppercase tracking-widest mb-1">Perfect Match</p>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-8">Why {vehicleSpec.name} for {routeData.destination}?</h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {routeData.whyThisVehicle.map((reason, i) => (
              <ScrollReveal key={i} stagger={i * 60}>
                <div className={`rounded-xl border transition-all duration-300 overflow-hidden ${i === 0 ? 'sm:col-span-2 bg-white shadow-sm border-slate-200' : 'bg-white/60 border-slate-100 hover:bg-white hover:border-slate-200 hover:shadow-sm'}`}>
                  <div className="flex items-start gap-4 p-5 sm:p-6">
                    <div className="w-1.5 self-stretch rounded-full bg-rose-500 flex-shrink-0" />
                    <div className="flex items-start gap-3 flex-1">
                      <span className="w-8 h-8 rounded-lg bg-rose-50 flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-black text-rose-600">{String(i + 1).padStart(2, '0')}</span>
                      <div>
                        <h3 className="font-bold text-slate-900 text-sm sm:text-base mb-1">{reason.title}</h3>
                        <p className="text-slate-600 text-sm leading-relaxed">{reason.desc}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━ ROUTE INFO STRIP ━━━ */}
      <section className="py-12 sm:py-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <p className="text-[10px] font-bold text-rose-600 uppercase tracking-widest mb-1">Route Details</p>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-8">{routeData.origin} to {routeData.destination} Route</h2>
          </ScrollReveal>

          <ScrollReveal>
            <div className="bg-white rounded-2xl border border-slate-100 p-6 sm:p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-9 h-9 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4 text-emerald-600" />
                </div>
                <div><p className="font-bold text-slate-900">{routeData.origin}</p><p className="text-xs text-slate-400">Start</p></div>
              </div>

              <div className="ml-[18px] border-l-2 border-dashed border-rose-200 pl-8 space-y-3 mb-6">
                {routeData.stops.map((stop, i) => (
                  <div key={i} className="relative">
                    <div className="absolute -left-[2.35rem] top-1.5 w-2.5 h-2.5 rounded-full bg-rose-200 border-2 border-rose-400" />
                    <p className="text-slate-600 text-sm font-medium">{stop}</p>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-3 mb-6">
                <div className="w-9 h-9 rounded-full bg-rose-50 border border-rose-200 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4 text-rose-600" />
                </div>
                <div><p className="font-bold text-slate-900">{routeData.destination}</p><p className="text-xs text-slate-400">Destination</p></div>
              </div>

              <div className="pt-6 border-t border-slate-100 grid grid-cols-3 gap-4 text-center">
                <div><p className="text-xl font-black text-rose-600">{routeData.distanceKm} km</p><p className="text-[10px] text-slate-400 uppercase tracking-widest">Distance</p></div>
                <div><p className="text-xl font-black text-rose-600">{routeData.duration}</p><p className="text-[10px] text-slate-400 uppercase tracking-widest">Drive Time</p></div>
                <div><p className="text-xl font-black text-rose-600">{routeData.stops.length}</p><p className="text-[10px] text-slate-400 uppercase tracking-widest">Major Stops</p></div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ━━━ RELATED VEHICLES ━━━ */}
      {routeData.relatedVehicleRoutes.length > 0 && (
        <section className="py-12 sm:py-16 px-4 sm:px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <ScrollReveal>
              <p className="text-[10px] font-bold text-rose-600 uppercase tracking-widest mb-1">More Options</p>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-8">Other Vehicle Options</h2>
            </ScrollReveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {routeData.relatedVehicleRoutes.map((r, i) => (
                <ScrollReveal key={i} stagger={i * 50}>
                  <Link href={`/${r.vehicleSlug}/${r.routeSlug}`} className="group flex items-center gap-4 bg-[#f8f7f4] rounded-xl p-4 hover:bg-white hover:shadow-lg transition-all duration-300 border border-transparent hover:border-slate-200">
                    <div className="w-10 h-10 rounded-lg bg-rose-50 flex items-center justify-center flex-shrink-0 group-hover:bg-rose-100 transition-colors">
                      <Car className="w-4 h-4 text-rose-600" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-bold text-slate-900 text-sm truncate">{r.label}</p>
                      <p className="text-xs text-slate-500">{r.vehicleType === routeData.vehicleType ? 'Same Vehicle' : 'Alternative'}</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-rose-500 transition-colors flex-shrink-0" />
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ━━━ FAQ ━━━ */}
      <FaqAccordion heading={`${vehicleSpec.name} Hire FAQs`} faqs={routeData.faqs} />

      <CTASection heading={`Ready to Hire ${vehicleSpec.name}?`} subheading={`Book your ${vehicleSpec.name} from ${routeData.origin} to ${routeData.destination} starting at just ${routeData.fareFormatted}. Professional driver, AC, all inclusive.`} />
      <MobileStickyBar />
    </div>
  );
}
