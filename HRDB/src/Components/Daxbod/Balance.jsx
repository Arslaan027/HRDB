import React from "react";
import Title from "./Title";
import { FiSend } from "react-icons/fi";
import BarChart from "./BarChart";

const Balance = ({ darkMode }) => {
  return (
    <div className="bg-white p-5 rounded-2xl dark:bg-gray-600 dark:text-gray-300 flex-1">
      <div className="flex justify-between items-center">
        <Title>Balance</Title>
        <FiSend className="bg-gray-500 p-2 rounded-full text-gray-300 h-8 w-8" />
      </div>
      <div>
        <h1 className="text-2xl font-bold">
          1,30,23,000<span className="font-medium text-xl"> (USD)</span>
        </h1>
        <span>on July 2024</span>
      </div>
      <BarChart darkMode={darkMode} />
    </div>
  );
};

export default Balance;
