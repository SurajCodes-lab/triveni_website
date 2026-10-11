// Executes current tracking helpers in a sandbox with no network or real users.
// This protects the existing event contract; it does not verify Google delivery.
const fs = require('node:fs');
const vm = require('node:vm');
const assert = require('node:assert/strict');
const { transformSync } = require('next/dist/build/swc');
const path = require('node:path');
const root = path.resolve(__dirname, '..');
const source = fs.readFileSync(path.join(root, 'src/utilis/analytics.js'), 'utf8');
const code = transformSync(source, { filename: 'analytics.js', jsc: { parser: { syntax: 'ecmascript' } }, module: { type: 'commonjs' } }).code;
const events = [], leads = [], storage = new Map();
const context = {
  module: { exports: {} }, URL, console, Date, Math,
  process: { env: { NODE_ENV: 'test' } },
  navigator: { userAgent: 'Mozilla/5.0 Chrome/140.0.0.0 Safari/537.36', languages: ['en-IN'], webdriver: false },
  document: { title: 'Test fixture', referrer: '', visibilityState: 'visible', addEventListener() {}, removeEventListener() {} },
  window: {
    location: { href: 'https://www.trivenicabs.in/delhi-to-agra', pathname: '/delhi-to-agra' },
    gtag: (...args) => events.push(args),
    sessionStorage: { getItem: k => storage.get(k), setItem: (k, v) => storage.set(k, v) },
  },
  fetch: async (url, args) => { leads.push({ url, body: JSON.parse(args.body) }); return { ok: true }; },
  setTimeout() { return 1; }, clearTimeout() {},
};
context.exports = context.module.exports;
vm.runInNewContext(code, context, { filename: 'analytics.js' });
const api = context.module.exports;
api.trackPhoneCall('baseline_fixture', 'test-phone');
assert(events.some(e => e[0] === 'event' && e[1] === 'conversion_phone_call'));
api.trackWhatsAppClick('baseline_fixture', 'Test message');
api.trackWhatsAppClick('baseline_fixture', 'Test message');
assert.equal(events.filter(e => e[1] === 'whatsapp_click').length, 1);
assert.equal(events.filter(e => e[1] === 'whatsapp_repeat_click').length, 1);
assert.equal(events.filter(e => e[1] === 'whatsapp_message_sent').length, 0);
api.trackFormSubmission('quick_enquiry', { name: 'Fixture', phone: 'test-phone', email: 'test@example.invalid', message: 'fixture', serviceType: 'corridor' });
const form = events.find(e => e[1] === 'conversion_form_submission');
assert(form);
for (const key of ['name', 'phone', 'email', 'message']) assert.equal(form[2][key], undefined);
assert.equal(form[2].service_type, 'corridor');
context.window.gtag = undefined;
assert.doesNotThrow(() => api.trackEvent('fixture_without_gtag'));
const layout = fs.readFileSync(path.join(root, 'src/app/layout.js'), 'utf8');
assert(/id="ga4-lib"\s+strategy="afterInteractive"/.test(layout));
for (const marker of ['analytics-bootstrap', 'ga-init', 'gtm-loader', 'GA_MEASUREMENT_ID', 'AW-17336319883']) assert(layout.includes(marker), marker);
console.log('PASS: phone event, WhatsApp intent/dedup, form event/redaction, unavailable gtag safety, and existing GA4 loading strategy.');
console.log('No network requests sent. Google delivery, Ads attribution and actual bookings are not verified by this test.');
