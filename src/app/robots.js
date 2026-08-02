// src/app/robots.js
// Controls how search engines and bots crawl the site.
// 2026 strategy: allow classical search + AI/LLM crawlers (critical for AI Overview citations),
// rate-limit SEO tool bots instead of full-blocking them, and deny parameter/admin noise.

export default function robots() {
  return {
    rules: [
      // Default rule for all crawlers
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/admin/',
          // NOTE: do NOT block /_next/ — Googlebot must fetch /_next/static
          // JS & CSS to render pages and assess Core Web Vitals. Blocking it
          // triggers GSC "blocked resources" warnings and can suppress rendered
          // content. Only the client-nav JSON under /_next/data/ is kept out.
          '/_next/data/',
          '/search?',         // avoid indexing internal search result pages
          '/*?utm_',          // avoid indexing tracking-parameter duplicates
          '/*?fbclid=',
          '/*?gclid=',
          '/*?ref=',
          '/*?source=',
        ],
      },
      // Googlebot — primary target
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: ['/api/', '/admin/'],
      },
      { userAgent: 'Googlebot-Image', allow: '/images/' },
      { userAgent: 'Googlebot-News', allow: '/blog/' },
      // Google-Extended — opt-in for Gemini/Bard training. Allow to be cited in AI overviews.
      { userAgent: 'Google-Extended', allow: '/' },
      // Bingbot — secondary search engine + ChatGPT Browse fallback
      {
        userAgent: 'Bingbot',
        allow: '/',
        disallow: ['/api/', '/admin/'],
        crawlDelay: 2,
      },
      // Yandex, DuckDuckBot, Baidu — international reach
      { userAgent: 'YandexBot', allow: '/', crawlDelay: 3 },
      { userAgent: 'DuckDuckBot', allow: '/' },
      { userAgent: 'Applebot', allow: '/' },
      { userAgent: 'Applebot-Extended', allow: '/' },
      // AI / LLM crawlers — allowed so Triveni Cabs can be cited in
      // ChatGPT, Claude, Perplexity, Gemini, Pi, etc. This is the single
      // most important 2026 change: brand visibility in AI answers.
      { userAgent: 'GPTBot', allow: '/' },
      { userAgent: 'OAI-SearchBot', allow: '/' },
      { userAgent: 'ChatGPT-User', allow: '/' },
      { userAgent: 'ClaudeBot', allow: '/' },
      { userAgent: 'Claude-Web', allow: '/' },
      { userAgent: 'anthropic-ai', allow: '/' },
      { userAgent: 'PerplexityBot', allow: '/' },
      { userAgent: 'Perplexity-User', allow: '/' },
      { userAgent: 'YouBot', allow: '/' },
      { userAgent: 'cohere-ai', allow: '/' },
      { userAgent: 'Meta-ExternalAgent', allow: '/' },
      { userAgent: 'Bytespider', allow: '/', crawlDelay: 5 },
      // Added May 2026 — close gaps identified in AEO/GEO standards audit.
      // Amazonbot feeds Alexa/Rufus shopping AI; CCBot powers Common Crawl
      // which is the training corpus most LLMs consume; Diffbot powers
      // several enterprise AI search products.
      { userAgent: 'Amazonbot', allow: '/' },
      { userAgent: 'CCBot', allow: '/', crawlDelay: 10 },
      { userAgent: 'Diffbot', allow: '/', crawlDelay: 10 },
      // Legitimate SEO tools — rate-limit instead of full-blocking so agencies
      // auditing Triveni Cabs for partnerships can see the site. Full block
      // previously disallowed SemrushBot/AhrefsBot which is over-aggressive.
      { userAgent: 'SemrushBot', allow: '/', crawlDelay: 10 },
      { userAgent: 'AhrefsBot', allow: '/', crawlDelay: 10 },
      { userAgent: 'DataForSeoBot', allow: '/', crawlDelay: 10 },
      // Block only the truly abusive scrapers
      {
        userAgent: [
          'MJ12bot',
          'DotBot',
          'BLEXBot',
          'PetalBot',
          'SeekportBot',
          'Mediatoolkitbot',
          'MauiBot',
          'serpstatbot',
        ],
        disallow: '/',
      },
    ],
    sitemap: [
      'https://www.trivenicabs.in/sitemap.xml',
      'https://www.trivenicabs.in/sitemap-images.xml',
    ],
    host: 'https://www.trivenicabs.in',
  };
}
