'use client';

import { useState } from 'react';
import Link from 'next/link';
// Centralized icon imports for better bundle optimization
import {
  Phone,
  MapPin,
  Users,
  Building2,
  ChevronRight,
  ArrowRight,
  Shield,
  Clock,
  Car,
  CheckCircle2,
  Send,
  Mail,
  MessageSquare
} from '@/components/ui/icons';

const industries = [
  'IT / Software Company',
  'BPO / Call Center',
  'Manufacturing',
  'Pharma / Healthcare',
  'Banking / Finance',
  'Retail / E-commerce',
  'Education',
  'Hospitality',
  'Others'
];

const serviceTypes = [
  'Employee Pickup & Drop (Daily)',
  'Office Shuttle Service',
  'Executive Car Rental (Monthly)',
  'Airport Transfers (Corporate)',
  'Event / Conference Transport',
  'Ad-hoc / On-demand Bookings',
  'Multi-city Requirements'
];

const fleetRequirements = [
  'Sedans Only',
  'SUVs / Innovas',
  'Tempo Travellers (12-26 seater)',
  'Buses (32+ seater)',
  'Mixed Fleet',
  'Not Sure - Need Consultation'
];

const employeeRanges = [
  'Less than 50',
  '50-100',
  '100-250',
  '250-500',
  '500-1000',
  '1000+'
];

const cities = ['Delhi NCR', 'Jaipur', 'Chandigarh', 'Dehradun', 'Agra', 'Multiple Cities'];

export default function GetCorporateQuoteClient() {
  const [formData, setFormData] = useState({
    companyName: '',
    contactPerson: '',
    email: '',
    phone: '',
    industry: '',
    city: '',
    serviceType: [],
    fleetRequirement: '',
    employeeCount: '',
    startDate: '',
    additionalInfo: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleServiceChange = (service) => {
    setFormData(prev => ({
      ...prev,
      serviceType: prev.serviceType.includes(service)
        ? prev.serviceType.filter(s => s !== service)
        : [...prev.serviceType, service]
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Create WhatsApp message
    const message = `*Corporate Transport Inquiry*

*Company:* ${formData.companyName}
*Contact:* ${formData.contactPerson}
*Email:* ${formData.email}
*Phone:* ${formData.phone}

*Industry:* ${formData.industry}
*City:* ${formData.city}
*Employee Count:* ${formData.employeeCount}

*Services Required:*
${formData.serviceType.map(s => `- ${s}`).join('\n')}

*Fleet Requirement:* ${formData.fleetRequirement}
*Start Date:* ${formData.startDate || 'Flexible'}

*Additional Info:*
${formData.additionalInfo || 'None'}`;

    // Open WhatsApp with pre-filled message
    const whatsappUrl = `https://wa.me/917668570551?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');

    setIsSubmitting(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white flex items-center justify-center px-4">
        <div className="max-w-lg text-center">
          <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle2 className="w-12 h-12 text-green-600" />
          </div>
          <h2 className="text-3xl font-black text-slate-900 mb-4">Request Submitted!</h2>
          <p className="text-slate-600 mb-8">
            Thank you for your inquiry. Our team will review your requirements and get back to you within 2-4 hours.
          </p>
          <div className="space-y-4">
            <Link
              href="tel:+917668570551"
              className="flex items-center justify-center gap-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-2xl font-bold hover:scale-[1.02] transition-all"
            >
              <Phone className="w-5 h-5" />
              Call for Faster Response: 7668570551
            </Link>
            <Link
              href="/corporate-transportation-service"
              className="flex items-center justify-center gap-2 text-slate-600 hover:text-cyan-600 font-medium"
            >
              <ArrowRight className="w-4 h-4 rotate-180" />
              Back to Corporate Services
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-cyan-500/20 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[150px]" />

        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/corporate-transportation-service" className="hover:text-white transition-colors">Corporate</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white">Get Quote</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left Content */}
            <div>
              <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-xl px-6 py-3 rounded-full border border-white/20 mb-6">
                <Building2 className="w-5 h-5 text-cyan-400" />
                <span className="text-cyan-300 font-medium text-sm tracking-widest uppercase">Corporate Inquiry</span>
              </div>

              <h1 className="text-4xl md:text-5xl font-black text-white leading-tight mb-6">
                Get Your
                <span className="block text-transparent bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text">Corporate Quote</span>
              </h1>

              <p className="text-xl text-slate-300 mb-8">
                Fill out the form and our corporate solutions team will create a customized transport proposal for your organization.
              </p>

              {/* Benefits */}
              <div className="space-y-4 mb-8">
                {[
                  'Customized pricing based on your requirements',
                  'Dedicated account manager',
                  'Flexible contracts - Monthly or Annual',
                  'Response within 2-4 hours'
                ].map((benefit, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-cyan-400" />
                    <span className="text-slate-300">{benefit}</span>
                  </div>
                ))}
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 p-6 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10">
                {[
                  { value: '500+', label: 'Fleet Size' },
                  { value: '5', label: 'Cities' },
                  { value: '24/7', label: 'Support' }
                ].map((stat, idx) => (
                  <div key={idx} className="text-center">
                    <div className="text-2xl font-black text-white">{stat.value}</div>
                    <div className="text-sm text-slate-400">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Contact Alternative */}
              <div className="mt-8 p-6 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl border border-cyan-400/30">
                <p className="text-white font-medium mb-3">Prefer to talk directly?</p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    href="tel:+917668570551"
                    className="flex items-center justify-center gap-2 bg-white text-slate-900 px-6 py-3 rounded-xl font-bold hover:scale-[1.02] transition-all"
                  >
                    <Phone className="w-4 h-4" />
                    Call: 7668570551
                  </Link>
                  <Link
                    href="https://wa.me/917668570551"
                    className="flex items-center justify-center gap-2 bg-green-500 text-white px-6 py-3 rounded-xl font-bold hover:scale-[1.02] transition-all"
                  >
                    <MessageSquare className="w-4 h-4" />
                    WhatsApp
                  </Link>
                </div>
              </div>
            </div>

            {/* Right - Form */}
            <div className="bg-white rounded-3xl p-8 shadow-2xl">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Tell us about your requirements</h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Company Details */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Company Name *</label>
                    <input
                      type="text"
                      name="companyName"
                      required
                      value={formData.companyName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 outline-none transition-all"
                      placeholder="Your company name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Contact Person *</label>
                    <input
                      type="text"
                      name="contactPerson"
                      required
                      value={formData.contactPerson}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 outline-none transition-all"
                      placeholder="Your name"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 outline-none transition-all"
                      placeholder="work@company.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Phone *</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 outline-none transition-all"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Industry *</label>
                    <select
                      name="industry"
                      required
                      value={formData.industry}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 outline-none transition-all bg-white"
                    >
                      <option value="">Select Industry</option>
                      {industries.map(ind => (
                        <option key={ind} value={ind}>{ind}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">City *</label>
                    <select
                      name="city"
                      required
                      value={formData.city}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 outline-none transition-all bg-white"
                    >
                      <option value="">Select City</option>
                      {cities.map(city => (
                        <option key={city} value={city}>{city}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Service Types */}
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-3">Services Required *</label>
                  <div className="grid md:grid-cols-2 gap-2">
                    {serviceTypes.map(service => (
                      <label
                        key={service}
                        className={`flex items-center gap-3 p-3 rounded-xl border cursor-pointer transition-all ${
                          formData.serviceType.includes(service)
                            ? 'border-cyan-500 bg-cyan-50'
                            : 'border-slate-200 hover:border-slate-300'
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={formData.serviceType.includes(service)}
                          onChange={() => handleServiceChange(service)}
                          className="w-4 h-4 text-cyan-600 rounded focus:ring-cyan-500"
                        />
                        <span className="text-sm text-slate-700">{service}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Fleet Requirement</label>
                    <select
                      name="fleetRequirement"
                      value={formData.fleetRequirement}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 outline-none transition-all bg-white"
                    >
                      <option value="">Select Fleet Type</option>
                      {fleetRequirements.map(fleet => (
                        <option key={fleet} value={fleet}>{fleet}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Employee Count</label>
                    <select
                      name="employeeCount"
                      value={formData.employeeCount}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 outline-none transition-all bg-white"
                    >
                      <option value="">Select Range</option>
                      {employeeRanges.map(range => (
                        <option key={range} value={range}>{range}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Expected Start Date</label>
                  <input
                    type="date"
                    name="startDate"
                    value={formData.startDate}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Additional Information</label>
                  <textarea
                    name="additionalInfo"
                    rows={4}
                    value={formData.additionalInfo}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 outline-none transition-all resize-none"
                    placeholder="Any specific requirements, shift timings, pickup locations, etc."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-xl shadow-cyan-500/30 hover:shadow-cyan-500/50 hover:scale-[1.02] transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>Processing...</>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Submit Inquiry via WhatsApp
                      <ArrowRight className="w-5 h-5" />
                    </>
                  )}
                </button>

                <p className="text-center text-sm text-slate-500">
                  Your inquiry will be sent via WhatsApp for faster response
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 px-4 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center items-center gap-8 text-white/70">
            {[
              { icon: Shield, text: 'Verified Drivers' },
              { icon: Car, text: '500+ Fleet' },
              { icon: Clock, text: '24/7 Support' },
              { icon: MapPin, text: '5 Cities' }
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <item.icon className="w-5 h-5" />
                <span className="font-medium">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
