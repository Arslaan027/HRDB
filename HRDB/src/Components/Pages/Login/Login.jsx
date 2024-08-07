import React, { useState, useEffect } from "react";
import logo from "../../../Images/newlogo.png";
import { useNavigate } from "react-router-dom";
import { FaSun, FaMoon } from "react-icons/fa";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // const storedEmail = JSON.parse(localStorage.getItem("email"));
    const storedEmail = "ene@ene.com";

    // const storedPassword = JSON.parse(localStorage.getItem("password"));
    const storedPassword = "12345";

    if (email === storedEmail && password === storedPassword) {
      localStorage.setItem("loggedin", true);
      localStorage.setItem("user", JSON.stringify(email));
      navigate("/");
    } else {
      alert("Wrong Credentials");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-800 p-4 sm:p-6 md:p-8">
      <div className="flex flex-col md:flex-row w-full max-w-4xl bg-gray-100 dark:bg-gray-800">
        {/* Left Section: Logo and Text */}
        <div className="bg-gray-700 dark:bg-gray-900 p-6 md:p-8 rounded-t-lg md:rounded-l-lg shadow-lg flex flex-col items-center justify-center md:w-1/2 mb-4 md:mb-0">
          <img
            src={logo}
            alt="Company Logo"
            className="mb-4 sm:mb-6 h-16 sm:h-20 md:h-24 w-auto"
          />
          <div className="font-[Outfit] text-white text-lg sm:text-xl md:text-2xl mb-2 sm:mb-4 md:mb-2 text-center">
            Engineering and Environmental Solutions
          </div>
          <div className="text-white text-sm sm:text-md md:text-xl text-center">
            Creating Sustainable Tomorrows
          </div>
        </div>

        {/* Right Section: Login Form */}
        <div className="relative bg-white dark:bg-gray-900 p-6 md:p-8 rounded-b-lg md:rounded-r-lg shadow-lg md:w-1/2">
          <div className="absolute top-4 right-4">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="bg-gray-200 dark:bg-gray-700 p-2 rounded-full"
              aria-label="Toggle dark mode"
            >
              {darkMode ? (
                <FaSun className="text-yellow-500" />
              ) : (
                <FaMoon className="text-gray-800" />
              )}
            </button>
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-100 mb-4 sm:mb-6">
            Login
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="email"
                className="block text-gray-600 dark:text-gray-300 mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 dark:focus:ring-gray-400 dark:bg-gray-800 dark:text-gray-100"
                placeholder="Enter your email"
                required
                autoComplete="email"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-gray-600 dark:text-gray-300 mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 dark:focus:ring-gray-400 dark:bg-gray-800 dark:text-gray-100"
                placeholder="Enter your password"
                autoComplete="current-password"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-gray-500 text-white font-semibold rounded-lg shadow-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 dark:focus:ring-gray-400"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
