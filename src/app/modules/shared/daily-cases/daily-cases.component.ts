import {Component, OnInit, ViewChild} from '@angular/core';
import {BackendConnectorService} from "../../core/backend-connector.service";
import {ChartConfiguration} from "chart.js";
import {BaseChartDirective} from "ng2-charts";

@Component({
  selector: 'app-daily-cases',
  templateUrl: './daily-cases.component.html',
  styleUrls: ['./daily-cases.component.css']
})
export class DailyCasesComponent implements OnInit {

  chartData: ChartConfiguration['data'] = {
    labels: [],
    datasets: [],
  };

  constructor(private backend: BackendConnectorService) {
    backend.getTimelineDaily().then(result => {
      // @ts-ignore
      this.chartData = result;
    });
  }

  ngOnInit(): void {
  }

}
