import MovieCard from "@components/MovieCard";
import React from "react";

const RealatedMediaList = ({ mediaList = [] }) => {
  console.log(mediaList);

  return (
    <div>
      <p className="mb-4 text-[1.4vw] font-bold">More like this</p>
      <div>
        {mediaList?.map((media) => (
          <MovieCard
            key={media.id}
            id={media.id}
            title={media.title}
            releaseDate={media.release_date}
            poster={media.poster_path}
            point={media.vote_average}
            mediaType={media.media_type}
          />
        ))}
      </div>
    </div>
  );
};

export default RealatedMediaList;
