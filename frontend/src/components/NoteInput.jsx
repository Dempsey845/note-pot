import { use, useEffect, useState } from "react";
import { FormatIcon } from "../icons/FormatIcon";
import { ArchiveIcon } from "../icons/ArchiveIcon";

function NoteInput() {
  const [collapsed, setCollapsed] = useState(true);
  const [canFormat, setCanFormat] = useState(true);

  const [text, setText] = useState("");
  const [title, setTitle] = useState("");

  const handleInput = (e) => {
    e.target.style.height = "auto";
    e.target.style.height = `${e.target.scrollHeight}px`;
    setText(e.target.value);
  };

  const handleTitleInput = (e) => {
    setTitle(e.target.value);
  };

  return (
    <div className="w-128 mb-10 flex flex-col h-fit bg-white p-1 border border-gray-200 rounded-xl shadow-xl">
      {!collapsed && (
        <input
          onInput={handleTitleInput}
          onFocus={() => setCanFormat(false)}
          onBlur={() => setCanFormat(true)}
          type="text"
          placeholder="Title"
          value={title}
          className="placeholder:text-gray-600 placeholder:text-xl text-xl"
        />
      )}
      <textarea
        onInput={handleInput}
        onSelect={() => setCollapsed(false)}
        type="text-area"
        placeholder="Take a note..."
        value={text}
        className=""
      />
      {!collapsed && (
        <div className="hotbar flex justify-between px-2">
          <div className="flex">
            <button
              disabled={!canFormat}
              className={`p-2 ${canFormat ? "hover" : "button-disabled"}`}
            >
              <FormatIcon width="1em" height="1em" />
            </button>
            <button className={`p-2 hover`}>
              <ArchiveIcon width="1.2em" height="1.2em" />
            </button>
          </div>
          <button
            onClick={() => setCollapsed(true)}
            className={`py-1 px-5 mx-5 hover-square`}
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
}

export default NoteInput;
