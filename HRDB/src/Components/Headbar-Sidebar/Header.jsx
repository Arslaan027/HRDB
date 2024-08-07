import React, { useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import logo from "../../Images/newlogo.png";
import { Link, useNavigate } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";

const Header = ({ darkMode, toggleDarkMode, toggleSidebar }) => {
  const navigate = useNavigate();
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("loggedin");
    navigate("/Login");
  };

  return (
    <>
      <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-800">
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            {/* Menu Button for Small Screens */}
            <button
              className="inline-flex items-center sm:hidden p-2 text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-label="Toggle menu"
              onClick={toggleSidebar}
            >
              <HiOutlineMenuAlt2 className="text-2xl" />
            </button>

            {/* Centered Logo and Title */}
            <div className="flex-grow flex ml-5">
              <Link to="/" className="flex items-center">
                <img src={logo} className="me-3 h-10 text-xl" alt="Logo" />
              </Link>
              <div className="flex items-center">
                <span className="text-lg font-semibold md-text-lg sm:text-xl dark:text-white">
                  Daxbod
                </span>
              </div>
            </div>

            {/* Dark Mode Toggle Button */}
            <button
              className="bg-slate-200 rounded-full p-2 mr-2 dark:bg-slate-500 dark:text-slate-200"
              onClick={toggleDarkMode}
              aria-label="Toggle dark mode"
            >
              {darkMode ? (
                <FaSun className="text-xl" />
              ) : (
                <FaMoon className="text-xl" />
              )}
            </button>
            <button
              type="button"
              onClick={() => setShowLogoutModal(true)}
              className="bg-slate-200 rounded-md p-1 dark:bg-slate-500 dark:text-slate-200 flex items-center gap-2"
            >
              <FiLogOut className="text-xl" /> LogOut
            </button>
          </div>
        </div>
      </nav>

      {/* Logout Confirmation Modal */}
      {showLogoutModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-20 z-10">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-lg font-semibold dark:text-white mb-4">
              Do you really want to Logout?
            </h2>
            <div className="flex justify-center space-x-4">
              <button
                onClick={handleLogout}
                className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 focus:outline-none"
              >
                Logout
              </button>
              <button
                onClick={() => setShowLogoutModal(false)}
                className="bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-white px-4 py-2 rounded-lg hover:bg-gray-400 dark:hover:bg-gray-600 focus:outline-none"
              >
                Stay
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
