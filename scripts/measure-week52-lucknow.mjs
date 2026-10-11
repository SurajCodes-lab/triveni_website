import puppeteer from 'puppeteer-core';
import lighthouse from 'lighthouse';
import desktopConfig from 'lighthouse/core/config/desktop-config.js';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
const phase=process.argv[2]||'before';
const out=path.join(os.tmpdir(),'week52-lucknow',phase);fs.mkdirSync(out,{recursive:true});
const browser=await puppeteer.launch({executablePath:'C:/Program Files/Google/Chrome/Application/chrome.exe',headless:true});
const results=[];
try{
 const port=Number(new URL(browser.wsEndpoint()).port);
 const routes=process.env.W52_ROUTES?process.env.W52_ROUTES.split(','):['/lucknow','/sightseeing/lucknow'];
 const devices=process.env.W52_DEVICES?process.env.W52_DEVICES.split(','):['mobile','desktop'];
 for(const route of routes)for(const device of devices)for(let run=1;run<=3;run++){
  const result=await lighthouse(`http://127.0.0.1:${process.env.W52_PORT || '3152'}${route}`,{port,output:'json',onlyCategories:['performance'],logLevel:'error'},device==='desktop'?desktopConfig:undefined);
  const lhr=result.lhr;fs.writeFileSync(path.join(out,`${route.slice(1).replaceAll('/','-')}-${device}-${run}.json`),result.report);
  const row={route,device,run,lcp:lhr.audits['largest-contentful-paint'].numericValue,cls:lhr.audits['cumulative-layout-shift'].numericValue,tbt:lhr.audits['total-blocking-time'].numericValue,score:lhr.categories.performance.score,error:lhr.runtimeError||null,lighthouse:lhr.lighthouseVersion,environment:lhr.environment};
  results.push(row);fs.writeFileSync(path.join(out,'summary.json'),JSON.stringify(results,null,2));console.log(JSON.stringify(row));
 }
}finally{await browser.close();}
