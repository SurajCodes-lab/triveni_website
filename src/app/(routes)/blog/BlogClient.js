'use client';

import { useState, useEffect, useMemo, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useInView, AnimatePresence } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Search, Filter, TrendingUp, BookOpen, ChevronRight, Sparkles, Globe, Map, Compass } from 'lucide-react';
import BlogCard from '@/components/blog/BlogCard';
import WhatsAppCTA from '@/components/blog/WhatsAppCTA';
import { blogPosts, blogCategories } from '@/utilis/blog';
import Link from 'next/link';

export default function BlogClient() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [mounted, setMounted] = useState(false);
  const [featuredImageError, setFeaturedImageError] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef(null);
  const gridRef = useRef(null);
  const isGridInView = useInView(gridRef, { once: true, amount: 0.2 });

  const { scrollY } = useScroll();
  const smoothScrollY = useSpring(scrollY, { stiffness: 100, damping: 30 });
  const heroOpacity = useTransform(smoothScrollY, [0, 300], [1, 0]);
  const heroScale = useTransform(smoothScrollY, [0, 300], [1, 0.95]);

  useEffect(() => {
    setMounted(true);

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Filter posts based on search and category
  const filteredPosts = useMemo(() => {
    return blogPosts.filter(post => {
      // Safety check: ensure post exists and has minimum required properties
      if (!post || !post.title || !post.slug) {
        return false;
      }

      const postTitle = post.title?.toLowerCase() || '';
      const postExcerpt = post.excerpt?.toLowerCase() || '';
      const postTags = post.tags || [];
      const postCategory = post.category?.toLowerCase().replace(' ', '-') || '';

      const matchesSearch = searchQuery === '' ||
                           postTitle.includes(searchQuery.toLowerCase()) ||
                           postExcerpt.includes(searchQuery.toLowerCase()) ||
                           postTags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesCategory = selectedCategory === 'all' || postCategory === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  // Get featured post
  const featuredPost = useMemo(() => blogPosts.find(post => post && post.featured), []);
  const regularPosts = filteredPosts;

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Hero Section - COMPLETELY REDESIGNED */}
      <motion.section
        ref={heroRef}
        style={{ opacity: heroOpacity, scale: heroScale }}
        className="relative min-h-[85vh] md:h-[calc(100vh-80px)] flex items-start md:items-center justify-center overflow-hidden pt-4 md:pt-0"
        aria-labelledby="blog-hero-heading"
      >
        {/* Animated Gradient Background - NO IMAGE */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
          {/* Multiple Animated Gradient Layers */}
          <motion.div
            animate={{
              background: [
                'radial-gradient(circle at 20% 50%, rgba(250, 207, 45, 0.3) 0%, transparent 50%)',
                'radial-gradient(circle at 80% 50%, rgba(250, 207, 45, 0.3) 0%, transparent 50%)',
                'radial-gradient(circle at 50% 80%, rgba(250, 207, 45, 0.3) 0%, transparent 50%)',
                'radial-gradient(circle at 20% 50%, rgba(250, 207, 45, 0.3) 0%, transparent 50%)',
              ],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute inset-0"
          />

          <motion.div
            animate={{
              background: [
                'radial-gradient(circle at 80% 20%, rgba(139, 92, 246, 0.4) 0%, transparent 50%)',
                'radial-gradient(circle at 20% 80%, rgba(139, 92, 246, 0.4) 0%, transparent 50%)',
                'radial-gradient(circle at 50% 20%, rgba(139, 92, 246, 0.4) 0%, transparent 50%)',
                'radial-gradient(circle at 80% 20%, rgba(139, 92, 246, 0.4) 0%, transparent 50%)',
              ],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute inset-0"
          />

          <motion.div
            animate={{
              background: [
                'radial-gradient(circle at 50% 50%, rgba(236, 72, 153, 0.3) 0%, transparent 50%)',
                'radial-gradient(circle at 30% 70%, rgba(236, 72, 153, 0.3) 0%, transparent 50%)',
                'radial-gradient(circle at 70% 30%, rgba(236, 72, 153, 0.3) 0%, transparent 50%)',
                'radial-gradient(circle at 50% 50%, rgba(236, 72, 153, 0.3) 0%, transparent 50%)',
              ],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute inset-0"
          />
        </div>

        {/* Animated Morphing Blobs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {mounted && [0, 1, 2, 3, 4].map((i) => (
            <motion.div
              key={i}
              className="absolute rounded-full mix-blend-multiply filter blur-3xl opacity-30 w-64 h-64 md:w-96 md:h-96"
              style={{
                background: i % 2 === 0
                  ? 'linear-gradient(45deg, #FACF2D, #FFA500)'
                  : 'linear-gradient(45deg, #8B5CF6, #EC4899)',
              }}
              animate={{
                x: [
                  Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
                  Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
                  Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
                ],
                y: [
                  Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
                  Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
                  Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
                ],
                scale: [1, 1.5, 1.2, 1],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 20 + i * 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {mounted && [...Array(30)].map((_, i) => {
            const randomX = Math.random() * 100;
            const randomDelay = Math.random() * 5;
            const randomDuration = 10 + Math.random() * 20;
            const icons = ['✈️', '🗺️', '🏔️', '🚗', '📸', '🎒', '🌍', '🗼', '🏖️', '🎫', '⭐', '🌟', '💫', '🎯', '🧳'];

            return (
              <motion.div
                key={i}
                initial={{
                  y: (typeof window !== 'undefined' ? window.innerHeight : 1000) + 100,
                  x: `${randomX}%`,
                  opacity: 0,
                  rotate: 0,
                  scale: 0.5,
                }}
                animate={{
                  y: -100,
                  opacity: [0, 1, 1, 0],
                  rotate: 360,
                  scale: [0.5, 1, 0.8, 0.5],
                }}
                transition={{
                  duration: randomDuration,
                  repeat: Infinity,
                  ease: "linear",
                  delay: randomDelay,
                }}
                className="absolute text-2xl md:text-4xl"
              >
                {icons[i % icons.length]}
              </motion.div>
            );
          })}
        </div>

        {/* Cursor Follow Effect */}
        {mounted && (
          <motion.div
            className="absolute w-96 h-96 rounded-full pointer-events-none mix-blend-screen"
            style={{
              background: 'radial-gradient(circle, rgba(250,207,45,0.15) 0%, transparent 70%)',
            }}
            animate={{
              x: mousePosition.x - 192,
              y: mousePosition.y - 192,
            }}
            transition={{
              type: "spring",
              damping: 30,
              stiffness: 200,
            }}
          />
        )}

        {/* Floating Icons Across Full Hero Section */}
        <div className="absolute inset-0 w-full h-full pointer-events-none z-10">
          {mounted && [
            // Far Left Side
            { icon: <Map className="w-10 h-10 md:w-12 md:h-12" />, x: '3%', y: '15%', delay: 0 },
            { icon: <Globe className="w-9 h-9 md:w-11 md:h-11" />, x: '7%', y: '55%', delay: 1.8 },
            { icon: <BookOpen className="w-8 h-8 md:w-10 md:h-10" />, x: '12%', y: '75%', delay: 2.5 },

            // Left-Center
            { icon: <Compass className="w-9 h-9 md:w-11 md:h-11" />, x: '20%', y: '25%', delay: 1.2 },
            { icon: <Sparkles className="w-7 h-7 md:w-9 md:h-9" />, x: '25%', y: '65%', delay: 3 },

            // Center
            { icon: <TrendingUp className="w-8 h-8 md:w-10 md:h-10" />, x: '45%', y: '10%', delay: 0.8 },
            { icon: <Globe className="w-7 h-7 md:w-9 md:h-9" />, x: '50%', y: '80%', delay: 2.2 },

            // Right-Center
            { icon: <Map className="w-8 h-8 md:w-10 md:h-10" />, x: '70%', y: '30%', delay: 1.5 },
            { icon: <BookOpen className="w-9 h-9 md:w-11 md:h-11" />, x: '75%', y: '70%', delay: 2.8 },

            // Far Right Side
            { icon: <Compass className="w-10 h-10 md:w-12 md:h-12" />, x: '85%', y: '20%', delay: 1 },
            { icon: <Sparkles className="w-8 h-8 md:w-10 md:h-10" />, x: '90%', y: '50%', delay: 2 },
            { icon: <TrendingUp className="w-9 h-9 md:w-11 md:h-11" />, x: '94%', y: '75%', delay: 3.2 },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="absolute text-[#FACF2D]/25"
              style={{ left: item.x, top: item.y }}
              animate={{
                y: [0, -15, 0],
                rotate: [0, 360],
                scale: [1, 1.1, 1],
                opacity: [0.25, 0.45, 0.25],
              }}
              transition={{
                duration: 8 + i * 0.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: item.delay,
              }}
            >
              {item.icon}
            </motion.div>
          ))}
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 py-0 md:py-4">
          {/* Hero Content */}
          <div className="text-center max-w-6xl mx-auto">
            {/* Animated Badge with 3D Effect */}
            <motion.div
              initial={{ scale: 0, rotateX: -180 }}
              animate={{ scale: 1, rotateX: 0 }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 15,
                delay: 0.2
              }}
              whileHover={{
                scale: 1.1,
                rotateY: 10,
                rotateX: 5,
              }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-xl px-6 py-2.5 rounded-full mb-3 md:mb-4 border-2 border-[#FACF2D]/50 shadow-2xl"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="w-5 h-5 text-[#FACF2D]" />
              </motion.div>
              <span className="font-bold text-white text-sm md:text-base">Travel Insights & Expert Guides</span>
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                <Globe className="w-5 h-5 text-[#FACF2D]" />
              </motion.div>
            </motion.div>

            {/* Main Heading */}
            <header>
              <motion.h1
                id="blog-hero-heading"
                className="text-4xl md:text-5xl lg:text-7xl font-black text-white mb-4 leading-tight px-2"
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 0.4, duration: 1, type: "spring", stiffness: 100 }}
              >
                <motion.span
                  className="block"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  India Uncovered
                </motion.span>

                {/* FLOATING 3D "Travel Blog" with Typing Animation - FIXED OVERFLOW */}
                <motion.span
                  className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-[#FACF2D] via-yellow-300 to-orange-400 overflow-visible whitespace-nowrap min-h-[1.2em]"
                  animate={{
                    y: [0, -20, 0],
                    rotateX: [0, 5, 0, -5, 0],
                    rotateY: [0, 3, 0, -3, 0],
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  style={{
                    transformStyle: 'preserve-3d',
                    textShadow: '0 10px 30px rgba(250, 207, 45, 0.5)',
                  }}
                >
                  {mounted && (
                    <TypeAnimation
                      sequence={[
                        'Where Stories Come Alive',
                        3000,
                        'Hidden Gems Revealed',
                        2000,
                        'Epic Adventures Begin',
                        2000,
                        'Your Journey Starts Here',
                        2000,
                      ]}
                      wrapper="span"
                      speed={50}
                      repeat={Infinity}
                    />
                  )}
                </motion.span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-6 leading-relaxed font-light"
              >
                <motion.span
                  animate={{
                    textShadow: [
                      '0 0 20px rgba(250,207,45,0.5)',
                      '0 0 40px rgba(250,207,45,0.8)',
                      '0 0 20px rgba(250,207,45,0.5)',
                    ],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="font-bold"
                >
                  Expert travel tips
                </motion.span>
                , destination guides, and insider secrets to help you plan the{' '}
                <motion.span
                  animate={{
                    textShadow: [
                      '0 0 20px rgba(250,207,45,0.5)',
                      '0 0 40px rgba(250,207,45,0.8)',
                      '0 0 20px rgba(250,207,45,0.5)',
                    ],
                  }}
                  transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
                  className="font-bold text-[#FACF2D]"
                >
                  perfect Indian adventure
                </motion.span>
              </motion.p>
            </header>

            {/* Animated Stats with 3D Cards */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="flex flex-wrap justify-center gap-3 md:gap-4 mb-6"
            >
              {[
                { icon: '📝', label: `${blogPosts.length} Articles`, color: 'from-blue-500 via-blue-600 to-cyan-500', rotate: -5 },
                { icon: '🌍', label: 'Travel Guides', color: 'from-green-500 via-green-600 to-emerald-500', rotate: 3 },
                { icon: '💡', label: 'Expert Tips', color: 'from-purple-500 via-purple-600 to-pink-500', rotate: -3 },
                { icon: '⭐', label: '5-Star Rated', color: 'from-orange-500 via-orange-600 to-red-500', rotate: 5 },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ scale: 0, rotate: stat.rotate - 180, opacity: 0 }}
                  animate={{ scale: 1, rotate: stat.rotate, opacity: 1 }}
                  transition={{
                    delay: 1.4 + index * 0.1,
                    type: "spring",
                    stiffness: 200,
                    damping: 10
                  }}
                  whileHover={{
                    scale: 1.15,
                    rotate: 0,
                    y: -10,
                    boxShadow: '0 20px 50px rgba(0,0,0,0.3)',
                  }}
                  className={`bg-gradient-to-br ${stat.color} px-4 md:px-6 py-2 md:py-3 rounded-xl text-white font-bold text-xs md:text-sm shadow-2xl cursor-pointer`}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <motion.span
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                    className="text-lg md:text-xl mr-1 inline-block"
                  >
                    {stat.icon}
                  </motion.span>
                  {stat.label}
                </motion.div>
              ))}
            </motion.div>

            {/* Enhanced Search Bar with Glow Effect */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 1.8, duration: 0.8, type: "spring" }}
              className="max-w-2xl mx-auto"
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative group"
              >
                <motion.div
                  animate={{
                    boxShadow: [
                      '0 0 30px rgba(250,207,45,0.3)',
                      '0 0 60px rgba(250,207,45,0.6)',
                      '0 0 30px rgba(250,207,45,0.3)',
                    ],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="relative bg-white/95 backdrop-blur-xl rounded-full shadow-2xl"
                >
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  >
                    <Search className="absolute left-5 md:left-6 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 z-10 group-hover:text-[#FACF2D] transition-colors" />
                  </motion.div>
                  <input
                    type="text"
                    placeholder="Search destinations, travel tips, guides..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="relative w-full pl-12 md:pl-14 pr-6 py-3 md:py-4 rounded-full border-3 border-transparent focus:border-[#FACF2D] focus:outline-none text-sm md:text-base font-medium transition-all duration-300 bg-transparent"
                    aria-label="Search blog posts"
                  />
                </motion.div>
              </motion.div>
              <motion.p
                animate={{
                  opacity: [0.8, 1, 0.8],
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-xs md:text-sm mt-2 font-bold"
                style={{
                  background: 'linear-gradient(90deg, #FACF2D, #FFA500, #FACF2D)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  textShadow: '0 2px 10px rgba(250, 207, 45, 0.5)',
                }}
              >
                🎯 Discover travel stories, practical guides & money-saving tips
              </motion.p>
            </motion.div>
          </div>
        </div>

        {/* Animated Wave Bottom */}
        <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
          <motion.svg
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-auto"
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            transition={{ duration: 1, delay: 2 }}
          >
            <motion.path
              d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
              fill="rgb(249, 250, 251)"
              animate={{
                d: [
                  "M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z",
                  "M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z",
                  "M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z",
                ],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.svg>
        </div>
      </motion.section>

      {/* Category Filter with Enhanced Animations */}
      <motion.section
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 2.2 }}
        className="bg-white/80 backdrop-blur-lg border-b sticky top-0 z-50 shadow-lg"
      >
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center gap-4 overflow-x-auto scrollbar-hide">
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <Filter className="w-6 h-6 text-gray-600 flex-shrink-0" />
            </motion.div>

            <AnimatePresence mode="wait">
              {blogCategories.map((category, index) => (
                <motion.button
                  key={category.slug}
                  onClick={() => setSelectedCategory(category.slug)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{
                    scale: 1.1,
                    y: -5,
                    boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
                  }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-8 py-3 rounded-full font-bold whitespace-nowrap transition-all duration-300 flex-shrink-0 ${
                    selectedCategory === category.slug
                      ? 'bg-gradient-to-r from-[#FACF2D] to-yellow-500 text-black shadow-xl'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.name} ({category.count})
                </motion.button>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </motion.section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        {/* Featured Post with 3D Tilt */}
        {featuredPost && selectedCategory === 'all' && searchQuery === '' && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3 mb-8"
            >
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <TrendingUp className="w-8 h-8 text-[#FACF2D]" />
              </motion.div>
              <h2 className="text-3xl font-bold">Featured Article</h2>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02, y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="grid md:grid-cols-2 gap-8 bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-[#FACF2D]/20"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative h-96 md:h-auto overflow-hidden"
              >
                {featuredPost.image && !featuredImageError ? (
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover"
                    onError={() => setFeaturedImageError(true)}
                  />
                ) : (
                  <div className="w-full h-full min-h-96 bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-8xl">
                    📝
                  </div>
                )}
                <motion.div
                  initial={{ x: -100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="absolute top-6 left-6 bg-[#FACF2D] text-black px-6 py-3 rounded-full font-black text-lg shadow-xl"
                >
                  ⭐ Featured
                </motion.div>
              </motion.div>

              <div className="p-10 flex flex-col justify-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-bold inline-block w-fit mb-6"
                >
                  {featuredPost.category}
                </motion.div>

                <Link href={`/blog/${featuredPost.slug}`}>
                  <motion.h3
                    whileHover={{ x: 10, color: '#FACF2D' }}
                    className="text-4xl font-black mb-6 transition-colors"
                  >
                    {featuredPost.title}
                  </motion.h3>
                </Link>

                <p className="text-gray-600 mb-8 text-xl leading-relaxed">
                  {featuredPost.excerpt}
                </p>

                <div className="flex items-center gap-4 text-base text-gray-500 mb-8 font-medium">
                  <span>{featuredPost.readTime}</span>
                  <span>•</span>
                  <span>{new Date(featuredPost.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                </div>

                <Link href={`/blog/${featuredPost.slug}`}>
                  <motion.button
                    whileHover={{ scale: 1.05, x: 10 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-[#FACF2D] to-yellow-500 text-black px-10 py-4 rounded-full font-black hover:shadow-2xl transition-all duration-300 text-lg"
                  >
                    Read Full Article →
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}

        {/* Blog Posts Grid with Stagger Animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mb-8"
        >
          <h2 className="text-3xl font-bold mb-8">
            {searchQuery ? `Search Results (${filteredPosts.length})` : 'Latest Articles'}
          </h2>
        </motion.div>

        {filteredPosts.length > 0 ? (
          <motion.div
            ref={gridRef}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-16"
          >
            {regularPosts.map((post, index) => (
              <motion.div
                key={post.id || post.slug || index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: Math.min(index * 0.05, 0.5),
                  duration: 0.4
                }}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
              >
                <BlogCard post={post} index={index} />
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-20"
          >
            <motion.div
              animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-gray-400 text-8xl mb-6"
            >
              🔍
            </motion.div>
            <h3 className="text-3xl font-bold text-gray-700 mb-4">No articles found</h3>
            <p className="text-gray-600 mb-8 text-lg">
              Try adjusting your search or browse all categories
            </p>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="bg-[#FACF2D] text-black px-10 py-4 rounded-full font-bold hover:bg-yellow-500 transition-all shadow-xl"
            >
              Clear Filters
            </motion.button>
          </motion.div>
        )}

        {/* WhatsApp CTA with Animation */}
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

        {/* Bottom CTA with Parallax Effect */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          whileHover={{ scale: 1.02 }}
          className="relative bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 rounded-3xl p-12 md:p-16 text-white text-center mt-16 overflow-hidden shadow-2xl"
        >
          {/* Animated Background Elements */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            }}
            transition={{ duration: 20, repeat: Infinity }}
            className="absolute top-0 right-0 w-64 h-64 bg-[#FACF2D]/20 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              rotate: [0, -180, -360],
            }}
            transition={{ duration: 15, repeat: Infinity }}
            className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl"
          />

          <div className="relative z-10">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-black mb-6"
            >
              Ready to Start Your Adventure?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-2xl text-gray-200 mb-10 max-w-3xl mx-auto font-light"
            >
              Book comfortable vehicles for your next journey. Professional drivers, competitive rates, 24/7 support.
            </motion.p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/services">
                <motion.button
                  whileHover={{ scale: 1.1, rotate: 2 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-[#FACF2D] text-black px-10 py-5 rounded-full font-black hover:bg-yellow-500 transition-all duration-300 text-lg shadow-2xl"
                >
                  View Our Services
                </motion.button>
              </Link>
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.1, rotate: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-black px-10 py-5 rounded-full font-black hover:bg-gray-100 transition-all duration-300 text-lg shadow-2xl"
                >
                  Contact Us
                </motion.button>
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
