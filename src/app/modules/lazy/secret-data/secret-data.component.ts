import {Component, EventEmitter, OnInit} from '@angular/core';
import {BackendConnectorService} from "../../core/backend-connector.service";
import {ChartData} from "chart.js";

@Component({
  selector: 'app-secret-data',
  templateUrl: './secret-data.component.html',
  styleUrls: ['./secret-data.component.css']
})
export class SecretDataComponent implements OnInit {

  ageGroupGenderedData!: ChartData<'bar'>;

  constructor(private backend: BackendConnectorService) {
    backend.getAgeGroupGendered().then(result => {
      // @ts-ignore
      this.ageGroupGenderedData = result;
    })
  }

  ngOnInit(): void {
  }

}
