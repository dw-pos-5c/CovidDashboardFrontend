import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import Auth from "../../models/Auth";

@Injectable()
export class AuthenticationService {

  private url = 'http://localhost:5000/auth';

  token = '';

  constructor(private http: HttpClient) { }

  login(password: string): Promise<Auth> {
    const auth = this.http.get<Auth>(`${this.url}/${password}`).toPromise();
    auth.then(x => {
      if (x.success) {
        this.token = x.token;
      }
    });
    return auth;
  }
}
