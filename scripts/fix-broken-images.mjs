#!/usr/bin/env node
// Replace broken /images/X-hero.jpg references with correct sightseeing paths.

import { readFileSync, writeFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const REPLACEMENTS = [
  ['/images/taj-mahal-hero.jpg', '/images/sightseeing/Agra/Taj_mahal.jpg'],
  ['/images/jaipur-hero.jpg', '/images/sightseeing/Jaipur/jaipur_hero_section_image.jpg'],
  ['/images/lucknow-hero.jpg', '/images/sightseeing/Lucknow/Lucknow_hero_section.jpg'],
  ['/images/manali-hero.jpg', '/images/sightseeing/Manali/Manali_hero_section.jpg'],
  ['/images/rishikesh-hero.jpg', '/images/sightseeing/Rishikesh/Rishikesh_hero_section.jpg'],
  ['/images/shimla-hero.jpg', '/images/sightseeing/Shimla/shimla_hero_section.jpg'],
  ['/images/udaipur-hero.jpg', '/images/sightseeing/Udaipur/Udaipur_hero_section.jpg'],
  ['/images/varanasi-hero.jpg', '/images/sightseeing/Varanasi/varanasi_hero_section.jpg'],
  ['/images/delhi-hero.jpg', '/images/sightseeing/Delhi/Delhi_hero_section.jpg'],
  ['/images/dharamshala-hero.jpg', '/images/sightseeing/Dharamshala/Dharamshala_hero_section.jpg'],
  ['/images/haridwar-hero.jpg', '/images/sightseeing/Haridwar/Haridwar_hero_section.jpg'],
  ['/images/jaisalmer-hero.jpg', '/images/sightseeing/Jaisalmer/Jaisalmer_hero_section.jpg'],
  ['/images/jodhpur-hero.jpg', '/images/sightseeing/Jodhpur/Mehrangarh Fort.jpg'],
  ['/images/kashmir-hero.jpg', '/images/sightseeing/Kashmir_Valley/Kashmir_Valley_hero_section.jpg'],
  ['/images/mathura-vrindavan-hero.jpg', '/images/sightseeing/Mathura_Vrindavan/mathura_vrindvan_hero_image.png'],
  ['/images/mussoorie-hero.jpg', '/images/sightseeing/Mussoorie/Mussorrie_hero_section.jpg'],
  ['/images/nainital-hero.jpg', '/images/sightseeing/Nainital/Nainital_hero_section.jpg'],
  ['/images/sightseeing/Ayodhya/Ayodhya_Hero_section.jpg', '/images/sightseeing/Ayodhya/ayodha_hero_section.jpg'],
];

const ROOTS = ['src/app/(routes)', 'src/components', 'src/utilis', 'src/lib'];

function walk(dir, out = []) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    const s = statSync(p);
    if (s.isDirectory()) walk(p, out);
    else if (/\.(js|jsx|tsx|ts)$/.test(name)) out.push(p);
  }
  return out;
}

const files = [];
for (const r of ROOTS) walk(r, files);

let modifiedFiles = 0, totalReplacements = 0;
for (const f of files) {
  let src = readFileSync(f, 'utf8');
  let changed = false;
  for (const [from, to] of REPLACEMENTS) {
    if (src.includes(from)) {
      const count = src.split(from).length - 1;
      src = src.split(from).join(to);
      totalReplacements += count;
      changed = true;
    }
  }
  if (changed) {
    writeFileSync(f, src);
    modifiedFiles++;
  }
}

console.log(`Modified: ${modifiedFiles} files, ${totalReplacements} replacements`);
