import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import stuco from "/logoh.png";
import "../fonts/fonts.css";
import "./navbar.css";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const closeMenu = () => setShowMenu(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="flex justify-center absolute top-0 w-full">
      <div className="flex flex-row text-black align-middle bg-[url('../bg.png')] items-center justify-between z-10 w-[90vw] m-auto rounded-3xl border-2 border-yellow-300 h-[12vh] mt-[2vh] relative">
        {/* Mobile Logo */}
        <Link to="/" className="lg:hidden absolute left-6 z-20">
          <img className="h-[5vh]" src="SYMPHONY LOGO.png" alt="Symphony Logo" />
        </Link>

        {/* Hamburger Menu */}
        <div className="lg:hidden absolute right-6 z-20 cursor-pointer" onClick={toggleMenu}>
          {showMenu ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>

        {/* Navigation Links */}
        <ul className={`flex items-center justify-center w-full transition-all duration-300 ease-in-out
          ${showMenu 
            ? "flex-col fixed top-0 left-0 w-full h-screen bg-black bg-opacity-95 pt-20 space-y-6" 
            : "hidden lg:flex lg:flex-row lg:space-y-0"}`}>
          <Link to="/events" onClick={closeMenu} className="list m-4 p-2 hover:translate-y-[-5px] transition-all duration-300 ">
            EVENTS
          </Link>
          <Link to="/shield" onClick={closeMenu} className="list m-4 p-2 hover:translate-y-[-5px] transition-all duration-300">
            SHIELD
          </Link>
          <Link to="/rules" onClick={closeMenu} className="list m-4 p-2 hover:translate-y-[-5px] transition-all duration-300">
            RULES
          </Link>
          {/* Desktop Logo */}
          <Link to="/" onClick={closeMenu} className="list m-4 p-2 hidden lg:block hover:translate-y-[-5px] transition-all duration-300">
            <img className="h-[7vh]" src="SYMPHONY LOGO.png" alt="Symphony Logo" />
          </Link>
          <Link to="/sponsors" onClick={closeMenu} className="list m-4 p-2 hover:translate-y-[-5px] transition-all duration-300">
            SPONSORS
          </Link>
          <Link to="/syahi" onClick={closeMenu} className="list m-4 p-2 hover:translate-y-[-5px] transition-all duration-300">
            SYAHI
          </Link>
          <Link to="/proshows" onClick={closeMenu} className="list m-4 p-2 hover:translate-y-[-5px] transition-all duration-300">
            PRO-SHOWS
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;