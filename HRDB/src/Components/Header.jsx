import React from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { MdSpaceDashboard } from "react-icons/md";
import logo from "../Images/newlogo.png";

const Header = ({ darkMode, toggleDarkMode, toggleSidebar }) => {
  return (
    <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-800">
      <div className="px-3 py-3 lg:px-5 lg:pl-3">
        <div className="flex items-center justify-between">
          {/* Menu Button for Small Screens */}
          <button
            className="inline-flex items-center p-2 text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400  dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-label="Toggle menu"
            onClick={toggleSidebar}
          >
            <HiOutlineMenuAlt2 className="text-2xl" />
          </button>

          {/* Centered Logo and Title */}
          <div className="flex-grow flex ml-5">
            <a href="#" className="flex items-center">
              {/* <MdSpaceDashboard className="me-3 h-15 text-xl text-[#c20001]" /> */}
              <img src={logo} className="me-3 h-10 text-xl" />
              <span className="text-xl font-semibold sm:text-2xl dark:text-white">
                DaxBod
              </span>
            </a>
          </div>

          {/* Dark Mode Toggle Button */}
          <button
            className="rounded-full p-2 dark:bg-slate-50 dark:text-slate-700"
            onClick={toggleDarkMode}
            aria-label="Toggle dark mode"
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
