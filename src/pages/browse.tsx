import React from "react";
import type { GetStaticProps, NextPage } from "next";
import { type Movie, fetchMoviesByTerm, fetchMoviesTopRated, fetchMoviesNowPlaying, fetchMoviesPopular, fetchMoviesTrendingLastWeek, fetchMoviesTrendingLastDay } from "@/lib/tmdb/server/tmdb.fetch";
import { BrowseView } from "@/views/Browse";

// Data Fetch
export type PageProps = {
  movies: {
    now_playing: Movie[],
    popular: Movie[],
    top_rated: Movie[],
    trending_last_week: Movie[],
    trending_last_day: Movie[],
  };
};
export const getStaticProps: GetStaticProps<PageProps> = async () => {
  return {
    props: {
      movies: {
        now_playing: await fetchMoviesNowPlaying(),
        popular: await fetchMoviesPopular(),
        top_rated: await fetchMoviesTopRated(),
        trending_last_week: await fetchMoviesTrendingLastWeek(),
        trending_last_day: await fetchMoviesTrendingLastDay(),
      }
    }
  };
};

// Main Component
const Page: NextPage<PageProps> = (props) => {
  if (!props.movies) return <></>;
  return <BrowseView {...props} />;
};
export default Page;
