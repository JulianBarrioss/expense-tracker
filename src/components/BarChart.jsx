import React, { useContext, useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import { useLocalStorage } from "../hooks/useLocalStorage";
// import { Chart as ChartJS } from "chart.js/auto";
import { AppContext } from "../context/AppContext";

const chartData = {
  months: [
    { day: "January", amount: 0 },
    { day: "Febuary", amount: 0 },
    { day: "March", amount: 0 },
    { day: "April", amount: 0 },
    { day: "May", amount: 0 },
    { day: "June", amount: 0 },
    { day: "July", amount: 0 },
    { day: "August", amount: 0 },
    { day: "September", amount: 0 },
    { day: "October", amount: 0 },
    { day: "November", amount: 0 },
    { day: "December", amount: 0 },
  ],
};

const BarChart = () => {
  const { initialState, currentMonth } = useContext(AppContext);
  const [chartDataState, setChartDataState] = useLocalStorage('chartData',chartData);

  console.log(chartDataState.months[5].amount + 'chartstate')

  useEffect(() => {
    console.log(initialState.total)
    if (currentMonth === "January") {
      const month = chartDataState.months[0];
      setChartDataState({
        ...chartDataState,
        month: (month.amount = initialState.total),
      });
    } else if (currentMonth === 'Febuary') {
        const month = chartDataState.months[1];
      setChartDataState({
        ...chartDataState,
        month: (month.amount = initialState.total),
    })} else if (currentMonth === 'March') {
        const month = chartDataState.months[2];
      setChartDataState({
        ...chartDataState,
        month: (month.amount = initialState.total),
    })} else if (currentMonth === 'April') {
        const month = chartDataState.months[3];
      setChartDataState({
        ...chartDataState,
        month: (month.amount = initialState.total),
    })} else if (currentMonth === 'May') {
        const month = chartDataState.months[4];
      setChartDataState({
        ...chartDataState,
        month: (month.amount = initialState.total),
    })} else if (currentMonth === 'June') {
        const month = chartDataState.months[5];
      setChartDataState({
        ...chartDataState,
        month: (month.amount = initialState.total),
    })} else if (currentMonth === 'July') {
        const month = chartDataState.months[6];
      setChartDataState({
        ...chartDataState,
        month: (month.amount = initialState.total),
    })} else if (currentMonth === 'August') {
        const month = chartDataState.months[7];
      setChartDataState({
        ...chartDataState,
        month: (month.amount = initialState.total),
    })} else if (currentMonth === 'September') {
        const month = chartDataState.months[8];
      setChartDataState({
        ...chartDataState,
        month: (month.amount = initialState.total),
    })} else if (currentMonth === 'October') {
        const month = chartDataState.months[9];
      setChartDataState({
        ...chartDataState,
        month: (month.amount = initialState.total),
    })} else if (currentMonth === 'November') {
        const month = chartDataState.months[10];
      setChartDataState({
        ...chartDataState,
        month: (month.amount = initialState.total),
    })} else if (currentMonth === 'December') {
        const month = chartDataState.months[11];
      setChartDataState({
        ...chartDataState,
        month: (month.amount = initialState.total),
    })}
  }, [initialState.total]);

  const data = {
    labels: chartDataState.months.map((item) => item.day),
    datasets: [
      {
        label: "",
        data: chartDataState.months.map((item) => item.amount),
        backgroundColor: "",
      },
    ],
  };
  return <Line data={data} />;
};

export { BarChart };
