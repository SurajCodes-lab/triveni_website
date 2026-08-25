import VehiclePricePage from '@/components/seo/VehiclePricePage';
import { BASE_URL, COMPANY_INFO } from '@/lib/seo/constants';
import { tightenTitle } from '@/lib/seo/serp-ctr';

export const revalidate = 3600;

export const metadata = {
  title: tightenTitle('Luxury Car Rental Delhi with Driver — Fortuner, Camry, Mercedes'),
  description: 'Luxury car rental in Delhi with driver — Toyota Fortuner ₹35/km, Camry ₹45/km, Mercedes E-Class ₹60/km. Chauffeur-driven, AC, premium. Airport, wedding, corporate. Call 7668570551.',
  keywords: ['luxury car rental delhi with driver', 'mercedes on rent in delhi', 'fortuner on rent per km', 'camry rental delhi', 'luxury cab booking delhi', 'chauffeur driven luxury car delhi', 'bmw on rent delhi', 'premium car hire delhi with driver'],
  authors: [{ name: COMPANY_INFO.name }],
  creator: COMPANY_INFO.name,
  publisher: COMPANY_INFO.name,
  metadataBase: new URL(BASE_URL),
  alternates: { canonical: '/luxury-car-rental-delhi-with-driver' },
  openGraph: {
    title: 'Luxury Car Rental Delhi with Driver — Fortuner, Camry, Mercedes',
    description: 'Chauffeur-driven luxury cars in Delhi from ₹35/km. Fortuner, Camry, Mercedes. Call 7668570551.',
    url: `${BASE_URL}/luxury-car-rental-delhi-with-driver`,
    siteName: COMPANY_INFO.name,
    type: 'website',
    images: [{ url: '/images/HERO_SECTION_MAIN_PAGE.jpg', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', title: 'Luxury Car Rental Delhi with Driver', description: 'Fortuner/Camry/Mercedes from ₹35/km. Call 7668570551.' },
  robots: { index: true, follow: true, 'max-image-preview': 'large' },
};

export default function Page() {
  return (
    <VehiclePricePage
      slug="luxury-car-rental-delhi-with-driver"
      vehicleName="Luxury Car"
      h1="Luxury Car Rental in Delhi with Driver — Premium, Chauffeur-Driven"
      intro="Arrive in style with a chauffeur-driven luxury car from Triveni Cabs. From the commanding Toyota Fortuner to the refined Camry and the flagship Mercedes-Benz E-Class, our premium fleet is maintained to showroom condition and driven by experienced, discreet chauffeurs who know Delhi NCR and outstation routes. Transparent per-km pricing — fuel, driver and AC included."
      category="Luxury"
      seating="4 + 1"
      fareRows={[
        { vehicle: 'Toyota Fortuner (premium SUV)', perKm: '₹35/km', minKmDay: '300 km/day', note: 'Outstation · 6+1 · AC' },
        { vehicle: 'Toyota Camry (luxury sedan)', perKm: '₹45/km', minKmDay: '300 km/day', note: 'Hybrid · silent · AC' },
        { vehicle: 'Mercedes-Benz E-Class', perKm: '₹60/km', minKmDay: '300 km/day', note: 'Flagship · AC' },
        { vehicle: 'BMW 5 Series', perKm: '₹60/km', minKmDay: '300 km/day', note: 'Executive · AC' },
        { vehicle: 'Audi A6', perKm: '₹55/km', minKmDay: '300 km/day', note: 'Premium · AC' },
        { vehicle: 'Fortuner (local 8hr/80km)', perKm: '₹9,000/day', minKmDay: '8 hr / 80 km', note: 'Within Delhi NCR' },
      ]}
      features={[
        'Showroom-condition premium vehicles, fully sanitised',
        'Experienced, discreet, uniformed chauffeurs',
        'Leather interiors, ambient lighting, climate control',
        'Complimentary water and refreshments on board',
        'GPS live tracking and flight monitoring for airport pickups',
        'Toll & parking billed at actual — no markup',
      ]}
      useCases={[
        'VIP and executive airport transfers (Delhi IGI, Jewar)',
        'Wedding and baraat luxury car hire',
        'Corporate client and delegate movement',
        'Premium outstation tours (Delhi–Jaipur, Delhi–Agra)',
        'Event and red-carpet arrivals',
      ]}
      faqs={[
        { question: 'What is the rent for a Toyota Fortuner with driver in Delhi?', answer: 'A chauffeur-driven Toyota Fortuner is ₹35/km outstation (minimum 300 km/day) or ₹9,000/day for an 8-hour/80-km local Delhi NCR package. Fuel, driver and AC are included; toll and parking are extra at actual.' },
        { question: 'Can I rent a Mercedes or BMW with a driver in Delhi?', answer: 'Yes. The Mercedes-Benz E-Class and BMW 5 Series are available chauffeur-driven at ₹60/km, and the Audi A6 at ₹55/km. These are popular for weddings, VIP airport transfers and corporate events.' },
        { question: 'Is the chauffeur included in the luxury car per-km price?', answer: 'Yes — every luxury rental is chauffeur-driven. Triveni does not offer self-drive on premium vehicles. The driver, fuel and AC are all included in the per-km fare.' },
        { question: 'Do you provide luxury cars for weddings in Delhi?', answer: 'Yes. We supply decorated luxury cars for brides, grooms and baraat. See our [wedding car rental near me](/wedding-car-rental-near-me) page or call us for decoration packages.' },
        { question: 'Can I book a luxury car for Delhi airport pickup?', answer: 'Yes. We track your flight for delays and the chauffeur meets you inside the terminal with a name placard. Luxury airport transfers are available 24/7 at [Delhi airport taxi](/airport-service/delhi).' },
      ]}
      relatedLinks={[
        { href: '/fortuner-hire', anchor: 'Fortuner on rent' },
        { href: '/innova-crysta-rent-per-km', anchor: 'Innova Crysta rent per km' },
        { href: '/wedding-car-rental-near-me', anchor: 'Wedding car rental near me' },
        { href: '/luxury-car-for-events', anchor: 'Luxury car for events' },
        { href: '/delhi', anchor: 'Cab service in Delhi' },
      ]}
    />
  );
}