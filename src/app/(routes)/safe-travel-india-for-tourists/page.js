import Link from 'next/link';
import { Phone, MapPin, Clock, Star, ChevronRight, Shield, Users, Calendar, Heart } from '@/components/ui/icons';

export const metadata = {
  title: 'Safe Travel Tips India for Foreign Tourists 2026 | Complete Safety Guide',
  description: 'Comprehensive safety guide for foreign tourists in India 2026. Transportation safety, health tips, scam awareness, emergency numbers, women safety, solo travel tips.',
  keywords: 'safe travel tips india for foreign tourists, india safety guide, india travel safety, is india safe for tourists, india solo travel safety, women safety india',
  authors: [{ name: 'Triveni Cabs' }],
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: { canonical: '/safe-travel-india-for-tourists' },
  openGraph: { title: 'Safe Travel Tips India for Foreign Tourists 2026', description: 'Complete safety guide: transport, health, scams, emergency numbers, women & solo safety.', type: 'website', locale: 'en_IN', url: 'https://www.trivenicabs.in/safe-travel-india-for-tourists', siteName: 'Triveni Cabs' },
  twitter: { card: 'summary_large_image', title: 'Safe Travel India Guide for Tourists 2026' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

const safetyTopics = [
  {
    title: 'Transportation Safety', icon: Shield, color: 'amber',
    tips: [
      { heading: 'Hire a Verified Private Driver', text: 'The safest way to travel in India is with a pre-booked, verified private driver. Companies like Triveni Cabs provide GPS-tracked vehicles, background-checked drivers, and 24/7 support. This eliminates risks from random taxis or ride-hailing in unfamiliar areas.' },
      { heading: 'Avoid Unmarked Taxis', text: 'Never take unmarked or unofficial taxis at airports or stations. Use pre-paid taxi counters at airports, or better yet, pre-book your pickup. If using Uber/Ola (Indian ride-hail), verify the car number and driver photo before getting in.' },
      { heading: 'Train Travel Safety', text: 'Indian Railways is generally safe. Book AC classes (1AC, 2AC, 3AC) for comfortable and secure travel. Keep valuables in locked bags. Night trains: choose upper berths for security. The IRCTC app is the official booking platform.' },
      { heading: 'Road Safety', text: 'Indian traffic follows different norms. Seat belts in cars, helmets on bikes are mandatory. Avoid driving yourself — local traffic patterns require experience. Pedestrians should be cautious crossing roads (use zebra crossings and watch both directions).' },
    ]
  },
  {
    title: 'Health & Medical Safety', icon: Heart, color: 'rose',
    tips: [
      { heading: 'Water & Food Safety', text: 'ONLY drink bottled or filtered water — never tap water, not even in 5-star hotels. Check that bottle seals are intact. Brush teeth with bottled water. Eat at busy restaurants (high turnover means fresh food). Avoid raw salads initially until your stomach adjusts.' },
      { heading: 'Carry Essential Medicines', text: 'Pack: anti-diarrheal (Imodium), rehydration salts (ORS), paracetamol, antihistamines, insect repellent (DEET-based), sunscreen (SPF 50+), hand sanitizer. These are available at Indian pharmacies too (Apollo Pharmacy, MedPlus are reliable chains).' },
      { heading: 'Travel Insurance', text: 'STRONGLY recommended. Ensure it covers medical evacuation, hospitalization, and emergency assistance. India has excellent private hospitals (Apollo, Fortis, Max) in major cities. Government hospitals are free but overcrowded. Keep your insurance card accessible at all times.' },
      { heading: 'Altitude Sickness', text: 'For trips to Ladakh, Spiti, or high Himalayan areas (3,000m+): acclimatize gradually, drink 3-4 liters of water daily, avoid alcohol, and carry Diamox (consult your doctor before the trip). Our mountain itineraries are designed for gradual ascent.' },
    ]
  },
  {
    title: 'Scam Awareness', icon: Star, color: 'orange',
    tips: [
      { heading: '"Closed Today" Scam', text: 'Someone near a monument tells you "it is closed today" and offers to take you to a shop instead. ALWAYS verify timings yourself (Google or ask your driver). This is a common tourist scam near the Taj Mahal and Jaipur monuments.' },
      { heading: 'Inflated Taxi Meter', text: 'Some taxi drivers may claim the meter is broken or use a tampered meter. Solution: use pre-paid taxi counters, ride-hailing apps, or (best) a pre-booked private driver with fixed pricing. Never negotiate fares after reaching the destination.' },
      { heading: 'Unsolicited Tour Guides', text: 'People may approach you at monuments claiming to be official guides. Legitimate guides have government-issued ID cards. If you want a guide, book through your hotel, driver, or the monument\'s official counter.' },
      { heading: 'Overpriced Souvenirs', text: 'Prices in tourist-heavy areas are inflated 2-10x. Bargain (it is expected and acceptable). A good rule: start at 30-40% of the asking price and settle at 50-60%. Your driver can often take you to shops with fair prices.' },
      { heading: 'Gem & Carpet Scams', text: 'Some touts offer to sell gems, carpets, or spices with a "special deal" and a story about shipping profits. This is always a scam. Buy from reputable stores. Government-approved emporiums (Cottage Emporium) have fixed, fair prices.' },
    ]
  },
  {
    title: 'Women Safety', icon: Shield, color: 'purple',
    tips: [
      { heading: 'General Advice', text: 'India is visited by millions of women travelers every year. Most tourist areas are safe. Common-sense precautions: avoid isolated areas at night, keep your hotel informed of your plans, dress modestly in conservative areas (not required in tourist/urban zones).' },
      { heading: 'Solo Female Travel', text: 'Solo female travel in India is absolutely possible and done by thousands. Stay in well-reviewed hotels/hostels. Use pre-booked transport (like our service). Share your location with family/friends. Women-only compartments exist in trains and metros.' },
      { heading: 'Dress Code', text: 'In tourist areas and cities, Western clothing is fine. In conservative/rural areas and temples, cover shoulders and knees. A light scarf is useful for temple visits and sun protection. Dress modestly but there is no need to completely change your wardrobe.' },
      { heading: 'Emergency Resources', text: 'Women Helpline: 181 (24/7). Police: 100. National Commission for Women: 7827-170-170. Many states have special tourist police. Our 24/7 helpline is always available for our customers.' },
    ]
  },
  {
    title: 'Emergency Numbers & Resources', icon: Phone, color: 'emerald',
    tips: [
      { heading: 'Universal Emergency', text: '112 — This single number connects to police, ambulance, and fire services across India. Save it in your phone.' },
      { heading: 'Police', text: '100. Tourist Police are available in Delhi, Agra, Jaipur, Mumbai, Goa, and other tourist hubs. They speak basic English and are trained to assist foreign visitors.' },
      { heading: 'Ambulance', text: '108 (government ambulance, free). Private ambulances are also available in major cities. For serious medical emergencies, our drivers will take you to the nearest hospital directly.' },
      { heading: 'Your Embassy', text: 'Keep your embassy contact number saved. Major embassies in Delhi: US (+91-11-2419-8000), UK (+91-11-2419-2100), Australia (+91-11-4139-9900), Canada (+91-11-4178-2000), Germany (+91-11-4419-9199).' },
      { heading: 'Triveni Cabs Helpline', text: '+91-7668570551 — Available 24/7 for all our customers. WhatsApp: wa.me/917668570551. Our English-speaking support team can coordinate with local authorities, hospitals, and your embassy if needed.' },
    ]
  },
  {
    title: 'Solo Travel Tips', icon: Users, color: 'cyan',
    tips: [
      { heading: 'Accommodation', text: 'Book well-reviewed hotels/hostels on Booking.com, Hostelworld, or MakeMyTrip. Read recent reviews. Choose places with 24-hour front desk. In cities, stay in popular tourist areas (Delhi: Paharganj, Connaught Place; Jaipur: MI Road; Agra: Taj area).' },
      { heading: 'Stay Connected', text: 'Get a local SIM card at the airport (Airtel or Jio, ₹500 for 28 days with data). Share your location with family/friends via WhatsApp or Google Maps. Download offline Google Maps for areas with poor connectivity.' },
      { heading: 'Join Others', text: 'Many hostels organize group tours and social events. Platforms like Couchsurfing have meetup groups. Meeting fellow travelers at cafes and hostels is easy in tourist hotspots. India is one of the friendliest countries for meeting people.' },
      { heading: 'Trust Your Instincts', text: 'If something feels off, leave the situation. It is okay to be firm in saying "no thank you." Most Indians are genuinely helpful and curious about foreigners — the vast majority of interactions will be positive and memorable.' },
    ]
  },
];

const faqData = [
  { question: 'Is India safe for foreign tourists in 2026?', answer: 'Yes. India welcomes over 10 million international tourists annually. The Golden Triangle, Rajasthan, Kerala, Himachal Pradesh, and major cities are all safe for tourists. As with any country, use common sense precautions. Hiring a private driver adds an extra layer of safety and convenience.' },
  { question: 'Is India safe for solo female travelers?', answer: 'Yes, with standard precautions. Thousands of solo female travelers explore India every year. Use pre-booked transport, stay in well-reviewed accommodations, keep emergency numbers saved, and trust your instincts. Tourist areas are well-policed and generally very safe.' },
  { question: 'What is the emergency number in India?', answer: '112 is the universal emergency number (police, ambulance, fire). Police: 100, Ambulance: 108, Women Helpline: 181. Save these before your trip.' },
  { question: 'Should I get travel insurance for India?', answer: 'Strongly recommended. Choose a plan that covers medical emergencies, hospitalization, evacuation, trip cancellation, and lost luggage. India has excellent private hospitals but treatment can be expensive without insurance.' },
  { question: 'How do I avoid getting sick in India?', answer: 'Drink only bottled/filtered water, eat at popular restaurants, avoid raw street food initially, wash hands frequently, carry hand sanitizer, and take anti-diarrheal medicine with you. Most travelers adjust within 2-3 days. Start with cooked vegetarian food if unsure.' },
  { question: 'Is hiring a private driver safer than public transport?', answer: 'Yes, significantly. A private driver gives you a known, verified person responsible for your safety, GPS-tracked vehicle, flexibility to avoid risky areas, and 24/7 support from the company. It also eliminates risks from unknown taxi drivers and overcrowded public transport.' },
];

const iconColorMap = {
  amber: 'from-amber-500 to-orange-500 shadow-amber-500/30',
  rose: 'from-rose-500 to-red-500 shadow-rose-500/30',
  orange: 'from-orange-500 to-yellow-500 shadow-orange-500/30',
  purple: 'from-purple-500 to-violet-500 shadow-purple-500/30',
  emerald: 'from-emerald-500 to-green-500 shadow-emerald-500/30',
  cyan: 'from-cyan-500 to-blue-500 shadow-cyan-500/30',
};

const borderColorMap = {
  amber: 'border-amber-500/20 hover:border-amber-500/40',
  rose: 'border-rose-500/20 hover:border-rose-500/40',
  orange: 'border-orange-500/20 hover:border-orange-500/40',
  purple: 'border-purple-500/20 hover:border-purple-500/40',
  emerald: 'border-emerald-500/20 hover:border-emerald-500/40',
  cyan: 'border-cyan-500/20 hover:border-cyan-500/40',
};

const textColorMap = {
  amber: 'text-amber-400',
  rose: 'text-rose-400',
  orange: 'text-orange-400',
  purple: 'text-purple-400',
  emerald: 'text-emerald-400',
  cyan: 'text-cyan-400',
};

export default function SafeTravelIndiaPage() {
  const guideSchema = {
    "@context": "https://schema.org", "@type": "Article",
    "headline": "Safe Travel Tips India for Foreign Tourists 2026",
    "description": "Comprehensive safety guide for international tourists visiting India",
    "author": { "@type": "Organization", "name": "Triveni Cabs" },
    "publisher": { "@type": "Organization", "name": "Triveni Cabs", "url": "https://www.trivenicabs.in" }
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org", "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" },
      { "@type": "ListItem", "position": 2, "name": "Safe Travel India", "item": "https://www.trivenicabs.in/safe-travel-india-for-tourists" }
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
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent" />
          <div className="absolute top-10 left-1/3 w-[400px] h-[400px] bg-amber-500/10 rounded-full blur-[150px] animate-pulse" />
          <div className="absolute bottom-10 right-10 w-[300px] h-[300px] bg-orange-500/8 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(251,191,36,0.3) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />

          <div className="max-w-6xl mx-auto px-4 py-20 relative z-10 text-center">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-amber-500/20 to-orange-500/20 backdrop-blur-xl px-6 py-3 rounded-full border border-amber-500/30 mb-8">
              <Shield className="w-5 h-5 text-amber-400" />
              <span className="text-amber-300 font-bold text-sm tracking-wider uppercase">Expert-Verified Travel Safety Guide</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] mb-6">
              Safe Travel India
              <span className="block mt-2 text-transparent bg-gradient-to-r from-amber-400 via-yellow-300 to-orange-400 bg-clip-text">
                for Foreign Tourists
              </span>
            </h1>

            <p className="text-xl text-stone-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Your comprehensive safety handbook for traveling in India. Transportation, health, scam awareness, emergency numbers, women safety, and solo travel tips.
            </p>
          </div>
        </section>

        {/* Emergency Bar */}
        <section className="py-4 bg-gradient-to-r from-red-600/80 to-rose-600/80 backdrop-blur-xl border-y border-red-500/30">
          <div className="max-w-6xl mx-auto px-4 flex flex-wrap justify-center gap-6 text-sm font-bold text-white">
            <span className="flex items-center gap-1.5"><Phone className="w-4 h-4" /> Emergency: 112</span>
            <span>Police: 100</span>
            <span>Ambulance: 108</span>
            <span>Women Helpline: 181</span>
            <span className="text-amber-300">Triveni Cabs: +91-7668570551</span>
          </div>
        </section>

        {/* Safety Topics */}
        <section className="py-20 px-4 relative overflow-hidden">
          <div className="absolute top-[20%] right-0 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[200px]" />
          <div className="max-w-4xl mx-auto space-y-16 relative z-10">
            {safetyTopics.map((topic, i) => (
              <div key={i}>
                <div className="flex items-center gap-4 mb-8">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${iconColorMap[topic.color]} shadow-lg flex items-center justify-center`}>
                    <topic.icon className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-black text-white">{topic.title}</h2>
                </div>
                <div className="space-y-4">
                  {topic.tips.map((tip, j) => (
                    <div key={j} className={`bg-white/5 backdrop-blur-xl rounded-2xl p-6 border ${borderColorMap[topic.color]} transition-all`}>
                      <h3 className={`font-bold mb-3 ${textColorMap[topic.color]}`}>{tip.heading}</h3>
                      <p className="text-stone-400 text-sm leading-relaxed">{tip.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Trust Section */}
        <section className="py-20 px-4 bg-stone-900/30 relative overflow-hidden">
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-orange-500/5 rounded-full blur-[150px]" />
          <div className="max-w-5xl mx-auto text-center relative z-10">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500/20 to-orange-500/20 px-6 py-3 rounded-full mb-6 border border-amber-500/30">
              <Shield className="w-5 h-5 text-amber-400" />
              <span className="text-amber-300 font-semibold text-sm tracking-wider uppercase">Travel Safer</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
              Travel Safer with
              <span className="block text-transparent bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text">Triveni Cabs</span>
            </h2>
            <p className="text-stone-400 mb-12 max-w-2xl mx-auto text-lg">
              Hiring a private driver is the single best safety decision you can make for your India trip.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: 'Verified Drivers', desc: 'Background-checked, commercially licensed, and experienced with international tourists', gradient: 'from-amber-500 to-orange-500 shadow-amber-500/30' },
                { title: 'GPS Tracking', desc: 'All vehicles are GPS-tracked. Real-time location shared with our control room', gradient: 'from-orange-500 to-red-500 shadow-orange-500/30' },
                { title: '24/7 Support', desc: 'English-speaking helpline available round the clock. Emergency coordination with hospitals and authorities', gradient: 'from-yellow-500 to-amber-500 shadow-yellow-500/30' },
              ].map((item, i) => (
                <div key={i} className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-amber-500/30 transition-all hover:-translate-y-1 duration-500">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.gradient} shadow-lg flex items-center justify-center mx-auto mb-4`}>
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-white text-lg mb-2">{item.title}</h3>
                  <p className="text-stone-400 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related Pages */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-8 text-white">Plan Your Safe India Trip</h2>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { title: 'Hire Private Driver', href: '/private-driver-hire-india', desc: 'English-speaking drivers from $45/day' },
                { title: 'Golden Triangle Tour', href: '/golden-triangle-english-speaking-driver', desc: 'Delhi-Agra-Jaipur guided' },
                { title: 'India Road Trip Guide', href: '/india-road-trip-guide-for-tourists', desc: 'Visa, currency, routes' },
                { title: 'Private Taj Mahal Tour', href: '/taj-mahal-private-tour-from-delhi', desc: 'Premium Taj experience' },
                { title: '10-Day North India Trip', href: '/10-day-north-india-road-trip', desc: 'Epic road trip circuit' },
                { title: '5-Day Rajasthan Trip', href: '/5-day-rajasthan-road-trip-jaipur-udaipur-jodhpur', desc: 'Royal Rajasthan circuit' },
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
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[200px]" />
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
              Travel India
              <span className="block text-transparent bg-gradient-to-r from-amber-400 via-yellow-300 to-orange-400 bg-clip-text">Safely with Us</span>
            </h2>
            <p className="text-stone-300 text-xl mb-10">Verified drivers, GPS tracking, 24/7 support. Your safety is our priority.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="tel:+917668570551" className="inline-flex items-center gap-3 bg-gradient-to-r from-amber-500 to-orange-500 text-black font-bold px-8 py-5 rounded-2xl text-lg shadow-2xl shadow-amber-500/25 hover:shadow-amber-500/40 hover:scale-[1.02] transition-all duration-300">
                <Phone className="w-5 h-5" /> +91-7668570551
              </a>
              <a href="https://wa.me/917668570551?text=Hello%20I%20am%20planning%20a%20safe%20trip%20to%20India" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-xl border border-white/20 hover:bg-white/10 hover:border-white/40 text-white font-bold px-8 py-5 rounded-2xl text-lg transition-all duration-300">
                WhatsApp Us
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
