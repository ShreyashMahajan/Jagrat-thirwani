/**
 * Analytics — wire to Google Analytics, Meta Pixel, etc.
 * Track: CTA clicks, scroll depth, form submissions, reel clicks.
 */

export function trackEvent(
  name: string,
  params?: Record<string, string | number>
) {
  if (typeof window === "undefined") return;
  // gtag('event', name, params);
  // fbq('track', name, params);
  if (process.env.NODE_ENV === "development") {
    console.log("[analytics]", name, params);
  }
}

export function trackCTA(label: string, destination: string) {
  trackEvent("cta_click", { label, destination });
}

export function trackFormSubmit(inquiryType: string) {
  trackEvent("form_submit", { inquiry_type: inquiryType });
}

export function trackScrollDepth(section: string) {
  trackEvent("scroll_depth", { section });
}
