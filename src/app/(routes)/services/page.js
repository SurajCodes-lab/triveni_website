import ServicesClient from './ServicesClient';

export const metadata = {
  title: "Premium Cab Services Across India | Local, Outstation & Airport Transfers - Triveni Cabs",
  description: "Explore our comprehensive cab services: city rides, outstation tours, airport transfers, wedding cars, corporate travel & tempo traveller rentals. Professional drivers, modern fleet, 24/7 service across 50+ cities. Book your perfect ride today!",
  keywords: [
    // Primary Service Keywords
    'cab services India',
    'taxi services',
    'car rental services',
    'professional cab service',
    'online taxi booking',
    'cab booking services',

    // Service Type Keywords
    'local cab service',
    'outstation cab service',
    'airport taxi service',
    'corporate cab service',
    'wedding car rental',
    'tempo traveller rental',
    'group travel service',
    'sightseeing taxi service',

    // Location-Based Keywords
    'Delhi cab service',
    'Agra taxi service',
    'Jaipur cab booking',
    'Chandigarh taxi service',
    'Shimla cab rental',
    'Manali taxi booking',

    // Vehicle Type Keywords
    'sedan cab service',
    'SUV rental service',
    'luxury car rental',
    'economy cab service',
    'mini bus rental',
    '12 seater tempo traveller',
    '17 seater tempo hire',

    // Feature Keywords
    '24/7 cab service',
    'GPS tracked cabs',
    'verified driver service',
    'instant cab booking',
    'affordable taxi service',
    'reliable cab service',
    'safe taxi service',
    'professional chauffeur service',

    // Occasion Keywords
    'wedding transportation service',
    'airport transfer service',
    'corporate travel solutions',
    'holiday tour packages',
    'pilgrimage tour service',

    // Long-tail Keywords
    'best cab service in India',
    'cheap taxi booking online',
    'outstation cab booking with driver',
    'airport pickup and drop service',
    'one way cab service',
    'round trip taxi booking',
    'intercity cab service',
    'local sightseeing packages'
  ].join(', '),
  alternates: {
    canonical: 'https://trivenicabs.in/services'
  },
  openGraph: {
    title: 'Premium Cab Services Across India | Triveni Cabs',
    description: 'From daily commutes to dream vacations - we have got the perfect ride for every journey. Professional drivers, modern vehicles & unbeatable service across India.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'Triveni Cabs',
    url: 'https://trivenicabs.in/services',
    images: [
      {
        url: '/images/about/about_banner.webp',
        width: 1200,
        height: 630,
        alt: 'Triveni Cabs Premium Services - Professional Taxi and Car Rental Across India'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Every Journey, Every Need - One Perfect Ride 🚗',
    description: 'Local rides • Outstation tours • Airport transfers • Wedding cars • Corporate travel. Your complete cab service partner across India!',
    images: ['/images/about/about_banner.webp'],
    creator: '@TriveniCabs',
    site: '@TriveniCabs'
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function ServicesPage() {
  return <ServicesClient />;
}
