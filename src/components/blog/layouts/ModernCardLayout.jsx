'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
// Centralized icon imports for better bundle optimization
import {
  Calendar, Clock, MapPin, ChevronRight, Phone, Sparkles,
  ChevronDown, ChevronUp, Star, Zap, Globe, Heart
} from '@/components/ui/icons';
import DynamicSidebar from '../DynamicSidebar';
import WhatsAppCTA from '../WhatsAppCTA';

export default function ModernCardLayout({ post, relatedLinks }) {
  const [expandedSection, setExpandedSection] = useState(null);

  const formattedDate = new Date(post.date || Date.now()).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FACF2D]/10 via-white to-white">
      {/* Decorative Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#FACF2D]/15 rounded-full blur-3xl" />
        <div className="absolute top-1/2 -left-40 w-80 h-80 bg-[#FACF2D]/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 right-1/3 w-80 h-80 bg-amber-200/25 rounded-full blur-3xl" />
      </div>

      {/* Floating Header */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/70 border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <nav className="flex items-center gap-2 text-sm text-slate-500">
              <Link href="/" className="hover:text-amber-700 transition-colors">Home</Link>
              <ChevronRight className="w-4 h-4" />
              <Link href="/blog" className="hover:text-amber-700 transition-colors">Blog</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-amber-700 font-medium">{post.category}</span>
            </nav>
            <div className="flex items-center gap-3">
              <button className="p-2 hover:bg-[#FACF2D]/15 rounded-full transition-colors">
                <Heart className="w-5 h-5 text-slate-500" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Card */}
      <section className="relative max-w-6xl mx-auto px-4 py-8">
        <div className="relative bg-white rounded-[2rem] shadow-2xl shadow-amber-200/40 overflow-hidden ring-1 ring-[#FACF2D]/30">
          <span
            aria-hidden="true"
            className="absolute inset-x-0 top-0 z-10 h-[4px] bg-[repeating-linear-gradient(90deg,#FACF2D_0_18px,transparent_18px_34px)]"
          />

          <div className="relative grid lg:grid-cols-2">
            {/* Image Side */}
            <div className="relative h-[400px] lg:h-auto lg:min-h-[500px]">
              <Image
                src={post.heroImage || post.image}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent lg:bg-gradient-to-r" />

              {/* Floating Stats */}
              <div className="absolute bottom-6 left-6 right-6 lg:bottom-auto lg:right-auto lg:top-6 flex gap-3">
                <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                  <span className="flex items-center gap-1.5 text-sm font-semibold text-slate-800">
                    <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                    4.9 Rating
                  </span>
                </div>
                <div className="bg-[#FACF2D] px-4 py-2 rounded-full shadow-lg">
                  <span className="flex items-center gap-1.5 text-sm font-bold text-black">
                    <Sparkles className="w-4 h-4" />
                    Featured
                  </span>
                </div>
              </div>
            </div>

            {/* Content Side */}
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#FACF2D]/50 bg-[#FACF2D]/10 px-4 py-2 text-sm font-bold text-amber-700 w-fit mb-6">
                <Globe className="w-4 h-4" />
                {post.category}
              </div>

              <h1 className="font-display-serif text-3xl lg:text-4xl font-bold text-slate-900 leading-tight mb-4">
                {post.title}
              </h1>

              <span
                aria-hidden="true"
                className="mb-6 block h-[4px] w-24 opacity-80 bg-[repeating-linear-gradient(90deg,#FACF2D_0_18px,transparent_18px_34px)]"
              />

              <p className="text-slate-600 leading-relaxed mb-6">
                {post.excerpt}
              </p>

              {/* Meta Info */}
              <div className="flex flex-wrap gap-3 text-sm">
                <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-slate-700">
                  <Calendar className="w-4 h-4 text-amber-600" />
                  {formattedDate}
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-slate-700">
                  <Clock className="w-4 h-4 text-amber-600" />
                  {post.readTime}
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-slate-700">
                  <MapPin className="w-4 h-4 text-amber-600" />
                  {post.city}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Facts Accordion Cards */}
      {post.attractionData && (
        <section className="max-w-4xl mx-auto px-4 py-8">
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { id: 'timing', icon: Clock, title: 'Timings', value: `${post.attractionData.timings?.open || '9 AM'} - ${post.attractionData.timings?.close || '5 PM'}`, gold: false },
              { id: 'entry', icon: Zap, title: 'Entry Fee', value: post.attractionData.entryFee?.indian || 'Varies', gold: true },
              { id: 'season', icon: Sparkles, title: 'Best Season', value: post.attractionData.bestTimeToVisit?.season || 'Oct - Mar', gold: false },
              { id: 'duration', icon: Globe, title: 'Duration', value: post.attractionData.timeNeeded || '2-3 Hours', gold: false },
            ].map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl shadow-lg shadow-amber-100/50 overflow-hidden border border-slate-200"
              >
                <button
                  onClick={() => toggleSection(item.id)}
                  className="w-full p-5 flex items-center justify-between hover:bg-slate-50 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#FACF2D]/15 ring-1 ring-[#FACF2D]/30 rounded-xl flex items-center justify-center">
                      <item.icon className="w-6 h-6 text-amber-600" />
                    </div>
                    <div className="text-left">
                      <p className="text-sm text-slate-500">{item.title}</p>
                      <p className={item.gold ? 'text-gold-foil font-bold' : 'font-bold text-slate-900'}>{item.value}</p>
                    </div>
                  </div>
                  {expandedSection === item.id ? (
                    <ChevronUp className="w-5 h-5 text-slate-400" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-400" />
                  )}
                </button>
                {expandedSection === item.id && (
                  <div className="border-t border-slate-100">
                    <div className="p-5 text-slate-600 text-sm">
                      Plan your visit accordingly. {item.title} may vary during festivals and holidays.
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Article */}
          <main className="lg:col-span-8">
            <div className="bg-white rounded-3xl shadow-xl shadow-amber-100/50 p-8 lg:p-12">
              <article
                className="blog-prose prose prose-lg max-w-[70ch] mx-auto
                  prose-headings:text-slate-900 prose-headings:font-bold
                  prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-h2:pb-3
                  prose-h3:text-xl prose-h3:text-slate-800
                  prose-p:text-slate-700 prose-p:leading-relaxed
                  prose-a:text-amber-700 prose-a:font-semibold prose-a:no-underline hover:prose-a:text-amber-800
                  prose-strong:text-slate-900
                  prose-li:text-slate-700
                  prose-blockquote:border-l-[#FACF2D] prose-blockquote:bg-slate-50 prose-blockquote:rounded-r-2xl prose-blockquote:py-4 prose-blockquote:not-italic"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </div>

            {/* Tags */}
            <div className="mt-8 flex flex-wrap gap-2">
              {post.tags?.map((tag, i) => (
                <span
                  key={i}
                  className="rounded-full border border-slate-200 bg-white px-5 py-2 text-sm font-semibold text-slate-700 shadow-sm transition-colors hover:border-[#FACF2D] hover:bg-[#FACF2D] hover:text-black cursor-pointer"
                >
                  #{tag}
                </span>
              ))}
            </div>

            {/* WhatsApp CTA */}
            <WhatsAppCTA
              message={`Hi! I just read about ${post.title}. I'd love to plan a trip to ${post.city || 'this destination'}. Can you share packages and pricing?`}
              buttonText="Get Free Quote on WhatsApp"
              variant="primary"
            />

            {/* CTA Card */}
            {relatedLinks?.relatedTours?.length > 0 && (
              <div className="mt-8 bg-slate-950 ring-1 ring-white/10 rounded-3xl p-8 text-white relative overflow-hidden">
                <span aria-hidden="true" className="absolute inset-x-0 top-0 h-[4px] bg-[repeating-linear-gradient(90deg,#FACF2D_0_18px,transparent_18px_34px)]" />
                {/* Decorative glow */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-[#FACF2D]/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" aria-hidden="true" />

                <div className="relative">
                  <h3 className="font-display-serif text-2xl font-bold mb-4">Ready to Visit {post.city}?</h3>
                  <p className="text-slate-300 mb-6 max-w-lg">
                    Experience this destination with our premium transport services and expert guidance.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Link
                      href={relatedLinks.cityTours || '/sightseeing'}
                      className="sheen inline-flex items-center justify-center gap-2 rounded-xl bg-[#FACF2D] px-6 py-3.5 font-extrabold text-black transition hover:bg-[#ffdb4d]"
                    >
                      Explore Tours
                    </Link>
                    <a
                      href="tel:+917668570551"
                      className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-6 py-3.5 font-bold text-white transition-colors hover:bg-white/15"
                    >
                      <Phone className="w-5 h-5" />
                      Call Now
                    </a>
                  </div>
                </div>
              </div>
            )}
          </main>

          {/* Sidebar */}
          <aside className="lg:col-span-4">
            <DynamicSidebar post={post} relatedLinks={relatedLinks} theme="violet" />
          </aside>
        </div>
      </div>
    </div>
  );
}
