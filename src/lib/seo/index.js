/**
 * SEO Library - Central Export
 * Import all SEO utilities from this single entry point
 *
 * Usage:
 * import { generateRouteMetadata, generateBreadcrumbSchema, generateRouteFAQs } from '@/lib/seo';
 */

// Constants
export {
  COMPANY_INFO,
  BASE_URL,
  SITE_CONFIG,
  PRICING,
  PAGE_TYPES,
  AGGREGATE_RATING,
  SERVICE_AREAS,
  VEHICLE_TYPES,
  DEFAULT_FAQ_COUNT
} from './constants';

// Metadata Factory
export {
  generateRouteMetadata,
  generateTourMetadata,
  generateCityHubMetadata,
  generateAirportMetadata,
  generateBlogMetadata,
  generateCorporateMetadata,
  generateWeddingMetadata,
  generateEventMetadata,
  generateTempoMetadata,
  generateBusMetadata
} from './metadata-factory';

// Schema Generators
export {
  generateOrganizationSchema,
  generateLocalBusinessSchema,
  generateTourSchema,
  generateCitySchema,
  generateRouteSchema,
  generateTravelActionSchema,
  generateServiceSchema,
  generateBreadcrumbSchema,
  generateFAQSchema,
  generateArticleSchema,
  generateItemListSchema,
  generateWebPageSchema,
  generateProductSchema,
  generateEventSchema,
  generateHowToSchema,
  combineSchemas,
  generateCompleteTourPageSchema,
  generateCompleteRoutePageSchema,
  generateCompleteCityPageSchema
} from './schema-generators';

// FAQ Generators
export {
  generateRouteFAQs,
  generateTourFAQs,
  generateCityFAQs,
  generateAirportFAQs,
  generateCorporateFAQs,
  generateWeddingFAQs,
  generateEventFAQs,
  generateReligiousTourFAQs,
  generateTempoTravellerFAQs,
  generateBusFAQs,
  generateAttractionCityFAQs,
  getFAQsByPageType
} from './faq-generator';

// AEO/GEO Generators - Answer Engine & Generative Engine Optimization
export {
  generateSpeakableSchema,
  generateBookingHowToSchema,
  generateEntityDefinitionSchema,
  generateQuotableStats,
  generateDirectAnswerContent,
  generateCitationBlocks,
  generateCompleteAEOSchema
} from './aeo-generators';

// Default export with all modules
import * as constants from './constants';
import * as metadataFactory from './metadata-factory';
import * as schemaGenerators from './schema-generators';
import * as faqGenerator from './faq-generator';
import * as aeoGenerators from './aeo-generators';

export default {
  ...constants,
  ...metadataFactory,
  ...schemaGenerators,
  ...faqGenerator,
  ...aeoGenerators
};
