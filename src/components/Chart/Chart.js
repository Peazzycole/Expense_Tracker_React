import ChartBar from "./ChartBar";
import "./Chart.css";

function Chart(props) {
  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value);
  const maxAmount = Math.max(...dataPointValues);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => {
        return (
          <ChartBar
            key={dataPoint.id}
            value={dataPoint.value}
            maxValue={maxAmount}
            label={dataPoint.label}
          />
        );
      })}
    </div>
  );
}

export default Chart;
