'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { trackWhatsAppClick, trackHover, trackEvent } from '@/utilis/analytics';

const WhatsAppFloat = ({ phoneNumber = "1234567890" }) => {
  const handleClick = () => {
    // Track the WhatsApp float button click using centralized tracking
    trackWhatsAppClick('floating_button', '', 'floating_whatsapp_widget');

    // Open WhatsApp
    window.open(`https://wa.me/${phoneNumber}`, '_blank');
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
      className="fixed bottom-8 right-8 z-50"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{
        type: "spring", 
        stiffness: 260,
        damping: 20,
        duration: 1
      }}
      onAnimationComplete={handleVisibilityChange} // Track when animation completes
    >
      <motion.div
        className="relative"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onHoverStart={handleHoverStart} // Track hover events
      >
        {/* Ripple effect */}
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
        />
        
        {/* Main button */}
        <button
          onClick={handleClick}
          className="relative bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg flex items-center justify-center group transition-all duration-300"
          aria-label="Contact us on WhatsApp"
        >
          <MessageCircle size={28} className="group-hover:rotate-12 transition-transform duration-300" />
          
          {/* Tooltip */}
          <motion.span
            className="absolute right-full mr-4 bg-black text-white px-4 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300"
            initial={{ x: 20 }}
            animate={{ x: 0 }}
          >
            Chat with us on WhatsApp
          </motion.span>
        </button>
      </motion.div>
    </motion.div>
  );
};

export default WhatsAppFloat;