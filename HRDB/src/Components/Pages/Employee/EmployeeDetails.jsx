import React from "react";
import PropTypes from "prop-types";
import {
  FaUser,
  FaIdBadge,
  FaBirthdayCake,
  FaPhone,
  FaEnvelope,
  FaCalendarAlt,
  FaBriefcase,
  FaBuilding,
} from "react-icons/fa";
import Title from "../../Daxbod/Title";
// import { employees } from "./EmployeedetailList";

const EmployeeDetails = ({ employee, darkMode }) => {
  if (!employee) {
    return <div>Loading...</div>;
  }

  const basicInfo = [
    {
      label: "Name",
      value: employee.name,
      icon: <FaUser size={24} className="m-auto" />,
    },
    {
      label: "Employee ID",
      value: employee.id,
      icon: <FaIdBadge size={24} className="m-auto" />,
    },
    {
      label: "Date of Birth",
      value: employee.dob,
      icon: <FaBirthdayCake size={24} className="m-auto" />,
    },

    {
      label: "Phone",
      value: employee.phone,
      icon: <FaPhone size={24} className="m-auto" />,
    },
    {
      label: "Email",
      value: employee.email,
      icon: <FaEnvelope size={24} className="m-auto" />,
    },
  ];

  const employmentInfo = [
    {
      label: "Date of Joining",
      value: employee.joiningDate,
      icon: <FaCalendarAlt size={24} className="m-auto" />,
    },
    {
      label: "Job Title",
      value: employee.jobTitle,
      icon: <FaBriefcase size={24} className="m-auto" />,
    },
    {
      label: "Department",
      value: employee.department,
      icon: <FaBuilding size={24} className="m-auto" />,
    },
    {
      label: "Reporting Manager",
      value: employee.manager,
      icon: <FaUser size={24} className="m-auto" />,
    },
    {
      label: "Employment Type",
      value: employee.employmentType,
      icon: <FaBriefcase size={24} className="m-auto" />,
    },
  ];

  return (
    <div className="bg-white p-6 rounded-2xl dark:bg-gray-600 dark:text-gray-300 flex-1 flex flex-col gap-5">
      <Title>{employee.name}</Title>

      <div className="flex flex-col lg:flex-row gap-5">
        {/* Basic Information Box */}
        <div className="flex-1 bg-gray-100 p-4 rounded-lg shadow-md dark:bg-gray-500">
          {basicInfo.map((info, index) => (
            <div key={index} className="flex gap-3 items-center mb-2">
              <span className="bg-gray-300 text-gray-700 p-2 h-14 w-14 rounded-full font-bold flex items-center justify-center ">
                {info.icon}
              </span>
              <div>
                <h1 className="text-lg font-semibold">{info.label}</h1>
                <p className="text-gray-400">{info.value}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Employment Information Box */}
        <div className="flex-1 bg-gray-100 p-4 rounded-lg shadow-md dark:bg-gray-500">
          {employmentInfo.map((info, index) => (
            <div key={index} className="flex gap-3 items-center mb-2">
              <span className="bg-gray-300 text-gray-700 p-2 h-14 w-14 rounded-full font-bold flex items-center justify-center ">
                {info.icon}
              </span>
              <div>
                <h1 className="text-lg font-semibold">{info.label}</h1>
                <p className="text-gray-400">{info.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

EmployeeDetails.propTypes = {
  employee: PropTypes.shape({
    name: PropTypes.string,
    id: PropTypes.string,
    dob: PropTypes.string,
    gender: PropTypes.string,
    phone: PropTypes.string,
    email: PropTypes.string,
    joiningDate: PropTypes.string,
    jobTitle: PropTypes.string,
    department: PropTypes.string,
    manager: PropTypes.string,
    employmentType: PropTypes.string,
    workLocation: PropTypes.string,
  }),
};

export default EmployeeDetails;
