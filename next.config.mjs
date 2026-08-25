import { bookingCanonicalRedirects } from './src/lib/seo/booking-canonical-redirects.mjs';
/** @type {import('next').NextConfig} */
const nextConfig = {
  // URL Handling - Ensure consistent canonical URLs (no trailing slashes)
  trailingSlash: false,

  // Bundle optimization: tree-shake heavy packages automatically
  experimental: {
    optimizePackageImports: [
      'lucide-react',
      'framer-motion',
      '@heroicons/react',
    ],
    // Tag the LCP/CLS/INP elements in the build so field-CWV attribution
    // (WebVitalsReporter) can pinpoint the exact element behind a regression.
    webVitalsAttribution: ['LCP', 'CLS', 'INP'],
  },

  // Image Optimization
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
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
          { key: 'X-Robots-Tag', value: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1' },
        ],
      },
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
