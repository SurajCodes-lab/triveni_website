'use client';

import { Car, CheckCircle, Clock } from "lucide-react";
import React from "react";
import { SectionHeader } from "@/components/ui/SectionHeading";

/**
 * WhyChooseUs Component
 *
 * Design System Applied:
 * - Uses SectionHeader for consistent heading typography
 * - Uses design tokens for colors (primary), shadows, spacing
 * - Mobile-first responsive approach
 * - Consistent icon sizing and styling
 */

const features = [
  {
    icon: Car,
    title: "Premium Fleet",
    description: "Well-maintained vehicles from leading brands, regularly serviced and sanitized for your comfort and safety."
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Round-the-clock customer support to assist you with any queries or concerns during your rental period."
  },
  {
    icon: CheckCircle,
    title: "Flexible Rentals",
    description: "Choose from daily, weekly, or monthly rental options with transparent pricing and no hidden charges."
  }
];

const WhyChooseUs = () => (
  <section className="py-section-sm md:py-section-lg bg-white">
    <div className="max-w-container mx-auto px-4">
      <SectionHeader
        title="Why Choose Our Rental Service"
        level={2}
        align="center"
        withUnderline={true}
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <article
              key={index}
              className="text-center p-6 md:p-8 bg-white rounded-card-lg shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-normal group"
            >
              {/* Icon Container - Consistent 64px size */}
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-normal shadow-primary">
                <Icon className="w-8 h-8 text-black" aria-hidden="true" />
              </div>

              {/* Title - Using heading-sm for card titles */}
              <h3 className="text-heading-sm md:text-heading-md font-semibold mb-4 text-content">
                {feature.title}
              </h3>

              {/* Description - Using body-md for readability */}
              <p className="text-body-md text-content-secondary leading-relaxed">
                {feature.description}
              </p>
            </article>
          );
        })}
      </div>
    </div>
  </section>
);

export default WhyChooseUs;
