import React from "react";
import Donutchart from "./Profile/Donutchart";

const Dashboard = () => {
  return (
    <div>
      <div className="py-6 mt-5 bg-white rounded-lg p-5 flex dark:bg-gray-800 items-center justify-center">
        <Donutchart />
      </div>
    </div>
  );
};

export default Dashboard;
