import { useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import NoteInput from "./components/NoteInput";

function App() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const toggleSbCollapsed = () => setSidebarCollapsed(!sidebarCollapsed);

  return (
    <div className="note-pot h-lvh">
      <Header setSidebarCollapsed={toggleSbCollapsed} />
      <div className="flex">
        <Sidebar
          collapsed={sidebarCollapsed}
          setCollapsed={setSidebarCollapsed}
        />
        <div className="notes flex justify-center w-full h-lvh px-20 py-5">
          <NoteInput />
        </div>
      </div>
    </div>
  );
}

export default App;
