import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Title from "../../Daxbod/Title";

const LeaveManagement = () => {
  const { employeeId } = useParams();
  const navigate = useNavigate();

  // Example static data for leave requests
  const leaveRequests = [
    {
      id: 1,
      name: "Asad Khan",
      date: "2024-08-15",
      reason: "Medical",
      payStatus: "Paid",
      leaveType: "Sick Leave",
    },
    {
      id: 2,
      name: "Arslaan Ahmad",
      date: "2024-08-18",
      reason: "Vacation",
      payStatus: "Unpaid",
      leaveType: "Casual Leave",
    },
  ];

  const filteredRequests = leaveRequests.filter(
    (request) => request.name === employeeId
  );

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-800 p-4 sm:p-6 md:p-8 ml-64">
      <Title>Leave Management System</Title>
      <div className="w-full max-w-4xl mt-8 bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
          Existing Leave Requests for {employeeId.replace("-", " ")}
        </h2>
        {filteredRequests.length === 0 ? (
          <p className="text-gray-500 dark:text-gray-400">
            No leave requests found.
          </p>
        ) : (
          <ul className="space-y-4">
            {filteredRequests.map((request) => (
              <li
                key={request.id}
                className="border border-gray-300 rounded-lg p-4 dark:border-gray-600 dark:bg-gray-800"
              >
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                  {request.name.replace("-", " ")}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Date: {request.date}
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  Reason: {request.reason}
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  Pay Status: {request.payStatus}
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  Leave Type: {request.leaveType}
                </p>
              </li>
            ))}
          </ul>
        )}
        <button
          onClick={() => navigate(-1)}
          className="mt-4 bg-gray-500 text-white p-2 rounded-md hover:bg-gray-600 dark:bg-gray-700 dark:hover:bg-gray-800 flex justify-center items-center"
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default LeaveManagement;
