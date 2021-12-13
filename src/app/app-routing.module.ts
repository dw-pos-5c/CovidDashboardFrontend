import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from "./modules/shared/dashboard/dashboard.component";
import {AuthGuard} from "./modules/core/auth.guard";

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'secret',
    loadChildren: () => import("./modules/lazy/lazy.module").then(x => x.LazyModule),
    canActivate: [AuthGuard],
  },
  {
    path: '**',
    redirectTo: 'dashboard'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
