import React, { useState, useEffect } from "react";
import { users as initialUsers } from "../../Pages/Employee/Data";
import Title from "../../Daxbod/Title";
import SearchBar from "./SearchBar";
import DepartmentFilter from "./DepartmentFilter";
import { useDropzone } from "react-dropzone";
import { MdCancel } from "react-icons/md";
import { IoMdPersonAdd } from "react-icons/io";
import Select from "react-select";

const equipmentOptions = [
  { value: "Laptop", label: "Laptop" },
  { value: "Desktop", label: "Desktop" },
  { value: "Tablet", label: "Tablet" },
  { value: "Phone", label: "Phone" },
];

const Members = ({ onDetailsClick }) => {
  const [query, setQuery] = useState("");
  const [filteredUsers, setFilteredUsers] = useState(initialUsers);
  const [selectedDepartments, setSelectedDepartments] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [newEmployee, setNewEmployee] = useState({
    name: "",
    id: "",
    country: "",
    joiningDate: "",
    jobTitle: "",
    role: "",
    image: "",
    employmentType: "",
    manager: "",
    dob: "",
    phone: "",
    email: "",
    salary: "",
    allowance: "",
    hra: "",
    ta: "",
    leave: "",
    pf: "",
    department: "",
    equipment: [],
  });

  // Handle file drop
  const { getRootProps, getInputProps, acceptedFiles } = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFiles) => {
      const file = acceptedFiles[0];
      setNewEmployee((prev) => ({
        ...prev,
        image: URL.createObjectURL(file),
      }));
    },
  });

  // Filter users based on query and selected departments
  const filterUsers = () => {
    let result = initialUsers;

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
    setFilteredUsers(initialUsers); // Reset to show all users
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

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setNewEmployee((prev) => ({ ...prev, [name]: value }));
  };

  const handleEquipmentChange = (selectedOptions) => {
    setNewEmployee((prev) => ({
      ...prev,
      equipment: selectedOptions
        ? selectedOptions.map((option) => option.value)
        : [],
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const newUser = { id: Date.now().toString(), ...newEmployee }; // Generate unique ID and add employee
    setFilteredUsers((prev) => [...prev, newUser]);
    setNewEmployee({
      name: "",
      id: "",
      country: "",
      joiningDate: "",
      jobTitle: "",
      role: "",
      image: "",
      employmentType: "",
      manager: "",
      dob: "",
      phone: "",
      email: "",
      salary: "",
      allowance: "",
      hra: "",
      ta: "",
      leave: "",
      pf: "",
      department: "",
      equipment: [],
    });
    setShowForm(false);
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
          <button
            onClick={() => setShowForm((prev) => !prev)}
            className="mr-2 bg-gray-500 text-white py-3 px-3 rounded-full flex items-center justify-center"
          >
            {showForm ? (
              <MdCancel className="text-xl" />
            ) : (
              <IoMdPersonAdd className="text-xl" />
            )}
          </button>
        </div>
      </div>

      {showForm && (
        <div className="mt-6 p-4 bg-white rounded-lg shadow-md dark:bg-gray-600 dark:text-gray-300">
          <h2 className="text-lg font-semibold mb-4">Add New Employee</h2>
          <form onSubmit={handleFormSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {Object.keys(newEmployee).map((key) => (
                <div key={key}>
                  <label
                    htmlFor={key}
                    className="block text-gray-600 dark:text-gray-300 mb-2"
                  >
                    {key.charAt(0).toUpperCase() + key.slice(1)}
                  </label>
                  {key === "image" ? (
                    <div
                      {...getRootProps({ className: "dropzone" })}
                      className="border-2 border-dashed border-gray-300 p-4 rounded-lg flex flex-col items-center justify-center text-gray-600 dark:text-gray-300 dark:border-gray-700"
                    >
                      <input {...getInputProps()} />
                      {newEmployee.image ? (
                        <img
                          src={newEmployee.image}
                          alt="Employee"
                          className="w-32 h-32 object-cover rounded-lg mt-2"
                        />
                      ) : (
                        <p>Drag & drop an image here, or click to select one</p>
                      )}
                    </div>
                  ) : key === "equipment" ? (
                    <Select
                      isMulti
                      id={key}
                      name={key}
                      options={equipmentOptions}
                      value={equipmentOptions.filter((option) =>
                        newEmployee.equipment.includes(option.value)
                      )}
                      onChange={handleEquipmentChange}
                      className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 dark:focus:ring-gray-400 dark:bg-gray-800 dark:text-gray-100"
                    />
                  ) : (
                    <input
                      type="text"
                      id={key}
                      name={key}
                      value={newEmployee[key]}
                      onChange={handleFormChange}
                      className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 dark:focus:ring-gray-400 dark:bg-gray-800 dark:text-gray-100"
                      placeholder={`Enter ${key}`}
                    />
                  )}
                </div>
              ))}
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-gray-500 text-white font-semibold rounded-lg shadow-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 dark:focus:ring-gray-400"
            >
              Add Employee
            </button>
          </form>
        </div>
      )}

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
              <div>
                <h3 className="text-lg font-semibold">{user.name}</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {user.department}
                </p>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default Members;
