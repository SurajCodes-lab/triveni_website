// Bulk-update factory-based airport-to-X page.js files to use the new
// getAirportRouteServiceSchema helper (adds aggregateRating + reviews).
// Idempotent: skips files already migrated.

import { readFileSync, writeFileSync } from 'fs';
import { execSync } from 'child_process';

const files = execSync('grep -rl "getAirportRouteMetadata(SLUG)" "src/app/(routes)" --include="page.js"')
  .toString().trim().split(/\r?\n/).filter(Boolean);

let migrated = 0, skipped = 0;
for (const file of files) {
  let src = readFileSync(file, 'utf8');
  if (src.includes('getAirportRouteServiceSchema')) { skipped++; continue; }

  // Update import line
  src = src.replace(
    /import\s+\{\s*airportRoutes,\s*getRelatedRoutes,\s*getAirportRouteMetadata\s*\}\s+from\s+'@\/utilis\/airportOutstationData';/,
    `import { airportRoutes, getRelatedRoutes, getAirportRouteMetadata, getAirportRouteServiceSchema } from '@/utilis/airportOutstationData';`
  );

  // Replace inline serviceSchema with helper call. Match either single-line or multi-line forms.
  // Pattern A: const serviceSchema = { ... }; on single line
  src = src.replace(
    /const serviceSchema = \{[^;]*"areaServed":[^;]*\};/s,
    `const serviceSchema = getAirportRouteServiceSchema(SLUG);`
  );

  writeFileSync(file, src);
  migrated++;
}

console.log(`Migrated: ${migrated} | Skipped (already done): ${skipped}`);
