import { useState, useEffect } from "react";
import { CloseIcon } from "../icons/CloseIcon";
import { MenuIcon } from "../icons/MenuIcon";
import { SearchIcon } from "../icons/SearchIcon";
import { RefreshIcon } from "../icons/RefreshIcon";
import { ArrowBackIcon } from "../icons/ArrowBackIcon";
import { SettingsIcon } from "../icons/SettingsIcon";
import Button from "./Button";
import { Spinner } from "./Spinner";

function Header({ setSidebarCollapsed }) {
  const [searchFocused, setSearchFocused] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const [showCollapsedSearchBar, setShowCollapsedSearchBar] = useState(false);

  const mdWidth = 768;

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > mdWidth) {
        setShowCollapsedSearchBar(false);
      }
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleRefresh = () => {
    // TODO : Implement API calls here
    // Delay for testing for now
    if (refreshing) return;
    console.log("Refreshing");
    const stopRefreshing = () => setRefreshing(false);
    setRefreshing(true);
    setTimeout(stopRefreshing, 3000);
  };

  return (
    <header>
      <div className="flex w-full border-b border-gray-400 justify-between p-2">
        <div className="flex w-full gap-20">
          {!showCollapsedSearchBar && (
            <div className="flex items-center gap-2 px-2">
              <div
                onClick={() => setSidebarCollapsed()}
                className="header-hover"
              >
                <MenuIcon width="2em" height="2em" />
              </div>
              <img src="/NotePot.svg" className="w-8 h-8" />
              <h1 className="title">NotePot</h1>
            </div>
          )}
          {(size.width > mdWidth || showCollapsedSearchBar) && (
            <div
              className={`search-bar flex items-center gap-3 px-3 py-0.5 w-1/2 ${
                showCollapsedSearchBar && "w-full"
              } bg-gray-200 rounded-xl cursor-text ${
                searchFocused && "shadow-2xl bg-slate-100"
              }`}
            >
              {showCollapsedSearchBar ? (
                <div
                  onClick={() => setShowCollapsedSearchBar(false)}
                  className="header-hover-2"
                >
                  <ArrowBackIcon height="1.5em" width="1.5em" />{" "}
                </div>
              ) : (
                <div className="header-hover-2">
                  <SearchIcon height="1.5em" width="1.5em" />{" "}
                </div>
              )}
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
          )}
        </div>
        <div className="flex items-center">
          {size.width <= mdWidth && (
            <div
              onClick={() => setShowCollapsedSearchBar(true)}
              className="header-hover p-3"
            >
              <SearchIcon width="1.5em" height="1.5em" />
            </div>
          )}

          <Button
            onClick={handleRefresh}
            width={refreshing ? "1.2em" : "1.5em"}
            height={refreshing ? "1.2em" : "1.5em"}
            icon={refreshing ? Spinner : RefreshIcon}
            info="Refresh"
          />
          <Button
            width="1.5em"
            height="1.5em"
            icon={SettingsIcon}
            info="Settings"
          />

          <div className="header-hover">
            <div className="rounded-full w-8 h-8 overflow-hidden">
              <img src="https://static.vecteezy.com/system/resources/previews/009/292/244/non_2x/default-avatar-icon-of-social-media-user-vector.jpg" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
