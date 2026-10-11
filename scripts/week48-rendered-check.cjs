const fs=require('node:fs');
const assert=require('node:assert/strict');
const path=require('node:path');
const {load}=require('./week48-source-loader.cjs');
const root='.next/server/app';
const html=p=>fs.readFileSync(path.join(root,p.replace(/^\//,'')+'.html'),'utf8');
const visible=s=>s.replace(/<(script|style)\b[^>]*>[\s\S]*?<\/\1>/g,'');
const schemas=s=>[...s.matchAll(/<script\b[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)].flatMap(m=>JSON.parse(m[1]));
const answer=s=>/class="[^"]*\bdirect-answer\b/.test(visible(s));
const keyFacts=s=>/<dl\b[^>]*class="[^"]*\bkey-facts\b/.test(visible(s));
const {airportRoutes}=load('src/utilis/airportOutstationData.js');
for(const [slug,data] of Object.entries(airportRoutes)) {
  const s=html(slug),v=visible(s);
  assert(answer(s)&&keyFacts(s),`${slug}: missing answer/facts`);
  assert(v.includes('<table'),`${slug}: missing table`);
  assert.equal((v.match(/class="faq-answer\b/g)||[]).length,data.faqs.length,`${slug}: missing FAQ answers`);
  const service=schemas(s).find(x=>x['@type']==='Service' && x.serviceType==='Airport Transfer');
  assert.equal(service.offers.length,3,`${slug}: missing vehicle Offers`);
}
const {getAllCitySlugs}=load('src/utilis/airportCityData.js');
for(const city of getAllCitySlugs()) {
  const s=html(`/airport-service/${city}`);
  assert(answer(s)&&keyFacts(s),`${city}: missing hub answer`);
  assert.equal((visible(s).match(/class="faq-answer\b/g)||[]).length,7,`${city}: FAQ count`);
}
const {airportTerminalData}=load('src/utilis/airportTerminalData.js');
let terminalOffers=0;
for(const t of Object.values(airportTerminalData)) {
  const s=html(t.path);
  assert(answer(s)&&keyFacts(s),`${t.path}: missing answer`);
  const service=schemas(s).find(x=>x['@type']==='Service' && Array.isArray(x.offers));
  assert(service,`${t.path}: no service offers`);
  assert.equal(service.offers.length,t.pricing.length,t.path);
  terminalOffers+=service.offers.length;
  for(const o of service.offers) assert(o.image && Number(o.price)>0,t.path);
  assert.equal((visible(s).match(/class="faq-answer\b/g)||[]).length,t.faqs.length,t.path);
}
const {directoryPaths,cityDirectory}=load('src/lib/seo/site-directory.js');
const directory=fs.readFileSync(path.join(root,'llms-full.txt.body'),'utf8');
// Week 49 appends facts after some URLs. Compare complete address tokens so
// descriptions are allowed without accepting a longer path as a match.
const indexedUrls=new Set(directory.split(/\r?\n/).map(line=>line.match(/^https:\/\/www\.trivenicabs\.in\S*/)?.[0]).filter(Boolean));
for(const p of directoryPaths) assert(indexedUrls.has(`https://www.trivenicabs.in${p}`),`Missing index path ${p}`);
const delhi=html('/delhi');
const cityLinks=cityDirectory('Delhi').flatMap(g=>g.links);
for(const link of cityLinks) assert(delhi.includes(`href="${link.href}"`),`Missing city link ${link.href}`);
const updated=require('../src/generated/week48-content-updates.json');
const {getContentUpdatedOn}=load('src/lib/seo/content-updates.js');
const sitemap=fs.readFileSync(path.join(root,'sitemap.xml.body'),'utf8');
let datesChecked=0;
for(const entry of sitemap.matchAll(/<url>([\s\S]*?)<\/url>/g)) {
  const p=entry[1].match(/<loc>https:\/\/www.trivenicabs.in([^<]*)<\/loc>/)?.[1];
  if(updated[p]) {
    const expected=getContentUpdatedOn(p);
    const actual=entry[1].match(/<lastmod>([^<]+)<\/lastmod>/)?.[1];
    assert.equal(actual?.slice(0,10),expected,`Wrong sitemap date ${p}`);
    datesChecked++;
  }
}
assert(datesChecked>500,'Content dates were not applied to sitemap');
const result={airportRoutes:46,airportHubs:getAllCitySlugs().length,terminals:9,terminalOffers,directoryPages:directoryPaths.length,delhiDirectoryLinks:cityLinks.length,sitemapDatesChecked:datesChecked};
fs.writeFileSync('reports/week48/week-48-rendered-checks.json',JSON.stringify(result,null,2)+'\n');
console.log('PASS',result);
