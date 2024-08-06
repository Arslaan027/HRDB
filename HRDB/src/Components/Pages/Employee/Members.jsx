// src/components/Employee/Members.js
import React, { useState } from "react";
import { users } from "../../Pages/Employee/Data";
import Title from "../../Daxbod/Title";
import SearchBar from "./SearchBar";

const Members = ({ onDetailsClick }) => {
  const [query, setQuery] = useState("");
  const [filteredUsers, setFilteredUsers] = useState(users);
  const [selectedDepartments, setSelectedDepartments] = useState([]);

  // Filter users based on query and selected departments
  const filterUsers = () => {
    let result = users;

    if (query) {
      result = result.filter((user) =>
        user.name.toLowerCase().includes(query.toLowerCase())
      );
    }

    if (selectedDepartments.length > 0) {
      result = result.filter((user) =>
        selectedDepartments.includes(user.department)
      );
    }

    setFilteredUsers(result);
  };

  const handleBackClick = () => {
    setQuery(""); // Clear the search query
    setSelectedDepartments([]); // Clear selected departments
    setFilteredUsers(users); // Reset to show all users
  };

  const handleCheckboxChange = (department) => {
    setSelectedDepartments((prev) =>
      prev.includes(department)
        ? prev.filter((d) => d !== department)
        : [...prev, department]
    );
  };

  const toggleDropdown = () => {
    const dropdown = document.getElementById("dropdownDefaultCheckbox");
    dropdown.classList.toggle("hidden");
  };

  React.useEffect(() => {
    filterUsers();
  }, [query, selectedDepartments]);

  return (
    <>
      <div className="flex top-0 left-0 right-0 justify-between items-center relative">
        <Title>Employees</Title>
        <div className="flex items-center gap-5">
          <SearchBar
            query={query}
            setQuery={setQuery}
            searchResult={filterUsers} // Use filterUsers instead of searchResult
          />
          <div>
            <button
              id="dropdownCheckboxButton"
              data-dropdown-toggle="dropdownDefaultCheckbox"
              className="text-white bg-gray-500 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2 text-center inline-flex dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800 items-center mr-8"
              type="button"
              onClick={toggleDropdown}
            >
              Department
              <svg
                className="w-2.5 h-2.5 ml-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>

            {/* Dropdown menu */}
            <div
              id="dropdownDefaultCheckbox"
              className="z-10 hidden absolute top-full mt-2 w-48 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
            >
              <ul
                className="p-3 space-y-3 text-sm text-gray-700 dark:text-gray-400"
                aria-labelledby="dropdownCheckboxButton"
              >
                <li>
                  <div className="flex items-center">
                    <input
                      id="checkbox-item-1"
                      type="checkbox"
                      checked={selectedDepartments.includes("IT")}
                      onChange={() => handleCheckboxChange("IT")}
                      className="w-4 h-4 text-gray-600 bg-gray-100 border-gray-300 rounded focus:ring-gray-500 dark:focus:ring-gray-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                    />
                    <label
                      htmlFor="checkbox-item-1"
                      className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      IT (Information Technology)
                    </label>
                  </div>
                </li>
                <li>
                  <div className="flex items-center">
                    <input
                      id="checkbox-item-2"
                      type="checkbox"
                      checked={selectedDepartments.includes("Sales")}
                      onChange={() => handleCheckboxChange("Sales")}
                      className="w-4 h-4 text-gray-600 bg-gray-100 border-gray-300 rounded focus:ring-gray-500 dark:focus:ring-gray-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                    />
                    <label
                      htmlFor="checkbox-item-2"
                      className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Sales Department
                    </label>
                  </div>
                </li>
                <li>
                  <div className="flex items-center">
                    <input
                      id="checkbox-item-3"
                      type="checkbox"
                      checked={selectedDepartments.includes("HR")}
                      onChange={() => handleCheckboxChange("HR")}
                      className="w-4 h-4 text-gray-600 bg-gray-100 border-gray-300 rounded focus:ring-gray-500 dark:focus:ring-gray-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                    />
                    <label
                      htmlFor="checkbox-item-3"
                      className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      HR (Human Resource)
                    </label>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4 mt-5">
        {filteredUsers.length === 0 ? (
          <div className="p-4 bg-white font-semibold rounded-lg flex flex-col gap-4 justify-center items-center shadow-md dark:bg-gray-600 dark:text-gray-300">
            <p>No results found</p>
            <button
              className="flex-shrink-0 bg-gray-500 hover:bg-gray-700 border-gray-500 hover:border-gray-700 text-sm border-4 text-white py-1 px-2 rounded"
              type="button"
              onClick={handleBackClick}
            >
              Back
            </button>
          </div>
        ) : (
          filteredUsers.map((user) => (
            <div
              key={user.id}
              className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-md cursor-pointer hover:bg-gray-100 dark:bg-gray-600 dark:text-gray-300 dark:hover:bg-gray-700"
              onClick={() => onDetailsClick(user)}
            >
              <img
                src={user.image}
                alt={user.name}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <h1 className="text-lg font-semibold">{user.name}</h1>
                <p className="text-gray-400">{user.jobTitle}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default Members;
