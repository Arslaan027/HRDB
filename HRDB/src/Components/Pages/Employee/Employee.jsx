import React, { useState } from "react";
import Equipments from "./Equip";
import Members from "./Members";
import KPI from "./KPI";
import EmployeeDetails from "./EmployeeDetails";
import User from "../../Daxbod/Profile/User";

const Employee = () => {
  const [selectedMember, setSelectedMember] = useState(User[0]);

  const handleDetailsClick = (user) => {
    setSelectedMember(user);
  };

  return (
    <div className="text-gray-500 bg-gray-100 p-4 sm:ml-64 flex flex-col lg:flex-row lg:gap-5 mt-14 dark:bg-gray-800">
      {/* Members Section */}
      <div className="flex flex-col justify-start items-center gap-5 flex-1">
        <div className="flex-1 overflow-y-auto max-h-[calc(70vh-3.5rem)] w-full">
          <Members onDetailsClick={handleDetailsClick} />
        </div>

        {/* EmployeeDetails Section */}
        {selectedMember && (
          <div className="flex w-full items-center">
            <EmployeeDetails employee={selectedMember} />
          </div>
        )}
      </div>

      {/* Right Section: Equipments and KPI */}
      <div className="flex-none lg:w-1/3 flex flex-col gap-5">
        {selectedMember && (
          <div className="transition-transform duration-500 ease-in-out transform translate-y-0 opacity-100 animate-fadeIn ">
            <Equipments member={selectedMember} />
            <KPI />
          </div>
        )}
      </div>
    </div>
  );
};

export default Employee;
