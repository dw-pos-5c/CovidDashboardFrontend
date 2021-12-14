import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {BaseChartDirective} from "ng2-charts";
import {ChartConfiguration} from "chart.js";

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {

  @ViewChild(BaseChartDirective) chart?: BaseChartDirective;

  chartData!: ChartConfiguration['data'];

  @Input()
  public set input(val: ChartConfiguration['data']) {
    this.chartData = val;
    this.chart?.update();
  }

  constructor() {
  }

  ngOnInit(): void {
  }

}
