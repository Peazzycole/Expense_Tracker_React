import { useEffect, useState } from "react";
import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

// const dummyExpenses = [
//   {
//     id: "e1",
//     title: "Toilet Paper",
//     amount: 94.12,
//     date: new Date(2020, 7, 14),
//   },
//   { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
//   {
//     id: "e3",
//     title: "Car Insurance",
//     amount: 294.67,
//     date: new Date(2021, 2, 28),
//   },
//   {
//     id: "e4",
//     title: "New Desk (Wooden)",
//     amount: 450,
//     date: new Date(2021, 5, 12),
//   },
// ];

function App() {
  const [expenses, setExpenses] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    setIsLoading(true);
    const response = await fetch(
      "https://movies-b0cfc-default-rtdb.firebaseio.com/expense.json"
    );
    const data = await response.json();

    let loadedData = [];
    for (const key in data) {
      loadedData.push({
        id: key,
        title: data[key].title,
        amount: data[key].amount,
        date: new Date(data[key].date),
      });
    }
    setExpenses(loadedData);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  // get data from child component (NewExpense.js)
  const addExpenseHandler = (expense) => {
    setExpenses((prevstate) => {
      return [expense, ...prevstate];
    });
  };

  return (
    <div className="App">
      <NewExpense onGetList={fetchData} onAddExpense={addExpenseHandler} />
      <Expenses onLoading={isLoading} items={expenses} />
    </div>
  );
}

export default App;
