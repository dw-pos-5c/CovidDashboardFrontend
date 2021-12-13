import { Component } from '@angular/core';
import {AuthenticationService} from "./modules/core/authentication.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CovidDashboard';

  dialogIsVisible = false;

  constructor(private auth: AuthenticationService, private router: Router) {

  }

  login(password: string): void {
    if (password) {
      this.auth.login(password).then(x => {
        console.log(`Logged in with token: ${x.token}`);
      });
    }
    this.dialogIsVisible = false;
  }

  logout(): void {
    this.auth.token = '';
  }

  isLoggedIn(): boolean {
    return this.auth.token.length > 0;
  }

  secretData(): void {
    if (this.isLoggedIn()) {
      this.router.navigateByUrl('secret');
    } else {
      this.showDialog();
    }
  }

  showDialog(): void {
    this.dialogIsVisible = true;
  }
}
