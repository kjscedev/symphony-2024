import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import stuco from "/logoh.png";
import "../fonts/fonts.css";
import "./navbar.css";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const closeMenu = () => setIsOpen(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className=" flex justify-center absolute top-0 w-full">
      <div className="flex flex-row  text-white align-middle  bg-[url('../bgsym.png')] bg- items-center justify-between z-10  w-[90vw] m-auto rounded-3xl border-2 border-yellow-300 h-[12vh] mt-[2vh]">
        {/* <div className="flex items-center align-middle">
        <div className="font-Satoshi text-3xl flex items-center absolute left-20 top-[1rem] font-black">
          STUDENTS’ COUNCIL
        </div>
        <div className="">
          <Link to="/">
            <img className=" w-[60px]" src={stuco} alt="logo" />
          </Link>
        </div>
      </div> */}

        <div className="menu-icon" onClick={toggleMenu}>
          {showMenu ? <FaTimes /> : <FaBars />}
        </div>

        <ul className={showMenu ? "nav-menu active" : "nav-menu"}>
          <Link to="/events" onClick={closeMenu} className="list m-4 p-2">
            EVENTS
          </Link>
          <Link to="/shield" onClick={closeMenu} className="list m-4 p-2">
            SHIELD
          </Link>
          <Link to="/rules" onClick={closeMenu} className="list m-4 p-2">
            RULES
          </Link>
          <Link to="/" onClick={closeMenu} className="list m-4 p-2">
            <img className="h-[7vh]" src="SYMPHONY LOGO.png"></img>
          </Link>
          <Link to="/sponsors" onClick={closeMenu} className="list m-4 p-2">
            SPONSORS
          </Link>
          <Link to="/syahi" onClick={closeMenu} className="list m-4 p-2">
            SYAHI
          </Link>
          <Link to="/proshows" onClick={closeMenu} className="list m-4 p-2">
            PRO-SHOWS
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
