import { Metadata } from "next";
import WeddingPageClient from "@/components/wedding/WeddingPageClient";

export const metadata = {
  title: "Wedding Car Rental & Baraat Tempo Traveller Service | Triveni Cabs",
  description: "Make your wedding unforgettable with Triveni Cabs luxury wedding car rental. BMW, Audi, Mercedes, vintage cars for bride & groom. Baraat tempo traveller 9-26 seater. Professional chauffeurs, car decoration, best rates. Book now!",
  keywords: "wedding car rental, bridal car, groom car, baraat tempo traveller, luxury wedding cars, BMW wedding car, Audi wedding car, Mercedes wedding car, vintage cars for wedding, tempo traveller for baraat, wedding transportation, decorated wedding cars, wedding car hire, marriage car rental, shaadi car booking, wedding bus rental, guest transport wedding, airport pickup wedding, pre-wedding car rental, reception car service, wedding car packages, affordable wedding cars, premium wedding vehicles",
  alternates: {
    canonical: "https://trivenicabs.in/wedding"
  },
  openGraph: {
    title: "🚗 Premium Wedding Car Rental & Baraat Service | Triveni Cabs",
    description: "Luxury wedding cars (BMW, Audi, Mercedes), tempo travellers for baraat, professional chauffeurs. Make your wedding royal with Triveni Cabs.",
    type: "website",
    locale: "en_IN",
    siteName: "Triveni Cabs",
    images: [
      {
        url: "/images/about/about_banner.jpg",
        width: 1200,
        height: 630,
        alt: "Triveni Cabs Wedding Car Rental Service"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Wedding Car Rental & Baraat Service | Triveni Cabs",
    description: "Luxury wedding cars & tempo travellers for your special day"
  }
};

export default function WeddingPage() {
  return <WeddingPageClient />;
}
