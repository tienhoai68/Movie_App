import ImageComponent from "@components/ImageComponent";
import React from "react";

const ActorInfo = ({ id, name, character, profilePath, episodeCount }) => {
  return (
    <div className="rounded-lg border border-slate-300 bg-black shadow-sm">
      <ImageComponent
        className="w-full rounded-lg"
        src={
          profilePath
            ? `https://media.themoviedb.org/t/p/w276_and_h350_face${profilePath}`
            : "/ActorNoImage.svg"
        }
        width={276}
        height={350}
      />
      <div className="p-3">
        <p className="font-bold">{name}</p>
        <p>{character}</p>
        {episodeCount && <p>{episodeCount} Episodes</p>}
      </div>
    </div>
  );
};

export default ActorInfo;
