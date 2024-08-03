// Members.js
import React from "react";
import Title from "../../Daxbod/Title";
import adilbhai from "../../../Images/adilbhai.jpg";
import asadbhai from "../../../Images/asadbhai.jpg";
import salman from "../../../Images/salman.jpg";
import arslaan from "../../../Images/arslaan.jpg";
import { FaLaptopCode, FaAddressCard } from "react-icons/fa";
import { MdOutlinePhoneAndroid } from "react-icons/md";
import { IoMdTabletLandscape } from "react-icons/io";

// Define the users with their respective details and equipments
const users = [
  {
    name: "Shereyar SM Adil",
    id: "12",
    country: "India",
    joiningDate: "2020-05-15",
    jobTitle: "Software Engineer",
    department: "Engineering",
    role: "Manager",
    image: adilbhai,
    bgColor: "bg-yellow-100",
    employmentType: "Full-time",
    details: "Details",
    manager: "Jane Smith",
    dob: "1990-01-01",
    phone: "+1-234-567-8900",
    email: "john.doe@example.com",
    equipments: [
      {
        item: "Laptop",
        icon: <FaLaptopCode size={32} />,
        issue: "Issue Date",
        date: "31/02/2024",
      },
      {
        item: "Mobile",
        icon: <MdOutlinePhoneAndroid size={32} />,
        issue: "Issue Date",
        date: "31/02/2024",
      },
    ],
  },
  {
    name: "Arslaan Ahmad",
    id: "13",
    country: "Iqra Colony",
    joiningDate: "2022-01-10",
    jobTitle: "Web Developer",
    department: "Development",
    role: "Developer",
    image: arslaan,
    bgColor: "bg-slate-100",
    employmentType: "Full-time",
    details: "Details",
    manager: "Jane Smith",
    dob: "1992-03-15",
    phone: "+1-234-567-8901",
    email: "arslaan.ahmad@example.com",
    equipments: [
      {
        item: "Laptop",
        icon: <FaLaptopCode size={32} />,
        issue: "Issue Date",
        date: "31/02/2024",
      },
    ],
  },
  {
    name: "Alice Johnson",
    id: "14",
    country: "USA",
    joiningDate: "2021-11-25",
    jobTitle: "UI/UX Designer",
    department: "Design",
    role: "Designer",
    image: adilbhai, // Replace with Alice's image
    bgColor: "bg-pink-100",
    employmentType: "Contract",
    details: "Details",
    manager: "John Doe",
    dob: "1988-06-20",
    phone: "+1-234-567-8902",
    email: "alice.johnson@example.com",
    equipments: [
      {
        item: "Laptop",
        icon: <FaLaptopCode size={32} />,
        issue: "Issue Date",
        date: "01/03/2024",
      },
    ],
  },
  {
    name: "Bob Smith",
    id: "15",
    country: "UK",
    joiningDate: "2019-07-12",
    jobTitle: "Frontend Developer",
    department: "Development",
    role: "Developer",
    image: asadbhai, // Replace with Bob's image
    bgColor: "bg-green-100",
    employmentType: "Full-time",
    details: "Details",
    manager: "Sarah Johnson",
    dob: "1991-11-01",
    phone: "+44-123-456-7890",
    email: "bob.smith@example.com",
    equipments: [
      {
        item: "Mobile",
        icon: <MdOutlinePhoneAndroid size={32} />,
        issue: "Issue Date",
        date: "01/03/2024",
      },
    ],
  },
  {
    name: "Charlie Brown",
    id: "16",
    country: "Canada",
    joiningDate: "2018-09-23",
    jobTitle: "Backend Developer",
    department: "Development",
    role: "Developer",
    image: salman, // Replace with Charlie's image
    bgColor: "bg-red-100",
    employmentType: "Part-time",
    details: "Details",
    manager: "Emily Davis",
    dob: "1985-12-10",
    phone: "+1-234-567-8903",
    email: "charlie.brown@example.com",
    equipments: [
      {
        item: "Tablet",
        icon: <IoMdTabletLandscape size={32} />,
        issue: "Issue Date",
        date: "01/03/2024",
      },
    ],
  },
  {
    name: "Diana Prince",
    id: "17",
    country: "Australia",
    joiningDate: "2020-04-05",
    jobTitle: "Project Manager",
    department: "Management",
    role: "Manager",
    image: arslaan, // Replace with Diana's image
    bgColor: "bg-purple-100",
    employmentType: "Full-time",
    details: "Details",
    manager: "Michael White",
    dob: "1982-07-22",
    phone: "+61-123-456-7890",
    email: "diana.prince@example.com",
    equipments: [
      {
        item: "Laptop",
        icon: <FaLaptopCode size={32} />,
        issue: "Issue Date",
        date: "01/03/2024",
      },
      {
        item: "Mobile",
        icon: <MdOutlinePhoneAndroid size={32} />,
        issue: "Issue Date",
        date: "01/03/2024",
      },
    ],
  },

  // Continue adding more members as needed
];

const Members = ({ onDetailsClick }) => {
  return (
    <div className="bg-white p-3 rounded-2xl dark:bg-gray-600 dark:text-gray-300 flex-1 flex flex-col overflow-y-auto">
      <Title>Employees</Title>
      {users.map((user, index) => (
        <div
          key={index}
          className="mt-5 flex justify-between items-center my-2"
        >
          <div className="flex items-center gap-3 flex-1">
            <img
              src={user.image}
              alt={user.name}
              className="w-12 h-12 rounded-full"
            />
            <div>
              <h2 className="text-lg sm:text-xl font-bold">{user.name}</h2>
              <span className="font-semibold text-gray-400 text-xs sm:text-sm">
                {user.country}
              </span>
            </div>
          </div>
          <div className="flex gap-3 items-center ml-4">
            <span
              className={`${user.bgColor} p-2 sm:p-3 rounded-full text-xs sm:text-sm text-gray-700 font-semibold dark:bg-gray-500 dark:text-gray-300`}
            >
              {user.role}
            </span>
            <button
              onClick={() => onDetailsClick(user)} // Call the function passed from Employee
              className={`bg-gray-500 text-gray-300 p-2 sm:p-3 rounded-full text-xs sm:text-sm font-semibold dark:bg-gray-500 dark:text-gray-300`}
            >
              {user.details}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Members;
