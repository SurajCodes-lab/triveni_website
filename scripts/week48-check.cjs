const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const {load} = require('./week48-source-loader.cjs');
const {familyFacts} = load('src/components/seo/FamilyFacts.jsx');
const {renderToStaticMarkup} = require('react-dom/server');
const React = require('react');
const FamilyFacts = load('src/components/seo/FamilyFacts.jsx').default;
const datasets = [
 ['how-to-reach','howToReachRouteData','getAllHowToReachSlugs','getHowToReachRoute'],
 ['best-time','bestTimeToVisitData','getAllBestTimeSlugs','getBestTimeData'],
 ['travel-options','travelOptionsData','getAllTravelOptionsSlugs','getTravelOptionsRoute'],
 ['train-taxi','trainTaxiData','getAllTrainTaxiSlugs','getTrainTaxiRoute'],
 ['packages','packageData','getAllPackageSlugs','getPackage'],
 ['itinerary','cityItineraryData','getAllItinerarySlugs','getItinerary'],
 ['local-taxi','localTaxiCityData','getAllLocalTaxiSlugs','getLocalTaxiCity'],
 ['taxi-fare','taxiFareData','getAllTaxiFareSlugs','getTaxiFareCity'],
 ['same-day','sameDayTourData','getAllSameDayTourSlugs','getSameDayTourBySlug'],
 ['travel-by-car','travelByCarData','getAllTravelByCarSlugs','getTravelByCarRoute'],
 ['outstation','outstationCityData','getAllOutstationCitySlugs','getOutstationCity'],
 ['vehicle','vehicleHireData','getAllVehicleHireSlugs','getVehicleHireData'],
 ['event-vehicle','eventVehicleData','getAllEventVehicleSlugs','getEventVehicle'],
];
let tested=0;
const counts={};
const {getCityGallery}=load('src/utilis/imageUtils.js');
function checkFacts(family,data,slug) {
  const f=familyFacts(family,data);
  assert(f.answer,`${family}/${slug}: no answer`);
  assert(!/undefined|\[object Object\]|NaN/.test(f.answer),`${family}/${slug}: ${f.answer}`);
  if(f.rows?.length>1) for(const col of f.columns) assert(f.rows.some(r=>r[col.key] != null && r[col.key] !== ''),`${family}/${slug}: empty ${col.key} column`);
  for(const details of [false,true]) renderToStaticMarkup(React.createElement(FamilyFacts,{family,data,details}));
  if(f.city && ['packages','same-day','outstation','corporate','event'].includes(family)) {
    for(const img of getCityGallery(f.city).slice(0,4)) assert(fs.existsSync(path.join('public',decodeURIComponent(img))),`${family}/${slug}: missing ${img}`);
  }
  tested++;counts[family]=(counts[family] || 0)+1;
}
for(const [family,file,list,get] of datasets) {
  const m=load(`src/utilis/${file}.js`);
  counts[family]=0;
  for(const slug of m[list]()) {
    const data=m[get](slug);
    assert(data,`${family}/${slug}: no data`);
    checkFacts(family,data,slug);
  }
}
const corporate=load('src/utilis/corporateComboData.js');
for(const p of corporate.getCorporateComboParams()) {
  const d=corporate.getCorporateCombo(p.city,p.sub);
  checkFacts('corporate',{...d,intro:`${d.item.name} transport in ${d.city.name}.`},`${p.city}/${p.sub}`);
}
const events=load('src/utilis/eventTransportData.js');
for(const p of events.getEventComboParams()) {
  const d=events.getEventCombo(p.slug,p.city);
  checkFacts('event',{...d,intro:`${d.type.name} transport in ${d.city.name}.`},`${p.slug}/${p.city}`);
}
const {airportRoutes,getAirportRouteServiceSchema}=load('src/utilis/airportOutstationData.js');
assert.equal(Object.keys(airportRoutes).length,46);
for(const [slug,data] of Object.entries(airportRoutes)) {
  const schema=getAirportRouteServiceSchema(slug);
  assert.equal(schema.offers.length,3,slug);
  for(const offer of schema.offers) {
    assert(Number(offer.price)>0,slug);
    assert(fs.existsSync(path.join('public',new URL(offer.image).pathname)),offer.image);
  }
  assert(data.faqs.length>=5,slug);
}
const {travelByCarRoutes}=load('src/utilis/travelByCarData.js');
const {PER_KM}=load('src/utilis/pricing.js');
for(const [slug,d] of Object.entries(travelByCarRoutes)) assert.equal(d.tempoRaw,Math.max(d.totalDistance,300)*PER_KM.tempo,slug);
fs.writeFileSync('reports/week48/week-48-source-checks.json',JSON.stringify({familyRecords:tested,counts,airportRoutes:46,tempoPricingRoutes:Object.keys(travelByCarRoutes).length},null,2));
console.log(`PASS: ${tested} family records rendered; 46 airport fare schemas; ${Object.keys(travelByCarRoutes).length} Tempo pricing records.`);
