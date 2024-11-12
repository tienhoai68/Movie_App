import { FormatNumber } from "@libs/utils";
import React from "react";

const Infomation = ({ movieInfo = {} }) => {
  const { original_title, status, origin_country, budget, revenue } = movieInfo;

  return (
    <div>
      <p className="mb-4 text-[1.4vw] font-bold">Infomation</p>
      <div className="mb-4">
        <p className="font-bold">Original Title</p>
        <p>{original_title}</p>
      </div>
      <div className="mb-4">
        <p className="font-bold">Original Country</p>
        {(movieInfo.origin_country || []).map((countryCode) => (
          <img
            key={countryCode}
            src={`https://flagcdn.com/48x36/${countryCode.toLowerCase()}.png`}
            className="mr-1 mt-1 w-[1.4vw]"
          />
        ))}
      </div>
      <div className="mb-4">
        <p className="font-bold">Status</p>
        <p>{status}</p>
      </div>
      <div className="mb-4">
        <p className="font-bold">Budget</p>
        <p>{FormatNumber(budget)}</p>
      </div>
      <div className="mb-4">
        <p className="font-bold">Revenue</p>
        <p>{FormatNumber(revenue)}</p>
      </div>
    </div>
  );
};

export default Infomation;
