import puppeteer from 'puppeteer-core';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
const browser = await puppeteer.launch({executablePath:'C:/Program Files/Google/Chrome/Application/chrome.exe',headless:true});
try {
  const page=await browser.newPage();
  await page.goto(pathToFileURL(path.resolve('reports/week50/week50_seo_report.html')).href,{waitUntil:'load'});
  await page.pdf({path:'reports/week50/week50_seo_report.pdf',format:'A4',printBackground:true,preferCSSPageSize:true,displayHeaderFooter:true,
    headerTemplate:'<div></div>',footerTemplate:'<div style="width:100%;font:8px Arial;color:#64748b;padding:0 18mm;text-align:right">TRIVENI CABS · WEEK 50 &nbsp; | &nbsp; <span class="pageNumber"></span></div>'});
  console.log('Rendered Week 50 PDF with page numbers and no date, URL or browser headers.');
} finally {await browser.close();}
