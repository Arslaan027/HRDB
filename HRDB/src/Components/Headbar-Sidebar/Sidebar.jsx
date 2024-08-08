import React from "react";
import { Link } from "react-router-dom";
import { FaCalendarAlt, FaUsersCog, FaListAlt } from "react-icons/fa";
import { IoIosLogIn } from "react-icons/io";

const Sidebar = ({ isSidebarOpen, toggleSidebar }) => {
  const isLoggedIn = localStorage.getItem("loggedin");

  const links = [
    {
      to: "/",
      icon: FaUsersCog,
      text: "Dashboard",
    },
    {
      to: "/employee",
      icon: FaCalendarAlt,
      text: "Employee",
      badge: {
        text: " ",
        color: "bg-gray-100 text-gray-800",
        darkColor: "dark:bg-gray-700 dark:text-gray-300",
      },
    },
    {
      to: "/lms",
      icon: FaListAlt,
      text: "LMS",
    },
    {
      to: "/Inventory",
      icon: FaListAlt,
      text: "Inventory",
    },
  ];

  const authLinks = [
    {
      to: "/login",
      icon: IoIosLogIn,
      text: "Log In",
    },
    {
      to: "/signup",
      icon: IoIosLogIn,
      text: "Sign Up",
    },
  ];

  return (
    <aside
      className={`fixed top-0 left-0 z-40 w-64 h-screen pt-20 bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700 transition-transform ${
        isSidebarOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="h-full px-3 pb-4 overflow-y-auto">
        <ul className="space-y-2 font-medium">
          {links.map((link, index) => (
            <li key={index}>
              <Link
                to={link.to}
                onClick={toggleSidebar} // Close sidebar when a link is clicked on mobile
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <link.icon className="mr-3" />
                <span className="flex-1 me-3">{link.text}</span>
                {link.badge && (
                  <span
                    className={`inline-flex items-center justify-center px-2 ms-3 text-sm font-medium rounded-full ${link.badge.color} ${link.badge.darkColor}`}
                  >
                    {link.badge.text}
                  </span>
                )}
              </Link>
            </li>
          ))}
          {!isLoggedIn &&
            authLinks.map((link, index) => (
              <li key={index}>
                <Link
                  to={link.to}
                  onClick={toggleSidebar} // Close sidebar when a link is clicked on mobile
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <link.icon className="mr-3" />
                  <span className="flex-1 me-3">{link.text}</span>
                </Link>
              </li>
            ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
