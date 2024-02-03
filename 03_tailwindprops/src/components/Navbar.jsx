import "./Navbar.css"
import React from "react";
function Navbar({li1, li2, li3="Contact"}) {
  return (
    <>
      <div className="navbar">
        <nav>
          <ul>
            <li>{li1}</li>
            <li>{li2}</li>
            <li>{li3}</li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Navbar
