'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Phone, MapPin, Calendar, Check, Star,
  Sparkles, Shield, ChevronRight, ChevronDown,
  Clock, Users, ArrowRight, Car, Heart,
  Navigation, Award, Zap, Timer, IndianRupee,
  CheckCircle2, Gauge, Target
} from '@/components/ui/icons';
import { WhatsAppIcon as BsWhatsapp } from '@/components/ui/icons';
import { phoneNumber } from '@/utilis/contact';
import { FAQSection } from '@/components/seo/FAQSection';
import { trackWhatsAppClick, trackPhoneCall } from '@/utilis/analytics';

const RentalPackageClient = ({ rental, heroImage, fleetImages }) => {
  const [showAllUses, setShowAllUses] = useState(false);

  const whatsappMessage = encodeURIComponent(`Hi! I want to book ${rental.title}. Please share availability and pricing details.`);
  const whatsappURL = `https://wa.me/91${phoneNumber}?text=${whatsappMessage}`;

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* HERO SECTION — deep slate + gold */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-amber-950 to-yellow-950">
        {/* Real photo behind the gradient wash (optional, per page) */}
        {heroImage && (
          <>
            <Image
              src={heroImage.src}
              alt={heroImage.alt}
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-slate-950/92 via-amber-950/85 to-yellow-950/88" />
          </>
        )}

        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'linear-gradient(rgba(245,158,11,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(245,158,11,0.5) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

        {/* Radial glows */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(245,158,11,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(56,189,248,0.1),transparent_50%)]" />

        {/* Still gold glow — no animation */}

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 text-center pt-24 md:pt-0">
          {/* Breadcrumb */}
          <nav className="mb-6 md:mb-8" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-2 text-sm">
              <li><Link href="/" className="text-white/60 hover:text-white transition-colors">Home</Link></li>
              <ChevronRight className="w-4 h-4 text-white/40" />
              <li><Link href="/outstation-cabs" className="text-white/60 hover:text-white transition-colors">Cab Services</Link></li>
              <ChevronRight className="w-4 h-4 text-white/40" />
              <li><span className="text-amber-400 font-medium">{rental.duration} Rental</span></li>
            </ol>
          </nav>

          {/* Badge */}
          <div className="mb-6">
            <div className="inline-flex items-center gap-2 bg-amber-500/15 border border-amber-500/25 rounded-full px-6 py-2.5 backdrop-blur-sm">
              <Timer className="w-5 h-5 text-amber-400" />
              <span className="text-amber-300 font-bold text-sm tracking-wider uppercase">{rental.duration} Package</span>
            </div>
          </div>

          {/* Title */}
          <h1 className="speakable-headline font-display-serif text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black mb-6 leading-[1.05] tracking-tight">
            {/* The h1 leads with the phrase the page is actually searched for,
                which the slug and title already carried. The duration keeps the
                second line it always occupied. Falls back to the old pattern
                for any package that has not been given a heading. */}
            <span className="text-white drop-shadow-lg">{rental.headingLead || rental.duration}</span>
            <br />
            <span className="text-gold-foil">{rental.headingTail || 'Cab Rental Package'}</span>
          </h1>

          {/* Direct-answer lead (voice/AEO) — data-driven, only when provided */}
          {rental.speakableLead && (
            <p className="speakable-lead text-white/80 text-base md:text-lg max-w-3xl mx-auto mb-8 leading-relaxed">
              {rental.speakableLead}
            </p>
          )}

          {/* Duration + KM pill */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <div className="flex items-center gap-2 bg-white/[0.07] backdrop-blur-xl rounded-full px-5 py-2.5 border border-white/10">
              <Clock className="w-4 h-4 text-amber-400" />
              <span className="text-white/90 text-sm font-medium">{rental.duration}</span>
            </div>
            <div className="flex items-center gap-2 bg-white/[0.07] backdrop-blur-xl rounded-full px-5 py-2.5 border border-white/10">
              <Navigation className="w-4 h-4 text-amber-400" />
              <span className="text-white/90 text-sm font-medium">{rental.km}</span>
            </div>
            <div className="flex items-center gap-2 bg-white/[0.07] backdrop-blur-xl rounded-full px-5 py-2.5 border border-white/10">
              <MapPin className="w-4 h-4 text-amber-400" />
              <span className="text-white/90 text-sm font-medium">{rental.cities.length} Cities</span>
            </div>
          </div>

          {/* Price */}
          <div className="mb-10">
            <p className="text-white/50 text-sm mb-2 uppercase tracking-wider">Starting from</p>
            <div className="inline-block bg-white/[0.05] backdrop-blur-xl rounded-2xl border border-amber-500/20 px-8 py-5 shadow-[0_0_30px_rgba(245,158,11,0.2)]">
              <div className="flex items-center justify-center gap-4">
                <span className="text-5xl md:text-6xl font-black text-gold-foil tabular-nums">{rental.fares.sedan}</span>
                <span className="text-white/50 text-lg text-left">Sedan<br/>{rental.km}</span>
              </div>
            </div>
            {/* Trust microbar */}
            <div className="mt-4 inline-flex items-center gap-3 text-sm text-white/70">
              <span className="flex items-center gap-1 font-semibold text-amber-300">
                {[1,2,3,4,5].map(i => <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />)}
                <span className="ml-1 text-white/80">4.9</span>
              </span>
              <span className="text-white/30">·</span>
              <span className="font-medium">10,000+ trips</span>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href={whatsappURL} target="_blank" rel="noopener noreferrer"
              className="sheen group inline-flex items-center gap-3 bg-[#FACF2D] hover:bg-amber-300 text-slate-900 px-8 py-4 rounded-2xl font-black text-lg shadow-[0_12px_36px_-10px_rgba(250,207,45,0.55)] hover:-translate-y-0.5 transition-all duration-300 lg:w-auto lg:px-5 lg:py-2 lg:text-[13px]">
              <BsWhatsapp className="w-6 h-6 lg:w-4 lg:h-4" />
              <span>Book on WhatsApp</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform lg:w-4 lg:h-4" />
            </a>
            <a onClick={() => trackPhoneCall('rental_package')} href={`tel:+91${phoneNumber}`}
              className="group inline-flex items-center gap-3 bg-white/[0.07] backdrop-blur-xl hover:bg-white/15 text-white px-8 py-4 rounded-2xl font-bold text-lg border border-white/15 hover:border-amber-500/30 transition-all duration-300 lg:w-auto lg:px-5 lg:py-2 lg:text-[13px]">
              <Phone className="w-6 h-6 text-amber-400 lg:w-4 lg:h-4" />
              <span>Call {phoneNumber}</span>
            </a>
          </div>
        </div>
      </section>

      {/* VEHICLE OPTIONS - Timer/clock style cards */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-200 rounded-full px-6 py-2.5 mb-5">
              <Car className="w-4 h-4 text-amber-600" />
              <span className="text-amber-600 font-semibold text-sm uppercase tracking-wider">Vehicle Options</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-gray-900">
              Choose Your <span className="bg-gradient-to-r from-amber-600 to-yellow-500 bg-clip-text text-transparent">Vehicle</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { type: "Sedan", desc: "Swift Dzire / Honda Amaze", capacity: "4 Passengers", fare: rental.fares.sedan, extra: rental.extraKm.sedan, extraHr: rental.extraHour.sedan },
              { type: "SUV", desc: "Ertiga / Innova", capacity: "6 Passengers", fare: rental.fares.suv, extra: rental.extraKm.suv, extraHr: rental.extraHour.suv, popular: true },
              { type: "Innova Crysta", desc: "Premium Comfort", capacity: "6 Passengers", fare: rental.fares.innova, extra: rental.extraKm.innova, extraHr: rental.extraHour.innova }
            ].map((v, i) => (
              <div key={i} className={`relative group ${v.popular ? 'md:-mt-4 md:mb-4' : ''}`}>
                {v.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                    <span className="bg-gradient-to-r from-amber-600 to-yellow-500 text-white text-xs font-bold px-5 py-1.5 rounded-full shadow-lg uppercase tracking-wider">Best Value</span>
                  </div>
                )}
                <div className={`bg-white rounded-3xl border-2 ${v.popular ? 'border-amber-500 shadow-2xl shadow-amber-500/10' : 'border-gray-100 shadow-xl'} p-8 text-center transition-all duration-500 hover:border-amber-400 hover:shadow-2xl hover:shadow-amber-500/15 hover:scale-105 relative overflow-hidden`}>
                  {fleetImages && fleetImages[i] ? (
                    <div className="relative -mx-8 -mt-8 mb-6 h-44 rounded-t-3xl overflow-hidden bg-slate-100">
                      <Image
                        src={fleetImages[i].src}
                        alt={fleetImages[i].alt}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  ) : (
                    /* Timer ring decoration */
                    <div className="w-20 h-20 mx-auto mb-5 relative">
                      <div className={`absolute inset-0 rounded-full border-4 ${v.popular ? 'border-amber-500' : 'border-gray-200'} group-hover:border-amber-400 transition-colors`} />
                      <div className="absolute inset-2 rounded-full bg-gradient-to-br from-amber-50 to-yellow-50 flex items-center justify-center">
                        <Clock className="w-7 h-7 text-amber-600" />
                      </div>
                    </div>
                  )}
                  <h3 className="text-gray-900 font-bold text-xl mb-1">{v.type}</h3>
                  <p className="text-gray-400 text-sm mb-1">{v.desc}</p>
                  <p className="text-gray-500 text-sm mb-5">{v.capacity}</p>
                  <div className="text-4xl font-black bg-gradient-to-r from-amber-600 to-yellow-500 bg-clip-text text-transparent mb-2">{v.fare}</div>
                  <p className="text-gray-400 text-xs mb-1">Extra km: {v.extra}</p>
                  <p className="text-gray-400 text-xs mb-6">Extra hour: {v.extraHr}</p>
                  <div className="grid grid-cols-[1fr_auto] gap-2">
                    <a href={whatsappURL} target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-600 to-yellow-500 hover:from-amber-500 hover:to-yellow-400 text-white px-6 py-3.5 rounded-xl font-bold text-sm justify-center transition-all duration-300 shadow-lg shadow-amber-500/20">
                      <BsWhatsapp className="w-4 h-4" />
                      Book Now
                    </a>
                    <a onClick={() => trackPhoneCall('rental_vehicle_card')} href={`tel:+91${phoneNumber}`} aria-label={`Call to book ${v.type}`}
                      className="inline-flex items-center justify-center px-4 rounded-xl font-bold text-sm bg-gray-100 text-gray-800 hover:bg-gray-200 transition-all duration-300">
                      <Phone className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PACKAGE DETAILS - What's included */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-gray-900">
              What’s <span className="bg-gradient-to-r from-amber-600 to-yellow-500 bg-clip-text text-transparent">Included</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Inclusions */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl border border-green-200 p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-green-200/30 rounded-bl-full" />
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2 relative">
                <CheckCircle2 className="w-6 h-6 text-green-600" />
                Included in Package
              </h3>
              <ul className="space-y-4 relative">
                {rental.inclusions.map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-7 h-7 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-green-600" />
                    </div>
                    <span className="text-gray-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            {/* Exclusions */}
            <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-3xl border border-orange-200 p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-orange-200/30 rounded-bl-full" />
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2 relative">
                <IndianRupee className="w-6 h-6 text-orange-600" />
                Extra Charges
              </h3>
              <ul className="space-y-4 relative">
                {rental.exclusions.map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-7 h-7 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <IndianRupee className="w-4 h-4 text-orange-600" />
                    </div>
                    <span className="text-gray-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FARE TABLE — warm-light gold ledger band (AEO featured-snippet target) */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-[#FFF6DC] via-amber-50/70 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="font-display-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-gray-900">
              How Much Does a <span className="text-gold-foil">{rental.duration} Cab</span> Cost?
            </h2>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto">Flat-rate fares for {rental.duration} / {rental.km}. No surge pricing — extra km and hours billed transparently only if you exceed the package.</p>
          </div>
          {(() => {
            const fareTableRows = [
              { type: 'Sedan (4 seater)', fare: rental.fares.sedan, km: rental.extraKm.sedan, hr: rental.extraHour.sedan },
              { type: 'SUV (6 seater)', fare: rental.fares.suv, km: rental.extraKm.suv, hr: rental.extraHour.suv },
              { type: 'Innova Crysta (6 seater)', fare: rental.fares.innova, km: rental.extraKm.innova, hr: rental.extraHour.innova },
            ];
            return (
              <>
                {/* Desktop ledger table */}
                <div className="hidden md:block rounded-3xl border border-amber-300/60 shadow-[0_20px_60px_-30px_rgba(184,134,11,0.35)] overflow-hidden">
                  <table className="w-full text-left text-sm">
                    <thead>
                      <tr className="bg-gray-900 text-white">
                        <th className="p-4 font-bold">Vehicle</th>
                        <th className="p-4 font-bold text-[#FACF2D]">Package Fare</th>
                        <th className="p-4 font-bold">Extra km</th>
                        <th className="p-4 font-bold">Extra hour</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-amber-100 bg-white">
                      {fareTableRows.map((r, i) => (
                        <tr key={i} className={i % 2 ? 'bg-amber-50/40' : 'bg-white'}>
                          <td className="p-4 font-semibold text-gray-800">{r.type}</td>
                          <td className="p-4 font-black text-amber-700 tabular-nums">{r.fare}</td>
                          <td className="p-4 text-gray-500">{r.km}</td>
                          <td className="p-4 text-gray-500">{r.hr}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                {/* Mobile stacked cards */}
                <div className="space-y-3 md:hidden">
                  {fareTableRows.map((r, i) => (
                    <div key={i} className="rounded-2xl border border-amber-200/60 bg-white p-4 shadow-sm">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-bold text-gray-900">{r.type}</span>
                        <span className="text-sm font-black text-amber-700 tabular-nums">{r.fare}</span>
                      </div>
                      <p className="text-xs text-gray-500">Extra km: {r.km} · Extra hour: {r.hr}</p>
                    </div>
                  ))}
                </div>
              </>
            );
          })()}
          <p className="text-gray-400 text-xs mt-4 text-center">Fares include AC vehicle, fuel and driver. Toll, parking and night charges (after 10 PM) are extra at actuals.</p>
        </div>
      </section>

      {/* BEST FOR - Badge/certificate style */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-200 rounded-full px-6 py-2.5 mb-5">
              <Target className="w-4 h-4 text-amber-600" />
              <span className="text-amber-600 font-semibold text-sm uppercase tracking-wider">Best Uses</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-gray-900">
              Perfect <span className="bg-gradient-to-r from-amber-600 to-yellow-500 bg-clip-text text-transparent">For</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {(showAllUses ? rental.bestFor : rental.bestFor.slice(0, 6)).map((use, i) => (
              <div key={i} className="group flex items-center gap-4 bg-white rounded-2xl border border-gray-100 hover:border-amber-300 p-5 shadow-sm hover:shadow-xl hover:shadow-amber-500/5 transition-all duration-300">
                <div className="flex-shrink-0 w-11 h-11 bg-gradient-to-br from-amber-100 to-yellow-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-5 h-5 text-amber-600" />
                </div>
                <span className="text-gray-700 font-medium">{use}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AVAILABLE CITIES */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-gray-900">
              Available <span className="bg-gradient-to-r from-amber-600 to-yellow-500 bg-clip-text text-transparent">Cities</span>
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {rental.cities.map((city, i) => (
              <div key={i} className="bg-gradient-to-br from-amber-50 to-yellow-50 border border-amber-200 hover:border-amber-400 rounded-xl px-6 py-3 text-amber-700 font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/10 hover:scale-105 cursor-default">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  {city}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DESCRIPTION */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="bg-white rounded-3xl border border-gray-100 shadow-xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-amber-50 to-transparent rounded-bl-full" />
            <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 relative">
              About This <span className="bg-gradient-to-r from-amber-600 to-yellow-500 bg-clip-text text-transparent">Package</span>
            </h2>
            <div className="relative">
              {rental.description.split('\n\n').map((para, i) => (
                <p key={i} className="text-gray-600 leading-relaxed text-lg mb-5 last:mb-0">{para}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHY TRIVENI */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-gray-900">
              Why Choose <span className="bg-gradient-to-r from-amber-600 to-yellow-500 bg-clip-text text-transparent">Triveni Cabs™</span>?
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {[
              { icon: Shield, title: "No Hidden Charges", desc: "Transparent pricing, no surprises" },
              { icon: Star, title: "4.9 Rating", desc: "Thousands of happy customers" },
              { icon: Clock, title: "Punctual Pickup", desc: "Driver arrives on time, every time" },
              { icon: Car, title: "Clean AC Cars", desc: "Well-maintained fleet" }
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-2xl border border-gray-100 hover:border-amber-300 p-5 text-center transition-all duration-500 hover:shadow-xl hover:shadow-amber-500/5 group">
                <div className="w-14 h-14 bg-gradient-to-br from-amber-100 to-yellow-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <item.icon className="w-7 h-7 text-amber-600" />
                </div>
                <h3 className="text-gray-900 font-bold mb-1">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FAQSection faqs={rental.faqs} title={`${rental.duration} Cab Rental - FAQs`} variant="light" />
        </div>
      </section>

      {/* CROSS-SERVICE LINKS */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-200 rounded-full px-6 py-2.5 mb-5">
              <Navigation className="w-4 h-4 text-amber-600" />
              <span className="text-amber-600 font-semibold text-sm uppercase tracking-wider">Explore More</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-gray-900">
              More <span className="bg-gradient-to-r from-amber-600 to-yellow-500 bg-clip-text text-transparent">Services</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {(rental.relatedLinks || [
              { href: '/full-day-cab-rental', label: 'Full Day Cab Rental' },
              { href: '/half-day-cab-rental', label: 'Half Day Cab Rental' },
              { href: '/multi-day-cab-hire', label: 'Multi-Day Cab Hire' },
              { href: '/monthly-car-rental', label: 'Monthly Car Rental' },
              { href: '/outstation-cabs', label: 'Outstation Cab Service' },
              { href: '/tour-package', label: 'Tour Packages from Delhi' },
              { href: '/tempo-traveller', label: 'Tempo Traveller Hire' },
              { href: '/airport-city-tour-combo', label: 'Airport + City Tour Combo' },
            ]).map((link, i) => (
              <Link key={i} href={link.href} className="group flex items-start gap-3 bg-white rounded-2xl border border-gray-100 hover:border-amber-300 p-4 shadow-sm hover:shadow-xl hover:shadow-amber-500/5 transition-all duration-300">
                <ArrowRight className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" />
                <span className="min-w-0">
                  <span className="block text-gray-700 text-sm font-medium group-hover:text-gray-900 transition-colors">{link.label}</span>
                  {link.desc && <span className="block text-gray-400 text-xs mt-0.5">{link.desc}</span>}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* BOOKING CTA */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="relative bg-gradient-to-r from-amber-500 to-yellow-500 rounded-3xl p-8 md:p-14 text-center shadow-2xl shadow-amber-500/20 overflow-hidden">
            <div className="relative">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6 backdrop-blur-sm">
                <Timer className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
                Book Your {rental.duration} Cab Now!
              </h2>
              <p className="text-white/90 mb-2 text-lg font-medium">
                {rental.km} included | From {rental.fares.sedan} Sedan
              </p>
              <p className="text-white/70 mb-10 text-lg">
                Dedicated vehicle and driver at your disposal. No surge pricing.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href={whatsappURL} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-white text-amber-600 px-8 py-4 rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300">
                  <BsWhatsapp className="w-6 h-6" />
                  <span>WhatsApp Us</span>
                </a>
                <a onClick={() => trackPhoneCall('rental_package')} href={`tel:+91${phoneNumber}`}
                  className="inline-flex items-center gap-3 bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-2xl font-bold text-lg border border-white/30 hover:bg-white/30 hover:scale-105 transition-all duration-300">
                  <Phone className="w-6 h-6" />
                  <span>Call {phoneNumber}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RentalPackageClient;
