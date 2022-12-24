import { useSetAtom } from "jotai";
import type { Movie } from "@/lib/tmdb/server/tmdb.fetch";
import { AspectRatio } from "@/views/Browse/components/AspectRatio";
import { getFirstNotFalsy } from "@/views/Browse/utils/get-first-not-falsy";
import { useDebounce } from "@/views/Browse/hooks/use-debounce";
import { hoveredItemAtom } from "./HoverTrap";
import placeholder_movie_image from '@/assets/placeholder-movie.jpg';

export const MoviesRow = ({ title, movies }: {
  title: string,
  movies: Movie[];
}) => (
  <div className="w-full">
    <div className="px-4 pt-5 pb-1">
      <span className="font-medium">{title}</span>
    </div>
    <div className="w-full pl-4 overflow-auto">
      <div className="flex gap-2">
        {movies.map(movie => (
          <MovieRowItem
            key={movie.id}
            movie={movie}
          />
        ))}
      </div>
    </div>
  </div>
);

const MovieRowItem = ({ movie }: { movie: Movie; }) => {
  const setHoveredItem = useSetAtom(hoveredItemAtom);
  const debouncedSetHoveredItem = useDebounce({ func: setHoveredItem, time: 650 });
  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    debouncedSetHoveredItem({ node: e.currentTarget, movie });
  };
  const handleMouseLeave = () => debouncedSetHoveredItem.clear();

  return (
    <div
      className=""
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="w-[30vw] min-w-[50px] max-w-[220px] bg-red-100 text-black">
        <AspectRatio ratio={16 / 9}>
          {({ paddingBottom }) => (
            <div className="relative w-full" style={{ paddingBottom }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="absolute inset-0 object-cover object-bottom w-full h-full"
                alt={movie.title}
                src={getFirstNotFalsy([
                  movie.images.poster.w342,
                  movie.images.poster.w185,
                  movie.images.poster.original
                ], placeholder_movie_image.src)}
              />
            </div>
          )}
        </AspectRatio>
      </div>
    </div>
  );
};
