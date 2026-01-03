"use client";

import { useState, useEffect } from "react";
import { tourPackages } from "@/utilis/data";
import {
  Calendar,
  ChevronLeft,
  ChevronRight,
  MapPin,
  Star,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Button from "@/components/ui/Button";
import { SectionHeader } from "@/components/ui/SectionHeading";

export default function TourPackage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleSlides, setVisibleSlides] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleSlides(1);
      } else if (window.innerWidth < 1024) {
        setVisibleSlides(2);
      } else {
        setVisibleSlides(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, tourPackages.length - visibleSlides);

  const nextSlide = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  // Function to handle WhatsApp redirect
  const handleWhatsAppBooking = (pkg) => {
    const phoneNumber = "7668570551";
    const message = `Hi! I'm interested in booking the "${pkg.title}" tour package.
    
Details:
- Package: ${pkg.title}
- Price: ${pkg.price}
- Duration: ${pkg.duration}
- Route: ${pkg.startingPoint} to ${pkg.destination}
- Departure: ${pkg.departureDate}

Please provide more information and booking details.`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div>
      {/* tour package */}
      <section className="py-section-sm md:py-section-lg bg-gradient-to-b from-white to-primary-100">
        <div className="max-w-container mx-auto px-4">
          <SectionHeader
            title="Featured Tour Packages - Book Your Adventure Today"
            subtitle="Discover amazing destinations with our carefully curated travel packages and professional taxi services"
            level={3}
            align="center"
            withUnderline={true}
          />

          <div className="relative">
            {currentIndex > 0 && (
              <button
                onClick={prevSlide}
                className="absolute -left-2 md:-left-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 p-2 rounded-full text-white hover:bg-primary hover:text-black transition-all duration-normal min-w-[44px] min-h-[44px] flex items-center justify-center"
                aria-label="Previous tour packages"
              >
                <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
              </button>
            )}

            {currentIndex < maxIndex && (
              <button
                onClick={nextSlide}
                className="absolute -right-2 md:-right-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 p-2 rounded-full text-white hover:bg-primary hover:text-black transition-all duration-normal min-w-[44px] min-h-[44px] flex items-center justify-center"
                aria-label="Next tour packages"
              >
                <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
              </button>
            )}

            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{
                  transform: `translateX(-${
                    currentIndex * (100 / visibleSlides)
                  }%)`,
                }}
                role="list"
                aria-label="Tour packages carousel"
              >
                {tourPackages.map((pkg, index) => (
                  <article
                    key={index}
                    className="w-full sm:w-1/2 lg:w-1/3 flex-shrink-0 px-2 md:px-4"
                    role="listitem"
                  >
                    <div className="bg-white rounded-card-lg shadow-card overflow-hidden hover:-translate-y-2 hover:shadow-card-hover transition-all duration-normal">
                      <div className="relative h-40 md:h-48">
                        <Image
                          src={pkg.image}
                          alt={`${pkg.title} - Tour package with taxi service included`}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          className="object-cover"
                        />
                        <div className="absolute top-2 md:top-4 right-2 md:right-4 bg-primary text-black px-2 md:px-3 py-1 rounded-badge text-label-sm font-semibold">
                          {pkg.category}
                        </div>
                      </div>
                      <div className="p-4 md:p-6">
                        <header>
                          <h4 className="text-heading-xs md:text-heading-sm font-semibold mb-2">
                            {pkg.title} - Complete Travel Package
                          </h4>
                        </header>

                        <div className="text-heading-sm md:text-heading-md font-bold text-primary mb-3">
                          {pkg.price}
                        </div>

                        <div className="space-y-2 text-content-secondary text-body-xs md:text-body-sm">
                          <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-2 text-primary flex-shrink-0" aria-hidden="true" />
                            <span>{pkg.duration}</span>
                          </div>
                          <div className="flex items-center">
                            <MapPin className="w-4 h-4 mr-2 text-primary flex-shrink-0" aria-hidden="true" />
                            <span>
                              {pkg.startingPoint} to {pkg.destination}
                            </span>
                          </div>
                          <div className="flex items-center">
                            <Star className="w-4 h-4 mr-2 text-primary flex-shrink-0" aria-hidden="true" />
                            <span>Departure: {pkg.departureDate}</span>
                          </div>
                        </div>

                        <div className="mt-4 md:mt-6 flex gap-2">
                          <Button
                            onClick={() => handleWhatsAppBooking(pkg)}
                            variant="secondary"
                            size="sm"
                            className="flex-1"
                            ariaLabel={`Book ${pkg.title} tour package via WhatsApp`}
                          >
                            Book Now
                          </Button>
                          <Button
                            href={`/tour-package/${pkg.title.toLowerCase().replace(/ /g, "-")}`}
                            variant="outline-primary"
                            size="sm"
                            className="flex-1"
                            ariaLabel={`View details of ${pkg.title} tour package`}
                          >
                            View Details
                          </Button>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}