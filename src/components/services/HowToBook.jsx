'use client';

import React from "react";
import { SearchCheck, Calendar, CreditCard, Car } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeading";

/**
 * HowToBook Component
 *
 * Design System Applied:
 * - Consistent section padding (py-section-sm/lg)
 * - Container max-width (max-w-container)
 * - Primary color for accents
 * - Unified card styling
 * - Responsive typography scale
 */

const steps = [
  {
    icon: SearchCheck,
    title: "Search & Select",
    description: "Browse our fleet and choose the vehicle that best suits your needs and budget.",
  },
  {
    icon: Calendar,
    title: "Book Your Dates",
    description: "Select your pickup and drop-off dates and times for a hassle-free reservation.",
  },
  {
    icon: CreditCard,
    title: "Secure Payment",
    description: "Complete your booking with our secure payment gateway. Multiple payment options available.",
  },
  {
    icon: Car,
    title: "Enjoy Your Ride",
    description: "Our driver will arrive at your location on time. Just relax and enjoy your journey.",
  },
];

const HowToBook = () => {
  return (
    <section className="py-section-sm md:py-section-lg bg-surface-secondary">
      <div className="max-w-container mx-auto px-4">
        <SectionHeader
          title="How to Book"
          subtitle="Booking your transportation with us is simple, fast, and secure. Follow these easy steps to get started."
          level={2}
          align="center"
          withUnderline={true}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <article
                key={index}
                className="bg-white p-6 md:p-8 rounded-card-lg shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-normal text-center group relative"
              >
                {/* Step Number Badge - Absolute positioned */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-label-md font-bold text-black shadow-primary">
                  {index + 1}
                </div>

                {/* Icon */}
                <div className="flex justify-center mb-4 mt-2">
                  <Icon className="w-12 h-12 text-primary" aria-hidden="true" />
                </div>

                {/* Title */}
                <h3 className="text-heading-sm font-semibold mb-3 text-content">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-body-md text-content-secondary leading-relaxed">
                  {step.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowToBook;
