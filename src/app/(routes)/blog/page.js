import BlogClient from './BlogClient';
import { blogPosts } from '@/utilis/blog';

// SEO Metadata for Blog Page
export const metadata = {
  title: 'Travel Blog India 2025 - Expert Tips, Destination Guides & Travel Stories | Triveni Cabs',
  description: 'Discover the best travel blog for India tours. Get expert travel tips, destination guides, budget travel advice, road trip ideas, and insider secrets for exploring India. Updated 2025 travel stories, itineraries & practical guides.',
  keywords: [
    // Primary Keywords
    'travel blog India',
    'India travel tips 2025',
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
    'summer travel India 2025',
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
    'best places to visit in India 2025',
    'how to plan India trip',
    'India travel itinerary',
    'cheap travel in India',
    'India tourism guide 2025',
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
  metadataBase: new URL('https://trivenicabs.in'),
  alternates: {
    canonical: '/blog',
    languages: {
      'en-IN': '/blog',
      'hi-IN': '/blog',
    },
  },
  openGraph: {
    title: 'Best Travel Blog India 2025 - Expert Tips & Destination Guides | Triveni Cabs',
    description: 'Explore India with expert travel guides, insider tips, and practical advice. Budget travel, luxury tours, road trips, and cultural experiences. Your complete India travel resource.',
    type: 'website',
    locale: 'en_IN',
    url: 'https://trivenicabs.in/blog',
    siteName: 'Triveni Cabs - India Travel Blog',
    images: [
      {
        url: 'https://trivenicabs.in/images/blog/travel-blog-india.jpg',
        width: 1200,
        height: 630,
        alt: 'Triveni Cabs Travel Blog - Expert India Travel Tips and Destination Guides',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'India Travel Blog 2025 - Expert Tips & Destination Guides',
    description: 'Discover expert travel tips, destination guides, and insider secrets for exploring India. Budget travel, road trips, cultural tours, and more.',
    images: ['https://trivenicabs.in/images/blog/travel-blog-twitter.jpg'],
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
    'article:publisher': 'https://trivenicabs.in',
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
    "url": "https://trivenicabs.in/blog",
    "inLanguage": "en-IN",
    "publisher": {
      "@type": "Organization",
      "name": "Triveni Cabs",
      "url": "https://trivenicabs.in",
      "logo": {
        "@type": "ImageObject",
        "url": "https://trivenicabs.in/logo.webp",
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
        "https://www.instagram.com/trivenicabs"
      ]
    },
    "blogPost": blogPosts.map(post => ({
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
          "url": "https://trivenicabs.in/logo.webp"
        }
      },
      "url": `https://trivenicabs.in/blog/${post.slug}`,
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": `https://trivenicabs.in/blog/${post.slug}`
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
        "item": "https://trivenicabs.in"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Travel Blog",
        "item": "https://trivenicabs.in/blog"
      }
    ]
  };

  const websiteStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Triveni Cabs Travel Blog",
    "url": "https://trivenicabs.in/blog",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://trivenicabs.in/blog?search={search_term_string}"
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
