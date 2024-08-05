import React from "react";
import Title from "../../Daxbod/Title";
import { Link } from "react-router-dom";

const MonthlyPayrole = () => {
  return (
    <div className="bg-gray-300 p-10 pt-5 ml-2 dark:bg-gray-700 dark:text-white mt-8 w-2/3 rounded-2xl">
      <div className="ml-5">
        <Title>Leaves</Title>
      </div>

      <div className="max-w-4xl bg-white mt-5 shadow-md overflow-hidden dark:bg-gray-500 rounded-xl">
        <div className="overflow-y-auto max-h-60 ">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-400 text-white dark:bg-gray-500">
              <tr>
                <th className="py-3 px-6 text-left text-sm font-medium">
                  Months
                </th>
                <th className="py-3 px-6 text-left text-sm font-medium">
                  Paid Leave
                </th>
                <th className="py-3 px-6 text-left text-sm font-medium">
                  Unpaid Leave
                </th>
                <th className="py-3 px-6 text-left text-sm font-medium">
                  Year
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-400 font-semibold">
              {[
                { month: "January", paidLeave: 2, unpaidLeave: 1, year: 2024 },
                { month: "February", paidLeave: 2, unpaidLeave: 1, year: 2024 },
                { month: "March", paidLeave: 2, unpaidLeave: 1, year: 2024 },
                { month: "April", paidLeave: 2, unpaidLeave: 1, year: 2024 },
                { month: "May", paidLeave: 2, unpaidLeave: 1, year: 2024 },
                { month: "June", paidLeave: 2, unpaidLeave: 1, year: 2024 },
                { month: "July", paidLeave: 2, unpaidLeave: 1, year: 2024 },
                { month: "August", paidLeave: 2, unpaidLeave: 1, year: 2024 },
                {
                  month: "September",
                  paidLeave: 2,
                  unpaidLeave: 1,
                  year: 2024,
                },
                { month: "October", paidLeave: 2, unpaidLeave: 1, year: 2024 },
                { month: "November", paidLeave: 2, unpaidLeave: 1, year: 2024 },
                { month: "December", paidLeave: 2, unpaidLeave: 1, year: 2024 },
              ].map((row, index) => (
                <tr key={index}>
                  <td className="py-3 px-6 text-sm font-medium text-gray-900">
                    {row.month}
                  </td>
                  <td className="py-3 px-6 text-sm font-medium text-gray-700">
                    {row.paidLeave}
                  </td>
                  <td className="py-3 px-6 text-sm font-medium text-gray-700">
                    {row.unpaidLeave}
                  </td>
                  <td className="py-3 px-6 text-sm font-medium text-gray-700">
                    {row.year}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="mt-4 text-center">
        <Link to="/leave-management">
          <button className="bg-gray-500 text-gray-300 p-2 sm:p-3 rounded-full text-xs sm:text-sm font-bold dark:bg-gray-500 dark:text-gray-300 ">
            Leave Management
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MonthlyPayrole;
