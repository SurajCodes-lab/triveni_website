// Shared lead-capture helper — every form on the site calls this so 100% of
// leads land in the Google Sheet (via /api/lead → Apps Script), with the same
// columns, BEFORE any WhatsApp/redirect handoff. Fire-and-forget + keepalive so
// it never blocks the form's own flow.
//
// Columns written: Timestamp | Type | Name | Phone | Email | From | To |
//                  Page Type | Passengers | Date | Source
export function captureLead(data = {}) {
  if (typeof window === 'undefined') return;
  // A phone is what makes a lead followable; skip obviously empty calls.
  const phone = String(data.phone || '').replace(/\D/g, '');
  if ((data.type || 'form_lead') === 'form_lead' && phone.length < 10) return;
  try {
    fetch('/api/lead', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      keepalive: true,
      body: JSON.stringify({
        type: 'form_lead',
        source: window.location.pathname,
        ...data,
      }),
    }).catch(() => {});
  } catch { /* never block the form */ }
}

export default captureLead;
