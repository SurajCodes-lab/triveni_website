'use client';

import React from 'react';
import Link from 'next/link';
// Centralized icon imports for better bundle optimization
import { ChevronRight, Home } from '@/components/ui/icons';
import { cn } from '@/utilis/cn';

/**
 * Breadcrumb Component - Unified breadcrumb styling
 *
 * Usage:
 * <Breadcrumb
 *   items={[
 *     { label: 'Services', href: '/services' },
 *     { label: 'Taxi Booking', href: '/services/taxi' },
 *     { label: 'Delhi Taxi' } // Current page (no href)
 *   ]}
 * />
 */

const Breadcrumb = ({
  items = [],
  showHome = true,
  separator = 'chevron',
  variant = 'default',
  className,
  ...props
}) => {
  const separators = {
    chevron: <ChevronRight className="w-4 h-4 text-content-tertiary flex-shrink-0" aria-hidden="true" />,
    slash: <span className="text-content-tertiary mx-1" aria-hidden="true">/</span>,
    dot: <span className="text-content-tertiary mx-2" aria-hidden="true">•</span>,
  };

  const variants = {
    default: {
      container: 'bg-surface-secondary',
      text: 'text-content-secondary hover:text-primary',
      active: 'text-content font-medium',
    },
    transparent: {
      container: 'bg-transparent',
      text: 'text-content-secondary hover:text-primary',
      active: 'text-content font-medium',
    },
    primary: {
      container: 'bg-primary-100',
      text: 'text-content-secondary hover:text-primary-dark',
      active: 'text-primary-dark font-medium',
    },
  };

  const currentVariant = variants[variant];

  const allItems = showHome
    ? [{ label: 'Home', href: '/', icon: Home }, ...items]
    : items;

  return (
    <nav
      aria-label="Breadcrumb"
      className={cn(
        'py-3 px-4 rounded-lg',
        currentVariant.container,
        className
      )}
      {...props}
    >
      <ol
        className="flex items-center flex-wrap gap-1 text-body-sm"
        itemScope
        itemType="https://schema.org/BreadcrumbList"
      >
        {allItems.map((item, index) => {
          const isLast = index === allItems.length - 1;
          const Icon = item.icon;

          return (
            <li
              key={index}
              className="flex items-center"
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/ListItem"
            >
              {index > 0 && (
                <span className="mx-2">
                  {separators[separator]}
                </span>
              )}

              {isLast ? (
                <span
                  className={cn('flex items-center gap-1.5', currentVariant.active)}
                  itemProp="name"
                  aria-current="page"
                >
                  {Icon && <Icon className="w-4 h-4" aria-hidden="true" />}
                  {item.label}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className={cn(
                    'flex items-center gap-1.5 transition-colors duration-fast',
                    currentVariant.text
                  )}
                  itemProp="item"
                >
                  {Icon && <Icon className="w-4 h-4" aria-hidden="true" />}
                  <span itemProp="name">{item.label}</span>
                </Link>
              )}
              <meta itemProp="position" content={String(index + 1)} />
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

/**
 * SimpleBreadcrumb - Inline breadcrumb for page headers
 */
const SimpleBreadcrumb = ({
  items = [],
  showHome = true,
  className,
  ...props
}) => {
  const allItems = showHome
    ? [{ label: 'Home', href: '/' }, ...items]
    : items;

  return (
    <nav aria-label="Breadcrumb" className={className} {...props}>
      <ol className="flex items-center flex-wrap gap-1 text-body-sm">
        {allItems.map((item, index) => {
          const isLast = index === allItems.length - 1;

          return (
            <li key={index} className="flex items-center">
              {index > 0 && (
                <ChevronRight
                  className="w-4 h-4 mx-1 text-content-tertiary flex-shrink-0"
                  aria-hidden="true"
                />
              )}
              {isLast ? (
                <span className="text-content font-medium" aria-current="page">
                  {item.label}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className="text-content-secondary hover:text-primary transition-colors duration-fast"
                >
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
export { Breadcrumb, SimpleBreadcrumb };
