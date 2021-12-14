import {Component, OnInit} from '@angular/core';
import {BackendConnectorService} from "../../core/backend-connector.service";
import {ChartConfiguration, ChartData} from "chart.js";

@Component({
  selector: 'app-secret-data',
  templateUrl: './secret-data.component.html',
  styleUrls: ['./secret-data.component.css']
})
export class SecretDataComponent implements OnInit {

  ageGroupGenderedData!: ChartData<'bar'>;
  deathsDaily!: ChartConfiguration['data'];
  casesDailyCounty!: ChartConfiguration['data'];

  constructor(private backend: BackendConnectorService) {
    backend.getAgeGroupGendered().then(result => {
      // @ts-ignore
      this.ageGroupGenderedData = result;
    });

    backend.getDeathsDaily().then(result => {
      // @ts-ignore
      this.deathsDaily = result;
    });

    backend.getCasesCounty().then(result => {
      // @ts-ignore
      this.casesDailyCounty = result;
      console.log(result);
    })
  }

  ngOnInit(): void {
  }

}
