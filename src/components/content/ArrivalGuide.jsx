import Link from 'next/link';
import { pilgrimageArrival } from '@/lib/content/pilgrimage-arrival';
import { routeExists } from '@/lib/seo/route-exists';
import { canonicalLink } from '@/lib/seo/canonical-link';

// Server-rendered "how to reach" block. The Week 51 family audit found this
// intent addressed on 0% of the thirteen religious-tour pages, which is the
// largest single content gap it found anywhere on the site.
//
// Returns null when there is no entry, so it is safe on any route.
export default function ArrivalGuide({ slug }) {
  const data = pilgrimageArrival[slug];
  if (!data) return null;

  // Never render a link to a page that was not built.
  const onward = (data.onward || []).filter(([, href]) => routeExists(href));

  return (
    <section id="how-to-reach" aria-labelledby="how-to-reach-heading" className="bg-stone-50 px-4 py-8 sm:px-6 sm:py-10">
      <div className="mx-auto max-w-5xl rounded-2xl border border-stone-200 bg-white p-5 sm:p-7">
        <h2 id="how-to-reach-heading" className="text-xl font-bold text-stone-900 sm:text-2xl">
          How to reach — and where your journey actually starts
        </h2>

        <dl className="mt-5 grid gap-5 sm:grid-cols-2">
          <div>
            <dt className="text-sm font-semibold uppercase tracking-wide text-stone-500">Nearest airport</dt>
            <dd className="mt-1 font-semibold text-stone-900">{data.airport[0]}</dd>
            <dd className="mt-1 text-sm leading-6 text-stone-700">{data.airport[1]}</dd>
          </div>
          <div>
            <dt className="text-sm font-semibold uppercase tracking-wide text-stone-500">Nearest railhead</dt>
            <dd className="mt-1 font-semibold text-stone-900">{data.railhead[0]}</dd>
            <dd className="mt-1 text-sm leading-6 text-stone-700">{data.railhead[1]}</dd>
          </div>
        </dl>

        <h3 className="mt-6 font-semibold text-stone-900">Where the road ends</h3>
        <p className="mt-2 leading-relaxed text-stone-700">{data.roadNote}</p>

        {data.registration && (
          <>
            <h3 className="mt-5 font-semibold text-stone-900">Before you travel</h3>
            <p className="mt-2 leading-relaxed text-stone-700">{data.registration}</p>
          </>
        )}

        <p className="mt-5 text-sm leading-6 text-stone-600">
          Distances are approximate road distances for planning. Confirm flight, train and shrine
          timings for your own dates before fixing a pickup.
        </p>

        {onward.length > 0 && (
          <nav aria-label="Arrival and transport links" className="mt-5 flex flex-wrap gap-3 border-t border-stone-200 pt-4">
            {onward.map(([label, href]) => (
              <Link
                key={href}
                href={canonicalLink(href)}
                className="inline-flex min-h-11 items-center rounded-lg border border-stone-300 bg-stone-50 px-4 py-2 text-sm font-semibold text-stone-900 hover:bg-stone-100"
              >
                {label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </section>
  );
}
