import { useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

function App() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const toggleSbCollapsed = () => setSidebarCollapsed(!sidebarCollapsed);

  return (
    <div className="note-pot h-lvh">
      <Header setSidebarCollapsed={toggleSbCollapsed} />
      <Sidebar
        collapsed={sidebarCollapsed}
        setCollapsed={setSidebarCollapsed}
      />
    </div>
  );
}

export default App;
