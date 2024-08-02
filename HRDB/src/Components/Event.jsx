import React from "react";
import Title from "./Title";
import { events } from "../constants";
import Item from "./Item";

const Event = () => {
  return (
    <div className="bg-white p-3 rounded-2xl dark:bg-gray-600 dark:text-gray-300 flex-1 flex flex-col gap-5">
      <Title>Events</Title>
      {events.map((event, index) => (
        <Item key={index} event={event} />
      ))}
    </div>
  );
};

export default Event;
