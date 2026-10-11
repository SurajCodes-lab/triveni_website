// src/utilis/guides/week48/index.js
//
// Registry of the twenty-five Week 48 guides. Each guide is one data file in
// this folder; the route files under src/app/(routes)/<slug>/page.js are a
// few lines each and render <GuidePage guide={...}/>. Two of the guides
// (best time to visit Kasol and Amritsar) are published onto their existing
// /best-time-to-visit/<destination> URLs rather than beside them — see
// getWeek48GuideByPath(), used by that route.

import { guide as weekendGetawaysNearMe } from './weekendGetawaysNearMe';
import { guide as placesToVisitNearMe } from './placesToVisitNearMe';
import { guide as weekendGetawaysFromGurgaon } from './weekendGetawaysFromGurgaon';
import { guide as noidaWeekendTrips } from './noidaWeekendTrips';
import { guide as hillStationsNearAmritsar } from './hillStationsNearAmritsar';
import { guide as hillStationsNearHaridwarRishikesh } from './hillStationsNearHaridwarRishikesh';
import { guide as hillStationsNearGurgaonNoida } from './hillStationsNearGurgaonNoida';
import { guide as touristPlacesWithin100KmAgra } from './touristPlacesWithin100KmAgra';
import { guide as touristPlacesWithin50KmAmritsarHaridwar } from './touristPlacesWithin50KmAmritsarHaridwar';
import { guide as ghaziabadGreaterNoidaWeekendDrives } from './ghaziabadGreaterNoidaWeekendDrives';
import { guide as navratriVaishnoDeviByRoad } from './navratriVaishnoDeviByRoad';
import { guide as deepotsavAyodhya2026 } from './deepotsavAyodhya2026';
import { guide as devDeepawaliVaranasi2026 } from './devDeepawaliVaranasi2026';
import { guide as pushkarMela2026ByCar } from './pushkarMela2026ByCar';
import { guide as chhathPujaVaranasiGhatGuide } from './chhathPujaVaranasiGhatGuide';
import { guide as kulluDussehra2026ByCar } from './kulluDussehra2026ByCar';
import { guide as diwaliTourPackages2026FromDelhi } from './diwaliTourPackages2026FromDelhi';
import { guide as bestCarForWedding2026 } from './bestCarForWedding2026';
import { guide as delhiToSrinagarByRoad } from './delhiToSrinagarByRoad';
import { guide as delhiToRishikeshShortestRoute } from './delhiToRishikeshShortestRoute';
import { guide as delhiToVaranasiBestRoute } from './delhiToVaranasiBestRoute';
import { guide as howToReachKazaFromDelhi } from './howToReachKazaFromDelhi';
import { guide as dalhousieDharamshalaCircuit } from './dalhousieDharamshalaCircuit';
import { guide as bestTimeToVisitKasol } from './bestTimeToVisitKasol';
import { guide as bestTimeToVisitAmritsar } from './bestTimeToVisitAmritsar';

export const WEEK48_GUIDES = [
  // The "near me" and weekend cluster — road-trip board
  weekendGetawaysNearMe,
  placesToVisitNearMe,
  weekendGetawaysFromGurgaon,
  noidaWeekendTrips,
  hillStationsNearAmritsar,
  hillStationsNearHaridwarRishikesh,
  hillStationsNearGurgaonNoida,
  touristPlacesWithin100KmAgra,
  touristPlacesWithin50KmAmritsarHaridwar,
  ghaziabadGreaterNoidaWeekendDrives,
  // The season — festival night
  navratriVaishnoDeviByRoad,
  deepotsavAyodhya2026,
  devDeepawaliVaranasi2026,
  pushkarMela2026ByCar,
  chhathPujaVaranasiGhatGuide,
  kulluDussehra2026ByCar,
  diwaliTourPackages2026FromDelhi,
  bestCarForWedding2026,
  // Road and route — highway log
  delhiToSrinagarByRoad,
  delhiToRishikeshShortestRoute,
  delhiToVaranasiBestRoute,
  howToReachKazaFromDelhi,
  dalhousieDharamshalaCircuit,
  bestTimeToVisitKasol,
  bestTimeToVisitAmritsar,
];

const BY_SLUG = new Map(WEEK48_GUIDES.map((g) => [g.slug, g]));
const BY_PATH = new Map(WEEK48_GUIDES.map((g) => [g.path, g]));

export function getWeek48Guide(slug) {
  return BY_SLUG.get(slug) || null;
}

export function getWeek48GuideByPath(path) {
  return BY_PATH.get(path) || null;
}

/** Root-level guides that are new URLs (the two best-time rebuilds live in their family route). */
export const WEEK48_NEW_PATHS = WEEK48_GUIDES.filter((g) => !g.inPlace).map((g) => g.path);
