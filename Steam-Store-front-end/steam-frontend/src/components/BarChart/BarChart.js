import React, { useContext, useState, useEffect } from "react";
import { Chart as ChartJS, registerables } from "chart.js";
import { Bar } from "react-chartjs-2";
import { BarChartContext } from "../common/context/context";
import Overlay from "../common/overlay/Overlay";

ChartJS.register(...registerables);

function BarChart() {
  const { topTwenty } = useContext(BarChartContext);
  const [labels, setLabels] = useState([]);
  const [chartData, setChartData] = useState([]);

  //   const [labels, setLabels] = useState([]);
  //   const [chartData, setChartData] = useState([]);
  //   const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    handleSalesData();
  }, [topTwenty]);

  async function handleSalesData() {
    if (topTwenty.length !== 0) {
      const labelsArr = topTwenty.map(({ name }) => name);
      const salesArr = topTwenty.map(({ global_sales }) => global_sales);
      // console.log(labelsArr);
      // console.log(salesArr);
      setChartData(salesArr);
      setLabels(labelsArr);
    }
  }

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
    return <Bar data={localData} />;
  }
  return (
    <>
      <BarChartComp />
    </>
  );
}

export default BarChart;
