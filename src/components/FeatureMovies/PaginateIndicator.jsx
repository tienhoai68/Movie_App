import React, { useEffect } from "react";

const PaginateIndicator = ({ movies, activeMovieId, setActiveMovieId }) => {
  useEffect(() => {
    let intervalId;
    if (movies.length > 0) {
      intervalId = setInterval(() => {
        const currentMovieIndex = movies.findIndex(
          (movie) => movie.id === activeMovieId,
        );
        const nextMovieIndex = (currentMovieIndex + 1) % movies.length;
        setActiveMovieId(movies[nextMovieIndex].id);
      }, 20000);
    }

    return () => clearInterval(intervalId);
  }, [movies, activeMovieId]);

  return (
    <div className="absolute bottom-[10%] right-8 flex gap-2">
      <ul className="flex gap-1">
        {movies &&
          movies.length > 0 &&
          movies.map((movie) => (
            <li
              onClick={() => setActiveMovieId(movie.id)}
              key={movie.id}
              className={`h-1 w-6 cursor-pointer ${activeMovieId === movie.id ? "bg-slate-100" : "bg-slate-600"}`}
            ></li>
          ))}
      </ul>
    </div>
  );
};

export default PaginateIndicator;
