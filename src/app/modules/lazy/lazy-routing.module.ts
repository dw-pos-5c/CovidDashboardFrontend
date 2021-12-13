import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SecretDataComponent} from "./secret-data/secret-data.component";

const routes: Routes = [
  {
    path: '**',
    component: SecretDataComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyRoutingModule { }
