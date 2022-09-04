import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

function ExpensesList(props) {
  // conditional rendering
  let expenseContent = (
    <h2 className="expenses-list__fallback ">NO EXPENSES FOUND</h2>
  );

  if (props.onLoading) {
    expenseContent = <h2 className="loading">Loading....</h2>;
  }

  if (props.expenseFilter.length > 0) {
    expenseContent = props.expenseFilter.map((e) => {
      return (
        <ExpenseItem
          key={e.id}
          id={e.id}
          title={e.title}
          amount={e.amount}
          date={e.date}
        />
      );
    });
  }

  return <div>{expenseContent}</div>;
}

export default ExpensesList;
