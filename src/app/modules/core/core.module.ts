import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BackendConnectorService} from "./backend-connector.service";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {AuthenticationService} from "./authentication.service";
import {AuthInterceptor} from "./auth.interceptor";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  providers: [
    BackendConnectorService,
    AuthenticationService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
})
export class CoreModule { }
