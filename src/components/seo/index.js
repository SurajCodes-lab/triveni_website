/**
 * SEO Components - Central Export
 * Import all SEO components from this single entry point
 *
 * Usage:
 * import { SEOBreadcrumb, FAQSection, RelatedContent } from '@/components/seo';
 */

// Breadcrumb Components
export {
  default as SEOBreadcrumb,
  SEOBreadcrumb,
  PageBreadcrumb,
  getBreadcrumbItems
} from './Breadcrumb';

// FAQ Components
export {
  default as FAQSection,
  FAQSection,
  InlineFAQ,
  SimpleFAQ
} from './FAQSection';

// Related Content Components
export {
  default as RelatedContent,
  RelatedContent,
  PopularRoutes,
  RelatedTours,
  CrossServiceLinks,
  NearbyDestinations,
  QuickLinksGrid
} from './RelatedContent';
