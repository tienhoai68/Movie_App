import CircularProgressBar from "@components/CircularProgressBar";
import ImageComponent from "@components/ImageComponent";
import React, { useState } from "react";

const SeasonsList = ({ seasons = [] }) => {
  console.log(seasons);
  const [isShowMore, setIsShowMore] = useState(false);
  const seasonList = isShowMore ? seasons : seasons.slice(0, 3);
  return (
    <div className="mt-8 text-[1.3vw]">
      <p className="mb-4 text-[1.4vw] font-bold">Seasons</p>
      {seasonList.map((season) => (
        <div
          key={season.id}
          className="mb-2 flex gap-4 rounded-lg border border-slate-200 p-3 shadow-md"
        >
          <ImageComponent
            className={"w-1/4 rounded-lg"}
            width={130}
            height={195}
            src={season.poster_path && `https://media.themoviedb.org/t/p/w300${season.poster_path}`}
          />
          <div className="space-y-1">
            <p className="text-[1.4vw] font-bold">{season.name}</p>
            <div className="flex items-center gap-2">
              <p className="font-bold">Rating</p>
              <CircularProgressBar
                percent={Math.round(season.vote_average * 10)}
                size={2.5}
                strokeWidth={0.2}
              />
            </div>
            <p>
              <span className="font-bold">Release Date:</span> {season.air_date}
            </p>
            <p>
              <span className="font-bold">Episodes:</span>{" "}
              {season.episode_count}
            </p>
            <p>{season.overview}</p>
          </div>
        </div>
      ))}
      <p
        onClick={() => setIsShowMore(!isShowMore)}
        className="mt-2 cursor-pointer font-bold"
      >
        {isShowMore ? "Show Less" : "Show More"}
      </p>
    </div>
  );
};

export default SeasonsList;
