// Week 49: an optional question-shaped heading above the answer, so every
// family that renders this block carries the sub-heading answer engines lift
// ("What does a cab from Delhi airport to Agra cost?"). Passed by FamilyFacts
// from the adapter's question; families that already have their own heading
// leave it out.
export default function AirportAnswerBox({ answer, facts = [], updatedOn, question = null }) {
  return <aside className="answer-box mt-6 rounded-2xl border border-white/15 bg-slate-950/80 p-5 text-slate-200" data-speakable="true" aria-label="Transfer facts">
    {question && <h2 className="mb-2 text-base font-semibold text-white">{question}</h2>}
    <p className="direct-answer text-base leading-relaxed" data-snippet-type="direct-answer">{answer}</p>
    <dl className="key-facts key-stats mt-4 grid grid-cols-2 gap-3">
      {facts.filter(f => f.value).map(f => <div key={f.label}><dt className="text-xs text-slate-400">{f.label}</dt><dd className="font-semibold text-white">{f.value}</dd></div>)}
    </dl>
    {updatedOn && <p className="mt-4 text-xs text-slate-400">Content updated <time dateTime={updatedOn}>{updatedOn}</time></p>}
  </aside>;
}
