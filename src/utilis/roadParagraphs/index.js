// Week 48, Workstream A3: road paragraphs index.
//
// Merges the ten hand-written batches (five corridors each) into one map and
// exposes a single lookup. Each entry is plain data: { origin, destination, text }.
// A paragraph describes the road, not the direction, so the lookup also answers
// for the reverse slug (dehradun-to-delhi finds delhi-to-dehradun).
//
// Pure module: no React, no side effects. Import it from server pages only and
// hand the resulting object to the client component as a prop, so the whole
// corpus never ships in a client bundle.

import { roadParagraphs as batch1 } from './batch1';
import { roadParagraphs as batch2 } from './batch2';
import { roadParagraphs as batch3 } from './batch3';
import { roadParagraphs as batch4 } from './batch4';
import { roadParagraphs as batch5 } from './batch5';
import { roadParagraphs as batch6 } from './batch6';
import { roadParagraphs as batch7 } from './batch7';
import { roadParagraphs as batch8 } from './batch8';
import { roadParagraphs as batch9 } from './batch9';
import { roadParagraphs as batch10 } from './batch10';

export const roadParagraphs = {
  ...batch1,
  ...batch2,
  ...batch3,
  ...batch4,
  ...batch5,
  ...batch6,
  ...batch7,
  ...batch8,
  ...batch9,
  ...batch10,
};

function normaliseSlug(slug) {
  if (typeof slug !== 'string') return '';
  return slug.trim().toLowerCase().replace(/^\/+|\/+$/g, '');
}

function reverseSlug(slug) {
  const at = slug.indexOf('-to-');
  if (at <= 0) return '';
  const a = slug.slice(0, at);
  const b = slug.slice(at + 4);
  if (!a || !b) return '';
  return `${b}-to-${a}`;
}

/**
 * Return the road paragraph for a corridor slug ("delhi-to-dehradun"), or for
 * its reverse, or null when the corridor has no paragraph yet. The returned
 * object is the stored entry plus the slug it was matched under and whether
 * the match was the reverse direction, so callers can label it if they wish.
 */
export function getRoadParagraph(slug) {
  const key = normaliseSlug(slug);
  if (!key) return null;

  const direct = roadParagraphs[key];
  if (direct) return { slug: key, reversed: false, ...direct };

  const rev = reverseSlug(key);
  const entry = rev ? roadParagraphs[rev] : null;
  if (entry) return { slug: rev, reversed: true, ...entry };

  return null;
}

export function getRoadParagraphSlugs() {
  return Object.keys(roadParagraphs);
}

export default getRoadParagraph;
