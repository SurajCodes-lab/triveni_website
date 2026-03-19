'use client';

import { useState, useEffect } from 'react';
import { Users, Eye } from '@/components/ui/icons';

/**
 * LiveActivityBadge — Shows simulated real-time activity to create urgency.
 * Displays "X people viewing" or "X booked today" with a live pulse dot.
 *
 * Usage:
 *   <LiveActivityBadge type="viewing" min={3} max={12} />
 *   <LiveActivityBadge type="booked" min={5} max={18} routeName="Delhi to Agra" />
 */

export default function LiveActivityBadge({
  type = 'viewing',
  min = 3,
  max = 12,
  routeName = '',
  className = '',
}) {
  const [count, setCount] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Generate initial count
    setCount(Math.floor(Math.random() * (max - min + 1)) + min);

    // Slowly fluctuate every 15-30 seconds
    const interval = setInterval(() => {
      setCount(prev => {
        const change = Math.random() > 0.5 ? 1 : -1;
        const next = prev + change;
        if (next < min) return min;
        if (next > max) return max;
        return next;
      });
    }, 15000 + Math.random() * 15000);

    return () => clearInterval(interval);
  }, [min, max]);

  if (!mounted) return null;

  const isViewing = type === 'viewing';

  return (
    <div className={`inline-flex items-center gap-2 text-xs font-medium ${className}`}>
      {/* Live pulse dot */}
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
      </span>

      <span className="text-gray-600">
        {isViewing ? (
          <>
            <span className="font-bold text-gray-900">{count}</span>
            {' '}people viewing {routeName ? <span className="font-semibold">{routeName}</span> : 'this'} right now
          </>
        ) : (
          <>
            <span className="font-bold text-gray-900">{count}</span>
            {' '}bookings today {routeName && <>for <span className="font-semibold">{routeName}</span></>}
          </>
        )}
      </span>
    </div>
  );
}
