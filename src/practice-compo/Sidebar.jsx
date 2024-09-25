import { Home, Settings, Info } from "@mui/icons-material";
import "./sidebar.css";

function Sidebar({ isSidebarOpen }) {
  return (
    <div className="sidebar-conatiner">
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
    </div>
  );
}

export default Sidebar;
