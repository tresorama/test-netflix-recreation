import { useRef, useEffect, useMemo } from "react";
import { debounceLazy } from "./utils/debounce-lazy";

/**
 * Use this hook if you DON'T know the function to debounce now.  
 * Othrwise use `useDebounce`
 */
export const useDebounceLazy = ({ time }: { time: number; }) => {
  const debounced = useRef(debounceLazy({ time }));

  useEffect(() => {
    const _debounced = debounced.current;
    return () => { _debounced.clear(); };
  }, []);

  return useMemo(() => ({
    add: debounced.current.add,
    clear: debounced.current.clear,
  }), []);
};
