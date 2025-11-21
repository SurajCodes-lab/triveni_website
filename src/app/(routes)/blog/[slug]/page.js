import { notFound } from 'next/navigation';
import { blogPosts } from '@/utilis/blog';
import BlogPostPageClient from '@/components/blog/BlogPostPageClient';

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
      canonical: `https://trivenicabs.in/blog/${post.slug}`,
    },
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p && p.slug === slug);

  if (!post) {
    notFound();
  }

  return <BlogPostPageClient post={post} />;
}
