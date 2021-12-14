import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DailyCasesComponent } from './daily-cases/daily-cases.component';
import { LoginDialogComponent } from './login-dialog/login-dialog.component';
import {FormsModule} from "@angular/forms";
import {DialogModule} from "primeng/dialog";
import {ChartsModule} from "../charts/charts.module";

@NgModule({
  declarations: [
    DashboardComponent,
    DailyCasesComponent,
    LoginDialogComponent,
  ],
  exports: [
      LoginDialogComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    DialogModule,
    ChartsModule,
  ]
})
export class SharedModule { }
