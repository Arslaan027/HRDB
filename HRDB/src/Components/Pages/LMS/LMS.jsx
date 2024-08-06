import React, { useState } from "react";
import Title from "../../Daxbod/Title";
import logo from "../../../Images/newlogo.png";

const LMS = () => {
  const [leaveRequests, setLeaveRequests] = useState([]);
  const [newRequest, setNewRequest] = useState({
    name: "",
    date: "",
    reason: "",
    payStatus: "Paid",
    leaveType: "Sick Leave",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewRequest({ ...newRequest, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLeaveRequests([...leaveRequests, newRequest]);
    setNewRequest({
      name: "",
      date: "",
      reason: "",
      payStatus: "Paid",
      leaveType: "Sick Leave",
    });
  };

  return (
    <div className="flex md:ml-60 mt-7 items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-800 p-4 sm:p-6 md:p-8">
      <div className="flex flex-col md:flex-row w-full max-w-4xl bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg">
        {/* Left Section: Leave Request Form */}
        <div className="bg-white dark:bg-gray-900 p-6 md:p-8 rounded-t-lg md:rounded-l-lg shadow-lg md:w-1/2">
          <div className="flex gap-2 items-start">
            <img src={logo} className="h-7 flex " />
            <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200 ">
              Request Leave
            </h2>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-gray-700 dark:text-gray-300"
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={newRequest.name}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-500 dark:bg-gray-600 dark:border-gray-500 dark:text-gray-200"
                required
              />
            </div>
            <div>
              <label
                htmlFor="date"
                className="block text-gray-700 dark:text-gray-300"
              >
                Date
              </label>
              <input
                id="date"
                name="date"
                type="date"
                value={newRequest.date}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-500 dark:bg-gray-600 dark:border-gray-500 dark:text-gray-200"
                required
              />
            </div>
            <div>
              <label
                htmlFor="reason"
                className="block text-gray-700 dark:text-gray-300"
              >
                Reason
              </label>
              <textarea
                id="reason"
                name="reason"
                value={newRequest.reason}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-500 dark:bg-gray-600 dark:border-gray-500 dark:text-gray-200"
                rows="4"
                required
              />
            </div>
            <div>
              <label
                htmlFor="payStatus"
                className="block text-gray-700 dark:text-gray-300"
              >
                Pay Status
              </label>
              <select
                id="payStatus"
                name="payStatus"
                value={newRequest.payStatus}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-500 dark:bg-gray-600 dark:border-gray-500 dark:text-gray-200"
                required
              >
                <option value="Paid">Paid</option>
                <option value="Unpaid">Unpaid</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="leaveType"
                className="block text-gray-700 dark:text-gray-300"
              >
                Leave Type
              </label>
              <select
                id="leaveType"
                name="leaveType"
                value={newRequest.leaveType}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-500 dark:bg-gray-600 dark:border-gray-500 dark:text-gray-200"
                required
              >
                <option value="Sick Leave">Sick Leave</option>
                <option value="Casual Leave">Casual Leave</option>
                <option value="Earned Leave">Earned Leave</option>
              </select>
            </div>
            <button
              type="submit"
              className="w-full bg-gray-500 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 dark:bg-gray-600 dark:hover:bg-gray-700"
            >
              Submit Request
            </button>
          </form>
        </div>

        {/* Right Section: Leave Requests List */}
        <div className="bg-white dark:bg-gray-900 p-6 md:p-8 rounded-b-lg md:rounded-r-lg shadow-lg md:w-1/2">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200 ">
            Leave Requests
          </h2>
          {leaveRequests.length === 0 ? (
            <p className="text-gray-500 dark:text-gray-400">
              No leave requests found.
            </p>
          ) : (
            <ul className="space-y-4">
              {leaveRequests.map((request, index) => (
                <li
                  key={index}
                  className="border border-gray-300 rounded-lg p-4 dark:border-gray-600 dark:bg-gray-800"
                >
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 ">
                    {request.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 ">
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
        </div>
      </div>
    </div>
  );
};

export default LMS;
