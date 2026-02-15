'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, MessageCircle, MapPin, Users, Star, Shield, ChevronRight, ChevronDown, Mountain, Calendar, IndianRupee, Navigation, Sparkles, ArrowRight, CheckCircle, Clock, Sun, Award } from '@/components/ui/icons';

export default function ChardhamVehicleHubClient({ data }) {
  const [mounted, setMounted] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [activeDay, setActiveDay] = useState(0);
  useEffect(() => { setMounted(true); }, []);

  const { title, vehicle, destination, duration, distance, estimatedPrice, allCarPrices, allBusPrices, allBusOptions, allCarOptions, tempoOptions, itinerary, whyChoose, features, faqs, images, relatedRoutes, destinationData, vehicleType } = data;

  const isBusPage = vehicleType === 'bus35' || vehicleType === 'bus22' || vehicleType === 'bus45';
  const comparisonItems = isBusPage ? allBusOptions : allCarOptions;
  const mountainRating = { sedan: 3, ertiga: 3.5, innova: 4.5, fortuner: 5, suv: 4, bus: 3.5, bus22: 3.5, bus35: 3, bus45: 2.5 };

  const whatsappMsg = encodeURIComponent(`Hello! I want to book a ${vehicle.name} for Char Dham Yatra 2026`);

  return (
    <div className="min-h-screen bg-stone-950">
      {/* ===== HERO: Vehicle Spotlight ===== */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-stone-950 via-stone-950 to-stone-900" />
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'linear-gradient(45deg, #B87333 25%, transparent 25%, transparent 75%, #B87333 75%), linear-gradient(45deg, #B87333 25%, transparent 25%, transparent 75%, #B87333 75%)', backgroundSize: '40px 40px', backgroundPosition: '0 0, 20px 20px' }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 py-24 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}>
              {/* Breadcrumb */}
              <div className="flex items-center gap-2 text-stone-500 text-sm mb-6">
                <Link href="/" className="hover:text-amber-400 transition-colors">Home</Link>
                <ChevronRight className="w-3 h-3" />
                <Link href="/chardham-yatra" className="hover:text-amber-400 transition-colors">Char Dham Yatra</Link>
                <ChevronRight className="w-3 h-3" />
                <span className="text-amber-400">{vehicle.name}</span>
              </div>

              <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 rounded-full px-4 py-1.5 mb-6">
                <span className="text-amber-400 text-xs font-bold uppercase tracking-wider">{vehicle.category} | {vehicle.seats} Seater</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white font-serif mb-4 leading-tight">{title}</h1>
              <p className="text-amber-400/80 italic text-lg mb-8">{vehicle.tagline}</p>

              {/* Key Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
                {[
                  { icon: IndianRupee, label: 'Per Km', value: `₹${vehicle.perKm}` },
                  { icon: Users, label: 'Seats', value: vehicle.seats },
                  { icon: Sun, label: 'Fuel', value: vehicle.fuelType },
                  { icon: Award, label: 'Luggage', value: vehicle.luggage?.split('+')[0]?.trim() || vehicle.luggage },
                ].map((stat, i) => {
                  const Icon = stat.icon;
                  return (
                    <div key={i} className="bg-white/[0.04] backdrop-blur border border-white/10 rounded-xl p-3 text-center">
                      <Icon className="w-4 h-4 text-amber-400 mx-auto mb-1" />
                      <div className="text-white font-bold text-sm">{stat.value}</div>
                      <div className="text-stone-500 text-xs">{stat.label}</div>
                    </div>
                  );
                })}
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <a href="tel:+917668570551" className="flex items-center justify-center gap-2 bg-gradient-to-r from-amber-600 to-amber-700 text-white px-8 py-4 rounded-full font-bold shadow-lg shadow-amber-600/20 hover:shadow-amber-600/40 transition-all hover:scale-105">
                  <Phone className="w-5 h-5" /> Call 7668570551
                </a>
                <a href={`https://wa.me/917668570551?text=${whatsappMsg}`} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-white/10 backdrop-blur border border-amber-500/30 text-amber-300 px-8 py-4 rounded-full font-bold hover:bg-white/20 transition-all">
                  <MessageCircle className="w-5 h-5 text-green-400" /> WhatsApp
                </a>
              </div>
            </motion.div>

            {/* Right - Vehicle Image */}
            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}
              className="relative"
            >
              <div className="relative h-72 md:h-96 rounded-2xl overflow-hidden border border-white/10">
                <Image src={vehicle.image} alt={`${vehicle.name} for Char Dham Yatra - ${vehicle.seats} seater ${vehicle.category}`} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" priority />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/50 to-transparent" />
              </div>
              {/* Floating Badges */}
              <div className="absolute top-4 right-4 bg-amber-500/90 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">{vehicle.seats} Seats</div>
              <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur text-amber-400 text-sm font-bold px-3 py-1.5 rounded-full">₹{vehicle.perKm}/km</div>
              <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur text-stone-300 text-xs px-3 py-1.5 rounded-full">{vehicle.fuelType}</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== Vehicle Gallery ===== */}
      <section className="py-16 px-4 bg-stone-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-white font-serif text-center mb-10">Vehicle Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { src: vehicle.image, label: 'Front View' },
              { src: vehicle.sideImage, label: 'Side Profile' },
              { src: vehicle.interiorImage, label: 'Interior' },
              { src: vehicle.backImage, label: 'Rear View' },
            ].map((img, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="relative h-40 md:h-48 rounded-xl overflow-hidden border border-white/10 group"
              >
                <Image src={img.src} alt={`${vehicle.name} ${img.label} - Char Dham Yatra vehicle`} fill className="object-cover group-hover:scale-110 transition-transform duration-500" sizes="(max-width: 768px) 50vw, 25vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="absolute bottom-2 left-2 text-white text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity">{img.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Vehicle Specs Dashboard ===== */}
      <section className="py-16 px-4 bg-stone-950">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-white font-serif text-center mb-10">Vehicle Specifications</h2>
          <div className="bg-white/[0.03] border border-amber-500/20 rounded-2xl p-6 md:p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { label: 'Seats', value: vehicle.seats, icon: Users },
                { label: 'Luggage', value: vehicle.luggage, icon: Award },
                { label: 'Fuel Type', value: vehicle.fuelType, icon: Sun },
                { label: 'Transmission', value: vehicle.transmission, icon: Navigation },
                { label: 'AC', value: vehicle.ac ? 'Yes - Powerful AC' : 'No', icon: Sun },
                { label: 'Per Km (Outstation)', value: `₹${vehicle.perKm}`, icon: IndianRupee },
                { label: 'Per Km (Local)', value: `₹${vehicle.localPerKm || vehicle.perKm + 2}`, icon: IndianRupee },
                { label: 'Best For', value: vehicle.bestFor, icon: Star },
              ].map((spec, i) => {
                const Icon = spec.icon;
                return (
                  <div key={i} className="text-center">
                    <div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center mx-auto mb-2">
                      <Icon className="w-5 h-5 text-amber-400" />
                    </div>
                    <div className="text-white font-bold text-sm">{spec.value}</div>
                    <div className="text-stone-500 text-xs mt-1">{spec.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
          <p className="text-stone-400 text-center mt-6 leading-relaxed max-w-3xl mx-auto">{vehicle.description}</p>
        </div>
      </section>

      {/* ===== Vehicle Comparison ===== */}
      <section className="py-16 px-4 bg-stone-900/30">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-white font-serif text-center mb-4">Complete Vehicle Comparison</h2>
          <p className="text-stone-400 text-center mb-10">Compare {vehicle.name} with other {isBusPage ? 'bus' : 'car'} options for Char Dham Yatra</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {(isBusPage ? allBusOptions : [...allCarOptions, ...tempoOptions.slice(0, 2)]).map((item, idx) => {
              const isCurrent = item.name?.includes(vehicle.name?.split(' ')[0]) || item.type === vehicleType;
              return (
                <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.05 }}
                  className={`bg-white/[0.04] border ${isCurrent ? 'border-amber-500/40 ring-1 ring-amber-500/20' : 'border-white/10'} rounded-xl p-5 relative`}
                >
                  {isCurrent && <span className="absolute -top-2 left-4 bg-amber-500 text-white text-[10px] font-bold px-3 py-0.5 rounded-full uppercase">Current</span>}
                  <div className="relative h-28 rounded-lg overflow-hidden mb-4">
                    <Image src={item.image} alt={`${item.name} for Char Dham Yatra`} fill className="object-cover" sizes="(max-width: 640px) 100vw, 33vw" />
                  </div>
                  <h3 className="text-white font-bold text-sm mb-2">{item.name}</h3>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-stone-400 text-xs">{item.seats} Seats</span>
                    <span className="text-amber-400 font-bold text-sm">₹{item.perKm}/km</span>
                  </div>
                  <div className="flex items-center gap-0.5">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <Star key={s} className={`w-3 h-3 ${s < Math.floor(mountainRating[item.type] || 3.5) ? 'text-amber-400' : 'text-stone-700'}`} />
                    ))}
                    <span className="text-stone-500 text-xs ml-1">Mountain</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== Itinerary (Horizontal on desktop) ===== */}
      {itinerary.length > 0 && (
        <section className="py-16 px-4 bg-stone-950">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-white font-serif text-center mb-10">Sample {duration} Itinerary</h2>

            {/* Day Selector */}
            <div className="flex overflow-x-auto gap-2 mb-8 pb-2 scrollbar-hide">
              {itinerary.map((item, idx) => (
                <button key={idx} onClick={() => setActiveDay(idx)}
                  className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all ${activeDay === idx ? 'bg-amber-500 text-white' : 'bg-white/5 text-stone-400 hover:bg-white/10'}`}
                >
                  {item.day}
                </button>
              ))}
            </div>

            {/* Active Day Detail */}
            <AnimatePresence mode="wait">
              <motion.div key={activeDay} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
                className="bg-white/[0.04] border border-amber-500/20 rounded-2xl p-6 md:p-8"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-amber-500 text-white text-sm font-bold px-3 py-1 rounded-full">{itinerary[activeDay].day}</span>
                  <h3 className="text-white font-bold text-xl">{itinerary[activeDay].title}</h3>
                </div>
                <p className="text-stone-300 leading-relaxed">{itinerary[activeDay].desc}</p>
              </motion.div>
            </AnimatePresence>
          </div>
        </section>
      )}

      {/* ===== Why Choose ===== */}
      <section className="py-16 px-4 bg-stone-900/30">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-white font-serif text-center mb-10">Why Choose {vehicle.name} for Char Dham</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {whyChoose.map((item, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }}
                className="bg-white/[0.03] border-l-4 border-l-amber-500 border border-stone-800 rounded-r-xl p-5"
              >
                <h3 className="text-white font-bold mb-2">{item.title}</h3>
                <p className="text-stone-400 text-sm leading-relaxed">{item.desc || item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Features ===== */}
      <section className="py-12 px-4 bg-stone-950">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-xl font-bold text-amber-400 uppercase tracking-wider mb-6">Vehicle Features & Amenities</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {features.map((f, i) => (
              <span key={i} className="bg-amber-500/10 text-amber-300 text-sm px-4 py-2 rounded-full border border-amber-500/20">
                <CheckCircle className="w-3 h-3 inline mr-1" />{f}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FAQs ===== */}
      <section className="py-16 px-4 bg-stone-900/30">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-white font-serif text-center mb-10">Frequently Asked Questions</h2>
          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-white/[0.03] border border-white/10 rounded-xl overflow-hidden">
                <button onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)} className="w-full flex items-center justify-between p-5 text-left">
                  <span className="text-white font-semibold text-sm pr-4">{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 text-amber-400 shrink-0 transition-transform ${expandedFaq === idx ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {expandedFaq === idx && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                      <p className="px-5 pb-5 text-stone-400 text-sm leading-relaxed">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Cross Links ===== */}
      <section className="py-12 px-4 bg-stone-950">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xl font-bold text-white text-center mb-8">Also Explore</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { title: 'Tempo Traveller Options', desc: '12-26 seater for groups', href: '/tempo-traveller', icon: Users },
              { title: 'All Vehicle Hire', desc: 'Complete fleet catalog', href: '/vehicles', icon: Navigation },
              { title: 'Char Dham Tour Package', desc: 'All-inclusive package', href: '/tour-package/chardham-yatra-package', icon: Star },
            ].map((link, i) => {
              const Icon = link.icon;
              return (
                <Link key={i} href={link.href} className="bg-white/[0.03] border border-white/10 rounded-xl p-5 hover:border-amber-500/30 transition-all group">
                  <Icon className="w-5 h-5 text-amber-400 mb-3" />
                  <h3 className="text-white font-bold text-sm mb-1 group-hover:text-amber-400 transition-colors">{link.title}</h3>
                  <p className="text-stone-500 text-xs">{link.desc}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== SEO Content ===== */}
      <section className="py-16 px-4 bg-stone-900/20 border-t border-white/5">
        <div className="max-w-4xl mx-auto prose prose-invert">
          <h2 className="text-2xl font-bold text-white font-serif">{vehicle.name} for Char Dham Yatra — Complete Guide</h2>
          <p className="text-stone-300 leading-relaxed">
            The {vehicle.name} is {vehicleType === 'sedan' ? 'the most affordable' : vehicleType === 'ertiga' ? 'the best family' : vehicleType === 'fortuner' ? 'the most premium' : vehicleType === 'innova' ? "India's most popular" : 'an excellent'} vehicle for Char Dham Yatra, offering {vehicle.seats} seats at just ₹{vehicle.perKm}/km. The {destinationData.fullName} circuit covers all four sacred temples — Yamunotri, Gangotri, Kedarnath, and Badrinath — across the majestic Garhwal Himalayas of Uttarakhand.
          </p>
          <p className="text-stone-300 leading-relaxed">
            With our experienced hill drivers, your {vehicle.name} journey covers approximately {distance} with {duration} of comfortable travel. Every booking includes fuel, tolls, driver charges, and 24/7 trip support. Compare with other options on our <Link href="/chardham-yatra" className="text-amber-400 underline">Char Dham Yatra hub page</Link>, or explore <Link href="/tempo-traveller" className="text-amber-400 underline">tempo traveller options</Link> for larger groups. Call <a href="tel:+917668570551" className="text-amber-400">7668570551</a> to book.
          </p>
        </div>
      </section>

      {/* ===== Final CTA ===== */}
      <section className="py-20 px-4 bg-gradient-to-r from-amber-700 to-amber-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white font-serif mb-6">Book Your {vehicle.name} for Char Dham</h2>
          <p className="text-amber-100/80 text-lg mb-10">Starting from {estimatedPrice} | {duration} | {vehicle.seats} Seater | Experienced Driver</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="tel:+917668570551" className="flex items-center gap-3 bg-white text-amber-700 px-10 py-4 rounded-full font-bold text-lg shadow-xl hover:bg-amber-50 transition-all">
              <Phone className="w-5 h-5" /> Call 7668570551
            </a>
            <a href={`https://wa.me/917668570551?text=${whatsappMsg}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 bg-stone-900 text-white px-10 py-4 rounded-full font-bold text-lg shadow-xl hover:bg-black transition-all">
              <MessageCircle className="w-5 h-5 text-green-400" /> WhatsApp Booking
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
