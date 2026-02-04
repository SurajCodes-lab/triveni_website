'use client';

import React from 'react';
import Link from 'next/link';
// Centralized icon imports for better bundle optimization
import { ChevronRight, Home } from '@/components/ui/icons';
import { cn } from '@/utilis/cn';
import { generateBreadcrumbSchema } from '@/lib/seo/schema-generators';
import { BASE_URL } from '@/lib/seo/constants';

/**
 * SEO Breadcrumb Component - Visual breadcrumb with integrated JSON-LD schema
 *
 * Features:
 * - Visual breadcrumb navigation
 * - JSON-LD BreadcrumbList schema for search engines
 * - Mobile-responsive design
 * - Multiple variants (default, transparent, hero, minimal)
 * - Accessibility compliant
 *
 * Usage:
 * <SEOBreadcrumb
 *   items={[
 *     { name: 'Sightseeing', url: '/sightseeing' },
 *     { name: 'Jaipur', url: '/sightseeing/jaipur' },
 *     { name: 'Jaipur Full Day Tour' } // Current page (no url)
 *   ]}
 * />
 */

const SEOBreadcrumb = ({
  items = [],
  showHome = true,
  variant = 'default',
  className,
  showSchema = true,
  ...props
}) => {
  // Prepare items with Home
  const breadcrumbItems = showHome
    ? [{ name: 'Home', url: '/' }, ...items]
    : items;

  // Generate schema for JSON-LD
  const schemaItems = breadcrumbItems.map(item => ({
    name: item.name,
    url: item.url || ''
  }));

  const schema = generateBreadcrumbSchema(schemaItems);

  const variants = {
    default: {
      container: 'bg-gray-50 border border-gray-100',
      text: 'text-gray-600 hover:text-amber-600',
      active: 'text-gray-900 font-medium',
      separator: 'text-gray-400',
    },
    transparent: {
      container: 'bg-transparent',
      text: 'text-gray-600 hover:text-amber-600',
      active: 'text-gray-900 font-medium',
      separator: 'text-gray-400',
    },
    hero: {
      container: 'bg-white/90 backdrop-blur-sm shadow-sm',
      text: 'text-gray-600 hover:text-amber-600',
      active: 'text-amber-700 font-medium',
      separator: 'text-gray-400',
    },
    minimal: {
      container: 'bg-transparent',
      text: 'text-gray-500 hover:text-amber-600 text-sm',
      active: 'text-gray-700 font-medium text-sm',
      separator: 'text-gray-300',
    },
    dark: {
      container: 'bg-gray-900/90 backdrop-blur-sm',
      text: 'text-gray-300 hover:text-amber-400',
      active: 'text-white font-medium',
      separator: 'text-gray-500',
    },
  };

  const currentVariant = variants[variant] || variants.default;

  return (
    <>
      {/* JSON-LD Schema */}
      {showSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      )}

      {/* Visual Breadcrumb */}
      <nav
        aria-label="Breadcrumb navigation"
        className={cn(
          'py-3 px-4 rounded-lg',
          currentVariant.container,
          className
        )}
        {...props}
      >
        <ol className="flex items-center flex-wrap gap-1 text-sm">
          {breadcrumbItems.map((item, index) => {
            const isLast = index === breadcrumbItems.length - 1;
            const isHome = index === 0 && showHome;

            return (
              <li key={index} className="flex items-center">
                {index > 0 && (
                  <ChevronRight
                    className={cn('w-4 h-4 mx-1.5 flex-shrink-0', currentVariant.separator)}
                    aria-hidden="true"
                  />
                )}

                {isLast ? (
                  <span
                    className={cn('flex items-center gap-1.5', currentVariant.active)}
                    aria-current="page"
                  >
                    {isHome && <Home className="w-4 h-4" aria-hidden="true" />}
                    <span className="line-clamp-1">{item.name}</span>
                  </span>
                ) : (
                  <Link
                    href={item.url || '#'}
                    className={cn(
                      'flex items-center gap-1.5 transition-colors duration-200',
                      currentVariant.text
                    )}
                  >
                    {isHome && <Home className="w-4 h-4" aria-hidden="true" />}
                    <span className="line-clamp-1">{item.name}</span>
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
};

/**
 * Generate breadcrumb items for different page types
 */
export function getBreadcrumbItems(pageType, data = {}) {
  const generators = {
    tour: () => [
      { name: 'Sightseeing', url: '/sightseeing' },
      { name: data.city, url: `/sightseeing#${data.city?.toLowerCase()}` },
      { name: data.tourName }
    ],
    sightseeing: () => [
      { name: 'Sightseeing', url: '/sightseeing' },
      { name: data.city, url: `/sightseeing#${data.city?.toLowerCase()}` },
      { name: data.tourName }
    ],
    cityHub: () => [
      { name: 'Cities' },
      { name: data.city }
    ],
    route: () => [
      { name: data.origin, url: `/${data.origin?.toLowerCase().replace(/\s+/g, '-')}` },
      { name: `${data.origin} to ${data.destination}` }
    ],
    airport: () => [
      { name: 'Airport Service', url: '/airport-service' },
      { name: `${data.city} Airport` }
    ],
    blog: () => [
      { name: 'Blog', url: '/blog' },
      { name: data.title }
    ],
    corporate: () => {
      const items = [
        { name: 'Corporate Transport', url: '/corporate-transportation-service' }
      ];
      if (data.industry) {
        items.push({ name: 'Industries', url: '/corporate-transportation-service' });
        items.push({ name: data.industry });
      } else if (data.useCase) {
        items.push({ name: 'Use Cases', url: '/corporate-transportation-service' });
        items.push({ name: data.useCase });
      } else if (data.city) {
        items.push({ name: data.city });
      }
      return items;
    },
    wedding: () => [
      { name: 'Wedding', url: '/wedding' },
      { name: `${data.city} Wedding Cars` }
    ],
    event: () => {
      const items = [
        { name: 'Event Transport', url: '/event-transportation-service' }
      ];
      if (data.city) {
        items.push({ name: 'Cities', url: '/event-transportation-service' });
        items.push({ name: data.city });
      } else {
        items.push({ name: data.eventType });
      }
      return items;
    },
    religious: () => [
      { name: 'Religious Tours', url: '/religious-tours' },
      { name: data.tourName }
    ],
    tempo: () => [
      { name: 'Tempo Traveller', url: '/tempo-traveller' },
      { name: `${data.origin} to ${data.destination}` }
    ],
    bus: () => [
      { name: 'Bus Routes', url: '/bus-routes' },
      { name: `${data.origin} to ${data.destination}` }
    ],
    attraction: () => [
      { name: 'Tourist Attractions', url: '/tourist-attractions' },
      { name: data.city }
    ],
    touristAttraction: () => [
      { name: 'Tourist Attractions', url: '/tourist-attractions' },
      { name: data.city }
    ]
  };

  const generator = generators[pageType];
  if (!generator) {
    console.warn(`No breadcrumb generator for page type: ${pageType}`);
    return [];
  }

  return generator();
}

/**
 * PageBreadcrumb - Convenience component that auto-generates breadcrumbs
 */
export const PageBreadcrumb = ({
  pageType,
  data,
  variant = 'default',
  className,
  ...props
}) => {
  const items = getBreadcrumbItems(pageType, data);

  return (
    <SEOBreadcrumb
      items={items}
      variant={variant}
      className={className}
      {...props}
    />
  );
};

export default SEOBreadcrumb;
export { SEOBreadcrumb };
