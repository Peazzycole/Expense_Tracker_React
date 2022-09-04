import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

function NewExpense(props) {
  // get data from child component (expenseForm.js)
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    // sending data to parent component(App.js)
    props.onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm
        onGetList={props.onGetList}
        onSaveExpenseData={saveExpenseDataHandler}
      />
    </div>
  );
}

export default NewExpense;
