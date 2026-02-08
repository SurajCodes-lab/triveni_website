import Link from 'next/link';
import { Phone, MapPin, Clock, Star, ChevronRight, Shield, Users, Calendar, Heart } from '@/components/ui/icons';

export const metadata = {
  title: 'India Road Trip Guide for International Tourists 2026 | Essential Travel Tips',
  description: 'Comprehensive India road trip guide for foreign tourists. Visa, currency, safety, etiquette, best routes, hiring a driver vs self-drive, cultural tips, weather guide.',
  keywords: 'india road trip guide for international tourists, india travel guide for foreigners, road trip india tips, driving in india guide, india tourist information',
  authors: [{ name: 'Triveni Cabs' }],
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: { canonical: '/india-road-trip-guide-for-tourists' },
  openGraph: { title: 'India Road Trip Guide for International Tourists 2026', description: 'Everything you need to know about road trips in India. Visa, safety, routes, driver hire.', type: 'website', locale: 'en_IN', url: 'https://www.trivenicabs.in/india-road-trip-guide-for-tourists', siteName: 'Triveni Cabs' },
  twitter: { card: 'summary_large_image', title: 'India Road Trip Guide for Tourists 2026' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

const sections = [
  { id: 'visa', title: 'Visa & Entry Requirements', icon: Shield, content: [
    { subtitle: 'E-Visa (Most Common)', text: 'Available for 150+ nationalities. Apply online at indianvisaonline.gov.in at least 4 days before travel. Tourist e-visa valid for 30 days (single/double entry) or 1 year (multiple entry). Cost: $10-80 depending on nationality and duration.' },
    { subtitle: 'Regular Tourist Visa', text: 'Apply at your nearest Indian embassy/consulate. Allows longer stays up to 6 months-10 years depending on nationality. Processing takes 3-5 business days. Recommended for extended road trips.' },
    { subtitle: 'Documents to Carry', text: 'Passport (valid 6+ months), visa printout, return flight ticket, hotel bookings for first 2 nights, travel insurance document, passport-sized photos (keep 4-5 extras).' },
  ]},
  { id: 'currency', title: 'Currency & Payments', icon: Star, content: [
    { subtitle: 'Indian Rupee (INR)', text: 'Denominations: ₹10, 20, 50, 100, 200, 500, 2000 notes. ₹1, 2, 5, 10 coins. Exchange rate (approx): 1 USD = ₹83-85, 1 EUR = ₹90-93, 1 GBP = ₹105-108.' },
    { subtitle: 'Where to Exchange', text: 'Airport exchange counters (available but poor rates), authorized money changers in cities (best rates in Delhi Connaught Place, Jaipur MI Road), ATMs accept international cards (HDFC, ICICI, SBI ATMs recommended).' },
    { subtitle: 'Digital Payments', text: 'UPI (Google Pay, PhonePe) is widely used in cities. Most restaurants and shops accept cards. In rural areas and small towns, CASH IS KING. Always carry ₹5,000-10,000 in cash for emergencies.' },
  ]},
  { id: 'safety', title: 'Safety Tips', icon: Heart, content: [
    { subtitle: 'General Safety', text: 'India is generally safe for tourists. Use common sense — avoid lonely areas at night, keep valuables secure, use registered transport (like our verified drivers). Tourist areas are well-policed. Emergency number: 112 (police, ambulance, fire).' },
    { subtitle: 'Health', text: 'Drink only bottled/filtered water (never tap water). Eat at busy restaurants (high turnover = fresh food). Carry basic medicines: anti-diarrheal, paracetamol, ORS packets. Consider travel insurance with medical coverage.' },
    { subtitle: 'Scam Awareness', text: 'Common tourist scams: inflated taxi meter, "closed today" redirect scam at monuments, unsolicited tour guides, overpriced souvenirs. Solution: book a trusted private driver (like us), verify monument timings online, negotiate prices before purchase.' },
  ]},
  { id: 'driving', title: 'Hiring a Driver vs Self-Driving', icon: Users, content: [
    { subtitle: 'Why Hire a Driver (Strongly Recommended)', text: 'Indian roads have unique challenges — unpredictable traffic, different road rules, horn-based communication, animals on roads, and poor signage in rural areas. A private driver eliminates all stress, lets you enjoy the scenery, and handles everything from parking to navigation.' },
    { subtitle: 'Self-Drive Considerations', text: 'International Driving Permit (IDP) required. India drives on the LEFT side. Traffic in cities is chaotic by Western standards. Mountain roads require expert handling. Self-drive car rental exists (Zoomcar, etc.) but is only recommended for experienced travelers who are comfortable with Indian road conditions.' },
    { subtitle: 'Private Driver Benefits', text: 'English-speaking driver doubles as a cultural guide. Door-to-door service. No parking worries. Driver handles police checkpoints, toll booths, and fuel stops. Many drivers know the best local restaurants and hidden gems. Cost: just $45-80/day for the entire vehicle.' },
  ]},
  { id: 'routes', title: 'Best Road Trip Routes in India', icon: MapPin, content: [
    { subtitle: 'Golden Triangle (3-5 days)', text: 'Delhi-Agra-Jaipur. The classic first-timer route. Taj Mahal, Amber Fort, India Gate. Well-maintained highways. Best time: Oct-Mar.' },
    { subtitle: 'Rajasthan Circuit (7-10 days)', text: 'Jaipur-Udaipur-Jodhpur-Jaisalmer. Royal forts, desert safaris, lake palaces. Amazing cultural experience. Best: Oct-Mar.' },
    { subtitle: 'Himachal Pradesh (7 days)', text: 'Shimla-Manali-Dharamshala. Mountain highways, Buddhist monasteries, adventure sports. Best: Mar-Jun, Sep-Nov.' },
    { subtitle: 'Kashmir (7-8 days)', text: 'Srinagar-Gulmarg-Pahalgam-Sonmarg. Houseboats, meadows, snow peaks. Stunning beauty. Best: Apr-Oct.' },
    { subtitle: 'Kerala (7 days)', text: 'Kochi-Munnar-Thekkady-Alleppey. Backwaters, tea plantations, wildlife. Best: Sep-Mar.' },
  ]},
  { id: 'culture', title: 'Cultural Etiquette', icon: Calendar, content: [
    { subtitle: 'Temples & Religious Sites', text: 'Remove shoes before entering. Cover shoulders and knees. Ask before photographing. Some temples restrict non-Hindu entry to inner sanctums. Leather items may not be allowed.' },
    { subtitle: 'Greetings & Interaction', text: '"Namaste" (palms together, slight bow) is the universal greeting. Avoid physical contact with the opposite gender in conservative areas. Bargaining is expected in markets, not in restaurants or malls.' },
    { subtitle: 'Food Etiquette', text: 'Many Indians are vegetarian. Beef is not available in most areas. Eat with right hand in traditional settings. "Spicy" in India is much spicier than Western standards — ask for "less spicy" or "no spicy" when ordering.' },
    { subtitle: 'Photography', text: 'Always ask permission before photographing people, especially women and children. Some monuments charge for cameras. Drone flying requires government permission (generally not allowed for tourists).' },
  ]},
  { id: 'weather', title: 'Weather & Best Time to Visit', icon: Clock, content: [
    { subtitle: 'October-March (Peak Season)', text: 'Best for most of India. Pleasant temperatures (15-30°C in plains). Perfect for Rajasthan, Golden Triangle, South India. Hill stations are cold but scenic. This is peak tourist season — book hotels in advance.' },
    { subtitle: 'April-June (Summer)', text: 'Hot in plains (35-45°C). Perfect for hill stations (Shimla, Manali, Kashmir). Fewer tourists means better prices. Good for mountain road trips.' },
    { subtitle: 'July-September (Monsoon)', text: 'Heavy rains in most regions. Lush green landscapes. Avoid mountain road trips (landslide risk). South India and Rajasthan are manageable. Kerala houseboat season is beautiful.' },
  ]},
];

const faqData = [
  { question: 'Is India safe for foreign tourists in 2026?', answer: 'Yes, India welcomes millions of international tourists every year. Tourist areas are well-policed. The Golden Triangle, Rajasthan, Kerala, and major cities are very safe. Hiring a private driver adds extra security. We recommend travel insurance and basic precautions as you would in any country.' },
  { question: 'Do I need vaccinations for India?', answer: 'No vaccinations are legally required for most nationalities (unless arriving from yellow fever endemic countries). Recommended: Hepatitis A, Typhoid, and Tetanus boosters. Consult your doctor 4-6 weeks before travel. Malaria prophylaxis may be recommended for rural areas.' },
  { question: 'What is the budget for a 10-day India road trip?', answer: 'Budget: $50-70/day (shared car, budget hotels, street food). Mid-range: $100-150/day (private SUV, 3-star hotels, restaurants). Luxury: $200-400/day (premium car, 4-5 star hotels, fine dining). Private car hire adds $45-80/day which is shared among all passengers.' },
  { question: 'Can I use my credit card in India?', answer: 'Yes, Visa and Mastercard are widely accepted in cities, hotels, and restaurants. Amex has limited acceptance. ATMs are available everywhere. Always carry some cash (INR ₹5,000-10,000) for small shops, street food, and rural areas where cards may not work.' },
  { question: 'What should I pack for an India road trip?', answer: 'Comfortable cotton clothes, modest clothing for temple visits (cover shoulders/knees), comfortable walking shoes, sunscreen, insect repellent, hand sanitizer, basic medicines, power adapter (Type C/D, 230V), portable WiFi/local SIM card, copies of passport and visa.' },
  { question: 'How do I get a local SIM card?', answer: 'Available at the airport on arrival. Airtel and Jio offer tourist SIM plans (₹500-700 for 28 days with 1.5-2 GB/day data and unlimited calls). You need passport copy and a passport-sized photo. Many airports have SIM counters right after customs.' },
];

const sectionGradients = [
  'from-amber-500 to-orange-500 shadow-amber-500/30',
  'from-orange-500 to-yellow-500 shadow-orange-500/30',
  'from-rose-500 to-red-500 shadow-rose-500/30',
  'from-yellow-500 to-amber-500 shadow-yellow-500/30',
  'from-emerald-500 to-green-500 shadow-emerald-500/30',
  'from-purple-500 to-violet-500 shadow-purple-500/30',
  'from-cyan-500 to-blue-500 shadow-cyan-500/30',
];

export default function IndiaRoadTripGuidePage() {
  const guideSchema = {
    "@context": "https://schema.org", "@type": "TravelAction",
    "name": "India Road Trip Guide for International Tourists",
    "description": "Comprehensive guide for foreign tourists planning a road trip in India",
    "agent": { "@type": "LocalBusiness", "name": "Triveni Cabs", "telephone": "+91-7668570551", "url": "https://www.trivenicabs.in" }
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org", "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" },
      { "@type": "ListItem", "position": 2, "name": "India Road Trip Guide", "item": "https://www.trivenicabs.in/india-road-trip-guide-for-tourists" }
    ]
  };
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": faqData.map(item => ({ "@type": "Question", "name": item.question, "acceptedAnswer": { "@type": "Answer", "text": item.answer } })) };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(guideSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="min-h-screen bg-stone-950">
        {/* Hero */}
        <section className="relative min-h-[70vh] flex items-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-stone-950 via-amber-950/30 to-stone-950" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-orange-500/8 via-transparent to-transparent" />
          <div className="absolute top-20 left-20 w-[350px] h-[350px] bg-amber-500/10 rounded-full blur-[140px] animate-pulse" />
          <div className="absolute bottom-10 right-20 w-[280px] h-[280px] bg-orange-500/8 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(251,191,36,0.3) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />

          <div className="max-w-6xl mx-auto px-4 py-20 relative z-10 text-center">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-amber-500/20 to-orange-500/20 backdrop-blur-xl px-6 py-3 rounded-full border border-amber-500/30 mb-8">
              <MapPin className="w-5 h-5 text-amber-400" />
              <span className="text-amber-300 font-bold text-sm tracking-wider uppercase">The Complete India Travel Handbook</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] mb-6">
              India Road Trip Guide
              <span className="block mt-2 text-transparent bg-gradient-to-r from-amber-400 via-yellow-300 to-orange-400 bg-clip-text">
                for International Tourists
              </span>
            </h1>

            <p className="text-xl text-stone-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Everything you need to know — visa, currency, safety, cultural tips, best routes, weather, and how to hire a driver. Your complete 2026 India travel handbook.
            </p>
          </div>
        </section>

        {/* Table of Contents */}
        <section className="py-8 bg-stone-900/50 border-y border-white/5">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="font-bold text-white mb-4">Quick Navigation</h2>
            <div className="flex flex-wrap gap-3">
              {sections.map((s) => (
                <a key={s.id} href={`#${s.id}`} className="bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 px-4 py-2 rounded-full text-sm font-medium transition-colors border border-amber-500/20 hover:border-amber-500/40">{s.title}</a>
              ))}
            </div>
          </div>
        </section>

        {/* Content Sections */}
        <section className="py-20 px-4 relative overflow-hidden">
          <div className="absolute top-[30%] right-0 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[200px]" />
          <div className="absolute bottom-[20%] left-0 w-[400px] h-[400px] bg-orange-500/5 rounded-full blur-[150px]" />
          <div className="max-w-4xl mx-auto space-y-16 relative z-10">
            {sections.map((section, sIdx) => (
              <div key={section.id} id={section.id}>
                <div className="flex items-center gap-4 mb-8">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${sectionGradients[sIdx]} shadow-lg flex items-center justify-center`}>
                    <section.icon className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-black text-white">{section.title}</h2>
                </div>
                <div className="space-y-4">
                  {section.content.map((item, i) => (
                    <div key={i} className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-amber-500/20 transition-all">
                      <h3 className="font-bold text-amber-400 mb-3 text-lg">{item.subtitle}</h3>
                      <p className="text-stone-400 leading-relaxed">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Related Pages */}
        <section className="py-16 px-4 bg-stone-900/30">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-8 text-white">Plan Your India Trip</h2>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { title: 'Hire Private Driver', href: '/private-driver-hire-india', desc: 'English-speaking drivers from $45/day' },
                { title: 'Golden Triangle Tour', href: '/golden-triangle-english-speaking-driver', desc: 'Delhi-Agra-Jaipur guided' },
                { title: 'Private Taj Mahal Tour', href: '/taj-mahal-private-tour-from-delhi', desc: 'Premium Taj experience' },
                { title: 'Safe Travel India', href: '/safe-travel-india-for-tourists', desc: 'Detailed safety guide' },
                { title: '10-Day North India', href: '/10-day-north-india-road-trip', desc: 'Epic road trip circuit' },
                { title: 'Kashmir Road Trip', href: '/kashmir-road-trip-from-delhi', desc: 'Paradise on Earth' },
              ].map((link, i) => (
                <Link key={i} href={link.href} className="bg-white/5 backdrop-blur-xl p-4 rounded-xl border border-white/10 hover:border-amber-500/30 hover:bg-amber-500/5 transition-all flex items-center gap-3">
                  <div className="w-8 h-8 bg-amber-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <ChevronRight className="w-4 h-4 text-amber-400" />
                  </div>
                  <div>
                    <div className="font-semibold text-white text-sm">{link.title}</div>
                    <div className="text-xs text-stone-500">{link.desc}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 px-4 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[200px]" />
          <div className="max-w-4xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
                Frequently Asked
                <span className="block text-transparent bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text">Questions</span>
              </h2>
            </div>
            <div className="space-y-4">
              {faqData.map((faq, i) => (
                <details key={i} className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 hover:border-amber-500/20 transition-all group">
                  <summary className="font-semibold text-white cursor-pointer flex items-center justify-between p-6">
                    {faq.question}
                    <ChevronRight className="w-5 h-5 text-amber-400 group-open:rotate-90 transition-transform flex-shrink-0" />
                  </summary>
                  <p className="px-6 pb-6 text-stone-400 leading-relaxed">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-stone-900 via-amber-950/40 to-stone-900" />
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-amber-500/15 rounded-full blur-[150px] animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-orange-500/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(251,191,36,0.3) 1px, transparent 0)`,
            backgroundSize: '30px 30px'
          }} />

          <div className="relative z-10 max-w-4xl mx-auto px-4 py-24 text-center">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
              Ready to Explore
              <span className="block text-transparent bg-gradient-to-r from-amber-400 via-yellow-300 to-orange-400 bg-clip-text">India?</span>
            </h2>
            <p className="text-stone-300 text-xl mb-10">Hire an English-speaking driver from $45/day. Safe, comfortable, unforgettable.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="tel:+917668570551" className="inline-flex items-center gap-3 bg-gradient-to-r from-amber-500 to-orange-500 text-black font-bold px-8 py-5 rounded-2xl text-lg shadow-2xl shadow-amber-500/25 hover:shadow-amber-500/40 hover:scale-[1.02] transition-all duration-300">
                <Phone className="w-5 h-5" /> +91-7668570551
              </a>
              <a href="https://wa.me/917668570551?text=Hello%20I%20am%20planning%20a%20road%20trip%20in%20India" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-xl border border-white/20 hover:bg-white/10 hover:border-white/40 text-white font-bold px-8 py-5 rounded-2xl text-lg transition-all duration-300">
                WhatsApp Us
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
