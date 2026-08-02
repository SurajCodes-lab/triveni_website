'use client';

import { trackPhoneCall, trackWhatsAppClick } from '@/utilis/analytics';

/**
 * TrackedCta — a thin client wrapper around a CTA anchor so that server
 * components (e.g. the one-way / round-trip / outstation hub page.js files,
 * which are RSC and cannot attach onClick handlers) can still fire GA
 * conversion events on Call / WhatsApp clicks.
 *
 * Usage (inside a server component is fine — this is a client component):
 *   <TrackedCta type="call" location="oneway_hub_hero" className="...">Call 7668570551</TrackedCta>
 *   <TrackedCta type="whatsapp" location="oneway_hub_hero" href="https://wa.me/917668570551?text=..." className="...">WhatsApp</TrackedCta>
 *
 * - type="call": defaults href to tel:+917668570551
 * - type="whatsapp": defaults href to wa.me, opens in a new tab with noopener
 */
export default function TrackedCta({
  type = 'call',
  location = 'cta',
  href,
  message = '',
  className = '',
  ariaLabel,
  children,
}) {
  const isCall = type === 'call';
  const resolvedHref =
    href || (isCall ? 'tel:+917668570551' : 'https://wa.me/917668570551');

  const handleClick = () => {
    if (isCall) {
      trackPhoneCall(location);
    } else {
      trackWhatsAppClick(location, message);
    }
  };

  const externalProps = isCall
    ? {}
    : { target: '_blank', rel: 'noopener noreferrer' };

  return (
    <a
      href={resolvedHref}
      onClick={handleClick}
      aria-label={ariaLabel}
      className={className}
      {...externalProps}
    >
      {children}
    </a>
  );
}
