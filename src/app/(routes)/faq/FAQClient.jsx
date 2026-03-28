'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, Phone, MessageCircle, Wallet, Car, Map, Shield, Star } from 'lucide-react';

const iconMap = {
  wallet: Wallet,
  car: Car,
  map: Map,
  shield: Shield,
  star: Star,
};

function FAQItem({ question, answer, isOpen, onClick }) {
  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden transition-all hover:border-amber-300/50">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between p-5 text-left bg-white hover:bg-amber-50/50 transition-colors"
        aria-expanded={isOpen}
      >
        <span className="font-semibold text-gray-900 pr-4">{question}</span>
        <ChevronDown className={`w-5 h-5 text-amber-600 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {isOpen && (
        <div className="px-5 pb-5 bg-amber-50/30">
          <p className="text-gray-700 leading-relaxed faq-answer">{answer}</p>
        </div>
      )}
    </div>
  );
}

export default function FAQClient({ categories }) {
  const [openItems, setOpenItems] = useState({});
  const [activeCategory, setActiveCategory] = useState(null);

  const toggleItem = (key) => {
    setOpenItems(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const filteredCategories = activeCategory
    ? categories.filter(c => c.category === activeCategory)
    : categories;

  return (
    <article itemScope itemType="https://schema.org/FAQPage" className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-amber-50 via-white to-orange-50 py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center justify-center gap-2 text-sm text-gray-500">
              <li><Link href="/" className="hover:text-amber-600">Home</Link></li>
              <li>/</li>
              <li className="text-amber-700 font-medium">FAQ</li>
            </ol>
          </nav>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Everything you need to know about booking a cab with Triveni Cabs — pricing, vehicles, routes, safety, and more.
          </p>

          {/* Direct Answer Box for Featured Snippets */}
          <div className="direct-answer mt-8 bg-white rounded-2xl shadow-lg p-6 text-left" data-snippet-type="direct-answer">
            <div className="key-info grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
              <div className="text-center p-3 bg-amber-50 rounded-xl">
                <div className="text-2xl font-bold text-amber-700">₹11/km</div>
                <div className="text-xs text-gray-600">Sedan Rate</div>
              </div>
              <div className="text-center p-3 bg-amber-50 rounded-xl">
                <div className="text-2xl font-bold text-amber-700">50+</div>
                <div className="text-xs text-gray-600">Cities Served</div>
              </div>
              <div className="text-center p-3 bg-amber-50 rounded-xl">
                <div className="text-2xl font-bold text-amber-700">24/7</div>
                <div className="text-xs text-gray-600">Available</div>
              </div>
              <div className="text-center p-3 bg-amber-50 rounded-xl">
                <div className="text-2xl font-bold text-amber-700">4.9★</div>
                <div className="text-xs text-gray-600">Customer Rating</div>
              </div>
            </div>
            <p className="faq-answer text-gray-700 text-sm leading-relaxed">
              Triveni Cabs offers affordable taxi services starting at ₹11/km for sedans across 50+ cities in North India. Book instantly by calling 7668570551 or WhatsApp. No advance payment required. All fares include fuel, driver, and AC. Available 24/7 with 4.9-star rated service and 10,000+ happy customers.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="sticky top-0 z-20 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-3">
          <div className="flex flex-wrap gap-2 justify-center">
            <button
              onClick={() => setActiveCategory(null)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                !activeCategory ? 'bg-amber-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              All Topics
            </button>
            {categories.map(cat => {
              const Icon = iconMap[cat.icon];
              return (
                <button
                  key={cat.category}
                  onClick={() => setActiveCategory(activeCategory === cat.category ? null : cat.category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-1.5 ${
                    activeCategory === cat.category ? 'bg-amber-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {Icon && <Icon className="w-3.5 h-3.5" />}
                  {cat.category}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 space-y-12">
          {filteredCategories.map((cat, catIdx) => {
            const Icon = iconMap[cat.icon];
            return (
              <div key={cat.category}>
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  {Icon && (
                    <span className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center">
                      <Icon className="w-5 h-5 text-amber-700" />
                    </span>
                  )}
                  {cat.category}
                </h2>
                <div className="space-y-3">
                  {cat.faqs.map((faq, faqIdx) => {
                    const key = `${catIdx}-${faqIdx}`;
                    return (
                      <FAQItem
                        key={key}
                        question={faq.q}
                        answer={faq.a}
                        isOpen={openItems[key]}
                        onClick={() => toggleItem(key)}
                      />
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Internal Linking Hub */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">Explore Our Services</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: "Outstation Cabs", href: "/outstation-cabs", desc: "From ₹11/km" },
              { name: "Airport Transfer", href: "/airport-service", desc: "24/7 pickup & drop" },
              { name: "One Way Cab", href: "/one-way-cab", desc: "Pay one way only" },
              { name: "Round Trip", href: "/round-trip-cab", desc: "Best rates" },
              { name: "Local Taxi", href: "/local-taxi", desc: "Hourly packages" },
              { name: "Tempo Traveller", href: "/tempo-traveller", desc: "12-26 seater" },
              { name: "Wedding Cars", href: "/wedding", desc: "Decorated vehicles" },
              { name: "Bus Hire", href: "/bus-routes", desc: "22-56 seater" },
              { name: "Sightseeing Tours", href: "/sightseeing", desc: "30+ city tours" },
              { name: "Chardham Yatra", href: "/chardham-yatra", desc: "Complete packages" },
              { name: "Corporate Transport", href: "/corporate-transportation-service", desc: "Fleet solutions" },
              { name: "Religious Tours", href: "/religious-tours", desc: "Pilgrimage packages" },
            ].map(service => (
              <Link
                key={service.href}
                href={service.href}
                className="bg-white rounded-xl p-4 border border-gray-200 hover:border-amber-300 hover:shadow-md transition-all group"
              >
                <div className="font-semibold text-gray-900 group-hover:text-amber-700 transition-colors text-sm">{service.name}</div>
                <div className="text-xs text-gray-500 mt-1">{service.desc}</div>
              </Link>
            ))}
          </div>

          <h3 className="text-xl font-bold text-gray-900 text-center mt-12 mb-6">Popular Routes</h3>
          <div className="flex flex-wrap justify-center gap-2">
            {[
              { name: "Delhi to Agra", href: "/delhi-to-agra" },
              { name: "Delhi to Jaipur", href: "/delhi-to-jaipur" },
              { name: "Delhi to Shimla", href: "/delhi-to-shimla" },
              { name: "Delhi to Manali", href: "/delhi-to-manali" },
              { name: "Delhi to Chandigarh", href: "/delhi-to-chandigarh" },
              { name: "Delhi to Haridwar", href: "/delhi-to-haridwar" },
              { name: "Delhi to Amritsar", href: "/delhi-to-amritsar" },
              { name: "Jaipur to Agra", href: "/jaipur-to-agra" },
              { name: "Chandigarh to Shimla", href: "/chandigarh-to-shimla" },
              { name: "Chandigarh to Manali", href: "/chandigarh-to-manali" },
              { name: "Agra to Jaipur", href: "/agra-to-jaipur" },
              { name: "Delhi to Rishikesh", href: "/delhi-to-rishikesh" },
            ].map(route => (
              <Link
                key={route.href}
                href={route.href}
                className="px-3 py-1.5 bg-white border border-gray-200 rounded-full text-sm text-gray-700 hover:border-amber-300 hover:text-amber-700 transition-all"
              >
                {route.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-gradient-to-r from-amber-600 to-orange-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Still Have Questions?</h2>
          <p className="text-amber-100 mb-8 text-lg">Talk to our team — we respond within 5 minutes</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+917668570551"
              className="inline-flex items-center justify-center gap-2 bg-white text-amber-700 font-bold px-8 py-4 rounded-xl hover:bg-amber-50 transition-all shadow-lg"
            >
              <Phone className="w-5 h-5" />
              Call 7668570551
            </a>
            <a
              href="https://wa.me/917668570551?text=Hi%20Triveni%20Cabs%2C%20I%20have%20a%20question"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-green-600 text-white font-bold px-8 py-4 rounded-xl hover:bg-green-700 transition-all shadow-lg"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </article>
  );
}
