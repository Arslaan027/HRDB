import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "../src/Components/Layout";
import Dashboard from "./Components/Daxbod/Dashboard";
import Employee from "./Components/Pages/Employee/Employee";
import Payroll from "../src/Components/Pages/Payroll/Payroll";
import LeaveManagement from "./Components/Pages/Payroll/LeaveManagement";
import Login from "./Components/Pages/Login/Login";
import Inventory from "./Components/Pages/Inveentory/Inventory";
import Signup from "./Components/Pages/Signup/Signup";
import LMS from "./Components/Pages/LMS/LMS";

function App() {
  const [darkMode, setDarkMode] = React.useState(false);
  const [isSidebarOpen, setSidebarOpen] = React.useState(true);

  const toggleDarkMode = () => setDarkMode((prev) => !prev);
  const toggleSidebar = () => setSidebarOpen((prev) => !prev);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />}>
          <Route
            path="/"
            element={
              <Layout
                darkMode={darkMode}
                toggleDarkMode={toggleDarkMode}
                toggleSidebar={toggleSidebar}
                isSidebarOpen={isSidebarOpen}
              />
            }
          >
            <Route index element={<Dashboard />} />
            <Route path="/employee" element={<Employee />} />
            <Route path="/payroll" element={<Payroll />} />
            <Route path="/lms" element={<LMS />} />
            <Route
              path="/leave-management/:employeeId"
              element={<LeaveManagement />}
            />
            <Route path="/payroll/:id" element={<Payroll />} />
            <Route path="/enventory" element={<Inventory />} />
          </Route>
        </Route>
        {/* ==========Login/Signup============ */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        {/* ====================== */}
      </Routes>
    </Router>
  );
}

export default App;
