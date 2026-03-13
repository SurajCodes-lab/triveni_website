"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  Calendar,
  Mail,
  Phone,
  MapPin,
  ChevronRight,
  Check,
  PhoneCall,
  MessageCircleMore,
  Users,
  User,
  Shield,
  Lock,
} from "@/components/ui/icons";
import { motion } from "framer-motion";
import { trackFormSubmission, trackWhatsAppClick, trackPhoneCall, trackFormInteraction, trackBooking } from "@/utilis/analytics";

const BookingForm = ({ slug, packageInfo }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    passengerCount: 1,
    contactInfo: {
      name: "",
      email: "",
      phone: "",
    },
    passengers: [],
    skippedPassengerNames: false,
  });
  const [errors, setErrors] = useState({});
  const formStarted = useRef(false);

  // Track form start
  useEffect(() => {
    trackBooking('started', { tourSlug: slug, tourPackage: packageInfo.title });
    formStarted.current = true;
  }, [slug, packageInfo.title]);

  // Track abandonment on unmount
  useEffect(() => {
    const started = formStarted;
    const step = currentStep;
    return () => {
      if (started.current && step < 3) {
        trackBooking('abandoned', { tourSlug: slug, step, tourPackage: packageInfo.title });
      }
    };
  }, [currentStep, slug, packageInfo.title]);

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };

  // Reordered steps: Overview → Contact → Passenger Names (optional)
  const steps = [
    { number: 1, title: "Trip Overview" },
    { number: 2, title: "Your Details" },
    { number: 3, title: "Traveler Names" },
  ];

  const totalAmount = parseInt(packageInfo.price.replace(/[^0-9]/g, "")) * formData.passengerCount;

  // Generate WhatsApp message from form data
  const generateWhatsAppMessage = () => {
    let message = `🌟 *New Booking Request* 🌟\n\n`;
    message += `📦 *Package:* ${packageInfo.title}\n`;
    message += `⏰ *Duration:* ${packageInfo.duration}\n`;
    message += `📍 *Route:* ${packageInfo.startingPoint} to ${packageInfo.destination}\n`;
    message += `💰 *Price:* ${packageInfo.price} per person\n`;
    message += `👥 *Total Travelers:* ${formData.passengerCount}\n`;
    message += `💵 *Total Amount:* ₹${totalAmount}\n\n`;

    message += `📞 *Contact Information:*\n`;
    message += `👤 *Name:* ${formData.contactInfo.name}\n`;
    message += `📱 *Phone:* ${formData.contactInfo.phone}\n`;
    if (formData.contactInfo.email) {
      message += `📧 *Email:* ${formData.contactInfo.email}\n`;
    }

    if (!formData.skippedPassengerNames && formData.passengers.length > 0) {
      const namedPassengers = formData.passengers.filter(p => p.name.trim());
      if (namedPassengers.length > 0) {
        message += `\n👥 *Traveler Names:*\n`;
        namedPassengers.forEach((passenger, index) => {
          message += `${index + 1}. ${passenger.name}`;
          if (passenger.age) message += ` (Age: ${passenger.age})`;
          message += `\n`;
        });
      }
    } else {
      message += `\n_Traveler names will be provided later._\n`;
    }

    message += `\nPlease confirm this booking. Thank you! 🙏`;
    return encodeURIComponent(message);
  };

  const handleWhatsAppBooking = () => {
    formStarted.current = false; // Prevent abandonment tracking

    trackFormSubmission('tour_booking', {
      serviceType: 'tour_package',
      tourSlug: slug,
      tourPackage: packageInfo.title,
      passengers: formData.passengerCount,
      has_email: !!formData.contactInfo.email,
      has_phone: !!formData.contactInfo.phone,
      skipped_names: formData.skippedPassengerNames,
    });
    trackWhatsAppClick('booking_form', packageInfo.title, slug);
    trackBooking('completed', { tourSlug: slug, tourPackage: packageInfo.title, passengers: formData.passengerCount });

    if (typeof window !== 'undefined' && window.trackTourFormSubmission) {
      window.trackTourFormSubmission(slug, packageInfo.title);
    }

    const phoneNumber = "917668570551";
    const message = generateWhatsAppMessage();
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  const isStepValid = () => {
    switch (currentStep) {
      case 1:
        return formData.passengerCount >= 1;
      case 2:
        return formData.contactInfo.name.trim() !== "" &&
               formData.contactInfo.phone.trim().length >= 10;
      case 3:
        return true; // Always valid — names are optional
      default:
        return false;
    }
  };

  const handleStepChange = (nextStep) => {
    trackBooking('step_completed', {
      tourSlug: slug,
      step: currentStep,
      stepTitle: steps[currentStep - 1].title,
    });
    setCurrentStep(nextStep);
  };

  // Initialize passenger slots when count changes
  useEffect(() => {
    setFormData(prev => {
      const existing = prev.passengers;
      const newPassengers = Array.from({ length: prev.passengerCount }, (_, i) =>
        existing[i] || { name: "", age: "" }
      );
      return { ...prev, passengers: newPassengers };
    });
  }, [formData.passengerCount]);

  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <nav
        className="relative bg-cover bg-center bg-no-repeat text-sm text-gray-600 py-32"
        aria-label="Breadcrumb"
        style={{ backgroundImage: `url('${packageInfo.image}')` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <ol className="inline-flex items-center space-x-1 md:space-x-3">
            <li className="inline-flex items-center">
              <Link href="/" className="text-white hover:text-yellow-600">Home</Link>
            </li>
            <li>
              <div className="flex items-center font-semibold">
                <ChevronRight className="w-4 h-4 mx-2 text-white" />
                <span className="text-yellow-400 text-xl">Booking Form</span>
              </div>
            </li>
          </ol>
          <h1 className="text-3xl tracking-[0.07rem] md:text-3xl max-sm:text-2xl font-bold text-white mt-8">
            Book Your Taxi Online — Instant Cab Booking
          </h1>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-4 bg-gray-50 py-12">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Main Form */}
          <motion.div
            className="flex-1 bg-white rounded-2xl shadow-xl overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-[#FACF2D] to-[#FFE17D] p-8">
              <div className="flex flex-wrap items-center justify-between">
                <div>
                  <h2 className="text-2xl max-sm:text-xl font-bold text-gray-900 mb-2">
                    {packageInfo.title}
                  </h2>
                  <div className="flex gap-4 text-gray-700">
                    <div className="flex items-center max-sm:text-sm">
                      <Calendar className="w-4 h-4 mr-2" />
                      {packageInfo.duration}
                    </div>
                    <div className="flex items-center max-sm:text-sm">
                      <MapPin className="w-4 h-4 mr-2" />
                      {packageInfo.startingPoint} to {packageInfo.destination}
                    </div>
                  </div>
                </div>
                <div className="text-3xl max-sm:text-2xl max-sm:mt-2 max-sm:ms-3 font-bold text-gray-900">
                  {packageInfo.price}
                  <span className="text-sm font-normal block">per person</span>
                </div>
              </div>
            </div>

            {/* Progress Steps */}
            <nav className="px-8 py-6 border-b" aria-label="Booking progress">
              <ol className="flex justify-between items-center" role="list">
                {steps.map((step, index) => (
                  <li key={index} className="flex items-center">
                    <div className="flex items-center">
                      <motion.div
                        className={`min-w-[48px] min-h-[48px] w-12 h-12 rounded-full flex items-center justify-center font-semibold ${
                          currentStep >= step.number
                            ? "bg-[#FACF2D] text-black"
                            : "bg-gray-200 text-gray-500"
                        }`}
                        aria-current={currentStep === step.number ? "step" : undefined}
                        aria-label={`Step ${step.number}: ${step.title}${currentStep > step.number ? " (completed)" : currentStep === step.number ? " (current)" : ""}`}
                      >
                        {currentStep > step.number ? (
                          <Check className="w-6 h-6" aria-hidden="true" />
                        ) : (
                          step.number
                        )}
                      </motion.div>
                      <span className="ml-3 font-medium hidden sm:block text-gray-900">
                        {step.title}
                      </span>
                    </div>
                    {index < steps.length - 1 && (
                      <div className="w-16 sm:w-32 h-1 mx-4 bg-gray-200" aria-hidden="true">
                        <motion.div
                          className="h-full bg-[#FACF2D]"
                          initial={{ width: 0 }}
                          animate={{ width: currentStep > step.number ? "100%" : "0%" }}
                          transition={{ duration: 0.5 }}
                        />
                      </div>
                    )}
                  </li>
                ))}
              </ol>
            </nav>

            {/* Form Content */}
            <div className="p-8">
              {/* Step 1: Trip Overview — just select number of travelers */}
              {currentStep === 1 && (
                <motion.div {...fadeInUp} className="space-y-6" role="region" aria-label="Trip overview">
                  <h2 className="text-2xl font-bold mb-2 text-gray-900">How many travelers?</h2>
                  <p className="text-gray-500 text-sm mb-6">Select the number of people for this trip. You can add individual names later.</p>

                  <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                    <label htmlFor="passengerCount" className="block text-sm font-semibold mb-3 text-gray-900">
                      <Users className="w-4 h-4 inline mr-2" />
                      Number of Travelers
                    </label>
                    <div className="flex items-center gap-4">
                      <button
                        type="button"
                        onClick={() => setFormData(prev => ({ ...prev, passengerCount: Math.max(1, prev.passengerCount - 1) }))}
                        className="w-12 h-12 rounded-xl bg-gray-200 hover:bg-gray-300 text-gray-900 font-bold text-xl transition-colors flex items-center justify-center"
                        aria-label="Remove one traveler"
                      >
                        -
                      </button>
                      <input
                        type="number"
                        id="passengerCount"
                        min="1"
                        max="50"
                        inputMode="numeric"
                        value={formData.passengerCount}
                        onChange={(e) => {
                          const val = Math.max(1, Math.min(50, parseInt(e.target.value) || 1));
                          setFormData(prev => ({ ...prev, passengerCount: val }));
                        }}
                        className="w-20 text-center text-2xl font-bold p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#FACF2D] focus:outline-none"
                      />
                      <button
                        type="button"
                        onClick={() => setFormData(prev => ({ ...prev, passengerCount: Math.min(50, prev.passengerCount + 1) }))}
                        className="w-12 h-12 rounded-xl bg-[#FACF2D] hover:bg-[#e6bb15] text-black font-bold text-xl transition-colors flex items-center justify-center"
                        aria-label="Add one traveler"
                      >
                        +
                      </button>
                    </div>

                    {/* Live price preview */}
                    <div className="mt-6 pt-4 border-t border-gray-200">
                      <div className="flex justify-between text-sm text-gray-600">
                        <span>{packageInfo.price} x {formData.passengerCount} {formData.passengerCount === 1 ? 'person' : 'people'}</span>
                        <span className="font-bold text-gray-900 text-lg">₹{totalAmount.toLocaleString('en-IN')}</span>
                      </div>
                    </div>
                  </div>

                  {/* Trust signals */}
                  <div className="flex items-center gap-4 text-xs text-gray-400 flex-wrap">
                    <span className="flex items-center gap-1"><Shield className="w-3.5 h-3.5" /> No payment now</span>
                    <span className="flex items-center gap-1"><Check className="w-3.5 h-3.5" /> Free cancellation</span>
                    <span className="flex items-center gap-1"><Lock className="w-3.5 h-3.5" /> Price lock guarantee</span>
                  </div>
                </motion.div>
              )}

              {/* Step 2: Contact Info */}
              {currentStep === 2 && (
                <motion.div {...fadeInUp} className="space-y-6">
                  <h2 className="text-2xl font-semibold mb-2 text-gray-900">Your Contact Details</h2>
                  <p className="text-gray-500 text-sm mb-6">We need this to confirm your booking. Takes 30 seconds.</p>

                  <div className="bg-gray-50 p-6 rounded-xl space-y-5 border border-gray-200">
                    {/* Name */}
                    <div>
                      <label htmlFor="booking-name" className="block text-sm text-start font-semibold mb-2 text-gray-900">
                        Your Name <span className="text-red-600" aria-label="required">*</span>
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-3.5 text-gray-400 w-4 h-4" />
                        <input
                          type="text"
                          id="booking-name"
                          className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FACF2D] focus:outline-none min-h-[48px]"
                          value={formData.contactInfo.name}
                          onChange={(e) =>
                            setFormData((prev) => ({
                              ...prev,
                              contactInfo: { ...prev.contactInfo, name: e.target.value },
                            }))
                          }
                          required
                          autoComplete="name"
                          placeholder="Enter your full name"
                          aria-required="true"
                        />
                      </div>
                    </div>

                    {/* Phone */}
                    <div>
                      <label htmlFor="booking-phone" className="block text-sm text-start font-semibold mb-2 text-gray-900">
                        Phone Number <span className="text-red-600" aria-label="required">*</span>
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-3.5 text-gray-400 w-4 h-4" />
                        <input
                          type="tel"
                          id="booking-phone"
                          className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FACF2D] focus:outline-none min-h-[48px]"
                          value={formData.contactInfo.phone}
                          onChange={(e) =>
                            setFormData((prev) => ({
                              ...prev,
                              contactInfo: { ...prev.contactInfo, phone: e.target.value },
                            }))
                          }
                          required
                          inputMode="numeric"
                          pattern="[0-9]*"
                          maxLength={10}
                          autoComplete="tel"
                          placeholder="10-digit phone number"
                          aria-required="true"
                        />
                      </div>
                      <p className="text-gray-400 text-[11px] mt-1 ml-1 flex items-center gap-1">
                        <Lock className="w-2.5 h-2.5" />
                        We&apos;ll only call to confirm your booking
                      </p>
                    </div>

                    {/* Email (optional) */}
                    <div>
                      <label htmlFor="booking-email" className="block text-sm text-start font-semibold mb-2 text-gray-900">
                        Email <span className="text-gray-400 text-xs font-normal">(optional)</span>
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3.5 text-gray-400 w-4 h-4" />
                        <input
                          type="email"
                          id="booking-email"
                          className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FACF2D] focus:outline-none min-h-[48px]"
                          value={formData.contactInfo.email}
                          onChange={(e) =>
                            setFormData((prev) => ({
                              ...prev,
                              contactInfo: { ...prev.contactInfo, email: e.target.value },
                            }))
                          }
                          inputMode="email"
                          autoComplete="email"
                          placeholder="For booking confirmation (optional)"
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Step 3: Traveler Names (optional) + Final Booking */}
              {currentStep === 3 && (
                <motion.div {...fadeInUp} className="space-y-6">
                  <div className="flex items-center justify-between mb-2">
                    <h2 className="text-2xl font-semibold text-gray-900">Traveler Names</h2>
                    <button
                      type="button"
                      onClick={() => {
                        setFormData(prev => ({ ...prev, skippedPassengerNames: true }));
                        // Go straight to booking
                        handleWhatsAppBooking();
                      }}
                      className="text-sm text-gray-500 hover:text-gray-900 underline underline-offset-2 transition-colors"
                    >
                      Skip — add names later
                    </button>
                  </div>
                  <p className="text-gray-500 text-sm">Optional: add traveler names now, or share them later on WhatsApp.</p>

                  <div className="space-y-3 max-h-[400px] overflow-y-auto pr-1">
                    {formData.passengers.map((passenger, index) => (
                      <motion.div
                        key={index}
                        className="bg-gray-50 p-4 rounded-xl border border-gray-200"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                      >
                        <p className="text-xs font-semibold text-gray-400 mb-2">Traveler {index + 1}</p>
                        <div className="grid sm:grid-cols-2 gap-3">
                          <input
                            type="text"
                            placeholder="Full name"
                            autoComplete="off"
                            className="w-full p-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FACF2D] focus:outline-none text-sm"
                            value={passenger.name}
                            onChange={(e) => {
                              const newPassengers = [...formData.passengers];
                              newPassengers[index] = { ...newPassengers[index], name: e.target.value };
                              setFormData(prev => ({ ...prev, passengers: newPassengers }));
                            }}
                          />
                          <input
                            type="number"
                            placeholder="Age (optional)"
                            inputMode="numeric"
                            min="1"
                            max="120"
                            className="w-full p-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FACF2D] focus:outline-none text-sm"
                            value={passenger.age}
                            onChange={(e) => {
                              const newPassengers = [...formData.passengers];
                              newPassengers[index] = { ...newPassengers[index], age: e.target.value };
                              setFormData(prev => ({ ...prev, passengers: newPassengers }));
                            }}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Booking Summary + CTA */}
                  <div className="bg-green-50 border border-green-200 p-6 rounded-xl">
                    <div className="flex items-center mb-3">
                      <MessageCircleMore className="w-5 h-5 text-green-600 mr-2" />
                      <h3 className="text-lg font-medium text-green-800">Complete Your Booking</h3>
                    </div>

                    {/* Mini summary */}
                    <div className="grid grid-cols-2 gap-2 text-sm text-green-700 mb-4">
                      <span>{formData.passengerCount} travelers</span>
                      <span className="text-right font-bold">₹{totalAmount.toLocaleString('en-IN')}</span>
                    </div>

                    <div className="flex gap-3">
                      <motion.button
                        onClick={() => {
                          setFormData(prev => ({ ...prev, skippedPassengerNames: false }));
                          handleWhatsAppBooking();
                        }}
                        whileTap={{ scale: 0.98 }}
                        className="flex-1 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center justify-center min-h-[48px]"
                      >
                        <MessageCircleMore className="w-5 h-5 mr-2" />
                        Book via WhatsApp
                      </motion.button>
                      <motion.a
                        href="tel:+917668570551"
                        onClick={() => trackPhoneCall('booking_form')}
                        whileTap={{ scale: 0.98 }}
                        className="bg-[#FACF2D] text-black px-6 py-3 rounded-lg font-semibold hover:bg-black hover:text-white transition-colors flex items-center justify-center min-h-[48px]"
                      >
                        <PhoneCall className="w-5 h-5 mr-2" />
                        Call Us
                      </motion.a>
                    </div>

                    <p className="text-xs text-green-600 mt-3 text-center">
                      Your details will be pre-filled on WhatsApp. Our team confirms within minutes.
                    </p>
                  </div>
                </motion.div>
              )}
            </div>

            {/* Navigation Buttons */}
            <div className="px-8 py-6 bg-gray-50 border-t flex justify-between">
              {currentStep > 1 && (
                <motion.button
                  whileTap={{ scale: 0.98 }}
                  className="px-6 py-3 text-gray-600 font-medium hover:text-black transition-colors min-h-[48px]"
                  onClick={() => setCurrentStep(currentStep - 1)}
                >
                  Back
                </motion.button>
              )}
              {currentStep < 3 && (
                <motion.button
                  whileTap={{ scale: 0.98 }}
                  className={`ml-auto px-8 py-3 font-semibold rounded-lg transition-colors flex items-center min-h-[48px] ${
                    isStepValid()
                      ? "bg-[#FACF2D] text-black hover:bg-black hover:text-white"
                      : "bg-gray-300 text-gray-500 cursor-not-allowed"
                  }`}
                  onClick={() => {
                    if (isStepValid()) handleStepChange(currentStep + 1);
                  }}
                  disabled={!isStepValid()}
                >
                  Continue
                  <ChevronRight className="ml-2 w-5 h-5" />
                </motion.button>
              )}
            </div>
          </motion.div>

          {/* Persistent Price Sidebar (desktop) */}
          <div className="hidden lg:block w-72 shrink-0">
            <div className="sticky top-24 bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
              <div className="bg-gradient-to-br from-[#FACF2D] to-[#FFE17D] p-5">
                <h3 className="font-bold text-gray-900 text-lg">{packageInfo.title}</h3>
                <p className="text-sm text-gray-700 mt-1">{packageInfo.duration}</p>
              </div>
              <div className="p-5 space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Price per person</span>
                  <span className="font-medium">{packageInfo.price}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Travelers</span>
                  <span className="font-medium">{formData.passengerCount}</span>
                </div>
                <hr />
                <div className="flex justify-between">
                  <span className="font-bold text-gray-900">Total</span>
                  <span className="font-bold text-xl text-gray-900">₹{totalAmount.toLocaleString('en-IN')}</span>
                </div>
              </div>
              <div className="px-5 pb-5 space-y-2">
                <div className="flex items-center gap-2 text-xs text-gray-400">
                  <Shield className="w-3.5 h-3.5" />
                  <span>No payment required now</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-400">
                  <Check className="w-3.5 h-3.5" />
                  <span>Free cancellation</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-400">
                  <MessageCircleMore className="w-3.5 h-3.5" />
                  <span>Replies in ~2 minutes</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;
