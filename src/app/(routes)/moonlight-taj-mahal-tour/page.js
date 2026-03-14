import Link from 'next/link';
import { Phone, MapPin, Shield, Clock, Users, Star, ChevronRight, CheckCircle2, ArrowRight, IndianRupee, Moon, Camera, Calendar, Ticket } from '@/components/ui/icons';

export const revalidate = false;

export const metadata = {
  title: 'Moonlight Taj Mahal Tour | Full Moon Night Visit | 2026',
  description: 'Moonlight Taj Mahal tour on full moon nights. ASI night viewing schedule, ticket booking guide. 5 nights monthly. Combine with Mehtab Bagh. Call 7668570551.',
  keywords: 'moonlight taj mahal tour, taj mahal night visit, full moon taj mahal, taj mahal moonlight viewing, night tour taj mahal',
  authors: [{ name: 'Triveni Cabs' }],
  creator: 'Triveni Cabs',
  publisher: 'Triveni Cabs',
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: { canonical: '/moonlight-taj-mahal-tour' },
  openGraph: {
    title: 'Moonlight Taj Mahal Tour | Full Moon Night Viewing 2026',
    description: 'Experience the Taj Mahal under moonlight. ASI night viewing schedule, booking process, photography tips.',
    type: 'website',
    locale: 'en_IN',
    url: 'https://www.trivenicabs.in/moonlight-taj-mahal-tour',
    siteName: 'Triveni Cabs',
    images: [{ url: '/images/taj-mahal-hero.jpg', width: 1200, height: 630, alt: 'Moonlight Taj Mahal Tour' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Moonlight Taj Mahal Tour | Full Moon Night',
    description: 'Taj Mahal under moonlight. ASI schedule, tickets, photography. Book now!',
    creator: '@trivenicabs',
    site: '@trivenicabs',
    images: ['/images/taj-mahal-hero.jpg'],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

export default function MoonlightTajMahalTourPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" },
      { "@type": "ListItem", "position": 2, "name": "Moonlight Taj Mahal Tour", "item": "https://www.trivenicabs.in/moonlight-taj-mahal-tour" },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    "name": "Moonlight Taj Mahal Tour",
    "description": "Special full moon night viewing of Taj Mahal. Limited tickets, ASI-managed event. Available 5 nights per month around the full moon.",
    "touristType": "Cultural Tourist",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Triveni Cabs",
      "telephone": "+91-7668570551",
      "address": { "@type": "PostalAddress", "streetAddress": "366 Dandupura near Tajganj", "addressLocality": "Agra", "postalCode": "282006", "addressCountry": "IN" },
    },
    "offers": { "@type": "AggregateOffer", "lowPrice": "4500", "highPrice": "6500", "priceCurrency": "INR" },
  };

  const faqData = [
    { question: "When can I see the Taj Mahal at night?", answer: "Night viewing is available for 5 nights each month: the full moon night, 2 nights before, and 2 nights after. Viewing time is 8:30 PM to 12:30 AM in batches of 50 people every 30 minutes (8 batches total). Each batch gets 30 minutes inside." },
    { question: "How do I book tickets for moonlight Taj Mahal viewing?", answer: "Tickets are sold by ASI (Archaeological Survey of India) at the Agra office (22 Mall Road) from 10 AM the day before viewing. Online booking may also be available on the ASI website. Only 400 tickets per night. We can help you arrange ticket purchase through our local contacts." },
    { question: "What is the moonlight Taj Mahal ticket price?", answer: "Indian citizens: ₹510, Foreign tourists: ₹510. Note: This is a separate ticket from regular daytime entry. Only 400 tickets per night are sold. Arrive early at the ASI office to secure tickets, especially during tourist season (October-March)." },
    { question: "Can I take photographs during night viewing?", answer: "Regular cameras and DSLR are NOT allowed during night viewing. Only mobile phones are permitted, but flash photography is prohibited. The experience is meant to be visual rather than photographic. Tripods and selfie sticks are not allowed." },
    { question: "What is the Mehtab Bagh moonlight alternative?", answer: "Mehtab Bagh (Garden of Moonlight) across the Yamuna offers stunning views of the Taj under moonlight, with no ticket restrictions. Open until 6 PM officially, but the Taj is visible from outside too. Many visitors combine official night viewing with Mehtab Bagh for the complete moonlit experience." },
    { question: "Is it worth visiting the Taj Mahal at night?", answer: "Absolutely. The Taj Mahal under moonlight is ethereal -- the white marble glows with a silvery-blue luminescence. With only 50 people per batch (vs thousands during the day), it is an intimate, almost spiritual experience. Many say it is even more beautiful than the daytime visit." },
    { question: "What months are best for moonlight viewing?", answer: "October to March offers clear skies and pleasant temperatures. Full moon nights during November-February are the most popular. Avoid July-September (monsoon) as cloudy skies can obscure the moon. The clearest moonlight is during winter (December-February)." },
    { question: "Can you arrange transport for the night viewing?", answer: "Yes! We provide transport from Delhi or your Agra hotel to the Taj for night viewing. From Delhi: combine a day tour with night viewing (depart Delhi morning, daytime Agra sightseeing, night viewing, return Delhi or stay overnight). Sedan ₹4,500 from Delhi, local Agra transfer ₹800." },
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": { "@type": "Answer", "text": item.answer },
    })),
  };

  const viewingRules = [
    "Night viewing: 8:30 PM to 12:30 AM",
    "8 batches of 50 people, every 30 minutes",
    "30 minutes per batch inside the complex",
    "Only mobile phones allowed (no flash)",
    "DSLR, tripods, selfie sticks prohibited",
    "No food, drinks, or tobacco allowed",
    "Entry from East Gate (Shilpgram) only",
    "Report 30 minutes before your batch time",
  ];

  const nightSchedule = [
    { batch: "1st Batch", time: "8:30 - 9:00 PM", slots: "50 people" },
    { batch: "2nd Batch", time: "9:00 - 9:30 PM", slots: "50 people" },
    { batch: "3rd Batch", time: "9:30 - 10:00 PM", slots: "50 people" },
    { batch: "4th Batch", time: "10:00 - 10:30 PM", slots: "50 people" },
    { batch: "5th Batch", time: "10:30 - 11:00 PM", slots: "50 people" },
    { batch: "6th Batch", time: "11:00 - 11:30 PM", slots: "50 people" },
    { batch: "7th Batch", time: "11:30 PM - 12:00 AM", slots: "50 people" },
    { batch: "8th Batch", time: "12:00 - 12:30 AM", slots: "50 people" },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="min-h-screen bg-slate-950">

        {/* === HERO: Moonlit Night Sky Design === */}
        <section className="relative min-h-[90vh] flex items-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-indigo-950 to-slate-900" />

          {/* Stars */}
          {[
            { top: '5%', left: '10%', size: 'w-1 h-1', opacity: 'opacity-60' },
            { top: '8%', left: '30%', size: 'w-1.5 h-1.5', opacity: 'opacity-40' },
            { top: '15%', left: '55%', size: 'w-1 h-1', opacity: 'opacity-50' },
            { top: '3%', left: '70%', size: 'w-1 h-1', opacity: 'opacity-70' },
            { top: '12%', left: '85%', size: 'w-1.5 h-1.5', opacity: 'opacity-30' },
            { top: '20%', left: '20%', size: 'w-1 h-1', opacity: 'opacity-40' },
            { top: '10%', left: '45%', size: 'w-1 h-1', opacity: 'opacity-55' },
            { top: '25%', left: '75%', size: 'w-1 h-1', opacity: 'opacity-35' },
          ].map((star, i) => (
            <div key={i} className={`absolute ${star.size} bg-white rounded-full ${star.opacity}`} style={{ top: star.top, left: star.left }} />
          ))}

          {/* Moon Glow */}
          <div className="absolute top-[10%] right-[15%] w-24 h-24 bg-blue-100 rounded-full opacity-20 blur-sm" />
          <div className="absolute top-[10%] right-[15%] w-20 h-20 bg-blue-50 rounded-full opacity-40" />
          <div className="absolute top-[8%] right-[14%] w-[250px] h-[250px] bg-blue-200/5 rounded-full blur-[80px]" />

          {/* Moonlight beam */}
          <div className="absolute top-[20%] right-[20%] w-[400px] h-[600px] bg-gradient-to-b from-blue-200/5 via-blue-100/3 to-transparent rotate-12 blur-[40px]" />

          <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
            <div className="inline-flex items-center gap-2 bg-indigo-500/10 backdrop-blur-sm border border-indigo-400/20 rounded-full px-5 py-2.5 mb-8">
              <Moon className="w-5 h-5 text-blue-300" />
              <span className="text-blue-200 font-medium tracking-wide">Full Moon Night Experience</span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-[0.9]">
              Moonlight
              <span className="block text-transparent bg-gradient-to-r from-blue-200 via-indigo-200 to-purple-200 bg-clip-text">Taj Mahal Tour</span>
            </h1>

            <p className="text-indigo-200/70 text-lg md:text-xl mb-4 max-w-2xl mx-auto leading-relaxed">
              The Taj Mahal glows with an ethereal silver-blue luminescence under the full moon. Only 400 visitors per night. An experience beyond imagination.
            </p>

            <p className="text-blue-300/60 text-sm font-semibold mb-10">
              5 nights monthly | 8:30 PM - 12:30 AM | Limited 400 tickets | ASI managed
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="tel:+917668570551" className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-400 to-indigo-400 text-white px-8 py-4 rounded-full font-bold text-lg shadow-2xl shadow-blue-500/20 hover:shadow-blue-500/40 hover:scale-105 transition-all">
                <Phone className="w-5 h-5" /> Call: 7668570551
              </Link>
              <Link href="https://wa.me/917668570551?text=I want to book a moonlight Taj Mahal tour" className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-xl text-white px-8 py-4 rounded-full font-bold border border-indigo-400/20 hover:bg-white/10 transition-all">
                WhatsApp Booking <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Bottom Fade */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-950 to-transparent" />
        </section>

        {/* === TRUST BAR: Luminous Cards === */}
        <section className="py-10 px-4">
          <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: Moon, title: "5 Nights/Month", desc: "Around full moon" },
              { icon: Ticket, title: "400 Tickets/Night", desc: "Very limited" },
              { icon: Clock, title: "8:30 PM - 12:30 AM", desc: "30 min per batch" },
              { icon: Star, title: "Once in a Lifetime", desc: "Ethereal experience" },
            ].map((item, i) => (
              <div key={i} className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-5 border border-slate-800 hover:border-indigo-500/30 transition-all">
                <item.icon className="w-6 h-6 text-blue-400 mb-3" />
                <div className="font-bold text-white text-sm">{item.title}</div>
                <div className="text-xs text-slate-500">{item.desc}</div>
              </div>
            ))}
          </div>
        </section>

        {/* === NIGHT SCHEDULE: Batch Timetable === */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-14">
              <div className="inline-block bg-indigo-500/10 text-indigo-300 text-xs font-bold px-4 py-1.5 rounded-full mb-4 border border-indigo-500/20 tracking-wider uppercase">Night Viewing Schedule</div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">
                Batch <span className="text-transparent bg-gradient-to-r from-blue-300 to-indigo-300 bg-clip-text">Timings</span>
              </h2>
              <p className="text-slate-400">Each batch of 50 visitors gets 30 minutes inside the Taj complex</p>
            </div>

            <div className="bg-slate-900/80 rounded-3xl overflow-hidden border border-slate-800">
              <div className="grid grid-cols-3 gap-4 p-4 bg-gradient-to-r from-indigo-600 to-blue-500 text-white text-sm font-bold">
                <div>Batch</div>
                <div>Timing</div>
                <div>Capacity</div>
              </div>
              {nightSchedule.map((row, i) => (
                <div key={i} className={`grid grid-cols-3 gap-4 p-4 text-sm items-center ${i % 2 === 0 ? 'bg-slate-900/50' : 'bg-slate-800/30'} border-b border-slate-800 last:border-0`}>
                  <div className="text-white font-semibold">{row.batch}</div>
                  <div className="text-blue-300">{row.time}</div>
                  <div className="text-slate-400">{row.slots}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* === OVERVIEW === */}
        <section className="py-20 px-4 bg-gradient-to-b from-slate-950 to-indigo-950/50">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-10">
              <div className="lg:col-span-2">
                <div className="inline-block bg-indigo-500/10 text-indigo-300 text-xs font-bold px-3 py-1 rounded-full mb-4 tracking-wider uppercase">The Experience</div>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                  Taj Mahal Under <span className="text-transparent bg-gradient-to-r from-blue-300 to-indigo-300 bg-clip-text">Moonlight</span>
                </h2>
                <div className="space-y-5 text-slate-400 text-lg leading-relaxed">
                  <p>
                    The <strong className="text-white">Moonlight Taj Mahal Tour</strong> is one of the world&apos;s most exclusive experiences. For just 5 nights each month, around the full moon, the Archaeological Survey of India (ASI) opens the Taj Mahal for night viewing.
                  </p>
                  <p>
                    Under moonlight, the white marble takes on an <strong className="text-white">ethereal silver-blue glow</strong>. The silence, the cool night air, and the luminescent monument create an atmosphere that is deeply emotional. With only 50 people per batch, it feels like a private audience with the Taj.
                  </p>
                  <p>
                    Shah Jahan designed the Taj to be experienced under moonlight -- the <strong className="text-white">semi-precious stones in the marble inlay</strong> were chosen specifically because they reflect moonlight in subtle, magical ways that are invisible during the day.
                  </p>
                </div>
              </div>

              {/* Viewing Rules Card */}
              <div>
                <div className="bg-slate-900/80 rounded-3xl p-6 border border-slate-800 sticky top-8">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-blue-500 flex items-center justify-center">
                      <Moon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="font-bold text-white">Viewing Rules</h3>
                  </div>
                  <div className="space-y-3">
                    {viewingRules.map((rule, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" />
                        <span className="text-slate-400 text-sm">{rule}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6">
                    <Link href="tel:+917668570551" className="block text-center bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-6 py-3 rounded-xl font-bold hover:shadow-lg hover:shadow-blue-500/20 transition-all">
                      <Phone className="w-4 h-4 inline mr-2" />Arrange My Visit
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* === TICKET INFO: Two Cards === */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-14">
              <h2 className="text-4xl md:text-5xl font-bold text-white">
                Ticket <span className="text-transparent bg-gradient-to-r from-blue-300 to-indigo-300 bg-clip-text">Information</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-indigo-900/50 to-blue-900/50 rounded-3xl p-8 border border-indigo-500/20">
                <Ticket className="w-8 h-8 text-blue-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Night Viewing Ticket</h3>
                <div className="text-4xl font-black text-blue-300 mb-4">₹510</div>
                <div className="space-y-2 text-sm text-slate-400">
                  <p>Same price for Indian and foreign tourists</p>
                  <p>Available from ASI office, 22 Mall Road, Agra</p>
                  <p>Buy the day before viewing (10 AM onwards)</p>
                  <p>Only 400 tickets per night</p>
                </div>
              </div>
              <div className="bg-gradient-to-br from-slate-900/80 to-slate-800/50 rounded-3xl p-8 border border-slate-700">
                <Calendar className="w-8 h-8 text-indigo-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Our Transport Package</h3>
                <div className="text-4xl font-black text-white mb-4">₹4,500+</div>
                <div className="space-y-2 text-sm text-slate-400">
                  <p>Sedan from Delhi: ₹4,500 (round trip)</p>
                  <p>SUV from Delhi: ₹6,500 (round trip)</p>
                  <p>Local Agra transfer: ₹800</p>
                  <p>Combine day tour + night viewing</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* === MEHTAB BAGH ALTERNATIVE === */}
        <section className="py-20 px-4 bg-gradient-to-b from-indigo-950/50 to-slate-950">
          <div className="max-w-5xl mx-auto">
            <div className="bg-gradient-to-r from-indigo-900/50 via-blue-900/30 to-purple-900/50 rounded-3xl p-8 md:p-12 border border-indigo-500/10">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="inline-block bg-indigo-500/10 text-indigo-300 text-xs font-bold px-3 py-1 rounded-full mb-4 tracking-wider uppercase">Alternative Option</div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    Mehtab Bagh: <span className="text-transparent bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text">Garden of Moonlight</span>
                  </h2>
                  <p className="text-slate-400 mb-6 leading-relaxed">
                    If night viewing tickets are sold out, Mehtab Bagh across the Yamuna offers stunning moonlit views of the Taj. Built by Emperor Babur specifically for moonlight viewing, this garden provides the iconic reverse view of the Taj reflecting in the river. No ticket restrictions, best visited at sunset or early evening.
                  </p>
                  <div className="space-y-2 mb-6">
                    {["Entry: ₹50 (Indian), ₹300 (Foreign)", "Official hours until 6 PM", "Best for sunset + early moonrise", "Taj visible from outside after closing"].map((item, i) => (
                      <div key={i} className="flex items-center gap-2 text-slate-300 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" /> {item}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-slate-900/50 rounded-2xl p-6 border border-slate-700">
                  <h3 className="text-white font-bold mb-4">Recommended Moonlight Day Plan</h3>
                  <div className="space-y-3">
                    {[
                      { time: "Morning", act: "Taj Mahal sunrise/regular visit" },
                      { time: "Afternoon", act: "Agra Fort + Baby Taj" },
                      { time: "Sunset", act: "Mehtab Bagh (Taj view)" },
                      { time: "Night", act: "Night viewing at Taj (if tickets)" },
                    ].map((item, i) => (
                      <div key={i} className="flex gap-3 items-center">
                        <span className="text-xs font-bold text-blue-400 w-20 shrink-0">{item.time}</span>
                        <span className="text-slate-400 text-sm">{item.act}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* === FAQs === */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-14">
              <h2 className="text-4xl md:text-5xl font-bold text-white">
                Moonlight Tour <span className="text-transparent bg-gradient-to-r from-blue-300 to-indigo-300 bg-clip-text">FAQs</span>
              </h2>
            </div>

            <div className="space-y-4">
              {faqData.map((faq, i) => (
                <div key={i} className="bg-slate-900/50 rounded-2xl p-6 border border-slate-800 hover:border-indigo-500/30 transition-all">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center shrink-0 mt-0.5">
                      <Moon className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white mb-2">{faq.question}</h3>
                      <p className="text-slate-400 leading-relaxed text-sm">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* === INTERLINKS === */}
        <section className="py-16 px-4 bg-slate-900/50 border-t border-slate-800">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-10">
              More <span className="text-transparent bg-gradient-to-r from-blue-300 to-indigo-300 bg-clip-text">Agra Experiences</span>
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {[
                { title: "Same Day Agra Tour", href: "/same-day-agra-tour-from-delhi" },
                { title: "Same Day Taj Tour", href: "/same-day-taj-mahal-tour" },
                { title: "Taj from Delhi", href: "/taj-mahal-tour-from-delhi" },
                { title: "Sunrise Taj Tour", href: "/sunrise-taj-mahal-tour-from-delhi" },
                { title: "Airport to Agra", href: "/delhi-airport-to-agra-taxi" },
                { title: "Agra Day Trip", href: "/agra-day-trip-from-delhi" },
                { title: "Agra Food Tour", href: "/agra-food-tour" },
                { title: "Shopping Guide", href: "/agra-shopping-guide" },
                { title: "Beyond Taj", href: "/agra-beyond-taj-mahal" },
                { title: "Travel Guide", href: "/agra-travel-guide" },
                { title: "Private Taj Tour", href: "/taj-mahal-private-tour-from-delhi" },
                { title: "Agra Sightseeing", href: "/sightseeing/agra" },
              ].map((link, i) => (
                <Link key={i} href={link.href} className="group bg-slate-900/80 rounded-xl p-4 border border-slate-800 hover:border-indigo-500/30 shadow-sm hover:shadow-md transition-all text-center">
                  <h3 className="font-bold text-slate-300 text-sm group-hover:text-blue-300 transition-colors">{link.title}</h3>
                  <ArrowRight className="w-4 h-4 text-slate-600 group-hover:text-blue-400 mx-auto mt-2 transition-colors" />
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* === CTA === */}
        <section className="relative py-24 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-indigo-950 to-slate-950" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[150px]" />

          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <Moon className="w-14 h-14 text-blue-300 mx-auto mb-6" />
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
              See the Taj <br />Under Moonlight
            </h2>
            <p className="text-indigo-200/60 text-lg mb-8 max-w-xl mx-auto">
              An exclusive experience for just 400 people per night. Let us handle the logistics.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="tel:+917668570551" className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-10 py-5 rounded-full font-bold text-lg shadow-2xl shadow-blue-500/20 hover:scale-105 transition-all">
                <Phone className="w-5 h-5" /> Call: 7668570551
              </Link>
              <Link href="https://wa.me/917668570551?text=Moonlight Taj Mahal tour inquiry" className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-xl text-white px-10 py-5 rounded-full font-bold text-lg border border-indigo-400/20 hover:bg-white/10 transition-all">
                WhatsApp Inquiry
              </Link>
            </div>
          </div>
        </section>

        {/* Breadcrumb */}
        <nav className="py-4 px-4 bg-slate-900 border-t border-slate-800">
          <div className="max-w-6xl mx-auto flex items-center gap-2 text-sm text-slate-500">
            <Link href="/" className="hover:text-blue-400 transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-slate-300 font-medium">Moonlight Taj Mahal Tour</span>
          </div>
        </nav>

      </div>
    </>
  );
}
