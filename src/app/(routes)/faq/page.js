import FAQClient from "./FAQClient";
import Script from "next/script";
import { AGGREGATE_RATING, COMPANY_INFO, BASE_URL } from "@/lib/seo/constants";

export const revalidate = false;

const faqCategories = [
  {
    category: "Booking & Pricing",
    icon: "wallet",
    faqs: [
      {
        q: "How much does a cab from Delhi to Agra cost?",
        a: "A sedan (Swift Dzire) from Delhi to Agra costs approximately ₹2,760 for a one-way trip (230 km). SUV (Toyota Innova) costs around ₹3,588, and a Tempo Traveller starts at ₹4,968. All fares include fuel, driver charges, and AC. Toll and parking are extra."
      },
      {
        q: "What is your per-km rate for outstation cabs?",
        a: "Our outstation cab rates start at ₹11/km for sedan (Swift Dzire/Honda Amaze), ₹14/km for SUV (Innova/Ertiga), ₹20/km for Tempo Traveller (12-26 seater), and ₹30/km for bus hire (22-56 seater). These are all-inclusive rates with no hidden charges."
      },
      {
        q: "Do you charge for return trips on one-way bookings?",
        a: "No. Triveni Cabs offers genuine one-way pricing — you only pay for the distance you travel. Unlike many competitors who charge round-trip rates for one-way journeys, we calculate the exact one-way distance and apply our per-km rate. This saves you 40-50% compared to round-trip pricing."
      },
      {
        q: "Is there any advance payment required?",
        a: "No advance payment is required for most bookings. You can pay the full amount to the driver at the start of your journey. For peak season bookings (Chardham Yatra, wedding season), a small confirmation amount may be requested. We accept cash, UPI, and online transfers."
      },
      {
        q: "What is included in the cab fare?",
        a: "Our fare includes: fuel charges, driver allowance, AC throughout the journey, and vehicle maintenance. Excluded: toll taxes, state border taxes, parking charges, and night charges (if applicable, ₹300/night for journeys after 10 PM). There are absolutely no hidden charges."
      },
      {
        q: "How do I book a cab with Triveni Cabs?",
        a: "You can book through 3 easy methods: (1) Call us directly at 7668570551, (2) WhatsApp your trip details to +91-7668570551, or (3) Fill the enquiry form on our website. We confirm your booking within 5 minutes with driver details and vehicle number."
      }
    ]
  },
  {
    category: "Vehicles & Fleet",
    icon: "car",
    faqs: [
      {
        q: "What types of vehicles does Triveni Cabs offer?",
        a: "We offer 6 vehicle categories: Sedan (Swift Dzire, Honda Amaze — 4 passengers), SUV (Toyota Innova, Maruti Ertiga — 6-7 passengers), Luxury (Toyota Innova Crysta, Mercedes — 4-6 passengers), Tempo Traveller (12, 17, 20, 26 seater), Mini Bus (22-35 seater), and Volvo Bus (45-56 seater). All vehicles are AC-equipped and well-maintained."
      },
      {
        q: "Which car is best for a family trip — sedan or SUV?",
        a: "For a family of 4 with moderate luggage, a sedan (Swift Dzire) is comfortable and budget-friendly at ₹11/km. For families of 5-7 or those with heavy luggage, an SUV (Innova/Ertiga) at ₹14/km provides more space and comfort. For groups of 8+, a Tempo Traveller at ₹20/km is the best value."
      },
      {
        q: "Are your vehicles AC and well-maintained?",
        a: "Yes, 100% of our fleet is AC-equipped. Every vehicle undergoes regular maintenance checks, and we ensure clean interiors and exteriors before every trip. Our drivers carry first-aid kits, phone chargers, and water bottles. Vehicle age in our fleet averages under 3 years."
      },
      {
        q: "Can I book a luxury car for a wedding?",
        a: "Absolutely! We specialize in wedding car rentals including decorated Audi, Mercedes, BMW, vintage cars, and luxury SUVs. We also provide Baraat tempo travellers, Doli car rental, and complete wedding fleet management. Available in Agra, Delhi, Jaipur, and 30+ cities."
      }
    ]
  },
  {
    category: "Routes & Cities",
    icon: "map",
    faqs: [
      {
        q: "Which cities does Triveni Cabs operate in?",
        a: "We operate across 50+ cities in North India including Delhi, Agra, Jaipur, Chandigarh, Shimla, Manali, Amritsar, Haridwar, Rishikesh, Dehradun, Udaipur, Jodhpur, Varanasi, Lucknow, Ayodhya, Ahmedabad, Mathura, Vrindavan, Mussoorie, Nainital, and Dharamshala. We cover all major routes in Rajasthan, Uttarakhand, Himachal Pradesh, Punjab, and UP."
      },
      {
        q: "Do you provide airport pickup and drop service?",
        a: "Yes, we provide 24/7 airport transfer services at all major airports including Delhi IGI Airport (Terminal 1, 2, 3), Jaipur Airport, Chandigarh Airport, Amritsar Airport, Dehradun Jolly Grant Airport, and Varanasi Airport. Our driver tracks your flight and waits with a name board. No extra charge for flight delays."
      },
      {
        q: "Can I book a cab for Chardham Yatra?",
        a: "Yes! Chardham Yatra is one of our most popular packages. We offer complete Chardham (Yamunotri, Gangotri, Kedarnath, Badrinath) packages from Delhi, Haridwar, and Rishikesh. Our experienced hill drivers know every mountain road. Packages include vehicle, fuel, driver, and flexible itinerary."
      },
      {
        q: "Is your taxi service available 24/7?",
        a: "Yes, Triveni Cabs operates 24 hours a day, 7 days a week, 365 days a year. Whether it's an early morning airport pickup at 3 AM or a late-night emergency trip, we're always available. Call 7668570551 anytime to book."
      }
    ]
  },
  {
    category: "Safety & Trust",
    icon: "shield",
    faqs: [
      {
        q: "Are your drivers verified and professional?",
        a: "Every Triveni Cabs driver undergoes thorough verification including police background check, license verification, and driving skills assessment. Our drivers have an average experience of 8+ years and are trained in customer service, safety protocols, and route knowledge. We also provide women-safe cab service with female-friendly drivers."
      },
      {
        q: "What if I need to cancel my booking?",
        a: "We have a flexible cancellation policy. Cancel up to 24 hours before your trip for a full refund. Cancellations within 24 hours may incur a nominal fee depending on the booking type. For details, visit our cancellation and refund policy page or call us at 7668570551."
      },
      {
        q: "Do you provide GPS tracking for trips?",
        a: "Yes, all our vehicles are GPS-enabled. Once your trip starts, you receive a tracking link via WhatsApp that you can share with family members for real-time location updates. This ensures complete transparency and safety throughout your journey."
      },
      {
        q: "What is your customer rating?",
        a: "Triveni Cabs has a 4.9-star rating based on 10,000+ customer reviews. We're proud of our 98% customer satisfaction rate. Our reviews consistently highlight professional drivers, clean vehicles, transparent pricing, and punctual service."
      }
    ]
  },
  {
    category: "Special Services",
    icon: "star",
    faqs: [
      {
        q: "Do you offer tempo traveller for group trips?",
        a: "Yes! We offer 12-seater, 17-seater, 20-seater, and 26-seater Tempo Travellers for group trips, corporate outings, pilgrimages, and family vacations. Rates start at ₹20/km with push-back seats, AC, music system, and ample luggage space. Available on all routes across North India."
      },
      {
        q: "Can I hire a bus for a corporate event or wedding?",
        a: "Absolutely! We provide 22-seater mini buses, 35-seater buses, and 45-56 seater Volvo/luxury buses for corporate events, weddings, school trips, and group pilgrimages. Rates start at ₹30/km. Includes experienced driver, fuel, and AC. Available in Delhi, Agra, Jaipur, and all North India cities."
      },
      {
        q: "Do you offer sightseeing tour packages?",
        a: "Yes, we offer curated sightseeing tours in 30+ cities including Delhi City Tour, Agra Taj Mahal Tour, Jaipur Full Day Tour, Golden Triangle Tour, Shimla-Kufri Tour, Manali-Solang Tour, Amritsar Golden Temple Tour, and many more. All packages include vehicle, fuel, driver, and customizable itinerary."
      },
      {
        q: "Can I book a private driver for multiple days?",
        a: "Yes, we offer multi-day private driver hire services across India. Whether it's a 3-day Rajasthan road trip or a 7-day Himachal tour, our drivers stay with you throughout. Rates are calculated on per-km basis with a minimum daily distance. Driver accommodation is managed by us."
      }
    ]
  }
];

// Flatten all FAQs for schema
const allFaqs = faqCategories.flatMap(cat => cat.faqs);

export const metadata = {
  title: "FAQ — Cab Booking Questions Answered | Triveni Cabs",
  description: "Find answers to common questions about taxi booking, pricing (₹11/km sedan), vehicles, routes, safety, and more. 24/7 cab service across 50+ cities in India.",
  keywords: "cab booking FAQ, taxi service questions, Triveni Cabs FAQ, cab pricing India, outstation cab questions, airport taxi FAQ, tempo traveller FAQ, wedding car FAQ",
  alternates: {
    canonical: "https://www.trivenicabs.in/faq",
  },
  openGraph: {
    title: "Frequently Asked Questions — Triveni Cabs",
    description: "Everything you need to know about booking a cab with Triveni Cabs. Pricing, vehicles, routes, safety, and special services explained.",
    type: "website",
    url: "https://www.trivenicabs.in/faq",
    siteName: "Triveni Cabs",
  },
};

export default function FAQPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": allFaqs.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": BASE_URL },
      { "@type": "ListItem", "position": 2, "name": "FAQ", "item": `${BASE_URL}/faq` }
    ]
  };

  return (
    <>
      <Script
        id="faq-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="faq-breadcrumb"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <FAQClient categories={faqCategories} />
    </>
  );
}
