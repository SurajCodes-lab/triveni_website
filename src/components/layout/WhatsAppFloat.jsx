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
      initial={{ scale: 0, opacity: 0, y: 100 }}
      animate={{ scale: 1, opacity: 1, y: 0 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
        duration: 1
      }}
      onAnimationComplete={handleVisibilityChange}
      style={{
        '@media (prefers-reduced-motion: reduce)': {
          transition: 'none'
        }
      }}
    >
      <motion.div
        className="relative"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onHoverStart={handleHoverStart}
      >
        {/* Outer pulse rings */}
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{
            background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
            filter: 'blur(8px)'
          }}
          initial={{ scale: 1, opacity: 0.3 }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0, 0.3]
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          aria-hidden="true"
        />

        <motion.div
          className="absolute inset-0 rounded-full"
          style={{
            background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
            filter: 'blur(4px)'
          }}
          initial={{ scale: 1, opacity: 0.4 }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.4, 0.1, 0.4]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.3
          }}
          aria-hidden="true"
        />

        {/* Notification ping dot */}
        <motion.div
          className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white shadow-lg z-10"
          initial={{ scale: 0 }}
          animate={{ scale: [0, 1, 1] }}
          transition={{
            duration: 0.5,
            delay: 1.5
          }}
          aria-hidden="true"
        >
          <motion.div
            className="absolute inset-0 rounded-full bg-red-500"
            animate={{
              scale: [1, 1.8],
              opacity: [0.8, 0]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeOut"
            }}
          />
        </motion.div>

        {/* Main button with gradient and glow */}
        <button
          onClick={handleClick}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className="relative overflow-hidden min-w-[64px] min-h-[64px] p-5 rounded-full flex items-center justify-center group transition-all duration-300 focus-visible:ring-4 focus-visible:ring-green-300 focus-visible:ring-offset-2"
          style={{
            background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
            boxShadow: '0 8px 32px rgba(37, 211, 102, 0.4), 0 4px 16px rgba(0, 0, 0, 0.2), inset 0 -2px 8px rgba(0, 0, 0, 0.2), inset 0 2px 8px rgba(255, 255, 255, 0.2)'
          }}
          aria-label="Chat with us on WhatsApp - opens in new window"
          title="Chat with us on WhatsApp"
        >
          {/* Hover gradient overlay */}
          <motion.div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{
              background: 'linear-gradient(135deg, #20BA5A 0%, #0F7A6E 100%)'
            }}
            aria-hidden="true"
          />

          {/* Shine effect */}
          <motion.div
            className="absolute inset-0 opacity-0 group-hover:opacity-100"
            style={{
              background: 'linear-gradient(45deg, transparent 30%, rgba(255, 255, 255, 0.3) 50%, transparent 70%)',
              backgroundSize: '200% 200%'
            }}
            animate={{
              backgroundPosition: ['200% 0%', '-200% 0%']
            }}
            transition={{
              duration: 1.5,
              ease: "easeInOut"
            }}
            aria-hidden="true"
          />

          {/* Icon with enhanced animation */}
          <motion.div
            className="relative z-10"
            animate={{
              rotate: [0, 0, 12, -12, 0]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatDelay: 2
            }}
          >
            <MessageCircle
              size={32}
              className="text-white drop-shadow-lg group-hover:drop-shadow-2xl transition-all duration-300"
              strokeWidth={2.5}
              aria-hidden="true"
            />
          </motion.div>

          {/* Tooltip with modern styling */}
          <motion.span
            className={`absolute right-full mr-5 px-5 py-3 rounded-2xl text-sm font-medium whitespace-nowrap shadow-2xl transition-all duration-300 ${
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
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              Chat with us on WhatsApp
            </span>
            {/* Tooltip arrow */}
            <span
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full w-0 h-0"
              style={{
                borderTop: '6px solid transparent',
                borderBottom: '6px solid transparent',
                borderLeft: '6px solid #111827'
              }}
            ></span>
          </motion.span>
        </button>
      </motion.div>
    </motion.div>
  );
};

export default WhatsAppFloat;