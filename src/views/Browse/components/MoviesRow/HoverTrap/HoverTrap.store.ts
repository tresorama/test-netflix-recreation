import { atom } from 'jotai';
import type { Movie } from "@/lib/tmdb/server/tmdb.fetch";

export type HoveredItem = {
  node: HTMLElement;
  movie: Movie;
};
export const hoveredItemAtom = atom<null | HoveredItem>(null);
