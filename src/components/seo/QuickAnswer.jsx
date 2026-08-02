// src/components/seo/QuickAnswer.jsx
//
// AEO/GEO "Quick Answer" block — a fact-first, self-contained answer to the page's
// core question, placed high on the page. AI answer engines (ChatGPT, Perplexity,
// Google AI Overviews, Gemini) lift these near-verbatim, and the `.speakable-answer`
// class ties into the site's Speakable schema for voice assistants.
//
// Keep the `answer` to 1–3 plain sentences that stand on their own (no "as shown
// above"). Optional `facts` render as a compact key/value strip (also very
// quotable). `tone`: 'light' | 'dark'.

import { Sparkles } from '@/components/ui/icons';

export default function QuickAnswer({ question, answer, facts = [], tone = 'light', className = '' }) {
  if (!answer) return null;
  const dark = tone === 'dark';
  return (
    <section
      aria-label="Quick answer"
      className={`rounded-2xl border p-4 sm:p-5 ${
        dark ? 'bg-white/[0.04] border-white/10' : 'bg-amber-50/60 border-amber-200'
      } ${className}`}
    >
      <div className="flex items-center gap-2 mb-2">
        <Sparkles className={`w-4 h-4 ${dark ? 'text-amber-400' : 'text-amber-600'}`} />
        <span className={`text-xs font-bold uppercase tracking-wider ${dark ? 'text-amber-400' : 'text-amber-700'}`}>
          Quick answer
        </span>
      </div>
      {question && (
        <h2 className={`text-sm sm:text-base font-bold mb-1 ${dark ? 'text-white' : 'text-slate-900'}`}>
          {question}
        </h2>
      )}
      <p className={`speakable-answer text-sm sm:text-[0.95rem] leading-relaxed ${dark ? 'text-slate-200' : 'text-slate-700'}`}>
        {answer}
      </p>
      {facts.length > 0 && (
        <dl className="mt-3 grid grid-cols-2 sm:grid-cols-4 gap-2">
          {facts.map((f, i) => (
            <div key={i} className={`rounded-xl px-3 py-2 ${dark ? 'bg-white/5' : 'bg-white border border-amber-100'}`}>
              <dt className={`text-[0.65rem] uppercase tracking-wide ${dark ? 'text-slate-400' : 'text-slate-500'}`}>{f.label}</dt>
              <dd className={`text-sm font-bold ${dark ? 'text-white' : 'text-slate-900'}`}>{f.value}</dd>
            </div>
          ))}
        </dl>
      )}
    </section>
  );
}
