import { Metadata } from "next";
import AirportServiceClient from "@/components/airport/AirportServiceClient";

export const metadata = {
  title: "Never Miss a Flight Again! 24/7 Premium Airport Taxi Service | Triveni Cabs",
  description: "Stress-free airport transfers guaranteed! Professional drivers track your flight, assist with luggage & ensure on-time arrival. Serving Delhi, Jaipur, Chandigarh, Shimla & beyond. Pre-book now for exclusive rates & peace of mind. Your journey starts with us!",
  keywords: "airport taxi, airport cab service, airport transfer, airport pickup, airport drop, airport cab booking, 24x7 airport cab, cheap airport taxi, airport taxi service, airport transfer service, airport taxi delhi, delhi airport cab service, delhi to airport taxi, indira gandhi airport taxi, IGI airport taxi, delhi airport transfer, airport pickup delhi, delhi airport drop, delhi airport cab booking, cheap airport taxi delhi, 24x7 airport cab delhi, best airport taxi delhi, affordable airport cab delhi, delhi airport taxi booking, delhi airport pickup service, delhi airport drop service, new delhi airport taxi, IGI terminal 3 taxi, delhi airport to city taxi, airport taxi jaipur, jaipur airport cab service, jaipur to airport taxi, jaipur international airport taxi, jaipur airport transfer, airport pickup jaipur, jaipur airport drop, jaipur airport cab booking, sanganer airport taxi, cheap airport taxi jaipur, jaipur airport to city taxi, best airport cab jaipur, jaipur airport pickup service, airport taxi agra, agra airport cab service, agra to delhi airport taxi, kheria airport taxi agra, agra airport transfer, airport pickup agra, agra to airport cab, agra airport drop service, agra to jaipur airport taxi, airport taxi chandigarh, chandigarh airport cab, chandigarh international airport taxi, airport transfer chandigarh, airport pickup chandigarh, chandigarh airport drop, mohali airport taxi, chandigarh airport cab booking, cheap airport taxi chandigarh, chandigarh airport to city taxi, best airport cab chandigarh, airport taxi shimla, shimla airport cab service, shimla to chandigarh airport taxi, shimla to delhi airport taxi, shimla airport transfer, jubbarhatti airport taxi, shimla to airport cab, shimla airport pickup, airport taxi manali, manali to kullu airport taxi, manali to chandigarh airport taxi, manali to delhi airport taxi, bhuntar airport to manali taxi, manali airport transfer, kullu airport taxi manali, manali airport cab service, kullu manali airport taxi, bhuntar to manali taxi, airport taxi amritsar, amritsar airport cab service, sri guru ram dass airport taxi, amritsar international airport taxi, amritsar airport transfer, airport pickup amritsar, amritsar airport drop, golden temple to airport taxi, amritsar airport cab booking, cheap airport taxi amritsar, best airport cab amritsar, airport taxi haridwar, haridwar to delhi airport taxi, haridwar to dehradun airport taxi, jolly grant airport to haridwar, haridwar airport transfer, haridwar airport cab service, haridwar to airport cab, haridwar airport pickup, airport taxi rishikesh, rishikesh to delhi airport taxi, rishikesh to dehradun airport taxi, jolly grant airport to rishikesh, rishikesh airport transfer, rishikesh airport cab service, rishikesh to airport cab, rishikesh airport pickup, airport taxi dehradun, dehradun airport cab service, jolly grant airport taxi, dehradun to delhi airport taxi, dehradun airport transfer, airport pickup dehradun, dehradun airport drop, dehradun to airport cab, jolly grant to dehradun taxi, cheap airport taxi dehradun, airport taxi jodhpur, jodhpur airport cab service, jodhpur airport transfer, jodhpur to jaipur airport taxi, airport pickup jodhpur, jodhpur airport drop, jodhpur to airport cab, jodhpur airport taxi booking, airport taxi udaipur, udaipur airport cab service, maharana pratap airport taxi, udaipur airport transfer, airport pickup udaipur, udaipur airport drop, udaipur to jaipur airport taxi, udaipur to airport cab, udaipur airport cab booking, airport taxi ayodhya, ayodhya to lucknow airport taxi, ayodhya to delhi airport taxi, ayodhya airport transfer, airport pickup ayodhya, ram mandir to airport taxi, ayodhya airport cab service, ayodhya to airport cab, book airport taxi online, online airport cab booking, airport taxi booking app, pre book airport taxi, advance airport cab booking, one way airport taxi, round trip airport taxi, airport taxi near me, airport cab near me, luxury airport taxi, premium airport cab, sedan airport taxi, SUV airport taxi, innova airport taxi, tempo traveller airport transfer, corporate airport transfer, group airport transfer, family airport taxi, early morning airport taxi, late night airport cab, midnight airport taxi, airport to hotel taxi, hotel to airport taxi, airport to home taxi, home to airport cab, airport shuttle service, airport taxi fare, airport cab charges, airport taxi rate, airport transfer cost",
  alternates: {
    canonical: "https://trivenicabs.in/airport-service"
  },
  openGraph: {
    title: "Never Miss a Flight! Premium Airport Taxi Service 24/7 | Triveni Cabs",
    description: "From curbside to check-in, we've got you covered! Flight tracking, luggage help & on-time guarantee. Delhi • Jaipur • Chandigarh & more. Pre-book for exclusive deals!",
    type: "website",
    locale: "en_IN",
    siteName: "Triveni Cabs",
    images: [
      {
        url: "/images/about/about_banner.webp",
        width: 1200,
        height: 630,
        alt: "Triveni Cabs Airport Transfer Service"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Never Miss a Flight! 24/7 Airport Taxi | Triveni Cabs",
    description: "✈️ Flight tracking ✈️ Luggage assistance ✈️ On-time guarantee. Pre-book now for stress-free airport transfers across India!"
  }
};

export default function AirportServicePage() {
  return <AirportServiceClient />;
}
