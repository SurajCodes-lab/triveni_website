/**
 * RelatedLinks — semantic <nav> of internal links.
 *
 * Why it exists: internal linking is one of the strongest signals AI engines
 * use to identify topical authority. Used in conjunction with
 * `src/lib/seo/linkingHelper.js` to emit 5-8 contextual related links per
 * money page. Rendered as `<nav>` with `aria-label` for accessibility.
 *
 * Props:
 *  - heading: string. Visible H2 above the link list.
 *  - links: [{ href, anchor }] from linkingHelper functions.
 *  - ariaLabel: optional override; defaults to `heading`.
 *  - tone: 'slate' | 'amber' | 'transparent'.
 */
import Link from 'next/link';

const TONES = {
  slate: 'bg-slate-50 border-slate-200',
  amber: 'bg-amber-50 border-amber-200',
  transparent: 'bg-transparent border-slate-200',
};

export default function RelatedLinks({
  heading = 'Related pages',
  links,
  ariaLabel,
  tone = 'slate',
  className = '',
}) {
  if (!links || links.length === 0) return null;

  return (
    <nav
      aria-label={ariaLabel || heading}
      className={`my-8 p-6 rounded-2xl border ${TONES[tone] || TONES.slate} ${className}`}
    >
      <h2 className="text-xl font-semibold text-slate-900 mb-4">{heading}</h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2 list-none">
        {links.map(({ href, anchor }) => (
          <li key={href}>
            <Link
              href={href}
              className="text-amber-700 hover:text-amber-900 hover:underline inline-flex items-center gap-1.5 py-0.5"
            >
              <span aria-hidden="true" className="text-amber-500">→</span>
              <span>{anchor}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
