'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { User, Phone, Calendar, Users, Mail, ChevronDown, Lock, Shield } from '@/components/ui/icons';
import { trackFormSubmission, trackFormInteraction } from '@/utilis/analytics';

const STORAGE_KEY = 'triveni_enquiry_draft';

function loadDraft() {
  try {
    const raw = typeof window !== 'undefined' && localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const draft = JSON.parse(raw);
    // Expire after 24 hours
    if (Date.now() - draft._ts > 86400000) {
      localStorage.removeItem(STORAGE_KEY);
      return null;
    }
    return draft;
  } catch {
    return null;
  }
}

function saveDraft(data) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ ...data, _ts: Date.now() }));
  } catch { /* quota exceeded, ignore */ }
}

function clearDraft() {
  try { localStorage.removeItem(STORAGE_KEY); } catch { /* ignore */ }
}

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
  const [showDetails, setShowDetails] = useState(false);
  const [isReturning, setIsReturning] = useState(false);
  const [flexibleDate, setFlexibleDate] = useState(false);
  const formStarted = useRef(false);
  const trackedFields = useRef(new Set());

  const today = new Date().toISOString().split('T')[0];
  const passengerOptions = ['1-2', '3-4', '5-7', '8-12', '13-20', '20+'];

  // Load draft on mount (returning visitor recovery)
  useEffect(() => {
    const draft = loadDraft();
    if (draft && (draft.name || draft.phone)) {
      setFormData({
        name: draft.name || '',
        phone: draft.phone || '',
        email: draft.email || '',
        date: draft.date || '',
        passengers: draft.passengers || '',
      });
      setIsReturning(true);
      if (draft.date || draft.passengers || draft.email) {
        setShowDetails(true);
      }
    }
  }, []);

  // Save draft on change (debounced via effect)
  useEffect(() => {
    if (formData.name || formData.phone) {
      const timer = setTimeout(() => saveDraft(formData), 500);
      return () => clearTimeout(timer);
    }
  }, [formData]);

  // Track form start on first interaction
  useEffect(() => {
    if (!formStarted.current && Object.values(formData).some(v => v !== '')) {
      trackFormInteraction('quick_enquiry', 'started');
      formStarted.current = true;
    }
  }, [formData]);

  // Track field-level engagement (debounced, once per field)
  const trackField = useCallback((fieldName) => {
    if (trackedFields.current.has(fieldName)) return;
    trackedFields.current.add(fieldName);
    trackFormInteraction('quick_enquiry', 'field_filled', fieldName);
  }, []);

  // Track abandonment on unmount if form was started but not submitted
  useEffect(() => {
    const started = formStarted;
    return () => {
      if (started.current) {
        trackFormInteraction('quick_enquiry', 'abandoned');
      }
    };
  }, []);

  const validate = () => {
    const newErrors = {};

    if (!formData.name || formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    if (!formData.phone || !/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = 'Enter a valid 10-digit phone number';
    }

    // Date is only required if not flexible and details are shown
    if (showDetails && !flexibleDate && formData.date) {
      if (formData.date < today) {
        newErrors.date = 'Date must be today or later';
      }
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
    if (value && value.trim()) {
      trackField(name);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    trackFormInteraction('quick_enquiry', 'submit_attempted');

    if (!validate()) {
      trackFormInteraction('quick_enquiry', 'validation_error', Object.keys(errors).join(','));
      return;
    }

    setIsSubmitting(true);
    formStarted.current = false; // Prevent abandonment tracking

    trackFormSubmission('quick_enquiry', {
      serviceType: pageType,
      fromCity,
      toCity,
      passengers: formData.passengers || 'not_specified',
      has_name: true,
      has_phone: true,
      has_email: !!formData.email,
      has_date: !!formData.date,
      flexible_date: flexibleDate,
      used_progressive_disclosure: showDetails,
    });

    // Build WhatsApp message
    const routeText = fromCity && toCity
      ? `${fromCity} to ${toCity}`
      : fromCity
        ? `from ${fromCity}`
        : 'cab service';

    const emailLine = formData.email ? `\nEmail: ${formData.email}` : '';
    const dateLine = flexibleDate
      ? '\nTravel Date: Flexible'
      : formData.date
        ? `\nPickup Date: ${formData.date}`
        : '';
    const passengersLine = formData.passengers
      ? `\nPassengers: ${formData.passengers}`
      : '';

    const message = encodeURIComponent(
      `Hi, I'd like a quote for ${routeText}.\n\nName: ${formData.name}\nPhone: ${formData.phone}${emailLine}${dateLine}${passengersLine}\n\nPlease share the best rates. Thank you!`
    );

    const whatsappUrl = `https://wa.me/917668570551?text=${message}`;

    clearDraft();

    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
      setIsSubmitting(false);
    }, 400);
  };

  const inputBase =
    'w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 pl-11 text-white placeholder-white/50 focus:outline-none focus:border-[#FACF2D]/60 focus:ring-1 focus:ring-[#FACF2D]/30 transition-colors text-sm';

  return (
    <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-5 sm:p-6 w-full max-w-md">
      {/* Returning visitor nudge */}
      {isReturning && (
        <div className="mb-3 px-3 py-2 bg-[#FACF2D]/10 border border-[#FACF2D]/20 rounded-lg">
          <p className="text-[#FACF2D] text-xs font-medium">
            Welcome back! We saved your details — continue your enquiry.
          </p>
        </div>
      )}

      {/* Heading */}
      <div className="flex items-center gap-2 mb-4">
        <div className="w-8 h-8 rounded-lg bg-[#FACF2D]/20 flex items-center justify-center">
          <Phone className="w-4 h-4 text-[#FACF2D]" />
        </div>
        <h3 className="text-lg font-bold text-white">Get Instant Quote</h3>
      </div>

      <form onSubmit={handleSubmit} className="space-y-3" noValidate>
        {/* Phase 1: Name + Phone (always visible) */}
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

        <div className="relative">
          <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40 pointer-events-none" />
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            maxLength={10}
            inputMode="numeric"
            pattern="[0-9]*"
            className={inputBase}
            autoComplete="tel"
          />
          {errors.phone && (
            <p className="text-red-400 text-xs mt-1 ml-1">{errors.phone}</p>
          )}
          {/* Micro-trust signal at friction point */}
          <p className="text-white/30 text-[10px] mt-1 ml-1 flex items-center gap-1">
            <Lock className="w-2.5 h-2.5" />
            We&apos;ll only contact you about this enquiry
          </p>
        </div>

        {/* Phase 2: Trip details (expandable) */}
        {!showDetails ? (
          <button
            type="button"
            onClick={() => setShowDetails(true)}
            className="w-full flex items-center justify-center gap-1.5 text-[#FACF2D]/70 hover:text-[#FACF2D] text-xs py-1.5 transition-colors"
          >
            <ChevronDown className="w-3.5 h-3.5" />
            Add trip details for a faster quote
          </button>
        ) : (
          <div className="space-y-3 animate-in fade-in slide-in-from-top-2 duration-300">
            {/* Email (Optional) */}
            <div className="relative">
              <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40 pointer-events-none" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email (optional)"
                inputMode="email"
                className={inputBase}
                autoComplete="email"
              />
            </div>

            {/* Date with flexible toggle */}
            <div>
              <div className="relative">
                <Calendar className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40 pointer-events-none" />
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  min={today}
                  disabled={flexibleDate}
                  className={`${inputBase} [color-scheme:dark] ${flexibleDate ? 'opacity-40 cursor-not-allowed' : ''}`}
                />
              </div>
              <label className="flex items-center gap-2 mt-1.5 ml-1 cursor-pointer">
                <input
                  type="checkbox"
                  checked={flexibleDate}
                  onChange={(e) => {
                    setFlexibleDate(e.target.checked);
                    if (e.target.checked) {
                      setFormData(prev => ({ ...prev, date: '' }));
                    }
                  }}
                  className="w-3.5 h-3.5 rounded border-white/30 bg-white/10 text-[#FACF2D] focus:ring-[#FACF2D]/30"
                />
                <span className="text-white/50 text-xs">I&apos;m flexible with dates</span>
              </label>
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
                <option value="" className="bg-slate-900 text-white/50">
                  Passengers (optional)
                </option>
                {passengerOptions.map((opt) => (
                  <option key={opt} value={opt} className="bg-slate-900 text-white">
                    {opt} Passengers
                  </option>
                ))}
              </select>
            </div>
          </div>
        )}

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

        {/* Micro-trust signal near submit */}
        <div className="flex items-center justify-center gap-3 text-white/30 text-[10px]">
          <span className="flex items-center gap-1">
            <Shield className="w-2.5 h-2.5" />
            No spam
          </span>
          <span className="w-0.5 h-0.5 rounded-full bg-white/20" />
          <span>Replies in ~2 min</span>
          <span className="w-0.5 h-0.5 rounded-full bg-white/20" />
          <span>Free quotes</span>
        </div>
      </form>

      {/* Trust Line */}
      <p className="text-center text-white/50 text-xs mt-3">
        4.9&#9733; Rated &middot; 10,000+ Trips &middot; Instant Confirmation
      </p>
    </div>
  );
}
