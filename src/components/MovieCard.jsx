import CircularProgressBar from "@components/CircularProgressBar";
import ImageComponent from "@components/ImageComponent";
import React from "react";
import { useNavigate } from "react-router-dom";

const MovieCard = ({ ...props }) => {
  const navigate = useNavigate();
  const { title, releaseDate, poster, point, id, media_type } = props;
  const handleViewDetail = (id) => {
    media_type === "tv"
      ? navigate(`/tv/${id}`)
      : navigate(`/movieDetail/${id}`);
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
      <ImageComponent
        src={`https://image.tmdb.org/t/p/w500${poster}`}
        width={210}
        height={300}
        className={"w-full rounded-lg"}
      />

      <div className="relative -top-[2.5vw] px-4 py-2">
        <div>
          <CircularProgressBar
            percent={Math.round(point * 10)}
            strokeColor={point >= 7 ? "green" : point >= 5 ? "orange" : "red"}
          />
        </div>
        <p className="no-wrap mt-2 text-ellipsis font-bold">{title}</p>
        <p className="text-slate-300">{releaseDate}</p>
      </div>
    </div>
  );
};

export default MovieCard;
