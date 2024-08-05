import React, { useState } from "react";
import PayrollButton from "../Employee/PayrollButton"; // Adjust path if necessary
import Members from "../Employee/Members"; // Adjust path if necessary
import { users } from "../../Pages/Employee/Data";

const Payroll = () => {
  const [selectedEmployee, setSelectedEmployee] = useState(users[0]);

  const handleDetailsClick = (employee) => {
    setSelectedEmployee(employee);
  };

  return (
    <div className="flex flex-col lg:flex-row lg:gap-5 mt-14 dark:bg-gray-800">
      <div className="flex-1 lg:w-1/2 lg:h-screen overflow-y-auto bg-gray-100 p-4 sm:ml-64 dark:bg-gray-800">
        <h1 className="text-2xl font-bold text-gray-500">Payroll Dashboard</h1>
        <div className="mt-6">
          <Members onDetailsClick={handleDetailsClick} />
        </div>
      </div>
      <div className="lg:w-1/2 p-4">
        {selectedEmployee ? (
          <PayrollButton employee={selectedEmployee} />
        ) : (
          <div className="text-gray-400 dark:text-gray-300">
            Select an employee to view payroll details.
          </div>
        )}
        <div className="flex gap-4 mt-5 w-full">
          <div className="bg-gray-300 p-6 dark:bg-gray-600 w-full md:w-1/2 rounded-xl shadow-lg flex flex-col justify-center items-center h-[12rem]">
            <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-300">
              Salary
            </h2>
            <p className="font-bold text-3xl text-gray-800 dark:text-gray-100 mt-2">
              2.3 LPA
            </p>
          </div>
          <div className="bg-gray-300 p-6 dark:bg-gray-600 w-full md:w-1/2 rounded-xl shadow-lg flex flex-col justify-center items-center h-[12rem]">
            <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-300">
              Allowance
            </h2>
            <p className="font-bold text-gray-800 dark:text-gray-100 mt-2 text-center">
              <span className="block">HRA: 30k/Month</span>
              <span className="block">TA: 30k/Month</span>
              <span className="block">PF: 30k/Month</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payroll;
