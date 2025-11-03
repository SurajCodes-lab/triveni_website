'use client';

import { useState, useEffect, useRef } from 'react';
import { Send } from 'lucide-react';
import { trackFormSubmission, trackFormInteraction, trackError } from '@/utilis/analytics';

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

  // Track form start on first interaction
  useEffect(() => {
    if (!formStarted.current && Object.values(formData).some(val => val !== '')) {
      trackFormInteraction('contact_form', 'started');
      formStarted.current = true;
    }
  }, [formData]);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Track field interaction
    if (value && value.trim() !== '') {
      trackFormInteraction('contact_form', 'field_filled', name);
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
          className="mb-4 p-4 bg-red-50 border-l-4 border-red-600 text-red-800 text-sm rounded-md"
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
          className="mb-4 p-4 bg-green-50 border-l-4 border-green-600 text-green-800 text-sm rounded-md"
        >
          <strong className="font-semibold">Success! </strong>
          Thank you for your message! We'll get back to you shortly.
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4" noValidate aria-label="Contact form">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* First Name Field */}
          <div>
            <label
              className="block text-sm text-start text-gray-900 font-semibold mb-2"
              htmlFor="firstName"
            >
              First Name <span className="text-red-600" aria-label="required">*</span>
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
              className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition duration-200 ${
                fieldErrors.firstName ? 'border-red-500 bg-red-50' : 'border-gray-300'
              }`}
              placeholder="John"
            />
            {fieldErrors.firstName && (
              <p id="firstName-error" className="mt-1 text-sm text-red-600" role="alert">
                {fieldErrors.firstName}
              </p>
            )}
          </div>

          {/* Last Name Field */}
          <div>
            <label
              className="block text-sm text-gray-900 text-start font-semibold mb-2"
              htmlFor="lastName"
            >
              Last Name <span className="text-gray-500 text-xs">(optional)</span>
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition duration-200"
              placeholder="Doe"
            />
          </div>
        </div>
        {/* Email Field */}
        <div>
          <label
            className="block text-sm text-gray-900 text-start font-semibold mb-2"
            htmlFor="email"
          >
            Email Address <span className="text-red-600" aria-label="required">*</span>
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
            className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition duration-200 ${
              fieldErrors.email ? 'border-red-500 bg-red-50' : 'border-gray-300'
            }`}
            placeholder="john@example.com"
          />
          {fieldErrors.email && (
            <p id="email-error" className="mt-1 text-sm text-red-600" role="alert">
              {fieldErrors.email}
            </p>
          )}
        </div>

        {/* Subject Field */}
        <div>
          <label
            className="block text-sm text-gray-900 text-start font-semibold mb-2"
            htmlFor="subject"
          >
            Subject <span className="text-gray-500 text-xs">(optional)</span>
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition duration-200"
            placeholder="How can we help?"
          />
        </div>

        {/* Message Field */}
        <div>
          <label
            className="block text-sm text-gray-900 text-start font-semibold mb-2"
            htmlFor="message"
          >
            Message <span className="text-red-600" aria-label="required">*</span>
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
            className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition duration-200 resize-y min-h-[120px] ${
              fieldErrors.message ? 'border-red-500 bg-red-50' : 'border-gray-300'
            }`}
            placeholder="Your message... (minimum 10 characters)"
          />
          {fieldErrors.message && (
            <p id="message-error" className="mt-1 text-sm text-red-600" role="alert">
              {fieldErrors.message}
            </p>
          )}
        </div>
        <button
          type="submit"
          disabled={loading}
          aria-busy={loading}
          aria-label={loading ? 'Sending message, please wait' : 'Send message'}
          className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-4 px-6 rounded-lg transition duration-300 flex items-center justify-center space-x-2 group disabled:opacity-70 disabled:cursor-not-allowed min-h-[56px] focus-visible:ring-4 focus-visible:ring-yellow-300 focus-visible:ring-offset-2"
        >
          <span>{loading ? 'Sending...' : 'Send Message'}</span>
          <Send className="w-5 h-5 transform group-hover:translate-x-1 transition duration-300" aria-hidden="true" />
        </button>
      </form>
    </>
  );
}