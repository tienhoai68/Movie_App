import FormField from "@components/SearchForm/FormFied";
import GenresInput from "@components/SearchForm/FormInputs/GenresInput";
import MediaTypeInput from "@components/SearchForm/FormInputs/MediaTypeInput";
import RatingInput from "@components/SearchForm/FormInputs/RatingInput";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useSearchParams } from "react-router-dom";

const SearchForm = ({ setSearchFormValues }) => {
  const [searchParams] = useSearchParams();

  const mediaType = searchParams.get("mediaType");
  console.log(mediaType);

  const { watch, handleSubmit, control } = useForm({
    defaultValues: {
      mediaType: ["tv", "movie"].includes(mediaType) ? mediaType : "movie",
      genres: [],
      rating: "All",
    },
  });
  const onSubmit = (data) => {
    // console.log({ fromData: data });
  };

  const formValue = watch();
  useEffect(() => {
    setSearchFormValues(formValue);
  }, [JSON.stringify(formValue)]);
  return (
    <div className="mt-6 rounded-lg border p-4 shadow-md">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          name="mediaType"
          label="Media Type"
          control={control}
          Component={MediaTypeInput}
        />
        <FormField
          name="genres"
          label="Genres"
          control={control}
          Component={GenresInput}
        />
        <FormField
          name="rating"
          label="Rating"
          control={control}
          Component={RatingInput}
        />
        <button
          type="submit"
          className="w-full rounded-lg bg-black py-2 text-white"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchForm;
