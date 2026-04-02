'use client';

import Link from 'next/link';
import { ArrowRight, ChevronRight } from '@/components/ui/icons';
import ScrollReveal from '@/components/shared/ScrollReveal';

/**
 * RelatedLinksGrid — Reusable grid of related page links.
 * Replaces duplicate glass-card related routes sections.
 *
 * Usage:
 *   <RelatedLinksGrid
 *     heading="Related Routes"
 *     links={[{ title: 'Delhi to Jaipur', href: '/distance/delhi-to-jaipur', subtitle: '280 km · 5 hrs' }]}
 *   />
 */
export default function RelatedLinksGrid({ heading = 'Explore More', subheading, links = [] }) {
  if (!links.length) return null;

  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <p className="text-xs font-bold text-amber-600 uppercase tracking-widest mb-1">Related</p>
          <h2 className="text-2xl sm:text-3xl font-black text-gray-900">{heading}</h2>
          {subheading && <p className="text-gray-500 text-sm mt-2">{subheading}</p>}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {links.map((link, i) => (
            <ScrollReveal key={i} delay={0} stagger={i * 60}>
              <Link
                href={link.href}
                className="group block bg-white rounded-xl border border-gray-200/60 p-4 sm:p-5 transition-all duration-300 hover:shadow-lg hover:shadow-amber-100/50 hover:border-amber-300/50 hover:-translate-y-0.5"
              >
                {/* Top accent stripe */}
                <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#FACF2D] to-amber-400 rounded-t-xl opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="flex items-center justify-between">
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-gray-900 text-sm sm:text-base truncate group-hover:text-amber-700 transition-colors">
                      {link.title}
                    </h3>
                    {link.subtitle && (
                      <p className="text-xs text-gray-500 mt-1 truncate">{link.subtitle}</p>
                    )}
                  </div>
                  <div className="w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0 ml-3 group-hover:bg-amber-100 transition-colors">
                    <ChevronRight className="w-3.5 h-3.5 text-gray-400 group-hover:text-amber-600 transition-colors" />
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
