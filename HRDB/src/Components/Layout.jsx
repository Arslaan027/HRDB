import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Headbar-Sidebar/Header";
import Sidebar from "./Headbar-Sidebar/Sidebar";
import Main from "./Daxbod/Dashboard";

const Layout = ({ darkMode, toggleDarkMode, toggleSidebar, isSidebarOpen }) => {
  return (
    <div className={`min-h-screen ${darkMode ? "dark" : ""}`}>
      <Header
        toggleDarkMode={toggleDarkMode}
        darkMode={darkMode}
        toggleSidebar={toggleSidebar}
      />
      <Sidebar isSidebarOpen={isSidebarOpen} />
      <Outlet />
    </div>
  );
};

export default Layout;
