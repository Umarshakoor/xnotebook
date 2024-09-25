import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./practice-compo/Navbar";
import Sidebar from "./practice-compo/Sidebar";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  // check screen size for auto collapse on small screen
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setIsSidebarOpen(false); //collapse on small screen
      } else {
        setIsSidebarOpen(true); // expand on large screen
      }
    };

    //add event listener for screen size
    window.addEventListener("resize", handleResize);
    handleResize(); // call it once initially to set correct sidebar state
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // toggle sidebar manually
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <div>
      <Navbar toggleSidebar={toggleSidebar} />
      <Sidebar isSidebarOpen={isSidebarOpen} />
      <h2>umarr</h2>
    </div>
  );
}

export default App;
