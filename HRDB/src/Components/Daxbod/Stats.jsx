import React from "react";

import {
  IoIosStats,
  IoIosSettings,
  IoIosPerson,
  IoIosPersonAdd,
  IoIosEyeOff,
} from "react-icons/io";
import Balance from "./Balance";

const Stats = ({ darkMode }) => {
  const empolyeesData = [
    {
      title: "Total Employees",
      icon: IoIosPerson,
      count: 200,
      bgColor: "bg-gray-100",
    },
    {
      title: "On Leave",
      icon: IoIosEyeOff,
      count: 15,
      bgColor: "bg-blue-100",
    },
    {
      title: "New Joinee",
      icon: IoIosPersonAdd,
      count: 25,
      bgColor: "bg-yellow-100",
    },
  ];

  return (
    <div className="flex flex-col md:flex-row gap-5">
      <div className="flex flex-col gap-4 h-full">
        {empolyeesData.map((data, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-2xl flex items-center gap-4 dark:bg-gray-600 dark:text-gray-400"
          >
            <span
              className={`${data.bgColor} px-3 py-6 text-2xl rounded-2xl dark:bg-gray-500`}
            >
              <data.icon />
            </span>
            <div>
              <h2 className="text-xl">
                <span className="text-2xl font-bold">{data.count}</span>/250
              </h2>
              <p className="font-bold">{data.title}</p>
            </div>
          </div>
        ))}
      </div>
      <Balance darkMode={darkMode} />
    </div>
  );
};

export default Stats;
