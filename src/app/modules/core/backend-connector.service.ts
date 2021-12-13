import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import TimelineDaily from "../../models/TimelineDaily";
import AgeGroup from "../../models/AgeGroup";

@Injectable()
export class BackendConnectorService {

  private url = 'http://localhost:5000/covid';

  constructor(private http: HttpClient) { }

  public getTimelineDaily(): Promise<TimelineDaily> {
    return this.http.get<TimelineDaily>(`${this.url}/daily`).toPromise();
  }

  public getAgeGroup(): Promise<AgeGroup> {
    return this.http.get<AgeGroup>(`${this.url}/agegroup`).toPromise();
  }

  public getAgeGroupGendered(): Promise<AgeGroup> {
    return this.http.get<AgeGroup>(`${this.url}/agegroup-gendered`).toPromise();
  }
}
