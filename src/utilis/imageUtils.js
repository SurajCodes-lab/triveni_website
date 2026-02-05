/**
 * Image Utilities for SEO Optimization
 *
 * Provides tiny blur placeholders and image optimization helpers
 * to improve CLS (Cumulative Layout Shift) scores.
 * Placeholders are minimal (~100 bytes) to avoid increasing HTML size.
 */

// Tiny 10x10 neutral gray blur placeholder
export const blurDataURL =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIklEQVQYlWN89+7dfwYGBgZGRkYGBgYGBiYGCgATAxUaAACM5QT/pWhyjgAAAABJRU5ErkJggg==";

// Tiny 10x10 warm/light blur placeholder for cards and thumbnails
export const lightBlurDataURL =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAI0lEQVQYlWP4////fwYGBgZGRkYGBgYGBiYGCgATAxUaAACykgn/Ol/f3QAAAABJRU5ErkJggg==";

// Tiny 10x10 warm-toned blur for hero sections
export const heroBlurDataURL =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIklEQVQYlWP4z8DwnwEKGBkZGRgYGBiYGCgATAxUaAAAjk4H/0pxrJIAAAAASUVORK5CYII=";

// Tiny 10x10 dark blur for night/dark images
export const darkBlurDataURL =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAHklEQVQYlWNgGHbgPwMDAwMjIyMDAwMDAxMDFRoAAG1xAf/W9IXTAAAAASUVORK5CYII=";

/**
 * Get appropriate blur placeholder based on image type
 * @param {string} type - 'default' | 'light' | 'hero' | 'dark'
 * @returns {string} blur data URL
 */
export const getBlurPlaceholder = (type = 'default') => {
  switch (type) {
    case 'light':
      return lightBlurDataURL;
    case 'hero':
      return heroBlurDataURL;
    case 'dark':
      return darkBlurDataURL;
    default:
      return blurDataURL;
  }
};

/**
 * Default image props for consistent Image component usage
 */
export const defaultImageProps = {
  placeholder: 'blur',
  blurDataURL,
};
