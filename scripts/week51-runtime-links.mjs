#!/usr/bin/env node
// GET-only local checks. No analytics browser scripts or lead endpoints executed.
import fs from 'node:fs';
const [input, output] = process.argv.slice(2);
if (!input || !output) throw new Error('Usage: node scripts/week51-runtime-links.mjs <link-findings.json> <new-output.json>');
if (fs.existsSync(output)) throw new Error('Refusing to overwrite runtime evidence.');
const origin = 'http://127.0.0.1:3151';
const findings = JSON.parse(fs.readFileSync(input, 'utf8'));
const results = [];
async function check(finding) {
  let current = new URL(finding.href, origin);
  const hops = [];
  try {
    for (let hop = 0; hop < 8; hop++) {
      if (current.origin !== origin) throw new Error('Redirect leaves local test server; not followed.');
      const response = await fetch(current, { redirect: 'manual', signal: AbortSignal.timeout(15000) });
      hops.push({ path: current.pathname, status: response.status });
      if (response.status >= 300 && response.status < 400 && response.headers.get('location')) {
        current = new URL(response.headers.get('location'), current);
        await response.body?.cancel();
        continue;
      }
      const body = await response.text();
      return { ...finding, hops, httpStatus: response.status, notFoundMarker: /<title>[^<]*(?:404|not found)/i.test(body) || /name="robots" content="noindex"/.test(body), bytes: Buffer.byteLength(body) };
    }
    throw new Error('Redirect hop limit exceeded.');
  } catch (error) { return { ...finding, hops, error: error.message }; }
}
for (let i = 0; i < findings.length; i += 5) results.push(...await Promise.all(findings.slice(i, i + 5).map(check)));
const summary = {
  checkedAt: new Date().toISOString(), origin, evidence: 'Existing local production build served by next start; not current production.',
  checked: results.length, ok: results.filter(r => r.httpStatus === 200 && !r.notFoundMarker).length,
  notFound: results.filter(r => r.httpStatus === 404).length,
  otherOrUncertain: results.filter(r => r.error || (r.httpStatus !== 404 && (r.httpStatus !== 200 || r.notFoundMarker))).length,
};
fs.writeFileSync(output, JSON.stringify({ summary, results }, null, 2) + '\n');
console.log(JSON.stringify(summary, null, 2));
