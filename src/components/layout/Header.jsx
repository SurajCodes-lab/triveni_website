'use client';

import React, { useState, useEffect, useRef } from "react";
// Centralized icon imports for better bundle optimization
import { Phone, ChevronDown, Menu, X } from "@/components/ui/icons";
import Link from "next/link";
import Image from "next/image";
import { vehiclesServices } from "@/utilis/data";
import { trackNavigation, trackButtonClick, trackPhoneCall, trackModal } from "@/utilis/analytics";
import { cn } from "@/utilis/cn";
import { blurDataURL } from "@/utilis/imageUtils";

// You'll need to import the AuthModal component
// import AuthModal from "@/components/Auth/AuthModal";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const mobileMenuRef = useRef(null);
  const hamburgerButtonRef = useRef(null);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [menuOpen]);

  // Keyboard navigation: Close menu on Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && menuOpen) {
        setMenuOpen(false);
        hamburgerButtonRef.current?.focus();
      }
    };

    if (menuOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [menuOpen]);

  // Focus trap for mobile menu
  useEffect(() => {
    if (!menuOpen) return;

    const focusableElements = mobileMenuRef.current?.querySelectorAll(
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
    );

    if (!focusableElements || focusableElements.length === 0) return;

    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    const handleTabKey = (e) => {
      if (e.key !== 'Tab') return;

      if (e.shiftKey) {
        // Shift + Tab
        if (document.activeElement === firstElement) {
          e.preventDefault();
          lastElement.focus();
        }
      } else {
        // Tab
        if (document.activeElement === lastElement) {
          e.preventDefault();
          firstElement.focus();
        }
      }
    };

    document.addEventListener('keydown', handleTabKey);
    firstElement?.focus();

    return () => {
      document.removeEventListener('keydown', handleTabKey);
    };
  }, [menuOpen]);

  const toggleMenu = () => {
    const newState = !menuOpen;
    setMenuOpen(newState);

    // Track menu toggle
    trackButtonClick(
      newState ? 'open_mobile_menu' : 'close_mobile_menu',
      'header',
      ''
    );
  };

  const handleLogin = () => {
    setIsModalOpen(true);
    setMenuOpen(false);

    // Track login button click
    trackModal('login_modal', 'opened');
    trackButtonClick('login', 'header', '/auth');
  };

  const handleNavClick = (linkText, targetUrl, location = 'header_desktop') => {
    trackNavigation(linkText, targetUrl, location);
  };

  const handlePhoneClick = () => {
    trackPhoneCall('header', '7668570551');
  };

  return (
    <>
      {/* Skip to main content link for keyboard accessibility */}
      <a href="#main-content" className="skip-to-main">
        Skip to main content
      </a>
      <div className="sticky top-0 z-sticky w-full">
        <header className="bg-primary shadow-lg">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center">
              <Link
                href="/"
                className="rounded-md focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
                aria-label="Triveni Cabs - Go to homepage"
              >
                <Image
                  src="/images/logo/logo2.webp"
                  alt="Triveni Cabs Logo"
                  width={80}
                  height={80}
                  quality={100}
                  priority
                  placeholder="blur"
                  blurDataURL={blurDataURL}
                  className="h-20 w-auto hover:opacity-90 transition-opacity"
                />
              </Link>
            </div>

            {/* Hamburger Menu for Mobile */}
            <div className="md:hidden">
              <button
                ref={hamburgerButtonRef}
                className="text-black focus:outline-none p-3 -mr-3 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-button hover:bg-primary-dark transition-colors duration-normal focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
                onClick={toggleMenu}
                aria-label={menuOpen ? "Close menu" : "Open menu"}
                aria-expanded={menuOpen}
                aria-controls="mobile-menu"
              >
                {menuOpen ? (
                  <X className="h-7 w-7" />
                ) : (
                  <Menu className="h-7 w-7" />
                )}
              </button>
            </div>

            {/* Navigation Links */}
            <nav className="hidden md:flex items-center space-x-1 lg:space-x-2" role="navigation" aria-label="Main navigation">
              {[
                { href: '/', label: 'Home' },
                { href: '/services', label: 'Services' },
                { href: '/wedding', label: 'Wedding' },
                { href: '/airport-service', label: 'Airport' },
                { href: '/sightseeing', label: 'Sightseeing' },
                { href: '/tempo-traveller', label: 'Tempo' },
                { href: '/bus-routes', label: 'Bus' },
                { href: '/routes', label: 'Routes' },
                { href: '/tour-guide', label: 'Tour Guide' },
                { href: '/contact', label: 'Contact' },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-label-md text-gray-900 hover:text-black hover:bg-primary-dark/20 px-3 py-2 rounded-button transition-all duration-normal focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
                  onClick={() => handleNavClick(link.label, link.href)}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Phone Number & Login */}
            <div className="hidden md:flex items-center space-x-4">
              <a
                href="tel:+917668570551"
                onClick={handlePhoneClick}
                className="flex items-center hover:opacity-80 transition-opacity rounded-md focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
                aria-label="Call us at +91 76685 70551, available 24/7"
              >
                <div className="text-sm flex items-center px-2 bg-amber-50 rounded-l-md py-1">
                  <Phone className="h-4 w-4 text-gray-700 mr-1" aria-hidden="true" />
                  <span className="text-gray-900 text-xs font-semibold">24x7</span>
                </div>
                <div className="text-xs font-medium bg-black text-white py-1.5 px-3 rounded-r-md">
                  +91 76685 70551
                </div>
              </a>
              
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-modal-backdrop transition-opacity duration-normal"
          onClick={toggleMenu}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation menu"
        >
          <div
            ref={mobileMenuRef}
            id="mobile-menu"
            className="bg-gradient-to-br from-gray-900 via-gray-800 to-black w-80 h-full shadow-modal p-6 relative animate-slide-in-left border-r-4 border-primary"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              className="text-primary focus:outline-none absolute top-4 right-4 p-3 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full bg-gray-800 hover:bg-primary hover:text-black transition-all duration-normal focus-visible:ring-2 focus-visible:ring-primary shadow-lg border-2 border-primary"
              onClick={toggleMenu}
              aria-label="Close menu"
            >
              <X className="h-6 w-6" />
            </button>

            {/* Menu Header with Logo */}
            <div className="mb-8 mt-2">
              <div className="flex items-center gap-3 mb-4">
                <Image
                  src="/images/logo/logo2.webp"
                  alt="Triveni Cabs"
                  width={60}
                  height={60}
                  placeholder="blur"
                  blurDataURL={blurDataURL}
                  className="rounded-card"
                />
                <div>
                  <h2 className="text-heading-sm text-white">Triveni Cabs</h2>
                  <p className="text-body-xs text-primary">Your Travel Partner</p>
                </div>
              </div>
              <div className="h-1 w-full bg-gradient-to-r from-primary via-primary-dark to-transparent rounded-full"></div>
            </div>

            <nav className="flex flex-col space-y-1" role="navigation" aria-label="Mobile navigation">
              {[
                { href: '/', label: 'Home' },
                { href: '/services', label: 'Services' },
                { href: '/wedding', label: 'Wedding Cars' },
                { href: '/airport-service', label: 'Airport Transfer' },
                { href: '/sightseeing', label: 'Sightseeing' },
                { href: '/tempo-traveller', label: 'Tempo Traveller' },
                { href: '/bus-routes', label: 'Bus Routes' },
                { href: '/routes', label: 'Outstation Routes' },
                { href: '/corporate-transportation-service', label: 'Corporate Transport' },
                { href: '/tour-guide', label: 'Tour Guide' },
                { href: '/about', label: 'About Us' },
                { href: '/contact', label: 'Contact' },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-gray-200 hover:bg-primary hover:text-black font-semibold py-4 px-4 min-h-[48px] flex items-center rounded-card transition-all duration-normal border-l-4 border-transparent hover:border-primary hover:shadow-primary focus-visible:ring-2 focus-visible:ring-primary group"
                  onClick={() => { handleNavClick(link.label, link.href, 'mobile_menu'); toggleMenu(); }}
                >
                  <span className="w-2 h-2 rounded-full bg-gray-600 group-hover:bg-black mr-3 transition-colors"></span>
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Contact Section in Mobile Menu */}
            <div className="mt-8 pt-6 border-t border-gray-700">
              <a
                href="tel:+917668570551"
                onClick={handlePhoneClick}
                className="flex items-center justify-center gap-3 bg-gradient-to-r from-primary to-primary-dark text-black font-bold py-4 px-6 rounded-badge hover:shadow-primary-lg transition-all duration-normal transform hover:scale-105"
              >
                <Phone className="w-5 h-5" />
                <span>+91 76685 70551</span>
              </a>
              <p className="text-center text-content-muted text-body-xs mt-4">Available 24/7</p>
            </div>
          </div>
        </div>
      )}
        {isModalOpen && (
          <AuthModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        )}
      </div>
    </>
  );
};

export default Header;