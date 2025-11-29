'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Calendar, Clock, MapPin, Ticket, Camera, Crown,
  Castle, History, ChevronRight, Star, Phone
} from 'lucide-react';
import DynamicSidebar from '../DynamicSidebar';

export default function FortPalaceLayout({ post, relatedLinks }) {
  const [activeTab, setActiveTab] = useState('overview');

  const formattedDate = new Date(post.date || Date.now()).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const tabs = [
    { id: 'overview', label: 'Overview', icon: Castle },
    { id: 'history', label: 'History', icon: History },
    { id: 'visiting', label: 'Visit Info', icon: Ticket },
    { id: 'photos', label: 'Photo Spots', icon: Camera },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-orange-50 to-white">
      {/* Royal Hero Section with Image */}
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
          <div className="absolute inset-0 bg-gradient-to-r from-amber-900/40 via-transparent to-transparent" />
          {/* Golden accent lines */}
          <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-yellow-400 via-amber-300 to-yellow-400" />
        </div>

        {/* Floating crown icon */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="absolute top-20 right-20 hidden lg:block"
        >
          <Crown className="w-24 h-24 text-yellow-400/30" />
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
            <span className="text-[#FACF2D] font-semibold">{post.category || 'Fort & Palace'}</span>
          </motion.nav>

          {/* Badge */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-amber-500 text-amber-900 px-5 py-2 rounded-full text-sm font-bold mb-6 shadow-xl"
          >
            <Crown className="w-4 h-4" />
            Royal Heritage Site
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
            className="flex flex-wrap items-center gap-4 text-amber-100"
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

        {/* Wave Bottom */}
        <svg className="absolute bottom-0 left-0 right-0 text-amber-50" viewBox="0 0 1440 100" fill="currentColor">
          <path d="M0,50 C360,100 1080,0 1440,50 L1440,100 L0,100 Z" />
        </svg>
      </section>

      {/* Quick Info Bar */}
      {post.attractionData && (
        <section className="bg-white border-b shadow-sm">
          <div className="max-w-7xl mx-auto px-4 py-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center p-3 bg-amber-50 rounded-xl">
                <Ticket className="w-5 h-5 mx-auto mb-1 text-amber-600" />
                <p className="text-xs text-gray-500">Entry Fee</p>
                <p className="font-bold text-amber-900">
                  {post.attractionData.entryFee?.indian || 'Check locally'}
                </p>
              </div>
              <div className="text-center p-3 bg-amber-50 rounded-xl">
                <Clock className="w-5 h-5 mx-auto mb-1 text-amber-600" />
                <p className="text-xs text-gray-500">Timings</p>
                <p className="font-bold text-amber-900">
                  {post.attractionData.timings?.open || '9 AM'} - {post.attractionData.timings?.close || '5 PM'}
                </p>
              </div>
              <div className="text-center p-3 bg-amber-50 rounded-xl">
                <Calendar className="w-5 h-5 mx-auto mb-1 text-amber-600" />
                <p className="text-xs text-gray-500">Best Time</p>
                <p className="font-bold text-amber-900">
                  {post.attractionData.bestTimeToVisit?.season || 'Oct-Mar'}
                </p>
              </div>
              <div className="text-center p-3 bg-amber-50 rounded-xl">
                <Clock className="w-5 h-5 mx-auto mb-1 text-amber-600" />
                <p className="text-xs text-gray-500">Time Needed</p>
                <p className="font-bold text-amber-900">
                  {post.attractionData.timeNeeded || '2-3 hours'}
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
            {/* Tab Navigation */}
            <div className="flex overflow-x-auto gap-2 mb-8 pb-2">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-5 py-3 rounded-xl font-semibold whitespace-nowrap transition-all ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-amber-50 border border-amber-200'
                  }`}
                >
                  <tab.icon className="w-4 h-4" />
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Content */}
            <article className="bg-white rounded-2xl p-8 shadow-xl border border-amber-100">
              <div
                className="prose prose-lg max-w-none
                  prose-headings:text-amber-900 prose-headings:font-bold
                  prose-h2:text-3xl prose-h2:border-b-2 prose-h2:border-amber-200 prose-h2:pb-3 prose-h2:mb-6
                  prose-h3:text-2xl prose-h3:text-amber-800
                  prose-p:text-gray-700 prose-p:leading-relaxed
                  prose-a:text-amber-600 prose-a:font-semibold hover:prose-a:text-amber-800
                  prose-li:text-gray-700
                  prose-strong:text-amber-900"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </article>

            {/* Book Tour CTA */}
            {relatedLinks?.relatedTours?.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mt-8 bg-gradient-to-r from-amber-600 to-orange-600 rounded-2xl p-8 text-white"
              >
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <Crown className="w-6 h-6" />
                  Experience This Royal Heritage
                </h3>
                <p className="mb-6 text-amber-100">
                  Book a guided tour and explore the magnificent architecture and rich history with our expert guides.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  {relatedLinks.relatedTours.slice(0, 2).map((tour, index) => (
                    <Link
                      key={index}
                      href={tour.url}
                      className="bg-white/10 hover:bg-white/20 rounded-xl p-4 transition-all group"
                    >
                      <h4 className="font-bold text-lg group-hover:text-yellow-300">{tour.name}</h4>
                      <p className="text-amber-200 text-sm">{tour.price} onwards</p>
                    </Link>
                  ))}
                </div>
                <div className="mt-6 flex flex-wrap gap-4">
                  <Link
                    href={relatedLinks.cityTours || '/sightseeing'}
                    className="bg-yellow-400 text-amber-900 px-6 py-3 rounded-xl font-bold hover:bg-yellow-300 transition-colors"
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
                  className="bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-medium hover:bg-amber-200 transition-colors cursor-pointer"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </main>

          {/* Sidebar */}
          <aside className="lg:col-span-4">
            <DynamicSidebar post={post} relatedLinks={relatedLinks} theme="amber" />
          </aside>
        </div>
      </div>
    </div>
  );
}
