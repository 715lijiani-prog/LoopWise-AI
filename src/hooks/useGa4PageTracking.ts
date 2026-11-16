import {useEffect} from 'react';
import {useLocation} from 'react-router-dom';

export const GA_MEASUREMENT_ID = 'G-636S9DGJ3E';

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (
      command: 'config' | 'event' | 'js' | 'set',
      targetIdOrEventName: string | Date,
      params?: Record<string, unknown>
    ) => void;
  }
}

/**
 * Fires a GA4 page_view event whenever the React Router location changes.
 * Safely guards against missing window.gtag (e.g., ad blockers or SSR).
 */
export function useGa4PageTracking(): void {
  const location = useLocation();

  useEffect(() => {
    const pagePath = `${location.pathname}${location.search}${location.hash}`;

    // Defer slightly so App's route effect has updated document.title first
    const timer = window.setTimeout(() => {
      if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
        window.gtag('event', 'page_view', {
          page_title: document.title,
          page_location: window.location.href,
          page_path: pagePath,
          send_to: GA_MEASUREMENT_ID,
        });
      }
    }, 0);

    return () => window.clearTimeout(timer);
  }, [location.pathname, location.search, location.hash]);
}

/**
 * Headless component wrapper for useGa4PageTracking inside Router context.
 */
export function Ga4PageTracker(): null {
  useGa4PageTracking();
  return null;
}
