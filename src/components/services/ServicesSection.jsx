'use client';

import React from "react";
// Centralized icon imports for better bundle optimization
import { Star } from "@/components/ui/icons";
import { services } from "../../utilis/data";
import VehicleServices from "./VehicleServices";
import CitiesSection from "../cities/CitiesSection";
import TourPackage from "./TourPackage";
import CarRentalSection from "../trip/carRent/CarRentalSection";
import { motion } from "framer-motion";
import dynamic from 'next/dynamic';
const TaxiServiceGrid = dynamic(() => import('../cities/Taxiservicegrid'), {
  loading: () => <div className="min-h-[400px] animate-pulse bg-gray-100 rounded-xl" />,
});
import { SectionHeader } from "@/components/ui/SectionHeading";

const ServicesSection = () => {
  return (
    <>
      {/* Tour Package Component */}
      <TourPackage />


      {/* all services */}
      <section className="py-section-sm md:py-section-lg bg-gradient-to-b from-white to-primary-100">
        <div className="max-w-container mx-auto px-4">
          <SectionHeader
            title="Complete Taxi Services - Affordable Car Rental & Transportation Solutions"
            subtitle="From local city rides to long-distance travel, we provide comprehensive taxi and cab booking services across India. Sedan, SUV, Tempo Traveller available 24/7."
            level={2}
            align="center"
            withUnderline={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8" role="list" aria-label="Available taxi services">
            {services.map((service, index) => (
              <article
                key={index}
                className="bg-white p-4 md:p-6 rounded-card shadow-card hover:shadow-card-hover transition-all duration-normal"
                role="listitem"
              >
                <header className="flex items-center mb-4">
                  <div className="p-2 bg-primary-100 rounded-card">
                    {service.icon}
                  </div>
                  <h3 className="text-heading-xs md:text-heading-sm lg:text-heading-md font-bold ml-3">
                    {service.title} - Taxi Service
                  </h3>
                </header>

                <p className="text-content-secondary text-body-sm md:text-body-md mb-4">
                  {service.description}
                </p>

                <ul className="space-y-2" role="list" aria-label={`${service.title} features`}>
                  {service.items.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-center text-body-xs md:text-body-sm"
                      role="listitem"
                    >
                      <Star className="w-4 h-4 text-primary mr-2 flex-shrink-0" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>
      
      {/* Vehicle Services Component */}
      <VehicleServices />
      
      {/* Car Rental Section with Motion */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <CarRentalSection />
      </motion.div>
      
      {/* Cities Section Component */}
      <TaxiServiceGrid />
    </>
  );
};

export default ServicesSection;