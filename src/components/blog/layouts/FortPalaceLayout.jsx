'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
// Centralized icon imports for better bundle optimization
import {
  Calendar, Clock, MapPin, Ticket, Camera, Crown,
  Castle, History, ChevronRight, Phone
} from '@/components/ui/icons';
import DynamicSidebar from '../DynamicSidebar';
import WhatsAppCTA from '../WhatsAppCTA';
import { rupeeText } from '@/utilis/pricing';

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
    <div className="min-h-screen bg-gradient-to-b from-[#FACF2D]/10 via-white to-white">
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
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/55 to-slate-950/15" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/60 via-transparent to-transparent" />
          {/* Gold lane edge */}
          <span aria-hidden="true" className="absolute inset-x-0 top-0 h-[4px] bg-[repeating-linear-gradient(90deg,#FACF2D_0_18px,transparent_18px_34px)]" />
        </div>

        {/* Hero Content */}
        <div className="relative z-20 w-full max-w-7xl mx-auto px-4 pb-10 sm:pb-16">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-white/90 mb-6 backdrop-blur-sm bg-white/10 w-fit px-4 py-2 rounded-full">
            <Link href="/" className="hover:text-[#FACF2D] transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/blog" className="hover:text-[#FACF2D] transition-colors">Blog</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-[#FACF2D] font-semibold">{post.category || 'Fort & Palace'}</span>
          </nav>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-[#FACF2D]/40 bg-black/40 px-4 py-2 text-sm font-bold text-[#FACF2D] backdrop-blur-sm mb-6">
            <Crown className="w-4 h-4" />
            Royal Heritage Site
          </div>

          {/* Title */}
          <h1
            className="font-display-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight max-w-4xl"
            style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}
          >
            {post.title}
          </h1>
          <span aria-hidden="true" className="mt-5 block h-[4px] w-28 opacity-80 bg-[repeating-linear-gradient(90deg,#FACF2D_0_18px,transparent_18px_34px)]" />

          {/* Meta Info */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <span className="flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-sm text-white">
              <Calendar className="w-4 h-4 text-[#FACF2D]" />
              {formattedDate}
            </span>
            <span className="flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-sm text-white">
              <Clock className="w-4 h-4 text-[#FACF2D]" />
              {post.readTime}
            </span>
            <span className="flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-sm text-white">
              <MapPin className="w-4 h-4 text-[#FACF2D]" />
              {post.attractionData?.location || post.city}
            </span>
          </div>
        </div>

        {/* Wave Bottom */}
        <svg className="absolute bottom-0 left-0 right-0 text-white" viewBox="0 0 1440 100" fill="currentColor">
          <path d="M0,50 C360,100 1080,0 1440,50 L1440,100 L0,100 Z" />
        </svg>
      </section>

      {/* Quick Info Bar */}
      {post.attractionData && (
        <section className="bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 py-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center p-3 bg-[#FACF2D]/10 rounded-xl ring-1 ring-[#FACF2D]/25">
                <Ticket className="w-5 h-5 mx-auto mb-1 text-amber-600" />
                <p className="text-xs text-slate-500">Entry Fee</p>
                <p className="text-gold-foil font-bold">
                  {post.attractionData.entryFee?.indian || 'Check locally'}
                </p>
              </div>
              <div className="text-center p-3 bg-[#FACF2D]/10 rounded-xl ring-1 ring-[#FACF2D]/25">
                <Clock className="w-5 h-5 mx-auto mb-1 text-amber-600" />
                <p className="text-xs text-slate-500">Timings</p>
                <p className="font-bold text-slate-900">
                  {post.attractionData.timings?.open || '9 AM'} - {post.attractionData.timings?.close || '5 PM'}
                </p>
              </div>
              <div className="text-center p-3 bg-[#FACF2D]/10 rounded-xl ring-1 ring-[#FACF2D]/25">
                <Calendar className="w-5 h-5 mx-auto mb-1 text-amber-600" />
                <p className="text-xs text-slate-500">Best Time</p>
                <p className="font-bold text-slate-900">
                  {post.attractionData.bestTimeToVisit?.season || 'Oct-Mar'}
                </p>
              </div>
              <div className="text-center p-3 bg-[#FACF2D]/10 rounded-xl ring-1 ring-[#FACF2D]/25">
                <Clock className="w-5 h-5 mx-auto mb-1 text-amber-600" />
                <p className="text-xs text-slate-500">Time Needed</p>
                <p className="font-bold text-slate-900">
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
                      ? 'bg-[#FACF2D] text-black shadow-lg'
                      : 'bg-white text-slate-700 hover:bg-[#FACF2D]/10 border border-slate-200'
                  }`}
                >
                  <tab.icon className="w-4 h-4" />
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Content */}
            <article className="bg-white rounded-2xl p-8 shadow-xl border border-slate-200">
              <div
                className="blog-prose prose prose-lg max-w-[70ch] mx-auto prose-headings:text-slate-900 prose-headings:font-bold prose-h2:text-3xl prose-h2:pb-3 prose-h2:mb-6 prose-h3:text-2xl prose-h3:text-slate-800 prose-p:text-slate-700 prose-p:leading-relaxed prose-a:text-amber-700 prose-a:font-semibold hover:prose-a:text-amber-800 prose-li:text-slate-700 prose-strong:text-slate-900"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </article>

            {/* WhatsApp CTA */}
            <WhatsAppCTA
              message={`Hi! I just read about ${post.title}. I want to plan a royal heritage tour to ${post.city || 'this destination'}. Can you help?`}
              buttonText="Get Free Quote on WhatsApp"
              variant="primary"
            />

            {/* Book Tour CTA */}
            {relatedLinks?.relatedTours?.length > 0 && (
              <div className="relative overflow-hidden mt-8 bg-slate-950 ring-1 ring-white/10 rounded-2xl p-8 text-white">
                <span aria-hidden="true" className="absolute inset-x-0 top-0 h-[4px] bg-[repeating-linear-gradient(90deg,#FACF2D_0_18px,transparent_18px_34px)]" />
                <h3 className="font-display-serif text-2xl font-bold mb-4 flex items-center gap-2">
                  <Crown className="w-6 h-6 text-[#FACF2D]" />
                  Experience This Royal Heritage
                </h3>
                <p className="mb-6 text-slate-300">
                  Book a guided tour and explore the magnificent architecture and rich history with our expert guides.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  {relatedLinks.relatedTours.slice(0, 2).map((tour, index) => (
                    <Link
                      key={index}
                      href={tour.url}
                      className="bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl p-4 transition-all group"
                    >
                      <h4 className="font-bold text-lg group-hover:text-[#FACF2D]">{tour.name}</h4>
                      <p className="text-slate-400 text-sm">{rupeeText(tour.price)} onwards</p>
                    </Link>
                  ))}
                </div>
                <div className="mt-6 flex flex-wrap gap-4">
                  <Link
                    href={relatedLinks.cityTours || '/sightseeing'}
                    className="sheen inline-flex items-center justify-center gap-2 rounded-xl bg-[#FACF2D] px-6 py-3.5 font-extrabold text-black transition hover:bg-[#ffdb4d]"
                  >
                    View All Tours →
                  </Link>
                  <a
                    href="tel:+917668570551"
                    className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-6 py-3.5 font-bold text-white transition-colors hover:bg-white/15"
                  >
                    <Phone className="w-4 h-4" />
                    Call Now
                  </a>
                </div>
              </div>
            )}

            {/* Tags */}
            <div className="mt-8 flex flex-wrap gap-2">
              {post.tags?.map((tag, index) => (
                <span
                  key={index}
                  className="rounded-full border border-slate-200 bg-slate-50 px-4 py-1.5 text-sm font-semibold text-slate-700 transition-colors hover:border-[#FACF2D] hover:bg-[#FACF2D] hover:text-black cursor-pointer"
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
