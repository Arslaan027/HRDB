import React from "react";
import Chart from "react-apexcharts";
import Title from "../../Daxbod/Title";

const KPI = ({ darkMode }) => {
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
    <>
      <div className="bg-white p-6 mt-5 rounded-2xl dark:bg-gray-600 dark:text-gray-300 flex-1 flex flex-col gap-5">
        <Title>KPI</Title>
        <Chart
          options={options.options}
          series={options.series}
          type="donut"
          height={350}
        />
      </div>
    </>
  );
};

export default KPI;
