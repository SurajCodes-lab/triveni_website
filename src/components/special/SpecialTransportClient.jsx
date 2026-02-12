'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  Phone, MapPin, Calendar, Check, Star,
  Sparkles, Shield, ChevronRight, ChevronDown,
  Clock, Users, ArrowRight, Car, Heart,
  Navigation, Award, ShieldCheck, UserCheck,
  CheckCircle2, BadgeCheck, Accessibility
} from '@/components/ui/icons';
import { WhatsAppIcon as BsWhatsapp } from '@/components/ui/icons';
import { phoneNumber } from '@/utilis/data';
import { FAQSection } from '@/components/seo/FAQSection';

const SpecialTransportClient = ({ service }) => {
  const [showAllFeatures, setShowAllFeatures] = useState(false);

  const whatsappMessage = encodeURIComponent(`Hi! I need ${service.title}. Please share details and pricing.`);
  const whatsappURL = `https://wa.me/91${phoneNumber}?text=${whatsappMessage}`;

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Animations */}
      <style jsx>{`
        @keyframes trust-pulse { 0%,100% { box-shadow: 0 0 20px rgba(245,158,11,0.2), 0 0 60px rgba(245,158,11,0.05); } 50% { box-shadow: 0 0 35px rgba(245,158,11,0.35), 0 0 80px rgba(245,158,11,0.1); } }
        @keyframes badge-shine { 0% { background-position: -200% 0; } 100% { background-position: 200% 0; } }
        .trust-glow { animation: trust-pulse 4s ease-in-out infinite; }
        .shimmer-amber { background: linear-gradient(90deg, #f59e0b, #fbbf24, #f59e0b, #fbbf24); background-size: 200% auto; -webkit-background-clip: text; -webkit-text-fill-color: transparent; animation: badge-shine 3s linear infinite; }
      `}</style>

      {/* HERO SECTION - Warm amber on dark */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-amber-950 to-yellow-950">
        {/* Subtle mesh pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, #f59e0b 1px, transparent 1px)', backgroundSize: '50px 50px' }} />

        {/* Radial glows */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(245,158,11,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(251,191,36,0.1),transparent_50%)]" />

        {/* Floating orbs */}
        <div className="absolute top-24 left-[12%] w-48 h-48 md:w-72 md:h-72 bg-gradient-to-br from-amber-400/15 to-yellow-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-16 right-[10%] w-56 h-56 md:w-80 md:h-80 bg-gradient-to-br from-orange-400/10 to-amber-500/10 rounded-full blur-3xl" />

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 text-center pt-24 md:pt-0">
          {/* Breadcrumb */}
          <nav className="mb-6 md:mb-8" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-2 text-sm">
              <li><Link href="/" className="text-white/60 hover:text-white transition-colors">Home</Link></li>
              <ChevronRight className="w-4 h-4 text-white/40" />
              <li><span className="text-amber-400 font-medium">Special Services</span></li>
            </ol>
          </nav>

          {/* Trust badge */}
          <div className="mb-6">
            <div className="inline-flex items-center gap-2 bg-amber-500/15 border border-amber-500/25 rounded-full px-6 py-2.5 backdrop-blur-sm">
              <ShieldCheck className="w-5 h-5 text-amber-400" />
              <span className="text-amber-300 font-bold text-sm tracking-wider uppercase">{service.serviceType}</span>
              <BadgeCheck className="w-5 h-5 text-amber-400" />
            </div>
          </div>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight tracking-tight">
            <span className="text-white drop-shadow-lg">{service.serviceType}</span>
            <br />
            <span className="shimmer-amber">Safe &amp; Reliable</span>
          </h1>

          <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto mb-8">{service.tagline}</p>

          {/* Trust badges row */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {[
              { icon: Shield, text: "Verified Drivers" },
              { icon: Star, text: "4.8 Rated" },
              { icon: Clock, text: "24/7 Available" }
            ].map((badge, i) => (
              <div key={i} className="flex items-center gap-2 bg-white/[0.07] backdrop-blur-xl rounded-full px-5 py-2.5 border border-white/10 hover:border-amber-500/30 transition-all duration-300">
                <badge.icon className="w-4 h-4 text-amber-400" />
                <span className="text-white/90 text-sm font-medium">{badge.text}</span>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={whatsappURL} target="_blank" rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-400 hover:to-green-500 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-lg shadow-green-500/25 hover:shadow-green-500/40 hover:scale-105 transition-all duration-300">
              <BsWhatsapp className="w-6 h-6" />
              <span>Book on WhatsApp</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href={`tel:+91${phoneNumber}`}
              className="group inline-flex items-center gap-3 bg-white/[0.07] backdrop-blur-xl hover:bg-white/15 text-white px-8 py-4 rounded-2xl font-bold text-lg border border-white/15 hover:border-amber-500/30 hover:scale-105 transition-all duration-300">
              <Phone className="w-6 h-6 text-amber-400" />
              <span>Call {phoneNumber}</span>
            </a>
          </div>
        </div>
      </section>

      {/* SERVICE FEATURES - Badge/certificate style cards */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-200 rounded-full px-6 py-2.5 mb-5">
              <Sparkles className="w-4 h-4 text-amber-600" />
              <span className="text-amber-600 font-semibold text-sm uppercase tracking-wider">Service Features</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-gray-900">
              What Makes Us <span className="bg-gradient-to-r from-amber-600 to-yellow-500 bg-clip-text text-transparent">Special</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {(showAllFeatures ? service.features : service.features.slice(0, 6)).map((feature, i) => (
              <div key={i} className="group relative">
                {/* Certificate-style card */}
                <div className="bg-white rounded-2xl border-2 border-amber-100 hover:border-amber-400 p-6 transition-all duration-500 hover:shadow-2xl hover:shadow-amber-500/10 relative overflow-hidden">
                  {/* Badge corner accent */}
                  <div className="absolute top-0 right-0 w-16 h-16">
                    <div className="absolute top-0 right-0 w-0 h-0 border-t-[32px] border-t-amber-100 group-hover:border-t-amber-400 border-l-[32px] border-l-transparent transition-colors duration-500" />
                    <CheckCircle2 className="absolute top-1 right-1 w-4 h-4 text-amber-600" />
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-amber-100 to-yellow-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <BadgeCheck className="w-6 h-6 text-amber-600" />
                    </div>
                    <p className="text-gray-700 text-base leading-relaxed font-medium pt-1">{feature}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {service.features.length > 6 && (
            <div className="text-center mt-8">
              <button onClick={() => setShowAllFeatures(!showAllFeatures)}
                className="text-amber-600 hover:text-amber-500 font-semibold border border-amber-200 hover:border-amber-400 rounded-xl px-6 py-2.5 transition-all">
                {showAllFeatures ? 'Show Less' : `Show All Features`}
              </button>
            </div>
          )}
        </div>
      </section>

      {/* SAFETY MEASURES */}
      <section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-200 rounded-full px-6 py-2.5 mb-5">
              <Shield className="w-4 h-4 text-amber-600" />
              <span className="text-amber-600 font-semibold text-sm uppercase tracking-wider">Safety First</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-gray-900">
              Your <span className="bg-gradient-to-r from-amber-600 to-yellow-500 bg-clip-text text-transparent">Safety</span> is Our Priority
            </h2>
          </div>
          <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-3xl border border-amber-200 p-8 md:p-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {service.safetyMeasures.map((measure, i) => (
                <div key={i} className="flex items-start gap-4 bg-white rounded-2xl border border-amber-100 hover:border-amber-300 p-5 transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/5">
                  <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-amber-500 to-yellow-500 rounded-xl flex items-center justify-center shadow-lg shadow-amber-500/20">
                    <ShieldCheck className="w-5 h-5 text-white" />
                  </div>
                  <p className="text-gray-700 font-medium leading-relaxed pt-1">{measure}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* VEHICLE OPTIONS */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-200 rounded-full px-6 py-2.5 mb-5">
              <Car className="w-4 h-4 text-amber-600" />
              <span className="text-amber-600 font-semibold text-sm uppercase tracking-wider">Vehicle Options</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-gray-900">
              Available <span className="bg-gradient-to-r from-amber-600 to-yellow-500 bg-clip-text text-transparent">Vehicles</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {service.vehicles.map((vehicle, i) => (
              <div key={i} className="group bg-white rounded-3xl border-2 border-gray-100 hover:border-amber-400 p-8 text-center transition-all duration-500 hover:shadow-2xl hover:shadow-amber-500/10 hover:scale-105 relative overflow-hidden">
                {/* Trust stamp */}
                <div className="absolute top-4 right-4">
                  <div className="w-8 h-8 bg-amber-50 rounded-full flex items-center justify-center">
                    <Check className="w-4 h-4 text-amber-600" />
                  </div>
                </div>
                <div className="w-16 h-16 bg-gradient-to-br from-amber-100 to-yellow-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Car className="w-8 h-8 text-amber-600" />
                </div>
                <h3 className="text-gray-900 font-bold text-xl mb-2">{vehicle.name}</h3>
                <p className="text-gray-500 text-sm mb-4">{vehicle.capacity}</p>
                <div className="text-3xl font-black bg-gradient-to-r from-amber-600 to-yellow-500 bg-clip-text text-transparent mb-6">{vehicle.rate}</div>
                <a href={whatsappURL} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-600 to-yellow-500 hover:from-amber-500 hover:to-yellow-400 text-white px-6 py-3.5 rounded-xl font-bold text-sm w-full justify-center transition-all duration-300 shadow-lg shadow-amber-500/20">
                  <BsWhatsapp className="w-4 h-4" />
                  Book Now
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHO IS IT FOR */}
      <section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-200 rounded-full px-6 py-2.5 mb-5">
              <Users className="w-4 h-4 text-amber-600" />
              <span className="text-amber-600 font-semibold text-sm uppercase tracking-wider">Who Is This For</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-gray-900">
              Designed <span className="bg-gradient-to-r from-amber-600 to-yellow-500 bg-clip-text text-transparent">For You</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {service.whoIsItFor.map((item, i) => (
              <div key={i} className="group flex items-center gap-4 bg-white rounded-2xl border border-gray-100 hover:border-amber-300 p-5 shadow-sm hover:shadow-xl hover:shadow-amber-500/5 transition-all duration-300">
                <div className="flex-shrink-0 w-11 h-11 bg-gradient-to-br from-amber-100 to-yellow-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <UserCheck className="w-5 h-5 text-amber-600" />
                </div>
                <span className="text-gray-700 font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DESCRIPTION */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="bg-white rounded-3xl border border-gray-100 shadow-xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-amber-50 to-transparent rounded-bl-full" />
            <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 relative">
              About <span className="bg-gradient-to-r from-amber-600 to-yellow-500 bg-clip-text text-transparent">{service.serviceType}</span>
            </h2>
            <div className="relative">
              {service.description.split('\n\n').map((para, i) => (
                <p key={i} className="text-gray-600 leading-relaxed text-lg mb-5 last:mb-0">{para}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHY TRIVENI */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-5xl font-black text-gray-900">
              Why <span className="bg-gradient-to-r from-amber-600 to-yellow-500 bg-clip-text text-transparent">Triveni Cabs</span>?
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {[
              { icon: Shield, title: "Verified & Safe", desc: "Every driver background-checked" },
              { icon: Star, title: "4.8 Star Rating", desc: "2,800+ happy customers" },
              { icon: Clock, title: "Always On Time", desc: "Punctual and reliable service" },
              { icon: Heart, title: "We Care", desc: "Empathetic, patient drivers" }
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
      <section className="py-20 md:py-28 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FAQSection faqs={service.faqs} title={`${service.serviceType} - FAQs`} variant="light" />
        </div>
      </section>

      {/* CROSS-SERVICE LINKS */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-200 rounded-full px-6 py-2.5 mb-5">
              <Navigation className="w-4 h-4 text-amber-600" />
              <span className="text-amber-600 font-semibold text-sm uppercase tracking-wider">Explore More</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-gray-900">
              More <span className="bg-gradient-to-r from-amber-600 to-yellow-500 bg-clip-text text-transparent">Services</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { href: '/wheelchair-accessible-cab', label: 'Wheelchair Accessible Cab' },
              { href: '/pet-friendly-cab-service', label: 'Pet-Friendly Cab Service' },
              { href: '/women-safety-cab-service', label: 'Women Safety Cab Service' },
              { href: '/senior-citizen-travel-service', label: 'Senior Citizen Travel' },
              { href: '/hospital-visit-cab-service', label: 'Hospital Visit Cab' },
              { href: '/outstation-cabs', label: 'Outstation Cab Service' },
              { href: '/tour-packages', label: 'Tour Packages from Delhi' },
              { href: '/airport-city-tour-combo', label: 'Airport + City Tour Combo' },
            ].map((link, i) => (
              <Link key={i} href={link.href} className="group flex items-center gap-3 bg-white rounded-2xl border border-gray-100 hover:border-amber-300 p-4 shadow-sm hover:shadow-xl hover:shadow-amber-500/5 transition-all duration-300">
                <ArrowRight className="w-4 h-4 text-amber-600 flex-shrink-0 group-hover:translate-x-1 transition-transform" />
                <span className="text-gray-700 text-sm font-medium group-hover:text-gray-900 transition-colors">{link.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* BOOKING CTA */}
      <section className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="relative bg-gradient-to-r from-amber-600 to-yellow-500 rounded-3xl p-8 md:p-14 text-center shadow-2xl shadow-amber-500/20 overflow-hidden">
            <div className="absolute top-0 left-0 w-40 h-40 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-48 h-48 bg-white/10 rounded-full blur-3xl" />
            <div className="relative">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6 backdrop-blur-sm">
                <ShieldCheck className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
                Book {service.serviceType} Now!
              </h2>
              <p className="text-white/90 mb-2 text-lg font-medium">
                Safe, Reliable &amp; Affordable {service.serviceType}
              </p>
              <p className="text-white/70 mb-10 text-lg">
                Verified drivers, GPS tracking, and 24/7 support for your peace of mind.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href={whatsappURL} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-white text-amber-600 px-8 py-4 rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300">
                  <BsWhatsapp className="w-6 h-6" />
                  <span>WhatsApp Us</span>
                </a>
                <a href={`tel:+91${phoneNumber}`}
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

export default SpecialTransportClient;
