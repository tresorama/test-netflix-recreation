import React from "react";
import type { PageProps } from "@/pages/browse";
import { TopNavBar } from "./components/TopNavBar";
import { Hero } from "./components/Hero";
import { MoviesRow, HoverTrapRenderer } from "./components/MoviesRow";

export const BrowseView = ({ movies }: PageProps) => (
  <div className="w-screen pb-10 bg-[#141414] text-white">

    {/* DEBUG */}
    {/* <pre>{JSON.stringify(movies, null, 2)}</pre> */}

    {/* NAV TOP BAR */}
    <div className="relative z-50">
      <TopNavBar />
    </div>

    {/* HERO */}
    <div className="relative z-0">
      <Hero />
    </div>

    {/* MOVIES ROWS  */}
    <div className="relative z-10 -mt-[5vh] md:-mt-[8vh] lg:-mt-[11vh]">
      <MoviesRow
        title="Now Playing"
        movies={movies.now_playing}
      />
      <MoviesRow
        title="Popular"
        movies={movies.popular}
      />
      <MoviesRow
        title="Top Rated"
        movies={movies.top_rated}
      />
      <MoviesRow
        title="Trending This Week"
        movies={movies.trending_last_week}
      />
      <MoviesRow
        title="Trending Today"
        movies={movies.trending_last_day}
      />
    </div>

    {/* MOVIE CARD HOVER TRAP RENDERER */}
    <div className="relative z-20">
      <HoverTrapRenderer />
    </div>

  </div>
);
