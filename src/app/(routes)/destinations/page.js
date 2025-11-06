// First file: src/app/(routes)/destinations/page.js
import { destinations, phoneNumber } from '@/utilis/data';
import ClientDestinationTabs from './client-components';

export const metadata = {
  title: 'India Like Never Before! Handpicked Destinations & Tour Packages | Triveni Cabs',
  description: '🗺️ From Himalayan heights to coastal delights! Discover 50+ curated destinations with exclusive tour packages. Delhi, Agra, Jaipur, Shimla, Manali, Kashmir & more. Golden Triangle tours, hill station escapes, beach getaways. Unforgettable experiences at unbeatable prices!',
  keywords: 'India destinations, tourist places India, tour packages, Delhi Agra Jaipur tour, golden triangle tour, hill station packages, Kashmir tour, Goa packages, Kerala tours, Rajasthan travel, North India tours, South India packages, weekend getaways, honeymoon destinations, family tour packages',
  alternates: {
    canonical: 'https://trivenicabs.in/destinations'
  },
  openGraph: {
    title: 'India Like Never Before! 50+ Handpicked Destinations',
    description: '🗺️ Mountains • Beaches • Heritage • Culture | Exclusive tour packages to unforgettable places',
    type: 'website',
    locale: 'en_IN',
    siteName: 'Triveni Cabs'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Discover Incredible India | Tour Packages',
    description: '🗺️ 50+ destinations • Curated experiences • Affordable packages. Your dream trip awaits!'
  }
};

export default function DestinationsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[80vh] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/about/about_banner.webp"
            alt="Destinations Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30" />
        </div>
        <div className="relative h-full mx-auto px-4 flex flex-col justify-center">
          <h1 className="text-3xl max-sm:text-[25px] md:text-4xl tracking-[0.06rem] font-bold text-white mb-6 animate-fade-in">
            India Like You've Never Seen Before
          </h1>
          <p className="text-xl max-sm:text-[15px] text-center text-gray-200 tracking-[0.06rem] mb-8">
            50+ handpicked destinations waiting to steal your heart. From snow-capped peaks to sun-kissed beaches!
          </p>
          <div className="flex justify-center gap-4">
            <button className="px-8 py-3 bg-yellow-500 max-sm:text-sm max-sm:px-2.5 max-sm:py-2 text-black font-semibold rounded-lg hover:bg-yellow-400 transition-colors">
              Explore Now
            </button>
            <button className="px-8 py-3 bg-white/10 max-sm:text-sm max-sm:px-2.5 max-sm:py-2 text-white font-semibold rounded-lg hover:bg-white/20 transition-colors backdrop-blur-sm">
              View Packages
            </button>
          </div>
        </div>
      </div>

      {/* Client-side Navigation Tabs and Content */}
      <ClientDestinationTabs />
    </div>
  );
}