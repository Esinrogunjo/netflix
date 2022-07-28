import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="side-bar-wrapper">
      <div className="side-bar">
        <Link to={"/"}>Home</Link>
        <Link to={"/"}>TV shows</Link>
        <Link to={"/"}>Movies</Link>
        <Link to={"/"}>New &amp; Popular</Link>
        <Link to={"/"}>My List</Link>
      </div>
    </div>
  );
};

export default Sidebar;
