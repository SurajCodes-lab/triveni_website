import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { religiousTours } from '@/utilis/religiousTourData';
import { Calendar, MapPin, Star, ChevronRight, Sparkles } from 'lucide-react';

export const metadata = {
  title: 'Find Inner Peace: Divine Pilgrimage Tours | Char Dham Yatra & More | Triveni Cabs',
  description: 'Sacred journeys that touch your soul! Expert-guided Char Dham Yatra, Vaishno Devi, Golden Temple, Tirupati & more. Comfortable AC transport, experienced drivers, affordable packages. From temple darshan to spiritual retreats - your blessed journey begins here. Customized pilgrimage tours across India!',
  keywords: 'char dham yatra, religious tour packages, pilgrimage tours India, vaishno devi tour, golden temple tour, tirupati tour, temple tour packages, spiritual yatra, hindu pilgrimage, religious travel, sacred destinations India, dharmic tourism, spiritual journey, temple darshan, pilgrimage cab service, do dham yatra, kedarnath badrinath tour, haridwar rishikesh tour, mathura vrindavan tour',
  authors: [{ name: 'Triveni Cabs' }],
  creator: 'Triveni Cabs',
  publisher: 'Triveni Cabs',
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: {
    canonical: '/religious-tours',
    languages: {
      'en-IN': '/religious-tours',
      'hi-IN': '/religious-tours',
    },
  },
  openGraph: {
    title: 'Find Inner Peace: Divine Pilgrimage & Religious Tours | Triveni Cabs',
    description: 'Char Dham, Vaishno Devi, Golden Temple - Blessed journeys with comfort & devotion. Expert-guided temple tours across India.',
    type: 'website',
    locale: 'en_IN',
    url: 'https://www.trivenicabs.in/religious-tours',
    siteName: 'Triveni Cabs',
    images: [
      {
        url: '/images/religious/chardham-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Divine Pilgrimage Tours - Char Dham Yatra by Triveni Cabs'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Divine Pilgrimage Tours | Sacred Journeys | Triveni Cabs',
    description: 'Expert-guided temple tours, comfortable travel, affordable packages. Your spiritual journey awaits!',
    creator: '@TriveniCabs',
    site: '@TriveniCabs',
    images: ['/images/religious/chardham-hero.jpg']
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  category: 'Religious Tourism',
};

export default function ReligiousToursPage() {
  // Religious Tours Service Schema
  const religiousToursSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Religious Tours and Pilgrimage Services",
    "name": "Divine Pilgrimage Tours India",
    "description": "Expert-guided Char Dham Yatra, Vaishno Devi, Golden Temple, Tirupati & more. Comfortable AC transport, experienced drivers, affordable pilgrimage packages across India.",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Triveni Cabs",
      "telephone": "+91-7668570551",
      "email": "cabstriveni@gmail.com",
      "url": "https://www.trivenicabs.in"
    },
    "areaServed": {
      "@type": "Country",
      "name": "India"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "650",
      "bestRating": "5",
      "worstRating": "1"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Religious Tour Packages",
      "itemListElement": religiousTours.map(tour => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "TouristTrip",
          "name": tour.title,
          "description": tour.description,
          "touristType": ["Pilgrims", "Families", "Groups", "Solo Travelers"]
        },
        "url": `https://www.trivenicabs.in/religious-tours/${tour.slug}`
      }))
    },
    "availableChannel": {
      "@type": "ServiceChannel",
      "serviceUrl": "https://www.trivenicabs.in/religious-tours",
      "servicePhone": "+91-7668570551",
      "availableLanguage": ["English", "Hindi"]
    }
  };

  // Breadcrumb Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.trivenicabs.in"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Religious Tours",
        "item": "https://www.trivenicabs.in/religious-tours"
      }
    ]
  };

  // FAQ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What pilgrimage tours do you offer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We offer comprehensive pilgrimage tours including Char Dham Yatra (Kedarnath, Badrinath, Gangotri, Yamunotri), Vaishno Devi, Golden Temple Amritsar, Tirupati Balaji, Haridwar-Rishikesh, Mathura-Vrindavan, and many more sacred destinations across India."
        }
      },
      {
        "@type": "Question",
        "name": "Are the tours guided?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, all our religious tours come with expert guides who are knowledgeable about the spiritual significance, rituals, and history of each pilgrimage site. Guides are available in multiple languages including English and Hindi."
        }
      },
      {
        "@type": "Question",
        "name": "What is included in the pilgrimage packages?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our packages include comfortable AC transportation, professional drivers, experienced guides, assistance with temple darshan, accommodation recommendations, and complete itinerary planning. Meals and accommodation can be customized based on your preferences."
        }
      },
      {
        "@type": "Question",
        "name": "Can I customize my pilgrimage tour?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely! We offer fully customizable pilgrimage tours. You can choose your destinations, duration, accommodation level, and add special requests for pujas or rituals. Contact us to create your personalized spiritual journey."
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(religiousToursSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-purple-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden" aria-label="Religious Tours Hero">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-100/50 to-purple-100/50" />

        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-xl border border-white/50 rounded-full px-6 py-3 mb-6 shadow-lg">
            <Sparkles className="w-5 h-5 text-orange-600" />
            <span className="text-orange-800 font-semibold">Spiritual Journeys</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-orange-600 via-purple-600 to-yellow-600 bg-clip-text text-transparent">
            Sacred Journeys Begin Here
          </h1>

          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Discover inner peace through blessed pilgrimage tours. Experience divine darshan with comfort, devotion & expert guidance to India&apos;s holiest destinations.
          </p>
        </div>
      </section>

      {/* Tours Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {religiousTours.map((tour) => (
              <Link
                key={tour.id}
                href={`/religious-tours/${tour.slug}`}
                className="group"
              >
                <div className="bg-white/40 backdrop-blur-2xl border border-white/50 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]">
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={tour.images.hero}
                      alt={tour.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                    {/* Badges */}
                    <div className="absolute top-4 left-4 flex gap-2">
                      {tour.featured && (
                        <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                          Featured
                        </span>
                      )}
                      {tour.popular && (
                        <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg flex items-center gap-1">
                          <Star className="w-3 h-3 fill-white" />
                          Popular
                        </span>
                      )}
                    </div>

                    {/* Title Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-2xl font-bold text-white mb-1">
                        {tour.title.split('–')[0].trim()}
                      </h3>
                      <p className="text-orange-200 text-sm">{tour.subtitle}</p>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <p className="text-gray-700 mb-4 line-clamp-2">
                      {tour.description}
                    </p>

                    {/* Info */}
                    <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{tour.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>{tour.highlights.length} Sites</span>
                      </div>
                    </div>

                    {/* Price & CTA */}
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-sm text-gray-600">Starting from</div>
                        <div className="text-2xl font-bold text-orange-600">
                          {tour.pricing.starting}
                        </div>
                      </div>
                      <div className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-6 py-3 rounded-full font-semibold flex items-center gap-2 group-hover:shadow-lg transition-shadow">
                        View Details
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

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white/40 backdrop-blur-2xl border border-white/50 rounded-3xl p-12 shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Need a Custom Pilgrimage Package?
            </h2>
            <p className="text-gray-600 mb-8 text-lg">
              Contact us to create a personalized spiritual journey tailored to your needs
            </p>
            <Link
              href="/contact"
              className="inline-block bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-10 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}
