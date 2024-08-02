import React from "react";
import { links } from "../constants";
import LinkItems from "./LinkItems";

const Sidebar = ({ isSidebarOpen }) => {
  return (
    <div>
      {" "}
      <aside
        className={`fixed top-0 left-0 z-40 w-64 h-screen pt-20 bg-white border-r  border-gray-200 sm:translate-x-0  dark:bg-gray-800 dark:border-gray-700 transition-transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="h-full px-3 pb-4 overflow-y-auto">
          <ul className="space-y-2 font-medium">
            {links.map((link, index) => (
              <LinkItems key={index} {...link} />
            ))}
          </ul>
        </div>{" "}
      </aside>
    </div>
  );
};

export default Sidebar;
