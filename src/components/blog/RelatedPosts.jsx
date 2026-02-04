'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Clock, Phone, MessageCircle } from 'lucide-react';
import { blogPosts } from '@/utilis/blog';
import { phoneNumber } from '@/utilis/data';

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
            <Image
              src={post.image}
              alt={post.title}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover group-hover:scale-110 transition-transform duration-500"
              onError={() => setImageError(true)}
              loading="lazy"
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAYH/8QAHxAAAgICAgMBAAAAAAAAAAAAAQIDBAURACExEkFR/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAZEQACAwEAAAAAAAAAAAAAAAABAgADESH/2gAMAwEAAhEDEQA/AJHgkc7N//Z"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-4xl">
              📝
            </div>
          )}
          {post.category && (
            <div className="absolute top-3 right-3 bg-black/70 text-white px-3 py-1 rounded-full text-xs font-semibold z-10">
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
      {/* Conversion CTA before related posts */}
      <div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-2xl p-6 md:p-8 mb-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
              Ready to Book Your Trip?
            </h3>
            <p className="text-gray-600">
              Get instant quotes, AC vehicles, and 24/7 support. Starting from just ₹11/km.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <a
              href={`https://wa.me/91${phoneNumber}?text=${encodeURIComponent("Hi! I'm interested in booking a trip. Can you help with details and pricing?")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-xl transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp Us
            </a>
            <a
              href={`tel:+91${phoneNumber}`}
              className="flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-6 rounded-xl transition-colors"
            >
              <Phone className="w-5 h-5" />
              Call Now
            </a>
          </div>
        </div>
      </div>

      <h2 className="text-3xl font-bold mb-8">Related Articles</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {relatedPosts.map((post) => (
          <RelatedPostCard key={post.id || post.slug} post={post} />
        ))}
      </div>
    </section>
  );
}
