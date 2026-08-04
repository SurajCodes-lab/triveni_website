'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useMemo } from 'react';

/**
 * AutoRelatedFooter — slot-injected on every page.
 *
 * Reads current pathname and renders contextual internal links so that every
 * page has 6-12 high-quality outbound links to related money/hub pages. This
 * is the single biggest internal-linking lift across 2,000+ pages.
 *
 * No external data — pattern-based mapping that covers every page category.
 */

const ALWAYS_PRESENT = [
  { label: 'Outstation Cabs', href: '/outstation-cabs' },
  { label: 'Airport Taxi', href: '/airport-service' },
  { label: 'One-Way Cab', href: '/one-way-cab' },
  { label: 'Round Trip Cab', href: '/round-trip-cab' },
  { label: 'Tempo Traveller', href: '/tempo-traveller' },
  { label: 'Sightseeing Tours', href: '/sightseeing' },
  { label: 'Wedding Cars', href: '/wedding' },
  { label: 'Corporate Transport', href: '/corporate-transportation-service' },
];

// Cities used in slug patterns
const CITY_KEYWORDS = ['delhi', 'agra', 'jaipur', 'shimla', 'manali', 'amritsar', 'haridwar', 'rishikesh', 'dehradun', 'mussoorie', 'nainital', 'jodhpur', 'jaisalmer', 'udaipur', 'pushkar', 'ajmer', 'chandigarh', 'lucknow', 'varanasi', 'ayodhya', 'mathura', 'vrindavan', 'dharamshala', 'noida', 'gurgaon', 'kashmir'];

function detectCity(pathname) {
  for (const c of CITY_KEYWORDS) {
    const re = new RegExp(`(^|[/-])${c}([/-]|$)`);
    if (re.test(pathname)) return c;
  }
  return null;
}

function getContextualLinks(pathname) {
  const links = [];
  const seen = new Set();
  const add = (label, href) => { if (!seen.has(href) && href !== pathname) { seen.add(href); links.push({ label, href }); } };

  const city = detectCity(pathname);

  // Airport-related pages → suggest airport, terminal, related routes
  if (/airport|igi|jewar|terminal/i.test(pathname)) {
    add('All Airport Services', '/airport-service');
    add('Delhi T1 Domestic', '/airport-service/delhi/igi-terminal-1-domestic');
    add('Delhi T2 Domestic', '/airport-service/delhi/igi-terminal-2-domestic');
    add('Delhi T3 International', '/airport-service/delhi/igi-terminal-3-international');
    add('Jewar (NIA)', '/airport-service/jewar/jewar-terminal-1-international');
    if (city) add(`${city.charAt(0).toUpperCase()+city.slice(1)} Airport`, `/airport-service/${city}`);
  }

  // Wedding pages
  if (/wedding|baraat|doli|marriage/i.test(pathname)) {
    add('Wedding Cars', '/wedding');
    add('Decorated Cars', '/wedding/car-decoration-packages');
    add('Baraat Tempo Traveller', '/wedding/baraat-tempo-traveller');
    if (city) add(`Wedding Cars ${city}`, `/wedding/${city}`);
  }

  // Tour / sightseeing pages
  if (/sightseeing|tour|trip|itinerary|travel-guide|food-tour|shopping-guide/i.test(pathname)) {
    add('Sightseeing Tours', '/sightseeing');
    add('Tours With Guide', '/tours-with-guide');
    add('Religious Tours', '/religious-tours');
    add('Char Dham Yatra', '/chardham-yatra');
    add('Golden Triangle Tour', '/golden-triangle-english-speaking-driver');
    if (city) add(`${city.charAt(0).toUpperCase()+city.slice(1)} Travel Guide`, `/${city}-travel-guide`);
  }

  // Corporate pages
  if (/corporate/i.test(pathname)) {
    add('Corporate Transport', '/corporate-transportation-service');
    add('Get Corporate Quote', '/get-corporate-quote');
    add('Corporate vs Aggregators', '/corporate-cab-vs-aggregators');
  }

  // Comparison pages
  if (/-vs-|comparison/i.test(pathname)) {
    add('Sedan vs SUV', '/sedan-vs-suv');
    add('Tempo vs Bus', '/tempo-vs-bus');
    add('Bus vs Tempo (Wedding)', '/bus-vs-tempo-for-wedding');
    add('12 vs 17 Seater', '/12-seater-vs-17-seater-tempo');
    add('Self-drive vs Chauffeur', '/self-drive-vs-chauffeur');
    add('Triveni vs Ola', '/triveni-cabs-vs-ola');
  }

  // Family / friends / honeymoon
  if (/family-trip|friends-trip|honeymoon|bachelor/i.test(pathname)) {
    add('Family Trip Manali', '/family-trip-manali-from-delhi');
    add('Family Trip Kashmir', '/family-trip-kashmir-from-delhi');
    add('Friends Trip Goa', '/friends-trip-goa-from-delhi');
    add('Honeymoon Shimla Manali', '/honeymoon-shimla-manali-by-car');
    add('Tempo Traveller', '/tempo-traveller');
  }

  // Religious / pilgrimage
  if (/ayodhya|ram-mandir|chardham|kedarnath|badrinath|vaishno|amritsar|haridwar|rishikesh|varanasi|prayagraj|pushkar|tirupati|temple|yatra/i.test(pathname)) {
    add('Religious Tours', '/religious-tours');
    add('Ayodhya Ram Mandir from Delhi', '/ayodhya-ram-mandir-tour-from-delhi');
    add('Char Dham Yatra', '/chardham-yatra');
    add('Prayagraj Sangam Tour', '/prayagraj-sangam-tour');
    add('Ayodhya 1 Day Package', '/ayodhya-1-day-package');
  }

  // Festival / seasonal
  if (/diwali|holi|christmas|new-year|baisakhi|navratri|durga|kanwar|kumbh|chhath|guru-purab|maha-shivratri|republic-day/i.test(pathname)) {
    add('Christmas & New Year Packages', '/christmas-new-year-cab-packages');
    add('Christmas Shimla Manali', '/christmas-shimla-manali-package');
    add('Holi Mathura Vrindavan', '/holi-mathura-vrindavan-cab-service');
    add('Summer Vacation 2026', '/summer-vacation-cab-packages-2026');
    add('Long Weekend Getaways', '/long-weekend-getaway-packages-2026');
  }

  // Station / railway
  if (/station|railway|junction|cantt/i.test(pathname)) {
    add('All Station Taxi', '/railway-station-taxi');
    add('Bus Stand Taxi', '/bus-stand-taxi');
    add('New Delhi Station', '/new-delhi-station-taxi');
    add('Hazrat Nizamuddin', '/hazrat-nizamuddin-station-taxi');
    add('Agra Cantt Station', '/agra-cantt-station-taxi');
  }

  // International tourist
  if (/foreign|international|english-speaking|private-driver|tourist|tour-with-guide/i.test(pathname)) {
    add('Hire Driver for Foreigners', '/private-driver-hire-india');
    add('Tours With Licensed Guide', '/tours-with-guide');
    add('Golden Triangle (English Driver)', '/golden-triangle-english-speaking-driver');
    add('India Road Trip Guide', '/india-road-trip-guide-for-tourists');
    add('Safe Travel India Tips', '/safe-travel-india-for-tourists');
  }

  // City hub / generic city pages — link to associated services
  if (city && /^\/[a-z-]+$/.test(pathname) && pathname !== '/about' && pathname !== '/contact') {
    const C = city.charAt(0).toUpperCase() + city.slice(1);
    add(`${C} Airport Cab`, `/airport-service/${city}`);
    add(`Cab Service in ${C}`, `/cab-service/${city}`);
    add(`Local Taxi ${C}`, `/local-taxi/${city}`);
    add(`Outstation from ${C}`, `/outstation-cabs/${city}`);
    add(`Things to Do near ${C}`, `/places-to-visit-near-${city}`);
    add(`Best Time to Visit ${C}`, `/best-time-to-visit/${city}`);
    add(`How to Reach ${C}`, `/how-to-reach-${city}`);
  }

  // Pad with always-present money-page links to reach 8-10 minimum
  for (const item of ALWAYS_PRESENT) {
    if (links.length >= 12) break;
    add(item.label, item.href);
  }

  return links.slice(0, 12);
}

export default function AutoRelatedFooter() {
  const pathname = usePathname() || '/';

  // Skip on pages where it doesn't add value (or could clutter)
  if (
    pathname === '/' ||
    pathname.startsWith('/api/') ||
    pathname.startsWith('/admin') ||
    pathname.startsWith('/search') ||
    pathname === '/cancellation-and-refund-policy' ||
    pathname === '/privacy-policy' ||
    pathname === '/terms-and-conditions'
  ) {
    return null;
  }

  const links = useMemo(() => getContextualLinks(pathname), [pathname]);
  if (links.length === 0) return null;

  // ItemList schema for crawler-discoverable internal link list
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Related Triveni Cabs Services',
    numberOfItems: links.length,
    itemListElement: links.map((l, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      url: 'https://www.trivenicabs.in' + l.href,
      name: l.label,
    })),
  };

  // Premium band: sits between the page and the dark footer, so it reads as
  // one continuous surface (the old flat-gray strip broke the flow sitewide).
  return (
    <section
      aria-labelledby="related-pages-heading"
      className="relative border-t border-white/5 bg-slate-950 py-10 md:py-12"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      {/* Highway lane divider — the brand motif */}
      <span
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-[3px] bg-[repeating-linear-gradient(90deg,#FACF2D_0_18px,transparent_18px_34px)] opacity-50"
      />
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#FACF2D]">
          Explore Triveni
        </p>
        <h2
          id="related-pages-heading"
          className="mt-2 mb-5 text-lg font-extrabold tracking-tight text-white md:text-xl"
        >
          Related Triveni Cabs Services
        </h2>
        <ul className="flex flex-wrap gap-2.5">
          {links.map((l, i) => (
            <li key={i}>
              <Link
                href={l.href}
                className="inline-flex min-h-[40px] items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white/70 transition-all duration-200 hover:border-[#FACF2D]/50 hover:bg-[#FACF2D]/10 hover:text-[#FACF2D]"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
