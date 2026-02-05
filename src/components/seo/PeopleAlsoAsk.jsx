'use client';

/**
 * PeopleAlsoAsk Component - Optimized for "People Also Ask" featured snippets
 * Provides expandable Q&A blocks in the format Google uses for PAA boxes
 *
 * AEO Implementation:
 * - Question-answer microdata markup
 * - Concise answers (<50 words) for snippet extraction
 * - Progressive disclosure pattern matching PAA UX
 * - Speakable-marked for voice search
 */

import { useState } from 'react';
import { ChevronDown, HelpCircle } from '@/components/ui/icons';
import { cn } from '@/utilis/cn';
import { generateFAQSchema } from '@/lib/seo/schema-generators';

export default function PeopleAlsoAsk({
  questions = [],
  title = 'People Also Ask',
  showSchema = true,
  className
}) {
  const [openIndex, setOpenIndex] = useState(null);

  const schema = showSchema && questions.length > 0 ? generateFAQSchema(questions) : null;

  if (questions.length === 0) return null;

  return (
    <>
      {schema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      )}

      <section
        className={cn('py-8 md:py-12', className)}
        aria-label="Related questions"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-2 mb-6">
              <HelpCircle className="w-5 h-5 text-gray-400" />
              <h2 className="text-lg md:text-xl font-semibold text-gray-900">
                {title}
              </h2>
            </div>

            <div className="border border-gray-200 rounded-lg divide-y divide-gray-200">
              {questions.map((item, index) => {
                const isOpen = openIndex === index;

                return (
                  <div
                    key={index}
                    itemScope
                    itemType="https://schema.org/Question"
                  >
                    <button
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      className="w-full flex items-center justify-between gap-4 p-4 text-left hover:bg-gray-50 transition-colors"
                      aria-expanded={isOpen}
                      aria-controls={`paa-answer-${index}`}
                    >
                      <span
                        className="font-medium text-gray-900 text-sm md:text-base"
                        itemProp="name"
                      >
                        {item.question}
                      </span>
                      <ChevronDown
                        className={cn(
                          'w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-200',
                          isOpen && 'rotate-180'
                        )}
                        aria-hidden="true"
                      />
                    </button>

                    <div
                      id={`paa-answer-${index}`}
                      className={cn(
                        'overflow-hidden transition-all duration-200',
                        isOpen ? 'max-h-96' : 'max-h-0'
                      )}
                      aria-hidden={!isOpen}
                    >
                      <div
                        className="px-4 pb-4 faq-answer"
                        itemScope
                        itemType="https://schema.org/Answer"
                        itemProp="acceptedAnswer"
                      >
                        <p
                          className="text-gray-600 text-sm md:text-base leading-relaxed"
                          itemProp="text"
                        >
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

/**
 * VoiceSearchFAQ - FAQ component with voice-optimized short answers
 * Short answers target ~29 words for voice assistant responses
 */
export function VoiceSearchFAQ({
  faqs = [],
  showSchema = true,
  className
}) {
  const [openIndex, setOpenIndex] = useState(null);

  // Use voiceAnswer for schema (short), full answer for display
  const schemaFaqs = faqs.map(faq => ({
    question: faq.question,
    answer: faq.voiceAnswer || faq.answer
  }));

  const schema = showSchema && faqs.length > 0 ? generateFAQSchema(schemaFaqs) : null;

  if (faqs.length === 0) return null;

  return (
    <>
      {schema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      )}

      <div className={cn('space-y-3', className)}>
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden"
              itemScope
              itemType="https://schema.org/Question"
            >
              <button
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="w-full flex items-center justify-between gap-3 p-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors"
                aria-expanded={isOpen}
              >
                <span
                  className="font-medium text-gray-900 text-sm md:text-base"
                  itemProp="name"
                >
                  {faq.question}
                </span>
                <ChevronDown
                  className={cn(
                    'w-4 h-4 text-gray-500 flex-shrink-0 transition-transform duration-200',
                    isOpen && 'rotate-180'
                  )}
                />
              </button>

              {isOpen && (
                <div
                  className="p-4 bg-white border-t border-gray-100"
                  itemScope
                  itemType="https://schema.org/Answer"
                  itemProp="acceptedAnswer"
                >
                  {/* Voice-optimized short answer (visible, speakable) */}
                  <p
                    className="key-info text-gray-800 font-medium text-sm md:text-base mb-2"
                    itemProp="text"
                  >
                    {faq.voiceAnswer || faq.answer}
                  </p>
                  {/* Full detailed answer */}
                  {faq.voiceAnswer && faq.answer !== faq.voiceAnswer && (
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {faq.answer}
                    </p>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
}
