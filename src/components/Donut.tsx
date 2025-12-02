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
      colors: ["#f0f3ff"], // بدون خط داخلی
    },
    fill: {
      colors: ["#fff"], // وسط دونات سفید
    },
    plotOptions: {
      pie: {
        donut: {
          size: "100%",
        }
      }
    },
    colors: ["#a0aec0"], // حلقه طوسی (می‌تونی #a0aec0 رو با درصد آبی کم تغییر بدی)
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

  // فقط یک بخش اضافه می‌کنیم تا دونات نمایش داده شود
  const series = [100];

  return (
    <div style={{ width: "120px", margin: "0 auto" }}>
      <Chart options={options} series={series} type="donut" />
    </div>
  );
};

export default Donut;
