import { Component } from '@angular/core';
import { exampleData } from '../../example-data';

@Component({
  selector: 'app-bar-chart-example',
  templateUrl: './bar-chart-example.component.html',
  styleUrl: './bar-chart-example.component.css'
})
export class BarChartExampleComponent {
  dataSet = exampleData.data;
        dataOptions = {
            category: [exampleData.years],
            value: [exampleData.quantity, exampleData.units],
            breakBy: []
        };
}
