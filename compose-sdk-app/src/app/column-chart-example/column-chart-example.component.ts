import { Component } from '@angular/core';
import { filterFactory, measureFactory, type Filter } from '@sisense/sdk-data';
    import * as DM from '../../sample-ecommerce'; // generated with @sisense/sdk-cli

@Component({
  selector: 'app-column-chart-example',
  templateUrl: './column-chart-example.component.html',
  styleUrl: './column-chart-example.component.css'
})
export class ColumnChartExampleComponent { 
    DM = DM;
        membersFilter = filterFactory.members(DM.Category.Category, []);
        
        dataOptions = {
            category: [DM.Category.Category],
            value: [measureFactory.sum(DM.Commerce.Revenue, 'Revenue')],
            breakBy: []
        };

        onMembersFilterChange({ filter }: { filter: Filter | null }) {
            if (!filter) return;
            this.membersFilter = filter;
        }
}
