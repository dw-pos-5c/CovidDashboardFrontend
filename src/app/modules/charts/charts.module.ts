import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LineChartComponent } from './line-chart/line-chart.component';
import { BarChartComponent } from "./bar-chart/bar-chart.component";
import {NgChartsModule} from "ng2-charts";
import { PieChartComponent } from './pie-chart/pie-chart.component';

@NgModule({
  declarations: [
    LineChartComponent,
    BarChartComponent,
    PieChartComponent,
  ],
  exports: [
    LineChartComponent,
    BarChartComponent,
    PieChartComponent,
  ],
  imports: [
    CommonModule,
    NgChartsModule,
  ]
})
export class ChartsModule { }
