import { useState, useEffect, useMemo } from "react";

export const useScrollPosition = () => {
  const [scrollState, setScrollState] = useState({
    scrollY: 0,
    scrollX: 0,
  });

  const fetchScrollState = () => {
    setScrollState(prev => ({
      ...prev,
      scrollY: window.scrollY,
      scrollX: window.scrollX,
    }));
  };

  useEffect(() => {
    window.addEventListener('scroll', fetchScrollState);
    return () => {
      window.removeEventListener('scroll', fetchScrollState);
    };
  }, []);

  return useMemo(() => ({
    ...scrollState,
    isAtTop: scrollState.scrollY === 0
  }), [scrollState]);
};