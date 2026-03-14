'use client';

import { useState, useEffect } from 'react';
import { Phone, Star, ChevronRight } from '@/components/ui/icons';
import { trackWhatsAppClick, trackPhoneCall } from '@/utilis/analytics';

/**
 * Sticky Price Bar — appears when user scrolls past hero pricing.
 * Keeps route name, price, and Book Now CTA always accessible on desktop.
 */
export default function StickyPriceBar({
  title = '',
  price = '',
  originalPrice = '',
  badge = '',
  whatsappMessage = "Hi, I'd like a quote.",
  showAfterPx = 400,
}) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > showAfterPx);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [showAfterPx]);

  if (!visible) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-50 animate-in slide-in-from-top-2 duration-300 hidden md:block">
      <div className="bg-gray-950/95 backdrop-blur-xl border-b border-white/10 shadow-2xl">
        <div className="max-w-6xl mx-auto px-4 py-2.5 flex items-center justify-between gap-4">
          {/* Left: Route + Price */}
          <div className="flex items-center gap-4 min-w-0">
            {badge && (
              <span className="hidden lg:inline-flex px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider bg-[#FACF2D]/15 text-[#FACF2D] rounded-full border border-[#FACF2D]/20 whitespace-nowrap">
                {badge}
              </span>
            )}
            <p className="text-white font-semibold text-sm truncate">{title}</p>
            <div className="flex items-center gap-1.5 text-[#FACF2D] text-xs whitespace-nowrap">
              <Star className="w-3 h-3 fill-[#FACF2D]" />
              <span className="font-semibold">4.9</span>
              <span className="text-white/30">(10K+ trips)</span>
            </div>
          </div>

          {/* Center: Price */}
          <div className="flex items-baseline gap-2 shrink-0">
            {originalPrice && (
              <span className="text-white/30 text-xs line-through">{originalPrice}</span>
            )}
            <span className="text-white font-bold text-lg">{price}</span>
          </div>

          {/* Right: CTAs */}
          <div className="flex items-center gap-2 shrink-0">
            <a
              href="tel:+917668570551"
              onClick={() => trackPhoneCall('sticky_price_bar')}
              className="hidden lg:flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-white/10 hover:bg-white/15 rounded-lg border border-white/10 transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              Call
            </a>
            <a
              href={`https://wa.me/917668570551?text=${encodeURIComponent(whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick('sticky_price_bar', whatsappMessage)}
              className="flex items-center gap-1.5 px-5 py-2 text-xs font-bold text-black bg-[#FACF2D] hover:bg-[#e6bb15] rounded-lg transition-colors"
            >
              Book Now
              <ChevronRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
