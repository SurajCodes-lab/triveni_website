import BlogClient from './BlogClient';
import { blogPosts } from '@/utilis/blog';

// ISR - Revalidate every hour (3600 seconds)
export const revalidate = 3600;

// SEO Metadata for Blog Page
export const metadata = {
  title: 'India Uncovered: Travel Tales That Inspire Wanderlust | Triveni Cabs 2026',
  description: '🌏 Your passport to incredible India starts here! Explore hidden gems, budget hacks, jaw-dropping destinations & insider secrets. From Himalayan peaks to coastal paradises - real stories, practical tips & itineraries that actually work. Join 500+ readers discovering India differently!',
  keywords: [
    // Primary Keywords
    'travel blog India',
    'India travel tips 2026',
    'destination guides India',
    'travel advice India',
    'tourism blog India',
    'Indian travel blog',

    // Location-Based Keywords
    'Delhi travel guide',
    'Agra travel tips',
    'Jaipur tourism',
    'Manali travel blog',
    'Kashmir travel guide',
    'Goa travel tips',
    'Kerala tourism blog',
    'Rajasthan travel guide',
    'Himachal Pradesh travel',
    'Uttarakhand tourism',
    'Mumbai travel blog',
    'Bangalore travel guide',
    'Kolkata tourism',
    'Chennai travel tips',

    // Travel Type Keywords
    'road trip India',
    'budget travel India',
    'luxury travel India',
    'family travel India',
    'solo travel India',
    'adventure travel India',
    'cultural tourism India',
    'heritage tourism India',
    'pilgrimage tours India',
    'honeymoon destinations India',
    'weekend getaways India',
    'outstation travel tips',

    // Seasonal Keywords
    'best time to visit India',
    'monsoon travel India',
    'winter destinations India',
    'summer travel India 2026',
    'Indian festivals travel',

    // Activity Keywords
    'trekking in India',
    'wildlife tourism India',
    'beach destinations India',
    'hill station travel',
    'food tourism India',
    'shopping destinations India',
    'photography tours India',
    'spiritual tourism India',
    'adventure sports India',

    // Service Keywords
    'taxi booking tips',
    'cab service blog',
    'car rental guide India',
    'highway travel India',
    'road safety tips',

    // Long-tail Keywords
    'best places to visit in India 2026',
    'how to plan India trip',
    'India travel itinerary',
    'cheap travel in India',
    'India tourism guide 2026',
    'travel stories from India',
    'India sightseeing tips',
    'local travel India',
    'intercity travel India',
    'North India travel guide',
    'South India tourism',
    'East India travel blog',
    'West India destinations',

    // Tourist Keywords
    'UNESCO heritage sites India',
    'historical places India',
    'architectural tourism India',
    'art and culture India',
    'tribal tourism India',
    'rural tourism India',
    'eco-tourism India',
    'sustainable travel India',
    'responsible tourism India',

    // Wellness Keywords
    'yoga retreats India',
    'Ayurveda tourism',
    'wellness travel India',
    'spiritual journeys India',
    'meditation retreats India',

    // Practical Keywords
    'travel planning India',
    'India visa guide',
    'currency exchange India',
    'best hotels India',
    'India restaurant guide',
    'local transport India',
    'India travel safety',
    'travel insurance India',

    // Activity-Based Keywords
    'camping in India',
    'river rafting India',
    'paragliding India',
    'scuba diving India',
    'skiing in India',
    'rock climbing India',
    'bird watching India',
    'safari tours India',
  ].join(', '),
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
    languages: {
      'en-IN': '/blog',
      'hi-IN': '/blog',
    },
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
    title: 'India Uncovered: Travel Tales That Inspire 🌏',
    description: '✨ Hidden gems 💰 Budget hacks 🏔️ Epic adventures. Real stories from incredible India that will make you pack your bags today!',
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

      {/* Render Client Component */}
      <BlogClient />
    </>
  );
}
