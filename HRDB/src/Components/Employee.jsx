import React from "react";
import User from "./User";
import ShortCut from "./ShortCut";
import Donutchart from "./Donutchart";

const Employee = () => {
  return (
    <div className="px-2 py-4 bg-gray-200 rounded-lg w-full dark:bg-gray-600 lg:w-60 xl:w-80 flex flex-col justify-between gap-2">
      <User />
      <ShortCut />
      <Donutchart />
    </div>
  );
};

export default Employee;
