import { useState, useEffect } from "react";

import { useLocalStorage } from "./useLocalStorage";

const initialExpenses = {
  expenses: [],
  total: 0,
  incomesTotal: 0,
  expensesTotal: 0,
  income: false,
  expense: false,
};

const incomeColors = [
  "#123123",
  "#154731",
  "#165f40",
  "#16784f",
  "#14915f",
  "#10ac6e",
  "#0bc77e",
  "#04e38d",
  "#00ff9d",
];
const expenseColors = [
  "#b50d12",
  "#bf2f1f",
  "#cc474b",
  "#c9452c",
  "#d3583a",
  "#dc6a48",
  "#e57c58",
  "#ee8d68",
  "#f79d79",
  "#ffae8a",
  "#f55b5f",
];

const amounts = {
  incomes: [
    { type: "Business", amount: 0, color: "#123123" },
    { type: "Investments", amount: 0, color: incomeColors[1] },
    { type: "Extra income", amount: 0, color: incomeColors[2] },
    { type: "Deposits", amount: 0, color: incomeColors[3] },
    { type: "Lottery", amount: 0, color: incomeColors[4] },
    { type: "Gifts", amount: 0, color: incomeColors[5] },
    { type: "Salary", amount: 0, color: incomeColors[6] },
    { type: "Savings", amount: 0, color: incomeColors[7] },
    { type: "Rental income", amount: 0, color: incomeColors[8] },
  ],
  expenses: [
    { type: "Bills", amount: 0, color: expenseColors[0] },
    { type: "Car", amount: 0, color: expenseColors[1] },
    { type: "Clothes", amount: 0, color: expenseColors[2] },
    { type: "Travel", amount: 0, color: expenseColors[3] },
    { type: "Food", amount: 0, color: expenseColors[4] },
    { type: "Shopping", amount: 0, color: expenseColors[5] },
    { type: "House", amount: 0, color: expenseColors[6] },
    { type: "Entertainment", amount: 0, color: expenseColors[7] },
    { type: "Phone", amount: 0, color: expenseColors[8] },
    { type: "Pets", amount: 0, color: expenseColors[9] },
    { type: "Other", amount: 0, color: expenseColors[10] },
  ],
};

const useInitialState = () => {
  const [initialState, setInitialState] = useLocalStorage(
    "initialState",
    initialExpenses
  );
  const [amountsState, setAmountsState] = useState(amounts);
  const [currentMonth, setCurrentMonth] = useState("");
  const [chartLabels, setChartLabels] = useState({
    incomesLabels: [],
    expensesLabels: [],
  });
  const [ref, setRef] = useState("");

  useEffect(() => {
    amountsState.incomes.map((income) => (income.amount = 0));
    amountsState.expenses.map((expense) => (expense.amount = 0));
    setChartLabels({ incomesLabels: [], expensesLabels: [] });

    setInitialState({
      ...initialState,
      total: 0,
      incomesTotal: 0,
      expensesTotal: 0,
    });
  }, [currentMonth]);

  const scroll = (elem) => {
    elem.scrollTop = Math.abs(elem.scrollHeight);
  };

  const addIncome = () => {
    setInitialState({
      ...initialState,
      income: true,
      expense: false,
    });
  };

  const addExpense = () => {
    setInitialState({
      ...initialState,
      income: false,
      expense: true,
    });
  };

  const add = (e) => {
    //add income
    if (initialState.income && !initialState.expense) {
      setInitialState({
        ...initialState,
        expenses: [...initialState.expenses, e],
        total: initialState.total + Number(e.value),
        incomesTotal: initialState.incomesTotal + Number(e.value),
      });

      const category = amounts.incomes.find((c) => c.type === e.category);
      if (category) {
        setAmountsState({
          ...amountsState,
          category: (category.amount += Number(e.value)),
        });
      }
      scroll(ref);
      //add expense
    } else if (!initialState.income && initialState.expense) {
      setInitialState({
        ...initialState,
        expenses: [...initialState.expenses, e],
        total: initialState.total - Number(e.value),
        expensesTotal: initialState.expensesTotal + Number(e.value),
      });

      const category = amounts.expenses.find((c) => c.type === e.category);
      if (category) {
        setAmountsState({
          ...amountsState,
          category: (category.amount += Number(e.value)),
        });
      }
      scroll(ref);
    }
  };

  return {
    initialState,
    setInitialState,
    amounts,
    setRef,
    add,
    addExpense,
    addIncome,
    amountsState,
    setCurrentMonth,
    currentMonth,
    chartLabels,
    setChartLabels,
  };
};

export { useInitialState };
