'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { trackWhatsAppClick, trackHover, trackEvent } from '@/utilis/analytics';

const WhatsAppFloat = ({ phoneNumber = "1234567890" }) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleClick = () => {
    // Track the WhatsApp float button click using centralized tracking
    trackWhatsAppClick('floating_button', '', 'floating_whatsapp_widget');

    // Open WhatsApp
    window.open(`https://wa.me/${phoneNumber}`, '_blank', 'noopener,noreferrer');
  };

  // Track when the component becomes visible
  const handleVisibilityChange = () => {
    trackEvent('whatsapp_widget_visible', {
      event_category: 'engagement',
      event_label: 'floating_whatsapp_loaded',
      widget_location: 'bottom_right'
    });
  };

  // Track hover interactions
  const handleHoverStart = () => {
    trackHover('whatsapp_float_button', 'bottom_right');
  };
  
  return (
    <motion.div
      className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
        duration: 1
      }}
      onAnimationComplete={handleVisibilityChange}
      // Reduce motion for users who prefer it
      style={{
        '@media (prefers-reduced-motion: reduce)': {
          transition: 'none'
        }
      }}
    >
      <motion.div
        className="relative"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onHoverStart={handleHoverStart}
      >
        {/* Ripple effect - disabled for reduced motion */}
        <motion.div
          className="absolute inset-0 rounded-full bg-green-500 opacity-20"
          initial={{ scale: 1 }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.1, 0.2]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          aria-hidden="true"
        />

        {/* Main button */}
        <button
          onClick={handleClick}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className="relative bg-green-500 hover:bg-green-600 text-white min-w-[56px] min-h-[56px] p-4 rounded-full shadow-lg flex items-center justify-center group transition-all duration-300 focus-visible:ring-4 focus-visible:ring-green-300 focus-visible:ring-offset-2"
          aria-label="Chat with us on WhatsApp - opens in new window"
          title="Chat with us on WhatsApp"
        >
          <MessageCircle
            size={28}
            className="group-hover:rotate-12 transition-transform duration-300"
            aria-hidden="true"
          />

          {/* Tooltip - visible on both hover and focus */}
          <span
            className={`absolute right-full mr-4 bg-black text-white px-4 py-2 rounded-lg text-sm whitespace-nowrap shadow-lg transition-all duration-300 ${
              isFocused ? 'opacity-100 visible' : 'opacity-0 invisible group-hover:opacity-100 group-hover:visible'
            }`}
            role="tooltip"
            aria-hidden="true"
          >
            Chat with us on WhatsApp
          </span>
        </button>
      </motion.div>
    </motion.div>
  );
};

export default WhatsAppFloat;