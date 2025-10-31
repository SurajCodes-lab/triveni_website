'use client';

import { MessageCircle, Phone } from 'lucide-react';
import { phoneNumber } from '@/utilis/data';

export default function WhatsAppCTA({
  message = "Hi! I'm interested in booking a trip. Can you help me with the details?",
  buttonText = "Get Free Quote on WhatsApp",
  variant = "primary", // primary, secondary, inline
  context = "blog"
}) {

  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappURL, '_blank');
  };

  // Primary CTA - Large, prominent button
  if (variant === "primary") {
    return (
      <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-2xl p-8 my-8 text-white shadow-xl">
        <div className="max-w-3xl mx-auto text-center">
          <MessageCircle className="w-16 h-16 mx-auto mb-4 animate-bounce" />
          <h3 className="text-2xl md:text-3xl font-bold mb-3">
            Ready to Plan Your Trip?
          </h3>
          <p className="text-lg mb-6 opacity-90">
            Get instant quotes, personalized itineraries, and expert travel advice on WhatsApp!
          </p>
          <button
            onClick={handleWhatsAppClick}
            className="bg-white text-green-600 px-8 py-4 rounded-full text-lg font-bold hover:bg-gray-100 transition-all duration-300 shadow-lg flex items-center gap-3 mx-auto hover:scale-105"
          >
            <MessageCircle className="w-6 h-6" />
            {buttonText}
          </button>
          <p className="text-sm mt-4 opacity-75">
            ✓ Instant Response ✓ Best Prices ✓ 24/7 Support
          </p>
        </div>
      </div>
    );
  }

  // Secondary CTA - Medium sidebar widget
  if (variant === "secondary") {
    return (
      <div className="bg-gradient-to-br from-[#FACF2D] to-yellow-400 rounded-xl p-6 shadow-lg sticky top-24">
        <div className="text-center">
          <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <Phone className="w-8 h-8 text-[#FACF2D]" />
          </div>
          <h4 className="text-xl font-bold text-black mb-3">
            Need Help Planning?
          </h4>
          <p className="text-gray-800 mb-4 text-sm">
            Chat with our travel experts on WhatsApp for personalized recommendations!
          </p>
          <button
            onClick={handleWhatsAppClick}
            className="bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition-all duration-300 w-full flex items-center justify-center gap-2"
          >
            <MessageCircle className="w-5 h-5" />
            Chat on WhatsApp
          </button>
          <p className="text-xs text-gray-700 mt-3">
            ⚡ Quick Response Guaranteed
          </p>
        </div>
      </div>
    );
  }

  // Inline CTA - Small inline button in content
  if (variant === "inline") {
    return (
      <div className="inline-flex items-center">
        <button
          onClick={handleWhatsAppClick}
          className="bg-green-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-green-600 transition-all duration-300 inline-flex items-center gap-2 text-sm"
        >
          <MessageCircle className="w-4 h-4" />
          {buttonText}
        </button>
      </div>
    );
  }

  return null;
}
