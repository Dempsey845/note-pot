import { useEffect, useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import NoteInput from "./components/NoteInput";
import { CheckCircleIcon } from "./icons/CheckCircleIcon";
import { motion, AnimatePresence } from "framer-motion";
import { SelectHeader } from "./components/SelectHeader";

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
    console.log(included);
    return included;
  };

  const toggleSbCollapsed = () => setSidebarCollapsed(!sidebarCollapsed);

  useEffect(() => {
    console.log(selectedNotes);
  }, [selectedNotes]);

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
              className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))]"
            >
              <AnimatePresence>
                {notes.map((note, index) => (
                  <motion.div
                    key={`note-${index}`}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    className={`relative transition-all duration-300 ease-in-out border max-w-55 max-h-100 my-2 ${
                      isNoteSelected(note)
                        ? "border-2 border-black "
                        : "border-gray-200"
                    } rounded-2xl py-3 pl-3 pr-5 hover:shadow-xl`}
                  >
                    <CheckCircleIcon
                      onClick={() => addSelectedNote(note)}
                      height="1.5em"
                      width="1.5em"
                      className="absolute -top-2 -left-2 z-100"
                    />
                    <div className="h-full overflow-hidden">
                      <p className="text-lg font-bold pb-3">{note.title}</p>
                      <p>{note.text}</p>
                    </div>
                  </motion.div>
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
