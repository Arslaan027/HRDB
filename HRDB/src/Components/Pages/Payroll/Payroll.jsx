import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import PayrollButton from "../Employee/PayrollButton";
import Equipments from "../Employee/Equip";
import EmployeeDetails from "../Employee/EmployeeDetails"; // Import EmployeeDetails
import { users } from "../../Pages/Employee/Data";
import MonthlyPayrole from "./MonthlyLeave";
import Leavegraph from "./Leavegraph";
import KPI from "../Employee/KPI";

const Payroll = () => {
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      const employee = users.find((user) => user.id === parseInt(id));
      setSelectedEmployee(employee);
    }
  }, [id]);

  const handleDetailsClick = (employee) => {
    setSelectedEmployee(employee);
    navigate(`/payroll/${employee.id}`);
  };

  if (!selectedEmployee) return <p>Loading...</p>;

  return (
    <div className="flex flex-col lg:flex-row lg:gap-5 mt-14 dark:bg-gray-800">
      <div className="flex-1 lg:w-1/2 lg:h-screen overflow-y-auto bg-gray-100 p-4 sm:ml-64 dark:bg-gray-800">
        {/* PayrollButton Component */}
        <div className="w-full mb-4">
          <PayrollButton
            employee={selectedEmployee}
            showButton={false}
            buttonClassName="w-24"
          />
        </div>

        {/* Employee Details Section */}
        <div className="w-full mb-4 bg-white dark:bg-gray-900 rounded-xl shadow-md p-4">
          <EmployeeDetails employee={selectedEmployee} />
        </div>

        {/* Other Details */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <div className="bg-gray-300 p-4 dark:bg-gray-600 rounded-xl shadow-lg flex flex-col justify-center items-center h-[12rem]">
            <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-300">
              Salary
            </h2>
            <p className="font-bold text-2xl md:text-3xl text-gray-800 dark:text-gray-100 mt-2">
              {selectedEmployee.salary}
            </p>
          </div>
          <div className="bg-gray-300 p-4 dark:bg-gray-600 rounded-xl shadow-lg flex flex-col justify-center items-center h-[12rem]">
            <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-300">
              Monthly Leaves
            </h2>
            <p className="font-bold text-2xl md:text-3xl text-gray-800 dark:text-gray-100 mt-2">
              {selectedEmployee.leave}/5
            </p>
          </div>
          <div className="bg-gray-300 p-4 dark:bg-gray-600 rounded-xl shadow-lg flex flex-col justify-center items-center h-[12rem]">
            <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-300">
              Allowance
            </h2>
            <p className="font-bold text-sm md:text-base text-gray-800 dark:text-gray-100 mt-2 text-center">
              <span className="block">HRA: {selectedEmployee.hra}</span>
              <span className="block">TA: {selectedEmployee.ta}</span>
              <span className="block">PF: {selectedEmployee.pf}</span>
            </p>
          </div>
        </div>

        {/* MonthlyPayrole and Leavegraph Components */}
        <div className="flex flex-col md:flex-row gap-5 mt-5">
          <MonthlyPayrole className="flex-1 md:w-full" />
          <Leavegraph className="flex-1 md:w-full" />
        </div>
      </div>

      {/* Right Section: Equipments and KPI */}
      <div className="flex-none lg:w-1/3 flex flex-col gap-5 p-4">
        {selectedEmployee && (
          <div className="transition-transform duration-500 ease-in-out transform translate-y-0 opacity-100 animate-fadeIn">
            <Equipments member={selectedEmployee} />
            <KPI />
          </div>
        )}
      </div>
    </div>
  );
};

export default Payroll;
