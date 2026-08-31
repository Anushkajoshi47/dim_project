export const analyticsConfig = {
  googleAnalyticsMeasurementId: '',
};

export function initializeAnalytics() {
  const measurementId = analyticsConfig.googleAnalyticsMeasurementId;

  if (!measurementId || typeof window === 'undefined') {
    return;
  }

  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    window.dataLayer.push(arguments);
  };

  window.gtag('js', new Date());
  window.gtag('config', measurementId);
}
