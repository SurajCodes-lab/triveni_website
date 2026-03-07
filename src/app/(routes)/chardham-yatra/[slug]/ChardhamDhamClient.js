'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, MessageCircle, MapPin, Users, Star, Shield, ChevronRight, ChevronDown, Mountain, Calendar, IndianRupee, Navigation, Sparkles, ArrowRight, CheckCircle, Clock, Sun, Award, Compass, Route, Bus, Fuel } from '@/components/ui/icons';

// ============================================================================
// CHARDHAM DHAM CLIENT — "Temple Sanctum" Design
// Each Dham gets a UNIQUE accent color:
//   Kedarnath → Cyan/Ice Blue    Badrinath → Violet/Purple
//   Gangotri → Silver/White      Yamunotri → Rose/Pink
// Base: Deep Indigo-950 with temple-inspired ornamental elements
// Used by 4 individual Dham pages
// ============================================================================

const dhamColorMap = {
  kedarnath: {
    accent: 'cyan',
    gradient: 'from-cyan-500 to-sky-600',
    gradientBg: 'from-cyan-500/20 to-sky-600/20',
    border: 'border-cyan-500/30',
    hoverBorder: 'hover:border-cyan-500/40',
    text: 'text-cyan-400',
    textLight: 'text-cyan-300',
    bg: 'bg-cyan-500',
    bgLight: 'bg-cyan-500/10',
    ring: 'ring-cyan-500/20',
    shadow: 'shadow-cyan-500/20',
    deity: 'Lord Shiva (Jyotirlinga)',
    trekInfo: '16 km trek from Gaurikund (or helicopter)',
  },
  badrinath: {
    accent: 'violet',
    gradient: 'from-violet-500 to-purple-600',
    gradientBg: 'from-violet-500/20 to-purple-600/20',
    border: 'border-violet-500/30',
    hoverBorder: 'hover:border-violet-500/40',
    text: 'text-violet-400',
    textLight: 'text-violet-300',
    bg: 'bg-violet-500',
    bgLight: 'bg-violet-500/10',
    ring: 'ring-violet-500/20',
    shadow: 'shadow-violet-500/20',
    deity: 'Lord Vishnu (Badrinarayan)',
    trekInfo: 'Road access directly to temple',
  },
  gangotri: {
    accent: 'slate',
    gradient: 'from-slate-300 to-gray-400',
    gradientBg: 'from-slate-300/20 to-gray-400/20',
    border: 'border-slate-400/30',
    hoverBorder: 'hover:border-slate-400/40',
    text: 'text-slate-300',
    textLight: 'text-slate-200',
    bg: 'bg-slate-400',
    bgLight: 'bg-slate-400/10',
    ring: 'ring-slate-400/20',
    shadow: 'shadow-slate-400/20',
    deity: 'Goddess Ganga',
    trekInfo: '18 km trek to Gaumukh glacier (temple by road)',
  },
  yamunotri: {
    accent: 'rose',
    gradient: 'from-rose-500 to-pink-600',
    gradientBg: 'from-rose-500/20 to-pink-600/20',
    border: 'border-rose-500/30',
    hoverBorder: 'hover:border-rose-500/40',
    text: 'text-rose-400',
    textLight: 'text-rose-300',
    bg: 'bg-rose-500',
    bgLight: 'bg-rose-500/10',
    ring: 'ring-rose-500/20',
    shadow: 'shadow-rose-500/20',
    deity: 'Goddess Yamuna',
    trekInfo: '5 km trek from Janki Chatti',
  },
};

export default function ChardhamDhamClient({ data }) {
  const [mounted, setMounted] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [activeVehicleTab, setActiveVehicleTab] = useState('cars');
  useEffect(() => { setMounted(true); }, []);

  const { title, vehicle, destination, destinationData, duration, distance, distanceKm, estimatedPrice, allCarPrices, allBusPrices, allBusOptions, tempoOptions, itinerary, whyChoose, faqs, images, relatedRoutes, destinationKey } = data;

  // Resolve dham color from destinationKey
  const dhamKey = destinationKey === 'kedarnath' ? 'kedarnath'
    : destinationKey === 'badrinath' ? 'badrinath'
    : destinationKey === 'gangotri' ? 'gangotri'
    : destinationKey === 'yamunotri' ? 'yamunotri'
    : destination?.toLowerCase().includes('kedarnath') ? 'kedarnath'
    : destination?.toLowerCase().includes('badrinath') ? 'badrinath'
    : destination?.toLowerCase().includes('gangotri') ? 'gangotri'
    : 'yamunotri';

  const colors = dhamColorMap[dhamKey];
  const whatsappMsg = encodeURIComponent(`Hello! I want to book a car for ${destination} Yatra 2026`);

  return (
    <div className="min-h-screen bg-indigo-950">
      {/* ===== HERO: Temple Sanctum ===== */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image src={images.hero} alt={`${destination} Temple`} fill sizes="100vw" className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-indigo-950 via-indigo-950/80 to-indigo-950/20" />
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-950/90 to-indigo-950/30" />
        </div>

        {/* Decorative mandala pattern */}
        {mounted && (
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <motion.div
              className="absolute -right-48 top-1/4 w-96 h-96 rounded-full border border-white/[0.03]"
              animate={{ rotate: 360 }}
              transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
            />
            <motion.div
              className="absolute -right-32 top-1/4 w-64 h-64 rounded-full border border-white/[0.05]"
              animate={{ rotate: -360 }}
              transition={{ duration: 45, repeat: Infinity, ease: 'linear' }}
            />
          </div>
        )}

        <div className="relative z-10 max-w-7xl mx-auto px-4 py-24 w-full">
          <div className="max-w-3xl">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-indigo-400/60 text-sm mb-6">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight className="w-3 h-3" />
              <Link href="/chardham-yatra" className="hover:text-white transition-colors">Char Dham Yatra</Link>
              <ChevronRight className="w-3 h-3" />
              <span className={colors.text}>{destination}</span>
            </div>

            {/* Dham badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className={`inline-flex items-center gap-3 ${colors.bgLight} border ${colors.border} rounded-full px-5 py-2 mb-6`}
            >
              <span className="text-2xl">🙏</span>
              <span className={`${colors.text} text-sm font-bold tracking-wide`}>{destinationData?.type} Dham | {colors.deity}</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white font-serif mb-4 leading-tight"
            >
              {title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="text-indigo-200/60 text-lg mb-8 max-w-2xl"
            >
              {destinationData?.significance?.slice(0, 200)}...
            </motion.p>

            {/* Key info badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap gap-3 mb-8"
            >
              {[
                { icon: Mountain, label: `Altitude: ${destinationData?.altitude || 'N/A'}`, color: colors.text },
                { icon: Sun, label: destinationData?.bestSeason || 'May-Oct', color: 'text-amber-400' },
                { icon: Navigation, label: colors.trekInfo, color: 'text-emerald-400' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 bg-white/5 backdrop-blur-sm rounded-full px-4 py-2 border border-white/10">
                  <item.icon className={`w-4 h-4 ${item.color}`} />
                  <span className="text-white/80 text-sm">{item.label}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <a href="tel:+917668570551" className={`inline-flex items-center gap-2 bg-gradient-to-r ${colors.gradient} text-white px-8 py-3.5 rounded-full font-bold text-lg hover:shadow-lg ${colors.shadow} transition-all hover:scale-105`}>
                <Phone className="w-5 h-5" /> Book Now — 7668570551
              </a>
              <a href={`https://wa.me/917668570551?text=${whatsappMsg}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-emerald-600 text-white px-8 py-3.5 rounded-full font-bold text-lg hover:bg-emerald-500 transition-all hover:scale-105">
                <MessageCircle className="w-5 h-5" /> WhatsApp
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 2: Sacred Significance ===== */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            {/* Main content */}
            <div className="lg:col-span-3">
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <span className={`${colors.text} text-sm font-bold tracking-widest uppercase`}>Sacred Significance</span>
                <h2 className="text-3xl md:text-4xl font-bold text-white font-serif mt-3 mb-8">About {destination} Temple</h2>
                <p className="text-indigo-200/70 leading-relaxed text-lg mb-8">{destinationData?.significance}</p>

                {/* Quick facts cards */}
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: Mountain, label: 'Altitude', value: destinationData?.altitude || 'N/A' },
                    { icon: Calendar, label: 'Best Time', value: destinationData?.bestSeason || 'May-Oct' },
                    { icon: Star, label: 'Deity', value: colors.deity },
                    { icon: Route, label: 'Trek Info', value: colors.trekInfo },
                  ].map((fact, i) => (
                    <div key={i} className={`bg-white/5 border border-white/10 rounded-xl p-4 ${colors.hoverBorder} transition-all`}>
                      <fact.icon className={`w-5 h-5 ${colors.text} mb-2`} />
                      <p className="text-indigo-400/60 text-xs uppercase tracking-wider">{fact.label}</p>
                      <p className="text-white font-semibold text-sm mt-1">{fact.value}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Image gallery */}
            <div className="lg:col-span-2">
              <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="grid grid-cols-2 gap-3 h-full">
                {images.gallery.map((img, i) => (
                  <div key={i} className={`relative overflow-hidden rounded-2xl ${i === 0 ? 'col-span-2 h-56' : 'h-40'} border border-white/10`}>
                    <Image src={img} alt={`${destination} gallery ${i + 1}`} fill className="object-cover hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-indigo-950/40 to-transparent" />
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 3: All Vehicle Comparison Matrix ===== */}
      <section className="py-20 bg-indigo-950/80">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <span className={`${colors.text} text-sm font-bold tracking-widest uppercase`}>Vehicle Options</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white font-serif mt-3">How to Reach {destination} — All Vehicles</h2>
            <p className="text-indigo-300/60 mt-3">Choose your ideal vehicle for the {destination} pilgrimage</p>
          </motion.div>

          {/* Tab switcher */}
          <div className="flex justify-center gap-3 mb-10">
            {['cars', 'buses', 'tempos'].map(tab => (
              <button
                key={tab}
                onClick={() => setActiveVehicleTab(tab)}
                className={`px-6 py-2.5 rounded-full text-sm font-semibold capitalize transition-all ${
                  activeVehicleTab === tab
                    ? `bg-gradient-to-r ${colors.gradient} text-white shadow-lg ${colors.shadow}`
                    : 'bg-white/5 text-indigo-300/70 hover:bg-white/10 border border-white/10'
                }`}
              >
                {tab === 'cars' ? '🚗 Cars & SUVs' : tab === 'buses' ? '🚌 Buses' : '🚐 Tempo Travellers'}
              </button>
            ))}
          </div>

          {/* Cars grid */}
          <AnimatePresence mode="wait">
            {activeVehicleTab === 'cars' && (
              <motion.div key="cars" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {allCarPrices.map((car, i) => (
                  <div key={i} className={`bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 ${colors.hoverBorder} transition-all overflow-hidden group`}>
                    <div className="relative h-36 bg-gradient-to-br from-white/5 to-white/[0.02]">
                      <Image src={car.image} alt={car.name} fill className="object-contain p-4 group-hover:scale-105 transition-transform" />
                    </div>
                    <div className="p-5">
                      <h3 className="text-white font-bold">{car.name}</h3>
                      <p className="text-indigo-400/60 text-sm">{car.category} | {car.seats} Seater</p>
                      <div className="flex items-baseline gap-2 mt-3">
                        <span className={`text-xl font-bold ${colors.text}`}>₹{car.perKm}/km</span>
                      </div>
                      <p className="text-indigo-400/50 text-xs mt-1">Est. {car.estimatedPrice} for round trip</p>
                      <div className="mt-3 flex flex-wrap gap-1">
                        {car.features?.slice(0, 3).map((f, j) => (
                          <span key={j} className="text-xs bg-white/5 text-indigo-300/60 px-2 py-0.5 rounded-full">{f}</span>
                        ))}
                      </div>
                      <a href="tel:+917668570551" className={`mt-4 block text-center bg-gradient-to-r ${colors.gradient} text-white py-2.5 rounded-xl font-semibold text-sm hover:shadow-lg ${colors.shadow} transition-all`}>
                        Book {car.name}
                      </a>
                    </div>
                  </div>
                ))}
              </motion.div>
            )}

            {activeVehicleTab === 'buses' && (
              <motion.div key="buses" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {allBusPrices.map((bus, i) => (
                    <div key={i} className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-5 hover:border-indigo-500/30 transition-all">
                      <div className="relative h-32 mb-4">
                        <Image src={bus.image} alt={bus.name} fill className="object-contain" />
                      </div>
                      <h3 className="text-white font-bold">{bus.name}</h3>
                      <p className="text-indigo-400/60 text-sm">{bus.seats} Seater | ₹{bus.perKm}/km</p>
                      <p className={`${colors.text} font-bold text-lg mt-2`}>{bus.estimatedPrice}</p>
                      <a href="tel:+917668570551" className="mt-3 block text-center bg-white/10 hover:bg-white/20 text-white py-2.5 rounded-xl text-sm font-semibold transition-all">
                        Book Bus
                      </a>
                    </div>
                  ))}
                </div>

                {/* All bus sizes comparison */}
                <div className="mt-8 bg-white/5 rounded-2xl border border-white/10 overflow-hidden">
                  <div className="p-5 border-b border-white/10">
                    <h3 className="text-white font-bold text-lg">All Bus Sizes Available</h3>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-white/10">
                          <th className="text-left text-indigo-400/60 p-4 font-medium">Bus Type</th>
                          <th className="text-center text-indigo-400/60 p-4 font-medium">Seats</th>
                          <th className="text-center text-indigo-400/60 p-4 font-medium">Per Km</th>
                          <th className="text-center text-indigo-400/60 p-4 font-medium">Min. Charge</th>
                        </tr>
                      </thead>
                      <tbody>
                        {allBusOptions.map((bus, i) => (
                          <tr key={i} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                            <td className="p-4 text-white font-medium">{bus.name}</td>
                            <td className="p-4 text-center text-indigo-300/70">{bus.seats}</td>
                            <td className={`p-4 text-center ${colors.text} font-semibold`}>₹{bus.perKm}</td>
                            <td className="p-4 text-center text-indigo-300/70">{bus.minCharge}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </motion.div>
            )}

            {activeVehicleTab === 'tempos' && (
              <motion.div key="tempos" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
                {tempoOptions.map((tempo, i) => (
                  <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-5 text-center hover:border-indigo-500/30 transition-all">
                    <div className="relative h-28 mb-3">
                      <Image src={tempo.image} alt={tempo.name} fill className="object-contain" />
                    </div>
                    <h4 className="text-white font-semibold">{tempo.name}</h4>
                    <p className="text-indigo-400/60 text-sm">{tempo.seats} Seater</p>
                    <p className={`${colors.text} font-bold mt-2`}>₹{tempo.perKm}/km</p>
                    <a href="tel:+917668570551" className="mt-3 block text-center bg-white/10 hover:bg-white/20 text-white py-2 rounded-lg text-sm transition-all">
                      Enquire
                    </a>
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* ===== SECTION 4: Itinerary ===== */}
      {itinerary.length > 0 && (
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
              <span className="text-amber-400 text-sm font-bold tracking-widest uppercase">Sample Itinerary</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white font-serif mt-3">{destination} Yatra — Day by Day</h2>
              <p className="text-indigo-300/60 mt-3">{duration} | {distance}</p>
            </motion.div>

            {/* Vertical timeline */}
            <div className="relative">
              {/* Timeline line */}
              <div className={`absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b ${colors.gradientBg}`} />

              <div className="space-y-6">
                {itinerary.map((day, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="relative flex gap-6 pl-2"
                  >
                    {/* Timeline dot */}
                    <div className={`flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br ${colors.gradient} flex items-center justify-center text-white text-sm font-bold z-10 shadow-lg ${colors.shadow}`}>
                      {i + 1}
                    </div>
                    {/* Content card */}
                    <div className={`flex-1 bg-white/5 border border-white/10 rounded-xl p-5 ${colors.hoverBorder} transition-all`}>
                      <p className={`${colors.text} text-xs font-bold tracking-wider uppercase mb-1`}>{day.day}</p>
                      <h3 className="text-white font-bold text-lg mb-2">{day.title}</h3>
                      <p className="text-indigo-200/60 text-sm leading-relaxed">{day.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ===== SECTION 5: Why Choose Triveni ===== */}
      <section className="py-20 bg-gradient-to-b from-indigo-950/50 to-indigo-950">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <span className={`${colors.text} text-sm font-bold tracking-widest uppercase`}>Why Triveni Cabs</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white font-serif mt-3">Trusted for {destination} Yatra Since 2015</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {whyChoose.slice(0, 6).map((item, i) => {
              const icons = [Shield, Star, Award, Mountain, Compass, CheckCircle];
              const Icon = icons[i % icons.length];
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className={`bg-white/5 rounded-2xl border border-white/10 p-6 ${colors.hoverBorder} transition-all`}
                >
                  <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${colors.gradientBg} flex items-center justify-center mb-4`}>
                    <Icon className={`w-5 h-5 ${colors.text}`} />
                  </div>
                  <h3 className="text-white font-bold mb-2">{item.title}</h3>
                  <p className="text-indigo-300/60 text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== SECTION 6: SEO Content ===== */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-2xl md:text-3xl font-bold text-white font-serif mb-8">{destination} Yatra by Car — Everything You Need to Know</h2>

            <div className="prose prose-invert max-w-none space-y-6 text-indigo-200/70 leading-relaxed">
              <p>
                {destinationData?.significance}
              </p>
              <p>
                <strong className="text-white">How to reach {destination} by car:</strong> The most popular starting points are Haridwar, Rishikesh, Dehradun, and Delhi.
                From Haridwar, the distance is approximately {data.originData?.distances?.[destinationKey]?.km || 'varies'} km one way.
                The journey involves scenic mountain roads through the Himalayan landscape. Our experienced drivers ensure safe navigation through all terrain types.
              </p>
              <p>
                <strong className="text-white">Vehicle recommendations for {destination}:</strong> The <strong className={colors.text}>Innova Crysta (₹18/km)</strong> is the most popular choice for its reliability on mountain roads.
                For budget travelers, the <strong className={colors.text}>Swift Dzire (₹12/km)</strong> is the most economical option.
                For premium comfort, the <strong className={colors.text}>Toyota Fortuner (₹25/km)</strong> with 4x4 capability is unmatched.
                For groups, we offer buses from 22 to 56 seaters.
              </p>
              <p>
                <strong className="text-white">Best time to visit {destination}:</strong> {destinationData?.bestSeason}. The temple typically opens in late April/early May and closes in November. The monsoon months (July-August) should be avoided due to landslides.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== SECTION 7: FAQs ===== */}
      <section className="py-20 bg-indigo-950/80">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <span className="text-amber-400 text-sm font-bold tracking-widest uppercase">FAQs</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white font-serif mt-3">{destination} Yatra — Common Questions</h2>
          </motion.div>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className={`bg-white/5 border border-white/10 rounded-xl overflow-hidden ${colors.hoverBorder} transition-all`}
              >
                <button
                  onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left"
                >
                  <span className="text-white font-semibold pr-4">{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 ${colors.text} flex-shrink-0 transition-transform ${expandedFaq === i ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {expandedFaq === i && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-5 text-indigo-200/70 leading-relaxed">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SECTION 8: Cross-Navigation Between Dhams ===== */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-white font-serif mb-8 text-center">Explore Other Sacred Dhams</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {relatedRoutes.slice(0, 3).map((slug, i) => {
              const dham = slug.split('-')[0];
              const dhamColor = dhamColorMap[dham] || dhamColorMap.kedarnath;
              return (
                <Link key={i} href={`/chardham-yatra/${slug}`} className={`bg-white/5 border border-white/10 rounded-2xl p-6 ${dhamColor.hoverBorder} transition-all group`}>
                  <span className="text-3xl mb-3 block">🙏</span>
                  <h3 className={`text-white font-bold text-lg group-hover:${dhamColor.text} transition-colors capitalize`}>
                    {slug.replace(/-/g, ' ')}
                  </h3>
                  <div className="flex items-center gap-1 mt-3 text-indigo-400/60 text-sm">
                    <span>View Details</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              );
            })}
          </div>
          <div className="text-center mt-8">
            <Link href="/chardham-yatra" className={`inline-flex items-center gap-2 ${colors.text} hover:text-white transition-colors font-semibold`}>
              View All Char Dham Options <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section className={`py-20 bg-gradient-to-r ${colors.gradient} relative overflow-hidden`}>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-bold text-white font-serif mb-4">Begin Your {destination} Pilgrimage</h2>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              Cars from ₹12/km. Buses from ₹32/km. Experienced mountain drivers. 24/7 on-trip support. Book your {destination} Yatra 2026 today.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="tel:+917668570551" className="inline-flex items-center gap-2 bg-white text-indigo-900 px-10 py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all">
                <Phone className="w-5 h-5" /> Call 7668570551
              </a>
              <a href={`https://wa.me/917668570551?text=${whatsappMsg}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-green-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-green-500 hover:scale-105 transition-all">
                <MessageCircle className="w-5 h-5" /> WhatsApp Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
