import React, { useEffect, useState } from "react";

import PaginateIndicator from "./PaginateIndicator";
import Movies from "./Movies";
import useFetch from "@hooks/useFetch";

const FeatureMovies = () => {
  const [activeMovieId, setActiveMovieId] = useState();

  const { data: movies } = useFetch({
    url: "/discover/movie?include_adult=false&language=en-US&page=1&sort_by=popularity.desc&include_video=true",
  });

  const popularMovies = (movies.results || []).slice(10, 15);
  const { data: videoResponse } = useFetch(
    {
      url: `/movie/${activeMovieId}/videos`,
    },
    { enabled: !!activeMovieId },
  );
  const trailerVideo = (videoResponse?.results || []).find(
    (video) => video.type === "Trailer" && video.site === "YouTube",
  )?.key;

  useEffect(() => {
    if (popularMovies[0]?.id) {
      setActiveMovieId(popularMovies[0].id);
    }
  }, [JSON.stringify(movies)]);

  return (
    <div className="relative text-white">
      {popularMovies &&
        popularMovies.length > 0 &&
        popularMovies
          .filter((movie) => movie.id === activeMovieId)
          .map((movie) => (
            <Movies trailerVideo={trailerVideo} key={movie.id} data={movie} />
          ))}
      <PaginateIndicator
        movies={popularMovies}
        activeMovieId={activeMovieId}
        setActiveMovieId={setActiveMovieId}
      />
    </div>
  );
};

export default FeatureMovies;
