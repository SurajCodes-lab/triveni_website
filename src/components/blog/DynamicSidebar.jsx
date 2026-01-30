'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  MapPin, Phone, MessageCircle, Clock, ArrowRight,
  Compass, Star, Tag, BookOpen
} from 'lucide-react';
import { trackWhatsAppClick, trackPhoneCall } from '@/utilis/analytics';

const themeColors = {
  amber: {
    bg: 'bg-amber-50',
    border: 'border-amber-200',
    text: 'text-amber-800',
    accent: 'bg-amber-500',
    button: 'bg-amber-600 hover:bg-amber-700',
    light: 'bg-amber-100',
  },
  orange: {
    bg: 'bg-orange-50',
    border: 'border-orange-200',
    text: 'text-orange-800',
    accent: 'bg-orange-500',
    button: 'bg-orange-600 hover:bg-orange-700',
    light: 'bg-orange-100',
  },
  green: {
    bg: 'bg-green-50',
    border: 'border-green-200',
    text: 'text-green-800',
    accent: 'bg-green-500',
    button: 'bg-green-600 hover:bg-green-700',
    light: 'bg-green-100',
  },
  blue: {
    bg: 'bg-blue-50',
    border: 'border-blue-200',
    text: 'text-blue-800',
    accent: 'bg-blue-500',
    button: 'bg-blue-600 hover:bg-blue-700',
    light: 'bg-blue-100',
  },
  purple: {
    bg: 'bg-purple-50',
    border: 'border-purple-200',
    text: 'text-purple-800',
    accent: 'bg-purple-500',
    button: 'bg-purple-600 hover:bg-purple-700',
    light: 'bg-purple-100',
  },
  red: {
    bg: 'bg-red-50',
    border: 'border-red-200',
    text: 'text-red-800',
    accent: 'bg-red-500',
    button: 'bg-red-600 hover:bg-red-700',
    light: 'bg-red-100',
  },
};

export default function DynamicSidebar({ post, relatedLinks, theme = 'blue' }) {
  const colors = themeColors[theme] || themeColors.blue;

  return (
    <div className="space-y-6 lg:sticky lg:top-24">
      {/* Quick Booking Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className={`${colors.bg} rounded-2xl p-6 shadow-xl border ${colors.border}`}
      >
        <h3 className={`text-xl font-bold ${colors.text} mb-4 flex items-center gap-2`}>
          <Phone className="w-5 h-5" />
          Book Your Trip
        </h3>
        <p className="text-gray-600 text-sm mb-4">
          Get the best rates for {post.city ? post.city.charAt(0).toUpperCase() + post.city.slice(1) : 'your'} tours. Instant confirmation!
        </p>
        <div className="space-y-3">
          <a
            href="https://wa.me/917668570551"
            onClick={() => trackWhatsAppClick('blog_sidebar', '', 'sidebar_booking')}
            className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white py-3 px-4 rounded-xl font-bold transition-colors w-full"
          >
            <MessageCircle className="w-5 h-5" />
            WhatsApp Booking
          </a>
          <a
            href="tel:+917668570551"
            onClick={() => trackPhoneCall('blog_sidebar', '7668570551')}
            className={`flex items-center justify-center gap-2 ${colors.button} text-white py-3 px-4 rounded-xl font-bold transition-colors w-full`}
          >
            <Phone className="w-5 h-5" />
            Call: +91-7668570551
          </a>
        </div>
      </motion.div>

      {/* Related Tours */}
      {relatedLinks?.relatedTours?.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-2xl p-6 shadow-xl border border-gray-100"
        >
          <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Compass className="w-5 h-5 text-gray-600" />
            Related Tours
          </h3>
          <div className="space-y-3">
            {relatedLinks.relatedTours.map((tour, index) => (
              <Link
                key={index}
                href={tour.url}
                className={`block p-3 rounded-xl ${colors.light} hover:shadow-md transition-all group`}
              >
                <h4 className={`font-semibold ${colors.text} group-hover:underline text-sm`}>
                  {tour.name}
                </h4>
                <div className="flex items-center justify-between mt-1">
                  <span className="text-xs text-gray-500">{tour.price}</span>
                  <ArrowRight className={`w-4 h-4 ${colors.text} opacity-0 group-hover:opacity-100 transition-opacity`} />
                </div>
              </Link>
            ))}
          </div>
          {relatedLinks.cityTours && (
            <Link
              href={relatedLinks.cityTours}
              className={`mt-4 inline-flex items-center gap-1 ${colors.text} font-semibold text-sm hover:underline`}
            >
              View All Tours <ArrowRight className="w-4 h-4" />
            </Link>
          )}
        </motion.div>
      )}

      {/* Quick Links */}
      {relatedLinks?.quickLinks?.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className={`${colors.bg} rounded-2xl p-6 shadow-xl border ${colors.border}`}
        >
          <h3 className={`text-xl font-bold ${colors.text} mb-4 flex items-center gap-2`}>
            <BookOpen className="w-5 h-5" />
            Quick Links
          </h3>
          <ul className="space-y-2">
            {relatedLinks.quickLinks.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.href}
                  className="flex items-center gap-2 text-gray-700 hover:text-gray-900 py-2 px-3 rounded-lg hover:bg-white transition-all"
                >
                  <span>{link.icon}</span>
                  <span className="font-medium">{link.text}</span>
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>
      )}

      {/* Visit Info Card */}
      {post.attractionData && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-2xl p-6 shadow-xl border border-gray-100"
        >
          <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <MapPin className="w-5 h-5 text-gray-600" />
            Visit Information
          </h3>
          <div className="space-y-3 text-sm">
            {post.attractionData.timings && (
              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-gray-400 mt-0.5" />
                <div>
                  <p className="font-medium text-gray-700">Timings</p>
                  <p className="text-gray-500">
                    {post.attractionData.timings.open} - {post.attractionData.timings.close}
                  </p>
                  {post.attractionData.timings.closedOn && (
                    <p className="text-red-500 text-xs">Closed: {post.attractionData.timings.closedOn}</p>
                  )}
                </div>
              </div>
            )}
            {post.attractionData.entryFee && (
              <div className="flex items-start gap-3">
                <Tag className="w-4 h-4 text-gray-400 mt-0.5" />
                <div>
                  <p className="font-medium text-gray-700">Entry Fee</p>
                  <p className="text-gray-500">Indian: {post.attractionData.entryFee.indian}</p>
                  <p className="text-gray-500">Foreign: {post.attractionData.entryFee.foreign}</p>
                </div>
              </div>
            )}
            {post.attractionData.timeNeeded && (
              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-gray-400 mt-0.5" />
                <div>
                  <p className="font-medium text-gray-700">Time Needed</p>
                  <p className="text-gray-500">{post.attractionData.timeNeeded}</p>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      )}

      {/* Popular Tags */}
      {post.tags?.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white rounded-2xl p-6 shadow-xl border border-gray-100"
        >
          <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Star className="w-5 h-5 text-gray-600" />
            Related Topics
          </h3>
          <div className="flex flex-wrap gap-2">
            {post.tags.slice(0, 8).map((tag, index) => (
              <span
                key={index}
                className={`${colors.light} ${colors.text} px-3 py-1.5 rounded-full text-xs font-medium cursor-pointer hover:opacity-80 transition-opacity`}
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      )}

      {/* City Page Link */}
      {relatedLinks?.cityPage && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <Link
            href={relatedLinks.cityPage}
            className={`block ${colors.button} text-white rounded-2xl p-6 text-center font-bold shadow-xl transition-all hover:shadow-2xl`}
          >
            Explore More in {post.city ? post.city.charAt(0).toUpperCase() + post.city.slice(1) : 'India'} →
          </Link>
        </motion.div>
      )}

      {/* Airport Service Link */}
      {relatedLinks?.airportService && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-gray-900 text-white rounded-2xl p-6 shadow-xl"
        >
          <h3 className="font-bold mb-2">✈️ Airport Transfer</h3>
          <p className="text-gray-300 text-sm mb-3">
            Need airport pickup/drop in {post.city ? post.city.charAt(0).toUpperCase() + post.city.slice(1) : 'your city'}?
          </p>
          <Link
            href={relatedLinks.airportService}
            className="inline-flex items-center gap-1 text-yellow-400 font-semibold text-sm hover:underline"
          >
            Book Airport Taxi <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      )}
    </div>
  );
}
