// src/utilis/guides/week49/index.js
//
// Registry of the Week 49 route guides (Workstream B). Each guide is one data
// file in this folder in the Week 48 highway-log shape; the route files under
// src/app/(routes)/<slug>/page.js are a few lines each and render
// <GuidePage guide={...}/>. The sitemap reads WEEK49_NEW_PATHS; the guide
// composer resolves sister guides through getWeek49Guide().

import { guide as varanasiAyodhyaPrayagrajByRoad } from './varanasiAyodhyaPrayagrajByRoad';
import { guide as delhiToNainitalByCar } from './delhiToNainitalByCar';
import { guide as delhiToVrindavanByCar } from './delhiToVrindavanByCar';
import { guide as chandigarhToKasolByRoad } from './chandigarhToKasolByRoad';
import { guide as shimlaToManaliByRoad } from './shimlaToManaliByRoad';
import { guide as haridwarDehradunMussoorieByRoad } from './haridwarDehradunMussoorieByRoad';
import { guide as srinagarPahalgamGulmargByRoad } from './srinagarPahalgamGulmargByRoad';
import { guide as udaipurMountAbuChittorgarhByRoad } from './udaipurMountAbuChittorgarhByRoad';
import { guide as jaipurToUdaipurByRoad } from './jaipurToUdaipurByRoad';
import { guide as agraToJaipurByRoad } from './agraToJaipurByRoad';
import { guide as delhiToAmritsarByRoad } from './delhiToAmritsarByRoad';
import { guide as delhiToLansdowneByRoad } from './delhiToLansdowneByRoad';
import { guide as oneDayTripsFromNoida } from './oneDayTripsFromNoida';
import { guide as placesToVisitNearGurgaonRebuilt } from './placesToVisitNearGurgaonRebuilt';
import { guide as placesToVisitNearLucknowRebuilt } from './placesToVisitNearLucknowRebuilt';

export const WEEK49_GUIDES = [
  // Route guides — highway log, loudest corridor first
  varanasiAyodhyaPrayagrajByRoad,
  delhiToNainitalByCar,
  delhiToVrindavanByCar,
  chandigarhToKasolByRoad,
  shimlaToManaliByRoad,
  haridwarDehradunMussoorieByRoad,
  srinagarPahalgamGulmargByRoad,
  udaipurMountAbuChittorgarhByRoad,
  jaipurToUdaipurByRoad,
  agraToJaipurByRoad,
  delhiToAmritsarByRoad,
  delhiToLansdowneByRoad,
  // Near-city guides — road-trip board
  oneDayTripsFromNoida,
  placesToVisitNearGurgaonRebuilt,
  placesToVisitNearLucknowRebuilt,
];

const BY_SLUG = new Map(WEEK49_GUIDES.map((g) => [g.slug, g]));
const BY_PATH = new Map(WEEK49_GUIDES.map((g) => [g.path, g]));

export function getWeek49Guide(slug) {
  return BY_SLUG.get(slug) || null;
}

export function getWeek49GuideByPath(path) {
  return BY_PATH.get(path) || null;
}

/** Root-level guides that are new URLs. */
export const WEEK49_NEW_PATHS = WEEK49_GUIDES.filter((g) => !g.inPlace).map((g) => g.path);
