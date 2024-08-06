import React from "react";

const DepartmentFilter = ({
  selectedDepartments,
  handleCheckboxChange,
  toggleDropdown,
}) => {
  return (
    <div className="relative">
      <button
        id="dropdownCheckboxButton"
        data-dropdown-toggle="dropdownDefaultCheckbox"
        className="text-white bg-gray-500 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2 text-center inline-flex dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800 items-center"
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
        className="z-10 hidden absolute top-full mt-2 w-full sm:w-48 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
      >
        <ul
          className="p-3 space-y-3 text-sm text-gray-700 dark:text-gray-400"
          aria-labelledby="dropdownCheckboxButton"
        >
          {["IT", "Sales", "HR"].map((department) => (
            <li key={department}>
              <div className="flex items-center">
                <input
                  id={`checkbox-item-${department}`}
                  type="checkbox"
                  checked={selectedDepartments.includes(department)}
                  onChange={() => handleCheckboxChange(department)}
                  className="w-4 h-4 text-gray-600 bg-gray-100 border-gray-300 rounded focus:ring-gray-500 dark:focus:ring-gray-600 dark:bg-gray-600 dark:border-gray-500"
                />
                <label
                  htmlFor={`checkbox-item-${department}`}
                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  {department}
                </label>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DepartmentFilter;
