'use client';

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Clock, ChevronRight } from "lucide-react";
import { trackNavigation, trackSocialClick, trackPhoneCall, trackButtonClick } from "@/utilis/analytics";

const Footer = () => {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    // { name: "Tour Packages", href: "/packages" },
    { name: "Contact", href: "/contact" }
  ];

  const services = [
    // { name: "Local Rides", href: "/services/local-rides" },
    { name: "Airport Transfer", href: "/airport-service" },
    { name: "Outstation Trips", href: "/tempo-traveller" },
    // { name: "Corporate Travel", href: "/services/corporate" },
    { name: "Wedding Cars", href: "/wedding" }
  ];

  const cities = [
    "Mumbai",
    "Delhi",
    "Bangalore",
    "Pune",
    "Hyderabad"
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

  return (
    <footer className="bg-black text-gray-300" role="contentinfo">
      {/* Top Section */}
      <div className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-6 flex items-center flex-col">
              <Image src="/images/logo/logo2.webp" alt="Triveni Cabs Logo" width={64} height={64} quality={100} className="h-16 w-auto" />
              <p className="text-sm text-start leading-relaxed text-gray-200">
                Your trusted travel partner providing premium transportation services across India since 2015.
              </p>
              <div className="flex items-center justify-center space-x-4" role="group" aria-label="Social media links">
                <a
                  href="https://facebook.com/trivenicabs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 min-w-[48px] min-h-[48px] bg-[#FACF2D] rounded-full hover:bg-white transition-colors duration-300 group flex items-center justify-center focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                  onClick={() => handleSocialClick('facebook')}
                  aria-label="Visit our Facebook page (opens in new tab)"
                >
                  <Facebook className="w-5 h-5 text-black" aria-hidden="true" />
                </a>
                <a
                  href="https://instagram.com/trivenicabs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 min-w-[48px] min-h-[48px] bg-[#FACF2D] rounded-full hover:bg-white transition-colors duration-300 flex items-center justify-center focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                  onClick={() => handleSocialClick('instagram')}
                  aria-label="Visit our Instagram page (opens in new tab)"
                >
                  <Instagram className="w-5 h-5 text-black" aria-hidden="true" />
                </a>
                <a
                  href="https://twitter.com/trivenicabs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 min-w-[48px] min-h-[48px] bg-[#FACF2D] rounded-full hover:bg-white transition-colors duration-300 flex items-center justify-center focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                  onClick={() => handleSocialClick('twitter')}
                  aria-label="Visit our Twitter page (opens in new tab)"
                >
                  <Twitter className="w-5 h-5 text-black" aria-hidden="true" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <nav className="md:ps-5" aria-label="Footer quick links">
              <h3 className="text-white text-start font-semibold mb-6">Quick Links</h3>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="flex items-center text-sm text-gray-200 hover:text-[#FACF2D] transition-colors duration-300 group py-2 min-h-[48px] rounded-md focus-visible:ring-2 focus-visible:ring-[#FACF2D] focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                      onClick={() => handleFooterLinkClick(link.name, link.href)}
                    >
                      <ChevronRight className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Services */}
            <nav aria-label="Footer services links">
              <h3 className="text-white text-start font-semibold mb-6">Our Services</h3>
              <ul className="space-y-2">
                {services.map((service) => (
                  <li key={service.name}>
                    <Link
                      href={service.href}
                      className="flex items-center text-sm text-gray-200 hover:text-[#FACF2D] transition-colors duration-300 group py-2 min-h-[48px] rounded-md focus-visible:ring-2 focus-visible:ring-[#FACF2D] focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                      onClick={() => handleFooterLinkClick(service.name, service.href)}
                    >
                      <Clock className="w-4 h-4 mr-2 text-[#FACF2D] group-hover:rotate-12 transition-transform" aria-hidden="true" />
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            {/* Contact Info */}
            <div className="space-y-6">
              <h3 className="text-white text-start font-semibold">Contact Us</h3>
              <address className="not-italic">
                <a
                  href="tel:+917668570551"
                  onClick={handlePhoneClick}
                  className="flex items-center space-x-3 mb-4 hover:text-[#FACF2D] transition-colors duration-300 py-2 rounded-md focus-visible:ring-2 focus-visible:ring-[#FACF2D] focus-visible:ring-offset-2 focus-visible:ring-offset-black min-h-[48px]"
                  aria-label="Call us at +91 76685 70551"
                >
                  <div className="bg-[#FACF2D] p-2 rounded-full flex items-center justify-center min-w-[32px] min-h-[32px]" aria-hidden="true">
                    <Phone className="w-4 h-4 text-black" />
                  </div>
                  <span className="text-gray-200 text-sm">+91 76685 70551</span>
                </a>
                <a
                  href="mailto:cabstriveni@gmail.com"
                  onClick={handleEmailClick}
                  className="flex items-center mb-4 space-x-3 hover:text-[#FACF2D] transition-colors duration-300 py-2 rounded-md focus-visible:ring-2 focus-visible:ring-[#FACF2D] focus-visible:ring-offset-2 focus-visible:ring-offset-black min-h-[48px]"
                  aria-label="Email us at cabstriveni@gmail.com"
                >
                  <div className="bg-[#FACF2D] p-2 rounded-full flex items-center justify-center min-w-[32px] min-h-[32px]" aria-hidden="true">
                    <Mail className="w-4 h-4 text-black" />
                  </div>
                  <span className="text-sm text-start text-gray-200">cabstriveni@gmail.com</span>
                </a>
                <div className="flex items-start space-x-3 text-gray-200 py-2">
                  <div className="bg-[#FACF2D] p-2 rounded-full flex items-center justify-center min-w-[32px] min-h-[32px] mt-1" aria-hidden="true">
                    <MapPin className="w-4 h-4 text-black" />
                  </div>
                  <span className="text-start text-sm">
                    366, Dandupura, near Tajganj, Agra, Uttar Pradesh 282006, India
                  </span>
                </div>
              </address>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-200 text-center md:text-left">
            © 2024 Triveni Cabs. All rights reserved.
          </p>
          <nav className="flex flex-col sm:flex-row gap-4 sm:gap-8" aria-label="Footer legal links">
            <Link
              href="/cancellation-and-refund-policy"
              className="text-sm text-gray-200 hover:text-[#FACF2D] transition-colors duration-300 py-2 px-2 rounded-md focus-visible:ring-2 focus-visible:ring-[#FACF2D] focus-visible:ring-offset-2 focus-visible:ring-offset-black text-center min-h-[44px] flex items-center justify-center"
              onClick={() => handleFooterLinkClick('Refund & Cancellation Policy', '/cancellation-and-refund-policy')}
            >
              Refund & Cancellation Policy
            </Link>
            <Link
              href="/terms-and-conditions"
              className="text-sm text-gray-200 hover:text-[#FACF2D] transition-colors duration-300 py-2 px-2 rounded-md focus-visible:ring-2 focus-visible:ring-[#FACF2D] focus-visible:ring-offset-2 focus-visible:ring-offset-black text-center min-h-[44px] flex items-center justify-center"
              onClick={() => handleFooterLinkClick('Terms of Service', '/terms-and-conditions')}
            >
              Terms of Service
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
