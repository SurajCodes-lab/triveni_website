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
