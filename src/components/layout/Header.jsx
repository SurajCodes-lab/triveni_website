'use client';

import React, { useState, useEffect, useRef } from "react";
import { Phone, ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { vehiclesServices } from "@/utilis/data";
import { trackNavigation, trackButtonClick, trackPhoneCall, trackModal } from "@/utilis/analytics";

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
      <div className="sticky top-0 z-50 w-full">
        <header className="bg-[#FACF2D] shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                  className="h-20 w-auto hover:opacity-90 transition-opacity"
                />
              </Link>
            </div>

            {/* Hamburger Menu for Mobile */}
            <div className="md:hidden">
              <button
                ref={hamburgerButtonRef}
                className="text-black focus:outline-none p-3 -mr-3 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-md hover:bg-yellow-500 transition-colors focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
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
            <nav className="hidden md:flex items-center space-x-6" role="navigation" aria-label="Main navigation">
              <Link href="/" className="font-bold text-gray-900 hover:text-black hover:underline underline-offset-4 px-2 py-1 rounded transition-all focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2" onClick={() => handleNavClick('Home', '/')}>
                Home
              </Link>
              <Link href="/about" className="font-bold text-gray-900 hover:text-black hover:underline underline-offset-4 px-2 py-1 rounded transition-all focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2" onClick={() => handleNavClick('About', '/about')}>
                About
              </Link>
              <Link href="/services" className="font-bold text-gray-900 hover:text-black hover:underline underline-offset-4 px-2 py-1 rounded transition-all focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2" onClick={() => handleNavClick('Services', '/services')}>
                Services
              </Link>
              <Link href="/tempo-traveller" className="font-bold text-gray-900 hover:text-black hover:underline underline-offset-4 px-2 py-1 rounded transition-all focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2" onClick={() => handleNavClick('Tempo Traveller', '/tempo-traveller')}>
               Tempo Traveller
              </Link>
              <Link
                href="/bus-routes"
                className="font-bold text-gray-900 hover:text-black hover:underline underline-offset-4 px-2 py-1 rounded transition-all focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
                onClick={() => handleNavClick('Bus Routes', '/bus-routes')}
              >
                Bus
              </Link>
              <Link
                href="/tour-guide"
                className="font-bold text-gray-900 hover:text-black hover:underline underline-offset-4 px-2 py-1 rounded transition-all focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
                onClick={() => handleNavClick('Tour Guide', '/tour-guide')}
              >
                Tour Guide
              </Link>
              <Link
                href="/contact"
                className="font-bold text-gray-900 hover:text-black hover:underline underline-offset-4 px-2 py-1 rounded transition-all focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
                onClick={() => handleNavClick('Contact', '/contact')}
              >
                Contact
              </Link>
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
          className="fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity duration-300"
          onClick={toggleMenu}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation menu"
        >
          <div
            ref={mobileMenuRef}
            id="mobile-menu"
            className="bg-white w-64 h-full shadow-md p-4 relative animate-slide-in-left"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="text-black focus:outline-none absolute top-2 right-2 p-3 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-md hover:bg-gray-100 transition-colors focus-visible:ring-2 focus-visible:ring-black"
              onClick={toggleMenu}
              aria-label="Close menu"
            >
              <X className="h-6 w-6" />
            </button>
            <nav className="flex mt-10 flex-col space-y-1" role="navigation" aria-label="Mobile navigation">
              <Link
                href="/"
                className="text-gray-900 hover:bg-yellow-100 hover:text-black font-semibold py-3 px-3 min-h-[48px] flex items-center rounded-md transition-colors focus-visible:ring-2 focus-visible:ring-black"
                onClick={() => { handleNavClick('Home', '/', 'mobile_menu'); toggleMenu(); }}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-gray-900 hover:bg-yellow-100 hover:text-black font-semibold py-3 px-3 min-h-[48px] flex items-center rounded-md transition-colors focus-visible:ring-2 focus-visible:ring-black"
                onClick={() => { handleNavClick('About', '/about', 'mobile_menu'); toggleMenu(); }}
              >
                About
              </Link>
              <Link
                href="/services"
                className="text-gray-900 hover:bg-yellow-100 hover:text-black font-semibold py-3 px-3 min-h-[48px] flex items-center rounded-md transition-colors focus-visible:ring-2 focus-visible:ring-black"
                onClick={() => { handleNavClick('Services', '/services', 'mobile_menu'); toggleMenu(); }}
              >
                Services
              </Link>
              <Link
                href="/tempo-traveller"
                className="text-gray-900 hover:bg-yellow-100 hover:text-black font-semibold py-3 px-3 min-h-[48px] flex items-center rounded-md transition-colors focus-visible:ring-2 focus-visible:ring-black"
                onClick={() => { handleNavClick('Tempo Traveller', '/tempo-traveller', 'mobile_menu'); toggleMenu(); }}
              >
                Tempo Traveller
              </Link>
              <Link
                href="/contact"
                className="text-gray-900 hover:bg-yellow-100 hover:text-black font-semibold py-3 px-3 min-h-[48px] flex items-center rounded-md transition-colors focus-visible:ring-2 focus-visible:ring-black"
                onClick={() => { handleNavClick('Contact', '/contact', 'mobile_menu'); toggleMenu(); }}
              >
                Contact
              </Link>
              <Link
                href="/bus-routes"
                className="text-gray-900 hover:bg-yellow-100 hover:text-black font-semibold py-3 px-3 min-h-[48px] flex items-center rounded-md transition-colors focus-visible:ring-2 focus-visible:ring-black"
                onClick={() => { handleNavClick('Bus Routes', '/bus-routes', 'mobile_menu'); toggleMenu(); }}
              >
                Bus Routes
              </Link>
              <Link
                href="/tour-guide"
                className="text-gray-900 hover:bg-yellow-100 hover:text-black font-semibold py-3 px-3 min-h-[48px] flex items-center rounded-md transition-colors focus-visible:ring-2 focus-visible:ring-black"
                onClick={() => { handleNavClick('Tour Guide', '/tour-guide', 'mobile_menu'); toggleMenu(); }}
              >
                Tour Guide
              </Link>
              

              {/* Vehicles Section */}
              
            </nav>
            {/* <button
              onClick={handleLogin}
              className="bg-black mt-10 text-white rounded-full px-10 py-2 text-xs tracking-[0.06rem] hover:bg-gray-800 hover:text-[#FACF2D] transition-all duration-300"
            >
              Login
            </button> */}
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