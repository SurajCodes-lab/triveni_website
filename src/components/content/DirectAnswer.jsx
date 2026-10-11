// src/components/content/DirectAnswer.jsx
//
// The direct answer block, for the families that had none.
//
// WHY THIS EXISTS
// ---------------
// Measured across all 3,843 built pages in Week 53: only 905 carry a direct,
// extractable answer near the top. The gap is concentrated in exactly the
// families that matter commercially:
//
//     Corridor / route    601 pages    0%
//     One-way cab         180 pages    0%
//     Corporate           150 pages    0%
//     Round trip           79 pages    0%
//     Char Dham            51 pages    0%
//     Near-city list       29 pages    0%
//     Wedding              26 pages    0%
//     Toll                 25 pages    0%
//     Airport / station   123 pages    1%
//     Distance            206 pages   18%
//
// That matters more on this site than on most. Roughly two and a half million of
// the quarter's six and a half million impressions sit on questions Google
// answers in its own results page, and a better listing does not recover them —
// that was tested on the attraction guides across a million impressions and
// found to make no difference. The only route into that volume is to be the
// source the generated answer is built from, and an answer engine retrieves
// passages, not pages. The passage it prefers is short, self-contained, and
// answers the question outright.
//
// Most pages here open with context and reach the answer several paragraphs
// down, which makes them poor candidates even when they hold the best answer
// available.
//
// WHAT IT RENDERS, AND WHY IN THIS SHAPE
// --------------------------------------
//   heading  — the question as somebody actually types it. An engine matches a
//              heading to a question before it matches a paragraph.
//   lead     — forty to sixty words answering it outright, with the figure in
//              it. Not a summary of the page and not marketing copy: the answer,
//              stated first, in a form that can be lifted and attributed.
//   facts    — three to five label/value pairs in a real <dl>. This is the
//              shape most readily extracted, and it is also what the Week 52
//              table work established: a figure with its name beside it.
//
// The page continues exactly as it did. Nothing is removed to make room.
//
// THE RULE IT ENFORCES
// --------------------
// It returns null unless it has both a lead and at least two facts. Every caller
// derives those from the page's OWN data, so no sentence is reusable for another
// page with a name swapped — which is the same constraint CityQuickAnswer
// documents, and the reason the family audit found the list shapes
// distinguishable while the grid shapes were not.
//
// A page that cannot say something true and specific gets no block rather than a
// generic one.

export default function DirectAnswer({ heading, lead, facts = [], note, id = 'direct-answer' }) {
  const usable = (Array.isArray(facts) ? facts : []).filter(
    (f) => f && f.label && f.value !== null && f.value !== undefined && String(f.value).trim() !== '',
  );

  if (!lead || usable.length < 2) return null;

  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className="border-y border-slate-200 bg-slate-50/70 px-4 py-8 sm:px-6 sm:py-10"
    >
      <div className="mx-auto max-w-5xl rounded-2xl border border-slate-200 bg-white p-5 sm:p-7">
        {/* The eyebrow is the retrieval cue, and it is the same wording the 905
            pages that already carry a block use ("— the short answer"). Keeping
            one phrase across the site means one detector finds all of them. */}
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-amber-700">
          Short answer
        </p>
        <h2 id={`${id}-heading`} className="mt-1 text-xl font-bold text-slate-900 sm:text-2xl">
          {heading}
        </h2>

        {/* The lifted passage. Kept as one paragraph deliberately: an engine
            retrieving half an answer is worse than retrieving none. */}
        <p className="mt-3 max-w-[72ch] leading-relaxed text-slate-700">{lead}</p>

        <dl className="mt-5 grid gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
          {usable.map((f) => (
            <div key={f.label} className="border-l-2 border-slate-200 pl-3">
              <dt className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                {f.label}
              </dt>
              <dd className="mt-0.5 font-bold text-slate-900 [font-variant-numeric:tabular-nums]">
                {f.value}
              </dd>
            </div>
          ))}
        </dl>

        {note && <p className="mt-5 text-sm text-slate-600">{note}</p>}
      </div>
    </section>
  );
}
