import React from "react";
import navLinks from "../../config/navLinks";

function Menu({ setCurrentPage }) {
  return (
    <div className="w-1/3 absolute h-screen left-0 top-0 bg-slate-500">
      {navLinks.map((navlink) => (
        <li
          onClick={() => setCurrentPage(navlink.path)}
          className="font-bold cursor-pointer"
        >
          {navlink.name}
        </li>
      ))}
    </div>
  );
}

export default Menu;
