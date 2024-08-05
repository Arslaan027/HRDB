import React from "react";
import Title from "../../Daxbod/Title";
import { Link } from "react-router-dom";

const PayrollButton = ({ employee }) => {
  if (!employee) return null; // Return nothing if no employee is provided

  return (
    <div className="bg-gray-200 mt-5 p-6 rounded-2xl dark:bg-gray-600 dark:text-gray-300 flex-1 flex flex-col gap-5">
      <Title>Payroll</Title>
      <div className="flex items-center justify-between p-6 bg-white rounded-full shadow-md dark:bg-gray-600 dark:text-gray-300">
        {/* Employee details on the left */}
        <div className="flex items-center gap-5">
          <img
            src={employee.image}
            alt={employee.name}
            className="w-16 h-16 rounded-full object-cover"
          />
          <div>
            <h1 className="text-xl font-bold">{employee.name}</h1>
            <p className="text-gray-400">{employee.jobTitle}</p>
          </div>
        </div>
        {/* Button on the right */}
        <div>
          <Link to={`/payroll/${employee.id}`}>
            <button className="bg-gray-500 text-gray-300 p-2 sm:p-3 rounded-full text-xs sm:text-sm font-semibold dark:bg-gray-500 dark:text-gray-300">
              LookUp
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PayrollButton;
