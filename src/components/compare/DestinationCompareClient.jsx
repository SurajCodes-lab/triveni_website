'use client';

import Link from 'next/link';
import { Phone, MapPin, Clock, CheckCircle2, ChevronRight, Star, Shield, Car, HelpCircle, ThumbsUp, ThumbsDown, Award, Route, Trophy, Target } from '@/components/ui/icons';
import { WhatsAppIcon } from '@/components/ui/icons';
import { FAQSection } from '@/components/seo/FAQSection';
import { useState, useMemo } from 'react';
import { trackWhatsAppClick, trackPhoneCall } from '@/utilis/analytics';

export default function DestinationCompareClient({ data }) {
  // Map {q, a} format to {question, answer} for FAQSection
  const normalizedFaqs = useMemo(() =>
    (data.faqs || []).map(faq => ({
      question: faq.q || faq.question,
      answer: faq.a || faq.answer,
    })),
    [data.faqs]
  );

  const getWinnerName = (winner) => {
    const d1Lower = data.dest1.name.toLowerCase().replace(/\s+/g, '');
    const d1LowerSpace = data.dest1.name.toLowerCase();
    if (winner === d1Lower || winner === d1LowerSpace) return data.dest1.name;
    if (winner === 'tie') return null;
    return data.dest2.name;
  };

  const isDest1Winner = (winner) => {
    const d1Lower = data.dest1.name.toLowerCase().replace(/\s+/g, '');
    const d1LowerSpace = data.dest1.name.toLowerCase();
    return winner === d1Lower || winner === d1LowerSpace;
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Animated CSS */}
      <style jsx global>{`
        @keyframes vsGlow {
          0%, 100% { box-shadow: 0 0 30px rgba(249, 115, 22, 0.4), 0 0 60px rgba(59, 130, 246, 0.3); }
          50% { box-shadow: 0 0 50px rgba(249, 115, 22, 0.6), 0 0 80px rgba(59, 130, 246, 0.5); }
        }
        @keyframes splitReveal {
          0% { clip-path: inset(0 100% 0 0); }
          100% { clip-path: inset(0 0 0 0); }
        }
        @keyframes shimmerBlue {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        @keyframes shimmerOrange {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        @keyframes floatVs {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-6px) scale(1.05); }
        }
        @keyframes slideInLeft {
          0% { transform: translateX(-30px); opacity: 0; }
          100% { transform: translateX(0); opacity: 1; }
        }
        @keyframes slideInRight {
          0% { transform: translateX(30px); opacity: 0; }
          100% { transform: translateX(0); opacity: 1; }
        }
        .vs-badge {
          animation: vsGlow 2.5s ease-in-out infinite, floatVs 3s ease-in-out infinite;
        }
        .shimmer-blue {
          background: linear-gradient(90deg, #3b82f6, #60a5fa, #93c5fd, #60a5fa, #3b82f6);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shimmerBlue 3s linear infinite;
        }
        .shimmer-orange {
          background: linear-gradient(90deg, #f97316, #fb923c, #fdba74, #fb923c, #f97316);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shimmerOrange 3s linear infinite;
        }
        .split-card-blue {
          animation: slideInLeft 0.6s ease-out forwards;
        }
        .split-card-orange {
          animation: slideInRight 0.6s ease-out forwards;
          animation-delay: 0.15s;
          opacity: 0;
        }
        .winner-row-blue {
          background: linear-gradient(90deg, rgba(59, 130, 246, 0.08), transparent, transparent);
        }
        .winner-row-orange {
          background: linear-gradient(90deg, transparent, transparent, rgba(249, 115, 22, 0.08));
        }
      `}</style>

      {/* Hero - Split Screen with VS */}
      <section className="relative overflow-hidden">
        {/* Split Background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-br from-blue-950 via-blue-900 to-slate-900" />
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-orange-950 via-orange-900 to-slate-900" />
          {/* Center Divider */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-transparent via-white/20 to-transparent" />
        </div>
        {/* Grid overlay */}
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />
        {/* Floating Orbs */}
        <div className="absolute top-20 left-[15%] w-64 h-64 bg-blue-500/15 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-[15%] w-64 h-64 bg-orange-500/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20 md:py-32 relative z-10">
          <div className="flex items-center gap-2 text-white/50 text-sm mb-10">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <span>Destination Comparison</span>
          </div>

          {/* VS Visual */}
          <div className="flex items-center justify-center gap-3 sm:gap-6 md:gap-12 mb-10">
            {/* Dest 1 */}
            <div className="text-center split-card-blue min-w-0">
              <div className="relative w-20 h-20 sm:w-28 sm:h-28 md:w-40 md:h-40 mx-auto mb-4">
                <div className="absolute inset-0 bg-blue-500/20 rounded-3xl border-2 border-blue-400/30 backdrop-blur-xl" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-3xl sm:text-5xl md:text-7xl font-black text-blue-400">{data.dest1.name.charAt(0)}</span>
                </div>
                {/* Rating Badge */}
                <div className="absolute -bottom-2 -right-2 bg-blue-500 rounded-xl px-2.5 py-1 flex items-center gap-1 shadow-lg shadow-blue-500/30">
                  <Star className="w-3 h-3 text-yellow-300 fill-yellow-300" />
                  <span className="text-white text-xs font-black">{data.dest1.rating}</span>
                </div>
              </div>
              <h2 className="text-lg sm:text-2xl md:text-3xl font-black shimmer-blue mb-1">{data.dest1.name}</h2>
              <p className="text-blue-300/60 text-sm">{data.dest1.distanceFromDelhi} from Delhi</p>
            </div>

            {/* VS Badge */}
            <div className="flex-shrink-0">
              <div className="vs-badge relative w-14 h-14 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-gradient-to-br from-amber-500 via-orange-500 to-red-500 rounded-full flex items-center justify-center">
                <span className="text-xl sm:text-3xl md:text-4xl font-black text-white drop-shadow-lg">VS</span>
                {/* Ring */}
                <div className="absolute inset-[-4px] rounded-full border-2 border-white/20" />
                <div className="absolute inset-[-8px] rounded-full border border-white/10" />
              </div>
            </div>

            {/* Dest 2 */}
            <div className="text-center split-card-orange min-w-0">
              <div className="relative w-20 h-20 sm:w-28 sm:h-28 md:w-40 md:h-40 mx-auto mb-4">
                <div className="absolute inset-0 bg-orange-500/20 rounded-3xl border-2 border-orange-400/30 backdrop-blur-xl" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-3xl sm:text-5xl md:text-7xl font-black text-orange-400">{data.dest2.name.charAt(0)}</span>
                </div>
                {/* Rating Badge */}
                <div className="absolute -bottom-2 -right-2 bg-orange-500 rounded-xl px-2.5 py-1 flex items-center gap-1 shadow-lg shadow-orange-500/30">
                  <Star className="w-3 h-3 text-yellow-300 fill-yellow-300" />
                  <span className="text-white text-xs font-black">{data.dest2.rating}</span>
                </div>
              </div>
              <h2 className="text-lg sm:text-2xl md:text-3xl font-black shimmer-orange mb-1">{data.dest2.name}</h2>
              <p className="text-orange-300/60 text-sm">{data.dest2.distanceFromDelhi} from Delhi</p>
            </div>
          </div>

          <h1 className="text-center text-xl md:text-2xl text-white/70 font-medium max-w-2xl mx-auto">
            {data.title}
          </h1>
        </div>
        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Side-by-Side Destination Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 -mt-6 relative z-20 mb-20">
        <div className="grid md:grid-cols-2 gap-8">
          {[
            { dest: data.dest1, side: "blue", label: "OPTION A" },
            { dest: data.dest2, side: "orange", label: "OPTION B" }
          ].map(({ dest, side, label }) => (
            <div key={dest.name} className={`group bg-white rounded-3xl shadow-2xl border-2 ${side === 'blue' ? 'shadow-blue-500/5 border-blue-100 hover:border-blue-300' : 'shadow-orange-500/5 border-orange-100 hover:border-orange-300'} overflow-hidden transition-all duration-500 hover:-translate-y-1`}>
              {/* Card Header */}
              <div className={`relative p-6 ${side === 'blue' ? 'bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600' : 'bg-gradient-to-r from-orange-500 via-orange-500 to-amber-500'}`}>
                <div className="absolute top-3 right-4">
                  <span className="text-[10px] font-black text-white/40 uppercase tracking-[0.2em]">{label}</span>
                </div>
                <h3 className="text-3xl font-black text-white mb-1">{dest.name}</h3>
                <p className="text-white/70 text-sm italic">&ldquo;{dest.vibe}&rdquo;</p>
              </div>

              <div className="p-7 space-y-6">
                {/* Quick Stats Grid */}
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { label: "Drive Time", value: dest.driveTime },
                    { label: "Cab Fare", value: dest.cabFare },
                    { label: "Daily Cost", value: dest.avgDailyCost },
                    { label: "Best Time", value: dest.bestTime }
                  ].map((stat) => (
                    <div key={stat.label} className={`rounded-xl p-3 border ${side === 'blue' ? 'bg-blue-50/50 border-blue-100' : 'bg-orange-50/50 border-orange-100'}`}>
                      <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-0.5">{stat.label}</p>
                      <p className="font-black text-gray-900 text-sm">{stat.value}</p>
                    </div>
                  ))}
                </div>

                {/* Best For Tags */}
                <div>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3">Best For</p>
                  <div className="flex flex-wrap gap-2">
                    {dest.bestFor.map((item) => (
                      <span key={item} className={`text-xs px-3 py-1.5 rounded-full font-bold ${
                        side === 'blue' ? 'bg-blue-100 text-blue-700' : 'bg-orange-100 text-orange-700'
                      }`}>
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Highlights */}
                <div>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3">Top Highlights</p>
                  <div className="grid grid-cols-2 gap-2.5">
                    {dest.highlights.map((h) => (
                      <div key={h} className="flex items-center gap-2 text-sm">
                        <CheckCircle2 className={`w-4 h-4 flex-shrink-0 ${side === 'blue' ? 'text-blue-500' : 'text-orange-500'}`} />
                        <span className="text-gray-700 font-medium">{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Pros & Cons */}
                <div className="grid grid-cols-1 gap-4">
                  <div className="bg-green-50 rounded-2xl p-5 border border-green-100">
                    <p className="text-xs font-black text-green-700 uppercase tracking-widest mb-3 flex items-center gap-1.5">
                      <ThumbsUp className="w-3.5 h-3.5" /> Advantages
                    </p>
                    <ul className="space-y-2">
                      {dest.pros.map((pro) => (
                        <li key={pro} className="flex items-start gap-2 text-sm text-gray-700">
                          <span className="text-green-500 font-black mt-0.5">+</span>
                          <span>{pro}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-red-50 rounded-2xl p-5 border border-red-100">
                    <p className="text-xs font-black text-red-600 uppercase tracking-widest mb-3 flex items-center gap-1.5">
                      <ThumbsDown className="w-3.5 h-3.5" /> Drawbacks
                    </p>
                    <ul className="space-y-2">
                      {dest.cons.map((con) => (
                        <li key={con} className="flex items-start gap-2 text-sm text-gray-700">
                          <span className="text-red-400 font-black mt-0.5">-</span>
                          <span>{con}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Head-to-Head Comparison Table */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 to-slate-900" />
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />
        <div className="absolute top-20 left-[10%] w-48 h-48 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-[10%] w-48 h-48 bg-orange-500/10 rounded-full blur-3xl" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-xl rounded-full px-4 py-2 border border-white/10 mb-4">
              <Target className="w-4 h-4 text-amber-400" />
              <span className="text-xs font-bold text-white/80 uppercase tracking-widest">Point by Point</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight">
              Head-to-Head
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-white to-orange-400">Comparison</span>
            </h2>
          </div>

          <div className="overflow-x-auto -mx-4 px-4">
          <div className="bg-white/[0.06] backdrop-blur-xl rounded-3xl border border-white/10 overflow-hidden min-w-[600px]">
            {/* Table Header */}
            <div className="grid grid-cols-4 border-b border-white/10">
              <div className="py-4 md:py-5 px-4 md:px-6">
                <span className="text-xs font-bold text-white/40 uppercase tracking-widest">Category</span>
              </div>
              <div className="py-4 md:py-5 px-3 md:px-4 text-center border-l border-white/5">
                <span className="text-xs md:text-sm font-black text-blue-400">{data.dest1.name}</span>
              </div>
              <div className="py-4 md:py-5 px-3 md:px-4 text-center border-l border-white/5">
                <span className="text-xs md:text-sm font-black text-orange-400">{data.dest2.name}</span>
              </div>
              <div className="py-4 md:py-5 px-3 md:px-4 text-center border-l border-white/5">
                <span className="text-xs font-bold text-white/40 uppercase tracking-widest">Winner</span>
              </div>
            </div>

            {/* Table Rows */}
            {data.comparisonPoints.map((point, idx) => (
              <div key={idx} className={`grid grid-cols-4 border-b border-white/5 last:border-0 ${
                point.winner === 'tie' ? '' : isDest1Winner(point.winner) ? 'winner-row-blue' : 'winner-row-orange'
              } hover:bg-white/[0.03] transition-colors`}>
                <div className="py-3 md:py-4 px-4 md:px-6 flex items-center">
                  <span className="text-xs md:text-sm font-bold text-white/80">{point.category}</span>
                </div>
                <div className={`py-3 md:py-4 px-3 md:px-4 text-center border-l border-white/5 flex items-center justify-center ${
                  isDest1Winner(point.winner) ? 'text-blue-300 font-black' : 'text-white/50'
                }`}>
                  <span className="text-xs md:text-sm">{point.dest1}</span>
                </div>
                <div className={`py-3 md:py-4 px-3 md:px-4 text-center border-l border-white/5 flex items-center justify-center ${
                  !isDest1Winner(point.winner) && point.winner !== 'tie' ? 'text-orange-300 font-black' : 'text-white/50'
                }`}>
                  <span className="text-xs md:text-sm">{point.dest2}</span>
                </div>
                <div className="py-3 md:py-4 px-3 md:px-4 text-center border-l border-white/5 flex items-center justify-center">
                  {point.winner === 'tie' ? (
                    <span className="text-[10px] font-black bg-white/10 text-white/60 px-2 md:px-3 py-1 rounded-full uppercase tracking-wider">Draw</span>
                  ) : (
                    <span className={`text-[10px] font-black px-2 md:px-3 py-1 rounded-full uppercase tracking-wider ${
                      isDest1Winner(point.winner)
                        ? 'bg-blue-500/20 text-blue-300 border border-blue-500/20'
                        : 'bg-orange-500/20 text-orange-300 border border-orange-500/20'
                    }`}>
                      {getWinnerName(point.winner)}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
          </div>
        </div>
      </section>

      {/* Verdict */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-20 md:py-28">
        <div className="relative">
          {/* Background Accent */}
          <div className="absolute -inset-4 bg-gradient-to-r from-blue-100 via-transparent to-orange-100 rounded-[2rem] opacity-50" />
          <div className="relative bg-white rounded-3xl p-10 border-2 border-gray-100 shadow-2xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl shadow-lg shadow-orange-500/20">
                <Trophy className="w-7 h-7 text-white" />
              </div>
              <div>
                <p className="text-xs font-bold text-amber-600 uppercase tracking-widest">Expert Analysis</p>
                <h2 className="text-2xl md:text-3xl font-black text-gray-900">Our Verdict</h2>
              </div>
            </div>
            <p className="text-lg text-gray-600 leading-relaxed">{data.verdict}</p>
          </div>
        </div>
      </section>

      {/* Dual Booking CTA */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        {/* Split gradient */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-br from-blue-700 to-blue-900" />
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-orange-600 to-orange-800" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-white/20" />
        </div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-[20%] w-48 h-48 bg-blue-300 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-10 right-[20%] w-48 h-48 bg-orange-300 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-6xl font-black text-white tracking-tight mb-4">
              Book Your Trip Now
            </h2>
            <p className="text-white/70 text-lg max-w-xl mx-auto">
              Triveni Cabs — AC sedan at ₹11/km, SUV at ₹15/km. Expert drivers for every route.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              { dest: data.dest1, color: "blue" },
              { dest: data.dest2, color: "orange" }
            ].map(({ dest, color }) => (
              <div key={dest.name} className="bg-white/10 backdrop-blur-2xl rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-500 text-center">
                <div className={`inline-flex w-16 h-16 items-center justify-center rounded-2xl mb-4 ${
                  color === 'blue' ? 'bg-blue-500/30 border border-blue-400/30' : 'bg-orange-500/30 border border-orange-400/30'
                }`}>
                  <span className="text-3xl font-black text-white">{dest.name.charAt(0)}</span>
                </div>
                <h3 className="text-2xl font-black text-white mb-2">Cab to {dest.name}</h3>
                <p className="text-white/60 text-sm mb-6">{dest.distanceFromDelhi} | {dest.cabFare}</p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    onClick={() => trackPhoneCall('destination_compare')} href="tel:+917668570551"
                    className={`flex items-center gap-2 ${
                      color === 'blue' ? 'bg-blue-500 hover:bg-blue-400' : 'bg-orange-500 hover:bg-orange-400'
                    } text-white font-black px-6 py-3.5 rounded-2xl hover:scale-105 hover:shadow-xl transition-all duration-300 text-sm`}
                  >
                    <Phone className="w-4 h-4" />
                    Call 7668570551
                  </a>
                  <a
                    onClick={() => trackWhatsAppClick('destination_compare')} href="https://wa.me/917668570551"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-black px-6 py-3.5 rounded-2xl hover:scale-105 hover:shadow-xl transition-all duration-300 text-sm"
                  >
                    <WhatsAppIcon className="w-4 h-4" />
                    WhatsApp
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-white/50 text-sm">
            <span className="flex items-center gap-1.5"><Shield className="w-4 h-4" /> No Hidden Charges</span>
            <span className="flex items-center gap-1.5"><Star className="w-4 h-4" /> 4.9 Rated Service</span>
            <span className="flex items-center gap-1.5"><Car className="w-4 h-4" /> 5000+ Trips Done</span>
          </div>
        </div>
      </section>

      {/* Cross-Service Links */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-black text-gray-900">Explore More Services</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { href: `/sightseeing/${data.dest1.name.toLowerCase().replace(/\s+/g, '-')}`, label: `${data.dest1.name} Tours` },
            { href: `/${data.dest1.name.toLowerCase().replace(/\s+/g, '-')}`, label: `${data.dest1.name} Cab Service` },
            { href: `/sightseeing/${data.dest2.name.toLowerCase().replace(/\s+/g, '-')}`, label: `${data.dest2.name} Tours` },
            { href: `/${data.dest2.name.toLowerCase().replace(/\s+/g, '-')}`, label: `${data.dest2.name} Cab Service` },
            { href: `/places-to-visit-near-${data.dest1.name.toLowerCase().replace(/\s+/g, '-')}`, label: `Places Near ${data.dest1.name}` },
            { href: `/places-to-visit-near-${data.dest2.name.toLowerCase().replace(/\s+/g, '-')}`, label: `Places Near ${data.dest2.name}` },
            { href: '/tour-package', label: 'Tour Packages' },
            { href: '/outstation-cabs', label: 'Outstation Cabs' },
          ].map((link) => (
            <Link key={link.href} href={link.href} className="group p-4 bg-white rounded-2xl border border-gray-100 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 text-center hover:-translate-y-0.5">
              <span className="text-gray-700 group-hover:text-blue-700 text-sm font-semibold">{link.label}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      {normalizedFaqs.length > 0 && (
        <FAQSection
          faqs={normalizedFaqs}
          title={`${data.dest1.name} vs ${data.dest2.name} — FAQs`}
          subtitle="Common questions about choosing between these destinations"
          showSchema={true}
          variant="card"
          showContactCTA={true}
        />
      )}
    </div>
  );
}
