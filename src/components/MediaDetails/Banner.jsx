import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { groupBy } from "lodash";
import CircularProgressBar from "../CircularProgressBar";
// import CircularProgressBar from "@components/CircularProgressBar";
const Banner = ({ movieInfo }) => {
  const certificate = (
    (movieInfo.release_dates?.results || []).find(
      (item) => item.iso_3166_1 === "US",
    )?.release_dates || []
  ).find((item) => item.certification)?.certification;
  const crews = (movieInfo.credits?.crew || [])
    .filter((crew) => ["Director", "Screenplay", "Writer"].includes(crew.job))
    .map((crew) => ({ id: crew.id, job: crew.job, name: crew.name }));
  const groupedCrews = groupBy(crews, "job");
  return (
    <div className="relative text-white">
      <img
        src={`https://image.tmdb.org/t/p/original${movieInfo?.backdrop_path}`}
        alt=""
        className="absolute inset-0 aspect-video brightness-[.2]"
      />
      <div className="relative mx-auto flex max-w-screen-xl gap-6 px-6 py-10 lg:gap-8">
        <div className="flex-1">
          <img
            src={`https://media.themoviedb.org/t/p/w600_and_h900_bestv2${movieInfo?.poster_path}`}
            alt=""
          />
        </div>
        <div className="flex-[2] text-[1.2vw]">
          <p className="mb-2 text-[2vw] font-bold">{movieInfo?.title}</p>
          <div className="flex items-center gap-4">
            <p className="border-gray-4000 mb-2 inline-block border p-1">
              {certificate ?? ""}
            </p>
            <p>{movieInfo?.release_date}</p>
            <p>{movieInfo?.genres?.map((genre) => genre.name).join(", ")}</p>
          </div>
          <div className="mb-4 mt-4 flex items-center gap-4">
            <div className="flex items-center gap-2">
              <CircularProgressBar
                percent={Math.round(movieInfo?.vote_average * 10)}
                size={3.5}
                strokeWidth={0.3}
              />{" "}
              <p className="text-[1.5vw]">Rating</p>
            </div>
            <button className="text-[1.5vw]">
              <FontAwesomeIcon icon={faPlay} className="mr-1" />
              Trailer
            </button>
          </div>
          <div>
            <p className="mb-2 font-bold">Overview</p>
            <p className="mb-4">{movieInfo?.overview}</p>
          </div>
          <div className="mt-4 grid grid-cols-2 gap-2">
            {Object.keys(groupedCrews)?.map((job) => (
              <div key={job}>
                <h6 className="font-bold">{job}</h6>
                <p>{groupedCrews[job]?.map((crew) => crew.name).join(", ")}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
