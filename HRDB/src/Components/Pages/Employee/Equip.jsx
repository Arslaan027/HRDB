// src/components/Employee/Equip.js
import React from "react";
import { FaLaptopCode, FaAddressCard } from "react-icons/fa";
import { MdOutlinePhoneAndroid } from "react-icons/md";
import { IoMdTabletLandscape } from "react-icons/io";
import Title from "../../Daxbod/Title";

const Equipments = ({ member }) => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-md dark:bg-gray-600 dark:text-gray-300 mb-4">
      <Title>Equipments</Title>
      <div className="flex flex-col gap-4 dark:bg-gray-600 mt-4">
        {member.equipments.map((equip, index) => (
          <div
            key={index}
            className="flex items-center gap-3 bg-gray-100 dark:bg-gray-500 p-4 rounded-lg"
          >
            <div className="bg-gray-300 text-gray-700 p-2 h-14 w-14 rounded-full flex items-center justify-center">
              {equip.icon}
            </div>
            <div>
              <h1 className="text-lg font-semibold">{equip.item}</h1>
              <p className="text-gray-400">
                {equip.issue}: {equip.date}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Equipments;
