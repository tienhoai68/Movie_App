import MovieCard from "@components/MovieCard";
import useFetch from "@hooks/useFetch";
import React, { useEffect, useState } from "react";
const MediaList = ({ title, tabs }) => {
  const [activeTabId, setActiveTabId] = useState(() => {
    const storedTabId = sessionStorage.getItem("activeTabId");
    return storedTabId || tabs[0]?.id;
  });

  const { data } = useFetch({
    url: tabs.find((tab) => tab.id === activeTabId)?.url,
  });
  // lưu activeTabId với sessionStorage mục đích render đúng trạng thái trước đó khi rời khỏi trang
  const mediaList = (data?.results || []).slice(0, 12);
  useEffect(() => {
    sessionStorage.setItem("activeTabId", activeTabId);
  }, [activeTabId]);
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
          mediaList.map((media) => (
            <MovieCard
              key={media.id}
              id={media.id}
              title={media.title || media.name}
              releaseDate={media.release_date || media.first_air_date}
              poster={media.poster_path}
              point={media.vote_average}
              media_type={media.media_type || activeTabId}
            />
          ))}
      </div>
    </div>
  );
};

export default MediaList;
