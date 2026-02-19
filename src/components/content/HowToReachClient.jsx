'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Plane, TrainFront, Car, Bus, MapPin, Clock, Phone,
  ChevronDown, Users, ArrowRight, Navigation, Shield,
  CheckCircle, Star, Milestone, Route
} from '@/components/ui/icons';
import { WhatsAppIcon } from '@/components/ui/icons';
import { FAQSection } from '@/components/seo/FAQSection';
import { COMPANY_INFO, BASE_URL } from '@/lib/seo/constants';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

export default function HowToReachClient({ cityData }) {
  const {
    name, slug, introduction, distanceFromDelhi, bestTimeToVisit,
    byAir, byTrain, byRoad, byBus, vehicleRecommendation,
    relatedLinks, faqs,
  } = cityData;

  const [activeTab, setActiveTab] = useState('air');

  const tabs = [
    { id: 'air', label: 'By Air', icon: Plane },
    { id: 'train', label: 'By Train', icon: TrainFront },
    { id: 'road', label: 'By Road', icon: Car },
    { id: 'bus', label: 'By Bus', icon: Bus },
  ];

  // Breadcrumb schema
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: `How to Reach ${name}`, item: `${BASE_URL}/how-to-reach-${slug}` },
    ],
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/30 via-slate-950 to-teal-900/20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(16,185,129,0.12),transparent_60%)]" />

        <div className="container mx-auto px-4 relative z-10">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-slate-400 mb-6" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-emerald-400 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-emerald-400">How to Reach {name}</span>
          </nav>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-4xl"
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 px-4 py-1.5 rounded-full text-sm font-medium mb-4">
              <Navigation className="w-4 h-4" />
              <span>Travel Guide</span>
            </motion.div>

            <motion.h1 variants={fadeInUp} className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              How to Reach{' '}
              <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                {name}
              </span>
            </motion.h1>

            <motion.p variants={fadeInUp} className="text-lg text-slate-300 leading-relaxed mb-8 max-w-3xl">
              {introduction}
            </motion.p>

            {/* Quick Stats */}
            <motion.div variants={fadeInUp} className="flex flex-wrap gap-3">
              {byAir?.airport && (
                <div className="bg-white/5 backdrop-blur-xl rounded-xl border border-white/10 px-4 py-3 flex items-center gap-3">
                  <Plane className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                  <div>
                    <p className="text-xs text-slate-400">Nearest Airport</p>
                    <p className="text-sm font-medium text-white">{byAir.airport.split('(')[0].trim()}</p>
                  </div>
                </div>
              )}
              {byTrain?.stations?.[0] && (
                <div className="bg-white/5 backdrop-blur-xl rounded-xl border border-white/10 px-4 py-3 flex items-center gap-3">
                  <TrainFront className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                  <div>
                    <p className="text-xs text-slate-400">Main Station</p>
                    <p className="text-sm font-medium text-white">{byTrain.stations[0].name.split('(')[0].trim()}</p>
                  </div>
                </div>
              )}
              {distanceFromDelhi && distanceFromDelhi !== '0 km' && (
                <div className="bg-white/5 backdrop-blur-xl rounded-xl border border-white/10 px-4 py-3 flex items-center gap-3">
                  <Route className="w-5 h-5 text-teal-400 flex-shrink-0" />
                  <div>
                    <p className="text-xs text-slate-400">From Delhi</p>
                    <p className="text-sm font-medium text-white">{distanceFromDelhi}</p>
                  </div>
                </div>
              )}
              {bestTimeToVisit && (
                <div className="bg-white/5 backdrop-blur-xl rounded-xl border border-white/10 px-4 py-3 flex items-center gap-3">
                  <Star className="w-5 h-5 text-amber-400 flex-shrink-0" />
                  <div>
                    <p className="text-xs text-slate-400">Best Time</p>
                    <p className="text-sm font-medium text-white">{bestTimeToVisit}</p>
                  </div>
                </div>
              )}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Transport Tabs Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeInUp} className="text-2xl md:text-3xl font-bold text-center mb-3">
              Ways to Reach{' '}
              <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">{name}</span>
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-slate-400 text-center mb-10 max-w-2xl mx-auto">
              Choose the most convenient mode of transport based on your budget, time, and comfort preferences.
            </motion.p>

            {/* Tab Navigation */}
            <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-2 mb-8">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                      activeTab === tab.id
                        ? 'bg-emerald-500/20 border border-emerald-500/40 text-emerald-400'
                        : 'bg-white/5 border border-white/10 text-slate-400 hover:border-emerald-500/30 hover:text-emerald-300'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    {tab.label}
                  </button>
                );
              })}
            </motion.div>

            {/* Tab Content */}
            <motion.div variants={fadeInUp} className="max-w-4xl mx-auto">
              {/* By Air */}
              {activeTab === 'air' && byAir && (
                <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center">
                      <Plane className="w-6 h-6 text-emerald-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">Reach {name} by Air</h3>
                      <p className="text-sm text-slate-400">{byAir.airport}</p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="space-y-4">
                      <div>
                        <p className="text-xs text-slate-400 uppercase tracking-wider mb-1">Airport Distance</p>
                        <p className="text-slate-200">{byAir.distance}</p>
                      </div>
                      <div>
                        <p className="text-xs text-slate-400 uppercase tracking-wider mb-1">Airlines Operating</p>
                        <p className="text-slate-200">{byAir.airlines}</p>
                      </div>
                    </div>
                    <div className="bg-emerald-500/10 rounded-xl border border-emerald-500/20 p-4">
                      <p className="text-xs text-emerald-400 uppercase tracking-wider mb-2 font-medium">Travel Tip</p>
                      <p className="text-slate-300 text-sm leading-relaxed">{byAir.tips}</p>
                    </div>
                  </div>

                  {relatedLinks?.airport && (
                    <Link
                      href={relatedLinks.airport}
                      className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-xl font-medium transition-colors"
                    >
                      Book Airport Taxi in {name}
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  )}
                </div>
              )}

              {/* By Train */}
              {activeTab === 'train' && byTrain && (
                <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center">
                      <TrainFront className="w-6 h-6 text-cyan-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">Reach {name} by Train</h3>
                      <p className="text-sm text-slate-400">Railway stations serving {name}</p>
                    </div>
                  </div>

                  {/* Stations List */}
                  <div className="space-y-3 mb-6">
                    {byTrain.stations.map((station, idx) => (
                      <div key={idx} className="flex items-start gap-3 bg-white/5 rounded-xl border border-white/5 p-4">
                        <div className="w-8 h-8 rounded-lg bg-cyan-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-cyan-400 text-sm font-bold">{idx + 1}</span>
                        </div>
                        <div>
                          <p className="font-semibold text-white">{station.name}</p>
                          <p className="text-sm text-slate-400">{station.area}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="bg-cyan-500/10 rounded-xl border border-cyan-500/20 p-4">
                    <p className="text-xs text-cyan-400 uppercase tracking-wider mb-2 font-medium">Train Tips</p>
                    <p className="text-slate-300 text-sm leading-relaxed">{byTrain.tips}</p>
                  </div>
                </div>
              )}

              {/* By Road */}
              {activeTab === 'road' && byRoad && (
                <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-teal-500/20 flex items-center justify-center">
                      <Car className="w-6 h-6 text-teal-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">Reach {name} by Road</h3>
                      <p className="text-sm text-slate-400">Highway routes and driving distances</p>
                    </div>
                  </div>

                  {/* Routes Table */}
                  <div className="overflow-x-auto mb-6">
                    <table className="w-full text-left">
                      <thead>
                        <tr className="border-b border-white/10">
                          <th className="pb-3 text-xs text-slate-400 uppercase tracking-wider font-medium">From</th>
                          <th className="pb-3 text-xs text-slate-400 uppercase tracking-wider font-medium">Highway</th>
                          <th className="pb-3 text-xs text-slate-400 uppercase tracking-wider font-medium">Distance</th>
                          <th className="pb-3 text-xs text-slate-400 uppercase tracking-wider font-medium">Time</th>
                          <th className="pb-3 text-xs text-slate-400 uppercase tracking-wider font-medium"></th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-white/5">
                        {byRoad.highways.map((route, idx) => (
                          <tr key={idx} className="group">
                            <td className="py-3 pr-4">
                              <span className="font-medium text-white">{route.from}</span>
                            </td>
                            <td className="py-3 pr-4">
                              <span className="text-sm text-slate-300">{route.highway}</span>
                            </td>
                            <td className="py-3 pr-4">
                              <span className="text-sm text-emerald-400 font-medium">{route.distance}</span>
                            </td>
                            <td className="py-3 pr-4">
                              <span className="text-sm text-slate-300 flex items-center gap-1">
                                <Clock className="w-3.5 h-3.5 text-slate-500" />
                                {route.time}
                              </span>
                            </td>
                            <td className="py-3">
                              <Link
                                href={`tel:${COMPANY_INFO.phone.primary}`}
                                className="text-xs text-emerald-400 hover:text-emerald-300 font-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap"
                              >
                                Book Cab
                              </Link>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <Link
                    href={`tel:${COMPANY_INFO.phone.primary}`}
                    className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-xl font-medium transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    Book Road Trip to {name}
                  </Link>
                </div>
              )}

              {/* By Bus */}
              {activeTab === 'bus' && byBus && (
                <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-indigo-500/20 flex items-center justify-center">
                      <Bus className="w-6 h-6 text-indigo-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">Reach {name} by Bus</h3>
                      <p className="text-sm text-slate-400">Bus stands and operators</p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <p className="text-xs text-slate-400 uppercase tracking-wider mb-3 font-medium">Bus Stands</p>
                      <ul className="space-y-2">
                        {byBus.busStands.map((stand, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-slate-200">
                            <MapPin className="w-4 h-4 text-indigo-400 flex-shrink-0" />
                            {stand}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 uppercase tracking-wider mb-3 font-medium">Bus Operators</p>
                      <div className="flex flex-wrap gap-2">
                        {byBus.operators.map((operator, idx) => (
                          <span key={idx} className="bg-white/5 border border-white/10 text-slate-300 text-sm px-3 py-1 rounded-lg">
                            {operator}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="bg-indigo-500/10 rounded-xl border border-indigo-500/20 p-4">
                    <p className="text-xs text-indigo-400 uppercase tracking-wider mb-2 font-medium">Bus Travel Tips</p>
                    <p className="text-slate-300 text-sm leading-relaxed">{byBus.tips}</p>
                  </div>
                </div>
              )}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Vehicle Recommendations */}
      {vehicleRecommendation && (
        <section className="py-12 md:py-16 bg-slate-900/50">
          <div className="container mx-auto px-4">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              variants={staggerContainer}
            >
              <motion.h2 variants={fadeInUp} className="text-2xl md:text-3xl font-bold text-center mb-3">
                Recommended Vehicles for{' '}
                <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">{name}</span>
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-slate-400 text-center mb-10 max-w-2xl mx-auto">
                Choose the right vehicle based on your group size and travel needs.
              </motion.p>

              <motion.div variants={fadeInUp} className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {/* Solo/Couple */}
                <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 hover:border-emerald-500/30 transition-all duration-300 p-6">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center mb-4">
                    <Car className="w-6 h-6 text-emerald-400" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-1">Solo / Couple</h3>
                  <p className="text-sm text-slate-400 mb-3">1-2 Travellers</p>
                  <p className="text-slate-300 text-sm leading-relaxed">{vehicleRecommendation.solo}</p>
                </div>

                {/* Family */}
                <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-emerald-500/30 p-6 relative">
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                    Most Popular
                  </div>
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center mb-4">
                    <Users className="w-6 h-6 text-emerald-400" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-1">Family</h3>
                  <p className="text-sm text-slate-400 mb-3">4-6 Travellers</p>
                  <p className="text-slate-300 text-sm leading-relaxed">{vehicleRecommendation.family}</p>
                </div>

                {/* Group */}
                <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 hover:border-emerald-500/30 transition-all duration-300 p-6">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center mb-4">
                    <Bus className="w-6 h-6 text-emerald-400" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-1">Group</h3>
                  <p className="text-sm text-slate-400 mb-3">8+ Travellers</p>
                  <p className="text-slate-300 text-sm leading-relaxed">{vehicleRecommendation.group}</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>
      )}

      {/* FAQ Section */}
      {faqs && faqs.length > 0 && (
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <FAQSection
              faqs={faqs}
              title={`Frequently Asked Questions - How to Reach ${name}`}
              subtitle={`Common questions about travelling to ${name}`}
              showSchema={true}
              variant="card"
            />
          </div>
        </section>
      )}

      {/* Cross-Linking Section */}
      {relatedLinks && (
        <section className="py-12 md:py-16 bg-slate-900/50">
          <div className="container mx-auto px-4">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              variants={staggerContainer}
            >
              <motion.h2 variants={fadeInUp} className="text-2xl md:text-3xl font-bold text-center mb-10">
                Explore {name} with{' '}
                <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">Triveni Cabs</span>
              </motion.h2>

              <motion.div variants={fadeInUp} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
                {relatedLinks.sightseeing && (
                  <Link
                    href={relatedLinks.sightseeing}
                    className="bg-white/5 backdrop-blur-xl rounded-xl border border-white/10 hover:border-emerald-500/30 p-5 text-center transition-all duration-300 group"
                  >
                    <MapPin className="w-8 h-8 text-emerald-400 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                    <p className="font-semibold text-white text-sm">{name} Sightseeing</p>
                    <p className="text-xs text-slate-400 mt-1">Explore top attractions</p>
                  </Link>
                )}
                {relatedLinks.airport && (
                  <Link
                    href={relatedLinks.airport}
                    className="bg-white/5 backdrop-blur-xl rounded-xl border border-white/10 hover:border-cyan-500/30 p-5 text-center transition-all duration-300 group"
                  >
                    <Plane className="w-8 h-8 text-cyan-400 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                    <p className="font-semibold text-white text-sm">{name} Airport Taxi</p>
                    <p className="text-xs text-slate-400 mt-1">Airport pickup and drop</p>
                  </Link>
                )}
                {relatedLinks.wedding && (
                  <Link
                    href={relatedLinks.wedding}
                    className="bg-white/5 backdrop-blur-xl rounded-xl border border-white/10 hover:border-pink-500/30 p-5 text-center transition-all duration-300 group"
                  >
                    <Star className="w-8 h-8 text-pink-400 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                    <p className="font-semibold text-white text-sm">{name} Wedding Cars</p>
                    <p className="text-xs text-slate-400 mt-1">Luxury wedding vehicles</p>
                  </Link>
                )}
                {relatedLinks.tempoTraveller && (
                  <Link
                    href={relatedLinks.tempoTraveller}
                    className="bg-white/5 backdrop-blur-xl rounded-xl border border-white/10 hover:border-amber-500/30 p-5 text-center transition-all duration-300 group"
                  >
                    <Bus className="w-8 h-8 text-amber-400 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                    <p className="font-semibold text-white text-sm">Tempo Traveller</p>
                    <p className="text-xs text-slate-400 mt-1">12-17 seater for groups</p>
                  </Link>
                )}
              </motion.div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Final CTA */}
      <section className="py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/30 via-slate-950 to-teal-900/20" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center max-w-3xl mx-auto"
          >
            <motion.h2 variants={fadeInUp} className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
              Ready to Travel to{' '}
              <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">{name}</span>?
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-slate-300 text-lg mb-8">
              Book a comfortable and affordable cab with Triveni Cabs. Professional drivers, well-maintained vehicles, and 24/7 support.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={`tel:${COMPANY_INFO.phone.primary}`}
                className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-xl font-semibold transition-colors text-lg"
              >
                <Phone className="w-5 h-5" />
                Call {COMPANY_INFO.phone.display}
              </a>
              <a
                href={`https://wa.me/${COMPANY_INFO.phone.whatsapp}?text=Hi, I need a cab to ${name}. Please share details.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl font-semibold transition-colors text-lg"
              >
                <WhatsAppIcon className="w-5 h-5" />
                WhatsApp Us
              </a>
            </motion.div>

            <motion.div variants={fadeInUp} className="flex flex-wrap items-center justify-center gap-6 mt-8 text-sm text-slate-400">
              <span className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-emerald-400" />
                No hidden charges
              </span>
              <span className="flex items-center gap-1.5">
                <Shield className="w-4 h-4 text-emerald-400" />
                Verified drivers
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-emerald-400" />
                24/7 availability
              </span>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
