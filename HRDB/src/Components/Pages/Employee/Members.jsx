import React, { useState, useEffect } from "react";
import { users } from "../../Pages/Employee/Data";
import Title from "../../Daxbod/Title";
import SearchBar from "./SearchBar";
import DepartmentFilter from "./DepartmentFilter";

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

  useEffect(() => {
    filterUsers();
  }, [query, selectedDepartments]);

  return (
    <>
      <div className="flex flex-col sm:flex-row justify-between items-center relative">
        <Title>Employees</Title>
        <div className="flex flex-col justify-center items-center sm:flex-row gap-5">
          <SearchBar
            query={query}
            setQuery={setQuery}
            searchResult={filterUsers}
          />
          <DepartmentFilter
            selectedDepartments={selectedDepartments}
            handleCheckboxChange={handleCheckboxChange}
            toggleDropdown={toggleDropdown}
          />
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
              className="flex flex-col sm:flex-row items-center gap-4 p-4 bg-white rounded-lg shadow-md cursor-pointer hover:bg-gray-100 dark:bg-gray-600 dark:text-gray-300 dark:hover:bg-gray-700"
              onClick={() => onDetailsClick(user)}
            >
              <img
                src={user.image}
                alt={user.name}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div className="text-center sm:text-left">
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
