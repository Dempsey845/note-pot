import { useEffect, useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import NoteInput from "./components/NoteInput";
import { motion, AnimatePresence } from "framer-motion";
import { SelectHeader } from "./components/SelectHeader";
import { Note } from "./components/Note";

const notes = [
  {
    id: 1278,
    title: "1",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores eaque aperiam cum repellendus quidem neque laborum aspernatur laudantium quisquam. Adipisci dolores aliquid dolore. Qui repellat provident quae pariatur ipsum maxime. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores eaque aperiam cum repellendus quidem neque laborum aspernatur laudantium quisquam. Adipisci dolores aliquid dolore. Qui repellat provident quae pariatur ipsum maxime.",
  },
  {
    id: 1279,
    title: "2",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores eaque aperiam cum repellendus quidem neque laborum aspernatur laudantium quisquam. Adipisci dolores aliquid dolore. Qui repellat provident quae pariatur ipsum maxime. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores eaque aperiam cum repellendus quidem neque laborum aspernatur laudantium quisquam. Adipisci dolores aliquid dolore. Qui repellat provident quae pariatur ipsum maxime.",
  },
  {
    id: 1210,
    title: "3",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores eaque aperiam cum repellendus quidem neque laborum aspernatur laudantium quisquam. Adipisci dolores aliquid dolore. Qui repellat provident quae pariatur ipsum maxime. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores eaque aperiam cum repellendus quidem neque laborum aspernatur laudantium quisquam. Adipisci dolores aliquid dolore. Qui repellat provident quae pariatur ipsum maxime.",
  },
  {
    id: 1220,
    title: "4",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores eaque aperiam cum repellendus quidem neque laborum aspernatur laudantium quisquam. Adipisci dolores aliquid dolore. Qui repellat provident quae pariatur ipsum maxime. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores eaque aperiam cum repellendus quidem neque laborum aspernatur laudantium quisquam. Adipisci dolores aliquid dolore. Qui repellat provident quae pariatur ipsum maxime.",
  },
  {
    id: 1230,
    title: "5",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores eaque aperiam cum repellendus quidem neque laborum aspernatur laudantium quisquam. Adipisci dolores aliquid dolore. Qui repellat provident quae pariatur ipsum maxime. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores eaque aperiam cum repellendus quidem neque laborum aspernatur laudantium quisquam. Adipisci dolores aliquid dolore. Qui repellat provident quae pariatur ipsum maxime.",
  },
  {
    id: 1240,
    title: "6",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores eaque aperiam cum repellendus quidem neque laborum aspernatur laudantium quisquam. Adipisci dolores aliquid dolore. Qui repellat provident quae pariatur ipsum maxime. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores eaque aperiam cum repellendus quidem neque laborum aspernatur laudantium quisquam. Adipisci dolores aliquid dolore. Qui repellat provident quae pariatur ipsum maxime.",
  },
  {
    id: 1250,
    title: "7",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores eaque aperiam cum repellendus quidem neque laborum aspernatur laudantium quisquam. Adipisci dolores aliquid dolore. Qui repellat provident quae pariatur ipsum maxime. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores eaque aperiam cum repellendus quidem neque laborum aspernatur laudantium quisquam. Adipisci dolores aliquid dolore. Qui repellat provident quae pariatur ipsum maxime.",
  },
];

function App() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [selectedNotes, setSelectedNotes] = useState([]);

  const addSelectedNote = (note) => {
    if (isNoteSelected(note)) {
      setSelectedNotes((prev) => prev.filter((n) => n.id !== note.id));
      return;
    }
    setSelectedNotes((prev) => [...prev, note]);
  };

  const isNoteSelected = (note) => {
    const included = selectedNotes.includes(note);
    return included;
  };

  const toggleSbCollapsed = () => setSidebarCollapsed(!sidebarCollapsed);

  return (
    <div className="note-pot h-lvh">
      {selectedNotes.length === 0 ? (
        <motion.div layout>
          <Header setSidebarCollapsed={toggleSbCollapsed} />
        </motion.div>
      ) : (
        <motion.div layout>
          <SelectHeader
            selectedNotes={selectedNotes}
            setSelectedNotes={setSelectedNotes}
          />
        </motion.div>
      )}
      <div className="flex">
        <Sidebar
          collapsed={sidebarCollapsed}
          setCollapsed={setSidebarCollapsed}
        />
        <div className="notes flex-row w-full h-lvh px-20 py-5">
          <div className="flex justify-center">
            <NoteInput />
          </div>
          {selectedNotes && (
            <motion.div
              layout
              className="grid grid-cols-[repeat(auto-fit,minmax(200px,2fr))]"
            >
              <AnimatePresence>
                {notes.map((note, index) => (
                  <Note
                    index={index}
                    note={note}
                    addSelectedNote={addSelectedNote}
                    isNoteSelected={isNoteSelected}
                  />
                ))}
              </AnimatePresence>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
