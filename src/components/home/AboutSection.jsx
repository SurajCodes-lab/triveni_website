"use client";

import React from "react";
// Centralized icon imports for better bundle optimization
import { ChevronRight } from "@/components/ui/icons";
import { features } from "../../utilis/data";
import Link from "next/link";
import Image from "next/image";
import Button from "@/components/ui/Button";
import { SectionHeader } from "@/components/ui/SectionHeading";

const AboutSection = () => {
  return (
    <section
      className="about-section bg-gradient-to-br from-primary-100 via-primary-200 to-primary-100 py-section-sm md:py-section-lg"
      aria-labelledby="about-heading"
    >
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <SectionHeader
          title="About Triveni Cabs - Best Taxi Service & Car Rental in India"
          subtitle="Professional car rental and taxi service provider with competitive rates, verified drivers, and 24/7 support across 50+ cities"
          level={2}
          align="center"
          withUnderline={true}
        />

        {/* Main Content Area */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-20 md:mb-24 items-center">
          {/* Content Column */}
          <article className="space-y-8">
            <header>
              <h3 className="text-heading-md md:text-heading-lg lg:text-heading-xl font-bold text-primary-800 mb-6 tracking-tight hover:text-black transition-colors duration-normal">
                Professional Taxi Service Across India - Affordable Car Rental
              </h3>
            </header>

            <div className="prose prose-lg max-w-none">
              <p className="text-content-secondary text-body-lg md:text-body-xl leading-relaxed tracking-wide">
                Welcome to <strong className="text-primary-800">Triveni Cabs</strong>, your trusted taxi service provider dedicated to
                providing seamless, reliable, and comfortable transportation
                solutions. Whether you&apos;re planning a quick ride across the city,
                an outstation journey, or an airport transfer, we are here to
                ensure your travel is smooth, affordable, and enjoyable.
              </p>
            </div>

            {/* Call-to-Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-8">
              <Button
                href="/about"
                variant="secondary"
                size="lg"
                rightIcon={ChevronRight}
                ariaLabel="Learn more about Triveni Cabs taxi service"
              >
                Learn More About Our Service
              </Button>

              <Button
                href="/contact"
                variant="outline"
                size="lg"
                rightIcon={ChevronRight}
                ariaLabel="Contact Triveni Cabs for taxi booking"
              >
                Contact for Booking
              </Button>
            </div>
          </article>

          {/* Image Column */}
          <aside className="relative">
            <div className="relative transform hover:scale-105 transition-transform duration-slow">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary-dark rounded-card-lg opacity-20 blur-lg"></div>
              <Image
                src="/images/about/about_banner.webp"
                alt="Triveni Cabs - Professional taxi service with comfortable vehicles and experienced drivers"
                width={600}
                height={400}
                className="relative rounded-card-lg shadow-card-lg hover:shadow-modal transition-shadow duration-normal w-full h-auto"
                priority
              />
            </div>
          </aside>
        </div>

        {/* Features Section */}
        <section aria-labelledby="features-heading">
          <header className="text-center mb-12">
            <h3
              id="features-heading"
              className="text-heading-md md:text-heading-lg lg:text-heading-xl font-bold text-gray-900 mb-4"
            >
              Why Choose Triveni Cabs - Best Taxi & Car Rental Service
            </h3>
            <p className="text-body-lg text-content-secondary max-w-2xl mx-auto">
              Professional drivers, competitive rates, 24/7 support, and verified vehicles make us your ideal cab booking partner
            </p>
          </header>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {features.map((feature, index) => (
              <article
                key={index}
                className="feature-card bg-white rounded-card-lg shadow-card p-6 md:p-8 transform hover:-translate-y-2 hover:shadow-card-hover transition-all duration-normal cursor-pointer group border border-gray-100 hover:border-primary"
              >
                <header className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-primary-dark rounded-full mb-4 group-hover:scale-110 transition-transform duration-normal shadow-primary">
                    <feature.icon
                      className="w-8 h-8 text-white"
                      aria-hidden="true"
                    />
                  </div>
                  <h4 className="text-heading-sm font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors duration-normal">
                    {feature.title}
                  </h4>
                </header>

                <p className="text-body-md text-content-secondary text-center leading-relaxed group-hover:text-content transition-colors duration-normal">
                  {feature.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* Stats section */}
        <section className="mt-20 text-center" aria-label="Our Service Statistics">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '1000+', label: 'Happy Customers' },
              { value: '50+', label: 'Cities Covered' },
              { value: '24/7', label: 'Taxi Service Available' },
              { value: '5★', label: 'Average Rating' },
            ].map((stat, index) => (
              <div key={index} className="stat-item">
                <div className="text-heading-xl md:text-display-sm font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-content-secondary text-body-md font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
};

export default AboutSection;