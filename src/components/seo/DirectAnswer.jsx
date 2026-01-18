'use client';

/**
 * DirectAnswer Component - Optimized for Featured Snippets & AI Answers
 * Provides structured, concise answers that search engines can extract
 *
 * AEO Implementation:
 * - Clear question-answer format
 * - Speakable-marked content for voice search
 * - Structured data integration
 * - Quotable text formatting
 */

import { motion } from 'framer-motion';
import { CheckCircle, Info, ArrowRight } from 'lucide-react';

export default function DirectAnswer({
  question,
  shortAnswer,
  fullAnswer,
  source,
  highlights = [],
  ctaText,
  ctaLink,
  variant = 'default' // default, compact, highlighted
}) {
  const variants = {
    default: 'bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-500',
    compact: 'bg-gray-50 border border-gray-200',
    highlighted: 'bg-gradient-to-r from-yellow-50 to-amber-50 border-l-4 border-yellow-500'
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`direct-answer rounded-xl p-6 md:p-8 ${variants[variant]} mb-8`}
      // Schema markup for speakable content
      itemScope
      itemType="https://schema.org/Question"
    >
      {/* Question */}
      <h3
        className="text-lg md:text-xl font-bold text-gray-900 mb-4 flex items-start gap-3"
        itemProp="name"
      >
        <Info className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
        {question}
      </h3>

      {/* Short Answer - Primary content for snippets */}
      <div
        className="key-info bg-white rounded-lg p-4 mb-4 shadow-sm"
        itemScope
        itemType="https://schema.org/Answer"
        itemProp="acceptedAnswer"
      >
        <p
          className="text-lg md:text-xl font-semibold text-gray-800 leading-relaxed"
          itemProp="text"
        >
          {shortAnswer}
        </p>
      </div>

      {/* Full Answer - Detailed explanation */}
      {fullAnswer && (
        <div className="faq-answer text-gray-700 leading-relaxed mb-4">
          <p>{fullAnswer}</p>
        </div>
      )}

      {/* Highlights - Key points for quick scanning */}
      {highlights.length > 0 && (
        <ul className="space-y-2 mb-4">
          {highlights.map((highlight, index) => (
            <li
              key={index}
              className="flex items-start gap-2 text-gray-700"
            >
              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
              <span>{highlight}</span>
            </li>
          ))}
        </ul>
      )}

      {/* Source Attribution - Builds credibility for AI citation */}
      {source && (
        <p className="text-sm text-gray-500 italic">
          {source}
        </p>
      )}

      {/* Optional CTA */}
      {ctaText && ctaLink && (
        <a
          href={ctaLink}
          className="inline-flex items-center gap-2 mt-4 text-blue-600 font-medium hover:text-blue-800 transition-colors"
        >
          {ctaText}
          <ArrowRight className="w-4 h-4" />
        </a>
      )}
    </motion.div>
  );
}

/**
 * DirectAnswerBox - Compact version for inline use
 */
export function DirectAnswerBox({ label, value, unit, description }) {
  return (
    <div className="direct-answer bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
      <div className="text-sm text-gray-500 mb-1">{label}</div>
      <div className="text-2xl font-bold text-gray-900">
        {value}
        {unit && <span className="text-lg font-normal text-gray-600 ml-1">{unit}</span>}
      </div>
      {description && (
        <div className="text-sm text-gray-600 mt-1">{description}</div>
      )}
    </div>
  );
}

/**
 * QuickFacts - Multiple facts in a scannable format
 */
export function QuickFacts({ facts, title = "Quick Facts" }) {
  return (
    <div className="key-info bg-gradient-to-r from-gray-50 to-slate-50 rounded-xl p-6 mb-8">
      <h3 className="text-lg font-bold text-gray-900 mb-4">{title}</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {facts.map((fact, index) => (
          <div
            key={index}
            className="bg-white rounded-lg p-3 border border-gray-100"
          >
            <div className="text-sm text-gray-500">{fact.label}</div>
            <div className="text-lg font-semibold text-gray-900">{fact.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
