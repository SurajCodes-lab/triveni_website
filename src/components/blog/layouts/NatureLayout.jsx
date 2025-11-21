'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Calendar, Clock, MapPin, Mountain, Thermometer, CloudSun,
  TreePine, ChevronRight, Camera, Phone, Compass
} from 'lucide-react';
import DynamicSidebar from '../DynamicSidebar';

export default function NatureLayout({ post, relatedLinks }) {
  const formattedDate = new Date(post.date || Date.now()).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 via-emerald-50 to-white">
      {/* Nature Hero Section */}
      <section className="relative min-h-[75vh] flex items-end overflow-hidden">
        {/* Background with nature gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-700 via-green-600 to-teal-500">
          {/* Mountain silhouette overlay */}
          <div className="absolute bottom-0 left-0 right-0 h-48 opacity-20">
            <svg viewBox="0 0 1440 320" className="w-full h-full" preserveAspectRatio="none">
              <path fill="currentColor" d="M0,160L48,176C96,192,192,224,288,213.3C384,203,480,149,576,128C672,107,768,117,864,144C960,171,1056,213,1152,218.7C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" />
            </svg>
          </div>
        </div>

        {/* Floating nature elements */}
        <motion.div
          animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute top-24 right-32 hidden lg:block"
        >
          <TreePine className="w-20 h-20 text-white/20" />
        </motion.div>
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 4, repeat: Infinity, delay: 1 }}
          className="absolute top-40 left-24 hidden lg:block"
        >
          <Mountain className="w-16 h-16 text-white/20" />
        </motion.div>

        {/* Hero Content */}
        <div className="relative z-20 w-full max-w-7xl mx-auto px-4 pb-16">
          {/* Breadcrumb */}
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 text-sm text-green-100 mb-6"
          >
            <Link href="/" className="hover:text-yellow-300 transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/blog" className="hover:text-yellow-300 transition-colors">Blog</Link>
            <ChevronRight className="w-4 h-4" />
            {post.city && relatedLinks?.cityTours && (
              <>
                <Link href={relatedLinks.cityTours} className="hover:text-yellow-300 transition-colors">
                  {post.city.charAt(0).toUpperCase() + post.city.slice(1)}
                </Link>
                <ChevronRight className="w-4 h-4" />
              </>
            )}
            <span className="text-white">Nature & Hills</span>
          </motion.nav>

          {/* Badge */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="inline-flex items-center gap-2 bg-white text-green-700 px-5 py-2 rounded-full text-sm font-bold mb-6 shadow-xl"
          >
            <Mountain className="w-4 h-4" />
            Hill Station / Nature
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight max-w-4xl"
            style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}
          >
            {post.title}
          </motion.h1>

          {/* Meta Info */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap items-center gap-4 text-green-100"
          >
            <span className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full backdrop-blur-sm">
              <Calendar className="w-4 h-4" />
              {formattedDate}
            </span>
            <span className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full backdrop-blur-sm">
              <Clock className="w-4 h-4" />
              {post.readTime}
            </span>
            <span className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full backdrop-blur-sm">
              <MapPin className="w-4 h-4" />
              {post.attractionData?.location || post.city}
            </span>
          </motion.div>
        </div>

        {/* Nature Wave */}
        <svg className="absolute bottom-0 left-0 right-0 text-green-50" viewBox="0 0 1440 100" fill="currentColor">
          <path d="M0,60 C240,100 480,20 720,60 C960,100 1200,20 1440,60 L1440,100 L0,100 Z" />
        </svg>
      </section>

      {/* Weather & Season Info */}
      <section className="bg-gradient-to-r from-green-100 to-emerald-100 border-b">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-white rounded-xl shadow-sm">
              <Thermometer className="w-6 h-6 mx-auto mb-2 text-green-600" />
              <p className="text-xs text-gray-500">Temperature</p>
              <p className="font-bold text-green-900">15°C - 25°C</p>
            </div>
            <div className="text-center p-4 bg-white rounded-xl shadow-sm">
              <CloudSun className="w-6 h-6 mx-auto mb-2 text-green-600" />
              <p className="text-xs text-gray-500">Best Season</p>
              <p className="font-bold text-green-900">
                {post.attractionData?.bestTimeToVisit?.season || 'Mar-Jun, Sep-Nov'}
              </p>
            </div>
            <div className="text-center p-4 bg-white rounded-xl shadow-sm">
              <Mountain className="w-6 h-6 mx-auto mb-2 text-green-600" />
              <p className="text-xs text-gray-500">Altitude</p>
              <p className="font-bold text-green-900">2,000m+</p>
            </div>
            <div className="text-center p-4 bg-white rounded-xl shadow-sm">
              <Compass className="w-6 h-6 mx-auto mb-2 text-green-600" />
              <p className="text-xs text-gray-500">Difficulty</p>
              <p className="font-bold text-green-900">Easy to Moderate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Content Area */}
          <main className="lg:col-span-8">
            {/* Featured Image with Photo Tips */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden mb-8 shadow-2xl"
            >
              <Image
                src={post.image || '/images/placeholder-nature.jpg'}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm text-white px-4 py-2 rounded-full flex items-center gap-2">
                <Camera className="w-4 h-4" />
                <span className="text-sm font-medium">Best Photo Spot</span>
              </div>
            </motion.div>

            {/* Nature Tips Box */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 mb-8 border border-green-200"
            >
              <h3 className="font-bold text-green-800 mb-3 flex items-center gap-2">
                <TreePine className="w-5 h-5" />
                Travel Tips for This Destination
              </h3>
              <ul className="grid md:grid-cols-2 gap-2 text-green-700 text-sm">
                <li className="flex items-start gap-2">
                  <span>✓</span> Carry warm clothes even in summer
                </li>
                <li className="flex items-start gap-2">
                  <span>✓</span> Book accommodation in advance
                </li>
                <li className="flex items-start gap-2">
                  <span>✓</span> Start early to avoid traffic
                </li>
                <li className="flex items-start gap-2">
                  <span>✓</span> Keep motion sickness pills handy
                </li>
              </ul>
            </motion.div>

            {/* Content */}
            <article className="bg-white rounded-2xl p-8 shadow-xl">
              <div
                className="prose prose-lg max-w-none
                  prose-headings:text-green-900 prose-headings:font-bold
                  prose-h2:text-3xl prose-h2:border-b-2 prose-h2:border-green-200 prose-h2:pb-3 prose-h2:mb-6
                  prose-h3:text-2xl prose-h3:text-green-800
                  prose-p:text-gray-700 prose-p:leading-relaxed
                  prose-a:text-green-600 prose-a:font-semibold hover:prose-a:text-green-800
                  prose-li:text-gray-700
                  prose-strong:text-green-900"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </article>

            {/* Hill Station Tour CTA */}
            {relatedLinks?.relatedTours?.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mt-8 bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-8 text-white"
              >
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <Mountain className="w-6 h-6" />
                  Plan Your Mountain Getaway
                </h3>
                <p className="mb-6 text-green-100">
                  Experience the beauty of hills with our comfortable road trips. Expert drivers who know every curve of the mountain roads.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  {relatedLinks.relatedTours.slice(0, 2).map((tour, index) => (
                    <Link
                      key={index}
                      href={tour.url}
                      className="bg-white/10 hover:bg-white/20 rounded-xl p-4 transition-all group"
                    >
                      <h4 className="font-bold text-lg group-hover:text-yellow-300">{tour.name}</h4>
                      <p className="text-green-200 text-sm">{tour.price} onwards</p>
                    </Link>
                  ))}
                </div>
                <div className="mt-6 flex flex-wrap gap-4">
                  <Link
                    href={relatedLinks.cityTours || '/sightseeing'}
                    className="bg-white text-green-700 px-6 py-3 rounded-xl font-bold hover:bg-green-50 transition-colors"
                  >
                    View All Tours →
                  </Link>
                  <a
                    href="tel:+917668570551"
                    className="bg-white/20 text-white px-6 py-3 rounded-xl font-bold hover:bg-white/30 transition-colors flex items-center gap-2"
                  >
                    <Phone className="w-4 h-4" />
                    Call Now
                  </a>
                </div>
              </motion.div>
            )}

            {/* Tags */}
            <div className="mt-8 flex flex-wrap gap-2">
              {post.tags?.map((tag, index) => (
                <span
                  key={index}
                  className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium hover:bg-green-200 transition-colors cursor-pointer"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </main>

          {/* Sidebar */}
          <aside className="lg:col-span-4">
            <DynamicSidebar post={post} relatedLinks={relatedLinks} theme="green" />
          </aside>
        </div>
      </div>
    </div>
  );
}
