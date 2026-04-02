'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight, Star } from '@/components/ui/icons';
import LiveActivityBadge from '@/components/shared/LiveActivityBadge';
import { heroBlurDataURL } from '@/utilis/imageUtils';

/**
 * PageHeroLight — Premium hero section for programmatic pages.
 * Supports both light and dark variants with real images.
 *
 * - Light: White bg with subtle city image background, gold accents
 * - Dark: Cinematic photo hero with gradient overlay, bright CTA contrast
 *
 * Usage:
 *   <PageHeroLight
 *     title="Delhi to Agra Distance"
 *     subtitle="Complete road distance, driving time & cab booking guide"
 *     badgeText="Distance Guide 2026"
 *     variant="dark"
 *     heroImage="/images/sightseeing/Agra/Agra_Hero_section.jpg"
 *     breadcrumbItems={[{ label: 'Distance', href: '/distance' }]}
 *     statsRow={[{ label: '280 km', sub: 'Distance', icon: Route }]}
 *     accentColor="indigo"
 *   >
 *     <CTAButtons />
 *   </PageHeroLight>
 */

const accentMap = {
  amber:   { badge: 'bg-amber-500/15 border-amber-400/30 text-amber-300', text: 'from-[#FACF2D] via-amber-400 to-orange-400', stat: 'text-amber-400', bar: 'from-[#FACF2D] via-amber-400 to-orange-400' },
  indigo:  { badge: 'bg-indigo-500/15 border-indigo-400/30 text-indigo-300', text: 'from-indigo-400 via-blue-400 to-cyan-400', stat: 'text-indigo-400', bar: 'from-indigo-500 via-blue-500 to-cyan-500' },
  emerald: { badge: 'bg-emerald-500/15 border-emerald-400/30 text-emerald-300', text: 'from-emerald-400 via-teal-400 to-cyan-400', stat: 'text-emerald-400', bar: 'from-emerald-500 via-teal-500 to-cyan-500' },
  purple:  { badge: 'bg-purple-500/15 border-purple-400/30 text-purple-300', text: 'from-purple-400 via-violet-400 to-fuchsia-400', stat: 'text-purple-400', bar: 'from-purple-500 via-violet-500 to-fuchsia-500' },
  rose:    { badge: 'bg-rose-500/15 border-rose-400/30 text-rose-300', text: 'from-rose-400 via-pink-400 to-orange-400', stat: 'text-rose-400', bar: 'from-rose-500 via-pink-500 to-orange-500' },
  cyan:    { badge: 'bg-cyan-500/15 border-cyan-400/30 text-cyan-300', text: 'from-cyan-400 via-sky-400 to-blue-400', stat: 'text-cyan-400', bar: 'from-cyan-500 via-sky-500 to-blue-500' },
};

export default function PageHeroLight({
  title,
  subtitle,
  badgeText,
  badgeIcon: BadgeIcon = Star,
  breadcrumbItems = [],
  statsRow = [],
  heroImage,
  variant = 'dark',
  accentColor = 'amber',
  children,
}) {
  const isDark = variant === 'dark';
  const accent = accentMap[accentColor] || accentMap.amber;
  const allBreadcrumbs = [{ label: 'Home', href: '/' }, ...breadcrumbItems];

  return (
    <section className={`relative overflow-hidden ${isDark ? 'bg-gray-950' : 'bg-gradient-to-br from-white via-amber-50/30 to-yellow-50/30'}`}>
      {/* Hero background image */}
      {heroImage && (
        <>
          <Image
            src={heroImage}
            alt={title}
            fill
            priority
            className={`object-cover object-center ${isDark ? 'opacity-30' : 'opacity-[0.08]'}`}
            sizes="100vw"
            quality={isDark ? 75 : 60}
            placeholder="blur"
            blurDataURL={heroBlurDataURL}
          />
          {isDark ? (
            <>
              <div className="absolute inset-0 bg-gradient-to-b from-gray-950/60 via-gray-950/80 to-gray-950" />
              <div className="absolute inset-0 bg-gradient-to-r from-gray-950/40 via-transparent to-gray-950/40" />
            </>
          ) : (
            <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/90 to-white" />
          )}
        </>
      )}

      {/* Accent bar at top */}
      <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${accent.bar} z-10`} />

      {/* Subtle grid pattern for dark */}
      {isDark && (
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,.12) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.12) 1px,transparent 1px)',
          backgroundSize: '80px 80px'
        }} />
      )}

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 pt-24 sm:pt-28 pb-12 sm:pb-16">
        {/* Breadcrumb */}
        {breadcrumbItems.length > 0 && (
          <nav aria-label="Breadcrumb" className="mb-4">
            <ol className="flex items-center flex-wrap gap-1 text-sm">
              {allBreadcrumbs.map((item, i) => {
                const isLast = i === allBreadcrumbs.length - 1;
                return (
                  <li key={i} className="flex items-center">
                    {i > 0 && <ChevronRight className={`w-3.5 h-3.5 mx-1.5 ${isDark ? 'text-white/30' : 'text-gray-400'}`} />}
                    {isLast ? (
                      <span className={`font-medium ${isDark ? 'text-white/80' : 'text-gray-900'}`}>{item.label}</span>
                    ) : (
                      <Link href={item.href} className={`transition-colors ${isDark ? 'text-white/40 hover:text-white/70' : 'text-gray-500 hover:text-amber-600'}`}>
                        {item.label}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ol>
          </nav>
        )}

        {/* Badge */}
        {badgeText && (
          <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-4 border ${
            isDark ? accent.badge : 'bg-amber-50 border-amber-200/60'
          }`}>
            <BadgeIcon className={`w-3.5 h-3.5 ${isDark ? '' : 'text-amber-600'}`} />
            <span className={`text-xs font-bold uppercase tracking-wider ${isDark ? '' : 'text-amber-700'}`}>{badgeText}</span>
          </div>
        )}

        {/* Title */}
        <h1 className={`text-3xl sm:text-4xl md:text-5xl font-black leading-tight tracking-tight mb-3 ${
          isDark ? 'text-white' : 'text-gray-900'
        }`}>
          {title}
        </h1>

        {/* Subtitle */}
        {subtitle && (
          <p className={`text-base sm:text-lg max-w-2xl mb-6 leading-relaxed ${isDark ? 'text-white/50' : 'text-gray-600'}`}>{subtitle}</p>
        )}

        {/* Stats row */}
        {statsRow.length > 0 && (
          <div className="flex flex-wrap gap-3 sm:gap-4 mb-5">
            {statsRow.map((stat, i) => (
              <div key={i} className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xl ${
                isDark
                  ? 'bg-white/5 backdrop-blur-sm border border-white/10'
                  : 'bg-white/80 backdrop-blur-sm border border-gray-200/60 shadow-sm'
              }`}>
                {stat.icon && <stat.icon className={`w-4 h-4 flex-shrink-0 ${isDark ? accent.stat : 'text-amber-600'}`} />}
                <div>
                  <span className={`text-sm font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>{stat.label}</span>
                  {stat.sub && <span className={`text-xs ml-1.5 ${isDark ? 'text-white/40' : 'text-gray-500'}`}>{stat.sub}</span>}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Live activity */}
        <LiveActivityBadge type="booked" min={5} max={18} />

        {/* Optional children (CTA buttons, pricing strip, etc.) */}
        {children && <div className="mt-5">{children}</div>}
      </div>
    </section>
  );
}
