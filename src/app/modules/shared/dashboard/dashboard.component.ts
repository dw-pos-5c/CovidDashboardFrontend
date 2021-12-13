import {Component, EventEmitter, OnInit} from '@angular/core';
import {ChartData} from "chart.js";
import {BackendConnectorService} from "../../core/backend-connector.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  ageGroupEmitter: EventEmitter<object> = new EventEmitter<object>();
  ageGroupData: ChartData<'bar'> = {
    labels: [],
    datasets: [
      { data: [], label: '' },
    ],
  };

  constructor(private backend: BackendConnectorService) {
    backend.getAgeGroup().then(result => {
      this.ageGroupData.labels = result.labels;
      // @ts-ignore
      this.ageGroupData.datasets = result.datasets;
      this.ageGroupEmitter.emit(this.ageGroupData);
    })
  }

  ngOnInit(): void {
  }

}
