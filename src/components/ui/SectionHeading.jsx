'use client';

import React from 'react';
import { cn } from '@/utilis/cn';

/**
 * SectionHeading Component - Unified heading typography
 *
 * Responsive Typography Scale:
 * - Mobile (< 640px): Smaller sizes
 * - Tablet (640px - 1024px): Medium sizes
 * - Desktop (> 1024px): Full sizes
 *
 * Levels:
 * - 1: Page titles / Hero headings (h1)
 * - 2: Section titles (h2)
 * - 3: Subsection titles (h3)
 * - 4: Card titles (h4)
 */

const headingStyles = {
  1: {
    element: 'h1',
    classes: 'text-display-sm md:text-display-md lg:text-display-lg',
  },
  2: {
    element: 'h2',
    classes: 'text-heading-lg md:text-heading-xl lg:text-display-sm',
  },
  3: {
    element: 'h3',
    classes: 'text-heading-md md:text-heading-lg lg:text-heading-xl',
  },
  4: {
    element: 'h4',
    classes: 'text-heading-sm md:text-heading-md lg:text-heading-lg',
  },
  5: {
    element: 'h5',
    classes: 'text-heading-xs md:text-heading-sm lg:text-heading-md',
  },
};

const SectionHeading = React.forwardRef(({
  children,
  level = 2,
  as,
  className,
  align = 'left',
  withUnderline = false,
  underlineColor = 'primary',
  ...props
}, ref) => {
  const { element, classes } = headingStyles[level] || headingStyles[2];
  const Component = as || element;

  const alignClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };

  const underlineColors = {
    primary: 'from-primary to-primary-dark',
    dark: 'from-gray-900 to-gray-700',
  };

  return (
    <div className={cn(alignClasses[align], className)}>
      <Component
        ref={ref}
        className={cn(
          classes,
          'text-gray-900 font-bold tracking-tight',
          'transition-colors duration-normal'
        )}
        {...props}
      >
        {children}
      </Component>
      {withUnderline && (
        <div
          className={cn(
            'h-1 rounded-full mt-4',
            'bg-gradient-to-r',
            underlineColors[underlineColor],
            align === 'center' ? 'w-24 mx-auto' : 'w-24'
          )}
          aria-hidden="true"
        />
      )}
    </div>
  );
});

SectionHeading.displayName = 'SectionHeading';

/**
 * SectionSubheading Component - For section descriptions
 */
const SectionSubheading = React.forwardRef(({
  children,
  className,
  align = 'left',
  size = 'md',
  ...props
}, ref) => {
  const alignClasses = {
    left: 'text-left',
    center: 'text-center mx-auto',
    right: 'text-right',
  };

  const sizeClasses = {
    sm: 'text-body-md md:text-body-lg max-w-xl',
    md: 'text-body-lg md:text-body-xl max-w-2xl',
    lg: 'text-body-xl md:text-display-sm max-w-3xl',
  };

  return (
    <p
      ref={ref}
      className={cn(
        'text-content-secondary',
        sizeClasses[size],
        alignClasses[align],
        className
      )}
      {...props}
    >
      {children}
    </p>
  );
});

SectionSubheading.displayName = 'SectionSubheading';

/**
 * SectionHeader Component - Combined heading + subheading
 */
const SectionHeader = ({
  title,
  subtitle,
  level = 2,
  align = 'center',
  withUnderline = true,
  className,
  titleClassName,
  subtitleClassName,
  ...props
}) => {
  return (
    <header className={cn('mb-12 md:mb-16', className)} {...props}>
      <SectionHeading
        level={level}
        align={align}
        withUnderline={withUnderline}
        className={titleClassName}
      >
        {title}
      </SectionHeading>
      {subtitle && (
        <SectionSubheading
          align={align}
          className={cn('mt-4', subtitleClassName)}
        >
          {subtitle}
        </SectionSubheading>
      )}
    </header>
  );
};

export default SectionHeading;
export { SectionHeading, SectionSubheading, SectionHeader };
