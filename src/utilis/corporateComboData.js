// src/utilis/corporateComboData.js
// City × (Industry | Use-case) combo pages for the corporate segment.
// Route: /corporate-transportation-service/[city]/[sub]
//   e.g. /corporate-transportation-service/gurgaon/it-companies
//        /corporate-transportation-service/noida/employee-pick-drop
// 9 cities × (9 industries + 5 use-cases) = 126 combo pages.
import {
  getAllCorporateSlugs,
  getCorporateCityBySlug,
} from "@/utilis/corporateTransportData";
import {
  getAllIndustrySlugs,
  getIndustryBySlug,
} from "@/utilis/corporateIndustryData";
import {
  getAllUseCaseSlugs,
  getUseCaseBySlug,
} from "@/utilis/corporateUseCaseData";

export function getCorporateSubSlugs() {
  return [...getAllIndustrySlugs(), ...getAllUseCaseSlugs()];
}

export function getCorporateComboParams() {
  const cities = getAllCorporateSlugs();
  const subs = getCorporateSubSlugs();
  const params = [];
  for (const city of cities) {
    for (const sub of subs) {
      params.push({ city, sub });
    }
  }
  return params;
}

export function getCorporateCombo(citySlug, subSlug) {
  const city = getCorporateCityBySlug(String(citySlug || "").toLowerCase());
  if (!city) return null;
  const c = String(subSlug || "").toLowerCase();
  const industry = getIndustryBySlug(c);
  if (industry) {
    return { city, citySlug: city.slug, subSlug: c, kind: "industry", item: industry };
  }
  const useCase = getUseCaseBySlug(c);
  if (useCase) {
    return { city, citySlug: city.slug, subSlug: c, kind: "usecase", item: useCase };
  }
  return null;
}
