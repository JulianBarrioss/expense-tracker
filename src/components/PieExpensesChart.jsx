import React, { useContext } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { AppContext } from "../context/AppContext";

const PieExpensesChart = () => {
  const { amountsState } = useContext(AppContext);

  const data = {
    labels: amountsState.expenses.map((item) => item.type), 
    datasets: [
      {
        label: "somenthing",
        data: amountsState.expenses.map((item) => {
          return item.amount;
        }),
        backgroundColor: amountsState.expenses.map((item) => item.color)
      },
    ] }
  return <Doughnut data={data} />;
};

export { PieExpensesChart };
