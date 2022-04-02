import ReactApexChart from "react-apexcharts";
import React, { useEffect, useState } from "react";

export default function Chart() {
  const [data, setData] = useState([]);
  const [profit, setProfit] = useState("");

  const getData = async () => {
    const response = await fetch("/data");
    setData(await response.json());

    console.log(data);
  };
  useEffect(() => {
    getData();
  }, []);

  const series = [
    {
      name: "Capital",
      data: data.capital,
    },
    {
      name: "Drawdown",
      data: data.drawdown,
    },
    {
      name: "Profits",
      data: data.profit,
    },
  ];
  const options = {
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    xaxis: {
      type: "datetime",
      categories: [
        "01,01,22",
        "01,02,22",
        "01,03,22",
        "01,04,22",
        "01,05,22",
        "01,06,22",
        "01,07,22",
        "01,08,22",
        "01,09,22",
        "01,10,22",
        "01,11,22",
        "01,12,22",
        "01,13,22",
        "01,14,22",
        "01,15,22",
        "01,16,22",
        "01,17,22",
        "01,18,22",
        "01,19,22",
        "01,20,22",
        "01,21,22",
        "01,22,22",
        "01,23,22",
        "01,24,22",
        "01,25,22",
        "01,26,22",
        "01,27,22",
        "01,28,22",
        "01,29,22",
        "01,30,22",
        "01,31,22",
        "02,01,22",
        "02,02,22",
        "02,03,22",
        "02,04,22",
        "02,05,22",
        "02,06,22",
        "02,07,22",
        "02,08,22",
        "02,09,22",
        "02,10,22",
        "02,11,22",
        "02,12,22",
        "02,13,22",
        "02,14,22",
        "02,15,22",
        "02,16,22",
        "02,17,22",
        "02,18,22",
        "02,19,22",
        "02,20,22",
        "02,21,22",
        "02,22,22",
        "02,23,22",
        "02,24,22",
        "02,25,22",
        "02,26,22",
        "02,27,22",
        "02,28,22",
      ],
    },
    tooltip: {
      x: {
        format: "MM/dd/yy",
      },
    },
  };

  return (
    <div className=" w-screen h-200">
      <button
        onClick={() => {
          getData();
        }}
      >
        Refresh
      </button>
      <ReactApexChart
        options={options}
        series={series}
        type="area"
        height={350}
      />
    </div>
  );
}
