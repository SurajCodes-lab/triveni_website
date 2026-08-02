// Lead capture endpoint.
// The enquiry form POSTs here BEFORE opening WhatsApp, so every lead's
// name + phone is saved even if the user never completes the WhatsApp send.
// This route forwards the lead, server-side, to a Google Apps Script web-app
// webhook (set LEAD_WEBHOOK_URL in the environment) which appends a row to a
// Google Sheet. Server-to-server forward = no browser CORS issues, and the
// webhook URL stays private (not shipped to the client).
//
// Setup (one-time, see LEAD_CAPTURE_SETUP.md): create the Apps Script bound to
// a Sheet, deploy as Web App ("Anyone"), set LEAD_WEBHOOK_URL to that /exec URL.

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function POST(req) {
  let data = {};
  try {
    data = await req.json();
  } catch {
    return Response.json({ ok: false, error: 'bad_json' }, { status: 400 });
  }

  // type: 'form_lead' (has phone) | 'whatsapp_click' | 'whatsapp_sent' | 'phone_call'
  const type = String(data.type || 'form_lead').slice(0, 30);
  const phone = String(data.phone || '').replace(/\D/g, '');
  // A phone is required only for real form leads; WhatsApp/call events have none.
  if (type === 'form_lead' && phone.length < 10) {
    return Response.json({ ok: false, error: 'invalid_phone' }, { status: 422 });
  }

  const payload = {
    type,
    name: String(data.name || '').slice(0, 120),
    phone,
    email: String(data.email || '').slice(0, 160),
    date: String(data.date || '').slice(0, 40),
    passengers: String(data.passengers || '').slice(0, 40),
    fromCity: String(data.fromCity || '').slice(0, 120),
    toCity: String(data.toCity || '').slice(0, 120),
    pageType: String(data.pageType || '').slice(0, 60),
    source: String(data.source || '').slice(0, 300),
    flexibleDate: !!data.flexibleDate,
    // IST timestamp (Asia/Kolkata), readable in the Sheet — e.g. "13/06/2026, 09:45:30 pm".
    ts: new Date().toLocaleString('en-IN', {
      timeZone: 'Asia/Kolkata',
      day: '2-digit', month: '2-digit', year: 'numeric',
      hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true,
    }),
  };

  const url = process.env.LEAD_WEBHOOK_URL
    || 'https://script.google.com/macros/s/AKfycbwoR0Bq9uBOaPkias4K9ASOjd04OvOyInpfxCgBe9MRT73Z5cE8YaF6tU_b3rlVxM2Rwg/exec';
  if (!url) {
    // No webhook configured yet — don't lose the lead silently: log it so it's
    // at least in the server logs, and tell the client to proceed (UX must not break).
    console.warn('[lead] LEAD_WEBHOOK_URL not set — lead not persisted:', payload.phone, payload.source);
    return Response.json({ ok: false, error: 'no_webhook' }, { status: 200 });
  }

  try {
    const ctrl = new AbortController();
    const t = setTimeout(() => ctrl.abort(), 6000);
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
      signal: ctrl.signal,
    });
    clearTimeout(t);
    return Response.json({ ok: res.ok });
  } catch (e) {
    // Never block the user's WhatsApp handoff on a webhook hiccup.
    console.error('[lead] forward failed:', e?.message || e);
    return Response.json({ ok: false, error: 'forward_failed' }, { status: 200 });
  }
}
