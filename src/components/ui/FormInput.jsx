'use client';

import React from 'react';
import { cn } from '@/utilis/cn';

/**
 * FormInput Component - Unified form input styling
 *
 * Types: text, email, tel, password, number, date, textarea, select
 *
 * Sizes:
 * - sm: Compact inputs
 * - md: Default size
 * - lg: Large inputs
 */

const inputSizes = {
  sm: 'px-3 py-2 text-body-sm min-h-[36px]',
  md: 'px-4 py-3 text-body-md min-h-[44px]',
  lg: 'px-5 py-4 text-body-lg min-h-[52px]',
};

const baseInputClasses = cn(
  'w-full',
  'bg-white',
  'border border-gray-300',
  'rounded-input',
  'text-gray-900',
  'placeholder:text-gray-400',
  'transition-all duration-fast',
  'focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary',
  'hover:border-gray-400',
  'disabled:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-60'
);

const FormInput = React.forwardRef(({
  label,
  error,
  helperText,
  size = 'md',
  leftIcon: LeftIcon,
  rightIcon: RightIcon,
  className,
  inputClassName,
  required = false,
  id,
  ...props
}, ref) => {
  const inputId = id || props.name;
  const hasError = Boolean(error);

  return (
    <div className={cn('w-full', className)}>
      {label && (
        <label
          htmlFor={inputId}
          className="block text-body-sm font-medium text-gray-700 mb-2"
        >
          {label}
          {required && <span className="text-error ml-1" aria-hidden="true">*</span>}
        </label>
      )}
      <div className="relative">
        {LeftIcon && (
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
            <LeftIcon className="w-5 h-5" aria-hidden="true" />
          </div>
        )}
        <input
          ref={ref}
          id={inputId}
          className={cn(
            baseInputClasses,
            inputSizes[size],
            LeftIcon && 'pl-10',
            RightIcon && 'pr-10',
            hasError && 'border-error focus:ring-error focus:border-error',
            inputClassName
          )}
          aria-invalid={hasError}
          aria-describedby={hasError ? `${inputId}-error` : helperText ? `${inputId}-helper` : undefined}
          aria-required={required}
          {...props}
        />
        {RightIcon && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
            <RightIcon className="w-5 h-5" aria-hidden="true" />
          </div>
        )}
      </div>
      {error && (
        <p id={`${inputId}-error`} className="mt-1.5 text-body-sm text-error" role="alert">
          {error}
        </p>
      )}
      {helperText && !error && (
        <p id={`${inputId}-helper`} className="mt-1.5 text-body-sm text-content-tertiary">
          {helperText}
        </p>
      )}
    </div>
  );
});

FormInput.displayName = 'FormInput';

/**
 * FormTextarea Component - For multi-line text input
 */
const FormTextarea = React.forwardRef(({
  label,
  error,
  helperText,
  size = 'md',
  className,
  textareaClassName,
  required = false,
  rows = 4,
  id,
  ...props
}, ref) => {
  const textareaId = id || props.name;
  const hasError = Boolean(error);

  return (
    <div className={cn('w-full', className)}>
      {label && (
        <label
          htmlFor={textareaId}
          className="block text-body-sm font-medium text-gray-700 mb-2"
        >
          {label}
          {required && <span className="text-error ml-1" aria-hidden="true">*</span>}
        </label>
      )}
      <textarea
        ref={ref}
        id={textareaId}
        rows={rows}
        className={cn(
          baseInputClasses,
          inputSizes[size],
          'resize-y min-h-[100px]',
          hasError && 'border-error focus:ring-error focus:border-error',
          textareaClassName
        )}
        aria-invalid={hasError}
        aria-describedby={hasError ? `${textareaId}-error` : helperText ? `${textareaId}-helper` : undefined}
        aria-required={required}
        {...props}
      />
      {error && (
        <p id={`${textareaId}-error`} className="mt-1.5 text-body-sm text-error" role="alert">
          {error}
        </p>
      )}
      {helperText && !error && (
        <p id={`${textareaId}-helper`} className="mt-1.5 text-body-sm text-content-tertiary">
          {helperText}
        </p>
      )}
    </div>
  );
});

FormTextarea.displayName = 'FormTextarea';

/**
 * FormSelect Component - For dropdown selection
 */
const FormSelect = React.forwardRef(({
  label,
  error,
  helperText,
  size = 'md',
  className,
  selectClassName,
  required = false,
  options = [],
  placeholder = 'Select an option',
  id,
  ...props
}, ref) => {
  const selectId = id || props.name;
  const hasError = Boolean(error);

  return (
    <div className={cn('w-full', className)}>
      {label && (
        <label
          htmlFor={selectId}
          className="block text-body-sm font-medium text-gray-700 mb-2"
        >
          {label}
          {required && <span className="text-error ml-1" aria-hidden="true">*</span>}
        </label>
      )}
      <select
        ref={ref}
        id={selectId}
        className={cn(
          baseInputClasses,
          inputSizes[size],
          'appearance-none cursor-pointer',
          'bg-[url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20fill%3D%22none%22%20viewBox%3D%220%200%2024%2024%22%20stroke%3D%22%236B7280%22%3E%3Cpath%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%222%22%20d%3D%22M19%209l-7%207-7-7%22%2F%3E%3C%2Fsvg%3E")]',
          'bg-[length:1.25rem] bg-[right_0.75rem_center] bg-no-repeat',
          'pr-10',
          hasError && 'border-error focus:ring-error focus:border-error',
          selectClassName
        )}
        aria-invalid={hasError}
        aria-describedby={hasError ? `${selectId}-error` : helperText ? `${selectId}-helper` : undefined}
        aria-required={required}
        {...props}
      >
        <option value="" disabled>{placeholder}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && (
        <p id={`${selectId}-error`} className="mt-1.5 text-body-sm text-error" role="alert">
          {error}
        </p>
      )}
      {helperText && !error && (
        <p id={`${selectId}-helper`} className="mt-1.5 text-body-sm text-content-tertiary">
          {helperText}
        </p>
      )}
    </div>
  );
});

FormSelect.displayName = 'FormSelect';

export default FormInput;
export { FormInput, FormTextarea, FormSelect };
