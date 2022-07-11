import React, { useContext, useEffect } from "react";
import { Line } from "react-chartjs-2";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { AppContext } from "../context/AppContext";

const chartData = {
  months: [
    { day: "January", incomes: 0, expenses: 0 },
    { day: "Febuary", incomes: 0, expenses: 0 },
    { day: "March", incomes: 0, expenses: 0 },
    { day: "April", incomes: 0, expenses: 0 },
    { day: "May", incomes: 0, expenses: 0 },
    { day: "June", incomes: 0, expenses: 0 },
    { day: "July", incomes: 0, expenses: 0 },
    { day: "August", incomes: 0, expenses: 0 },
    { day: "September", incomes: 0, expenses: 0 },
    { day: "October", incomes: 0, expenses: 0 },
    { day: "November", incomes: 0, expenses: 0 },
    { day: "December", incomes: 0, expenses: 0 },
  ],
};

const LineChart = () => {
  const { initialState, currentMonth } = useContext(AppContext);
  const [chartDataState, setChartDataState] = useLocalStorage(
    "chartData",
    chartData
  );

  useEffect(() => {
    if (currentMonth === "January") {
      const month = chartDataState.months[0];
      if (initialState.income) {
        setChartDataState({
          ...chartDataState,
          month: (month.incomes = initialState.incomesTotal),
        });
      } else if (initialState.expense) {
        setChartDataState({
          ...chartDataState,
          month: (month.expenses = initialState.expensesTotal),
        });
      }
    } else if (currentMonth === "Febuary") {
      const month = chartDataState.months[1];
      if (initialState.income) {
        setChartDataState({
          ...chartDataState,
          month: (month.incomes = initialState.incomesTotal),
        });
      } else if (initialState.expense) {
        setChartDataState({
          ...chartDataState,
          month: (month.expenses = initialState.expensesTotal),
        });
      }
    } else if (currentMonth === "March") {
      const month = chartDataState.months[2];
      if (initialState.income) {
        setChartDataState({
          ...chartDataState,
          month: (month.incomes = initialState.incomesTotal),
        });
      } else if (initialState.expense) {
        setChartDataState({
          ...chartDataState,
          month: (month.expenses = initialState.expensesTotal),
        });
      }
    } else if (currentMonth === "April") {
      const month = chartDataState.months[3];
      if (initialState.income) {
        setChartDataState({
          ...chartDataState,
          month: (month.incomes = initialState.incomesTotal),
        });
      } else if (initialState.expense) {
        setChartDataState({
          ...chartDataState,
          month: (month.expenses = initialState.expensesTotal),
        });
      }
    } else if (currentMonth === "May") {
      const month = chartDataState.months[4];
      if (initialState.income) {
        setChartDataState({
          ...chartDataState,
          month: (month.incomes = initialState.incomesTotal),
        });
      } else if (initialState.expense) {
        setChartDataState({
          ...chartDataState,
          month: (month.expenses = initialState.expensesTotal),
        });
      }
    } else if (currentMonth === "June") {
      const month = chartDataState.months[5];
      if (initialState.income) {
        setChartDataState({
          ...chartDataState,
          month: (month.incomes = initialState.incomesTotal),
        });
      } else if (initialState.expense) {
        setChartDataState({
          ...chartDataState,
          month: (month.expenses = initialState.expensesTotal),
        });
      }
    } else if (currentMonth === "July") {
      const month = chartDataState.months[6];
      if (initialState.income) {
        setChartDataState({
          ...chartDataState,
          month: (month.incomes = initialState.incomesTotal),
        });
      } else if (initialState.expense) {
        setChartDataState({
          ...chartDataState,
          month: (month.expenses = initialState.expensesTotal),
        });
      }
    } else if (currentMonth === "August") {
      const month = chartDataState.months[7];
      if (initialState.income) {
        setChartDataState({
          ...chartDataState,
          month: (month.incomes = initialState.incomesTotal),
        });
      } else if (initialState.expense) {
        setChartDataState({
          ...chartDataState,
          month: (month.expenses = initialState.expensesTotal),
        });
      }
    } else if (currentMonth === "September") {
      const month = chartDataState.months[8];
      if (initialState.income) {
        setChartDataState({
          ...chartDataState,
          month: (month.incomes = initialState.incomesTotal),
        });
      } else if (initialState.expense) {
        setChartDataState({
          ...chartDataState,
          month: (month.expenses = initialState.expensesTotal),
        });
      }
    } else if (currentMonth === "October") {
      const month = chartDataState.months[9];
      if (initialState.income) {
        setChartDataState({
          ...chartDataState,
          month: (month.incomes = initialState.incomesTotal),
        });
      } else if (initialState.expense) {
        setChartDataState({
          ...chartDataState,
          month: (month.expenses = initialState.expensesTotal),
        });
      }
    } else if (currentMonth === "November") {
      const month = chartDataState.months[10];
      if (initialState.income) {
        setChartDataState({
          ...chartDataState,
          month: (month.incomes = initialState.incomesTotal),
        });
      } else if (initialState.expense) {
        setChartDataState({
          ...chartDataState,
          month: (month.expenses = initialState.expensesTotal),
        });
      }
    } else if (currentMonth === "December") {
      const month = chartDataState.months[11];
      if (initialState.income) {
        setChartDataState({
          ...chartDataState,
          month: (month.incomes = initialState.incomesTotal),
        });
      } else if (initialState.expense) {
        setChartDataState({
          ...chartDataState,
          month: (month.expenses = initialState.expensesTotal),
        });
      }
    }
  }, [initialState.total]);

  const data = {
    labels: chartDataState.months.map((item) => item.day),
    datasets: [
      {
        label: "Incomes",
        data: chartDataState.months.map((item) => item.incomes),
        backgroundColor: "green",
      },
      {
        label: "Expenses",
        data: chartDataState.months.map((item) => item.expenses),
        backgroundColor: "red",
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return <Line data={data} options={options} />;
};

export { LineChart };
