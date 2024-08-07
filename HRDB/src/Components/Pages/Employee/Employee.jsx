import React, { useState } from "react";

import Members from "./Members";

import { users } from "../../Pages/Employee/Data";
import PayrollButton from "./PayrollButton";

const Employee = () => {
  const [selectedMember, setSelectedMember] = useState(users[0]);

  const handleDetailsClick = (user) => {
    setSelectedMember(user);
  };

  return (
    <div className="text-gray-500 bg-gray-100 p-4 sm:ml-64 flex flex-col lg:gap-5 mt-14 dark:bg-gray-800">
      {/* Details */}
      <div className="flex-none  flex flex-col gap-5">
        {selectedMember && (
          <div className="transition-transform duration-500 ease-in-out transform translate-y-0 opacity-100 animate-fadeIn">
            <PayrollButton employee={selectedMember} />
          </div>
        )}
      </div>
      {/* Members Section */}
      <div className="flex flex-col justify-start items-center gap-5 flex-1">
        <div className="flex-1 overflow-y-auto max-h-[calc(70vh-3.5rem)] w-full">
          <Members onDetailsClick={handleDetailsClick} />
        </div>
      </div>
    </div>
  );
};

export default Employee;
