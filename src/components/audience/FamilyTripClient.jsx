'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Phone, MapPin, Shield, Clock, Users, Star, ChevronRight, Car, CheckCircle2, Calendar, ArrowRight, IndianRupee, Baby, TreePine, Hotel, Heart, Coffee, Route, Compass, HelpCircle } from '@/components/ui/icons';
import { trackWhatsAppClick, trackPhoneCall } from '@/utilis/analytics';

export default function FamilyTripClient({ data }) {
  const phoneNumber = '7668570551';
  const whatsappLink = 'https://wa.me/917668570551';
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <main className="min-h-screen bg-amber-950 text-white overflow-hidden">
      <style jsx>{`
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-12px) rotate(1deg); }
          66% { transform: translateY(-6px) rotate(-1deg); }
        }
        @keyframes star-twinkle {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.3); }
        }
        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes pulse-warm {
          0%, 100% { box-shadow: 0 0 20px rgba(245, 158, 11, 0.15); }
          50% { box-shadow: 0 0 40px rgba(245, 158, 11, 0.35), 0 0 80px rgba(245, 158, 11, 0.1); }
        }
        @keyframes expand-down {
          from { max-height: 0; opacity: 0; }
          to { max-height: 500px; opacity: 1; }
        }
        @keyframes collapse-up {
          from { max-height: 500px; opacity: 1; }
          to { max-height: 0; opacity: 0; }
        }
        @keyframes orb-drift {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(30px, -20px) scale(1.05); }
          50% { transform: translate(-10px, 20px) scale(0.95); }
          75% { transform: translate(-30px, -10px) scale(1.02); }
        }
        .shimmer-amber {
          background: linear-gradient(
            110deg,
            #f59e0b 0%,
            #fbbf24 20%,
            #fef3c7 40%,
            #fbbf24 60%,
            #f59e0b 80%,
            #fbbf24 100%
          );
          background-size: 200% auto;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shimmer 4s linear infinite;
        }
        .hover-lift {
          transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
        }
        .hover-lift:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 60px rgba(245, 158, 11, 0.2), 0 8px 24px rgba(245, 158, 11, 0.1);
        }
        .glass-card {
          background: rgba(255, 255, 255, 0.04);
          backdrop-filter: blur(24px);
          -webkit-backdrop-filter: blur(24px);
          border: 1px solid rgba(255, 255, 255, 0.08);
        }
        .glass-card-hover:hover {
          border-color: rgba(245, 158, 11, 0.3);
          background: rgba(255, 255, 255, 0.07);
        }
        .animated-gradient-bg {
          background: linear-gradient(-45deg, #451a03, #7c2d12, #78350f, #431407);
          background-size: 400% 400%;
          animation: gradient-shift 15s ease infinite;
        }
      `}</style>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden animated-gradient-bg">
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }} />

        {/* Floating decorative orbs */}
        <div className="absolute top-20 left-[10%] w-80 h-80 bg-amber-500/10 rounded-full blur-[100px]" style={{ animation: 'orb-drift 12s ease-in-out infinite' }} />
        <div className="absolute bottom-20 right-[10%] w-96 h-96 bg-orange-500/10 rounded-full blur-[100px]" style={{ animation: 'orb-drift 15s ease-in-out infinite reverse' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-yellow-500/5 rounded-full blur-[120px]" style={{ animation: 'pulse-warm 6s ease-in-out infinite' }} />

        {/* Twinkling stars */}
        {[...Array(6)].map((_, i) => (
          <div
            key={`star-${i}`}
            className="absolute w-1.5 h-1.5 bg-amber-300/60 rounded-full"
            style={{
              top: `${15 + i * 14}%`,
              left: `${8 + i * 16}%`,
              animation: `star-twinkle ${2 + i * 0.5}s ease-in-out infinite`,
              animationDelay: `${i * 0.7}s`
            }}
          />
        ))}

        {/* Floating icons */}
        <div className="absolute top-32 right-[15%] text-amber-500/10" style={{ animation: 'float 8s ease-in-out infinite' }}>
          <TreePine className="w-20 h-20" />
        </div>
        <div className="absolute bottom-32 left-[12%] text-orange-500/10" style={{ animation: 'float 10s ease-in-out infinite', animationDelay: '2s' }}>
          <Users className="w-24 h-24" />
        </div>
        <div className="absolute top-[60%] right-[8%] text-yellow-500/8" style={{ animation: 'float 9s ease-in-out infinite', animationDelay: '4s' }}>
          <Heart className="w-16 h-16" />
        </div>

        {/* Radial gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-amber-950/80" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 w-full">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-amber-400/70 mb-8">
            <Link href="/" className="hover:text-amber-300 transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="font-medium text-amber-300">Family Trip to {data.destination} from Delhi</span>
          </nav>

          <div className="flex items-center gap-3 mb-6">
            <div className="flex items-center gap-2 glass-card rounded-full px-4 py-1.5 text-sm font-medium text-amber-300 border-amber-500/20">
              <Users className="w-4 h-4" />
              Family Trip
            </div>
            <div className="flex items-center gap-2 glass-card rounded-full px-4 py-1.5 text-sm font-medium text-orange-300 border-orange-500/20">
              <Baby className="w-4 h-4" />
              Kid-Friendly
            </div>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            Family Trip to{' '}
            <span className="shimmer-amber">{data.destination}</span>
            <br />
            <span className="text-white/80 text-2xl sm:text-3xl lg:text-4xl">from Delhi by Car</span>
          </h1>
          <p className="text-lg sm:text-xl text-amber-100/70 mb-10 max-w-3xl leading-relaxed">
            {data.tagline}. Safe, comfortable {data.vehicle.name} ride with kid-friendly stops and experienced drivers.
          </p>

          {/* Animated stat badges */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-10">
            {[
              { icon: Route, label: 'Distance', value: data.distance },
              { icon: Calendar, label: 'Duration', value: data.duration },
              { icon: Users, label: 'Family Size', value: data.familySize },
              { icon: IndianRupee, label: 'Starting From', value: `Rs ${data.price.sedan.toLocaleString()}` },
            ].map((item, i) => (
              <div
                key={i}
                className="glass-card hover-lift rounded-2xl p-4 sm:p-5 group cursor-default"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <item.icon className="w-5 h-5 text-amber-400 mb-2 group-hover:text-amber-300 transition-colors" />
                <p className="text-xs text-amber-300/50 uppercase tracking-wider">{item.label}</p>
                <p className="font-bold text-white text-lg">{item.value}</p>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <a
              onClick={() => trackPhoneCall('family_trip')} href={`tel:${phoneNumber}`}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 hover:scale-[1.02] active:scale-[0.98]"
              style={{ animation: 'pulse-warm 3s ease-in-out infinite' }}
            >
              <Phone className="w-5 h-5" />
              Call Now - {phoneNumber}
            </a>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-600/90 hover:bg-green-500 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all hover:shadow-lg hover:shadow-green-500/20 hover:scale-[1.02] active:scale-[0.98] border border-green-500/30"
            >
              WhatsApp Enquiry
            </a>
          </div>
        </div>
      </section>

      {/* Vehicle Recommendation */}
      <section className="relative py-20 bg-amber-950">
        <div className="absolute inset-0 bg-gradient-to-b from-amber-950/0 via-orange-950/20 to-amber-950/0" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-10 flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center">
              <Car className="w-5 h-5 text-white" />
            </div>
            Recommended Vehicle for Your Family
          </h2>
          <div className="glass-card rounded-3xl p-6 sm:p-10 hover-lift" style={{ animation: 'pulse-warm 6s ease-in-out infinite' }}>
            <div className="flex flex-col sm:flex-row gap-8">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-4 py-1.5 rounded-full text-sm font-bold tracking-wide uppercase">Recommended</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">{data.vehicle.name}</h3>
                <p className="text-amber-200/60 mb-6 text-lg">{data.vehicle.seats}-Seater {data.vehicle.type} - Perfect for families</p>
                <ul className="space-y-3">
                  {data.vehicle.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-amber-100/80">
                      <CheckCircle2 className="w-5 h-5 text-amber-400 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="sm:w-80 glass-card rounded-2xl p-6 border-amber-500/10">
                <h4 className="font-bold text-amber-300 mb-5 text-lg">Package Pricing</h4>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-2">
                    <span className="text-amber-100/60">Sedan (4 pax)</span>
                    <span className="font-bold text-white text-lg">Rs {data.price.sedan.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center bg-gradient-to-r from-amber-500/15 to-orange-500/10 -mx-3 px-3 py-3 rounded-xl border border-amber-500/20">
                    <span className="text-amber-300 font-semibold">SUV / Innova (6 pax)</span>
                    <span className="font-bold text-amber-300 text-lg">Rs {data.price.suv.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-amber-100/60">Tempo (10+ pax)</span>
                    <span className="font-bold text-white text-lg">Rs {data.price.tempo.toLocaleString()}</span>
                  </div>
                </div>
                <p className="text-xs text-amber-400/40 mt-4">*Toll, parking, driver allowance included</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Kid-Friendly Activities */}
      <section className="relative py-20 bg-orange-950/30">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(245,158,11,0.05)_0%,transparent_60%)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-yellow-500 rounded-xl flex items-center justify-center">
              <Baby className="w-5 h-5 text-white" />
            </div>
            Kid-Friendly Activities in {data.destination}
          </h2>
          <p className="text-amber-200/50 mb-10 text-lg">Fun for children of all ages, curated by families who have been there</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.kidFriendlyActivities.map((activity, i) => (
              <div
                key={i}
                className="glass-card glass-card-hover hover-lift rounded-2xl p-6 group cursor-default"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-amber-500/20 to-orange-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:from-amber-500/30 group-hover:to-orange-500/30 transition-all border border-amber-500/10">
                  <Star className="w-6 h-6 text-amber-400" />
                </div>
                <h3 className="font-bold text-white text-lg mb-2 group-hover:text-amber-300 transition-colors">{activity.name}</h3>
                <p className="text-sm text-amber-100/50 leading-relaxed">{activity.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Day-wise Itinerary */}
      <section className="relative py-20 bg-amber-950">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(245,158,11,0.05)_0%,transparent_60%)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-amber-500 rounded-xl flex items-center justify-center">
              <Calendar className="w-5 h-5 text-white" />
            </div>
            Day-wise Family Itinerary
          </h2>
          <p className="text-amber-200/50 mb-10 text-lg">Planned with rest breaks and kid-friendly pacing</p>
          <div className="space-y-5">
            {data.itinerary.map((day, i) => (
              <div
                key={i}
                className="glass-card glass-card-hover hover-lift rounded-2xl p-6 sm:p-8 group cursor-default"
              >
                <div className="flex items-start gap-5">
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl flex flex-col items-center justify-center flex-shrink-0 shadow-lg shadow-amber-500/20 group-hover:shadow-amber-500/40 transition-shadow">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-amber-100/80">Day</span>
                    <span className="text-2xl font-black leading-none text-white">{day.day}</span>
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-amber-300 transition-colors">{day.title}</h3>
                    <p className="text-amber-100/55 leading-relaxed">{day.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Package Includes */}
      <section className="relative py-20 bg-orange-950/30">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(245,158,11,0.04)_0%,transparent_70%)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-10 flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
              <CheckCircle2 className="w-5 h-5 text-white" />
            </div>
            What&apos;s Included in Your Package
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {data.packageIncludes.map((item, i) => (
              <div
                key={i}
                className="glass-card glass-card-hover hover-lift flex items-center gap-4 rounded-xl p-5 group cursor-default"
              >
                <div className="w-8 h-8 bg-green-500/15 rounded-lg flex items-center justify-center flex-shrink-0 border border-green-500/20">
                  <CheckCircle2 className="w-4 h-4 text-green-400" />
                </div>
                <span className="text-amber-100/70 group-hover:text-amber-100 transition-colors">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety Features */}
      <section className="relative py-20 bg-amber-950">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(34,197,94,0.03)_0%,transparent_60%)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
              <Shield className="w-5 h-5 text-white" />
            </div>
            Family Safety Features
          </h2>
          <p className="text-amber-200/50 mb-10 text-lg">Your family&apos;s safety is our highest priority</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {data.safetyFeatures.map((feature, i) => (
              <div
                key={i}
                className="glass-card glass-card-hover hover-lift flex items-start gap-4 rounded-xl p-5 group cursor-default border-green-500/5"
              >
                <div className="w-8 h-8 bg-green-500/15 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 border border-green-500/20">
                  <Shield className="w-4 h-4 text-green-400" />
                </div>
                <span className="text-amber-100/70 group-hover:text-amber-100 transition-colors">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hotel Areas */}
      <section className="relative py-20 bg-orange-950/30">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(245,158,11,0.05)_0%,transparent_60%)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-10 flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl flex items-center justify-center">
              <Hotel className="w-5 h-5 text-white" />
            </div>
            Recommended Hotel Areas
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {data.hotelAreas.map((area, i) => (
              <div
                key={i}
                className="glass-card glass-card-hover hover-lift rounded-2xl p-6 text-center group cursor-default"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-amber-500/15 to-orange-500/10 rounded-xl flex items-center justify-center mx-auto mb-3 border border-amber-500/10 group-hover:border-amber-500/30 transition-colors">
                  <MapPin className="w-6 h-6 text-amber-400" />
                </div>
                <p className="font-semibold text-white group-hover:text-amber-300 transition-colors">{area}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Travel Tips */}
      <section className="relative py-20 bg-amber-950">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_center,rgba(245,158,11,0.04)_0%,transparent_60%)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-10 flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-yellow-500 rounded-xl flex items-center justify-center">
              <Compass className="w-5 h-5 text-white" />
            </div>
            Family Travel Tips
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {data.travelTips.map((tip, i) => (
              <div
                key={i}
                className="glass-card glass-card-hover hover-lift flex items-start gap-4 rounded-xl p-5 group cursor-default"
              >
                <span className="w-9 h-9 bg-gradient-to-br from-amber-500 to-orange-600 text-white rounded-xl flex items-center justify-center text-sm font-bold flex-shrink-0 shadow-lg shadow-amber-500/15">
                  {i + 1}
                </span>
                <p className="text-amber-100/70 group-hover:text-amber-100 transition-colors leading-relaxed">{tip}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Best Season */}
      <section className="relative py-20 bg-orange-950/30">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(245,158,11,0.05)_0%,transparent_50%)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl p-10 sm:p-14 text-center overflow-hidden" style={{ animation: 'pulse-warm 5s ease-in-out infinite' }}>
            {/* Animated gradient background */}
            <div className="absolute inset-0 animated-gradient-bg rounded-3xl" />
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 via-orange-500/10 to-yellow-500/20 rounded-3xl" />
            <div className="absolute inset-[1px] rounded-3xl glass-card" />

            {/* Decorative stars */}
            {[...Array(4)].map((_, i) => (
              <div
                key={`season-star-${i}`}
                className="absolute w-1 h-1 bg-amber-300/40 rounded-full"
                style={{
                  top: `${20 + i * 20}%`,
                  left: `${10 + i * 25}%`,
                  animation: `star-twinkle ${2 + i * 0.8}s ease-in-out infinite`,
                  animationDelay: `${i * 0.5}s`
                }}
              />
            ))}

            <div className="relative">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-500/20 to-orange-500/15 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-amber-500/20">
                <Calendar className="w-8 h-8 text-amber-400" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-3 text-white">Best Season to Visit</h2>
              <p className="text-xl sm:text-2xl font-semibold shimmer-amber inline-block">{data.bestSeason}</p>
              {data.altitude && <p className="mt-3 text-amber-300/50">Altitude: {data.altitude}</p>}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section - Interactive Accordion */}
      <section className="relative py-20 bg-amber-950">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_center,rgba(245,158,11,0.04)_0%,transparent_60%)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-10 flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl flex items-center justify-center">
              <HelpCircle className="w-5 h-5 text-white" />
            </div>
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {data.faqs.map((faq, i) => (
              <div
                key={i}
                className={`glass-card rounded-2xl overflow-hidden transition-all duration-300 ${
                  openFaq === i ? 'border-amber-500/30 shadow-lg shadow-amber-500/5' : ''
                }`}
              >
                <button
                  onClick={() => toggleFaq(i)}
                  aria-expanded={openFaq === i}
                  aria-label={openFaq === i ? 'Collapse answer' : 'Expand answer'}
                  className="w-full flex items-center gap-4 p-5 sm:p-6 text-left hover:bg-white/[0.02] transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500/50 rounded-2xl"
                >
                  <span className="w-8 h-8 bg-gradient-to-br from-amber-500 to-orange-600 rounded-lg flex items-center justify-center text-sm font-bold text-white flex-shrink-0">
                    {i + 1}
                  </span>
                  <h3 className="font-semibold text-white pr-4 flex-1">{faq.question}</h3>
                  <ChevronRight
                    className={`w-5 h-5 text-amber-400 transition-transform duration-300 flex-shrink-0 ${
                      openFaq === i ? 'rotate-90' : ''
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openFaq === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-5 sm:px-6 pb-6 pl-[4.5rem]">
                    <p className="text-amber-100/60 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cross-Service Links */}
      <section className="relative py-16 bg-amber-950">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">Explore More Services</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { href: `/sightseeing/${data.destination.toLowerCase().replace(/\s+/g, '-')}`, label: `${data.destination} Sightseeing` },
              { href: `/airport-service/${data.destination.toLowerCase().replace(/\s+/g, '-')}`, label: `${data.destination} Airport Taxi` },
              { href: `/${data.destination.toLowerCase().replace(/\s+/g, '-')}`, label: `${data.destination} Cab Service` },
              { href: `/wedding/${data.destination.toLowerCase().replace(/\s+/g, '-')}`, label: `${data.destination} Wedding Cars` },
              { href: `/places-to-visit-near-${data.destination.toLowerCase().replace(/\s+/g, '-')}`, label: `Places Near ${data.destination}` },
              { href: '/tour-package', label: 'Tour Packages' },
              { href: '/tempo-traveller', label: 'Tempo Traveller' },
              { href: '/outstation-cabs', label: 'Outstation Cabs' },
            ].map((link) => (
              <Link key={link.href} href={link.href} className="glass-card glass-card-hover p-4 rounded-xl text-center">
                <span className="text-amber-100/80 hover:text-white text-sm font-medium">{link.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-20 overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0 animated-gradient-bg" />
        <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-transparent to-orange-500/10" />

        {/* Floating glow orbs */}
        <div className="absolute top-10 left-1/4 w-60 h-60 bg-amber-500/15 rounded-full blur-[80px]" style={{ animation: 'orb-drift 10s ease-in-out infinite' }} />
        <div className="absolute bottom-10 right-1/4 w-72 h-72 bg-orange-500/10 rounded-full blur-[80px]" style={{ animation: 'orb-drift 12s ease-in-out infinite reverse' }} />

        {/* Twinkling stars */}
        {[...Array(5)].map((_, i) => (
          <div
            key={`cta-star-${i}`}
            className="absolute w-1 h-1 bg-amber-300/50 rounded-full"
            style={{
              top: `${15 + i * 18}%`,
              left: `${5 + i * 22}%`,
              animation: `star-twinkle ${2.5 + i * 0.4}s ease-in-out infinite`,
              animationDelay: `${i * 0.6}s`
            }}
          />
        ))}

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-4xl font-bold mb-5">
            Plan Your Family Trip to{' '}
            <span className="shimmer-amber">{data.destination}</span>
            {' '}Today!
          </h2>
          <p className="text-lg sm:text-xl text-amber-200/60 mb-10 max-w-2xl mx-auto">
            Safe Innova Crysta ride, experienced driver, kid-friendly stops. Starting at Rs {data.price.sedan.toLocaleString()}.
          </p>
          <div className="flex flex-wrap justify-center gap-5">
            <a
              onClick={() => trackPhoneCall('family_trip')} href={`tel:${phoneNumber}`}
              className="inline-flex items-center gap-3 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-white px-10 py-5 rounded-2xl font-bold text-lg transition-all hover:scale-[1.03] active:scale-[0.98]"
              style={{ animation: 'pulse-warm 3s ease-in-out infinite' }}
            >
              <Phone className="w-6 h-6" />
              Call {phoneNumber}
            </a>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-green-600/90 hover:bg-green-500 text-white px-10 py-5 rounded-2xl font-bold text-lg transition-all border border-green-500/30 hover:shadow-lg hover:shadow-green-500/20 hover:scale-[1.03] active:scale-[0.98]"
            >
              WhatsApp Booking
            </a>
          </div>
          <p className="mt-8 text-sm text-amber-400/40">
            Free cancellation up to 24 hours before departure | Child seat available on request
          </p>
        </div>
      </section>
    </main>
  );
}