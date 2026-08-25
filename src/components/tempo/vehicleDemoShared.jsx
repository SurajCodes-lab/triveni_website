// src/components/tempo/vehicleDemoShared.jsx
"use client";
//
// Shared visual sections for the new vehicle-type / seater design:
//   - ROUTE_IMAGES  : destination -> real sightseeing photo
//   - routeLabel    : "delhi-to-manali" -> "Delhi → Manali"
//   - PopularRoutes : image-card grid of popular routes
//   - Testimonials  : review card grid
//   - ComparisonTable: 3-type comparison (type hubs)
//
// Premium dark editorial-luxe styling: glass panels, gradient accents,
// ring + shadow depth, hover glow. Shared so both clients stay in sync.

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight as FaArrowRight, Star as FaStar, Quote as FaQuote } from "@/components/ui/icons";
import { cn } from "@/utilis/cn";

const ease = [0.22, 1, 0.36, 1];

export const ROUTE_IMAGES = {
  manali: "/images/sightseeing/Manali/Manali_hero_section.jpg",
  shimla: "/images/sightseeing/Shimla/Mall_Road.jpg",
  dharamshala: "/images/sightseeing/Dharamshala/Bhagsunag_Waterfall.jpg",
  dalhousie: "/images/sightseeing/Dalhousie/Dainkund_Peak.jpg",
  kasol: "/images/sightseeing/Kasol/Chalal_Trek.jpg",
  kullu: "/images/sightseeing/Manali/Manali_hero_section.jpg",
  haridwar: "/images/sightseeing/Haridwar/Chandi_Devi_Temple.jpg",
  rishikesh: "/images/sightseeing/Rishikesh/Beatles_Ashram.jpg",
  dehradun: "/images/sightseeing/Dehradun/Dehradun_hero_section.jpg",
  mussoorie: "/images/sightseeing/Mussoorie/Gun_Hill.jpg",
  nainital: "/images/sightseeing/Nainital/Bhimtal_Lake.jpg",
  "jim-corbett": "/images/sightseeing/Jim_Corbett/Corbett_Falls.jpg",
  agra: "/images/sightseeing/Agra/Agra_Hero_section.jpg",
  jaipur: "/images/sightseeing/Jaipur/Albert_Hall_Museum.jpg",
  chandigarh: "/images/sightseeing/Chandigarh/Chandigarh_hero_section.jpg",
  udaipur: "/images/sightseeing/Udaipur/City_Palace.jpg",
  jodhpur: "/images/packages/rajasthan.webp",
  amritsar: "/images/sightseeing/Amritsar/Amristar_hero_section.jpg",
  ayodhya: "/images/sightseeing/Ayodhya/Hanuman_Garhi.jpg",
  varanasi: "/images/sightseeing/Varanasi/Assi_Ghat.jpg",
  "mathura-vrindavan": "/images/sightseeing/Mathura_Vrindavan/Banke_Bihari_Temple.jpg",
  "vaishno-devi": "/images/sightseeing/Vaishno_Devi/Bhairavnath_Temple.jpg",
  "char-dham": "/images/sightseeing/Char_Dham/Kedarnath_Temple.jpg",
  kedarnath: "/images/sightseeing/Char_Dham/Kedarnath_Temple.jpg",
  badrinath: "/images/sightseeing/Char_Dham/Badrinath_Temple.jpg",
  pushkar: "/images/sightseeing/Ajmer_Pushkar/Brahma_Temple_Pushkar.jpg",
  neemrana: "/images/sightseeing/Neemrana/Baori_Step_Well.jpg",
  ranthambore: "/images/packages/rajasthan.webp",
  "mount-abu": "/images/sightseeing/Mount_Abu/Achalgarh_Fort.jpg",
};

const FALLBACK_IMG = "/images/packages/rajasthan.webp";

export function routeLabel(slug) {
  return slug
    .split("-to-")
    .map((p) => p.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()))
    .join(" → ");
}

export function routeImage(slug) {
  const dest = slug.split("-to-")[1];
  return ROUTE_IMAGES[dest] || FALLBACK_IMG;
}

/* ----------------------------- PopularRoutes ----------------------------- */
export function PopularRoutes({ routes = [], accent, limit = 6, title = "Popular routes for this vehicle" }) {
  const items = routes.slice(0, limit);
  if (!items.length) return null;
  return (
    <div className="mt-12">
      <div className="flex items-center gap-3">
        <span className="h-px w-8 bg-gradient-to-r from-transparent to-amber-400/60" />
        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-300">{title}</span>
      </div>
      <div className="mt-6 grid grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((r, i) => (
          <motion.div
            key={r}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, ease, delay: (i % 3) * 0.06 }}
          >
            <Link
              href={`/${r}`}
              className="group relative block overflow-hidden rounded-3xl ring-1 ring-inset ring-white/10 shadow-[0_20px_60px_-30px_rgba(0,0,0,0.9)] transition-all duration-500 hover:ring-amber-400/50 hover:-translate-y-1"
            >
              <div className="relative aspect-[16/10] w-full">
                <Image
                  src={routeImage(r)}
                  alt={routeLabel(r)}
                  fill
                  sizes="(max-width: 640px) 50vw, 33vw"
                  className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070B16] via-[#070B16]/35 to-transparent" />
                <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" style={{ background: `radial-gradient(60% 60% at 50% 100%, ${accent}33, transparent 70%)` }} />
              </div>
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-2 p-5">
                <div>
                  <div className="text-[10px] font-semibold uppercase tracking-[0.16em] text-amber-300/90">Delhi →</div>
                  <div className="font-display-serif text-lg sm:text-xl font-bold leading-tight drop-shadow-sm">
                    {routeLabel(r).split(" → ")[1]}
                  </div>
                </div>
                <span
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-[#070B16] shadow-lg transition-all duration-300 group-hover:scale-110"
                  style={{ background: accent }}
                >
                  <FaArrowRight className="h-4 w-4" />
                </span>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

/* ------------------------------ Testimonials ------------------------------ */
const TESTIMONIALS = [
  { name: "Rohit & family", trip: "Delhi → Manali", body: "Booked a 17-seater for our extended family trip to Manali. Driver knew the mountain roads, vehicle was spotless and AC worked throughout. The whole group travelled together — no splitting cars." },
  { name: "Priya (wedding planner)", trip: "Jaipur wedding", body: "Coordinated three vehicles for a 90-guest wedding in Jaipur. One point of contact, on-time arrivals for baraat and vidai, and the decorated tempo looked premium. Will repeat." },
  { name: "Amit, corporate offsite", trip: "Delhi → Mussoorie", body: "60 employees, four tempos, multi-pickup across Delhi NCR. GST invoice on time, operations manager reachable all three days. Far smoother than juggling aggregator cabs." },
  { name: "Sunita, pilgrimage group", trip: "Chardham yatra", body: "Group of 14 senior citizens on the Chardham circuit. The driver was patient with prayer breaks and knew every dham's darshan timing. Comfortable push-back seats made the long days bearable." },
  { name: "Karthik, college trip", trip: "Rajasthan tour", body: "25 of us on a 6-day Rajasthan loop. One 26-seater kept the whole batch together, driver doubled as a local guide in Jaipur and Jodhpur. Transparent per-km billing." },
  { name: "Meera, airport pickup", trip: "Delhi IGI group", body: "International guests arriving in three batches — one vehicle handled all pickups with a meet-and-greet. Clean, on time, and the driver waited through delays with no extra fuss." },
];

export function Testimonials({ accent }) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {TESTIMONIALS.map((t, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease, delay: (i % 3) * 0.06 }}
          className="group relative flex flex-col overflow-hidden rounded-3xl ring-1 ring-inset ring-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-7 shadow-[0_24px_70px_-40px_rgba(0,0,0,0.9)] transition-all duration-500 hover:ring-amber-400/40 hover:-translate-y-1"
        >
          <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full opacity-[0.07] blur-2xl transition-opacity duration-500 group-hover:opacity-20" style={{ background: accent }} />
          <FaQuote className="h-9 w-9 text-amber-400/15" />
          <div className="mt-4 flex items-center gap-0.5">
            {[0, 1, 2, 3, 4].map((s) => <FaStar key={s} className="h-4 w-4 fill-amber-400 text-amber-400" />)}
          </div>
          <p className="mt-4 flex-1 text-[15px] leading-relaxed text-white/80">"{t.body}"</p>
          <div className="mt-6 flex items-center gap-3 border-t border-white/10 pt-5">
            <div
              className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-amber-300 to-orange-500 font-bold text-[#070B16] shadow-lg"
            >
              {t.name.charAt(0)}
            </div>
            <div>
              <div className="text-sm font-semibold">{t.name}</div>
              <div className="text-xs text-white/50">{t.trip}</div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

/* ---------------------------- ComparisonTable ---------------------------- */
export function ComparisonTable({ current, others, accent }) {
  const cols = [current, ...others].filter(Boolean);
  if (cols.length < 2) return null;
  const padCount = 3 - cols.length;
  const row = (label, render) => (
    <div className="grid grid-cols-4 items-center gap-2 border-t border-white/[0.07] px-4 py-4 sm:px-6">
      <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-white/40">{label}</div>
      {cols.map((c, i) => (
        <div key={i} className={cn("text-sm font-semibold text-center", c.slug === current.slug && "text-amber-300")}>
          {render(c)}
        </div>
      ))}
      {Array.from({ length: padCount }).map((_, i) => <div key={`pad${i}`} />)}
    </div>
  );
  return (
    <div className="overflow-hidden rounded-3xl ring-1 ring-inset ring-white/10 bg-gradient-to-b from-white/[0.05] to-white/[0.01] shadow-[0_30px_80px_-40px_rgba(0,0,0,0.9)]">
      {/* header */}
      <div className="grid grid-cols-4 gap-2 px-4 py-6 sm:px-6">
        <div />
        {cols.map((c) => (
          <div key={c.slug} className="text-center">
            <div className={cn("font-display-serif text-lg sm:text-xl font-bold", c.slug === current.slug ? "text-amber-300" : "text-white")}>{c.type}</div>
            <div className="mt-0.5 text-[11px] text-white/45">{c.kicker}</div>
          </div>
        ))}
        {Array.from({ length: padCount }).map((_, i) => <div key={`hp${i}`} />)}
      </div>
      {row("Seats", (c) => c.seaters.map((s) => s.seats).join(" / "))}
      {row("From", (c) => <span className="bg-gradient-to-br from-amber-300 to-orange-500 bg-clip-text text-transparent">₹{c.perKm}/km</span>)}
      {row("Capacity", (c) => c.capacity)}
      {row("Best for", (c) => <span className="text-xs font-normal text-white/60">{c.kicker}</span>)}
      {row("Driver", () => "Included")}
      {row("AC", () => "Full AC")}
      <div className="grid grid-cols-4 gap-2 border-t border-white/[0.07] px-4 py-6 sm:px-6">
        <div />
        {cols.map((c) => (
          <div key={c.slug} className="text-center">
            <Link
              href={`/${c.slug}`}
              className={cn(
                "inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-semibold transition-all duration-300",
                c.slug === current.slug
                  ? "bg-gradient-to-br from-amber-300 to-orange-500 text-[#070B16] shadow-[0_8px_24px_-8px_rgba(245,184,46,0.6)]"
                  : "border border-white/15 bg-white/5 text-white hover:bg-white/10 hover:-translate-y-0.5"
              )}
            >
              {c.slug === current.slug ? "You're here" : "View"} <FaArrowRight className="h-3 w-3" />
            </Link>
          </div>
        ))}
        {Array.from({ length: padCount }).map((_, i) => <div key={`cp${i}`} />)}
      </div>
    </div>
  );
}