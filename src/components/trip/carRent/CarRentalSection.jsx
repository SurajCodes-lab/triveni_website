"use client";

import React, { useState } from "react";
import CarSlider from "./CarSlider";
import CarSliderStandard from "./CarSliderStandard";
import {
  luxuryBuses,
  luxuryCars,
  simpleBuses,
  standardCars,
  tempoTravellers,
} from "../../../utilis/data";
import { SectionHeader } from "@/components/ui/SectionHeading";

/**
 * CarRentalSection Component
 *
 * Design System Applied:
 * - Consistent section spacing (py-section-sm/lg)
 * - Container width (max-w-container)
 * - SectionHeader for unified heading typography
 * - Alternating backgrounds for visual separation
 */

const vehicleSections = [
  {
    id: "standard-cars",
    title: "Standard Car Rentals - Affordable Taxi Service",
    subtitle: "Choose from our fleet of reliable and comfortable standard vehicles for your daily transportation needs",
    data: standardCars,
    sliderType: "standard",
    sliderTitle: "Standard Cars",
    bgClass: "bg-white",
  },
  {
    id: "luxury-cars",
    title: "Luxury Car Rentals - Premium Taxi Experience",
    subtitle: "Experience luxury and comfort with our premium fleet of high-end vehicles and professional chauffeur service",
    data: luxuryCars,
    sliderType: "luxury",
    sliderTitle: "Luxury Cars",
    bgClass: "bg-surface-secondary",
  },
  {
    id: "tempo-traveller",
    title: "Tempo Traveller Rentals",
    subtitle: "Perfect for group travel and family trips with spacious, comfortable tempo travellers and experienced drivers",
    data: tempoTravellers,
    sliderType: "standard",
    sliderTitle: "Tempo Travellers",
    bgClass: "bg-white",
  },
  {
    id: "luxury-bus",
    title: "Luxury Bus Rentals",
    subtitle: "Experience luxury group travel with our premium fleet of high-end buses equipped with modern amenities",
    data: luxuryBuses,
    sliderType: "luxury",
    sliderTitle: "Luxury Buses",
    bgClass: "bg-surface-secondary",
  },
  {
    id: "simple-bus",
    title: "Standard Bus Rentals",
    subtitle: "Affordable and reliable bus rental service for large groups, events, and corporate transportation needs",
    data: simpleBuses,
    sliderType: "standard",
    sliderTitle: "Standard Buses",
    bgClass: "bg-white",
  },
];

function CarRentalSection() {
  const [indices, setIndices] = useState({
    "standard-cars": 0,
    "luxury-cars": 0,
    "tempo-traveller": 0,
    "luxury-bus": 0,
    "simple-bus": 0,
  });

  const updateIndex = (id, newIndex) => {
    setIndices(prev => ({ ...prev, [id]: newIndex }));
  };

  return (
    <div>
      {vehicleSections.map((section) => (
        <section
          key={section.id}
          className={`py-section-sm md:py-section-lg ${section.bgClass}`}
          aria-labelledby={`${section.id}-heading`}
        >
          <div className="max-w-container mx-auto px-4">
            <SectionHeader
              title={section.title}
              subtitle={section.subtitle}
              level={3}
              align="center"
              withUnderline={true}
              titleClassName="text-heading-lg md:text-heading-xl"
            />

            {section.sliderType === "luxury" ? (
              <CarSlider
                cars={section.data}
                currentIndex={indices[section.id]}
                setCurrentIndex={(idx) => updateIndex(section.id, idx)}
                title={section.sliderTitle}
              />
            ) : (
              <CarSliderStandard
                cars={section.data}
                currentIndex={indices[section.id]}
                setCurrentIndex={(idx) => updateIndex(section.id, idx)}
                title={section.sliderTitle}
              />
            )}
          </div>
        </section>
      ))}
    </div>
  );
}

export default CarRentalSection;
