import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { religiousTours } from '@/utilis/religiousTourData';
import { Calendar, MapPin, Star, ChevronRight, Sparkles } from 'lucide-react';

export const metadata = {
  title: 'Religious Tour Packages | Spiritual Yatra Services | Triveni Cabs',
  description: 'Embark on divine journeys with Triveni Cabs. Explore Char Dham Yatra, pilgrimage tours, and spiritual destinations across India with comfort and safety.',
  keywords: 'religious tours, pilgrimage packages, char dham yatra, spiritual tours, temple tours, religious travel india, pilgrimage services',
  alternates: {
    canonical: 'https://trivenicabs.in/religious-tours'
  },
  openGraph: {
    title: 'Religious Tour Packages | Spiritual Yatra | Triveni Cabs',
    description: 'Divine journeys to sacred destinations across India',
    type: 'website',
    locale: 'en_IN',
    siteName: 'Triveni Cabs'
  }
};

export default function ReligiousToursPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-purple-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-100/50 to-purple-100/50" />

        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-xl border border-white/50 rounded-full px-6 py-3 mb-6 shadow-lg">
            <Sparkles className="w-5 h-5 text-orange-600" />
            <span className="text-orange-800 font-semibold">Spiritual Journeys</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-orange-600 via-purple-600 to-yellow-600 bg-clip-text text-transparent">
            Religious Tour Packages
          </h1>

          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Experience divine blessings with our carefully curated pilgrimage tours. Travel in comfort and devotion to India's most sacred destinations.
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
  );
}
