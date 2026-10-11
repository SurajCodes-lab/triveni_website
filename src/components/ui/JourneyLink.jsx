'use client';

import Link from 'next/link';
import { getJourneyLinkResolution } from '@/lib/seo/journey-link-repairs';
import { trackWhatsAppClick } from '@/utilis/analytics';

// Only the explicitly reproduced missing destinations are changed.
// Existing links, events and children otherwise retain Next Link behaviour.
export default function JourneyLink({ href, children, onClick, ...props }) {
  const repair = getJourneyLinkResolution(href);
  if (!repair) return <Link href={href} onClick={onClick} {...props}>{children}</Link>;
  if (repair.href) return <Link {...props} href={repair.href} onClick={onClick}>{repair.label || children}</Link>;
  const message = `Hi Triveni Cabs, I would like to enquire about ${repair.subject}. Please confirm the travel options and availability for my dates.`;
  // The site-wide WhatsApp interceptor in StickyCtaContext stops click propagation in the
  // capture phase, so an onClick handler here never runs. Intent is recorded on pointerdown,
  // which fires first — the same pattern the contact page already uses.
  // The destination is part of the event location so each one dedupes and reports separately.
  const eventLocation = `journey_link_${repair.subject.replace(/[^a-z0-9]+/gi, '_').slice(0, 40)}`;
  return (
    <a {...props} href={`https://wa.me/917668570551?text=${encodeURIComponent(message)}`} target="_blank" rel="noopener noreferrer"
      data-wa-subject={repair.subject}
      onPointerDown={() => {
        try { trackWhatsAppClick(eventLocation, message, repair.subject); } catch { /* Link remains usable. */ }
      }}
      onClick={onClick}>
      <span>{children}<span className="block text-xs font-normal opacity-80">Enquire on WhatsApp</span></span>
    </a>
  );
}
