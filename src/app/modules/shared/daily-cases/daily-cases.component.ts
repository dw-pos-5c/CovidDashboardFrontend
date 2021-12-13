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

  @ViewChild(BaseChartDirective) chart?: BaseChartDirective;

  chartData: ChartConfiguration['data'] = {
    datasets: [
      {
        data: [],
        label: '',
      },
    ],
    labels: [],
  };

  constructor(private backend: BackendConnectorService) {
    backend.getTimelineDaily().then(result => {
      this.chartData.labels = result.labels;
      this.chartData.datasets[0].data = result.data;
      this.chartData.datasets[0].label = 'Daily infections';
      this.chart?.update();
    });
  }

  ngOnInit(): void {
  }

}
