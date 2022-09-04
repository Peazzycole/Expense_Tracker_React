import { useState } from "react";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesChart from "./ExpensesChart";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

function Expenses(props) {
  const [selectedDate, setSelectedDate] = useState("2022");

  // get data from child component (ExpenseFilter.js)
  const saveSelectedDateHandler = (selectedYear) => {
    setSelectedDate(selectedYear);
  };

  const filteredExpenses = props.items.filter((e) => {
    return e.date.getFullYear().toString() === selectedDate;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter
        onChangeFilter={saveSelectedDateHandler}
        selected={selectedDate}
      />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList
        onLoading={props.onLoading}
        expenseFilter={filteredExpenses}
      />
    </Card>
  );
}

export default Expenses;
