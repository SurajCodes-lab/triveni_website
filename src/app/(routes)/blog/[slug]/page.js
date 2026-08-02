import { notFound } from 'next/navigation';
import { blogPosts } from '@/utilis/blog';
import BlogPostPageClient from '@/components/blog/BlogPostPageClient';
import AEOHead from '@/components/seo/AEOHead';
import { getSpeakableSchema, getTodayDate, getCityPlaceSchema, getHowToSchema } from '@/lib/seo/speakable-helpers';

// ISR - Revalidate every hour (3600 seconds)
export const revalidate = 3600;
export const dynamicParams = false;

// Generate Article Schema for SEO with E-E-A-T signals (author bio, dateModified
// auto-refresh, citations via mentions[], Speakable for voice search).
function generateArticleSchema(post) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `https://www.trivenicabs.in/blog/${post.slug}#article`,
    "headline": post.title,
    "description": post.excerpt || post.metaDescription,
    "image": {
      "@type": "ImageObject",
      "url": post.image ? `https://www.trivenicabs.in${post.image}` : "https://www.trivenicabs.in/images/og-image.jpg",
      "width": 1200,
      "height": 630
    },
    "datePublished": post.date,
    // Auto-fresh dateModified — re-evaluated every ISR cycle (1h). Reasonable
    // for blog posts because we routinely refresh fare data, distance, timing.
    "dateModified": post.dateModified || getTodayDate(),
    "author": {
      "@type": "Organization",
      "@id": "https://www.trivenicabs.in/#editorial-team",
      "name": "Triveni Cabs Editorial Team",
      "url": "https://www.trivenicabs.in/about",
      "description": "Travel experts at Triveni Cabs — covering Delhi, Agra, Jaipur, Chandigarh, Rajasthan, Himachal, Uttarakhand routes since 2015. 11 years of cab-service expertise informs every guide."
    },
    "publisher": {
      "@type": "Organization",
      "@id": "https://www.trivenicabs.in/#organization",
      "name": "Triveni Cabs",
      "url": "https://www.trivenicabs.in",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.trivenicabs.in/images/logo/logo2.webp",
        "width": 200,
        "height": 60
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://www.trivenicabs.in/blog/${post.slug}`
    },
    "keywords": post.tags?.join(', ') || post.category,
    "inLanguage": "en-IN",
    "articleSection": post.category || "Travel",
    // Speakable for voice search (Google Assistant, Alexa)
    "speakable": getSpeakableSchema(['h1', '.blog-lead', '.blog-summary']),
    // Citations / mentions[] for entity richness — extracted from post tags
    ...(post.tags?.length > 0 ? {
      "mentions": post.tags.slice(0, 8).map(t => ({ "@type": "Thing", "name": t }))
    } : {}),
    // about[] — anchor the post to a real-world city Place entity (geo coords)
    // when the post targets a city we have geo data for. GEO entity grounding.
    ...(() => {
      if (!post.city) return {};
      const place = getCityPlaceSchema(String(post.city).toLowerCase(), { idSlug: `blog/${post.slug}` });
      if (!place) return {};
      // Strip @context for embedding inside the BlogPosting node
      const { "@context": _ctx, ...placeNode } = place;
      return { "about": [placeNode] };
    })()
  };
}

// Detect how-to style posts so we can attach a HowTo schema for rich results.
function isHowToPost(post) {
  const t = (post.title || '').toLowerCase();
  const meta = (post.metaTitle || '').toLowerCase();
  return /\bhow to\b|\bhow-to\b|step[- ]by[- ]step|guide to (?:book|reach|plan)/.test(t + ' ' + meta);
}

// Build a lightweight HowTo from the post (used only for how-to posts).
function generateHowToSchema(post) {
  const title = post.title || 'How to plan your trip';
  return getHowToSchema({
    name: title,
    description: post.metaDescription || post.excerpt || title,
    totalTime: 'PT10M',
    steps: [
      { name: 'Read the guide', text: `Read this guide — ${title} — to understand the route, timing and costs before you set off.`, image: post.image },
      { name: 'Pick your travel dates', text: 'Choose your travel dates based on the best-time-to-visit advice in this article.' },
      { name: 'Book your transport', text: 'Book a Triveni Cabs vehicle (sedan, SUV or Tempo Traveller) on WhatsApp +91-7668570551 with no large advance.' },
      { name: 'Confirm the itinerary', text: 'Share your pickup point and any customisation; receive an all-inclusive quote and confirmation.' }
    ]
  });
}

// Generate FAQPage Schema from the post's structured faqs[] (mirrors the FAQ
// section already present in the post body).
function generateFaqSchema(post) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `https://www.trivenicabs.in/blog/${post.slug}#faq`,
    "mainEntity": post.faqs.map((f) => ({
      "@type": "Question",
      "name": f.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": f.answer
      }
    }))
  };
}

// Generate BreadcrumbList Schema for SEO
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

// Generate static params for all blog posts
export async function generateStaticParams() {
  return blogPosts
    .filter((post) => post && post.slug) // Filter out undefined or invalid posts
    .map((post) => ({
      slug: post.slug,
    }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p && p.slug === slug);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: post.metaTitle || post.title || 'Blog Post',
    description: post.metaDescription || post.excerpt || '',
    keywords: post.tags?.join(', ') || '',
    openGraph: {
      title: post.metaTitle || post.title || 'Blog Post',
      description: post.metaDescription || post.excerpt || '',
      type: 'article',
      publishedTime: post.date,
      authors: ['Triveni Cabs'],
      images: post.image ? [post.image] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.metaTitle || post.title || 'Blog Post',
      description: post.metaDescription || post.excerpt || '',
      images: post.image ? [post.image] : [],
    },
    alternates: {
      canonical: `https://www.trivenicabs.in/blog/${post.slug}`,
    },
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p && p.slug === slug);

  if (!post) {
    notFound();
  }

  const articleSchema = generateArticleSchema(post);
  const breadcrumbSchema = generateBreadcrumbSchema(post);
  const howToSchema = isHowToPost(post) ? generateHowToSchema(post) : null;
  const faqSchema = post.faqs?.length > 0 ? generateFaqSchema(post) : null;

  return (
    <>
      {/* Article Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      {/* Breadcrumb Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {/* FAQPage Structured Data — only for posts with structured faqs[] */}
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      {/* HowTo Structured Data — only for how-to style posts */}
      {howToSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
        />
      )}
      <AEOHead pageType="tour" data={{ url: `/blog/${slug}`, title: post.title || '' }} />

      <BlogPostPageClient post={post} />
    </>
  );
}
