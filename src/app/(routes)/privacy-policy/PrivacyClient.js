"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Shield,
  Lock,
  Eye,
  Database,
  UserCheck,
  Phone,
  Mail,
  FileText,
  CheckCircle2,
  AlertTriangle,
  Globe,
  Smartphone
} from "lucide-react";
import Link from "next/link";
import { phoneNumber } from "@/utilis/data";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

// Animated Section Component
const AnimatedSection = ({ children, className = "" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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

// Policy Section Component
const PolicySection = ({ icon: Icon, title, children, iconColor = "text-blue-600" }) => (
  <AnimatedSection className="mb-10">
    <div className="flex items-start gap-4 mb-4">
      <div className={`p-3 rounded-xl bg-gray-100 ${iconColor}`}>
        <Icon className="w-6 h-6" />
      </div>
      <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
    </div>
    <div className="ml-16 text-gray-600 space-y-4">
      {children}
    </div>
  </AnimatedSection>
);

export default function PrivacyClient() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-400 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Shield className="w-5 h-5 text-blue-300" />
              <span className="text-blue-100 text-sm font-medium">Your Privacy Matters</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Privacy Policy
            </h1>

            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              We are committed to protecting your privacy and ensuring the security of your personal information.
            </p>

            <p className="text-blue-200 mt-6 text-sm">
              Last Updated: January 2025
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">

          {/* Introduction */}
          <AnimatedSection className="mb-12">
            <p className="text-lg text-gray-700 leading-relaxed">
              Triveni Cabs (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) operates the website trivenicabs.in and provides taxi, car rental, and tour services across India. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our services.
            </p>
          </AnimatedSection>

          {/* Information We Collect */}
          <PolicySection icon={Database} title="Information We Collect" iconColor="text-blue-600">
            <p>We collect information that you provide directly to us, including:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Personal Information:</strong> Name, phone number, email address when you make a booking or inquiry</li>
              <li><strong>Booking Details:</strong> Pickup/drop locations, travel dates, vehicle preferences</li>
              <li><strong>Payment Information:</strong> Transaction details (we do not store credit card numbers)</li>
              <li><strong>Communication Data:</strong> Messages and feedback you send us via WhatsApp, phone, or email</li>
            </ul>
            <p className="mt-4">We may also automatically collect:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Device information and browser type</li>
              <li>IP address and approximate location</li>
              <li>Pages visited and time spent on our website</li>
              <li>Referral sources</li>
            </ul>
          </PolicySection>

          {/* How We Use Your Information */}
          <PolicySection icon={Eye} title="How We Use Your Information" iconColor="text-green-600">
            <p>We use the information we collect to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Process and confirm your bookings</li>
              <li>Communicate with you about your trips and services</li>
              <li>Send booking confirmations and trip reminders</li>
              <li>Provide customer support and respond to inquiries</li>
              <li>Improve our services and website functionality</li>
              <li>Send promotional offers (only with your consent)</li>
              <li>Comply with legal obligations</li>
            </ul>
          </PolicySection>

          {/* Information Sharing */}
          <PolicySection icon={UserCheck} title="Information Sharing" iconColor="text-purple-600">
            <p>We may share your information with:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Drivers and Partners:</strong> To fulfill your booking (name, phone, pickup/drop locations)</li>
              <li><strong>Payment Processors:</strong> To process secure payments</li>
              <li><strong>Service Providers:</strong> Who assist in operating our business</li>
              <li><strong>Legal Authorities:</strong> When required by law or to protect our rights</li>
            </ul>
            <p className="mt-4 font-medium text-gray-800">
              We do NOT sell your personal information to third parties.
            </p>
          </PolicySection>

          {/* Data Security */}
          <PolicySection icon={Lock} title="Data Security" iconColor="text-red-600">
            <p>
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>SSL encryption for data transmission</li>
              <li>Secure server infrastructure</li>
              <li>Limited access to personal data by employees</li>
              <li>Regular security assessments</li>
            </ul>
          </PolicySection>

          {/* Your Rights */}
          <PolicySection icon={CheckCircle2} title="Your Rights" iconColor="text-teal-600">
            <p>You have the right to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Access:</strong> Request a copy of your personal data</li>
              <li><strong>Correction:</strong> Request correction of inaccurate data</li>
              <li><strong>Deletion:</strong> Request deletion of your data (subject to legal requirements)</li>
              <li><strong>Opt-out:</strong> Unsubscribe from marketing communications</li>
              <li><strong>Portability:</strong> Request your data in a portable format</li>
            </ul>
            <p className="mt-4">
              To exercise these rights, contact us at <a href="mailto:info@trivenicabs.in" className="text-blue-600 hover:underline">info@trivenicabs.in</a>
            </p>
          </PolicySection>

          {/* Cookies */}
          <PolicySection icon={Globe} title="Cookies and Tracking" iconColor="text-orange-600">
            <p>
              Our website uses cookies and similar technologies to enhance your experience. These include:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Essential Cookies:</strong> Required for website functionality</li>
              <li><strong>Analytics Cookies:</strong> Help us understand how visitors use our site</li>
              <li><strong>Marketing Cookies:</strong> Used to deliver relevant advertisements</li>
            </ul>
            <p className="mt-4">
              You can control cookies through your browser settings. Disabling certain cookies may affect website functionality.
            </p>
          </PolicySection>

          {/* Third-Party Services */}
          <PolicySection icon={Smartphone} title="Third-Party Services" iconColor="text-indigo-600">
            <p>
              Our website may contain links to third-party websites and services. We use the following third-party services:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Google Analytics (website analytics)</li>
              <li>WhatsApp Business (customer communication)</li>
              <li>Payment gateways (secure transactions)</li>
            </ul>
            <p className="mt-4">
              These services have their own privacy policies. We encourage you to review them.
            </p>
          </PolicySection>

          {/* Updates to Policy */}
          <PolicySection icon={FileText} title="Changes to This Policy" iconColor="text-gray-600">
            <p>
              We may update this Privacy Policy from time to time. The updated version will be indicated by an updated &quot;Last Updated&quot; date. We encourage you to review this Privacy Policy periodically.
            </p>
          </PolicySection>

          {/* Contact Section */}
          <AnimatedSection>
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 mt-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <AlertTriangle className="w-6 h-6 text-blue-600" />
                Contact Us About Privacy
              </h2>
              <p className="text-gray-600 mb-6">
                If you have any questions or concerns about this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <a
                  href={`tel:${phoneNumber}`}
                  className="flex items-center gap-3 p-4 bg-white rounded-xl hover:shadow-md transition-shadow"
                >
                  <Phone className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700">{phoneNumber}</span>
                </a>
                <a
                  href="mailto:info@trivenicabs.in"
                  className="flex items-center gap-3 p-4 bg-white rounded-xl hover:shadow-md transition-shadow"
                >
                  <Mail className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700">info@trivenicabs.in</span>
                </a>
              </div>
            </div>
          </AnimatedSection>

          {/* Related Links */}
          <AnimatedSection className="mt-12">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Related Policies</h3>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/terms-and-conditions"
                className="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
              >
                Terms & Conditions
              </Link>
              <Link
                href="/cancellation-and-refund-policy"
                className="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
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
