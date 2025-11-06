import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight } from "lucide-react";
import RentalProcess from "./components/rentalProcess";
import WhyChooseUs from "./components/whyChooseUs";
import Others from "./components/others";
import CarRentalSection from "./components/carRentalSection";

export const metadata = {
  title: 'Drive Your Dreams! Premium Car Rental Services | Luxury & Economy Cars - Triveni Cabs',
  description: 'From budget-friendly sedans to luxurious SUVs - find your perfect ride! Flexible daily/weekly rentals, professional chauffeurs, zero hidden charges. Book sedans, SUVs, luxury cars across India. Self-drive & chauffeur options available. Your journey, your style!',
  keywords: 'car rental India, rent a car, luxury car rental, sedan rental, SUV rental, self drive cars, car hire with driver, wedding car rental, corporate car rental, monthly car rental, airport car rental, budget car rental, premium car rental, chauffeur driven cars, long term car rental',
  alternates: {
    canonical: 'https://trivenicabs.in/car-rental'
  },
  openGraph: {
    title: 'Drive Your Dreams! Luxury & Budget Car Rentals',
    description: '🚗 Sedans • SUVs • Luxury Cars | Self-drive & Chauffeur options | Zero hidden charges. Book your perfect ride today!',
    type: 'website',
    locale: 'en_IN',
    siteName: 'Triveni Cabs'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Drive Your Dreams! Premium Car Rentals',
    description: '🚗 Budget to Luxury • Daily/Monthly • Self-drive or Chauffeur. Find your perfect ride!'
  }
};

export default function CarRentalPage() {
  return (
    <div className="min-h-screen">
      <nav
        className="relative bg-cover bg-center bg-no-repeat py-20 md:py-40"
        aria-label="Breadcrumb"
        style={{
          backgroundImage:
            "url('https://img.freepik.com/free-vector/car-rental-concept-illustration_114360-9267.jpg?t=st=1737048092~exp=1737051692~hmac=8d3ca1128993507d9b56eab5580bce690d44b72a3b065699080f42144ec69b0f&w=740')",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <ol className="inline-flex items-center space-x-1 md:space-x-3">
            <li className="inline-flex items-center">
              <Link href="/" className="text-white hover:text-yellow-600">
                Home
              </Link>
            </li>
            <li>
              <div className="flex items-center font-semibold">
                <ChevronRight className="w-4 h-4 mx-2 text-white" />
                <span className="text-yellow-400 text-lg md:text-xl">
                  Rent Cars
                </span>
              </div>
            </li>
          </ol>
          <h1 className="text-2xl md:text-3xl font-bold text-white mt-6 md:mt-8">
            Drive Your Dreams - Luxury Meets Affordability
          </h1>
        </div>
      </nav>

      <div className="bg-gradient-to-b from-white to-[#FFFCD1]">
        <CarRentalSection />
        <RentalProcess />
        <WhyChooseUs />

       
        <Others />
      </div>
    </div>
  );
}