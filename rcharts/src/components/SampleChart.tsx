import { Chart } from '@sisense/sdk-ui';
import * as DM from '../models/sample-ecommerce';
import { measureFactory } from '@sisense/sdk-data';

export function SampleChart () {
    return (
        <Chart
          dataSet={DM.DataSource}
          chartType={'line'}
          dataOptions={{
            category: [DM.Commerce.AgeRange],
            value: [measureFactory.sum(DM.Commerce.Revenue)],
            breakBy: [],
          }}
          styleOptions={{
            legend: {
              enabled: true,
              position: 'bottom',
            },
          }}
          onDataPointClick={(point, nativeEvent) => {
            console.log('clicked', point, nativeEvent);
          }}
        />
    )
}