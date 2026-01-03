'use client';

import React from 'react';
import Link from 'next/link';
import { cn } from '@/utilis/cn';

/**
 * Button Component - Unified button styling across the application
 *
 * Variants:
 * - primary: Yellow background, black text (main CTA)
 * - secondary: Black background, white text
 * - outline: Transparent with border
 * - ghost: No background, just text
 * - success: Green for confirmations
 *
 * Sizes:
 * - sm: Small buttons (labels, compact UI)
 * - md: Default size
 * - lg: Large buttons (hero sections)
 * - xl: Extra large (prominent CTAs)
 */

const buttonVariants = {
  primary: 'bg-primary text-black hover:bg-primary-dark focus:ring-primary shadow-button hover:shadow-button-hover',
  secondary: 'bg-gray-900 text-white hover:bg-primary hover:text-black focus:ring-gray-900 shadow-button hover:shadow-button-hover',
  outline: 'bg-transparent border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white focus:ring-gray-900',
  'outline-primary': 'bg-transparent border-2 border-primary text-gray-900 hover:bg-primary hover:text-black focus:ring-primary',
  ghost: 'bg-transparent text-gray-900 hover:bg-gray-100 focus:ring-gray-300',
  success: 'bg-success text-white hover:bg-success-dark focus:ring-success shadow-button hover:shadow-button-hover',
  whatsapp: 'bg-green-600 text-white hover:bg-green-700 focus:ring-green-500 shadow-button hover:shadow-button-hover',
};

const buttonSizes = {
  sm: 'px-4 py-2 text-body-sm min-h-[36px]',
  md: 'px-6 py-3 text-body-md min-h-[44px]',
  lg: 'px-8 py-4 text-body-lg min-h-[48px]',
  xl: 'px-10 py-5 text-body-xl min-h-[56px]',
};

const iconSizes = {
  sm: 'w-4 h-4',
  md: 'w-5 h-5',
  lg: 'w-5 h-5',
  xl: 'w-6 h-6',
};

const Button = React.forwardRef(({
  children,
  variant = 'primary',
  size = 'md',
  href,
  disabled = false,
  loading = false,
  fullWidth = false,
  leftIcon: LeftIcon,
  rightIcon: RightIcon,
  className,
  onClick,
  type = 'button',
  ariaLabel,
  ...props
}, ref) => {

  const baseClasses = cn(
    // Base styles
    'inline-flex items-center justify-center',
    'font-semibold',
    'rounded-button',
    'transition-all duration-normal',
    'focus:outline-none focus:ring-2 focus:ring-offset-2',
    'disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none',
    // Variant
    buttonVariants[variant],
    // Size
    buttonSizes[size],
    // Full width
    fullWidth && 'w-full',
    // Loading state
    loading && 'relative text-transparent',
    // Custom classes
    className
  );

  const iconClass = cn(iconSizes[size], 'flex-shrink-0');

  const content = (
    <>
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <svg
            className={cn(iconSizes[size], 'animate-spin')}
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        </div>
      )}
      {LeftIcon && <LeftIcon className={cn(iconClass, children && 'mr-2')} aria-hidden="true" />}
      {children}
      {RightIcon && <RightIcon className={cn(iconClass, children && 'ml-2')} aria-hidden="true" />}
    </>
  );

  // If href is provided, render as Link
  if (href && !disabled) {
    return (
      <Link
        ref={ref}
        href={href}
        className={baseClasses}
        aria-label={ariaLabel}
        {...props}
      >
        {content}
      </Link>
    );
  }

  // Otherwise render as button
  return (
    <button
      ref={ref}
      type={type}
      disabled={disabled || loading}
      className={baseClasses}
      onClick={onClick}
      aria-label={ariaLabel}
      aria-busy={loading}
      {...props}
    >
      {content}
    </button>
  );
});

Button.displayName = 'Button';

export default Button;
export { buttonVariants, buttonSizes };
