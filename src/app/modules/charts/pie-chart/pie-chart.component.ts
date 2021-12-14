import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {BaseChartDirective} from "ng2-charts";
import {ChartConfiguration, ChartData} from "chart.js";

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {

  @ViewChild(BaseChartDirective) chart?:  BaseChartDirective;

  chartData!: ChartData<'pie'>;

  chartOptions: ChartConfiguration['options'] = {
    responsive: false,
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
    }
  };

  @Input()
  public set input(val: ChartData<'pie'>) {
    this.chartData = val;
    this.chart?.update();
  }

  constructor() { }

  ngOnInit(): void {
  }

}
