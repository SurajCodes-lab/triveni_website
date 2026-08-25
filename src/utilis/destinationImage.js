// src/utilis/destinationImage.js
// Resolve a route destination name → a relevant, on-disk hero image of THAT
// destination (so a "Delhi to Manali" page shows Manali, not a shared generic
// vehicle shot). Composite destinations ("Shimla Manali", "Agra Mathura
// Vrindavan") resolve to the longest matching known place. Falls back to a
// per-variant default so we never 404. Pure module — safe for server + client.

import { tempoCities } from './tempoTravellerData';

// Curated keyword → verified image path. Checked against /public on disk.
// Order matters only for ties; matching uses longest-keyword-wins below.
const DEST_IMAGE_MAP = {
  // Wildlife
  'jim corbett': '/images/sightseeing/Jim_Corbett/Jim_corbett_hero_section.jpg',
  'corbett': '/images/sightseeing/Jim_Corbett/Jim_corbett_hero_section.jpg',
  'ranthambore': '/images/sightseeing/Ranthambore/Ranthambore%20Fort.jpg',
  // Hills
  'mussoorie': '/images/sightseeing/Mussoorie/Mussorrie_hero_section.jpg',
  'dalhousie': '/images/sightseeing/Dalhousie/dalhousie_hero_section.jpg',
  'dharamshala': '/images/sightseeing/Dharamshala/Dharamshala_hero_section.jpg',
  'mcleodganj': '/images/sightseeing/Dharamshala/McLeod_Ganj.jpg',
  'khajjiar': '/images/sightseeing/Dalhousie/Khajjiar_Meadow.jpg',
  'kasol': '/images/sightseeing/Kasol/Kasol_hero_section.jpg',
  'manikaran': '/images/sightseeing/Kasol/Manikaran_Sahib.jpg',
  'kheerganga': '/images/sightseeing/Kasol/Chalal_Trek.jpg',
  'kullu': '/images/sightseeing/Manali/Manali_hero_section.jpg',
  'manali': '/images/sightseeing/Manali/Manali_hero_section.jpg',
  'shimla': '/images/sightseeing/Shimla/shimla_hero_section.jpg',
  'kufri': '/images/sightseeing/Shimla/shimla_hero_section.jpg',
  'narkanda': '/images/sightseeing/Shimla/shimla_hero_section.jpg',
  'nainital': '/images/sightseeing/Nainital/Nainital_hero_section.jpg',
  'bhimtal': '/images/sightseeing/Nainital/Bhimtal_Lake.jpg',
  'sattal': '/images/sightseeing/Nainital/Naukuchiatal_Lake.jpg',
  'naukuchiatal': '/images/sightseeing/Nainital/Naukuchiatal_Lake.jpg',
  'mukteshwar': '/images/sightseeing/Nainital/Naina_Peak.jpg',
  'ranikhet': '/images/sightseeing/Nainital/Snow_View_Point.jpg',
  'kausani': '/images/sightseeing/Nainital/Snow_View_Point.jpg',
  'almora': '/images/sightseeing/Nainital/Naina_devi_temple.jpg',
  'jageshwar': '/images/sightseeing/Nainital/Naina_devi_temple.jpg',
  'mount abu': '/images/sightseeing/Mount_Abu/mount_abu_hero_section.jpg',
  'neemrana': '/images/sightseeing/Neemrana/Neemrana_hero_section.jpg',
  'spiti': '/images/sightseeing/Spiti_Valley/langza.jpeg',
  'leh': '/images/sightseeing/Ladakh/Leh_Palace.jpg',
  'ladakh': '/images/sightseeing/Ladakh/Ladakh_hero_section.jpg',
  'nubra': '/images/sightseeing/Ladakh/Nubra_Valley.jpg',
  'khardung': '/images/sightseeing/Ladakh/Khardung_La.jpg',
  'pangong': '/images/sightseeing/Ladakh/Pangong_Lake.jpg',
  'kashmir': '/images/packages/kashmir.webp',
  'gulmarg': '/images/packages/kashmir.webp',
  'pahalgam': '/images/packages/kashmir.webp',
  'auli': '/images/sightseeing/Spiti_Valley/langza.jpeg',
  'chopta': '/images/sightseeing/Spiti_Valley/langza.jpeg',
  'tungnath': '/images/sightseeing/Spiti_Valley/langza.jpeg',
  'dhanaulti': '/images/sightseeing/Mussoorie/Mussorrie_hero_section.jpg',
  'kanatal': '/images/sightseeing/Mussoorie/Mussorrie_hero_section.jpg',
  'chamba': '/images/sightseeing/Dalhousie/Khajjiar_Meadow.jpg',
  // Char Dham / yatra
  'char dham': '/images/sightseeing/Char_Dham/Chardham_hero_section.jpg',
  'chardham': '/images/sightseeing/Char_Dham/Chardham_hero_section.jpg',
  'kedarnath': '/images/sightseeing/Char_Dham/Kedarnath_Temple.jpg',
  'badrinath': '/images/sightseeing/Char_Dham/Badrinath_Temple.jpg',
  'gangotri': '/images/sightseeing/Char_Dham/Gangotri_Temple.jpg',
  'yamunotri': '/images/sightseeing/Char_Dham/Yamunotri_Temple.jpg',
  'vaishno devi': '/images/sightseeing/Vaishno_Devi/Vaishno_Devi_hero_section.jpg',
  'katra': '/images/sightseeing/Vaishno_Devi/Vaishno_Devi_hero_section.jpg',
  'devi': '/images/sightseeing/Vaishno_Devi/Vaishno_Devi_hero_section.jpg',
  // Spiritual
  'mathura': '/images/sightseeing/Mathura_Vrindavan/mathura_vrindvan_hero_image.webp',
  'vrindavan': '/images/sightseeing/Mathura_Vrindavan/Prem_Mandir.jpg',
  'gokul': '/images/sightseeing/Mathura_Vrindavan/Banke_Bihari_Temple.jpg',
  'govardhan': '/images/sightseeing/Mathura_Vrindavan/Govardhan_Hill.jpg',
  'barsana': '/images/sightseeing/Mathura_Vrindavan/Banke_Bihari_Temple.jpg',
  'nandgaon': '/images/sightseeing/Mathura_Vrindavan/Banke_Bihari_Temple.jpg',
  'ayodhya': '/images/sightseeing/Ayodhya/Ram_Mandir.jpg',
  'varanasi': '/images/sightseeing/Varanasi/varanasi_hero_section.jpg',
  'sarnath': '/images/sightseeing/Varanasi/Sarnath.jpg',
  'prayagraj': '/images/sightseeing/Varanasi/varanasi_hero_section.jpg',
  'chitrakoot': '/images/sightseeing/Varanasi/varanasi_hero_section.jpg',
  'gaya': '/images/sightseeing/Varanasi/varanasi_hero_section.jpg',
  'naimisharanya': '/images/sightseeing/Varanasi/varanasi_hero_section.jpg',
  'haridwar': '/images/sightseeing/Haridwar/Har_Ki_Pauri.jpg',
  'rishikesh': '/images/sightseeing/Rishikesh/Laxman_Jhula.jpg',
  'dehradun': '/images/sightseeing/Dehradun/Sahastradhara.jpg',
  // Rajasthan
  'jaipur': '/images/sightseeing/Jaipur/jaipur_hero_section_image.jpg',
  'jodhpur': '/images/sightseeing/Jodhpur/Mehrangarh%20Fort.jpg',
  'jaisalmer': '/images/packages/rajasthan.webp',
  'udaipur': '/images/sightseeing/Udaipur/Udaipur_hero_section.jpg',
  'bikaner': '/images/sightseeing/Bikaner/Bikaner_hero_section.jpg',
  'pushkar': '/images/sightseeing/Ajmer_Pushkar/Pushkar_Lake_Ghats.jpg',
  'ajmer': '/images/sightseeing/Ajmer_Pushkar/Ajmer_shariff_hero_section.jpg',
  'chittorgarh': '/images/sightseeing/Chittorgarh/chittogarh_hero_section.jpg',
  'mount': '/images/sightseeing/Mount_Abu/mount_abu_hero_section.jpg',
  // Metro / Golden Triangle
  'agra': '/images/sightseeing/Agra/Agra_Hero_section.jpg',
  'fatehpur': '/images/sightseeing/Agra/Fathepur_shikiri.jpg',
  'delhi': '/images/sightseeing/Delhi/Delhi_hero_section.jpg',
  'chandigarh': '/images/sightseeing/Chandigarh/Chandigarh_hero_section.jpg',
  'amritsar': '/images/sightseeing/Amritsar/Golden_Temple.jpg',
  'wagah': '/images/sightseeing/Amritsar/Wagah_Border.jpg',
  'ahmedabad': '/images/sightseeing/Ahmedabad/Sabarmati_Ashram.jpg',
  'statue of unity': '/images/sightseeing/Ahmedabad/Sabarmati_Ashram.jpg',
  'lucknow': '/images/sightseeing/Varanasi/varanasi_hero_section.jpg',
  'gorakhpur': '/images/sightseeing/Varanasi/varanasi_hero_section.jpg',
  'goa': '/images/packages/goa.webp',
};

const VARIANT_DEFAULT = {
  hills: '/images/sightseeing/Manali/Manali_hero_section.jpg',
  wildlife: '/images/sightseeing/Jim_Corbett/Jim_corbett_hero_section.jpg',
  chardham: '/images/sightseeing/Char_Dham/Chardham_hero_section.jpg',
  rajasthan: '/images/packages/rajasthan.webp',
  spiritual: '/images/sightseeing/Varanasi/varanasi_hero_section.jpg',
  golden: '/images/sightseeing/Agra/Agra_Hero_section.jpg',
  metro: '/images/sightseeing/Delhi/Delhi_hero_section.jpg',
};

// Longest-keyword-wins so composite destinations resolve to the most specific
// place (e.g. "Agra Mathura Vrindavan" → Vrindavan, not Agra).
export function resolveDestinationImage(destinationName, variantKey = 'metro') {
  const t = (destinationName || '').toLowerCase();
  let best = null;
  let bestLen = 0;
  if (t) {
    for (const [kw, img] of Object.entries(DEST_IMAGE_MAP)) {
      if (t.includes(kw) && kw.length > bestLen) { best = img; bestLen = kw.length; }
    }
    if (!best) {
      for (const c of Object.values(tempoCities)) {
        const n = (c.name || '').toLowerCase();
        if (n && t.includes(n) && n.length > bestLen) { best = c.image; bestLen = n.length; }
      }
    }
  }
  return best || VARIANT_DEFAULT[variantKey] || VARIANT_DEFAULT.metro;
}

export { DEST_IMAGE_MAP, VARIANT_DEFAULT };