import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";

const MediaList = () => {
  const [mediaList, setMediaList] = useState([]);
  const handleFetchApiTrending = () => {
    fetch("https://api.themoviedb.org/3/trending/all/week", {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer " +
          "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMWIzOTE3OWE5YTkzODU4NWY3MTJmYTNlZTAwZDkxNiIsIm5iZiI6MTczMTAzNTE4Ny4wNDIzOTY4LCJzdWIiOiI2NzJkN2YwZjI2YjYwNWJjMTllNWUyMTQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.iG5_xTSwVEi41DLZF_w__azbq6g-mmAmdNJhp_7bzWc",
      },
    }).then(async (res) => {
      const data = await res.json();
      console.log(data);
      setMediaList(data.results);
    });
  };
  useEffect(() => {
    handleFetchApiTrending();
  }, []);
  return (
    <div className="bg-black px-8 py-10 text-[1.2vw] text-white">
      <div className="flex items-center gap-6 text-white">
        <h3 className="text-[2.5vw] font-bold">Trending</h3>
        <ul className="flex rounded border border-white">
          <li className="cursor-pointer rounded bg-white px-2 py-1 text-black">
            All
          </li>
          <li className="cursor-pointer rounded px-2 py-1">Movies</li>
          <li className="cursor-pointer rounded px-2 py-1">TV Show</li>
        </ul>
      </div>
      <div className="mt-2 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-6">
        {mediaList &&
          mediaList.length > 0 &&
          mediaList.map((item) => <MovieCard item={item} key={item.id} />)}
      </div>
    </div>
  );
};

export default MediaList;
