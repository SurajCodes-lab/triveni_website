// Records the actual dates of this content pass for routes using changed templates.
// Never derives freshness from the clock, build time, or filesystem mtimes.
const fs=require('node:fs');
const path=require('node:path');
const root=path.resolve(__dirname,'..');
const known=require('../src/generated/known-routes.json');
const targets=new Map([
  ['src/components/seo/FamilyFacts.jsx','2026-09-12'],
  ['src/components/airport/AirportRoutePage.jsx','2026-09-12'],
  ['src/components/airport/CityAirportServiceClient.js','2026-09-12'],
  ['src/components/airport/TerminalPageClient.jsx','2026-09-12'],
  ['src/components/events/EventVehicleClient.jsx','2026-09-13'],
  ['src/components/sightseeing/SightseeingFacts.jsx','2026-09-13'],
]);
const memo=new Map();
function changedOn(file,visiting=new Set()) {
  const rel=path.relative(root,file).replace(/\\/g,'/');
  if(targets.has(rel)) return targets.get(rel);
  if(memo.has(file)) return memo.get(file);
  if(visiting.has(file)) return null;
  visiting.add(file);
  let date=null;
  const source=fs.readFileSync(file,'utf8');
  for(const match of source.matchAll(/(?:import|export)\s+(?:[^;'"\n]+?\s+from\s+)?['"]([^'"]+)['"]/g)) {
    const name=match[1];
    if(!name.startsWith('@/') && !name.startsWith('.')) continue;
    const base=name.startsWith('@/')?path.join(root,'src',name.slice(2)):path.resolve(path.dirname(file),name);
    const resolved=['','.js','.jsx','.mjs','/index.js'].map(ext=>base+ext).find(p=>fs.existsSync(p)&&fs.statSync(p).isFile());
    if(!resolved || resolved.endsWith('.json')) continue;
    const child=changedOn(resolved,visiting);
    if(child && (!date || child>date)) date=child;
  }
  visiting.delete(file);memo.set(file,date);return date;
}
function walk(dir) {return fs.readdirSync(dir,{withFileTypes:true}).flatMap(e=>e.isDirectory()?walk(path.join(dir,e.name)):[path.join(dir,e.name)]);}
const entries={};
const {load}=require('./week48-source-loader.cjs');
const tourPaths=new Set(load('src/utilis/sightseeingData.js').getAllTours().map(t=>`/sightseeing/${t.slug}`));
const routesRoot=path.join(root,'src/app/(routes)');
for(const file of walk(routesRoot).filter(p=>p.endsWith('page.js'))) {
  const date=changedOn(file);
  if(!date) continue;
  const parts=path.relative(routesRoot,path.dirname(file)).split(path.sep);
  const pattern='^/'+parts.map(p=>p.startsWith('[')?'[^/]+':p.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')).join('/')+'$';
  const regex=new RegExp(pattern);
  for(const p of known.filter(p=>regex.test(p))) {
    if(file.replace(/\\/g,'/').endsWith('/sightseeing/[slug]/page.js') && !tourPaths.has(p)) continue;
    entries[p]=date;
  }
}
fs.writeFileSync(path.join(root,'src/generated/week48-content-updates.json'),JSON.stringify(Object.fromEntries(Object.entries(entries).sort()),null,2)+'\n');
console.log(`Recorded explicit content dates for ${Object.keys(entries).length} pages.`);
