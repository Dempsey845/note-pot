import { ArchiveIcon } from "../icons/ArchiveIcon";
import { BinIcon } from "../icons/BinIcon";
import { CloseIcon } from "../icons/CloseIcon";

export function SelectHeader({ selectedNotes, setSelectedNotes }) {
  const clearSelection = () => {
    setSelectedNotes([]);
  };

  return (
    <header>
      <div className="flex w-full gap-5 border-b border-gray-400 justify-between p-2">
        <div className="flex items-center">
          <div onClick={() => clearSelection()} className="header-hover">
            <CloseIcon width="1.5em" height="1.5em" />
          </div>
          <p className="text-gray-600 font-medium text-lg">
            {selectedNotes.length} selected
          </p>
        </div>
        <div className="flex items-center">
          <div className="header-hover">
            <ArchiveIcon width="1.5em" height="1.5em" />
          </div>
          <div className="header-hover">
            <BinIcon width="1.5em" height="1.5em" />
          </div>
        </div>
      </div>
    </header>
  );
}
