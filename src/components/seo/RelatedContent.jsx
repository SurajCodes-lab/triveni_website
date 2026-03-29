'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
// Centralized icon imports for better bundle optimization
import {
  MapPin,
  Car,
  Plane,
  Building2,
  Heart,
  Calendar,
  ArrowRight,
  ChevronRight,
  Clock,
  IndianRupee
} from '@/components/ui/icons';
import { cn } from '@/utilis/cn';
import { BASE_URL } from '@/lib/seo/constants';

/**
 * Related Content Component - Displays related internal links for SEO
 *
 * Features:
 * - "Popular Routes from {City}" - for city/route pages
 * - "Related Tours" - for tour pages
 * - "Also Available in {City}" - cross-service links
 * - "Nearby Destinations" - geographic linking
 *
 * Usage:
 * <RelatedContent
 *   type="routes"
 *   city="Delhi"
 *   items={routeItems}
 * />
 */

// Icons mapping
const iconMap = {
  route: Car,
  tour: MapPin,
  airport: Plane,
  corporate: Building2,
  wedding: Heart,
  event: Calendar,
  default: MapPin
};

/**
 * Popular Routes Section
 */
export const PopularRoutes = ({
  city,
  routes = [],
  title,
  limit = 6,
  className,
  ...props
}) => {
  if (routes.length === 0) return null;

  const displayRoutes = routes.slice(0, limit);

  // ItemList schema for internal link discovery by search engines
  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: title || `Popular Routes from ${city}`,
    numberOfItems: displayRoutes.length,
    itemListElement: displayRoutes.map((route, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'TaxiService',
        name: `${route.origin || city} to ${route.destination} Cab`,
        url: `${BASE_URL}${route.url || route.href || ''}`,
        ...(route.price ? { offers: { '@type': 'Offer', price: route.price, priceCurrency: 'INR' } } : {})
      }
    }))
  };

  return (
    <section className={cn('py-8 md:py-12', className)} {...props}>
      {/* ItemList Schema for route discovery */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <div className="container mx-auto px-4">
        <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
          {title || `Popular Routes from ${city}`}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {displayRoutes.map((route, index) => (
            <Link
              key={index}
              href={route.url || route.href || '#'}
              className="group flex items-center gap-3 p-4 bg-white rounded-lg border border-gray-100 hover:border-amber-200 hover:shadow-md transition-all"
            >
              <div className="p-2 bg-amber-50 rounded-lg group-hover:bg-amber-100 transition-colors">
                <Car className="w-5 h-5 text-amber-600" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-medium text-gray-900 group-hover:text-amber-700 transition-colors truncate">
                  {route.origin || city} to {route.destination}
                </p>
                <div className="flex items-center gap-3 text-sm text-gray-500">
                  {route.distance && <span>{route.distance} km</span>}
                  {route.price && (
                    <span className="flex items-center">
                      <IndianRupee className="w-3 h-3" />
                      {route.price}
                    </span>
                  )}
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-amber-600 transition-colors" />
            </Link>
          ))}
        </div>

        {routes.length > limit && (
          <div className="mt-6 text-center">
            <Link
              href={`/${city?.toLowerCase().replace(/\s+/g, '-')}`}
              className="inline-flex items-center gap-2 text-amber-600 hover:text-amber-700 font-medium"
            >
              View all routes from {city}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

/**
 * Related Tours Section
 */
export const RelatedTours = ({
  city,
  tours = [],
  currentSlug,
  title,
  limit = 4,
  className,
  ...props
}) => {
  // Filter out current tour and limit
  const displayTours = tours
    .filter(tour => tour.slug !== currentSlug)
    .slice(0, limit);

  if (displayTours.length === 0) return null;

  return (
    <section className={cn('py-8 md:py-12 bg-gray-50', className)} {...props}>
      <div className="container mx-auto px-4">
        <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
          {title || `More Tours in ${city}`}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {displayTours.map((tour, index) => (
            <Link
              key={index}
              href={tour.url || `/sightseeing/${tour.slug}`}
              className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all"
            >
              {tour.image && (
                <div className="relative h-36 overflow-hidden">
                  <Image
                    src={tour.image}
                    alt={tour.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
              )}
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 group-hover:text-amber-700 transition-colors line-clamp-2 mb-2">
                  {tour.name}
                </h3>
                <div className="flex items-center justify-between text-sm">
                  {tour.duration && (
                    <span className="flex items-center gap-1 text-gray-500">
                      <Clock className="w-4 h-4" />
                      {tour.duration}
                    </span>
                  )}
                  {tour.price && (
                    <span className="flex items-center text-amber-600 font-medium">
                      <IndianRupee className="w-3 h-3" />
                      {tour.price}
                    </span>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>

        {tours.length > limit && (
          <div className="mt-6 text-center">
            <Link
              href="/sightseeing"
              className="inline-flex items-center gap-2 text-amber-600 hover:text-amber-700 font-medium"
            >
              Explore all tours
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

/**
 * Cross-Service Links - "Also Available in {City}"
 */
export const CrossServiceLinks = ({
  city,
  services = [],
  title,
  className,
  ...props
}) => {
  // Default services if none provided
  const citySlug = city?.toLowerCase().replace(/\s+/g, '-') || '';
  const cityDisplay = city || 'your city';

  const defaultServices = [
    {
      name: 'Airport Transfer',
      icon: 'airport',
      url: `/airport-service/${citySlug}`,
      description: `Airport pickup & drop in ${cityDisplay}`
    },
    {
      name: 'Sightseeing Tours',
      icon: 'tour',
      url: `/sightseeing/${citySlug}`,
      description: `Explore ${cityDisplay} tourist places`
    },
    {
      name: 'One-Way Cab',
      icon: 'route',
      url: `/one-way-cab`,
      description: `Save 50% — pay single direction only`
    },
    {
      name: 'Round Trip Cab',
      icon: 'route',
      url: `/round-trip-cab`,
      description: `Multi-day trips with same driver`
    },
    {
      name: 'Wedding Cars',
      icon: 'wedding',
      url: `/wedding/${citySlug}`,
      description: `Decorated cars for your special day`
    },
    {
      name: 'Corporate Transport',
      icon: 'corporate',
      url: `/corporate-transportation-service/${citySlug}`,
      description: `Employee shuttle & office cabs`
    },
    {
      name: 'Event Transport',
      icon: 'event',
      url: `/event-transportation-service/city/${citySlug}`,
      description: `Group & event transportation`
    },
    {
      name: 'Outstation Cabs',
      icon: 'route',
      url: `/outstation-cabs`,
      description: `Intercity travel with professional drivers`
    }
  ];

  const displayServices = services.length > 0 ? services : defaultServices;

  return (
    <section className={cn('py-8 md:py-12', className)} {...props}>
      <div className="container mx-auto px-4">
        <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
          {title || `Also Available in ${city}`}
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {displayServices.map((service, index) => {
            const Icon = iconMap[service.icon] || iconMap.default;

            return (
              <Link
                key={index}
                href={service.url || '#'}
                className="group p-4 bg-white rounded-xl border border-gray-100 hover:border-amber-200 hover:shadow-md transition-all text-center"
              >
                <div className="inline-flex p-3 bg-amber-50 rounded-full mb-3 group-hover:bg-amber-100 transition-colors">
                  <Icon className="w-6 h-6 text-amber-600" />
                </div>
                <h3 className="font-semibold text-gray-900 group-hover:text-amber-700 transition-colors mb-1">
                  {service.name}
                </h3>
                <p className="text-sm text-gray-500 line-clamp-2">
                  {service.description}
                </p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

/**
 * Nearby Destinations Section
 */
export const NearbyDestinations = ({
  currentCity,
  destinations = [],
  title,
  limit = 6,
  className,
  ...props
}) => {
  const displayDestinations = destinations.slice(0, limit);

  if (displayDestinations.length === 0) return null;

  return (
    <section className={cn('py-8 md:py-12 bg-gradient-to-br from-amber-50 to-orange-50', className)} {...props}>
      <div className="container mx-auto px-4">
        <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
          {title || `Explore Nearby Destinations`}
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {displayDestinations.map((dest, index) => (
            <Link
              key={index}
              href={dest.url || `/${dest.slug || dest.name?.toLowerCase().replace(/\s+/g, '-')}`}
              className="group"
            >
              <div className="relative h-32 rounded-xl overflow-hidden mb-2">
                {dest.image ? (
                  <Image
                    src={dest.image}
                    alt={dest.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-amber-200 to-orange-200" />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-2 left-2 right-2">
                  <p className="text-white font-medium text-sm truncate">
                    {dest.name}
                  </p>
                </div>
              </div>
              {dest.distance && (
                <p className="text-xs text-gray-500 text-center">
                  {dest.distance} km from {currentCity}
                </p>
              )}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

/**
 * Quick Links Grid - Compact grid of internal links
 */
export const QuickLinksGrid = ({
  title,
  links = [],
  columns = 3,
  className,
  ...props
}) => {
  if (links.length === 0) return null;

  const columnClasses = {
    2: 'grid-cols-1 sm:grid-cols-2',
    3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-2 lg:grid-cols-4',
    6: 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-6'
  };

  // ItemList schema for internal link discovery
  const quickLinksSchema = title ? {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: title,
    numberOfItems: links.length,
    itemListElement: links.map((link, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'WebPage',
        name: link.label || link.name,
        url: `${BASE_URL}${link.url || link.href || ''}`
      }
    }))
  } : null;

  return (
    <section className={cn('py-8 md:py-10', className)} {...props}>
      {/* ItemList Schema for link discovery */}
      {quickLinksSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(quickLinksSchema) }}
        />
      )}
      <div className="container mx-auto px-4">
        {title && (
          <h2 className="text-lg md:text-xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
        )}

        <div className={cn('grid gap-3', columnClasses[columns] || columnClasses[3])}>
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.url || link.href || '#'}
              className="flex items-center gap-2 p-3 bg-white rounded-lg border border-gray-100 hover:border-amber-200 hover:bg-amber-50 transition-all group"
            >
              <ChevronRight className="w-4 h-4 text-amber-600 flex-shrink-0" />
              <span className="text-gray-700 group-hover:text-amber-700 text-sm truncate">
                {link.label || link.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

/**
 * Related Content Wrapper - Single component for all related content types
 */
const RelatedContent = ({
  type,
  city,
  data = [],
  title,
  className,
  ...props
}) => {
  const components = {
    routes: PopularRoutes,
    tours: RelatedTours,
    services: CrossServiceLinks,
    destinations: NearbyDestinations,
    links: QuickLinksGrid
  };

  const Component = components[type];

  if (!Component) {
    console.warn(`Unknown related content type: ${type}`);
    return null;
  }

  // Map data prop to the appropriate prop name
  const dataProps = {
    routes: { routes: data },
    tours: { tours: data },
    services: { services: data },
    destinations: { destinations: data },
    links: { links: data }
  };

  return (
    <Component
      city={city}
      title={title}
      className={className}
      {...dataProps[type]}
      {...props}
    />
  );
};

export default RelatedContent;
