import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Layout from "./Components/Layout";
import Dashboard from "./Components/Daxbod/Dashboard";
import Employee from "./Components/Pages/Employee/Employee";
import Payroll from "./Components/Pages/Payroll/Payroll";
import LeaveManagement from "./Components/Pages/Payroll/LeaveManagement";
import Login from "./Components/Pages/Login/Login";
import Inventory from "./Components/Pages/Inveentory/Inventory";
import Signup from "./Components/Pages/Signup/Signup";
import LMS from "./Components/Pages/LMS/LMS";
import JobApplication from "./Components/Pages/Job-Application/JobApplication";

function App() {
  const [darkMode, setDarkMode] = React.useState(
    localStorage.getItem("theme") === "dark"
  );
  const [isSidebarOpen, setSidebarOpen] = React.useState(false);

  React.useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode((prev) => !prev);
  const toggleSidebar = () => setSidebarOpen((prev) => !prev);

  const isAuthenticated = localStorage.getItem("loggedin") === "true";

  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Protected Routes */}
        {isAuthenticated ? (
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
            <Route path="/Inventory" element={<Inventory />} />
            <Route path="/job-application" element={<JobApplication />} />
          </Route>
        ) : (
          <Route path="*" element={<Navigate to="/login" />} />
        )}
      </Routes>
    </Router>
  );
}

export default App;
