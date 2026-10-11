'use client';

// ============================================================================
// BlogClient — Ultra-Premium v2 "Editorial Journal" redesign (Aug 2026)
// Magazine masthead → featured-story spread → clean archive grid → CTA band.
// Serif display headings (.font-display-serif) with .text-gold-foil accents.
// No framer-motion, no mounted gate — server-renderable, CSS-only hovers.
// ============================================================================

import { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
// Centralized icon imports for better bundle optimization
import {
  ArrowRight, Clock, Calendar, Sparkles, Compass, Mountain, Building,
  Heart, Plane, Camera, Phone, Star, WhatsAppIcon,
} from '@/components/ui/icons';
import { trackWhatsAppClick, trackPhoneCall } from '@/utilis/analytics';

// Highway lane marking — the recurring v2 divider motif.
const LANE = 'bg-[repeating-linear-gradient(90deg,#FACF2D_0_18px,transparent_18px_34px)]';

// ISO "YYYY-MM-DD" post dates format identically on server and client via UTC
// parts — hydration-safe, so the hub renders fully on the server (SEO win).
const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
function formatDate(dateStr, withYear = false) {
  const d = new Date(dateStr);
  if (Number.isNaN(d.getTime())) return '';
  return `${MONTHS[d.getUTCMonth()]} ${d.getUTCDate()}${withYear ? `, ${d.getUTCFullYear()}` : ''}`;
}

// Per-category icon (kept from v1); colour is unified gold in v2.
const CATEGORY_ICONS = {
  Destinations: Compass,
  Adventure: Mountain,
  Pilgrimage: Heart,
  Heritage: Building,
  'Hill Station': Mountain,
  'City Guide': Building,
  'Travel Tips': Plane,
  Wildlife: Camera,
  default: Sparkles,
};
const getCategoryIcon = (category) => CATEGORY_ICONS[category] || CATEGORY_ICONS.default;

// Map blog categories to relevant service pages (preserved from v1).
const categoryServiceLinks = {
  Pilgrimage: { label: 'View Pilgrimage Tours', href: '/religious-tours' },
  Heritage: { label: 'View Heritage Sightseeing', href: '/sightseeing' },
  'Hill Station': { label: 'Book Hill Station Trip', href: '/tempo-traveller' },
  Adventure: { label: 'Book Adventure Trip', href: '/tempo-traveller' },
  Destinations: { label: 'Explore Sightseeing Tours', href: '/sightseeing' },
  'City Guide': { label: 'Book City Tour', href: '/sightseeing' },
  Wildlife: { label: 'Book Wildlife Safari Trip', href: '/sightseeing' },
  'Travel Tips': { label: 'View Pricing & Routes', href: '/pricing' },
};

const WA_HREF =
  'https://wa.me/917668570551?text=Hi!%20I%20found%20your%20blog%20and%20I%27m%20interested%20in%20booking%20a%20trip.%20Can%20you%20help%20with%20details%20and%20pricing%3F';

export default function BlogClient({ posts }) {
  const [activeCategory, setActiveCategory] = useState('all');

  const allPosts = useMemo(
    () => (posts || []).filter((post) => post && post.title && post.slug),
    [posts]
  );
  const categories = useMemo(
    () => ['all', ...new Set(allPosts.map((p) => p.category).filter(Boolean))],
    [allPosts]
  );

  const filteredPosts = useMemo(
    () => allPosts.filter((post) => activeCategory === 'all' || post.category === activeCategory),
    [allPosts, activeCategory]
  );

  // Editorial spread: the newest story of the current selection leads the page.
  const featuredPost = filteredPosts[0] || null;
  const gridPosts = filteredPosts.slice(1);

  return (
    <div className="min-h-screen bg-slate-950">
      {/* ============================================ */}
      {/* MASTHEAD — dark editorial cover               */}
      {/* ============================================ */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/packages/rajasthan.webp"
            alt="Travel Blog - Explore India"
            fill
            priority
            sizes="100vw"
            quality={72}
            className="object-cover"
          />
          {/* v2 scrim: readable left, photo alive right, grounded bottom */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-slate-950/30" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-slate-950 to-transparent" />
          <div className="absolute -left-24 top-0 h-80 w-80 rounded-full bg-[#FACF2D]/15 blur-3xl" aria-hidden="true" />
        </div>

        <div className="relative mx-auto w-full max-w-6xl px-4 pb-16 pt-12 sm:px-6 sm:pb-20 sm:pt-16 lg:pb-24">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#FACF2D]/30 bg-[#FACF2D]/10 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-[#FACF2D] backdrop-blur-sm sm:text-xs">
            <Sparkles className="h-3.5 w-3.5" />
            The Triveni Travel Journal
          </span>

          <h1 className="font-display-serif mt-6 max-w-3xl text-4xl font-bold leading-[1.08] text-white sm:text-5xl lg:text-6xl">
            Discover India’s
            <span className="text-gold-foil block">Hidden Treasures</span>
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">
            Travel guides, destination insights, and tips to plan your perfect journey
            across incredible India — written by the team that drives these roads every day.
          </p>

          {/* Editorial stat strip — inline numerals, no boxes */}
          <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3">
            <p className="text-white">
              <span className="font-display-serif text-2xl font-bold text-[#FACF2D] sm:text-3xl">{allPosts.length}+</span>
              <span className="ml-2 text-xs font-semibold uppercase tracking-[0.15em] text-white/50">Articles</span>
            </p>
            <span className="hidden h-8 w-px bg-white/15 sm:block" aria-hidden="true" />
            <p className="text-white">
              <span className="font-display-serif text-2xl font-bold text-[#FACF2D] sm:text-3xl">50+</span>
              <span className="ml-2 text-xs font-semibold uppercase tracking-[0.15em] text-white/50">Destinations</span>
            </p>
            <span className="hidden h-8 w-px bg-white/15 sm:block" aria-hidden="true" />
            <p className="text-white">
              <span className="font-display-serif text-2xl font-bold text-[#FACF2D] sm:text-3xl">{categories.length - 1}</span>
              <span className="ml-2 text-xs font-semibold uppercase tracking-[0.15em] text-white/50">Categories</span>
            </p>
          </div>
        </div>

        {/* Lane divider — masthead fold */}
        <span aria-hidden="true" className={`absolute inset-x-0 bottom-0 h-[5px] ${LANE}`} />
      </section>

      {/* ============================================ */}
      {/* FEATURED STORY — magazine opening spread      */}
      {/* ============================================ */}
      {featuredPost && (
        <section className="bg-slate-950 px-4 py-10 sm:px-6 sm:py-14">
          <div className="mx-auto w-full max-w-6xl">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#FACF2D] sm:text-xs">
              {activeCategory === 'all' ? 'Featured story' : `Latest in ${activeCategory}`}
            </p>

            <Link href={`/blog/${featuredPost.slug}`} className="group mt-4 block">
              <article className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl transition-colors duration-300 hover:border-[#FACF2D]/40">
                <div className="grid lg:grid-cols-[1.15fr_1fr]">
                  {/* Photo side — fixed heights, no CLS */}
                  <div className="relative h-64 w-full overflow-hidden sm:h-80 lg:h-full lg:min-h-[26rem]">
                    <Image
                      src={featuredPost.image || '/images/packages/manali.webp'}
                      alt={featuredPost.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 60vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                    <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-950/70 to-transparent lg:hidden" />
                  </div>

                  {/* Editorial side */}
                  <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
                    {featuredPost.category && (
                      <span className="inline-flex w-fit items-center gap-1.5 rounded-full border border-[#FACF2D]/35 bg-black/30 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em]">
                        <span className="text-gold-foil">{featuredPost.category}</span>
                      </span>
                    )}
                    <h2 className="font-display-serif mt-4 text-2xl font-bold leading-snug text-white transition-colors group-hover:text-[#FACF2D] sm:text-3xl lg:text-4xl">
                      {featuredPost.title}
                    </h2>
                    <p className="mt-4 line-clamp-3 text-sm leading-relaxed text-white/65 sm:text-base">
                      {featuredPost.excerpt}
                    </p>
                    <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-white/50 sm:text-sm">
                      <span className="inline-flex items-center gap-1.5">
                        <Calendar className="h-4 w-4 text-[#FACF2D]" />
                        {formatDate(featuredPost.date, true)}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <Clock className="h-4 w-4 text-[#FACF2D]" />
                        {featuredPost.readTime}
                      </span>
                    </div>
                    <span className="sheen mt-7 inline-flex w-fit items-center gap-2 rounded-xl bg-[#FACF2D] px-6 py-3 text-sm font-extrabold text-black transition-transform duration-200 group-hover:scale-[1.02]">
                      Read the story
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </div>
              </article>
            </Link>
          </div>
        </section>
      )}

      {/* ============================================ */}
      {/* ARCHIVE — warm light band, filter + card grid */}
      {/* ============================================ */}
      <section className="relative bg-gradient-to-b from-[#FFF6DC] via-amber-50/70 to-white py-12 sm:py-16">
        <span aria-hidden="true" className={`absolute inset-x-0 top-0 h-[5px] ${LANE}`} />
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
          {/* Filter pills — gold-hover, gold-active */}
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-amber-600 sm:text-xs">
                Browse the journal
              </p>
              <h2 className="font-display-serif mt-2 text-2xl font-bold text-slate-900 sm:text-3xl">
                {activeCategory === 'all' ? 'Latest Stories' : activeCategory}
              </h2>
              <p className="mt-1 text-sm text-slate-500">{filteredPosts.length} articles to explore</p>
            </div>

            {activeCategory !== 'all' && categoryServiceLinks[activeCategory] && (
              <Link
                href={categoryServiceLinks[activeCategory].href}
                className="inline-flex items-center gap-2 rounded-full border border-amber-300 bg-white px-4 py-2 text-sm font-bold text-amber-700 transition-colors hover:border-[#FACF2D] hover:bg-[#FACF2D]/10"
              >
                {categoryServiceLinks[activeCategory].label}
                <ArrowRight className="h-4 w-4" />
              </Link>
            )}
          </div>

          <div className="mt-6 flex flex-wrap gap-2 sm:gap-2.5">
            {categories.map((cat) => {
              const IconComponent = getCategoryIcon(cat);
              const active = activeCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  aria-pressed={active}
                  className={`inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold transition-all duration-200 ${
                    active
                      ? 'bg-[#FACF2D] text-black shadow-[0_8px_24px_-8px_rgba(250,207,45,0.7)]'
                      : 'border border-slate-200 bg-white text-slate-600 hover:border-[#FACF2D] hover:text-amber-700'
                  }`}
                >
                  <IconComponent className={`h-4 w-4 ${active ? 'text-black' : 'text-amber-500'}`} />
                  {cat === 'all' ? 'All Posts' : cat}
                </button>
              );
            })}
          </div>

          {/* Card grid — 2-per-row md, 3 lg */}
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {gridPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>

          {/* Empty state */}
          {filteredPosts.length === 0 && (
            <div className="py-12 sm:py-20 text-center">
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full border border-amber-200 bg-white">
                <Compass className="h-8 w-8 text-amber-400" />
              </div>
              <h3 className="font-display-serif mb-2 text-xl font-bold text-slate-900">No stories found</h3>
              <p className="text-slate-500">Try selecting a different category</p>
            </div>
          )}
        </div>
      </section>

      {/* ============================================ */}
      {/* CTA BAND — turn stories into bookings         */}
      {/* ============================================ */}
      <section className="relative overflow-hidden bg-slate-950 px-4 py-14 sm:px-6 sm:py-20">
        <span aria-hidden="true" className={`absolute inset-x-0 top-0 h-[5px] ${LANE}`} />
        <div className="absolute left-1/2 top-0 h-64 w-[36rem] max-w-full -translate-x-1/2 rounded-full bg-[#FACF2D]/10 blur-3xl" aria-hidden="true" />

        <div className="relative mx-auto w-full max-w-5xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#FACF2D]/30 bg-[#FACF2D]/10 px-4 py-2 text-sm font-semibold text-[#FACF2D]">
            <Star className="h-4 w-4" />
            4.8 Rating | 10,000+ Happy Customers
          </span>
          <h2 className="font-display-serif mt-6 text-3xl font-bold text-white sm:text-4xl">
            Turn These Stories Into
            <span className="text-gold-foil block sm:inline"> Your Next Adventure</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/65 sm:text-lg">
            Book comfortable AC cabs, tempo travellers, and buses across 500+ routes in India.
            Professional drivers, transparent pricing, and 24/7 support.
          </p>
          <p className="mt-4 text-xl font-bold text-[#FACF2D]">Starting from just ₹11/km</p>

          {/* Primary CTAs — compact on desktop, black-on-gold + sheen */}
          <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row">
            <a
              href={WA_HREF}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick('blog_hub_cta_band')}
              className="flex min-h-[52px] items-center justify-center gap-2.5 rounded-xl bg-[#25D366] px-6 py-3.5 text-base font-extrabold text-black transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#3ae07a] active:translate-y-0 active:scale-[0.99]"
            >
              <WhatsAppIcon className="h-5 w-5 shrink-0" />
              WhatsApp for Free Quote
            </a>
            <a
              href="tel:+917668570551"
              onClick={() => trackPhoneCall('blog_hub_cta_band', '+917668570551')}
              className="sheen flex min-h-[52px] items-center justify-center gap-2.5 rounded-xl bg-[#FACF2D] px-6 py-3.5 text-base font-extrabold text-black shadow-[0_10px_30px_-8px_rgba(250,207,45,0.6)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#ffdb4d] active:translate-y-0 active:scale-[0.99]"
            >
              <Phone className="h-5 w-5 shrink-0" />
              Call: 7668570551
            </a>
          </div>

          {/* Service shortcuts — glass chips */}
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {[
              { href: '/sightseeing', label: 'Explore Tours' },
              { href: '/pricing', label: 'View Pricing' },
              { href: '/tempo-traveller', label: 'Tempo Traveller' },
              { href: '/airport-service', label: 'Airport Transfer' },
            ].map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white/80 backdrop-blur-sm transition-colors hover:border-[#FACF2D]/50 hover:bg-[#FACF2D]/10 hover:text-[#FACF2D]"
              >
                {s.label} <ArrowRight className="h-4 w-4" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* SEO CONTENT — preserved copy + internal links */}
      {/* ============================================ */}
      <section className="bg-white px-4 py-14 sm:px-6 sm:py-16">
        <div className="mx-auto max-w-4xl">
          <span aria-hidden="true" className={`block h-[3px] w-24 opacity-70 ${LANE}`} />
          <h2 className="font-display-serif mt-6 mb-6 text-2xl font-bold text-slate-900 sm:text-3xl">
            India Travel Blog — Expert Guides, Destination Tips & Itineraries
          </h2>
          <div className="space-y-5 text-base leading-relaxed text-slate-700">
            <p>
              Welcome to the Triveni Cabs™ travel blog — your go-to resource for planning the perfect trip across India.
              Whether you are looking for the best hill stations in North India, spiritual pilgrimage routes, heritage
              sightseeing tours, or adventure destinations, our expert travel guides cover it all. We publish in-depth
              destination guides for popular cities like <Link href="/sightseeing/agra" className="font-semibold text-amber-700 underline underline-offset-4 hover:text-amber-800">Agra</Link>,{' '}
              <Link href="/sightseeing/jaipur" className="font-semibold text-amber-700 underline underline-offset-4 hover:text-amber-800">Jaipur</Link>,{' '}
              <Link href="/sightseeing/manali" className="font-semibold text-amber-700 underline underline-offset-4 hover:text-amber-800">Manali</Link>,{' '}
              <Link href="/sightseeing/shimla" className="font-semibold text-amber-700 underline underline-offset-4 hover:text-amber-800">Shimla</Link>,
              and many more.
            </p>
            <p>
              Planning a group trip? Check out our <Link href="/tempo-traveller" className="font-semibold text-amber-700 underline underline-offset-4 hover:text-amber-800">tempo traveller rental</Link> starting
              at ₹23/km for 12–26 seater AC vehicles. For families and couples, our{' '}
              <Link href="/pricing" className="font-semibold text-amber-700 underline underline-offset-4 hover:text-amber-800">sedan rentals start at just ₹11/km</Link> with
              professional drivers, transparent pricing, and no hidden charges. We also offer{' '}
              <Link href="/airport-service" className="font-semibold text-amber-700 underline underline-offset-4 hover:text-amber-800">24/7 airport transfer services</Link> across
              50+ airports and <Link href="/wedding" className="font-semibold text-amber-700 underline underline-offset-4 hover:text-amber-800">luxury wedding car rentals</Link> including
              BMW, Audi, and Mercedes.
            </p>
            <p>
              With 10,000+ happy customers, a 4.8-star rating, and service across 500+ destinations in India, Triveni Cabs™
              is trusted by solo travellers, families, corporate groups, and wedding planners alike. Browse our travel
              articles above, or <Link href="/contact" className="font-semibold text-amber-700 underline underline-offset-4 hover:text-amber-800">contact us</Link> for
              a personalized travel plan and free quote.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

// ============================================================================
// BlogCard — clean editorial archive card (one variant, luxury spacing).
// ============================================================================
function BlogCard({ post }) {
  return (
    <article className="group h-full">
      <Link href={`/blog/${post.slug}`} className="block h-full">
        <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-[#FACF2D] hover:shadow-xl">
          {/* Fixed-height photo — no CLS */}
          <div className="relative h-52 w-full overflow-hidden">
            <Image
              src={post.image || '/images/packages/manali.webp'}
              alt={post.title}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              quality={70}
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {post.category && (
              <span className="absolute left-4 top-4 rounded-full bg-black/65 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.14em] text-[#FACF2D] backdrop-blur-sm">
                {post.category}
              </span>
            )}
          </div>

          <div className="flex flex-1 flex-col p-5 sm:p-6">
            <div className="mb-3 flex items-center gap-3 text-xs text-slate-400">
              <span className="inline-flex items-center gap-1">
                <Calendar className="h-3.5 w-3.5 text-amber-500" />
                {formatDate(post.date)}
              </span>
              <span className="inline-flex items-center gap-1">
                <Clock className="h-3.5 w-3.5 text-amber-500" />
                {post.readTime}
              </span>
            </div>

            <h3 className="font-display-serif mb-2 line-clamp-2 text-lg font-bold leading-snug text-slate-900 transition-colors group-hover:text-amber-700 sm:text-xl">
              {post.title}
            </h3>

            <p className="mb-4 line-clamp-2 flex-1 text-sm leading-relaxed text-slate-500">{post.excerpt}</p>

            <span className="inline-flex items-center gap-1.5 text-sm font-bold text-amber-700 transition-all group-hover:gap-2.5">
              Read the story <ArrowRight className="h-4 w-4" />
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
}
