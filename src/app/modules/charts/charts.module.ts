import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LineChartComponent } from './line-chart/line-chart.component';
import { BarChartComponent } from "./bar-chart/bar-chart.component";
import {NgChartsModule} from "ng2-charts";

@NgModule({
  declarations: [
    LineChartComponent,
    BarChartComponent,
  ],
  exports: [
    LineChartComponent,
    BarChartComponent,
  ],
  imports: [
    CommonModule,
    NgChartsModule,
  ]
})
export class ChartsModule { }
