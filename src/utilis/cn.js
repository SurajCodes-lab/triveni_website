/**
 * Utility function for conditionally joining class names
 * A lightweight alternative to clsx/classnames
 *
 * @param  {...any} classes - Class names (strings, objects, arrays, or falsy values)
 * @returns {string} - Joined class names
 *
 * Usage:
 * cn('base-class', condition && 'conditional-class', 'another-class')
 * cn('base', { 'active': isActive, 'disabled': isDisabled })
 * cn(['class1', 'class2'], 'class3')
 */
export function cn(...classes) {
  return classes
    .flat()
    .filter(Boolean)
    .map((cls) => {
      if (typeof cls === 'string') return cls;
      if (typeof cls === 'object' && cls !== null) {
        return Object.entries(cls)
          .filter(([, value]) => Boolean(value))
          .map(([key]) => key)
          .join(' ');
      }
      return '';
    })
    .join(' ')
    .trim()
    .replace(/\s+/g, ' '); // Remove duplicate spaces
}

export default cn;
