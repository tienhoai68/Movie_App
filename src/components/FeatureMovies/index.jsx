import React, { useEffect, useState } from "react";

import PaginateIndicator from "./PaginateIndicator";
import Movies from "./Movies";

const FeatureMovies = () => {
  const [movies, setMovies] = useState([]);
  const [activeMovieId, setActiveMovieId] = useState();

  useEffect(() => {
    fetch("https://api.themoviedb.org/3/movie/popular", {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer " +
          "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMWIzOTE3OWE5YTkzODU4NWY3MTJmYTNlZTAwZDkxNiIsIm5iZiI6MTczMTAzNTE4Ny4wNDIzOTY4LCJzdWIiOiI2NzJkN2YwZjI2YjYwNWJjMTllNWUyMTQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.iG5_xTSwVEi41DLZF_w__azbq6g-mmAmdNJhp_7bzWc",
      },
    })
      .then(async (res) => {
        const data = await res.json();
        const popularMovies = data.results.slice(1, 5);
        setMovies(popularMovies);

        setActiveMovieId(popularMovies[0].id);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="relative text-white">
      {movies &&
        movies.length > 0 &&
        movies
          .filter((movie) => movie.id === activeMovieId)
          .map((movie) => <Movies key={movie.id} data={movie} />)}
      <PaginateIndicator
        movies={movies}
        activeMovieId={activeMovieId}
        setActiveMovieId={setActiveMovieId}
      />
    </div>
  );
};

export default FeatureMovies;
