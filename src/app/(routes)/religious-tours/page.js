import Link from 'next/link';
import Image from 'next/image';
import { religiousTours } from '@/utilis/religiousTourData';
// Centralized icon imports for better bundle optimization
import { Calendar, MapPin, Star, ChevronRight, Phone, Shield, Clock, Users, Heart } from '@/components/ui/icons';

export const revalidate = false;

export const metadata = {
  title: 'Pilgrimage Tours 2026 | Char Dham from ₹45,000 | AC Transport & Guide',
  description: 'Book pilgrimage tours from Delhi with AC transport. Char Dham Yatra ₹45K, Vaishno Devi ₹8K, Haridwar ₹4K. 3000+ pilgrims served. Expert guides + 24/7 support. Call 7668570551.',
  authors: [{ name: 'Triveni Cabs' }],
  creator: 'Triveni Cabs',
  publisher: 'Triveni Cabs',
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: {
    canonical: '/religious-tours',
  },
  openGraph: {
    title: 'Pilgrimage Tours 2026 | Char Dham, Vaishno Devi from Delhi | AC Transport',
    description: 'Book pilgrimage packages with AC transport from Delhi. Char Dham ₹45K, Vaishno Devi ₹8K. 3000+ pilgrims trust us. Expert guides included.',
    type: 'website',
    locale: 'en_IN',
    url: 'https://www.trivenicabs.in/religious-tours',
    siteName: 'Triveni Cabs',
    images: [
      {
        url: '/images/sightseeing/Char_Dham/Chardham_hero_section.jpg',
        width: 1200,
        height: 630,
        alt: 'Pilgrimage Tours India - Char Dham Yatra 2026'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pilgrimage Tours 2026 | Char Dham ₹45K | AC Transport',
    description: '3000+ pilgrims served. Char Dham, Vaishno Devi, Haridwar packages with AC transport & expert guides. Book now!',
    creator: '@trivenicabs',
    site: '@trivenicabs',
    images: ['/images/sightseeing/Char_Dham/Chardham_hero_section.jpg']
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

export default function ReligiousToursPage() {
  // Schema markup
  const religiousToursSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Religious Tours and Pilgrimage Services",
    "name": "Divine Pilgrimage Tours India",
    "description": "Expert-guided Char Dham Yatra, Vaishno Devi, Golden Temple, Tirupati & more.",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Triveni Cabs",
      "telephone": "+91-7668570551",
      "email": "cabstriveni@gmail.com",
      "url": "https://www.trivenicabs.in"
    },
    "areaServed": { "@type": "Country", "name": "India" },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "10000",
      "bestRating": "5"
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" },
      { "@type": "ListItem", "position": 2, "name": "Religious Tours", "item": "https://www.trivenicabs.in/religious-tours" }
    ]
  };

  // FAQ Data for Schema
  const faqData = [
    {
      question: "What is the cost of Char Dham Yatra from Delhi?",
      answer: "Char Dham Yatra package from Delhi starts from ₹45,000 per person for 10-12 days. This includes AC vehicle, experienced hill driver, fuel, tolls, parking, and driver accommodation. Helicopter options available from ₹1.5 lakh."
    },
    {
      question: "How many days are needed for Char Dham Yatra?",
      answer: "Complete Char Dham Yatra (Yamunotri, Gangotri, Kedarnath, Badrinath) requires 10-12 days. For Do Dham (Kedarnath-Badrinath), 5-6 days are sufficient. We customize duration based on your schedule."
    },
    {
      question: "Is AC vehicle available for pilgrimage tours?",
      answer: "Yes! All our pilgrimage packages include AC vehicles - Innova Crysta, Ertiga, or Tempo Traveller based on group size. AC works optimally in plains; may be limited in high altitude areas due to thin air."
    },
    {
      question: "Do you provide Vaishno Devi package from Delhi?",
      answer: "Yes! Vaishno Devi package from Delhi starts from ₹8,000 for 2-3 days. Includes AC transport to Katra, driver stay, toll, and parking. Helicopter booking and pony/palki assistance available on request."
    },
    {
      question: "What is included in pilgrimage tour packages?",
      answer: "Our packages include AC vehicle, experienced driver familiar with pilgrimage routes, fuel, tolls, parking, driver accommodation and meals. Temple VIP darshan tickets, helicopter bookings, and hotel stays can be added at extra cost."
    },
    {
      question: "Can you arrange group pilgrimage tours?",
      answer: "Yes! We specialize in group pilgrimages with 12-26 seater tempo travellers and 35-56 seater buses. Group discounts available. We've organized pilgrimages for sangats, family groups, and senior citizen associations."
    },
    {
      question: "What is the best time for Char Dham Yatra?",
      answer: "Char Dham Yatra season is May to June and September to October. Avoid July-August (heavy monsoon) and November onwards (temples close for winter). We recommend booking 2-3 weeks in advance during peak season."
    },
    {
      question: "Do drivers know the pilgrimage routes well?",
      answer: "Yes! Our drivers have 5+ years experience on pilgrimage routes. They know road conditions, best halts, local dhabas for vegetarian food, and can assist with temple registration. Many drivers are devotees themselves."
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

  const trustFeatures = [
    { icon: Shield, title: "Safe Travel", desc: "Verified drivers & sanitized vehicles" },
    { icon: Clock, title: "24/7 Support", desc: "Round-the-clock assistance" },
    { icon: Users, title: "3000+ Pilgrims", desc: "Happy travelers blessed" },
    { icon: Heart, title: "Hassle-free", desc: "Complete darshan assistance" }
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(religiousToursSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="min-h-screen bg-stone-50">
        {/* Hero Section with Full Background */}
        <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="/images/sightseeing/Char_Dham/Chardham_hero_section.jpg"
              alt="Sacred Pilgrimage Tours"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-stone-900/90" />
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-500/20 rounded-full blur-3xl" />

          {/* Hero Content */}
          <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-orange-500/20 backdrop-blur-md px-6 py-2 rounded-full mb-8 border border-orange-400/30">
              <span className="text-orange-200 font-semibold text-sm tracking-wider uppercase">Divine Pilgrimage Tours 2026</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Begin Your <span className="text-transparent bg-gradient-to-r from-orange-400 to-amber-300 bg-clip-text">Sacred Journey</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto leading-relaxed">
              Experience divine blessings with comfortable travel. Char Dham, Vaishno Devi, Kashi & more holy destinations.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="tel:+917668570551"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-amber-500 text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-orange-500/30 hover:scale-105 transition-all"
              >
                <Phone className="w-5 h-5" />
                Call Now: 7668570551
              </Link>
              <Link
                href="https://wa.me/917668570551?text=I want to book a pilgrimage tour"
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md text-white px-8 py-4 rounded-full font-bold text-lg border border-white/30 hover:bg-white/20 transition-all"
              >
                WhatsApp Inquiry
              </Link>
            </div>
          </div>

          {/* Stats Bar */}
          <div className="absolute bottom-0 left-0 right-0 bg-black/40 backdrop-blur-xl border-t border-white/10">
            <div className="max-w-6xl mx-auto px-4 py-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {trustFeatures.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-white/90">
                    <div className="p-2 bg-orange-500/20 rounded-lg">
                      <feature.icon className="w-5 h-5 text-orange-400" />
                    </div>
                    <div>
                      <div className="font-bold text-sm">{feature.title}</div>
                      <div className="text-xs text-gray-400">{feature.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Section Header */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-4">
              Popular Pilgrimage Packages
            </h2>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto">
              Choose from our carefully curated spiritual journeys with AC transport, experienced drivers, and complete darshan assistance
            </p>
          </div>
        </section>

        {/* Tours Grid - Premium Cards */}
        <section className="pb-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {religiousTours.map((tour) => (
                <Link
                  key={tour.id}
                  href={`/religious-tours/${tour.slug}`}
                  className="group block"
                >
                  <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-stone-100 hover:border-orange-200 h-full flex flex-col">
                    {/* Image Container */}
                    <div className="relative h-56 overflow-hidden">
                      <Image
                        src={tour.images.hero}
                        alt={tour.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                      {/* Badges */}
                      <div className="absolute top-4 left-4 flex gap-2">
                        {tour.featured && (
                          <span className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                            Featured
                          </span>
                        )}
                        {tour.popular && (
                          <span className="bg-white/90 text-orange-600 px-3 py-1 rounded-full text-xs font-bold shadow-lg flex items-center gap-1">
                            <Star className="w-3 h-3 fill-orange-500" />
                            Popular
                          </span>
                        )}
                      </div>

                      {/* Duration Badge */}
                      <div className="absolute top-4 right-4">
                        <span className="bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {tour.duration}
                        </span>
                      </div>

                      {/* Title on Image */}
                      <div className="absolute bottom-0 left-0 right-0 p-5">
                        <div className="text-orange-300 text-sm font-medium mb-1">{tour.subtitle}</div>
                        <h3 className="text-xl font-bold text-white leading-tight">
                          {tour.title.split('–')[0].trim()}
                        </h3>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-5 flex-1 flex flex-col">
                      <p className="text-stone-600 text-sm mb-4 line-clamp-2 flex-1">
                        {tour.description}
                      </p>

                      {/* Highlights */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {tour.highlights.slice(0, 3).map((highlight, idx) => (
                          <span key={idx} className="text-xs bg-orange-50 text-orange-700 px-2 py-1 rounded-full">
                            {highlight.name}
                          </span>
                        ))}
                      </div>

                      {/* Price & CTA */}
                      <div className="flex items-center justify-between pt-4 border-t border-stone-100">
                        <div>
                          <div className="text-xs text-stone-500 uppercase tracking-wider">Starting from</div>
                          <div className="text-2xl font-bold text-orange-600">
                            {tour.pricing.starting}
                          </div>
                        </div>
                        <div className="bg-gradient-to-r from-orange-500 to-amber-500 text-white px-5 py-2.5 rounded-full font-semibold text-sm flex items-center gap-1.5 group-hover:shadow-lg group-hover:shadow-orange-500/25 transition-all">
                          Book Now
                          <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-orange-600 to-amber-600">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Travel With Triveni Cabs?
              </h2>
              <p className="text-orange-100 text-lg max-w-2xl mx-auto">
                Your comfort and spiritual experience is our priority
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: "🚗", title: "AC Vehicles", desc: "Clean, sanitized & comfortable transport" },
                { icon: "👨‍✈️", title: "Expert Drivers", desc: "Experienced with pilgrimage routes" },
                { icon: "💰", title: "Transparent Pricing", desc: "No hidden charges, all-inclusive" },
                { icon: "🙏", title: "Darshan Assistance", desc: "Help with temple registration & VIP entry" }
              ].map((item, idx) => (
                <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20 hover:bg-white/20 transition-all">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-white font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-orange-100 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-stone-900">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Need a Custom Pilgrimage Package?
            </h2>
            <p className="text-stone-400 mb-8 text-lg">
              Contact us to create a personalized spiritual journey for your family or group
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="tel:+917668570551"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-amber-500 text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:scale-105 transition-all"
              >
                <Phone className="w-5 h-5" />
                Call: +91 7668570551
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white text-stone-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-stone-100 transition-all"
              >
                Send Inquiry
                <ChevronRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
