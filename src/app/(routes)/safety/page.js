import Link from 'next/link';
import { Phone, Shield, Clock, Users, Star, ChevronRight, CheckCircle2, ArrowRight, ShieldCheck, UserCheck, MapPin, Car, Fingerprint, Lock } from '@/components/ui/icons';

export const revalidate = false;

export const metadata = {
  title: 'Safety Standards 2026 | Verified Drivers | GPS Tracking | Women Safety',
  description: 'Triveni Cabs safety: background-checked drivers, GPS tracking, SOS support, 24/7 helpline, sanitized vehicles, women safety features. 100% verified fleet. Call 7668570551.',
  keywords: 'safe cab service, safe taxi India, verified cab drivers, GPS tracked cab, women safe cab, cab safety features, safe taxi service, cab driver verification, vehicle safety standards, cab SOS feature, safe travel India, trusted cab company, verified taxi service, cab safety protocols, safe cab for women, night safe taxi, sanitized cab, clean cab service, safe outstation cab, safe airport taxi',
  authors: [{ name: 'Triveni Cabs' }],
  creator: 'Triveni Cabs',
  publisher: 'Triveni Cabs',
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: {
    canonical: '/safety',
  },
  openGraph: {
    title: 'Safety Standards | Verified Drivers | GPS Tracking | Triveni Cabs',
    description: 'Your safety is non-negotiable. Background-checked drivers, GPS tracking, SOS support, sanitized vehicles, and women safety features.',
    type: 'website',
    locale: 'en_IN',
    url: 'https://www.trivenicabs.in/safety',
    siteName: 'Triveni Cabs',
    images: [
      {
        url: '/images/about/about_banner.webp',
        width: 1200,
        height: 630,
        alt: 'Triveni Cabs Safety Standards'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Safety Standards | Verified Drivers | GPS Tracking | Triveni Cabs',
    description: 'Background-checked drivers, GPS tracking, SOS support, sanitized vehicles. Your safety is our priority.',
    creator: '@trivenicabs',
    site: '@trivenicabs',
    images: ['/images/about/about_banner.webp']
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function SafetyPage() {
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Safety Standards - Triveni Cabs",
    "description": "Comprehensive safety measures including driver verification, GPS tracking, vehicle sanitization, women safety features, and 24/7 emergency support.",
    "url": "https://www.trivenicabs.in/safety",
    "publisher": {
      "@type": "Organization",
      "name": "Triveni Cabs",
      "url": "https://www.trivenicabs.in",
      "telephone": "+91-7668570551"
    }
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Triveni Cabs",
    "url": "https://www.trivenicabs.in",
    "telephone": "+91-7668570551",
    "email": "cabstriveni@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "366 Dandupura near Tajganj",
      "addressLocality": "Agra",
      "addressRegion": "Uttar Pradesh",
      "postalCode": "282006",
      "addressCountry": "IN"
    },
    "sameAs": [
      "https://www.facebook.com/trivenicabs",
      "https://www.instagram.com/trivenicabs"
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" },
      { "@type": "ListItem", "position": 2, "name": "Safety", "item": "https://www.trivenicabs.in/safety" }
    ]
  };

  const faqData = [
    {
      question: "How does Triveni Cabs verify its drivers?",
      answer: "Every driver undergoes a 5-step verification: police background check, driving license validation, address verification, driving skill test, and personal interview. Drivers must have 5+ years of experience. Re-verification happens annually."
    },
    {
      question: "Are the vehicles GPS tracked?",
      answer: "Yes, all vehicles are equipped with GPS tracking devices. Our control room monitors every trip in real-time. You can share your live location with family members. Any route deviation triggers an automatic alert."
    },
    {
      question: "What safety features are available for women passengers?",
      answer: "Women safety features include: trip sharing via WhatsApp, SOS panic button (call our helpline), priority female driver requests (subject to availability), automatic trip monitoring for night rides, and verified driver profiles with photo ID."
    },
    {
      question: "What happens in case of a breakdown or emergency?",
      answer: "Call our 24/7 helpline at 7668570551. For breakdowns, a replacement vehicle is dispatched immediately (within 60-90 minutes in cities, 2-3 hours in remote areas). For medical emergencies, we coordinate with local emergency services."
    },
    {
      question: "Are vehicles sanitized after every trip?",
      answer: "Yes, vehicles undergo thorough sanitization after every trip. This includes disinfection of door handles, seat belts, steering, dashboard, and AC vents. Deep cleaning and interior sanitization is done weekly. Sanitization certificates available on request."
    },
    {
      question: "What insurance coverage do passengers have?",
      answer: "All vehicles carry comprehensive insurance covering passengers. This includes personal accident cover of up to ₹5 lakh per passenger, third-party liability, and vehicle damage coverage. Insurance documents are available in every vehicle."
    },
    {
      question: "Can I share my trip details with family?",
      answer: "Yes, once your trip starts, you receive a booking confirmation with driver details (name, phone, vehicle number, photo). You can share this with family. GPS tracking link can be shared for real-time location monitoring."
    },
    {
      question: "How do you ensure vehicle maintenance standards?",
      answer: "Every vehicle undergoes monthly maintenance checks covering brakes, tires, lights, AC, engine, and suspension. Vehicles older than 5 years are retired from service. Service records are maintained digitally. Random quality audits are conducted."
    }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };

  const driverVerification = [
    { title: "Police Background Check", desc: "Criminal record verification through local police and national database", icon: Shield },
    { title: "License Verification", desc: "Driving license authenticity check with RTO validation", icon: CheckCircle2 },
    { title: "Address Verification", desc: "Physical address verification with government ID proof", icon: MapPin },
    { title: "Driving Skill Test", desc: "On-road driving test to assess city and highway driving skills", icon: Car },
    { title: "Medical Fitness", desc: "Health check including vision test and drug screening", icon: UserCheck },
    { title: "Personal Interview", desc: "Behavioral assessment and customer service orientation screening", icon: Users },
  ];

  const vehicleSafety = [
    { title: "GPS Tracking", desc: "Real-time location monitoring with route deviation alerts" },
    { title: "Regular Maintenance", desc: "Monthly checks on brakes, tires, engine, AC, and all critical systems" },
    { title: "Vehicle Age Limit", desc: "No vehicle older than 5 years in our fleet - guaranteed modern vehicles" },
    { title: "Sanitization", desc: "Full interior sanitization after every trip, deep cleaning weekly" },
    { title: "Safety Equipment", desc: "First aid kit, fire extinguisher, and emergency tools in every vehicle" },
    { title: "AC Servicing", desc: "Regular AC filter cleaning and servicing for healthy cabin air" },
  ];

  const passengerSafety = [
    { title: "Trip Sharing", desc: "Share live trip tracking link with family via WhatsApp or SMS", icon: MapPin },
    { title: "24/7 Helpline", desc: "Round-the-clock support at 7668570551 for any emergency or concern", icon: Phone },
    { title: "SOS Support", desc: "Instant emergency alert to our control room and nearest authorities", icon: Shield },
    { title: "Driver Details", desc: "Complete driver profile with photo, name, vehicle number shared before trip", icon: UserCheck },
    { title: "Insurance Cover", desc: "Comprehensive passenger insurance up to ₹5 lakh per person", icon: ShieldCheck },
    { title: "Feedback System", desc: "Rate every trip. Low-rated drivers are retrained or removed from service", icon: Star },
  ];

  const womenSafety = [
    { title: "Night Ride Monitoring", desc: "Enhanced GPS monitoring for all rides between 9 PM and 6 AM" },
    { title: "Trip Sharing Alerts", desc: "Automatic trip start/end notifications to your emergency contacts" },
    { title: "Verified Driver Profiles", desc: "Complete driver verification with photo ID shared before pickup" },
    { title: "Priority Support", desc: "Dedicated women safety helpline with priority response" },
  ];

  const safetyStats = [
    { value: "10,000+", label: "Safe Trips Completed" },
    { value: "100%", label: "Verified Drivers" },
    { value: "0", label: "Safety Incidents" },
    { value: "24/7", label: "Control Room Active" },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* === Steel Blue Command Center / Trust Theme === */}
      <div className="min-h-screen bg-[#f0f4f8]">

        {/* ─── HERO: Full-bleed dark with layered shield motif ─── */}
        <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-[#0a1628]">
          {/* Layered background patterns */}
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(56,189,248,0.08) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(14,165,233,0.06) 0%, transparent 40%), radial-gradient(circle at 60% 80%, rgba(2,132,199,0.05) 0%, transparent 40%)'
          }} />
          {/* Subtle grid overlay */}
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }} />

          {/* Large faded shield in background */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/4 opacity-[0.03]">
            <Shield className="w-[500px] h-[500px] text-white" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Content */}
            <div>
              <div className="inline-flex items-center gap-2 bg-sky-500/10 backdrop-blur-md px-5 py-2 rounded-full mb-8 border border-sky-400/20">
                <ShieldCheck className="w-4 h-4 text-sky-400" />
                <span className="text-sky-300 font-semibold text-sm tracking-wider uppercase">Your Safety, Our Promise</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-[1.1]">
                Safety is{' '}
                <span className="text-transparent bg-gradient-to-r from-sky-400 via-cyan-400 to-teal-300 bg-clip-text">
                  Non-Negotiable
                </span>
              </h1>

              <p className="text-lg md:text-xl text-slate-300/80 mb-8 max-w-lg leading-relaxed">
                Every driver verified. Every vehicle tracked. Every trip monitored. Your safety is the foundation of every journey with Triveni Cabs.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="tel:+917668570551"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-sky-500 to-cyan-500 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-xl shadow-sky-500/20 hover:shadow-sky-500/35 hover:scale-[1.02] transition-all"
                >
                  <Phone className="w-5 h-5" />
                  24/7 Helpline: 7668570551
                </Link>
                <Link
                  href="/reviews"
                  className="inline-flex items-center gap-2 bg-white/[0.06] backdrop-blur-xl text-white px-8 py-4 rounded-2xl font-bold text-lg border border-white/[0.1] hover:bg-white/[0.1] transition-all"
                >
                  Read Customer Reviews
                </Link>
              </div>
            </div>

            {/* Right: Safety stats grid */}
            <div className="hidden lg:grid grid-cols-2 gap-4">
              {safetyStats.map((stat, idx) => (
                <div key={idx} className="bg-white/[0.04] backdrop-blur-2xl rounded-2xl p-6 border border-white/[0.06] hover:border-sky-400/20 transition-all text-center">
                  <div className="text-3xl font-black text-transparent bg-gradient-to-r from-sky-400 to-cyan-300 bg-clip-text mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-slate-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom wave */}
          <div className="absolute bottom-0 left-0 right-0">
            <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
              <path d="M0 80L48 72C96 64 192 48 288 40C384 32 480 32 576 40C672 48 768 64 864 68C960 72 1056 64 1152 52C1248 40 1344 24 1392 16L1440 8V80H1392C1344 80 1248 80 1152 80C1056 80 960 80 864 80C768 80 672 80 576 80C480 80 384 80 288 80C192 80 96 80 48 80H0Z" fill="#f0f4f8"/>
            </svg>
          </div>
        </section>

        {/* ─── SEO Prose Section ─── */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a1628] mb-6 text-center">
              Your Safety Is the Foundation of Every Journey
            </h2>
            <div className="prose prose-lg max-w-none text-slate-700 space-y-4">
              <p>
                At <strong>Triveni Cabs</strong>, passenger safety is not an afterthought — it is the very foundation on which we have built our reputation. Since 2015, we have completed over <strong>10,000 safe trips</strong> across North India, earning a <Link href="/reviews" className="text-sky-600 hover:text-cyan-600 underline underline-offset-2">4.8-star safety rating from 2,847+ verified customers</Link>. Every ride you take with us is backed by a multi-layered <strong>safe cab service</strong> framework that covers driver verification, vehicle maintenance, real-time GPS tracking, emergency response, and dedicated women safety features.
              </p>
              <p>
                What does this mean in practice? It means every <strong>Triveni Cabs driver</strong> undergoes a rigorous 6-step verification process — police background check, driving license validation with the Regional Transport Office, address verification, a practical driving skill test, medical fitness screening, and a personal behavioral interview. Drivers must have a minimum of 5 years of professional driving experience, and they are re-verified annually. Any driver with a complaint ratio above 2% is immediately retrained or removed from the fleet.
              </p>
              <p>
                Our <Link href="/vehicles" className="text-sky-600 hover:text-cyan-600 underline underline-offset-2">vehicle fleet</Link> safety standards are equally uncompromising. Every car is <strong>GPS-tracked in real time</strong> from our <Link href="/agra" className="text-sky-600 hover:text-cyan-600 underline underline-offset-2">Agra</Link> control room. Vehicles undergo monthly maintenance checks covering brakes, tires, engine, AC, lights, and suspension. No vehicle older than 5 years operates in our fleet. After every trip, vehicles are thoroughly sanitized — door handles, seat belts, dashboard, steering, and AC vents are disinfected, with deep cleaning and fumigation performed weekly.
              </p>
              <p>
                For <strong>women passengers</strong> traveling solo or at night, we provide enhanced safety protocols: trip sharing via WhatsApp, automatic monitoring of all rides between 9 PM and 6 AM, verified driver profiles with photo ID shared before pickup, and a dedicated priority helpline. Whether you are booking an <Link href="/outstation-cabs" className="text-sky-600 hover:text-cyan-600 underline underline-offset-2">outstation cab</Link>, an <Link href="/airport-service" className="text-sky-600 hover:text-cyan-600 underline underline-offset-2">airport transfer</Link>, a <Link href="/local-taxi" className="text-sky-600 hover:text-cyan-600 underline underline-offset-2">local taxi</Link>, or a <Link href="/wedding" className="text-sky-600 hover:text-cyan-600 underline underline-offset-2">wedding car</Link> — your safety is guaranteed. Our 24/7 helpline (<strong>7668570551</strong>) is staffed by real humans, not automated bots, ensuring immediate response to any concern. Check our <Link href="/pricing" className="text-sky-600 hover:text-cyan-600 underline underline-offset-2">transparent pricing</Link> — no hidden charges, ever.
              </p>
            </div>
          </div>
        </section>

        {/* ─── DRIVER VERIFICATION: Bento grid with numbered steps ─── */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <span className="inline-block text-sm font-bold text-sky-600 bg-sky-100 px-4 py-1.5 rounded-full mb-4 tracking-wide uppercase">Driver Safety</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0a1628] mb-4">
                6-Step Driver Verification Process
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                No driver operates without clearing all 6 verification steps. Annual re-verification mandatory.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {driverVerification.map((item, idx) => (
                <div key={idx} className="group bg-white rounded-2xl p-6 shadow-[0_2px_20px_rgba(14,165,233,0.05)] border border-sky-100/50 hover:shadow-[0_8px_32px_rgba(14,165,233,0.1)] hover:border-sky-200 transition-all">
                  <div className="flex items-start gap-4">
                    <div className="relative">
                      <div className="w-12 h-12 bg-gradient-to-br from-sky-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg shadow-sky-500/15">
                        <item.icon className="w-5 h-5 text-white" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#0a1628] rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-[10px]">{idx + 1}</span>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold text-[#0a1628] mb-1 group-hover:text-sky-700 transition-colors">{item.title}</h3>
                      <p className="text-slate-600 text-sm">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── VEHICLE SAFETY: Dark inset section with icon grid ─── */}
        <section className="relative py-24 px-4 overflow-hidden bg-[#0a1628]">
          <div className="absolute inset-0 opacity-[0.04]" style={{
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)',
            backgroundSize: '24px 24px'
          }} />
          <div className="absolute top-0 right-0 w-96 h-96 bg-sky-500/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-cyan-500/10 rounded-full blur-[100px]" />

          <div className="relative z-10 max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <span className="inline-block text-sm font-bold text-cyan-300 bg-cyan-500/10 px-4 py-1.5 rounded-full mb-4 tracking-wide uppercase border border-cyan-400/20">Vehicle Standards</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Vehicle Safety Standards
              </h2>
              <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                Every vehicle meets strict safety and hygiene standards before it hits the road
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {vehicleSafety.map((item, idx) => (
                <div key={idx} className="bg-white/[0.04] backdrop-blur-xl rounded-2xl p-6 border border-white/[0.06] hover:bg-white/[0.07] hover:border-sky-400/20 transition-all group">
                  <div className="flex items-start gap-3">
                    <div className="p-1.5 bg-sky-500/15 rounded-lg mt-0.5">
                      <CheckCircle2 className="w-4 h-4 text-sky-400" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white mb-1 group-hover:text-sky-300 transition-colors">{item.title}</h3>
                      <p className="text-slate-400 text-sm">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── PASSENGER SAFETY: Card grid with individual accent colors ─── */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <span className="inline-block text-sm font-bold text-teal-600 bg-teal-100 px-4 py-1.5 rounded-full mb-4 tracking-wide uppercase">Passenger Protection</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0a1628] mb-4">
                Passenger Safety Features
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Multiple layers of safety to ensure peace of mind on every journey
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {passengerSafety.map((item, idx) => {
                const colors = [
                  { bg: "bg-sky-50", icon: "bg-sky-500", border: "hover:border-sky-200" },
                  { bg: "bg-cyan-50", icon: "bg-cyan-500", border: "hover:border-cyan-200" },
                  { bg: "bg-teal-50", icon: "bg-teal-500", border: "hover:border-teal-200" },
                  { bg: "bg-blue-50", icon: "bg-blue-500", border: "hover:border-blue-200" },
                  { bg: "bg-indigo-50", icon: "bg-indigo-500", border: "hover:border-indigo-200" },
                  { bg: "bg-slate-50", icon: "bg-slate-600", border: "hover:border-slate-200" },
                ];
                const c = colors[idx % colors.length];
                return (
                  <div key={idx} className={`bg-white rounded-2xl p-6 shadow-[0_2px_16px_rgba(0,0,0,0.04)] border border-slate-100 ${c.border} hover:shadow-md transition-all`}>
                    <div className={`inline-flex p-2.5 ${c.icon} rounded-xl mb-4 shadow-sm`}>
                      <item.icon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="font-bold text-[#0a1628] text-lg mb-2">{item.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ─── WOMEN SAFETY: Gradient accent section ─── */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50 rounded-3xl p-8 md:p-12 border border-purple-100/50">
              <div className="text-center mb-10">
                <div className="inline-flex p-3 bg-purple-100 rounded-xl mb-4">
                  <Shield className="w-8 h-8 text-purple-600" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-[#0a1628] mb-4">
                  Women Safety Features
                </h2>
                <p className="text-lg text-slate-600 max-w-xl mx-auto">
                  Enhanced safety measures for women passengers traveling solo or at night
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {womenSafety.map((item, idx) => (
                  <div key={idx} className="bg-white rounded-2xl p-6 shadow-sm border border-purple-100/40 hover:shadow-md hover:border-purple-200 transition-all">
                    <div className="flex items-start gap-3">
                      <div className="p-1.5 bg-purple-100 rounded-lg mt-0.5">
                        <CheckCircle2 className="w-4 h-4 text-purple-500" />
                      </div>
                      <div>
                        <h3 className="font-bold text-[#0a1628] mb-1">{item.title}</h3>
                        <p className="text-slate-600 text-sm">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ─── HYGIENE PROTOCOL: Checklist with neumorphic feel ─── */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block text-sm font-bold text-emerald-600 bg-emerald-100 px-4 py-1.5 rounded-full mb-4 tracking-wide uppercase">Hygiene</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0a1628] mb-4">
                Hygiene & Sanitization Protocol
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Comprehensive cleaning and sanitization standards for healthy travel
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-[0_4px_32px_rgba(0,0,0,0.04)] border border-slate-100">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Full interior sanitization after every trip",
                  "Door handles, seat belts, and dashboard disinfected",
                  "AC vents and filters cleaned regularly",
                  "Hand sanitizer available in every vehicle",
                  "Deep cleaning and fumigation weekly",
                  "Driver health monitoring and wellness checks",
                  "Contactless payment options available",
                  "Sanitization certification available on request",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 rounded-xl hover:bg-emerald-50/50 transition-colors">
                    <div className="p-1 bg-emerald-100 rounded-md mt-0.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                    </div>
                    <span className="text-slate-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ─── EMERGENCY SUPPORT: Centered card with gradient border ─── */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-2xl mx-auto">
            <div className="rounded-3xl p-1 bg-gradient-to-br from-sky-500 via-cyan-500 to-teal-500">
              <div className="bg-[#0a1628] rounded-[22px] p-10 md:p-14 text-center">
                <div className="inline-flex p-4 bg-sky-500/10 rounded-2xl mb-6 border border-sky-400/20">
                  <Phone className="w-10 h-10 text-sky-400" />
                </div>
                <h2 className="text-3xl md:text-4xl font-black text-white mb-3">
                  24/7 Emergency Support
                </h2>
                <p className="text-slate-400 mb-8 text-lg max-w-md mx-auto">
                  Our control room is staffed round-the-clock. Call anytime for emergencies, complaints, or assistance.
                </p>
                <div className="text-5xl font-black text-transparent bg-gradient-to-r from-sky-400 to-cyan-300 bg-clip-text mb-6">
                  7668570551
                </div>
                <p className="text-slate-500 mb-8 text-sm">Available 24 hours, 7 days a week</p>
                <Link
                  href="tel:+917668570551"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-sky-500 to-cyan-500 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-xl shadow-sky-500/20 hover:scale-[1.02] transition-all"
                >
                  <Phone className="w-5 h-5" />
                  Call Emergency Helpline
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ─── FAQ: Clean cards with blue accents ─── */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-14">
              <span className="inline-block text-sm font-bold text-sky-600 bg-sky-100 px-4 py-1.5 rounded-full mb-4 tracking-wide uppercase">FAQ</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0a1628] mb-4">
                Safety FAQs
              </h2>
              <p className="text-lg text-slate-600">
                Common questions about our safety standards and protocols
              </p>
            </div>

            <div className="space-y-4">
              {faqData.map((faq, idx) => (
                <div key={idx} className="bg-white rounded-2xl p-6 shadow-[0_2px_16px_rgba(0,0,0,0.04)] border border-slate-100 hover:border-sky-200 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-gradient-to-br from-sky-500 to-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white font-bold text-sm">{idx + 1}</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-[#0a1628] mb-2">{faq.question}</h3>
                      <p className="text-slate-600 text-sm leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── INTERLINKING: Comprehensive footer-style grids ─── */}
        <section className="py-16 px-4 bg-white border-t border-slate-100">
          <div className="max-w-7xl mx-auto space-y-12">

            {/* Related Services */}
            <div>
              <h2 className="text-sm font-bold text-sky-600 mb-5 tracking-widest uppercase">Our Services</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {[
                  { l: "Outstation Cab Booking", h: "/outstation-cabs", d: "Intercity travel from ₹11/km with verified drivers" },
                  { l: "One-Way Cab Service", h: "/one-way-cab", d: "Save 50% — pay single direction only" },
                  { l: "Round Trip Cab Booking", h: "/round-trip-cab", d: "Same driver for multi-day return trips" },
                  { l: "Local Taxi Hourly Rental", h: "/local-taxi", d: "Hourly packages from ₹1,200" },
                  { l: "Airport Transfer Service", h: "/airport-service", d: "Flight-tracked pickups & drops" },
                  { l: "Wedding Car Rental", h: "/wedding", d: "Decorated luxury cars for weddings" },
                ].map((s, i) => (
                  <Link key={i} href={s.h} className="block bg-[#f0f4f8] rounded-xl p-4 border border-sky-100/60 hover:border-sky-300 hover:shadow-md transition-all group">
                    <span className="font-semibold text-sm text-slate-700 group-hover:text-sky-700 transition-colors">{s.l}</span>
                    <span className="block text-xs text-slate-400 mt-1">{s.d}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Popular Cities */}
            <div>
              <h2 className="text-sm font-bold text-slate-400 mb-4 tracking-widest uppercase">Popular Cities</h2>
              <div className="flex flex-wrap gap-2">
                {[
                  { l: "Delhi Cab Service", h: "/delhi" }, { l: "Agra Cab Service", h: "/agra" }, { l: "Jaipur Cab Service", h: "/jaipur" },
                  { l: "Chandigarh Cab Service", h: "/chandigarh" }, { l: "Shimla Cab Service", h: "/shimla" }, { l: "Manali Cab Service", h: "/manali" },
                  { l: "Haridwar Cab Service", h: "/haridwar" }, { l: "Rishikesh Cab Service", h: "/rishikesh" }, { l: "Amritsar Cab Service", h: "/amritsar" },
                  { l: "Udaipur Cab Service", h: "/udaipur" },
                ].map((c, i) => (
                  <Link key={i} href={c.h} className="bg-[#f0f4f8] rounded-full px-5 py-2.5 text-slate-700 hover:bg-sky-50 hover:text-sky-700 transition-colors text-sm font-medium border border-sky-100/60 hover:border-sky-300">{c.l}</Link>
                ))}
              </div>
            </div>

            {/* Popular Tours */}
            <div>
              <h2 className="text-sm font-bold text-slate-400 mb-4 tracking-widest uppercase">Popular Tours</h2>
              <div className="flex flex-wrap gap-2">
                {[
                  { l: "Golden Triangle Tour", h: "/sightseeing/golden-triangle-tour-3-days" },
                  { l: "Same Day Agra Tour", h: "/same-day-agra-tour-from-delhi" },
                  { l: "Taj Mahal Sunrise Tour", h: "/sunrise-taj-mahal-tour-from-delhi" },
                  { l: "Char Dham Yatra by Car", h: "/religious-tours/char-dham-yatra-by-car" },
                  { l: "Rajasthan Circuit Tour", h: "/sightseeing/rajasthan-tour-from-delhi" },
                  { l: "Weekend Getaways from Delhi", h: "/weekend-getaways-from-delhi-by-car" },
                  { l: "Mathura Vrindavan Tour", h: "/sightseeing/mathura-vrindavan-tour-from-delhi" },
                  { l: "Delhi Sightseeing Tour", h: "/sightseeing/delhi-sightseeing-tour" },
                ].map((t, i) => (
                  <Link key={i} href={t.h} className="bg-[#f0f4f8] rounded-full px-5 py-2.5 text-slate-700 hover:bg-sky-50 hover:text-sky-700 transition-colors text-sm font-medium border border-sky-100/60 hover:border-sky-300">{t.l}</Link>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h2 className="text-sm font-bold text-slate-400 mb-4 tracking-widest uppercase">Quick Links</h2>
              <div className="flex flex-wrap gap-2">
                {[
                  { l: "Pricing & Fare Chart", h: "/pricing" }, { l: "Vehicle Fleet", h: "/vehicles" },
                  { l: "Customer Reviews", h: "/reviews" }, { l: "About Triveni Cabs", h: "/about" },
                  { l: "Corporate Service", h: "/corporate-transportation-service" }, { l: "Contact Us", h: "/contact" },
                  { l: "Tempo Traveller", h: "/tempo-traveller" }, { l: "All Routes", h: "/routes" },
                ].map((q, i) => (
                  <Link key={i} href={q.h} className="bg-[#f0f4f8] rounded-full px-5 py-2.5 text-slate-700 hover:bg-sky-50 hover:text-sky-700 transition-colors text-sm font-medium border border-sky-100/60 hover:border-sky-300">{q.l}</Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ─── CTA: Glass card on dark bg ─── */}
        <section className="py-20 px-4 bg-[#0a1628]">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white/[0.04] backdrop-blur-2xl rounded-3xl p-10 md:p-14 text-center border border-white/[0.08]">
              <ShieldCheck className="w-12 h-12 text-sky-400 mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
                Travel Safe with Triveni Cabs
              </h2>
              <p className="text-slate-400 mb-8 text-lg max-w-xl mx-auto">
                100% verified drivers, GPS tracked vehicles, 24/7 emergency support
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="tel:+917668570551"
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-sky-500 to-cyan-500 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-xl shadow-sky-500/20 hover:scale-[1.02] transition-all"
                >
                  <Phone className="w-5 h-5" />
                  Book a Safe Ride: 7668570551
                </Link>
                <Link
                  href="https://wa.me/917668570551?text=I want to book a cab"
                  className="inline-flex items-center justify-center gap-2 bg-white text-[#0a1628] px-8 py-4 rounded-2xl font-bold text-lg hover:bg-sky-50 transition-all"
                >
                  WhatsApp Booking
                  <ChevronRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
