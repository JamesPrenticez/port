import { useState, useEffect, useCallback } from 'react';

// Define your media queries
const mediaQueryBreakpoints = {
  sm: '(max-width: 640px)',
  md: '(max-width: 768px)',
  lg: '(max-width: 1024px)',
  xl: '(max-width: 1280px)',
};

// Hook
function useMediaQuery() {
  const [mediaQueryMatch, setMediaQueryMatch] = useState({
    isSm: false,
    isMd: false,
    isLg: false,
    isXl: false,
  });

  const handleMediaQueryChange = useCallback(() => {
    setMediaQueryMatch({
      isSm: window.matchMedia(mediaQueryBreakpoints.sm).matches,
      isMd: window.matchMedia(mediaQueryBreakpoints.md).matches,
      isLg: window.matchMedia(mediaQueryBreakpoints.lg).matches,
      isXl: window.matchMedia(mediaQueryBreakpoints.xl).matches,
    });
  }, []);

  useEffect(() => {
    // Add event listener for each media query
    const mediaQueries = Object.values(mediaQueryBreakpoints).map(query => window.matchMedia(query));
    
    mediaQueries.forEach(mq => {
      // Use addEventListener for modern browsers
      mq.addEventListener('change', handleMediaQueryChange);
    });

    // Set the initial state
    handleMediaQueryChange();

    return () => {
      // Clean up event listeners
      mediaQueries.forEach(mq => {
        mq.removeEventListener('change', handleMediaQueryChange);
      });
    };
  }, [handleMediaQueryChange]);

  return mediaQueryMatch;
}

export default useMediaQuery;
