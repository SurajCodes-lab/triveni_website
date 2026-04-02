/**
 * Image Utilities for SEO Optimization
 *
 * Provides tiny blur placeholders and image optimization helpers
 * to improve CLS (Cumulative Layout Shift) scores.
 * Placeholders are minimal (~100 bytes) to avoid increasing HTML size.
 */

// Tiny 10x10 neutral gray blur placeholder
export const blurDataURL =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIklEQVQYlWN89+7dfwYGBgZGRkYGBgYGBiYGCgATAxUaAACM5QT/pWhyjgAAAABJRU5ErkJggg==";

// Tiny 10x10 warm/light blur placeholder for cards and thumbnails
export const lightBlurDataURL =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAI0lEQVQYlWP4////fwYGBgZGRkYGBgYGBiYGCgATAxUaAACykgn/Ol/f3QAAAABJRU5ErkJggg==";

// Tiny 10x10 warm-toned blur for hero sections
export const heroBlurDataURL =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIklEQVQYlWP4z8DwnwEKGBkZGRgYGBiYGCgATAxUaAAAjk4H/0pxrJIAAAAASUVORK5CYII=";

// Tiny 10x10 dark blur for night/dark images
export const darkBlurDataURL =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAHklEQVQYlWNgGHbgPwMDAwMjIyMDAwMDAxMDFRoAAG1xAf/W9IXTAAAAASUVORK5CYII=";

/**
 * Get appropriate blur placeholder based on image type
 * @param {string} type - 'default' | 'light' | 'hero' | 'dark'
 * @returns {string} blur data URL
 */
export const getBlurPlaceholder = (type = 'default') => {
  switch (type) {
    case 'light':
      return lightBlurDataURL;
    case 'hero':
      return heroBlurDataURL;
    case 'dark':
      return darkBlurDataURL;
    default:
      return blurDataURL;
  }
};

/**
 * Default image props for consistent Image component usage
 */
export const defaultImageProps = {
  placeholder: 'blur',
  blurDataURL,
};

/**
 * City-to-hero-image map — maps city names to their sightseeing hero images.
 * Covers 55 cities with photos in /images/sightseeing/.
 */
const CITY_IMAGE_MAP = {
  'agra': '/images/sightseeing/Agra/Agra_Hero_section.jpg',
  'ahmedabad': '/images/sightseeing/Ahmedabad/Ahmedabad_hero_section.jpg',
  'ajmer': '/images/sightseeing/Ajmer_Pushkar/Ajmer_shariff_hero_section.jpg',
  'pushkar': '/images/sightseeing/Ajmer_Pushkar/Ajmer_shariff_hero_section.jpg',
  'alwar': '/images/sightseeing/Alwar_Sariska/Alwar_Sariska_Hero_Section.jpg',
  'amritsar': '/images/sightseeing/Amritsar/Amristar_hero_section.jpg',
  'ayodhya': '/images/sightseeing/Ayodhya/ayodha_hero_section.jpg',
  'bharatpur': '/images/sightseeing/Bharatpur/Keoladeo_National_Park _Bharatpur_hero_Section.jpg',
  'bikaner': '/images/sightseeing/Bikaner/Bikaner_hero_section.jpg',
  'bodh gaya': '/images/sightseeing/Bodh_Gaya/Bhod_gaya_hero_section.jpg',
  'chandigarh': '/images/sightseeing/Chandigarh/Chandigarh_hero_section.jpg',
  'chittorgarh': '/images/sightseeing/Chittorgarh/chittogarh_hero_section.jpg',
  'dalhousie': '/images/sightseeing/Dalhousie/dalhousie_hero_section.jpg',
  'dehradun': '/images/sightseeing/Dehradun/Dehradun_hero_section.jpg',
  'delhi': '/images/sightseeing/Delhi/Delhi_hero_section.jpg',
  'new delhi': '/images/sightseeing/Delhi/Delhi_hero_section.jpg',
  'dharamshala': '/images/sightseeing/Dharamshala/Dharamshala_hero_section.jpg',
  'fatehpur sikri': '/images/sightseeing/Fatehpur_Sikri/Fatehpur_Sikri_hero_section.jpg',
  'gulmarg': '/images/sightseeing/Gulmarg/Gulmarg_hero_section.jpg',
  'haridwar': '/images/sightseeing/Haridwar/Haridwar_hero_section.jpg',
  'jaipur': '/images/sightseeing/Jaipur/jaipur_hero_section_image.jpg',
  'jaisalmer': '/images/sightseeing/Jaisalmer/Jaisalmer_hero_section.jpg',
  'jim corbett': '/images/sightseeing/Jim_Corbett/Jim_corbett_hero_section.jpg',
  'jodhpur': '/images/sightseeing/Jodhpur/Jodhpur_hero_section.jpg',
  'junagadh': '/images/sightseeing/Junagadh/Junagadh_hero_section.jpg',
  'kasauli': '/images/sightseeing/Kasauli/Kasauli_Hero_Section.jpg',
  'kashmir': '/images/sightseeing/Kashmir_Valley/Kashmir_Valley_hero_section.jpg',
  'srinagar': '/images/sightseeing/Srinagar/Srinagar_hero_section.jpg',
  'kasol': '/images/sightseeing/Kasol/Kasol_hero_section.jpg',
  'khajjiar': '/images/sightseeing/Khajjiar/Khajjiar_hero_section.jpg',
  'khatu shyam': '/images/sightseeing/Khatu_Shyam/khtau_shyam_hero.jpg',
  'kufri': '/images/sightseeing/Kufri/kufri_hero_section.jpg',
  'kumbhalgarh': '/images/sightseeing/Kumbhalgarh/Kumbhalgarh_hero_section.jpg',
  'ladakh': '/images/sightseeing/Ladakh/Ladakh_hero_section.jpg',
  'leh': '/images/sightseeing/Ladakh/Ladakh_hero_section.jpg',
  'lansdowne': '/images/sightseeing/Lansdowne/lansdowne_hero_section.jpg',
  'lucknow': '/images/sightseeing/Lucknow/Lucknow_hero_section.jpg',
  'manali': '/images/sightseeing/Manali/Manali_hero_section.jpg',
  'mathura': '/images/sightseeing/Mathura_Vrindavan/mathura_vrindvan_hero_image.png',
  'vrindavan': '/images/sightseeing/Mathura_Vrindavan/mathura_vrindvan_hero_image.png',
  'mount abu': '/images/sightseeing/Mount_Abu/mount_abu_hero_section.jpg',
  'mussoorie': '/images/sightseeing/Mussoorie/Mussorrie_hero_section.jpg',
  'nainital': '/images/sightseeing/Nainital/Nainital_hero_section.jpg',
  'neemrana': '/images/sightseeing/Neemrana/Neemrana_hero_section.jpg',
  'pahalgam': '/images/sightseeing/Pahalgam/Pahalgam_hero_section.jpg',
  'prayagraj': '/images/sightseeing/Prayagraj/Prayagraj_hero_section.jpg',
  'allahabad': '/images/sightseeing/Prayagraj/Prayagraj_hero_section.jpg',
  'ranthambore': '/images/sightseeing/Ranthambore/Ranthambore_hero_section.jpg',
  'rishikesh': '/images/sightseeing/Rishikesh/Rishikesh_hero_section.jpg',
  'shimla': '/images/sightseeing/Shimla/shimla_hero_section.jpg',
  'somnath': '/images/sightseeing/Somnath_Diu/Somnath_Diu_hero_section.jpg',
  'sonamarg': '/images/sightseeing/Sonamarg/Sonamarg_hero_section.jpg',
  'spiti': '/images/sightseeing/Spiti_Valley/Spiti_Valley_hero_section.jpg',
  'udaipur': '/images/sightseeing/Udaipur/Udaipur_hero_section.jpg',
  'vaishno devi': '/images/sightseeing/Vaishno_Devi/Vaishno_Devi_hero_section.jpg',
  'varanasi': '/images/sightseeing/Varanasi/varanasi_hero_section.jpg',
  'noida': '/images/sightseeing/Delhi/Delhi_hero_section.jpg',
  'gurgaon': '/images/sightseeing/Delhi/Delhi_hero_section.jpg',
  'gurugram': '/images/sightseeing/Delhi/Delhi_hero_section.jpg',
};

const VEHICLE_IMAGE_MAP = {
  'dzire': '/images/car/swift_dzire.jpg',
  'swift dzire': '/images/car/swift_dzire.jpg',
  'sedan': '/images/car/swift_dzire.jpg',
  'ertiga': '/images/car/ertiga.jpg',
  'innova': '/images/car/innova_crysta.jpg',
  'innova crysta': '/images/car/innova_crysta.jpg',
  'suv': '/images/car/innova_crysta.jpg',
  'fortuner': '/images/car/premium_suv.jpg',
  'premium': '/images/car/premium_suv.jpg',
};

const FALLBACK_HERO = '/images/citypage_hero_section_image.jpg';

/**
 * Get hero image for a city name. Tries exact match, then fuzzy.
 * @param {string} cityName — e.g. "Delhi", "Agra", "New Delhi"
 * @returns {string} image path
 */
export function getCityImage(cityName) {
  if (!cityName) return FALLBACK_HERO;
  const key = cityName.toLowerCase().trim();
  if (CITY_IMAGE_MAP[key]) return CITY_IMAGE_MAP[key];
  // Fuzzy: check if any map key is contained in the city name
  for (const [mapKey, path] of Object.entries(CITY_IMAGE_MAP)) {
    if (key.includes(mapKey) || mapKey.includes(key)) return path;
  }
  return FALLBACK_HERO;
}

/**
 * Get image for a vehicle name.
 * @param {string} vehicleName — e.g. "Innova Crysta", "Dzire", "Ertiga"
 * @returns {string} image path
 */
export function getVehicleImage(vehicleName) {
  if (!vehicleName) return '/images/car/swift_dzire.jpg';
  const key = vehicleName.toLowerCase().trim();
  if (VEHICLE_IMAGE_MAP[key]) return VEHICLE_IMAGE_MAP[key];
  for (const [mapKey, path] of Object.entries(VEHICLE_IMAGE_MAP)) {
    if (key.includes(mapKey) || mapKey.includes(key)) return path;
  }
  return '/images/car/swift_dzire.jpg';
}
