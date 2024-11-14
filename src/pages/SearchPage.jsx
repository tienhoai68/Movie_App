import RealatedMediaList from "@components/MediaList/RealatedMediaList";
import SearchForm from "@components/SearchForm/SearchForm";
import useFetch from "@hooks/useFetch";
import React, { useState } from "react";

const SearchPage = () => {
  const [searchFormValues, setSearchFormValues] = useState({
    mediaType: "movie",
    genres: [],
    rating: "All",
  });
  const [minRating, maxRating] =
    searchFormValues.rating === "All"
      ? [0, 100]
      : searchFormValues.rating.split(" - ");

  const { data, isLoading } = useFetch({
    url: `/discover/${searchFormValues.mediaType}?sort_by=popularity.desc&with_genres=${searchFormValues.genres.join(",")}&vote_average.gte=${minRating / 10}&vote_average.lte=${maxRating / 10}`,
  });

  console.log({ data });

  return (
    <div className="container flex-col">
      <p className="text-2xl font-bold">Search</p>
      <div className="flex gap-3">
        <div className="flex-1">
          <SearchForm setSearchFormValues={setSearchFormValues} />
        </div>
        <div className="flex-[3]">
          <RealatedMediaList
            mediaList={data.results || []}
            isLoading={isLoading}
          />
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
