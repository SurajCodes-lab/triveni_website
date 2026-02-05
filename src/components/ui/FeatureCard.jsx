'use client';

import React, { memo } from 'react';
import { cn } from '@/utilis/cn';

/**
 * FeatureCard Component - Unified feature/benefit card styling
 *
 * Use this for:
 * - Why Choose Us sections
 * - Benefits/Features lists
 * - How it Works steps
 * - Service highlights
 *
 * Variants:
 * - default: White background with shadow
 * - outlined: Border instead of shadow
 * - gradient: Gradient background
 *
 * Icon Styles:
 * - circle: Icon in a circular container (default)
 * - square: Icon in a rounded square
 * - plain: Icon without container
 */

const iconStyles = {
  circle: 'w-16 h-16 rounded-full',
  square: 'w-14 h-14 rounded-card',
  plain: 'w-12 h-12',
};

const cardVariants = {
  default: 'bg-white shadow-card hover:shadow-card-hover',
  outlined: 'bg-white border border-gray-200 hover:border-primary',
  gradient: 'bg-gradient-to-br from-primary-100 to-primary-200',
};

const FeatureCard = memo(function FeatureCard({
  icon: Icon,
  title,
  description,
  step,
  variant = 'default',
  iconStyle = 'circle',
  align = 'center',
  className,
  ...props
}) {
  const alignClasses = {
    center: 'text-center items-center',
    left: 'text-left items-start',
  };

  return (
    <article
      className={cn(
        'p-6 md:p-8 rounded-card-lg transition-all duration-normal group relative',
        'hover:-translate-y-1',
        cardVariants[variant],
        'flex flex-col',
        alignClasses[align],
        className
      )}
      {...props}
    >
      {/* Step Number Badge (optional) */}
      {step && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-label-md font-bold text-black shadow-primary z-10">
          {step}
        </div>
      )}

      {/* Icon Container */}
      {Icon && (
        <div
          className={cn(
            'flex items-center justify-center mb-6',
            iconStyle === 'circle' && 'bg-primary shadow-primary group-hover:scale-110 transition-transform duration-normal',
            iconStyle === 'square' && 'bg-primary-100 group-hover:bg-primary transition-colors duration-normal',
            iconStyles[iconStyle],
            align === 'center' && 'mx-auto'
          )}
        >
          <Icon
            className={cn(
              'text-black',
              iconStyle === 'plain' ? 'w-12 h-12 text-primary' : 'w-8 h-8'
            )}
            aria-hidden="true"
          />
        </div>
      )}

      {/* Title */}
      <h3 className="text-heading-sm md:text-heading-md font-semibold mb-3 text-content group-hover:text-primary transition-colors duration-normal">
        {title}
      </h3>

      {/* Description */}
      <p className="text-body-md text-content-secondary leading-relaxed">
        {description}
      </p>
    </article>
  );
});

/**
 * FeatureGrid - Wrapper for consistent grid layouts
 */
const FeatureGrid = ({
  children,
  columns = 3,
  className,
  ...props
}) => {
  const gridCols = {
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4',
  };

  return (
    <div
      className={cn(
        'grid gap-6 lg:gap-8',
        gridCols[columns],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default FeatureCard;
export { FeatureCard, FeatureGrid };
