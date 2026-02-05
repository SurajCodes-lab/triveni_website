'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
// Centralized icon imports for better bundle optimization
import { Send } from '@/components/ui/icons';
import { trackFormSubmission, trackFormInteraction, trackError } from '@/utilis/analytics';
import Button from '@/components/ui/Button';
import { cn } from '@/utilis/cn';

// Consistent input styling
const inputClasses = "w-full px-4 py-3 border rounded-input bg-white text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-fast min-h-[48px]";
const labelClasses = "block text-body-sm text-gray-900 text-start font-semibold mb-2";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
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

  // Debounced analytics tracking to avoid blocking input on every keystroke (INP fix)
  const debouncedTrackField = useCallback((fieldName) => {
    if (trackedFieldsRef.current.has(fieldName)) return;
    if (analyticsTimerRef.current) clearTimeout(analyticsTimerRef.current);
    analyticsTimerRef.current = setTimeout(() => {
      trackedFieldsRef.current.add(fieldName);
      trackFormInteraction('contact_form', 'field_filled', fieldName);
    }, 1000);
  }, []);

  // Cleanup timer on unmount
  useEffect(() => {
    return () => {
      if (analyticsTimerRef.current) clearTimeout(analyticsTimerRef.current);
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Debounced analytics tracking - only fires once per field after typing stops
    if (value && value.trim() !== '') {
      debouncedTrackField(name);
    }
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setFieldErrors({});

    // Track form submission attempt
    trackFormInteraction('contact_form', 'submit_attempted');

    // Field-level validation
    const errors = {};

    if (!formData.firstName || !formData.firstName.trim()) {
      errors.firstName = 'First name is required';
    }

    if (!formData.email || !formData.email.trim()) {
      errors.email = 'Email address is required';
    } else {
      // Email format validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        errors.email = 'Please enter a valid email address';
      }
    }

    if (!formData.message || !formData.message.trim()) {
      errors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      errors.message = 'Message must be at least 10 characters';
    }

    // If there are validation errors, show them
    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      setError('Please correct the errors below');
      setLoading(false);

      // Track validation error
      trackFormInteraction('contact_form', 'validation_error', Object.keys(errors).join(','));
      trackError('form_validation', 'Form has validation errors', 'contact_form');

      // Focus first error field
      const firstErrorField = Object.keys(errors)[0];
      document.getElementById(firstErrorField)?.focus();
      return;
    }

    // Simulate form submission - replace with actual implementation later
    setTimeout(() => {
      console.log('Form submitted:', formData);

      // Track successful form submission (CONVERSION EVENT)
      trackFormSubmission('contact_form', {
        subject: formData.subject || 'general_inquiry',
        has_last_name: !!formData.lastName,
        message_length: formData.message.length
      });

      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        subject: '',
        message: ''
      });

      setSuccess(true);
      setLoading(false);
      formStarted.current = false;

      // Hide success message after 5 seconds
      setTimeout(() => {
        setSuccess(false);
      }, 5000);
    }, 1000);
  };
  
  return (
    <>
      {/* Error message with ARIA live region */}
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

      {/* Success message with ARIA live region */}
      {success && (
        <div
          role="alert"
          aria-live="polite"
          className="mb-4 p-4 bg-success-light/10 border-l-4 border-success text-success-dark text-body-sm rounded-card"
        >
          <strong className="font-semibold">Success! </strong>
          Thank you for your message! We'll get back to you shortly.
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4" noValidate aria-label="Contact form">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* First Name Field */}
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

          {/* Last Name Field */}
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
              className={cn(inputClasses, 'border-gray-300')}
              placeholder="Doe"
            />
          </div>
        </div>

        {/* Email Field */}
        <div>
          <label className={labelClasses} htmlFor="email">
            Email Address <span className="text-error" aria-label="required">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            aria-required="true"
            aria-invalid={!!fieldErrors.email}
            aria-describedby={fieldErrors.email ? "email-error" : undefined}
            className={cn(inputClasses, fieldErrors.email ? 'border-error bg-error-light/10' : 'border-gray-300')}
            placeholder="john@example.com"
          />
          {fieldErrors.email && (
            <p id="email-error" className="mt-1.5 text-body-sm text-error" role="alert">
              {fieldErrors.email}
            </p>
          )}
        </div>

        {/* Subject Field */}
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

        {/* Message Field */}
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