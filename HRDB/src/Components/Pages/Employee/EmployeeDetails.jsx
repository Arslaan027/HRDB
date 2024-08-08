// src/components/Employee/EmployeeDetails.js
import React from "react";
import PropTypes from "prop-types";
import Title from "../../Daxbod/Title";

const EmployeeDetails = ({ employee }) => {
  const employeeStore = localStorage.getItem("users");
  if (!employee) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-white p-6 rounded-2xl dark:bg-gray-600 dark:text-gray-300 flex-1 flex flex-col gap-5">
      <Title>Deatils</Title>
      <div className="flex flex-col lg:flex-row gap-5">
        {/* Basic Information Box */}
        <div className="flex-1 bg-gray-100 p-4 rounded-lg shadow-md dark:bg-gray-500">
          {employee.basicInfo.map((info, index) => (
            <div key={index} className="flex gap-3 items-center mb-2">
              <span className="bg-gray-300 text-gray-700 p-2 h-14 w-14 rounded-full font-bold flex items-center justify-center">
                {info.icon}
              </span>
              <div>
                <h1 className="text-lg font-semibold">{info.label}</h1>
                <p className="text-gray-400">{info.value}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Employment Information Box */}
        <div className="flex-1 bg-gray-100 p-4 rounded-lg shadow-md dark:bg-gray-500">
          {employee.employmentInfo.map((info, index) => (
            <div key={index} className="flex gap-3 items-center mb-2">
              <span className="bg-gray-300 text-gray-700 p-2 h-14 w-14 rounded-full font-bold flex items-center justify-center">
                {info.icon}
              </span>
              <div>
                <h1 className="text-lg font-semibold">{info.label}</h1>
                <p className="text-gray-400">{info.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmployeeDetails;
