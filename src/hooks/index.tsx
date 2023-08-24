import { useEffect, useState, useCallback } from "react";

interface WindowDimensions {
  isDesktop: boolean;
  isTablet: boolean;
  isMobile: boolean;
}

const useWindowDimensions = (): WindowDimensions => {
  const hasWindow = typeof window !== "undefined";

  const getWindowDimensions = (): WindowDimensions => {
    const width = hasWindow ? window.innerWidth : null;
    const widthNotNull = width !== null;

    const isDesktop = widthNotNull && width > 1024;
    const isTablet = widthNotNull && width > 768 && width < 1024;
    const isMobile = widthNotNull && width < 768;

    return {
      isDesktop,
      isTablet,
      isMobile,
    };
  };

  const [windowDimensions, setWindowDimensions] = useState<WindowDimensions>(
    getWindowDimensions()
  );

  const handleResize = useCallback(() => {
    setWindowDimensions(getWindowDimensions());
  }, [hasWindow]);

  useEffect(() => {
    if (hasWindow) {
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, [hasWindow, handleResize]);

  return windowDimensions;
};

export default useWindowDimensions;
