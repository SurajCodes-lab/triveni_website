const fs=require('node:fs');
const before=JSON.parse(fs.readFileSync('reports/week48/week-48-audit-before.json','utf8'));
const after=JSON.parse(fs.readFileSync('reports/week48/week-48-audit-after.json','utf8'));
const {load}=require('./week48-source-loader.cjs');
const airportPaths=new Set(Object.keys(load('src/utilis/airportOutstationData.js').airportRoutes).map(p=>'/'+p));
const corporatePaths=new Set(load('src/utilis/corporateComboData.js').getCorporateComboParams().map(p=>`/corporate-transportation-service/${p.city}/${p.sub}`));
const groups={
  'All rendered pages':()=>true,
  'Airport transfers':p=>airportPaths.has(p),
  'Airport hubs':p=>/^\/airport-service\/[^/]+$/.test(p),
  'Airport terminals':p=>/^\/airport-service\/[^/]+\/[^/]+$/.test(p),
  'How to reach':p=>p.startsWith('/how-to-reach/'),
  'Best time':p=>p.startsWith('/best-time-to-visit/'),
  'Local taxi':p=>p.startsWith('/local-taxi/'),
  'Travel options':p=>p.startsWith('/travel-options/'),
  'Corporate combinations':p=>corporatePaths.has(p),
  'Event combinations':p=>/^\/event-transportation-service\/(?!city\/)[^/]+\/[^/]+$/.test(p),
  'Sightseeing':p=>p.startsWith('/sightseeing/'),
};
function summarize(data,predicate) {
  const pages=data.filter(p=>predicate(p.path));
  return {pages:pages.length,answerPages:pages.filter(p=>p.answers>0).length,tablePages:pages.filter(p=>p.tables>0).length,datedPages:pages.filter(p=>p.dates>0).length,meanWords:Math.round(pages.reduce((n,p)=>n+p.words,0)/Math.max(1,pages.length)),meanImages:+(pages.reduce((n,p)=>n+p.images,0)/Math.max(1,pages.length)).toFixed(1)};
}
const comparison=Object.fromEntries(Object.entries(groups).map(([name,predicate])=>[name,{before:summarize(before,predicate),after:summarize(after,predicate)}]));
fs.writeFileSync('reports/week48/week-48-audit-comparison.json',JSON.stringify(comparison,null,2)+'\n');
console.log(JSON.stringify(comparison,null,2));
