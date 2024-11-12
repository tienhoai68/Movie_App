import React, { useEffect, useState } from "react";

import PaginateIndicator from "./PaginateIndicator";
import Movies from "./Movies";
import useFetch from "@hooks/useFetch";

const FeatureMovies = () => {
  const [activeMovieId, setActiveMovieId] = useState();
  const { data: movies } = useFetch({ url: `/movie/popular` });
  const popularMovies = (movies.results || []).slice(1, 5);

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
          .map((movie) => <Movies key={movie.id} data={movie} />)}
      <PaginateIndicator
        movies={popularMovies}
        activeMovieId={activeMovieId}
        setActiveMovieId={setActiveMovieId}
      />
    </div>
  );
};

export default FeatureMovies;
