export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/', '/_next/data/'],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
        crawlDelay: 2,
      },
      {
        userAgent: ['MJ12bot', 'DotBot', 'BLEXBot', 'PetalBot'],
        disallow: '/',
      },
    ],
    sitemap: 'https://www.trivenicabs.in/sitemap.xml',
  };
}
