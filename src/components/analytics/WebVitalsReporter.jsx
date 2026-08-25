'use client';

import { useEffect } from 'react';
// Attribution build — each metric carries `.attribution` (LCP element/URL,
// INP target/type, CLS largest-shift target) so we can diagnose field CWV
// regressions to a specific element, not just a number.
import { onLCP, onINP, onCLS, onFCP, onTTFB } from 'web-vitals/attribution';
import { trackPerformance, trackEvent } from '@/utilis/analytics';

/**
 * Collects field Core Web Vitals (LCP, INP, CLS, FCP, TTFB) from real users
 * and reports them to GA4 as `performance_metric` events via the existing
 * `trackPerformance` helper (previously dead code).
 *
 * This is the *field* signal Google uses for ranking — Lighthouse is only lab.
 * A second `performance_metric_detail` event carries the attribution (LCP
 * element selector / URL, INP target) so regressions are diagnosable.
 *
 * web-vitals reports each metric once when it finalises (LCP/FCP/TTFB on
 * first paint / page hide; CLS/INP on `visibilitychange` to hidden).
 */
function reportMetric(metric) {
  // Core numeric value → performance_metric (the existing helper).
  trackPerformance(metric.name, Math.round(metric.value * 100) / 100);

  // Attribution detail → separate event so the headline metric stays clean.
  const a = metric.attribution || {};
  const detail = {
    event_category: 'performance',
    event_label: metric.name,
    metric_name: metric.name,
    metric_value: Math.round(metric.value * 100) / 100,
    metric_rating: metric.rating, // 'good' | 'needs-improvement' | 'poor'
    metric_id: metric.id,
    metric_delta: Math.round((metric.delta || 0) * 100) / 100,
    // Attribution fields vary per metric — send what's present.
    lcp_element: a.lcpElementSelector || a.element || undefined,
    lcp_url: a.lcpResourceUrl || a.url || undefined,
    inp_target: a.interactionTarget || a.target || undefined,
    inp_type: a.interactionType || undefined,
    cls_target: a.largestShiftTarget || undefined,
    ttfb: a.timeToFirstByte != null ? Math.round(a.timeToFirstByte) : undefined,
  };
  // Strip undefined keys so GA4 doesn't receive (not set) noise.
  Object.keys(detail).forEach((k) => detail[k] === undefined && delete detail[k]);
  trackEvent('performance_metric_detail', detail);
}

export default function WebVitalsReporter() {
  useEffect(() => {
    // `reportAllChanges` off — each metric fires once on finalisation (field-correct).
    onLCP(reportMetric);
    onINP(reportMetric);
    onCLS(reportMetric);
    onFCP(reportMetric);
    onTTFB(reportMetric);
  }, []);

  return null;
}