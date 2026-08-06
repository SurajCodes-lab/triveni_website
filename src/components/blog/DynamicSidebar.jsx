'use client';

// ============================================================================
// DynamicSidebar — Ultra-Premium v2 (Aug 2026)
// Unified dark glass/gold sidebar cards with lane edges for all 12 blog
// layouts (the old per-theme pastel palette is retired; the `theme` prop is
// still accepted for API compatibility). No animation library, no infinite
// animations — CSS-only hovers (blog family INP discipline).
// All conditional blocks, links and analytics preserved from v1.
// ============================================================================

import Link from 'next/link';
// Centralized icon imports for better bundle optimization
import {
  MapPin, Phone, MessageCircle, Clock, ArrowRight,
  Compass, Star, Tag, BookOpen, Plane,
} from '@/components/ui/icons';
import { trackWhatsAppClick, trackPhoneCall } from '@/utilis/analytics';

// Highway lane marking — the recurring v2 divider motif.
const LANE = 'bg-[repeating-linear-gradient(90deg,#FACF2D_0_18px,transparent_18px_34px)]';

// Shared card shell — dark glass with a lane top edge.
const CARD = 'relative overflow-hidden rounded-2xl bg-slate-950 p-6 shadow-xl ring-1 ring-white/10';

function LaneEdge() {
  return <span aria-hidden="true" className={`absolute inset-x-0 top-0 h-[3px] ${LANE}`} />;
}

// `theme` is accepted for API compatibility with the 12 layouts but no longer
// varies the palette — every sidebar renders the unified dark glass/gold cards.
export default function DynamicSidebar({ post, relatedLinks, theme = 'blue' }) {
  const cityName = post.city ? post.city.charAt(0).toUpperCase() + post.city.slice(1) : null;

  return (
    <div className="space-y-6 lg:sticky lg:top-24">
      {/* Quick Booking Card */}
      <div className={CARD}>
        <LaneEdge />
        <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[#FACF2D]/10 blur-2xl" aria-hidden="true" />
        <h3 className="font-display-serif relative mb-2 flex items-center gap-2 text-xl font-bold text-white">
          <Phone className="h-5 w-5 text-[#FACF2D]" />
          Book Your Trip
        </h3>
        <p className="relative mb-4 text-sm leading-relaxed text-white/60">
          Get the best rates for {cityName || 'your'} tours. Instant confirmation!
        </p>
        <div className="relative space-y-3">
          <a
            href="https://wa.me/917668570551"
            onClick={() => trackWhatsAppClick('blog_sidebar', '', 'sidebar_booking')}
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] px-4 py-3 font-bold text-black transition-colors hover:bg-[#3ae07a]"
          >
            <MessageCircle className="h-5 w-5" />
            WhatsApp Booking
          </a>
          <a
            href="tel:+917668570551"
            onClick={() => trackPhoneCall('blog_sidebar', '7668570551')}
            className="sheen flex w-full items-center justify-center gap-2 rounded-xl bg-[#FACF2D] px-4 py-3 font-extrabold text-black transition-colors hover:bg-[#ffdb4d]"
          >
            <Phone className="h-5 w-5" />
            Call: +91-7668570551
          </a>
        </div>
      </div>

      {/* Related Tours */}
      {relatedLinks?.relatedTours?.length > 0 && (
        <div className={CARD}>
          <LaneEdge />
          <h3 className="font-display-serif mb-4 flex items-center gap-2 text-xl font-bold text-white">
            <Compass className="h-5 w-5 text-[#FACF2D]" />
            Related Tours
          </h3>
          <div className="space-y-3">
            {relatedLinks.relatedTours.map((tour, index) => (
              <Link
                key={index}
                href={tour.url}
                className="group block rounded-xl border border-white/10 bg-white/5 p-3 transition-colors duration-200 hover:border-[#FACF2D]/50 hover:bg-[#FACF2D]/10"
              >
                <h4 className="text-sm font-semibold text-white/85 transition-colors group-hover:text-[#FACF2D]">
                  {tour.name}
                </h4>
                <div className="mt-1 flex items-center justify-between">
                  <span className="text-xs text-white/45">{tour.price}</span>
                  <ArrowRight className="h-4 w-4 text-[#FACF2D] opacity-0 transition-opacity group-hover:opacity-100" />
                </div>
              </Link>
            ))}
          </div>
          {relatedLinks.cityTours && (
            <Link
              href={relatedLinks.cityTours}
              className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[#FACF2D] transition-colors hover:text-amber-300"
            >
              View All Tours <ArrowRight className="h-4 w-4" />
            </Link>
          )}
        </div>
      )}

      {/* Quick Links */}
      {relatedLinks?.quickLinks?.length > 0 && (
        <div className={CARD}>
          <LaneEdge />
          <h3 className="font-display-serif mb-4 flex items-center gap-2 text-xl font-bold text-white">
            <BookOpen className="h-5 w-5 text-[#FACF2D]" />
            Quick Links
          </h3>
          <ul className="space-y-1">
            {relatedLinks.quickLinks.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.href}
                  className="flex items-center gap-2 rounded-lg px-3 py-2 font-medium text-white/75 transition-colors duration-200 hover:bg-white/5 hover:text-[#FACF2D]"
                >
                  <span>{link.icon}</span>
                  <span>{link.text}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Visit Info Card */}
      {post.attractionData && (
        <div className={CARD}>
          <LaneEdge />
          <h3 className="font-display-serif mb-4 flex items-center gap-2 text-xl font-bold text-white">
            <MapPin className="h-5 w-5 text-[#FACF2D]" />
            Visit Information
          </h3>
          <div className="space-y-3 text-sm">
            {post.attractionData.timings && (
              <div className="flex items-start gap-3">
                <Clock className="mt-0.5 h-4 w-4 text-[#FACF2D]" />
                <div>
                  <p className="font-medium text-white/85">Timings</p>
                  <p className="text-white/50">
                    {post.attractionData.timings.open} - {post.attractionData.timings.close}
                  </p>
                  {post.attractionData.timings.closedOn && (
                    <p className="text-xs text-red-400">Closed: {post.attractionData.timings.closedOn}</p>
                  )}
                </div>
              </div>
            )}
            {post.attractionData.entryFee && (
              <div className="flex items-start gap-3">
                <Tag className="mt-0.5 h-4 w-4 text-[#FACF2D]" />
                <div>
                  <p className="font-medium text-white/85">Entry Fee</p>
                  <p className="text-white/50">Indian: {post.attractionData.entryFee.indian}</p>
                  <p className="text-white/50">Foreign: {post.attractionData.entryFee.foreign}</p>
                </div>
              </div>
            )}
            {post.attractionData.timeNeeded && (
              <div className="flex items-start gap-3">
                <Clock className="mt-0.5 h-4 w-4 text-[#FACF2D]" />
                <div>
                  <p className="font-medium text-white/85">Time Needed</p>
                  <p className="text-white/50">{post.attractionData.timeNeeded}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Popular Tags */}
      {post.tags?.length > 0 && (
        <div className={CARD}>
          <LaneEdge />
          <h3 className="font-display-serif mb-4 flex items-center gap-2 text-xl font-bold text-white">
            <Star className="h-5 w-5 text-[#FACF2D]" />
            Related Topics
          </h3>
          <div className="flex flex-wrap gap-2">
            {post.tags.slice(0, 8).map((tag, index) => (
              <span
                key={index}
                className="cursor-pointer rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-white/70 transition-colors duration-200 hover:border-[#FACF2D] hover:bg-[#FACF2D] hover:text-black"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* City Page Link */}
      {relatedLinks?.cityPage && (
        <Link
          href={relatedLinks.cityPage}
          className="sheen block rounded-2xl bg-[#FACF2D] p-5 text-center font-extrabold text-black shadow-[0_10px_30px_-8px_rgba(250,207,45,0.6)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#ffdb4d]"
        >
          Explore More in {cityName || 'India'} →
        </Link>
      )}

      {/* Airport Service Link */}
      {relatedLinks?.airportService && (
        <div className={CARD}>
          <LaneEdge />
          <h3 className="font-display-serif mb-2 flex items-center gap-2 text-lg font-bold text-white">
            <Plane className="h-5 w-5 text-[#FACF2D]" />
            Airport Transfer
          </h3>
          <p className="mb-3 text-sm text-white/60">
            Need airport pickup/drop in {cityName || 'your city'}?
          </p>
          <Link
            href={relatedLinks.airportService}
            className="inline-flex items-center gap-1 text-sm font-semibold text-[#FACF2D] transition-colors hover:text-amber-300"
          >
            Book Airport Taxi <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      )}
    </div>
  );
}
