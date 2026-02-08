/**
 * Master Blog Index - Triveni Cabs
 *
 * This file combines all blog content from various category files
 * into a single exportable collection for the blog system.
 *
 * Total Blogs: 40 unique SEO-rich articles
 *
 * Categories:
 * - Bus Tours & Group Travel (10 blogs)
 * - Tempo Traveller Tours (12 blogs)
 * - Sightseeing & City Guides (12 blogs)
 * - Seasonal & Special Interest (6 blogs)
 *
 * Usage:
 * import { allBlogs, getBlogBySlug, getBlogsByCategory } from '@/utilis/allBlogs';
 */

// Import all blog collections
import busBlogs from './expandedBlogs';
import tempoTravellerBlogs from './tempoTravellerBlogs';
import additionalSightseeingBlogs from './additionalSightseeingBlogs';
import seasonalBlogs from './seasonalBlogs';
import costBlogs from './costBlogs';
import newBlogs2026 from './newBlogs2026';

/**
 * Combined collection of all blogs
 * Total: 57+ unique SEO-rich articles
 */
export const allBlogs = [
  ...busBlogs,                    // 10 bus-focused blogs
  ...tempoTravellerBlogs,         // 12 tempo traveller blogs
  ...additionalSightseeingBlogs,  // 12 sightseeing/city guide blogs
  ...seasonalBlogs,               // 6 seasonal/special interest blogs
  ...costBlogs,                   // 10 cost/fare guide blogs
  ...newBlogs2026                 // 17 Phase 15 blogs (destination, seasonal, service)
];

/**
 * Get a blog by its slug
 * @param {string} slug - The blog's URL slug
 * @returns {object|undefined} - The blog object or undefined if not found
 */
export const getBlogBySlug = (slug) => {
  return allBlogs.find(blog => blog.slug === slug);
};

/**
 * Get a blog by its ID
 * @param {string} id - The blog's unique ID
 * @returns {object|undefined} - The blog object or undefined if not found
 */
export const getBlogById = (id) => {
  return allBlogs.find(blog => blog.id === id);
};

/**
 * Get all blogs in a specific category
 * @param {string} category - The category name
 * @returns {array} - Array of blogs in that category
 */
export const getBlogsByCategory = (category) => {
  return allBlogs.filter(blog => blog.category === category);
};

/**
 * Get all blogs with a specific tag
 * @param {string} tag - The tag to search for
 * @returns {array} - Array of blogs with that tag
 */
export const getBlogsByTag = (tag) => {
  return allBlogs.filter(blog =>
    blog.tags && blog.tags.some(t => t.toLowerCase().includes(tag.toLowerCase()))
  );
};

/**
 * Get featured blogs
 * @param {number} limit - Maximum number of blogs to return
 * @returns {array} - Array of featured blogs
 */
export const getFeaturedBlogs = (limit = 6) => {
  return allBlogs.filter(blog => blog.featured).slice(0, limit);
};

/**
 * Get recent blogs sorted by publish date
 * @param {number} limit - Maximum number of blogs to return
 * @returns {array} - Array of recent blogs
 */
export const getRecentBlogs = (limit = 10) => {
  return [...allBlogs]
    .sort((a, b) => new Date(b.publishDate) - new Date(a.publishDate))
    .slice(0, limit);
};

/**
 * Get related blogs based on category and tags
 * @param {string} currentSlug - The current blog's slug to exclude
 * @param {string} category - The category to match
 * @param {array} tags - Tags to match
 * @param {number} limit - Maximum number of blogs to return
 * @returns {array} - Array of related blogs
 */
export const getRelatedBlogs = (currentSlug, category, tags = [], limit = 4) => {
  return allBlogs
    .filter(blog => {
      if (blog.slug === currentSlug) return false;

      // Category match gets priority
      if (blog.category === category) return true;

      // Tag matching
      if (tags.length > 0 && blog.tags) {
        return tags.some(tag =>
          blog.tags.some(t => t.toLowerCase().includes(tag.toLowerCase()))
        );
      }

      return false;
    })
    .slice(0, limit);
};

/**
 * Search blogs by keyword (searches title, content, tags, keywords)
 * @param {string} query - Search query
 * @returns {array} - Array of matching blogs
 */
export const searchBlogs = (query) => {
  const searchTerm = query.toLowerCase();

  return allBlogs.filter(blog => {
    // Search in title
    if (blog.title.toLowerCase().includes(searchTerm)) return true;

    // Search in meta description
    if (blog.metaDescription && blog.metaDescription.toLowerCase().includes(searchTerm)) return true;

    // Search in tags
    if (blog.tags && blog.tags.some(tag => tag.toLowerCase().includes(searchTerm))) return true;

    // Search in keywords
    if (blog.keywords && blog.keywords.some(kw => kw.toLowerCase().includes(searchTerm))) return true;

    // Search in content (basic)
    if (blog.content && blog.content.toLowerCase().includes(searchTerm)) return true;

    return false;
  });
};

/**
 * Get all unique categories
 * @returns {array} - Array of unique category names
 */
export const getAllCategories = () => {
  const categories = new Set(allBlogs.map(blog => blog.category));
  return Array.from(categories);
};

/**
 * Get all unique tags
 * @returns {array} - Array of unique tags
 */
export const getAllTags = () => {
  const tags = new Set();
  allBlogs.forEach(blog => {
    if (blog.tags) {
      blog.tags.forEach(tag => tags.add(tag));
    }
  });
  return Array.from(tags);
};

/**
 * Get blog statistics
 * @returns {object} - Statistics about the blog collection
 */
export const getBlogStats = () => {
  const categories = {};
  let totalWords = 0;
  let featuredCount = 0;

  allBlogs.forEach(blog => {
    // Count by category
    if (blog.category) {
      categories[blog.category] = (categories[blog.category] || 0) + 1;
    }

    // Estimate word count from content
    if (blog.content) {
      totalWords += blog.content.split(/\s+/).length;
    }

    // Count featured
    if (blog.featured) {
      featuredCount++;
    }
  });

  return {
    totalBlogs: allBlogs.length,
    totalWords,
    averageWordsPerBlog: Math.round(totalWords / allBlogs.length),
    featuredBlogs: featuredCount,
    categoriesCount: Object.keys(categories).length,
    categories,
    uniqueTags: getAllTags().length
  };
};

/**
 * Get blogs grouped by subcategory
 * @param {string} category - The parent category
 * @returns {object} - Object with subcategories as keys and blog arrays as values
 */
export const getBlogsBySubcategory = (category) => {
  const subcategories = {};

  allBlogs
    .filter(blog => blog.category === category)
    .forEach(blog => {
      const subcat = blog.subcategory || 'other';
      if (!subcategories[subcat]) {
        subcategories[subcat] = [];
      }
      subcategories[subcat].push(blog);
    });

  return subcategories;
};

/**
 * Generate sitemap data for all blogs
 * @returns {array} - Array of sitemap entry objects
 */
export const generateBlogSitemapData = () => {
  return allBlogs.map(blog => ({
    loc: `/blog/${blog.slug}`,
    lastmod: blog.modifiedDate || blog.publishDate,
    changefreq: 'monthly',
    priority: blog.featured ? 0.8 : 0.6,
    images: blog.images ? blog.images.map(img => ({
      loc: img.src,
      title: img.alt
    })) : []
  }));
};

// Category-specific exports for convenience
export const busBlogsList = busBlogs;
export const tempoTravellerBlogsList = tempoTravellerBlogs;
export const sightseeingBlogsList = additionalSightseeingBlogs;
export const seasonalBlogsList = seasonalBlogs;

// Default export
export default allBlogs;
