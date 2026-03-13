'use client';

import React, { useState } from 'react';
// Centralized icon imports for better bundle optimization
import { ChevronDown, HelpCircle, MessageCircle } from '@/components/ui/icons';
import { cn } from '@/utilis/cn';
import { generateFAQSchema } from '@/lib/seo/schema-generators';
import { COMPANY_INFO } from '@/lib/seo/constants';
import { trackWhatsAppClick, trackPhoneCall } from '@/utilis/analytics';

/**
 * FAQ Section Component - Accordion-style FAQ display with integrated schema
 *
 * Features:
 * - Accordion-style expandable questions
 * - FAQPage schema.org markup for rich results
 * - Multiple visual variants
 * - Smooth animations
 * - Accessibility compliant
 *
 * Usage:
 * <FAQSection
 *   faqs={[
 *     { question: 'How much does it cost?', answer: 'Starting from ₹2,500...' },
 *     { question: 'What is included?', answer: 'AC vehicle, driver...' }
 *   ]}
 *   title="Frequently Asked Questions"
 * />
 */

const FAQSection = ({
  faqs = [],
  title = 'Frequently Asked Questions',
  subtitle,
  variant = 'default',
  showSchema = true,
  allowMultiple = false,
  defaultOpen = [],
  showContactCTA = true,
  className,
  ...props
}) => {
  const [openItems, setOpenItems] = useState(new Set(defaultOpen));

  // Generate schema
  const schema = faqs.length > 0 ? generateFAQSchema(faqs) : null;

  const toggleItem = (index) => {
    setOpenItems((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        if (!allowMultiple) {
          newSet.clear();
        }
        newSet.add(index);
      }
      return newSet;
    });
  };

  const variants = {
    default: {
      container: 'bg-white',
      item: 'border-b border-gray-100 last:border-b-0',
      question: 'text-gray-900 hover:text-amber-700',
      answer: 'text-gray-600',
      icon: 'text-amber-600',
    },
    card: {
      container: 'bg-gray-50',
      item: 'bg-white rounded-lg mb-3 shadow-sm border border-gray-100',
      question: 'text-gray-900 hover:text-amber-700',
      answer: 'text-gray-600',
      icon: 'text-amber-600',
    },
    bordered: {
      container: 'bg-white border border-gray-200 rounded-xl',
      item: 'border-b border-gray-100 last:border-b-0',
      question: 'text-gray-900 hover:text-amber-700',
      answer: 'text-gray-600',
      icon: 'text-amber-600',
    },
    gradient: {
      container: 'bg-gradient-to-br from-amber-50 to-orange-50',
      item: 'bg-white/80 backdrop-blur-sm rounded-lg mb-3 shadow-sm',
      question: 'text-gray-900 hover:text-amber-700',
      answer: 'text-gray-700',
      icon: 'text-amber-600',
    },
  };

  const currentVariant = variants[variant] || variants.default;

  if (faqs.length === 0) {
    return null;
  }

  return (
    <>
      {/* JSON-LD Schema */}
      {showSchema && schema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      )}

      {/* FAQ Section */}
      <section
        className={cn('py-12 md:py-16', className)}
        aria-labelledby="faq-heading"
        {...props}
      >
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-800 px-4 py-1.5 rounded-full text-sm font-medium mb-4">
              <HelpCircle className="w-4 h-4" />
              <span>FAQs</span>
            </div>
            <h2
              id="faq-heading"
              className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3"
            >
              {title}
            </h2>
            {subtitle && (
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                {subtitle}
              </p>
            )}
          </div>

          {/* FAQ List */}
          <div className={cn('max-w-3xl mx-auto rounded-xl p-4 md:p-6', currentVariant.container)}>
            {faqs.map((faq, index) => {
              const isOpen = openItems.has(index);

              return (
                <div
                  key={index}
                  className={cn(currentVariant.item)}
                >
                  <button
                    onClick={() => toggleItem(index)}
                    className={cn(
                      'w-full flex items-start justify-between gap-4 p-4 md:p-5 text-left transition-colors',
                      currentVariant.question
                    )}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${index}`}
                  >
                    <span className="font-semibold text-base md:text-lg pr-4">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={cn(
                        'w-5 h-5 flex-shrink-0 transition-transform duration-300',
                        currentVariant.icon,
                        isOpen && 'rotate-180'
                      )}
                      aria-hidden="true"
                    />
                  </button>

                  <div
                    id={`faq-answer-${index}`}
                    className={cn(
                      'grid transition-all duration-300 ease-in-out',
                      isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                    )}
                    aria-hidden={!isOpen}
                  >
                    <div className="overflow-hidden">
                      <div
                        className={cn(
                          'faq-answer px-4 md:px-5 pb-4 md:pb-5 text-base leading-relaxed',
                          currentVariant.answer
                        )}
                        data-snippet-type="faq"
                      >
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Contact CTA */}
          {showContactCTA && (
            <div className="mt-10 text-center">
              <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-6 md:p-8 max-w-2xl mx-auto">
                <div className="flex items-center justify-center gap-2 mb-3">
                  <MessageCircle className="w-5 h-5 text-amber-600" />
                  <span className="font-semibold text-gray-900">Still have questions?</span>
                </div>
                <p className="text-gray-600 mb-4">
                  Our team is here to help. Contact us for personalized assistance.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href={`tel:${COMPANY_INFO.phone.primary}`}
                    onClick={() => trackPhoneCall('faq_section')}
                    className="inline-flex items-center gap-2 bg-amber-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-amber-700 transition-colors"
                  >
                    Call {COMPANY_INFO.phone.display}
                  </a>
                  <a
                    href={`https://wa.me/${COMPANY_INFO.phone.whatsapp}?text=Hi, I have a question about your services.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackWhatsAppClick('faq_section')}
                    className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors"
                  >
                    WhatsApp Us
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

/**
 * InlineFAQ - Compact FAQ for embedding in page content
 */
export const InlineFAQ = ({
  faqs = [],
  showSchema = true,
  className,
  ...props
}) => {
  const [openIndex, setOpenIndex] = useState(null);

  const schema = faqs.length > 0 ? generateFAQSchema(faqs) : null;

  if (faqs.length === 0) return null;

  return (
    <>
      {showSchema && schema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      )}

      <div className={cn('space-y-2', className)} {...props}>
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="w-full flex items-center justify-between gap-3 p-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors"
                aria-expanded={isOpen}
              >
                <span className="font-medium text-gray-900 text-sm md:text-base">
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
                <div className="faq-answer p-4 bg-white text-gray-600 text-sm md:text-base border-t border-gray-100" data-snippet-type="faq">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
};

/**
 * SimpleFAQ - Just the FAQ items without section wrapper
 */
export const SimpleFAQ = ({
  faqs = [],
  showSchema = false,
  className,
  ...props
}) => {
  const [openItems, setOpenItems] = useState(new Set());

  const toggleItem = (index) => {
    setOpenItems((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  const schema = showSchema && faqs.length > 0 ? generateFAQSchema(faqs) : null;

  if (faqs.length === 0) return null;

  return (
    <>
      {schema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      )}

      <div className={cn('divide-y divide-gray-100', className)} {...props}>
        {faqs.map((faq, index) => {
          const isOpen = openItems.has(index);

          return (
            <div key={index}>
              <button
                onClick={() => toggleItem(index)}
                className="w-full flex items-start justify-between gap-4 py-4 text-left group"
                aria-expanded={isOpen}
              >
                <span className="font-medium text-gray-900 group-hover:text-amber-700 transition-colors">
                  {faq.question}
                </span>
                <ChevronDown
                  className={cn(
                    'w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5 transition-transform duration-200',
                    isOpen && 'rotate-180 text-amber-600'
                  )}
                />
              </button>

              <div
                className={cn(
                  'overflow-hidden transition-all duration-200',
                  isOpen ? 'max-h-96 pb-4' : 'max-h-0'
                )}
              >
                <p className="faq-answer text-gray-600 leading-relaxed" data-snippet-type="faq">
                  {faq.answer}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default FAQSection;
export { FAQSection };
