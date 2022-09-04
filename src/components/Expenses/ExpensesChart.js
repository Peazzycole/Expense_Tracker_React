import Chart from "../Chart/Chart";

function ExpensesChart(props) {
  const chartDataPoints = [
    { label: "Jan", value: 0, id: Math.random().toString() },
    { label: "Feb", value: 0, id: Math.random().toString() },
    { label: "Mar", value: 0, id: Math.random().toString() },
    { label: "Apr", value: 0, id: Math.random().toString() },
    { label: "May", value: 0, id: Math.random().toString() },
    { label: "Jun", value: 0, id: Math.random().toString() },
    { label: "Jul", value: 0, id: Math.random().toString() },
    { label: "Aug", value: 0, id: Math.random().toString() },
    { label: "Sep", value: 0, id: Math.random().toString() },
    { label: "Oct", value: 0, id: Math.random().toString() },
    { label: "Nov", value: 0, id: Math.random().toString() },
    { label: "Dec", value: 0, id: Math.random().toString() },
  ];

  for (const expense of props.expenses) {
    const expenseMonth = expense.date.getMonth(); //starting at 0
    chartDataPoints[expenseMonth].value += expense.amount;
  }

  return <Chart dataPoints={chartDataPoints} />;
}

export default ExpensesChart;
