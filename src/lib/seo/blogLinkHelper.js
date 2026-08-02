// Server-side helper: pick blog posts relevant to a route/city so money pages
// can link back to blogs (reverses the one-way blog→money link flow).
// SERVER COMPONENTS ONLY — blog.js is large; never import this from a client
// component or it lands in the JS bundle.
import { blogPosts } from '@/utilis/blog';

export function getRelatedBlogPosts(cityNames = [], limit = 3) {
  const keys = (cityNames || [])
    .filter(Boolean)
    .map((c) => String(c).toLowerCase().trim())
    .filter((c) => c.length >= 3);
  if (keys.length === 0) return [];
  const scored = [];
  for (const p of blogPosts) {
    if (!p || !p.slug || !p.title) continue;
    const hay = `${p.slug} ${p.title} ${(p.tags || []).join(' ')}`.toLowerCase();
    let score = 0;
    keys.forEach((k, i) => {
      if (hay.includes(k)) {
        score += k.length > 4 ? 2 : 1;
        // destination (last key) matters more than origin
        if (i === keys.length - 1) score += 1;
      }
    });
    if (score > 0) scored.push([score, p]);
  }
  scored.sort((a, b) => b[0] - a[0]);
  return scored.slice(0, limit).map(([, p]) => ({
    slug: p.slug,
    title: p.title,
    readTime: p.readTime || null,
  }));
}
