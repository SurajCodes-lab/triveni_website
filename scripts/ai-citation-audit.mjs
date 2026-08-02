#!/usr/bin/env node
/**
 * ai-citation-audit.mjs
 *
 * Generates a CSV template for the monthly manual AI-citation audit.
 * The CSV has one row per (query, platform) combination — 20 target queries
 * × 5 platforms = 100 rows.
 *
 * Usage:
 *   node scripts/ai-citation-audit.mjs > ai-citation-baseline-YYYY-MM-DD.csv
 *
 * Then manually fill in:
 *   - cited (yes/no)
 *   - position (1-N if cited, else blank)
 *   - competing_sources (top 3 sources cited that aren't us)
 *   - notes
 *
 * Re-run monthly. Diff against last month to track citation share lift.
 *
 * Why manual: there is no programmatic API that gives us "is Triveni cited
 * on ChatGPT for this query?" — the model outputs are non-deterministic and
 * change session-to-session. Manual sampling on a fixed query list gives the
 * cleanest directional signal at zero cost.
 */

const TARGET_QUERIES = [
  // Core money queries
  'Delhi to Agra taxi cost',
  'Delhi to Jaipur one way cab fare',
  'Delhi to Chandigarh taxi price',
  'Delhi to Haridwar one way taxi',
  'Delhi to Manali taxi cost',
  'Agra taxi service near me',
  'Jaipur airport taxi',
  'Delhi IGI airport taxi fare',
  // Group / tour queries
  '12 seater vs 17 seater tempo traveller',
  'best tempo traveller for char dham',
  'Golden Triangle tour from Delhi cost',
  'Ayodhya tour from Delhi',
  'Char Dham Yatra package from Haridwar',
  // Brand + comparison
  'Triveni Cabs review',
  'Triveni Cabs Agra',
  'Innova vs Ertiga for outstation',
  'one way cab vs round trip cab',
  // Long-tail
  'how to reach Agra from Delhi by taxi',
  'best time to visit Agra Taj Mahal',
  'corporate cab service Gurgaon',
];

const PLATFORMS = ['chatgpt', 'perplexity', 'gemini', 'google_ai_overviews', 'copilot'];

const today = new Date().toISOString().slice(0, 10);

console.log('query,platform,cited,position,competing_sources,notes,audit_date');
for (const q of TARGET_QUERIES) {
  for (const p of PLATFORMS) {
    // CSV-escape the query (it may contain commas)
    const safeQ = q.includes(',') ? `"${q}"` : q;
    console.log(`${safeQ},${p},,,,,${today}`);
  }
}

console.error(`\n[ai-citation-audit] ${TARGET_QUERIES.length * PLATFORMS.length} rows emitted.`);
console.error(`Fill in: cited (yes/no), position (1-N or blank), competing_sources, notes.`);
console.error(`Save as: ai-citation-baseline-${today}.csv`);
console.error(`Re-run monthly and diff against previous month to track citation-share lift.`);
