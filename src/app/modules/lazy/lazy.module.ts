import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyRoutingModule } from './lazy-routing.module';
import { SecretDataComponent } from './secret-data/secret-data.component';
import {ChartsModule} from "../charts/charts.module";

@NgModule({
  declarations: [
    SecretDataComponent
  ],
    imports: [
        CommonModule,
        LazyRoutingModule,
        ChartsModule,
    ]
})
export class LazyModule { }
