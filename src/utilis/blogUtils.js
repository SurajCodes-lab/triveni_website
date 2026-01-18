/**
 * Blog Utilities - Normalize blog data and convert Markdown to HTML
 */

/**
 * Simple Markdown to HTML converter
 * Handles: headings, bold, lists, paragraphs, horizontal rules, links
 */
export function markdownToHtml(markdown) {
  if (!markdown) return '';

  // If content already has HTML tags, return as-is
  if (markdown.includes('<p>') || markdown.includes('<h2>') || markdown.includes('<div>')) {
    return markdown;
  }

  let html = markdown;

  // Escape HTML entities first (but preserve existing HTML)
  // html = html.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

  // Horizontal rules
  html = html.replace(/^---$/gm, '<hr class="my-8 border-gray-200" />');
  html = html.replace(/^\*\*\*$/gm, '<hr class="my-8 border-gray-200" />');

  // Headers (must be done before bold to avoid conflicts)
  html = html.replace(/^### (.+)$/gm, '<h3 class="text-xl font-bold text-gray-900 mt-8 mb-4">$1</h3>');
  html = html.replace(/^## (.+)$/gm, '<h2 class="text-2xl font-bold text-gray-900 mt-10 mb-6">$1</h2>');
  html = html.replace(/^# (.+)$/gm, '<h1 class="text-3xl font-bold text-gray-900 mt-10 mb-6">$1</h1>');

  // Bold text
  html = html.replace(/\*\*([^*]+)\*\*/g, '<strong class="font-semibold text-gray-900">$1</strong>');

  // Italic text
  html = html.replace(/\*([^*]+)\*/g, '<em>$1</em>');

  // Unordered lists - handle multi-line lists
  html = html.replace(/^- (.+)$/gm, '<li class="ml-4">$1</li>');
  // Wrap consecutive li elements in ul
  html = html.replace(/(<li[^>]*>.*<\/li>\n?)+/g, (match) => {
    return '<ul class="list-disc list-inside space-y-2 my-4 text-gray-700">' + match + '</ul>';
  });

  // Numbered lists
  html = html.replace(/^\d+\. (.+)$/gm, '<li class="ml-4">$1</li>');

  // Links [text](url)
  html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-blue-600 hover:underline font-medium">$1</a>');

  // Code blocks ```
  html = html.replace(/```([^`]+)```/g, '<pre class="bg-gray-100 p-4 rounded-lg overflow-x-auto my-4"><code>$1</code></pre>');

  // Inline code `
  html = html.replace(/`([^`]+)`/g, '<code class="bg-gray-100 px-2 py-1 rounded text-sm">$1</code>');

  // Paragraphs - wrap text blocks that aren't already wrapped
  const lines = html.split('\n');
  const processedLines = [];
  let inList = false;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();

    // Skip empty lines
    if (!line) {
      processedLines.push('');
      continue;
    }

    // Skip if already wrapped in HTML tags
    if (line.startsWith('<h') || line.startsWith('<ul') || line.startsWith('</ul') ||
        line.startsWith('<li') || line.startsWith('<hr') || line.startsWith('<pre') ||
        line.startsWith('<p') || line.startsWith('</p') || line.startsWith('<div') ||
        line.startsWith('<a ') || line.startsWith('<strong') || line.startsWith('<table')) {
      processedLines.push(line);
      continue;
    }

    // Wrap plain text in paragraph
    if (line && !line.startsWith('<')) {
      processedLines.push(`<p class="text-gray-700 leading-relaxed mb-4">${line}</p>`);
    } else {
      processedLines.push(line);
    }
  }

  html = processedLines.join('\n');

  // Clean up empty paragraphs
  html = html.replace(/<p[^>]*>\s*<\/p>/g, '');

  // Fix nested tags issue
  html = html.replace(/<ul[^>]*>\s*<\/ul>/g, '');

  return html;
}

/**
 * Normalize a blog post to have consistent fields
 */
export function normalizeBlogPost(post) {
  if (!post) return null;

  return {
    ...post,
    // Ensure image field exists (use heroImage as fallback)
    image: post.image || post.heroImage || '/images/car/luxury_bus.webp',
    // Ensure date field exists (use publishDate as fallback)
    date: post.date || post.publishDate || '2026-01-15',
    // Convert Markdown content to HTML if needed
    content: markdownToHtml(post.content),
    // Ensure other required fields
    excerpt: post.excerpt || post.metaDescription || '',
    readTime: post.readTime || '10 min read',
    category: post.category || 'Travel',
  };
}

/**
 * Normalize an array of blog posts
 */
export function normalizeBlogPosts(posts) {
  if (!Array.isArray(posts)) return [];
  return posts.map(normalizeBlogPost).filter(Boolean);
}

export default {
  markdownToHtml,
  normalizeBlogPost,
  normalizeBlogPosts
};
