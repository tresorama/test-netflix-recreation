import type { Movie } from "@/lib/tmdb/server/tmdb.fetch";
import { useTrailerVideo } from "@/views/Browse/hooks/use-trailer-video";
import { getFirstNotFalsy } from "@/views/Browse/utils/get-first-not-falsy";
import { IconButton } from "@/views/shared/components/IconButton";
import { CheckIcon, ChevronDownIcon, PlayIcon, PlusIcon } from "@/views/shared/components/Icons";
import { AspectRatio } from "@/views/Browse/components/AspectRatio";
import placeholder_movie_image from '@/assets/placeholder-movie.jpg';
import { motion } from 'framer-motion';
import { useTimeoutFn, useToggle } from "react-use";

const movie_tags = ['Serious', 'Drama', "Thriller"];


export const MovieCard = ({ movie }: {
  movie: Movie;
}) => {
  const [isVisibleVideo, toggleIsVisibleVideo] = useToggle(false);
  useTimeoutFn(toggleIsVisibleVideo, 1200);

  return (
    <div className="w-full shadow-[0_0_100px_black] rounded-lg overflow-hidden ">

      {/* IMAGE */}
      <div className="w-full overflow-hidden bg-black">
        <AspectRatio ratio={16 / 9}>
          {({ paddingBottom }) => (
            <div className="relative w-full" style={{ paddingBottom }}>
              {isVisibleVideo && (
                <div className="absolute inset-0 w-full h-full">
                  <TrailerVideo />
                </div>
              )}
              <motion.img
                className="absolute inset-0 object-cover object-bottom w-full h-full"
                alt={movie.title}
                src={getFirstNotFalsy([
                  movie.images.poster.w342,
                  movie.images.poster.w185,
                  movie.images.poster.original
                ], placeholder_movie_image.src)}
                animate={{ opacity: isVisibleVideo ? 0 : 1 }}
                transition={{ type: 'tween', delay: 1.4 }}
              />
            </div>
          )}
        </AspectRatio>
      </div>

      {/* DETAILS */}
      <motion.div
        className="bg-zinc-900"
        exit={{ opacity: 0 }}
      >
        <div className="flex gap-2 px-4 py-4">
          <IconButton color="primary" size="sm" icon={<PlayIcon />} />
          <IconButton color="outline" size="sm" icon={<CheckIcon />} />
          <IconButton color="outline" size="sm" icon={<PlusIcon />} />
          <div className="ml-auto">
            <IconButton color="outline" size="sm" icon={<ChevronDownIcon />} />
          </div>
        </div>
        <div className="px-4">
          <span className="font-medium text-green-400 text-md">95% compatible</span>
          <div className="flex flex-wrap items-baseline">
            <span className="px-1.5 text-md leading-none border border-gray-500 font-light">16+</span>
            <span className="px-2 font-light leading-none text-md">5 seasons</span>
            <span className="px-1.5 text-sm leading-none border border-gray-500 rounded font-light">HD</span>
          </div>
        </div>
        <div className="px-4 pt-2 pb-6">
          <div className="flex flex-wrap">
            {movie_tags.map((tag, i) => (
              <span key={tag} className="font-light text-gray-100 text-md">
                {i !== 0 && (<span>・</span>)}
                {tag}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const TrailerVideo = () => {
  const Video = useTrailerVideo({
    videoId: "DpJsmKhp9yo",
    width: '100%',
    height: '100%',
  });
  return <Video />;
};