"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";
import Link from "next/link";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

// Animated Section Component
const AnimatedSection = ({ children, className = "" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={fadeInUp}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Section Component
const Section = ({ number, title, children }) => (
  <AnimatedSection className="mb-10">
    <h2 className="text-xl font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">
      {number}. {title}
    </h2>
    <div className="text-gray-700 leading-relaxed space-y-4">
      {children}
    </div>
  </AnimatedSection>
);

// Sub-section Component
const SubSection = ({ letter, title, children }) => (
  <div className="mb-4">
    <h3 className="text-base font-medium text-gray-800 mb-2">
      {letter}) {title}
    </h3>
    <div className="text-gray-600 pl-4">
      {children}
    </div>
  </div>
);

export default function PrivacyClient() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="bg-gradient-to-b from-gray-900 to-gray-800 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Privacy Policy
            </h1>

            <p className="text-gray-400 text-sm">
              Effective Date: January 2026 | Last Updated: January 2026
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">

          {/* Introduction */}
          <AnimatedSection className="mb-10">
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
              <p className="text-gray-700 leading-relaxed">
                This Privacy Policy describes how <strong>Triveni Cabs</strong> (&quot;Company,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;)
                collects, uses, and protects information when you use our website <strong>trivenicabs.in</strong> and
                our taxi, car rental, and tour services operating across India. By using our services, you agree
                to the collection and use of information in accordance with this policy.
              </p>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-8">
              <p className="text-blue-900 text-sm font-medium">
                Disclosure: Our website is a static informational platform. We do not operate user accounts,
                login systems, or automated data collection mechanisms. Personal information is collected
                only when you voluntarily contact us for service inquiries.
              </p>
            </div>
          </AnimatedSection>

          {/* Section 1 */}
          <Section number="1" title="Information We Collect">
            <p>
              We collect information that you voluntarily provide when contacting us for booking inquiries
              or service-related communications. The categories of information we may collect include:
            </p>

            <SubSection letter="a" title="Personal Identification Information">
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>Full name as provided during booking</li>
                <li>Contact telephone number</li>
                <li>Email address (if provided)</li>
              </ul>
            </SubSection>

            <SubSection letter="b" title="Booking and Travel Information">
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>Pickup and drop-off locations</li>
                <li>Travel dates and times</li>
                <li>Vehicle type preferences</li>
                <li>Number of passengers</li>
                <li>Special requirements or requests</li>
              </ul>
            </SubSection>

            <SubSection letter="c" title="Communication Records">
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>WhatsApp messages and conversations</li>
                <li>Phone call records (as maintained by telecom providers)</li>
                <li>Email correspondence</li>
              </ul>
            </SubSection>

          </Section>

          {/* Section 2 */}
          <Section number="2" title="Methods of Information Collection">
            <p>
              We collect personal information exclusively through direct communication channels initiated by you:
            </p>

            <div className="grid md:grid-cols-3 gap-4 mt-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="font-medium text-gray-900 mb-1">Telephone</p>
                <p className="text-sm text-gray-600">+91 76685 70551</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="font-medium text-gray-900 mb-1">WhatsApp</p>
                <p className="text-sm text-gray-600">+91 76685 70551</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="font-medium text-gray-900 mb-1">Email</p>
                <p className="text-sm text-gray-600">cabstriveni@gmail.com</p>
              </div>
            </div>

            <p className="mt-4 text-sm text-gray-600">
              Our website does not feature contact forms, user registration portals, or any automated
              data submission mechanisms.
            </p>
          </Section>

          {/* Section 3 */}
          <Section number="3" title="Purpose of Information Use">
            <p>
              The information you provide is used exclusively for the following legitimate business purposes:
            </p>

            <ul className="list-disc pl-5 space-y-2 mt-4">
              <li>Processing and confirming your vehicle booking requests</li>
              <li>Communicating essential trip details including driver information, vehicle registration, and pickup schedules</li>
              <li>Providing customer support before, during, and after your journey</li>
              <li>Sending booking confirmations and trip updates via WhatsApp or SMS</li>
              <li>Addressing queries, complaints, or feedback</li>
              <li>Maintaining booking records for operational and accounting purposes</li>
            </ul>

            <p className="mt-4 font-medium text-gray-800">
              We do not use your information for unsolicited marketing communications, promotional
              campaigns, or any purpose unrelated to the services you have requested.
            </p>
          </Section>

          {/* Section 4 */}
          <Section number="4" title="Information Sharing and Disclosure">
            <p>
              We share your personal information only to the extent necessary for fulfilling your booking:
            </p>

            <SubSection letter="a" title="Service Fulfillment">
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li><strong>Assigned Drivers:</strong> Your name, contact number, and pickup/drop locations are shared with the driver assigned to your trip</li>
                <li><strong>Partner Operators:</strong> For certain routes or vehicle categories, booking details may be shared with our trusted partner cab operators</li>
              </ul>
            </SubSection>

            <SubSection letter="b" title="Legal Requirements">
              <p className="text-sm">
                We may disclose information if required by law, court order, or governmental authority,
                or to protect our legal rights and safety of our customers and employees.
              </p>
            </SubSection>

            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mt-4">
              <p className="text-amber-800 text-sm font-medium">
                We do not sell, rent, trade, or otherwise transfer your personal information to third
                parties for marketing, advertising, or any commercial purposes unrelated to our services.
              </p>
            </div>
          </Section>

          {/* Section 5 */}
          <Section number="5" title="Data Storage and Security">
            <p>
              As a traditional cab service business, we implement the following data handling practices:
            </p>

            <ul className="list-disc pl-5 space-y-2 mt-4">
              <li>Booking records are maintained in our internal operational systems</li>
              <li>WhatsApp communications are stored on WhatsApp servers in accordance with their privacy policy</li>
              <li>Telephone records are maintained by respective telecom service providers</li>
              <li>We do not store credit card, debit card, or banking information (payments are typically processed via cash, UPI, or bank transfer)</li>
            </ul>

            <p className="mt-4">
              <strong>Website Security:</strong> Our website employs HTTPS protocol with SSL/TLS encryption
              to ensure secure data transmission during browsing.
            </p>
          </Section>

          {/* Section 6 */}
          <Section number="6" title="Your Rights">
            <p>
              You have the following rights regarding your personal information:
            </p>

            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <div className="border border-gray-200 p-4 rounded-lg">
                <p className="font-medium text-gray-900 mb-1">Right to Access</p>
                <p className="text-sm text-gray-600">Request information about data we hold concerning you</p>
              </div>
              <div className="border border-gray-200 p-4 rounded-lg">
                <p className="font-medium text-gray-900 mb-1">Right to Rectification</p>
                <p className="text-sm text-gray-600">Request correction of inaccurate or incomplete information</p>
              </div>
              <div className="border border-gray-200 p-4 rounded-lg">
                <p className="font-medium text-gray-900 mb-1">Right to Erasure</p>
                <p className="text-sm text-gray-600">Request deletion of your personal data from our records</p>
              </div>
              <div className="border border-gray-200 p-4 rounded-lg">
                <p className="font-medium text-gray-900 mb-1">Right to Object</p>
                <p className="text-sm text-gray-600">Opt out of receiving any communications from us</p>
              </div>
            </div>

            <p className="mt-4 text-sm text-gray-600">
              To exercise any of these rights, please contact us using the details provided in Section 9 below.
            </p>
          </Section>

          {/* Section 7 */}
          <Section number="7" title="Third-Party Links and Services">
            <p>
              Our website may contain links or references to third-party platforms:
            </p>

            <ul className="list-disc pl-5 space-y-2 mt-4">
              <li><strong>WhatsApp:</strong> Click-to-chat functionality redirects to WhatsApp, governed by Meta&apos;s privacy policy</li>
              <li><strong>Google Maps:</strong> Location references may open in Google Maps, governed by Google&apos;s privacy policy</li>
              <li><strong>Telephone Dialer:</strong> Click-to-call links activate your device&apos;s native dialer application</li>
            </ul>

            <p className="mt-4 text-sm text-gray-600">
              We are not responsible for the privacy practices of third-party services. We encourage
              you to review their respective privacy policies before use.
            </p>
          </Section>

          {/* Section 8 */}
          <Section number="8" title="Policy Updates">
            <p>
              We reserve the right to modify this Privacy Policy at any time. Changes will be reflected
              on this page with an updated &quot;Last Updated&quot; date. As we do not collect email addresses
              through our website, we cannot provide direct notification of policy changes. We recommend
              reviewing this policy periodically.
            </p>

            <p className="mt-4 text-sm text-gray-600">
              Continued use of our services after any modifications constitutes acceptance of the updated policy.
            </p>
          </Section>

          {/* Section 9 - Contact */}
          <Section number="9" title="Contact Information">
            <p>
              For questions, concerns, or requests regarding this Privacy Policy or our data practices,
              please contact us through the following channels:
            </p>

            <div className="bg-gray-50 rounded-lg p-6 mt-6">
              <h3 className="font-semibold text-gray-900 mb-4">Triveni Cabs</h3>

              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-gray-500" />
                  <a href="tel:+917668570551" className="text-gray-700 hover:text-blue-600">
                    +91 76685 70551
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-gray-500" />
                  <a href="mailto:cabstriveni@gmail.com" className="text-gray-700 hover:text-blue-600">
                    cabstriveni@gmail.com
                  </a>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-gray-500 mt-0.5" />
                  <span className="text-gray-700">
                    366, Dandupura, near Tajganj, Agra, Uttar Pradesh 282006, India
                  </span>
                </div>
              </div>
            </div>
          </Section>

          {/* Related Documents */}
          <AnimatedSection className="mt-12 pt-8 border-t border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Related Legal Documents</h3>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/terms-and-conditions"
                className="px-5 py-2.5 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors text-sm font-medium"
              >
                Terms & Conditions
              </Link>
              <Link
                href="/cancellation-and-refund-policy"
                className="px-5 py-2.5 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors text-sm font-medium"
              >
                Cancellation & Refund Policy
              </Link>
            </div>
          </AnimatedSection>

        </div>
      </section>
    </div>
  );
}
