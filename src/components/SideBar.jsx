import React, { useState, useContext, useRef, useEffect } from "react";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

import { AppContext } from "../context/AppContext";
import { incomeCategories, expenseCategories } from "../constants/Categories";
import "../styles/components/SideBar.css";

const SideBar = () => {
  const {
    initialState,
    addIncome,
    addExpense,
    add,
    setRef,
    amountsState,
    currentMonth,
  } = useContext(AppContext);
  const [expense, setExpense] = useState({ value: "", category: "", month: "" });
  const referencia = useRef();
  const mes = currentMonth;

  useEffect(() => {
    setRef(referencia.current);
  }, []);

  const getNewAmount = (event) => {
    setExpense({
      ...expense,
      value: event.target.value,
    });
  };

  const selectCategory = (event) => {
    setExpense({
      ...expense,
      category: event.target.value,
      month: currentMonth

    });
  };

  return (
    <div className="sidebar">
      <div
        className={`sidebar__total ${
          initialState.total >= 0 ? "green-balance" : "red-balance"
        }`}
      >
        <p className="sidebar__total-text">Total Balance</p>
        <p className="sidebar__total-amount">${initialState.total}</p>
      </div>

      <form className="sidebar__form">
        <input
          placeholder="New Register"
          className="sidebar__form-input"
          type="Number"
          onChange={(event) => getNewAmount(event)}
        />
        <div className="sideBar__form__type-container">
          <button type="button" className="incomeButton" onClick={addIncome}>
            <div className="iconUp-container">
              <ArrowDownwardIcon sx={{ fontSize: 40 }} />
            </div>
            <p className="income">Income</p>
            <p className="incomeTotal">${initialState.incomesTotal}</p>
          </button>
          <button type="button" className="expenseButton" onClick={addExpense}>
            <div className="iconDown-container">
              <ArrowUpwardIcon sx={{ fontSize: 40 }} />
            </div>
            <p className="expense">Expense</p>
            <p className="expenseTotal">${initialState.expensesTotal}</p>
          </button>
        </div>

        <select
          placeholder="Select"
          className="select"
          value={incomeCategories.type}
          id="browsers"
          onChange={(event) => selectCategory(event)}
        >
          {initialState.income &&
            incomeCategories.map((c) => <option key={c.type}>{c.type}</option>)}
          {initialState.expense &&
            expenseCategories.map((c) => (
              <option key={c.type}>{c.type}</option>
            ))}
        </select>
        <button
          type="button"
          className={`addButton ${
            initialState.total >= 0 ? "green-balance" : "red-balance"
          }`}
          onClick={() => add(expense)}
        >
          Add
        </button>
      </form>

      <div className="bottom__history" ref={referencia}>
        {initialState.expenses.map((item, index) => (
          <div
            key={index}
            className={
              amountsState.incomes.find((c) => c.type === item.category)
                ? "expense-item green"
                : "expense-item red"
            }
          >
            <div>
              <p>{item.category}</p>
              <p>${item.value}</p>
              <p>{item.month}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export { SideBar };
