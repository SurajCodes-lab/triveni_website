'use client';

import { Star } from '@/components/ui/icons';

/**
 * GoogleReviewsBadge — Compact Google-style review badge for trust signals.
 * Shows star rating + review count with Google branding.
 *
 * Usage:
 *   <GoogleReviewsBadge />
 *   <GoogleReviewsBadge variant="compact" />
 *   <GoogleReviewsBadge variant="full" />
 */

const REVIEWS = [
  { name: 'Amit Verma', city: 'Delhi', text: 'Booked Delhi-Agra cab. Driver was on time, car was spotless. Best price anywhere.', rating: 5, date: 'Feb 2026' },
  { name: 'Neha Gupta', city: 'Jaipur', text: 'Used for our wedding. Mercedes was stunning. Professional chauffeur. Highly recommend!', rating: 5, date: 'Jan 2026' },
  { name: 'Vikram Singh', city: 'Chandigarh', text: 'Tempo traveller for family trip to Manali. AC worked great, driver knew the hills well.', rating: 5, date: 'Dec 2025' },
  { name: 'Kavita Joshi', city: 'Haridwar', text: 'Chardham Yatra package was perfectly organized. Hotel, darshan, everything handled.', rating: 5, date: 'Nov 2025' },
  { name: 'Mohammed Farhan', city: 'Agra', text: 'Company outing bus to Rishikesh. 40 seater was comfortable. Great trip!', rating: 5, date: 'Oct 2025' },
];

function StarRating({ rating = 5, size = 'sm' }) {
  const sizeClass = size === 'sm' ? 'w-3 h-3' : 'w-4 h-4';
  return (
    <div className="flex gap-0.5">
      {[1,2,3,4,5].map(i => (
        <Star
          key={i}
          className={`${sizeClass} ${i <= rating ? 'text-[#FBBC04] fill-[#FBBC04]' : 'text-gray-300'}`}
        />
      ))}
    </div>
  );
}

export default function GoogleReviewsBadge({ variant = 'default' }) {
  if (variant === 'compact') {
    return (
      <div className="inline-flex items-center gap-2 bg-white border border-gray-200 rounded-lg px-3 py-2 shadow-sm">
        {/* Google G icon */}
        <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24">
          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
          <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
          <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
          <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
        </svg>
        <div className="flex items-center gap-1.5">
          <span className="text-sm font-bold text-gray-900">4.9</span>
          <StarRating rating={5} size="sm" />
          <span className="text-xs text-gray-500">(10,000+)</span>
        </div>
      </div>
    );
  }

  if (variant === 'full') {
    return (
      <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm">
        {/* Header */}
        <div className="flex items-center gap-3 mb-4 pb-4 border-b border-gray-100">
          <svg className="w-6 h-6 flex-shrink-0" viewBox="0 0 24 24">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
          </svg>
          <div>
            <p className="text-sm font-bold text-gray-900">Google Reviews</p>
            <div className="flex items-center gap-1.5">
              <span className="text-lg font-black text-gray-900">4.9</span>
              <StarRating rating={5} />
              <span className="text-xs text-gray-500">10,000+ reviews</span>
            </div>
          </div>
        </div>

        {/* Review cards */}
        <div className="space-y-3">
          {REVIEWS.slice(0, 3).map((review, idx) => (
            <div key={idx} className="flex gap-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center flex-shrink-0">
                <span className="text-white text-xs font-bold">{review.name.charAt(0)}</span>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold text-gray-900">{review.name}</span>
                  <span className="text-[10px] text-gray-400">{review.date}</span>
                </div>
                <StarRating rating={review.rating} size="sm" />
                <p className="text-xs text-gray-600 mt-1 line-clamp-2">{review.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Default: inline badge
  return (
    <div className="inline-flex items-center gap-2">
      <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24">
        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
      </svg>
      <StarRating rating={5} size="sm" />
      <span className="text-xs font-bold text-gray-900">4.9</span>
      <span className="text-[10px] text-gray-400">(10,000+ reviews)</span>
    </div>
  );
}
