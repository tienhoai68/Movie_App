import Loading from "@components/Loading";
import ActorList from "@components/MediaDetails/ActorList";
import Banner from "@components/MediaDetails/Banner";
import Infomation from "@components/MediaDetails/Infomation";
import SeasonsList from "@components/MediaDetails/SeasonsList";
import TVShowInformation from "@components/MediaDetails/TvShowInfomaiton";
import RealatedMediaList from "@components/MediaList/RealatedMediaList";
import useFetch from "@hooks/useFetch";
import React from "react";
import { useParams } from "react-router-dom";

const TVShowDetails = () => {
  const { id } = useParams();
  const { data: tvInfo, isLoading } = useFetch({
    url: `/tv/${id}?append_to_response=content_ratings,aggregate_credits,videos`,
  });
  const { data: recommandationsResponse, isLoading: isRelatedMoviesLoading } =
    useFetch({
      url: `/tv/${id}/recommendations`,
    });

  const relatedTVShow = recommandationsResponse.results || [];

  const certification = (tvInfo.content_ratings?.results || []).find(
    (result) => result.iso_3166_1 === "US",
  )?.rating;

  const crews = (tvInfo.aggregate_credits?.crew || [])
    .filter((crew) => {
      const jobs = (crew.jobs || []).map((j) => j.job);
      return ["Director", "Writer"].some((job) => jobs.find((j) => j === job));
    })
    .slice(0, 5)
    .map((crew) => ({ id: crew.id, job: crew.jobs[0].job, name: crew.name }));
  if (isLoading) {
    return <Loading />;
  }
  return (
    <>
      <Banner
        title={tvInfo.name}
        backdropPath={tvInfo.backdrop_path}
        posterPath={tvInfo.poster_path}
        releaseDate={tvInfo.first_air_date}
        genres={tvInfo.genres}
        point={tvInfo.vote_average}
        overview={tvInfo.overview}
        certification={certification}
        crews={crews}
        trailerVideoKey={
          (tvInfo.videos?.results || []).find(
            (video) => video.type === "Trailer",
          )?.key
        }
      />
      <div className="bg-black text-[1.2vw] text-white">
        <div className="mx-auto flex max-w-screen-xl gap-6 px-6 py-10">
          <div className="flex-[2]">
            <ActorList
              actors={(tvInfo.aggregate_credits?.cast || []).map((actor) => ({
                ...actor,
                character: actor.roles[0]?.character,
                episodeCount: actor.total_episode_count,
              }))}
            />

            <SeasonsList seasons={tvInfo.seasons} />
            <RealatedMediaList
              mediaList={relatedTVShow || []}
              isLoading={isRelatedMoviesLoading}
            />
          </div>
          <div className="flex-1">
            <TVShowInformation tvInfo={tvInfo} />
          </div>
        </div>
      </div>
    </>
  );
};

export default TVShowDetails;
