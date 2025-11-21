'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Calendar, Clock, MapPin, Sun, Moon, Bell,
  Heart, ChevronRight, Flame, Phone, Users
} from 'lucide-react';
import DynamicSidebar from '../DynamicSidebar';

export default function TempleLayout({ post, relatedLinks }) {
  const formattedDate = new Date(post.date || Date.now()).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 via-amber-50 to-white">
      {/* Spiritual Hero Section */}
      <section className="relative min-h-[70vh] flex items-end overflow-hidden">
        {/* Background with spiritual gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-600 via-amber-600 to-yellow-500">
          {/* Om pattern overlay */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Ctext x='50' y='60' font-size='40' text-anchor='middle' fill='white'%3E🕉️%3C/text%3E%3C/svg%3E")`,
              backgroundSize: '100px 100px',
            }} />
          </div>

          {/* Decorative top border */}
          <div className="absolute top-0 left-0 right-0 h-3 bg-gradient-to-r from-red-600 via-orange-500 to-yellow-400" />
        </div>

        {/* Floating elements */}
        <motion.div
          animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute top-32 right-20 text-6xl hidden lg:block opacity-30"
        >
          🪔
        </motion.div>
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity, delay: 1 }}
          className="absolute top-48 left-20 text-5xl hidden lg:block opacity-30"
        >
          🌸
        </motion.div>

        {/* Hero Content */}
        <div className="relative z-20 w-full max-w-7xl mx-auto px-4 pb-16">
          {/* Breadcrumb */}
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 text-sm text-orange-100 mb-6"
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
            <span className="text-white">Temple & Spiritual</span>
          </motion.nav>

          {/* Badge */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="inline-flex items-center gap-2 bg-white text-orange-600 px-5 py-2 rounded-full text-sm font-bold mb-6 shadow-xl"
          >
            <Flame className="w-4 h-4" />
            Sacred Pilgrimage Site
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
            className="flex flex-wrap items-center gap-4 text-orange-100"
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

        {/* Decorative Wave */}
        <svg className="absolute bottom-0 left-0 right-0 text-orange-50" viewBox="0 0 1440 100" fill="currentColor">
          <path d="M0,40 Q360,80 720,40 T1440,40 L1440,100 L0,100 Z" />
        </svg>
      </section>

      {/* Darshan Timings Bar */}
      {post.attractionData && (
        <section className="bg-gradient-to-r from-orange-100 to-amber-100 border-b">
          <div className="max-w-7xl mx-auto px-4 py-6">
            <h3 className="text-center font-bold text-orange-800 mb-4 flex items-center justify-center gap-2">
              <Bell className="w-5 h-5" />
              Darshan Timings & Information
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                <Sun className="w-6 h-6 mx-auto mb-2 text-orange-500" />
                <p className="text-xs text-gray-500">Morning Darshan</p>
                <p className="font-bold text-orange-900">
                  {post.attractionData.timings?.open || '5:00 AM'}
                </p>
              </div>
              <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                <Moon className="w-6 h-6 mx-auto mb-2 text-orange-500" />
                <p className="text-xs text-gray-500">Evening Darshan</p>
                <p className="font-bold text-orange-900">
                  {post.attractionData.timings?.close || '9:00 PM'}
                </p>
              </div>
              <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                <Heart className="w-6 h-6 mx-auto mb-2 text-orange-500" />
                <p className="text-xs text-gray-500">Entry Fee</p>
                <p className="font-bold text-orange-900">
                  {post.attractionData.entryFee?.indian || 'Free Entry'}
                </p>
              </div>
              <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                <Users className="w-6 h-6 mx-auto mb-2 text-orange-500" />
                <p className="text-xs text-gray-500">Best Time</p>
                <p className="font-bold text-orange-900">
                  {post.attractionData.bestTimeToVisit?.season || 'Year Round'}
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Content Area */}
          <main className="lg:col-span-8">
            {/* Featured Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden mb-8 shadow-2xl"
            >
              <Image
                src={post.image || '/images/placeholder-temple.jpg'}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-orange-900/50 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-white text-lg font-medium bg-black/30 backdrop-blur-sm px-4 py-2 rounded-lg inline-block">
                  📿 {post.excerpt?.slice(0, 100)}...
                </p>
              </div>
            </motion.div>

            {/* Spiritual Quote Box */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-gradient-to-r from-orange-100 to-amber-100 rounded-xl p-6 mb-8 border-l-4 border-orange-500"
            >
              <p className="text-orange-800 italic text-lg text-center">
                "A pilgrimage to a sacred temple is a journey of the soul, where faith meets divine grace."
              </p>
            </motion.div>

            {/* Content */}
            <article className="bg-white rounded-2xl p-8 shadow-xl">
              <div
                className="prose prose-lg max-w-none
                  prose-headings:text-orange-900 prose-headings:font-bold
                  prose-h2:text-3xl prose-h2:border-b-2 prose-h2:border-orange-200 prose-h2:pb-3 prose-h2:mb-6
                  prose-h3:text-2xl prose-h3:text-orange-800
                  prose-p:text-gray-700 prose-p:leading-relaxed
                  prose-a:text-orange-600 prose-a:font-semibold hover:prose-a:text-orange-800
                  prose-li:text-gray-700
                  prose-strong:text-orange-900"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </article>

            {/* Pilgrimage Tour CTA */}
            {relatedLinks?.relatedTours?.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mt-8 bg-gradient-to-r from-orange-500 to-amber-500 rounded-2xl p-8 text-white"
              >
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  🙏 Plan Your Pilgrimage
                </h3>
                <p className="mb-6 text-orange-100">
                  Let us handle your travel while you focus on your spiritual journey. Comfortable transport with experienced drivers.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  {relatedLinks.relatedTours.slice(0, 2).map((tour, index) => (
                    <Link
                      key={index}
                      href={tour.url}
                      className="bg-white/10 hover:bg-white/20 rounded-xl p-4 transition-all group"
                    >
                      <h4 className="font-bold text-lg group-hover:text-yellow-300">{tour.name}</h4>
                      <p className="text-orange-200 text-sm">{tour.price} onwards</p>
                    </Link>
                  ))}
                </div>
                <div className="mt-6 flex flex-wrap gap-4">
                  <Link
                    href={relatedLinks.cityTours || '/sightseeing'}
                    className="bg-white text-orange-600 px-6 py-3 rounded-xl font-bold hover:bg-orange-50 transition-colors"
                  >
                    View All Tours →
                  </Link>
                  <a
                    href="https://wa.me/917668570551"
                    className="bg-green-500 text-white px-6 py-3 rounded-xl font-bold hover:bg-green-600 transition-colors flex items-center gap-2"
                  >
                    WhatsApp Booking
                  </a>
                </div>
              </motion.div>
            )}

            {/* Tags */}
            <div className="mt-8 flex flex-wrap gap-2">
              {post.tags?.map((tag, index) => (
                <span
                  key={index}
                  className="bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-medium hover:bg-orange-200 transition-colors cursor-pointer"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </main>

          {/* Sidebar */}
          <aside className="lg:col-span-4">
            <DynamicSidebar post={post} relatedLinks={relatedLinks} theme="orange" />
          </aside>
        </div>
      </div>
    </div>
  );
}
