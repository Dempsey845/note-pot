import { motion } from "framer-motion";
import { CheckCircleOutlineIcon } from "../icons/CheckCircleOutlineIcon";
import { CheckCircleIcon } from "../icons/CheckCircleIcon";
import { useState } from "react";

export function Note({ index, note, addSelectedNote, isNoteSelected }) {
  const [hovered, setHovered] = useState(false);

  const showCheck = () => {
    const selected = isNoteSelected(note);
    if (hovered && !selected) {
      return (
        <CheckCircleOutlineIcon
          onClick={() => addSelectedNote(note)}
          height="1.5em"
          width="1.5em"
          className="absolute top-0 left-0 z-100 transition duration-300 hover:scale-110"
        />
      );
    }

    if (selected) {
      return (
        <CheckCircleIcon
          onClick={() => addSelectedNote(note)}
          height="1.5em"
          width="1.5em"
          className="absolute top-0 left-0 z-100 transition duration-300 hover:scale-110"
        />
      );
    }
  };

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative p-2"
    >
      <motion.div
        key={`note-${index}-${note.id}`}
        layout
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.3 }}
        className={`relative transition-all duration-300 ease-in-out border max-w-55 max-h-100 my-2 ${
          isNoteSelected(note) ? "border-2 border-black " : "border-gray-200"
        } rounded-2xl py-3 px-5 hover:shadow-xl overflow-hidden`}
      >
        <div className="h-full overflow-hidden">
          <p className="text-lg font-bold pb-3">{note.title}</p>
          <p>{note.text}</p>
        </div>
      </motion.div>
      {showCheck()}
    </div>
  );
}
