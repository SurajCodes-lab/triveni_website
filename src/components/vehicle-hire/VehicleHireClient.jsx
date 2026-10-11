'use client';

import Image from 'next/image';
import Link from 'next/link';
import { getVehicleImage, heroBlurDataURL } from '@/utilis/imageUtils';
import ScrollReveal from '@/components/shared/ScrollReveal';
import FaqAccordion from '@/components/shared/FaqAccordion';
import CTASection from '@/components/shared/CTASection';
import { SetStickyCta } from '@/components/ui/StickyCtaContext';
import {
  Phone, ArrowRight, Shield, Clock, Car, CheckCircle2,
  Route, MapPin, Star, Users, Fuel, Luggage, Snowflake,
  IndianRupee, XCircle, Navigation, ChevronRight, Calculator, Link as LinkIcon,
} from '@/components/ui/icons';
import { trackWhatsAppClick, trackPhoneCall } from '@/utilis/analytics';
import { canonicalClientHref } from '@/lib/seo/client-route-exists';

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
      <style jsx global>{`
        .vh-serif { font-family: Georgia, 'Times New Roman', serif; }
      `}</style>

      {/* ━━━ HERO: Showroom style, vehicle as headline ━━━ */}
      <section className="relative min-h-[62vh] sm:min-h-[68vh] flex flex-col justify-end overflow-hidden">
        <Image src={vehicleImage} alt={`${vehicleSpec.name} for ${routeData.origin} to ${routeData.destination}`} fill priority className="object-cover scale-105" sizes="100vw" quality={85} placeholder="blur" blurDataURL={heroBlurDataURL} />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/65 to-slate-950/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-rose-950/40 via-transparent to-transparent" />
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-rose-500 via-orange-400 to-amber-400 z-20" />
        {/* Soft glow orbs for depth */}
        <div className="absolute bottom-1/4 right-[8%] w-72 h-72 bg-rose-500/15 rounded-full blur-[120px] pointer-events-none" />

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
              <div className="inline-flex items-center gap-2 bg-rose-500/15 backdrop-blur-md px-4 py-1.5 rounded-full border border-rose-400/25 mb-5">
                <div className="w-1.5 h-1.5 rounded-full bg-rose-400" />
                <Car className="w-3.5 h-3.5 text-rose-300" />
                <span className="text-[11px] font-bold text-rose-200 uppercase tracking-widest">Premium Fleet 2026</span>
              </div>
              <p className="vh-serif text-rose-300/80 text-base sm:text-lg italic mb-2">Hire</p>
              <h1 className="speakable-headline text-4xl sm:text-5xl md:text-7xl font-black text-white leading-[0.95] tracking-tight">
                <span className="vh-serif italic font-bold bg-clip-text text-transparent bg-gradient-to-r from-rose-300 via-orange-200 to-amber-200">{vehicleSpec.name}</span>
                <span className="block text-2xl sm:text-3xl md:text-4xl font-bold text-white/90 mt-2">on Rent: {routeData.origin} to {routeData.destination}</span>
              </h1>

              {/* Route badge with arrow line */}
              <div className="flex items-center gap-2.5 mt-5 text-sm">
                <span className="inline-flex items-center gap-1.5 font-bold text-white"><MapPin className="w-3.5 h-3.5 text-rose-400" />{routeData.origin}</span>
                <span className="flex items-center gap-1" aria-hidden="true">
                  <span className="w-8 h-px bg-gradient-to-r from-rose-400/70 to-amber-400/70" />
                  <ArrowRight className="w-3.5 h-3.5 text-amber-400" />
                  <span className="w-8 h-px bg-gradient-to-r from-amber-400/70 to-rose-400/70" />
                </span>
                <span className="inline-flex items-center gap-1.5 font-bold text-amber-300"><MapPin className="w-3.5 h-3.5 text-amber-400" />{routeData.destination}</span>
              </div>
              <p className="text-white/45 mt-3 text-sm sm:text-base max-w-lg">
                {routeData.distanceKm} km · {routeData.duration} · <span className="text-[#FACF2D] font-bold">{routeData.fareFormatted}</span> all-inclusive
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

            {/* Floating price card — gold-trimmed */}
            <div className="relative bg-white/10 backdrop-blur-xl border border-[#FACF2D]/30 rounded-2xl p-5 sm:p-6 lg:w-72 flex-shrink-0 shadow-2xl shadow-rose-950/40">
              <div className="absolute -top-3 left-5 inline-flex items-center gap-1 bg-gradient-to-r from-[#FACF2D] to-amber-400 text-slate-900 text-[10px] font-black px-3 py-1 rounded-full shadow-lg uppercase tracking-wider">
                <Star className="w-3 h-3 fill-slate-900" /> All-Inclusive
              </div>
              <div className="grid grid-cols-2 gap-4 mt-1">
                <div>
                  <p className="text-[10px] text-white/30 uppercase tracking-widest font-semibold">Total Fare</p>
                  <p className="text-3xl font-black leading-tight bg-clip-text text-transparent bg-gradient-to-br from-[#FACF2D] to-amber-300">{routeData.fareFormatted}</p>
                </div>
                <div>
                  <p className="text-[10px] text-white/30 uppercase tracking-widest font-semibold">Distance</p>
                  <p className="text-3xl font-black text-white leading-tight">{routeData.distanceKm}<span className="text-sm text-white/40 ml-0.5">km</span></p>
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
                <span className="text-[11px] text-white/40 font-medium">4.9 · {routeData.reviewCount || 120}+ verified trips</span>
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

      {/* ━━━ DIRECT ANSWER LEAD (AEO / voice) ━━━ */}
      <section className="py-10 sm:py-14 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 sm:p-8">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-8 h-8 rounded-lg bg-rose-50 flex items-center justify-center flex-shrink-0">
                  <IndianRupee className="w-4 h-4 text-rose-600" />
                </span>
                <p className="text-[10px] font-bold text-rose-600 uppercase tracking-widest">Quick Answer</p>
              </div>
              <p className="speakable-lead text-lg sm:text-xl text-slate-800 font-medium leading-relaxed">
                {routeData.directAnswer}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-700 text-xs font-semibold px-3 py-1.5 rounded-full"><CheckCircle2 className="w-3.5 h-3.5" /> All tolls included</span>
                <span className="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-700 text-xs font-semibold px-3 py-1.5 rounded-full"><CheckCircle2 className="w-3.5 h-3.5" /> No surge pricing</span>
                <span className="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-700 text-xs font-semibold px-3 py-1.5 rounded-full"><CheckCircle2 className="w-3.5 h-3.5" /> Experienced driver</span>
                <span className="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-700 text-xs font-semibold px-3 py-1.5 rounded-full"><CheckCircle2 className="w-3.5 h-3.5" /> GPS-tracked</span>
              </div>
            </div>
          </ScrollReveal>
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
              <div className="relative bg-white/10 backdrop-blur-xl rounded-2xl border border-[#FACF2D]/30 p-6 sm:p-8 h-full overflow-hidden">
                <div className="relative text-center mb-6">
                  <p className="text-[10px] text-white/30 uppercase tracking-widest font-semibold mb-2">Total Fare</p>
                  <p className="text-5xl font-black bg-clip-text text-transparent bg-gradient-to-br from-[#FACF2D] via-amber-300 to-orange-300">{routeData.fareFormatted}</p>
                  <p className="text-white/30 text-xs mt-2">({routeData.distanceKm} km x Rs {vehicleSpec.perKm}/km)</p>
                </div>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3 text-white/60 text-sm"><Route className="w-4 h-4 text-rose-400 flex-shrink-0" /> {routeData.distanceKm} km distance</div>
                  <div className="flex items-center gap-3 text-white/60 text-sm"><Clock className="w-4 h-4 text-rose-400 flex-shrink-0" /> {routeData.duration} drive</div>
                  <div className="flex items-center gap-3 text-white/60 text-sm"><Navigation className="w-4 h-4 text-rose-400 flex-shrink-0" /> Via {routeData.highway}</div>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <a onClick={() => trackPhoneCall('vehicle_pricing')} href="tel:+917668570551" className="block text-center bg-[#FACF2D] text-slate-900 py-3.5 rounded-xl font-bold text-sm hover:bg-amber-300 transition-all active:scale-[0.97]">
                    <Phone className="w-4 h-4 inline mr-1.5" /> Call
                  </a>
                  <a onClick={() => trackWhatsAppClick('vehicle_pricing')} href={`https://wa.me/917668570551?text=${encodeURIComponent(whatsappMsg)}`} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-1.5 text-center bg-emerald-600 text-white py-3.5 rounded-xl font-bold text-sm hover:bg-emerald-700 transition-all active:scale-[0.97]">
                    {WA} WhatsApp
                  </a>
                </div>
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

          {/* Fare breakdown table */}
          <ScrollReveal>
            <div className="mt-4 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6 sm:p-8">
              <div className="flex items-center gap-2 mb-5">
                <Calculator className="w-5 h-5 text-[#FACF2D]" />
                <h3 className="font-black text-white text-sm">How the {vehicleSpec.name} Fare Is Calculated</h3>
              </div>
              <div className="overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0">
              <table className="w-full text-sm">
                <tbody>
                  {routeData.fareBreakdown.map((row, i) => {
                    const isTotal = i === routeData.fareBreakdown.length - 1;
                    return (
                      <tr key={i} className={`border-b border-white/5 ${isTotal ? 'font-black bg-[#FACF2D]/10' : ''}`}>
                        <td className={`py-3 ${isTotal ? 'text-white pl-3 rounded-l-lg' : 'text-white/60'}`}>{row.label}</td>
                        <td className={`py-3 text-right ${isTotal ? 'text-[#FACF2D] text-lg pr-3 rounded-r-lg' : 'text-white/80 font-semibold'}`}>{row.value}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              </div>
              <p className="text-white/30 text-xs mt-4">A round trip ({routeData.origin} to {routeData.destination} and back) costs approximately Rs {routeData.roundTripFare.toLocaleString('en-IN')} with a 10% return discount.</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ━━━ HOW TO BOOK (HowTo) ━━━ */}
      <section className="py-12 sm:py-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <p className="text-[10px] font-bold text-rose-600 uppercase tracking-widest mb-1">Booking in Minutes</p>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-8">How to Book a {vehicleSpec.name} from {routeData.origin} to {routeData.destination}</h2>
          </ScrollReveal>
          <div className="space-y-3">
            {routeData.bookingSteps.map((step, i) => (
              <ScrollReveal key={i} stagger={i * 50}>
                <div className="flex items-start gap-4 bg-white rounded-xl border border-slate-100 p-5 shadow-sm">
                  <span className="w-9 h-9 rounded-full bg-rose-600 text-white flex items-center justify-center flex-shrink-0 text-sm font-black">{i + 1}</span>
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm sm:text-base mb-1">{step.name}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{step.text}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal>
            <div className="mt-6 flex flex-wrap gap-3">
              <a onClick={() => trackPhoneCall('vehicle_howto')} href="tel:+917668570551" className="inline-flex items-center gap-2 bg-[#FACF2D] text-slate-900 px-6 py-3 rounded-full font-bold text-sm hover:bg-amber-300 transition-all active:scale-[0.97]">
                <Phone className="w-4 h-4" /> Call 7668570551
              </a>
              <a onClick={() => trackWhatsAppClick('vehicle_howto')} href={`https://wa.me/917668570551?text=${encodeURIComponent(whatsappMsg)}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-emerald-600 text-white px-6 py-3 rounded-full font-bold text-sm hover:bg-emerald-700 transition-all">
                {WA} WhatsApp Quote
              </a>
            </div>
          </ScrollReveal>
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
                <div className="relative flex-shrink-0">
                  <div className="relative w-9 h-9 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center shadow-lg shadow-emerald-500/30">
                    <MapPin className="w-4 h-4 text-white" />
                  </div>
                </div>
                <div><p className="font-bold text-slate-900">{routeData.origin}</p><p className="text-xs text-slate-400">Start</p></div>
              </div>

              <div className="ml-[18px] border-l-2 border-dashed border-rose-300 pl-8 space-y-3 mb-6">
                {routeData.stops.map((stop, i) => (
                  <div key={i} className="relative">
                    <div className="absolute -left-[2.35rem] top-1.5 w-3 h-3 rounded-full bg-white border-2 border-rose-400 shadow-sm" />
                    <p className="text-slate-600 text-sm font-medium">{stop}</p>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-3 mb-6">
                <div className="relative flex-shrink-0">
                  <div className="relative w-9 h-9 rounded-full bg-gradient-to-br from-rose-500 to-orange-500 flex items-center justify-center shadow-lg shadow-rose-500/30">
                    <MapPin className="w-4 h-4 text-white" />
                  </div>
                </div>
                <div><p className="font-bold text-slate-900">{routeData.destination}</p><p className="text-xs text-slate-400">Destination</p></div>
              </div>

              <div className="pt-6 border-t border-slate-100 grid grid-cols-3 gap-4 text-center">
                <div><p className="text-2xl font-black bg-clip-text text-transparent bg-gradient-to-br from-rose-600 to-orange-500">{routeData.distanceKm} km</p><p className="text-[10px] text-slate-400 uppercase tracking-widest">Distance</p></div>
                <div><p className="text-2xl font-black bg-clip-text text-transparent bg-gradient-to-br from-rose-600 to-orange-500">{routeData.duration}</p><p className="text-[10px] text-slate-400 uppercase tracking-widest">Drive Time</p></div>
                <div><p className="text-2xl font-black bg-clip-text text-transparent bg-gradient-to-br from-rose-600 to-orange-500">{routeData.stops.length}</p><p className="text-[10px] text-slate-400 uppercase tracking-widest">Major Stops</p></div>
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

      {/* ━━━ INTERNAL LINKS ━━━ */}
      {routeData.internalLinks && routeData.internalLinks.length > 0 && (
        <section className="py-12 sm:py-16 px-4 sm:px-6 bg-slate-900">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <p className="text-[10px] font-bold text-[#FACF2D] uppercase tracking-widest mb-1">Explore More</p>
              <h2 className="text-2xl sm:text-3xl font-black text-white mb-8">{routeData.origin} to {routeData.destination}: Fares, Distance &amp; Options</h2>
            </ScrollReveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {routeData.internalLinks.map((l, i) => (
                <ScrollReveal key={i} stagger={i * 50}>
                  <Link href={canonicalClientHref(l.href)} className="group flex items-center gap-3 bg-white/5 hover:bg-white/10 rounded-xl p-4 border border-white/10 hover:border-[#FACF2D]/30 transition-all">
                    <LinkIcon className="w-4 h-4 text-[#FACF2D] flex-shrink-0" />
                    <span className="text-white/80 text-sm font-medium flex-1">{l.label}</span>
                    <ArrowRight className="w-4 h-4 text-white/30 group-hover:text-[#FACF2D] transition-colors flex-shrink-0" />
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ━━━ QUICK ANSWER for FAQ speakable target ━━━ */}
      {routeData.faqs && routeData.faqs.length > 0 && (
        <section className="pt-12 sm:pt-16 px-4 sm:px-6 bg-gray-50">
          <div className="max-w-3xl mx-auto">
            <ScrollReveal>
              <div className="bg-white rounded-xl border border-amber-200/60 p-5 sm:p-6 shadow-sm">
                <h3 className="font-bold text-slate-900 text-sm sm:text-base mb-2">{routeData.faqs[0].question}</h3>
                <p className="speakable-faq-first text-slate-600 text-sm leading-relaxed">{routeData.faqs[0].answer}</p>
              </div>
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* ━━━ FAQ ━━━ */}
      <FaqAccordion heading={`${vehicleSpec.name} Hire FAQs`} faqs={routeData.faqs} />

      <CTASection heading={`Ready to Hire ${vehicleSpec.name}?`} subheading={`Book your ${vehicleSpec.name} from ${routeData.origin} to ${routeData.destination} starting at just ${routeData.fareFormatted}. Professional driver, AC, all inclusive.`} />
      <SetStickyCta
        price={routeData.fareFormatted}
        label={`${vehicleSpec.name}: ${routeData.origin} to ${routeData.destination}`}
        whatsappText={whatsappMsg}
      />
    </div>
  );
}
