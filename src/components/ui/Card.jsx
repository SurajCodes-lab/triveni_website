'use client';

import React from 'react';
import { cn } from '@/utilis/cn';

/**
 * Card Component - Unified card styling across the application
 *
 * Variants:
 * - default: White background with subtle shadow
 * - elevated: Larger shadow, more prominent
 * - outlined: Border instead of shadow
 * - interactive: Hover effects for clickable cards
 *
 * Sizes:
 * - sm: Compact padding
 * - md: Default padding
 * - lg: Generous padding
 */

const cardVariants = {
  default: 'bg-white shadow-card',
  elevated: 'bg-white shadow-card-lg',
  outlined: 'bg-white border border-gray-200',
  interactive: 'bg-white shadow-card hover:shadow-card-hover hover:-translate-y-1 cursor-pointer',
  'interactive-primary': 'bg-white shadow-card hover:shadow-card-hover hover:-translate-y-1 cursor-pointer hover:border-primary border border-transparent',
};

const cardSizes = {
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-8',
  responsive: 'p-4 md:p-6 lg:p-8',
};

const cardRounding = {
  sm: 'rounded-lg',
  md: 'rounded-card',
  lg: 'rounded-card-lg',
};

const Card = React.forwardRef(({
  children,
  variant = 'default',
  size = 'md',
  rounded = 'md',
  className,
  as: Component = 'div',
  ...props
}, ref) => {
  return (
    <Component
      ref={ref}
      className={cn(
        // Base styles
        'transition-all duration-normal',
        // Variant
        cardVariants[variant],
        // Size
        cardSizes[size],
        // Rounding
        cardRounding[rounded],
        // Custom classes
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
});

Card.displayName = 'Card';

// Card Header subcomponent
const CardHeader = React.forwardRef(({ children, className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('mb-4', className)}
    {...props}
  >
    {children}
  </div>
));
CardHeader.displayName = 'CardHeader';

// Card Title subcomponent
const CardTitle = React.forwardRef(({ children, className, as: Component = 'h3', ...props }, ref) => (
  <Component
    ref={ref}
    className={cn(
      'text-heading-sm md:text-heading-md text-gray-900 font-semibold',
      className
    )}
    {...props}
  >
    {children}
  </Component>
));
CardTitle.displayName = 'CardTitle';

// Card Description subcomponent
const CardDescription = React.forwardRef(({ children, className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn(
      'text-body-md text-content-secondary',
      className
    )}
    {...props}
  >
    {children}
  </p>
));
CardDescription.displayName = 'CardDescription';

// Card Content subcomponent
const CardContent = React.forwardRef(({ children, className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('', className)}
    {...props}
  >
    {children}
  </div>
));
CardContent.displayName = 'CardContent';

// Card Footer subcomponent
const CardFooter = React.forwardRef(({ children, className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('mt-4 pt-4 border-t border-gray-100', className)}
    {...props}
  >
    {children}
  </div>
));
CardFooter.displayName = 'CardFooter';

export default Card;
export { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter };
