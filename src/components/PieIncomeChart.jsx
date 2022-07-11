import React, { useContext, useState, useEffect } from "react";
import { Doughnut } from "react-chartjs-2";
import { AppContext } from "../context/AppContext";

const PieIncomeChart = () => {
  const { amountsState, chartLabels, setChartLabels } = useContext(AppContext);

  useEffect(() => {
    amountsState.incomes.map((items) => {
      if (items.amount > 0) {
        if (!chartLabels.incomesLabels.includes(items.type)) {
          setChartLabels({
            ...chartLabels,
            incomesLabels: [...chartLabels.incomesLabels, items.type],
          });
        }
      }
    });
  }, [amountsState]);

  const data = {
    labels: chartLabels.incomesLabels.map((item) => item),
    datasets: [
      {
        label: "somenthing",
        data: amountsState.incomes.map((item) => {
          return item.amount;
        }),
        backgroundColor: amountsState.incomes.map((item) => item.color),
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

export { PieIncomeChart };
