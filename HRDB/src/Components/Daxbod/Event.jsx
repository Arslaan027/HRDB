import React from "react";
import Title from "./Title";

const Event = () => {
  const events = [
    {
      date: "08 Aug",
      title: "Upcoming Event",
      description: "Lorem ipsum dolor sit amet.",
    },
    {
      date: "15 Sept",
      title: "Annual Conference",
      description: "Join us for our annual conference.",
    },
    {
      date: "20 Sept",
      title: "Networking Meetup",
      description: "Connect with professionals in your field.",
    },
    {
      date: "25 Sept",
      title: "Developers Meetup",
      description: "Connect with professionals in your field.",
    },
  ];

  return (
    <div className="bg-white p-3 rounded-2xl dark:bg-gray-600 dark:text-gray-300 flex-1 flex flex-col gap-5">
      <Title>Events</Title>
      {events.map((event, index) => (
        <div key={index} className="flex gap-5 items-center">
          <span className="bg-gray-300 text-gray-700 p-2 rounded-2xl h-16 w-16 font-bold text-center">
            {event.date}
          </span>
          <div>
            <h1 className="text-xl font-bold">{event.title}</h1>
            <p className="text-gray-400">{event.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Event;
