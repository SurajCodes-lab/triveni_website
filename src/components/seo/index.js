/**
 * SEO Components - Central Export
 * Import all SEO components from this single entry point
 *
 * Usage:
 * import { SEOBreadcrumb, FAQSection, PopularRoutes } from '@/components/seo';
 */

// Breadcrumb Components
export {
  default as SEOBreadcrumb,
  PageBreadcrumb,
  getBreadcrumbItems
} from './Breadcrumb';

// FAQ Components
export {
  default as FAQSection,
  InlineFAQ,
  SimpleFAQ
} from './FAQSection';

// Related Content Components
export {
  default as RelatedContent,
  PopularRoutes,
  RelatedTours,
  CrossServiceLinks,
  NearbyDestinations,
  QuickLinksGrid
} from './RelatedContent';
