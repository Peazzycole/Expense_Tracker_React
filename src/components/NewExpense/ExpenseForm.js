import { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm(props) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [changeNewExpense, setChangeNewExpense] = useState(false);

  const titleChangeHandler = (e) => {
    setTitle(e.target.value);
  };
  const amountChangeHandler = (e) => {
    setAmount(e.target.value);
  };
  const dateChangeHandler = (e) => {
    setDate(e.target.value);
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    const expenseData = {
      title: title,
      amount: +amount,
      date: new Date(date),
    };

    await fetch(
      "https://movies-b0cfc-default-rtdb.firebaseio.com/expense.json",
      {
        method: "POST",
        body: JSON.stringify(expenseData),
      }
    );
    console.log(date);
    // sending data to parent component(NewExpense.js)
    props.onSaveExpenseData(expenseData);
    props.onGetList();

    // reseting state
    setTitle("");
    setAmount("");
    setDate("");
    setChangeNewExpense(false);
    // window.location.reload(false);
  };

  const setChangeFalse = () => setChangeNewExpense(false);
  const setChangeTrue = () => setChangeNewExpense(true);

  return (
    <div>
      {changeNewExpense && (
        <form onSubmit={submitHandler}>
          <div className="new-expense__controls">
            <div className="new-expense__control">
              <label>Title</label>
              <input
                type="text"
                onChange={titleChangeHandler}
                value={title}
                required
              />
            </div>
            <div className="new-expense__control">
              <label>Amount</label>
              <input
                type="number"
                min="0.01"
                step="0.01"
                onChange={amountChangeHandler}
                value={amount}
                required
              />
            </div>
            <div className="new-expense__control">
              <label>Date</label>
              <input
                type="date"
                min="2019-01-01"
                max="2022-12-31"
                onChange={dateChangeHandler}
                value={date}
                required
              />
            </div>
          </div>
          <div className="new-expense__actions">
            <button type="button" onClick={setChangeFalse}>
              Cancel
            </button>
            <button type="submit">Add Expense</button>
          </div>
        </form>
      )}

      {!changeNewExpense && (
        <div className="conditional-button">
          <button onClick={setChangeTrue}>Add Expense</button>
        </div>
      )}
    </div>
  );
}

export default ExpenseForm;
