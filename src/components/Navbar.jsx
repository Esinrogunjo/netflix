import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = ({ setEnableSidebar }) => {
  const [color, setColor] = useState(false);
  const [activate, setActivate] = useState(false);

  const handleColorChange = () => {
    if (window.scrollY >= 64) {
      setColor(true);
    } else {
      setColor(false);
    }
    //console.log(color);
  };
  const handleSidebarChange = () => {
    setEnableSidebar(!activate);

    setActivate(!activate);
  };

  window.addEventListener("scroll", handleColorChange);
  return (
    <div className={color ? "nav-container active" : "nav-container"}>
      <div className="nav-wrapper">
        <div className="flex items-center gap-x-8 ">
          <h1 className="text-red-600 text-4xl font-bold cursor-pointer">
            NETFLIX{" "}
          </h1>
          <div className="nav-list">
            <Link to={"/"}>Home</Link>
            <Link to={"/"}>TV shows</Link>
            <Link to={"/"}>Movies</Link>
            <Link to={"/"}>New &amp; Popular</Link>
            <Link to={"/"}>My List</Link>
          </div>
          <div className="mobile-menu" onClick={handleSidebarChange}>
            Browse <img src="/arrowdown.svg" alt="arrow" />
          </div>
        </div>

        <div>
          <button className="signin">Sign In</button>
          <button className="signup ">Sign Up</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
