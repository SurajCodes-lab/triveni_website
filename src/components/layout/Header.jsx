'use client';

import React, { useState, useEffect, useRef } from "react";
// Centralized icon imports for better bundle optimization
import { Phone, ChevronDown, Menu, X } from "@/components/ui/icons";
import Link from "next/link";
import Image from "next/image";
import { vehiclesServices } from "@/utilis/data";
import { trackNavigation, trackButtonClick, trackPhoneCall, trackModal } from "@/utilis/analytics";
import { cn } from "@/utilis/cn";

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
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUTExMWFhUXGBgYGBgYFxcYGhoYFxcXFxcYGBgYHSggGBolHRcXITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGhAQGy0lHyUtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAKgBLAMBEgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAEAAIDBQYBBwj/xAA7EAABAwIDBQYEBQMEAwEAAAABAAIRAyEEEjEFQVFhcQYigZGh8BMysaFCUtHh8RRi0hUjcoIHkqIz/8QAGwEAAgMBAQEAAAAAAAAAAAAAAAAAEQIDBAUG/8QAMREACgEDAgQEBgIDAQEAAAAAAAECAxEhMUEEElFhEyJxgQUykaGx8MHR4UJS8RQ/2gAMAwEAAhEDEQA/APLM4U1LHTdc6RFh1VsQaMaMtSFBSqXQeKr5xmEYHELCmERSxFkpxU8TvOCpbGdqA50BO6xgBYikl4lHpA0N9l4qMoyPNOe5cPu6pIFU4kJFOa4pJodkDkrJLqhSsHx8U05KhdVVUWHXVTi6JRIKhTwUyVYcCmg5XOEWQFQE7sGE4Ypj2I2UBypIFDjH3XMPqoKnvwTHV0uASNgptOuCoW1SpKNTkgB31dERhKgug31Nd/KNo1d6AYWHXwSo1rCFHiaJ4Ip1AIaAYkFLVOCb8JHNo5hCHqQHPUjKslqvLhZDvpOOijFkJC4h2YdOirJiFA5pyqF1c8kwLHCuABTRVM6pBBLqRG/Chuk/q/giIdKAy5kmXgJSldDJE4ppRByWSHJy4B1TbCKHAEq6eExySUGCXUk4hJVklY6EoJxKSE0MtTgkYTlwCwMTB0SJhJKSZMYB3SXLpKYmFYVyuMHiFUYTEIF9ZSURWCNEXKKa4XUOGfoqPFYsBGxbKpM9y5q7T0GlWKq5JGxsq57bKxr7IcMR7NllxzpjsRXqrqjU6hhjzTqtFNPQCoXITFU1HTYbgcLqq/FMhONNDOb75LO26A0JqOIVXi6GikFRFYmmOIKTQIqP2SqzEsgjlqt3gqANkHjsACD+6pnkUQasr9oMvB5KuZR1VhVbqExrDO7ggCxoGVtk9zw1Gy+Br78UNVqkpwFjSt1UeCoFOovurD4aqcRlBCNIqAquqAJ+IMKOpVwgjFAkNdQkX3VVUw0ndop8RjAbBB5wTqnYGPoYe1v2UtJ0clcUKSroOULGLBgphThJrRxKIbTRIFFoU4tTG0zoU8wgAdYJYYlFvoJpphMQhpkISHEJ4pQnBvFJiEMPRLKpcoTxTWFAdGOoSpThy0TUmIYE0mUnJhTJDwklKSRJkDKKAr4hWJYUDVoSsz5LUJGV1cqe0TkRXplWXwuS1a2A3EKpL4WcwuIUwqJ1iiRNOVjwgQdUBhKvNXm0GggcFFCBaNe+iw2MfJleobMZddZbbtcDopRkI83a2VxzUm1wKLxLZKDsKKQ7qMWAhVFWqr3EjKQRdVNVqgxsjCq10oytUugcg0XPwo3qoxOIFtFJCADIAdqIq7Q3bkPh7dVW18QdyCaUkqUVZNXxipcPXyuui6mJnVUuNYM0oYHCJlZp6Nz7qlLOqraTwoqtcqk2g4FGmx0Q9JE4moBuQorAIESMfZdK4T5KkVWWCY8QnKN0oEhlq+/wCE0Un8CuuefNcDT7/5UhJCFFppwO+E9zAB5KF9V3BCBuNp3T0R8KnPqgY4gkJJCcYRAtMuU1M+/BKU8Jw/dPSJZFKUeC4Wog7UVoG0iVYUqUITA0lYVtBDAsHxVqPa3cQssWywapDCoqGKSCYRgadbcmuwqvHBCYYCFNAJcxVZkI3prQIVzgiYQB7LJNTpg2U9VqDqMkKALqNRhSraiBxPJC0aTSuuYbN1KUGOhFnUJUDV0SgCRg9EspCzqiKJ8C9TObCgfQlOEyBaKLJCo63NEVXIWokkIptE1OaLIdjeCixU1DcmOZv4qpxWiKEI6uLqdKLB3lOGnwUDWfJaFD0Cqfq3ogaNN10qm7REuZ3CmGhDYYIapqgBUJqWirqz7qwY1QsYJQ4iqz6q0qLIvCpZyITaLM26UibMlvApqkoF3XbwuuqVeH9E5lH8kkVjouCmdCQICPqHunyQRKhLNTvuqz4gSd1Qw6oyUl0PU0kxzOSNZW1RFLCzqVX0atj4IulXlMkFjqcKauwIRMhOdICQZ8jXUe6UD6SLYEgAfaToQ1HCFXA2eLKtqYOVp9kUQLF4JYW2KSt3CRstLgSCgcOx3BFYZ0FLYgCHNAhAbMqd4KWRWX4kk5qvqYYh0hTYnRROMhOiLM7hxE8jdWdLkrurhswLTYhLHRvMFV3EJV1lAXR7K6hxjb+iqXiYVxVw6HxDFQKxJmhzEy+t0RlRqrMRSQH0S50KsKMJgpqCuwKsKZqpIHAZSlT0W21UZaBBVvQsq7BYmPNHvpyvEF1wrOYUCYZJDUcNJTgwNR9KmjA0EWRSYGNaU5xEaoktkKFw0TYDKU5+qidS4pU3K0AtmvTwE0tmCmskhTFiTJD8h4rmRdaLJ8dUhi3Mu1UNRsK2ZhEPXwvTipRVlJkMLqDKYD1LVpZBEpyJp0NE6EMa5NExjhEI2m4R5qalU0UlVLRVs1NW9Lv8A5VYOCt6z+8VV08OCdym4NmgwrQ4SrNmqq8KfBXVMoJlLiSYgCFlKyCcfCixKq6k9VZVMaqt7lJAFlhyFy1Q0oKJp04Q7CpfCqVJAYOg4C6p6mGRjXIevS1R4J2UtKi0K2lQzMWK2hs7vOIVli8Dlg80xrISo0bLgpNMrQ3JL9g4XSQM8qCdC4KnBJERjyFxwUrNFwJCBlrlO7coNlT0eFYs0SJg07ohMdRlCiAm4SSLE08wI4JNqhS06WidUppEhTgVzKFJlTaJEcKVyZKY6kkCE4FNcFMw9E3IRopCBKijoJThVPVOqI1D06esbynvpKAQPq1Z0Qf0SqBjV1tFR/BS/dFRpNaFLIkKGtWtqvPCIXC1KbFbhR/uNWXqsAJKtaJ8FnmvJG/pVrLR1nSqakIVjmdJSYEhOr4cySnCmUdiXZYQA1dgSTLqUlX9GmpkJIq8SSELlaFVbRcZpNHgIYvOINjTCuW4Rl7hZvaWGDKmcbiEYO6RNpPLaLLqpIxoN0MYXRXRAIlMgPwt0VSoQ1TnCEC4JhTUxVxh4E5rG+Ku31Sxx3T3U2lI5yqwqmkrUgOphTUHoOiAeaTgpA0d8u5Ib49wZ8sIrRQYd3e9lJYjQmCu1CpCxyTqAaLKBj7I8e6bKrRPvlMFdOqmUHKBs7iFxsIqqUFSx9lH4UJJhJiAsTfVCGnKnLlG+opIGA16cKCi65qoqSgKIp0FI5ycHlRAGNaE8sjcoHVVE+qmSCf6kBBiq5Q4NDVN+8oAqr6oOu1rQS4wAvMu02329TI42b7urg5GJQXIgv6mUwHxXmPaDbjq7iQYHAlZxu19o7rPMKOpi42I7JyKoS8qQbU1zTbqqHF1AY5IX/UHN6hVNaoTJRtE9zCH4u+6xW1cM59U9AtnXfKqsdQl15Ukw0Z4AZu6tJhhIVDgIgqwBUiJCR0gJEJJA9oBIEmSUiyFoSUdYKEkpIEW2HBMKnaSbBAFjSB0TnN0UALLFQunIb40lO+PAQBCykp2OJ0UQqBOYJSBkgRwckgHBOSAjLlFVK7RClKfQJ6lGEpRhJRh5U1FQiK5R+HqmJlUWGqypxVAJ70ikI24I3FGOqIOpVlTYWoqQRFWsoZ6oJJokX8OQh2+90U4NZPqFBUxA1RDsJ4FAwJxJ4rABwQ6F6YqDrVRooH1t6RM7UJQWIxkaKmqVbqDEYgSkTbNOHpFXlDCFqq9mbOe6S0qz/0h0TBQVFH8SLVCmw9IwI0VuyNETTw0GU4OjVZnawlWOFKoMM8grS7IpAm+/XyUUyjYRIWhwDQgq9JG1qAlK6Ihw3qR7IsgmL6eZwTqxNNt5QNCnLiVLjGQAVKqxLd1BfHC0pzGoR7IQjmwmGUkD6kpIDC/wC3Rd+M1d/p5SQMn/qmpdpk1xHAKOhtxwtmHlZdMKTMUKh7M4oUrjQ3TYWlbI2yKtS8wCLIvE1QIaFTYN+VgnVLGVbKMhNkqEXVeSqfE4hLF1oHJZ9tZxqZQrQTNPhxdSYmiCCPf3VJTcW92bEaFWmF/H1RYqDauD/EQitl4Xu3Cz+IqZoVvs+tIAQS4LypQOqh1NEUcOO8LodmEIMGCCpGhORYyGhJClp4YSCtJszZAqMzRa6zsYGJlHsDYjKzM0WCC2ds4UYDdVYYsZVJMKStE/GspNuVjey2J+I0yNFPjMaCEFs2sIuqbJEbKi5UPRMqAJrdVG9q6EM8IYyuCmUgnEIhVGPKKQJUbDa4kK02obrPbWIHAokQZPSBRmGCpqMqYOlLYCKiF6tMoZjUTWuhUhtNp1K0+yW2I5rPsjVaXZb+8ESJGmwbJRjiCsgEV8b3beComBl3C46i3goAKnTT0AZyGNEJIcj2pJAYj4bUl04X3eSS2GTZLTcJiS6lFBMZb6Iqj7lJJIRZYBuvJGYm4nlKSQSA8EJcOKosHe6SSljJ4G/qulxSSUqDYz0t04JJJCsQK7RNlxJMAKanqu4pJJMQJK7VSSTIjKYR9ZJJSExjVGk5JMQXX7rVSY+56pJJPsJkODsSFI79lxJKyJYHcu01z9FxJJCZ//Z"
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
                { href: '/about', label: 'About' },
                { href: '/services', label: 'Services' },
                { href: '/corporate-transportation-service', label: 'Corporate' },
                { href: '/event-transportation-service', label: 'Events' },
                { href: '/tempo-traveller', label: 'Tempo Traveller' },
                { href: '/bus-routes', label: 'Bus' },
                { href: '/tour-guide', label: 'Tour Guide' },
                { href: '/sightseeing', label: 'Wanderlust' },
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
                { href: '/about', label: 'About' },
                { href: '/services', label: 'Services' },
                { href: '/corporate-transportation-service', label: 'Corporate Transport' },
                { href: '/event-transportation-service', label: 'Event Transport' },
                { href: '/tempo-traveller', label: 'Tempo Traveller' },
                { href: '/contact', label: 'Contact' },
                { href: '/bus-routes', label: 'Bus Routes' },
                { href: '/tour-guide', label: 'Tour Guide' },
                { href: '/sightseeing', label: 'Wanderlust' },
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