import { Button } from "@/views/shared/components/Button";
import { InfoIcon, PlayIcon } from "@/views/shared/components/Icons";
import { useTrailerVideo } from "@/views/Browse/hooks/use-trailer-video";

const movie = {
  title: `Pepsi, Where's My Jet? ?`,
  description: 'A 20-year-old man attempts to win a fighter jet in a Pepsi contest, igniting a decidedly unequal court battle that will go down in history.',
  trailerYoutubeVideoId: 'lzS8BQBcAu4',
};

export const Hero = () => {
  const TrailerVideo = useTrailerVideo({
    videoId: movie.trailerYoutubeVideoId,
    width: '100%',
    height: '100%',
  });
  const videoHeight = `h-[56vw] min-h-[300px] max-h-[80vh]`;// example 16/9 => 1 / (16/9) * 100
  const bgColor = "#141414";
  const black = "#000";

  return (
    <div className={`relative ${videoHeight}`}>
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        <TrailerVideo />
      </div>
      <div
        className="absolute inset-0 h-[170%] pointer-events-none"
        style={{
          background: `
            linear-gradient(to bottom, ${black} 4%, transparent 15%), 
            linear-gradient(to left, ${black} 5%, transparent 25%), 
            linear-gradient(to top, ${bgColor} 40%, transparent 50%), 
            linear-gradient(to right, ${black} 5%, transparent 25%) 
            `
        }}
      />
      <div className="absolute inset-0 flex flex-col justify-center px-4">
        <div className="max-w-[10ch] text-2xl font-semibold">{movie.title}</div>
        <div className="mt-2 max-w-[45ch] text-xs">{movie.description}</div>
        <div className="flex gap-3 mt-4">
          <Button
            text="Watch"
            leftIcon={<PlayIcon />}
            color="primary"
          />
          <Button
            text="Details"
            leftIcon={<InfoIcon />}
          />
        </div>
      </div>
    </div>
  );
};