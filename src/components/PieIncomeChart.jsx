import React, { useContext, useState, useEffect } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { AppContext } from "../context/AppContext";

const PieIncomeChart = () => {
  const { amountsState } = useContext(AppContext);

  const data = {
    labels: amountsState.incomes.map((item) => item.type), 
    datasets: [
      {
        label: "somenthing",
        data: amountsState.incomes.map((item) => {
          return item.amount;
        }),
        backgroundColor: amountsState.incomes.map((item) => item.color)
      },
    ] }
  return <Doughnut data={data} />;
};

export { PieIncomeChart };
