/**
 * Long-tail FAQ generator.
 *
 * Generates 15-20 question/answer pairs per route/tour by templating off
 * route data. Each extra FAQ is a candidate People Also Ask entry — and
 * each is an AI-extractable chunk.
 *
 * Patterns covered (per route):
 *   - Pricing (cheapest, with luggage, return, GST, advance)
 *   - Distance/Time (peak, monsoon, AC, fuel stops)
 *   - Vehicle (which is right, baby seat, AC, music)
 *   - Booking (time required, cancellation, advance, GST invoice)
 *   - Safety (driver verified, GPS, insurance, women-only, night)
 *   - Trip (one-way vs round-trip, multi-stop, sightseeing add)
 *
 * Use alongside or instead of existing `getExtendedFaqs(route)` from
 * oneWayCabEnrichment.js — this generator targets longer tail.
 */

export function generateLongTailFaqs({
  mode = 'one-way',                  // 'one-way' | 'round-trip' | 'tempo' | 'bus' | 'sightseeing' | 'travel-by-car'
  origin = '',
  destination = '',
  distanceKm = null,
  durationText = '',
  sedanFare = '',
  suvFare = '',
  tempoFare = '',
  highway = '',
  savingsPct = '',
}) {
  const a = origin || 'origin';
  const b = destination || 'destination';
  const dist = distanceKm ? `${distanceKm} km` : 'approximately 200-300 km';
  const duration = durationText || '4-6 hours';
  const sedan = sedanFare || '₹3,800';
  const suv = suvFare || '₹5,400';
  const tempo = tempoFare || '₹6,500';
  const hwy = highway || 'the highway';

  const common = [
    {
      question: `What is the cheapest way to travel from ${a} to ${b} by taxi?`,
      answer: `The cheapest taxi option for ${a} to ${b} is a Sedan (Maruti Dzire or Toyota Etios) at ${sedan} for a one-way booking. SUV (Innova/Ertiga) costs ${suv} and a 12-seater Tempo Traveller costs ${tempo}. All fares include fuel, driver and AC; tolls and state tax are additional at actual.`,
    },
    {
      question: `Is the ${a} to ${b} taxi available 24 hours?`,
      answer: `Yes, Triveni Cabs runs ${a} to ${b} taxi service 24×7. Night-driving allowance of ₹250 applies between 10 PM and 6 AM. Call or WhatsApp +91 7668570551 any time — your verified driver typically reaches your pickup within 30-45 minutes for advance bookings.`,
    },
    {
      question: `How long does the ${a} to ${b} drive take?`,
      answer: `The ${a} to ${b} drive takes ${duration} for the ${dist} via ${hwy}. Add 30-45 minutes for one tea / restroom stop. During monsoon (July-September) expect an extra 30-60 minutes due to slower traffic on wet roads. Early-morning departures (5-7 AM) save 30-60 minutes of city-traffic delay.`,
    },
    {
      question: `Is GST included in the ${a} to ${b} taxi fare?`,
      answer: `Our published fares are GST-inclusive for individual bookings. Corporate customers receive a GST tax invoice — mention GST requirement at the time of booking and we'll issue a tax invoice for your firm's GSTIN. Monthly consolidated invoices available for account customers.`,
    },
    {
      question: `Can I book a ${a} to ${b} taxi for the same day?`,
      answer: `Yes, same-day bookings are accepted subject to availability — call +91 7668570551 directly for fastest confirmation. We recommend booking the night before for 5-9 AM pickups to lock in your driver. Same-day requests on peak weekends (Saturday morning) get filled by 7 AM.`,
    },
    {
      question: `Is the driver verified and the vehicle insured for the ${a} to ${b} trip?`,
      answer: `Every driver on the ${a}–${b} route holds a valid commercial driving licence, has minimum 5 years of commercial experience, and is background-verified. Every vehicle carries comprehensive insurance plus passenger insurance covering all seats. All vehicles are GPS-tracked and the operations desk monitors long-distance trips.`,
    },
    {
      question: `What if my flight or train is delayed when I'm catching a ${a} to ${b} taxi?`,
      answer: `For airport / station pickups, we track your flight or train and adjust pickup time automatically. First 60 minutes of waiting are free after the official arrival time. Beyond that, waiting charge of ₹150/hour applies. Cancellation is free up to 6 hours before scheduled pickup.`,
    },
    {
      question: `Can I add sightseeing or a pickup point on the way for ${a} to ${b}?`,
      answer: `Yes — add up to 2 sightseeing stops or pickup points on a ${a} to ${b} trip at no extra fare, provided total distance stays within the ${dist} band. Longer detours are charged at the per-km rate of your vehicle category. Popular en-route stops are typically included in the fare quote.`,
    },
    {
      question: `Is there a child seat available for the ${a} to ${b} taxi?`,
      answer: `Yes, complimentary child seats are available on request — please mention "with child seat" at booking. We have rear-facing infant seats and forward-facing toddler seats. Booster seats also available for children 4-8 years. Limited stock on same-day bookings.`,
    },
    {
      question: `Is the ${a} to ${b} cab fare lower in monsoon or winter season?`,
      answer: `${a} to ${b} fares stay flat year-round on our published rates. Winter (October-February) is peak season for travel — book 2-3 days advance to lock your driver. Mid-monsoon (July-August) sees ~30% lower demand; we have widest fleet availability then with no surge pricing.`,
    },
    {
      question: `Will my ${a} to ${b} taxi driver speak English?`,
      answer: `All drivers on this route speak Hindi and conversational English. For tourist customers we have drivers trained for international guests — request "English-fluent driver" at booking. For German, French, Spanish, Japanese or Mandarin tour-guides, see our tours-with-guide section.`,
    },
    {
      question: `What is the cancellation policy for a ${a} to ${b} taxi booking?`,
      answer: `Free cancellation up to 6 hours before pickup. Cancellations within 6 hours of pickup attract a 25% charge. No-show (driver arrived, customer didn't show within 30 minutes) attracts 50% charge. Full refund processed within 3 working days to the original payment method.`,
    },
    {
      question: `Can I get a printed receipt for the ${a} to ${b} trip?`,
      answer: `Yes, the driver provides a printed receipt at the end of the trip. We also email a digital receipt to the WhatsApp number or email provided at booking. For corporate bookings, GST tax invoice is emailed within 24 hours. Originals can be requested at any time.`,
    },
    {
      question: `Are toll charges included in the ${a} to ${b} taxi fare?`,
      answer: `Tolls are charged extra at actual on most routes — typically ₹400-1,200 for one-way ${dist}, paid via the vehicle's FASTag (no cash). For all-inclusive bookings, mention "fare including tolls" at booking — we'll quote a single number with no extras except parking and state-border permits.`,
    },
  ];

  const modeSpecific = {
    'one-way': [
      {
        question: `Why is one-way taxi cheaper than round-trip for ${a} to ${b}?`,
        answer: `One-way is cheaper when you don't need the cab on the return — you pay only the forward ${dist}, with no charge for the empty return leg. Round-trip prices include the return distance plus driver's overnight stay (if applicable). One-way ${a} to ${b} starts at ${sedan}; an equivalent round-trip starts at roughly ${savingsPct ? `${savingsPct} more` : 'about 80-90% higher'}.`,
      },
      {
        question: `Can I do ${a} to ${b} and back in the same day as one-way?`,
        answer: `Yes — book two one-way trips with separate cabs for same-day return. This is often cheaper than a round-trip when ${dist} is under 300 km. Alternatively a same-day round-trip with one cab waiting is usually only marginally more expensive than two one-ways and saves you driver-coordination time.`,
      },
    ],
    'round-trip': [
      {
        question: `Does the same driver stay throughout my ${a} to ${b} round-trip?`,
        answer: `Yes — your driver and vehicle stay with you for the entire multi-day round-trip from ${a} to ${b} and back. The driver handles their own overnight stay (boarding allowance ₹300/night included). Same driver means familiarity with your luggage, timings and preferences from day one.`,
      },
      {
        question: `What is the daily kilometre cap on a ${a} to ${b} round-trip?`,
        answer: `Standard round-trip booking includes 250-300 km per day depending on vehicle. Extra kilometres charged at the per-km rate of your category (Sedan ₹11/km, SUV ₹15/km, Tempo ₹23/km). For multi-state itineraries crossing 300 km/day, we recommend the higher-km tier upfront.`,
      },
    ],
    'tempo': [
      {
        question: `How many seats does a 12-seater Tempo Traveller actually have on ${a} to ${b}?`,
        answer: `Force Traveller 12-seater has 12 passenger seats plus driver (13 total) with pushback reclining seats and overhead luggage racks. Comfortably fits 10-11 adults with luggage. For ${dist}, we recommend 17-seater if you have more than 10 passengers + significant luggage.`,
      },
      {
        question: `Is the AC strong enough in a Tempo Traveller for the ${a} to ${b} drive?`,
        answer: `Yes, all Tempo Travellers in our fleet have roof-mounted AC with separate vents per row. AC stays effective even in 40°C+ summer plains. For Himalayan ascents (hill routes like ${a}-${b} if applicable) AC works on lower load — heating mode also available.`,
      },
    ],
    'bus': [
      {
        question: `What bus sizes are available for ${a} to ${b}?`,
        answer: `We offer 22, 27, 32, 35, 41, 45, 49, 52 and 56-seater AC buses for ${a} to ${b} charter. Pricing starts at ₹30/km for 22-seater and goes up to ₹65/km for a 56-seater luxury Volvo coach. All buses include AC, reclining seats, GPS tracking, professional driver and helper.`,
      },
      {
        question: `Are amenities like WiFi, charging points and toilet available on the ${a} to ${b} bus?`,
        answer: `Charging points and reclining seats are standard on every bus. WiFi is available on 45-seater and larger luxury Volvo coaches. Onboard toilet is available on select 49 and 52-seater long-distance buses. Mention specific amenity requirements at booking — we'll confirm vehicle availability.`,
      },
    ],
    'sightseeing': [
      {
        question: `What is included in the ${b} sightseeing tour package?`,
        answer: `${b} sightseeing tour includes: air-conditioned vehicle, professional driver, fuel, parking, all tolls, and a verified pickup-to-drop service. Monument entry fees, guide fees (if requested), and meals are extra. Custom add-ons (English-speaking guide, photographer, lunch booking) available on request.`,
      },
      {
        question: `Is a guide included with the ${b} sightseeing tour?`,
        answer: `Driver acts as a route guide and gives basic landmark information. For a Ministry of Tourism-recognised English / German / French / Spanish / Japanese-speaking guide, add the guide service at booking — typically ₹1,500-3,000 per day depending on language. See our tours-with-guide section for the full list.`,
      },
    ],
    'travel-by-car': [
      {
        question: `Which is the best car for the ${a} to ${b} road trip?`,
        answer: `For ${dist} on ${hwy}, a Sedan suits 2-3 passengers. For hill routes or 4+ passengers, choose an SUV (Innova/Ertiga). For 5-12 passengers, Tempo Traveller is best. Innova Crysta is the all-rounder for any ${a}-${b} trip — diesel, automatic AC, large boot, smooth on long highways.`,
      },
      {
        question: `Where are the best fuel and food stops on the ${a} to ${b} drive?`,
        answer: `On the ${a} to ${b} route, we recommend stopping at mid-point petrol pumps (typically at 100-130 km mark) and at signature dhabas (Punjabi / Rajasthani / hilltop) recommended by our drivers. Our drivers maintain a curated list of clean, safe stops with parking — they'll suggest based on your time of departure.`,
      },
    ],
  };

  const specific = modeSpecific[mode] || [];

  return [...common, ...specific];
}
