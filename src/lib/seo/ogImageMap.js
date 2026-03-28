/**
 * Centralized OG Image Mapping — city-specific hero images for social sharing
 * Prevents generic/incorrect OG images across 300+ pages
 */

const cityOgImages = {
  agra: '/images/sightseeing/Agra/Agra_Hero_section.jpg',
  ahmedabad: '/images/sightseeing/Ahmedabad/Ahmedabad_hero_section.jpg',
  amritsar: '/images/sightseeing/Amritsar/Amristar_hero_section.jpg',
  ayodhya: '/images/sightseeing/Ayodhya/ayodha_hero_section.jpg',
  chandigarh: '/images/sightseeing/Chandigarh/Chandigarh_hero_section.jpg',
  dalhousie: '/images/sightseeing/Dalhousie/dalhousie_hero_section.jpg',
  dehradun: '/images/sightseeing/Dehradun/Dehradun_hero_section.jpg',
  delhi: '/images/sightseeing/Delhi/Delhi_hero_section.jpg',
  dharamshala: '/images/sightseeing/Dharamshala/Dharamshala_hero_section.jpg',
  gulmarg: '/images/sightseeing/Gulmarg/Gulmarg_hero_section.jpg',
  gurgaon: '/images/sightseeing/Delhi/Delhi_hero_section.jpg',
  haridwar: '/images/sightseeing/Haridwar/Haridwar_hero_section.jpg',
  jaipur: '/images/sightseeing/Jaipur/jaipur_hero_section_image.jpg',
  jaisalmer: '/images/sightseeing/Jaisalmer/Jaisalmer_hero_section.jpg',
  jodhpur: '/images/sightseeing/Jodhpur/Mehrangarh Fort.jpg',
  kashmir: '/images/sightseeing/Kashmir_Valley/Kashmir_Valley_hero_section.jpg',
  kasol: '/images/sightseeing/Kasol/Kasol_hero_section.jpg',
  lucknow: '/images/sightseeing/Lucknow/Lucknow_hero_section.jpg',
  manali: '/images/sightseeing/Manali/Manali_hero_section.jpg',
  mathura: '/images/sightseeing/Mathura_Vrindavan/mathura_vrindvan_hero_image.png',
  vrindavan: '/images/sightseeing/Mathura_Vrindavan/mathura_vrindvan_hero_image.png',
  mussoorie: '/images/sightseeing/Mussoorie/Mussorrie_hero_section.jpg',
  nainital: '/images/sightseeing/Nainital/Nainital_hero_section.jpg',
  noida: '/images/sightseeing/Delhi/Delhi_hero_section.jpg',
  pushkar: '/images/sightseeing/Ajmer_Pushkar/Ajmer_shariff_hero_section.jpg',
  rishikesh: '/images/sightseeing/Rishikesh/Rishikesh_hero_section.jpg',
  shimla: '/images/sightseeing/Shimla/shimla_hero_section.jpg',
  udaipur: '/images/sightseeing/Udaipur/Udaipur_hero_section.jpg',
  varanasi: '/images/sightseeing/Varanasi/varanasi_hero_section.jpg',
};

const defaultOgImage = '/images/HERO_SECTION_MAIN_PAGE.jpg';

/**
 * Get the best OG image for a given city name.
 * Falls back to the main hero image if no city match found.
 */
export function getCityOgImage(cityName) {
  if (!cityName) return defaultOgImage;
  const key = cityName.toLowerCase().replace(/[\s_-]+/g, '');
  // Try direct match first
  if (cityOgImages[key]) return cityOgImages[key];
  // Try partial match
  for (const [city, img] of Object.entries(cityOgImages)) {
    if (key.includes(city) || city.includes(key)) return img;
  }
  return defaultOgImage;
}

/**
 * Extract the primary city from a page slug like "jaipur-food-tour" or "places-to-visit-near-delhi"
 */
export function getCityFromSlug(slug) {
  if (!slug) return null;
  const cities = Object.keys(cityOgImages);
  for (const city of cities) {
    if (slug.includes(city)) return city;
  }
  return null;
}

/**
 * Get OG image from a slug — combines extraction + lookup
 */
export function getOgImageForSlug(slug) {
  const city = getCityFromSlug(slug);
  return getCityOgImage(city);
}
