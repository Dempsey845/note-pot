import { useState } from "react";
import { CloseIcon } from "../icons/CloseIcon";
import { MenuIcon } from "../icons/MenuIcon";
import { SearchIcon } from "../icons/SearchIcon";

function Header() {
  const [searchFocused, setSearchFocused] = useState(false);

  return (
    <header>
      <div className="flex w-full border-b border-gray-400 justify-between p-2">
        <div className="flex items-center gap-2">
          <div className="header-hover">
            <MenuIcon width="2em" height="2em" />
          </div>
          <h1 className="title">NotePot</h1>
        </div>
        <div
          className={`search-bar flex items-center gap-3 px-3 py-0.5 w-1/2 bg-gray-200 rounded-xl cursor-text ${
            searchFocused && "shadow-2xl bg-slate-100"
          }`}
        >
          <div className="header-hover-2">
            <SearchIcon height="1.5em" width="1.5em" />{" "}
          </div>
          <input
            onFocus={() => setSearchFocused(true)}
            onBlur={() => setSearchFocused(false)}
            placeholder={"Search"}
            className="w-full"
          />
          <div className="header-hover-2">
            <CloseIcon height="1.5em" width="1.5em" />{" "}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
