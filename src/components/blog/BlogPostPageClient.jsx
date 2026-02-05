'use client';

import { useMemo } from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { getRelatedLinks } from '@/utilis/linkingHelper';
import { getLayoutComponent } from './layouts';
import RelatedPosts from './RelatedPosts';

// Loading placeholder for blog layouts
const LayoutLoading = () => (
  <div className="min-h-screen animate-pulse">
    <div className="h-64 bg-gray-200" />
    <div className="max-w-4xl mx-auto p-6 space-y-4">
      <div className="h-8 bg-gray-200 rounded w-3/4" />
      <div className="h-4 bg-gray-200 rounded w-full" />
      <div className="h-4 bg-gray-200 rounded w-5/6" />
    </div>
  </div>
);

// Dynamically import layouts - only the needed one is loaded per page
const layoutComponents = {
  FortPalaceLayout: dynamic(() => import('./layouts/FortPalaceLayout'), { loading: LayoutLoading }),
  TempleLayout: dynamic(() => import('./layouts/TempleLayout'), { loading: LayoutLoading }),
  NatureLayout: dynamic(() => import('./layouts/NatureLayout'), { loading: LayoutLoading }),
  MonumentLayout: dynamic(() => import('./layouts/MonumentLayout'), { loading: LayoutLoading }),
  CityGuideLayout: dynamic(() => import('./layouts/CityGuideLayout'), { loading: LayoutLoading }),
  AdventureLayout: dynamic(() => import('./layouts/AdventureLayout'), { loading: LayoutLoading }),
  MagazineLayout: dynamic(() => import('./layouts/MagazineLayout'), { loading: LayoutLoading }),
  TimelineLayout: dynamic(() => import('./layouts/TimelineLayout'), { loading: LayoutLoading }),
  FullWidthLayout: dynamic(() => import('./layouts/FullWidthLayout'), { loading: LayoutLoading }),
  SplitScreenLayout: dynamic(() => import('./layouts/SplitScreenLayout'), { loading: LayoutLoading }),
  MinimalLayout: dynamic(() => import('./layouts/MinimalLayout'), { loading: LayoutLoading }),
  ModernCardLayout: dynamic(() => import('./layouts/ModernCardLayout'), { loading: LayoutLoading }),
};

// Generate BlogPosting Schema
function generateBlogPostingSchema(post) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.metaDescription || post.excerpt,
    "image": post.image || "https://www.trivenicabs.in/images/og-image.jpg",
    "datePublished": post.date,
    "dateModified": post.date,
    "author": {
      "@type": "Organization",
      "name": "Triveni Cabs",
      "url": "https://www.trivenicabs.in"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Triveni Cabs",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.trivenicabs.in/images/logo.webp"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://www.trivenicabs.in/blog/${post.slug}`
    },
    "keywords": post.tags?.join(', ') || '',
    "articleSection": post.category || "Travel",
    "wordCount": post.content?.split(/\s+/).length || 1000
  };
}

// Generate BreadcrumbList Schema
function generateBreadcrumbSchema(post) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.trivenicabs.in"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Blog",
        "item": "https://www.trivenicabs.in/blog"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": post.title,
        "item": `https://www.trivenicabs.in/blog/${post.slug}`
      }
    ]
  };
}

export default function BlogPostPageClient({ post }) {
  // Safety check
  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500">Post not found</p>
      </div>
    );
  }

  // Get related links based on city
  const relatedLinks = useMemo(() => {
    return getRelatedLinks(post);
  }, [post]);

  // Determine which layout to use - 12 unique designs
  const layoutName = useMemo(() => {
    // First check if post has explicit attractionType
    if (post.attractionType) {
      return getLayoutComponent(post.attractionType);
    }

    // Check category for layout selection
    const category = post.category?.toLowerCase() || '';

    // Category-based layout mapping
    if (category.includes('pilgrimage') || category.includes('religious')) {
      return 'TempleLayout';
    }
    if (category.includes('hill station') || category.includes('nature')) {
      return 'NatureLayout';
    }
    if (category.includes('adventure')) {
      return 'AdventureLayout';
    }
    if (category.includes('city guide') || category.includes('food')) {
      return 'CityGuideLayout';
    }
    if (category.includes('heritage') || category.includes('monument')) {
      return 'MonumentLayout';
    }
    if (category.includes('destinations') || category.includes('travel tips')) {
      return 'MagazineLayout';
    }
    if (category.includes('vehicle guide') || category.includes('tempo') || category.includes('bus')) {
      return 'FullWidthLayout';
    }
    if (category.includes('seasonal')) {
      return 'TimelineLayout';
    }
    if (category.includes('special interest')) {
      return 'SplitScreenLayout';
    }
    if (category.includes('romantic') || category.includes('honeymoon') || category.includes('beach')) {
      return 'ModernCardLayout';
    }

    // Try to detect from tags
    const tags = post.tags?.map(t => t.toLowerCase()) || [];

    // Fort/Palace detection
    if (tags.some(t => ['fort', 'palace', 'forts', 'palaces', 'haveli', 'royal'].includes(t))) {
      return 'FortPalaceLayout';
    }

    // Temple/Religious detection
    if (tags.some(t => ['temple', 'religious', 'spiritual', 'pilgrimage', 'mosque', 'gurudwara', 'church', 'dargah'].includes(t))) {
      return 'TempleLayout';
    }

    // Nature detection
    if (tags.some(t => ['nature', 'hill station', 'hill stations', 'lake', 'waterfall', 'wildlife', 'national park', 'garden', 'beach', 'mountains'].includes(t))) {
      return 'NatureLayout';
    }

    // Adventure detection
    if (tags.some(t => ['adventure', 'trek', 'trekking', 'rafting', 'camping', 'sports', 'skiing'].includes(t))) {
      return 'AdventureLayout';
    }

    // City detection
    if (tags.some(t => ['city guide', 'city', 'urban', 'market', 'shopping', 'food'].includes(t))) {
      return 'CityGuideLayout';
    }

    // UNESCO/Monument detection
    if (tags.some(t => ['unesco', 'monument', 'historical', 'heritage', 'memorial', 'museum'].includes(t))) {
      return 'MonumentLayout';
    }

    // Magazine style for destination content
    if (tags.some(t => ['destinations', 'travel tips', 'guide'].includes(t))) {
      return 'MagazineLayout';
    }

    // Timeline for historical content
    if (tags.some(t => ['history', 'ancient', 'seasonal', 'winter', 'summer', 'monsoon'].includes(t))) {
      return 'TimelineLayout';
    }

    // Full width for vehicle content
    if (tags.some(t => ['tempo traveller', 'bus', 'vehicle', 'car rental'].includes(t))) {
      return 'FullWidthLayout';
    }

    // Split screen for special content
    if (tags.some(t => ['special', 'featured', 'premium'].includes(t))) {
      return 'SplitScreenLayout';
    }

    // Minimal for tips and guides
    if (tags.some(t => ['tips', 'how to', 'checklist'].includes(t))) {
      return 'MinimalLayout';
    }

    // Modern card for luxury/romantic
    if (tags.some(t => ['romantic', 'honeymoon', 'luxury', 'resort'].includes(t))) {
      return 'ModernCardLayout';
    }

    // Default to Monument layout
    return 'MonumentLayout';
  }, [post.attractionType, post.tags, post.category]);

  // Get the layout component (fallback to MonumentLayout via dynamic import)
  const LayoutComponent = layoutComponents[layoutName] || layoutComponents.MonumentLayout;

  return (
    <>
      {/* BlogPosting Schema for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateBlogPostingSchema(post))
        }}
      />
      {/* BreadcrumbList Schema for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateBreadcrumbSchema(post))
        }}
      />
      <LayoutComponent post={post} relatedLinks={relatedLinks} />

      {/* Related Service Pages — SEO internal linking based on blog category */}
      <section className="py-12 px-4 bg-gray-50 border-t border-gray-200">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xl font-bold text-gray-900 mb-6 text-center">
            Related Services for Your {post.city || post.category || 'Travel'} Trip
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {post.city && (
              <Link
                href={`/sightseeing/${post.city.toLowerCase().replace(/\s+/g, '-')}`}
                className="bg-white rounded-xl p-4 text-center hover:shadow-md transition-shadow border border-gray-100"
              >
                <div className="text-2xl mb-2">🏛️</div>
                <p className="text-sm font-semibold text-gray-900">{post.city} Sightseeing</p>
                <p className="text-xs text-gray-500 mt-1">Guided tours</p>
              </Link>
            )}
            <Link
              href="/tempo-traveller"
              className="bg-white rounded-xl p-4 text-center hover:shadow-md transition-shadow border border-gray-100"
            >
              <div className="text-2xl mb-2">🚐</div>
              <p className="text-sm font-semibold text-gray-900">Tempo Traveller</p>
              <p className="text-xs text-gray-500 mt-1">12–26 seater from ₹23/km</p>
            </Link>
            <Link
              href="/pricing"
              className="bg-white rounded-xl p-4 text-center hover:shadow-md transition-shadow border border-gray-100"
            >
              <div className="text-2xl mb-2">💰</div>
              <p className="text-sm font-semibold text-gray-900">View Pricing</p>
              <p className="text-xs text-gray-500 mt-1">Sedan from ₹11/km</p>
            </Link>
            <Link
              href="/airport-service"
              className="bg-white rounded-xl p-4 text-center hover:shadow-md transition-shadow border border-gray-100"
            >
              <div className="text-2xl mb-2">✈️</div>
              <p className="text-sm font-semibold text-gray-900">Airport Transfer</p>
              <p className="text-xs text-gray-500 mt-1">24/7 pickup & drop</p>
            </Link>
            {(post.category === 'Pilgrimage' || post.tags?.some(t => ['temple', 'pilgrimage', 'spiritual'].includes(t))) && (
              <Link
                href="/religious-tours"
                className="bg-white rounded-xl p-4 text-center hover:shadow-md transition-shadow border border-gray-100"
              >
                <div className="text-2xl mb-2">🙏</div>
                <p className="text-sm font-semibold text-gray-900">Pilgrimage Tours</p>
                <p className="text-xs text-gray-500 mt-1">Chardham, Vaishno Devi & more</p>
              </Link>
            )}
            <Link
              href="/wedding"
              className="bg-white rounded-xl p-4 text-center hover:shadow-md transition-shadow border border-gray-100"
            >
              <div className="text-2xl mb-2">💒</div>
              <p className="text-sm font-semibold text-gray-900">Wedding Cars</p>
              <p className="text-xs text-gray-500 mt-1">BMW, Audi, Mercedes</p>
            </Link>
            <Link
              href="/contact"
              className="bg-white rounded-xl p-4 text-center hover:shadow-md transition-shadow border border-gray-100"
            >
              <div className="text-2xl mb-2">📞</div>
              <p className="text-sm font-semibold text-gray-900">Contact Us</p>
              <p className="text-xs text-gray-500 mt-1">Get a free quote</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <div className="max-w-5xl mx-auto px-4">
        <RelatedPosts currentPostId={post.id} currentCategory={post.category} currentTags={post.tags} />
      </div>
    </>
  );
}
