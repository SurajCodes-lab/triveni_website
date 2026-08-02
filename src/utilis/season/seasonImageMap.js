// src/utilis/season/seasonImageMap.js
//
// Hero + gallery imagery per festival/seasonal slug.
//
// WHY THIS EXISTS: FestivalTripClient shipped with NO <Image> at all — its hero
// was a bare CSS gradient and its vehicle cards used icons only. Every festival
// page on the site rendered image-less, which is fatal for a travel product
// where the destination photo IS the pitch. The entries themselves have no image
// field, so imagery is attached centrally here and merged in festivalData.js.
//
// RULES:
//  - Every path below points at a file that exists under /public.
//  - Filenames with SPACES are deliberately avoided (they need URL-encoding and
//    break OG tags); several assets in the library have them.
//  - hero = the single destination shot. gallery = 3 supporting shots.

export const SEASON_IMAGES = {
  // ── Existing festival/seasonal pages (previously image-less) ──────────
  'holi-mathura-vrindavan-cab-service': {
    hero: '/images/sightseeing/Mathura_Vrindavan/Banke_Bihari_Temple.jpg',
    gallery: [
      '/images/sightseeing/Mathura_Vrindavan/Krishna_Janmabhoomi.jpg',
      '/images/sightseeing/Mathura_Vrindavan/Prem_Mandir.jpg',
      '/images/sightseeing/Mathura_Vrindavan/Vishram_Ghat.jpg',
    ],
  },
  'diwali-ayodhya-transport': {
    hero: '/images/sightseeing/Ayodhya/Ram_Mandir.jpg',
    gallery: [
      '/images/sightseeing/Ayodhya/Saryu_River_Ghat.jpg',
      '/images/sightseeing/Ayodhya/Hanuman_Garhi.jpg',
      '/images/sightseeing/Ayodhya/Kanak_Bhawan.jpg',
    ],
  },
  'kumbh-mela-prayagraj-transport': {
    hero: '/images/sightseeing/Varanasi/Dashashwamedh_Ghat_Aarti.jpg',
    gallery: [
      '/images/sightseeing/Varanasi/Assi_Ghat.jpg',
      '/images/sightseeing/Varanasi/Boat_Ride_Ganges.jpg',
      '/images/sightseeing/Haridwar/Ganga_Aarti.jpg',
    ],
  },
  'pushkar-mela-transport': {
    hero: '/images/sightseeing/Ajmer_Pushkar/Pushkar_Camel_Fair.jpg',
    gallery: [
      '/images/sightseeing/Ajmer_Pushkar/Brahma_Temple_Pushkar.jpg',
      '/images/sightseeing/Ajmer_Pushkar/Ana_Sagar_Lake_Ajmer.jpg',
      '/images/sightseeing/Ajmer_Pushkar/Ajmer_shariff_hero_section.jpg',
    ],
  },
  'summer-hill-station-packages': {
    hero: '/images/sightseeing/Shimla/shimla_hero_section.jpg',
    gallery: [
      '/images/sightseeing/Manali/Manali_hero_section.jpg',
      '/images/sightseeing/Shimla/Mall_Road.jpg',
      '/images/packages/manali.webp',
    ],
  },
  'winter-snow-trip-packages': {
    hero: '/images/packages/manali.webp',
    gallery: [
      '/images/sightseeing/Manali/Manali_hero_section.jpg',
      '/images/sightseeing/Shimla/shimla_hero_section.jpg',
      '/images/sightseeing/Shimla/jakhoo_temple.jpg',
    ],
  },
  'new-year-road-trip-packages': {
    hero: '/images/packages/rajasthan.webp',
    gallery: [
      '/images/sightseeing/Jaipur/Hawa_Mahal.jpg',
      '/images/sightseeing/Rishikesh/Laxman_Jhula.jpg',
      '/images/sightseeing/Jaipur/Jal_Mahal.jpg',
    ],
  },
  'navratri-vaishno-devi-cab': {
    hero: '/images/sightseeing/Amritsar/Golden_Temple.jpg',
    gallery: [
      '/images/sightseeing/Amritsar/Amristar_hero_section.jpg',
      '/images/sightseeing/Haridwar/Chandi_Devi_Temple.jpg',
      '/images/sightseeing/Haridwar/Ganga_Aarti.jpg',
    ],
  },
  'baisakhi-amritsar-cab': {
    hero: '/images/sightseeing/Amritsar/Golden_Temple.jpg',
    gallery: [
      '/images/sightseeing/Amritsar/Jallianwala_Bagh.jpg',
      '/images/sightseeing/Amritsar/Partition_Museum.jpg',
      '/images/sightseeing/Amritsar/Amristar_hero_section.jpg',
    ],
  },
  'chhath-puja-varanasi-transport': {
    hero: '/images/sightseeing/Varanasi/Dashashwamedh_Ghat_Aarti.jpg',
    gallery: [
      '/images/sightseeing/Varanasi/Assi_Ghat.jpg',
      '/images/sightseeing/Varanasi/Kashi_Vishwanath_Temple.jpg',
      '/images/sightseeing/Varanasi/Boat_Ride_Ganges.jpg',
    ],
  },
  'maha-shivratri-pilgrimage-cab': {
    hero: '/images/sightseeing/Haridwar/Har_Ki_Pauri.jpg',
    gallery: [
      '/images/sightseeing/Varanasi/Kashi_Vishwanath_Temple.jpg',
      '/images/sightseeing/Haridwar/Ganga_Aarti.jpg',
      '/images/sightseeing/Haridwar/Chandi_Devi_Temple.jpg',
    ],
  },
  'christmas-shimla-manali-package': {
    hero: '/images/sightseeing/Shimla/shimla_hero_section.jpg',
    gallery: [
      '/images/sightseeing/Manali/Manali_hero_section.jpg',
      '/images/sightseeing/Shimla/Mall_Road.jpg',
      '/images/sightseeing/Manali/Mall_Road.jpg',
    ],
  },

  // ── New August/September 2026 season pages ────────────────────────────
  'janmashtami-mathura-vrindavan-cab': {
    hero: '/images/sightseeing/Mathura_Vrindavan/Krishna_Janmabhoomi.jpg',
    gallery: [
      '/images/sightseeing/Mathura_Vrindavan/Banke_Bihari_Temple.jpg',
      '/images/sightseeing/Mathura_Vrindavan/Prem_Mandir.jpg',
      '/images/sightseeing/Mathura_Vrindavan/ISKCON_Vrindavan.jpg',
    ],
  },
  'raksha-bandhan-cab-service': {
    hero: '/images/sightseeing/Delhi/India_Gate.jpg',
    gallery: [
      '/images/sightseeing/Delhi/Delhi_hero_section.jpg',
      '/images/sightseeing/Jaipur/Hawa_Mahal.jpg',
      '/images/sightseeing/Agra/Taj_mahal.jpg',
    ],
  },
  'independence-day-weekend-packages-2026': {
    hero: '/images/sightseeing/Delhi/red_fort.jpg',
    gallery: [
      '/images/sightseeing/Delhi/India_Gate.jpg',
      '/images/sightseeing/Rishikesh/Laxman_Jhula.jpg',
      '/images/sightseeing/Delhi/Raj_Ghat.jpg',
    ],
  },
  'ganesh-chaturthi-transport': {
    hero: '/images/sightseeing/Delhi/Akshardham_Temple.jpg',
    gallery: [
      '/images/sightseeing/Delhi/Delhi_hero_section.jpg',
      '/images/tempo/17_seater.jpg',
      '/images/bus/27_SEATER_BUS.jpg',
    ],
  },
  'hariyali-teej-jaipur-cab': {
    hero: '/images/sightseeing/Jaipur/Hawa_Mahal.jpg',
    gallery: [
      '/images/sightseeing/Jaipur/Jal_Mahal.jpg',
      '/images/sightseeing/Jaipur/Johari_bazar.jpg',
      '/images/sightseeing/Jaipur/Albert_Hall_Museum.jpg',
    ],
  },
  'monsoon-road-trip-packages': {
    hero: '/images/packages/manali.webp',
    gallery: [
      '/images/sightseeing/Rishikesh/Laxman_Jhula.jpg',
      '/images/sightseeing/Manali/Manali_hero_section.jpg',
      '/images/sightseeing/Shimla/shimla_hero_section.jpg',
    ],
  },
  'monsoon-hill-station-packages': {
    hero: '/images/sightseeing/Shimla/shimla_hero_section.jpg',
    gallery: [
      '/images/sightseeing/Manali/Manali_hero_section.jpg',
      '/images/sightseeing/Shimla/Mall_Road.jpg',
      '/images/sightseeing/Shimla/jakhoo_temple.jpg',
    ],
  },
  'valley-of-flowers-trek-from-delhi': {
    hero: '/images/sightseeing/Valley_of_Flowers/Valley_of_Flowers_hero_section.jpg',
    gallery: [
      '/images/sightseeing/Valley_of_Flowers/Valley_of_Flowers.jpg',
      '/images/sightseeing/Valley_of_Flowers/Hemkund_Sahib.jpg',
      '/images/sightseeing/Rishikesh/Rishikesh_hero_section.jpg',
    ],
  },
  'spiti-valley-august-trip': {
    hero: '/images/sightseeing/Spiti_Valley/langza.jpeg',
    gallery: [
      '/images/sightseeing/Shimla/shimla_hero_section.jpg',
      '/images/sightseeing/Manali/Manali_hero_section.jpg',
      '/images/sightseeing/Ladakh/Magnetic_Hill.jpg',
    ],
  },
  'kashmir-in-september': {
    hero: '/images/sightseeing/Srinagar/Dal_Lake.jpg',
    gallery: [
      '/images/sightseeing/Srinagar/Dal_Lake_Shikara.jpg',
      '/images/sightseeing/Srinagar/Mughal_Gardens.jpg',
      '/images/sightseeing/Srinagar/Hazratbal.jpg',
    ],
  },
  'leh-ladakh-august-september-trip': {
    hero: '/images/sightseeing/Ladakh/Pangong_Lake.jpg',
    gallery: [
      '/images/sightseeing/Ladakh/Khardung_La.jpg',
      '/images/sightseeing/Ladakh/Leh_Palace.jpg',
      '/images/sightseeing/Ladakh/Magnetic_Hill.jpg',
    ],
  },
  'chardham-yatra-september-2026': {
    hero: '/images/chardham/chardham-yatra-delhi-hero.png',
    gallery: [
      '/images/sightseeing/Char_Dham/Kedarnath_Temple.jpg',
      '/images/sightseeing/Char_Dham/Badrinath_Temple.jpg',
      '/images/sightseeing/Char_Dham/Gangotri_Temple.jpg',
    ],
  },
  'kedarnath-september-trip': {
    hero: '/images/chardham/kedarnath-hero.png',
    gallery: [
      '/images/sightseeing/Char_Dham/Kedarnath_Temple.jpg',
      '/images/sightseeing/Haridwar/Har_Ki_Pauri.jpg',
      '/images/sightseeing/Char_Dham/Chardham_hero_section.jpg',
    ],
  },
  'august-long-weekend-getaways-delhi': {
    hero: '/images/sightseeing/Rishikesh/Rishikesh_hero_section.jpg',
    gallery: [
      '/images/sightseeing/Rishikesh/Laxman_Jhula.jpg',
      '/images/sightseeing/Agra/Taj_mahal.jpg',
      '/images/sightseeing/Shimla/shimla_hero_section.jpg',
    ],
  },
  'september-long-weekend-trips-2026': {
    hero: '/images/sightseeing/Mathura_Vrindavan/mathura_vrindvan_hero_image.png',
    gallery: [
      '/images/sightseeing/Mathura_Vrindavan/Banke_Bihari_Temple.jpg',
      '/images/chardham/chardham-yatra-delhi-hero.png',
      '/images/sightseeing/Shimla/shimla_hero_section.jpg',
    ],
  },
};

// Vehicle photos for the fare cards — the client previously rendered icons only,
// even though the real fleet imagery has always been in /public.
export const VEHICLE_IMAGES = {
  Sedan: '/images/car/swift_dzire.jpg',
  SUV: '/images/car/ertiga.jpg',
  'Tempo Traveller': '/images/tempo/17_seater.jpg',
};

export function getSeasonImages(slug) {
  return SEASON_IMAGES[slug] || null;
}
