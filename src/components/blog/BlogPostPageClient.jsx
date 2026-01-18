'use client';

import { useMemo } from 'react';
import { getRelatedLinks } from '@/utilis/linkingHelper';
import { getLayoutComponent } from './layouts';

// Import all layouts
import FortPalaceLayout from './layouts/FortPalaceLayout';
import TempleLayout from './layouts/TempleLayout';
import NatureLayout from './layouts/NatureLayout';
import MonumentLayout from './layouts/MonumentLayout';
import CityGuideLayout from './layouts/CityGuideLayout';
import AdventureLayout from './layouts/AdventureLayout';
import MagazineLayout from './layouts/MagazineLayout';
import TimelineLayout from './layouts/TimelineLayout';
import FullWidthLayout from './layouts/FullWidthLayout';
import SplitScreenLayout from './layouts/SplitScreenLayout';

import MinimalLayout from './layouts/MinimalLayout';
import ModernCardLayout from './layouts/ModernCardLayout';

// Layout components map - 12 unique designs
const layoutComponents = {
  FortPalaceLayout,
  TempleLayout,
  NatureLayout,
  MonumentLayout,
  CityGuideLayout,
  AdventureLayout,
  MagazineLayout,
  TimelineLayout,
  FullWidthLayout,
  SplitScreenLayout,
  MinimalLayout,
  ModernCardLayout,
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

  // Get the layout component
  const LayoutComponent = layoutComponents[layoutName] || MonumentLayout;

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
    </>
  );
}
