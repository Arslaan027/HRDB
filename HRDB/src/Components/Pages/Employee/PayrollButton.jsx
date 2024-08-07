import React from "react";
import Title from "../../Daxbod/Title";
import { Link } from "react-router-dom";

const PayrollButton = ({
  employee,
  showButton = true,
  buttonClassName = "",
}) => {
  if (!employee) return null; // Return nothing if no employee is provided

  return (
    <div className="bg-gray-200 mt-5 p-6 rounded-xl dark:bg-gray-600 dark:text-gray-300 flex-1 flex flex-col gap-5">
      <Title>Selected Employee</Title>
      <div className="flex flex-col sm:flex-row md:flex-row items-center justify-between p-6 bg-white rounded-xl md:rounded-full shadow-md dark:bg-gray-700 dark:text-gray-300">
        {/* Employee details */}
        <div className="flex items-center gap-4 sm:gap-5">
          <img
            src={employee.image}
            alt={employee.name}
            className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover"
          />
          <div className="text-center sm:text-left">
            <h1 className="text-lg sm:text-xl font-bold">{employee.name}</h1>
            <p className="text-gray-400 text-sm sm:text-base">
              {employee.jobTitle}
            </p>
          </div>
        </div>
        {/* Button */}
        {showButton && (
          <div className="mt-4 sm:mt-0">
            <Link to={`/payroll/${employee.id}`}>
              <button
                className={`bg-gray-500 text-gray-300 p-2 sm:p-3 rounded-full text-xs sm:text-sm font-semibold dark:bg-gray-500 dark:text-gray-300 ${buttonClassName}`}
              >
                Get Details
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default PayrollButton;
