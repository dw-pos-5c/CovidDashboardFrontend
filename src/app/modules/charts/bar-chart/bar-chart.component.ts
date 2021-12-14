import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {BaseChartDirective} from "ng2-charts";
import {ChartConfiguration, ChartData} from "chart.js";

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {

  @ViewChild(BaseChartDirective) chart?: BaseChartDirective;

  chartData: ChartData<'bar'>= {
    labels: [],
    datasets: [],
  };

  @Input()
  public set input(val: object) {
    // @ts-ignore
    this.chartData = val;
    this.chart?.update();
  }

  barChartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: {
      x: {},
      y: {
        min: 10
      }
    },
    plugins: {
      legend: {
        display: true,
      },
    }
  };

  constructor() {
  }

  ngOnInit(): void {
  }

}
