'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion';
import { ArrowRight, MapPin, Clock, Calendar, Star, Compass, Plane, Camera, Mountain } from 'lucide-react';
import BlogCard from '@/components/blog/BlogCard';
import WhatsAppCTA from '@/components/blog/WhatsAppCTA';
import { blogPosts } from '@/utilis/blog';
import Link from 'next/link';
import Image from 'next/image';

export default function BlogClient() {
  const [mounted, setMounted] = useState(false);
  const heroRef = useRef(null);
  const gridRef = useRef(null);
  const isGridInView = useInView(gridRef, { once: true, amount: 0.1 });

  const { scrollY } = useScroll();
  const smoothScrollY = useSpring(scrollY, { stiffness: 100, damping: 30 });
  const heroY = useTransform(smoothScrollY, [0, 500], [0, 150]);
  const heroOpacity = useTransform(smoothScrollY, [0, 400], [1, 0]);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Get featured post and regular posts
  const featuredPost = blogPosts.find(post => post && post.featured);
  const latestPosts = blogPosts.filter(post => post && post.title && post.slug).slice(0, 6);
  const allPosts = blogPosts.filter(post => post && post.title && post.slug);

  // Category colors for tags
  const categoryColors = {
    'travel-tips': 'from-blue-500 to-cyan-500',
    'destination-guides': 'from-emerald-500 to-teal-500',
    'road-trips': 'from-orange-500 to-amber-500',
    'adventure': 'from-purple-500 to-pink-500',
    'culture': 'from-rose-500 to-red-500',
    'default': 'from-indigo-500 to-violet-500'
  };

  const getCategoryColor = (category) => {
    const slug = category?.toLowerCase().replace(' ', '-') || 'default';
    return categoryColors[slug] || categoryColors.default;
  };

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Hero Section - Clean Modern Design */}
      <motion.section
        ref={heroRef}
        style={{ y: heroY, opacity: heroOpacity }}
        className="relative min-h-[70vh] md:min-h-[80vh] flex items-center justify-center overflow-hidden"
      >
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900">
          {/* Animated Gradient Orbs */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-yellow-400/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-indigo-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />

          {/* Subtle Grid Pattern */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
              backgroundSize: '50px 50px'
            }}
          />
        </div>

        {/* Floating Icons */}
        {mounted && (
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[
              { Icon: Compass, x: '10%', y: '20%', delay: 0 },
              { Icon: Plane, x: '85%', y: '25%', delay: 0.5 },
              { Icon: Camera, x: '15%', y: '70%', delay: 1 },
              { Icon: Mountain, x: '80%', y: '65%', delay: 1.5 },
              { Icon: MapPin, x: '50%', y: '15%', delay: 0.8 },
              { Icon: Star, x: '90%', y: '45%', delay: 1.2 },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="absolute text-white/10"
                style={{ left: item.x, top: item.y }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  y: [0, -20, 0],
                }}
                transition={{
                  opacity: { delay: item.delay, duration: 0.5 },
                  scale: { delay: item.delay, duration: 0.5 },
                  y: { delay: item.delay, duration: 4, repeat: Infinity, ease: "easeInOut" }
                }}
              >
                <item.Icon className="w-8 h-8 md:w-12 md:h-12" />
              </motion.div>
            ))}
          </div>
        )}

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-5 py-2 rounded-full mb-6 border border-white/20"
          >
            <span className="w-2 h-2 bg-[#FACF2D] rounded-full animate-pulse" />
            <span className="text-white/90 text-sm font-medium">Travel Stories & Guides</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
          >
            Discover India&apos;s
            <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-[#FACF2D] via-amber-400 to-orange-400">
              Hidden Treasures
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Expert travel guides, insider tips, and unforgettable stories
            to inspire your next Indian adventure
          </motion.p>

          {/* Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-8 md:gap-12"
          >
            {[
              { number: `${allPosts.length}+`, label: 'Articles' },
              { number: '50+', label: 'Destinations' },
              { number: '10K+', label: 'Readers' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-[#FACF2D]">{stat.number}</div>
                <div className="text-sm text-white/60 mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2"
            >
              <motion.div className="w-1.5 h-3 bg-[#FACF2D] rounded-full" />
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Featured Article Section */}
      {featuredPost && (
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-10"
            >
              <div className="w-1 h-8 bg-gradient-to-b from-[#FACF2D] to-orange-500 rounded-full" />
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Featured Story</h2>
            </motion.div>

            {/* Featured Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Link href={`/blog/${featuredPost.slug}`}>
                <div className="group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500">
                  <div className="grid md:grid-cols-2 gap-0">
                    {/* Image Side */}
                    <div className="relative h-72 md:h-[450px] overflow-hidden">
                      {featuredPost.image ? (
                        <Image
                          src={featuredPost.image}
                          alt={`${featuredPost.title} - Travel guide by Triveni Cabs`}
                          fill
                          sizes="(max-width: 768px) 100vw, 50vw"
                          className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                          <Camera className="w-20 h-20 text-white/50" />
                        </div>
                      )}

                      {/* Featured Badge */}
                      <div className="absolute top-6 left-6">
                        <span className="inline-flex items-center gap-2 bg-[#FACF2D] text-black px-4 py-2 rounded-full font-bold text-sm shadow-lg">
                          <Star className="w-4 h-4" />
                          Featured
                        </span>
                      </div>
                    </div>

                    {/* Content Side */}
                    <div className="p-8 md:p-12 flex flex-col justify-center">
                      {/* Category */}
                      <span className={`inline-flex w-fit px-4 py-1.5 rounded-full text-white text-sm font-medium bg-gradient-to-r ${getCategoryColor(featuredPost.category)} mb-6`}>
                        {featuredPost.category}
                      </span>

                      {/* Title */}
                      <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 group-hover:text-indigo-600 transition-colors leading-tight">
                        {featuredPost.title}
                      </h3>

                      {/* Excerpt */}
                      <p className="text-gray-600 text-lg leading-relaxed mb-6 line-clamp-3">
                        {featuredPost.excerpt}
                      </p>

                      {/* Meta Info */}
                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-8">
                        <span className="flex items-center gap-1.5">
                          <Calendar className="w-4 h-4" />
                          {new Date(featuredPost.date).toLocaleDateString('en-US', {
                            month: 'short',
                            day: 'numeric',
                            year: 'numeric'
                          })}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Clock className="w-4 h-4" />
                          {featuredPost.readTime}
                        </span>
                      </div>

                      {/* CTA Button */}
                      <div className="flex items-center gap-2 text-indigo-600 font-semibold group-hover:gap-4 transition-all">
                        Read Full Story
                        <ArrowRight className="w-5 h-5" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          </div>
        </section>
      )}

      {/* Latest Articles Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium mb-4">
              Latest Articles
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Fresh Stories to Inspire You
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Dive into our newest travel guides, tips, and adventures from across India
            </p>
          </motion.div>

          {/* Blog Grid */}
          <motion.div
            ref={gridRef}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {allPosts.map((post, index) => (
              <motion.div
                key={post.id || post.slug || index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{
                  delay: Math.min(index * 0.05, 0.3),
                  duration: 0.4
                }}
              >
                <Link href={`/blog/${post.slug}`}>
                  <article className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-transparent hover:shadow-xl transition-all duration-300">
                    {/* Image */}
                    <div className="relative h-56 overflow-hidden">
                      {post.image ? (
                        <Image
                          src={post.image}
                          alt={`${post.title} - Travel blog by Triveni Cabs`}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          className="object-cover transform group-hover:scale-110 transition-transform duration-500"
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                          <Camera className="w-12 h-12 text-gray-400" />
                        </div>
                      )}

                      {/* Category Badge */}
                      <div className="absolute top-4 left-4">
                        <span className={`inline-block px-3 py-1 rounded-full text-white text-xs font-medium bg-gradient-to-r ${getCategoryColor(post.category)}`}>
                          {post.category}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      {/* Meta */}
                      <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5" />
                          {new Date(post.date).toLocaleDateString('en-US', {
                            month: 'short',
                            day: 'numeric'
                          })}
                        </span>
                        <span className="w-1 h-1 bg-gray-300 rounded-full" />
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" />
                          {post.readTime}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-indigo-600 transition-colors">
                        {post.title}
                      </h3>

                      {/* Excerpt */}
                      <p className="text-gray-600 text-sm line-clamp-2 mb-4">
                        {post.excerpt}
                      </p>

                      {/* Read More Link */}
                      <div className="flex items-center gap-1 text-indigo-600 text-sm font-medium group-hover:gap-2 transition-all">
                        Read article
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </article>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* WhatsApp CTA */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <WhatsAppCTA
              message="Hi! I read your blog and I'm interested in planning a trip. Can you help me?"
              buttonText="Plan Your Trip with Us"
              variant="primary"
            />
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#FACF2D]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Ready for Your Next
              <span className="block text-[#FACF2D] mt-2">Adventure?</span>
            </h2>

            <p className="text-lg text-white/70 mb-10 max-w-2xl mx-auto">
              Let us help you plan the perfect trip. Comfortable vehicles, professional drivers,
              and 24/7 support for an unforgettable journey.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/services">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center justify-center gap-2 bg-[#FACF2D] text-black px-8 py-4 rounded-full font-bold hover:bg-yellow-400 transition-all shadow-lg shadow-yellow-500/25"
                >
                  Explore Services
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </Link>

              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full font-bold hover:bg-white/20 transition-all border border-white/20"
                >
                  Contact Us
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
