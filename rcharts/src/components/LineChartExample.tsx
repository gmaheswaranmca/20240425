
import { LineChart, LineStyleOptions } from "@sisense/sdk-ui";
import { exampleData } from "./../models/exampleData";

const styleOptions = {
  legend: {
    position: "bottom",
  },
  xAxis: {
    title: {
      enabled: true,
      text: "Year",
    },
  },
  yAxis: {
    title: {
      enabled: true,
      text: "Quantity",
    },
  },
  y2Axis: {
    title: {
      enabled: true,
      text: "Units",
    },
    enabled: true,
  },
} as LineStyleOptions;

export default function LineChartExample() {
  return (
    <LineChart dataSet={exampleData.data}
                 dataOptions={{
                   category: [exampleData.years],
                   value: [exampleData.quantity,
                     { column: exampleData.units, showOnRightAxis: true }],
                   breakBy: [],
                 }}
                 styleOptions={styleOptions}
    />
  );
}