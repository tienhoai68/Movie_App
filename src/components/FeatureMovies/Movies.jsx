import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
const Movies = (props) => {
  // console.log(props);
  const {
    data: { backdrop_path, title, release_date, overview },
  } = props;
  return (
    <div>
      <img
        src={`https://image.tmdb.org/t/p/original${backdrop_path}`}
        className="aspect-video brightness-50"
        alt="banner"
      />
      <div className="absolute bottom-[10%] left-8 w-1/2 sm:w-1/3">
        <h2 className="font-bold sm:text-[2vw]">{title}</h2>
        <p className="border-gray-4000 mb-2 inline-block border p-1 text-gray-400">
          PG13
        </p>
        <p className="text-[1.2vw]">{release_date}</p>
        <div className="mt-4 hidden text-[1.2vw] sm:block">
          <p className="mb-2 font-bold">Overview</p>
          <p>{overview}</p>
        </div>
        <div className="mt-4">
          <button className="mr-2 rounded bg-white px-4 py-2 text-10 text-black lg:text-lg">
            <FontAwesomeIcon icon={faPlay} /> Trailer
          </button>
          <button className="rounded bg-slate-300/35 px-4 py-2 text-10 lg:text-lg">
            Thông tin
          </button>
        </div>
      </div>
    </div>
  );
};

export default Movies;
