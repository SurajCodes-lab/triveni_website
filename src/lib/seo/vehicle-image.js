// Week 49 — resolve a vehicle description ("12-17 Seater Tempo", "Executive
// Sedan", "45 Seater Volvo") to a photograph the site already owns.
//
// Several templates print vehicle cards with a generic icon while the same
// vehicles are photographed elsewhere on the site (the fleet grids, the tempo
// and bus pages). This maps the words to those files. Every path below exists
// under public/images; an unmatched description returns null and the caller
// keeps its icon rather than showing a wrong car.

const SEATER = [
  [/\b(5[0-9]|56)\s*seat/i, '/images/bus/56_SEATER_BUS.jpg'],
  [/\b49\s*seat/i, '/images/bus/49_SEATER_BUS.jpg'],
  [/\b4[5-8]\s*seat/i, '/images/bus/45_SEATER_BUS.jpg'],
  [/\b4[1-4]\s*seat/i, '/images/bus/41_SEATER_BUS.jpg'],
  [/\b3[2-9]\s*seat/i, '/images/bus/35_SEATER_BUS.jpg'],
  [/\b2[7-9]\s*seat/i, '/images/bus/27_SEATER_BUS.jpg'],
  [/\b2[5-6]\s*seat/i, '/images/tempo/26_seater.jpg'],
  [/\b2[0-4]\s*seat/i, '/images/tempo/20_seater.jpg'],
  [/\b1[7-9]\s*seat/i, '/images/tempo/17_seater.jpg'],
  [/\b1[5-6]\s*seat/i, '/images/tempo/16_seater.jpg'],
  [/\b1[0-4]\s*seat/i, '/images/tempo/12_seater.jpg'],
];

const WORDS = [
  [/urbania|maharaja/i, '/images/tempo/20_seater.jpg'],
  [/tempo/i, '/images/tempo/17_seater.jpg'],
  [/volvo|coach|mini\s*bus|\bbus\b/i, '/images/bus/45_SEATER_BUS.jpg'],
  [/innova|crysta/i, '/images/car/innova_crysta.jpg'],
  [/ertiga/i, '/images/car/ertiga.jpg'],
  [/suv|fortuner|scorpio|xylo|marazzo/i, '/images/car/premium_suv.jpg'],
  [/sedan|dzire|amaze|aura|etios|ciaz|city\b/i, '/images/car/swift_dzire.jpg'],
  [/luxury|mercedes|bmw|audi|executive/i, '/images/car/premium_suv.jpg'],
];

/**
 * @param {...string} parts  any description of the vehicle (type, model list, capacity)
 * @returns {string|null} a path under /images, or null when nothing matches
 */
export function resolveVehicleImage(...parts) {
  const text = parts.filter(Boolean).join(' ');
  if (!text) return null;
  // A seat count is the most specific signal, and the coach/tempo split
  // follows from it, so it is read before the model words.
  const isCoach = /bus|coach|volvo/i.test(text);
  for (const [re, img] of SEATER) {
    if (re.test(text)) {
      if (!isCoach && img.startsWith('/images/bus/')) continue;
      return img;
    }
  }
  for (const [re, img] of WORDS) if (re.test(text)) return img;
  return null;
}

export default resolveVehicleImage;
