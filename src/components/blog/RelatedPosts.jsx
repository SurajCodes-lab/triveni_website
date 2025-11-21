'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Clock } from 'lucide-react';
import { blogPosts } from '@/utilis/blog';

function RelatedPostCard({ post }) {
  const [imageError, setImageError] = useState(false);

  if (!post || !post.slug || !post.title) return null;

  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group"
    >
      <article className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
        <div className="relative h-48 overflow-hidden">
          {post.image && !imageError ? (
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-4xl">
              📝
            </div>
          )}
          {post.category && (
            <div className="absolute top-3 right-3 bg-black/70 text-white px-3 py-1 rounded-full text-xs font-semibold">
              {post.category}
            </div>
          )}
        </div>
        <div className="p-6">
          <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
            <Clock className="w-4 h-4" />
            <span>{post.readTime || '5 min read'}</span>
          </div>
          <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-[#FACF2D] transition-colors line-clamp-2">
            {post.title}
          </h3>
          <p className="text-gray-600 text-sm line-clamp-2 mb-4">
            {post.excerpt || ''}
          </p>
          <div className="flex items-center text-[#FACF2D] font-semibold text-sm group-hover:gap-2 transition-all">
            Read More
            <ArrowRight className="w-4 h-4 ml-1 group-hover:ml-2 transition-all" />
          </div>
        </div>
      </article>
    </Link>
  );
}

export default function RelatedPosts({ currentPostId, currentCategory, currentTags }) {
  // Find related posts based on category and tags
  const relatedPosts = blogPosts
    .filter(post => post && post.id && post.slug && post.id !== currentPostId) // Safety check and exclude current post
    .map(post => {
      let score = 0;

      // Same category gets higher score
      if (post.category === currentCategory) {
        score += 3;
      }

      // Matching tags
      const matchingTags = post.tags && currentTags ? post.tags.filter(tag => currentTags.includes(tag)) : [];
      score += matchingTags.length;

      return { ...post, score };
    })
    .sort((a, b) => b.score - a.score) // Sort by relevance
    .slice(0, 3); // Get top 3

  if (relatedPosts.length === 0) return null;

  return (
    <section className="mt-16 pt-16 border-t">
      <h2 className="text-3xl font-bold mb-8">Related Articles</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {relatedPosts.map((post) => (
          <RelatedPostCard key={post.id || post.slug} post={post} />
        ))}
      </div>
    </section>
  );
}
