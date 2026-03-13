'use client';

import { useEffect, useState } from 'react';
import { Phone } from '@/components/ui/icons';
import { trackPhoneCall, trackWhatsAppClick } from '@/utilis/analytics';

/**
 * Reads the current page URL to build a contextual WhatsApp message
 * instead of the generic "I'd like a quote for cab service."
 */
function getPageContext() {
  if (typeof window === 'undefined') return { message: "Hi, I'd like a quote for cab service.", label: 'Get Quote' };

  const path = window.location.pathname;
  const parts = path.split('/').filter(Boolean);
  const title = document.title || '';

  // Extract city/route from URL patterns
  const slug = parts[parts.length - 1] || '';
  const prettySlug = slug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());

  let message = "Hi, I'd like a quote for cab service.";

  if (parts[0] === 'one-way-cab' && slug) {
    message = `Hi, I need a quote for one-way cab on the ${prettySlug} route. Please share pricing.`;
  } else if (parts[0] === 'tempo-traveller' && slug) {
    message = `Hi, I need a tempo traveller quote for ${prettySlug}. Please share pricing.`;
  } else if (parts[0] === 'airport-service' && slug) {
    message = `Hi, I need airport cab service in ${prettySlug}. Please share pricing.`;
  } else if (parts[0] === 'sightseeing' && slug) {
    message = `Hi, I'm interested in the ${prettySlug} sightseeing tour. Please share pricing.`;
  } else if (parts[0] === 'tour-package' && slug) {
    message = `Hi, I'm interested in the ${prettySlug} tour package. Please share details and pricing.`;
  } else if (parts[0] === 'wedding') {
    message = slug
      ? `Hi, I need wedding car service in ${prettySlug}. Please share pricing.`
      : 'Hi, I need wedding car service. Please share options and pricing.';
  } else if (parts[0] === 'corporate-transportation-service') {
    message = slug
      ? `Hi, I need corporate transportation in ${prettySlug}. Please share pricing.`
      : 'Hi, I need corporate transportation service. Please share options.';
  } else if (parts[0] === 'event-transportation-service') {
    message = slug
      ? `Hi, I need event transportation for ${prettySlug}. Please share pricing.`
      : 'Hi, I need event transportation service. Please share options.';
  } else if (parts[0] === 'bus-stand-taxi' && slug) {
    message = `Hi, I need a taxi from ${prettySlug}. Please share pricing.`;
  } else if (parts[0] === 'railway-station-taxi' && slug) {
    message = `Hi, I need a taxi from ${prettySlug} railway station. Please share pricing.`;
  } else if (parts[0] === 'bus-routes' && slug) {
    message = `Hi, I need a cab for the ${prettySlug} route. Please share pricing.`;
  } else if (parts[0] === 'chardham-yatra' && slug) {
    message = `Hi, I'm interested in Chardham Yatra - ${prettySlug}. Please share details.`;
  } else if (parts[0] === 'religious-tours' && slug) {
    message = `Hi, I'm interested in the ${prettySlug} religious tour. Please share pricing.`;
  } else if (parts[0] === 'vehicles' && slug) {
    message = `Hi, I'm interested in booking a ${prettySlug}. Please share availability and pricing.`;
  } else if (parts.length === 1 && parts[0]) {
    // City hub page like /delhi, /agra
    message = `Hi, I need cab service in ${prettySlug}. Please share pricing.`;
  } else if (title) {
    // Fallback: use page title
    const cleanTitle = title.replace(/\s*[-|].*$/, '').trim();
    if (cleanTitle && cleanTitle.length < 80) {
      message = `Hi, I'm browsing "${cleanTitle}" and need a quote. Please share pricing.`;
    }
  }

  return { message };
}

export default function MobileStickyBar() {
  const [ctx, setCtx] = useState({ message: "Hi, I'd like a quote for cab service." });

  useEffect(() => {
    setCtx(getPageContext());
  }, []);

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden">
      <div className="flex">
        {/* Call Now */}
        <a
          href="tel:+917668570551"
          onClick={() => trackPhoneCall('mobile_sticky_bar')}
          className="flex-1 flex items-center justify-center gap-2 bg-[#FACF2D] text-black font-bold py-3.5 text-sm"
        >
          <Phone className="w-4 h-4" />
          Call Now
        </a>

        {/* Get Quote - contextual WhatsApp message */}
        <a
          href={`https://wa.me/917668570551?text=${encodeURIComponent(ctx.message)}`}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackWhatsAppClick('mobile_sticky_bar_quote', ctx.message)}
          className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold py-3.5 text-sm"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          Get Quote
        </a>

        {/* WhatsApp */}
        <a
          href={`https://wa.me/917668570551?text=${encodeURIComponent(ctx.message)}`}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackWhatsAppClick('mobile_sticky_bar_whatsapp', ctx.message)}
          className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] text-white font-bold py-3.5 text-sm"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          WhatsApp
        </a>
      </div>
    </div>
  );
}
