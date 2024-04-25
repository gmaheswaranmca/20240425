
import { BarChart } from "@sisense/sdk-ui";
import { exampleData } from "./../models/exampleData";

export default function BarChartExample() {
  return (
    <BarChart dataSet={exampleData.data}
              dataOptions={{
                category: [exampleData.years],
                value: [exampleData.quantity, exampleData.units],
                breakBy: [],
              }}
    />
  );
}