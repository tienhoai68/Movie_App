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

        <a href="" className="lg:text-xl">
          Phim{" "}
        </a>
        <a href="" className="lg:text-xl">
          Phim truyền hình
        </a>
      </div>
      <div className="cursor-pointer">
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </div>
    </header>
  );
};

export default Header;
