import { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata = {
  title: "Your Journey, Our Passion | India's Most Trusted Cab Service - Triveni Cabs",
  description: "Experience travel redefined with Triveni Cabs - India's premier cab service trusted by 8,500+ happy customers. From city rides to outstation adventures, airport transfers to luxury tours. Professional drivers, GPS tracking, 24/7 support. Book now for unforgettable journeys!",
  keywords: "cab service India, online taxi booking, airport transfer, outstation cab, car rental India, Delhi cab service, Agra taxi, Jaipur cab booking, affordable cab service, 24/7 taxi service, professional drivers, GPS tracked cabs, instant booking, tour packages India, local taxi service, intercity cab booking, corporate cab service, luxury car rental, budget taxi India, verified drivers, safe cab service, best cab service India, book cab online, cheap taxi booking, reliable cab service",
  alternates: {
    canonical: "https://trivenicabs.in/about"
  },
  openGraph: {
    title: "Your Journey, Our Passion | India's Most Trusted Cab Service",
    description: "8,500+ travelers trust us for unforgettable journeys. Professional drivers, modern fleet, transparent pricing. Experience the difference with Triveni Cabs - where every mile matters!",
    type: "website",
    locale: "en_IN",
    siteName: "Triveni Cabs",
    images: [
      {
        url: "/images/about/about_banner.webp",
        width: 1200,
        height: 630,
        alt: "Triveni Cabs - India's Most Trusted Cab Service with Professional Drivers"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Your Journey, Our Passion | Triveni Cabs",
    description: "Join 8,500+ happy travelers. Professional cab service across India with verified drivers, modern fleet & 24/7 support. Your adventure starts here!"
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

export default function AboutPage() {
  return <AboutClient />;
}
