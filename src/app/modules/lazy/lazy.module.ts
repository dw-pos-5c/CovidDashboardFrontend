import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyRoutingModule } from './lazy-routing.module';
import { SecretDataComponent } from './secret-data/secret-data.component';
import {SharedModule} from "../shared/shared.module";


@NgModule({
  declarations: [
    SecretDataComponent
  ],
    imports: [
        CommonModule,
        LazyRoutingModule,
        SharedModule
    ]
})
export class LazyModule { }
