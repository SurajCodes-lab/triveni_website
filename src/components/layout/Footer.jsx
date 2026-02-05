'use client';

import React from "react";
import Link from "next/link";
import Image from "next/image";
// Centralized icon imports for better bundle optimization
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Clock, ChevronRight, Car, MapPinned, Plane, Building2 } from "@/components/ui/icons";
import { trackNavigation, trackSocialClick, trackPhoneCall, trackButtonClick } from "@/utilis/analytics";
import { cn } from "@/utilis/cn";
import { blurDataURL } from "@/utilis/imageUtils";

const Footer = () => {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Pricing", href: "/pricing" },
    { name: "Our Vehicles", href: "/vehicles" },
    { name: "Outstation Routes", href: "/routes" },
    { name: "Tour Packages", href: "/services" },
    { name: "Tour Guide", href: "/tour-guide" },
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
                <Image src="/images/logo/logo2.webp" alt="Triveni Cabs Logo" width={80} height={80} quality={100} placeholder="blur" blurDataURL={blurDataURL} className="h-20 w-auto relative" />
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
