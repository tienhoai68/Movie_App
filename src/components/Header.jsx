import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
const Header = () => {
  return (
    <header className="mx-auto flex h-14 items-center justify-between bg-slate-800 px-8 text-white">
      <div className="flex items-center gap-4">
        <img src="./netflix.png" alt="" className="w-16 sm:w-28" />
        <a href="">Phim </a>
        <a href="">Phim truyền hình</a>
      </div>
      <div className="cursor-pointer">
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </div>
    </header>
  );
};

export default Header;
