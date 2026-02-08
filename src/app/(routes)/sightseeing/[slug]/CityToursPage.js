'use client';

import { getToursByCity } from '@/utilis/sightseeingData';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  MapPinIcon,
  ClockIcon,
  CurrencyRupeeIcon,
  SparklesIcon,
  StarIcon,
  ChevronRightIcon,
  UserGroupIcon,
  CalendarIcon
} from '@heroicons/react/24/outline';

// SEO Components
import { SEOBreadcrumb } from '@/components/seo/Breadcrumb';
import { FAQSection } from '@/components/seo/FAQSection';
import { CrossServiceLinks, NearbyDestinations } from '@/components/seo/RelatedContent';
import { generateCityFAQs } from '@/lib/seo/faq-generator';
import { getNearbyDestinations, getServiceCrossLinks, getRelatedContent } from '@/utilis/linkingHelper';

export default function CityToursPage({ city }) {
  const tours = getToursByCity(city);
  const cityName = city.charAt(0).toUpperCase() + city.slice(1);
  const relatedContent = getRelatedContent(cityName);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);

  if (!tours || tours.length === 0) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-black text-white mb-4">No Tours Found</h1>
          <p className="text-slate-400 mb-6">We don&apos;t have tours for {cityName} yet.</p>
          <Link href="/sightseeing" className="text-emerald-400 hover:underline">
            Browse All Tours →
          </Link>
        </div>
      </div>
    );
  }

  const heroImage = tours[0]?.heroImage || `/images/destinations/${city}.jpg`;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 }
    }
  };

  return (
    <main className="min-h-screen bg-slate-950" itemScope itemType="https://schema.org/CollectionPage">
      {/* Hero Section - Explorer Discovery Theme */}
      <header>
      <motion.section
        style={{ opacity, scale }}
        className="relative h-[85vh] sm:h-[75vh] md:h-[85vh] flex items-center justify-center overflow-hidden"
      >
        {/* Hero Background Image */}
        <div className="absolute inset-0">
          <Image
            src={heroImage}
            alt={`${cityName} Sightseeing Tours`}
            fill
            priority
            quality={90}
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-slate-950/20" />
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/40 via-transparent to-teal-900/40" />
        </div>

        {/* Floating Orbs */}
        <div className="absolute top-20 right-10 w-[400px] h-[400px] bg-emerald-500/15 rounded-full blur-[150px] animate-pulse" />
        <div className="absolute bottom-20 left-10 w-[300px] h-[300px] bg-teal-400/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1.5s' }} />

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 text-center text-white">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="inline-block mb-4 sm:mb-6"
          >
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto shadow-2xl shadow-emerald-500/30 rotate-6">
              <MapPinIcon className="w-8 h-8 sm:w-10 sm:h-10 text-white -rotate-6" />
            </div>
          </motion.div>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.15, duration: 0.8 }}
            className="mb-4"
          >
            <span className="inline-flex items-center gap-2 px-5 py-2 bg-emerald-500/20 backdrop-blur-xl rounded-full border border-emerald-500/30 text-emerald-300 font-bold text-sm tracking-wider uppercase">
              <SparklesIcon className="w-4 h-4" />
              Explore {cityName}
            </span>
          </motion.div>

          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-4 sm:mb-6 leading-[1.1] px-2"
          >
            Discover {cityName}&apos;s
            <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
              Hidden Treasures
            </span>
          </motion.h1>

          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 text-slate-300 max-w-3xl mx-auto px-2"
          >
            {tours.length}+ expertly curated sightseeing tours across {cityName}&apos;s most breathtaking destinations
          </motion.p>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 px-4"
          >
            <Link href="#tours" className="group w-full sm:w-auto">
              <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-full font-bold text-base sm:text-lg shadow-xl shadow-emerald-500/25 hover:shadow-emerald-500/40 transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2">
                Explore {cityName} Tours
                <ChevronRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
            <a href="https://wa.me/917668570551" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white/10 backdrop-blur-xl text-white rounded-full font-bold text-base sm:text-lg shadow-xl border border-white/20 hover:bg-white/20 transform hover:scale-105 transition-all duration-300">
                Book via WhatsApp
              </button>
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="mt-8 sm:mt-12 grid grid-cols-3 gap-3 sm:gap-6 max-w-2xl mx-auto px-2"
          >
            {[
              { number: `${tours.length}+`, label: "Tours Available" },
              { number: "2000+", label: "Happy Tourists" },
              { number: "4.8", label: "Average Rating" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl font-black text-emerald-400">{stat.number}</div>
                <div className="text-xs sm:text-sm md:text-base text-slate-400 mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-emerald-400 rounded-full"
            />
          </div>
        </motion.div>
      </motion.section>
      </header>

      {/* Breadcrumb */}
      <div className="bg-slate-950 border-b border-white/5">
        <div className="container mx-auto px-4 sm:px-6 py-4">
          <SEOBreadcrumb
            items={[
              { name: 'Sightseeing', url: '/sightseeing' },
              { name: `${cityName} Tours` }
            ]}
            variant="minimal"
            showSchema={false}
          />
        </div>
      </div>

      {/* Tours Grid Section */}
      <section id="tours" className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 relative" aria-labelledby="city-tours-heading" itemScope itemType="https://schema.org/ItemList">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-[200px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-teal-500/5 rounded-full blur-[150px]" />

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-10 md:mb-12"
          >
            <h2 id="city-tours-heading" className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-3 sm:mb-4 px-2" itemProp="name">
              All {cityName} Tours
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-400 px-4">
              {tours.length} carefully curated sightseeing experiences
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          >
            {tours.map((tour) => {
              const lowestPrice = Math.min(
                tour.price.sedan || Infinity,
                tour.price.suv || Infinity,
                tour.price.tempoTraveller || Infinity
              );

              return (
                <motion.div
                  key={tour.id}
                  variants={itemVariants}
                  whileHover={{ scale: 1.03, y: -8 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className="group relative"
                >
                  <Link href={`/sightseeing/${tour.slug}`}>
                    <div className="bg-white/5 backdrop-blur-xl rounded-2xl overflow-hidden border border-white/10 hover:border-emerald-500/40 transition-all duration-500 shadow-2xl">
                      {/* Tour Image */}
                      <div className="relative h-64 overflow-hidden">
                        {tour.heroImage ? (
                          <>
                            <Image
                              src={tour.heroImage}
                              alt={tour.name}
                              fill
                              className="object-cover group-hover:scale-110 transition-transform duration-700"
                              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
                          </>
                        ) : (
                          <div className="absolute inset-0 bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-600" />
                        )}

                        {tour.reviews && (
                          <div className="absolute top-4 left-4 z-10">
                            <span className="px-3 py-1.5 bg-yellow-500/20 backdrop-blur-xl text-yellow-300 rounded-full text-sm font-bold flex items-center gap-1 border border-yellow-500/30">
                              <StarIcon className="w-4 h-4" />
                              {tour.reviews.averageRating}
                            </span>
                          </div>
                        )}

                        <div className="absolute bottom-4 left-4 right-4 z-10">
                          <h4 className="text-white font-bold text-lg drop-shadow-lg">
                            {tour.name}
                          </h4>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6">
                        <p className="text-slate-400 mb-4 line-clamp-2 text-sm">
                          {tour.shortDescription}
                        </p>

                        <div className="space-y-2 mb-4">
                          <div className="flex items-center gap-2 text-sm text-slate-500">
                            <ClockIcon className="w-4 h-4 text-emerald-500" />
                            <span>{tour.duration}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-slate-500">
                            <MapPinIcon className="w-4 h-4 text-teal-500" />
                            <span>{tour.category}</span>
                          </div>
                        </div>

                        <div className="flex items-center justify-between pt-4 border-t border-white/10">
                          <div>
                            <div className="flex items-center gap-1 text-2xl font-black text-emerald-400">
                              <CurrencyRupeeIcon className="w-6 h-6" />
                              {lowestPrice.toLocaleString()}
                            </div>
                            <div className="text-xs text-slate-500">Starting price</div>
                          </div>
                          <div className="w-10 h-10 bg-emerald-500/10 rounded-xl flex items-center justify-center border border-emerald-500/20 group-hover:bg-emerald-500 group-hover:border-emerald-500 transition-all">
                            <ChevronRightIcon className="w-5 h-5 text-emerald-400 group-hover:text-white group-hover:translate-x-0.5 transition-all" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-slate-900/50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-500/5 via-transparent to-transparent" />
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-10 md:mb-12"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-3 sm:mb-4 px-2">
              Why Choose Our {cityName} Tours?
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              {
                icon: UserGroupIcon,
                title: "Expert Guides",
                description: `Certified local ${cityName} guides with deep cultural knowledge`,
                gradient: "from-emerald-500 to-teal-500",
                shadow: "shadow-emerald-500/30"
              },
              {
                icon: CalendarIcon,
                title: "Flexible Booking",
                description: "Easy online booking with instant confirmation",
                gradient: "from-teal-500 to-cyan-500",
                shadow: "shadow-teal-500/30"
              },
              {
                icon: SparklesIcon,
                title: "Premium Experience",
                description: "Comfortable transport and personalized service",
                gradient: "from-cyan-500 to-blue-500",
                shadow: "shadow-cyan-500/30"
              },
              {
                icon: StarIcon,
                title: "Highly Rated",
                description: "4.8 average rating from 2000+ tourists",
                gradient: "from-amber-500 to-orange-500",
                shadow: "shadow-amber-500/30"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-emerald-500/30 transition-all"
              >
                <div className={`w-14 h-14 bg-gradient-to-br ${feature.gradient} rounded-xl flex items-center justify-center mb-4 shadow-lg ${feature.shadow}`}>
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-slate-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection
        faqs={generateCityFAQs({
          city: cityName,
          services: ['Airport Transfer', 'Sightseeing Tours', 'Corporate Transport', 'Wedding Cars'],
          tours: tours.slice(0, 5)
        })}
        title={`Frequently Asked Questions about ${cityName} Tours`}
        subtitle={`Everything you need to know about sightseeing in ${cityName}`}
        variant="cards"
        showSchema={true}
      />

      {/* Cross-Service Links */}
      <CrossServiceLinks
        city={cityName}
        title={`Other Services Available in ${cityName}`}
      />

      {/* Nearby Destinations */}
      <NearbyDestinations
        currentCity={cityName}
        destinations={getNearbyDestinations(city, 6)}
        title="Explore Nearby Destinations"
      />

      {/* Travel Guides & Articles */}
      {relatedContent && relatedContent.length > 0 && (
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-2">Travel Guides & Articles</h2>
            <p className="text-gray-400 mb-8">Explore more about {cityName}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {relatedContent.slice(0, 6).map((item, index) => (
                <Link key={index} href={item.url} className="group bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-5 hover:border-emerald-500/30 hover:bg-white/10 transition-all duration-300">
                  <h3 className="text-white font-semibold group-hover:text-emerald-400 transition-colors">{item.title}</h3>
                  <p className="text-gray-400 text-sm mt-1">{item.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600" />
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-white/10 rounded-full blur-[150px]" />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-white/10 rounded-full blur-[120px]" />
        </div>
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '30px 30px'
        }} />
        <div className="container mx-auto px-4 sm:px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4 sm:mb-6 px-2">
              Ready to Explore {cityName}?
            </h2>
            <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 text-emerald-100 max-w-2xl mx-auto px-4">
              Book your perfect {cityName} sightseeing tour today and create memories that last a lifetime
            </p>
            <a href="https://wa.me/917668570551" target="_blank" rel="noopener noreferrer" className="inline-block w-full sm:w-auto px-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white text-emerald-700 rounded-full font-bold text-base sm:text-lg shadow-xl hover:shadow-2xl transition-all"
              >
                Book Now via WhatsApp
              </motion.button>
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
