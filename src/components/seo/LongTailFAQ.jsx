'use client';

/**
 * LongTailFAQ — 15-20 question accordion targeting long-tail ranking.
 *
 * Why: every additional question-phrased FAQ entry is a potential People Also
 * Ask box entry + a chunk extractable by AI engines. Pages with 15-20 FAQs
 * rank for 3-5× more long-tail queries than pages with 5-8 FAQs.
 *
 * Renders each Q as a `<details>` (microdata schema:Question / schema:Answer)
 * so AI engines see structured Q&A even without parsing JSON-LD.
 *
 * The matching FAQPage schema should be emitted separately on the server
 * page.js (using the same `faqs` array).
 */
import { useState } from 'react';

export default function LongTailFAQ({
  faqs = [],
  heading,
  tone = 'light',
  className = '',
}) {
  const [openIdx, setOpenIdx] = useState(0);
  if (!faqs?.length) return null;
  const dark = tone === 'dark';

  return (
    <section
      className={`long-tail-faq ${className}`}
      aria-label={heading || 'Frequently asked questions'}
    >
      {heading && (
        <h2 className={`text-2xl md:text-4xl font-black mb-6 ${dark ? 'text-white' : 'text-slate-900'}`}>{heading}</h2>
      )}
      <div className="space-y-3" itemScope itemType="https://schema.org/FAQPage">
        {faqs.map((f, i) => {
          const isOpen = openIdx === i;
          return (
            <article
              key={f.question || i}
              className={`rounded-2xl border transition-all ${dark ? 'bg-slate-900/60 border-white/10' : 'bg-white border-slate-200'} ${isOpen ? 'shadow-md' : ''}`}
              itemScope
              itemProp="mainEntity"
              itemType="https://schema.org/Question"
            >
              <button
                type="button"
                onClick={() => setOpenIdx(isOpen ? -1 : i)}
                className={`w-full text-left px-5 md:px-6 py-4 flex justify-between items-start gap-4 ${dark ? 'text-white' : 'text-slate-900'}`}
                aria-expanded={isOpen}
              >
                <span className="font-semibold text-base md:text-lg leading-snug" itemProp="name">
                  {f.question}
                </span>
                <span className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-transform ${isOpen ? 'rotate-45' : ''} ${dark ? 'bg-amber-500/20 text-amber-200' : 'bg-amber-100 text-amber-700'}`}>
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M12 5v14M5 12h14" /></svg>
                </span>
              </button>
              {isOpen && (
                <div
                  className={`px-5 md:px-6 pb-5 ${dark ? 'text-white/80' : 'text-slate-700'}`}
                  itemScope
                  itemProp="acceptedAnswer"
                  itemType="https://schema.org/Answer"
                >
                  <div className={`text-base leading-relaxed ${i === 0 ? 'speakable-faq-first faq-answer' : 'faq-answer'}`} itemProp="text">
                    {typeof f.answer === 'string' ? f.answer : f.answer}
                  </div>
                </div>
              )}
            </article>
          );
        })}
      </div>
    </section>
  );
}
