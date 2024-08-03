import React from "react";
import ShortCut from "../Profile/ShortCut";
import Donutchart from "../Profile/Donutchart";
import User from "../Profile/User";

const Profile = () => {
  return (
    <div className="px-2 py-4 bg-gray-200 rounded-lg w-full dark:bg-gray-600 lg:w-60 xl:w-80 flex flex-col gap-4">
      <User />
      <ShortCut />
      <Donutchart />
    </div>
  );
};

export default Profile;
