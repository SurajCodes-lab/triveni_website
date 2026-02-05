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

// AEO Components - Answer Engine Optimization
export {
  default as DirectAnswer,
  DirectAnswerBox,
  QuickFacts,
  CitationBlock,
  EntityDefinition
} from './DirectAnswer';

// GEO Components - Generative Engine Optimization
export {
  default as QuotableStats,
  InlineStats,
  StatCard,
  defaultTriveniStats
} from './QuotableStats';

// People Also Ask & Voice Search Components
export {
  default as PeopleAlsoAsk,
  VoiceSearchFAQ
} from './PeopleAlsoAsk';
