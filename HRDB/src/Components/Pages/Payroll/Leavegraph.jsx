import React from "react";
import Chart from "react-apexcharts";

const Leavegraph = ({ darkMode, series, labels }) => {
  const options = {
    series: series || [60, 20, 20],
    chart: {
      type: "donut",
      height: 700,
    },
    labels: labels || ["Sick Leave", "Vacation", "Casual Leave"],
    colors: ["#FFA500", "#33FF57", "#3357FF"],
    legend: {
      position: "bottom",
      labels: {
        colors: darkMode ? "#dddddd" : "#000000",
      },
    },
    dataLabels: {
      style: {
        colors: ["#dddddd"],
      },
    },
    plotOptions: {
      pie: {
        startAngle: -90,
        endAngle: 360,
        customScale: 1,
      },
    },
    tooltip: {
      theme: darkMode ? "dark" : "light",
    },
    responsive: [
      {
        breakpoint: 768,
        options: {
          chart: {
            width: "100%",
            height: 300,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  };

  return (
    <div className="py-6 mt-8 bg-gray-300 rounded-lg p-7 flex dark:bg-gray-700 items-center justify-center w-full sm:w-3/4 md:w-2/3 lg:w-1/2">
      <Chart
        options={options}
        series={options.series}
        type="donut"
        height={500} // Increased height
      />
    </div>
  );
};

export default Leavegraph;
