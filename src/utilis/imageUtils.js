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
  'jodhpur': '/images/sightseeing/Jodhpur/Mehrangarh Fort.jpg',
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
  // Week 39/40 destinations (verified assets). 'auli' is explicit because the
  // fuzzy matcher otherwise matched it inside 'kasauli' → wrong-place photo.
  'auli': '/images/citypage_hero_section_image.jpg',
  'badrinath': '/images/sightseeing/Char_Dham/Badrinath_Temple.jpg',
  'kedarnath': '/images/sightseeing/Char_Dham/Kedarnath_Temple.jpg',
  'gangotri': '/images/sightseeing/Char_Dham/Gangotri_Temple.jpg',
  'yamunotri': '/images/sightseeing/Char_Dham/Yamunotri_Temple.jpg',
  'bodhgaya': '/images/sightseeing/Bodh_Gaya/Bhod_gaya_hero_section.jpg',
  'bodh gaya': '/images/sightseeing/Bodh_Gaya/Bhod_gaya_hero_section.jpg',
  'gaya': '/images/sightseeing/Bodh_Gaya/Mahabodhi_Temple.jpg',
  'mandawa': '/images/sightseeing/Shekhawati/Mandawa_Fort.jpg',
};

const VEHICLE_IMAGE_MAP = {
  'dzire': '/images/car/swift_dzire.jpg',
  'swift dzire': '/images/car/swift_dzire.jpg',
  'sedan': '/images/car/swift_dzire.jpg',
  'etios': '/images/car/swift_dzire.jpg',
  'ertiga': '/images/car/ertiga.jpg',
  'innova': '/images/car/innova_crysta.jpg',
  'innova crysta': '/images/car/innova_crysta.jpg',
  'suv': '/images/car/innova_crysta.jpg',
  'fortuner': '/images/car/premium_suv.jpg',
  'premium': '/images/car/premium_suv.jpg',
  'tempo': '/images/tempo/12_seater.jpg',
  'tempo traveller': '/images/tempo/16_seater.jpg',
  'traveller': '/images/tempo/12_seater.jpg',
  '12 seater': '/images/tempo/12_seater.jpg',
  '12-seater': '/images/tempo/12_seater.jpg',
  '16 seater': '/images/tempo/16_seater.jpg',
  '16-seater': '/images/tempo/16_seater.jpg',
  '17 seater': '/images/tempo/17_seater.jpg',
  '17-seater': '/images/tempo/17_seater.jpg',
  '20 seater': '/images/tempo/20_seater.jpg',
  '20-seater': '/images/tempo/20_seater.jpg',
  '26 seater': '/images/tempo/26_seater.jpg',
  '26-seater': '/images/tempo/26_seater.jpg',
  'traveller-12-seater': '/images/tempo/12_seater.jpg',
  'bus': '/images/bus/hero_section_image.webp',
  'mini bus': '/images/bus/22_SEATER_BUS.jpg',
  'minibus': '/images/bus/22_SEATER_BUS.jpg',
  '22 seater bus': '/images/bus/22_SEATER_BUS.jpg',
  '25 seater bus': '/images/bus/25_SEATER_BUS.jpg',
  '27 seater bus': '/images/bus/27_SEATER_BUS.jpg',
  '35 seater bus': '/images/bus/35_SEATER_BUS.jpg',
  '41 seater bus': '/images/bus/41_SEATER_BUS.jpg',
  '45 seater bus': '/images/bus/45_SEATER_BUS.jpg',
  '49 seater bus': '/images/bus/49_SEATER_BUS.jpg',
  '56 seater bus': '/images/bus/56_SEATER_BUS.jpg',
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

// ─── CITY SIGHTSEEING GALLERY MAPS (multiple images per city) ─────────────────
// Each city can have 4–9 distinct images; callers can pick by role (hero, thumbnail, feature).
const CITY_GALLERIES = {
  'agra': [
    '/images/sightseeing/Agra/Agra_Hero_section.jpg',
    '/images/sightseeing/Agra/Taj_mahal.jpg',
    '/images/sightseeing/Agra/agra_fort.jpg',
    '/images/sightseeing/Agra/Mehtab_Bagh.jpg',
    '/images/sightseeing/Agra/Fathepur_shikiri.jpg',
    '/images/sightseeing/Agra/Jama_Masjid.jpg',
    '/images/sightseeing/Agra/Baby_Taj.jpg',
    '/images/sightseeing/Agra/Diwan_i_kHAS.jpg',
  ],
  'delhi': [
    '/images/sightseeing/Delhi/Delhi_hero_section.jpg',
    '/images/sightseeing/Delhi/red_fort.jpg',
    '/images/sightseeing/Delhi/India_Gate.jpg',
    "/images/sightseeing/Delhi/Humayun's_Tomb.jpg",
    '/images/sightseeing/Delhi/Outub_Minar.jpg',
    '/images/sightseeing/Delhi/Akshardham_Temple.jpg',
    '/images/sightseeing/Delhi/Lotus Temple.jpg',
    '/images/sightseeing/Delhi/Raj_Ghat.jpg',
  ],
  'new delhi': [
    '/images/sightseeing/Delhi/Delhi_hero_section.jpg',
    '/images/sightseeing/Delhi/red_fort.jpg',
    '/images/sightseeing/Delhi/India_Gate.jpg',
    "/images/sightseeing/Delhi/Humayun's_Tomb.jpg",
    '/images/sightseeing/Delhi/Outub_Minar.jpg',
    '/images/sightseeing/Delhi/Akshardham_Temple.jpg',
    '/images/sightseeing/Delhi/Lotus Temple.jpg',
    '/images/sightseeing/Delhi/Raj_Ghat.jpg',
  ],
  'jaipur': [
    '/images/sightseeing/Jaipur/jaipur_hero_section_image.jpg',
    '/images/sightseeing/Jaipur/Hawa_Mahal.jpg',
    '/images/sightseeing/Jaipur/amber_fort.jpg',
    '/images/sightseeing/Jaipur/city_palace.jpg',
    '/images/sightseeing/Jaipur/Jal_Mahal.jpg',
    '/images/sightseeing/Jaipur/Nahargarh_Fort.jpg',
    '/images/sightseeing/Jaipur/jantar_mantar.jpg',
    '/images/sightseeing/Jaipur/Albert_Hall_Museum.jpg',
    '/images/sightseeing/Jaipur/Johari_bazar.jpg',
  ],
  'ajmer': [
    '/images/sightseeing/Ajmer_Pushkar/Ajmer_shariff_hero_section.jpg',
    '/images/sightseeing/Ajmer_Pushkar/Ana_Sagar_Lake_Ajmer.jpg',
    '/images/sightseeing/Ajmer_Pushkar/Brahma_Temple_Pushkar.jpg',
    '/images/sightseeing/Ajmer_Pushkar/Pushkar_Lake_Ghats.jpg',
    '/images/sightseeing/Ajmer_Pushkar/Pushkar_Camel_Fair.jpg',
  ],
  'pushkar': [
    '/images/sightseeing/Ajmer_Pushkar/Brahma_Temple_Pushkar.jpg',
    '/images/sightseeing/Ajmer_Pushkar/Pushkar_Lake_Ghats.jpg',
    '/images/sightseeing/Ajmer_Pushkar/Pushkar_Camel_Fair.jpg',
    '/images/sightseeing/Ajmer_Pushkar/Ajmer_shariff_hero_section.jpg',
  ],
  'mathura': [
    '/images/sightseeing/Mathura_Vrindavan/mathura_vrindvan_hero_image.png',
    '/images/sightseeing/Mathura_Vrindavan/Krishna_Janmabhoomi.jpg',
    '/images/sightseeing/Mathura_Vrindavan/Vishram_Ghat.jpg',
    '/images/sightseeing/Mathura_Vrindavan/Yamuna_River_Ghat.jpg',
    '/images/sightseeing/Mathura_Vrindavan/Govardhan_Hill.jpg',
    '/images/sightseeing/Mathura_Vrindavan/Banke_Bihari_Temple.jpg',
    '/images/sightseeing/Mathura_Vrindavan/ISKCON_Vrindavan.jpg',
    '/images/sightseeing/Mathura_Vrindavan/Prem_Mandir.jpg',
  ],
  'vrindavan': [
    '/images/sightseeing/Mathura_Vrindavan/Banke_Bihari_Temple.jpg',
    '/images/sightseeing/Mathura_Vrindavan/ISKCON_Vrindavan.jpg',
    '/images/sightseeing/Mathura_Vrindavan/Prem_Mandir.jpg',
    '/images/sightseeing/Mathura_Vrindavan/mathura_vrindvan_hero_image.png',
  ],
  'haridwar': [
    '/images/sightseeing/Haridwar/Haridwar_hero_section.jpg',
    '/images/sightseeing/Haridwar/Ganga_Aarti.jpg',
    '/images/sightseeing/Haridwar/Har_Ki_Pauri.jpg',
    '/images/sightseeing/Haridwar/Mansa_Devi_Temple.jpg',
    '/images/sightseeing/Haridwar/Chandi_Devi_Temple.jpg',
  ],
  'amritsar': [
    '/images/sightseeing/Amritsar/Amristar_hero_section.jpg',
    '/images/sightseeing/Amritsar/Golden_Temple.jpg',
    '/images/sightseeing/Amritsar/Jallianwala_Bagh.jpg',
    '/images/sightseeing/Amritsar/Wagah_Border.jpg',
    '/images/sightseeing/Amritsar/Partition_Museum.jpg',
  ],
};

// Keyword → specific image (for matching thingsToDo titles/activities to images)
const ATTRACTION_IMAGE_MAP = {
  // Agra
  'taj mahal': '/images/sightseeing/Agra/Taj_mahal.jpg',
  'agra fort': '/images/sightseeing/Agra/agra_fort.jpg',
  'mehtab bagh': '/images/sightseeing/Agra/Mehtab_Bagh.jpg',
  'fatehpur sikri': '/images/sightseeing/Agra/Fathepur_shikiri.jpg',
  'jama masjid': '/images/sightseeing/Agra/Jama_Masjid.jpg',
  'baby taj': '/images/sightseeing/Agra/Baby_Taj.jpg',
  'itmad-ud-daulah': '/images/sightseeing/Agra/Baby_Taj.jpg',
  // Delhi
  'red fort': '/images/sightseeing/Delhi/red_fort.jpg',
  'india gate': '/images/sightseeing/Delhi/India_Gate.jpg',
  'qutub minar': '/images/sightseeing/Delhi/Outub_Minar.jpg',
  "humayun's tomb": "/images/sightseeing/Delhi/Humayun's_Tomb.jpg",
  'humayuns tomb': "/images/sightseeing/Delhi/Humayun's_Tomb.jpg",
  'akshardham': '/images/sightseeing/Delhi/Akshardham_Temple.jpg',
  'lotus temple': '/images/sightseeing/Delhi/Lotus Temple.jpg',
  'chandni chowk': '/images/sightseeing/Delhi/red_fort.jpg',
  // Jaipur
  'hawa mahal': '/images/sightseeing/Jaipur/Hawa_Mahal.jpg',
  'amer fort': '/images/sightseeing/Jaipur/amber_fort.jpg',
  'amber fort': '/images/sightseeing/Jaipur/amber_fort.jpg',
  'city palace': '/images/sightseeing/Jaipur/city_palace.jpg',
  'jantar mantar': '/images/sightseeing/Jaipur/jantar_mantar.jpg',
  'nahargarh': '/images/sightseeing/Jaipur/Nahargarh_Fort.jpg',
  'jal mahal': '/images/sightseeing/Jaipur/Jal_Mahal.jpg',
  'albert hall': '/images/sightseeing/Jaipur/Albert_Hall_Museum.jpg',
  'chokhi dhani': '/images/sightseeing/Jaipur/city_palace.jpg',
  'johari': '/images/sightseeing/Jaipur/Johari_bazar.jpg',
  // Haridwar
  'ganga aarti': '/images/sightseeing/Haridwar/Ganga_Aarti.jpg',
  'har ki pauri': '/images/sightseeing/Haridwar/Har_Ki_Pauri.jpg',
  'mansa devi': '/images/sightseeing/Haridwar/Mansa_Devi_Temple.jpg',
  'chandi devi': '/images/sightseeing/Haridwar/Chandi_Devi_Temple.jpg',
  // Mathura / Vrindavan
  'krishna janmabhoomi': '/images/sightseeing/Mathura_Vrindavan/Krishna_Janmabhoomi.jpg',
  'banke bihari': '/images/sightseeing/Mathura_Vrindavan/Banke_Bihari_Temple.jpg',
  'iskcon': '/images/sightseeing/Mathura_Vrindavan/ISKCON_Vrindavan.jpg',
  'prem mandir': '/images/sightseeing/Mathura_Vrindavan/Prem_Mandir.jpg',
  'govardhan': '/images/sightseeing/Mathura_Vrindavan/Govardhan_Hill.jpg',
  'vishram ghat': '/images/sightseeing/Mathura_Vrindavan/Vishram_Ghat.jpg',
  // Ajmer / Pushkar
  'dargah': '/images/sightseeing/Ajmer_Pushkar/Ajmer_shariff_hero_section.jpg',
  'ajmer sharif': '/images/sightseeing/Ajmer_Pushkar/Ajmer_shariff_hero_section.jpg',
  'brahma temple': '/images/sightseeing/Ajmer_Pushkar/Brahma_Temple_Pushkar.jpg',
  'pushkar lake': '/images/sightseeing/Ajmer_Pushkar/Pushkar_Lake_Ghats.jpg',
  'ana sagar': '/images/sightseeing/Ajmer_Pushkar/Ana_Sagar_Lake_Ajmer.jpg',
  // Amritsar
  'golden temple': '/images/sightseeing/Amritsar/Golden_Temple.jpg',
  'wagah': '/images/sightseeing/Amritsar/Wagah_Border.jpg',
  'jallianwala': '/images/sightseeing/Amritsar/Jallianwala_Bagh.jpg',
  'partition museum': '/images/sightseeing/Amritsar/Partition_Museum.jpg',
};

/**
 * Get gallery of images for a city. Returns an array — callers pick by index.
 * @param {string} cityName
 * @returns {string[]} array of image paths (at least 1)
 */
export function getCityGallery(cityName) {
  if (!cityName) return [FALLBACK_HERO];
  const key = cityName.toLowerCase().trim();
  if (CITY_GALLERIES[key]) return CITY_GALLERIES[key];
  // Fuzzy match
  for (const [mapKey, arr] of Object.entries(CITY_GALLERIES)) {
    if (key.includes(mapKey) || mapKey.includes(key)) return arr;
  }
  // Fallback — return single hero via existing helper
  return [getCityImage(cityName)];
}

/**
 * Match a title / description string to a specific attraction image.
 * @param {string} text — e.g. "Taj Mahal at sunrise"
 * @param {string} cityName — fallback city for gallery image
 * @returns {string} image path
 */
export function getAttractionImage(text, cityName) {
  if (!text) return getCityImage(cityName);
  const lower = text.toLowerCase();
  for (const [keyword, path] of Object.entries(ATTRACTION_IMAGE_MAP)) {
    if (lower.includes(keyword)) return path;
  }
  // No attraction match — return city hero
  return getCityImage(cityName);
}

/**
 * Pick an image from city gallery by index (wraps around if index > length).
 * @param {string} cityName
 * @param {number} index
 * @returns {string}
 */
export function getCityImageByIndex(cityName, index = 0) {
  const gallery = getCityGallery(cityName);
  return gallery[index % gallery.length] || FALLBACK_HERO;
}
