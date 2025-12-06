import React from "react";
import Chart from "react-apexcharts";
import type { ApexOptions } from "apexcharts";



const Donut: React.FC = () => {
  const options: ApexOptions = {
    chart: {
      type: "donut",
    },
    stroke: {
      show: true,
      width: 8,
      colors: ["#f0f3ff"], 
    },
    fill: {
      colors: ["#fff"], 
    },
    plotOptions: {
      pie: {
        donut: {
          size: "100%",
        }
      }
    },
    colors: ["#a0aec0"], 
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    tooltip: {
      enabled: false,
    }
  };

  const series = [100];

  return (
    <div style={{ width: "120px", margin: "0 auto" }}>
      <Chart options={options} series={series} type="donut" />
    </div>
  );
};

export default Donut;
