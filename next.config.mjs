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
      // HTML pages - long CDN cache (all pages are fully static with revalidate=false)
      {
        source: '/:path((?!api|_next|images|fonts).*)',
        headers: [
          { key: 'Cache-Control', value: 'public, s-maxage=31536000, stale-while-revalidate=604800' },
        ],
      },
    ];
  },
};

export default nextConfig;
