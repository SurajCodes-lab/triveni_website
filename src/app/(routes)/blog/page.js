import BlogClient from './BlogClient';
import { blogPosts } from '@/utilis/blog';
import { getTodayDate, getSpeakableSchema } from '@/lib/seo/speakable-helpers';
import { tightenTitle } from '@/lib/seo/serp-ctr';

// Static generation - no ISR
export const revalidate = 3600;

// SEO Metadata for Blog Page
export const metadata = {
  title: tightenTitle('Travel Blog India 2026 | Tips & Guides'),
  description: 'Expert India travel guides, destination tips, road trip itineraries & budget hacks. Delhi, Agra, Jaipur, Manali, Kashmir & more. Plan your perfect trip today!',
  keywords: 'travel blog India, India travel tips, destination guides, road trip India, budget travel India, Delhi travel guide, Agra travel tips, Jaipur tourism, North India travel, weekend getaways India, hill station travel, pilgrimage tours India, travel itinerary India, Triveni Cabs blog',
  authors: [{ name: 'Triveni Cabs Travel Experts' }],
  creator: 'Triveni Cabs',
  publisher: 'Triveni Cabs',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: {
    canonical: '/blog',
  },
  openGraph: {
    title: 'India Uncovered: Travel Tales That Inspire Wanderlust | 2026',
    description: 'From hidden Himalayan villages to secret beaches - discover India through authentic stories, money-saving tips & bucket-list itineraries. Your adventure awaits!',
    type: 'website',
    locale: 'en_IN',
    url: 'https://www.trivenicabs.in/blog',
    siteName: 'Triveni Cabs - India Travel Blog',
    images: [
      {
        url: 'https://www.trivenicabs.in/images/blog/travel-blog-india.jpg',
        width: 1200,
        height: 630,
        alt: 'Triveni Cabs Travel Blog - Expert India Travel Tips and Destination Guides',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Travel Blog India 2026 | Tips & Guides | Triveni Cabs',
    description: 'Expert India travel guides, destination tips, road trip itineraries & budget hacks. Plan your perfect trip today!',
    images: ['https://www.trivenicabs.in/images/blog/travel-blog-twitter.jpg'],
    creator: '@TriveniCabs',
    site: '@TriveniCabs',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  category: 'Travel',
  classification: 'Travel Blog',
  other: {
    'article:publisher': 'https://www.trivenicabs.in',
    'article:section': 'Travel',
    'og:type': 'blog',
    'rating': '4.9',
    'review_count': '500+',
  }
};

export default function BlogPage() {
  // Filter once for reuse
  const validPosts = blogPosts.filter(post => post && post.title && post.excerpt);

  // Structured data — CollectionPage + mainEntity ItemList pattern
  // Changed 2026-04-08 from "@type: Blog" (valid but weak) to "CollectionPage"
  // Why: CollectionPage + ItemList enables Google's carousel rich result for blog
  // index pages, where multiple article titles show in SERP under the main result.
  // Blog type works but doesn't trigger any specific rich result.
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Triveni Cabs Travel Blog - India Tourism & Travel Guides",
    "description": "Expert travel tips, destination guides, and insider secrets for traveling across India. Get the best advice for planning your perfect trip with comprehensive travel guides, budget tips, and local insights.",
    "url": "https://www.trivenicabs.in/blog",
    "inLanguage": "en-IN",
    "isPartOf": {
      "@type": "WebSite",
      "@id": "https://www.trivenicabs.in/#website"
    },
    "publisher": {
      "@type": "Organization",
      "@id": "https://www.trivenicabs.in/#organization",
      "name": "Triveni Cabs",
      "url": "https://www.trivenicabs.in",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.trivenicabs.in/logo.webp",
        "width": 250,
        "height": 60
      }
    },
    "about": {
      "@type": "Thing",
      "name": "India Travel and Tourism"
    },
    "audience": {
      "@type": "Audience",
      "audienceType": "Travelers, Tourists, Adventure Seekers"
    },
    // Speakable for voice search — h1 + lead are reliably present in BlogClient
    "speakable": getSpeakableSchema(['h1', 'p']),
    "mainEntity": {
      "@type": "ItemList",
      "numberOfItems": validPosts.length,
      "itemListElement": validPosts.map((post, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "url": `https://www.trivenicabs.in/blog/${post.slug}`,
        "item": {
          "@type": "BlogPosting",
          "@id": `https://www.trivenicabs.in/blog/${post.slug}#blogposting`,
          "headline": post.title,
          "description": post.excerpt,
          "image": post.image,
          "datePublished": post.date,
          "dateModified": post.date,
          "url": `https://www.trivenicabs.in/blog/${post.slug}`,
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `https://www.trivenicabs.in/blog/${post.slug}`
          },
          "author": {
            "@type": "Organization",
            "name": "Triveni Cabs Travel Experts",
            "url": "https://www.trivenicabs.in"
          },
          "publisher": {
            "@id": "https://www.trivenicabs.in/#organization"
          },
          "keywords": post.tags?.join(', ') || "travel India, tourism, destination guide",
          "articleSection": post.category || "Travel",
          "inLanguage": "en-IN"
        }
      }))
    }
  };

  const breadcrumbStructuredData = {
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
        "name": "Travel Blog",
        "item": "https://www.trivenicabs.in/blog"
      }
    ]
  };

  const websiteStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Triveni Cabs Travel Blog",
    "url": "https://www.trivenicabs.in/blog",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://www.trivenicabs.in/blog?search={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <>
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteStructuredData) }}
      />

      {/* Render Client Component - pass posts as props to avoid importing data in client bundle */}
      <BlogClient posts={blogPosts} />
    </>
  );
}
