#!/usr/bin/env node
// One-shot rewrites of specific long titles. Each entry replaces the literal old title with new.

import { readFileSync, writeFileSync } from 'node:fs';

const FIXES = [
  ['src/app/(routes)/corporate-cab-vs-aggregators/page.js',
    'Corporate Cab Service vs Ola/Uber 2026 | Complete Comparison Guide',
    'Corporate Cab vs Ola/Uber 2026 | Complete Comparison'],
  ['src/app/(routes)/golden-triangle-english-speaking-driver/page.js',
    'Golden Triangle Tour with English Speaking Driver 2026 | Delhi Agra Jaipur',
    'Golden Triangle Tour 2026 | English-Speaking Driver | Delhi Agra Jaipur'.length > 65 ? 'Golden Triangle Tour 2026 | English-Speaking Driver' : 'Golden Triangle Tour 2026 | English-Speaking Driver'],
  ['src/app/(routes)/india-road-trip-guide-for-tourists/page.js',
    'India Road Trip Guide for International Tourists 2026 | Essential Travel Tips',
    'India Road Trip Guide for International Tourists 2026'],
  ['src/app/(routes)/jaipur-food-tour/page.js',
    'Jaipur Food Tour 2026 | Dal Baati Churma, Pyaaz Kachori & Rajasthani Cuisine Guide',
    'Jaipur Food Tour 2026 | Dal Baati Churma & Pyaaz Kachori'],
  ['src/app/(routes)/jaisalmer-shopping-guide/page.js',
    'Jaisalmer Shopping Guide 2026 | Rajasthani Crafts, Mirror Work & Desert Souvenirs',
    'Jaisalmer Shopping Guide 2026 | Mirror Work & Desert Crafts'],
  ['src/app/(routes)/jaisalmer-travel-guide/page.js',
    'Jaisalmer Travel Guide 2026 | Golden City, Desert Safari & Living Fort',
    'Jaisalmer Travel Guide 2026 | Golden City & Desert Safari'],
  ['src/app/(routes)/jodhpur-beyond-mehrangarh/page.js',
    'Jodhpur Beyond Mehrangarh | Hidden Gems & Blue City Secrets | 2026',
    'Jodhpur Beyond Mehrangarh | Hidden Gems & Blue City'],
  ['src/app/(routes)/jodhpur-food-tour/page.js',
    'Jodhpur Food Tour 2026 | Mirchi Vada, Mawa Kachori & Rajasthani Street Food Guide',
    'Jodhpur Food Tour 2026 | Mirchi Vada & Mawa Kachori'],
  ['src/app/(routes)/jodhpur-travel-guide/page.js',
    'Jodhpur Travel Guide 2026 | Blue City, Mehrangarh Fort & Marwar Capital',
    'Jodhpur Travel Guide 2026 | Blue City & Mehrangarh Fort'],
  ['src/app/(routes)/kanwar-yatra-cab-haridwar/page.js',
    'Kanwar Yatra Cab to Haridwar 2026 | AC Vehicle from ₹4,000 | Safe Transport',
    'Kanwar Yatra Cab to Haridwar 2026 | AC Vehicle ₹4,000'],
  ['src/app/(routes)/kashmir-travel-guide/page.js',
    'Kashmir Travel Guide 2026 | Paradise on Earth - Dal Lake, Gulmarg & Pahalgam',
    'Kashmir Travel Guide 2026 | Dal Lake, Gulmarg & Pahalgam'],
  ['src/app/(routes)/lucknow-food-tour/page.js',
    'Lucknow Food Tour 2026 | Tunday Kebab, Biryani & Awadhi Cuisine Guide',
    'Lucknow Food Tour 2026 | Tunday Kebab & Awadhi Cuisine'],
  ['src/app/(routes)/manali-travel-guide/page.js',
    'Manali Travel Guide 2026 | Solang Valley, Rohtang Pass & Adventure',
    'Manali Travel Guide 2026 | Solang Valley & Rohtang Pass'],
  ['src/app/(routes)/mathura-vrindavan-travel-guide/page.js',
    'Mathura-Vrindavan Travel Guide 2026 | Krishna Birthplace & Sacred Twin Cities',
    'Mathura-Vrindavan Travel Guide 2026 | Krishna Birthplace'],
  ['src/app/(routes)/mussoorie-travel-guide/page.js',
    'Mussoorie Travel Guide 2026 | Queen of Hills, Mall Road & Doon Valley Views',
    'Mussoorie Travel Guide 2026 | Queen of Hills & Mall Road'],
  ['src/app/(routes)/outstation-cabs/page.js',
    'Outstation Cab Booking 2026 | Sedan ₹11/km, SUV ₹15/km | 500+ Routes',
    'Outstation Cab Booking 2026 | ₹11/km Sedan | 500+ Routes'],
  ['src/app/(routes)/prayagraj-sangam-tour/page.js',
    'Prayagraj Sangam Tour from Delhi | 2-3 Day Triveni Sangam Package | ₹10,500',
    'Prayagraj Sangam Tour from Delhi | 2-3 Day Package ₹10,500'],
  ['src/app/(routes)/pricing/page.js',
    'Taxi Rates & Pricing — Sedan ₹11/km, SUV ₹15/km | Transparent Fares',
    'Taxi Rates 2026 — Sedan ₹11/km, SUV ₹15/km, Transparent'],
  ['src/app/(routes)/private-driver-hire-india/page.js',
    'Hire Car with Driver in India for Foreigners 2026 | English-Speaking Drivers',
    'Hire Car with English-Speaking Driver in India 2026'],
  ['src/app/(routes)/pushkar-food-tour/page.js',
    'Pushkar Food Tour 2026 | Malpua, Dal Bati & Holy Lake Cuisine Guide',
    'Pushkar Food Tour 2026 | Malpua, Dal Bati & Holy Lake'],
  ['src/app/(routes)/rajasthan-desert-circuit-tour/page.js',
    'Rajasthan Desert Circuit Tour 2026 | Jaisalmer Jodhpur Bikaner by Car',
    'Rajasthan Desert Circuit 2026 | Jaisalmer Jodhpur Bikaner'],
  ['src/app/(routes)/religious-tours/page.js',
    'Pilgrimage Tours 2026 | Char Dham from ₹45,000 | AC Transport & Guide',
    'Pilgrimage Tours 2026 | Char Dham ₹45,000 | AC Transport'],
  ['src/app/(routes)/rishikesh-travel-guide/page.js',
    'Rishikesh Travel Guide 2026 | Yoga Capital, Rafting & Ganga Adventures',
    'Rishikesh Travel Guide 2026 | Yoga Capital & Rafting'],
  ['src/app/(routes)/round-trip-cab/page.js',
    'Round Trip Cab Booking 2026 | Same Driver | Sedan ₹11/km | Multi-Day',
    'Round Trip Cab 2026 | Same Driver | Sedan ₹11/km'],
  ['src/app/(routes)/routes/page.js',
    'Outstation Cab Routes 2026 | Delhi to Agra ₹3K | 500+ Destinations',
    'Outstation Cab Routes 2026 | 500+ Destinations from ₹3K'],
  ['src/app/(routes)/safe-travel-india-for-tourists/page.js',
    'Safe Travel Tips India for Foreign Tourists 2026 | Complete Safety Guide',
    'Safe Travel Tips India for Foreign Tourists 2026'],
  ['src/app/(routes)/safety/page.js',
    'Safety Standards 2026 | Verified Drivers | GPS Tracking | Women Safety',
    'Safety Standards 2026 | Verified Drivers, GPS, Women Safe'],
  ['src/app/(routes)/same-day-ayodhya-from-lucknow/page.js',
    'Same Day Ayodhya Ram Mandir Tour from Lucknow | ₹3,500 AC Cab | 2026',
    'Same Day Ayodhya Tour from Lucknow | ₹3,500 AC Cab | 2026'],
  ['src/app/(routes)/same-day-bharatpur-from-agra/page.js',
    'Same Day Bharatpur Bird Sanctuary Tour from Agra | ₹2,000 AC Cab | 2026',
    'Same Day Bharatpur Tour from Agra | ₹2,000 AC Cab | 2026'],
  ['src/app/(routes)/same-day-haridwar-rishikesh-from-delhi/page.js',
    'Same Day Haridwar Rishikesh Tour from Delhi | ₹5,500 AC Cab | 2026',
    'Same Day Haridwar Rishikesh from Delhi | ₹5,500 | 2026'],
  ['src/app/(routes)/tour-guide/page.js',
    'Tour Guide India 2026 | Licensed Guides from ₹1,200/Day | 14+ Cities',
    'Tour Guide India 2026 | Licensed Guides ₹1,200/Day'],
  ['src/app/(routes)/tours-with-guide/by-guide-language/page.js',
    'Tour Guide by Language — French, German, Spanish, Mandarin... | Hire',
    'Tour Guide by Language — French, German, Spanish & More'],
  ['src/app/(routes)/tours-with-guide/page.js',
    'Tours With Licensed Guide India from ₹3,000 — Vehicle + Guide | Book',
    'Tours With Licensed Guide India — Vehicle + Guide ₹3,000'],
  ['src/app/(routes)/udaipur-food-tour/page.js',
    'Udaipur Food Tour 2026 | Dal Baati, Gatte Ki Sabzi & Lake City Cuisine Guide',
    'Udaipur Food Tour 2026 | Dal Baati & Gatte Ki Sabzi'],
  ['src/app/(routes)/udaipur-shopping-guide/page.js',
    'Udaipur Shopping Guide 2026 | Miniature Paintings, Silver & Crafts',
    'Udaipur Shopping 2026 | Miniature Paintings & Silver'],
  ['src/app/(routes)/uttarakhand-spiritual-circuit-tour/page.js',
    'Uttarakhand Spiritual Circuit Tour by Car 2026 | Haridwar Rishikesh Badrinath',
    'Uttarakhand Spiritual Circuit by Car 2026 | Haridwar Rishikesh'],
  ['src/app/(routes)/varanasi-food-tour/page.js',
    'Varanasi Food Tour 2026 | Kachori Sabzi, Tamatar Chaat & Banarasi Cuisine Guide',
    'Varanasi Food Tour 2026 | Kachori Sabzi & Banarasi Cuisine'],
];

let modified = 0, missed = 0;
for (const [file, oldT, newT] of FIXES) {
  if (newT.length > 65) {
    console.log(`SKIP (still too long ${newT.length}): ${file}`);
    continue;
  }
  let src;
  try { src = readFileSync(file, 'utf8'); }
  catch { console.log(`MISSING: ${file}`); missed++; continue; }
  if (!src.includes(oldT)) {
    console.log(`NOT_FOUND: ${file}\n  looking for: ${oldT}`);
    missed++; continue;
  }
  const newSrc = src.replace(oldT, newT);
  writeFileSync(file, newSrc);
  console.log(`✓ ${oldT.length}→${newT.length}  ${file}`);
  modified++;
}
console.log(`\nModified: ${modified}, Missed: ${missed}`);
