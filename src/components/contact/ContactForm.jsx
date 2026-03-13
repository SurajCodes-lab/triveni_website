'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { Send, Lock } from '@/components/ui/icons';
import { trackFormSubmission, trackFormInteraction, trackError } from '@/utilis/analytics';
import Button from '@/components/ui/Button';
import { cn } from '@/utilis/cn';

const inputClasses = "w-full px-4 py-3 border rounded-input bg-white text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-fast min-h-[48px]";
const labelClasses = "block text-body-sm text-gray-900 text-start font-semibold mb-2";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
  const [fieldErrors, setFieldErrors] = useState({});
  const formStarted = useRef(false);
  const analyticsTimerRef = useRef(null);
  const trackedFieldsRef = useRef(new Set());

  // Track form start on first interaction
  useEffect(() => {
    if (!formStarted.current && Object.values(formData).some(val => val !== '')) {
      trackFormInteraction('contact_form', 'started');
      formStarted.current = true;
    }
  }, [formData]);

  // Debounced analytics tracking
  const debouncedTrackField = useCallback((fieldName) => {
    if (trackedFieldsRef.current.has(fieldName)) return;
    if (analyticsTimerRef.current) clearTimeout(analyticsTimerRef.current);
    analyticsTimerRef.current = setTimeout(() => {
      trackedFieldsRef.current.add(fieldName);
      trackFormInteraction('contact_form', 'field_filled', fieldName);
    }, 1000);
  }, []);

  useEffect(() => {
    return () => {
      if (analyticsTimerRef.current) clearTimeout(analyticsTimerRef.current);
    };
  }, []);

  // Track abandonment
  useEffect(() => {
    const started = formStarted;
    return () => {
      if (started.current) {
        trackFormInteraction('contact_form', 'abandoned');
      }
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    if (value && value.trim() !== '') {
      debouncedTrackField(name);
    }

    // Clear field error on change
    if (fieldErrors[name]) {
      setFieldErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setFieldErrors({});

    trackFormInteraction('contact_form', 'submit_attempted');

    const errors = {};

    if (!formData.firstName || !formData.firstName.trim()) {
      errors.firstName = 'First name is required';
    }

    // At least email OR phone required (not both)
    const hasEmail = formData.email && formData.email.trim();
    const hasPhone = formData.phone && formData.phone.trim();

    if (!hasEmail && !hasPhone) {
      errors.email = 'Please provide email or phone number';
      errors.phone = 'Please provide phone or email address';
    } else if (hasEmail) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        errors.email = 'Please enter a valid email address';
      }
    } else if (hasPhone) {
      if (!/^\d{10}$/.test(formData.phone.replace(/\s/g, ''))) {
        errors.phone = 'Please enter a valid 10-digit phone number';
      }
    }

    if (!formData.message || !formData.message.trim()) {
      errors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      errors.message = 'Message must be at least 10 characters';
    }

    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      setError('Please correct the errors below');
      setLoading(false);

      trackFormInteraction('contact_form', 'validation_error', Object.keys(errors).join(','));
      trackError('form_validation', 'Form has validation errors', 'contact_form');

      const firstErrorField = Object.keys(errors)[0];
      document.getElementById(firstErrorField)?.focus();
      return;
    }

    formStarted.current = false; // Prevent abandonment tracking

    trackFormSubmission('contact_form', {
      subject: formData.subject || 'general_inquiry',
      has_last_name: !!formData.lastName,
      has_email: !!formData.email,
      has_phone: !!formData.phone,
      message_length: formData.message.length
    });

    const nameParts = [formData.firstName, formData.lastName].filter(Boolean).join(' ');
    const messageParts = [
      `Hi, I'd like to get in touch.`,
      ``,
      `Name: ${nameParts}`,
      formData.email ? `Email: ${formData.email}` : '',
      formData.phone ? `Phone: ${formData.phone}` : '',
      formData.subject ? `Subject: ${formData.subject}` : '',
      ``,
      `Message: ${formData.message}`,
    ].filter(Boolean).join('\n');

    const whatsappUrl = `https://wa.me/917668570551?text=${encodeURIComponent(messageParts)}`;

    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });

    setSuccess(true);
    setLoading(false);
    formStarted.current = false;

    window.open(whatsappUrl, '_blank');

    setTimeout(() => {
      setSuccess(false);
    }, 5000);
  };

  return (
    <>
      {error && (
        <div
          role="alert"
          aria-live="assertive"
          className="mb-4 p-4 bg-error-light/10 border-l-4 border-error text-error-dark text-body-sm rounded-card"
        >
          <strong className="font-semibold">Error: </strong>
          {error}
        </div>
      )}

      {success && (
        <div
          role="alert"
          aria-live="polite"
          className="mb-4 p-4 bg-success-light/10 border-l-4 border-success text-success-dark text-body-sm rounded-card"
        >
          <strong className="font-semibold">Success! </strong>
          Thank you for your message! We&apos;ll get back to you shortly.
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4" noValidate aria-label="Contact form">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* First Name */}
          <div>
            <label className={labelClasses} htmlFor="firstName">
              First Name <span className="text-error" aria-label="required">*</span>
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
              autoComplete="given-name"
              aria-required="true"
              aria-invalid={!!fieldErrors.firstName}
              aria-describedby={fieldErrors.firstName ? "firstName-error" : undefined}
              className={cn(inputClasses, fieldErrors.firstName ? 'border-error bg-error-light/10' : 'border-gray-300')}
              placeholder="John"
            />
            {fieldErrors.firstName && (
              <p id="firstName-error" className="mt-1.5 text-body-sm text-error" role="alert">
                {fieldErrors.firstName}
              </p>
            )}
          </div>

          {/* Last Name */}
          <div>
            <label className={labelClasses} htmlFor="lastName">
              Last Name <span className="text-content-muted text-body-xs">(optional)</span>
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              autoComplete="family-name"
              className={cn(inputClasses, 'border-gray-300')}
              placeholder="Doe"
            />
          </div>
        </div>

        {/* Email + Phone row — at least one required */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className={labelClasses} htmlFor="email">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              inputMode="email"
              autoComplete="email"
              aria-invalid={!!fieldErrors.email}
              aria-describedby={fieldErrors.email ? "email-error" : "contact-hint"}
              className={cn(inputClasses, fieldErrors.email ? 'border-error bg-error-light/10' : 'border-gray-300')}
              placeholder="john@example.com"
            />
            {fieldErrors.email && (
              <p id="email-error" className="mt-1.5 text-body-sm text-error" role="alert">
                {fieldErrors.email}
              </p>
            )}
          </div>

          <div>
            <label className={labelClasses} htmlFor="phone">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              inputMode="numeric"
              pattern="[0-9]*"
              maxLength={10}
              autoComplete="tel"
              aria-invalid={!!fieldErrors.phone}
              aria-describedby={fieldErrors.phone ? "phone-error" : "contact-hint"}
              className={cn(inputClasses, fieldErrors.phone ? 'border-error bg-error-light/10' : 'border-gray-300')}
              placeholder="10-digit number"
            />
            {fieldErrors.phone && (
              <p id="phone-error" className="mt-1.5 text-body-sm text-error" role="alert">
                {fieldErrors.phone}
              </p>
            )}
          </div>
        </div>
        <p id="contact-hint" className="text-body-xs text-gray-400 -mt-2 flex items-center gap-1">
          <Lock className="w-3 h-3" />
          Provide email or phone — we&apos;ll only use it to respond to your message
        </p>

        {/* Subject */}
        <div>
          <label className={labelClasses} htmlFor="subject">
            Subject <span className="text-content-muted text-body-xs">(optional)</span>
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className={cn(inputClasses, 'border-gray-300')}
            placeholder="How can we help?"
          />
        </div>

        {/* Message */}
        <div>
          <label className={labelClasses} htmlFor="message">
            Message <span className="text-error" aria-label="required">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={6}
            required
            aria-required="true"
            aria-invalid={!!fieldErrors.message}
            aria-describedby={fieldErrors.message ? "message-error" : undefined}
            className={cn(inputClasses, 'resize-y min-h-[120px]', fieldErrors.message ? 'border-error bg-error-light/10' : 'border-gray-300')}
            placeholder="Your message... (minimum 10 characters)"
          />
          {fieldErrors.message && (
            <p id="message-error" className="mt-1.5 text-body-sm text-error" role="alert">
              {fieldErrors.message}
            </p>
          )}
        </div>

        <Button
          type="submit"
          variant="primary"
          size="lg"
          fullWidth
          loading={loading}
          rightIcon={Send}
          ariaLabel={loading ? 'Sending message, please wait' : 'Send message'}
        >
          {loading ? 'Sending...' : 'Send Message'}
        </Button>
      </form>
    </>
  );
}
