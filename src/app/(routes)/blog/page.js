import BlogClient from './BlogClient';
import { blogPosts } from '@/utilis/blog';

// Static generation - no ISR
export const revalidate = false;

// SEO Metadata for Blog Page
export const metadata = {
  title: 'Travel Blog India 2026 | Tips & Guides | Triveni Cabs',
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
  // Structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Triveni Cabs Travel Blog - India Tourism & Travel Guides",
    "description": "Expert travel tips, destination guides, and insider secrets for traveling across India. Get the best advice for planning your perfect trip with comprehensive travel guides, budget tips, and local insights.",
    "url": "https://www.trivenicabs.in/blog",
    "inLanguage": "en-IN",
    "publisher": {
      "@type": "Organization",
      "name": "Triveni Cabs",
      "url": "https://www.trivenicabs.in",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.trivenicabs.in/logo.webp",
        "width": 250,
        "height": 60
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-7668570551",
        "contactType": "customer service",
        "availableLanguage": ["English", "Hindi"],
        "areaServed": "IN"
      },
      "sameAs": [
        "https://www.facebook.com/trivenicabs",
        "https://twitter.com/trivenicabs",
        "https://www.instagram.com/cabstriveni?igsh=YzlzYmZsZjZ5bnlo"
      ]
    },
    "blogPost": blogPosts
      .filter(post => post && post.title && post.excerpt) // Filter out undefined or invalid posts
      .map(post => ({
      "@type": "BlogPosting",
      "headline": post.title,
      "description": post.excerpt,
      "image": post.image,
      "datePublished": post.date,
      "dateModified": post.date,
      "author": {
        "@type": "Organization",
        "name": "Triveni Cabs Travel Experts"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Triveni Cabs",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.trivenicabs.in/logo.webp"
        }
      },
      "url": `https://www.trivenicabs.in/blog/${post.slug}`,
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": `https://www.trivenicabs.in/blog/${post.slug}`
      },
      "keywords": post.tags?.join(', ') || "travel India, tourism, destination guide",
      "articleSection": post.category || "Travel",
      "wordCount": 1500,
      "inLanguage": "en-IN"
    })),
    "audience": {
      "@type": "Audience",
      "audienceType": "Travelers, Tourists, Adventure Seekers"
    },
    "about": {
      "@type": "Thing",
      "name": "India Travel and Tourism"
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
