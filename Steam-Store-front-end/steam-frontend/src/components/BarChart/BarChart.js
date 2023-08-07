import React, { useState, useEffect } from "react";
import { Chart as ChartJS, registerables } from "chart.js";
import { Bar } from "react-chartjs-2";
import Overlay from "../common/overlay/Overlay";

ChartJS.register(...registerables);

function BarChart({ data_names, data_sales }) {
  const [labels] = useState(data_names);
  const [chartData] = useState(data_sales);

  //   const [labels, setLabels] = useState([]);
  //   const [chartData, setChartData] = useState([]);
  //   const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // handleSalesData();
  }, []);

  //   async function handleSalesData() {
  //     setIsLoading(true);
  //     const salesArr = data.map(({ global_sales }) => Number(global_sales));
  //     const namesArr = data.map(({ name }) => name);

  //     console.log(salesArr);
  //     console.log(namesArr);
  //     setChartData(salesArr);
  //     setLabels(namesArr);
  //     setIsLoading(false);
  //   }

  function BarChartComp() {
    const localData = {
      labels: labels,
      datasets: [
        {
          id: 1,
          label: "Global Sales (Millions)",
          data: chartData,
        },
      ],
    };
    return (
      <Bar
        // datasetIdKey="id"
        data={localData}
      />
    );
  }
  return (
    <div className="container">
      <BarChartComp />
    </div>
  );
}

export default BarChart;
