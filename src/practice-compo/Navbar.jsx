import React from "react";

function Navbar({ toggleSidebar }) {
  return (
    <div>
      <div className="navbar">
        <button className="hamburger" onClick={toggleSidebar}>
          &#9776;
        </button>
      </div>
    </div>
  );
}

export default Navbar;
