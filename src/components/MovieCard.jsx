import CircularProgressBar from "@components/CircularProgressBar";
import React from "react";
import { useNavigate } from "react-router-dom";

const MovieCard = (props) => {
  const navigate = useNavigate();
  const {
    item: {
      name,
      title,
      poster_path,
      first_air_date,
      release_date,
      vote_average,
      id,
    },
    media_type,
  } = props;
  const handleViewDetail = (id) => {
    console.log(id);
    navigate(`/movieDetail/${id}`);
  };
  return (
    <div
      onClick={() => handleViewDetail(id)}
      className="relative cursor-pointer rounded-lg border border-slate-800"
    >
      {media_type && media_type === "tv" && (
        <p className="absolute right-1 top-1 rounded bg-black p-1 text-sm text-white shadow-md">
          TV Show
        </p>
      )}
      <img
        className="rounded-lg"
        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
      />
      <div className="relative -top-[2.5vw] px-4 py-2">
        <div>
          <CircularProgressBar
            percent={Math.round(vote_average * 10)}
            strokeColor={
              vote_average >= 7 ? "green" : vote_average >= 5 ? "orange" : "red"
            }
          />
        </div>
        <p className="no-wrap mt-2 text-ellipsis font-bold">{name || title}</p>
        <p className="text-slate-300">{first_air_date || release_date}</p>
      </div>
    </div>
  );
};

export default MovieCard;
