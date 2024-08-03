import React from "react";
import Profile from "./Profile/Profile";
import Stats from "./Stats";
import Content from "./Content";
// import Dashboard from "./Dashboard";
import Event from "./Event";
import Team from "./Team";

const Dashboard = ({ darkMode }) => {
  return (
    <div className="text-gray-500 bg-gray-100 p-4 sm:ml-64 flex gap-5 flex-col lg:flex-row translate-all duration-300 mt-14 dark:bg-gray-800">
      <div className="flex-1 flex flex-col gap-6">
        <Stats darkMode={darkMode} />
        <Content>
          {/* <Dashboard /> */}
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1 lg:w-1/2">
              <Event />
            </div>
            <div className="flex-1 lg:w-1/2">
              <Team />
            </div>
          </div>
        </Content>
      </div>
      <Profile />
    </div>
  );
};

export default Dashboard;
