'use client';

import { useState, memo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
// Centralized icon imports for better bundle optimization
import { Calendar, Clock, Eye, ArrowRight } from '@/components/ui/icons';
import { motion } from 'framer-motion';
import { blurDataURL } from '@/utilis/imageUtils';

const BlogCard = memo(function BlogCard({ post, index = 0 }) {
  const [imageError, setImageError] = useState(false);

  // Safety check - only require essential fields
  if (!post || !post.slug || !post.title) {
    console.log('BlogCard: Invalid post', post);
    return null;
  }

  const formattedDate = new Date(post.date || Date.now()).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-card-lg shadow-card overflow-hidden hover:shadow-card-hover transition-all duration-normal group h-full flex flex-col"
    >
      {/* Image - Using Next.js Image for SEO & Performance */}
      <Link href={`/blog/${post.slug}`} className="relative h-56 overflow-hidden block">
        {post.image && !imageError ? (
          <Image
            src={post.image}
            alt={post.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover group-hover:scale-110 transition-transform duration-slow"
            onError={() => setImageError(true)}
            loading="lazy"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAYH/8QAHxAAAgICAgMBAAAAAAAAAAAAAQIDBAURACExEkFR/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAZEQACAwEAAAAAAAAAAAAAAAABAgADESH/2gAMAwEAAhEDEEAAAABHgkc7N//Z"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center text-white text-6xl">
            📝
          </div>
        )}
        {post.featured && (
          <div className="absolute top-4 left-4 bg-primary text-black px-3 py-1 rounded-badge text-label-sm font-bold z-10">
            Featured
          </div>
        )}
        {post.category && (
          <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1 rounded-badge text-label-sm z-10">
            {post.category}
          </div>
        )}
      </Link>

      {/* Content */}
      <div className="p-6 flex-1 flex flex-col">
        {/* Meta Info */}
        <div className="flex items-center flex-wrap gap-4 text-body-sm text-content-secondary mb-3">
          <span className="flex items-center gap-1">
            <Calendar className="w-4 h-4 flex-shrink-0" />
            {formattedDate}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="w-4 h-4 flex-shrink-0" />
            {post.readTime}
          </span>
          {post.views && (
            <span className="flex items-center gap-1">
              <Eye className="w-4 h-4 flex-shrink-0" />
              {post.views}
            </span>
          )}
        </div>

        {/* Title */}
        <Link href={`/blog/${post.slug}`}>
          <h2 className="text-heading-sm md:text-heading-md font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors duration-normal line-clamp-2">
            {post.title}
          </h2>
        </Link>

        {/* Excerpt */}
        <p className="text-body-md text-content-secondary mb-4 line-clamp-3 flex-1">
          {post.excerpt}
        </p>

        {/* Tags */}
        {post.tags && post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.slice(0, 3).map((tag, i) => (
              <span
                key={i}
                className="bg-gray-100 text-content-secondary px-3 py-1 rounded-badge text-label-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Read More Button */}
        <Link
          href={`/blog/${post.slug}`}
          className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all duration-normal mt-auto group/link"
        >
          Read Full Article
          <ArrowRight className="w-5 h-5 group-hover/link:translate-x-1 transition-transform duration-normal" />
        </Link>
      </div>
    </motion.article>
  );
});

export default BlogCard;
