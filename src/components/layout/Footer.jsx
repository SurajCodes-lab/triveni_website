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
    { name: "Airport Transfer", href: "/airport-service" },
    { name: "Tempo Traveller", href: "/tempo-traveller" },
    { name: "Wedding Cars", href: "/wedding" },
    { name: "Religious Tours", href: "/religious-tours" },
    { name: "Bus Routes", href: "/bus-routes" }
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
    <footer className="bg-gradient-to-br from-gray-900 via-black to-gray-900 text-gray-300 relative overflow-hidden" role="contentinfo">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#FACF2D]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl"></div>

      {/* Top Section */}
      <div className="border-b border-gray-800 relative z-10">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-6 flex items-center flex-col">
              <div className="relative group">
                <div className="absolute -inset-2 bg-gradient-to-r from-[#FACF2D] to-amber-400 rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
                <Image src="/images/logo/logo2.webp" alt="Triveni Cabs Logo" width={80} height={80} quality={100} className="h-20 w-auto relative" />
              </div>
              <p className="text-sm text-center leading-relaxed text-gray-300">
                Your trusted travel partner providing premium transportation services across India since 2015.
              </p>
              <div className="flex items-center justify-center space-x-3" role="group" aria-label="Social media links">
                <a
                  href="https://facebook.com/trivenicabs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 min-w-[48px] min-h-[48px] bg-gradient-to-br from-[#FACF2D] to-amber-400 rounded-full hover:shadow-lg hover:shadow-[#FACF2D]/50 hover:scale-110 transition-all duration-300 group flex items-center justify-center focus-visible:ring-2 focus-visible:ring-[#FACF2D] focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                  onClick={() => handleSocialClick('facebook')}
                  aria-label="Visit our Facebook page (opens in new tab)"
                >
                  <Facebook className="w-5 h-5 text-black" aria-hidden="true" />
                </a>
                <a
                  href="https://instagram.com/trivenicabs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 min-w-[48px] min-h-[48px] bg-gradient-to-br from-[#FACF2D] to-amber-400 rounded-full hover:shadow-lg hover:shadow-[#FACF2D]/50 hover:scale-110 transition-all duration-300 flex items-center justify-center focus-visible:ring-2 focus-visible:ring-[#FACF2D] focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                  onClick={() => handleSocialClick('instagram')}
                  aria-label="Visit our Instagram page (opens in new tab)"
                >
                  <Instagram className="w-5 h-5 text-black" aria-hidden="true" />
                </a>
                <a
                  href="https://twitter.com/trivenicabs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 min-w-[48px] min-h-[48px] bg-gradient-to-br from-[#FACF2D] to-amber-400 rounded-full hover:shadow-lg hover:shadow-[#FACF2D]/50 hover:scale-110 transition-all duration-300 flex items-center justify-center focus-visible:ring-2 focus-visible:ring-[#FACF2D] focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                  onClick={() => handleSocialClick('twitter')}
                  aria-label="Visit our Twitter page (opens in new tab)"
                >
                  <Twitter className="w-5 h-5 text-black" aria-hidden="true" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <nav className="md:ps-5" aria-label="Footer quick links">
              <h3 className="text-transparent bg-gradient-to-r from-[#FACF2D] to-amber-300 bg-clip-text text-start font-bold mb-6 text-lg">Quick Links</h3>
              <ul className="space-y-1">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="flex items-center text-sm text-gray-300 hover:text-[#FACF2D] hover:bg-gray-800/50 transition-all duration-300 group py-3 px-3 min-h-[48px] rounded-lg focus-visible:ring-2 focus-visible:ring-[#FACF2D] focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                      onClick={() => handleFooterLinkClick(link.name, link.href)}
                    >
                      <ChevronRight className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform text-[#FACF2D]" aria-hidden="true" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Services */}
            <nav aria-label="Footer services links">
              <h3 className="text-transparent bg-gradient-to-r from-[#FACF2D] to-amber-300 bg-clip-text text-start font-bold mb-6 text-lg">Our Services</h3>
              <ul className="space-y-1">
                {services.map((service) => (
                  <li key={service.name}>
                    <Link
                      href={service.href}
                      className="flex items-center text-sm text-gray-300 hover:text-[#FACF2D] hover:bg-gray-800/50 transition-all duration-300 group py-3 px-3 min-h-[48px] rounded-lg focus-visible:ring-2 focus-visible:ring-[#FACF2D] focus-visible:ring-offset-2 focus-visible:ring-offset-black"
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
              <h3 className="text-transparent bg-gradient-to-r from-[#FACF2D] to-amber-300 bg-clip-text text-start font-bold mb-6 text-lg">Contact Us</h3>
              <address className="not-italic space-y-3">
                <a
                  href="tel:+917668570551"
                  onClick={handlePhoneClick}
                  className="flex items-center space-x-3 hover:bg-gray-800/50 transition-all duration-300 py-3 px-3 rounded-lg group focus-visible:ring-2 focus-visible:ring-[#FACF2D] focus-visible:ring-offset-2 focus-visible:ring-offset-black min-h-[48px]"
                  aria-label="Call us at +91 76685 70551"
                >
                  <div className="bg-gradient-to-br from-[#FACF2D] to-amber-400 p-2.5 rounded-full flex items-center justify-center min-w-[36px] min-h-[36px] group-hover:scale-110 transition-transform shadow-lg" aria-hidden="true">
                    <Phone className="w-4 h-4 text-black" />
                  </div>
                  <span className="text-gray-300 text-sm group-hover:text-[#FACF2D] transition-colors">+91 76685 70551</span>
                </a>
                <a
                  href="mailto:cabstriveni@gmail.com"
                  onClick={handleEmailClick}
                  className="flex items-center space-x-3 hover:bg-gray-800/50 transition-all duration-300 py-3 px-3 rounded-lg group focus-visible:ring-2 focus-visible:ring-[#FACF2D] focus-visible:ring-offset-2 focus-visible:ring-offset-black min-h-[48px]"
                  aria-label="Email us at cabstriveni@gmail.com"
                >
                  <div className="bg-gradient-to-br from-[#FACF2D] to-amber-400 p-2.5 rounded-full flex items-center justify-center min-w-[36px] min-h-[36px] group-hover:scale-110 transition-transform shadow-lg" aria-hidden="true">
                    <Mail className="w-4 h-4 text-black" />
                  </div>
                  <span className="text-sm text-start text-gray-300 group-hover:text-[#FACF2D] transition-colors break-all">cabstriveni@gmail.com</span>
                </a>
                <div className="flex items-start space-x-3 py-3 px-3 hover:bg-gray-800/50 rounded-lg transition-all duration-300">
                  <div className="bg-gradient-to-br from-[#FACF2D] to-amber-400 p-2.5 rounded-full flex items-center justify-center min-w-[36px] min-h-[36px] mt-0.5 shadow-lg" aria-hidden="true">
                    <MapPin className="w-4 h-4 text-black" />
                  </div>
                  <span className="text-start text-sm text-gray-300">
                    366, Dandupura, near Tajganj, Agra, Uttar Pradesh 282006, India
                  </span>
                </div>
              </address>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="max-w-7xl mx-auto px-4 py-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start gap-2">
            <p className="text-sm text-gray-300 text-center md:text-left">
              © {new Date().getFullYear()} Triveni Cabs. All rights reserved.
            </p>
            <p className="text-xs text-gray-500 text-center md:text-left">
              Made with ❤️ in India
            </p>
          </div>
          <nav className="flex flex-col sm:flex-row gap-4 sm:gap-6" aria-label="Footer legal links">
            <Link
              href="/privacy-policy"
              className="text-sm text-gray-300 hover:text-[#FACF2D] hover:bg-gray-800/50 transition-all duration-300 py-2 px-4 rounded-lg focus-visible:ring-2 focus-visible:ring-[#FACF2D] focus-visible:ring-offset-2 focus-visible:ring-offset-black text-center min-h-[44px] flex items-center justify-center"
              onClick={() => handleFooterLinkClick('Privacy Policy', '/privacy-policy')}
            >
              Privacy Policy
            </Link>
            <Link
              href="/cancellation-and-refund-policy"
              className="text-sm text-gray-300 hover:text-[#FACF2D] hover:bg-gray-800/50 transition-all duration-300 py-2 px-4 rounded-lg focus-visible:ring-2 focus-visible:ring-[#FACF2D] focus-visible:ring-offset-2 focus-visible:ring-offset-black text-center min-h-[44px] flex items-center justify-center"
              onClick={() => handleFooterLinkClick('Refund & Cancellation Policy', '/cancellation-and-refund-policy')}
            >
              Refund & Cancellation
            </Link>
            <Link
              href="/terms-and-conditions"
              className="text-sm text-gray-300 hover:text-[#FACF2D] hover:bg-gray-800/50 transition-all duration-300 py-2 px-4 rounded-lg focus-visible:ring-2 focus-visible:ring-[#FACF2D] focus-visible:ring-offset-2 focus-visible:ring-offset-black text-center min-h-[44px] flex items-center justify-center"
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
