import React, { useState } from "react";
import PayrollButton from "../Employee/PayrollButton"; // Adjust path if necessary
import Members from "../Employee/Members"; // Adjust path if necessary
import { users } from "../../Pages/Employee/Data";
import MonthlyPayrole from "./MonthlyLeave";
import Leavegraph from "./Leavegraph";

const Payroll = () => {
  const [selectedEmployee, setSelectedEmployee] = useState(users[0]);

  const handleDetailsClick = (employee) => {
    setSelectedEmployee(employee);
  };

  return (
    <div className="flex flex-col lg:flex-row lg:gap-5 mt-14 dark:bg-gray-800">
      <div className="flex-1 lg:w-1/2 lg:h-screen overflow-y-auto bg-gray-100 p-4 sm:ml-64 dark:bg-gray-800">
        <>
          <PayrollButton
            employee={selectedEmployee}
            showButton={false}
            buttonClassName="w-24" // Adjust the width as needed
          />
          <div className="flex gap-4 mt-5 w-full">
            <div className="bg-gray-300 p-6 dark:bg-gray-600 w-full md:w-1/3 rounded-xl shadow-lg flex flex-col justify-center items-center h-[12rem]">
              <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-300">
                Salary
              </h2>
              <p className="font-bold text-3xl text-gray-800 dark:text-gray-100 mt-2">
                {selectedEmployee.salary}
              </p>
            </div>
            <div className="bg-gray-300 p-6 dark:bg-gray-600 w-full md:w-1/3 rounded-xl shadow-lg flex flex-col justify-center items-center h-[12rem]">
              <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-300">
                Monthly Leaves
              </h2>
              <p className="font-bold text-3xl text-gray-800 dark:text-gray-100 mt-2">
                <span>{selectedEmployee.leave}</span>/5
              </p>
            </div>
            <div className="bg-gray-300 p-6 dark:bg-gray-600 w-full md:w-1/3 rounded-xl shadow-lg flex flex-col justify-center items-center h-[12rem]">
              <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-300">
                Allowance
              </h2>
              <p className="font-bold text-gray-800 dark:text-gray-100 mt-2 text-center">
                <span className="block">HRA: {selectedEmployee.hra}</span>
                <span className="block">TA: {selectedEmployee.ta}</span>
                <span className="block">PF: {selectedEmployee.pf}</span>
              </p>
            </div>
          </div>
        </>
        <div className="flex gap-5">
          <MonthlyPayrole className="w-2/3" />
          <Leavegraph className="w-1/3" />
        </div>
      </div>
    </div>
  );
};

export default Payroll;
