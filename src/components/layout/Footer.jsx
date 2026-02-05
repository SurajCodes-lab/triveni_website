'use client';

import React from "react";
import Link from "next/link";
import Image from "next/image";
// Centralized icon imports for better bundle optimization
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Clock, ChevronRight, Car, MapPinned, Plane, Building2 } from "@/components/ui/icons";
import { trackNavigation, trackSocialClick, trackPhoneCall, trackButtonClick } from "@/utilis/analytics";
import { cn } from "@/utilis/cn";

const Footer = () => {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Our Vehicles", href: "/vehicles" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" }
  ];

  const services = [
    { name: "Airport Transfer", href: "/airport-service" },
    { name: "Tempo Traveller", href: "/tempo-traveller" },
    { name: "Wedding Cars", href: "/wedding" },
    { name: "Corporate Transport", href: "/corporate-transportation-service" },
    { name: "Event Transport", href: "/event-transportation-service" },
    { name: "Sightseeing Tours", href: "/sightseeing" },
    { name: "Religious Tours", href: "/religious-tours" },
    { name: "Bus Hire", href: "/bus-routes" }
  ];

  // Popular Routes - High traffic internal links
  const popularRoutes = [
    { name: "Delhi to Agra", href: "/delhi-to-agra" },
    { name: "Delhi to Jaipur", href: "/delhi-to-jaipur" },
    { name: "Jaipur to Agra", href: "/jaipur-to-agra" },
    { name: "Delhi to Chandigarh", href: "/delhi-to-chandigarh" },
    { name: "Delhi to Haridwar", href: "/delhi-to-haridwar" },
    { name: "Delhi to Shimla", href: "/delhi-to-shimla" },
    { name: "Delhi to Manali", href: "/delhi-to-manali" },
    { name: "Chandigarh to Shimla", href: "/chandigarh-to-shimla" },
    { name: "Chandigarh to Manali", href: "/chandigarh-to-manali" },
    { name: "Delhi to Amritsar", href: "/delhi-to-amritsar" }
  ];

  // Popular Cities - Service area links
  const popularCities = [
    { name: "Delhi", href: "/delhi" },
    { name: "Jaipur", href: "/jaipur" },
    { name: "Agra", href: "/agra" },
    { name: "Chandigarh", href: "/chandigarh" },
    { name: "Shimla", href: "/shimla" },
    { name: "Manali", href: "/manali" },
    { name: "Amritsar", href: "/amritsar" },
    { name: "Haridwar", href: "/haridwar" },
    { name: "Rishikesh", href: "/rishikesh" },
    { name: "Dehradun", href: "/dehradun" },
    { name: "Udaipur", href: "/udaipur" },
    { name: "Varanasi", href: "/varanasi" },
    { name: "Ahmedabad", href: "/ahmedabad" },
    { name: "Lucknow", href: "/lucknow" }
  ];

  // Popular Tours - Sightseeing links (matching actual slugs from sightseeingData.js)
  const popularTours = [
    { name: "Delhi City Tour", href: "/sightseeing/delhi-full-day-city-tour" },
    { name: "Jaipur Full Day Tour", href: "/sightseeing/jaipur-full-day-city-tour" },
    { name: "Agra Taj Mahal Tour", href: "/sightseeing/agra-full-day-city-tour" },
    { name: "Golden Triangle Tour", href: "/sightseeing/golden-triangle-tour-3-days" },
    { name: "Shimla Kufri Tour", href: "/sightseeing/shimla-kufri-tour" },
    { name: "Manali Solang Tour", href: "/sightseeing/manali-solang-valley-tour" },
    { name: "Amritsar Golden Temple", href: "/sightseeing/amritsar-golden-temple-wagah-border-tour" },
    { name: "Haridwar Rishikesh Tour", href: "/sightseeing/haridwar-rishikesh-same-day" }
  ];

  const eventCities = [
    { name: "Delhi Events", href: "/event-transportation-service/city/delhi" },
    { name: "Jaipur Events", href: "/event-transportation-service/city/jaipur" },
    { name: "Chandigarh Events", href: "/event-transportation-service/city/chandigarh" },
    { name: "Agra Events", href: "/event-transportation-service/city/agra" },
    { name: "Dehradun Events", href: "/event-transportation-service/city/dehradun" }
  ];

  const vehicleLinks = [
    { name: "Sedan", href: "/vehicles/sedan" },
    { name: "SUV", href: "/vehicles/suv" },
    { name: "Tempo Traveller", href: "/vehicles/tempo-traveller" },
    { name: "Bus", href: "/vehicles/bus" },
    { name: "Sedan vs SUV", href: "/sedan-vs-suv" },
    { name: "Tempo vs Bus", href: "/tempo-vs-bus" }
  ];

  const handleFooterLinkClick = (linkName, href) => {
    trackNavigation(linkName, href, 'footer');
  };

  const handleSocialClick = (platform) => {
    trackSocialClick(platform, 'footer');
  };

  const handlePhoneClick = () => {
    trackPhoneCall('footer', '7668570551');
  };

  const handleEmailClick = () => {
    trackButtonClick('email_contact', 'footer', 'mailto:cabstriveni@gmail.com');
  };

  // Common styles for footer links
  const footerLinkClasses = "flex items-center text-body-sm text-gray-300 hover:text-primary hover:bg-gray-800/50 transition-all duration-normal py-3 px-3 min-h-[48px] rounded-card focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-black";

  // Common styles for social icons
  const socialIconClasses = "p-3 min-w-[48px] min-h-[48px] bg-gradient-to-br from-primary to-primary-dark rounded-full hover:shadow-primary-lg hover:scale-110 transition-all duration-normal flex items-center justify-center focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-black";

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-black to-gray-900 text-gray-300 relative overflow-hidden" role="contentinfo">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-dark/5 rounded-full blur-3xl"></div>

      {/* SEO Links Section - Popular Routes, Cities, Tours */}
      <div className="border-b border-gray-800 relative z-10 bg-gray-900/50">
        <div className="max-w-container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Popular Routes */}
            <div>
              <h3 className="text-white font-semibold mb-4 flex items-center gap-2 text-sm">
                <Car className="w-4 h-4 text-primary" aria-hidden="true" />
                Popular Routes
              </h3>
              <ul className="flex flex-wrap gap-2">
                {popularRoutes.map((route) => (
                  <li key={route.name}>
                    <Link
                      href={route.href}
                      className="text-body-xs text-gray-400 hover:text-primary transition-colors duration-fast px-2 py-1 bg-gray-800/50 rounded hover:bg-gray-800"
                      onClick={() => handleFooterLinkClick(route.name, route.href)}
                    >
                      {route.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Popular Cities */}
            <div>
              <h3 className="text-white font-semibold mb-4 flex items-center gap-2 text-sm">
                <MapPinned className="w-4 h-4 text-primary" aria-hidden="true" />
                Service Cities
              </h3>
              <ul className="flex flex-wrap gap-2">
                {popularCities.map((city) => (
                  <li key={city.name}>
                    <Link
                      href={city.href}
                      className="text-body-xs text-gray-400 hover:text-primary transition-colors duration-fast px-2 py-1 bg-gray-800/50 rounded hover:bg-gray-800"
                      onClick={() => handleFooterLinkClick(city.name, city.href)}
                    >
                      {city.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Popular Tours */}
            <div>
              <h3 className="text-white font-semibold mb-4 flex items-center gap-2 text-sm">
                <MapPin className="w-4 h-4 text-primary" aria-hidden="true" />
                Popular Tours
              </h3>
              <ul className="flex flex-wrap gap-2">
                {popularTours.map((tour) => (
                  <li key={tour.name}>
                    <Link
                      href={tour.href}
                      className="text-body-xs text-gray-400 hover:text-primary transition-colors duration-fast px-2 py-1 bg-gray-800/50 rounded hover:bg-gray-800"
                      onClick={() => handleFooterLinkClick(tour.name, tour.href)}
                    >
                      {tour.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Top Section */}
      <div className="border-b border-gray-800 relative z-10">
        <div className="max-w-container mx-auto px-4 py-section-sm md:py-section-md">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-6 flex items-center flex-col">
              <div className="relative group">
                <div className="absolute -inset-2 bg-gradient-to-r from-primary to-primary-dark rounded-card-lg blur opacity-25 group-hover:opacity-50 transition duration-normal"></div>
                <Image src="/images/logo/logo2.webp" alt="Triveni Cabs Logo" width={80} height={80} quality={100} placeholder="blur" blurDataURL="data:image/jpeg;base64,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" className="h-20 w-auto relative" />
              </div>
              <p className="text-body-sm text-center leading-relaxed text-gray-300">
                Your trusted travel partner providing premium transportation services across India since 2015.
              </p>
              <div className="flex items-center justify-center space-x-3" role="group" aria-label="Social media links">
                <a
                  href="https://facebook.com/trivenicabs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={socialIconClasses}
                  onClick={() => handleSocialClick('facebook')}
                  aria-label="Visit our Facebook page (opens in new tab)"
                >
                  <Facebook className="w-5 h-5 text-black" aria-hidden="true" />
                </a>
                <a
                  href="https://www.instagram.com/cabstriveni?igsh=YzlzYmZsZjZ5bnlo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={socialIconClasses}
                  onClick={() => handleSocialClick('instagram')}
                  aria-label="Visit our Instagram page (opens in new tab)"
                >
                  <Instagram className="w-5 h-5 text-black" aria-hidden="true" />
                </a>
                <a
                  href="https://twitter.com/trivenicabs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={socialIconClasses}
                  onClick={() => handleSocialClick('twitter')}
                  aria-label="Visit our Twitter page (opens in new tab)"
                >
                  <Twitter className="w-5 h-5 text-black" aria-hidden="true" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <nav className="md:ps-5" aria-label="Footer quick links">
              <h3 className="text-transparent bg-gradient-to-r from-primary to-primary-light bg-clip-text text-start font-bold mb-6 text-heading-xs">Quick Links</h3>
              <ul className="space-y-1">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className={cn(footerLinkClasses, "group")}
                      onClick={() => handleFooterLinkClick(link.name, link.href)}
                    >
                      <ChevronRight className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform text-primary" aria-hidden="true" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Services */}
            <nav aria-label="Footer services links">
              <h3 className="text-transparent bg-gradient-to-r from-primary to-primary-light bg-clip-text text-start font-bold mb-6 text-heading-xs">Our Services</h3>
              <ul className="space-y-1">
                {services.map((service) => (
                  <li key={service.name}>
                    <Link
                      href={service.href}
                      className={cn(footerLinkClasses, "group")}
                      onClick={() => handleFooterLinkClick(service.name, service.href)}
                    >
                      <Clock className="w-4 h-4 mr-2 text-primary group-hover:rotate-12 transition-transform" aria-hidden="true" />
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
              {/* Vehicles Sub-section */}
              <h4 className="text-gray-400 text-start font-semibold mt-6 mb-3 text-body-sm">Vehicles</h4>
              <ul className="flex flex-wrap gap-2">
                {vehicleLinks.map((vehicle) => (
                  <li key={vehicle.name}>
                    <Link
                      href={vehicle.href}
                      className="text-body-xs text-gray-400 hover:text-primary transition-colors duration-fast px-2 py-1 bg-gray-800/30 rounded-button hover:bg-gray-800/50"
                      onClick={() => handleFooterLinkClick(vehicle.name, vehicle.href)}
                    >
                      {vehicle.name}
                    </Link>
                  </li>
                ))}
              </ul>
              {/* Event Cities Sub-section */}
              <h4 className="text-gray-400 text-start font-semibold mt-6 mb-3 text-body-sm">Event Cities</h4>
              <ul className="flex flex-wrap gap-2">
                {eventCities.map((city) => (
                  <li key={city.name}>
                    <Link
                      href={city.href}
                      className="text-body-xs text-gray-400 hover:text-primary transition-colors duration-fast px-2 py-1 bg-gray-800/30 rounded-button hover:bg-gray-800/50"
                      onClick={() => handleFooterLinkClick(city.name, city.href)}
                    >
                      {city.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Contact Info */}
            <div className="space-y-6">
              <h3 className="text-transparent bg-gradient-to-r from-primary to-primary-light bg-clip-text text-start font-bold mb-6 text-heading-xs">Contact Us</h3>
              <address className="not-italic space-y-3">
                <a
                  href="tel:+917668570551"
                  onClick={handlePhoneClick}
                  className="flex items-center space-x-3 hover:bg-gray-800/50 transition-all duration-normal py-3 px-3 rounded-card group focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-black min-h-[48px]"
                  aria-label="Call us at +91 76685 70551"
                >
                  <div className="bg-gradient-to-br from-primary to-primary-dark p-2.5 rounded-full flex items-center justify-center min-w-[36px] min-h-[36px] group-hover:scale-110 transition-transform shadow-lg" aria-hidden="true">
                    <Phone className="w-4 h-4 text-black" />
                  </div>
                  <span className="text-gray-300 text-body-sm group-hover:text-primary transition-colors">+91 76685 70551</span>
                </a>
                <a
                  href="mailto:cabstriveni@gmail.com"
                  onClick={handleEmailClick}
                  className="flex items-center space-x-3 hover:bg-gray-800/50 transition-all duration-normal py-3 px-3 rounded-card group focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-black min-h-[48px]"
                  aria-label="Email us at cabstriveni@gmail.com"
                >
                  <div className="bg-gradient-to-br from-primary to-primary-dark p-2.5 rounded-full flex items-center justify-center min-w-[36px] min-h-[36px] group-hover:scale-110 transition-transform shadow-lg" aria-hidden="true">
                    <Mail className="w-4 h-4 text-black" />
                  </div>
                  <span className="text-body-sm text-start text-gray-300 group-hover:text-primary transition-colors break-all">cabstriveni@gmail.com</span>
                </a>
                <div className="flex items-start space-x-3 py-3 px-3 hover:bg-gray-800/50 rounded-card transition-all duration-normal">
                  <div className="bg-gradient-to-br from-primary to-primary-dark p-2.5 rounded-full flex items-center justify-center min-w-[36px] min-h-[36px] mt-0.5 shadow-lg" aria-hidden="true">
                    <MapPin className="w-4 h-4 text-black" />
                  </div>
                  <span className="text-start text-body-sm text-gray-300">
                    366, Dandupura, near Tajganj, Agra, Uttar Pradesh 282006, India
                  </span>
                </div>
              </address>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="max-w-container mx-auto px-4 py-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start gap-2">
            <p className="text-body-sm text-gray-300 text-center md:text-left">
              © {new Date().getFullYear()} Triveni Cabs. All rights reserved.
            </p>
            <p className="text-body-xs text-gray-500 text-center md:text-left">
              Made with love in India
            </p>
          </div>
          <nav className="flex flex-col sm:flex-row gap-4 sm:gap-6" aria-label="Footer legal links">
            {[
              { href: '/privacy-policy', label: 'Privacy Policy' },
              { href: '/cancellation-and-refund-policy', label: 'Refund & Cancellation' },
              { href: '/terms-and-conditions', label: 'Terms of Service' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-body-sm text-gray-300 hover:text-primary hover:bg-gray-800/50 transition-all duration-normal py-2 px-4 rounded-card focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-black text-center min-h-[44px] flex items-center justify-center"
                onClick={() => handleFooterLinkClick(link.label, link.href)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
