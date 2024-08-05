// src/components/Employee/Members.js
import React from "react";
import { users } from "../../Pages/Employee/Data";
import Title from "../../Daxbod/Title";

const Members = ({ onDetailsClick }) => {
  return (
    <div className="flex flex-col gap-4">
      <Title>Employees</Title>
      {users.map((user) => (
        <div
          key={user.id}
          className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-md cursor-pointer hover:bg-gray-100 dark:bg-gray-600 dark:text-gray-300 dark:hover:bg-gray-700"
          onClick={() => onDetailsClick(user)}
        >
          <img
            src={user.image}
            alt={user.name}
            className="w-16 h-16 rounded-full object-cover"
          />
          <div>
            <h1 className="text-lg font-semibold">{user.name}</h1>
            <p className="text-gray-400">{user.jobTitle}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Members;
