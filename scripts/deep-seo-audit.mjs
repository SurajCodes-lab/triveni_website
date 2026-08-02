#!/usr/bin/env node
// Deep SEO audit — per-page metrics for optimization prioritization.
// Outputs JSON: word count, H-tag distribution, schema types, internal link count,
// images stats, keyword presence in critical positions.

import { readFileSync, readdirSync, statSync, writeFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const ROUTES_DIR = 'src/app/(routes)';
const COMPONENTS_DIR = 'src/components';

// Walk all source files referenced from a page.js (transitively, simple resolution)
function walk(dir, out = [], filter = () => true) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    const s = statSync(p);
    if (s.isDirectory()) {
      if (name.startsWith('_') || name === 'node_modules') continue;
      walk(p, out, filter);
    } else if (filter(name)) {
      out.push(p);
    }
  }
  return out;
}

// Resolve component/data imports relative to a file
function resolveImport(fromFile, importPath) {
  if (importPath.startsWith('@/')) {
    importPath = 'src/' + importPath.slice(2);
  } else if (importPath.startsWith('./') || importPath.startsWith('../')) {
    importPath = join(fromFile, '..', importPath).replace(/\\/g, '/');
  } else {
    return null; // npm package
  }
  for (const ext of ['', '.js', '.jsx', '.ts', '.tsx', '/index.js', '/index.jsx']) {
    const candidate = importPath + ext;
    if (existsSync(candidate)) return candidate;
  }
  return null;
}

function getImports(src) {
  const re = /import\s+(?:[^'"`]*?from\s+)?(['"`])([^'"`]+)\1/g;
  const out = [];
  let m;
  while ((m = re.exec(src)) !== null) out.push(m[2]);
  return out;
}

// Recursively gather text content (component + transitive imports) up to depth
function gatherContentTree(file, depth = 3, seen = new Set()) {
  if (seen.has(file) || depth < 0 || !existsSync(file)) return '';
  seen.add(file);
  const src = readFileSync(file, 'utf8');
  const imports = getImports(src);
  let combined = src;
  for (const imp of imports) {
    if (imp.includes('icons') || imp.includes('next/') || imp.includes('react') || imp.includes('framer-motion')) continue;
    const resolved = resolveImport(file, imp);
    if (resolved && (resolved.includes('/components/') || resolved.includes('/utilis/') || resolved.includes('/lib/'))) {
      combined += '\n' + gatherContentTree(resolved, depth - 1, seen);
    }
  }
  return combined;
}

function countWords(text) {
  // Strip imports, exports, comments
  let clean = text
    .replace(/\/\/.*$/gm, '')
    .replace(/\/\*[\s\S]*?\*\//g, '')
    .replace(/import\s+[^;]+;/g, '')
    .replace(/className=["'][^"']*["']/g, ' ')
    .replace(/{`/g, '{').replace(/`}/g, '}');
  // Extract: string literals (≥10 chars), template strings, JSX text content
  const strings = (clean.match(/['"`]([^'"`\n]{10,})['"`]/g) || []).map(s => s.slice(1, -1));
  // JSX text content: things between > and < that aren't JS expressions
  const jsxText = (clean.match(/>([^<>{}\n]{10,})</g) || []).map(s => s.slice(1, -1));
  // Object keys/values in data structures (e.g., desc: "...", text: "...", question: "...")
  const allText = [...strings, ...jsxText].join(' ');
  const words = allText.split(/\s+/).filter(w => w.length > 1 && /[a-zA-Z]/.test(w));
  return words.length;
}

function countHTags(text) {
  return {
    h1: (text.match(/<h1[\s>]/gi) || []).length,
    h2: (text.match(/<h2[\s>]/gi) || []).length,
    h3: (text.match(/<h3[\s>]/gi) || []).length,
    h4: (text.match(/<h4[\s>]/gi) || []).length,
  };
}

function countSchemas(text) {
  // Match both '@type' and "@type" with single or double quoted values
  const matches = text.match(/['"]@type['"]\s*:\s*['"]([^'"]+)['"]/g) || [];
  const types = matches.map(m => m.match(/['"]([^'"]+)['"]$/)?.[1]).filter(Boolean);
  const counts = {};
  for (const t of types) counts[t] = (counts[t] || 0) + 1;
  return counts;
}

function countInternalLinks(text) {
  const hrefs = text.match(/href\s*=\s*["'`](\/[^"'`\s]+)["'`]/g) || [];
  const linkRefs = text.match(/<Link[^>]*href\s*=\s*["'`](\/[^"'`\s]+)["'`]/g) || [];
  return hrefs.length + linkRefs.length;
}

function countImages(text) {
  const imgTags = (text.match(/<(?:img|Image)[^>]*>/gi) || []);
  let withAlt = 0, withoutAlt = 0, withGenericAlt = 0, withLazy = 0;
  for (const tag of imgTags) {
    const altMatch = tag.match(/alt\s*=\s*["'`]([^"'`]*)["'`]/);
    if (!altMatch) withoutAlt++;
    else if (!altMatch[1] || altMatch[1].length < 5 || /^image$|^photo$|^pic$/i.test(altMatch[1])) withGenericAlt++;
    else withAlt++;
    if (/loading\s*=\s*["'`]lazy/.test(tag)) withLazy++;
  }
  return { total: imgTags.length, withAlt, withoutAlt, withGenericAlt, withLazy };
}

function extractKeywords(text) {
  const m = text.match(/keywords\s*:\s*['"`]([^'"`]+)['"`]/);
  if (!m) return [];
  return m[1].split(',').map(k => k.trim()).filter(Boolean);
}

const pageFiles = walk(ROUTES_DIR, [], n => n === 'page.js');
const results = [];

for (const f of pageFiles) {
  const slug = f.replace(/\\/g, '/').replace('src/app/(routes)', '').replace('/page.js', '') || '/';
  // Skip dynamic routes for now (would need slug resolution)
  if (slug.includes('[')) continue;

  const tree = gatherContentTree(f);
  const wordCount = countWords(tree);
  const hTags = countHTags(tree);
  const schemas = countSchemas(tree);
  const internalLinks = countInternalLinks(tree);
  const images = countImages(tree);
  const keywords = extractKeywords(readFileSync(f, 'utf8'));

  results.push({
    slug,
    file: f.replace(/\\/g, '/'),
    wordCount,
    h1: hTags.h1,
    h2: hTags.h2,
    h3: hTags.h3,
    schemas,
    schemaCount: Object.keys(schemas).length,
    internalLinks,
    imgTotal: images.total,
    imgMissingAlt: images.withoutAlt + images.withGenericAlt,
    imgLazy: images.withLazy,
    keywordCount: keywords.length,
    keywords: keywords.slice(0, 5),
  });
}

// Sort by word count ascending — thin pages first (highest priority for content expansion)
results.sort((a, b) => a.wordCount - b.wordCount);

writeFileSync('scripts/deep-seo-audit.json', JSON.stringify(results, null, 2));

// Summary stats
const summary = {
  totalPages: results.length,
  thin: results.filter(r => r.wordCount < 800).length,
  medium: results.filter(r => r.wordCount >= 800 && r.wordCount < 1500).length,
  rich: results.filter(r => r.wordCount >= 1500).length,
  noH1: results.filter(r => r.h1 === 0).length,
  multipleH1: results.filter(r => r.h1 > 1).length,
  noSchema: results.filter(r => r.schemaCount === 0).length,
  fewInternalLinks: results.filter(r => r.internalLinks < 5).length,
  imagesNeedAlt: results.filter(r => r.imgMissingAlt > 0).length,
  noKeywords: results.filter(r => r.keywordCount === 0).length,
  fewKeywords: results.filter(r => r.keywordCount > 0 && r.keywordCount < 5).length,
};

console.log('=== Deep SEO Audit Summary ===\n');
for (const [k, v] of Object.entries(summary)) {
  console.log(`  ${k.padEnd(25)} ${v}`);
}
console.log('\n--- Top 20 thinnest pages (under 800 words) ---');
for (const r of results.slice(0, 20)) {
  console.log(`  [${String(r.wordCount).padStart(4)}w] ${r.slug}`);
}
console.log('\nFull report: scripts/deep-seo-audit.json');
