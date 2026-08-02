// src/components/ui/Section.jsx
//
// Consistent page section wrapper — one vertical rhythm + max-width + responsive
// horizontal padding across the whole site. Part of the "Triveni Aurora" kit.
//
// tone: 'light' | 'dark' | 'aurora' | 'aurora-light' | 'transparent'
// width: 'default' (max-w-7xl) | 'narrow' (max-w-5xl) | 'wide' (max-w-[90rem]) | 'full'
// pad:   'default' | 'sm' | 'none'

const TONES = {
  light: 'bg-white text-slate-900',
  dark: 'bg-slate-950 text-white',
  aurora: 'bg-aurora text-white grain-overlay',
  'aurora-light': 'bg-aurora-light text-slate-900',
  transparent: '',
};

const WIDTHS = {
  default: 'max-w-7xl',
  narrow: 'max-w-5xl',
  wide: 'max-w-[90rem]',
  full: 'max-w-none',
};

const PADS = {
  default: 'py-14 sm:py-20 lg:py-28',
  sm: 'py-10 sm:py-14',
  none: '',
};

export default function Section({
  as: Tag = 'section',
  tone = 'transparent',
  width = 'default',
  pad = 'default',
  className = '',
  innerClassName = '',
  children,
  ...rest
}) {
  return (
    <Tag className={`relative overflow-hidden ${TONES[tone] || ''} ${PADS[pad] ?? PADS.default} ${className}`} {...rest}>
      <div className={`relative z-10 mx-auto w-full ${WIDTHS[width] || WIDTHS.default} px-4 sm:px-6 lg:px-8 ${innerClassName}`}>
        {children}
      </div>
    </Tag>
  );
}
