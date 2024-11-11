import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "@components/Loading";
import Banner from "@components/MediaDetails/Banner";
import ActorList from "@components/MediaDetails/ActorList";
import RealatedMediaList from "@components/MediaList/RealatedMediaList";
const MovieDetail = () => {
  const { id } = useParams();
  const [movieInfo, setMovieInfo] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isRelatedLoading, setIsRelatedLoading] = useState(false);
  // const relatedMovies = recommandationsResponse.results || [];
  const handleFetchUserInfo = () => {
    setIsLoading(true);
    fetch(
      `https://api.themoviedb.org/3/movie/${id}}?append_to_response=release_dates,credits`,
      {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer " +
            "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMWIzOTE3OWE5YTkzODU4NWY3MTJmYTNlZTAwZDkxNiIsIm5iZiI6MTczMTAzNTE4Ny4wNDIzOTY4LCJzdWIiOiI2NzJkN2YwZjI2YjYwNWJjMTllNWUyMTQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.iG5_xTSwVEi41DLZF_w__azbq6g-mmAmdNJhp_7bzWc",
        },
      },
    )
      .then(async (res) => {
        const data = await res.json();
        setMovieInfo(data);
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleFetchRelatedMovies = () => {
    setIsRelatedLoading(true);
    fetch(`https://api.themoviedb.org/3/movie/{movie_id}/recommendations`, {
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
        setMovieInfo(data);
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsRelatedLoading(false);
      });
  };

  useEffect(() => {
    handleFetchUserInfo();
  }, [id]);
  if (isLoading) {
    return <Loading />;
  }
  return (
    <>
      <Banner movieInfo={movieInfo} />

      <div className="bg-black text-[1.2vw] text-white">
        <div className="mx-auto flex max-w-screen-xl gap-6 px-6 py-10">
          <div className="flex-[2]">
            <ActorList actors={movieInfo.credits?.cast || []} />
            <RealatedMediaList mediaList={movieInfo.similar?.results || []} />
          </div>
          <div className="flex-1">
            <p className="mb-4 text-[1.4vw] font-bold">Information</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieDetail;
