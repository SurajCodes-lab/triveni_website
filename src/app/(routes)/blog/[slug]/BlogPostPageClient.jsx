'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion';
// Centralized icon imports for better bundle optimization
import { Calendar, Clock, Eye, Tag, Share2, Facebook, Twitter, Linkedin, ArrowLeft, Sparkles, BookOpen, ChevronRight } from '@/components/ui/icons';
import RelatedPosts from '@/components/blog/RelatedPosts';
import WhatsAppCTA from '@/components/blog/WhatsAppCTA';

export default function BlogPostPageClient({ post }) {
  const [mounted, setMounted] = useState(false);
  const heroRef = useRef(null);
  const contentRef = useRef(null);
  const isContentInView = useInView(contentRef, { once: true, amount: 0.1 });

  const { scrollY } = useScroll();
  const smoothScrollY = useSpring(scrollY, { stiffness: 100, damping: 30 });
  const heroOpacity = useTransform(smoothScrollY, [0, 400], [1, 0]);
  const heroScale = useTransform(smoothScrollY, [0, 400], [1, 0.95]);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Safety check: ensure post has required properties
  if (!post) {
    return <div>Post not found</div>;
  }

  const formattedDate = new Date(post.date || Date.now()).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const shareOnSocial = (platform) => {
    const url = encodeURIComponent(`https://trivenicabs.in/blog/${post.slug}`);
    const text = encodeURIComponent(post.title);

    const shareUrls = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
      twitter: `https://twitter.com/intent/tweet?text=${text}&url=${url}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${url}`
    };

    window.open(shareUrls[platform], '_blank', 'width=600,height=400');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Hero Section with Destination Image */}
      <motion.section
        ref={heroRef}
        style={{ opacity: heroOpacity, scale: heroScale }}
        className="relative min-h-[70vh] md:min-h-[85vh] flex items-end overflow-hidden"
      >
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
          {/* Gradient Overlays for Text Readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent" />

          {/* Animated Color Accent Overlay */}
          <motion.div
            animate={{
              background: [
                'linear-gradient(45deg, rgba(250, 207, 45, 0.1) 0%, transparent 50%)',
                'linear-gradient(135deg, rgba(250, 207, 45, 0.15) 0%, transparent 50%)',
                'linear-gradient(45deg, rgba(250, 207, 45, 0.1) 0%, transparent 50%)',
              ],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute inset-0"
          />
        </div>

        {/* Floating Particles Effect */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {mounted && [...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 md:w-2 md:h-2 rounded-full bg-[#FACF2D]/40"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [-20, -100, -20],
                opacity: [0, 1, 0],
                scale: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 4 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 4,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        {/* Subtle Vignette Effect */}
        <div className="absolute inset-0 pointer-events-none" style={{
          boxShadow: 'inset 0 0 150px 50px rgba(0,0,0,0.5)'
        }} />

        {/* Hero Content */}
        <div className="relative z-20 w-full max-w-7xl mx-auto px-4 md:px-8 pb-16 md:pb-20">
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-2 text-sm text-white/90 mb-6 backdrop-blur-sm bg-white/10 w-fit px-4 py-2 rounded-full"
          >
            <Link href="/" className="hover:text-[#FACF2D] transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/blog" className="hover:text-[#FACF2D] transition-colors">Blog</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-[#FACF2D] font-semibold">{post.category}</span>
          </motion.div>

          {/* Featured Badge */}
          {post.featured && (
            <motion.div
              initial={{ scale: 0, rotateX: -180 }}
              animate={{ scale: 1, rotateX: 0 }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 15,
                delay: 0.3
              }}
              
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#FACF2D] to-yellow-400 text-black px-6 py-2.5 rounded-full text-sm font-bold mb-6 shadow-2xl"
            >
              <motion.span
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                ⭐
              </motion.span>
              Featured Guide
            </motion.div>
          )}

          {/* Title with Text Shadow */}
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8, type: "spring" }}
            className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white mb-6 leading-tight max-w-5xl drop-shadow-2xl"
            style={{ textShadow: '2px 4px 20px rgba(0,0,0,0.5)' }}
          >
            {post.title}
          </motion.h1>

          {/* Excerpt/Description */}
          {post.excerpt && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl leading-relaxed"
              style={{ textShadow: '1px 2px 10px rgba(0,0,0,0.5)' }}
            >
              {post.excerpt}
            </motion.p>
          )}

          {/* Meta Information with Glass Effect */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap items-center gap-3 md:gap-4"
          >
            {[
              { icon: <Calendar className="w-4 h-4 md:w-5 md:h-5" />, text: formattedDate, color: 'from-blue-500/90 to-cyan-500/90' },
              { icon: <Clock className="w-4 h-4 md:w-5 md:h-5" />, text: post.readTime, color: 'from-purple-500/90 to-pink-500/90' },
              ...(post.views ? [{ icon: <Eye className="w-4 h-4 md:w-5 md:h-5" />, text: `${post.views.toLocaleString()} views`, color: 'from-green-500/90 to-emerald-500/90' }] : []),
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.7 + index * 0.1, type: "spring", stiffness: 200 }}
                
                className={`flex items-center gap-2 bg-gradient-to-r ${item.color} backdrop-blur-md text-white px-4 py-2.5 rounded-full font-semibold text-xs md:text-sm shadow-xl border border-white/20`}
              >
                {item.icon}
                <span>{item.text}</span>
              </motion.div>
            ))}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1, type: "spring", stiffness: 200 }}
              
              className="bg-gradient-to-r from-[#FACF2D] to-orange-500 text-black px-5 py-2.5 rounded-full font-bold text-xs md:text-sm shadow-xl"
            >
              {post.category}
            </motion.div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
          >
            <span className="text-white/60 text-sm font-medium">Scroll to read</span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center pt-2"
            >
              <motion.div className="w-1.5 h-1.5 bg-[#FACF2D] rounded-full" />
            </motion.div>
          </motion.div>
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
            transition={{ duration: 1, delay: 1 }}
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

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Article Content */}
          <motion.article
            ref={contentRef}
            initial={{ opacity: 0, y: 50 }}
            animate={isContentInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="lg:col-span-8"
          >
            {/* Back Button */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-gray-600 hover:text-[#FACF2D] mb-8 transition-colors font-semibold group"
              >
                <motion.div
                  whileHover={{ x: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <ArrowLeft className="w-5 h-5" />
                </motion.div>
                Back to Blog
              </Link>
            </motion.div>

            {/* Share Buttons with Animation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex items-center gap-4 mb-8 pb-8 border-b-2 border-gray-200"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <Share2 className="w-6 h-6 text-[#FACF2D]" />
              </motion.div>
              <span className="text-gray-700 font-bold text-lg">Share:</span>
              {[
                { platform: 'facebook', icon: Facebook, color: 'bg-blue-600 hover:bg-blue-700' },
                { platform: 'twitter', icon: Twitter, color: 'bg-sky-500 hover:bg-sky-600' },
                { platform: 'linkedin', icon: Linkedin, color: 'bg-blue-700 hover:bg-blue-800' },
              ].map((social, index) => (
                <motion.button
                  key={social.platform}
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.6 + index * 0.1, type: "spring", stiffness: 200 }}
                  
                  whileTap={{ scale: 0.9 }}
                  onClick={() => shareOnSocial(social.platform)}
                  className={`p-3 ${social.color} text-white rounded-xl transition-all shadow-lg`}
                  aria-label={`Share on ${social.platform}`}
                >
                  <social.icon className="w-5 h-5" />
                </motion.button>
              ))}
            </motion.div>

            {/* Article Content with Fade-in Animation */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="prose prose-lg max-w-none mb-8
                prose-headings:font-bold prose-headings:text-gray-900
                prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:bg-gradient-to-r prose-h2:from-purple-600 prose-h2:to-pink-600 prose-h2:bg-clip-text prose-h2:text-transparent
                prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
                prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-6 prose-p:text-lg
                prose-ul:my-6 prose-ul:space-y-3
                prose-li:text-gray-700 prose-li:text-lg
                prose-strong:text-gray-900 prose-strong:font-bold
                prose-a:text-[#FACF2D] prose-a:no-underline hover:prose-a:underline
                prose-img:rounded-xl prose-img:shadow-2xl"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* WhatsApp CTA with Animation */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <WhatsAppCTA
                variant="primary"
                message={`Hi! I read about "${post.title}" on your blog and I'm interested in booking a trip. Can you help me?`}
              />
            </motion.div>

            {/* Tags with 3D Animation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-8 pt-8 border-t-2 border-gray-200"
            >
              <div className="flex items-center gap-3 flex-wrap">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <Tag className="w-6 h-6 text-[#FACF2D]" />
                </motion.div>
                <span className="text-gray-700 font-bold text-lg">Tags:</span>
                {post.tags.map((tag, index) => (
                  <motion.span
                    key={index}
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, type: "spring", stiffness: 200 }}
                    
                    className="bg-gradient-to-r from-purple-100 to-pink-100 text-gray-800 px-4 py-2 rounded-full text-sm font-bold hover:from-[#FACF2D] hover:to-yellow-400 hover:text-black transition-all cursor-pointer shadow-lg"
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* Related Posts with Animation */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <RelatedPosts
                currentPostId={post.id || 0}
                currentCategory={post.category || ''}
                currentTags={post.tags || []}
              />
            </motion.div>
          </motion.article>

          {/* Animated Sidebar */}
          <motion.aside
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="lg:col-span-4"
          >
            <div className="space-y-6 lg:sticky lg:top-24">
              {/* WhatsApp CTA with Pulse */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.6, type: "spring", stiffness: 200 }}
              >
                <WhatsAppCTA variant="secondary" />
              </motion.div>

              {/* Popular Tags with Stagger Animation */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                
                className="bg-white rounded-2xl p-6 shadow-xl border-2 border-gray-100"
              >
                <div className="flex items-center gap-2 mb-4">
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  >
                    <Sparkles className="w-6 h-6 text-[#FACF2D]" />
                  </motion.div>
                  <h3 className="text-xl font-black text-gray-900">Popular Tags</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {['North India', 'Manali', 'Chardham', 'Travel Tips', 'Budget Travel', 'Jaipur', 'Hill Stations'].map((tag, index) => (
                    <motion.span
                      key={index}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.8 + index * 0.05, type: "spring" }}
                      
                      className="bg-gray-100 text-gray-700 px-3 py-1.5 rounded-full text-sm font-semibold hover:bg-[#FACF2D] hover:text-black transition-all cursor-pointer"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
              </motion.div>

              {/* Quick Links with Hover Effects */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                
                className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-6 shadow-xl border-2 border-purple-100"
              >
                <div className="flex items-center gap-2 mb-4">
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  >
                    <BookOpen className="w-6 h-6 text-purple-600" />
                  </motion.div>
                  <h3 className="text-xl font-black text-gray-900">Quick Links</h3>
                </div>
                <ul className="space-y-3">
                  {[
                    { href: '/about', text: 'About Triveni Cabs' },
                    { href: '/booking', text: 'Book a Taxi' },
                    { href: '/services/one-way', text: 'One Way Service' },
                    { href: '/services/round-trip', text: 'Round Trip Service' },
                  ].map((link, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.9 + index * 0.1 }}
                      whileHover={{ x: 10 }}
                    >
                      <Link href={link.href} className="text-gray-700 hover:text-[#FACF2D] transition-colors flex items-center gap-2 font-semibold group">
                        <motion.div
                          
                          transition={{ type: "spring", stiffness: 300 }}
                          className="text-purple-600 group-hover:text-[#FACF2D]"
                        >
                          →
                        </motion.div>
                        {link.text}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </motion.aside>
        </div>
      </div>
    </div>
  );
}
