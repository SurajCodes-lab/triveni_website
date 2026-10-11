import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';
import assert from 'node:assert/strict';
import crypto from 'node:crypto';
import { createRequire } from 'node:module';
import puppeteer from 'puppeteer-core';
const require = createRequire(import.meta.url);
const {load} = require('./week48-source-loader.cjs');
const posts = load('src/utilis/newBlogsWeek52.js').default;
const all = load('src/utilis/blog.js').blogPosts.filter(Boolean);
const before = JSON.parse(fs.readFileSync(path.join(os.tmpdir(),'week52-blogs-before.json')));
const out = path.join(os.tmpdir(),'week52-blog-verification');
fs.mkdirSync(out,{recursive:true});
const origin = process.env.W52_ORIGIN || 'http://127.0.0.1:3152';
const live = origin.startsWith('https:');
const results = {origin,pages:[],links:[],browser:[],preservation:{},limitations:['Enquiry forms are opened but no leads submitted.','Tracking markers and local event calls do not prove GA4 receipt or ranking gains.']};
assert.equal(posts.length,10);
assert.equal(all.length,before.count+10);
assert(before.slugs.every(s=>all.some(p=>p.slug===s)));
assert.equal(new Set(posts.map(p=>p.slug)).size,10);
assert(posts.every(p=>!before.ids.includes(p.id)));
const oldLayout=fs.readFileSync(path.join(os.tmpdir(),'week52-production-layout.js'),'utf8');
assert.equal(crypto.createHash('sha256').update(oldLayout).digest('hex'),before.layoutHash);
const withoutIcons=s=>s.replace(/  icons: \{[\s\S]*?\n  manifest:/,'  manifest:');
assert.equal(withoutIcons(fs.readFileSync('src/app/layout.js','utf8')),withoutIcons(oldLayout));
results.preservation={previousPosts:before.count,totalPosts:all.length,allPreviousSlugsRetained:true,onlyIconMetadataChanged:true,trackingCodeUnchanged:true};
const sitemap = await (await fetch(origin+'/sitemap.xml')).text();
const index = await (await fetch(origin+'/blog')).text();
for(const p of posts){
  const url='/blog/'+p.slug; const r=await fetch(origin+url); const html=await r.text();
  assert.equal(r.status,200,url);
  const visible=html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi,'');
  assert.equal((visible.match(/<h1[ >]/g)||[]).length,1,url);
  assert(html.includes(`rel="canonical" href="https://www.trivenicabs.in${url}"`),url+' canonical');
  assert(!/<meta[^>]+name="robots"[^>]+content="[^"]*noindex/.test(html),url+' noindex');
  assert(!/<h2[^>]*>Quick Links<\/h2>/.test(visible),url+' empty Quick Links section');
  assert(visible.includes('border-collapse:collapse'),url+' table borders');
  assert(visible.includes('rel="icon" href="/apple-touch-icon.png"'),url+' square PNG favicon');
  for(const marker of ['ga4-lib','ga-init','analytics-bootstrap','gtm-loader','google-site-verification'])assert(html.includes(marker),url+' '+marker);
  for(const heading of p.content.matchAll(/<h2>(.*?)<\/h2>/g))assert(visible.includes(heading[1]),url+' missing section');
  assert(sitemap.includes('https://www.trivenicabs.in'+url),url+' sitemap');
  assert(index.includes(p.slug),url+' archive');
  const schemas=[...html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)].map(m=>JSON.parse(m[1]));
  assert(schemas.some(s=>s['@type']==='BlogPosting'&&s.datePublished===p.date),url+' article schema');
  results.pages.push({url,status:r.status,canonical:true,tracking:true,sitemap:true,articleSchema:true,sections:true});
}
const links=[...new Set(posts.flatMap(p=>[...p.content.matchAll(/href="(\/[^\"]+)"/g)].map(m=>m[1])))];
for(const url of links){const r=await fetch(origin+url,{redirect:'manual'});assert.equal(r.status,200,url);await r.body?.cancel();results.links.push({url,status:r.status});}
if(!live){
 const browser=await puppeteer.launch({executablePath:'C:/Program Files/Google/Chrome/Application/chrome.exe',headless:true});
 try{
  for(const width of [390,1440])for(const p of posts){
   const page=await browser.newPage();const errors=[];page.on('pageerror',e=>errors.push(e.message));
   await page.setViewport({width,height:900});
   await page.setRequestInterception(true);
   page.on('request',r=>r.method()==='GET'&&r.url().startsWith(origin+'/')?r.continue():r.abort());
   await page.goto(origin+'/blog/'+p.slug,{waitUntil:'networkidle2'});
   await page.waitForSelector('article table');
   const check=await page.evaluate(()=>({overflow:document.documentElement.scrollWidth>innerWidth+1,heading:document.querySelector('h1')?.textContent,rows:document.querySelectorAll('article tbody tr').length,cellBorder:getComputedStyle(document.querySelector('article td')).borderTopWidth}));
   assert.equal(check.cellBorder,'1px',p.slug+' visible table grid');
   assert(!check.overflow,p.slug+' overflow '+width);assert(check.rows>=3);assert.equal(errors.length,0,errors.join(';'));
   if(p===posts[0])await (await page.$('article table')).screenshot({path:path.join(out,`table-${width}.png`)});
   const quote=await page.evaluate(()=>{const b=[...document.querySelectorAll('button')].find(b=>b.textContent.trim()==='Get Free Quote on WhatsApp');if(!b)return false;b.click();return true;});
   assert(quote,p.slug+' quote button');
   await new Promise(r=>setTimeout(r,300));
   const form=await page.evaluate(()=>[...document.querySelectorAll('input[type="tel"]')].some(e=>e.getBoundingClientRect().width>0));
   assert(form,p.slug+' quote form not visible');
   results.browser.push({slug:p.slug,width,...check,quoteFormOpened:true,errors});
   if(p===posts[0])await page.screenshot({path:path.join(out,`quote-${width}.png`)});
   await page.close();
  }
 }finally{await browser.close();}
}
fs.writeFileSync(path.join(out,live?'live.json':'local.json'),JSON.stringify(results,null,2));
console.log(JSON.stringify({origin,pages:results.pages.length,links:results.links.length,browserViews:results.browser.length,preservation:results.preservation},null,2));
