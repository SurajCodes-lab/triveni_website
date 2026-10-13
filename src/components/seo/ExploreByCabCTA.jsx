import Link from 'next/link';
import { Phone, MessageCircle, Car, ArrowRight, MapPin, IndianRupee, ShieldCheck } from '@/components/ui/icons';

/**
 * ExploreByCabCTA — reusable, server-safe commercial CTA block.
 *
 * Converts informational "places to visit near <city>" traffic into bookings
 * and flows internal-link authority to commercial pages: the city hub (/<slug>)
 * and specific one-way route pages (/<city>-to-<dest>).
 *
 * No client-only hooks — safe to render in server components OR client components.
 *
 * Props:
 *  - cityName  : display name, e.g. "Delhi"
 *  - citySlug  : url slug for the city hub, e.g. "delhi" -> links to /delhi
 *  - links     : array of { label, href } internal route targets (one-way routes etc.)
 */
// cityHubHref is resolved against the build manifest by the caller and is null
// when the city has no hub page. It used to be synthesised here as `/${citySlug}`,
// which held for every city that had one and broke on Srinagar — where a
// redirect then pointed the dead link at /cab-service/srinagar, also missing.
export default function ExploreByCabCTA({ cityName, citySlug, links = [], cityHubHref = null, cabServiceHref = null }) {
  const waText = encodeURIComponent(
    `Hi, I want to book a cab to explore places near ${cityName}. Please share fares.`
  );

  return (
    <section className="py-16 md:py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="relative overflow-hidden rounded-3xl border border-teal-100 bg-gradient-to-br from-teal-50 via-emerald-50/60 to-white p-8 md:p-12">
          {/* subtle map-dot texture */}
          <div
            className="absolute inset-0 opacity-[0.05]"
            style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(13,148,136,0.6) 1px, transparent 0)', backgroundSize: '22px 22px' }}
          />

          <div className="relative z-10 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* ── Pitch + primary CTAs ── */}
            <div>
              <div className="inline-flex items-center gap-2 bg-white px-4 py-1.5 rounded-full mb-5 border border-teal-100 shadow-sm">
                <Car className="w-4 h-4 text-teal-600" />
                <span className="text-teal-700 font-semibold text-xs uppercase tracking-wider">Book Your Trip</span>
              </div>

              <h2 className="text-2xl md:text-4xl font-black text-stone-800 leading-tight">
                Explore {cityName} by Cab
              </h2>
              <p className="text-stone-600 mt-4 text-base md:text-lg leading-relaxed">
                Skip the planning hassle. Book a clean AC cab with an experienced
                driver who knows every route near {cityName}. Transparent per-km
                pricing — Sedan from <span className="font-bold text-stone-800">&#8377;11/km</span>,
                SUV from <span className="font-bold text-stone-800">&#8377;15/km</span>.
                No advance payment, no hidden charges.
              </p>

              <div className="flex flex-wrap items-center gap-x-5 gap-y-2 mt-5 text-sm text-stone-500">
                <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-teal-600" /> Verified Drivers</span>
                <span className="flex items-center gap-1.5"><IndianRupee className="w-4 h-4 text-teal-600" /> Pay After Trip</span>
                <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-teal-600" /> All Routes Covered</span>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 mt-7">
                <a
                  href="tel:+917668570551"
                  className="inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-teal-600 to-emerald-600 text-white px-7 py-3.5 rounded-2xl font-bold text-base shadow-lg shadow-teal-500/25 hover:from-teal-500 hover:to-emerald-500 hover:scale-[1.03] transition-all duration-300"
                >
                  <Phone className="w-5 h-5" /> Call 7668570551
                </a>
                <a
                  href={`https://wa.me/917668570551?text=${waText}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 bg-white text-teal-700 px-7 py-3.5 rounded-2xl font-bold text-base border border-teal-200 hover:border-teal-400 hover:bg-teal-50 transition-all duration-300"
                >
                  <MessageCircle className="w-5 h-5" /> WhatsApp Quote
                </a>
              </div>
            </div>

            {/* ── Internal links: city hub + popular routes ── */}
            <div className="bg-white rounded-2xl border border-stone-200 p-6 md:p-7 shadow-sm">
              <h3 className="text-sm font-bold text-stone-700 uppercase tracking-wider mb-4">
                Popular Cab Routes &amp; Services
              </h3>
              <div className="grid sm:grid-cols-2 gap-2.5">
                {/* City hub — flagship commercial page */}
                {cityHubHref && (
                <Link
                  href={cityHubHref}
                  className="group flex items-center gap-2.5 rounded-xl border border-teal-200 bg-teal-50/60 px-4 py-3 hover:border-teal-400 hover:bg-teal-50 transition-all duration-300 sm:col-span-2"
                >
                  <Car className="w-4 h-4 text-teal-600 flex-shrink-0" />
                  <span className="text-sm font-bold text-stone-800 group-hover:text-teal-700 transition-colors">{cityName} Taxi Service &amp; Outstation Cabs</span>
                  <ArrowRight className="w-4 h-4 text-teal-500 ml-auto flex-shrink-0 group-hover:translate-x-0.5 transition-transform" />
                </Link>
                )}

                {/* Specific one-way route pages (page-2 commercial targets) */}
                {links.map((link, i) => (
                  <Link
                    key={i}
                    href={link.href}
                    className="group flex items-center gap-2.5 rounded-xl border border-stone-200 px-4 py-3 hover:border-teal-300 hover:bg-stone-50 transition-all duration-300"
                  >
                    <MapPin className="w-4 h-4 text-teal-500 flex-shrink-0" />
                    <span className="text-sm font-semibold text-stone-700 group-hover:text-teal-700 transition-colors leading-tight">{link.label}</span>
                  </Link>
                ))}

                {/* Local taxi service in this city — targets "taxi service in <city>" */}
                {cabServiceHref && (
                  <Link
                    href={cabServiceHref}
                    className="group flex items-center gap-2.5 rounded-xl border border-stone-200 px-4 py-3 hover:border-teal-300 hover:bg-stone-50 transition-all duration-300"
                  >
                    <Car className="w-4 h-4 text-teal-500 flex-shrink-0" />
                    <span className="text-sm font-semibold text-stone-700 group-hover:text-teal-700 transition-colors leading-tight">Taxi Service in {cityName}</span>
                  </Link>
                )}

                {/* Category hubs — always exist */}
                <Link
                  href="/one-way-cab"
                  className="group flex items-center gap-2.5 rounded-xl border border-stone-200 px-4 py-3 hover:border-teal-300 hover:bg-stone-50 transition-all duration-300"
                >
                  <ArrowRight className="w-4 h-4 text-teal-500 flex-shrink-0" />
                  <span className="text-sm font-semibold text-stone-700 group-hover:text-teal-700 transition-colors leading-tight">One-Way Cab Booking</span>
                </Link>
                <Link
                  href="/tour-package"
                  className="group flex items-center gap-2.5 rounded-xl border border-stone-200 px-4 py-3 hover:border-teal-300 hover:bg-stone-50 transition-all duration-300"
                >
                  <Car className="w-4 h-4 text-teal-500 flex-shrink-0" />
                  <span className="text-sm font-semibold text-stone-700 group-hover:text-teal-700 transition-colors leading-tight">Tour Packages</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
