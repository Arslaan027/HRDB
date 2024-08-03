import React from "react";
import Chart from "react-apexcharts";

const Donutchart = ({ darkMode }) => {
  const options = {
    series: [44, 55, 41],
    options: {
      chart: {
        type: "donut",
        height: 350,
      },
      labels: ["Sales", "PO", "Order"],
      colors: ["#FF5733", "#33FF57", "#3357FF"],
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
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    },
  };
  return (
    <div className="py-6 mt-5 bg-white rounded-lg p-5 flex dark:bg-gray-800 items-center justify-center">
      <Chart
        options={options.options}
        series={options.series}
        type="donut"
        height={350}
      />
    </div>
  );
};

export default Donutchart;
