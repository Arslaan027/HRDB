// Equip.js
import React from "react";
import { FaLaptopCode, FaAddressCard } from "react-icons/fa";
import { MdOutlinePhoneAndroid } from "react-icons/md";
import { IoMdTabletLandscape } from "react-icons/io";
import Title from "../../Daxbod/Title";

const Equipments = ({ member }) => {
  const equipments = [
    {
      item: "Laptop",
      icon: <FaLaptopCode size={32} className="m-auto" />,
      issue: "Issue Date",
      date: "31/02/2024",
    },
    {
      item: "Mobile",
      icon: <MdOutlinePhoneAndroid size={32} className="m-auto" />,
      issue: "Issue Date",
      date: "31/02/2024",
    },
    {
      item: "Punch in Card",
      icon: <FaAddressCard size={32} className="m-auto" />,
      issue: "Issue Date",
      date: "31/02/2024",
    },
    {
      item: "Tablet",
      icon: <IoMdTabletLandscape size={32} className="m-auto" />,
      issue: "Issue Date",
      date: "31/02/2024",
    },
  ];

  return (
    <div className="bg-white p-6 rounded-2xl dark:bg-gray-600 dark:text-gray-300 flex-1 flex flex-col gap-5">
      <Title>{member.name}</Title>
      {equipments.map((equipment, index) => (
        <div key={index} className="flex gap-5 items-center">
          <span className="bg-gray-300 text-gray-700 p-2 h-14 w-14 rounded-full font-bold flex items-center justify-center">
            {equipment.icon}
          </span>
          <div>
            <h1 className="text-xl font-bold">{equipment.item}</h1>
            <p className="text-gray-400">
              {equipment.issue}: {equipment.date}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Equipments;
