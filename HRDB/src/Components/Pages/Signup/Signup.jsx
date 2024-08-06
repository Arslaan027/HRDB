import React, { useState } from "react";
import logo from "../../../Images/newlogo.png";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-800 p-4 sm:p-6 md:p-8 ml-64">
      <div className="flex flex-col md:flex-row w-full max-w-4xl bg-gray-100 dark:bg-gray-800">
        {/* Left Section: Logo and Text */}
        <div className="bg-gray-700 dark:bg-gray-900 p-4 sm:p-6 md:p-8 rounded-t-lg md:rounded-l-lg shadow-lg flex flex-col items-center justify-center md:w-1/2 mb-4 md:mb-0">
          <img
            src={logo}
            alt="Company Logo"
            className="mb-4 sm:mb-6 h-16 sm:h-20 md:h-24 w-auto"
          />
          <div className="font-[Outfit] text-white text-lg sm:text-xl md:text-2xl  mb-2 sm:mb-4 md:mb-2 text-center">
            Engineering and Environmental Solutions
          </div>
          <div className="text-white text-sm sm:text-md md:text-xl  text-center">
            Creating Susutainable Tomorrows
          </div>
        </div>

        {/* Right Section: Sign Up Form */}
        <div className="bg-white dark:bg-gray-900 p-4 sm:p-6 md:p-8 rounded-b-lg md:rounded-r-lg shadow-lg md:w-1/2">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-100 mb-4 sm:mb-6">
            Sign Up
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-gray-600 dark:text-gray-300 mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 dark:focus:ring-gray-400 dark:bg-gray-800 dark:text-gray-100"
                placeholder="Enter your name"
                required
              />
            </div>
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
                // onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 dark:focus:ring-gray-400 dark:bg-gray-800 dark:text-gray-100"
                placeholder="Enter your email"
                required
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
                // onChange={(e) => setPassword(e.target.value)}
                className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 dark:focus:ring-gray-400 dark:bg-gray-800 dark:text-gray-100"
                placeholder="Enter your password"
                required
              />
            </div>
            <div>
              <label
                htmlFor="confirm-password"
                className="block text-gray-600 dark:text-gray-300 mb-2"
              >
                Confirm Password
              </label>
              <input
                type="password"
                id="confirm-password"
                // value={confirmPassword}
                // onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 dark:focus:ring-gray-400 dark:bg-gray-800 dark:text-gray-100"
                placeholder="Confirm your password"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-gray-500 text-white font-semibold rounded-lg shadow-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 dark:focus:ring-gray-400"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
