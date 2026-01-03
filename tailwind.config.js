/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // ============================================
      // COLOR SYSTEM - Unified Brand Colors
      // ============================================
      colors: {
        // Primary Brand Colors
        primary: {
          DEFAULT: '#FACF2D',
          dark: '#E5B91A',
          light: '#FFE17D',
          50: '#FFFEF5',
          100: '#FFFCD1',
          200: '#FFF8E1',
          300: '#FFE17D',
          400: '#FACF2D',
          500: '#E5B91A',
          600: '#C9A016',
          700: '#A68412',
          800: '#7D6310',
          900: '#54420A',
        },
        // Neutral Colors (for text, backgrounds)
        surface: {
          DEFAULT: '#FFFFFF',
          secondary: '#F9FAFB',
          tertiary: '#F3F4F6',
        },
        // Text Colors
        content: {
          DEFAULT: '#111827',
          secondary: '#4B5563',
          tertiary: '#6B7280',
          muted: '#9CA3AF',
        },
        // Semantic Colors
        success: {
          DEFAULT: '#16A34A',
          light: '#22C55E',
          dark: '#15803D',
        },
        error: {
          DEFAULT: '#DC2626',
          light: '#EF4444',
          dark: '#B91C1C',
        },
        // Override yellow to use primary
        yellow: {
          50: '#FFFEF5',
          100: '#FFFCD1',
          200: '#FFF8E1',
          300: '#FFE17D',
          400: '#FACF2D',
          500: '#FACF2D',
          600: '#E5B91A',
          700: '#C9A016',
          800: '#A68412',
          900: '#7D6310',
        },
      },

      // ============================================
      // TYPOGRAPHY SYSTEM - Responsive Font Sizes
      // ============================================
      fontSize: {
        // Display - For hero sections
        'display-lg': ['3.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '700' }],    // 56px
        'display-md': ['3rem', { lineHeight: '1.15', letterSpacing: '-0.02em', fontWeight: '700' }],     // 48px
        'display-sm': ['2.5rem', { lineHeight: '1.2', letterSpacing: '-0.01em', fontWeight: '700' }],    // 40px

        // Headings - For section titles
        'heading-xl': ['2.25rem', { lineHeight: '1.25', letterSpacing: '-0.01em', fontWeight: '700' }],  // 36px
        'heading-lg': ['1.875rem', { lineHeight: '1.3', letterSpacing: '-0.01em', fontWeight: '700' }],  // 30px
        'heading-md': ['1.5rem', { lineHeight: '1.35', letterSpacing: '0', fontWeight: '600' }],         // 24px
        'heading-sm': ['1.25rem', { lineHeight: '1.4', letterSpacing: '0', fontWeight: '600' }],         // 20px
        'heading-xs': ['1.125rem', { lineHeight: '1.45', letterSpacing: '0', fontWeight: '600' }],       // 18px

        // Body - For paragraphs
        'body-xl': ['1.25rem', { lineHeight: '1.6', fontWeight: '400' }],   // 20px
        'body-lg': ['1.125rem', { lineHeight: '1.6', fontWeight: '400' }],  // 18px
        'body-md': ['1rem', { lineHeight: '1.6', fontWeight: '400' }],      // 16px
        'body-sm': ['0.875rem', { lineHeight: '1.5', fontWeight: '400' }],  // 14px
        'body-xs': ['0.75rem', { lineHeight: '1.5', fontWeight: '400' }],   // 12px

        // Labels - For buttons, tags, badges
        'label-lg': ['1rem', { lineHeight: '1.4', fontWeight: '600' }],
        'label-md': ['0.875rem', { lineHeight: '1.4', fontWeight: '600' }],
        'label-sm': ['0.75rem', { lineHeight: '1.4', fontWeight: '600' }],
      },

      // ============================================
      // SPACING SYSTEM - Consistent Spacing
      // ============================================
      spacing: {
        // Section spacing
        'section-sm': '3rem',      // 48px - Mobile section padding
        'section-md': '4rem',      // 64px - Tablet section padding
        'section-lg': '5rem',      // 80px - Desktop section padding
        'section-xl': '6rem',      // 96px - Large desktop section padding

        // Component spacing
        'component-xs': '0.5rem',  // 8px
        'component-sm': '0.75rem', // 12px
        'component-md': '1rem',    // 16px
        'component-lg': '1.5rem',  // 24px
        'component-xl': '2rem',    // 32px

        // Container
        'container-padding': '1rem',
        'container-padding-md': '1.5rem',
        'container-padding-lg': '2rem',
      },

      // ============================================
      // SHADOW SYSTEM - Unified Shadows
      // ============================================
      boxShadow: {
        'card': '0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06)',
        'card-hover': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'card-lg': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        'button': '0 1px 2px rgba(0, 0, 0, 0.05)',
        'button-hover': '0 4px 6px rgba(0, 0, 0, 0.1)',
        'dropdown': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'modal': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        'primary': '0 4px 14px rgba(250, 207, 45, 0.4)',
        'primary-lg': '0 8px 20px rgba(250, 207, 45, 0.5)',
      },

      // ============================================
      // BORDER RADIUS - Consistent Rounding
      // ============================================
      borderRadius: {
        'button': '0.5rem',     // 8px
        'card': '0.75rem',      // 12px
        'card-lg': '1rem',      // 16px
        'modal': '1rem',        // 16px
        'input': '0.5rem',      // 8px
        'badge': '9999px',      // Full rounded
      },

      // ============================================
      // MAX WIDTH - Container Sizes
      // ============================================
      maxWidth: {
        'container': '80rem',   // 1280px - Main container
        'content': '65ch',      // Optimal reading width
        'form': '32rem',        // 512px - Form width
      },

      // ============================================
      // TRANSITIONS - Animation Timings
      // ============================================
      transitionDuration: {
        'fast': '150ms',
        'normal': '300ms',
        'slow': '500ms',
      },

      // ============================================
      // Z-INDEX - Layering System
      // ============================================
      zIndex: {
        'dropdown': '100',
        'sticky': '200',
        'fixed': '300',
        'modal-backdrop': '400',
        'modal': '500',
        'popover': '600',
        'tooltip': '700',
      },

      // ============================================
      // ANIMATION - Custom Animations
      // ============================================
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.3s ease-out',
        'fade-in-up': 'fade-in-up 0.4s ease-out',
        'scale-in': 'scale-in 0.2s ease-out',
      },
    },
  },
  plugins: [],
}
