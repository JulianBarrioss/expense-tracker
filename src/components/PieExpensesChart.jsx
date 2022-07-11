import React, { useContext, useEffect, useState } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { AppContext } from "../context/AppContext";

const PieExpensesChart = () => {
  const { amountsState, chartLabels, setChartLabels } = useContext(AppContext);

  useEffect(() => {
    amountsState.expenses.map((items) => {
      if (items.amount > 0) {
        if (!chartLabels.expensesLabels.includes(items.type)) {
          setChartLabels({
            ...chartLabels,
            expensesLabels: [...chartLabels.expensesLabels, items.type],
          });
        }
      }
    });
  }, [amountsState]);
  const data = {
    labels: chartLabels.expensesLabels.map((item) => item),
    datasets: [
      {
        label: "somenthing",
        data: amountsState.expenses.map((item) => {
          return item.amount;
        }),
        backgroundColor: amountsState.expenses.map((item) => item.color),
      },
    ],
    options: {
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  };
  return <Doughnut data={data} />;
};

export { PieExpensesChart };
