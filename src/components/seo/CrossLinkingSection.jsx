import Link from 'next/link';
import {
  getPopularRoutes,
  getPopularTours,
  getPopularCities,
  getServicePages,
  getWeddingPages,
} from '@/utilis/linkingHelper';

export default function CrossLinkingSection({ currentCity, currentService }) {
  const routes = getPopularRoutes(6);
  const tours = getPopularTours(6);
  const cities = getPopularCities();
  const services = getServicePages();
  const weddingPages = getWeddingPages();

  const citySlug = currentCity?.toLowerCase().replace(/\s+/g, '-');

  const serviceLinks = [
    { label: 'Airport Transfer', href: currentCity ? `/airport-service/${citySlug}` : '/airport-service' },
    { label: 'Wedding Cars', href: currentCity ? `/wedding/${citySlug}` : '/wedding' },
    { label: 'Tempo Traveller', href: '/tempo-traveller' },
    { label: 'Bus Rental', href: '/bus-routes' },
    { label: 'Sightseeing Tours', href: currentCity ? `/sightseeing/${citySlug}` : '/sightseeing' },
    { label: 'Corporate Transport', href: currentCity ? `/corporate-transportation-service/${citySlug}` : '/corporate-transportation-service' },
  ].filter(link => link.label.toLowerCase() !== currentService?.toLowerCase());

  return (
    <section className="py-12 md:py-16 bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
          Explore More Triveni Cabs Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Cross-Service Links */}
          <div>
            <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4">Our Services</h3>
            <ul className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-700 hover:text-amber-600 text-sm transition-colors">
                    {link.label}{currentCity ? ` in ${currentCity}` : ''}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Routes */}
          <div>
            <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4">Popular Routes</h3>
            <ul className="space-y-2">
              {routes.map((route) => (
                <li key={route.url}>
                  <Link href={route.url} className="text-gray-700 hover:text-amber-600 text-sm transition-colors">
                    {route.origin} to {route.destination}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Tours */}
          <div>
            <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4">Popular Tours</h3>
            <ul className="space-y-2">
              {tours.map((tour) => (
                <li key={tour.url}>
                  <Link href={tour.url} className="text-gray-700 hover:text-amber-600 text-sm transition-colors">
                    {tour.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Wedding & Service Pages */}
          <div>
            <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4">Wedding Services</h3>
            <ul className="space-y-2">
              {weddingPages.map((page) => (
                <li key={page.url}>
                  <Link href={page.url} className="text-gray-700 hover:text-amber-600 text-sm transition-colors">
                    {page.title}
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4 mt-6">Cab Types</h3>
            <ul className="space-y-2">
              {services.map((page) => (
                <li key={page.url}>
                  <Link href={page.url} className="text-gray-700 hover:text-amber-600 text-sm transition-colors">
                    {page.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Popular Cities */}
        <div className="mt-8 pt-6 border-t border-gray-200">
          <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4">Popular Cities</h3>
          <div className="flex flex-wrap gap-2">
            {cities.map((city) => (
              <Link
                key={city.slug}
                href={city.url}
                className="px-3 py-1.5 bg-white border border-gray-200 rounded-full text-sm text-gray-700 hover:border-amber-400 hover:text-amber-600 transition-colors"
              >
                {city.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
