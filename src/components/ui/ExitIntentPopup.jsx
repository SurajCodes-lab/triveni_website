'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Phone, MessageCircle, Gift, Clock, Shield } from 'lucide-react';

/**
 * Popup that shows on page load after a delay
 * Shows only once per session
 */

const ExitIntentPopup = ({
  discount = '10%',
  couponCode = 'STAY10',
  phoneNumber = '7668570551',
  delayMs = 3000, // 3 seconds delay before showing
  showOnce = true,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  // Show popup after delay (only once per session)
  useEffect(() => {
    // Check if already shown
    if (showOnce) {
      const shown = sessionStorage.getItem('exitPopupShown');
      if (shown) {
        return;
      }
    }

    // Show popup after delay
    const timer = setTimeout(() => {
      setIsVisible(true);
      if (showOnce) {
        sessionStorage.setItem('exitPopupShown', 'true');
      }
    }, delayMs);

    return () => clearTimeout(timer);
  }, [delayMs, showOnce]);

  const closePopup = () => {
    setIsVisible(false);
  };

  const handleCall = () => {
    window.location.href = `tel:+91${phoneNumber}`;
    closePopup();
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      `Hi! I'm interested in booking a taxi. I saw the ${discount} OFF offer (Code: ${couponCode}). Can you help me with a quote?`
    );
    window.open(`https://wa.me/91${phoneNumber}?text=${message}`, '_blank');
    closePopup();
  };

  const copyCode = () => {
    navigator.clipboard.writeText(couponCode);
    alert(`Coupon code "${couponCode}" copied!`);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closePopup}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
          />

          {/* Popup - Mobile First Design */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed inset-0 z-[101] flex items-center justify-center p-3 sm:p-4 pointer-events-none"
          >
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto w-full max-w-md pointer-events-auto">
              {/* Header - Compact on mobile */}
              <div className="bg-gradient-to-r from-amber-500 to-orange-500 p-4 sm:p-6 text-white relative">
                {/* Close button */}
                <button
                  onClick={closePopup}
                  className="absolute top-2 right-2 sm:top-3 sm:right-3 p-2 rounded-full hover:bg-white/20 transition-colors touch-manipulation"
                  aria-label="Close popup"
                >
                  <X className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>

                {/* Gift icon - smaller on mobile */}
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <Gift className="w-6 h-6 sm:w-8 sm:h-8" />
                </div>

                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-1 sm:mb-2">
                  Wait! Special Offer
                </h2>
                <p className="text-center text-white/90 text-sm sm:text-base">
                  Just for you before you go
                </p>
              </div>

              {/* Content - Touch friendly */}
              <div className="p-4 sm:p-6">
                {/* Discount Badge */}
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-dashed border-green-400 rounded-xl p-3 sm:p-4 mb-4 sm:mb-6 text-center">
                  <p className="text-green-800 font-medium text-sm sm:text-base mb-1">Exclusive Discount</p>
                  <p className="text-3xl sm:text-4xl font-bold text-green-600 mb-2">{discount} OFF</p>
                  <div className="flex items-center justify-center gap-2 flex-wrap">
                    <span className="text-gray-600 text-sm">Code:</span>
                    <button
                      onClick={copyCode}
                      className="bg-green-600 text-white px-3 py-1.5 rounded-lg font-mono font-bold hover:bg-green-700 transition-colors text-sm sm:text-base touch-manipulation active:scale-95"
                    >
                      {couponCode}
                    </button>
                  </div>
                </div>

                {/* Trust signals - stacked on very small screens */}
                <div className="flex items-center justify-center gap-3 sm:gap-4 mb-4 sm:mb-6 text-xs sm:text-sm text-gray-600 flex-wrap">
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4 text-amber-500" />
                    24/7 Service
                  </span>
                  <span className="flex items-center gap-1">
                    <Shield className="w-4 h-4 text-green-500" />
                    Safe & Reliable
                  </span>
                </div>

                {/* CTA Buttons - Large touch targets */}
                <div className="space-y-3">
                  <button
                    onClick={handleCall}
                    className="w-full flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 active:bg-amber-700 text-white font-semibold py-3.5 sm:py-4 px-6 rounded-xl transition-colors touch-manipulation active:scale-[0.98]"
                  >
                    <Phone className="w-5 h-5" />
                    <span className="text-sm sm:text-base">Call: {phoneNumber}</span>
                  </button>

                  <button
                    onClick={handleWhatsApp}
                    className="w-full flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 active:bg-green-800 text-white font-semibold py-3.5 sm:py-4 px-6 rounded-xl transition-colors touch-manipulation active:scale-[0.98]"
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span className="text-sm sm:text-base">WhatsApp for Quote</span>
                  </button>
                </div>

                {/* No thanks - larger touch target */}
                <button
                  onClick={closePopup}
                  className="w-full text-center text-gray-400 hover:text-gray-600 text-xs sm:text-sm mt-4 py-3 transition-colors touch-manipulation"
                >
                  No thanks, I'll pay full price
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ExitIntentPopup;
