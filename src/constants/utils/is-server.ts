const isDOM = () => Boolean(
  typeof window !== 'undefined' &&
  window.document &&
  window.document.documentElement
);

export const isBrowser = isDOM;
export const isServer = () => !isDOM();
