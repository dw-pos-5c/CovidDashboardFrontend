import {Component, EventEmitter, OnInit} from '@angular/core';
import {ChartData} from "chart.js";
import {BackendConnectorService} from "../../core/backend-connector.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  ageGroupData!: ChartData<'bar'>;
  deathsGendered!: ChartData<'pie'>;

  constructor(private backend: BackendConnectorService) {
    backend.getAgeGroup().then(result => {
      // @ts-ignore
      this.ageGroupData = result;
    })

    backend.getDeathsGendered().then(result => {
      // @ts-ignore
      this.deathsGendered = result;
    })
  }

  ngOnInit(): void {
  }

}
