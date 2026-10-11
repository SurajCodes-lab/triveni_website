import { adventureLinksFor, adventureUrl } from '@/lib/content/adventure-crosslinks';

// Server-rendered block linking to Triveni Adventure, our Rishikesh operation.
//
// Returns null for any path without an entry, so it is safe to wire into
// templates that serve hundreds of pages — only the Rishikesh, Haridwar and
// Char Dham pages render anything.
//
// These are cross-site links, so they open in a new tab and carry rel="noopener".
// They are NOT marked nofollow: the Adventure site is our own property and the
// link is editorial, pointing a reader at the half of their trip this site does
// not handle.
export default function AdventureActivities({ path, className = '' }) {
  const block = adventureLinksFor(path);
  if (!block) return null;

  return (
    <section
      id="adventure-activities"
      aria-labelledby="adventure-activities-heading"
      className={`bg-teal-50/50 px-4 py-8 sm:px-6 sm:py-10 ${className}`}
    >
      <div className="mx-auto max-w-5xl rounded-2xl border border-teal-200 bg-white p-5 sm:p-7">
        <p className="text-xs font-semibold uppercase tracking-wide text-teal-700">
          Triveni Adventure · Rishikesh
        </p>
        <h2
          id="adventure-activities-heading"
          className="mt-2 text-xl font-bold text-slate-900 sm:text-2xl"
        >
          {block.heading}
        </h2>
        <p className="mt-3 leading-relaxed text-slate-700">{block.intro}</p>

        <ul className="mt-5 grid gap-3 sm:grid-cols-2">
          {block.links.map(([slug, label, note]) => (
            <li key={slug}>
              <a
                href={adventureUrl(slug)}
                target="_blank"
                rel="noopener"
                className="flex min-h-11 flex-col justify-center rounded-lg border border-teal-200 bg-teal-50/60 px-4 py-3 hover:bg-teal-100"
              >
                <span className="flex items-center justify-between gap-2 font-semibold text-slate-900">
                  <span>{label}</span>
                  <span aria-hidden="true" className="text-teal-700">↗</span>
                </span>
                {note && <span className="mt-0.5 text-sm text-slate-600">{note}</span>}
              </a>
            </li>
          ))}
        </ul>

        <p className="mt-4 text-sm leading-6 text-slate-600">
          Activities are booked with Triveni Adventure and the cab is booked here. Confirm the
          activity first — its reporting time decides when you need to leave.
        </p>
      </div>
    </section>
  );
}
