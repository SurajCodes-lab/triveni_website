import Link from 'next/link';
import { priorityPageGuides } from '@/lib/content/priority-page-guides';
import { canonicalLink } from '@/lib/seo/canonical-link';

// Server-rendered slot: the client template receives only this page's markup.
export default function PriorityPageGuide({ path }) {
  const guide = priorityPageGuides[path];
  if (!guide) return null;
  return (
    <section id="journey-planning" aria-labelledby="journey-planning-heading" className="bg-amber-50/60 px-4 py-8 sm:px-6 sm:py-10">
      <div className="mx-auto max-w-5xl rounded-2xl border border-amber-200 bg-white p-5 sm:p-7">
        <h2 id="journey-planning-heading" className="text-xl font-bold text-slate-900 sm:text-2xl">{guide.title}</h2>
        <p className="mt-3 leading-relaxed text-slate-700">{guide.intro}</p>
        <div className="mt-5 grid gap-5 md:grid-cols-3">
          {guide.sections.map(([heading, text]) => (
            <div key={heading}>
              <h3 className="font-semibold text-slate-900">{heading}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">{text}</p>
            </div>
          ))}
        </div>
        {guide.sources?.length > 0 && (
          <p className="mt-5 text-sm leading-6 text-slate-600">Visitor information:{' '}
            {guide.sources.map(([label, href], i) => <span key={href}>{i > 0 ? ' · ' : ''}<a href={href} className="underline underline-offset-4 hover:text-slate-900">{label}</a></span>)}
          </p>
        )}
        <nav aria-label="Related journey planning" className="mt-5 flex flex-wrap gap-3 border-t border-slate-200 pt-4">
          {guide.links.map(([label, href]) => <Link key={href} href={canonicalLink(href)} className="inline-flex min-h-11 items-center rounded-lg border border-amber-300 bg-amber-50 px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-amber-100">{label}</Link>)}
        </nav>
      </div>
    </section>
  );
}
