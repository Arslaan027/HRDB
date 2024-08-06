// src/components/Pages/Employee/EmpDetails.js
import React from "react";
import { useParams } from "react-router-dom";
import EmployeeDetails from "./EmployeeDetails";
import Equipments from "./Equip";
import PayrollButton from "./PayrollButton";
import KPI from "./KPI";
import { users } from "../Employee/Data"; // Adjust the path to your data file

const EmpDetails = () => {
  const { employeeId } = useParams();
  const employee = users.find((user) => user.id === employeeId);

  if (!employee) {
    return <div>Employee not found</div>;
  }

  return (
    <div className="text-gray-500 bg-gray-100 p-4 sm:ml-64 flex flex-col lg:flex-row lg:gap-5 mt-14 dark:bg-gray-800">
      {/* EmployeeDetails Section */}
      <div className="flex flex-col justify-start items-center gap-5 flex-1">
        <EmployeeDetails employee={employee} />
      </div>

      {/* Right Section: Equipments, PayrollButton, and KPI */}
      <div className="flex-none lg:w-1/3 flex flex-col gap-5">
        <Equipments member={employee} />
        <PayrollButton employee={employee} />
        <KPI />
      </div>
    </div>
  );
};

export default EmpDetails;
