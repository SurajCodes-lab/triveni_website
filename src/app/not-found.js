import Link from 'next/link';
// Centralized icon imports for better bundle optimization
import { Home, Phone, Car, MapPin, ArrowRight, Search } from '@/components/ui/icons';

export const metadata = {
  title: 'Page Not Found | Triveni Cabs',
  description: 'The page you are looking for does not exist. Browse our car rental services, tour packages, and popular routes across India.',
  robots: 'noindex, follow',
};

export default function NotFound() {
  const popularLinks = [
    { name: 'Sedan Car Rental', href: '/vehicles/sedan', icon: Car },
    { name: 'SUV Car Rental', href: '/vehicles/suv', icon: Car },
    { name: 'Tempo Traveller', href: '/vehicles/tempo-traveller', icon: Car },
    { name: 'Bus Rental', href: '/vehicles/bus', icon: Car },
  ];

  const popularRoutes = [
    { name: 'Delhi to Agra', href: '/delhi/delhi-to-agra-cab' },
    { name: 'Delhi to Jaipur', href: '/delhi/delhi-to-jaipur-cab' },
    { name: 'Delhi to Manali', href: '/delhi/delhi-to-manali-cab' },
    { name: 'Delhi to Shimla', href: '/delhi/delhi-to-shimla-cab' },
    { name: 'Mumbai to Pune', href: '/mumbai/mumbai-to-pune-cab' },
    { name: 'Jaipur to Udaipur', href: '/jaipur/jaipur-to-udaipur-cab' },
  ];

  const services = [
    { name: 'Outstation Cabs', href: '/services', icon: MapPin },
    { name: 'Airport Transfer', href: '/airport-taxi-service', icon: MapPin },
    { name: 'Wedding Cars', href: '/wedding-car-rental', icon: Car },
    { name: 'Tour Packages', href: '/tour-package', icon: MapPin },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* 404 Number */}
          <div className="mb-8">
            <h1 className="text-8xl md:text-9xl font-bold text-gray-200 select-none">
              404
            </h1>
          </div>

          {/* Error Message */}
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Page Not Found
          </h2>
          <p className="text-gray-600 text-lg mb-8 max-w-xl mx-auto">
            Sorry, the page you are looking for doesn&apos;t exist or has been moved.
            Let us help you find what you need.
          </p>

          {/* Primary Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#FACF2D] text-gray-900 font-semibold rounded-lg hover:bg-yellow-400 transition-colors"
            >
              <Home className="w-5 h-5" />
              Go to Homepage
            </Link>
            <a
              href="tel:+917668570551"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors"
            >
              <Phone className="w-5 h-5" />
              Call: +91 76685 70551
            </a>
          </div>
        </div>
      </section>

      {/* Helpful Links Section */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-xl font-bold text-gray-900 mb-8 text-center">
            Browse Our Services
          </h3>

          {/* Vehicle Categories */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {popularLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="flex items-center gap-3 p-4 bg-white rounded-xl border border-gray-200 hover:border-[#FACF2D] hover:shadow-md transition-all group"
              >
                <div className="p-2 bg-gray-100 rounded-lg group-hover:bg-[#FACF2D]/20 transition-colors">
                  <link.icon className="w-5 h-5 text-gray-700" />
                </div>
                <span className="font-medium text-gray-800 text-sm">{link.name}</span>
              </Link>
            ))}
          </div>

          {/* Two Column Layout */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Popular Routes */}
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-[#FACF2D]" />
                Popular Routes
              </h4>
              <ul className="space-y-2">
                {popularRoutes.map((route) => (
                  <li key={route.name}>
                    <Link
                      href={route.href}
                      className="flex items-center justify-between py-2 px-3 rounded-lg hover:bg-gray-50 text-gray-700 hover:text-gray-900 transition-colors group"
                    >
                      <span>{route.name}</span>
                      <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Car className="w-5 h-5 text-[#FACF2D]" />
                Our Services
              </h4>
              <ul className="space-y-2">
                {services.map((service) => (
                  <li key={service.name}>
                    <Link
                      href={service.href}
                      className="flex items-center justify-between py-2 px-3 rounded-lg hover:bg-gray-50 text-gray-700 hover:text-gray-900 transition-colors group"
                    >
                      <span>{service.name}</span>
                      <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Quick Links */}
              <div className="mt-6 pt-4 border-t border-gray-100">
                <div className="flex flex-wrap gap-2">
                  <Link href="/about" className="text-sm text-gray-600 hover:text-[#FACF2D] transition-colors">
                    About Us
                  </Link>
                  <span className="text-gray-300">|</span>
                  <Link href="/contact" className="text-sm text-gray-600 hover:text-[#FACF2D] transition-colors">
                    Contact
                  </Link>
                  <span className="text-gray-300">|</span>
                  <Link href="/blog" className="text-sm text-gray-600 hover:text-[#FACF2D] transition-colors">
                    Travel Blog
                  </Link>
                  <span className="text-gray-300">|</span>
                  <Link href="/destinations" className="text-sm text-gray-600 hover:text-[#FACF2D] transition-colors">
                    Destinations
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-12 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 text-white">
            <h3 className="text-xl font-bold mb-3">Need Help Finding Something?</h3>
            <p className="text-gray-300 mb-6">
              Our team is available 24/7 to assist you with bookings and inquiries.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="https://wa.me/917668570551?text=Hi%2C%20I%20need%20help%20finding%20a%20page%20on%20your%20website"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-green-500 text-white font-medium rounded-lg hover:bg-green-600 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp Us
              </a>
              <a
                href="tel:+917668570551"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-white/10 text-white font-medium rounded-lg hover:bg-white/20 transition-colors"
              >
                <Phone className="w-5 h-5" />
                +91 76685 70551
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
