import {Component, EventEmitter, OnInit} from '@angular/core';
import {BackendConnectorService} from "../../core/backend-connector.service";
import {ChartData} from "chart.js";

@Component({
  selector: 'app-secret-data',
  templateUrl: './secret-data.component.html',
  styleUrls: ['./secret-data.component.css']
})
export class SecretDataComponent implements OnInit {

  ageGroupGenderedEmitter: EventEmitter<object> = new EventEmitter<object>();
  ageGroupGenderedData: ChartData<'bar'> = {
    labels: [],
    datasets: [
      { data: [], label: '' },
    ]
  };

  constructor(private backend: BackendConnectorService) {
    backend.getAgeGroupGendered().then(result => {
      this.ageGroupGenderedData.labels = result.labels;
      // @ts-ignore
      this.ageGroupGenderedData.datasets = result.datasets;
      this.ageGroupGenderedEmitter.emit(this.ageGroupGenderedData);
    })
  }

  ngOnInit(): void {
  }

}
