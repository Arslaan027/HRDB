import React from "react";
import Title from "./Title";
import adilbhai from "../../Images/adilbhai.jpg";
import asadbhai from "../../Images/asadbhai.jpg";
import salman from "../../Images/salman.jpg";
import arslaan from "../../Images/arslaan.jpg";

const users = [
  {
    name: "Shereyar SM Adil",
    country: "India",
    role: "Manager",
    image: adilbhai,
    bgColor: "bg-yellow-100",
  },
  {
    name: "Asad Khan",
    country: "Jamalpur",
    role: "Backend Developer",
    image: asadbhai,
    bgColor: "bg-blue-100",
  },
  {
    name: "Md Salman",
    country: "Ali Nager",
    role: "Web Developer",
    image: salman,
    bgColor: "bg-gray-100",
  },
  {
    name: "Arslaan Ahmad",
    country: "Iqra Colony",
    role: "Web Developer",
    image: arslaan,
    bgColor: "bg-slate-100",
  },
];

const Team = () => {
  return (
    <div className="bg-white p-3 rounded-2xl dark:bg-gray-600 dark:text-gray-300 flex-1 flex gap-5 flex-col">
      <Title>Teams</Title>
      {users.map((user, index) => (
        <div key={index} className="flex justify-between items-center my-2">
          <div className="flex items-center gap-3">
            <img
              src={user.image}
              alt={user.name}
              className="w-12 h-12 rounded-full"
            />
            <div>
              <h2 className="text-xl font-bold">{user.name}</h2>
              <span className="font-semibold text-gray-400 text-sm">
                {user.country}
              </span>
            </div>
          </div>
          <span
            className={`${user.bgColor} p-3 rounded-full text-xs text-gray-700 font-semibold dark:bg-gray-500 dark:text-gray-300`}
          >
            {user.role}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Team;
