import fs from 'node:fs';
import path from 'node:path';
import lighthouse from 'lighthouse';
import {launch} from 'chrome-launcher';
const label=process.argv[2] || 'after';
if(!['before','after'].includes(label)) throw Error('Use before or after');
const profile=path.resolve('reports/week48/.chrome-profile');
fs.mkdirSync(profile,{recursive:true});
const chrome=await launch({userDataDir:profile,chromeFlags:['--headless=new','--no-sandbox','--disable-gpu']});
try {
  const result=await lighthouse('http://localhost:3100/sightseeing/agra-full-day-city-tour',{port:chrome.port,output:'json',onlyCategories:['performance'],logLevel:'error'});
  fs.writeFileSync(`reports/week48/week-48-sightseeing-lighthouse-${label}.json`,result.report);
  const a=result.lhr.audits;
  console.log(JSON.stringify({score:result.lhr.categories.performance.score,lcp:a['largest-contentful-paint'].numericValue,tbt:a['total-blocking-time'].numericValue,cls:a['cumulative-layout-shift'].numericValue}));
} finally {await chrome.kill();}
