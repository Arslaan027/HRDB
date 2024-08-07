import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import Header from "./Headbar-Sidebar/Header";
import Sidebar from "./Headbar-Sidebar/Sidebar";

const Layout = ({ darkMode, toggleDarkMode, toggleSidebar, isSidebarOpen }) => {
  const auth = localStorage.getItem("loggedin") === "true";

  return auth ? (
    <div className={`min-h-screen ${darkMode ? "dark" : ""}`}>
      <Header
        toggleDarkMode={toggleDarkMode}
        darkMode={darkMode}
        toggleSidebar={toggleSidebar}
      />
      <Sidebar isSidebarOpen={isSidebarOpen} />
      <Outlet />
    </div>
  ) : (
    <Navigate to="/login" />
  );
};

export default Layout;
