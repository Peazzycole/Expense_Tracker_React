import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  const deleteHandler = async (id) => {
    await fetch(
      `https://movies-b0cfc-default-rtdb.firebaseio.com/expense/${id}.json`,
      {
        method: "DELETE",
      }
    )
      .then((response) => response.json())
      .then((data) => console.log(data));

    window.location.reload(false);
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={() => deleteHandler(props.id)}>
        <i className="fa fa-trash"></i>
      </button>
    </Card>
  );
}

export default ExpenseItem;
