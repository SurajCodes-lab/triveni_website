'use client';

import { useState } from 'react';
import { User, Phone, Calendar, Users, Mail } from '@/components/ui/icons';
import { trackFormSubmission } from '@/utilis/analytics';

export default function QuickEnquiryForm({ fromCity = '', toCity = '', pageType = 'route' }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    passengers: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const today = new Date().toISOString().split('T')[0];

  const passengerOptions = ['1-2', '3-4', '5-7', '8-12', '13-20', '20+'];

  const validate = () => {
    const newErrors = {};

    if (!formData.name || formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    if (!formData.phone || !/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = 'Enter a valid 10-digit phone number';
    }

    if (!formData.date) {
      newErrors.date = 'Please select a pickup date';
    } else if (formData.date < today) {
      newErrors.date = 'Date must be today or later';
    }

    if (!formData.passengers) {
      newErrors.passengers = 'Please select number of passengers';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Track conversion
    trackFormSubmission('quick_enquiry', {
      serviceType: pageType,
      fromCity,
      toCity,
      passengers: formData.passengers,
      has_name: true,
      has_phone: true,
    });

    // Build WhatsApp message
    const routeText = fromCity && toCity
      ? `${fromCity} to ${toCity}`
      : fromCity
        ? `from ${fromCity}`
        : 'cab service';

    const emailLine = formData.email ? `\nEmail: ${formData.email}` : '';
    const message = encodeURIComponent(
      `Hi, I'd like a quote for ${routeText}.\n\nName: ${formData.name}\nPhone: ${formData.phone}${emailLine}\nPickup Date: ${formData.date}\nPassengers: ${formData.passengers}\n\nPlease share the best rates. Thank you!`
    );

    const whatsappUrl = `https://wa.me/917668570551?text=${message}`;

    // Small delay for UX feedback, then redirect
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
      setIsSubmitting(false);
    }, 400);
  };

  const inputBase =
    'w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 pl-11 text-white placeholder-white/50 focus:outline-none focus:border-[#FACF2D]/60 focus:ring-1 focus:ring-[#FACF2D]/30 transition-colors text-sm';

  return (
    <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-5 sm:p-6 w-full max-w-md">
      {/* Heading */}
      <div className="flex items-center gap-2 mb-4">
        <div className="w-8 h-8 rounded-lg bg-[#FACF2D]/20 flex items-center justify-center">
          <Phone className="w-4 h-4 text-[#FACF2D]" />
        </div>
        <h3 className="text-lg font-bold text-white">Get Instant Quote</h3>
      </div>

      <form onSubmit={handleSubmit} className="space-y-3" noValidate>
        {/* Name */}
        <div className="relative">
          <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40 pointer-events-none" />
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className={inputBase}
            autoComplete="name"
          />
          {errors.name && (
            <p className="text-red-400 text-xs mt-1 ml-1">{errors.name}</p>
          )}
        </div>

        {/* Phone */}
        <div className="relative">
          <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40 pointer-events-none" />
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            maxLength={10}
            className={inputBase}
            autoComplete="tel"
          />
          {errors.phone && (
            <p className="text-red-400 text-xs mt-1 ml-1">{errors.phone}</p>
          )}
        </div>

        {/* Email (Optional) */}
        <div className="relative">
          <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40 pointer-events-none" />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email (optional)"
            className={inputBase}
            autoComplete="email"
          />
        </div>

        {/* Date */}
        <div className="relative">
          <Calendar className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40 pointer-events-none" />
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            min={today}
            className={`${inputBase} [color-scheme:dark]`}
          />
          {errors.date && (
            <p className="text-red-400 text-xs mt-1 ml-1">{errors.date}</p>
          )}
        </div>

        {/* Passengers */}
        <div className="relative">
          <Users className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40 pointer-events-none" />
          <select
            name="passengers"
            value={formData.passengers}
            onChange={handleChange}
            className={`${inputBase} appearance-none cursor-pointer ${!formData.passengers ? 'text-white/50' : 'text-white'}`}
          >
            <option value="" disabled className="bg-slate-900 text-white/50">
              Number of Passengers
            </option>
            {passengerOptions.map((opt) => (
              <option key={opt} value={opt} className="bg-slate-900 text-white">
                {opt} Passengers
              </option>
            ))}
          </select>
          {errors.passengers && (
            <p className="text-red-400 text-xs mt-1 ml-1">{errors.passengers}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-[#FACF2D] hover:bg-[#f5c520] text-black font-bold py-3.5 rounded-xl transition-colors text-sm disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {isSubmitting ? (
            <>
              <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              Sending...
            </>
          ) : (
            'Get Instant Quote'
          )}
        </button>
      </form>

      {/* Trust Line */}
      <p className="text-center text-white/50 text-xs mt-3">
        4.9&#9733; Rated &middot; 10,000+ Trips &middot; Instant Confirmation
      </p>
    </div>
  );
}
