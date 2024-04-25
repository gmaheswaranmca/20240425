import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SISENSE_CONTEXT_CONFIG_TOKEN, SdkUiModule, SisenseContextConfig } from '@sisense/sdk-ui-angular';
import { AnalyticsComponent } from './analytics/analytics.component';
import { BarChartExampleComponent } from './bar-chart-example/bar-chart-example.component';
import { ColumnChartExampleComponent } from './column-chart-example/column-chart-example.component';

export const SISENSE_CONTEXT_CONFIG: SisenseContextConfig = {
  url: 'https://madtechbidev.isocrates.com', // replace with the URL of your Sisense instance
  token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjYxMDFjMDEwZTE0YjgwMDJkYzM4MjU0IiwiYXBpU2VjcmV0IjoiZGEzZjhkMjctYjQwZS0xMGQyLTkyNjEtNDVkNWUzNGY3ODQ1IiwiYWxsb3dlZFRlbmFudHMiOlsiNWZkZmFiOGQ2YTMyYTcwMDFhYzA3YTg4Il0sInRlbmFudElkIjoiNWZkZmFiOGQ2YTMyYTcwMDFhYzA3YTg4In0.Mpxj89js0BrJIaWnGuCOoqscbff7hJt-UArG2XrkMK8', // replace with the API token of your user account
};

@NgModule({
  declarations: [
    AppComponent,
    AnalyticsComponent,
    BarChartExampleComponent,
    ColumnChartExampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SdkUiModule
  ],
  providers: [
    { provide: SISENSE_CONTEXT_CONFIG_TOKEN, useValue: SISENSE_CONTEXT_CONFIG },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
