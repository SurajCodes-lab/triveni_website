import { notFound } from 'next/navigation';
import { blogPosts } from '@/utilis/blog';
import BlogPostPageClient from '@/components/blog/BlogPostPageClient';
import AEOHead from '@/components/seo/AEOHead';

// ISR - Revalidate every hour (3600 seconds)
export const revalidate = false;
export const dynamicParams = false;

// Generate Article Schema for SEO
function generateArticleSchema(post) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "description": post.excerpt || post.metaDescription,
    "image": post.image ? `https://www.trivenicabs.in${post.image}` : "https://www.trivenicabs.in/images/og-image.jpg",
    "datePublished": post.date,
    "dateModified": post.dateModified || post.date,
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
    "keywords": post.tags?.join(', ') || post.category
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
      <AEOHead pageType="tour" data={{ url: `/blog/${slug}`, title: post.title || '' }} />
      <BlogPostPageClient post={post} />
    </>
  );
}
