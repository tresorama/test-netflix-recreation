export const checkIfExistOrThrow = (value: unknown, throwMessage: string) => {
  if (typeof value === 'undefined') throw new Error(throwMessage || 'checkIfExistOrThrow - Value is not present, but missing message.');
};