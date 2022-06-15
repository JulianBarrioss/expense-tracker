import React, {useContext} from "react";

import { AppContext } from "../context/AppContext";
import { BarChart } from "./BarChart";
import { PieIncomeChart } from "./PieIncomeChart";
import { PieExpensesChart } from "./PieExpensesChart";
import "../styles/components/Main.css";

const Main = () => {
  const { setCurrentMonth, currentMonth } = useContext(AppContext);
  return (
    <div className="main">
      <div className="main__graph-container">
      <select className="select-months" name="" id=""  onChange={(event) => setCurrentMonth(event.target.value)} value={currentMonth}>
      <option>Select a month</option>
        <option value="January">January</option>
        <option value="Febuary">Febuary</option>
        <option value="March">March</option>
        <option value="April">April</option>
        <option value="May">May</option>
        <option value="June">June</option>
        <option value="July">July</option>
        <option value="August">August</option>
        <option value="September">September</option>
        <option value="October">October</option>
        <option value="November">November</option>
        <option value="December">December</option>
      </select>
        <div className="main__graph">
          <div>
            <BarChart />
          </div>
        </div>
      </div>
      <div className="bottom-container">
        <div className="bottom__categories">
          <div>
            <PieIncomeChart className="graph" />
          </div>
          <div>
            <PieExpensesChart />
          </div>
        </div>
        
      </div>
    </div>
  );
};

export { Main };
