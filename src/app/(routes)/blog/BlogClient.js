'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Clock, Calendar, Sparkles, MapPin, Eye, TrendingUp, Compass, Mountain, Building, Heart } from 'lucide-react';
import { blogPosts } from '@/utilis/blog';
import Link from 'next/link';
import Image from 'next/image';

export default function BlogClient() {
  const [mounted, setMounted] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const allPosts = blogPosts.filter(post => post && post.title && post.slug);
  const categories = ['all', ...new Set(allPosts.map(p => p.category).filter(Boolean))];

  const filteredPosts = allPosts.filter(post => {
    return activeCategory === 'all' || post.category === activeCategory;
  });

  // Get featured posts (first 4)
  const featuredPosts = filteredPosts.slice(0, 4);
  const remainingPosts = filteredPosts.slice(4);

  // Category icons
  const categoryIcons = {
    'Destinations': Compass,
    'Adventure': Mountain,
    'Pilgrimage': Heart,
    'Heritage': Building,
    'Hill Station': Mountain,
    'City Guide': Building,
    'default': Sparkles
  };

  const getCategoryIcon = (category) => categoryIcons[category] || categoryIcons.default;

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[150px] animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[150px] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-pink-600/10 rounded-full blur-[150px] animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Floating Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex justify-center mb-8"
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 px-5 py-2 rounded-full backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-purple-400" />
              <span className="text-sm font-medium text-purple-300">Travel Stories & Inspiration</span>
            </div>
          </motion.div>

          {/* Main Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-center max-w-4xl mx-auto mb-12"
          >
            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-[0.95]">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-white">
                Discover India&apos;s
              </span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400">
                Hidden Treasures
              </span>
            </h1>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Explore curated travel guides, insider tips, and breathtaking destinations that will inspire your next adventure across incredible India.
            </p>
          </motion.div>

          {/* Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-8 mb-16"
          >
            {[
              { icon: Eye, value: `${allPosts.length}+`, label: 'Articles' },
              { icon: MapPin, value: '50+', label: 'Destinations' },
              { icon: TrendingUp, value: `${categories.length - 1}`, label: 'Categories' },
            ].map((stat, i) => (
              <div key={i} className="flex items-center gap-3 px-6 py-3 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                  <stat.icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-xs text-gray-500">{stat.label}</div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Category Selector - Glassmorphism Pills */}
      <section className="relative px-4 mb-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-3"
          >
            {categories.map((cat, i) => {
              const IconComponent = getCategoryIcon(cat);
              return (
                <motion.button
                  key={cat}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 + i * 0.05 }}
                  onClick={() => setActiveCategory(cat)}
                  className={`group flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeCategory === cat
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/25'
                      : 'bg-white/5 text-gray-400 border border-white/10 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  <IconComponent className="w-4 h-4" />
                  {cat === 'all' ? 'All Stories' : cat}
                </motion.button>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Featured Posts - Bento Grid */}
      {featuredPosts.length > 0 && (
        <section className="relative px-4 mb-16">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
              {/* Large Featured Card */}
              {featuredPosts[0] && (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="lg:col-span-7 lg:row-span-2"
                >
                  <FeaturedCard post={featuredPosts[0]} large />
                </motion.div>
              )}

              {/* Right Column Cards */}
              <div className="lg:col-span-5 grid grid-cols-1 gap-4">
                {featuredPosts.slice(1, 3).map((post, i) => (
                  <motion.div
                    key={post.slug}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * (i + 1) }}
                  >
                    <FeaturedCard post={post} />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* All Posts Section */}
      <section className="relative px-4 pb-20">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center justify-between mb-10"
          >
            <div>
              <h2 className="text-3xl font-bold text-white mb-2">
                {activeCategory === 'all' ? 'All Stories' : activeCategory}
              </h2>
              <p className="text-gray-500">{filteredPosts.length} articles to explore</p>
            </div>
          </motion.div>

          {/* Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {remainingPosts.map((post, i) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                onMouseEnter={() => setHoveredCard(post.slug)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <BlogCard post={post} isHovered={hoveredCard === post.slug} />
              </motion.div>
            ))}
          </div>

          {/* Empty State */}
          {filteredPosts.length === 0 && (
            <div className="text-center py-20">
              <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-6 border border-white/10">
                <Compass className="w-8 h-8 text-gray-500" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">No stories found</h3>
              <p className="text-gray-500">Try selecting a different category</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative px-4 pb-20">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative bg-gradient-to-br from-purple-900/50 to-pink-900/50 rounded-[2rem] p-12 md:p-16 overflow-hidden border border-white/10"
          >
            {/* Background Effects */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-pink-500/20 rounded-full blur-3xl" />

            <div className="relative text-center">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl shadow-purple-500/25"
              >
                <Compass className="w-8 h-8 text-white" />
              </motion.div>

              <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
                Start Your Journey
              </h2>
              <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto">
                Ready to explore India? Book comfortable transport with Triveni Cabs and turn these stories into your own adventures.
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/sightseeing"
                  className="group inline-flex items-center gap-2 bg-white text-gray-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors"
                >
                  Explore Tours
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-white/10 text-white px-8 py-4 rounded-xl font-bold text-lg border border-white/20 hover:bg-white/20 transition-colors"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

// Featured Card Component
function FeaturedCard({ post, large = false }) {
  return (
    <Link href={`/blog/${post.slug}`} className="block h-full">
      <article className={`group relative overflow-hidden rounded-3xl h-full ${large ? 'min-h-[500px]' : 'min-h-[240px]'}`}>
        {/* Background Image */}
        <Image
          src={post.image || '/images/packages/manali.webp'}
          alt={post.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

        {/* Hover Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/0 via-transparent to-pink-600/0 group-hover:from-purple-600/20 group-hover:to-pink-600/20 transition-all duration-500" />

        {/* Content */}
        <div className="absolute inset-0 p-6 flex flex-col justify-end">
          {/* Category Badge */}
          <span className="inline-flex items-center gap-1.5 w-fit px-3 py-1.5 bg-white/10 backdrop-blur-md rounded-full text-xs font-semibold text-white border border-white/20 mb-4">
            <Sparkles className="w-3 h-3" />
            {post.category}
          </span>

          {/* Title */}
          <h3 className={`font-bold text-white mb-3 group-hover:text-purple-200 transition-colors ${large ? 'text-2xl md:text-3xl' : 'text-lg'}`}>
            {post.title}
          </h3>

          {/* Excerpt - Only on large card */}
          {large && (
            <p className="text-gray-300 mb-4 line-clamp-2 max-w-xl">
              {post.excerpt}
            </p>
          )}

          {/* Meta */}
          <div className="flex items-center gap-4 text-sm text-gray-400">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              {post.readTime}
            </span>
          </div>
        </div>

        {/* Corner Decoration */}
        <div className="absolute top-4 right-4 w-10 h-10 border-t-2 border-r-2 border-white/20 rounded-tr-xl group-hover:border-purple-400/50 transition-colors" />
      </article>
    </Link>
  );
}

// Blog Card Component
function BlogCard({ post, isHovered }) {
  return (
    <Link href={`/blog/${post.slug}`} className="block h-full">
      <article className="group relative bg-white/5 rounded-2xl overflow-hidden border border-white/10 hover:border-purple-500/50 transition-all duration-500 h-full backdrop-blur-sm">
        {/* Hover Glow */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute -inset-px bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-purple-500/20 rounded-2xl blur-xl"
            />
          )}
        </AnimatePresence>

        <div className="relative">
          {/* Image */}
          <div className="relative h-48 overflow-hidden">
            <Image
              src={post.image || '/images/packages/manali.webp'}
              alt={post.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] to-transparent" />

            {/* Category Badge */}
            <div className="absolute top-4 left-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-black/50 backdrop-blur-md rounded-full text-xs font-semibold text-white border border-white/10">
                {post.category}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="p-5">
            {/* Meta */}
            <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
              </span>
              <span className="w-1 h-1 bg-gray-600 rounded-full" />
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {post.readTime}
              </span>
            </div>

            {/* Title */}
            <h3 className="font-bold text-white mb-2 line-clamp-2 group-hover:text-purple-300 transition-colors">
              {post.title}
            </h3>

            {/* Excerpt */}
            <p className="text-gray-500 text-sm line-clamp-2 mb-4">
              {post.excerpt}
            </p>

            {/* Read More */}
            <div className="flex items-center gap-2 text-purple-400 text-sm font-semibold group-hover:text-purple-300">
              <span>Read Story</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
}
