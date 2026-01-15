import { useEffect } from "react";
import { useLocation } from "react-router-dom";

declare global {
  interface Window {
    gtag: (command: string, targetId: string, config?: Record<string, unknown>) => void;
  }
}

const GA_MEASUREMENT_ID = "G-4XY15TE65Y";

export const usePageTracking = () => {
  const location = useLocation();

  useEffect(() => {
    if (typeof window.gtag === "function") {
      window.gtag("config", GA_MEASUREMENT_ID, {
        page_path: location.pathname + location.search,
        page_title: document.title,
      });
    }
  }, [location]);
};
