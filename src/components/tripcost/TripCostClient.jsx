'use client';

import Link from 'next/link';
import { Phone, IndianRupee, Car, MapPin, Clock, CheckCircle2, ChevronRight, Star, Shield, Calculator, Banknote, Hotel, Utensils, Ticket, Fuel, HelpCircle, Receipt, TrendingUp, Percent } from '@/components/ui/icons';
import { WhatsAppIcon } from '@/components/ui/icons';
import { FAQSection } from '@/components/seo/FAQSection';
import { useState, useMemo } from 'react';

export default function TripCostClient({ data }) {
  // Map {q, a} format to {question, answer} for FAQSection
  const normalizedFaqs = useMemo(() =>
    (data.faqs || []).map(faq => ({
      question: faq.q || faq.question,
      answer: faq.a || faq.answer,
    })),
    [data.faqs]
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-amber-50/30 to-white">
      {/* Animated CSS */}
      <style jsx global>{`
        @keyframes receiptSlide {
          0% { transform: translateY(20px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
        @keyframes shimmerGreen {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        @keyframes floatReceipt {
          0%, 100% { transform: translateY(0) rotate(-1deg); }
          50% { transform: translateY(-8px) rotate(1deg); }
        }
        @keyframes pulseGlow {
          0%, 100% { box-shadow: 0 0 20px rgba(245, 158, 11, 0.2); }
          50% { box-shadow: 0 0 40px rgba(245, 158, 11, 0.5); }
        }
        @keyframes tickerScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .receipt-card {
          animation: receiptSlide 0.6s ease-out forwards;
          position: relative;
        }
        .receipt-card::before {
          content: '';
          position: absolute;
          top: -8px;
          left: 10%;
          right: 10%;
          height: 16px;
          background: repeating-linear-gradient(90deg, transparent, transparent 8px, white 8px, white 12px);
          border-radius: 0 0 4px 4px;
        }
        .receipt-card::after {
          content: '';
          position: absolute;
          bottom: -8px;
          left: 10%;
          right: 10%;
          height: 16px;
          background: repeating-linear-gradient(90deg, transparent, transparent 8px, white 8px, white 12px);
          border-radius: 4px 4px 0 0;
        }
        .shimmer-text {
          background: linear-gradient(90deg, #d97706, #f59e0b, #fbbf24, #f59e0b, #d97706);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shimmerGreen 3s linear infinite;
        }
        .cost-ticker {
          animation: tickerScroll 20s linear infinite;
        }
        .glow-green {
          animation: pulseGlow 3s ease-in-out infinite;
        }
      `}</style>

      {/* Hero Section - Financial Dashboard Style */}
      <section className="relative bg-gradient-to-br from-amber-950 via-amber-900 to-yellow-950 text-white overflow-hidden">
        {/* Animated Grid Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(rgba(245,158,11,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(245,158,11,0.3) 1px, transparent 1px)',
            backgroundSize: '60px 60px'
          }} />
        </div>
        {/* Floating Orbs */}
        <div className="absolute top-20 left-[10%] w-64 h-64 bg-amber-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 right-[15%] w-80 h-80 bg-teal-400/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20 md:py-32 relative z-10">
          <div className="flex items-center gap-2 text-amber-400/80 text-sm mb-8">
            <Link href="/" className="hover:text-amber-300 transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <span>Trip Cost Calculator</span>
          </div>

          {/* Big Receipt Icon */}
          <div className="flex items-start gap-5 mb-8">
            <div className="hidden md:flex p-4 bg-amber-500/10 backdrop-blur-xl rounded-2xl border border-emerald-400/20 glow-green">
              <Receipt className="w-12 h-12 text-amber-400" />
            </div>
            <div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.1] mb-4">
                <span className="shimmer-text">{data.destination}</span>
                <br />
                <span className="text-white/90">Trip Cost Guide</span>
              </h1>
              <p className="text-lg md:text-xl text-amber-200/80 max-w-2xl">
                Complete 2026 budget breakdown for your {data.destination} trip from {data.origin} — cab, hotel, food, sightseeing, everything.
              </p>
            </div>
          </div>

          {/* Stat Pills */}
          <div className="flex flex-wrap gap-3 mt-10">
            {[
              { icon: MapPin, label: data.distance, sub: `from ${data.origin}` },
              { icon: Clock, label: `${data.days} Days`, sub: "recommended" },
              { icon: IndianRupee, label: `From ${data.totalBudget.budget}`, sub: "per person" },
              { icon: Car, label: `${data.cabCost.sedan.perKm}/km`, sub: "sedan rate" }
            ].map((stat, i) => (
              <div key={i} className="group flex items-center gap-3 bg-white/[0.06] backdrop-blur-xl rounded-2xl px-5 py-3 border border-amber-400/10 hover:border-amber-400/30 hover:bg-white/[0.1] transition-all duration-500">
                <stat.icon className="w-5 h-5 text-amber-400" />
                <div>
                  <p className="text-sm font-bold text-white">{stat.label}</p>
                  <p className="text-xs text-amber-300/60">{stat.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Budget Tier Cards - Receipt Style */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 -mt-10 relative z-20 mb-20">
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { tier: "Budget", range: data.totalBudget.budget, gradient: "from-amber-600 to-yellow-600", bg: "bg-amber-50", border: "border-amber-200", icon: "₹", desc: "Hostels, street food, shared rides", tag: null },
            { tier: "Mid-Range", range: data.totalBudget.mid, gradient: "from-emerald-600 to-orange-600", bg: "bg-amber-50", border: "border-amber-300", icon: "₹₹", desc: "Good hotels, restaurants, private cab", tag: "MOST POPULAR" },
            { tier: "Luxury", range: data.totalBudget.luxury, gradient: "from-teal-600 to-orange-600", bg: "bg-orange-50", border: "border-orange-200", icon: "₹₹₹", desc: "Premium stays, fine dining, SUV cab", tag: null }
          ].map((item, idx) => (
            <div key={item.tier} className={`receipt-card ${item.bg} rounded-3xl border-2 ${item.border} p-8 hover:shadow-2xl hover:shadow-amber-500/10 transition-all duration-500 hover:-translate-y-1`} style={{ animationDelay: `${idx * 0.15}s` }}>
              {item.tag && (
                <div className="mb-4">
                  <span className="inline-block bg-gradient-to-r from-emerald-600 to-orange-600 text-white text-[10px] font-black uppercase tracking-wider px-4 py-1.5 rounded-full">
                    {item.tag}
                  </span>
                </div>
              )}
              {/* Receipt Header */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-3xl font-black text-amber-800/30">{item.icon}</span>
                <span className="text-xs font-bold text-amber-600 uppercase tracking-widest">{item.tier}</span>
              </div>
              {/* Dotted Line */}
              <div className="border-b-2 border-dashed border-amber-300/50 mb-4" />
              {/* Amount */}
              <p className="text-4xl font-black text-gray-900 mb-2 tracking-tight">{item.range}</p>
              <p className="text-sm text-gray-500 mb-4">{item.desc}</p>
              {/* Receipt Footer */}
              <div className="border-t-2 border-dashed border-amber-300/50 pt-3 mt-2">
                <p className="text-[10px] text-amber-600/60 uppercase tracking-widest text-center">Per Person | {data.days} Days</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Cab Cost Breakdown - Invoice Style */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 mb-20">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-amber-100 rounded-full px-4 py-2 mb-4">
            <Car className="w-4 h-4 text-amber-700" />
            <span className="text-xs font-bold text-amber-700 uppercase tracking-widest">Cab Fare Breakdown</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 tracking-tight">
            {data.origin} to {data.destination}
            <span className="block text-amber-600">Transportation Cost</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {[
            { type: "Sedan", sub: "Swift Dzire / Etios", data: data.cabCost.sedan, accent: "emerald" },
            { type: "SUV", sub: "Innova / Ertiga", data: data.cabCost.suv, accent: "teal" }
          ].map((cab) => (
            <div key={cab.type} className="group relative bg-white rounded-3xl border-2 border-gray-100 overflow-hidden hover:border-amber-300 hover:shadow-2xl hover:shadow-amber-500/10 transition-all duration-500">
              {/* Invoice Header */}
              <div className={`bg-gradient-to-r ${cab.accent === 'emerald' ? 'from-amber-600 via-yellow-600 to-yellow-700' : 'from-teal-600 via-orange-600 to-cyan-700'} p-6`}>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-amber-200/70 text-xs font-bold uppercase tracking-widest mb-1">INVOICE</p>
                    <h3 className="text-2xl font-black text-white">{cab.type}</h3>
                    <p className="text-amber-200/80 text-sm">{cab.sub}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-amber-200/70 mb-1">Rate</p>
                    <p className="text-3xl font-black text-white">{cab.data.perKm}</p>
                    <p className="text-xs text-amber-200/70">per km</p>
                  </div>
                </div>
              </div>
              {/* Invoice Body */}
              <div className="p-6">
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-dashed border-gray-200">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-amber-100 rounded-lg flex items-center justify-center">
                        <MapPin className="w-4 h-4 text-amber-600" />
                      </div>
                      <span className="text-gray-600 font-medium">One-Way Fare</span>
                    </div>
                    <span className="font-bold text-gray-900 text-lg">{cab.data.oneWay}</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-dashed border-gray-200">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-amber-100 rounded-lg flex items-center justify-center">
                        <Receipt className="w-4 h-4 text-amber-600" />
                      </div>
                      <span className="text-gray-600 font-medium">Round Trip Fare</span>
                    </div>
                    <span className="font-black text-amber-700 text-xl">{cab.data.roundTrip}</span>
                  </div>
                </div>
                {/* Total Bar */}
                <div className={`mt-6 bg-gradient-to-r ${cab.accent === 'emerald' ? 'from-emerald-50 to-green-50' : 'from-teal-50 to-orange-50'} rounded-xl p-4 border border-amber-200/50`}>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-bold text-amber-800 uppercase tracking-wide">Distance: {data.distance}</span>
                    <span className="text-sm font-bold text-amber-800">Toll: {data.tollCost.split('(')[0].trim()}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Expense Grid - Itemized Receipt */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-amber-950 to-amber-950" />
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-4">
              Itemized Trip
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-yellow-300">Expense Sheet</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {/* Hotel */}
            <div className="bg-white/[0.06] backdrop-blur-xl rounded-3xl border border-amber-500/20 p-7 hover:border-amber-400/40 hover:bg-white/[0.1] transition-all duration-500 group">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-blue-500/20 rounded-xl border border-blue-400/20 group-hover:scale-110 transition-transform duration-300">
                  <Hotel className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Hotel Cost</h3>
                  <p className="text-xs text-amber-400/60">Per night rates</p>
                </div>
              </div>
              <div className="space-y-3">
                {Object.entries(data.hotelCost).map(([tier, cost]) => (
                  <div key={tier} className="flex justify-between items-center py-2.5 border-b border-white/5 last:border-0">
                    <span className="text-amber-200/70 capitalize text-sm">{tier}</span>
                    <span className="font-bold text-white text-sm">{cost}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Food */}
            <div className="bg-white/[0.06] backdrop-blur-xl rounded-3xl border border-amber-500/20 p-7 hover:border-amber-400/40 hover:bg-white/[0.1] transition-all duration-500 group">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-orange-500/20 rounded-xl border border-orange-400/20 group-hover:scale-110 transition-transform duration-300">
                  <Utensils className="w-6 h-6 text-orange-400" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Food Budget</h3>
                  <p className="text-xs text-amber-400/60">Per day rates</p>
                </div>
              </div>
              <div className="space-y-3">
                {Object.entries(data.foodCost).map(([tier, cost]) => (
                  <div key={tier} className="flex justify-between items-center py-2.5 border-b border-white/5 last:border-0">
                    <span className="text-amber-200/70 capitalize text-sm">{tier}</span>
                    <span className="font-bold text-white text-sm">{cost}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Misc */}
            <div className="bg-white/[0.06] backdrop-blur-xl rounded-3xl border border-amber-500/20 p-7 hover:border-amber-400/40 hover:bg-white/[0.1] transition-all duration-500 group">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-purple-500/20 rounded-xl border border-purple-400/20 group-hover:scale-110 transition-transform duration-300">
                  <Banknote className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Other Costs</h3>
                  <p className="text-xs text-amber-400/60">Additional expenses</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2.5 border-b border-white/5">
                  <span className="text-amber-200/70 text-sm">Toll Charges</span>
                  <span className="font-bold text-white text-sm">{data.tollCost.split('(')[0].trim()}</span>
                </div>
                <div className="flex justify-between items-center py-2.5">
                  <span className="text-amber-200/70 text-sm">Miscellaneous</span>
                  <span className="font-bold text-white text-sm">{data.miscCost.split('(')[0].trim()}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Entry Fees Table */}
          <div className="bg-white/[0.06] backdrop-blur-xl rounded-3xl border border-amber-500/20 overflow-hidden">
            <div className="flex items-center gap-3 px-7 py-5 border-b border-amber-500/10">
              <div className="p-2.5 bg-rose-500/20 rounded-xl border border-rose-400/20">
                <Ticket className="w-5 h-5 text-rose-400" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Entry Fees & Ticket Prices</h3>
                <p className="text-xs text-amber-400/60">Monument and attraction charges</p>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-amber-500/10">
                    <th className="text-left py-4 px-7 text-xs font-bold text-amber-400 uppercase tracking-widest">Attraction</th>
                    <th className="text-right py-4 px-7 text-xs font-bold text-amber-400 uppercase tracking-widest">Indian</th>
                    <th className="text-right py-4 px-7 text-xs font-bold text-amber-400 uppercase tracking-widest">Foreign</th>
                  </tr>
                </thead>
                <tbody>
                  {data.entryFees.map((fee, idx) => (
                    <tr key={idx} className="border-b border-white/5 last:border-0 hover:bg-white/[0.03] transition-colors">
                      <td className="py-4 px-7 text-white font-medium text-sm">{fee.place}</td>
                      <td className="py-4 px-7 text-right text-amber-300 font-bold text-sm">{fee.indian}</td>
                      <td className="py-4 px-7 text-right text-amber-200/60 text-sm">{fee.foreigner}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Money Saving Tips */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-20 md:py-28">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-amber-100 rounded-full px-4 py-2 mb-4">
            <Percent className="w-4 h-4 text-amber-700" />
            <span className="text-xs font-bold text-amber-700 uppercase tracking-widest">Save Money</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 tracking-tight">
            Budget-Saving
            <span className="block text-amber-600">Pro Tips</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-5">
          {data.savingsTips.map((tip, idx) => (
            <div key={idx} className="group flex items-start gap-4 bg-white rounded-2xl p-6 border border-amber-100 hover:border-amber-300 hover:shadow-xl hover:shadow-amber-500/10 transition-all duration-500 hover:-translate-y-0.5">
              <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-amber-500 to-yellow-600 rounded-xl flex items-center justify-center text-white font-black text-sm group-hover:scale-110 transition-transform duration-300">
                {idx + 1}
              </div>
              <p className="text-gray-700 leading-relaxed">{tip}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Description / SEO Content */}
      <section className="bg-gradient-to-b from-amber-50/50 to-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-1 h-12 bg-gradient-to-b from-amber-500 to-orange-500 rounded-full" />
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 tracking-tight">
              Complete Guide to {data.destination} Trip Cost
            </h2>
          </div>
          <div className="space-y-5">
            {data.description.split('\n\n').map((para, idx) => (
              <p key={idx} className="text-lg text-gray-600 leading-relaxed">{para}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Book CTA */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-700 via-yellow-700 to-yellow-800" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-[20%] w-60 h-60 bg-amber-300 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-10 right-[20%] w-72 h-72 bg-orange-300 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-xl rounded-full px-4 py-2 border border-white/20 mb-6">
            <Star className="w-4 h-4 text-yellow-300 fill-yellow-300" />
            <span className="text-sm text-white/90 font-medium">Rated 4.9/5 by 5000+ Travelers</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-4">
            Book Your <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-300 to-yellow-200">{data.destination}</span> Cab
          </h2>
          <p className="text-amber-200/80 text-lg mb-10 max-w-xl mx-auto">
            Triveni Cabs — AC sedan at {data.cabCost.sedan.perKm}/km. Experienced drivers, no hidden charges, 24/7 support.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <a
              href="tel:+917668570551"
              className="group flex items-center gap-3 bg-white text-amber-800 font-black px-8 py-4 rounded-2xl hover:shadow-2xl hover:shadow-amber-300/30 hover:scale-105 transition-all duration-300 text-lg"
            >
              <Phone className="w-5 h-5 group-hover:animate-pulse" />
              Call 7668570551
            </a>
            <a
              href="https://wa.me/917668570551"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 bg-amber-500 text-white font-black px-8 py-4 rounded-2xl hover:bg-amber-400 hover:shadow-2xl hover:shadow-amber-400/30 hover:scale-105 transition-all duration-300 text-lg"
            >
              <WhatsAppIcon className="w-5 h-5" />
              WhatsApp Quote
            </a>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-6 text-amber-200/70 text-sm">
            <span className="flex items-center gap-1.5"><Shield className="w-4 h-4" /> No Hidden Charges</span>
            <span className="flex items-center gap-1.5"><Car className="w-4 h-4" /> AC Sedan & SUV</span>
            <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4" /> Verified Drivers</span>
          </div>
        </div>
      </section>

      {/* Cross-Service Links */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-amber-100 rounded-full px-4 py-2 mb-4">
            <Car className="w-4 h-4 text-amber-700" />
            <span className="text-xs font-bold text-amber-700 uppercase tracking-widest">More Services</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-black text-gray-900">Explore More Services</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { href: `/sightseeing/${data.destination.toLowerCase().replace(/\s+/g, '-')}`, label: `${data.destination} Sightseeing` },
            { href: `/airport-service/${data.destination.toLowerCase().replace(/\s+/g, '-')}`, label: `${data.destination} Airport Taxi` },
            { href: `/${data.destination.toLowerCase().replace(/\s+/g, '-')}`, label: `${data.destination} Cab Service` },
            { href: `/wedding/${data.destination.toLowerCase().replace(/\s+/g, '-')}`, label: `${data.destination} Wedding Cars` },
            { href: `/places-to-visit-near-${data.destination.toLowerCase().replace(/\s+/g, '-')}`, label: `Places Near ${data.destination}` },
            { href: `/sightseeing/${data.origin.toLowerCase().replace(/\s+/g, '-')}`, label: `${data.origin} Tours` },
            { href: '/tour-package', label: 'Tour Packages' },
            { href: '/outstation-cabs', label: 'Outstation Cabs' },
          ].map((link) => (
            <Link key={link.href} href={link.href} className="group p-4 bg-white rounded-2xl border border-amber-100 hover:border-amber-300 hover:shadow-xl hover:shadow-amber-500/10 transition-all duration-300 text-center hover:-translate-y-0.5">
              <span className="text-gray-700 group-hover:text-amber-700 text-sm font-semibold">{link.label}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      {normalizedFaqs.length > 0 && (
        <FAQSection
          faqs={normalizedFaqs}
          title={`${data.destination} Trip Cost — FAQs`}
          subtitle="Common questions about trip costs and cab booking"
          showSchema={true}
          variant="card"
          showContactCTA={true}
        />
      )}
    </div>
  );
}
