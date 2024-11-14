import useFetch from "@hooks/useFetch";
import React, { useEffect } from "react";
import { useWatch } from "react-hook-form";

const GenresInput = ({ control, onChange, value = [] }) => {
  const mediaType = useWatch({ name: "mediaType", control });
  const { data } = useFetch(
    { url: `/genre/${mediaType}/list` },
    { enabled: mediaType },
  );
  useEffect(() => {
    onChange([]);
  }, [mediaType]);
  return (
    <div className="flex flex-wrap gap-2">
      {(data.genres || []).map((genre) => (
        <p
          key={genre.id}
          onClick={() => {
            let newValue = [...value];
            if (value.includes(genre.id)) {
              newValue = newValue.filter((g) => g !== genre.id);
            } else {
              newValue = [...newValue, genre.id];
            }
            onChange(newValue);
          }}
          className={`cursor-pointer rounded-xl border px-2 py-1 ${value.includes(genre.id) ? "bg-black text-white" : ""}`}
        >
          {genre.name}
        </p>
      ))}
    </div>
  );
};

export default GenresInput;
