import { Component } from '@angular/core';
import { measureFactory } from '@sisense/sdk-data';
import * as DM from '../../sample-healthcare';

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrl: './analytics.component.css'
})
export class AnalyticsComponent {
  chart = {
    chartType: 'line' as const,
    dataSet: DM.DataSource,
    dataOptions: {
      category: [DM.Doctors.Specialty],
      value: [measureFactory.average(DM.Admissions.TimeofStay, 'Average time of stay')],
      breakBy: [],
    },
    styleOptions: {
      legend: {
        enabled: true,
        position: 'bottom',
      },
    },
  };

  logArguments(...args: any[]) {
    console.log(args);
  }
}
