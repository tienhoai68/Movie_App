import MovieCard from "@components/MovieCard";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const MediaList = ({ title, tabs }) => {
  const [mediaList, setMediaList] = useState([]);
  const [activeTabId, setActiveTabId] = useState(tabs[0]?.id);

  const handleFetchApiTrending = () => {
    const url = tabs.find((tab) => tab.id === activeTabId)?.url;
    if (url) {
      fetch(`https://api.themoviedb.org/3${url}`, {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer " +
            "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMWIzOTE3OWE5YTkzODU4NWY3MTJmYTNlZTAwZDkxNiIsIm5iZiI6MTczMTAzNTE4Ny4wNDIzOTY4LCJzdWIiOiI2NzJkN2YwZjI2YjYwNWJjMTllNWUyMTQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.iG5_xTSwVEi41DLZF_w__azbq6g-mmAmdNJhp_7bzWc",
        },
      }).then(async (res) => {
        const data = await res.json();

        setMediaList(data.results);
      });
    }
  };

  useEffect(() => {
    handleFetchApiTrending();
  }, [activeTabId, tabs]);

  return (
    <div className="bg-black px-8 py-10 text-[1.2vw] text-white">
      <div className="flex items-center gap-6 text-white">
        <h3 className="text-[2.5vw] font-bold">{title}</h3>
        <ul className="flex rounded border border-white">
          {tabs &&
            tabs.length > 0 &&
            tabs.map((item) => (
              <li
                onClick={() => setActiveTabId(item.id)}
                key={item.id}
                className={`cursor-pointer rounded ${activeTabId === item.id ? "bg-white text-black" : ""} px-2 py-1`}
              >
                {item.name}
              </li>
            ))}
        </ul>
      </div>
      <div className="mt-2 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-6 lg:gap-6">
        {mediaList &&
          mediaList.length > 0 &&
          mediaList.map((item) => (
            <MovieCard
              item={item}
              key={item.id}
              media_type={item.media_type || activeTabId}
            />
          ))}
      </div>
    </div>
  );
};

export default MediaList;
