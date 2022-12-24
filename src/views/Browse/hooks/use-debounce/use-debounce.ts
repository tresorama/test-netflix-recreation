import { useRef, useEffect } from "react";
import { debounce } from './utils/debounce';

type AnyFunc = (...args: any[]) => any;

/**
 * Use this hook if you know the function to debounce now.  
 * Othrwise use `useDebounceLazy`
 */
export const useDebounce = <F extends AnyFunc>({ time, func }: { time: number; func: F; }) => {
  const debounced = useRef(debounce(func, time));

  useEffect(() => {
    const _debounced = debounced.current;
    return () => { _debounced.clear(); };
  }, []);

  return debounced.current;
};

