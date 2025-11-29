'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Calendar, Clock, MapPin, Building2, Utensils, ShoppingBag,
  ChevronRight, Bus, Phone, Map, Hotel, Camera
} from 'lucide-react';
import DynamicSidebar from '../DynamicSidebar';

export default function CityGuideLayout({ post, relatedLinks }) {
  const formattedDate = new Date(post.date || Date.now()).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const cityHighlights = [
    { icon: Building2, label: 'Attractions', count: '20+' },
    { icon: Utensils, label: 'Food Spots', count: '50+' },
    { icon: ShoppingBag, label: 'Markets', count: '10+' },
    { icon: Hotel, label: 'Stay Options', count: '100+' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 via-pink-50 to-white">
      {/* City Hero Section with Image */}
      <section className="relative min-h-[80vh] flex items-end overflow-hidden">
        {/* Hero Background Image */}
        <div className="absolute inset-0">
          <Image
            src={post.heroImage || post.image}
            alt={post.title}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          {/* Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/40 via-transparent to-transparent" />
        </div>

        {/* Floating city elements */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="absolute top-24 right-24 hidden lg:block"
        >
          <Building2 className="w-20 h-20 text-white/20" />
        </motion.div>

        {/* Hero Content */}
        <div className="relative z-20 w-full max-w-7xl mx-auto px-4 pb-16">
          {/* Breadcrumb */}
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 text-sm text-white/90 mb-6 backdrop-blur-sm bg-white/10 w-fit px-4 py-2 rounded-full"
          >
            <Link href="/" className="hover:text-[#FACF2D] transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/blog" className="hover:text-[#FACF2D] transition-colors">Blog</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-[#FACF2D] font-semibold">{post.category || 'City Guide'}</span>
          </motion.nav>

          {/* Badge */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="inline-flex items-center gap-2 bg-white text-purple-700 px-5 py-2 rounded-full text-sm font-bold mb-6 shadow-xl"
          >
            <Map className="w-4 h-4" />
            Complete City Guide
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight max-w-4xl"
          >
            {post.title}
          </motion.h1>

          {/* Meta */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap items-center gap-4 text-purple-100"
          >
            <span className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
              <Calendar className="w-4 h-4" />
              {formattedDate}
            </span>
            <span className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
              <Clock className="w-4 h-4" />
              {post.readTime}
            </span>
            <span className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
              <MapPin className="w-4 h-4" />
              {post.attractionData?.location || post.city}
            </span>
          </motion.div>
        </div>

        {/* Wave */}
        <svg className="absolute bottom-0 left-0 right-0 text-purple-50" viewBox="0 0 1440 100" fill="currentColor">
          <path d="M0,60 C480,100 960,20 1440,60 L1440,100 L0,100 Z" />
        </svg>
      </section>

      {/* City Highlights Bar */}
      <section className="bg-white border-b shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {cityHighlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-4 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl"
              >
                <item.icon className="w-6 h-6 mx-auto mb-2 text-purple-600" />
                <p className="text-2xl font-bold text-purple-900">{item.count}</p>
                <p className="text-xs text-gray-500">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <main className="lg:col-span-8">
            {/* Quick Navigation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-xl p-6 mb-8"
            >
              <h3 className="font-bold text-purple-900 mb-4">In This Guide</h3>
              <div className="flex flex-wrap gap-2">
                {['Top Attractions', 'Where to Eat', 'Shopping', 'Getting Around', 'Where to Stay', 'Local Tips'].map((item, i) => (
                  <span key={i} className="bg-white text-purple-700 px-4 py-2 rounded-full text-sm font-medium shadow-sm">
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Content */}
            <article className="bg-white rounded-2xl p-8 shadow-xl">
              <div
                className="prose prose-lg max-w-none
                  prose-headings:text-purple-900 prose-headings:font-bold
                  prose-h2:text-3xl prose-h2:border-b-2 prose-h2:border-purple-200 prose-h2:pb-3
                  prose-h3:text-2xl prose-h3:text-purple-800
                  prose-p:text-gray-700 prose-p:leading-relaxed
                  prose-a:text-purple-600 prose-a:font-semibold
                  prose-strong:text-purple-900"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </article>

            {/* City Tours CTA */}
            {relatedLinks?.relatedTours?.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mt-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-white"
              >
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <Bus className="w-6 h-6" />
                  Explore {post.city ? post.city.charAt(0).toUpperCase() + post.city.slice(1) : 'India'} with Us
                </h3>
                <p className="mb-6 text-purple-100">
                  Skip the hassle of public transport. Our guided tours cover all major attractions with comfortable AC vehicles.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  {relatedLinks.relatedTours.slice(0, 2).map((tour, index) => (
                    <Link
                      key={index}
                      href={tour.url}
                      className="bg-white/10 hover:bg-white/20 rounded-xl p-4 transition-all"
                    >
                      <h4 className="font-bold">{tour.name}</h4>
                      <p className="text-purple-200 text-sm">{tour.price}</p>
                    </Link>
                  ))}
                </div>
                <div className="mt-6 flex flex-wrap gap-4">
                  <Link
                    href={relatedLinks.cityTours || '/sightseeing'}
                    className="bg-white text-purple-700 px-6 py-3 rounded-xl font-bold hover:bg-purple-50"
                  >
                    View All Tours →
                  </Link>
                  <a href="tel:+917668570551" className="bg-white/20 px-6 py-3 rounded-xl font-bold flex items-center gap-2">
                    <Phone className="w-4 h-4" /> Call Now
                  </a>
                </div>
              </motion.div>
            )}

            {/* Tags */}
            <div className="mt-8 flex flex-wrap gap-2">
              {post.tags?.map((tag, index) => (
                <span key={index} className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium">
                  #{tag}
                </span>
              ))}
            </div>
          </main>

          <aside className="lg:col-span-4">
            <DynamicSidebar post={post} relatedLinks={relatedLinks} theme="purple" />
          </aside>
        </div>
      </div>
    </div>
  );
}
