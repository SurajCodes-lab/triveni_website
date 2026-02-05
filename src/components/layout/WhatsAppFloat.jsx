'use client';

import React, { useState, useEffect, useCallback } from 'react';
// Centralized icon imports for better bundle optimization
import { MessageCircle } from '@/components/ui/icons';
import { trackWhatsAppClick, trackHover, trackEvent } from '@/utilis/analytics';

const WhatsAppFloat = ({ phoneNumber = "1234567890" }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Delay appearance to avoid CLS during initial page load
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleClick = useCallback(() => {
    trackWhatsAppClick('floating_button', '', 'floating_whatsapp_widget');
    window.open(`https://wa.me/${phoneNumber}`, '_blank', 'noopener,noreferrer');
  }, [phoneNumber]);

  const handleHoverStart = useCallback(() => {
    trackHover('whatsapp_float_button', 'bottom_right');
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className="fixed bottom-4 right-4 sm:bottom-5 sm:right-5 md:bottom-6 md:right-6 z-50 animate-fade-in-up"
    >
      <div
        className="relative hover:scale-105 active:scale-95 transition-transform duration-200"
        onMouseEnter={handleHoverStart}
      >
        {/* Outer pulse ring - CSS animation for better performance */}
        <div
          className="absolute inset-0 rounded-full hidden sm:block animate-whatsapp-pulse"
          style={{
            background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
            filter: 'blur(6px)'
          }}
          aria-hidden="true"
        />

        {/* Notification ping dot */}
        <div
          className="absolute -top-0.5 -right-0.5 sm:-top-1 sm:-right-1 w-3 h-3 sm:w-3.5 sm:h-3.5 bg-red-500 rounded-full border-2 border-white shadow-lg z-10"
          aria-hidden="true"
        >
          <div className="absolute inset-0 rounded-full bg-red-500 animate-ping" />
        </div>

        {/* Main button */}
        <button
          onClick={handleClick}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className="relative overflow-hidden w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center group transition-all duration-300 focus-visible:ring-2 focus-visible:ring-green-300 focus-visible:ring-offset-2"
          style={{
            background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
            boxShadow: '0 4px 20px rgba(37, 211, 102, 0.35), 0 2px 10px rgba(0, 0, 0, 0.15), inset 0 -1px 4px rgba(0, 0, 0, 0.15), inset 0 1px 4px rgba(255, 255, 255, 0.2)'
          }}
          aria-label="Chat with us on WhatsApp - opens in new window"
          title="Chat with us on WhatsApp"
        >
          {/* Hover gradient overlay */}
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{
              background: 'linear-gradient(135deg, #20BA5A 0%, #0F7A6E 100%)'
            }}
            aria-hidden="true"
          />

          {/* Icon - CSS animation instead of framer-motion */}
          <div className="relative z-10 animate-whatsapp-wiggle">
            <MessageCircle
              className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white drop-shadow-lg group-hover:drop-shadow-2xl transition-all duration-300"
              strokeWidth={2.5}
              aria-hidden="true"
            />
          </div>

          {/* Tooltip - hidden on mobile */}
          <span
            className={`hidden md:block absolute right-full mr-3 lg:mr-4 px-3 py-2 lg:px-4 lg:py-2.5 rounded-xl text-xs lg:text-sm font-medium whitespace-nowrap shadow-2xl transition-all duration-300 ${
              isFocused ? 'opacity-100 visible translate-x-0' : 'opacity-0 invisible translate-x-2 group-hover:opacity-100 group-hover:visible group-hover:translate-x-0'
            }`}
            style={{
              background: 'linear-gradient(135deg, #1f2937 0%, #111827 100%)',
              color: '#ffffff',
              border: '1px solid rgba(255, 255, 255, 0.1)'
            }}
            role="tooltip"
            aria-hidden="true"
          >
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 lg:w-2 lg:h-2 bg-green-400 rounded-full animate-pulse"></span>
              Chat with us on WhatsApp
            </span>
            <span
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full w-0 h-0"
              style={{
                borderTop: '6px solid transparent',
                borderBottom: '6px solid transparent',
                borderLeft: '6px solid #111827'
              }}
            ></span>
          </span>
        </button>
      </div>
    </div>
  );
};

export default WhatsAppFloat;