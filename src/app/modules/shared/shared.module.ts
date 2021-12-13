import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DailyCasesComponent } from './daily-cases/daily-cases.component';
import {NgChartsModule} from "ng2-charts";
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { LoginDialogComponent } from './login-dialog/login-dialog.component';
import {FormsModule} from "@angular/forms";
import {DialogModule} from "primeng/dialog";

@NgModule({
  declarations: [
    DashboardComponent,
    DailyCasesComponent,
    BarChartComponent,
    LoginDialogComponent,
  ],
    exports: [
        LoginDialogComponent,
        BarChartComponent
    ],
  imports: [
    CommonModule,
    NgChartsModule,
    FormsModule,
    DialogModule,
  ]
})
export class SharedModule { }
