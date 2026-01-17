/**
 * FAQ Generator - Auto-generate relevant FAQs based on page content
 * Generates 5-8 contextual questions and answers per page type
 */

import { COMPANY_INFO, PRICING, VEHICLE_TYPES } from './constants';

/**
 * Generate FAQs for route pages (A to B taxi)
 */
export function generateRouteFAQs({ origin, destination, distance, duration, price, vehicles = [] }) {
  const vehicleList = vehicles.length > 0
    ? vehicles.map(v => v.type || v).join(', ')
    : 'Sedan, SUV, Tempo Traveller';

  return [
    {
      question: `How much does a cab from ${origin} to ${destination} cost?`,
      answer: `The cab fare from ${origin} to ${destination} starts at ₹${price} for a sedan. Prices vary based on vehicle type - SUVs cost approximately ₹${Math.round(price * 1.3)} and Tempo Travellers cost around ₹${Math.round(price * 1.8)}. The fare includes driver allowance, toll charges, and all taxes. Book with ${COMPANY_INFO.name} for the best rates.`
    },
    {
      question: `What is the distance from ${origin} to ${destination} by road?`,
      answer: `The distance from ${origin} to ${destination} by road is approximately ${distance} km. The exact distance may vary slightly depending on the route taken and any diversions. Our drivers take the most efficient and safest routes.`
    },
    {
      question: `How long does it take to travel from ${origin} to ${destination} by taxi?`,
      answer: `The journey from ${origin} to ${destination} typically takes ${duration} by taxi. Travel time may vary based on traffic conditions, weather, and road conditions. We recommend starting early in the morning for a comfortable journey.`
    },
    {
      question: `Can I book a one-way taxi from ${origin} to ${destination}?`,
      answer: `Yes, ${COMPANY_INFO.name} offers both one-way and round-trip taxi services from ${origin} to ${destination}. One-way trips are charged at standard rates with no hidden fees. You only pay for the distance you travel.`
    },
    {
      question: `What vehicles are available for ${origin} to ${destination} route?`,
      answer: `We offer multiple vehicle options for the ${origin} to ${destination} route: ${vehicleList}. All vehicles are well-maintained, air-conditioned, and driven by experienced, verified drivers. Choose based on your group size and comfort preference.`
    },
    {
      question: `Is ${origin} to ${destination} taxi service available 24/7?`,
      answer: `Yes, ${COMPANY_INFO.name} provides 24/7 taxi service from ${origin} to ${destination}. You can book a cab for early morning, late night, or any time that suits your schedule. We recommend advance booking for guaranteed availability.`
    },
    {
      question: `What is included in the ${origin} to ${destination} cab fare?`,
      answer: `Our ${origin} to ${destination} cab fare includes: base fare, driver allowance (for trips over 300km), toll charges, state permits, and all applicable taxes. Parking charges at destinations, if any, are additional. We provide transparent billing with no hidden costs.`
    },
    {
      question: `How do I book a taxi from ${origin} to ${destination}?`,
      answer: `Booking is easy with ${COMPANY_INFO.name}. You can: 1) Call us at ${COMPANY_INFO.phone.display}, 2) WhatsApp us at ${COMPANY_INFO.phone.whatsapp}, 3) Fill the booking form on our website, or 4) Email us at ${COMPANY_INFO.email.bookings}. Provide your pickup date, time, and address, and we'll confirm your booking instantly.`
    }
  ];
}

/**
 * Generate FAQs for tour/sightseeing pages
 */
export function generateTourFAQs({ tourName, city, duration, price, highlights = [], inclusions = [] }) {
  const highlightText = highlights.length > 0
    ? highlights.slice(0, 4).join(', ')
    : 'major attractions and landmarks';

  const inclusionText = inclusions.length > 0
    ? inclusions.slice(0, 5).join(', ')
    : 'AC vehicle, experienced driver, fuel, parking, and toll charges';

  return [
    {
      question: `How much does the ${tourName} cost?`,
      answer: `The ${tourName} starts at ₹${price}. This includes ${inclusionText}. Prices may vary based on vehicle type and group size. Contact ${COMPANY_INFO.name} at ${COMPANY_INFO.phone.display} for exact quotes and group discounts.`
    },
    {
      question: `What is included in the ${tourName}?`,
      answer: `The ${tourName} includes: ${inclusionText}. Entry tickets to monuments and attractions are usually not included but can be arranged on request. Meals are at your own expense unless specified in custom packages.`
    },
    {
      question: `How long is the ${tourName}?`,
      answer: `The ${tourName} is designed as a ${duration} experience. The actual duration may vary based on time spent at each attraction, traffic conditions, and your pace of exploration. We recommend starting early to make the most of your tour.`
    },
    {
      question: `What is the best time for ${tourName}?`,
      answer: `The best time for ${tourName} depends on your preference. October to March offers pleasant weather. Early morning starts (6-7 AM) help avoid crowds and heat. Avoid monsoon season (July-September) for outdoor sightseeing. Weekend trips should be booked in advance.`
    },
    {
      question: `What are the main attractions in ${tourName}?`,
      answer: `The ${tourName} covers ${highlightText}, and other significant attractions. Our experienced drivers double as local guides and provide interesting insights about each location. The tour is flexible, and you can spend more time at places that interest you.`
    },
    {
      question: `Can I customize the ${tourName}?`,
      answer: `Absolutely! ${COMPANY_INFO.name} offers fully customizable tours. You can add or remove attractions, extend the duration, include meal stops, or combine with other nearby destinations. Call ${COMPANY_INFO.phone.display} to discuss your preferences and get a custom quote.`
    },
    {
      question: `What are the pickup and drop points for ${tourName}?`,
      answer: `We offer pickup and drop from your hotel, airport, railway station, or any location in ${city}. Specify your preferred pickup point while booking, and our driver will arrive 15 minutes before the scheduled time. Multiple pickup points can be arranged for groups at nominal extra cost.`
    },
    {
      question: `Is ${tourName} suitable for families with children?`,
      answer: `Yes, the ${tourName} is family-friendly and suitable for all age groups. We provide comfortable AC vehicles with ample space for car seats if needed. The pace can be adjusted for elderly members or young children. Frequent breaks can be incorporated as needed.`
    }
  ];
}

/**
 * Generate FAQs for city hub pages
 */
export function generateCityFAQs({ city, services = [], tours = [] }) {
  const serviceList = services.length > 0
    ? services.join(', ')
    : 'Airport Transfer, Local Sightseeing, Outstation Trips, Corporate Travel';

  const tourList = tours.length > 0
    ? tours.slice(0, 3).map(t => t.name || t).join(', ')
    : 'various sightseeing packages';

  return [
    {
      question: `What are the taxi rates in ${city}?`,
      answer: `Taxi rates in ${city} start from ₹${PRICING.sedan.minPrice}/km for sedans and ₹${PRICING.suv.minPrice}/km for SUVs. Local packages start from ₹1,500 for 4 hours/40 km. Airport transfers have fixed pricing. ${COMPANY_INFO.name} offers transparent pricing with no hidden charges. Call ${COMPANY_INFO.phone.display} for exact quotes.`
    },
    {
      question: `What tours and sightseeing packages are available in ${city}?`,
      answer: `${COMPANY_INFO.name} offers multiple sightseeing packages in ${city}, including ${tourList}, and more. Tours range from half-day local sightseeing to multi-day packages covering nearby destinations. All tours include AC vehicle, experienced driver, and flexible timings.`
    },
    {
      question: `How do I book a taxi in ${city}?`,
      answer: `Booking a taxi in ${city} is easy with ${COMPANY_INFO.name}. Call ${COMPANY_INFO.phone.display}, WhatsApp at ${COMPANY_INFO.phone.whatsapp}, or fill our online booking form. For advance bookings, we recommend booking 24-48 hours ahead. Instant booking available for immediate requirements.`
    },
    {
      question: `Is airport transfer available in ${city}?`,
      answer: `Yes, we provide reliable airport transfer services in ${city}. This includes both pickup and drop services, flight tracking, meet and greet, and assistance with luggage. Prices are fixed and competitive. Pre-booking ensures your cab is waiting when you land.`
    },
    {
      question: `What services does ${COMPANY_INFO.name} offer in ${city}?`,
      answer: `In ${city}, we offer: ${serviceList}, Wedding Car Rental, and more. All services include well-maintained vehicles, professional drivers, 24/7 availability, and customer support. We serve individuals, families, corporates, and travel agencies.`
    },
    {
      question: `Do you provide outstation taxi from ${city}?`,
      answer: `Yes, ${COMPANY_INFO.name} provides outstation taxi services from ${city} to all major destinations. Popular routes include trips to nearby hill stations, religious places, and tourist destinations. Both one-way and round-trip options available with competitive pricing.`
    },
    {
      question: `Are your taxi drivers in ${city} verified and experienced?`,
      answer: `All our drivers in ${city} are police-verified, licensed, and highly experienced. They have excellent knowledge of local routes, tourist places, and speak Hindi and English. Many have 10+ years of driving experience. Your safety and comfort are our top priorities.`
    }
  ];
}

/**
 * Generate FAQs for airport service pages
 */
export function generateAirportFAQs({ city, airportName, price, distance }) {
  return [
    {
      question: `How much does airport taxi cost in ${city}?`,
      answer: `${city} airport taxi rates start from ₹${price} for sedan and ₹${Math.round(price * 1.3)} for SUV. Prices are fixed based on distance and vehicle type. ${COMPANY_INFO.name} offers transparent pricing with no surge charges. The fare includes tolls and parking.`
    },
    {
      question: `How do I book airport pickup in ${city}?`,
      answer: `Book ${city} airport pickup by calling ${COMPANY_INFO.phone.display} or WhatsApp at ${COMPANY_INFO.phone.whatsapp}. Share your flight details, and we'll track your flight and have the driver ready when you land. Pre-booking recommended for guaranteed availability.`
    },
    {
      question: `Do you offer meet and greet service at ${airportName}?`,
      answer: `Yes, we provide complimentary meet and greet service at ${airportName}. Our driver will hold a placard with your name at the arrival gate, help with your luggage, and escort you to your cab. This service is included in our airport transfer packages.`
    },
    {
      question: `What if my flight is delayed?`,
      answer: `Don't worry! We track all flights and adjust pickup times accordingly. If your flight is delayed, our driver will wait for you at no extra charge (up to 60 minutes of wait time is free). For longer delays, just inform us, and we'll reschedule.`
    },
    {
      question: `Is ${city} airport taxi available 24/7?`,
      answer: `Yes, ${COMPANY_INFO.name} provides 24/7 airport taxi service in ${city}. Whether your flight lands at 3 AM or 11 PM, we'll have a cab ready for you. Late-night and early-morning pickups are our specialty with no extra charges.`
    },
    {
      question: `How far is ${airportName} from ${city} city center?`,
      answer: `${airportName} is approximately ${distance || '10-25'} km from ${city} city center. The journey typically takes 30-60 minutes depending on traffic conditions. We recommend allowing extra time during peak hours.`
    },
    {
      question: `Can I book a cab from ${city} hotel to airport?`,
      answer: `Absolutely! We offer hotel-to-airport drop services throughout ${city}. Our driver will pick you up from your hotel lobby at the scheduled time. We recommend scheduling pickup 3 hours before domestic flights and 4 hours before international flights.`
    }
  ];
}

/**
 * Generate FAQs for corporate service pages
 */
export function generateCorporateFAQs({ city, industry, useCase }) {
  const context = industry || useCase || 'corporate transportation';

  return [
    {
      question: `What corporate transportation services are available in ${city}?`,
      answer: `${COMPANY_INFO.name} offers comprehensive corporate transportation in ${city}: Employee shuttle services, Executive car rentals, Airport transfers, Conference and event transport, Client pickup/drop, and Monthly car subscriptions. All services include dedicated fleet and account management.`
    },
    {
      question: `Do you offer monthly contracts for ${context}?`,
      answer: `Yes, we offer flexible monthly contracts for ${context}. Contracts can be customized based on your requirements - number of vehicles, operating hours, routes, and more. Monthly contracts offer 15-25% savings compared to on-demand booking. Contact us for a custom quote.`
    },
    {
      question: `What vehicles are available for corporate bookings?`,
      answer: `Our corporate fleet includes: Sedans (Swift Dzire, Honda City) for executives, SUVs (Innova, Crysta) for senior management, Luxury cars (BMW, Mercedes) for VIP transport, and Tempo Travellers/Buses for group movement. All vehicles are less than 3 years old and well-maintained.`
    },
    {
      question: `How does employee shuttle service work?`,
      answer: `Our employee shuttle service operates on fixed routes and schedules designed around your office timing. We handle routing optimization, driver management, and real-time tracking. Employees can book via app or get assigned seats. GPS tracking and attendance reports provided to HR.`
    },
    {
      question: `Do you provide invoicing for corporate clients?`,
      answer: `Yes, we provide comprehensive invoicing for corporate clients. Options include: monthly consolidated billing, trip-wise billing, department-wise breakdowns, and GST-compliant invoices. We can integrate with your expense management system and provide custom MIS reports.`
    },
    {
      question: `What safety measures do you have for corporate travel?`,
      answer: `Safety is paramount. We provide: police-verified drivers, GPS-tracked vehicles, 24/7 monitoring, SOS panic button, COVID safety protocols, regular vehicle sanitization, comprehensive insurance, and driver background checks. All trips are logged and can be audited.`
    }
  ];
}

/**
 * Generate FAQs for wedding service pages
 */
export function generateWeddingFAQs({ city }) {
  return [
    {
      question: `What wedding car rental options are available in ${city}?`,
      answer: `${COMPANY_INFO.name} offers a complete range of wedding cars in ${city}: Luxury sedans (BMW, Mercedes, Audi) for the bride and groom, Vintage cars for the baraat, SUVs and Innovas for family, Tempo Travellers for relatives, and Buses for guest transportation. All cars can be decorated.`
    },
    {
      question: `Do you provide decorated wedding cars in ${city}?`,
      answer: `Yes, we provide beautifully decorated wedding cars in ${city}. Decoration includes floral arrangements, ribbons, and traditional adornments. You can choose from standard, premium, or custom decoration packages. Decoration charges start from ₹2,000 and vary based on your preferences.`
    },
    {
      question: `How far in advance should I book wedding cars?`,
      answer: `We recommend booking wedding cars at least 2-4 weeks in advance, especially during wedding season (November-February). Popular vehicles like vintage cars and luxury sedans get booked quickly. Early booking ensures availability and allows time for custom decoration planning.`
    },
    {
      question: `What is included in the wedding car package?`,
      answer: `Our wedding car packages include: decorated vehicle, uniformed chauffeur, flexible hours (typically 8-12 hours), fuel, and all permits. We also provide amenities like bottled water, tissues, and an umbrella. Extra hours are charged at hourly rates. Photography stops can be accommodated.`
    },
    {
      question: `Do you provide cars for baraat (wedding procession)?`,
      answer: `Absolutely! We specialize in baraat services with vintage convertibles, luxury sedans, and traditional decorated vehicles. Our drivers are experienced in managing baraat processions, coordinating with the DJ/band, and ensuring a grand entry. Multiple car options available for groom's party.`
    },
    {
      question: `Can you handle guest transportation for the entire wedding?`,
      answer: `Yes, ${COMPANY_INFO.name} provides complete wedding guest transportation solutions. This includes: airport/station pickups, hotel transfers, venue shuttle services, and late-night drops. We can manage transportation for 50 to 500+ guests with dedicated coordinators.`
    }
  ];
}

/**
 * Generate FAQs for event transportation pages
 */
export function generateEventFAQs({ eventType, city }) {
  const context = city ? `in ${city}` : '';

  return [
    {
      question: `What ${eventType} transportation services do you offer${context}?`,
      answer: `${COMPANY_INFO.name} provides comprehensive ${eventType.toLowerCase()} transportation${context}: VIP shuttles, group transportation, airport transfers for attendees, venue-to-venue transfers, on-demand cabs, and parking management. We handle events from 50 to 5000+ attendees.`
    },
    {
      question: `How do you handle large group transportation for events?`,
      answer: `For large groups, we deploy: multiple buses (35-50 seaters), tempo travellers (12-17 seaters), and on-demand cabs. We create optimized routes, provide dedicated coordinators, real-time tracking dashboard, and backup vehicles. Our team has handled events with 2000+ attendees smoothly.`
    },
    {
      question: `Can you provide transportation on short notice for events?`,
      answer: `Yes, we can arrange event transportation on short notice (24-48 hours) depending on fleet availability. However, for large events or wedding season, we recommend booking 1-2 weeks in advance. Our 24/7 team can handle urgent requirements - call ${COMPANY_INFO.phone.display}.`
    },
    {
      question: `Do you offer shuttle services for conferences?`,
      answer: `Yes, we specialize in conference shuttle services. This includes: scheduled shuttles between venue and hotels, airport transfers for delegates, city tours for accompanying guests, and VIP transport for speakers. We provide branded vehicles and signage if required.`
    },
    {
      question: `What is the pricing for event transportation?`,
      answer: `Event transportation is priced based on: number of vehicles, duration, routes, and special requirements. We offer package deals for multi-day events. Volume discounts available for large events. Contact us with event details for a custom quote - typically 10-20% lower than regular rates.`
    },
    {
      question: `Do you provide event transportation coordinators?`,
      answer: `Yes, for events with 100+ guests, we assign dedicated transportation coordinators. They manage driver briefing, real-time dispatching, handle delays/changes, coordinate with your event team, and ensure smooth operations. Coordinator service is complimentary for large events.`
    }
  ];
}

/**
 * Generate FAQs for religious tour pages
 */
export function generateReligiousTourFAQs({ tourName, duration, price, temples = [] }) {
  const templeList = temples.length > 0
    ? temples.slice(0, 4).join(', ')
    : 'major temples and religious sites';

  return [
    {
      question: `What is the cost of ${tourName}?`,
      answer: `The ${tourName} starts from ₹${price}. This includes AC vehicle, experienced driver, all permits, tolls, and parking. The package can be customized based on your requirements. Contact ${COMPANY_INFO.name} at ${COMPANY_INFO.phone.display} for exact pricing and available dates.`
    },
    {
      question: `How many days is the ${tourName}?`,
      answer: `The ${tourName} is typically a ${duration} journey. We offer flexible packages ranging from basic to comprehensive coverage. You can extend or shorten the tour based on your schedule. Longer stays at specific temples can be arranged on request.`
    },
    {
      question: `What temples are covered in ${tourName}?`,
      answer: `The ${tourName} covers ${templeList}, among other sacred sites. Our drivers are familiar with darshan timings, VIP entry procedures, and local customs. They ensure you have adequate time at each temple without rushing.`
    },
    {
      question: `Is ${tourName} available throughout the year?`,
      answer: `Yes, ${tourName} is available year-round. However, some periods may have restrictions due to weather or religious observances. Popular periods (like Navratri, Diwali, New Year) should be booked 2-3 weeks in advance. Monsoon season may have route changes.`
    },
    {
      question: `Do you provide VIP darshan assistance?`,
      answer: `We can guide you on VIP darshan procedures at various temples, though the actual VIP tickets need to be arranged separately. Our drivers know the timing and entry points. For temples with online booking, we can assist with the booking process.`
    },
    {
      question: `Are meals and accommodation included in ${tourName}?`,
      answer: `Standard packages include transportation only. Meals and accommodation are at your own arrangement, giving you flexibility to choose as per your budget and preferences. We can recommend trusted hotels/dharamshalas and arrange bookings at no extra charge.`
    }
  ];
}

/**
 * Generate FAQs for tempo traveller pages
 */
export function generateTempoTravellerFAQs({ origin, destination, seats, price, distance }) {
  return [
    {
      question: `What is the fare for ${seats}-seater tempo traveller from ${origin} to ${destination}?`,
      answer: `The ${seats}-seater tempo traveller fare from ${origin} to ${destination} is approximately ₹${price}. This includes driver allowance, tolls, and permits. Prices may vary based on AC/Non-AC type and travel season. Contact us for exact quotes and best rates.`
    },
    {
      question: `How many people can travel in a tempo traveller?`,
      answer: `Tempo travellers come in multiple seating configurations: 9-seater (luxury), 12-seater (standard), 17-seater, and 20-seater options. For ${origin} to ${destination}, we recommend ${seats}-seater for comfortable travel with luggage space. Choose based on your group size.`
    },
    {
      question: `Is AC tempo traveller available for ${origin} to ${destination}?`,
      answer: `Yes, we provide both AC and Non-AC tempo travellers for ${origin} to ${destination}. AC vehicles are recommended for comfortable travel, especially in summer. AC tempo traveller costs approximately 15-20% more than Non-AC. All our AC vehicles are well-maintained with effective cooling.`
    },
    {
      question: `What amenities are available in tempo traveller?`,
      answer: `Our tempo travellers come equipped with: Pushback/reclining seats, AC (in AC variants), music system, mobile charging points, first aid kit, and ample luggage space. Some premium vehicles have LED TV and ice box. Specific amenities vary by vehicle - ask while booking.`
    },
    {
      question: `Can we stop at multiple places during the journey?`,
      answer: `Absolutely! You can make as many stops as needed during your ${origin} to ${destination} trip. Common stops include restaurants, tourist spots, restrooms, and shopping areas. Just inform the driver, and he'll accommodate your stops. Reasonable breaks are part of our service.`
    },
    {
      question: `Is overnight parking allowed if we stay at ${destination}?`,
      answer: `Yes, overnight stays and multi-day trips are available. For trips including overnight stays, we charge per-day driver allowance (₹300-400) and vehicle charges. The driver arranges his own accommodation. This is ideal for ${distance > 300 ? 'longer routes like this' : 'pilgrimage and multi-destination tours'}.`
    }
  ];
}

/**
 * Generate FAQs for bus rental pages
 */
export function generateBusFAQs({ origin, destination, seats, price }) {
  return [
    {
      question: `How much does a ${seats}-seater bus from ${origin} to ${destination} cost?`,
      answer: `A ${seats}-seater bus from ${origin} to ${destination} costs approximately ₹${price}. This includes driver charges, fuel, tolls, and permits. Prices vary based on bus type (AC/Non-AC, Luxury/Standard). Contact ${COMPANY_INFO.name} for best rates and package deals.`
    },
    {
      question: `What types of buses are available for hire?`,
      answer: `We offer multiple bus types: Mini Bus (20-25 seater), Standard AC Bus (35-40 seater), Luxury Coach (45 seater with pushback seats), Volvo Multi-Axle (45-50 seater, premium), and Sleeper buses for overnight journeys. Choose based on your group size and comfort requirements.`
    },
    {
      question: `Is bus hire suitable for corporate outings?`,
      answer: `Absolutely! Bus hire is perfect for corporate outings, team building trips, annual days, and offsite meetings. We provide uniformed drivers, on-time service, and can accommodate specific corporate requirements. Many IT companies and MNCs regularly use our bus services.`
    },
    {
      question: `What amenities come with luxury bus hire?`,
      answer: `Our luxury buses include: Pushback/reclining seats, Individual AC vents, LCD screens, Music system, Mic for announcements, Charging points, Clean toilets (in premium coaches), First aid kit, Ice box, and ample luggage space. Specific amenities vary by bus type.`
    },
    {
      question: `Can we hire a bus for pilgrimage tours?`,
      answer: `Yes, bus hire is ideal for pilgrimage tours with large groups. We have experience in Char Dham, Vaishno Devi, temple tours, and more. Our drivers know the routes, permits, and parking. We can arrange multi-day packages with driver accommodation included.`
    },
    {
      question: `How far in advance should we book a bus?`,
      answer: `For guaranteed availability, book 1-2 weeks in advance. During peak seasons (Oct-Feb, school holidays), book 2-3 weeks ahead. For large groups (multiple buses), book 3-4 weeks in advance. Emergency bookings possible based on availability - call ${COMPANY_INFO.phone.display}.`
    }
  ];
}

/**
 * Generate FAQs for tourist attraction city pages
 */
export function generateAttractionCityFAQs({ city, attractions = [] }) {
  const attractionList = attractions.length > 0
    ? attractions.slice(0, 5).join(', ')
    : 'major historical and cultural sites';

  return [
    {
      question: `What are the top tourist attractions in ${city}?`,
      answer: `${city}'s top attractions include ${attractionList}, and many more. These cover historical monuments, temples, palaces, museums, and natural sites. ${COMPANY_INFO.name} offers curated tours covering the best of ${city} with experienced local drivers.`
    },
    {
      question: `How can I explore ${city}'s tourist places?`,
      answer: `The best way to explore ${city} is by booking a sightseeing taxi with ${COMPANY_INFO.name}. We offer half-day, full-day, and multi-day packages. Our drivers know the best routes, timings, and local insights. You can customize the tour to focus on your interests.`
    },
    {
      question: `What is the best time to visit ${city}?`,
      answer: `The best time to visit ${city} is typically October to March when the weather is pleasant. Summer (April-June) can be hot but fewer crowds. Monsoon (July-September) offers lush greenery but some attractions may have restricted access. Each season has its charm.`
    },
    {
      question: `How many days are needed to explore ${city}?`,
      answer: `To cover ${city}'s main attractions, 2-3 days are sufficient. For a comprehensive tour including nearby destinations, plan 4-5 days. ${COMPANY_INFO.name} offers flexible packages - from quick day tours to extended exploration. We can help plan the perfect itinerary.`
    },
    {
      question: `Do you provide guided sightseeing tours in ${city}?`,
      answer: `While we provide transportation with knowledgeable drivers (not licensed guides), they share interesting facts about attractions. For professional guides, we can arrange certified tour guides at additional cost. Our drivers know entry points, parking, and best photo spots at all attractions.`
    }
  ];
}

/**
 * Get FAQs by page type - convenience function
 */
export function getFAQsByPageType(pageType, data) {
  const generators = {
    route: generateRouteFAQs,
    tour: generateTourFAQs,
    sightseeing: generateTourFAQs,
    city: generateCityFAQs,
    cityHub: generateCityFAQs,
    airport: generateAirportFAQs,
    corporate: generateCorporateFAQs,
    wedding: generateWeddingFAQs,
    event: generateEventFAQs,
    religious: generateReligiousTourFAQs,
    tempo: generateTempoTravellerFAQs,
    tempoTraveller: generateTempoTravellerFAQs,
    bus: generateBusFAQs,
    attraction: generateAttractionCityFAQs,
    touristAttraction: generateAttractionCityFAQs
  };

  const generator = generators[pageType];
  if (!generator) {
    console.warn(`No FAQ generator for page type: ${pageType}`);
    return [];
  }

  return generator(data);
}

export default {
  generateRouteFAQs,
  generateTourFAQs,
  generateCityFAQs,
  generateAirportFAQs,
  generateCorporateFAQs,
  generateWeddingFAQs,
  generateEventFAQs,
  generateReligiousTourFAQs,
  generateTempoTravellerFAQs,
  generateBusFAQs,
  generateAttractionCityFAQs,
  getFAQsByPageType
};
