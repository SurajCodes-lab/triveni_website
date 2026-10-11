import { bookingCanonicalRedirects } from './src/lib/seo/booking-canonical-redirects.mjs';
import { NOINDEX_FAMILIES, NOINDEX_ENABLED } from './src/lib/seo/noindex-families.mjs';
import { brokenLinkRedirects } from './src/lib/seo/broken-link-redirects.mjs';
/** @type {import('next').NextConfig} */
const nextConfig = {
  // URL Handling - Ensure consistent canonical URLs (no trailing slashes)
  trailingSlash: false,

  // Bundle optimization: tree-shake heavy packages automatically
  experimental: {
    // Inline the CSS the first screen actually needs and load the rest
    // asynchronously. Measured cause: the single stylesheet is 472 KB raw /
    // 58 KB transferred, and because a stylesheet blocks rendering, Lighthouse
    // charged it 1,661 ms of delay before anything could paint. That delay is
    // the ceiling on First Contentful Paint, and therefore on LCP — the largest
    // element cannot paint before the first one does.
    // NOTE ON CRITICAL CSS — both routes were tried and measured, neither shipped.
    //
    // Lighthouse reports 94.8% of the stylesheet unused on any given page (54,785
    // of 57,792 bytes). That is structural: Tailwind emits one file covering every
    // utility used anywhere across 3,392 pages and each page needs a twentieth of it.
    //
    //   optimizeCss (critters)  the build accepts the flag but emits no inline
    //                           styles for App Router output. No effect.
    //   inlineCss: true         removes the blocking request, but the final clean
    //                           build regressed from 2.7 s / 96 performance to
    //                           3.0 s / 92 because the full CSS inflated HTML.
    //
    // Left linked and cached deliberately. Route-group stylesheet splitting is
    // the real fix for the remaining local Lighthouse gap.

    optimizePackageImports: [
      'lucide-react',
      'framer-motion',
    ],
    // Tag the LCP/CLS/INP elements in the build so field-CWV attribution
    // (WebVitalsReporter) can pinpoint the exact element behind a regression.
    webVitalsAttribution: ['LCP', 'CLS', 'INP'],
  },

  // Image Optimization
  images: {
    formats: ['image/avif', 'image/webp'],
    // 3840 restored in Week 47: it is Next's default and Googlebot still requests
    // w=3840 variants it crawled earlier; without it the optimizer returns 400 and
    // Search Console reports "Blocked due to other 4xx issue".
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000, // 1 year cache
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [
      { protocol: 'https', hostname: 'media.istockphoto.com' },
      { protocol: 'https', hostname: 't4.ftcdn.net' },
      { protocol: 'https', hostname: 'img.freepik.com' },
      { protocol: 'https', hostname: 'upload.wikimedia.org' },
      { protocol: 'https', hostname: 'res.cloudinary.com' },
      { protocol: 'https', hostname: 'encrypted-tbn0.gstatic.com' },
      { protocol: 'https', hostname: 'media.gettyimages.com' },
      { protocol: 'https', hostname: 'stimg.cardekho.com' },
      { protocol: 'https', hostname: 'www.kia.com' },
      { protocol: 'https', hostname: 'bmw.scene7.com' },
      { protocol: 'https', hostname: '5.imimg.com' },
      { protocol: 'https', hostname: '4.imimg.com' },
      { protocol: 'https', hostname: 'imgd.aeplcdn.com' },
    ],
  },

  // Performance optimizations
  compress: true,
  poweredByHeader: false,

  // Strict mode for better development
  reactStrictMode: true,

  // Redirect non-www to www for canonical URL consolidation
  // GSC shows trivenicabs.in getting separate impressions from www.trivenicabs.in
  // This splits ranking signals — consolidating to www via 301 redirect
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'trivenicabs.in' }],
        destination: 'https://www.trivenicabs.in/:path*',
        permanent: true, // 301 redirect — tells Google to consolidate
      },
      // Week 43 — booking-cluster canonicalisation. 21 duplicate booking URLs
      // folded into one canonical page per route so link equity stops being
      // split five ways. See src/lib/seo/booking-canonical-redirects.mjs for the
      // Search Console evidence behind each entry.
      ...bookingCanonicalRedirects,
      // Week 47 — URL shapes Googlebot was 404-ing on, from the server access log.
      // Place @ids used to be built as <page>/origin and <page>/destination; Google
      // strips the fragment and crawls the path. The ids are now fragments, and
      // these fold the already-discovered paths back onto the page.
      { source: '/:path*/origin', destination: '/:path*', permanent: true },
      { source: '/:path*/destination', destination: '/:path*', permanent: true },
      // Old per-destination weekend-getaway URLs -> the city guide that exists.
      { source: '/weekend-getaways-from-delhi-by-car-:dest', destination: '/weekend-getaways-from-delhi-by-car', permanent: true },
      { source: '/weekend-getaways-from-jaipur-by-car-:dest', destination: '/weekend-getaways-from-jaipur-by-car', permanent: true },
      { source: '/weekend-getaways-from-chandigarh-by-car-:dest', destination: '/weekend-getaways-from-chandigarh-by-car', permanent: true },
      // A doubled suffix from an old link builder.
      { source: '/ertiga-hire-hire/:slug', destination: '/ertiga-hire/:slug', permanent: true },
      { source: '/innova-hire-hire/:slug', destination: '/innova-hire/:slug', permanent: true },
      // Week 47 — 1,352 URLs the site's own pages linked to but never built (audit
      // of every href in the production build), folded onto the nearest real page.
      // Generated: see src/lib/seo/broken-link-redirects.mjs.
      ...brokenLinkRedirects,
    ];
  },

  // Headers for caching, security, and performance
  async headers() {
    return [
      // Global security + performance headers on ALL routes
      {
        source: '/:path*',
        headers: [
          { key: 'X-DNS-Prefetch-Control', value: 'on' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'origin-when-cross-origin' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'X-XSS-Protection', value: '1; mode=block' },
          { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(self)' },
        ],
      },
      // Image caching - 1 year immutable
      {
        source: '/images/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      {
        source: '/:path*.webp',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      {
        source: '/:path*.jpg',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      {
        source: '/:path*.png',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      {
        source: '/:path*.svg',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      {
        source: '/:path*.avif',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      // Font caching - 1 year immutable
      {
        source: '/fonts/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      {
        source: '/:path*.woff2',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      {
        source: '/:path*.woff',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      // Hashed JS/CSS assets - 1 year immutable
      {
        source: '/_next/static/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      // HTML pages — 1-week CDN cache with 1-day stale-while-revalidate.
      // Previously s-maxage=31536000 (1 year) which meant content fixes took
      // up to a year to propagate via the CDN. Cutting to 7 days (604800s)
      // so editorial fixes reach users within a week while still benefiting
      // from CDN caching. stale-while-revalidate=86400 means users see the
      // cached version instantly while a fresh version is fetched in the
      // background — best of both worlds.
      {
        source: '/:path((?!api|_next|images|fonts).*)',
        headers: [
          // max-age=0 forces BROWSERS to revalidate every visit (design updates
          // appear immediately — users were seeing stale cached HTML for days);
          // s-maxage=3600 still shields the origin via CDN/shared caches.
          { key: 'Cache-Control', value: 'public, max-age=0, must-revalidate, s-maxage=3600, stale-while-revalidate=86400' },
          // Allow Google to display full-size previews, unlimited-length
          // snippets, and large image thumbnails (critical for travel queries
          // where rich previews drive CTR). Unlimited video-preview is
          // harmless because Triveni's travel videos welcome full-frame.
          // X-Robots-Tag 'index, follow' header removed in Week 47: it is the default,
          // and with per-slug noindex rules the page's robots meta must be the only
          // signal. The noindex family headers below remain.
        ],
      },
      // De-indexed templated families (Week 47) — the header must agree with the
      // page's robots meta, and a later rule overrides the global "index, follow"
      // above for the same key. Children only: prefixes end in "/", so the hubs
      // (/round-trip, /event-transportation-service, …) keep the global value.
      // ":path+" (one or more segments), NOT ":path*" — the star form also matches
      // the bare hub (/round-trip) and would put a noindex header on a page whose
      // own meta says index. Caught on the live site on 5 Sept and corrected.
      ...(NOINDEX_ENABLED ? NOINDEX_FAMILIES : []).map((f) => ({
        source: `${f.prefix}:path+`,
        headers: [{ key: 'X-Robots-Tag', value: 'noindex, follow' }],
      })),
      // Internal search + API routes must never be indexed
      {
        source: '/api/:path*',
        headers: [
          { key: 'X-Robots-Tag', value: 'noindex, nofollow' },
        ],
      },
    ];
  },
};

export default nextConfig;
