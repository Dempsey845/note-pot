import { useState } from "react";
import { NotesIcon } from "../icons/NotesIcon";
import { ArchiveIcon } from "../icons/ArchiveIcon";
import { BinIcon } from "../icons/BinIcon";
import { InfoIcon } from "../icons/InfoIcon";

const options = [
  { name: "Notes", icon: NotesIcon },
  { name: "Archive", icon: ArchiveIcon },
  { name: "Bin", icon: BinIcon },
  { name: "Info", icon: InfoIcon },
];

function Sidebar({ collapsed, setCollapsed }) {
  const [selectedOption, setSelectedOption] = useState(0);

  return (
    <div
      onMouseEnter={() => {
        collapsed && setCollapsed(false);
      }}
      onMouseLeave={() => setCollapsed(true)}
      className={`h-full my-3 ${
        collapsed ? "mx-3" : "shadow-2xl"
      } transition-all duration-300 ease-in-out ${collapsed ? "w-12" : "w-64"}`}
    >
      {options.map((option, index) => (
        <div
          key={`option-${index}-${option}`}
          className={`flex gap-10 p-3 cursor-pointer ${
            index === selectedOption ? "bg-amber-100" : "hover:bg-gray-100"
          } ${collapsed ? "rounded-full" : "rounded-r-4xl"}`}
        >
          <div
            className={`flex items-center gap-2 transition-all duration-300`}
          >
            <option.icon width="1.5em" height="1.5em" />
            <p
              className={`transition-all duration-300 overflow-hidden ${
                collapsed ? "opacity-0 w-0" : "opacity-100 ml-2 w-auto"
              }`}
            >
              {option.name}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Sidebar;
