'use client';

import { useState } from 'react';
import { ChevronDown } from '@/components/ui/icons';

/**
 * FaqAccordion — Reusable light-themed FAQ section.
 * Replaces the duplicate openFaq + glass-card pattern in every programmatic page.
 *
 * Usage:
 *   <FaqAccordion
 *     heading="Common Questions"
 *     faqs={[{ question: 'How far is Delhi to Agra?', answer: '...' }]}
 *   />
 */
export default function FaqAccordion({ heading = 'Frequently Asked Questions', faqs = [] }) {
  const [openIndex, setOpenIndex] = useState(null);

  if (!faqs.length) return null;

  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 bg-gray-50">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <p className="text-xs font-bold text-amber-600 uppercase tracking-widest mb-1">FAQ</p>
          <h2 className="text-2xl sm:text-3xl font-black text-gray-900">{heading}</h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className={`bg-white rounded-xl border transition-all duration-300 ${
                  isOpen ? 'border-amber-300/60 shadow-md' : 'border-gray-200/60 hover:border-gray-300'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between p-5 text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400/50 rounded-xl"
                >
                  <span className="font-semibold text-gray-800 pr-6 text-sm sm:text-base group-hover:text-gray-900 transition-colors">
                    {faq.question}
                  </span>
                  <div className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                    isOpen ? 'bg-amber-100 rotate-180' : 'bg-gray-100 group-hover:bg-gray-200'
                  }`}>
                    <ChevronDown className={`w-4 h-4 ${isOpen ? 'text-amber-600' : 'text-gray-500'}`} />
                  </div>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="px-5 pb-5">
                    <div className="h-px bg-gray-100 mb-4" />
                    <p className="text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
