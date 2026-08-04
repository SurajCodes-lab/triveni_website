// Blog RSS feed — crawl-freshness signal (Google Discover, Bing, feed readers)
// and a pull-back channel: subscribers get every new post without searching.
import { blogPosts } from '@/utilis/blog';

export const dynamic = 'force-static';
export const revalidate = 3600;

const BASE = 'https://www.trivenicabs.in';

function esc(s) {
  return String(s || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

export async function GET() {
  const posts = (blogPosts || [])
    .filter((p) => p && p.slug && p.title && p.date)
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 50);

  const items = posts
    .map(
      (p) => `    <item>
      <title>${esc(p.title)}</title>
      <link>${BASE}/blog/${p.slug}</link>
      <guid isPermaLink="true">${BASE}/blog/${p.slug}</guid>
      <pubDate>${new Date(p.date).toUTCString()}</pubDate>
      <description>${esc(p.excerpt || p.metaDescription || '')}</description>
    </item>`
    )
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Triveni Cabs — Travel Guides &amp; Road Trip Blog</title>
    <link>${BASE}/blog</link>
    <atom:link href="${BASE}/rss.xml" rel="self" type="application/rss+xml"/>
    <description>Road trips, fares, tolls and travel guides for North India — from the Triveni Cabs booking desk.</description>
    <language>en-in</language>
    <lastBuildDate>${posts[0] ? new Date(posts[0].date).toUTCString() : new Date().toUTCString()}</lastBuildDate>
${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}
