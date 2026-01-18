'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Clock, Calendar, Sparkles, MapPin, Compass, Mountain, Building, Heart, Plane, Camera } from 'lucide-react';
import { blogPosts } from '@/utilis/blog';
import Link from 'next/link';
import Image from 'next/image';

export default function BlogClient() {
  const [mounted, setMounted] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');

  useEffect(() => {
    setMounted(true);
  }, []);

  const allPosts = blogPosts.filter(post => post && post.title && post.slug);
  const categories = ['all', ...new Set(allPosts.map(p => p.category).filter(Boolean))];

  const filteredPosts = allPosts.filter(post => {
    return activeCategory === 'all' || post.category === activeCategory;
  });

  // Category icons and colors
  const categoryStyles = {
    'Destinations': { icon: Compass, color: 'from-teal-500 to-emerald-600' },
    'Adventure': { icon: Mountain, color: 'from-orange-500 to-amber-600' },
    'Pilgrimage': { icon: Heart, color: 'from-rose-500 to-red-600' },
    'Heritage': { icon: Building, color: 'from-amber-500 to-yellow-600' },
    'Hill Station': { icon: Mountain, color: 'from-sky-500 to-blue-600' },
    'City Guide': { icon: Building, color: 'from-slate-600 to-gray-700' },
    'Travel Tips': { icon: Plane, color: 'from-blue-500 to-cyan-600' },
    'Wildlife': { icon: Camera, color: 'from-green-500 to-lime-600' },
    'default': { icon: Sparkles, color: 'from-gray-500 to-gray-700' }
  };

  const getStyle = (category) => categoryStyles[category] || categoryStyles.default;

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Background Image */}
      <section className="relative h-[500px] md:h-[550px] overflow-hidden">
        {/* Background Image */}
        <Image
          src="/images/packages/rajasthan.webp"
          alt="Travel Blog - Explore India"
          fill
          className="object-cover"
          priority
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />

        <div className="relative h-full max-w-7xl mx-auto px-4 flex flex-col justify-center items-center text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6"
          >
            <span className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md px-5 py-2.5 rounded-full text-white text-sm font-medium border border-white/20">
              <Sparkles className="w-4 h-4 text-amber-400" />
              Travel Journal
            </span>
          </motion.div>

          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="max-w-4xl"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Discover India&apos;s
              <span className="block text-amber-400">
                Hidden Treasures
              </span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              Travel guides, destination insights, and tips to plan your perfect journey across incredible India.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex justify-center gap-8 md:gap-12 mt-10 bg-white/10 backdrop-blur-md px-8 py-4 rounded-2xl border border-white/20"
          >
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-white">{allPosts.length}+</div>
              <div className="text-white/70 text-sm">Articles</div>
            </div>
            <div className="w-px bg-white/30" />
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-white">50+</div>
              <div className="text-white/70 text-sm">Destinations</div>
            </div>
            <div className="w-px bg-white/30" />
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-white">{categories.length - 1}</div>
              <div className="text-white/70 text-sm">Categories</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Filter - Floating Pills */}
      <section className="relative -mt-6 z-10 px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-2xl shadow-xl shadow-gray-200/50 p-4 border border-gray-100"
          >
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((cat) => {
                const style = getStyle(cat);
                const IconComponent = style.icon;
                return (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
                      activeCategory === cat
                        ? `bg-gradient-to-r ${style.color} text-white shadow-lg`
                        : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    <IconComponent className="w-4 h-4" />
                    {cat === 'all' ? 'All Posts' : cat}
                  </button>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts - Masonry Style Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Results Header */}
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">
                {activeCategory === 'all' ? 'Latest Stories' : activeCategory}
              </h2>
              <p className="text-gray-500 mt-1">{filteredPosts.length} articles to explore</p>
            </div>
          </div>

          {/* Masonry Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map((post, index) => (
              <BlogCard
                key={post.slug}
                post={post}
                index={index}
                variant={index % 5 === 0 ? 'large' : index % 3 === 0 ? 'horizontal' : 'default'}
                getStyle={getStyle}
              />
            ))}
          </div>

          {/* Empty State */}
          {filteredPosts.length === 0 && (
            <div className="text-center py-20">
              <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Compass className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">No stories found</h3>
              <p className="text-gray-500">Try selecting a different category</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-white/80 text-sm mb-6">
              <Plane className="w-4 h-4" />
              Ready to Travel?
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Turn These Stories Into Adventures
            </h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Book comfortable transport with Triveni Cabs and explore India with ease. Professional drivers, AC vehicles, and 24/7 support.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/sightseeing"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-8 py-4 rounded-xl font-bold hover:shadow-lg hover:shadow-purple-500/25 transition-all"
              >
                Explore Tours
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-white/10 text-white px-8 py-4 rounded-xl font-bold border border-white/20 hover:bg-white/20 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

// Blog Card Component with Variants
function BlogCard({ post, index, variant, getStyle }) {
  const style = getStyle(post.category);

  // Different card styles based on variant
  if (variant === 'large') {
    return (
      <motion.article
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.05 }}
        className="md:col-span-2 lg:col-span-2 group"
      >
        <Link href={`/blog/${post.slug}`} className="block">
          <div className="relative h-[400px] rounded-3xl overflow-hidden">
            <Image
              src={post.image || '/images/packages/manali.webp'}
              alt={post.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

            <div className="absolute bottom-0 left-0 right-0 p-8">
              <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r ${style.color} rounded-full text-white text-xs font-semibold mb-4`}>
                {post.category}
              </span>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 group-hover:text-purple-200 transition-colors">
                {post.title}
              </h3>
              <p className="text-gray-300 mb-4 line-clamp-2 max-w-2xl">{post.excerpt}</p>
              <div className="flex items-center gap-4 text-gray-400 text-sm">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4" />
                  {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4" />
                  {post.readTime}
                </span>
              </div>
            </div>
          </div>
        </Link>
      </motion.article>
    );
  }

  if (variant === 'horizontal') {
    return (
      <motion.article
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.05 }}
        className="group"
      >
        <Link href={`/blog/${post.slug}`} className="block">
          <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100">
            <div className="flex flex-col sm:flex-row">
              <div className="relative h-48 sm:h-auto sm:w-40 flex-shrink-0">
                <Image
                  src={post.image || '/images/packages/manali.webp'}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-5 flex flex-col justify-center">
                <span className={`inline-flex w-fit px-2.5 py-1 bg-gradient-to-r ${style.color} rounded-full text-white text-xs font-semibold mb-2`}>
                  {post.category}
                </span>
                <h3 className="font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-indigo-600 transition-colors">
                  {post.title}
                </h3>
                <div className="flex items-center gap-3 text-xs text-gray-500">
                  <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                  <span>{post.readTime}</span>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </motion.article>
    );
  }

  // Default card
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className="group"
    >
      <Link href={`/blog/${post.slug}`} className="block">
        <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100 h-full">
          <div className="relative h-52 overflow-hidden">
            <Image
              src={post.image || '/images/packages/manali.webp'}
              alt={post.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute top-4 left-4">
              <span className={`inline-flex px-3 py-1 bg-gradient-to-r ${style.color} rounded-full text-white text-xs font-semibold`}>
                {post.category}
              </span>
            </div>
          </div>

          <div className="p-5">
            <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {post.readTime}
              </span>
            </div>

            <h3 className="font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-indigo-600 transition-colors">
              {post.title}
            </h3>

            <p className="text-gray-500 text-sm line-clamp-2 mb-4">{post.excerpt}</p>

            <span className="inline-flex items-center gap-1 text-indigo-600 text-sm font-semibold group-hover:gap-2 transition-all">
              Read More <ArrowRight className="w-4 h-4" />
            </span>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
