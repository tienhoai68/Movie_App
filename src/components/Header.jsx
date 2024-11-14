import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className="mx-auto flex h-14 items-center justify-between bg-slate-800 px-8 text-white lg:h-20">
      <div className="flex items-center gap-4 lg:gap-6">
        <Link to="/">
          <img src="/netflix.png" alt="" className="w-16 sm:w-28" />
        </Link>

        <Link to="/search?mediaType=movie" className="lg:text-xl">
          Movie
        </Link>
        <Link to="/search?mediaType=tv" className="lg:text-xl">
          Tv Shows
        </Link>
      </div>
      <Link to="/search">
        <div className="cursor-pointer">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </div>
      </Link>
    </header>
  );
};

export default Header;
