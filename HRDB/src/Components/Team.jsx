import React from "react";
import Title from "./Title";
import { users } from "../constants";
import Members from "./Members";

const Team = () => {
  return (
    <div className="bg-white p-3 rounded-2xl dark:bg-gray-600 dark:text-gray-300 flex-1 flex gap-5 flex-col">
      <Title>Teams</Title>
      {users.map((user, index) => (
        <Members key={index} user={user} />
      ))}
    </div>
  );
};

export default Team;
