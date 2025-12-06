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

export default function CityToursPage({ city }) {
  const tours = getToursByCity(city);
  const cityName = city.charAt(0).toUpperCase() + city.slice(1);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);

  if (!tours || tours.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">No Tours Found</h1>
          <p className="text-gray-600 mb-6">We don&apos;t have tours for {cityName} yet.</p>
          <Link href="/sightseeing" className="text-blue-600 hover:underline">
            Browse All Tours →
          </Link>
        </div>
      </div>
    );
  }

  // Use first tour's image as hero or city-specific image
  const heroImage = tours[0]?.heroImage || `/images/destinations/${city}.jpg`;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50" itemScope itemType="https://schema.org/CollectionPage">
      {/* Hero Section with Parallax - SAME AS MAIN PAGE */}
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
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/70 via-purple-900/60 to-pink-900/70" />

          {/* Animated Pattern Overlay */}
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.1, 0.15, 0.1],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 text-center text-white">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="inline-block mb-4 sm:mb-6"
          >
            <SparklesIcon className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mx-auto text-yellow-300" />
          </motion.div>

          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight px-2"
          >
            Discover {cityName}&apos;s
            <span className="block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-300">
              Hidden Treasures
            </span>
          </motion.h1>

          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 text-blue-100 max-w-3xl mx-auto px-2"
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
              <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white text-indigo-600 rounded-full font-semibold text-base sm:text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2">
                Explore {cityName} Tours
                <ChevronRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
            <a href="https://wa.me/917668570551" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-full font-semibold text-base sm:text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
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
              { number: "4.8★", label: "Average Rating" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-yellow-300">{stat.number}</div>
                <div className="text-xs sm:text-sm md:text-base text-blue-100 mt-1">{stat.label}</div>
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
          <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-white rounded-full"
            />
          </div>
        </motion.div>
      </motion.section>
      </header>

      {/* Tours Grid Section */}
      <section id="tours" className="py-12 sm:py-16 md:py-20" aria-labelledby="city-tours-heading" itemScope itemType="https://schema.org/ItemList">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-10 md:mb-12"
          >
            <h2 id="city-tours-heading" className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 px-2" itemProp="name">
              All {cityName} Tours
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 px-4">
              {tours.length} carefully curated sightseeing experiences
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
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
                    <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                      {/* Tour Image */}
                      <div className="relative h-64 overflow-hidden bg-gray-200">
                        {tour.heroImage ? (
                          <>
                            <Image
                              src={tour.heroImage}
                              alt={tour.name}
                              fill
                              className="object-cover"
                              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                            <motion.div
                              className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"
                              initial={{ opacity: 0.6 }}
                              whileHover={{ opacity: 0.4 }}
                              transition={{ duration: 0.3 }}
                            />
                          </>
                        ) : (
                          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500" />
                        )}

                        {tour.reviews && (
                          <div className="absolute top-4 left-4 z-10">
                            <span className="px-3 py-1 bg-yellow-400 text-gray-900 rounded-full text-sm font-semibold flex items-center gap-1">
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
                        <p className="text-gray-600 mb-4 line-clamp-2">
                          {tour.shortDescription}
                        </p>

                        <div className="space-y-2 mb-4">
                          <div className="flex items-center gap-2 text-sm text-gray-500">
                            <ClockIcon className="w-4 h-4" />
                            <span>{tour.duration}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-gray-500">
                            <MapPinIcon className="w-4 h-4" />
                            <span>{tour.category}</span>
                          </div>
                        </div>

                        <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                          <div>
                            <div className="flex items-center gap-1 text-2xl font-bold text-indigo-600">
                              <CurrencyRupeeIcon className="w-6 h-6" />
                              {lowestPrice.toLocaleString()}
                            </div>
                            <div className="text-xs text-gray-500">Starting price</div>
                          </div>
                          <ChevronRightIcon className="w-6 h-6 text-gray-400 group-hover:text-indigo-600 group-hover:translate-x-1 transition-all" />
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

      {/* Why Choose Us Section - SAME AS MAIN PAGE */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-10 md:mb-12"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 px-2">
              Why Choose Our {cityName} Tours?
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              {
                icon: UserGroupIcon,
                title: "Expert Guides",
                description: `Certified local ${cityName} guides with deep cultural knowledge`
              },
              {
                icon: CalendarIcon,
                title: "Flexible Booking",
                description: "Easy online booking with instant confirmation"
              },
              {
                icon: SparklesIcon,
                title: "Premium Experience",
                description: "Comfortable transport and personalized service"
              },
              {
                icon: StarIcon,
                title: "Highly Rated",
                description: "4.8★ average rating from 2000+ tourists"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all"
              >
                <feature.icon className="w-12 h-12 text-indigo-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - SAME AS MAIN PAGE */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 px-2">
              Ready to Explore {cityName}?
            </h2>
            <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 text-blue-100 max-w-2xl mx-auto px-4">
              Book your perfect {cityName} sightseeing tour today and create memories that last a lifetime
            </p>
            <a href="https://wa.me/917668570551" target="_blank" rel="noopener noreferrer" className="inline-block w-full sm:w-auto px-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white text-indigo-600 rounded-full font-semibold text-base sm:text-lg shadow-xl hover:shadow-2xl transition-all"
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
