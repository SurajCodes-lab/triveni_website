// src/app/sitemap-images.xml/route.js - Image Sitemap Generator
// Helps search engines discover and index all images on the site

import { getAllTours, sightseeingTours } from '@/utilis/sightseeingData';
import { cities } from '@/utilis/data';

const BASE_URL = 'https://www.trivenicabs.in';

function escapeXml(str) {
  if (!str) return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function generateImageSitemap() {
  const allTours = getAllTours();

  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
`;

  // Homepage images
  xml += `  <url>
    <loc>${BASE_URL}</loc>
    <image:image>
      <image:loc>${BASE_URL}/images/about/about_banner.webp</image:loc>
      <image:title>Triveni Cabs - Premium Taxi Service in India</image:title>
      <image:caption>Reliable outstation and local taxi service with professional drivers</image:caption>
    </image:image>
  </url>
`;

  // Sightseeing tour pages with hero images
  allTours.forEach(tour => {
    if (tour && tour.slug && tour.heroImage) {
      xml += `  <url>
    <loc>${BASE_URL}/sightseeing/${escapeXml(tour.slug)}</loc>
    <image:image>
      <image:loc>${BASE_URL}${escapeXml(tour.heroImage)}</image:loc>
      <image:title>${escapeXml(tour.name || tour.slug)} - Sightseeing Tour</image:title>
      <image:caption>${escapeXml(tour.shortDescription || `Book ${tour.name} sightseeing tour with Triveni Cabs`)}</image:caption>
    </image:image>
`;
      // Add additional images from the tour
      if (tour.images && Array.isArray(tour.images)) {
        tour.images.slice(0, 5).forEach(img => {
          if (img && img.src) {
            xml += `    <image:image>
      <image:loc>${BASE_URL}${escapeXml(img.src)}</image:loc>
      <image:title>${escapeXml(img.alt || tour.name)}</image:title>
    </image:image>
`;
          }
        });
      }
      xml += `  </url>
`;
    }
  });

  // City pages with hero images
  const cityHeroImages = {
    'Delhi': '/images/sightseeing/Delhi/Delhi_hero_section.jpg',
    'Jaipur': '/images/sightseeing/Jaipur/jaipur_hero_section_image.jpg',
    'Chandigarh': '/images/sightseeing/Chandigarh/Chandigarh_hero_section.jpg',
    'Agra': '/images/sightseeing/Agra/Agra_Hero_section.jpg',
    'Dehradun': '/images/sightseeing/Dehradun/Dehradun_hero_section.jpg',
    'Udaipur': '/images/sightseeing/Udaipur/Udaipur_Hero_section.jpg',
    'Haridwar': '/images/sightseeing/Haridwar/Haridwar_hero_section.jpg',
    'Rishikesh': '/images/sightseeing/Rishikesh/Rishikesh_Hero_section.jpg',
    'Shimla': '/images/sightseeing/Shimla/Shimla_Hero_section.jpg',
    'Manali': '/images/sightseeing/Manali/Manali_Hero_section.jpg',
    'Amritsar': '/images/sightseeing/Amritsar/Amristar_hero_section.jpg',
    'Lucknow': '/images/sightseeing/Lucknow/lucknow_hero_section.jpg',
    'Varanasi': '/images/sightseeing/Varanasi/Varanasi_Hero_section.jpg',
    'Jodhpur': '/images/sightseeing/Jodhpur/Jodhpur_Hero_section.jpg',
    'Ahmedabad': '/images/sightseeing/Ahmedabad/Ahmedabad_Hero_section.jpg',
    'Ayodhya': '/images/sightseeing/Ayodhya/Ayodhya_Hero_section.jpg'
  };

  cities.forEach(city => {
    if (city && city.name) {
      const cityName = city.name;
      const citySlug = cityName.toLowerCase();
      const heroImage = cityHeroImages[cityName];

      if (heroImage) {
        xml += `  <url>
    <loc>${BASE_URL}/${escapeXml(citySlug)}</loc>
    <image:image>
      <image:loc>${BASE_URL}${escapeXml(heroImage)}</image:loc>
      <image:title>Taxi Service in ${escapeXml(cityName)} - Triveni Cabs</image:title>
      <image:caption>Book reliable taxi and cab services in ${escapeXml(cityName)} with Triveni Cabs</image:caption>
    </image:image>
  </url>
`;
      }
    }
  });

  // Airport service images
  xml += `  <url>
    <loc>${BASE_URL}/airport-service</loc>
    <image:image>
      <image:loc>${BASE_URL}/images/airport_section.jpg</image:loc>
      <image:title>Airport Taxi Service - Triveni Cabs</image:title>
      <image:caption>24/7 airport transfer service with flight tracking and meet-and-greet</image:caption>
    </image:image>
  </url>
`;

  // Wedding service images
  xml += `  <url>
    <loc>${BASE_URL}/wedding</loc>
    <image:image>
      <image:loc>${BASE_URL}/images/wedding/luxury_car.jpg</image:loc>
      <image:title>Wedding Car Rental - Triveni Cabs</image:title>
      <image:caption>Luxury wedding car rental including BMW, Audi, Mercedes, and decorated vehicles</image:caption>
    </image:image>
  </url>
`;

  // Corporate service images
  xml += `  <url>
    <loc>${BASE_URL}/corporate-transportation-service</loc>
    <image:image>
      <image:loc>${BASE_URL}/images/car/innova_crysta.jpg</image:loc>
      <image:title>Corporate Transportation Service - Triveni Cabs</image:title>
      <image:caption>Professional corporate cab and employee transportation services</image:caption>
    </image:image>
  </url>
`;

  // Vehicle pages images
  const vehicleImages = [
    { slug: 'sedan', image: '/images/car/swift_dzire.jpg', title: 'Sedan Cars' },
    { slug: 'suv', image: '/images/car/premium_suv.jpg', title: 'SUV Vehicles' },
    { slug: 'tempo-traveller', image: '/images/tempo/17_seater.jpg', title: 'Tempo Traveller' },
    { slug: 'bus', image: '/images/bus/35_SEATER_BUS.jpg', title: 'Bus Rental' },
    { slug: 'luxury-bus', image: '/images/bus/45_SEATER_BUS.jpg', title: 'Luxury Bus' }
  ];

  vehicleImages.forEach(vehicle => {
    xml += `  <url>
    <loc>${BASE_URL}/vehicles/${escapeXml(vehicle.slug)}</loc>
    <image:image>
      <image:loc>${BASE_URL}${escapeXml(vehicle.image)}</image:loc>
      <image:title>${escapeXml(vehicle.title)} - Triveni Cabs</image:title>
      <image:caption>Rent ${escapeXml(vehicle.title.toLowerCase())} for outstation and local trips</image:caption>
    </image:image>
  </url>
`;
  });

  // Week 27 expansion — road trips, Ayodhya, best-time, Agra guides, Delhi
  // airport terminals. Each entry lets Google Images index the hero we
  // actually ship and credit the destination page for the image rank.
  const week27Additions = [
    // Road trips (Week 26 OG-image fixes)
    { loc: `${BASE_URL}/10-day-north-india-road-trip`, img: '/images/sightseeing/Jaisalmer/Jaisalmer_Fort.jpg', title: '10 Day North India Road Trip', caption: 'Delhi, Agra, Jaipur, Udaipur, Jodhpur, Jaisalmer circuit with Triveni Cabs' },
    { loc: `${BASE_URL}/7-day-himachal-tour-by-car`, img: '/images/sightseeing/Manali/Manali_Hero_section.jpg', title: '7 Day Himachal Tour by Car', caption: 'Shimla, Manali, Dharamshala, Dalhousie 7-day itinerary with Triveni Cabs' },
    { loc: `${BASE_URL}/5-day-rajasthan-road-trip-jaipur-udaipur-jodhpur`, img: '/images/sightseeing/Udaipur/Udaipur_Hero_section.jpg', title: '5 Day Rajasthan Road Trip', caption: 'Jaipur Udaipur Jodhpur circuit — heritage hotels and forts' },

    // Ayodhya ecosystem
    { loc: `${BASE_URL}/ayodhya-1-day-package`, img: '/images/sightseeing/Ayodhya/Ayodhya_Hero_section.jpg', title: 'Ayodhya 1-Day Package', caption: 'Same-day Ram Mandir darshan from Lucknow / Prayagraj' },
    { loc: `${BASE_URL}/ayodhya-ram-mandir-tour-from-delhi`, img: '/images/sightseeing/Ayodhya/Ayodhya_Hero_section.jpg', title: 'Ayodhya Ram Mandir Tour from Delhi', caption: '2-3 day sacred darshan package — Delhi to Ayodhya by cab' },
    { loc: `${BASE_URL}/ayodhya-ram-mandir-tour-from-agra`, img: '/images/sightseeing/Ayodhya/Ayodhya_Hero_section.jpg', title: 'Ayodhya Ram Mandir Tour from Agra', caption: 'Combined Taj Mahal + Ayodhya cab package' },
    { loc: `${BASE_URL}/ayodhya-ram-mandir-tour-from-lucknow`, img: '/images/sightseeing/Ayodhya/Ayodhya_Hero_section.jpg', title: 'Ayodhya Ram Mandir Tour from Lucknow', caption: 'Shortest same-day Ayodhya darshan cab — 135 km' },
    { loc: `${BASE_URL}/ayodhya-trip-cost-from-delhi`, img: '/images/sightseeing/Ayodhya/Ayodhya_Hero_section.jpg', title: 'Ayodhya Trip Cost from Delhi', caption: 'Full per-vehicle cost breakdown for Delhi-Ayodhya trip' },

    // Delhi airport terminals
    { loc: `${BASE_URL}/airport-service/delhi/igi-terminal-1-domestic`, img: '/images/airport_section.jpg', title: 'Delhi IGI Airport Terminal 1 Taxi', caption: 'T1 domestic terminal taxi with flight-tracked pickup and 60-min free wait' },
    { loc: `${BASE_URL}/airport-service/delhi/igi-terminal-2-domestic`, img: '/images/airport_section.jpg', title: 'Delhi IGI Airport Terminal 2 Taxi', caption: 'T2 Vistara/Air India terminal pickup with flight-tracked cab' },
    { loc: `${BASE_URL}/airport-service/delhi/igi-terminal-3-international`, img: '/images/airport_section.jpg', title: 'Delhi IGI T3 International Airport Taxi', caption: 'T3 international arrivals pickup with 90-min free wait' },
    { loc: `${BASE_URL}/airport-service/jewar/jewar-terminal-1-international`, img: '/images/airport_section.jpg', title: 'Jewar International Airport Taxi', caption: 'Noida International Airport (Jewar) T1 pickup service' },

    // Agra guides (high-traffic head-term content)
    { loc: `${BASE_URL}/agra-travel-guide`, img: '/images/sightseeing/Agra/Taj_mahal.jpg', title: 'Agra Travel Guide', caption: 'Complete Agra travel guide — Taj Mahal, Fort, Fatehpur Sikri, food & shopping' },
    { loc: `${BASE_URL}/agra-food-tour`, img: '/images/sightseeing/Agra/Agra_Hero_section.jpg', title: 'Agra Food Tour Guide', caption: 'Best Agra food — Petha, Bedai, Jalebi, Sadar Bazaar chaat walk' },
    { loc: `${BASE_URL}/agra-shopping-guide`, img: '/images/sightseeing/Agra/Agra_Hero_section.jpg', title: 'Agra Shopping Guide', caption: 'Best Agra markets — Hall Bazaar, Kinari Bazaar, Sadar, marble handicrafts' },
    { loc: `${BASE_URL}/agra-beyond-taj-mahal`, img: '/images/sightseeing/Agra/agra_fort.jpg', title: 'Agra Beyond Taj Mahal', caption: 'Hidden Agra — Chini Ka Rauza, Sikandra, Ram Bagh, Fatehpur Sikri' },
    { loc: `${BASE_URL}/agra-day-trip-from-delhi`, img: '/images/sightseeing/Agra/Taj_mahal.jpg', title: 'Agra Day Trip from Delhi', caption: 'Same-day Taj Mahal day-trip from Delhi — cost, itinerary, booking' },
    { loc: `${BASE_URL}/agra-in-1-day-itinerary`, img: '/images/sightseeing/Agra/Taj_mahal.jpg', title: 'Agra in 1 Day Itinerary', caption: 'Best Agra 1-day plan: Taj Mahal, Agra Fort, Mehtab Bagh' },
    { loc: `${BASE_URL}/agra-in-2-days-itinerary`, img: '/images/sightseeing/Agra/Taj_mahal.jpg', title: 'Agra in 2 Days Itinerary', caption: 'Relaxed 2-day Agra itinerary with food, shopping, sightseeing' },

    // 12v17 comparison
    { loc: `${BASE_URL}/12-seater-vs-17-seater-tempo`, img: '/images/tempo/17_seater.jpg', title: '12 Seater vs 17 Seater Tempo', caption: 'Side-by-side tempo traveller comparison for group bookings' },
  ];

  // Best-time-to-visit pages — each top destination gets one entry
  const bestTimeDestinations = ['manali', 'shimla', 'jaipur', 'udaipur', 'rishikesh', 'kashmir', 'ladakh', 'agra', 'varanasi', 'nainital', 'mussoorie', 'dharamshala', 'amritsar', 'jodhpur', 'jaisalmer', 'pushkar', 'mcleodganj', 'dalhousie', 'mount-abu', 'haridwar'];
  bestTimeDestinations.forEach(slug => {
    const city = slug.split('-').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(' ');
    week27Additions.push({
      loc: `${BASE_URL}/best-time-to-visit/${slug}`,
      img: `/images/sightseeing/${city.replace(/ /g, '_')}/${city.replace(/ /g, '_')}_Hero_section.jpg`,
      title: `Best Time to Visit ${city}`,
      caption: `Month-by-month guide: when to visit ${city}, weather, festivals, budget, cab booking`,
    });
  });

  week27Additions.forEach(entry => {
    xml += `  <url>
    <loc>${entry.loc}</loc>
    <image:image>
      <image:loc>${BASE_URL}${escapeXml(entry.img)}</image:loc>
      <image:title>${escapeXml(entry.title)} - Triveni Cabs</image:title>
      <image:caption>${escapeXml(entry.caption)}</image:caption>
    </image:image>
  </url>
`;
  });

  xml += `</urlset>`;

  return xml;
}

export async function GET() {
  const sitemap = generateImageSitemap();

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400',
    },
  });
}
