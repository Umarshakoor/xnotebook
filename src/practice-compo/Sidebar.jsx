import { useEffect, useState } from "react";
import { Home, Settings, Info } from "@mui/icons-material";
import "./sidebar.css";

function Sidebar() {
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
      <div className="navbar">
        <button className="hamburger" onClick={toggleSidebar}>
          &#9776;
        </button>
      </div>
      <div className={`sidebar ${isSidebarOpen ? "expaned" : "collapsed"}`}>
        <ul>
          <li>
            <Home />
            {isSidebarOpen && <span>Home</span>}
          </li>
          <li>
            <Settings />
            {isSidebarOpen && <span>Settings</span>}
          </li>
          <li>
            <Info />
            {isSidebarOpen && <span>About</span>}
          </li>
        </ul>
      </div>
      <div>
        <h1>Responsive Sidebar</h1>
      </div>
    </div>
  );
}

export default Sidebar;
