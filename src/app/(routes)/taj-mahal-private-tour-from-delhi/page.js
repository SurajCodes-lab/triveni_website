import Link from 'next/link';
import { Phone, MapPin, Clock, Star, ChevronRight, Shield, Users, Calendar } from '@/components/ui/icons';

export const metadata = {
  title: 'Private Taj Mahal Tour from Delhi 2026 | Skip-the-Line Tips | Triveni Cabs',
  description: 'Private Taj Mahal tour from Delhi for tourists. Sunrise visit, skip-the-line tips, photography guide. AC car with English-speaking driver from $40. Call +91-7668570551.',
  keywords: 'private taj mahal tour from delhi for tourists, taj mahal day tour from delhi, taj mahal private driver, taj mahal sunrise tour, taj mahal guide for foreigners',
  authors: [{ name: 'Triveni Cabs' }],
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: { canonical: '/taj-mahal-private-tour-from-delhi' },
  openGraph: { title: 'Private Taj Mahal Tour from Delhi 2026 | Premium Experience', description: 'Private car + English driver to Taj Mahal. Sunrise visits, photography tips, skip-the-line.', type: 'website', locale: 'en_IN', url: 'https://www.trivenicabs.in/taj-mahal-private-tour-from-delhi', siteName: 'Triveni Cabs' },
  twitter: { card: 'summary_large_image', title: 'Private Taj Mahal Tour from Delhi 2026' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

const tourOptions = [
  { name: 'Sunrise Taj Mahal', departure: '3:30 AM from Delhi', return: '2-3 PM', highlights: 'Sunrise at Taj (gates open 6 AM), fewer crowds, golden light photography, Agra Fort, Mehtab Bagh', sedanINR: '₹3,500', suvINR: '₹5,500', sedanUSD: '$42', suvUSD: '$65', recommended: true },
  { name: 'Day Trip Taj Mahal', departure: '6:00 AM from Delhi', return: '7-8 PM', highlights: 'Taj Mahal, Agra Fort, Itmad-ud-Daulah (Baby Taj), Mehtab Bagh sunset, local market', sedanINR: '₹3,500', suvINR: '₹5,500', sedanUSD: '$42', suvUSD: '$65', recommended: false },
  { name: 'Taj + Fatehpur Sikri', departure: '5:00 AM from Delhi', return: '8-9 PM', highlights: 'Taj Mahal sunrise, Agra Fort, Fatehpur Sikri (Akbar\'s ghost city), Buland Darwaza', sedanINR: '₹4,000', suvINR: '₹6,000', sedanUSD: '$48', suvUSD: '$72', recommended: false },
  { name: 'Overnight Taj Experience', departure: 'Flexible', return: 'Next day', highlights: 'All above + Full Moon Taj viewing (on eligible nights), Agra street food tour, heritage hotel stay', sedanINR: '₹5,500', suvINR: '₹7,500', sedanUSD: '$65', suvUSD: '$90', recommended: false },
];

const faqData = [
  { question: 'What is the best time to visit Taj Mahal?', answer: 'Sunrise (gate opens at 6 AM, arrive 5:30 AM) is the absolute best — golden light, fewer crowds, cooler temperature. Avoid the 10 AM-2 PM rush. Sunset from Mehtab Bagh (across the river, free entry) is also spectacular. Full moon nights offer a unique experience (limited tickets, must book in advance).' },
  { question: 'Is the Taj Mahal closed on Fridays?', answer: 'Yes, the Taj Mahal is CLOSED to visitors every Friday (it is a functioning mosque). Plan your visit for any other day. We always verify this when planning your tour. Agra Fort and other monuments remain open on Fridays.' },
  { question: 'What is the entry fee for foreigners?', answer: 'Taj Mahal: INR ₹1,100 (~$13) for foreigners, includes shoe covers and water. Agra Fort: ₹550 (~$6.50). Fatehpur Sikri: ₹610 (~$7.30). Itmad-ud-Daulah: ₹210 (~$2.50). Fees are paid at the ticket counter; cards and UPI accepted at Taj Mahal.' },
  { question: 'Can I take photos inside the Taj Mahal?', answer: 'Photos are allowed in the gardens and exterior (the classic photo spots). Photography is NOT allowed inside the main mausoleum chamber. Tripods are not allowed. Drones are strictly prohibited. Smartphone and camera photography outside is unrestricted.' },
  { question: 'What items are banned at the Taj Mahal?', answer: 'Food, tobacco, lighters, tripods, large bags, power banks over 10,000mAh, selfie sticks (enforcement varies). Small bags and water bottles are allowed. Lockers are available near the entrance for prohibited items (₹20-50).' },
  { question: 'Is a guide necessary at the Taj Mahal?', answer: 'Not mandatory but highly recommended. Government-approved guides (₹500-1,000 for 1-2 hours) provide rich historical context about Shah Jahan, Mumtaz, architecture, and hidden details. We can arrange a certified English-speaking guide.' },
  { question: 'How long does the Delhi to Agra drive take?', answer: 'Via Yamuna Expressway: 3-3.5 hours (210 km, 6-lane highway). This is the fastest and most comfortable route. Our driver departs based on your chosen tour option (3:30 AM for sunrise, 6 AM for day trip).' },
];

export default function TajMahalPrivateTourPage() {
  const tourSchema = {
    "@context": "https://schema.org", "@type": "TouristTrip",
    "name": "Private Taj Mahal Tour from Delhi",
    "description": "Premium private tour to Taj Mahal from Delhi with English-speaking driver",
    "touristType": "International Tourists",
    "itinerary": { "@type": "ItemList", "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Pickup from Delhi hotel" },
      { "@type": "ListItem", "position": 2, "name": "Drive to Agra via Yamuna Expressway" },
      { "@type": "ListItem", "position": 3, "name": "Taj Mahal visit" },
      { "@type": "ListItem", "position": 4, "name": "Agra Fort visit" },
      { "@type": "ListItem", "position": 5, "name": "Return to Delhi" }
    ]},
    "provider": { "@type": "LocalBusiness", "name": "Triveni Cabs", "telephone": "+91-7668570551", "url": "https://www.trivenicabs.in" },
    "offers": { "@type": "AggregateOffer", "lowPrice": "42", "highPrice": "90", "priceCurrency": "USD" }
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org", "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" },
      { "@type": "ListItem", "position": 2, "name": "Private Driver Hire", "item": "https://www.trivenicabs.in/private-driver-hire-india" },
      { "@type": "ListItem", "position": 3, "name": "Taj Mahal Private Tour", "item": "https://www.trivenicabs.in/taj-mahal-private-tour-from-delhi" }
    ]
  };
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": faqData.map(item => ({ "@type": "Question", "name": item.question, "acceptedAnswer": { "@type": "Answer", "text": item.answer } })) };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(tourSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-purple-50">
        <section className="relative bg-gradient-to-br from-indigo-900 via-purple-800 to-pink-900 text-white py-20 px-4">
          <div className="max-w-6xl mx-auto text-center relative z-10">
            <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur px-4 py-2 rounded-full mb-6">
              <Star className="w-4 h-4" /><span className="text-sm font-medium">One of the Seven Wonders of the World</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">Private Taj Mahal Tour<br />from Delhi</h1>
            <p className="text-xl text-purple-100 mb-4 max-w-3xl mx-auto">A personal journey to one of humanity&apos;s greatest monuments. Private car, English-speaking driver, sunrise magic, and insider tips.</p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <span className="bg-white/10 px-4 py-2 rounded-full text-sm">From $42 (Sedan)</span>
              <span className="bg-white/10 px-4 py-2 rounded-full text-sm">Sunrise Available</span>
              <span className="bg-white/10 px-4 py-2 rounded-full text-sm">100% Private</span>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="tel:+917668570551" className="inline-flex items-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-black font-bold px-8 py-4 rounded-xl transition-colors"><Phone className="w-5 h-5" /> +91-7668570551</a>
              <a href="https://wa.me/917668570551?text=Hello%20I%20want%20private%20Taj%20Mahal%20tour%20from%20Delhi" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 px-8 py-4 rounded-xl transition-colors font-semibold">WhatsApp Us</a>
            </div>
          </div>
        </section>

        {/* Tour Options */}
        <section className="py-16 px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Choose Your Taj Mahal Experience</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {tourOptions.map((tour, i) => (
                <div key={i} className={`bg-white rounded-2xl shadow-lg p-6 border-2 ${tour.recommended ? 'border-purple-500' : 'border-gray-100'}`}>
                  {tour.recommended && <span className="inline-block bg-purple-500 text-white text-xs font-bold px-3 py-1 rounded-full mb-3">Recommended</span>}
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{tour.name}</h3>
                  <div className="flex gap-4 mb-3 text-sm text-gray-600">
                    <span className="flex items-center gap-1"><Clock className="w-4 h-4" />Depart: {tour.departure}</span>
                    <span>Return: {tour.return}</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-4">{tour.highlights}</p>
                  <div className="flex gap-4 text-sm mb-4">
                    <div><span className="text-gray-500">Sedan:</span> <span className="font-bold text-purple-700">{tour.sedanUSD}</span> <span className="text-gray-400">({tour.sedanINR})</span></div>
                    <div><span className="text-gray-500">SUV:</span> <span className="font-bold text-purple-700">{tour.suvUSD}</span> <span className="text-gray-400">({tour.suvINR})</span></div>
                  </div>
                  <a href="https://wa.me/917668570551" target="_blank" rel="noopener noreferrer" className="block text-center bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 rounded-xl transition-colors">Book This Tour</a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Photography Guide */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">Taj Mahal Photography Guide</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: 'Best Photo Spots', tips: ['Main entrance gate (framing the Taj)', 'Diana Bench (Princess Diana\'s famous photo spot)', 'Reflecting pool (symmetrical reflection)', 'Mehtab Bagh across the river (sunset shots)', 'Platform near the mausoleum (up-close details)'] },
                { title: 'Photography Tips', tips: ['Sunrise offers the best light (6-8 AM)', 'Use portrait mode for close-ups of inlay work', 'Wide-angle lens captures the full grandeur', 'Shoot from the mosque side for a unique angle', 'Wear contrasting colors for standout photos'] },
              ].map((guide, i) => (
                <div key={i} className="bg-purple-50 rounded-xl p-6">
                  <h3 className="font-bold text-purple-800 mb-4">{guide.title}</h3>
                  <ul className="space-y-2">
                    {guide.tips.map((tip, j) => (
                      <li key={j} className="flex items-start gap-2 text-gray-700 text-sm"><ChevronRight className="w-4 h-4 text-purple-500 flex-shrink-0 mt-0.5" />{tip}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Practical Info */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">Practical Information</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: 'Entry Fees (Foreigners)', items: ['Taj Mahal: ₹1,100 ($13)', 'Agra Fort: ₹550 ($6.50)', 'Fatehpur Sikri: ₹610 ($7.30)', 'Baby Taj: ₹210 ($2.50)', 'Mehtab Bagh: Free'] },
                { title: 'Timings', items: ['Taj Mahal: 6 AM - 6:30 PM', 'Closed on Fridays', 'Agra Fort: 6 AM - 6 PM', 'Best time: 6-8 AM (sunrise)', 'Last entry: 30 min before close'] },
                { title: 'What to Bring', items: ['Passport (for foreign ticket)', 'Comfortable walking shoes', 'Water bottle', 'Sunscreen and hat', 'Camera (no tripod/drone)'] },
              ].map((info, i) => (
                <div key={i} className="bg-white rounded-xl p-6 shadow-md">
                  <h3 className="font-bold text-gray-900 mb-4">{info.title}</h3>
                  <ul className="space-y-2">
                    {info.items.map((item, j) => (
                      <li key={j} className="flex items-center gap-2 text-gray-700 text-sm"><ChevronRight className="w-4 h-4 text-purple-500 flex-shrink-0" />{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related Pages */}
        <section className="py-12 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-8 text-gray-900">More Tours & Resources</h2>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { title: 'Taj Mahal Tour from Delhi', href: '/taj-mahal-tour-from-delhi', desc: 'Delhi to Taj by private car' },
                { title: 'Moonlight Taj Mahal Tour', href: '/moonlight-taj-mahal-tour', desc: 'Full moon night viewing' },
                { title: 'Sunrise Taj Mahal Tour', href: '/sunrise-taj-mahal-tour-from-delhi', desc: 'Golden hour experience' },
                { title: 'Same Day Taj Mahal Tour', href: '/same-day-taj-mahal-tour', desc: 'Focused Taj visit' },
                { title: 'Golden Triangle Tour', href: '/golden-triangle-english-speaking-driver', desc: 'Delhi-Agra-Jaipur complete' },
                { title: 'Agra Sightseeing', href: '/sightseeing/agra', desc: 'All Agra attractions' },
              ].map((link, i) => (
                <Link key={i} href={link.href} className="bg-purple-50 p-4 rounded-xl hover:bg-purple-100 transition-colors flex items-center gap-3">
                  <ChevronRight className="w-5 h-5 text-purple-600 flex-shrink-0" />
                  <div><div className="font-semibold text-gray-900 text-sm">{link.title}</div><div className="text-xs text-gray-500">{link.desc}</div></div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqData.map((faq, i) => (
                <details key={i} className="bg-white rounded-xl p-6 shadow-sm group">
                  <summary className="font-semibold text-gray-900 cursor-pointer flex items-center justify-between">{faq.question}<ChevronRight className="w-5 h-5 text-purple-600 group-open:rotate-90 transition-transform flex-shrink-0" /></summary>
                  <p className="mt-4 text-gray-700 leading-relaxed">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-4 bg-gradient-to-r from-indigo-900 to-purple-900 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Book Your Private Taj Mahal Tour</h2>
            <p className="text-purple-200 text-lg mb-8">From $42 (Sedan). Sunrise option available. English-speaking driver.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="tel:+917668570551" className="inline-flex items-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-black font-bold px-8 py-4 rounded-xl transition-colors"><Phone className="w-5 h-5" /> +91-7668570551</a>
              <a href="https://wa.me/917668570551?text=Hello%20I%20want%20private%20Taj%20Mahal%20tour" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 font-bold px-8 py-4 rounded-xl transition-colors">WhatsApp Us</a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
