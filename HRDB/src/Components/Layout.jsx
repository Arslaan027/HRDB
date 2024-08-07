import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import Header from "./Headbar-Sidebar/Header";
import Sidebar from "./Headbar-Sidebar/Sidebar";
import Login from "./Pages/Login/Login";

const Layout = ({ darkMode, toggleDarkMode, toggleSidebar, isSidebarOpen }) => {
  const auth = localStorage.getItem("loggedin");

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
    <Navigate to="/Login" />
  );
};

export default Layout;
