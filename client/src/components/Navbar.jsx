import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header>
      <nav className="flex items-center justify-between bg-black h-20 border-b border-dotted border-gray-600 fixed top-0 w-full z-50 px-5">
        <div className="flex items-center">
          <NavLink className="text-white italic text-2xl" to="/">
            Prestige Performance
          </NavLink>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white">
            ☰
          </button>
        </div>
        <ul className={`flex-col md:flex-row md:flex gap-4 ${isOpen ? "flex" : "hidden"} md:flex mt-0 absolute md:relative top-20 md:top-0 left-0 w-full md:w-auto bg-black md:bg-transparent`}>
          <li>
            <NavLink
              to="/"
              className="text-white ml-4 text-lg hover:underline"
              onClick={closeMenu}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/inventory"
              className="text-white ml-4 text-lg hover:underline"
              onClick={closeMenu}
            >
              Inventory
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className="text-white ml-4 text-lg hover:underline"
              onClick={closeMenu}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
